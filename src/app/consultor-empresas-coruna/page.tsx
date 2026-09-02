import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultor de empresas en A Coruña | Consultoría de negocios para empresas — Consultoría Método",
  description:
    "Consultor de empresas en A Coruña con más de 25 años de experiencia. Diagnóstico, rentabilidad, captación de clientes y mejora de empresas en A Coruña ciudad y provincia (Santiago, Ferrol, Betanzos, Carballo). Presencial y online.",
  keywords: [
    "consultor empresas A Coruña",
    "consultor de negocios A Coruña",
    "consultoría pymes A Coruña",
    "consultor empresarial Coruña",
    "consultor empresas Santiago de Compostela",
    "consultor empresas Ferrol",
    "consultor rentabilidad A Coruña",
    "consultor estratégico Galicia",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title: "Consultor de empresas en A Coruña — Consultoría Método",
    description:
      "Consultoría de negocios para empresas en A Coruña ciudad y provincia. Diagnóstico, rentabilidad, precios y captación de clientes. Presencial en toda la provincia y online.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultor-empresas-coruna",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría Método — Consultor de empresas en A Coruña",
  description:
    "Servicios de consultoría empresarial para empresas en A Coruña ciudad y provincia. Diagnóstico, rentabilidad, precios, procesos y captación de clientes.",
  url: "https://consultoriametodo.es/consultor-empresas-coruna",
  telephone: "+34678288284",
  sameAs: [SITE.googleBusinessProfile],
  address: {
    "@type": "PostalAddress",
    addressLocality: "A Coruña",
    addressRegion: "Galicia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "A Coruña" },
    { "@type": "City", name: "Santiago de Compostela" },
    { "@type": "City", name: "Ferrol" },
    { "@type": "City", name: "Betanzos" },
    { "@type": "City", name: "Carballo" },
    { "@type": "City", name: "Arteixo" },
    { "@type": "City", name: "Culleredo" },
    { "@type": "AdministrativeArea", name: "Provincia de A Coruña" },
  ],
  founder: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  priceRange: "€€",
};

