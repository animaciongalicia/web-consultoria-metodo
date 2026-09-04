import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { BLOG_POSTS, getVisiblePosts, getLatestPosts } from "@/lib/posts";

// Revalidar cada 24h para que los artículos programados aparezcan en su fecha
export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Blog — Consultoría Método | Artículos sobre rentabilidad y gestión empresarial",
  description:
    "Artículos prácticos sobre rentabilidad, gestión empresarial y consultoría de negocios para pymes en España.",
  alternates: {
    canonical: "https://consultoriametodo.es/blog",
  },
};

const categoryColors: Record<
  string,
  { bg: string; text: string; border: string; shadow: string }
> = {
  Rentabilidad: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    shadow: "hover:shadow-emerald-100",
  },
  Clientes: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    shadow: "hover:shadow-blue-100",
  },
  Organización: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    shadow: "hover:shadow-violet-100",
  },
  Estrategia: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    shadow: "hover:shadow-amber-100",
  },
  "Control y gestión": {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
    shadow: "hover:shadow-cyan-100",
  },
  Crecimiento: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    shadow: "hover:shadow-rose-100",
  },
  Marketing: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    shadow: "hover:shadow-orange-100",
  },
  "Caso de éxito": {
    bg: "bg-teal-50",
    text: "text-teal-700",
    border: "border-teal-200",
    shadow: "hover:shadow-teal-100",
  },
  Ventas: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
    shadow: "hover:shadow-indigo-100",
  },
  "Servicios profesionales": {
    bg: "bg-slate-50",
    text: "text-slate-700",
    border: "border-slate-200",
    shadow: "hover:shadow-slate-100",
  },
};

const posts = BLOG_POSTS;

// Filtrar artículos por fecha de publicación (para publicación programada)
const visiblePosts = getVisiblePosts();

// Últimos publicados ordenados por fecha descendente
const latestPosts = getLatestPosts(10);

const categories = Object.keys(categoryColors);

export default function Blog() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pb-12 pt-32 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Artículos prácticos sobre rentabilidad, gestión y mejora de
            negocios. Sin teoría vacía — solo ideas que puedes aplicar hoy.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: Grid + Sidebar */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          {/* Columna principal - Posts */}
          <div>
            {/* Últimos publicados — bloque destacado al inicio */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-600 mb-4">
                Últimos publicados
              </h2>
              <div className="rounded-xl border-2 border-accent-200 bg-gradient-to-br from-accent-50/80 to-white p-4 md:p-5">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {latestPosts.slice(0, 6).map((post) => {
                    const colors = categoryColors[post.category] || {
                      bg: "bg-gray-50",
                      text: "text-gray-600",
                    };
                    return (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-lg border border-accent-200/60 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-accent-400"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 flex-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-600 group-hover:gap-1.5 transition-all">
                          Leer artículo
                          <span aria-hidden="true">→</span>
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Guías completas — pilares SEO */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-600 mb-4">
                Guías completas
              </h2>
              <div className="rounded-xl border-2 border-accent-200 bg-gradient-to-br from-accent-50/80 to-white p-4 md:p-5">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {visiblePosts.filter((p) => p.isPillar).map((post) => {
                    const colors = categoryColors[post.category];
                    return (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-lg border border-accent-200/60 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-accent-300"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 flex-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-600 group-hover:gap-1.5 transition-all">
                          Leer guía completa
                          <span aria-hidden="true">&rarr;</span>
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Artículos de apoyo agrupados por categoría */}
            {categories.filter((cat) => visiblePosts.some((p) => !p.isPillar && p.category === cat)).map((cat) => {
              const colors = categoryColors[cat];
              const catSlug = cat.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              const catPosts = visiblePosts.filter((p) => !p.isPillar && p.category === cat);
              return (
                <div key={cat} id={catSlug} className="mb-10 scroll-mt-24">
                  <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}>
                      {cat}
                    </span>
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {catPosts.map((post) => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={`group flex flex-col rounded-xl border bg-white p-5 shadow-sm transition-all hover:shadow-lg ${colors.border} ${colors.shadow}`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 group-hover:text-primary-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                          <span className="text-xs text-gray-400">
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                            Leer
                            <span aria-hidden="true">&rarr;</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <aside className="mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Navegación rápida por categorías */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Temas
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const colors = categoryColors[cat];
                    const postCount = visiblePosts.filter(
                      (p) => p.category === cat
                    ).length;
                    return (
                      <a
                        key={cat}
                        href={`#${cat.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${colors.bg} ${colors.text}`}
                      >
                        {cat}
                        <span className="opacity-60">({postCount})</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Últimos publicados */}
              <div className="rounded-xl border-2 border-accent-200 bg-gradient-to-br from-accent-50/60 to-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-700">
                  Últimos publicados
                </h3>
                <p className="mt-1 text-[11px] text-gray-500">
                  Ordenados por fecha, más recientes primero
                </p>
                <nav className="mt-3 space-y-2">
                  {latestPosts.map((post) => {
                    const colors = categoryColors[post.category] || {
                      bg: "bg-gray-50",
                      text: "text-gray-600",
                    };
                    return (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block rounded-lg border border-accent-100 bg-white px-3 py-2.5 transition-all hover:border-accent-300 hover:bg-accent-50/40"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {post.date}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-semibold leading-snug text-gray-800 group-hover:text-primary-700 transition-colors">
                          {post.title}
                        </p>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Índice de artículos */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Todos los artículos
                </h3>
                <nav className="mt-3 space-y-2">
                  {visiblePosts.map((post) => {
                    const colors = categoryColors[post.category] || {
                      bg: "bg-gray-50",
                      text: "text-gray-600",
                    };
                    return (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block rounded-lg border border-gray-100 px-3 py-2.5 transition-all hover:border-primary-200 hover:bg-primary-50/30"
                      >
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                        >
                          {post.category}
                        </span>
                        <p className="mt-1 text-xs font-semibold leading-snug text-gray-700 group-hover:text-primary-700 transition-colors">
                          {post.title}
                        </p>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-primary-900 to-primary-950 p-5 text-center shadow-md">
                <p className="text-sm font-bold text-white">
                  ¿Prefieres que lo analicemos juntos?
                </p>
                <p className="mt-2 text-xs text-primary-200 leading-relaxed">
                  30 minutos de conversación gratuita sobre tu negocio. Sin
                  compromiso.
                </p>
                <a
                  href="/diagnostico-negocio"
                  className="mt-4 inline-block w-full rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-700"
                >
                  WhatsApp directo
                </a>
              </div>

              {/* Sobre el autor */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Sobre el autor
                </h3>
                <p className="mt-3 text-sm font-semibold text-gray-900">
                  {SITE.consultant}
                </p>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  Consultor de negocios con más de 25 años de experiencia
                  ayudando a pymes en Galicia y en toda España a mejorar su
                  rentabilidad. Presencial y por videollamada.
                </p>
                <a
                  href="/experiencia-sectores-casos"
                  className="mt-3 inline-block text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  Ver experiencia y casos reales &rarr;
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Prefieres que analicemos tu negocio juntos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Cada negocio es diferente. Solicita un diagnóstico personalizado y
            descubre exactamente qué está frenando tus resultados.
          </p>
          <a
            href="/diagnostico-negocio"
            className="btn-primary mt-8 inline-block"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
