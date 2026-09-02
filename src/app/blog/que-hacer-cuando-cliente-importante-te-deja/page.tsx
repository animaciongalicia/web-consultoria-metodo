import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo adaptar la empresa tras perder al principal cliente — Guía práctica | Consultoría Método",
  description:
    "Perder al principal cliente pone en riesgo tu empresa. Guía práctica para adaptar la empresa en las primeras semanas: 6 pasos, señales de alerta, impacto en tesorería y cómo diversificar para que no vuelva a pasar.",
  keywords: [
    "adaptar la empresa tras perder al principal cliente",
    "adaptar empresa perder cliente principal",
    "qué hacer cuando cliente importante te deja",
    "perder cliente importante pyme",
    "cliente clave se va",
    "diversificar cartera clientes",
    "dependencia de clientes pyme",
    "recuperar cliente perdido",
    "consultor empresarial Coruña",
    "consultoría empresas Galicia",
    "riesgo concentración clientes",
  ],
  openGraph: {
    title: "Cómo adaptar la empresa tras perder al principal cliente — Guía práctica",
    description:
      "Plan de acción en 6 pasos para adaptar la empresa cuando pierdes al principal cliente. Señales de alerta, impacto en tesorería y cómo diversificar para que no vuelva a pasar.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/que-hacer-cuando-cliente-importante-te-deja",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo adaptar la empresa tras perder al principal cliente — Guía práctica",
  description:
    "Guía práctica en 6 pasos para adaptar la empresa cuando pierdes al principal cliente. Señales de alerta, impacto en tesorería y cómo diversificar la cartera.",
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
  datePublished: "2026-06-01",
  dateModified: "2026-09-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/que-hacer-cuando-cliente-importante-te-deja",
  },
};

