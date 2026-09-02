import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Coaching empresarial en A Coruña y Galicia | Acompañamos empresarios y equipos — Consultoría Método",
  description:
    "Coaching empresarial en A Coruña y Galicia con criterio empresarial real, no motivación. Acompañamos a empresarios, dueños y equipos directivos que quieren decidir mejor, dejar de estar solos y mejorar su negocio con calma.",
  keywords: [
    "coaching empresarial A Coruña",
    "coaching empresarial Galicia",
    "coach empresarial A Coruña",
    "coaching para empresas Coruña",
    "coaching para empresarios Galicia",
    "acompañamiento a empresarios",
    "coaching ejecutivo Coruña",
    "coach de negocios Galicia",
    "coaching para dueños de empresa",
    "coaching directivo Coruña",
  ],
  openGraph: {
    title:
      "Coaching empresarial en A Coruña y Galicia — Consultoría Método",
    description:
      "Acompañamos a empresarios y equipos con criterio empresarial real. Presencial en A Coruña y Galicia, por videollamada en el resto de España.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/coaching-empresarial-coruna-galicia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "ProfessionalService",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  serviceType: "Coaching empresarial",
  name: "Coaching empresarial en A Coruña y Galicia",
  description:
    "Acompañamiento a empresarios, dueños y equipos directivos con criterio empresarial. Presencial en A Coruña y Galicia, por videollamada en el resto de España.",
  areaServed: [
    { "@type": "City", name: "A Coruña" },
    { "@type": "City", name: "Santiago de Compostela" },
    { "@type": "City", name: "Ferrol" },
    { "@type": "City", name: "Vigo" },
    { "@type": "City", name: "Lugo" },
    { "@type": "City", name: "Ourense" },
    { "@type": "City", name: "Pontevedra" },
    { "@type": "State", name: "Galicia" },
    { "@type": "Country", name: "España" },
  ],
};

const paraQuien = [
  {
    titulo: "Empresarios que se sienten solos en las decisiones",
    desc: "Tienes gente alrededor — familia, socios, equipo — pero nadie con quien hablar de negocio con criterio. Las decisiones importantes te las tragas solo. Y pesa.",
  },
  {
    titulo: "Equipos directivos que no acaban de fluir",
    desc: "Cada uno hace lo suyo pero no reman en la misma dirección. Reuniones que no llegan a decisiones, prioridades que cambian cada semana, roles solapados o difusos.",
  },
  {
    titulo: "Momentos de transición",
    desc: "Un crecimiento que te supera, un relevo generacional, una crisis, la entrada de un socio nuevo, la decisión de vender o de dar un salto. Momentos que se gestionan mejor con alguien fuera al lado.",
  },
  {
    titulo: "Dueños que quieren dejar de hacer de todo",
    desc: "Sabes que tu empresa no puede seguir dependiendo de ti para cada cosa. Pero soltar cuesta. Y sin acompañamiento, se vuelve al mismo sitio en dos semanas.",
  },
];

const areas = [
  {
    titulo: "Decisiones estratégicas",
    desc: "Pensar contigo las decisiones que marcan la trayectoria. Nuevos mercados, líneas de negocio, inversiones, precios, cambios de modelo. Sin decirte qué hacer — ayudándote a ver claro para que decidas mejor.",
  },
  {
    titulo: "El rol del dueño o del director",
    desc: "Cómo pasar de operativo a directivo. Qué soltar, qué mantener, qué delegar, cómo hacerlo sin miedo a que se caiga todo. El cambio más importante para que la empresa deje de depender de ti.",
  },
  {
    titulo: "Equipos y personas clave",
    desc: "Trabajar con tu equipo directivo o con personas específicas. Coaching individual, sesiones de equipo, procesos de alineamiento. Menos ruido, más decisiones tomadas y ejecutadas.",
  },
  {
    titulo: "Transiciones y cambios",
    desc: "Relevo generacional, entrada o salida de socios, procesos de venta, reconversión de modelo, crisis. Acompañar el cambio para que salga bien, no para dejarlo al azar.",
  },
  {
    titulo: "La frontera entre lo personal y lo empresarial",
    desc: "En una pyme, lo personal y lo profesional se mezclan. Emociones, familia, cansancio, dudas. Hablamos de todo esto con la naturalidad que hace falta — porque afecta a las decisiones tanto como los números.",
  },
];

const sesiones = [
  {
    titulo: "Formato",
    desc: "Sesiones individuales o de equipo. Presenciales en A Coruña ciudad si te viene bien, o por videollamada en cualquier punto de Galicia o España.",
  },
  {
    titulo: "Frecuencia",
    desc: "Habitualmente cada 2 o 4 semanas. Ni tan seguido que sature, ni tan espaciado que pierda continuidad. Se adapta a cada persona y cada momento.",
  },
  {
    titulo: "Duración",
    desc: "Cada sesión suele durar entre 60 y 90 minutos. Los procesos completos van desde tres meses hasta acompañamientos abiertos de un año o más.",
  },
  {
    titulo: "Confidencialidad total",
    desc: "Lo que se habla en la sesión se queda en la sesión. Sin excepciones. Es la única forma de que tenga sentido.",
  },
  {
    titulo: "Sin ataduras",
    desc: "No hay permanencia. Si en algún momento notas que ya no aporta o que quieres pausar, se pausa. La relación funciona mientras funcione.",
  },
  {
    titulo: "Primera conversación gratuita",
    desc: "Antes de empezar, una llamada de 30 minutos sin coste ni compromiso. Nos conocemos y decidimos juntos si tiene sentido seguir.",
  },
];

