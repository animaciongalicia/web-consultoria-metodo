import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultoría empresarial en Galicia | Consultor de pymes en las 4 provincias — Consultoría Método",
  description:
    "Consultoría empresarial para pymes en Galicia. Base en A Coruña, trabajo con empresas en las 4 provincias: Coruña, Pontevedra, Lugo y Ourense. Rentabilidad, captación, precios y procesos. +25 años de experiencia.",
  keywords: [
    "consultoría empresarial Galicia",
    "consultor empresas Galicia",
    "consultoría pymes Galicia",
    "consultor negocios Galicia",
    "consultoría empresas Pontevedra",
    "consultoría empresas Lugo",
    "consultoría empresas Ourense",
    "consultor rentabilidad Galicia",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title: "Consultoría empresarial en Galicia — Consultoría Método",
    description:
      "Consultor de empresas en Galicia. Base en A Coruña, servicios en las 4 provincias. Diagnóstico, rentabilidad y mejora de pymes.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultoria-empresarial-galicia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría Método — Consultoría empresarial en Galicia",
  description:
    "Consultoría empresarial para pymes en las cuatro provincias gallegas. Presencial en A Coruña, online en el resto de Galicia y España.",
  url: "https://consultoriametodo.es/consultoria-empresarial-galicia",
  telephone: "+34678288284",
  sameAs: [SITE.googleBusinessProfile],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Provincia de A Coruña" },
    { "@type": "AdministrativeArea", name: "Provincia de Pontevedra" },
    { "@type": "AdministrativeArea", name: "Provincia de Lugo" },
    { "@type": "AdministrativeArea", name: "Provincia de Ourense" },
    { "@type": "State", name: "Galicia" },
  ],
  founder: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  priceRange: "€€",
};

