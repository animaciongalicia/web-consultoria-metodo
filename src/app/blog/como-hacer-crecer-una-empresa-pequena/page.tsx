import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo hacer crecer una empresa pequeña que se ha estancado | Consultoría Método",
  description:
    "Descubre cómo hacer crecer una empresa pequeña cuando sientes que se ha estancado. Detecta oportunidades, supera la saturación del mercado y diseña un plan estratégico simple para volver a crecer.",
  keywords: [
    "cómo hacer crecer una empresa pequeña",
    "empresa estancada",
    "crecimiento empresarial pyme",
    "escalar un negocio pequeño",
    "plan estratégico empresa pequeña",
    "consultoría crecimiento empresas",
  ],
  openGraph: {
    title:
      "Tu empresa está estancada: cómo volver a crecer sin volverte loco",
    description:
      "Cuando un negocio deja de crecer, el problema casi nunca es el mercado. Descubre qué está frenando tu empresa y cómo desbloquear el crecimiento con método.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-hacer-crecer-una-empresa-pequena",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Tu empresa está estancada: cómo volver a crecer sin volverte loco",
  description:
    "Descubre cómo hacer crecer una empresa pequeña cuando sientes que se ha estancado. Detecta oportunidades, supera la saturación del mercado y diseña un plan estratégico simple para volver a crecer.",
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
  datePublished: "2025-03-13",
  dateModified: "2025-03-13",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-hacer-crecer-una-empresa-pequena",
  },
};

