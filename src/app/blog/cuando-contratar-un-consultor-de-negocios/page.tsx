import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cuándo contratar un consultor de negocios (y cuándo no merece la pena) | Consultoría Método",
  description:
    "Descubre cuándo merece la pena contratar un consultor de negocios para tu pyme, qué hace exactamente, cuánto cuesta y cuándo NO es buena idea. Guía honesta y sin humo.",
  keywords: [
    "contratar consultor de negocios",
    "consultoría empresarial pyme",
    "consultor de empresas qué hace",
    "cuándo necesito un consultor",
    "asesoría empresarial para pymes España",
    "consultor negocios Galicia",
  ],
  openGraph: {
    title:
      "Cuándo contratar un consultor de negocios (y cuándo no merece la pena)",
    description:
      "Guía brutalmente honesta sobre cuándo merece la pena contratar un consultor de negocios para tu pyme, qué esperar, cuánto cuesta y cuándo NO es buena idea.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/cuando-contratar-un-consultor-de-negocios",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cuándo contratar un consultor de negocios (y cuándo no merece la pena)",
  description:
    "Descubre cuándo merece la pena contratar un consultor de negocios para tu pyme, qué hace exactamente, cuánto cuesta y cuándo NO es buena idea. Guía honesta y sin humo.",
  author: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  publisher: {
    "@type": "Organization",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  datePublished: "2025-03-15",
  dateModified: "2025-03-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/cuando-contratar-un-consultor-de-negocios",
  },
};

