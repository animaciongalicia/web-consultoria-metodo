import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Casos Reales de Mejora Empresarial — Consultor de Empresas en Galicia | Consultoría Método",
  description:
    "Más de 25 años como consultor empresarial mejorando pymes en A Coruña, Galicia y toda España. Casos reales de mejora de rentabilidad, gestión de procesos y captación de clientes en hostelería, comercio, clínicas, servicios e industria.",
  keywords: [
    "casos reales mejora empresarial",
    "consultor empresas Galicia",
    "mejora de negocios A Coruña",
    "consultoría hostelería Galicia",
    "consultor pymes resultados",
    "experiencia consultoría empresarial",
    "mejora rentabilidad casos reales",
    "consultor de empresas España",
  ],
  openGraph: {
    title: "Casos Reales de Mejora Empresarial — Consultor en Galicia y España",
    description:
      "Más de 25 años mejorando pymes. Casos reales de mejora de rentabilidad, gestión y captación en +12 sectores.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/experiencia-sectores-casos",
  },
};

const stats = [
  { number: "+25", label: "años de experiencia" },
  { number: "+12", label: "sectores diferentes" },
  { number: "+100", label: "negocios analizados" },
  { number: "5", label: "herramientas propias" },
];

const sectores = [
  {
    title: "Hostelería y restauración",
    description:
      "Restaurantes, bares, cafeterías y negocios de comida que necesitan mejorar márgenes, organizar procesos y captar clientes con más criterio.",
  },
  {
    title: "Comercio local y online",
    description:
      "Tiendas físicas y comercios electrónicos que buscan diferenciarse, ajustar precios y mejorar su propuesta comercial.",
  },
  {
    title: "Clínicas y salud",
    description:
      "Clínicas dentales, fisioterapeutas, psicólogos y centros de salud que necesitan captar pacientes y organizar mejor su negocio.",
  },
  {
    title: "Academias y formación",
    description:
      "Centros de formación, autoescuelas y academias que buscan llenar plazas y mejorar su rentabilidad.",
  },
  {
    title: "Empresas de servicios",
    description:
      "Desde empresas de limpieza hasta consultoras y agencias. Negocios donde el servicio es el producto y la diferenciación importa.",
  },
  {
    title: "Pymes industriales",
    description:
      "Pequeñas y medianas empresas industriales de distintos sectores que necesitan revisar procesos, costes y estructura comercial.",
  },
  {
    title: "Turismo, eventos y ocio",
    description:
      "Casas rurales, empresas de eventos, animación y ocio que necesitan captar clientes, gestionar temporalidad y ser rentables todo el año.",
  },
  {
    title: "Despachos y profesionales",
    description:
      "Abogados, arquitectos, ingenieros y otros profesionales que tienen un negocio pero no siempre lo gestionan como tal.",
  },
  {
    title: "Negocios locales",
    description:
      "Peluquerías, talleres, centros de estética y todo tipo de negocios de proximidad que dependen de su zona y de su reputación.",
  },
  {
    title: "Construcción y reformas",
    description:
      "Pequeñas constructoras, empresas de reformas y oficios que necesitan controlar costes por obra, mejorar presupuestos y dejar de competir solo por precio.",
  },
  {
    title: "Alimentación y distribución",
    description:
      "Obradores, distribuidores y negocios de alimentación que buscan optimizar márgenes, rutas y cartera de clientes para crecer con rentabilidad.",
  },
  {
    title: "Otros sectores",
    description:
      "El tejido empresarial en España es amplio y diverso. Si tu sector no aparece aquí, probablemente ya he trabajado con negocios similares — tanto en Galicia como en el resto de España.",
  },
];

