import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultor de empresas en Pontevedra | Consultoría para pymes de la provincia — Consultoría Método",
  description:
    "Consultor de empresas en la provincia de Pontevedra: automoción, naval, pesca y conserva, bodegas Rías Baixas, turismo, hostelería, comercio y servicios. Presencial en Vigo, Pontevedra y comarcas, por videollamada en el resto de España.",
  keywords: [
    "consultor empresas Pontevedra",
    "consultor de negocios Vigo",
    "consultoría pymes Pontevedra",
    "consultor empresarial Vigo",
    "consultoría automoción Vigo",
    "consultoría conserva pesca",
    "consultor bodegas Rías Baixas",
    "consultor Salnés Morrazo",
    "consultoría turismo Sanxenxo",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title: "Consultor de empresas en Pontevedra — Consultoría Método",
    description:
      "Consultoría de negocios para empresas de la provincia de Pontevedra. Automoción, naval, pesca y conserva, bodegas Rías Baixas, turismo, hostelería, comercio y servicios.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultor-empresas-pontevedra",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría Método — Consultor de empresas en Pontevedra",
  description:
    "Servicios de consultoría empresarial para pymes en la provincia de Pontevedra. Automoción, naval, pesca y conserva, bodegas Rías Baixas, turismo, hostelería, comercio y servicios.",
  url: "https://consultoriametodo.es/consultor-empresas-pontevedra",
  telephone: "+34678288284",
  sameAs: [SITE.googleBusinessProfile],
  address: {
    "@type": "PostalAddress",
    addressLocality: "A Coruña",
    addressRegion: "Galicia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Pontevedra" },
    { "@type": "City", name: "Vigo" },
    { "@type": "City", name: "Vilagarcía de Arousa" },
    { "@type": "City", name: "Cambados" },
    { "@type": "City", name: "Sanxenxo" },
    { "@type": "City", name: "Lalín" },
    { "@type": "City", name: "Cangas" },
    { "@type": "City", name: "Tui" },
    { "@type": "AdministrativeArea", name: "Provincia de Pontevedra" },
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
    titulo: "El motor industrial de Galicia",
    desc: "Vigo concentra el mayor peso industrial gallego con Stellantis (PSA-Citroën), el naval civil y toda su industria auxiliar. Miles de pymes proveedoras y de servicios técnicos giran alrededor de estos grandes tractores.",
  },
  {
    titulo: "Puerto pesquero y conserva líder en Europa",
    desc: "Vigo es el mayor puerto pesquero de Europa. Conservas (Calvo, Frinsa, Pescanova y decenas más), acuicultura, comercialización y auxiliares forman un ecosistema único con retos concretos de rentabilidad y márgenes.",
  },
  {
    titulo: "Rías Baixas: vino y turismo con marca propia",
    desc: "DO Rías Baixas (Albariño) y turismo de Sanxenxo, Cambados, Baiona, A Toxa. Bodegas, alojamientos, restauración y comercio local con oportunidades reales cuando se gestionan con criterio empresarial.",
  },
];

const retos = [
  {
    titulo: "Dependencia de los grandes tractores",
    desc: "Mucho tejido industrial en Vigo depende de Stellantis o de la industria naval/conservera. Cuando una gran empresa reduce pedidos, cientos de auxiliares lo sufren. Diversificar clientes es supervivencia.",
  },
  {
    titulo: "Márgenes estrechos en conserva y pesca",
    desc: "Sector maduro con precios ajustados y competencia internacional intensa. La rentabilidad se defiende con eficiencia operativa, control de costes y decisiones bien fundamentadas.",
  },
  {
    titulo: "Estacionalidad turística en Rías Baixas",
    desc: "Julio y agosto concentran gran parte de la facturación de hostelería y alojamientos. Diseñar productos y ofertas para el resto del año cambia por completo la ecuación económica.",
  },
  {
    titulo: "Competencia intensa en hostelería y comercio urbano",
    desc: "Vigo y Pontevedra ciudad tienen mucha oferta. Diferenciarse por posicionamiento y servicio, no por precio, es la única salida sostenible.",
  },
];

