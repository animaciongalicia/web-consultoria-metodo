import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultoría para servicios profesionales y empresas de servicios | Consultoría Método",
  description:
    "Consultoría para despachos profesionales, agencias, empresas de servicios, talleres, construcción, inmobiliarias y transporte. Captación de clientes, rentabilidad, organización y salida del autoempleo. +25 años.",
  keywords: [
    "consultoría servicios profesionales",
    "consultoría para despachos",
    "consultor para abogados",
    "consultoría agencias marketing",
    "consultoría empresas de servicios",
    "mejorar rentabilidad despacho",
    "consultoría empresas limpieza",
    "consultoría talleres mecánicos",
    "consultoría construcción reformas",
    "consultoría inmobiliarias",
    "consultoría transporte logística",
    "captación clientes servicios profesionales",
  ],
  openGraph: {
    title:
      "Consultoría para servicios profesionales y empresas de servicios — Consultoría Método",
    description:
      "Mejora la rentabilidad de tu despacho, agencia o empresa de servicios. Captación, organización y salida del autoempleo. +25 años.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/consultoria-servicios-profesionales",
  },
};

const negocios = [
  "Despachos de abogados",
  "Despachos de arquitectos e ingenieros",
  "Agencias de marketing y diseño",
  "Empresas de comunicación",
  "Consultoras y asesorías",
  "Empresas de limpieza e instalaciones",
  "Servicios de mantenimiento",
  "Servicios técnicos especializados",
  "Talleres mecánicos",
  "Empresas de construcción y reformas",
  "Inmobiliarias",
  "Empresas de transporte y logística",
];

const problemas = [
  {
    text: "Tu negocio eres tú. Si no estás, no funciona.",
    detail:
      "El autoempleo disfrazado de empresa es el problema más común en servicios profesionales. Y el más difícil de ver desde dentro.",
  },
  {
    text: "Cobras por horas y tu techo de ingresos es tu tiempo disponible.",
    detail:
      "Si solo ganas cuando trabajas tú, no tienes un negocio escalable. Tienes un empleo por cuenta propia.",
  },
  {
    text: "Dependes del boca a boca y no tienes un sistema de captación.",
    detail:
      "El boca a boca es valioso, pero no es predecible. Cuando baja, baja tu facturación.",
  },
  {
    text: "Aceptas cualquier cliente o proyecto para no decir que no.",
    detail:
      "Dispersión de foco, clientes poco rentables y proyectos que no encajan. Todo por miedo a quedarse sin trabajo.",
  },
  {
    text: "Tus tarifas llevan años sin revisarse y los costes no paran de subir.",
    detail:
      "Subir precios da miedo, pero mantenerlos sin criterio es perder dinero cada día.",
  },
  {
    text: "No tienes procesos documentados y cada proyecto se gestiona de forma distinta.",
    detail:
      "Sin procesos no puedes delegar, no puedes escalar y no puedes medir. Todo depende de la memoria y la improvisación.",
  },
  {
    text: "Inviertes en publicidad o en presencia digital sin resultados claros.",
    detail:
      "En servicios profesionales, la captación no funciona como en retail. Hay que adaptar los canales al tipo de cliente.",
  },
];

const conocemos = [
  {
    title: "Tarifas y modelo de ingresos",
    description:
      "Coste real por hora de trabajo, tarifas por proyecto, paquetes de servicios, ingresos recurrentes. La estructura de precios define si tu negocio es rentable o no.",
  },
  {
    title: "Salida del autoempleo",
    description:
      "Sistematizar procesos, delegar funciones, crear estructura para que el negocio no dependa al 100 % de ti. El paso de autoempleado a empresario.",
  },
  {
    title: "Captación para servicios profesionales",
    description:
      "El cliente de un despacho o una agencia no se capta igual que el de una tienda. Conocemos los canales, los tiempos y las estrategias que funcionan.",
  },
  {
    title: "Segmentación de cartera de clientes",
    description:
      "No todos los clientes valen lo mismo. Identificar los rentables, los que no lo son y los que tienen potencial de crecimiento cambia la trayectoria del negocio.",
  },
  {
    title: "Procesos y delegación",
    description:
      "Documentar cómo se hacen las cosas, formar al equipo, crear checklists y flujos de trabajo. Para que puedas irte una semana sin que todo se pare.",
  },
  {
    title: "Propuesta comercial y diferenciación",
    description:
      "En un mercado lleno de profesionales que hacen lo mismo, diferenciarse es la clave para no competir por precio. Trabajamos tu propuesta de valor.",
  },
];

const servicios = [
  {
    number: "01",
    title: "Diagnóstico de rentabilidad del negocio",
    description:
      "Analizamos la estructura de ingresos, los costes reales por hora/proyecto, la rentabilidad por cliente y por servicio. Te decimos dónde ganas, dónde pierdes y qué cambiar.",
  },
  {
    number: "02",
    title: "Revisión de tarifas y propuesta de valor",
    description:
      "Ajustamos tarifas con criterio, definimos paquetes de servicios rentables y trabajamos la propuesta comercial para que dejes de competir por precio.",
  },
  {
    number: "03",
    title: "Sistema de captación de clientes",
    description:
      "Diseñamos un sistema de captación adaptado a tu tipo de servicio: referidos, alianzas, presencia digital, proceso comercial y seguimiento.",
  },
  {
    number: "04",
    title: "Organización y salida del autoempleo",
    description:
      "Procesos documentados, delegación, roles claros y estructura para que el negocio funcione sin que todo pase por ti.",
  },
];

