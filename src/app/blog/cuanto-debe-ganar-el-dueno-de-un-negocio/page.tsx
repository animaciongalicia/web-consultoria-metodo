import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cuánto debe ganar el dueño de un negocio: la pregunta incómoda | Consultoría Método",
  description:
    "Muchos empresarios pyme cobran menos que sus empleados. Aprende a calcular tu sueldo justo. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "cuánto ganar dueño negocio",
    "sueldo empresario pyme",
    "cuánto cobrar como autónomo",
    "salario justo empresario",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title:
      "Cuánto debe ganar el dueño de un negocio: la pregunta incómoda",
    description:
      "Muchos empresarios pyme cobran menos que sus empleados. Aprende a separar tu sueldo del beneficio y a calcular lo que realmente mereces ganar.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/cuanto-debe-ganar-el-dueno-de-un-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cuánto debe ganar el dueño de un negocio: la pregunta incómoda",
  description:
    "Muchos empresarios pyme cobran menos que sus empleados. Aprende a separar tu sueldo del beneficio y a calcular lo que realmente mereces ganar.",
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
  datePublished: "2025-03-31",
  dateModified: "2025-03-31",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/cuanto-debe-ganar-el-dueno-de-un-negocio",
  },
};

export default function ArticuloSueldoEmpresario() {
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
            Cuánto debe ganar el dueño de un negocio: la pregunta incómoda
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Es una de las conversaciones más difíciles que tengo con mis
            clientes. Muchos empresarios pyme trabajan más horas que nadie
            en su empresa y cobran menos que sus empleados. Y lo justifican
            diciendo que &ldquo;el negocio lo necesita&rdquo;. Vamos a
            hablar de eso.
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
            Si eres dueño de una pyme, te hago una pregunta directa:
            ¿cuánto cobras al mes? No cuánto factura tu empresa — cuánto
            te llevas tú a casa. Y ahora otra: si mañana te fueras y
            tuvieras que contratar a alguien para hacer tu trabajo, ¿cuánto
            le pagarías? Si la segunda cifra es mayor que la primera,
            tienes un problema serio que necesitas resolver.
          </p>

          {/* El tabú */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El tabú del sueldo del empresario
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            En mis años como consultor empresarial en Coruña he visto de
            todo: empresarios que se pagan 1.200 euros al mes llevando
            una empresa que factura 400.000 euros. Autónomos que no se
            pagan nada los meses &ldquo;flojos&rdquo;. Dueños de
            negocios que mezclan la cuenta personal con la de la empresa
            y no tienen ni idea de cuánto ganan realmente.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y nadie habla de ello. Entre empresarios no se comenta
            cuánto cobra cada uno. Con el asesor fiscal se habla de
            impuestos, no de si tu sueldo es justo. Y en casa se asume
            que &ldquo;ya vendrán tiempos mejores&rdquo;. Pero los
            tiempos mejores no llegan solos — llegan cuando tomas
            decisiones que los provoquen.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Si tu negocio no puede pagarte un sueldo digno,
            no tienes un negocio — tienes un trabajo mal pagado que
            además te quita el sueño.&rdquo;
          </blockquote>

          {/* Señales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Señales de que te estás pagando de menos
          </h2>
          <div className="my-10 space-y-4">
            {[
              "Trabajas más de 50 horas semanales y tu sueldo no refleja ese esfuerzo.",
              "Tus empleados ganan más que tú por hora trabajada.",
              "No te has subido el sueldo en los últimos tres años.",
              "Cuando hay un mes malo, el primero que deja de cobrar eres tú.",
              "Usas dinero de la empresa para gastos personales porque \"ya está todo mezclado\".",
              "No podrías contratar a alguien que haga tu trabajo por lo que tú cobras.",
              "Justificas tu sueldo bajo diciendo que \"el negocio lo necesita\".",
            ].map((senal, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <span className="mt-0.5 text-amber-600 font-bold text-lg shrink-0">!</span>
                <p className="text-gray-700 md:text-lg">{senal}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te has reconocido en tres o más de estas señales, es
            momento de replantear tu compensación. Y no, no es egoísmo
            — es sostenibilidad.
          </p>

          {/* Cómo calcular tu sueldo justo */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo calcular un sueldo justo para ti
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El sueldo del dueño no es &ldquo;lo que sobra&rdquo;. Es un
            coste más de la empresa que hay que planificar y respetar.
            Aquí tienes un método para calcularlo:
          </p>

          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              Fórmula del sueldo justo del empresario
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-accent-200 bg-accent-50 p-4">
                <span className="mt-0.5 text-accent-600 font-bold text-xl shrink-0">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Sueldo de mercado</p>
                  <p className="mt-1 text-gray-600">¿Cuánto cobrarías si hicieras tu mismo trabajo como empleado en otra empresa? Eso es tu base. Si eres gerente, director comercial y jefe de operaciones a la vez, suma el valor de mercado de esas funciones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-accent-200 bg-accent-50 p-4">
                <span className="mt-0.5 text-accent-600 font-bold text-xl shrink-0">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Prima de riesgo</p>
                  <p className="mt-1 text-gray-600">Un empleado cobra su nómina pase lo que pase. Tú asumes riesgo, incertidumbre, responsabilidad legal y financiera. Eso merece una compensación adicional de al menos un 20-30% sobre el sueldo de mercado.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-accent-200 bg-accent-50 p-4">
                <span className="mt-0.5 text-accent-600 font-bold text-xl shrink-0">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Tu sueldo justo</p>
                  <p className="mt-1 text-gray-600">Sueldo de mercado + prima de riesgo = lo mínimo que deberías cobrar. Si tu negocio no puede pagarte eso, el problema no es que tú pidas demasiado — es que el negocio no es lo bastante rentable.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si al hacer este cálculo descubres que tu empresa no puede
            asumir tu sueldo justo, el siguiente paso es trabajar en
            la rentabilidad. Te recomiendo leer{" "}
            <a
              href="/blog/como-mejorar-rentabilidad-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo mejorar la rentabilidad de tu empresa
            </a>{" "}
            y también{" "}
            <a
              href="/blog/como-calcular-margen-beneficio-producto"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo calcular el margen de beneficio real de tus productos
            </a>.
          </p>

          {/* Separar sueldo del beneficio */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Separar tu sueldo del beneficio de la empresa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este es un concepto fundamental que muchos empresarios pyme
            no aplican. Tu sueldo y el beneficio de la empresa son dos
            cosas completamente distintas:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#8226;</span>
              <span><strong>Tu sueldo</strong> es la compensación por el trabajo que haces en la empresa. Es un gasto fijo, como el sueldo de cualquier empleado.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#8226;</span>
              <span><strong>El beneficio</strong> es lo que genera la empresa después de pagar todos sus costes — incluido tu sueldo. Es la recompensa por ser propietario e inversor.</span>
            </li>
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si mezclas ambos conceptos, nunca sabrás si tu negocio es
            realmente rentable o simplemente te está pagando un sueldo
            disfrazado de beneficio. Y esa confusión puede llevarte a
            creer que las cosas van bien cuando en realidad el negocio
            no genera ningún retorno real. Esto conecta directamente
            con lo que explico en{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-accent-600 underline hover:text-accent-700"
            >
              por qué tu empresa factura pero no gana dinero
            </a>.
          </p>

          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Ejemplo práctico
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Imagina que tu empresa factura 300.000 euros al año y
              tiene unos gastos de 260.000 euros, incluidos sueldos de
              empleados, alquiler, proveedores, etc. Quedan 40.000 euros.
              Si tú no te asignas un sueldo, piensas que ganas 40.000
              euros al año. Pero si tu trabajo de mercado vale 36.000
              euros, en realidad tu negocio solo genera 4.000 euros de
              beneficio real. ¿Compensa todo el riesgo y el esfuerzo
              por 4.000 euros al año?
            </p>
          </div>

          {/* Cuándo subirse el sueldo */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo deberías subirte el sueldo
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La respuesta no es &ldquo;cuando sobre dinero&rdquo;. Si
            esperas a que sobre, no subirás nunca. El momento de
            subirse el sueldo es cuando:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Tu empresa genera beneficio consistente después de pagarte tu sueldo actual.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Tu sueldo está significativamente por debajo del valor de mercado de tu trabajo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Has aumentado la facturación o mejorado los márgenes de forma sostenida.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Llevas más de un año sin ajustar tu compensación.</span>
            </li>
          </ul>

          {/* El peligro de reinvertir todo */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El peligro de &ldquo;reinvertirlo todo&rdquo;
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hay empresarios que llevan años sin cobrar un sueldo decente
            porque &ldquo;todo se reinvierte en el negocio&rdquo;. Y la
            reinversión es necesaria, pero tiene que tener un límite y
            una lógica. Si reinviertes todo, año tras año, sin que tú
            veas una mejora real en tu calidad de vida, estás
            alimentando una máquina que no te devuelve nada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La reinversión debe ser estratégica: con objetivos claros,
            con retorno medible y con un plazo definido. &ldquo;Reinvierto
            20.000 euros en maquinaria que me permitirá producir un 30%
            más y amortizo la inversión en 18 meses&rdquo; es una
            decisión inteligente. &ldquo;Reinvierto todo lo que gano
            porque algún día esto dará frutos&rdquo; es una
            esperanza, no una estrategia.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Tu negocio existe para darte una vida mejor, no
            para que tú le des tu vida entera a cambio de nada.&rdquo;
          </blockquote>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cobrar un sueldo justo no es un capricho — es una necesidad
            para que tu negocio sea sostenible y para que tú puedas
            seguir al frente de él sin quemarte. Si tu empresa no puede
            pagarte lo que mereces, eso no significa que debas conformarte
            — significa que hay que trabajar en la rentabilidad y la
            mejora de empresas para que pueda hacerlo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza hoy: calcula tu sueldo de mercado, súmale la prima
            de riesgo, y compáralo con lo que cobras. Si hay un
            desajuste grande, ya tienes una prioridad clara para los
            próximos meses. Y si necesitas ayuda para reorganizar tus
            números y trazar un plan, eso es exactamente lo que hacemos
            en consultoría empresarial en Coruña y online.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Porque al final, la pregunta no es si puedes permitirte
            pagarte más. La pregunta es si puedes permitirte seguir
            pagándote menos de lo que vales.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="cuanto-debe-ganar-el-dueno-de-un-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio no te paga lo que mereces?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos la rentabilidad real de tu empresa y trazamos un
            plan para que puedas cobrar un sueldo justo sin poner en
            riesgo el negocio.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
              Solicitar diagnóstico de mi negocio
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

      <BlogNav currentSlug="cuanto-debe-ganar-el-dueno-de-un-negocio" />

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
