import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultor de empresas en Lugo | Consultoría para pymes de la provincia — Consultoría Método",
  description:
    "Consultor de empresas en la provincia de Lugo: agroalimentario, láctea, ganadería, madera, turismo rural, hostelería y comercio. Diagnóstico, rentabilidad y captación. Presencial en Lugo y comarcas, por videollamada en el resto de España.",
  keywords: [
    "consultor empresas Lugo",
    "consultor de negocios Lugo",
    "consultoría pymes Lugo",
    "consultor empresarial Lugo",
    "consultoría agroalimentario Lugo",
    "consultoría láctea Galicia",
    "consultor Ribadeo Viveiro",
    "consultor Monforte Sarria",
    "consultoría turismo rural Galicia",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title: "Consultor de empresas en Lugo — Consultoría Método",
    description:
      "Consultoría de negocios para empresas de la provincia de Lugo. Agroalimentario, láctea, ganadería, turismo rural, hostelería y comercio.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultor-empresas-lugo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría Método — Consultor de empresas en Lugo",
  description:
    "Servicios de consultoría empresarial para pymes en la provincia de Lugo. Agroalimentario, láctea, ganadería, turismo, hostelería y comercio.",
  url: "https://consultoriametodo.es/consultor-empresas-lugo",
  telephone: "+34678288284",
  sameAs: [SITE.googleBusinessProfile],
  address: {
    "@type": "PostalAddress",
    addressLocality: "A Coruña",
    addressRegion: "Galicia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Lugo" },
    { "@type": "City", name: "Monforte de Lemos" },
    { "@type": "City", name: "Sarria" },
    { "@type": "City", name: "Vilalba" },
    { "@type": "City", name: "Ribadeo" },
    { "@type": "City", name: "Viveiro" },
    { "@type": "City", name: "Chantada" },
    { "@type": "AdministrativeArea", name: "Provincia de Lugo" },
  ],
  founder: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  priceRange: "€€",
};

const realidad = [
  {
    titulo: "El corazón agroalimentario de Galicia",
    desc: "Lugo concentra el 40 % de la producción láctea gallega. Cooperativas, industrias transformadoras, ganaderías y toda una cadena de valor con retos muy concretos de rentabilidad y márgenes.",
  },
  {
    titulo: "Tejido rural muy vivo",
    desc: "Comercio de proximidad, hostelería tradicional, empresas familiares con décadas de historia. Mercado local más pequeño que en las grandes ciudades, pero con clientes fieles y relación directa.",
  },
  {
    titulo: "Turismo interior en crecimiento",
    desc: "Camino de Santiago (Norte, Primitivo, Francés desde Sarria), Ribeira Sacra, muralla romana, Cañón do Sil, Mariña Lucense. Alojamientos rurales, restauración y actividades con oportunidades reales.",
  },
];

const retos = [
  {
    titulo: "Presión de márgenes en el sector lácteo",
    desc: "Precio del litro fijado por la industria, costes de alimentación al alza, dificultad para diferenciarse. La rentabilidad se defiende con eficiencia operativa y control de costes.",
  },
  {
    titulo: "Envejecimiento y relevo generacional",
    desc: "Muchas empresas familiares de segunda o tercera generación tienen pendiente el relevo. Ordenar procesos y decisiones antes de que llegue el momento marca la diferencia.",
  },
  {
    titulo: "Estacionalidad del turismo rural",
    desc: "Casas rurales y hostelería con picos en Camino y verano, valles el resto del año. Diseñar oferta complementaria y sistemas de captación propios reduce la dependencia.",
  },
  {
    titulo: "Distancia a mercados grandes",
    desc: "Comercializar fuera de Lugo requiere buena logística, presencia digital y alianzas. Es posible, y hay ejemplos, pero exige planificación y método.",
  },
];

