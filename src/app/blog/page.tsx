import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog — Consultoría Método | Artículos sobre rentabilidad y gestión empresarial",
  description:
    "Artículos prácticos sobre rentabilidad, gestión empresarial y consultoría de negocios para pymes en A Coruña y Galicia.",
  alternates: {
    canonical: "https://consultoriametodo.es/blog",
  },
};

const categoryColors: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
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

export default function Blog() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Artículos prácticos sobre rentabilidad, gestión y mejora de
            negocios. Sin teoría vacía — solo ideas que puedes aplicar hoy.
          </p>
        </div>
      </section>

      {/* POST DESTACADO (el más reciente) */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <a
            href={`/blog/${posts[0].slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl md:flex"
          >
            {/* Barra lateral de color */}
            <div
              className={`flex items-center justify-center px-6 py-4 md:w-2 md:px-0 md:py-0 ${categoryColors[posts[0].category].bg}`}
            />
            <div className="flex-1 p-6 md:p-8 lg:p-10">
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
              </div>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors md:text-3xl">
                {posts[0].title}
              </h2>
              <p className="mt-3 text-gray-600 md:text-lg leading-relaxed">
                {posts[0].excerpt}
              </p>
              <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                Leer artículo
                <span aria-hidden="true">&rarr;</span>
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* GRID DE POSTS */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-xl font-bold text-gray-900 md:text-2xl">
            Todos los artículos
          </h2>
          <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => {
              const colors = categoryColors[post.category];
              return (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg ${colors.border} ${colors.shadow}`}
                >
                  {/* Etiqueta de categoría */}
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

                  {/* Título */}
                  <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h3>

                  {/* Extracto */}
                  <p className="mt-3 flex-1 text-sm text-gray-500 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer de la card */}
                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs text-gray-400">{post.date}</span>
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