export default function ConsultoriaEmpresarialGalicia() {
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
            Consultoría empresarial — Galicia
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría empresarial en Galicia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Acompañamos a empresas gallegas a mejorar su rentabilidad, su captación de
            clientes y su forma de organizarse. Base en A Coruña, trabajamos en las
            cuatro provincias — presencial cuando la distancia lo permite, online
            el resto.
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

      {/* TEJIDO EMPRESARIAL */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            El tejido empresarial gallego
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              Galicia es una comunidad de pymes. La mayoría del tejido
              empresarial gallego son empresas de menos de 10 trabajadores,
              con frecuencia familiares, muy arraigadas al territorio y a
              sectores tradicionales. Esta realidad tiene sus fortalezas —
              cercanía al cliente, conocimiento del oficio, relaciones de
              confianza — y también sus límites: dificultad para escalar,
              dependencia de una o dos personas clave, márgenes ajustados y
              poca cultura de análisis de datos.
            </p>
            <p>
              Con base en A Coruña, llevamos más de
              25 años trabajando con empresas gallegas. Conocemos las
              particularidades del mercado local, los sectores estratégicos
              de cada provincia y los retos que se repiten año tras año en
              la mesa del empresario gallego. No es una consultoría pensada
              en Madrid y adaptada a Galicia — es una consultoría pensada
              desde Galicia para la realidad de aquí.
            </p>
          </div>
        </div>
      </section>

      {/* PROVINCIAS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Las cuatro provincias gallegas
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Cada provincia tiene su propio ecosistema empresarial, sus sectores
            dominantes y sus retos específicos. Trabajamos con empresas de las cuatro.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border-2 border-accent-300 bg-white p-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-primary-900">
                  A Coruña
                </h3>
                <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                  Mi base
                </span>
              </div>
              <p className="mt-3 text-gray-700">
                Provincia con mayor peso industrial y de servicios de Galicia.
                Sede de grandes empresas (Inditex como referente global), puerto
                activo, industria naval y auxiliar en Ferrol, turismo costero,
                servicios profesionales concentrados en A Coruña ciudad y
                Santiago de Compostela. Tejido de pymes muy diverso y dinámico.
              </p>
              <p className="mt-3">
                <a
                  href="/consultor-empresas-coruna"
                  className="text-accent-600 underline hover:text-accent-700 font-semibold"
                >
                  Ver página específica de consultoría en A Coruña &rarr;
                </a>
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-900">
                Pontevedra
              </h3>
              <p className="mt-3 text-gray-700">
                Motor de la industria conservera y la pesca gallega. Vigo como
                nodo industrial (automoción, naval), turismo de las Rías Baixas,
                comercio en Pontevedra capital. Fuerte tradición exportadora y
                buena presencia de pymes industriales. Trabajo online con
                empresas de la zona.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-900">Lugo</h3>
              <p className="mt-3 text-gray-700">
                Provincia agroalimentaria y ganadera por excelencia. Industria
                láctea, cárnica y forestal. Comercio local y hostelería en la
                capital y A Mariña. Retos particulares: despoblación rural,
                relevo generacional y digitalización. Trabajo online con pymes
                lucenses.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-900">Ourense</h3>
              <p className="mt-3 text-gray-700">
                La provincia más interior. Viticultura (Ribeiro, Valdeorras),
                termalismo, agroalimentario y pymes de servicios. Retos
                específicos: envejecimiento de la población, necesidad de
                atraer talento y oportunidades en sectores emergentes.
                Trabajo online con empresas ourensanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES CLAVE */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Sectores estratégicos de Galicia
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Sectores con peso real en la economía gallega donde he acompañado
            proyectos. En todos ellos los problemas de fondo son similares:
            márgenes sin revisar, captación inconsistente y procesos que no
            han evolucionado al ritmo del negocio.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                sector: "Hostelería y turismo",
                desc: "Estacionalidad, food cost, carta, proveedores locales, diferenciación. Del restaurante de barrio al hotel rural.",
              },
              {
                sector: "Pesca y conserva",
                desc: "Industria histórica con presión de costes, internacionalización y relación con grandes distribuidores.",
              },
              {
                sector: "Forestal y madera",
                desc: "Minifundismo, gestión de montes, transformación de madera. Mercado muy específico y con alta complejidad regulatoria.",
              },
              {
                sector: "Naval e industrial",
                desc: "Ferrol, Vigo y auxiliares. Ciclos largos, contratos grandes, gestión de subcontratación.",
              },
              {
                sector: "Agroalimentario",
                desc: "Lácteo, cárnico, panaderías, embutidos. Canales de distribución, marca propia vs marca blanca.",
              },
              {
                sector: "Servicios profesionales",
                desc: "Abogados, consultores, arquitectos, gestorías. El reto clásico: crecer sin depender del dueño.",
              },
              {
                sector: "Comercio local",
                desc: "Tiendas de barrio, librerías, moda, decoración. Competencia con grandes superficies y e-commerce.",
              },
              {
                sector: "Clínicas y salud privada",
                desc: "Dental, fisio, estética, psicología. Captación local, ocupación de agenda y mix de servicios.",
              },
            ].map((item) => (
              <div
                key={item.sector}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <h3 className="font-bold text-primary-900">{item.sector}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETOS GALLEGOS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Retos específicos del empresario gallego
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Además de los problemas comunes a cualquier pyme, el empresario
            gallego se enfrenta a algunas realidades propias del territorio
            que conviene mirar con lupa.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                titulo: "Estacionalidad del turismo costero",
                desc: "De Rías Baixas a Costa da Morte, muchos negocios concentran el 70 % de su facturación entre junio y septiembre. Sin una estrategia de desestacionalización, el resto del año es pura supervivencia.",
              },
              {
                titulo: "Minifundismo empresarial",
                desc: "Muchos pequeños negocios muy dispersos geográficamente. Hace más difícil ganar escala, negociar con proveedores o encontrar personal cualificado cerca.",
              },
              {
                titulo: "Relevo generacional y traspaso familiar",
                desc: "Una parte enorme del tejido empresarial gallego son negocios familiares. El 70 % no sobrevive al traspaso generacional si no se prepara a tiempo.",
              },
              {
                titulo: "Despoblación rural y talento",
                desc: "En Lugo y Ourense especialmente, encontrar personal joven y cualificado es cada vez más difícil. Retener el talento que hay es una prioridad estratégica, no una queja.",
              },
              {
                titulo: "Digitalización más lenta que la media nacional",
                desc: "Muchas pymes gallegas siguen operando con procesos manuales que otras ya automatizaron hace años. No es un problema técnico — es un problema de prioridades y desconocimiento.",
              },
              {
                titulo: "Mercado local pequeño",
                desc: "El mercado gallego tiene un límite de tamaño. Crecer muchas veces significa salir — al resto de España, a Portugal, al resto de Europa. Eso exige otro modelo de negocio, no solo más esfuerzo.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-primary-200 bg-white p-5"
              >
                <h3 className="font-bold text-primary-900 md:text-lg">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo trabajo en Galicia
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-primary-200 bg-primary-50 p-6">
              <h3 className="text-lg font-bold text-primary-900">
                Presencial en A Coruña y provincia
              </h3>
              <p className="mt-3 text-gray-700">
                A Coruña, Santiago, Ferrol, Betanzos, Carballo, Arteixo,
                Culleredo y comarcas. Visitas a tu negocio, reuniones en la
                ciudad o en ubicaciones acordadas.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-primary-900">
                Online en el resto de Galicia
              </h3>
              <p className="mt-3 text-gray-700">
                Pontevedra, Vigo, Lugo, Ourense y resto del territorio.
                Videollamadas de trabajo, informes digitales y seguimiento a
                distancia con el mismo método y los mismos resultados.
              </p>
            </div>
          </div>
          <p className="mt-8 text-gray-700 md:text-lg">
            El formato se adapta al cliente. Algunos proyectos empiezan
            presenciales y siguen online. Otros son íntegramente remotos. Lo
            que no cambia nunca es el método:{" "}
            <a
              href="/metodo-herramientas"
              className="text-accent-600 underline hover:text-accent-700"
            >
              diagnóstico real, plan concreto, ejecución acompañada
            </a>.
          </p>
        </div>
      </section>

      {/* CASOS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Casos reales en Galicia
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <a
              href="/blog/caso-exito-restaurante-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Hostelería
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Restaurante que llenaba y no ganaba dinero
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                De 10.000 € a 15.000 € al mes con margen estable en 3 meses.
              </p>
            </a>
            <a
              href="/blog/caso-exito-ferrados-transformacion-modelo-negocio"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Sector forestal gallego
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                De blog informativo a negocio rentable
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Reconversión de un portal con miles de visitas sin monetizar en
                un sistema de captación de leads.
              </p>
            </a>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/experiencia-sectores-casos"
              className="text-accent-600 underline hover:text-accent-700 font-semibold"
            >
              Ver más casos y sectores &rarr;
            </a>
          </div>

          {/* Lecturas locales */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h3 className="text-center text-2xl font-bold text-primary-900">
              Lecturas recomendadas sobre Galicia y sus pymes
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="/blog/retos-pymes-galicia-2026"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Estrategia</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Retos de las pymes en Galicia en 2026
                </p>
              </a>
              <a
                href="/blog/hosteleria-coruna-rentabilidad"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Rentabilidad</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Hostelería en A Coruña: cómo ser rentable
                </p>
              </a>
              <a
                href="/blog/consultor-empresas-a-coruna-guia"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Estrategia</p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Guía de consultor de empresas en A Coruña
                </p>
              </a>
              <a
                href="/blog/emprender-galicia-errores"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Estrategia</p>
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
            ¿Tienes una empresa en Galicia que quieres mejorar?
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
          </div>
        </div>
      </section>
    </>
  );
}
