import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultoría para hostelería y restauración | Mejorar rentabilidad restaurante — Consultoría Método",
  description:
    "Consultoría especializada en hostelería y restauración: restaurantes, bares, cafeterías, hoteles, catering y food trucks. Mejora de rentabilidad, escandallos, gestión de costes y captación de clientes. +25 años de experiencia.",
  keywords: [
    "consultoría hostelería",
    "consultoría restauración",
    "mejorar rentabilidad restaurante",
    "consultor para restaurantes",
    "consultoría para bares",
    "mejorar negocio hostelería",
    "food cost restaurante",
    "consultoría hoteles pequeños",
    "gestión restaurante",
    "consultoría catering",
    "rentabilidad bar cafetería",
  ],
  openGraph: {
    title:
      "Consultoría para hostelería y restauración — Consultoría Método",
    description:
      "Mejora la rentabilidad de tu restaurante, bar, cafetería u hotel. Escandallos, costes, captación y organización. +25 años de experiencia.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/consultoria-hosteleria-restauracion",
  },
};

const negocios = [
  "Restaurantes (tradicionales, gastronómicos, de menú diario)",
  "Bares y bares de tapas",
  "Cafeterías y brunch",
  "Panaderías con obrador propio",
  "Hoteles y hostales",
  "Casas rurales y alojamientos turísticos",
  "Empresas de catering",
  "Food trucks",
  "Franquicias de restauración",
];

const problemas = [
  {
    text: "Llenas el local los fines de semana pero a final de mes no queda beneficio.",
    detail:
      "El problema casi nunca es la facturación. Suele estar en los costes que no se controlan.",
  },
  {
    text: "No tienes escandallos y no sabes cuánto te cuesta cada plato.",
    detail:
      "Sin escandallos no puedes fijar precios con criterio. Estás vendiendo a ciegas.",
  },
  {
    text: "El food cost se te dispara y no sabes por qué.",
    detail:
      "Mermas, raciones sin medir, proveedores sin negociar. Todo suma.",
  },
  {
    text: "Dependes de las horas punta y el resto del día el local está vacío.",
    detail:
      "Horas valle sin clientes significan costes fijos sin ingresos que los cubran.",
  },
  {
    text: "La rotación de personal es constante y cada mes formas a alguien nuevo.",
    detail:
      "Si no hay procesos claros, cada cambio de persona es empezar de cero.",
  },
  {
    text: "Inviertes en redes sociales o publicidad pero no ves clientes nuevos.",
    detail:
      "Sin una estrategia de captación clara, el dinero en marketing es un gasto, no una inversión.",
  },
  {
    text: "Trabajas 14 horas al día y sientes que el negocio no te da lo que debería.",
    detail: "El problema no es el esfuerzo. Es la estructura del negocio.",
  },
];

const conocemos = [
  {
    title: "Escandallos y food cost",
    description:
      "Sabemos calcular el coste real de cada plato, incluyendo mermas, raciones y costes indirectos. Sin esto, fijar precios es imposible.",
  },
  {
    title: "Diseño de carta rentable",
    description:
      "No se trata de tener más platos. Se trata de tener los platos correctos, con los márgenes correctos, en la posición correcta de la carta.",
  },
  {
    title: "Gestión de turnos y personal",
    description:
      "Coste por hora de servicio, turnos partidos, ratios de personal por cubierto. Números que marcan la diferencia entre ganar y perder.",
  },
  {
    title: "Negociación con proveedores",
    description:
      "Revisión de condiciones, comparativa de precios, consolidación de pedidos. En hostelería, cada céntimo en compras se multiplica miles de veces al año.",
  },
  {
    title: "Estacionalidad y horas valle",
    description:
      "Estrategias para llenar el local fuera de las horas punta. Menús de mediodía, eventos, catering y canales de venta complementarios.",
  },
  {
    title: "Captación local y reputación online",
    description:
      "Google Maps, reseñas, redes sociales con sentido, alianzas locales. Lo que realmente trae clientes a un restaurante o un bar.",
  },
];

const servicios = [
  {
    number: "01",
    title: "Diagnóstico de rentabilidad del negocio",
    description:
      "Analizamos números reales: food cost, costes de personal, alquiler, suministros, margen por plato y por servicio. Te decimos exactamente dónde pierdes dinero.",
  },
  {
    number: "02",
    title: "Revisión de precios y carta",
    description:
      "Escandallamos los platos principales, revisamos márgenes y rediseñamos la carta para que cada plato que vendes deje beneficio real.",
  },
  {
    number: "03",
    title: "Sistema de captación de clientes",
    description:
      "Diseñamos un plan de captación adaptado a tu tipo de local: Google Maps, reseñas, redes sociales con criterio, alianzas locales y eventos.",
  },
  {
    number: "04",
    title: "Organización y procesos internos",
    description:
      "Turnos, funciones, checklists, pedidos a proveedores, protocolos de servicio. Para que el negocio funcione sin que todo dependa de ti.",
  },
];

