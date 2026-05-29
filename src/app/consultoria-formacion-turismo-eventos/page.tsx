import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultoría para formación, turismo y eventos | Consultoría Método",
  description:
    "Consultoría para academias, autoescuelas, empresas de eventos, agencias de viajes, turismo activo y animación. Rentabilidad, captación de alumnos y clientes, estacionalidad y organización. +25 años.",
  keywords: [
    "consultoría academias",
    "consultoría autoescuelas",
    "consultoría empresas de eventos",
    "consultor para academias",
    "mejorar rentabilidad academia",
    "consultoría agencias de viajes",
    "consultoría turismo activo",
    "consultoría empresas animación",
    "captación alumnos academia",
    "consultoría formación",
    "consultoría eventos y bodas",
    "rentabilidad empresa de formación",
  ],
  openGraph: {
    title:
      "Consultoría para formación, turismo y eventos — Consultoría Método",
    description:
      "Mejora la rentabilidad de tu academia, empresa de eventos o negocio de turismo. Captación, estacionalidad y organización. +25 años.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/consultoria-formacion-turismo-eventos",
  },
};

const negocios = [
  "Academias de formación",
  "Autoescuelas",
  "Academias de idiomas",
  "Empresas de animación y ocio",
  "Empresas de eventos y bodas",
  "Agencias de viajes",
  "Turismo activo y aventura",
  "Campamentos y actividades",
  "Servicios complementarios y experiencias",
];

const problemas = [
  {
    text: "Tienes meses con plazas llenas y meses donde apenas cubres costes.",
    detail:
      "La estacionalidad mata la rentabilidad si no se gestiona. No puedes depender solo de septiembre o de la temporada de bodas.",
  },
  {
    text: "No sabes cuánto te cuesta cada curso, cada evento o cada servicio.",
    detail:
      "Sin escandallo por actividad, fijas precios a ojo y no sabes cuáles te dejan dinero y cuáles no.",
  },
  {
    text: "Captar alumnos o clientes nuevos cada temporada es una lucha.",
    detail:
      "Cada ciclo empiezas de cero. Sin un sistema de captación estable, la incertidumbre es constante.",
  },
  {
    text: "Ofreces muchos servicios distintos y no sabes cuáles son rentables.",
    detail:
      "Dispersión: muchas líneas abiertas, poco foco y margen repartido entre demasiadas actividades.",
  },
  {
    text: "Los clientes vienen una vez y no vuelven ni recomiendan.",
    detail:
      "Sin un sistema de fidelización y recurrencia, cada cliente es un coste de adquisición que no se amortiza.",
  },
  {
    text: "Dependes de plataformas de terceros para captar clientes.",
    detail:
      "Plataformas de reservas, portales de bodas o directorios se llevan una comisión y controlan la relación con tu cliente.",
  },
  {
    text: "La organización es un caos: cada evento, cada curso se gestiona de forma diferente.",
    detail:
      "Sin procesos estandarizados, cada proyecto es reinventar la rueda. Más errores, más estrés, menos margen.",
  },
];

const conocemos = [
  {
    title: "Escandallo por curso, evento o servicio",
    description:
      "Calculamos el coste real de cada actividad: profesores, materiales, espacio, marketing, horas de gestión. Solo así puedes saber qué te deja dinero.",
  },
  {
    title: "Gestión de estacionalidad",
    description:
      "Estrategias para generar ingresos fuera de temporada alta: cursos online, packs anuales, actividades complementarias y diversificación de oferta.",
  },
  {
    title: "Captación de alumnos y clientes",
    description:
      "Google Maps, SEO local, alianzas con empresas, campañas de captación por temporada y sistemas de referidos. Lo que realmente llena plazas.",
  },
  {
    title: "Modelo de ingresos recurrentes",
    description:
      "Suscripciones, bonos, matrículas anuales, packs de servicios. Crear recurrencia para no empezar de cero cada mes o cada temporada.",
  },
  {
    title: "Especialización y posicionamiento",
    description:
      "En mercados con mucha oferta, ser generalista es ser invisible. Definimos tu especialización y tu propuesta diferencial.",
  },
  {
    title: "Procesos y operaciones",
    description:
      "Organización de eventos, gestión de inscripciones, comunicación con clientes, logística. Procesos claros para que cada actividad se ejecute sin improvisar.",
  },
];

const servicios = [
  {
    number: "01",
    title: "Diagnóstico de rentabilidad del negocio",
    description:
      "Analizamos rentabilidad por actividad, costes fijos y variables, estructura de ingresos y estacionalidad. Te decimos qué te deja dinero y qué no.",
  },
  {
    number: "02",
    title: "Revisión de precios y oferta",
    description:
      "Ajustamos precios con escandallo, eliminamos actividades que no aportan y diseñamos una oferta enfocada que maximice el margen por plaza o por evento.",
  },
  {
    number: "03",
    title: "Sistema de captación y fidelización",
    description:
      "Diseñamos un sistema para llenar plazas cada temporada y para que los alumnos o clientes se queden. Captación propia, menos dependencia de portales.",
  },
  {
    number: "04",
    title: "Organización y procesos",
    description:
      "Gestión de inscripciones, planificación de actividades, roles del equipo, comunicación con clientes. Para que cada curso o evento se ejecute sin caos.",
  },
];