const FAQS = [
  {
    question:
      "¿Cuál es la diferencia entre coaching empresarial y consultoría?",
    answer:
      "La consultoría analiza y propone soluciones concretas: aquí tienes el problema, esto hay que hacer. El coaching acompaña a la persona o al equipo para que sea capaz de ver claro, decidir y ejecutar. Se pueden combinar — y en muchos casos es lo que tiene más sentido. Coaching sin criterio empresarial es teoría; consultoría sin acompañamiento humano suele no aterrizar.",
  },
  {
    question: "¿Es lo mismo que un coach de vida o coaching motivacional?",
    answer:
      "No. No damos charlas motivacionales ni frases inspiradoras. Nuestro coaching empresarial se apoya en criterio de negocio real — más de 25 años de experiencia gestionando y asesorando empresas. La motivación llega sola cuando las cosas empiezan a funcionar.",
  },
  {
    question: "¿Cuánto cuesta un proceso de coaching empresarial?",
    answer:
      "Depende del formato, la frecuencia y la duración. Los procesos individuales suelen ir desde 400 € al mes en formato quincenal. Los procesos de equipo o directivos, según alcance. Siempre con propuesta cerrada tras la primera conversación, sin sorpresas.",
  },
  {
    question: "¿Cuánto dura un proceso?",
    answer:
      "Los procesos completos suelen ir de 3 a 12 meses. Algunos clientes trabajan con nosotros durante años en formato abierto, con sesiones más espaciadas. Otros hacen procesos cortos e intensos de 3 meses para un momento concreto. Se adapta.",
  },
  {
    question: "¿Coaching o terapia? ¿Cuándo elegir qué?",
    answer:
      "La terapia trabaja lo emocional y personal en profundidad. El coaching empresarial trabaja el ámbito profesional y las decisiones del negocio, con la persona detrás. Si en algún momento del proceso vemos que lo que hace falta es terapia, lo decimos con claridad y recomendamos ayuda especializada. No mezclamos.",
  },
  {
    question: "¿Y si no funciona o no me convence?",
    answer:
      "Sin problema. No hay permanencia ni compromiso a largo plazo. Si en cualquier momento sientes que no aporta, se pausa o se cierra. La relación tiene que aportar valor real, si no, no tiene sentido para ninguna de las partes.",
  },
  {
    question: "¿Trabajáis solo presencialmente en A Coruña?",
    answer:
      "Presencial en A Coruña ciudad y comarcas cuando el proyecto lo requiere. Por videollamada en cualquier punto de Galicia o del resto de España. La mayoría de procesos combinan ambos formatos.",
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

export default function CoachingEmpresarial() {
  const subject = encodeURIComponent(
    "Coaching empresarial — Consulta inicial"
  );
  const body = encodeURIComponent(
    "Hola,\n\nMe interesa vuestro acompañamiento en coaching empresarial.\n\nMi nombre: \nMi empresa/sector: \nTeléfono: \n\nQué me está pasando o qué me gustaría trabajar:\n\n"
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

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Coaching empresarial — A Coruña y Galicia
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Coaching empresarial en A Coruña y Galicia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Acompañamos a empresarios, dueños y equipos que quieren decidir
            mejor, dejar de estar solos y hacer que su negocio funcione con
            menos ruido. Sin recetas mágicas ni charlas motivacionales — con
            criterio empresarial de más de 25 años.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={mailtoLink} className="btn-primary">
              Hablemos, sin compromiso
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación de 30 minutos gratuita
          </p>
        </div>
      </section>

      {/* QUÉ ES Y QUÉ NO ES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Qué es (y qué no es) coaching empresarial
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              La palabra "coaching" se ha usado tanto y tan mal que ha
              perdido casi todo su significado. Antes de que sigas leyendo,
              queremos que sepas exactamente qué hacemos y qué no hacemos.
            </p>
            <p>
              El coaching empresarial que ofrecemos es{" "}
              <strong>acompañamiento con criterio de negocio real</strong>.
              Nos sentamos contigo — o con tu equipo — de forma periódica
              para pensar las decisiones importantes, escuchar lo que está
              pasando, aportar la mirada externa que dentro de la empresa no
              existe, y ayudarte a moverte.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
                Sí es esto
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Acompañamiento continuo con criterio empresarial real</li>
                <li>Escuchar primero, pensar contigo después</li>
                <li>Ayudarte a ver claro para que decidas mejor tú</li>
                <li>Foco en decisiones, personas y ejecución</li>
                <li>Basado en más de 25 años gestionando y asesorando empresas</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                No es esto
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Charlas motivacionales ni frases inspiradoras</li>
                <li>Recetas mágicas ni fórmulas rápidas</li>
                <li>Coaching de vida ni terapia</li>
                <li>Decirte qué hacer sin entender tu negocio</li>
                <li>Vender humo o promesas medibles imposibles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Para quién es este acompañamiento
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            No es para todo el mundo. Trabajamos mejor con personas
            dispuestas a mirarse desde fuera y a mover cosas. Estos son los
            perfiles más habituales.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {paraQuien.map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-primary-200 bg-primary-50/30 p-6"
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

      {/* CÓMO ACOMPAÑAMOS */}
      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo acompañamos
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              El método es simple y funciona: escuchar mucho, pensar
              contigo, aportar cuando toca y hacer seguimiento.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "1",
                titulo: "Escuchamos",
                desc: "Primero entendemos tu situación real: negocio, momento, personas, lo que te preocupa y lo que quieres.",
              },
              {
                num: "2",
                titulo: "Pensamos contigo",
                desc: "Ponemos encima de la mesa las opciones, los riesgos, las señales que quizás no ves. Sin imponer.",
              },
              {
                num: "3",
                titulo: "Decides tú",
                desc: "La decisión siempre es tuya. Nuestro trabajo es que la tomes con más información y menos ruido.",
              },
              {
                num: "4",
                titulo: "Acompañamos la ejecución",
                desc: "Revisamos avances, ajustamos y aportamos donde sea útil. Sesión a sesión, hasta que el cambio se sostiene solo.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white">
                  {item.num}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary-900">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Áreas donde acompañamos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            El coaching empresarial se adapta a lo que cada persona o cada
            equipo necesita en cada momento. Estas son las áreas donde más
            hemos trabajado.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((item) => (
              <div
                key={item.titulo}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
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

      {/* CÓMO SON LAS SESIONES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo son las sesiones
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Sin sorpresas. Todo lo que necesitas saber antes de empezar.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sesiones.map((item) => (
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

      {/* COACHING + CONSULTORÍA */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Coaching y consultoría: cuándo cada uno, cuándo los dos
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              A veces lo que hace falta es{" "}
              <a
                href="/servicios"
                className="text-accent-600 underline hover:text-accent-700"
              >
                consultoría
              </a>{" "}
              — un análisis a fondo del negocio, un plan de mejora concreto,
              alguien que meta las manos en tus números y en tus procesos.
              Otras veces lo que hace falta es coaching: acompañamiento
              periódico para pensar contigo y ayudarte a mover cosas que ya
              sabes que hay que mover.
            </p>
            <p>
              Y muchas veces lo que mejor funciona es una mezcla: consultoría
              para poner las cosas en marcha, coaching para sostener el
              cambio en el tiempo. La ventaja de trabajar con nosotros es que
              tenemos las dos capacidades y las combinamos según haga falta,
              sin obligarte a contratar dos servicios distintos con dos
              proveedores distintos.
            </p>
            <p>
              En la primera conversación te decimos con claridad qué creemos
              que necesitas — coaching, consultoría o las dos cosas. Sin
              venderte lo que no toca.
            </p>
          </div>
        </div>
      </section>

      {/* CASOS SUAVES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Historias de acompañamiento
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Sin cifras espectaculares — solo la sensación real que suelen
            transmitir las personas con las que hemos trabajado.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                cita: "Llegué con la cabeza en mil sitios y sintiendo que no avanzaba. Después de unos meses de sesiones, tomo decisiones más rápido y con menos peso. Es raro de explicar, pero funciona.",
                perfil: "Dueña de empresa de servicios — A Coruña",
              },
              {
                cita: "Estábamos atascados como equipo directivo. Reuniones eternas y decisiones que no se ejecutaban. Trabajar el rol de cada uno cambió la dinámica en pocas semanas.",
                perfil: "Director general de pyme industrial — Galicia",
              },
              {
                cita: "Lo que más valoré fue tener a alguien fuera con quien poder hablar en confianza. Estar al frente de una empresa es más solitario de lo que se cuenta.",
                perfil: "Empresario familiar — comarca de A Coruña",
              },
            ].map((item, i) => (
              <blockquote
                key={i}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
              >
                <p className="text-gray-700 italic">"{item.cita}"</p>
                <p className="mt-4 text-sm font-semibold text-primary-900">
                  — {item.perfil}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre coaching empresarial
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
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
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres hablar 30 minutos y ver si tiene sentido?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Nos cuentas qué te está pasando, te damos nuestra opinión
            honesta y decidimos juntos si tiene sentido trabajar. Sin
            venta, sin presión. Muchas veces esa conversación ya ayuda por
            sí sola.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={mailtoLink} className="btn-primary">
              Escribir un email
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
            <a href={SITE.phoneLink} className="btn-secondary">
              Llamar ahora
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación gratuita — 30 minutos, sin compromiso
          </p>
        </div>
      </section>
    </>
  );
}
