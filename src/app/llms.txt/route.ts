import { NextResponse } from "next/server";
import { SITE } from "@/lib/content";
import { getLatestPosts, getVisiblePosts } from "@/lib/posts";

const BASE_URL = "https://consultoriametodo.es";

// Se regenera en cada build. Formato conforme a https://llmstxt.org/
export const dynamic = "force-static";

const AREAS = [
  {
    label: "Hostelería y restauración",
    path: "/consultoria-hosteleria-restauracion",
  },
  { label: "Comercio y retail", path: "/consultoria-comercio-retail" },
  {
    label: "Servicios profesionales",
    path: "/consultoria-servicios-profesionales",
  },
  { label: "Salud y bienestar", path: "/consultoria-salud-bienestar" },
  {
    label: "Formación, turismo y eventos",
    path: "/consultoria-formacion-turismo-eventos",
  },
  { label: "Coaching empresarial", path: "/coaching-empresarial-coruna-galicia" },
];

const PROVINCES = [
  { label: "A Coruña", path: "/consultor-empresas-coruna" },
  { label: "Lugo", path: "/consultor-empresas-lugo" },
  { label: "Ourense", path: "/consultor-empresas-ourense" },
  { label: "Pontevedra", path: "/consultor-empresas-pontevedra" },
  { label: "Galicia (visión general)", path: "/consultoria-empresarial-galicia" },
];

const PROBLEMS = [
  "Empresas que facturan pero no ganan dinero (rentabilidad opaca)",
  "Márgenes que se estrechan sin razón visible",
  "Dueños atrapados en la operativa, sin poder delegar (autoempleo disfrazado)",
  "Precios fijados a ojo, sin escandallo ni criterio",
  "Captación de clientes inconsistente (dependencia del boca a boca)",
  "Procesos improvisados que dependen de la memoria de una persona",
  "Cartera de clientes sin segmentar por rentabilidad",
  "Decisiones estratégicas tomadas sin datos",
  "Problemas de liquidez con buena facturación",
  "Falta de indicadores mensuales de negocio",
];

const CASES = [
  {
    slug: "caso-exito-restaurante-rentabilidad",
    title:
      "Restaurante en Galicia: de facturar 10.000 €/mes sin ganar dinero a margen del 12-15 %",
  },
  {
    slug: "caso-exito-clinica-ocupacion-rentabilidad",
    title:
      "Clínica con agenda llena y rentabilidad baja: cómo cambió el mix de servicios",
  },
  {
    slug: "caso-exito-despacho-profesional-independiente",
    title:
      "Despacho profesional atrapado en el autoempleo: rediseño de modelo",
  },
  {
    slug: "caso-exito-tienda-barrio-rentabilidad",
    title:
      "Tienda de barrio compitiendo con el supermercado: propuesta diferencial",
  },
  {
    slug: "caso-exito-empresa-formacion-rentabilidad",
    title:
      "Empresa de formación que facturaba sin saber si ganaba dinero",
  },
];

