import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo motivar a tu equipo de trabajo en una pyme | Consultoría Método",
  description:
    "Aprende a motivar a tu equipo en una pyme con estrategias prácticas y de bajo coste. Los 5 motivadores reales, errores que desmotivan sin que te des cuenta y acciones concretas.",
  keywords: [
    "motivar equipo trabajo pyme",
    "motivación empleados pequeña empresa",
    "retener talento pyme",
    "gestión de equipos",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "liderazgo pyme",
  ],
  openGraph: {
    title: "Cómo motivar a tu equipo de trabajo en una pyme",
    description:
      "Estrategias prácticas y de bajo coste para motivar empleados en pequeñas empresas. Lo que realmente funciona más allá del dinero.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-motivar-equipo-trabajo-pyme",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo motivar a tu equipo de trabajo en una pyme",
  description:
    "Aprende a motivar a tu equipo en una pyme con estrategias prácticas y de bajo coste. Los 5 motivadores reales, errores que desmotivan sin que te des cuenta y acciones concretas.",
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
  datePublished: "2025-05-29",
  dateModified: "2025-05-29",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-motivar-equipo-trabajo-pyme",
  },
};

export default function ArticuloMotivarEquipo() {
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
            Cómo motivar a tu equipo de trabajo en una pyme
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            No necesitas el presupuesto de Google para tener un equipo
            motivado. Las pymes tienen una ventaja que las grandes
            empresas envidian: la cercanía. Aprende a usarla.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            «Mi equipo no se implica.» «Hacen lo justo y se van.» «No
            encuentro gente comprometida.» Escucho estas frases cada
            semana en mis sesiones de consultoría. Y casi siempre, cuando
            rasco un poco, el problema no está en el equipo — está en
            cómo se les lidera. No lo digo para culparte, sino para darte
            una buena noticia: si el problema está en ti, la solución
            también.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Motivar a un equipo en una pyme es diferente a hacerlo en una
            gran empresa. No puedes ofrecer planes de carrera de 15
            escalones, ni bonus de seis cifras, ni oficinas con futbolín.
            Pero tienes algo mucho más potente: la relación directa, el
            impacto visible del trabajo de cada persona y la flexibilidad
            para hacer las cosas de forma humana. Esas son tus armas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo vamos a ver qué motiva realmente a las
            personas (spoiler: no es solo el dinero), qué cosas las
            desmotivan sin que te des cuenta, y qué acciones concretas
            puedes implementar desde esta semana con coste cero o
            mínimo.
          </p>

          {/* H2 — El dinero no es todo */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El dinero importa, pero no es lo que más motiva
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Seamos claros: si pagas por debajo de mercado, ninguna
            estrategia de motivación va a funcionar. El salario tiene que
            ser justo y competitivo. Eso es el mínimo, no el motivador.
            Una vez que el salario es razonable, subir un 5% más no cambia
            significativamente la motivación. Lo que sí la cambia son
            otros factores que las pymes pueden ofrecer mejor que nadie.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las investigaciones sobre motivación laboral llevan décadas
            diciendo lo mismo: más allá de un umbral salarial justo, lo
            que más motiva a las personas es la autonomía, el crecimiento,
            el reconocimiento, el propósito y el ambiente. Veámoslos uno
            a uno.
          </p>

          {/* H2 — Los 5 motivadores */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 5 motivadores reales en una pyme
          </h2>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Motivador</th>
                  <th className="px-4 py-3 font-semibold">Qué significa</th>
                  <th className="px-4 py-3 font-semibold">Ejemplo práctico en pyme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Autonomía</td>
                  <td className="px-4 py-3">Poder decidir cómo hacer su trabajo</td>
                  <td className="px-4 py-3">Dejar que el empleado organice su ruta de visitas o su método de trabajo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Crecimiento</td>
                  <td className="px-4 py-3">Aprender cosas nuevas, asumir más responsabilidad</td>
                  <td className="px-4 py-3">Formación práctica, asignar un proyecto nuevo, enseñar a un compañero</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Reconocimiento</td>
                  <td className="px-4 py-3">Que valoren su trabajo y se lo digan</td>
                  <td className="px-4 py-3">Un «buen trabajo con ese cliente» dicho delante del equipo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Propósito</td>
                  <td className="px-4 py-3">Sentir que su trabajo tiene impacto real</td>
                  <td className="px-4 py-3">Compartir el feedback positivo de clientes, explicar cómo su tarea contribuye al resultado</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Ambiente</td>
                  <td className="px-4 py-3">Trabajar en un entorno agradable y con buen trato</td>
                  <td className="px-4 py-3">Flexibilidad horaria razonable, trato respetuoso, resolver conflictos rápido</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            En una pyme, estos cinco motivadores están al alcance de la
            mano. No cuestan dinero — cuestan atención, intención y
            constancia. Un empresario que se los toma en serio tiene una
            ventaja competitiva brutal en retención de talento. Para
            profundizar en la gestión diaria del equipo, revisa{" "}
            <a
              href="/blog/como-gestionar-empleados-pyme"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo gestionar empleados en una pyme
            </a>
            .
          </p>

          {/* H2 — Lo que desmotiva */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Lo que desmotiva sin que te des cuenta
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            A veces, más importante que motivar es dejar de desmotivar.
            Hay comportamientos del empresario que destruyen la motivación
            del equipo sin que sea consciente de ello.
          </p>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; Comportamientos que destruyen la motivación:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Microgestión: revisar cada detalle, corregir todo, no dejar que nadie haga nada sin tu aprobación.",
                "Promesas incumplidas: «el mes que viene hablamos de tu sueldo» y nunca llega ese mes.",
                "Favoritismos: tratar diferente a unos y otros sin criterios claros y transparentes.",
                "Falta de comunicación: que el equipo se entere de las cosas por rumores o de última hora.",
                "No dar feedback: ni positivo ni negativo. El silencio del jefe se interpreta siempre como desaprobación.",
                "Cambiar de criterio constantemente: hoy es urgente una cosa, mañana otra, y nada se termina nunca.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-amber-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si te reconoces en alguno de estos puntos, no te flageles —
            actúa. Elige el que más daño esté haciendo y cámbialo esta
            semana. El impacto será inmediato. Tu equipo no necesita un
            jefe perfecto — necesita uno que se esfuerce por mejorar y
            que sea honesto cuando se equivoca.
          </p>

          {/* H2 — Acciones de bajo coste */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            10 acciones de bajo coste para motivar a tu equipo
          </h2>

          <ol className="mt-6 space-y-4">
            {[
              "Reunión semanal de 15 minutos donde compartes cómo va el negocio, qué se ha conseguido y qué viene.",
              "Reconocimiento público cuando alguien hace algo bien — no cuesta nada y vale mucho.",
              "Flexibilidad horaria razonable: dejar salir antes un viernes, compensar horas extras.",
              "Formación práctica: un curso online, un taller, o simplemente enseñarle algo nuevo tú mismo.",
              "Pedir opinión antes de tomar decisiones que les afectan — y tenerla realmente en cuenta.",
              "Celebrar los éxitos, aunque sean pequeños: un contrato cerrado, un mes bueno, un problema resuelto.",
              "Dar autonomía progresiva: empieza con tareas pequeñas y ve ampliando según demuestren responsabilidad.",
              "Resolver conflictos rápido en lugar de mirar para otro lado esperando que se resuelvan solos.",
              "Interesarte por su vida personal sin ser invasivo — un «¿cómo estás?» sincero marca la diferencia.",
              "Predicar con el ejemplo: no puedes pedir puntualidad si llegas tarde, ni compromiso si tú no lo demuestras.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;La gente no deja empresas. Deja jefes. En una pyme,
            el jefe es la empresa. Tu forma de liderar determina
            directamente si tu equipo se queda o se va, si se implica o
            hace lo justo. Esa responsabilidad es enorme — pero también
            es una oportunidad.&rdquo;
          </blockquote>

          {/* H2 — Tu actitud */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Tu actitud como dueño: el factor número uno
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            En una pyme de 3, 5 o 15 personas, la actitud del dueño lo
            contamina todo — para bien o para mal. Si llegas estresado,
            de mal humor y gritando, tu equipo trabajará con miedo. Si
            llegas con energía, con claridad y con respeto, tu equipo
            responderá con compromiso.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No se trata de fingir que todo va bien cuando no es así. Se
            trata de gestionar tu estado emocional antes de trasladarlo
            al equipo. De separar los problemas estratégicos (que son
            tuyos) de los problemas operativos (que puedes compartir y
            resolver juntos). De aprender a{" "}
            <a
              href="/blog/como-delegar-tareas-sin-perder-control"
              className="text-accent-600 underline hover:text-accent-700"
            >
              delegar sin perder el control
            </a>{" "}
            para que no estés siempre al límite.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Construir cultura en un equipo pequeño:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              La cultura de empresa no se escribe en un póster de la
              pared. Se construye con lo que haces todos los días: cómo
              tratas a la gente, cómo reaccionas ante los errores, qué
              comportamientos premias y cuáles toleras. En una pyme, la
              cultura es el reflejo directo del dueño. Si quieres un
              equipo comprometido, empieza por serlo tú.
            </p>
          </div>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: motivar es liderar, y liderar se aprende
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No naciste sabiendo gestionar personas — la mayoría de los
            empresarios nunca recibieron formación en liderazgo. Pero se
            aprende. Y la buena noticia es que en una pyme los cambios
            se notan inmediatamente: mejora una cosa y el equipo entero
            lo percibe.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza por lo más simple: esta semana, reconoce en voz alta
            algo bueno que hizo alguien de tu equipo. La semana que viene,
            pregúntales su opinión sobre algo que vayas a cambiar. Al mes,
            haz esa reunión semanal de 15 minutos. En tres meses tendrás
            un equipo diferente. No porque hayas cambiado a las personas,
            sino porque habrás cambiado cómo las lideras.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y recuerda: un equipo motivado no es un lujo. Es lo que
            necesitas para{" "}
            <a
              href="/blog/como-hacer-crecer-una-empresa-pequena"
              className="text-accent-600 underline hover:text-accent-700"
            >
              hacer crecer tu empresa
            </a>
            . Porque tú solo no puedes hacerlo todo. Y no deberías
            intentarlo.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-motivar-equipo-trabajo-pyme" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu equipo no se implica como debería?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a diagnosticar qué está fallando en la gestión
            de tu equipo y a implementar cambios que generen compromiso
            real — sin fórmulas mágicas ni discursos motivacionales.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
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
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación gratuita — 30 minutos, sin compromiso.
          </p>
        </div>
      </section>

      <BlogNav currentSlug="como-motivar-equipo-trabajo-pyme" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y por videollamada en el resto de España
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