export default function ConsultorEmpresasCoruna() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Consultoría empresarial — A Coruña y provincia
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultor de empresas en A Coruña
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Más de 25 años ayudando a pymes y empresas a mejorar su rentabilidad,
            captación de clientes y procesos. Presencial en A Coruña ciudad y toda
            la provincia, online en el resto de España.
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

      {/* INTRO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Qué hace un consultor de empresas en A Coruña
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              Un consultor de empresas en A Coruña no es lo mismo que un asesor
              fiscal, una gestoría o un abogado. Su trabajo es mirar la empresa
              desde fuera, identificar qué no funciona como debería y diseñar un
              plan concreto para mejorarlo. Rentabilidad, precios, procesos,
              captación de clientes, organización interna, decisiones
              estratégicas. Nada de lo anterior lo hace tu gestoría — y sin
              embargo es lo que más impacto tiene en tu beneficio.
            </p>
            <p>
              Consultoría Método, fundada por Pablo García Dacosta, trabaja como
              consultoría empresarial con base en A Coruña desde hace más de dos décadas. Hemos acompañado a
              empresas de hostelería, comercio, clínicas, servicios profesionales,
              formación, industria y turismo — tanto en la ciudad como en toda
              la provincia. Nuestro enfoque se llama{" "}
              <a
                href="/metodo-herramientas"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Método Rentabilismo
              </a>
              : un sistema práctico basado en datos, no en teoría ni en informes
              bonitos que nadie lee.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUÉ UN CONSULTOR LOCAL */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Por qué contratar un consultor con base en A Coruña
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            La mayoría de consultoras grandes están en Madrid o Barcelona, con
            metodologías pensadas para empresas de otro tamaño y otro contexto.
            Una empresa gallega tiene realidades diferentes: mercado local más
            pequeño, estacionalidad en muchos sectores, relación directa con
            proveedores y clientes, competencia local conocida, y un ritmo de
            decisión distinto al de una multinacional.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Conocimiento del tejido coruñés",
                desc: "Años trabajando con empresas de A Coruña, Santiago, Ferrol y comarcas. Conocemos los sectores que predominan, los proveedores habituales y los patrones de cliente local.",
              },
              {
                titulo: "Cercanía real, no virtual",
                desc: "Podemos ir a tu negocio y ver cómo funciona de verdad. Una cosa es lo que se cuenta en una videollamada y otra es lo que se ve pasando una mañana en tu empresa.",
              },
              {
                titulo: "Seguimiento presencial",
                desc: "Las reuniones de seguimiento cara a cara tienen otra profundidad. Cuando hace falta, nos vemos. Cuando no, resolvemos online. Sin rigidez.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
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

      {/* REALIDAD EMPRESARIAL */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Realidad empresarial de la provincia de A Coruña
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            A Coruña es la provincia más económicamente diversa de Galicia. Tres
            ejes urbanos con tejidos empresariales distintos, un peso enorme del
            grupo Inditex y su ecosistema, un puerto activo y un sector naval en
            Ferrol. Entender esta diversidad es esencial para hacer consultoría
            con criterio aquí.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Motor económico de Galicia",
                desc: "Aquí está la sede de Inditex, mayor grupo textil del mundo, y todo su ecosistema logístico. Banca (Abanca), puerto de A Coruña, tecnología y turismo urbano hacen de la provincia el principal motor económico gallego.",
              },
              {
                titulo: "Diversidad sectorial única",
                desc: "Ninguna provincia gallega tiene esta variedad: textil-moda, banca, tecnología, hostelería, comercio urbano y de barrio, clínicas privadas, servicios profesionales, universidades. Cada sector con sus propias reglas.",
              },
              {
                titulo: "Tres ejes urbanos, tres realidades",
                desc: "A Coruña ciudad y su área metropolitana de servicios y comercio. Santiago capital administrativa y universitaria. Ferrol y su comarca naval-industrial. Cada una con su tejido propio.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
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

      {/* RETOS TÍPICOS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Retos empresariales típicos en A Coruña
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Los problemas que vemos con más frecuencia en las empresas de la
            provincia. Todos tienen solución si se abordan con método.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                titulo: "Competencia intensa en hostelería y comercio urbano",
                desc: "A Coruña, Santiago y Ferrol tienen mucha oferta, y las grandes cadenas presionan al comercio tradicional. Diferenciarse por servicio, especialización y experiencia es la única salida sostenible al precio.",
              },
              {
                titulo: "Dependencia del ecosistema Inditex",
                desc: "Muchas pymes auxiliares dependen del grupo Inditex o del sector textil. Diversificar clientes y no depender de un único tractor es clave para sostener el negocio a largo plazo.",
              },
              {
                titulo: "Reconversión industrial en Ferrol",
                desc: "El sector naval y auxiliar vive una reconversión constante. Las empresas que quieren sobrevivir necesitan adaptar modelo, procesos y mercados con criterio.",
              },
              {
                titulo: "Estacionalidad turística en Camino y Costa da Morte",
                desc: "Santiago y la Costa concentran mucho negocio turístico con estacionalidad marcada. Diseñar oferta complementaria y sistemas de captación propios reduce la dependencia.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Dónde trabajo presencialmente
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Atiendo pymes y empresas presencialmente en toda la provincia de A
            Coruña. Para clientes fuera de Galicia, trabajamos por videollamada con el
            mismo método y los mismos resultados.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                zona: "A Coruña capital",
                desc: "Centro, Monte Alto, Riazor, Ensanche, Matogrande y resto de la ciudad.",
              },
              {
                zona: "Santiago de Compostela",
                desc: "Capital administrativa, tejido universitario, turismo y servicios profesionales.",
              },
              {
                zona: "Ferrol y comarca",
                desc: "Área naval e industrial: Ferrol, Narón, Fene, Neda.",
              },
              {
                zona: "Betanzos y As Mariñas",
                desc: "Comercio, hostelería, pequeñas industrias y servicios.",
              },
              {
                zona: "Carballo y Costa da Morte",
                desc: "Bergantiños y costa: turismo, pesca y sector primario.",
              },
              {
                zona: "Área metropolitana",
                desc: "Arteixo, Culleredo, Cambre, Oleiros, Sada, Bergondo.",
              },
            ].map((item) => (
              <div
                key={item.zona}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <p className="font-bold text-primary-900">{item.zona}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Sectores con los que trabajo en la provincia
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            El tejido empresarial de la provincia de A Coruña es diverso. Hostelería
            y turismo, comercio local, servicios profesionales, salud privada,
            sector naval y auxiliar, textil, servicios técnicos, alimentación y
            agroalimentario. En todos ellos los problemas de fondo se repiten:
            márgenes que no se revisan, captación inconsistente, procesos
            improvisados y decisiones por intuición.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Hostelería y restauración",
              "Comercio local y tiendas de barrio",
              "Clínicas dentales, fisio y salud",
              "Despachos profesionales y abogados",
              "Academias y centros de formación",
              "Servicios técnicos y reparación",
              "Empresas de eventos y turismo",
              "Industria auxiliar y talleres",
              "Alimentación y distribución",
            ].map((sector) => (
              <div
                key={sector}
                className="flex items-center gap-2 rounded-lg border border-primary-200 bg-white p-3 text-sm text-primary-900"
              >
                <span className="text-accent-500">✓</span>
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo trabajamos con empresas de A Coruña
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                paso: "1",
                titulo: "Primera conversación gratuita",
                desc: "30 minutos por teléfono, videollamada o presencial si estás en A Coruña. Nos cuentas tu situación, te damos nuestra opinión honesta, decidimos si tiene sentido trabajar juntos.",
              },
              {
                paso: "2",
                titulo: "Diagnóstico del negocio",
                desc: "Análisis real de tu empresa: números, procesos, captación, precios, organización. Al final tienes un informe directo con qué hacer y en qué orden.",
              },
              {
                paso: "3",
                titulo: "Plan de mejora y seguimiento",
                desc: "Si decides seguir, acompañamos la implementación con reuniones periódicas. Presencial cuando hace falta, online el resto.",
              },
              {
                paso: "4",
                titulo: "Cierre con resultados medibles",
                desc: "Evaluamos juntos qué ha cambiado. Margen, captación, procesos, tiempo liberado. Sin resultados concretos, esto no tiene sentido.",
              },
            ].map((item) => (
              <div
                key={item.paso}
                className="flex gap-5 rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <div className="flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 font-bold text-white">
                    {item.paso}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 md:text-lg">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Casos reales en Galicia
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Resultados concretos de empresas que confiaron en el método.
            Sin maquillaje — con los problemas reales y las decisiones que
            cambiaron la trayectoria del negocio.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <a
              href="/blog/caso-exito-restaurante-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Restauración · Galicia
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un restaurante que facturaba 10.000 € al mes y no ganaba dinero
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Escandallos, carta, turnos y proveedores. En 3 meses pasó a
                facturar 15.000 € con margen estable del 12-15 %.
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-600">
                Leer caso completo &rarr;
              </p>
            </a>
            <a
              href="/blog/caso-exito-ferrados-transformacion-modelo-negocio"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Sector forestal · Galicia
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                De blog con tráfico a modelo de negocio rentable
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Reconversión de un portal informativo en un sistema de
                captación de leads para el sector forestal gallego.
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-600">
                Leer caso completo &rarr;
              </p>
            </a>
          </div>

          {/* Lecturas locales */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h3 className="text-center text-2xl font-bold text-primary-900">
              Guías locales para empresas de la provincia
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="/blog/consultor-empresas-a-coruna-guia"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Guía local</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Consultor de empresas en A Coruña: guía para empresas
                </p>
              </a>
              <a
                href="/blog/hosteleria-coruna-rentabilidad"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Sectores</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Hostelería en A Coruña: cómo ser rentable
                </p>
              </a>
              <a
                href="/blog/retos-pymes-galicia-2026"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Contexto</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Retos de las pymes en Galicia en 2026
                </p>
              </a>
              <a
                href="/blog/emprender-galicia-errores"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Emprender</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Emprender en Galicia: los 8 errores clave
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tienes una pyme en A Coruña que quieres mejorar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La primera conversación es gratis y sin compromiso. 30 minutos para
            entender tu situación y ver si tiene sentido trabajar juntos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico gratuito
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
            <a href={SITE.phoneLink} className="btn-secondary">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
