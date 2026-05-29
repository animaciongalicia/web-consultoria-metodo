import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultoría para clínicas, centros de salud y bienestar | Consultoría Método",
  description:
    "Consultoría para clínicas dentales, fisioterapia, veterinarias, estética, gimnasios, psicología y ópticas. Mejorar ocupación, rentabilidad por servicio y captación de pacientes. +25 años.",
  keywords: [
    "consultoría clínicas dentales",
    "consultoría para clínicas",
    "mejorar rentabilidad clínica",
    "consultoría fisioterapia",
    "consultoría centros de estética",
    "consultoría gimnasios",
    "consultor para veterinarias",
    "captación pacientes clínica",
    "consultoría centros de salud",
    "mejorar ocupación clínica",
    "consultoría ópticas",
    "consultoría centros bienestar",
  ],
  openGraph: {
    title:
      "Consultoría para clínicas, centros de salud y bienestar — Consultoría Método",
    description:
      "Mejora la rentabilidad de tu clínica, gimnasio o centro de bienestar. Ocupación, precios, captación de pacientes y organización. +25 años.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultoria-salud-bienestar",
  },
};

const negocios = [
  "Clínicas dentales",
  "Centros de fisioterapia",
  "Clínicas veterinarias",
  "Centros de estética y belleza",
  "Gimnasios y centros deportivos",
  "Entrenadores personales y studios",
  "Consultas de psicología",
  "Consultas de nutrición",
  "Spas y centros termales",
  "Ópticas y centros auditivos",
  "Peluquerías y barberías",
  "Centros de uñas y estética avanzada",
];

const problemas = [
  {
    text: "Tienes agenda llena pero a final de mes no ves el beneficio.",
    detail:
      "La ocupación no es lo mismo que la rentabilidad. Si los servicios más demandados tienen poco margen, trabajas mucho y ganas poco.",
  },
  {
    text: "No sabes qué servicios son rentables y cuáles te hacen perder dinero.",
    detail:
      "Sin un análisis de rentabilidad por servicio, estás llenando la agenda con lo que menos te conviene.",
  },
  {
    text: "Los pacientes vienen una vez y no vuelven.",
    detail:
      "Sin un sistema de recall y fidelización, cada paciente nuevo es un coste que no se amortiza.",
  },
  {
    text: "Dependes del boca a boca para conseguir pacientes nuevos.",
    detail:
      "El boca a boca es lento y no es predecible. Un mes lleno, el siguiente medio vacío.",
  },
  {
    text: "Compites por precio con otros centros de tu zona.",
    detail:
      "Bajar precios en salud es una espiral sin fondo. La diferenciación viene por especialización, confianza y experiencia.",
  },
  {
    text: "Tienes profesionales buenos pero no generas negocio suficiente para todos.",
    detail:
      "Cabinas vacías, horas muertas y profesionales infrautilizados. Eso es coste fijo sin ingresos.",
  },
  {
    text: "Todo pasa por ti: pacientes, gestión, proveedores, personal, marketing.",
    detail:
      "Si eres el dueño, el profesional, el gestor y el comercial, algo va a fallar. Siempre.",
  },
];

const conocemos = [
  {
    title: "Rentabilidad por servicio y por profesional",
    description:
      "Analizamos cuánto deja cada tipo de tratamiento o servicio, incluyendo tiempo de cabina, material, coste de personal y amortización de equipos.",
  },
  {
    title: "Sistema de recall de pacientes",
    description:
      "Diseñamos sistemas de seguimiento y recordatorio para que los pacientes vuelvan cuando les toca. La recurrencia es la base de la rentabilidad en salud.",
  },
  {
    title: "Captación de pacientes nuevos",
    description:
      "Google Maps, SEO local, reseñas, alianzas con otros profesionales y presencia online. Lo que realmente trae pacientes a una clínica o centro.",
  },
  {
    title: "Gestión de agenda y ocupación",
    description:
      "Optimización de franjas horarias, gestión de cancelaciones, tiempos entre citas y ratio de profesionales por franja. Maximizar la ocupación rentable.",
  },
  {
    title: "Estructura de precios y paquetes",
    description:
      "Bonos, packs, programas de fidelización y precios por sesión. La estructura de precios correcta fideliza y mejora el ticket medio.",
  },
  {
    title: "Diferenciación y especialización",
    description:
      "En un mercado con muchos centros ofreciendo lo mismo, especializarse y comunicar bien tu propuesta de valor marca la diferencia.",
  },
];

