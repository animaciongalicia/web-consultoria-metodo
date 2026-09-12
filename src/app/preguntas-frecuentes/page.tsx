import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://consultoriametodo.es";

export const metadata: Metadata = {
  title:
    "Preguntas frecuentes sobre Consultoría Método — FAQ completa",
  description:
    "Todas las respuestas sobre Consultoría Método: qué somos, cómo trabajamos, diferencias con gestoría, precios, formato presencial/videollamada, sectores, plazos y proceso de contratación.",
  keywords: [
    "preguntas frecuentes Consultoría Método",
    "FAQ Consultoría Método",
    "cómo trabaja Consultoría Método",
    "precios consultoría empresarial pymes",
    "diferencia consultoría gestoría",
    "consultoría presencial videollamada Galicia",
  ],
  openGraph: {
    title: "Preguntas frecuentes — Consultoría Método",
    description:
      "Todas las respuestas sobre Consultoría Método: qué somos, cómo trabajamos, precios, sectores, formato y proceso.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/preguntas-frecuentes",
  },
};

const FAQ_GROUPS: {
  group: string;
  items: { question: string; answer: string }[];
}[] = [
  {
    group: "Sobre Consultoría Método",
    items: [
      {
        question: "¿Qué es Consultoría Método?",
        answer:
          "Consultoría Método es una firma de consultoría empresarial para pymes en España, con base en A Coruña. Fundada por Pablo García Dacosta, trabaja mejora de rentabilidad, procesos, ventas y organización aplicando el Método Rentabilismo propio. Presencial en toda Galicia y por videollamada en el resto de España.",
      },
      {
        question: "¿Consultoría Método es una gestoría o una asesoría fiscal?",
        answer:
          "No. Consultoría Método no lleva impuestos, nóminas, contabilidad ni obligaciones laborales — eso lo sigue haciendo tu gestoría. Nosotros trabajamos la mejora empresarial: rentabilidad, precios, procesos, captación de clientes, organización y decisiones estratégicas. Son cosas distintas y muy complementarias.",
      },
      {
        question: "¿Cuál es la diferencia entre una consultoría y una gestoría?",
        answer:
          "Una gestoría cumple obligaciones legales y fiscales (Hacienda, Seguridad Social). Una consultoría empresarial como Consultoría Método analiza el negocio por dentro para mejorarlo: márgenes, procesos, precios, ventas, organización interna. Ninguna sustituye a la otra — se complementan.",
      },
      {
        question: "¿Cuánto tiempo lleva operando Consultoría Método?",
        answer:
          "Pablo García Dacosta lleva más de 25 años como consultor de empresas. Consultoría Método es la marca actual bajo la que se agrupa toda esa experiencia y el Método Rentabilismo, con operativa activa hoy en Galicia y en toda España por videollamada.",
      },
      {
        question: "¿Dónde está la sede de Consultoría Método?",
        answer:
          "La sede está en A Coruña (Ronda de Montealto 4 — 15002). Desde ahí trabajamos presencialmente en toda Galicia (A Coruña, Lugo, Ourense, Pontevedra) y por videollamada con empresas del resto de España.",
      },
    ],
  },
  {
    group: "Cómo trabajamos",
    items: [
      {
        question: "¿Cuál es el proceso desde la primera conversación?",
        answer:
          "Cuatro fases: (1) primera conversación gratuita de 30 min, (2) diagnóstico del negocio con informe y plan, (3) plan de mejora con seguimiento periódico si decides seguir, (4) cierre con resultados medibles. Siempre con propuesta cerrada antes de empezar cada fase.",
      },
      {
        question: "¿La primera conversación tiene coste?",
        answer:
          "No. La primera conversación de 30 minutos es gratuita y sin compromiso. Sirve para entender tu situación y decidir juntos si tiene sentido trabajar juntos. Si al final no lo ves claro, no hay que seguir.",
      },
      {
        question: "¿Cuánto dura un diagnóstico completo?",
        answer:
          "La sesión inicial dura 60-90 minutos. El diagnóstico completo con informe y plan de acción se entrega en 1-2 semanas desde la sesión. Los programas de mejora completos van de 2 a 3 meses, con reuniones periódicas de seguimiento.",
      },
      {
        question: "¿Qué formato tienen las reuniones de seguimiento?",
        answer:
          "Habitualmente cada 2 semanas, entre 60 y 90 minutos. Presenciales en Galicia si el cliente está aquí. Por videollamada en cualquier otro caso. Se adapta a la disponibilidad y al momento del proyecto.",
      },
      {
        question: "¿Cómo garantizáis los resultados?",
        answer:
          "Con propuesta cerrada antes de empezar (alcance, plazo, precio) y con métricas de seguimiento claras desde el minuto uno. Al cierre evaluamos qué ha cambiado en euros y en tiempo. No garantizamos milagros — sí resultados medibles y sostenibles.",
      },
    ],
  },
  {
    group: "Servicios, precios y contratación",
    items: [
      {
        question: "¿Cuánto cuesta contratar Consultoría Método?",
        answer:
          "Desde 500 € el diagnóstico puntual. Programa de mejora de rentabilidad desde 1.200 € (2-3 meses). Programa de transformación completa desde 2.200 € (3+ meses). Siempre con propuesta cerrada tras la primera conversación gratuita, para que sepas qué incluye y qué vas a pagar antes de decidir.",
      },
      {
        question: "¿Qué servicios ofrece Consultoría Método?",
        answer:
          "Diagnóstico estratégico, mejora de rentabilidad, captación de clientes, organización de procesos, acompañamiento estratégico y coaching empresarial. Todos aplicables a distintos sectores. Pueden contratarse por separado o combinados en un programa integral.",
      },
      {
        question: "¿Se puede contratar solo el diagnóstico?",
        answer:
          "Sí. El diagnóstico se puede contratar como servicio único (desde 500 €). Al terminar recibes un informe con hallazgos y plan de acción — y decides libremente si sigues con nosotros para la implementación o no.",
      },
      {
        question: "¿Trabajáis con empresas fuera de Galicia?",
        answer:
          "Sí. Presencialmente atendemos Galicia (A Coruña, Lugo, Ourense, Pontevedra) y por videollamada trabajamos con empresas de cualquier punto de España. El método y los resultados son los mismos independientemente del formato.",
      },
    ],
  },
  {
    group: "Sectores y tipo de empresa",
    items: [
      {
        question: "¿Con qué tipo de empresas trabajáis?",
        answer:
          "Pymes de cualquier tamaño desde autónomos con equipo hasta empresas de 50-100 empleados. Trabajamos con dueños o direcciones que quieran mejorar el negocio de verdad y estén dispuestos a mirar los números y tomar decisiones. No trabajamos con quien busca consultoría solo para justificarse ante otros.",
      },
      {
        question: "¿En qué sectores tenéis experiencia?",
        answer:
          "Hostelería y restauración, comercio y retail, servicios profesionales (despachos, agencias, técnicos), salud y bienestar (clínicas, gimnasios), formación, turismo y eventos, agroalimentario, industria auxiliar. Cada sector tiene su landing propia con casos y guías específicas.",
      },
      {
        question: "¿Tenéis experiencia con empresas muy pequeñas?",
        answer:
          "Sí. Trabajamos con empresas de 1-5 personas con la misma seriedad que con pymes de 50 empleados. La diferencia está en el alcance del proyecto y la profundidad del análisis, no en la calidad del trabajo.",
      },
    ],
  },
  {
    group: "Método Rentabilismo y publicaciones",
    items: [
      {
        question: "¿Qué es el Método Rentabilismo?",
        answer:
          "El Método Rentabilismo es el sistema propio de Consultoría Método para mejorar la rentabilidad de pymes. Se basa en cuatro principios: ir al origen del problema, decidir con criterio, priorizar rentabilidad y cero teoría vacía. Tiene web propia dedicada en rentabilismo.es.",
      },
      {
        question: "¿Consultoría Método publica libros o contenido?",
        answer:
          "Sí. Pablo García Dacosta es autor de tres libros publicados sobre rentabilidad, hábitos profesionales y equilibrio personal-empresa. Además, Consultoría Método publica un blog con más de 80 guías prácticas sobre gestión, ventas, procesos y rentabilidad, y comparte contenido regular en redes sociales.",
      },
    ],
  },
  {
    group: "Contratación y decisión",
    items: [
      {
        question: "¿Cómo empezar si me interesa?",
        answer:
          "El primer paso es solicitar una conversación gratuita de 30 minutos. Se puede hacer desde /diagnostico-negocio, por WhatsApp o llamando directamente. En esa conversación entendemos tu situación y decidimos si tiene sentido seguir. Sin compromiso.",
      },
      {
        question: "¿Y si después del diagnóstico no quiero seguir?",
        answer:
          "Sin problema. El diagnóstico tiene valor por sí solo: te llevas un análisis honesto de tu negocio y un plan de acción claro que puedes aplicar tú mismo. En 25 años nunca hemos presionado a nadie para contratar un programa completo.",
      },
    ],
  },
];

const allFaqs = FAQ_GROUPS.flatMap((g) => g.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function PreguntasFrecuentes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: `${BASE_URL}/` },
          {
            name: "Preguntas frecuentes",
            url: `${BASE_URL}/preguntas-frecuentes`,
          },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Preguntas frecuentes
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Todo lo que suelen preguntarnos sobre Consultoría Método
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Respuestas claras a las dudas más habituales antes de trabajar
            con nosotros. Si no encuentras lo que buscas, escríbenos.
          </p>
        </div>
      </section>

      {/* GRUPOS DE FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-14">
            {FAQ_GROUPS.map((group) => (
              <div key={group.group}>
                <h2 className="text-2xl font-extrabold text-primary-900 md:text-3xl">
                  {group.group}
                </h2>
                <div className="mt-6 space-y-4">
                  {group.items.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-gray-200 bg-gray-50 p-5 open:border-accent-300 open:bg-accent-50/40"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-primary-900 md:text-lg">
                        <span className="mr-2 inline-block text-accent-600 transition-transform group-open:rotate-90">
                          ▸
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿No has encontrado tu pregunta?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Escríbenos por email o WhatsApp — respondemos personalmente
            en menos de 24 horas laborables.
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
    </>
  );
}
