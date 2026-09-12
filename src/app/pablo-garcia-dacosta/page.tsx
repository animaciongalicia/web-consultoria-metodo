import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://consultoriametodo.es";
const PERSON_ID = `${BASE_URL}/#pablo-garcia-dacosta`;
const ORG_ID = `${BASE_URL}/#organization`;

export const metadata: Metadata = {
  title:
    "Pablo García Dacosta — Consultor de negocios · Fundador de Consultoría Método",
  description:
    "Pablo García Dacosta, consultor de negocios con más de 25 años de experiencia. Fundador de Consultoría Método y creador del Método Rentabilismo. Autor de tres libros. Trayectoria multisectorial en pymes de España.",
  keywords: [
    "Pablo García Dacosta",
    "consultor de negocios Coruña",
    "fundador Consultoría Método",
    "creador Método Rentabilismo",
    "consultor empresarial Galicia",
    "autor libros rentabilidad empresa",
  ],
  openGraph: {
    title:
      "Pablo García Dacosta — Consultor de negocios · Fundador de Consultoría Método",
    description:
      "Consultor con +25 años de experiencia. Fundador de Consultoría Método. Autor de 3 libros. Trayectoria multisectorial en pymes de España.",
    locale: "es_ES",
    type: "profile",
    images: ["/pablo-garcia-dacosta.jpg"],
  },
  alternates: {
    canonical: "https://consultoriametodo.es/pablo-garcia-dacosta",
  },
};

// Person schema con mainEntityOfPage — golden signal E-E-A-T para LLMs
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Pablo García Dacosta",
  givenName: "Pablo",
  familyName: "García Dacosta",
  jobTitle: "Consultor de negocios",
  description:
    "Consultor de negocios con más de 25 años de experiencia. Fundador de Consultoría Método, creador del Método Rentabilismo y autor de tres libros sobre rentabilidad, hábitos profesionales y equilibrio personal-empresa.",
  url: BASE_URL,
  image: `${BASE_URL}/pablo-garcia-dacosta.jpg`,
  mainEntityOfPage: `${BASE_URL}/pablo-garcia-dacosta`,
  worksFor: { "@id": ORG_ID },
  founderOf: { "@id": ORG_ID },
  birthPlace: { "@type": "Place", name: "Ferrol, Galicia, España" },
  nationality: { "@type": "Country", name: "España" },
  homeLocation: { "@type": "Place", name: "A Coruña, Galicia, España" },
  knowsLanguage: ["es", "gl", "pt"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de A Coruña — Campus de Ferrol",
    department: "Diplomatura en Relaciones Laborales",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Gestor de Sistemas de Calidad — Asociación Española para la Calidad (EOQ)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Auditor Interno IRCA — Lloyd's Register Quality Assurance",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Gestor de Sistemas Medioambientales — European Organization for Quality (EOQ)",
    },
  ],
  knowsAbout: [
    "Consultoría empresarial para pymes",
    "Mejora de rentabilidad",
    "Gestión de procesos",
    "Sistemas de calidad ISO 9001",
    "Organización empresarial",
    "Estrategia comercial",
    "Ventas y captación de clientes",
    "Método Rentabilismo",
    "Coaching empresarial",
    "Consultoría multisectorial",
  ],
  award: [
    "VII Premio Nacional a la Innovación en la Gestión y Administración Sanitaria (2001)",
    "Premio a la mejor comunicación — II Congreso Nacional de Hostelería Hospitalaria (2000)",
  ],
};

