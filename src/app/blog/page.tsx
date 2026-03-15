import type { Metadata } from "next";
import { SITE } from "@/lib/content";

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
};

const posts = [
  {
    slug: "por-que-no-funciona-la-publicidad-en-mi-negocio",
    title:
      "Por qué muchas empresas tiran el dinero en marketing (y cómo evitarlo)",
    excerpt:
      "Frustración con agencias, publicidad sin estrategia y dinero perdido. Descubre cómo saber si tu marketing funciona y un sistema práctico para evaluar cada euro que inviertes.",
    date: "13 marzo 2025",
    category: "Marketing",
    readTime: "12 min",
  },
  {
    slug: "como-hacer-crecer-una-empresa-pequena",
    title:
      "Tu empresa está estancada: cómo volver a crecer sin volverte loco",
    excerpt:
      "Cuando un negocio deja de crecer, el problema casi nunca es el mercado. Detecta oportunidades, supera el estancamiento y diseña un plan estratégico simple para volver a avanzar.",
    date: "13 marzo 2025",
    category: "Crecimiento",
    readTime: "14 min",
  },
  {
    slug: "indicadores-clave-de-una-empresa",
    title:
      "Qué números debe controlar cualquier empresa para no ir a ciegas",
    excerpt:
      "Los 8 indicadores clave que todo empresario debe vigilar cada mes. KPIs básicos, cómo analizarlos, tabla de referencia y un ejemplo real que cambió la rentabilidad de una pyme.",
    date: "13 marzo 2025",
    category: "Control y gestión",
    readTime: "15 min",
  },
  {
    slug: "como-tomar-decisiones-en-un-negocio",
    title:
      "Las decisiones que están frenando tu negocio (aunque no te des cuenta)",
    excerpt:
      "Soledad, miedo, decisiones emocionales y falta de claridad estratégica. Descubre qué bloquea a los empresarios y cómo aprender a pensar con método para desbloquear tu negocio.",
    date: "13 marzo 2025",
    category: "Estrategia",
    readTime: "13 min",
  },
  {
    slug: "como-organizar-empresa-pequena-salir-autoempleo",
    title:
      "Por qué trabajas todo el día y tu negocio no crece (y cómo salir del autoempleo)",
    excerpt:
      "Procesos, delegación y método práctico para dejar de ser esclavo de tu negocio. Cómo organizar una empresa pequeña para que funcione sin depender de ti las 24 horas.",
    date: "13 marzo 2025",
    category: "Organización",
    readTime: "14 min",
  },
  {
    slug: "como-conseguir-clientes-para-tu-negocio",
    title:
      "Cómo conseguir más clientes para tu negocio sin gastar una fortuna en publicidad",
    excerpt:
      "Estrategias reales para captar clientes de forma constante: marketing local, alianzas, mejora de conversión y seguimiento. Sin depender del boca a boca ni arruinarte en publicidad.",
    date: "13 marzo 2025",
    category: "Clientes",
    readTime: "13 min",
  },
  {
    slug: "por-que-tu-empresa-factura-pero-no-gana-dinero",
    title: "Por qué tu empresa factura pero no gana dinero",
    excerpt:
      "Errores habituales que destruyen la rentabilidad de las pymes, cómo calcular si tu negocio realmente gana dinero y decisiones que mejoran los beneficios rápidamente.",
    date: "13 marzo 2025",
    category: "Rentabilidad",
    readTime: "12 min",
  },
];

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
            {/* Post destacado - integrado pero con más presencia */}
            <a
              href={`/blog/${posts[0].slug}`}
              className={`group mb-8 block rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg md:p-8 ${categoryColors[posts[0].category].border} ${categoryColors[posts[0].category].shadow}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[posts[0].category].bg} ${categoryColors[posts[0].category].text}`}
                >
                  {posts[0].category}
                </span>
                <span className="text-xs text-gray-400">
                  {posts[0].date}
                </span>
                <span className="text-xs text-gray-400">
                  {posts[0].readTime} de lectura
                </span>
                <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-700">
                  Último artículo
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors md:text-2xl">
                {posts[0].title}
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                Leer artículo
                <span aria-hidden="true">&rarr;</span>
              </p>
            </a>

            {/* Grid de posts restantes */}
            <div className="grid gap-5 sm:grid-cols-2">
              {posts.slice(1).map((post) => {
                const colors = categoryColors[post.category];
                return (
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
                );
              })}
            </div>
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
                    const postCount = posts.filter(
                      (p) => p.category === cat
                    ).length;
                    return (
                      <a
                        key={cat}
                        href={`#${cat.toLowerCase().replace(/ /g, "-")}`}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${colors.bg} ${colors.text}`}
                      >
                        {cat}
                        <span className="opacity-60">({postCount})</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Índice de artículos */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Todos los artículos
                </h3>
                <nav className="mt-3 space-y-2">
                  {posts.map((post) => {
                    const colors = categoryColors[post.category];
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
                  rentabilidad. Presencial y online.
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
