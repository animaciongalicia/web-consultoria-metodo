import { NextResponse } from "next/server";
import { getLatestPosts } from "@/lib/posts";
import { SITE } from "@/lib/content";

const BASE_URL = "https://consultoriametodo.es";

// RSS 2.0 dinámico — se regenera en cada build.
// Descubierto vía <link rel="alternate" type="application/rss+xml"> en layout.
export const dynamic = "force-static";

const MONTHS_ES_TO_NUM: Record<string, number> = {
  enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
  julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
};

function toRFC822(post: { publishDate?: string; date: string }): string {
  // Preferir publishDate ISO. Si no, parsear "10 abril 2025".
  let d: Date;
  if (post.publishDate) {
    d = new Date(post.publishDate + "T09:00:00Z");
  } else {
    const parts = post.date.toLowerCase().split(" ");
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = MONTHS_ES_TO_NUM[parts[1]];
      const year = parseInt(parts[2], 10);
      if (!Number.isNaN(day) && month !== undefined && !Number.isNaN(year)) {
        d = new Date(Date.UTC(year, month, day, 9, 0, 0));
      } else {
        d = new Date();
      }
    } else {
      d = new Date();
    }
  }
  return d.toUTCString();
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getLatestPosts(30);
  const buildDate = new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRFC822(post)}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.excerpt)}</description>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${escapeXml(
        SITE.consultant
      )}</dc:creator>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Blog</title>
    <link>${BASE_URL}</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE.description)}</description>
    <language>es-ES</language>
    <copyright>Copyright © ${new Date().getFullYear()} ${escapeXml(
    SITE.name
  )}</copyright>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>Next.js — Consultoría Método</generator>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