const servicios = [
  {
    number: "01",
    title: "Diagnóstico de rentabilidad del centro",
    description:
      "Analizamos rentabilidad por servicio, por profesional y por franja horaria. Costes directos, indirectos y estructura. Te decimos dónde ganas y dónde pierdes.",
  },
  {
    number: "02",
    title: "Revisión de precios y paquetes",
    description:
      "Ajustamos tarifas, diseñamos bonos y packs que fidelicen, y eliminamos servicios que no aportan margen. El objetivo es que cada hora de cabina sea rentable.",
  },
  {
    number: "03",
    title: "Sistema de captación y recall",
    description:
      "Diseñamos un sistema para atraer pacientes nuevos y para que los actuales vuelvan cuando les toca. Google Maps, reseñas, presencia digital y referidos.",
  },
  {
    number: "04",
    title: "Organización y procesos internos",
    description:
      "Gestión de agenda, protocolos, roles del equipo, comunicación con pacientes y tareas administrativas. Para que el centro funcione sin que todo pase por ti.",
  },
];

const pasos = [
  {
    number: "1",
    title: "Conversación inicial gratuita",
    description:
      "30 minutos para entender tu situación: tipo de centro, servicios, equipo, ocupación, problemas principales. Sin compromiso.",
  },
  {
    number: "2",
    title: "Diagnóstico y propuesta cerrada",
    description:
      "Analizamos tu centro, identificamos los problemas reales y te presentamos una propuesta con alcance, plazo y precio cerrado.",
  },
  {
    number: "3",
    title: "Trabajo, seguimiento y resultados",
    description:
      "Ejecutamos el plan con reuniones periódicas. Medimos resultados en euros, no en sensaciones. Sin letra pequeña.",
  },
];

