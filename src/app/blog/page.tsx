import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Consultoría Método | Artículos sobre rentabilidad y gestión empresarial",
  description:
    "Artículos prácticos sobre rentabilidad, gestión empresarial y consultoría de negocios para pymes en A Coruña y Galicia.",
  alternates: {
    canonical: "https://consultoriametodo.es/blog",
  },
};

const posts = [
  {
    slug: "como-organizar-empresa-pequena-salir-autoempleo",
    title:
      "Por qué trabajas todo el día y tu negocio no crece (y cómo salir del autoempleo)",
    excerpt:
      "Procesos, delegación y método práctico para dejar de ser esclavo de tu negocio. Cómo organizar una empresa pequeña para que funcione sin depender de ti las 24 horas.",
    date: "13 marzo 2025",
  },
  {
    slug: "como-conseguir-clientes-para-tu-negocio",
    title:
      "Cómo conseguir más clientes para tu negocio sin gastar una fortuna en publicidad",
    excerpt:
      "Estrategias reales para captar clientes de forma constante: marketing local, alianzas, mejora de conversión y seguimiento. Sin depender del boca a boca ni arruinarte en publicidad.",
    date: "13 marzo 2025",
  },
  {
    slug: "por-que-tu-empresa-factura-pero-no-gana-dinero",
    title: "Por qué tu empresa factura pero no gana dinero",
    excerpt:
      "Errores habituales que destruyen la rentabilidad de las pymes, cómo calcular si tu negocio realmente gana dinero y decisiones que mejoran los beneficios rápidamente.",
    date: "13 marzo 2025",
  },
];

export default function Blog() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Artículos prácticos sobre rentabilidad, gestión y mejora de
            negocios.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-8">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg md:p-8"
              >
                <p className="text-sm text-gray-500">{post.date}</p>
                <h2 className="mt-2 text-xl font-bold text-gray-900 md:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600 md:text-lg">{post.excerpt}</p>
                <p className="mt-4 text-sm font-semibold text-primary-700">
                  Leer artículo &rarr;
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