export default function ArticuloConsultor() {
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
            Blog — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cuándo contratar un consultor de negocios (y cuándo no merece la
            pena)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Has oído hablar de &ldquo;consultores de empresa&rdquo;, pero no
            tienes claro si es para ti, si realmente sirve o si es otro gasto
            más. Este artículo te lo cuenta todo — incluido cuándo NO merece la
            pena contratar uno.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            online en toda España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Si llevas años al frente de un negocio, probablemente conozcas esa
            sensación de estar solo con las decisiones. De no tener a nadie que
            te diga &ldquo;esto no va bien&rdquo; o &ldquo;por aquí deberías
            tirar&rdquo; con conocimiento de causa. De cargar con todo el peso
            sin poder soltarlo ni un segundo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En algún momento, la idea de contratar a un consultor de negocios
            te ha pasado por la cabeza. Quizá buscaste en Google, viste
            precios que te parecieron altos, leíste opiniones contradictorias
            y cerraste la pestaña. O quizá alguien te lo recomendó, pero no
            tenías claro qué podía aportar que tú no supieras ya.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Voy a ser completamente transparente contigo en este artículo.
            Llevo más de 25 años trabajando como consultor de empresas y hay
            algo que tengo muy claro: la consultoría no es para todo el mundo
            ni para cualquier momento. Y decirte eso es la mejor forma de
            ganarte mi credibilidad.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Así que vamos a ver, sin filtros, qué hace un consultor, cuándo
            merece la pena contratarlo, cuándo es tirar el dinero, y cómo
            distinguir una buena consultoría de una mala. Si al final decides
            que no es para ti, perfecto — al menos habrás tomado esa{" "}
            <a
              href="/blog/como-tomar-decisiones-en-un-negocio"
              className="text-primary-700 underline hover:text-primary-900"
            >
              decisión con criterio
            </a>
            .
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Un buen consultor no te dice lo que quieres oír. Te dice
            lo que necesitas escuchar. Y eso, a veces, es lo más valioso que
            puede pasar en tu negocio.&rdquo;
          </blockquote>

          {/* H2 — Qué hace un consultor de negocios */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué hace exactamente un consultor de negocios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hay mucha confusión sobre lo que hace un consultor de empresas.
            Mucha gente lo confunde con un coach, con un asesor fiscal, con
            una agencia de marketing o con alguien que te vende un curso. No
            es ninguna de esas cosas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un consultor de negocios se sienta contigo, analiza la realidad de
            tu empresa — números, procesos, equipo, clientes, márgenes — y te
            ayuda a ver lo que desde dentro ya no puedes ver. Después,
            diseña contigo un plan de acción concreto y te acompaña mientras
            lo ejecutas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El trabajo de un consultor se resume en cuatro verbos:
          </p>

          <div className="my-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Analizar",
                desc: "Mirar tu negocio con ojos limpios: datos financieros, operaciones, equipo, mercado. Sin apegos ni inercias.",
              },
              {
                title: "Diagnosticar",
                desc: "Identificar qué va bien, qué va mal y — lo más importante — por qué va mal. Ir a la raíz, no a los síntomas.",
              },
              {
                title: "Planificar",
                desc: "Diseñar un plan de acción concreto: qué hacer, en qué orden, con qué recursos y qué resultados esperar.",
              },
              {
                title: "Acompañar",
                desc: "Estar ahí mientras ejecutas el plan. Revisar, ajustar, resolver dudas, rendir cuentas. No dejarte solo con un informe.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-primary-200 bg-primary-50 p-5"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Diferencias con otros profesionales */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Lo que un consultor NO es
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Para que quede claro, un consultor de negocios no es:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Un coach: el coaching trabaja sobre ti como persona. La consultoría trabaja sobre tu empresa como sistema. No son lo mismo, aunque a veces se complementan.",
              "Un asesor fiscal o gestoría: ellos llevan tus impuestos y tu contabilidad. Un consultor trabaja en la dirección estratégica de tu negocio.",
              "Una agencia de marketing: ellos ejecutan campañas de publicidad. Un consultor te ayuda a decidir si necesitas marketing, de qué tipo y cuánto invertir.",
              "Un formador: no te da un curso genérico. Trabaja con la realidad concreta de tu empresa, con tus números y tus problemas reales.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 md:text-lg"
              >
                <span className="mt-1 text-primary-600 font-bold">&#x2717;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un buen consultor integra conocimientos de estrategia, finanzas,
            operaciones, ventas y gestión de equipos para ayudarte a tomar
            mejores decisiones. Es como tener un director general externo que
            mira tu negocio sin los sesgos de llevar años dentro de él.
          </p>

          {/* H2 — 7 señales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            7 señales de que tu negocio necesita una mirada externa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No siempre es fácil saber si necesitas ayuda. A veces piensas
            &ldquo;ya lo solucionaré yo&rdquo; o &ldquo;es una mala racha,
            pasará&rdquo;. Pero hay señales claras de que tu negocio necesita
            algo que tú solo no puedes darle. Estas son las siete más
            frecuentes que veo después de más de dos décadas trabajando con
            pymes:
          </p>

          <div className="my-8 space-y-5">
            {[
              {
                num: "1",
                title: "Estancamiento que no sabes explicar",
                desc: "Las ventas se han planificado, los beneficios no crecen, pero no encuentras la causa concreta. Sientes que has probado cosas, pero nada mueve la aguja. El negocio no va mal, pero tampoco avanza.",
              },
              {
                num: "2",
                title: "Trabajas 14 horas al día y no llegas a todo",
                desc: "Si tu negocio depende completamente de ti, eso no es una empresa — es un autoempleo disfrazado. Cuando el dueño trabaja más que nadie y aun así no alcanza, el problema no es de esfuerzo. Es de organización y de estructura.",
              },
              {
                num: "3",
                title: "No consigues tomar decisiones importantes",
                desc: "Llevas meses (o años) aplazando decisiones que sabes que deberías tomar: subir precios, despedir a alguien, cerrar una línea, cambiar de modelo. El bloqueo se come tu energía y tus resultados.",
              },
              {
                num: "4",
                title: "Facturas pero no sabes si ganas dinero de verdad",
                desc: "Entra dinero, sale dinero, pero nunca tienes claro cuánto te queda realmente. No conoces tus márgenes por producto o servicio, no sabes qué clientes son rentables y cuáles te cuestan dinero.",
              },
              {
                num: "5",
                title: "Estás creciendo sin control",
                desc: "Más ventas, más empleados, más gastos — pero ¿más beneficio? El crecimiento sin control es una de las formas más habituales de matar un negocio. Crecer no es el problema; crecer sin método sí lo es.",
              },
              {
                num: "6",
                title: "Estás perdiendo clientes y no entiendes por qué",
                desc: "Si antes retenías clientes y ahora se van, algo ha cambiado — en tu servicio, en tu mercado o en tu propuesta de valor. Y probablemente tú, desde dentro, no lo ves.",
              },
              {
                num: "7",
                title: "Te sientes solo con el peso del negocio",
                desc: "No tienes a nadie con quien hablar de las cosas importantes de tu empresa. Tu equipo no conoce toda la foto. Tu pareja se preocupa pero no puede ayudarte con decisiones estratégicas. Necesitas un interlocutor que entienda.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-700">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si te reconoces en tres o más de estas señales, no es casualidad.
            Es que tu negocio te está pidiendo algo que tú solo ya no puedes
            darle. No significa que seas mal empresario — significa que has
            llegado a un punto donde necesitas una perspectiva diferente.
          </p>

          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-gray-700 md:text-lg">
              <strong>Dato:</strong> Si el segundo punto te ha resonado y
              sientes que tu empresa es un autoempleo disfrazado, te
              recomiendo leer{" "}
              <a
                href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
                className="text-primary-700 underline hover:text-primary-900"
              >
                cómo organizar una empresa pequeña para salir del autoempleo
              </a>
              . Es un tema que merece un artículo aparte — y lo tiene.
            </p>
          </div>

          {/* H2 — Cuándo NO contratar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo NO merece la pena contratar un consultor
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aquí es donde la mayoría de consultores se callarían. Yo no. Si
            quiero que confíes en mi criterio, necesito ser honesto también
            sobre cuándo la consultoría no es la respuesta. Hay situaciones
            en las que contratar un consultor es, directamente, tirar el
            dinero:
          </p>

          <div className="my-8 space-y-5">
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-red-900">
                1. Si no estás dispuesto a cambiar nada
              </h3>
              <p className="mt-2 text-gray-700">
                Un consultor te va a decir cosas que probablemente no quieres
                oír. Va a cuestionar decisiones que llevas años tomando, va a
                señalar ineficiencias que te resultan cómodas, va a proponer
                cambios que dan pereza o miedo. Si tu idea de consultoría es
                que alguien te confirme que todo lo haces bien, ahórrate el
                dinero.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-red-900">
                2. Si quieres que alguien haga el trabajo por ti
              </h3>
              <p className="mt-2 text-gray-700">
                Un consultor no gestiona tu empresa. No va a contestar
                emails, no va a negociar con tus proveedores, no va a
                despedir a nadie en tu lugar. Te da la brújula y el mapa,
                pero el camino lo recorres tú. Si buscas a alguien que se
                encargue de todo, necesitas un socio o un director general,
                no un consultor.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-red-900">
                3. Si acabas de empezar y no tienes datos básicos
              </h3>
              <p className="mt-2 text-gray-700">
                Si tu negocio tiene menos de seis meses o aún no has
                facturado lo suficiente como para tener datos reales, un
                consultor no tiene con qué trabajar. La consultoría necesita
                información: números, histórico de ventas, márgenes, datos
                de clientes. Sin eso, cualquier diagnóstico sería pura
                especulación.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-red-900">
                4. Si buscas milagros o soluciones mágicas
              </h3>
              <p className="mt-2 text-gray-700">
                &ldquo;Quiero duplicar la facturación en un mes&rdquo;,
                &ldquo;necesito que mi negocio cambie sin que yo haga nada
                diferente&rdquo;, &ldquo;quiero resultados garantizados al
                100%&rdquo;. Si esas son tus expectativas, ningún consultor
                serio puede cumplirlas. La consultoría da resultados reales,
                pero requiere tiempo, trabajo y compromiso. No existe la
                varita mágica.
              </p>
            </div>
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Si un consultor te promete milagros, sal corriendo. Los
            resultados reales requieren trabajo real. Cualquiera que te diga
            lo contrario te está vendiendo humo.&rdquo;
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Se que decir esto puede sonar raro viniendo de alguien que vive
            de la consultoría. Pero precisamente por eso lo digo: prefiero
            que no me contrates y te quedes con una imagen honesta de la
            profesión, que contratarme con expectativas irreales y acabar
            frustrado. La honestidad es la base de cualquier relación
            profesional seria.
          </p>

          {/* H2 — Qué esperar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué esperar de una buena consultoría de negocios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si decides dar el paso, es importante que sepas distinguir una
            buena consultoría de una mala. Porque las hay de todo tipo, y una
            mala experiencia puede dejarte un sabor tan amargo que nunca más
            quieras saber nada del tema.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Una buena consultoría de negocios tiene cuatro fases claras:
          </p>

          <div className="my-8 space-y-4">
            {[
              {
                fase: "Fase 1: Diagnóstico",
                desc: "Se analiza tu negocio en profundidad: números, procesos, equipo, mercado, competencia. No un cuestionario genérico, sino un análisis real de tu situación específica. Este diagnóstico debería revelarte cosas que no sabías o que intuías pero no te atrevías a mirar.",
              },
              {
                fase: "Fase 2: Plan de acción",
                desc: "Se diseña un plan concreto: qué hacer, en qué orden, con qué plazos y qué resultados esperar. No un documento de 80 páginas que nadie lee, sino acciones claras y priorizadas según impacto y urgencia.",
              },
              {
                fase: "Fase 3: Acompañamiento",
                desc: "El consultor te acompaña durante la ejecución del plan. Reuniones periódicas para revisar avances, resolver dudas, ajustar la estrategia y mantenerte enfocado. Esta es la fase que marca la diferencia real.",
              },
              {
                fase: "Fase 4: Resultados y evaluación",
                desc: "Se miden resultados concretos: ¿mejoró la rentabilidad? ¿Se redujeron costes? ¿Aumentaron las ventas? ¿Funciona mejor el equipo? Con datos, no con sensaciones. Y se decide si tiene sentido continuar o si ya puedes seguir solo.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-primary-200 bg-primary-50 p-5 md:p-6"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {item.fase}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres conocer nuestro proceso en detalle, puedes ver el{" "}
            <a
              href="/metodo-herramientas"
              className="text-primary-700 underline hover:text-primary-900"
            >
              Método Rentabilismo y las herramientas que utilizamos
            </a>
            .
          </p>

          {/* Tabla comparativa buena vs mala consultoría */}
          <h3 className="mt-10 text-xl font-semibold text-gray-900">
            Buena consultoría vs mala consultoría
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No toda consultoría es igual. Esta tabla te ayudará a distinguir
            lo que deberías buscar de lo que deberías evitar:
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Buena consultoría</th>
                  <th className="px-4 py-3 font-semibold">Mala consultoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  [
                    "Analiza tu negocio en profundidad antes de proponer nada",
                    "Te vende una solución genérica desde el primer día",
                  ],
                  [
                    "Te dice lo que necesitas oír, aunque sea incómodo",
                    "Te dice lo que quieres oír para que sigas pagando",
                  ],
                  [
                    "Plan de acción concreto con plazos y responsables",
                    "Informes bonitos de 80 páginas que nadie lee",
                  ],
                  [
                    "Acompañamiento real durante la ejecución",
                    "Te entrega un documento y desaparece",
                  ],
                  [
                    "Resultados medibles en semanas o meses",
                    "Promesas vagas sin métricas claras",
                  ],
                  [
                    "Honesta sobre lo que puede y no puede resolver",
                    "Promete que puede resolver cualquier cosa",
                  ],
                  [
                    "Trabaja con tus datos reales y tu situación concreta",
                    "Aplica plantillas genéricas a todos los clientes igual",
                  ],
                  [
                    "Te enseña a pescar, no te genera dependencia",
                    "Crea dependencia para que sigas contratando indefinidamente",
                  ],
                ].map(([buena, mala], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-green-800 font-medium">
                      {buena}
                    </td>
                    <td className="px-4 py-3 text-gray-500">{mala}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H2 — Presencial vs online */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Presencial vs online: ¿funciona la consultoría a distancia?
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es una de las preguntas que más me hacen: &ldquo;¿Se puede hacer
            consultoría online o tiene que ser presencial?&rdquo;. La
            respuesta corta es que las dos funcionan. La respuesta larga es
            que cada una tiene sus ventajas y hay situaciones donde una
            funciona mejor que otra.
          </p>

          <div className="my-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-primary-300 bg-primary-50 p-6">
              <h3 className="text-lg font-bold text-primary-900">
                Consultoría presencial
              </h3>
              <p className="mt-1 text-sm text-primary-600">
                Galicia: A Coruña, Santiago, Vigo, Lugo, Ourense...
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Puedo visitar tu negocio y ver in situ cómo funcionan las cosas",
                  "Las conversaciones cara a cara generan más confianza al inicio",
                  "Ideal para negocios con local físico, equipo presencial o logística",
                  "Permite observar dinámicas de equipo y procesos en directo",
                  "Mejor cuando hay temas sensibles o decisiones difíciles",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="mt-1 text-primary-600 font-bold">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border-2 border-accent-300 bg-accent-50 p-6">
              <h3 className="text-lg font-bold text-accent-900">
                Consultoría online
              </h3>
              <p className="mt-1 text-sm text-accent-600">
                Toda España: Madrid, Barcelona, Valencia, Sevilla...
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Sin desplazamientos: más ágil, más frecuente, menos coste logístico",
                  "Reuniones más cortas y enfocadas — menos charla, más acción",
                  "Funciona perfectamente para negocios digitales o de servicios",
                  "Permite seguimiento más frecuente (semanal, quincenal)",
                  "Documentos compartidos en tiempo real para mayor transparencia",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="mt-1 text-accent-600 font-bold">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            En mi caso, trabajo presencialmente en A Coruña y toda Galicia, y
            online con empresas de cualquier punto de España. La realidad es
            que después de la primera o segunda sesión presencial, muchos
            clientes gallegos también prefieren combinar con sesiones online
            por comodidad. El formato no importa tanto como la calidad del
            trabajo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo que sí importa es que el consultor se adapte a ti, no al
            revés. Si necesitas que visite tu nave industrial en Vigo para
            entender cómo funciona tu logística, eso hay que hacerlo
            presencial. Si lo que necesitas es revisar números y tomar
            decisiones estratégicas, una videollamada bien organizada
            funciona igual de bien.
          </p>

          {/* H2 — Cuánto cuesta */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuánto cuesta un consultor y cuándo se recupera la inversión
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Voy a hablar de dinero con la misma honestidad con la que hablo
            de todo lo demás. Porque el precio es una de las principales
            barreras — y a veces la excusa — para no dar el paso.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La consultoría de negocios para pymes en España tiene un rango
            muy amplio. Hay consultores que cobran 50 euros la hora y otros
            que cobran 500. Hay procesos que cuestan 1.200 euros y otros que
            cuestan 20.000. La diferencia está en la experiencia del
            consultor, la profundidad del trabajo y el nivel de
            acompañamiento.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En mi caso, un proceso completo — diagnóstico, plan de acción y
            acompañamiento — parte de 1.200 euros. Depende del alcance, del
            tamaño de la empresa y de la complejidad de la situación. No es
            barato, pero tampoco es un gasto — es una inversión. Y como toda
            inversión, hay que evaluarla por su retorno.
          </p>

          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              La pregunta correcta no es &ldquo;cuánto cuesta&rdquo;, sino
              &ldquo;cuánto me cuesta NO hacerlo&rdquo;
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Si cada mes se te escapan 2.000-3.000 euros por márgenes mal
              calculados, procesos ineficientes o decisiones sin tomar, en
              un año has perdido entre 24.000 y 36.000 euros. Una
              consultoría que cuesta 1.200-3.000 euros y te ayuda a tapar
              esas fugas se paga sola en el primer mes.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              ¿Quieres saber si en tu caso concreto{" "}
              <a
                href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
                className="text-primary-700 underline hover:text-primary-900"
              >
                tu empresa factura pero no gana dinero
              </a>
              ? Ese es exactamente el tipo de problema que un buen diagnóstico
              revela en la primera sesión.
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cómo evaluar si la inversión merece la pena
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Antes de contratar a un consultor, hazte estas preguntas:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "¿Cuánto dinero estás perdiendo cada mes por no resolver los problemas que ya conoces?",
              "¿Cuántas horas a la semana dedicas a apagar fuegos en lugar de dirigir tu negocio?",
              "¿Cuánto tiempo llevas con los mismos problemas sin avanzar?",
              "Si alguien te ayudase a mejorar un 10-15% tu rentabilidad, ¿cuánto dinero supondría eso en un año?",
              "¿Cuánto te ha costado en los últimos años tomar decisiones a ciegas o aplazarlas?",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 md:text-lg"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-sm font-bold text-accent-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            En la mayoría de los casos, el retorno de una buena consultoría
            se ve en el primer o segundo mes. No porque haya magia, sino
            porque cuando pones orden en lo básico — márgenes, costes,
            prioridades, decisiones pendientes — los resultados aparecen
            rápido.
          </p>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: empresario que dio el paso y qué cambió
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace un tiempo trabajé con el propietario de un negocio de
            servicios en Galicia. Facturaba alrededor de 300.000 euros al
            año con cuatro empleados. En teoría le iba &ldquo;bien&rdquo;,
            pero en la práctica trabajaba más que nadie, no se pagaba un
            sueldo digno y cada mes era una montaña rusa de estrés.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando me contactó, su primera frase fue: &ldquo;No sé si
            necesito un consultor o un psicólogo&rdquo;. Lo dijo medio en
            broma, pero estaba reflejando algo muy real: la carga emocional
            de dirigir un negocio sin apoyo es enorme.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Nos sentamos a hacer el{" "}
            <a
              href="/diagnostico-negocio"
              className="text-primary-700 underline hover:text-primary-900"
            >
              diagnóstico de negocio
            </a>{" "}
            y encontramos tres problemas que él llevaba años sin ver:
          </p>

          <ul className="mt-4 space-y-3">
            {[
              "Tenía dos servicios que representaban el 40% de su facturación pero solo el 8% de su beneficio. Trabajaba mucho para ganar casi nada con ellos.",
              "Su política de precios no se había revisado en tres años. La inflación se había comido su margen sin que él lo notase.",
              "Dedicaba 15 horas a la semana a tareas administrativas que podía automatizar o delegar por 400 euros al mes.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 md:text-lg"
              >
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-green-900">
              Resultado a los 4 meses
            </h3>
            <p className="mt-2 text-gray-600 md:text-lg">
              Después de ejecutar el plan de acción que diseñamos juntos:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Eliminó los dos servicios poco rentables y redirigió esa energía a los servicios con margen alto. La facturación bajó un 15% pero el beneficio neto subió un 35%.",
                "Actualizó precios con una estrategia gradual — perdió un solo cliente de los 45 que tenía.",
                "Automatizó la facturación y la gestión de citas. Recuperó 12 horas a la semana.",
                "Dejó de trabajar los sábados por primera vez en seis años.",
                "Su nivel de estrés bajó tanto que su familia lo notó antes que él.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-green-800 md:text-lg"
                >
                  <span className="mt-1 font-bold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 md:text-lg">
              La inversión en consultoría se recuperó en el primer mes solo
              con el ajuste de precios. Todo lo demás fue beneficio adicional.
            </p>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Lo que este caso ilustra es algo que veo una y otra vez: la
            mayoría de las mejoras que necesita un negocio no son complicadas.
            Son obvias... cuando alguien las ve desde fuera. El problema es
            que desde dentro, con el día a día, la inercia y el apego, es
            casi imposible verlas. Si quieres conocer más casos reales,
            puedes visitar nuestra página de{" "}
            <a
              href="/experiencia-sectores-casos"
              className="text-primary-700 underline hover:text-primary-900"
            >
              experiencia, sectores y casos
            </a>
            .
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No necesitaba trabajar más. Necesitaba que alguien me
            dijera qué dejar de hacer. Eso fue lo que cambió
            todo.&rdquo;
            <span className="mt-2 block text-base not-italic text-gray-500">
              — Propietario de empresa de servicios, Galicia
            </span>
          </blockquote>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: un consultor no es para todos, pero para el negocio
            adecuado cambia todo
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Voy a resumirte este artículo en pocas líneas, porque creo que
            la honestidad funciona mejor que la retórica:
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un consultor de negocios no es un mago. No te va a salvar si tú
            no estás dispuesto a moverte. No va a funcionar si lo que buscas
            es que alguien haga el trabajo por ti o te diga que todo está
            bien cuando no lo está.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero si tienes un negocio que funciona — aunque no tanto como
            debería —, si estás en un punto de estancamiento o de crecimiento
            desordenado, si llevas demasiado tiempo solo con las decisiones y
            los problemas... entonces un buen consultor puede ser la mejor
            inversión que hagas en años.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No porque te vaya a dar respuestas mágicas, sino porque te va a
            hacer las preguntas correctas. Te va a obligar a mirar lo que
            llevas tiempo evitando. Te va a dar una perspectiva que desde
            dentro es imposible tener. Y te va a acompañar mientras haces
            los cambios que tu negocio necesita.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Eso, en el momento correcto y con el empresario correcto, lo
            cambia todo.
          </p>

          {/* Cuadro resumen final */}
          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Resumen rápido: ¿necesitas un consultor?
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="pb-2 pr-4 font-semibold text-primary-900">
                      Probablemente sí
                    </th>
                    <th className="pb-2 font-semibold text-primary-900">
                      Probablemente no
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
                  {[
                    [
                      "Tu negocio factura pero no gana lo que debería",
                      "Acabas de empezar y no tienes datos aún",
                    ],
                    [
                      "Llevas meses estancado sin saber por qué",
                      "No estás dispuesto a cambiar nada",
                    ],
                    [
                      "Trabajas 14 horas y todo depende de ti",
                      "Buscas a alguien que haga el trabajo por ti",
                    ],
                    [
                      "No sabes qué es rentable y qué no",
                      "Quieres resultados sin implicarte",
                    ],
                    [
                      "Necesitas una perspectiva externa honesta",
                      "Solo quieres que alguien te dé la razón",
                    ],
                  ].map(([si, no], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 font-medium text-green-800">
                        {si}
                      </td>
                      <td className="py-3 text-gray-500">{no}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-gray-600 md:text-lg">
            Si después de leer todo esto sientes que puede tener sentido
            hablar, el siguiente paso es sencillo: una conversación de 30
            minutos, sin coste y sin compromiso, para que me cuentes tu
            situación y yo te diga honestamente si puedo ayudarte — o no.
            Así de simple.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-500 bg-primary-50/60 p-5 not-prose">
            <p className="text-sm font-semibold text-primary-800">
              Si tu pyme está en la provincia de A Coruña, encontrarás detalles específicos
              sobre precios, servicios y cómo elegir bien en la{" "}
              <a href="/blog/consultor-empresas-a-coruna-guia" className="text-accent-600 underline hover:text-accent-700">
                guía local de consultor de empresas en A Coruña
              </a>.
            </p>
          </div>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="cuando-contratar-un-consultor-de-negocios" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber si un consultor puede ayudarte?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Conversamos 30 minutos sobre tu negocio. Sin compromiso, sin
            presión. Solo para que sepas si tiene sentido trabajar juntos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
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
          </div>
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación gratuita — 30 minutos, sin compromiso.
          </p>
        </div>
      </section>

      <BlogNav currentSlug="cuando-contratar-un-consultor-de-negocios" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y online en toda España
            </strong>{" "}
            y el{" "}
            <strong className="text-primary-800">Método Rentabilismo</strong>.
          </p>
          <a href="/" className="btn-primary mt-6 inline-block">
            Volver a la página principal
          </a>
        </div>
      </section>
    </>
  );
}
