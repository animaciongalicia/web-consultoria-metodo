import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo revisar si tu negocio va bien: el check-up trimestral | Consultoría Método",
  description:
    "Plantilla práctica de revisión trimestral para pymes: finanzas, comercial, operaciones, equipo y estrategia. Sistema de puntuación para detectar problemas antes de que sea tarde. Consultor de empresas en Galicia.",
  keywords: [
    "revisión trimestral negocio",
    "check-up empresa",
    "cómo saber si mi negocio va bien",
    "control de gestión pyme",
    "auditoría interna empresa pequeña",
    "indicadores revisión empresa",
    "diagnóstico negocio trimestral",
    "consultor empresas Galicia",
    "consultoría pymes A Coruña",
    "salud financiera empresa",
  ],
  openGraph: {
    title: "Cómo revisar si tu negocio va bien: el check-up trimestral",
    description:
      "Plantilla práctica de revisión trimestral para pymes. 5 áreas, sistema de puntuación y señales de alerta para detectar problemas a tiempo.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-revisar-si-tu-negocio-va-bien" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo revisar si tu negocio va bien: el check-up trimestral",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-20",
};

export default function ArticuloCheckUpTrimestral() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Como revisar si tu negocio va bien: el check-up trimestral
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Una plantilla practica con las 5 areas que debes revisar cada tres meses, un
            sistema de puntuacion para detectar problemas a tiempo y las senales que indican
            que necesitas ayuda externa.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y online en toda España
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <h2>Por que necesitas una revision trimestral</h2>
            <p>
              La mayoria de empresarios revisan sus numeros una vez al año — cuando llega el
              cierre contable. Para entonces, los problemas llevan meses enquistados. Un
              descuadre en margenes que detectas en enero probablemente empezo en julio. Un
              cliente grande que se fue en octubre ya no lo recuperas en diciembre.
            </p>
            <p>
              La revision trimestral no es un ejercicio academico ni un informe para guardar
              en un cajon. Es sentarte 2-3 horas cada tres meses, poner los numeros encima de
              la mesa y responder una pregunta: <strong>¿mi negocio va en la direccion correcta
              o me estoy desviando?</strong>
            </p>
            <p>
              Si quieres profundizar en que numeros controlar cada mes, lee{" "}
              <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                la guia completa de indicadores clave para empresas
              </a>. Aqui vamos a centrarnos en la estructura de revision trimestral que uso
              con mis clientes de consultoria.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Regla practica: si llevas mas de 90 dias sin revisar a fondo tu negocio,
                probablemente hay al menos un problema silencioso que esta erosionando tu
                rentabilidad. El objetivo del check-up es sacarlo a la luz antes de que sea grave.
              </p>
            </div>

            {/* ── Las 5 áreas ── */}
            <h2>Las 5 areas del check-up trimestral</h2>
            <p>
              Cada area se evalua con preguntas concretas. Al final, asignas una puntuacion
              de 1 a 5 a cada area. Eso te da un mapa visual de la salud de tu negocio.
            </p>

            {/* ── Área 1: Finanzas ── */}
            <h3>1. Salud financiera</h3>
            <p>
              Esta es la base. Si los numeros no cuadran, nada mas importa. En esta area
              revisas tres cosas fundamentales:
            </p>
            <ul>
              <li>
                <strong>Margenes (bruto y neto).</strong> ¿Han mejorado, empeorado o se mantienen
                respecto al trimestre anterior? Un descenso de 2-3 puntos en el margen bruto es
                una señal de alerta seria. Puede indicar subida de costes que no has repercutido
                en precios, cambio en el mix de productos o perdida de eficiencia.
              </li>
              <li>
                <strong>Flujo de caja.</strong> ¿Cuanto dinero entra y sale realmente? No te fijes
                solo en facturacion — mira cobros reales. ¿Cuantos dias tardas en cobrar de media?
                ¿Hay facturas vencidas sin cobrar? ¿El saldo de tesoreria a final de mes es
                mayor o menor que hace tres meses?
              </li>
              <li>
                <strong>Deuda y compromisos fijos.</strong> ¿Que porcentaje de tu facturacion se va
                en gastos fijos (alquiler, nominas, seguros, cuotas de prestamos)? Si supera el
                65-70 %, tienes poco margen de maniobra ante cualquier imprevisto.
              </li>
            </ul>

            <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h4 className="text-base font-bold text-gray-900">Preguntas clave — Salud financiera</h4>
              <div className="mt-4 space-y-2">
                {[
                  "¿Mi margen bruto ha variado mas de 2 puntos respecto al trimestre anterior?",
                  "¿Tengo facturas pendientes de cobro de mas de 60 dias?",
                  "¿Mi tesoreria cubre al menos 2 meses de gastos fijos?",
                  "¿El ratio de gastos fijos sobre facturacion esta por debajo del 65 %?",
                  "¿He revisado y comparado precios de proveedores en los ultimos 6 meses?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-3 border border-gray-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 text-[10px] text-gray-400">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-700">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Si quieres hacer este analisis en profundidad, te recomiendo{" "}
              <a href="/blog/como-saber-si-mi-negocio-es-rentable" className="text-accent-600 underline hover:text-accent-700">
                como saber si tu negocio es rentable de verdad
              </a> — ahi detallo cada calculo paso a paso.
            </p>

            {/* ── Área 2: Comercial ── */}
            <h3>2. Actividad comercial</h3>
            <p>
              Un negocio sano necesita un flujo constante de nuevos clientes y mantener a los
              que ya tiene. Aqui revisas tres metricas:
            </p>
            <ul>
              <li>
                <strong>Pipeline y nuevas oportunidades.</strong> ¿Cuantos presupuestos o propuestas
                has enviado este trimestre? ¿Mas o menos que el anterior? Si el flujo de
                oportunidades baja, en 2-3 meses lo notaras en la facturacion.
              </li>
              <li>
                <strong>Tasa de conversion.</strong> De cada 10 presupuestos que envias, ¿cuantos
                se convierten en venta? Si la conversion baja, puede indicar un problema de
                precio, de propuesta de valor o de seguimiento comercial.
              </li>
              <li>
                <strong>Churn (perdida de clientes).</strong> ¿Cuantos clientes han dejado de
                comprarte este trimestre? ¿Sabes por que? La perdida de clientes es el indicador
                mas silencioso y mas peligroso de un negocio.
              </li>
            </ul>

            <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h4 className="text-base font-bold text-gray-900">Preguntas clave — Comercial</h4>
              <div className="mt-4 space-y-2">
                {[
                  "¿El numero de nuevas oportunidades ha crecido o ha bajado respecto al trimestre anterior?",
                  "¿Mi tasa de conversion de presupuesto a venta supera el 30 %?",
                  "¿Se cuantos clientes he perdido este trimestre y por que?",
                  "¿El ticket medio ha subido, bajado o se mantiene?",
                  "¿Tengo algun cliente que represente mas del 25 % de mi facturacion?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-3 border border-gray-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 text-[10px] text-gray-400">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-700">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Área 3: Operaciones ── */}
            <h3>3. Operaciones y eficiencia</h3>
            <p>
              Aqui miras como funciona el dia a dia del negocio. No se trata de ser
              perfeccionista — se trata de detectar cuellos de botella que estan frenando
              tu capacidad de generar ingresos o elevando costes innecesariamente.
            </p>
            <ul>
              <li>
                <strong>Eficiencia operativa.</strong> ¿Cuanto tiempo tardas en entregar un
                pedido, completar un servicio o cerrar un proyecto desde que el cliente dice
                &quot;si&quot;? Si ese tiempo ha aumentado, algo esta fallando en el proceso.
              </li>
              <li>
                <strong>Cuellos de botella.</strong> ¿Hay algun punto del proceso que siempre se
                atasca? ¿Un recurso que siempre esta saturado? ¿Una tarea que siempre se
                retrasa? Identifica los tres principales y evalua si han mejorado o empeorado.
              </li>
              <li>
                <strong>Incidencias y reclamaciones.</strong> ¿Cuantas quejas, devoluciones o
                repeticiones de trabajo has tenido? Cada incidencia es un coste oculto — en
                tiempo, en material y en reputacion.
              </li>
            </ul>

            {/* ── Área 4: Equipo ── */}
            <h3>4. Equipo y personas</h3>
            <p>
              Si tienes empleados, esta area es critica. Un equipo desmotivado o inestable
              es una bomba de relojeria que afecta a todo lo demas.
            </p>
            <ul>
              <li>
                <strong>Rotacion.</strong> ¿Cuantas personas se han ido en los ultimos 6 meses?
                Cada baja supone coste de seleccion, formacion y productividad perdida mientras
                la nueva persona se adapta. Si la rotacion es alta, el problema suele estar
                en las condiciones, en el liderazgo o en ambos.
              </li>
              <li>
                <strong>Satisfaccion y clima.</strong> No necesitas una encuesta formal. Basta
                con observar: ¿la gente llega con energia o con resignacion? ¿Proponen ideas
                o se limitan a cumplir? ¿Hay conflictos recurrentes? ¿Sabes que preocupa a
                cada persona de tu equipo?
              </li>
              <li>
                <strong>Capacitacion.</strong> ¿Tu equipo tiene las habilidades que el negocio
                necesita hoy? ¿Y las que necesitara en 12 meses? Identificar gaps de
                formacion a tiempo evita depender de una sola persona para tareas criticas.
              </li>
            </ul>

            {/* ── Área 5: Estrategia ── */}
            <h3>5. Estrategia y posicion competitiva</h3>
            <p>
              Esta es el area que mas se descuida porque no es urgente — hasta que lo es.
              Cada trimestre deberias levantar la cabeza del dia a dia y mirar el horizonte.
            </p>
            <ul>
              <li>
                <strong>Posicion en el mercado.</strong> ¿Tu cuota de mercado ha crecido,
                se mantiene o esta bajando? ¿Han abierto nuevos competidores? ¿Algun competidor
                ha cambiado su oferta de forma que te afecta directamente?
              </li>
              <li>
                <strong>Amenazas externas.</strong> ¿Hay cambios regulatorios que puedan afectarte?
                ¿Tendencias tecnologicas que debas anticipar? ¿Cambios en los habitos de tus
                clientes? El empresario que solo mira hacia dentro se lleva sorpresas desagradables.
              </li>
              <li>
                <strong>Alineacion con tus objetivos.</strong> ¿Recuerdas los objetivos que te
                marcaste a principio de año? ¿Estas avanzando hacia ellos o te has desviado?
                Es normal ajustar el rumbo, pero hay que hacerlo conscientemente — no por inercia.
              </li>
            </ul>

            {/* ── Sistema de puntuación ── */}
            <h2>El sistema de puntuacion: tu cuadro de mandos en 5 minutos</h2>
            <p>
              Despues de revisar cada area, asignale una puntuacion del 1 al 5:
            </p>

            <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h4 className="text-base font-bold text-gray-900">Escala de puntuacion</h4>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3 border border-red-100">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">1</span>
                  <p className="text-sm text-gray-700"><strong>Critico.</strong> Hay un problema grave que requiere accion inmediata.</p>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3 border border-orange-100">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">2</span>
                  <p className="text-sm text-gray-700"><strong>Debil.</strong> Hay problemas claros que estan afectando al rendimiento.</p>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-yellow-50 p-3 border border-yellow-100">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-white">3</span>
                  <p className="text-sm text-gray-700"><strong>Aceptable.</strong> Funciona, pero hay margen de mejora evidente.</p>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-emerald-50 p-3 border border-emerald-100">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">4</span>
                  <p className="text-sm text-gray-700"><strong>Bueno.</strong> Esta area funciona bien con mejoras menores pendientes.</p>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">5</span>
                  <p className="text-sm text-gray-700"><strong>Excelente.</strong> Esta area es una fortaleza del negocio. Mantener y proteger.</p>
                </div>
              </div>
            </div>

            <p>
              Con tus 5 puntuaciones, tendras un mapa rapido de la salud de tu negocio.
              Ejemplo: Finanzas 4, Comercial 2, Operaciones 3, Equipo 3, Estrategia 2.
              En este caso, la prioridad esta clara: hay que actuar en el area comercial
              y en la estrategia antes de que los problemas se trasladen a las finanzas.
            </p>

            <div className="not-prose my-10 rounded-2xl border border-primary-200 bg-primary-50/50 p-6 md:p-8">
              <h4 className="text-base font-bold text-primary-900">Como interpretar tu puntuacion total</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 text-center">
                  <p className="text-2xl font-extrabold text-emerald-600">20-25</p>
                  <p className="mt-1 text-sm text-gray-600">Tu negocio esta sano. Enfocate en mantener y optimizar.</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 text-center">
                  <p className="text-2xl font-extrabold text-yellow-600">13-19</p>
                  <p className="mt-1 text-sm text-gray-600">Hay areas que necesitan atencion. Prioriza las de puntuacion 1-2.</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 text-center">
                  <p className="text-2xl font-extrabold text-red-600">5-12</p>
                  <p className="mt-1 text-sm text-gray-600">Situacion de alerta. Necesitas un plan de accion urgente.</p>
                </div>
              </div>
            </div>

            {/* ── Cómo hacer la revisión ── */}
            <h2>Como hacer la revision en la practica</h2>
            <p>
              No necesitas un sistema complicado. Esto es lo que recomiendo a mis clientes
              de consultoria:
            </p>
            <ol>
              <li>
                <strong>Bloquea 2-3 horas en tu agenda</strong> al final de cada trimestre
                (marzo, junio, septiembre, diciembre). Tratalo como una reunion de direccion
                contigo mismo. Sin interrupciones, sin movil, sin excusas.
              </li>
              <li>
                <strong>Prepara los datos antes de sentarte.</strong> Pide a tu gestor el
                balance y la cuenta de resultados actualizada. Ten a mano tu listado de
                clientes, tus presupuestos enviados, tus facturas pendientes de cobro y
                cualquier dato operativo relevante.
              </li>
              <li>
                <strong>Revisa cada area con las preguntas de esta guia.</strong> No te
                inventes respuestas. Si no tienes un dato, anotalo como pendiente — esa
                falta de informacion ya es un hallazgo en si mismo.
              </li>
              <li>
                <strong>Asigna las puntuaciones y compara con el trimestre anterior.</strong> Lo
                importante no es la puntuacion absoluta sino la tendencia. ¿Estas mejorando
                o empeorando? ¿En que areas?
              </li>
              <li>
                <strong>Define 2-3 acciones concretas para el proximo trimestre.</strong> No 10,
                no 15. Dos o tres acciones prioritarias con responsable y fecha. Lo que no
                se concreta, no se hace.
              </li>
            </ol>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Consejo practico: guarda las puntuaciones de cada trimestre en una hoja de
                calculo sencilla. En un año tendras 4 fotos del estado de tu negocio y podras
                ver tendencias que a simple vista no se detectan.
              </p>
            </div>

            {/* ── Señales de alerta ── */}
            <h2>Cuando los resultados indican que necesitas ayuda</h2>
            <p>
              La revision trimestral es una herramienta de autodiagnostico. Pero hay
              situaciones en las que lo mas sensato es buscar una mirada externa. Estas son
              las señales claras:
            </p>
            <ul>
              <li>
                <strong>Dos o mas areas con puntuacion 1-2 durante dos trimestres seguidos.</strong> Si
                los problemas persisten despues de intentar resolverlos, probablemente necesitas
                un enfoque distinto del que tienes.
              </li>
              <li>
                <strong>La puntuacion total baja trimestre tras trimestre.</strong> Una tendencia
                descendente sostenida es la señal mas peligrosa — indica que los problemas
                se estan acumulando.
              </li>
              <li>
                <strong>No consigues datos fiables para hacer la revision.</strong> Si no
                tienes margenes claros, no sabes cuantos clientes has perdido o no puedes
                medir la eficiencia de tus procesos, ese desconocimiento ya es el problema.
              </li>
              <li>
                <strong>Sabes que hay problemas pero no sabes por donde empezar.</strong> La
                paralisis ante la complejidad es una de las razones mas frecuentes por las
                que un negocio se estanca.
              </li>
            </ul>
            <p>
              En cualquiera de estos casos, un{" "}
              <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">
                consultor de negocios externo
              </a>{" "}
              puede aportar la claridad, la estructura y la prioridad que necesitas. No
              porque tu no seas capaz — sino porque desde dentro es casi imposible ver
              ciertos problemas con objetividad.
            </p>

            <h2>Lo que separa a los negocios que mejoran de los que se estancan</h2>
            <p>
              Despues de 25 años trabajando con pymes, lo que he visto es que la diferencia
              entre un negocio que progresa y uno que se atasca no esta en el sector, ni en
              el tamaño, ni en la suerte. Esta en el habito de pararse a revisar. De mirar
              los numeros con honestidad. De tomar decisiones con datos en lugar de con
              intuicion.
            </p>
            <p>
              El check-up trimestral no es magia. Es disciplina. Y es una de las
              herramientas mas sencillas y mas rentables que puede adoptar cualquier
              empresario. Tres horas cada tres meses. Eso es todo lo que necesitas para
              dejar de ir a ciegas.
            </p>

            {/* ── CTA ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Quieres hacer tu primera revision trimestral con un profesional?
              </p>
              <p className="mt-2 text-gray-600">
                En el diagnostico gratuito revisamos juntos la situacion real de tu negocio
                y te digo exactamente donde estan los puntos de mejora. Sin compromiso.
              </p>
              <a href="/diagnostico-negocio" className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600">
                Solicita tu diagnostico gratuito
              </a>
            </div>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-revisar-si-tu-negocio-va-bien" />
            </div>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="como-revisar-si-tu-negocio-va-bien" />
    </>
  );
}