const FAQS = [
  {
    question: "¿Tenéis experiencia con clínicas y centros de salud?",
    answer:
      "Sí. Hemos trabajado con clínicas dentales, centros de fisioterapia, veterinarias y otros centros de salud. Conocemos la dinámica de agenda, la gestión de pacientes, los sistemas de recall y los problemas de rentabilidad habituales en el sector.",
  },
  {
    question:
      "Mi clínica tiene buena ocupación pero poco margen, ¿podéis ayudar?",
    answer:
      "Es uno de los problemas más frecuentes. Suele estar causado por servicios con margen bajo que llenan la agenda, precios sin revisar o costes no controlados. Es exactamente lo que analizamos en el diagnóstico.",
  },
  {
    question: "¿Cuánto cuesta la consultoría para una clínica?",
    answer:
      "Desde 500 € el diagnóstico puntual. Los programas de mejora completos arrancan desde 1.200 € y duran entre 2 y 3 meses. Propuesta cerrada tras la primera conversación.",
  },
  {
    question: "Tengo un gimnasio, ¿también es para mí?",
    answer:
      "Sí. Gimnasios, centros deportivos y entrenadores personales tienen problemas de captación, retención de socios y rentabilidad que conocemos bien. De hecho, tenemos un caso publicado de un gimnasio que dejó de competir por precio.",
  },
  {
    question: "¿Ayudáis con la captación de pacientes online?",
    answer:
      "Ayudamos a definir la estrategia de captación online: Google Maps, reseñas, SEO local y presencia digital con sentido. No hacemos la gestión de redes ni creamos webs, pero sí diseñamos la estrategia y supervisamos que funcione.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "ProfessionalService",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  name: "Consultoría para clínicas, centros de salud y bienestar",
  description:
    "Consultoría empresarial para clínicas dentales, fisioterapia, veterinarias, estética, gimnasios, psicología y ópticas.",
  areaServed: { "@type": "Country", name: "España" },
  serviceType: [
    "Consultoría para clínicas dentales",
    "Consultoría para centros de fisioterapia",
    "Consultoría para gimnasios",
    "Mejora de rentabilidad en centros de salud",
    "Captación de pacientes",
  ],
};

export default function ConsultoriaSalud() {
  const subject = encodeURIComponent(
    "Consulta sobre consultoría para centro de salud o bienestar"
  );
  const body = encodeURIComponent(
    "Hola,\n\nTengo un centro de salud/bienestar y me interesa conocer más sobre vuestros servicios de consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
  );
  const mailtoLink = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Consultoría especializada — Salud y bienestar
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría para clínicas, centros de salud y bienestar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Si tienes una clínica dental, un centro de fisioterapia, una
            veterinaria, un gimnasio, un centro de estética o cualquier negocio
            de salud y bienestar, y sientes que la agenda no se traduce en
            beneficio, que no llegan suficientes pacientes o que todo depende de
            ti, podemos ayudarte.
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

      {/* Tipos de negocio */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Si tu negocio es de salud o bienestar, esto te interesa
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Trabajamos con clínicas dentales, centros de fisioterapia,
            veterinarias, centros de estética, gimnasios, consultas de
            psicología, nutrición, ópticas y spas. Todos comparten un modelo
            basado en citas, sesiones o cuotas — y los problemas de
            rentabilidad, captación y organización son muy similares.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {negocios.map((n) => (
              <div
                key={n}
                className="flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50/30 p-3 text-sm text-primary-900"
              >
                <span className="text-accent-500">&#10003;</span>
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="section-padding bg-gray-800">
        <div className="container-narrow">
          <h2 className="section-heading text-white">
            Los problemas que frenan la rentabilidad en centros de salud y
            bienestar
          </h2>
          <p className="section-subtitle text-gray-400">
            Tener la agenda llena no significa ser rentable. Estos son los
            problemas que vemos con más frecuencia.
          </p>
          <div className="mt-10 space-y-5">
            {problemas.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 text-lg text-accent-400">&#10005;</span>
                <div>
                  <p className="font-medium text-gray-200">{p.text}</p>
                  <p className="mt-1 text-sm text-gray-400">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-white/5 p-6 text-center">
            <p className="text-gray-300">
              Si te reconoces en varios de estos problemas, no necesitas más
              pacientes.{" "}
              <strong className="text-white">
                Necesitas que cada paciente y cada hora de trabajo sea rentable
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Qué entendemos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Entendemos cómo funciona un centro de salud o bienestar
          </h2>
          <p className="section-subtitle text-gray-600">
            Conocemos la dinámica de citas, cabinas, cuotas y la gestión de
            profesionales. No damos consejos genéricos.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conocemos.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-gray-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo ayudamos */}
      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo ayudamos a centros de salud y bienestar
          </h2>
          <div className="mt-10 space-y-6">
            {servicios.map((s) => (
              <div
                key={s.number}
                className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md md:p-8"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {s.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo empezamos a trabajar
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {pasos.map((p) => (
              <div
                key={p.number}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-xl font-extrabold text-primary-700">
                  {p.number}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Casos reales en salud y bienestar
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/blog/caso-exito-clinica-ocupacion-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Una clínica con agenda llena y rentabilidad baja
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cómo descubrimos que los servicios más demandados eran los menos
                rentables y qué hicimos para cambiar eso.
              </p>
            </a>
            <a
              href="/blog/caso-exito-gimnasio-coruna-precio"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un gimnasio en Coruña que dejó de competir por precio
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Revisión de cuotas, posicionamiento y captación para salir de la
                guerra de precios.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre consultoría para salud y bienestar
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-5 open:border-accent-300 open:bg-accent-50/40"
              >
                <summary className="cursor-pointer list-none font-semibold text-primary-900 md:text-lg">
                  <span className="mr-2 inline-block text-accent-600 transition-transform group-open:rotate-90">
                    &#9656;
                  </span>
                  {faq.question}
                </summary>
                <p className="mt-3 pl-6 leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres que analicemos la rentabilidad de tu clínica o centro?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-200 md:text-lg">
            La primera conversación es gratis y sin compromiso. 30 minutos para
            entender tu situación y ver si tiene sentido trabajar juntos.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={mailtoLink} className="btn-primary">
              Enviar email
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
            <a href={SITE.phoneLink} className="btn-outline-light">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Lecturas relacionadas */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-primary-900">
            Lecturas relacionadas para centros de salud y bienestar
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/blog/como-captar-clientes-negocio-local"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Captación
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo captar clientes en un negocio local sin tirar dinero
              </p>
            </a>
            <a
              href="/blog/como-fidelizar-clientes-pyme"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Fidelización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo fidelizar clientes en una pyme: estrategias que funcionan
              </p>
            </a>
            <a
              href="/blog/como-dejar-de-competir-por-precio"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Precios
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo dejar de competir por precio
              </p>
            </a>
            <a
              href="/blog/google-my-business-negocios-locales"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Visibilidad
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Google My Business para negocios locales: guía práctica
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
