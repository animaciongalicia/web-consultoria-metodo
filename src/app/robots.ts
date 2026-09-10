import type { MetadataRoute } from "next";

const BASE_URL = "https://consultoriametodo.es";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Regla universal — cubre Googlebot, Bingbot, OAI-SearchBot,
        // ClaudeBot, PerplexityBot, GPTBot, Google-Extended, CCBot, etc.
        // No añadimos listas explícitas porque "*" ya los cubre y añadir
        // reglas por bot solo introduce riesgo de contradicciones futuras.
        userAgent: "*",
        allow: "/",
        // Bloqueamos endpoints internos (API de contacto). No hay contenido
        // indexable ahí y evitamos que se consuma quota de rastreo.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