const pasos = [
  {
    number: "1",
    title: "Conversación inicial gratuita",
    description:
      "30 minutos para entender tu situación: tipo de servicio, modelo de ingresos, equipo, problemas principales. Sin compromiso.",
  },
  {
    number: "2",
    title: "Diagnóstico y propuesta cerrada",
    description:
      "Analizamos tu negocio, identificamos los problemas reales y te presentamos una propuesta con alcance, plazo y precio cerrado.",
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
    question:
      "Soy profesional independiente, ¿esto también es para mí?",
    answer:
      "Sí, siempre que quieras que tu actividad funcione como un negocio y no solo como un empleo por cuenta propia. Trabajamos con abogados, arquitectos, consultores y otros profesionales que quieren mejorar su captación, sus tarifas y su organización.",
  },
  {
    question:
      "¿Trabajáis con empresas de servicios técnicos o industriales?",
    answer:
      "Sí. Empresas de limpieza, mantenimiento, instalaciones, servicios técnicos, talleres mecánicos, construcción y reformas. Los problemas de rentabilidad y organización son los mismos aunque el servicio sea distinto.",
  },
  {
    question:
      "¿Cuánto cuesta la consultoría para un despacho profesional?",
    answer:
      "Desde 500 € el diagnóstico puntual. Los programas de mejora completos arrancan desde 1.200 € y duran entre 2 y 3 meses. Siempre con propuesta cerrada tras una primera conversación sin compromiso.",
  },
  {
    question:
      "Mi agencia factura bien pero no me queda beneficio, ¿podéis ayudar?",
    answer:
      "Es uno de los problemas más habituales en agencias y consultoras. Se factura mucho pero los márgenes son muy bajos por mala estructura de precios, proyectos infravalorados o costes no controlados. Es exactamente lo que analizamos y corregimos.",
  },
  {
    question:
      "¿También ayudáis a inmobiliarias y empresas de transporte?",
    answer:
      "Sí. Inmobiliarias, transporte y logística tienen sus particularidades, pero los problemas de captación, rentabilidad y organización se trabajan con el mismo método. Lo adaptamos a cada modelo de negocio.",
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
  name: "Consultoría para servicios profesionales y empresas de servicios",
  description:
    "Consultoría empresarial para despachos profesionales, agencias, empresas de servicios técnicos, construcción, inmobiliarias y transporte.",
  areaServed: { "@type": "Country", name: "España" },
  serviceType: [
    "Consultoría para despachos profesionales",
    "Consultoría para agencias",
    "Consultoría para empresas de servicios",
    "Mejora de rentabilidad en servicios",
    "Captación de clientes para profesionales",
  ],
};

export default function ConsultoriaServicios() {
  const subject = encodeURIComponent(
    "Consulta sobre consultoría para servicios profesionales"
  );
  const body = encodeURIComponent(
    "Hola,\n\nTengo una empresa de servicios y me interesa conocer más sobre vuestros servicios de consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
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
            Consultoría especializada — Servicios profesionales y empresas de
            servicios
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría para servicios profesionales y empresas de servicios
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Si tienes un despacho, una agencia, una empresa de servicios
            técnicos, de construcción, de transporte o de cualquier otra
            actividad de servicios y sientes que tu negocio depende demasiado de
            ti, que no crece como debería o que los márgenes no reflejan el
            trabajo que haces, podemos ayudarte.
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
            Si tu negocio es de servicios, esto te interesa
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Trabajamos con despachos de abogados, arquitectos, agencias de
            marketing, empresas de limpieza, talleres mecánicos, constructoras,
            inmobiliarias, empresas de transporte y cualquier negocio donde el
            servicio es el producto. Los problemas de fondo son los mismos.
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
            Los problemas que frenan la rentabilidad en empresas de servicios
          </h2>
          <p className="section-subtitle text-gray-400">
            Cuando vendes tu tiempo o tu conocimiento, los problemas de
            rentabilidad son diferentes. Y más difíciles de ver desde dentro.
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
              clientes.{" "}
              <strong className="text-white">
                Necesitas una estructura de negocio que funcione
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
            Entendemos cómo funciona un negocio de servicios
          </h2>
          <p className="section-subtitle text-gray-600">
            Conocemos la dinámica de vender conocimiento, tiempo y talento. Y
            los problemas específicos de escalar sin perder calidad.
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
            Cómo ayudamos a empresas de servicios
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
            Casos reales en servicios profesionales
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/blog/caso-exito-despacho-profesional-independiente"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un despacho profesional atrapado en el autoempleo
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cómo un profesional independiente dejó de ser esclavo de su
                propio negocio y empezó a funcionar como empresa.
              </p>
            </a>
            <a
              href="/blog/caso-exito-empresa-servicios-tecnicos-margen"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Una empresa de servicios técnicos que duplicó su margen
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Revisión de tarifas, segmentación de clientes y organización
                interna para pasar de facturar mucho a ganar de verdad.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre consultoría para servicios
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
            ¿Quieres dejar de ser esclavo de tu propio negocio de servicios?
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
            Lecturas relacionadas para empresas de servicios
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/blog/como-vender-servicios-profesionales"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Ventas
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo vender servicios profesionales sin sentirte vendedor
              </p>
            </a>
            <a
              href="/blog/mi-empresa-depende-de-mi"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Organización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Mi empresa depende de mí: cómo salir de la trampa
              </p>
            </a>
            <a
              href="/blog/como-subir-precios-sin-perder-clientes"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Precios
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo subir precios sin perder clientes
              </p>
            </a>
            <a
              href="/blog/como-hacer-proceso-comercial-pyme"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Comercial
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo montar un proceso comercial en tu pyme
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