const zonas = [
  {
    zona: "Lugo capital",
    desc: "Ciudad de servicios, administración, comercio, hostelería y sanidad privada.",
  },
  {
    zona: "Sarria y Camino Francés",
    desc: "Alojamientos, restauración y comercio ligado a peregrinos. Fuerte estacionalidad.",
  },
  {
    zona: "Mariña Lucense",
    desc: "Ribadeo, Foz, Burela, Viveiro. Pesca, turismo costero, hostelería y comercio.",
  },
  {
    zona: "Terra Chá",
    desc: "Vilalba, Guitiriz, Castro de Rei. Agroalimentario, ganadería y pequeña industria.",
  },
  {
    zona: "Ribeira Sacra y Sur",
    desc: "Monforte de Lemos, Chantada, Sober. Vino, turismo, comercio y servicios.",
  },
  {
    zona: "Ancares y Montaña",
    desc: "A Fonsagrada, Cervantes, Becerreá. Turismo rural, ganadería y pequeño comercio.",
  },
];

const sectores = [
  "Agroalimentario y láctea",
  "Ganadería y granjas familiares",
  "Turismo rural y casas rurales",
  "Hostelería y restauración",
  "Alojamientos del Camino",
  "Comercio local y proximidad",
  "Madera y aserraderos",
  "Servicios técnicos y talleres",
  "Transporte y logística",
];

