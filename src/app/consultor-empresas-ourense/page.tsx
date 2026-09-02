import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultor de empresas en Ourense | Consultoría para pymes de la provincia — Consultoría Método",
  description:
    "Consultor de empresas en la provincia de Ourense: bodegas de vino (Ribeiro, Ribeira Sacra, Valdeorras, Monterrei), termalismo, agroalimentario, comercio y turismo rural. Presencial en Ourense y comarcas, por videollamada en el resto de España.",
  keywords: [
    "consultor empresas Ourense",
    "consultor de negocios Ourense",
    "consultoría pymes Ourense",
    "consultor empresarial Ourense",
    "consultoría bodegas Galicia",
    "consultoría vino Ribeiro",
    "consultor termalismo Ourense",
    "consultor Verín Valdeorras",
    "consultoría turismo rural Galicia",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title: "Consultor de empresas en Ourense — Consultoría Método",
    description:
      "Consultoría de negocios para empresas de la provincia de Ourense. Bodegas, termalismo, agroalimentario, hostelería, turismo rural y comercio.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultor-empresas-ourense",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría Método — Consultor de empresas en Ourense",
  description:
    "Servicios de consultoría empresarial para pymes en la provincia de Ourense. Bodegas, termalismo, agroalimentario, hostelería, turismo rural y comercio.",
  url: "https://consultoriametodo.es/consultor-empresas-ourense",
  telephone: "+34678288284",
  sameAs: [SITE.googleBusinessProfile],
  address: {
    "@type": "PostalAddress",
    addressLocality: "A Coruña",
    addressRegion: "Galicia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Ourense" },
    { "@type": "City", name: "Verín" },
    { "@type": "City", name: "O Barco de Valdeorras" },
    { "@type": "City", name: "Ribadavia" },
    { "@type": "City", name: "Celanova" },
    { "@type": "City", name: "Xinzo de Limia" },
    { "@type": "City", name: "Carballiño" },
    { "@type": "AdministrativeArea", name: "Provincia de Ourense" },
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
    titulo: "Ourense, tierra de vino y termalismo",
    desc: "La provincia cuenta con 4 Denominaciones de Origen (Ribeiro, Ribeira Sacra, Valdeorras y Monterrei) y es la mayor concentración de aguas termales de España. Dos sectores con potencial enorme pero muy fragmentados en pequeñas bodegas y hoteles/balnearios que necesitan gestión profesional.",
  },
  {
    titulo: "Comercio local y agroalimentario tradicional",
    desc: "Ourense capital y las villas mantienen un tejido de comercio de proximidad muy vivo. Castaña, mel, patata, quesos, embutidos: producto local con marca gallega que puede llegar a mercados premium si se comercializa con criterio.",
  },
  {
    titulo: "Industria y agroalimentario en Verín-Monterrei",
    desc: "Coca-Cola (Cabreiroá), Manasul y otros. Un polo industrial pequeño pero real en el sur de la provincia, con empresas auxiliares y comercio que se benefician del tirón.",
  },
];

const retos = [
  {
    titulo: "Envejecimiento y despoblación",
    desc: "Ourense es la provincia gallega con mayor envejecimiento. Muchos negocios familiares necesitan planificar el relevo o adaptar el modelo a un mercado local cada vez más pequeño.",
  },
  {
    titulo: "Bodegas pequeñas sin músculo comercial",
    desc: "Producto excelente, pero comercialización dependiente de distribuidores o venta en bodega. Diseñar estrategia de marca, canal y precios cambia por completo la trayectoria.",
  },
  {
    titulo: "Turismo estacional y muy geográfico",
    desc: "Ribeira Sacra en verano, termalismo en temporada, Camino de Invierno emergente. Diseñar ofertas complementarias y captación propia reduce la dependencia de plataformas.",
  },
  {
    titulo: "Distancia a mercados y logística",
    desc: "Vender fuera de la provincia exige planificación logística, presencia digital y alianzas. Es posible — hay ejemplos — pero requiere método.",
  },
];

const zonas = [
  {
    zona: "Ourense capital",
    desc: "Ciudad de servicios, comercio, hostelería, termalismo urbano y sanidad privada.",
  },
  {
    zona: "Valdeorras y O Barco",
    desc: "Bodegas de vino (Godello, Mencía), pizarra y comercio comarcal.",
  },
  {
    zona: "Verín y Monterrei",
    desc: "Vino DO Monterrei, industria (Cabreiroá), turismo termal y comercio.",
  },
  {
    zona: "Ribeira Sacra",
    desc: "Castro Caldelas, Sober, A Teixeira. Vino, turismo enológico y hostelería.",
  },
  {
    zona: "O Ribeiro",
    desc: "Ribadavia, Leiro, Cenlle. Bodegas DO Ribeiro, turismo y hostelería.",
  },
  {
    zona: "Baixa Limia y Celanova",
    desc: "Bande, Lobios, Celanova. Termalismo, turismo rural y comercio local.",
  },
];

const sectores = [
  "Bodegas de vino y viticultores",
  "Termalismo y balnearios",
  "Turismo rural y enoturismo",
  "Hostelería y restauración",
  "Agroalimentario (castaña, mel, quesos)",
  "Comercio local y proximidad",
  "Industria auxiliar",
  "Servicios técnicos y talleres",
  "Servicios profesionales",
];

export default function ConsultorEmpresasOurense() {
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
            Consultoría empresarial — Ourense y provincia
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultor de empresas en Ourense
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Más de 25 años ayudando a empresas de Galicia a mejorar rentabilidad,
            procesos y captación de clientes. Presencial en Ourense capital y
            toda la provincia (Verín, O Barco de Valdeorras, Ribadavia, Celanova,
            Xinzo), y por videollamada en el resto de España.
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
            Qué hace un consultor de empresas en Ourense
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              Un consultor de empresas en Ourense no es un asesor fiscal ni una
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
              Hemos acompañado a empresas de bodegas, termalismo,
              agroalimentario, hostelería, turismo rural, comercio y servicios
              en toda la provincia de Ourense. Nuestro enfoque se llama{" "}
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
            Realidad empresarial de la provincia de Ourense
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Ourense tiene una economía interior con particularidades muy
            propias: peso enorme de bodegas y vino con 4 DOs, termalismo único
            en España, agroalimentario tradicional y comercio de proximidad.
            Entender esto es esencial para hacer consultoría con criterio aquí.
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
            Retos empresariales típicos en Ourense
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
            Nos desplazamos a toda la provincia de Ourense cuando el proyecto lo
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
            Sectores predominantes en Ourense con los que trabajamos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            El tejido empresarial de Ourense está marcado por el vino, el
            termalismo, el agroalimentario tradicional y el comercio local. Los
            problemas de fondo se repiten: márgenes que no se revisan,
            comercialización dependiente de terceros, procesos improvisados y
            decisiones por intuición.
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
            Cómo trabajamos con empresas de Ourense
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
                desc: "Si decides seguir, acompañamos la implementación con reuniones periódicas. Presencial en Ourense o por videollamada, según lo que necesite cada proyecto.",
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
            ¿Tienes una empresa en Ourense que quieres mejorar?
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