const problemasRecurrentes = [
  "Falta de captación estable de clientes",
  "Precios mal definidos o sin criterio claro",
  "Poca diferenciación respecto a la competencia",
  "Dependencia excesiva del dueño en las operaciones",
  "Procesos poco claros o inexistentes",
  "Rentabilidad menor de la que parece sobre el papel",
  "Falta de foco comercial y dispersión de esfuerzos",
  "Equipos que no funcionan de forma autónoma",
];

const casos = [
  {
    sector: "Restauración",
    situacion:
      "Restaurante familiar con buena facturación pero sin claridad sobre márgenes reales. El dueño trabajaba 14 horas al día y sentía que el negocio no le daba lo que debería.",
    problema:
      "Costes sin controlar, carta sin escandallar, proveedores sin negociar.",
    enfoque:
      "Revisión completa de escandallos, renegociación de proveedores, rediseño de carta enfocado a rentabilidad.",
    mejora:
      "Aumento del 50% en facturación en 3 meses con la misma estructura. Más claridad y mejor control de márgenes.",
    reflexion:
      "A veces el problema no es facturar más, sino saber qué te deja dinero de verdad.",
  },
  {
    sector: "Despacho profesional",
    situacion:
      "Abogada con experiencia pero sin flujo constante de clientes. Gastaba en publicidad sin resultados claros.",
    problema:
      "Sin estrategia de captación definida. Dependía del boca a boca y de campañas genéricas.",
    enfoque:
      "Diseño de estrategia de captación específica para su especialidad, definición de cliente ideal y canales de entrada.",
    mejora:
      "Agenda completa y lista de espera. Captación constante sin depender de una sola fuente.",
    reflexion:
      "No necesitaba más publicidad. Necesitaba saber a quién dirigirse y cómo.",
  },
  {
    sector: "Empresa de eventos",
    situacion:
      "Empresa que hacía de todo: bodas, comuniones, fiestas infantiles, eventos corporativos. Trabajaba mucho pero no era rentable.",
    problema:
      "Dispersión total. Cada evento era diferente, no había procesos y los tickets eran bajos.",
    enfoque:
      "Especialización en eventos corporativos. Revisión de precios, mejora de propuesta comercial y captación enfocada.",
    mejora:
      "Tickets más altos, mejor captación de clientes corporativos y eliminación de líneas no rentables.",
    reflexion:
      "Hacer de todo no es tener más mercado. Es tener más caos.",
  },
  {
    sector: "Comercio local",
    situacion:
      "Tienda con buena ubicación y clientes fieles, pero ventas estancadas y sin capacidad de atraer público nuevo.",
    problema:
      "Sin presencia digital, precios definidos por intuición y sin propuesta diferencial clara.",
    enfoque:
      "Revisión de precios y márgenes, definición de propuesta de valor, estrategia de visibilidad local.",
    mejora:
      "Mejora de márgenes, nuevas oportunidades comerciales y mayor claridad en la dirección del negocio.",
    reflexion:
      "Los clientes fieles son un activo, pero no pueden ser el único plan.",
  },
  {
    sector: "Clínica de salud",
    situacion:
      "Centro con buenos profesionales pero poca ocupación. Dependía casi exclusivamente de recomendaciones personales.",
    problema:
      "Sin sistema de captación. Cuando bajaban las recomendaciones, bajaba la facturación.",
    enfoque:
      "Definición de servicios prioritarios, estrategia de captación local y mejora de la comunicación comercial.",
    mejora:
      "Mayor ocupación, nuevos canales de entrada de pacientes y menor dependencia del boca a boca.",
    reflexion:
      "Ser buen profesional no garantiza tener clientes. Hay que saber comunicarlo.",
  },
];