export default function ArticuloClienteImportanteTeDeja() {
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
            Cómo adaptar la empresa tras perder al principal cliente
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Te llega el email o la llamada que no querías recibir: tu
            cliente más importante te comunica que no va a renovar. El
            suelo se mueve bajo tus pies. Lo que hagas en las siguientes
            semanas para adaptar la empresa marcará la diferencia entre
            una crisis y una oportunidad de reconstruir tu negocio sobre
            bases más sólidas.
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
            En más de 25 años como consultor empresarial en Coruña y
            trabajando con pymes de toda España, he visto cómo la pérdida
            de un cliente clave puede paralizar a un empresario. Es
            comprensible: ese cliente representaba seguridad, previsibilidad,
            un ingreso con el que contabas cada mes. Adaptar la empresa
            tras perder al principal cliente no es solo un problema
            operativo: es una decisión estratégica que define el futuro
            del negocio. Y si un solo cliente puede poner en riesgo tu
            empresa, el problema empezó mucho antes de que se fuera.
          </p>

          {/* Los 6 pasos — bloque nuevo para captar intent */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo adaptar la empresa tras perder al principal cliente en 6 pasos
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si acabas de recibir la noticia y necesitas un plan de acción
            claro, este es el orden que recomiendo. Cada paso lo detallo
            más abajo, pero primero necesitas la fotografía completa para
            no reaccionar en caliente.
          </p>
          <ol className="my-8 space-y-3 rounded-xl border border-primary-200 bg-primary-50/30 p-6 text-gray-700">
            <li>
              <strong className="text-primary-900">1. Cuantifica el impacto real</strong> —
              qué porcentaje de tu facturación y qué margen concreto pierdes.
              Sin este número no puedes tomar ninguna decisión con criterio.
            </li>
            <li>
              <strong className="text-primary-900">2. Blinda la tesorería</strong> —
              ajusta pagos, negocia plazos y calcula cuántos meses aguantas
              con la estructura actual antes de tomar decisiones drásticas.
            </li>
            <li>
              <strong className="text-primary-900">3. Analiza por qué se ha ido</strong> —
              precio, servicio, cambio interno del cliente o algo que no viste
              venir. La respuesta condiciona cómo abordas al resto de tu cartera.
            </li>
            <li>
              <strong className="text-primary-900">4. Refuerza la cartera actual</strong> —
              antes de captar nuevos clientes, protege a los que ya tienes.
              El riesgo de efecto contagio es real.
            </li>
            <li>
              <strong className="text-primary-900">5. Activa un plan de captación intensivo</strong> —
              alianzas, referidos, reactivación de clientes dormidos y canales
              propios. Sin sistema estable de captación, la próxima pérdida
              será peor.
            </li>
            <li>
              <strong className="text-primary-900">6. Rediseña tu modelo para que no vuelva a pasar</strong> —
              si un cliente concentraba más del 20 % de tu facturación,
              tienes un problema estructural, no coyuntural. Toca cambiar
              cómo funciona tu empresa.
            </li>
          </ol>
          <p className="mt-4 text-gray-600 md:text-lg">
            Ahora vamos con las señales que suele haber antes de que se vaya
            un cliente importante — y por qué la mayoría de empresarios las
            ignora.
          </p>

          {/* Señales de alerta */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Las señales de que un cliente clave se está yendo
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Los clientes rara vez se van de un día para otro. Casi
            siempre hay señales previas que, si sabes leer, te dan
            margen para reaccionar. El problema es que cuando dependes
            mucho de alguien, tiendes a ignorar los avisos porque no
            quieres verlos.
          </p>

          <div className="my-10 space-y-4">
            {[
              {
                señal: "Reducen pedidos o frecuencia sin explicación",
                detalle:
                  "Si un cliente que te compraba cada mes pasa a cada dos meses, no es casualidad. Está probando alternativas o redistribuyendo su presupuesto.",
              },
              {
                señal: "Dejan de responderte con la rapidez de antes",
                detalle:
                  "Los emails tardan más, las reuniones se posponen, las llamadas no se devuelven. La distancia emocional precede a la distancia comercial.",
              },
              {
                señal: "Piden presupuestos comparativos o cambios de condiciones",
                detalle:
                  "Cuando empiezan a cuestionar precios o a pedir lo que nunca habían pedido, es que alguien les está ofreciendo otra cosa.",
              },
              {
                señal: "Cambian al interlocutor habitual",
                detalle:
                  "La persona con la que tenías relación desaparece y te pasan a alguien de compras o administración. La relación personal se ha roto.",
              },
              {
                señal: "Te enteras de que están hablando con tu competencia",
                detalle:
                  "Si te llega este rumor, no lo ignores. No siempre significa que se van, pero significa que están evaluando opciones.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.señal}
                  </p>
                  <p className="mt-1 text-gray-600">{item.detalle}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Los clientes no se van sin avisar. Se van sin que tú
            escuches los avisos.&rdquo;
          </blockquote>

          {/* Plan de acción inmediato */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Plan de acción inmediato: las primeras 48 horas
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Ya ha pasado. El cliente te ha comunicado que se va. No es
            momento de lamentarse ni de buscar culpables. Es momento de
            actuar con frialdad y método. Estos son los pasos que
            recomiendo a mis clientes en consultoría:
          </p>

          <div className="my-10 space-y-6">
            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 1
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Calcula el impacto real en tu tesorería
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                No el impacto emocional — el financiero. ¿Cuánto
                facturabas a este cliente al mes? ¿Qué porcentaje de tus
                ingresos totales representa? ¿Cuántos meses puedes
                aguantar sin ese ingreso con tu tesorería actual? Si no
                tienes claras las respuestas, te recomiendo leer{" "}
                <a
                  href="/blog/como-mejorar-el-flujo-de-caja"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  cómo mejorar el flujo de caja en tu negocio
                </a>{" "}
                para entender cómo proteger tu liquidez en esta situación.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 2
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Revisa tu pipeline comercial
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                ¿Tienes propuestas pendientes? ¿Clientes en fase de
                negociación? ¿Oportunidades que puedas acelerar? Haz un
                inventario realista de todo lo que puede convertirse en
                ingreso en los próximos 30, 60 y 90 días. Si tu pipeline
                está vacío, ese es otro problema que resolver de manera
                urgente. Puedes empezar por{" "}
                <a
                  href="/blog/como-conseguir-clientes-para-tu-negocio"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  cómo conseguir clientes para tu negocio
                </a>.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 3
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Intenta la recuperación (sin desesperación)
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Pide una reunión cara a cara. No para rogar — para
                entender. Pregunta qué ha fallado, qué necesitarían para
                quedarse, si hay algo que puedas mejorar. A veces la
                decisión no es definitiva. A veces solo quieren sentirse
                escuchados. Pero si la decisión ya está tomada, acepta
                con profesionalidad y deja la puerta abierta.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 4
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Ajusta los gastos antes de que sea tarde
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Si ese cliente era el 20%, 30% o 40% de tu facturación,
                necesitas reducir gastos de forma inmediata. No dentro
                de tres meses — ahora. Revisa gastos fijos, compromisos
                de personal, suscripciones y todo lo que puedas recortar
                sin destruir tu capacidad operativa.
              </p>
            </div>
          </div>

          {/* La regla del 20% */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            La regla de oro: ningún cliente debería superar el 20%
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta es probablemente la lección más importante de este
            artículo. Si un solo cliente representa más del 20% de tu
            facturación, no tienes un negocio — tienes un empleo
            disfrazado. Y un empleo donde el &ldquo;jefe&rdquo; puede
            despedirte en cualquier momento.
          </p>

          <div className="my-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-4 py-3 font-semibold text-primary-900">
                    Concentración del cliente
                  </th>
                  <th className="border border-gray-200 px-4 py-3 font-semibold text-primary-900">
                    Nivel de riesgo
                  </th>
                  <th className="border border-gray-200 px-4 py-3 font-semibold text-primary-900">
                    Qué hacer
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Menos del 10%
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      Saludable
                    </span>
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Situación ideal. Perder un cliente duele pero no desestabiliza.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Entre 10% y 20%
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                      Moderado
                    </span>
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Aceptable, pero trabaja activamente en diversificar.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Entre 20% y 40%
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
                      Alto
                    </span>
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Señal de alarma. Diversificar es tu prioridad número uno.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Más del 40%
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                      Crítico
                    </span>
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Emergencia. Estás en manos de otra empresa. Actúa ya.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            He visto esta situación decenas de veces. Un taller
            mecánico en Coruña que vivía de una flota de vehículos de una
            sola empresa. Un estudio de diseño que tenía un cliente que
            representaba el 60% de su trabajo. Una empresa de limpieza
            que dependía de un único contrato público. Cuando ese
            cliente se fue — y siempre se acaba yendo — el golpe fue
            devastador.
          </p>

          {/* Estrategias de diversificación */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo diversificar para que no vuelva a pasar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Diversificar no es solo &ldquo;conseguir más clientes&rdquo;.
            Es construir una estructura de ingresos que sea resistente.
            Estas son las estrategias que funcionan:
          </p>

          <div className="my-10 space-y-4">
            <div className="rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Amplía tu mercado objetivo
              </h3>
              <p className="mt-2 text-gray-700 md:text-lg">
                Si solo vendes a un tipo de cliente o a un sector,
                explora otros. Un proveedor de hostelería puede vender
                también a residencias, comedores escolares o empresas
                de catering. La misma capacidad productiva, distintos
                mercados.
              </p>
            </div>

            <div className="rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Desarrolla productos o servicios complementarios
              </h3>
              <p className="mt-2 text-gray-700 md:text-lg">
                ¿Qué más puedes ofrecer a tus clientes actuales? ¿Qué
                necesidades tienen que hoy cubren con otro proveedor?
                Añadir servicios de valor te hace menos sustituible y
                aumenta el ticket medio.
              </p>
            </div>

            <div className="rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Invierte en captación constante, no solo cuando duele
              </h3>
              <p className="mt-2 text-gray-700 md:text-lg">
                El error más común es dejar de captar cuando las cosas
                van bien. La captación tiene que ser un proceso continuo,
                no una reacción a la pérdida. Dedica al menos un 10-15%
                de tu tiempo comercial a abrir puertas nuevas, incluso
                cuando estés lleno de trabajo.
              </p>
            </div>

            <div className="rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Fortalece la relación con los clientes que ya tienes
              </h3>
              <p className="mt-2 text-gray-700 md:text-lg">
                La mejor defensa contra la pérdida de clientes es que no
                quieran irse. La fidelización activa — seguimiento,
                personalización, cumplimiento impecable — es tu muro de
                contención. Profundizo en esto en{" "}
                <a
                  href="/blog/como-fidelizar-clientes-pyme"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  cómo fidelizar clientes en una pyme
                </a>.
              </p>
            </div>
          </div>

          {/* Lo que nadie te dice */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Lo que nadie te dice: a veces perder ese cliente es lo mejor
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Suena contradictorio, pero lo he visto muchas veces. El
            cliente grande que te tenía atado, que te imponía condiciones,
            que te pagaba tarde, que absorbía toda tu capacidad y no te
            dejaba crecer. Cuando se va, el primer mes es duro. Pero al
            tercer mes empiezas a respirar. Al sexto, tienes cinco
            clientes donde antes tenías uno — y facturas lo mismo o más,
            con mucho menos riesgo.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Depender de un cliente no es tener un buen cliente.
            Es tener una vulnerabilidad disfrazada de estabilidad.&rdquo;
          </blockquote>

          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Lo que hago con mis clientes de consultoría
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Cuando un empresario viene a mi consultoría en Coruña o en
              sesión online porque ha perdido un cliente importante, lo
              primero que hacemos no es buscar un sustituto. Lo primero
              es analizar cómo llegó a esa dependencia. Revisamos la
              estructura de ingresos, la cartera de clientes, el proceso
              comercial y los indicadores de concentración. Y a partir
              de ahí, construimos un plan para que esa situación no se
              repita. Porque la crisis de hoy es la oportunidad de
              construir un negocio más sólido mañana.
            </p>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Perder un cliente importante duele. No voy a minimizarlo.
            Pero lo peor que puedes hacer es quedarte paralizado. Calcula
            el impacto financiero, revisa tu pipeline, intenta la
            recuperación con dignidad y, si no es posible, usa este
            golpe como catalizador para diversificar tu cartera de
            clientes y construir un negocio que no dependa de nadie.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La pregunta no es &ldquo;¿qué hago ahora que se ha
            ido?&rdquo;. La pregunta de verdad es: &ldquo;¿qué voy a
            hacer para que la próxima vez que pase — porque pasará — mi
            negocio lo absorba sin tambalearse?&rdquo;
          </p>

          {/* CTA */}
          <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              ¿Has perdido un cliente clave y no sabes cómo reaccionar?
            </p>
            <p className="mt-2 text-gray-600">
              Analizamos tu situación real, calculamos el impacto en tu
              tesorería y diseñamos un plan de acción para recuperar la
              estabilidad y diversificar tu cartera de clientes.
            </p>
            <a
              href="/diagnostico-negocio"
              className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
            >
              Solicita tu diagnóstico gratuito
            </a>
          </div>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="que-hacer-cuando-cliente-importante-te-deja" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio depende demasiado de pocos clientes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Revisamos tu cartera de clientes, medimos el riesgo de
            concentración y construimos un plan de diversificación
            realista para tu pyme.
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

      <BlogNav currentSlug="que-hacer-cuando-cliente-importante-te-deja" />

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
