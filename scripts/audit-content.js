const fs = require("fs");
const path = require("path");
const Anthropic = require("@anthropic-ai/sdk").default;

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");
const REPORT_PATH = path.join(__dirname, "..", "audit-report.md");

function extractInternalLinks(content) {
  const linkPattern = /href=["']\/(blog\/[^"'#?]+|[^"'#?/][^"'#?]*)["']/g;
  const links = new Set();
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    links.add("/" + match[1].replace(/\/$/, ""));
  }
  return [...links];
}

function scanArticles() {
  const articles = [];
  const dirs = fs.readdirSync(BLOG_DIR).filter((d) => {
    const full = path.join(BLOG_DIR, d);
    return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "page.tsx"));
  });

  for (const dir of dirs) {
    const filePath = path.join(BLOG_DIR, dir, "page.tsx");
    const content = fs.readFileSync(filePath, "utf-8");

    const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const title = titleMatch
      ? titleMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
      : dir;

    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    const description = descMatch ? descMatch[1] : "";

    const outbound = extractInternalLinks(content);

    articles.push({
      slug: dir,
      path: `/blog/${dir}`,
      title,
      description,
      outboundLinks: outbound,
      inboundCount: 0,
      inboundFrom: [],
    });
  }

  for (const article of articles) {
    for (const link of article.outboundLinks) {
      const target = articles.find(
        (a) => a.path === link || link === `/blog/${a.slug}`
      );
      if (target) {
        target.inboundCount++;
        target.inboundFrom.push(article.slug);
      }
    }
  }

  return articles;
}

function generateStaticReport(articles) {
  const orphans = articles.filter((a) => a.inboundCount === 0);
  const lowInbound = articles.filter((a) => a.inboundCount === 1);
  const noOutbound = articles.filter((a) => a.outboundLinks.filter((l) => l.startsWith("/blog/")).length === 0);
  const fewOutbound = articles.filter((a) => {
    const blogLinks = a.outboundLinks.filter((l) => l.startsWith("/blog/"));
    return blogLinks.length > 0 && blogLinks.length < 2;
  });

  let report = `# Auditoría de contenido — ${new Date().toISOString().slice(0, 10)}\n\n`;
  report += `**Total artículos:** ${articles.length}\n\n`;

  report += `## Artículos huérfanos (0 enlaces entrantes)\n\n`;
  if (orphans.length === 0) {
    report += "Ninguno. Todos tienen al menos 1 enlace entrante.\n\n";
  } else {
    for (const a of orphans) {
      report += `- [\`${a.slug}\`](https://consultoriametodo.es${a.path}) — ${a.title}\n`;
    }
    report += "\n";
  }

  report += `## Artículos con solo 1 enlace entrante\n\n`;
  if (lowInbound.length === 0) {
    report += "Ninguno.\n\n";
  } else {
    for (const a of lowInbound) {
      report += `- \`${a.slug}\` ← desde: ${a.inboundFrom.join(", ")}\n`;
    }
    report += "\n";
  }

  report += `## Artículos sin enlaces salientes a otros posts\n\n`;
  if (noOutbound.length === 0) {
    report += "Ninguno.\n\n";
  } else {
    for (const a of noOutbound) {
      report += `- \`${a.slug}\`\n`;
    }
    report += "\n";
  }

  report += `## Artículos con pocos enlaces salientes (1 solo)\n\n`;
  if (fewOutbound.length === 0) {
    report += "Ninguno.\n\n";
  } else {
    for (const a of fewOutbound) {
      report += `- \`${a.slug}\` → ${a.outboundLinks.filter((l) => l.startsWith("/blog/")).join(", ")}\n`;
    }
    report += "\n";
  }

  report += `## Resumen de enlaces\n\n`;
  report += `| Artículo | Entrantes | Salientes (blog) |\n`;
  report += `|----------|-----------|------------------|\n`;
  for (const a of articles.sort((x, y) => x.inboundCount - y.inboundCount)) {
    const blogOut = a.outboundLinks.filter((l) => l.startsWith("/blog/")).length;
    report += `| \`${a.slug}\` | ${a.inboundCount} | ${blogOut} |\n`;
  }
  report += "\n";

  return report;
}

async function getClaudeSuggestions(articles) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return "\n## Sugerencias de interlinking\n\n_No se ejecutó: falta ANTHROPIC_API_KEY._\n";
  }

  const client = new Anthropic();

  const summary = articles
    .map((a) => {
      const blogOut = a.outboundLinks.filter((l) => l.startsWith("/blog/"));
      return `- ${a.slug} (${a.title}) | entrantes: ${a.inboundCount} | salientes: ${blogOut.join(", ") || "ninguno"}`;
    })
    .join("\n");

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: `Eres un experto SEO. Analiza este mapa de interlinking de un blog de consultoría empresarial y sugiere 5-8 enlaces internos nuevos que mejorarían la estructura. Cada sugerencia: "En [artículo origen], enlazar a [artículo destino] — motivo". Prioriza artículos huérfanos o con pocos enlaces.\n\n${summary}`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  return `\n## Sugerencias de interlinking (Claude)\n\n${text}\n`;
}

async function main() {
  console.log("Escaneando artículos...");
  const articles = scanArticles();
  console.log(`Encontrados ${articles.length} artículos.`);

  let report = generateStaticReport(articles);

  console.log("Solicitando sugerencias a Claude...");
  const suggestions = await getClaudeSuggestions(articles);
  report += suggestions;

  fs.writeFileSync(REPORT_PATH, report);
  console.log(`Informe generado en ${REPORT_PATH}`);
}

main().catch((err) => {
  console.error("Error en auditoría:", err);
  process.exit(1);
});
