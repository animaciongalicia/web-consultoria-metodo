import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://consultoriametodo.es";

export const metadata: Metadata = {
  title:
    "Sobre Consultoría Método — Qué somos y cómo trabajamos | Consultoría empresarial para pymes",
  description:
    "Consultoría Método es una firma de consultoría empresarial para pymes en España, fundada por Pablo García Dacosta. Método Rentabilismo — más de 25 años ayudando a mejorar rentabilidad, procesos y ventas.",
  keywords: [
    "sobre Consultoría Método",
    "quién es Consultoría Método",
    "cómo trabaja Consultoría Método",
    "consultoría empresarial pymes España",
    "consultor de negocios Pablo García Dacosta",
    "Método Rentabilismo",
  ],
  openGraph: {
    title: "Sobre Consultoría Método — Qué somos y cómo trabajamos",
    description:
      "Firma de consultoría empresarial para pymes en España. Método Rentabilismo. Fundada por Pablo García Dacosta.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/sobre-consultoria-metodo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://consultoriametodo.es/sobre-consultoria-metodo",
  name: "Sobre Consultoría Método",
  description:
    "Página institucional de Consultoría Método — firma de consultoría empresarial para pymes en España.",
  inLanguage: "es-ES",
  mainEntity: { "@id": "https://consultoriametodo.es/#organization" },
  isPartOf: { "@id": "https://consultoriametodo.es/#website" },
};

export default function SobreConsultoriaMetodo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: `${BASE_URL}/` },
          {
            name: "Sobre Consultoría Método",
            url: `${BASE_URL}/sobre-consultoria-metodo`,
          },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Sobre nosotros
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría Método — qué somos y cómo trabajamos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Firma de consultoría empresarial para pymes en España. Método
            propio, mirada externa y decisiones con criterio. Sin humo, sin
            teoría vacía, sin promesas de milagro.
          </p>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Qué es Consultoría Método
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              Consultoría Método es una firma de consultoría de negocios
              orientada a pequeñas y medianas empresas españolas. Fundada por{" "}
              <a
                href="/pablo-garcia-dacosta"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Pablo García Dacosta
              </a>{" "}
              y con base en A Coruña, trabajamos presencialmente en toda
              Galicia y por videollamada con empresas del resto de España.
            </p>
            <p>
              Nuestro trabajo consiste en sentarnos con el dueño o la
              dirección, mirar la empresa desde fuera con criterio empresarial,
              y ayudar a decidir qué hacer para que el negocio funcione
              mejor: márgenes, precios, captación de clientes, procesos
              internos, organización, ventas y dirección estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ NO SOMOS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Qué NO somos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Para que no haya malentendidos, aclaramos lo que no hacemos —
            porque eso ya lo cubren otros profesionales.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                titulo: "No somos gestoría ni asesoría fiscal",
                desc: "No llevamos impuestos, nóminas ni contabilidad. Eso lo sigue haciendo tu gestoría — y de hecho colaboramos bien con ellas.",
              },
              {
                titulo: "No hacemos coaching motivacional",
                desc: "Sí hacemos coaching empresarial con criterio de negocio. Pero no damos charlas motivacionales ni frases inspiradoras.",
              },
              {
                titulo: "No vendemos formaciones enlatadas",
                desc: "Cada empresa es distinta. Trabajamos casos concretos con resultados medibles, no cursos estandarizados.",
              },
              {
                titulo: "No prometemos milagros",
                desc: "Los cambios reales llevan entre 4 semanas y 3 meses. Cualquiera que te prometa resultados en 7 días miente.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Un proceso claro, con cuatro fases. Sin sorpresas, sin
            informes decorativos, con propuesta cerrada antes de empezar.
          </p>
          <div className="mt-10 space-y-5">
            {[
              {
                num: "1",
                titulo: "Primera conversación gratuita",
                desc: "30 minutos por teléfono o videollamada para entender tu situación: tipo de negocio, tamaño, momento, problemas principales. Sin compromiso. Al final decidimos juntos si tiene sentido seguir.",
              },
              {
                num: "2",
                titulo: "Diagnóstico del negocio",
                desc: "Analizamos números reales, procesos, captación, precios y organización. Al terminar tienes un informe directo con hallazgos, prioridades y plan de acción.",
              },
              {
                num: "3",
                titulo: "Plan de mejora y seguimiento",
                desc: "Si decides seguir, acompañamos la implementación con reuniones periódicas. Presencial cuando hace falta, por videollamada el resto. Sin letra pequeña.",
              },
              {
                num: "4",
                titulo: "Cierre con resultados medibles",
                desc: "Evaluamos qué ha cambiado en euros y en tiempo: margen, captación, procesos, cuellos de botella eliminados. Sin resultados concretos, esto no tiene sentido.",
              },
            ].map((paso) => (
              <div
                key={paso.num}
                className="flex gap-5 rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white">
                  {paso.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary-900">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 text-gray-700">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO RENTABILISMO */}
      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Nuestro enfoque: Método Rentabilismo
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            El Método Rentabilismo es el sistema propio que aplicamos en
            cada proyecto. Cuatro principios rectores muy simples pero
            poco habituales en la consultoría tradicional:
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                titulo: "Ir al origen del problema",
                desc: "No tapar con tiritas. Entender por qué las cosas no funcionan como deberían.",
              },
              {
                titulo: "Decidir con criterio",
                desc: "Con números, datos y la realidad encima de la mesa. No con intuición ni con prisa.",
              },
              {
                titulo: "Priorizar la rentabilidad",
                desc: "No todo es urgente. Movemos primero lo que afecta al beneficio real.",
              },
              {
                titulo: "Cero teoría vacía",
                desc: "Nada de informes bonitos que nadie lee. Acciones claras, plazos concretos, resultados medibles.",
              },
            ].map((p) => (
              <div
                key={p.titulo}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-gray-700">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-700 md:text-lg">
            Más sobre el método completo en{" "}
            <a
              href="/rentabilismo"
              className="text-accent-600 underline hover:text-accent-700"
            >
              Método Rentabilismo
            </a>{" "}
            y{" "}
            <a
              href="/metodo-herramientas"
              className="text-accent-600 underline hover:text-accent-700"
            >
              las herramientas que usamos
            </a>
            .
          </p>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Quién está detrás
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Fundador
              </p>
              <p className="mt-2 text-lg font-bold text-primary-900">
                Pablo García Dacosta
              </p>
              <p className="mt-3 text-gray-700">
                Consultor de negocios con más de 25 años de experiencia.
                Autor de tres libros sobre rentabilidad, hábitos y
                equilibrio profesional. Fundador de Consultoría Método y
                creador del Método Rentabilismo.
              </p>
              <a
                href="/pablo-garcia-dacosta"
                className="mt-4 inline-block text-sm font-semibold text-accent-600 hover:text-accent-700"
              >
                Ver perfil completo →
              </a>
            </div>
            <div className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Red de colaboradores
              </p>
              <p className="mt-2 text-lg font-bold text-primary-900">
                Profesionales complementarios
              </p>
              <p className="mt-3 text-gray-700">
                Cuando el proyecto lo requiere, trabajamos con una red de
                colaboradores especializados en áreas concretas: fiscal,
                laboral, digital, industrial, sectoriales… Sin
                intermediarios innecesarios.
              </p>
              <a
                href="/colaboradores"
                className="mt-4 inline-block text-sm font-semibold text-accent-600 hover:text-accent-700"
              >
                Ver colaboradores →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES Y ZONAS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Con quién y dónde trabajamos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Trabajamos con pymes de cualquier sector, aunque tenemos
            experiencia especialmente profunda en seis áreas.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Hostelería y restauración", href: "/consultoria-hosteleria-restauracion" },
              { label: "Comercio y retail", href: "/consultoria-comercio-retail" },
              { label: "Servicios profesionales", href: "/consultoria-servicios-profesionales" },
              { label: "Salud y bienestar", href: "/consultoria-salud-bienestar" },
              { label: "Formación, turismo y eventos", href: "/consultoria-formacion-turismo-eventos" },
              { label: "Coaching empresarial", href: "/coaching-empresarial-coruna-galicia" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="flex items-center gap-2 rounded-lg border border-primary-200 bg-white p-3 text-sm text-primary-900 transition-all hover:border-accent-400 hover:bg-accent-50/30"
              >
                <span className="text-accent-500">✓</span>
                {s.label}
              </a>
            ))}
          </div>

          <p className="mt-8 text-gray-700 md:text-lg">
            Trabajamos <strong>presencialmente</strong> en toda Galicia
            (A Coruña, Lugo, Ourense, Pontevedra) y por{" "}
            <strong>videollamada</strong> con empresas del resto de
            España.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber si podemos ayudarte a mejorar tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La primera conversación es gratis y sin compromiso. 30 minutos
            para entender tu situación y decidir juntos si tiene sentido
            trabajar juntos.
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