export default function ArticuloCrecimiento() {
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
            Tu empresa está estancada: cómo volver a crecer sin volverte loco
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Hubo un tiempo en que tu negocio crecía. Los clientes llegaban, la
            facturación subía, había energía. Pero en algún momento, sin que
            sepas exactamente cuándo, todo se detuvo. Trabajas igual o más,
            pero los resultados ya no mejoran.
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
            El estancamiento es probablemente la fase más frustrante para un
            empresario. Porque no es una crisis — no hay un incendio claro que
            apagar. Es algo peor: una sensación difusa de que el negocio se ha
            quedado en un techo, de que por mucho que empujes, los números no
            se mueven. Y eso genera una mezcla de frustración, cansancio y
            dudas que acaba pasándote factura a ti y a tu negocio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años trabajando con pymes, puedo decirte algo
            con total convicción: cuando una empresa pequeña se estanca, el
            problema casi nunca es el mercado. Es algo interno. Un modelo que
            ya no da más de sí, un enfoque que se ha quedado obsoleto, una
            falta de estrategia que se disimula con esfuerzo. Y la buena
            noticia es que eso tiene solución — si sabes dónde buscar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo vamos a desmontar las causas reales del
            estancamiento, vamos a ver cómo detectar oportunidades que
            probablemente tienes delante y no ves, y vamos a diseñar un plan
            estratégico simple para volver a crecer — sin volverte loco, sin
            poner en riesgo lo que ya funciona y sin necesitar una inversión
            millonaria.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Un negocio estancado no necesita más esfuerzo. Necesita una
            dirección diferente.&rdquo;
          </blockquote>

          {/* H2 — Negocio que dejó de crecer */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué tu negocio ha dejado de crecer
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El crecimiento de una empresa pequeña no es lineal. Hay fases de
            arranque, de aceleración, de meseta y, si no se gestiona bien, de
            declive. La mayoría de los negocios que llegan a mi consultoría
            están en la fase de meseta: han alcanzado un nivel de facturación
            y se han quedado ahí, sin saber cómo dar el siguiente paso.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las razones son casi siempre las mismas. No son espectaculares ni
            dramáticas. Son errores silenciosos que se acumulan hasta que
            bloquean cualquier posibilidad de avance.
          </p>

          {/* Cuadro con causas */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Las 6 causas más habituales del estancamiento
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                ["Dependencia del dueño", <><a href="/blog/como-organizar-empresa-pequena-salir-autoempleo" className="text-accent-600 underline hover:text-accent-700">El negocio no funciona si tú no estás</a>. Eso limita tu capacidad a tus propias horas, tu propia energía y tu propio conocimiento.</>],
                ["Modelo agotado", "Lo que funcionó los primeros años ya no da más de sí. El mercado ha cambiado, la competencia ha crecido, pero tú sigues haciendo lo mismo."],
                ["Falta de nuevos clientes", <><a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">No captas clientes nuevos</a> con regularidad. Vives de los de siempre y cuando pierdes uno, lo notas.</>],
                ["Dispersión", "Haces demasiadas cosas, para demasiados tipos de clientes, con demasiados servicios. Mucho catálogo, poco foco."],
                ["No invertir en lo que genera retorno", "Recortas en marketing, en formación, en herramientas — justo en lo que podría impulsar el crecimiento."],
                ["Resistencia al cambio", "Haces las cosas así porque «siempre se han hecho así». El confort de lo conocido es el enemigo del crecimiento."],
              ].map(([titulo, desc], i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 md:text-lg"
                >
                  <span className="mt-1 text-primary-600 font-bold">{i + 1}.</span>
                  <span>
                    <strong className="text-gray-900">{titulo}.</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si te reconoces en dos o tres de estos puntos, no te preocupes —
            eso es exactamente lo normal. El estancamiento no llega por un
            gran error, sino por la acumulación de inercias que van frenando
            el motor poco a poco. La clave es identificarlas y actuar.
          </p>

          {/* H2 — Saturación del mercado */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            &ldquo;Es que el mercado está saturado&rdquo; — ¿seguro?
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es la frase que más escucho cuando un empresario me explica por
            qué no crece. &ldquo;Hay demasiada competencia.&rdquo;
            &ldquo;Los precios están por los suelos.&rdquo; &ldquo;Ya no queda
            mercado.&rdquo; Y en algunos casos tiene algo de razón — hay
            sectores muy competidos. Pero la realidad es que, en la mayoría
            de los casos, lo que está saturado no es el mercado sino la
            propuesta del empresario.
          </p>

          {/* Tabla comparativa */}
          <div className="my-10 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Lo que dice el empresario</th>
                  <th className="px-4 py-3 font-semibold">Lo que suele estar pasando realmente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  [
                    "«Hay demasiada competencia»",
                    "Hay competencia, pero tu oferta no se diferencia de la suya en nada relevante",
                  ],
                  [
                    "«El cliente solo mira el precio»",
                    "No le estás dando motivos suficientes para valorar otra cosa que no sea el precio",
                  ],
                  [
                    "«Ya no se vende como antes»",
                    "Los hábitos de compra han cambiado y tú sigues vendiendo como hace 10 años",
                  ],
                  [
                    "«El online me está matando»",
                    "El online es una oportunidad que no estás aprovechando, no una amenaza",
                  ],
                  [
                    "«La gente ya no valora la calidad»",
                    "La gente valora la calidad cuando entiende qué la diferencia, y no se lo estás comunicando",
                  ],
                ].map(([dice, realidad], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-gray-600 italic">{dice}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {realidad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            En un mercado competido, la clave no es luchar por el mismo trozo
            de tarta — es encontrar un trozo diferente. Especializarte,
            diferenciarte, ofrecer algo que tu competencia no ofrece o
            comunicar tu valor de una forma que los demás no están haciendo.
            Siempre hay espacio para crecer. Lo que no hay es espacio para
            hacer lo mismo que todos.
          </p>

          {/* H2 — Falta de innovación */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Falta de innovación: no hablamos de tecnología, hablamos de
            mentalidad
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando un empresario escucha &ldquo;innovación&rdquo;, suele
            pensar en tecnología, en apps, en inteligencia artificial. Pero
            la innovación que necesita una pyme para crecer no tiene nada que
            ver con eso. Innovar es, simplemente, hacer algo diferente a lo
            que haces ahora para obtener un resultado mejor.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Puede ser cambiar tu modelo de precios. Añadir un servicio
            complementario que tus clientes necesitan. Llegar a un tipo de
            cliente al que no estás llegando. Cambiar la forma en que captas
            nuevos clientes. Mejorar la experiencia del cliente para que
            repita más y te recomiende. Ninguna de estas cosas requiere
            tecnología punta — requiere observar, pensar y actuar de forma
            diferente.
          </p>

          {/* Cuadro de ideas */}
          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              10 formas de innovar en una pyme sin grandes inversiones
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Especialízate en un nicho concreto en vez de servir a todo el mundo.",
                "Crea paquetes o bundles que aumenten el ticket medio.",
                "Ofrece una garantía que ningún competidor ofrezca.",
                "Mejora el seguimiento posventa para fidelizar.",
                "Añade un servicio complementario que pidan tus clientes.",
                "Cambia tu canal de captación (si solo usas el boca a boca, prueba algo más).",
                "Simplifica tu catálogo: menos productos, más margen.",
                "Cobra por el valor, no por la hora.",
                "Busca alianzas con negocios complementarios.",
                "Automatiza lo repetitivo para liberar tiempo productivo.",
              ].map((idea, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-gray-700 md:text-base"
                >
                  <span className="mt-0.5 text-accent-500 font-bold shrink-0">
                    {i + 1}.
                  </span>
                  <span>{idea}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La innovación no tiene que ser radical. A veces, un pequeño cambio
            en la propuesta de valor, en el proceso de venta o en la forma de
            atender al cliente puede marcar una diferencia enorme en los
            resultados. El problema es que, cuando estás atrapado en el día a
            día, no tienes tiempo ni energía para pensar en esto. Y por eso
            sigues haciendo lo mismo.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No necesitas reinventar tu negocio. Necesitas mejorarlo en
            los puntos correctos. A veces un solo cambio bien elegido mueve
            más que cien horas de esfuerzo mal dirigido.&rdquo;
          </blockquote>

          {/* H2 — Cómo detectar oportunidades */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo detectar oportunidades de crecimiento que tienes delante
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Casi todas las empresas pequeñas que asesoro tienen oportunidades
            de crecimiento sin explotar. No oportunidades teóricas o
            abstractas — oportunidades reales, concretas, que están ahí
            esperando a que alguien las vea. El problema es que, desde dentro,
            cuesta mucho verlas. Estás demasiado cerca del árbol para ver el
            bosque.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aquí van cinco formas prácticas de encontrarlas:
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Escucha lo que tus clientes piden (y lo que no están pidiendo
            pero necesitan)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Tus mejores clientes son una mina de oro de información. ¿Qué
            necesidades tienen que tú no estás cubriendo? ¿Qué se quejan de
            sus otros proveedores? ¿Qué servicio complementario les
            facilitaría la vida? Una simple conversación con diez clientes
            clave puede darte más ideas de crecimiento que un estudio de
            mercado de miles de euros.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Analiza qué clientes pierdes y por qué
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cada cliente perdido es una lección. ¿Se fue por precio? ¿Por
            servicio? ¿Porque encontró algo que tú no ofreces? Si no sabes
            por qué pierdes clientes, no puedes evitar que siga pasando. Y
            muchas veces, la razón de la pérdida es exactamente la
            oportunidad que necesitas para crecer.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Observa lo que hace tu competencia — pero no para copiar
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Mira qué ofrecen, cómo lo comunican, a qué clientes se dirigen.
            No para imitarles, sino para encontrar los huecos que dejan.
            ¿Hay algún segmento de clientes que nadie está atendiendo bien?
            ¿Hay algún servicio que nadie ofrece con calidad? Esos huecos
            son tus oportunidades.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Revisa tus datos internos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            ¿Cuáles son tus productos o servicios más rentables? ¿Cuáles te
            generan más clientes por recomendación? ¿En qué épocas del año
            vendes más y por qué? Los datos internos de tu negocio esconden
            patrones que te dicen exactamente por dónde crecer. Solo
            necesitas pararte a mirarlos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Pregúntate: ¿qué haría si empezara de cero hoy?
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Este ejercicio mental es muy poderoso. Si hoy, con todo lo que
            sabes, montases tu negocio desde cero, ¿lo harías exactamente
            igual? ¿Ofrecerías los mismos servicios? ¿Te dirigirías al
            mismo tipo de cliente? ¿Tendrías la misma estructura? Las
            diferencias entre lo que harías hoy y lo que estás haciendo son
            tu mapa de oportunidades.
          </p>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: la empresa que dejó de intentar vender a todos y
            empezó a crecer
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace un año y medio trabajé con una pequeña empresa de reformas
            en la zona de A Coruña. Cuatro empleados, el dueño incluido.
            Facturaban unos 280.000 euros al año y llevaban tres años
            estancados en esa cifra. Trabajaban mucho, hacían de todo —
            fontanería, electricidad, albañilería, pintura, pequeñas
            reformas, grandes reformas — y aceptaban cualquier presupuesto
            que les entrase.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El problema era exactamente ese: hacían de todo, para todos, y
            no destacaban en nada. Competían en precio contra empresas más
            grandes con más recursos y contra autónomos con menos gastos. El
            margen era cada vez más fino y la sensación de estar en una rueda
            de hámster era total.
          </p>

          {/* Cuadro de estrategia */}
          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-amber-900">
              La decisión estratégica
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Después de analizar sus datos, sus clientes y su mercado,
              tomamos una decisión que al principio le dio vértigo:
              especializarse solo en reformas de cocinas y baños para
              viviendas. Dejar de hacer &ldquo;de todo&rdquo; y convertirse
              en el especialista de referencia en su zona.
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              ¿Por qué cocinas y baños? Porque los datos mostraban que era el
              servicio con mayor margen, mayor ticket medio, más
              recomendaciones y menos competencia de calidad en la zona.
            </p>
          </div>

          {/* Cuadro de resultados */}
          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-green-900">
              Resultados a los 12 meses
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "La facturación subió a 380.000 euros (+36%) con menos presupuestos pero más cualificados.",
                "El margen bruto pasó del 28% al 45% al especializarse y dejar de competir en precio.",
                "El ticket medio subió de 3.500 euros a 8.200 euros por proyecto.",
                "Dejaron de aceptar trabajos pequeños que les costaban más de lo que ganaban.",
                "El dueño recuperó dos tardes a la semana porque la operación era más predecible.",
                "Recibían el 60% de los clientes nuevos por recomendación directa.",
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
              No creció haciendo más cosas. Creció haciendo menos cosas pero
              mucho mejor. Y ese es uno de los principios más
              contraintuitivos del crecimiento empresarial: a veces, para
              crecer, tienes que reducir.
            </p>
          </div>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Para crecer no necesitas hacer más cosas. Necesitas hacer
            las cosas correctas.&rdquo;
          </blockquote>

          {/* H2 — Plan estratégico simple */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Plan estratégico simple para volver a crecer (en 5 pasos)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas un documento de 50 páginas ni un consultor de los
            grandes. Necesitas un plan claro, realista y ejecutable. Aquí
            tienes uno que puedes empezar a trabajar esta misma semana.
          </p>

          {/* Pasos del plan */}
          <div className="my-10 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 1 — Diagnóstico
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Analiza dónde estás realmente
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Mira tus números con honestidad: facturación por servicio,
                margen por cliente, gastos fijos, punto de equilibrio. No lo que
                crees — lo que dicen los datos. ¿Qué funciona? ¿Qué no? ¿Dónde
                se escapa la rentabilidad? Sin este diagnóstico, cualquier plan
                es un castillo en el aire.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 2 — Foco
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Elige en qué vas a concentrar tu energía
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                De todo lo que haces, ¿qué es lo más rentable, lo que más te
                diferencia y lo que mejor sabes hacer? Ahí es donde debes
                concentrarte. No puedes crecer en diez direcciones a la vez.
                Elige una o dos líneas de crecimiento y pon toda tu energía
                ahí. Lo demás, mantenlo, simplífícalo o elimínalo.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 3 — Diferenciación
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Define qué te hace diferente (de verdad)
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                &ldquo;Calidad&rdquo; y &ldquo;buen servicio&rdquo; no son
                diferenciadores — todo el mundo dice lo mismo.{" "}
                <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">Tu
                diferenciación</a> tiene que ser concreta, demostrable y relevante
                para tu cliente. ¿Es tu especialización? ¿Tu garantía? ¿Tu
                método de trabajo? ¿Tu experiencia en un sector concreto? Si no
                puedes explicar en una frase por qué un cliente debería elegirte
                a ti y no a tu competencia, tienes un problema.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 4 — Captación
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Monta un sistema para atraer clientes nuevos de forma
                constante
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                No puedes crecer si dependes solo del boca a boca y de los
                clientes de siempre. Necesitas al menos dos canales activos de
                captación que funcionen mes a mes: presencia online local,
                alianzas estratégicas, marketing de contenidos, red de
                contactos, publicidad local, lo que mejor encaje con tu
                negocio. Pero tiene que ser un sistema, no un esfuerzo
                puntual.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 5 — Ejecución y revisión
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Ejecuta el plan y mide resultados cada mes
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Un plan que no se ejecuta es papel mojado. Y un plan que se
                ejecuta sin revisión es una apuesta a ciegas. Cada mes, revisa
                los indicadores clave: ¿están mejorando? ¿El foco está dando
                resultados? ¿La captación funciona? Si algo no funciona,
                ajústalo rápido. Si algo funciona, potencialo. La
                disciplina de medir y ajustar cada mes es lo que separa a las
                empresas que crecen de las que se estancan.
              </p>
            </div>
          </div>

          {/* Cuadro resumen */}
          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Resumen del plan en una tabla
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="pb-2 pr-4 font-semibold text-primary-900">
                      Paso
                    </th>
                    <th className="pb-2 pr-4 font-semibold text-primary-900">
                      Acción
                    </th>
                    <th className="pb-2 font-semibold text-primary-900">
                      Resultado esperado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
                  {[
                    ["Diagnóstico", "Analizar números reales por servicio y cliente", "Saber exactamente dónde estás"],
                    ["Foco", "Elegir 1-2 líneas de crecimiento prioritarias", "Concentrar energía donde más impacta"],
                    ["Diferenciación", "Definir tu ventaja competitiva concreta", "Dejar de competir en precio"],
                    ["Captación", "Montar 2 canales activos de nuevos clientes", "Flujo constante de oportunidades"],
                    ["Revisión", "Medir KPIs y ajustar cada mes", "Mejora continua basada en datos"],
                  ].map(([paso, accion, resultado], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 font-medium text-gray-800">
                        {paso}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">{accion}</td>
                      <td className="py-3 text-gray-600">{resultado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: crecer no es cuestión de suerte, es cuestión de
            método
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si tu empresa está estancada, no es porque el mercado esté
            saturado ni porque ya no haya oportunidades. Es porque necesitas
            un cambio de enfoque — y probablemente lo sabes, aunque no sepas
            exactamente cuál. El estancamiento no se resuelve con más horas
            de trabajo. Se resuelve con mejores decisiones, más foco y una
            dirección clara.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las empresas que crecen de forma sostenida no son las que más
            trabajan ni las que más invierten. Son las que tienen claro a
            dónde van, se diferencian de verdad, captan clientes con sistema
            y revisan sus resultados con disciplina. Y todo eso es accesible
            para cualquier pyme — con o sin grandes recursos.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si llevas meses o años sintiendo que tu negocio no avanza y
            quieres salir de ese estancamiento, el primer paso es pedir una
            perspectiva externa. A veces, lo que necesitas no es trabajar más
            — es ver tu negocio desde un ángulo diferente.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-hacer-crecer-una-empresa-pequena" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio lleva demasiado tiempo estancado?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            En un diagnóstico de tu negocio analizamos juntos dónde estás,
            identificamos las oportunidades de crecimiento que no estás viendo
            y diseñamos un plan realista para volver a avanzar. Sin teoría,
            sin promesas vacías — solo claridad y acción.
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

      <BlogNav currentSlug="como-hacer-crecer-una-empresa-pequena" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Descubre nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              Método Rentabilismo y herramientas de crecimiento empresarial
            </a>{" "}
            y consulta{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              casos reales de empresas que han vuelto a crecer
            </a>.
          </p>
          <a href="/diagnostico-negocio" className="btn-primary mt-6 inline-block">
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