export default function ConsultorEmpresasLugo() {
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
            Consultoría empresarial — Lugo y provincia
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultor de empresas en Lugo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Más de 25 años ayudando a empresas de Galicia a mejorar rentabilidad,
            procesos y captación de clientes. Presencial en Lugo capital y toda la
            provincia (Sarria, Monforte, Vilalba, Ribadeo, Viveiro, Chantada), y
            por videollamada en el resto de España.
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
            Qué hace un consultor de empresas en Lugo
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              Un consultor de empresas en Lugo no es un asesor fiscal ni una
              gestoría. Su trabajo es mirar tu empresa desde fuera, identificar
              qué no funciona como debería y diseñar un plan concreto para
              mejorarlo. Rentabilidad, márgenes, captación de clientes,
              organización interna y decisiones estratégicas. Nada de esto lo
              hace tu gestoría — y sin embargo es lo que más impacto tiene en tu
              beneficio.
            </p>
            <p>
              Consultoría Método, fundada por Pablo García Dacosta, trabaja como
              consultoría empresarial en Galicia desde hace más de dos décadas.
              Hemos acompañado a empresas de agroalimentario, láctea, hostelería,
              turismo rural, comercio, madera y servicios en toda la provincia de
              Lugo. Nuestro enfoque se llama{" "}
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

      {/* REALIDAD EMPRESARIAL */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Realidad empresarial de la provincia de Lugo
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Lugo tiene una economía muy distinta a la del área urbana de A Coruña
            o al eje Vigo-Pontevedra. Es una provincia interior y costera, con
            fuerte peso del sector primario, comercio de proximidad y turismo
            rural. Entender esto es esencial para hacer consultoría con criterio
            aquí.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {realidad.map((item) => (
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
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Retos empresariales típicos en Lugo
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Los problemas que vemos con más frecuencia en las empresas de la
            provincia. Todos tienen solución si se abordan con método.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {retos.map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6"
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
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Dónde trabajamos presencialmente en la provincia
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Nos desplazamos a toda la provincia de Lugo cuando el proyecto lo
            requiere. Estas son las zonas donde hemos trabajado con más empresas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zonas.map((item) => (
              <div
                key={item.zona}
                className="rounded-xl border border-primary-200 bg-white p-5"
              >
                <p className="font-bold text-primary-900">{item.zona}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Sectores predominantes en Lugo con los que trabajamos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            El tejido empresarial de Lugo está muy marcado por el sector primario
            y agroalimentario, el turismo rural y el comercio de proximidad. Los
            problemas de fondo se repiten: márgenes que no se revisan, procesos
            improvisados, captación inconsistente y decisiones por intuición.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectores.map((sector) => (
              <div
                key={sector}
                className="flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50/30 p-3 text-sm text-primary-900"
              >
                <span className="text-accent-500">✓</span>
                {sector}
              </div>
            ))}
          </div>

          {/* Enlaces a landings sectoriales */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-center font-semibold text-primary-900 md:text-lg">
              Consultoría especializada por sector
            </p>
            <div className="mx-auto mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="/consultoria-hosteleria-restauracion"
                className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900"
              >
                Hostelería
              </a>
              <a
                href="/consultoria-comercio-retail"
                className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900"
              >
                Comercio y retail
              </a>
              <a
                href="/consultoria-servicios-profesionales"
                className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900"
              >
                Servicios profesionales
              </a>
              <a
                href="/consultoria-salud-bienestar"
                className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900"
              >
                Salud y bienestar
              </a>
              <a
                href="/consultoria-formacion-turismo-eventos"
                className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900"
              >
                Formación y turismo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo trabajamos con empresas de Lugo
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                paso: "1",
                titulo: "Primera conversación gratuita",
                desc: "30 minutos por teléfono o videollamada. Nos cuentas tu situación, te damos nuestra opinión honesta, decidimos si tiene sentido trabajar juntos.",
              },
              {
                paso: "2",
                titulo: "Diagnóstico del negocio",
                desc: "Análisis real de tu empresa: números, procesos, captación, precios, organización. Al final tienes un informe directo con qué hacer y en qué orden.",
              },
              {
                paso: "3",
                titulo: "Plan de mejora y seguimiento",
                desc: "Si decides seguir, acompañamos la implementación con reuniones periódicas. Presencial en Lugo o por videollamada, según lo que necesite cada proyecto.",
              },
              {
                paso: "4",
                titulo: "Cierre con resultados medibles",
                desc: "Evaluamos juntos qué ha cambiado. Margen, captación, procesos, tiempo liberado. Sin resultados concretos, esto no tiene sentido.",
              },
            ].map((item) => (
              <div
                key={item.paso}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-5"
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

      {/* CASOS Y LECTURAS */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Casos reales en Galicia
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Resultados concretos de empresas gallegas que confiaron en el método.
            Sin maquillaje — con los problemas reales y las decisiones que
            cambiaron la trayectoria del negocio.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <a
              href="/blog/caso-exito-comercio-rural-galicia-nicho-online"
              className="block rounded-xl border border-primary-200 bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Comercio rural · Galicia
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un comercio rural en Galicia que encontró su nicho online
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                De tienda local con futuro incierto a negocio rentable con canal
                digital y clientes fuera de la zona.
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-600">
                Leer caso completo →
              </p>
            </a>
            <a
              href="/blog/caso-exito-restaurante-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Restauración · Galicia
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un restaurante que facturaba 10.000 € al mes y no ganaba dinero
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Escandallos, carta, turnos y proveedores. En 3 meses pasó a
                facturar 15.000 € con margen estable.
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-600">
                Leer caso completo →
              </p>
            </a>
          </div>

          {/* Lecturas locales */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h3 className="text-center text-2xl font-bold text-primary-900">
              Guías para empresas de Galicia
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="/blog/consultor-empresas-galicia-que-esperar"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Guía
                </p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Consultor de empresas en Galicia: qué esperar
                </p>
              </a>
              <a
                href="/blog/retos-pymes-galicia-2026"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Contexto
                </p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Retos de las pymes en Galicia en 2026
                </p>
              </a>
              <a
                href="/blog/emprender-galicia-errores"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Emprender
                </p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Emprender en Galicia: los 8 errores clave
                </p>
              </a>
              <a
                href="/consultoria-empresarial-galicia"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Toda Galicia
                </p>
                <p className="mt-2 text-sm font-bold text-primary-900 leading-snug">
                  Consultoría empresarial en Galicia
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
            ¿Tienes una empresa en Lugo que quieres mejorar?
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