export default function PabloGarciaDacosta() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: `${BASE_URL}/` },
          {
            name: "Sobre Consultoría Método",
            url: `${BASE_URL}/sobre-consultoria-metodo`,
          },
          {
            name: "Pablo García Dacosta",
            url: `${BASE_URL}/pablo-garcia-dacosta`,
          },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow">
          <div className="grid gap-10 md:grid-cols-[240px_1fr] md:items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pablo-garcia-dacosta.jpg"
              alt="Pablo García Dacosta — Consultor de negocios"
              className="mx-auto h-48 w-48 rounded-full object-cover shadow-lg ring-4 ring-accent-500/40 md:h-56 md:w-56"
            />
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Fundador de Consultoría Método
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                Pablo García Dacosta
              </h1>
              <p className="mt-4 text-lg text-primary-100/90">
                Consultor de negocios con más de 25 años de experiencia ·
                Creador del Método Rentabilismo · Autor de 3 libros
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a href="/diagnostico-negocio" className="btn-primary">
                  Reservar 30 min gratis
                </a>
                <a
                  href="/redes-sociales"
                  className="btn-outline-light"
                >
                  Ver perfiles y redes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO CORTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Quién soy y cómo trabajo
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-gray-700 md:text-lg">
            <p>
              Soy consultor de negocios con más de 25 años de experiencia
              trabajando con pymes y empresas de todos los tamaños. Fundé{" "}
              <a
                href="/sobre-consultoria-metodo"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Consultoría Método
              </a>{" "}
              y creé el{" "}
              <a
                href="/rentabilismo"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Método Rentabilismo
              </a>
              , un sistema práctico para mejorar la rentabilidad de una
              empresa basado en decisiones con criterio, procesos claros y
              análisis con datos reales — sin humo, sin teoría vacía, sin
              promesas de milagro.
            </p>
            <p>
              A lo largo de mi trayectoria he trabajado en sectores muy
              distintos: sanidad, hostelería, comercio, joyería, turismo,
              eventos, agroalimentario, transporte, servicios profesionales
              y educación. Esa mirada multisectorial es lo que me permite
              entender rápido cualquier negocio y detectar dónde están las
              palancas reales de mejora.
            </p>
            <p>
              Vivo en A Coruña, trabajo presencialmente en toda Galicia y
              por videollamada con empresas del resto de España. Además de
              la consultoría dirijo varios negocios propios en activo (
              <em>Mil Eventos Galicia</em>, <em>Suunia Viajes</em>,{" "}
              <em>Seagalicia</em> y <em>Luxegalicia</em>) — lo que me
              permite hablar de gestión empresarial desde la práctica
              diaria, no desde la teoría.
            </p>
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Trayectoria profesional
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Un recorrido multisectorial que combina consultoría externa,
            gestión propia y experiencia comercial de campo.
          </p>
          <div className="mt-10 space-y-4">
            {[
              {
                periodo: "Actualidad",
                titulo: "Fundador — Consultoría Método",
                desc: "Firma de consultoría empresarial para pymes en España. Aplicación del Método Rentabilismo. Presencial en Galicia y por videollamada en todo el país.",
              },
              {
                periodo: "10 años · en activo",
                titulo: "Suunia Viajes — Dirección general",
                desc: "Agencia de viajes con paquetes turísticos personalizados. Dirección general y planificación comercial. Marca en crecimiento continuo.",
              },
              {
                periodo: "En activo",
                titulo: "Seagalicia y Luxegalicia",
                desc: "Iniciativas empresariales propias en sectores complementarios de servicios y experiencias en Galicia. Ambas activas y en crecimiento.",
              },
              {
                periodo: "2011 — 2024",
                titulo: "Mil Eventos Galicia — Gerente",
                desc: "Empresa de eventos, teambuildings y ferias sectoriales (Feria Infantil Churritines 2013, Feria BeautyGalicia 2025). 13 años como autónomo dirigiendo la marca.",
              },
              {
                periodo: "2005 — 2010",
                titulo: "Consultoría de calidad — Complejo Hospitalario Arquitecto Marcide-Prof. Novoa Santos (Ferrol)",
                desc: "Implantación de sistemas de calidad ISO 9002, EFQM, gestión de residuos sanitarios y planes de prevención de riesgos. Certificación de la 1ª Lavandería, 1ª Farmacia y 1er Servicio de Análisis Clínicos de un hospital público gallego.",
              },
              {
                periodo: "2005",
                titulo: "Antón Martín Shipping — Consignataria de buques (Ferrol)",
                desc: "Desarrollo e implantación del sistema de calidad ISO 9002.",
              },
              {
                periodo: "2003 — 2006",
                titulo: "Mistery Shopper — Auditor oculto",
                desc: "Evaluación de estándares de calidad en establecimientos para McDonald's España, BurgerKing, Volvo, Women's Secret y Eumeturismo (turismo rural).",
              },
              {
                periodo: "1998 — 2011",
                titulo: "Trayectoria comercial y consultora",
                desc: "Comercial en Editorial Hércules, TUINFOR (formación), SGBRAND (publicidad), Cambre Directo (bebidas espirituosas). Formador en Masters de Calidad, Medioambiente y Prevención impartidos en las Confederaciones de Empresarios de las 4 provincias gallegas (300+ horas).",
              },
            ].map((t) => (
              <div
                key={t.titulo}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                  <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-accent-600">
                    {t.periodo}
                  </span>
                  <h3 className="text-base font-bold text-primary-900 md:text-lg">
                    {t.titulo}
                  </h3>
                </div>
                <p className="mt-2 text-gray-700">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Sectores donde he trabajado
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Más de 15 sectores distintos. La consultoría se aplica igual —
            lo que cambia es cómo se ejecuta en cada uno.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Sanidad y calidad hospitalaria",
              "Hostelería y restauración",
              "Comercio y retail",
              "Joyería y e-commerce",
              "Turismo y agencias de viajes",
              "Eventos, ferias y teambuilding",
              "Agroalimentario y producto local",
              "Consignatarias y transporte marítimo",
              "Servicios profesionales",
              "Formación y educación",
              "Publicidad y marketing",
              "Editorial",
              "Bebidas y distribución",
              "Talleres y automoción",
              "Servicios técnicos",
            ].map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50/30 p-3 text-sm text-primary-900"
              >
                <span className="text-accent-500">✓</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIÓN Y CERTIFICACIONES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Formación y certificaciones
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                titulo: "Diplomatura en Relaciones Laborales",
                sub: "Campus de Ferrol · Universidad de A Coruña · 1996-1999",
              },
              {
                titulo: "Gestor de Sistemas de Calidad (EOQ)",
                sub: "Asociación Española para la Calidad · Certificación European Organization for Quality",
              },
              {
                titulo: "Auditor de Sistemas de Calidad (Quality Auditor-EOQ)",
                sub: "Asociación Española para la Calidad",
              },
              {
                titulo: "Auditor Interno IRCA",
                sub: "Lloyd's Register Quality Assurance · Certificado 015326 (2002)",
              },
              {
                titulo: "Gestor de Sistemas Medioambientales",
                sub: "European Organization for Quality (Nº ES02ESM-33, 2002)",
              },
              {
                titulo: "Técnico en Prevención de Riesgos Laborales",
                sub: "Xunta de Galicia · Nº registro 3408",
              },
            ].map((f) => (
              <div
                key={f.titulo}
                className="rounded-xl border border-primary-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
                  {f.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIOS Y PUBLICACIONES */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Reconocimientos y publicaciones
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
                Premios
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <strong className="text-primary-900">
                    VII Premio Nacional a la Innovación en la Gestión y
                    Administración Sanitaria
                  </strong>{" "}
                  (2001) — Instituto de Salud Carlos III · Ministerio de Sanidad ·
                  Diario Médico
                </li>
                <li>
                  <strong className="text-primary-900">
                    Premio a la mejor comunicación
                  </strong>{" "}
                  · II Congreso Nacional de Hostelería Hospitalaria · Granada
                  2000
                </li>
                <li>
                  <strong className="text-primary-900">
                    2º Premio a la mejor comunicación
                  </strong>{" "}
                  · V Jornadas Nacionales de Gestión y Evaluación de Costes
                  Sanitarios · Bilbao 2000
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-600">
                Publicaciones académicas
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  Modelo Europeo de Gestión de la Calidad Total como sistema
                  de gestión hospitalaria — <em>Revista de Calidad
                  Asistencial</em>, nº 15
                </li>
                <li>
                  Experiencia de implantación del Modelo EFQM — <em>Revista
                  Galega de Actualidade Sanitaria</em>, Vol. 1 nº 1
                </li>
                <li>
                  Introducción a la calidad en empresas de servicios —
                  Fundación Latinoamericana para la Calidad (artículo
                  destacado)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LIBROS PUBLICADOS */}
      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Libros publicados
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Tres libros propios sobre rentabilidad, hábitos y equilibrio
            personal-empresa.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                titulo: "Cómo Mejorar la Rentabilidad de tu Negocio",
                sub: "Estrategias",
              },
              {
                titulo: "Hábitos Diarios",
                sub: "para Transformar tus Prioridades Profesionales",
              },
              {
                titulo: "Regala tu Tiempo",
                sub: "Recuperar el Equilibrio y Enfocarte",
              },
            ].map((l) => (
              <div
                key={l.titulo}
                className="rounded-xl border border-primary-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Libro
                </p>
                <p className="mt-2 text-base font-bold text-primary-900">
                  {l.titulo}
                </p>
                <p className="mt-1 text-sm text-gray-600">{l.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <a
              href="/libros"
              className="inline-block text-sm font-semibold text-accent-700 hover:text-accent-800"
            >
              Ver todos los libros y dónde comprarlos →
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Hablamos 30 minutos sobre tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La primera conversación es gratis y sin compromiso. Me cuentas
            tu situación, te doy mi opinión honesta y decidimos juntos si
            tiene sentido trabajar juntos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
              Reservar 30 min gratis
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