export default function ExperienciaSectoresCasos() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Casos reales de mejora empresarial — consultor de empresas en Galicia y España
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Más de 25 años como consultor empresarial en A Coruña, Galicia y toda España.
            La experiencia no sirve para presumir. Sirve para detectar antes los
            errores, entender más rápido cada negocio y aplicar mejoras con
            sentido.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-primary-800 bg-primary-950 py-12">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-accent-400 md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm font-medium text-primary-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Más de 25 años trabajando con negocios y empresas
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-gray-600 md:text-lg">
            <p>
              La consultoría empresarial no se aprende solo en libros. Se aprende
              sentándose con empresarios, mirando sus números, entendiendo sus
              problemas y trabajando juntos para resolverlos.
            </p>
            <p>
              A lo largo de más de 25 años he trabajado con negocios de sectores
              muy distintos, tamaños diferentes y problemas variados. Esa visión
              amplia es lo que me permite detectar patrones, evitar errores
              comunes y aplicar soluciones que funcionan.
            </p>
            <p>
              No existe un negocio igual a otro, pero los problemas de fondo se
              repiten más de lo que parece. Y eso, con experiencia, se ve antes.
            </p>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué tipo de empresas y sectores he analizado o acompañado
          </h2>
          <p className="section-subtitle text-gray-600">
            Cada sector tiene sus particularidades, pero todos comparten la
            necesidad de captar clientes, ser rentables y estar bien organizados.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectores.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white p-5 transition-colors hover:border-primary-200"
              >
                <h3 className="font-semibold text-primary-800">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas recurrentes */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Problemas que se repiten en muchos negocios
          </h2>
          <p className="section-subtitle text-gray-600">
            Da igual el sector. Cuando un negocio no va como debería, casi
            siempre hay alguno de estos problemas debajo.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
            {problemasRecurrentes.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-accent-100 bg-accent-50/50 p-4"
              >
                <span
                  className="mt-0.5 font-bold text-accent-500"
                  aria-hidden="true"
                >
                  !
                </span>
                <span className="text-gray-700">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos reales */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Casos reales de situaciones trabajadas
          </h2>
          <p className="section-subtitle text-gray-600">
            No todos los resultados se miden en porcentajes. A veces lo más
            importante es la claridad, el orden y las decisiones que se dejan de
            aplazar.
          </p>

          <div className="mt-10 space-y-6">
            {casos.map((caso, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="border-b border-gray-100 bg-primary-50/50 px-6 py-3">
                  <span className="text-sm font-semibold text-primary-800">
                    {caso.sector}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Situación
                      </p>
                      <p className="mt-1.5 text-gray-700">{caso.situacion}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Problema principal
                      </p>
                      <p className="mt-1.5 text-gray-700">{caso.problema}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Enfoque aplicado
                      </p>
                      <p className="mt-1.5 text-gray-700">{caso.enfoque}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Tipo de mejora
                      </p>
                      <p className="mt-1.5 text-gray-700">{caso.mejora}</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-lg border-l-4 border-primary-300 bg-primary-50/50 px-4 py-3">
                    <p className="text-sm font-medium italic text-primary-800">
                      &ldquo;{caso.reflexion}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué importa la experiencia */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Por qué la experiencia importa cuando se analiza una empresa
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-gray-600 md:text-lg">
            <p>
              Cualquiera puede dar una opinión sobre un negocio. Pero saber
              mirar una empresa con criterio requiere haber visto muchas,
              haberse equivocado y haber aprendido de cada una.
            </p>
            <p>
              La experiencia permite hacer las preguntas correctas, detectar
              señales que otros no ven y proponer soluciones que funcionan
              porque ya se han probado en contextos similares.
            </p>
            <p className="font-semibold text-primary-800">
              No es lo mismo opinar que saber dónde mirar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres que analice tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Si quieres saber qué mejorar en tu empresa y por dónde empezar,
            solicita un diagnóstico inicial. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="/" className="transition-colors hover:text-accent-300">
              ← Inicio
            </a>
            <a
              href="/metodo-herramientas"
              className="transition-colors hover:text-accent-300"
            >
              Método y herramientas →
            </a>
            <a
              href="/colaboradores"
              className="transition-colors hover:text-accent-300"
            >
              Colaboradores →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
