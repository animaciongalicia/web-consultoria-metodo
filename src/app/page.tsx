import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problems from "@/components/Problems";
import Method from "@/components/Method";
import HowIWork from "@/components/HowIWork";
import Testimonial from "@/components/Testimonial";
import Benefits from "@/components/Benefits";
import ForWho from "@/components/ForWho";
import FreeCall from "@/components/FreeCall";
import About from "@/components/About";
import SeoLocal from "@/components/SeoLocal";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import { getLatestPosts } from "@/lib/posts";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Rentabilidad: { bg: "bg-emerald-50", text: "text-emerald-700" },
  Clientes: { bg: "bg-blue-50", text: "text-blue-700" },
  Organización: { bg: "bg-violet-50", text: "text-violet-700" },
  Estrategia: { bg: "bg-amber-50", text: "text-amber-700" },
  "Control y gestión": { bg: "bg-cyan-50", text: "text-cyan-700" },
  Crecimiento: { bg: "bg-rose-50", text: "text-rose-700" },
  Marketing: { bg: "bg-orange-50", text: "text-orange-700" },
  "Caso de éxito": { bg: "bg-teal-50", text: "text-teal-700" },
  Ventas: { bg: "bg-indigo-50", text: "text-indigo-700" },
  "Servicios profesionales": { bg: "bg-slate-50", text: "text-slate-700" },
};

export const metadata: Metadata = {
  title:
    "Consultoría Empresarial en A Coruña y Galicia | Consultor de Negocios Online — Consultoría Método",
  description:
    "Consultoría empresarial para empresas en A Coruña, Galicia y por videollamada en el resto de España. Mejora empresarial, gestión de procesos, rentabilidad y decisiones estratégicas. Pablo García Dacosta — Método Rentabilismo. +25 años de experiencia.",
  keywords: [
    "consultoría empresarial A Coruña",
    "consultor de negocios Galicia",
    "mejora empresarial pymes",
    "consultor gestión de procesos",
    "consultoría estratégica para empresas",
    "mejorar rentabilidad empresa",
    "consultoría pymes España",
    "consultoría online empresas",
    "asesoría estratégica empresarial",
    "consultoría metodológica",
    "Método Rentabilismo",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title:
      "Consultoría Empresarial en A Coruña y Galicia | Consultoría Método",
    description:
      "Consultoría de negocios para empresas. Mejora empresarial, gestión de procesos y rentabilidad. Presencial en A Coruña y Galicia, por videollamada en el resto de España.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problems />
      <Method />
      <HowIWork />
      <Testimonial />
      <Benefits />

      {/* Cross-link to servicios */}
      <section className="bg-accent-50 border-y border-accent-200 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            ¿Quieres conocer en detalle nuestros{" "}
            <strong className="text-primary-800">servicios de consultoría empresarial</strong>?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Rentabilidad, captación de clientes, organización, procesos,
            acompañamiento estratégico y coaching empresarial.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/servicios" className="btn-primary inline-block">
              Ver servicios
            </a>
            <a
              href="/coaching-empresarial-coruna-galicia"
              className="btn-secondary inline-block"
            >
              Coaching empresarial
            </a>
          </div>
        </div>
      </section>

      <ForWho />
      <FreeCall />
      <About />
      <SeoLocal />

      {/* Últimos artículos del blog */}
      <LatestFromBlog />

      {/* Cross-link to colaboradores */}
      <section className="border-y border-gray-200 bg-gray-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            <strong className="text-primary-800">¿Eres gestoría, asesoría o profesional</strong>{" "}
            que trabaja con empresas?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Consultoría Método complementa tu trabajo con mejora de rentabilidad,
            captación y organización. Sin pisar tu terreno.
          </p>
          <a
            href="/colaboradores"
            className="btn-outline mt-6 inline-block"
          >
            Conoce cómo colaborar
          </a>
        </div>
      </section>

      <Faqs />
      <Contact />
    </>
  );
}

function LatestFromBlog() {
  const latest = getLatestPosts(6);
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
              Publicaciones recientes
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-primary-900 md:text-3xl">
              Últimos artículos del blog
            </h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Guías prácticas sobre rentabilidad, gestión, ventas y estrategia.
              Sin humo — solo lo que hemos visto funcionar.
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            Ver todo el blog →
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => {
            const colors =
              categoryColors[post.category] || {
                bg: "bg-gray-50",
                text: "text-gray-600",
              };
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
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
                <h3 className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-600 group-hover:gap-1.5 transition-all">
                  Leer artículo →
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