const pasos = [
  {
    number: "1",
    title: "Conversación inicial gratuita",
    description:
      "30 minutos para entender tu situación: tipo de local, facturación, equipo, problemas principales. Sin compromiso.",
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
    question: "¿Tenéis experiencia real con restaurantes y bares?",
    answer:
      "Sí. Hemos trabajado con restaurantes, bares, cafeterías y negocios de hostelería en Galicia y en el resto de España. Conocemos los escandallos, el food cost, la gestión de turnos, la negociación con proveedores y los problemas reales del día a día en un negocio de restauración.",
  },
  {
    question: "¿Cuánto cuesta la consultoría para un restaurante?",
    answer:
      "Desde 500 € el diagnóstico puntual. Los programas de mejora completos arrancan desde 1.200 € y duran entre 2 y 3 meses. Siempre con propuesta cerrada antes de empezar.",
  },
  {
    question: "¿Cuándo empezaré a ver resultados en mi restaurante?",
    answer:
      "Las primeras mejoras suelen notarse en 4-6 semanas: márgenes más claros, carta optimizada, costes bajo control. Los resultados sólidos llegan entre los 2 y 3 meses.",
  },
  {
    question: "¿Trabajáis solo presencialmente o también online?",
    answer:
      "Presencial en A Coruña y Galicia, online en toda España. Para hostelería solemos recomendar al menos una visita presencial al local, pero no es imprescindible.",
  },
  {
    question:
      "¿En qué se diferencia esto de contratar un asesor gastronómico?",
    answer:
      "No somos asesores gastronómicos. No diseñamos recetas ni montamos cocinas. Trabajamos la rentabilidad del negocio: precios, costes, captación, organización y estrategia. El objetivo es que tu negocio gane más dinero, no que cambie de estilo.",
  },
  {
    question:
      "Tengo un hotel pequeño, ¿también trabajáis con alojamientos?",
    answer:
      "Sí. Hoteles, hostales, casas rurales y alojamientos turísticos tienen problemas de rentabilidad, estacionalidad y captación que conocemos bien. El enfoque es el mismo: analizar, detectar oportunidades y aplicar mejoras con impacto directo en resultados.",
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
  name: "Consultoría para hostelería y restauración",
  description:
    "Consultoría empresarial especializada en hostelería y restauración: restaurantes, bares, cafeterías, hoteles, catering y food trucks.",
  areaServed: { "@type": "Country", name: "España" },
  serviceType: [
    "Consultoría para restaurantes",
    "Consultoría para bares y cafeterías",
    "Consultoría para hoteles",
    "Mejora de rentabilidad en hostelería",
    "Gestión de costes en restauración",
  ],
};

export default function ConsultoriaHosteleria() {
  const subject = encodeURIComponent(
    "Consulta sobre consultoría para hostelería"
  );
  const body = encodeURIComponent(
    "Hola,\n\nTengo un negocio de hostelería y me interesa conocer más sobre vuestros servicios de consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
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
            Consultoría especializada — Hostelería y restauración
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría para hostelería y restauración
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Si tienes un restaurante, un bar, una cafetería, un hotel o
            cualquier negocio de hostelería y sientes que trabajas mucho pero no
            ves el beneficio, no es un problema de esfuerzo. Es un problema de
            estructura. Y eso tiene solución.
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
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Si tu negocio es de hostelería o restauración, esto te interesa
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Da igual si tienes un restaurante familiar, un bar de tapas, una
            cafetería, una panadería con obrador, un hotel, un hostal, una casa
            rural, una empresa de catering o un food truck. Los problemas de
            fondo que frenan la rentabilidad en hostelería son los mismos.
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
      <section className="section-padding bg-gray-900">
        <div className="container-narrow">
          <h2 className="section-heading text-white">
            Los problemas que frenan la rentabilidad en hostelería
          </h2>
          <p className="section-subtitle text-gray-400">
            La hostelería es un sector donde se trabaja mucho. Pero trabajar
            mucho no es lo mismo que ganar dinero.
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
              Si te reconoces en varios de estos problemas, no necesitas
              trabajar más. Necesitas{" "}
              <strong className="text-white">
                revisar cómo funciona tu negocio
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
            Entendemos cómo funciona un negocio de hostelería
          </h2>
          <p className="section-subtitle text-gray-600">
            No damos consejos genéricos. Conocemos los indicadores, los costes y
            la operativa real de un negocio de restauración.
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
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo ayudamos a negocios de hostelería
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

      {/* Caso de éxito */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Caso real en hostelería
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/blog/caso-exito-restaurante-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un restaurante que llenaba cada fin de semana y perdía dinero
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Qué encontramos, qué cambiamos y cómo pasó de perder dinero a
                ser rentable sin cambiar de concepto.
              </p>
            </a>
            <a
              href="/blog/hosteleria-coruna-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Artículo sectorial
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Hostelería en A Coruña: cómo ser rentable en un mercado cada vez
                más difícil
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Análisis del sector hostelero en A Coruña y claves para mejorar
                la rentabilidad.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre consultoría para hostelería
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
            ¿Quieres que analicemos la rentabilidad de tu negocio de hostelería?
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
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-primary-900">
            Lecturas relacionadas para negocios de hostelería
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/blog/como-mejorar-rentabilidad-restaurante-bar"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Rentabilidad
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo mejorar la rentabilidad de tu restaurante o bar
              </p>
            </a>
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Precios
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo fijar precios en tu negocio sin perder clientes ni margen
              </p>
            </a>
            <a
              href="/blog/como-negociar-con-proveedores"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Proveedores
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo negociar con proveedores cuando eres pequeño
              </p>
            </a>
            <a
              href="/blog/como-gestionar-empleados-pyme"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Equipo
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo gestionar empleados en una pyme sin volverte loco
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