const pasos = [
  {
    number: "1",
    title: "Conversación inicial gratuita",
    description:
      "30 minutos para entender tu situación: tipo de actividad, facturación, estacionalidad, problemas principales. Sin compromiso.",
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
      "¿Tenéis experiencia con academias y centros de formación?",
    answer:
      "Sí. Hemos trabajado con academias de formación, autoescuelas y empresas de formación que necesitaban llenar plazas, controlar costes por curso y mejorar su rentabilidad. Tenemos un caso publicado de una empresa de formación que facturaba sin saber si ganaba dinero.",
  },
  {
    question:
      "Mi empresa de eventos es muy estacional, ¿se puede mejorar eso?",
    answer:
      "La estacionalidad no se elimina, pero se gestiona. Se puede diversificar la oferta, crear productos para temporada baja, generar ingresos recurrentes y ajustar la estructura de costes a los ciclos del negocio. Es uno de los trabajos más habituales que hacemos.",
  },
  {
    question:
      "¿Cuánto cuesta la consultoría para una academia o empresa de eventos?",
    answer:
      "Desde 500 € el diagnóstico puntual. Los programas de mejora completos arrancan desde 1.200 € y duran entre 2 y 3 meses. Propuesta cerrada tras la primera conversación, sin compromiso.",
  },
  {
    question:
      "Tengo una agencia de viajes, ¿también trabajáis con turismo?",
    answer:
      "Sí. Agencias de viajes, turismo activo y campamentos tienen problemas de captación, estacionalidad y diferenciación que conocemos bien. El método es el mismo: analizar, detectar oportunidades y aplicar mejoras concretas.",
  },
  {
    question:
      "¿Ayudáis a reducir la dependencia de plataformas de terceros?",
    answer:
      "Sí. Muchas empresas de eventos y turismo dependen de portales que se llevan comisiones y controlan la relación con el cliente. Trabajamos para crear canales de captación propios que complementen o sustituyan esa dependencia.",
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
  name: "Consultoría para formación, turismo y eventos",
  description:
    "Consultoría empresarial para academias, autoescuelas, empresas de eventos, agencias de viajes y turismo activo.",
  areaServed: { "@type": "Country", name: "España" },
  serviceType: [
    "Consultoría para academias",
    "Consultoría para autoescuelas",
    "Consultoría para empresas de eventos",
    "Consultoría para agencias de viajes",
    "Mejora de rentabilidad en formación",
  ],
};

export default function ConsultoriaFormacion() {
  const subject = encodeURIComponent(
    "Consulta sobre consultoría para formación, turismo o eventos"
  );
  const body = encodeURIComponent(
    "Hola,\n\nTengo un negocio de formación/turismo/eventos y me interesa conocer más sobre vuestros servicios de consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
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
            Consultoría especializada — Formación, turismo y eventos
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría para formación, turismo y eventos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Si tienes una academia, una autoescuela, una empresa de eventos, una
            agencia de viajes o un negocio de turismo activo y sientes que la
            estacionalidad te ahoga, que no llenas plazas o que trabajas mucho
            sin saber si ganas dinero, podemos ayudarte. Con análisis real y un
            plan concreto.
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
            Si tu negocio es de formación, turismo o eventos, esto te interesa
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Trabajamos con academias, autoescuelas, academias de idiomas,
            empresas de animación, organizadores de eventos y bodas, agencias de
            viajes, turismo activo y campamentos. Todos comparten
            estacionalidad, necesidad de llenar plazas y problemas de
            rentabilidad similares.
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
            Los problemas que frenan la rentabilidad en formación, turismo y
            eventos
          </h2>
          <p className="section-subtitle text-gray-400">
            Negocios con picos y valles, dependencia de temporada y márgenes que
            no se ven claros. Estos son los problemas más frecuentes.
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
              actividades.{" "}
              <strong className="text-white">
                Necesitas que las que tienes sean rentables y predecibles
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
            Entendemos cómo funcionan los negocios de formación, turismo y
            eventos
          </h2>
          <p className="section-subtitle text-gray-600">
            Conocemos la dinámica de plazas, temporadas, inscripciones y la
            presión de empezar cada ciclo desde cero.
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
            Cómo ayudamos a empresas de formación, turismo y eventos
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
            Casos reales en formación y eventos
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/blog/caso-exito-empresa-formacion-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Una empresa de formación que facturaba sin saber si ganaba dinero
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cómo pusimos orden en los números, eliminamos cursos no
                rentables y aumentamos el margen sin subir precios.
              </p>
            </a>
            <a
              href="/blog/caso-exito-ferrados-transformacion-modelo-negocio"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Transformación de modelo de negocio: de tráfico a rentabilidad
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Un negocio digital con mucho tráfico que no facturaba. Cómo
                construimos un modelo rentable desde cero.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre consultoría para formación, turismo y
            eventos
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
            ¿Quieres que analicemos la rentabilidad de tu negocio de formación,
            turismo o eventos?
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
            Lecturas relacionadas para formación, turismo y eventos
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/blog/como-crear-oferta-irresistible"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Ventas
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo crear una oferta irresistible para tu negocio
              </p>
            </a>
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
              href="/blog/redes-sociales-para-pymes"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Marketing
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Redes sociales para pymes: cuándo sirven y cuándo no
              </p>
            </a>
            <a
              href="/blog/como-diferenciarte-de-tu-competencia"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Estrategia
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo diferenciarte de tu competencia sin competir en precio
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