const zonas = [
  {
    zona: "Vigo y comarca",
    desc: "Motor industrial, naval, pesca, conserva, servicios y comercio urbano.",
  },
  {
    zona: "Pontevedra capital",
    desc: "Administración, servicios, comercio, hostelería y educación.",
  },
  {
    zona: "Salnés",
    desc: "Vilagarcía, Cambados, Sanxenxo, O Grove. Vino Rías Baixas, turismo y hostelería.",
  },
  {
    zona: "O Morrazo",
    desc: "Cangas, Bueu, Moaña. Pesca, marisqueo, comercio y turismo costero.",
  },
  {
    zona: "Deza y Tabeirós",
    desc: "Lalín, Silleda, A Estrada. Agroalimentario, textil, comercio y servicios.",
  },
  {
    zona: "O Baixo Miño y O Condado",
    desc: "Tui, A Guarda, Ponteareas, As Neves. Frontera, comercio, vino Condado do Tea y turismo.",
  },
];

const sectores = [
  "Automoción y industria auxiliar",
  "Naval y auxiliar",
  "Pesca, conserva y acuicultura",
  "Bodegas Rías Baixas (Albariño)",
  "Turismo y hostelería costera",
  "Comercio urbano y comarcal",
  "Agroalimentario y textil",
  "Servicios profesionales",
  "Servicios técnicos y talleres",
];

export default function ConsultorEmpresasPontevedra() {
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
            Consultoría empresarial — Pontevedra y provincia
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultor de empresas en Pontevedra
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Más de 25 años ayudando a empresas de Galicia a mejorar rentabilidad,
            procesos y captación de clientes. Presencial en Vigo, Pontevedra
            capital y comarcas (Salnés, O Morrazo, Deza, O Baixo Miño), y por
            videollamada en el resto de España.
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
            Qué hace un consultor de empresas en Pontevedra
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              Un consultor de empresas en Pontevedra no es un asesor fiscal ni
              una gestoría. Su trabajo es mirar tu empresa desde fuera,
              identificar qué no funciona como debería y diseñar un plan concreto
              para mejorarlo. Rentabilidad, márgenes, captación de clientes,
              organización interna y decisiones estratégicas. Nada de esto lo
              hace tu gestoría — y sin embargo es lo que más impacto tiene en tu
              beneficio.
            </p>
            <p>
              Consultoría Método, fundada por Pablo García Dacosta, trabaja como
              consultoría empresarial en Galicia desde hace más de dos décadas.
              Hemos acompañado a empresas de automoción, naval, pesca y conserva,
              bodegas, turismo, hostelería, comercio y servicios en Vigo,
              Pontevedra y toda la provincia. Nuestro enfoque se llama{" "}
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
            Realidad empresarial de la provincia de Pontevedra
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Pontevedra es la provincia gallega más poblada y económicamente
            activa. Concentra el motor industrial en Vigo (automoción, naval,
            pesca), el turismo y vino en las Rías Baixas, y un tejido de
            comercio y servicios urbano en Vigo y Pontevedra ciudad. Entender
            esta diversidad es esencial para hacer consultoría con criterio
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
            Retos empresariales típicos en Pontevedra
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
            Nos desplazamos a toda la provincia de Pontevedra cuando el proyecto
            lo requiere. Estas son las zonas donde hemos trabajado con más
            empresas.
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
            Sectores predominantes en Pontevedra con los que trabajamos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            El tejido empresarial de Pontevedra está marcado por la industria de
            Vigo (automoción, naval, pesca-conserva), el vino y turismo de las
            Rías Baixas y el comercio urbano. Los problemas de fondo se
            repiten: dependencia de tractores externos, márgenes estrechos,
            procesos improvisados y decisiones por intuición.
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
            Cómo trabajamos con empresas de Pontevedra
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
                desc: "Si decides seguir, acompañamos la implementación con reuniones periódicas. Presencial en Pontevedra o por videollamada, según lo que necesite cada proyecto.",
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
            ¿Tienes una empresa en Pontevedra que quieres mejorar?
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