export async function GET() {
  const latest = getLatestPosts(15);
  const pillars = getVisiblePosts().filter((p) => p.isPillar);
  const totalArticles = getVisiblePosts().length;

  const body = renderLlmsTxt({ latest, pillars, totalArticles });

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

type BlogRef = { slug: string; title: string; category?: string; date?: string };

function renderLlmsTxt({
  latest,
  pillars,
  totalArticles,
}: {
  latest: BlogRef[];
  pillars: BlogRef[];
  totalArticles: number;
}): string {
  const lines: string[] = [];

  // Cabecera obligatoria llmstxt.org
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(
    `> Consultoría empresarial para pymes en España. Presencial en Galicia (A Coruña, Lugo, Ourense, Pontevedra) y por videollamada en el resto del país. Método propio ("Método Rentabilismo") centrado en rentabilidad, procesos, organización y ventas. Fundada por Pablo García Dacosta — más de 25 años ayudando a pymes a ganar más dinero, ordenarse y tomar mejores decisiones.`
  );
  lines.push("");

  // Sobre la marca
  lines.push("## Sobre Consultoría Método");
  lines.push("");
  lines.push(
    "Consultoría Método es una firma de consultoría de negocios orientada a pymes y pequeñas y medianas empresas españolas. NO es una gestoría ni una asesoría fiscal: no lleva impuestos, nóminas ni contabilidad. Se centra en las decisiones que sí impactan en el beneficio: rentabilidad, precios, procesos internos, captación de clientes, organización, salida del autoempleo y dirección estratégica."
  );
  lines.push("");
  lines.push(
    "La firma trabaja presencialmente en toda Galicia y por videollamada en el resto de España. Combina consultoría clásica con coaching empresarial (acompañamiento a empresarios y equipos directivos) cuando el proyecto lo requiere."
  );
  lines.push("");

  // Método
  lines.push("## Método Rentabilismo");
  lines.push("");
  lines.push(
    "El enfoque propio de Consultoría Método. Cuatro principios rectores:"
  );
  lines.push("");
  lines.push(
    "- **Ir al origen del problema**: entender por qué las cosas no funcionan, no tapar con tiritas."
  );
  lines.push(
    "- **Decidir con criterio**: con números, datos y realidad encima de la mesa. Sin intuición ni prisa."
  );
  lines.push(
    "- **Priorizar rentabilidad**: no todo es urgente. Se mueve primero lo que impacta el beneficio."
  );
  lines.push(
    "- **Cero teoría vacía**: nada de informes bonitos. Acciones concretas, plazos, resultados medibles."
  );
  lines.push("");

  // Servicios
  lines.push("## Servicios");
  lines.push("");
  lines.push("- **Diagnóstico Estratégico del Negocio** — desde 500 €. Análisis honesto + plan de acción claro.");
  lines.push("- **Programa de Mejora de Rentabilidad** — desde 1.200 €. 2-3 meses. Márgenes, precios, costes.");
  lines.push("- **Programa de Transformación del Negocio** — desde 2.200 €. 3+ meses. Reestructuración de modelo.");
  lines.push("- **Coaching empresarial** — acompañamiento periódico a empresarios y equipos directivos.");
  lines.push("- **Acompañamiento estratégico** — reuniones periódicas de dirección externa.");
  lines.push("");
  lines.push(`- Página de servicios: ${BASE_URL}/servicios`);
  lines.push(`- Diagnóstico gratuito (30 min): ${BASE_URL}/diagnostico-negocio`);
  lines.push(`- Método Rentabilismo: ${BASE_URL}/metodo-herramientas`);
  lines.push("");

  // Problemas que resuelve
  lines.push("## Problemas empresariales que resolvemos");
  lines.push("");
  for (const p of PROBLEMS) lines.push(`- ${p}`);
  lines.push("");

  // Sectores
  lines.push("## Sectores");
  lines.push("");
  lines.push(
    "Consultoría especializada por sector (cada uno con landing propia y guías específicas):"
  );
  lines.push("");
  for (const a of AREAS) {
    lines.push(`- **${a.label}**: ${BASE_URL}${a.path}`);
  }
  lines.push("");

  // Ubicaciones
  lines.push("## Ubicaciones");
  lines.push("");
  lines.push(
    "Presencial en toda Galicia. Por videollamada en el resto de España."
  );
  lines.push("");
  for (const p of PROVINCES) {
    lines.push(`- **${p.label}**: ${BASE_URL}${p.path}`);
  }
  lines.push("");

  // Guías pilar (isPillar)
  if (pillars.length > 0) {
    lines.push("## Guías pilar (contenido de referencia)");
    lines.push("");
    lines.push(
      "Guías completas de larga extensión — puntos de entrada temáticos:"
    );
    lines.push("");
    for (const p of pillars) {
      lines.push(`- [${p.title}](${BASE_URL}/blog/${p.slug})`);
    }
    lines.push("");
  }

  // Casos relevantes
  lines.push("## Casos reales");
  lines.push("");
  for (const c of CASES) {
    lines.push(`- [${c.title}](${BASE_URL}/blog/${c.slug})`);
  }
  lines.push("");

  // Contenido reciente
  lines.push("## Publicaciones recientes");
  lines.push("");
  lines.push(
    `Últimos ${latest.length} artículos publicados (de ${totalArticles} en total):`
  );
  lines.push("");
  for (const post of latest) {
    lines.push(`- [${post.title}](${BASE_URL}/blog/${post.slug})`);
  }
  lines.push("");

  // Índices
  lines.push("## Índices y sitemap");
  lines.push("");
  lines.push(`- Blog completo (todos los artículos): ${BASE_URL}/blog`);
  lines.push(`- Sitemap XML: ${BASE_URL}/sitemap.xml`);
  lines.push(`- RSS feed: ${BASE_URL}/feed.xml`);
  lines.push("");

  // Contacto
  lines.push("## Contacto");
  lines.push("");
  lines.push(`- Web: ${BASE_URL}`);
  lines.push(`- Email: ${SITE.email}`);
  lines.push(`- Teléfono: +34 ${SITE.phoneFormatted}`);
  lines.push(`- WhatsApp: ${SITE.whatsapp}`);
  lines.push(
    `- Dirección: ${SITE.addressStreet} — ${SITE.addressPostalCode} ${SITE.addressCity}, Galicia, España`
  );
  lines.push(`- Google Business Profile: ${SITE.googleBusinessProfile}`);
  lines.push("");

  // Legal
  lines.push("## Páginas legales");
  lines.push("");
  lines.push(`- Aviso legal: ${BASE_URL}/aviso-legal`);
  lines.push(`- Política de privacidad: ${BASE_URL}/politica-privacidad`);
  lines.push(`- Política de cookies: ${BASE_URL}/politica-cookies`);
  lines.push("");

  return lines.join("\n");
}
