import type { Metadata } from "next";
import { SITE, SOCIAL_LINKS } from "@/lib/content";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://consultoriametodo.es";

export const metadata: Metadata = {
  title:
    "Consultoría Método en redes sociales — Todos nuestros perfiles",
  description:
    "Todos los perfiles de Consultoría Método, Método Rentabilismo y Pablo García Dacosta en redes sociales: LinkedIn, Instagram, YouTube, Substack, Facebook y más.",
  keywords: [
    "Consultoría Método redes sociales",
    "LinkedIn Consultoría Método",
    "Rentabilismo redes sociales",
    "Pablo García Dacosta LinkedIn",
    "perfiles Consultoría Método",
  ],
  openGraph: {
    title: "Consultoría Método en redes sociales",
    description:
      "Perfiles de Consultoría Método, Método Rentabilismo y Pablo García Dacosta en todas las plataformas.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/redes-sociales",
  },
};

type SocialCard = {
  key: string;
  label: string;
  url: string;
  icon: string; // Emoji provisional; sustituible por SVG luego
};

const METODO_CARDS: SocialCard[] = [
  { key: "linkedin", label: "LinkedIn", url: SOCIAL_LINKS.metodo.linkedin, icon: "💼" },
  { key: "instagram", label: "Instagram", url: SOCIAL_LINKS.metodo.instagram, icon: "📸" },
  { key: "facebook", label: "Facebook", url: SOCIAL_LINKS.metodo.facebook, icon: "👤" },
  { key: "youtube", label: "YouTube", url: SOCIAL_LINKS.metodo.youtube, icon: "▶️" },
  { key: "substack", label: "Substack", url: SOCIAL_LINKS.metodo.substack, icon: "📬" },
  { key: "twitter", label: "X (Twitter)", url: SOCIAL_LINKS.metodo.twitter, icon: "𝕏" },
  { key: "tiktok", label: "TikTok", url: SOCIAL_LINKS.metodo.tiktok, icon: "🎵" },
  { key: "threads", label: "Threads", url: SOCIAL_LINKS.metodo.threads, icon: "🧵" },
];

const RENTABILISMO_CARDS: SocialCard[] = [
  { key: "web", label: "rentabilismo.es (web oficial)", url: SOCIAL_LINKS.rentabilismo.web, icon: "🌐" },
  { key: "linkedin", label: "LinkedIn", url: SOCIAL_LINKS.rentabilismo.linkedin, icon: "💼" },
  { key: "instagram", label: "Instagram", url: SOCIAL_LINKS.rentabilismo.instagram, icon: "📸" },
  { key: "youtube", label: "YouTube", url: SOCIAL_LINKS.rentabilismo.youtube, icon: "▶️" },
  { key: "substack", label: "Substack", url: SOCIAL_LINKS.rentabilismo.substack, icon: "📬" },
];

const PABLO_CARDS: SocialCard[] = [
  { key: "linkedin", label: "LinkedIn personal", url: SOCIAL_LINKS.pablo.linkedin, icon: "💼" },
  { key: "twitter", label: "X (Twitter)", url: SOCIAL_LINKS.pablo.twitter, icon: "𝕏" },
  { key: "amazonAuthor", label: "Amazon Author Page", url: SOCIAL_LINKS.pablo.amazonAuthor, icon: "📚" },
];

function Card({ card }: { card: SocialCard }) {
  const active = !!card.url;
  const className =
    "flex items-center gap-3 rounded-xl border p-4 shadow-sm transition-all";
  if (active) {
    return (
      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer me"
        className={`${className} border-primary-200 bg-white hover:border-accent-400 hover:shadow-md`}
      >
        <span className="text-2xl" aria-hidden="true">
          {card.icon}
        </span>
        <span className="text-sm font-semibold text-primary-900">
          {card.label}
        </span>
        <span className="ml-auto text-xs font-semibold text-accent-600">
          →
        </span>
      </a>
    );
  }
  return (
    <div
      className={`${className} cursor-not-allowed border-dashed border-gray-200 bg-gray-50/40`}
      aria-label={`${card.label} — próximamente`}
    >
      <span className="text-2xl opacity-40" aria-hidden="true">
        {card.icon}
      </span>
      <span className="text-sm font-semibold text-gray-500">
        {card.label}
      </span>
      <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-gray-400">
        Próximamente
      </span>
    </div>
  );
}

export default function RedesSociales() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: `${BASE_URL}/` },
          {
            name: "Sobre Consultoría Método",
            url: `${BASE_URL}/sobre-consultoria-metodo`,
          },
          {
            name: "Método en redes sociales",
            url: `${BASE_URL}/redes-sociales`,
          },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Nuestros perfiles
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría Método en redes sociales
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Aquí están todos los perfiles públicos donde compartimos
            contenido, casos y aprendizajes de consultoría. Elige la
            plataforma donde te resulte más cómodo seguirnos.
          </p>
        </div>
      </section>

      {/* CONSULTORÍA MÉTODO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Consultoría Método
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Casos reales, guías prácticas y aprendizajes semanales sobre
            rentabilidad, procesos, ventas y gestión de pymes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {METODO_CARDS.map((c) => (
              <Card key={c.key} card={c} />
            ))}
            {/* Google Business ya está siempre disponible */}
            <a
              href={SITE.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer me"
              className="flex items-center gap-3 rounded-xl border border-primary-200 bg-white p-4 shadow-sm transition-all hover:border-accent-400 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">
                ⭐
              </span>
              <span className="text-sm font-semibold text-primary-900">
                Ficha en Google Business
              </span>
              <span className="ml-auto text-xs font-semibold text-accent-600">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* RENTABILISMO */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Método Rentabilismo
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Perfiles dedicados exclusivamente al método:
            recursos, formaciones y comunidad. Web oficial en{" "}
            <a
              href="https://rentabilismo.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 underline hover:text-accent-700"
            >
              rentabilismo.es
            </a>
            .
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RENTABILISMO_CARDS.map((c) => (
              <Card key={c.key} card={c} />
            ))}
          </div>
        </div>
      </section>

      {/* PABLO GARCÍA DACOSTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Pablo García Dacosta
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Perfiles personales del fundador de Consultoría Método. Aquí
            comparte contenido más directo, reflexiones profesionales y
            actualizaciones sobre sus libros.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PABLO_CARDS.map((c) => (
              <Card key={c.key} card={c} />
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Más sobre Pablo en{" "}
            <a
              href="/pablo-garcia-dacosta"
              className="text-accent-600 underline hover:text-accent-700"
            >
              su perfil completo
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Prefieres hablar directamente?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Puedes escribirnos por WhatsApp, email o teléfono. Las redes
            son para contenido — las decisiones se hablan cara a cara.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
