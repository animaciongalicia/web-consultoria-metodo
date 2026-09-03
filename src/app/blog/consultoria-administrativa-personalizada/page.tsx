import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Consultoría administrativa personalizada: qué es, qué incluye y cuándo la necesita tu empresa | Consultoría Método",
  description:
    "Consultoría administrativa personalizada: qué es (y qué NO es), en qué se diferencia de una gestoría, qué incluye realmente y cuándo tiene sentido para tu pyme. Guía práctica con casos reales.",
  keywords: [
    "consultoría administrativa personalizada",
    "consultoría administrativa pyme",
    "consultor administrativo empresa",
    "diferencia consultoría y gestoría",
    "consultoría administrativa Galicia",
    "gestión administrativa empresa",
    "consultoría organización administrativa",
    "asesoramiento administrativo pymes",
  ],
  openGraph: {
    title:
      "Consultoría administrativa personalizada: qué es, qué incluye y cuándo la necesita tu empresa",
    description:
      "Qué es realmente la consultoría administrativa personalizada, en qué se diferencia de una gestoría y cuándo tiene sentido para tu pyme. Con casos reales.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/consultoria-administrativa-personalizada",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Consultoría administrativa personalizada: qué es, qué incluye y cuándo la necesita tu empresa",
  description:
    "Consultoría administrativa personalizada: qué es, qué NO es, en qué se diferencia de una gestoría, qué incluye y cuándo tiene sentido para tu pyme.",
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
  datePublished: "2026-08-29",
  dateModified: "2026-08-29",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/consultoria-administrativa-personalizada",
  },
};

export default function ArticuloConsultoriaAdministrativa() {
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
            Consultoría administrativa personalizada: qué es, qué incluye y
            cuándo la necesita tu empresa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La palabra &laquo;administrativa&raquo; asusta a mucha gente porque
            se confunde con la gestoría. Pero consultoría administrativa
            personalizada es otra cosa: es poner orden real en cómo funciona
            tu empresa por dentro para que dejes de perder tiempo y dinero por
            procesos rotos.
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
            Cuando digo &laquo;consultoría administrativa&raquo; en una primera
            reunión, veo que a mucha gente se le nubla la cara. La mayoría
            piensa inmediatamente en papeles, en Hacienda, en nóminas, en la
            gestoría de toda la vida. Y no es eso — o al menos no es{" "}
            <strong className="text-gray-900">solo</strong> eso.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La consultoría administrativa personalizada no va de llevarte los
            impuestos ni de sustituir a tu asesoría fiscal. Va de mirar de
            arriba a abajo cómo funciona tu empresa por dentro — quién hace
            qué, cómo llega la información, dónde se atasca, qué tareas se
            repiten sin sentido, qué decisiones se toman a ciegas — y de
            rediseñar todo eso para que la empresa gire suave, con menos
            esfuerzo y con más control.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo voy a explicarte qué es realmente, qué NO es,
            qué incluye una consultoría administrativa bien hecha, cuándo
            tiene sentido pedirla y cuándo estás perdiendo el tiempo. Con
            ejemplos reales de pymes con las que he trabajado.
          </p>

          {/* H2 — Qué es realmente */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué es realmente la consultoría administrativa personalizada
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La consultoría administrativa personalizada es un trabajo de
            diagnóstico, rediseño y acompañamiento sobre todos los procesos
            internos que hacen que tu empresa funcione día a día. Facturación,
            cobros, pagos, control de stock, gestión de pedidos, comunicación
            entre departamentos, seguimiento de clientes, documentación,
            protocolos, cuadros de mando. Todo lo que hace que la empresa se
            mueva por dentro.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La palabra clave es{" "}
            <strong className="text-gray-900">personalizada</strong>. No hay
            recetas de manual. Cada negocio tiene su historia, su tamaño, su
            equipo, sus manías. Lo que le funciona a una empresa de servicios
            de doce personas no le sirve a una tienda con tres. Mi trabajo
            no es aplicarte una plantilla estándar — es entender cómo funciona
            tu empresa hoy y diseñar cómo tiene que funcionar mañana para que
            deje de dolerte.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Consultoría administrativa no es papeleo. Es poner orden
            en la máquina para que funcione sola.&rdquo;
          </blockquote>

          {/* H2 — Qué NO es */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué NO es una consultoría administrativa personalizada
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de seguir, aclaro lo que no es — porque veo mucha confusión
            en este punto:
          </p>
          <ul className="my-6 space-y-3 rounded-xl border border-primary-200 bg-primary-50/30 p-6 text-gray-700">
            <li>
              <strong className="text-primary-900">No es una gestoría</strong>{" "}
              — no te llevo los impuestos, no presento el modelo 303, no hago
              nóminas ni contratos. Eso lo hace (y muy bien) tu asesoría
              fiscal-laboral. La consultoría administrativa trabaja{" "}
              <em>por encima</em> de la gestoría: se ocupa de que la
              información que llega a la gestoría sea correcta, ordenada y a
              tiempo.
            </li>
            <li>
              <strong className="text-primary-900">No es implantar un ERP</strong>{" "}
              — no vengo a venderte un software. A veces, después del análisis,
              recomiendo herramientas concretas, pero la consultoría no es la
              venta ni la implantación técnica de un programa. Primero se
              arregla el proceso; después, si hace falta, se elige la
              herramienta.
            </li>
            <li>
              <strong className="text-primary-900">No es hacerte el papeleo</strong>{" "}
              — no me contratas para que yo pase facturas, archive contratos
              ni conteste correos. Te ayudo a que ese papeleo esté organizado
              de forma que lo pueda hacer una persona en la mitad de tiempo,
              sin errores y sin depender de ti.
            </li>
            <li>
              <strong className="text-primary-900">No es un curso ni un manual</strong>{" "}
              — no te entrego un PDF de sesenta páginas para que lo apliques
              solo. Trabajamos codo con codo hasta que los cambios están
              rodando de verdad en tu empresa.
            </li>
          </ul>

          {/* H2 — Qué incluye */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué incluye realmente una consultoría administrativa bien hecha
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cada proyecto es distinto, pero hay bloques que casi siempre
            aparecen. Estos son los más habituales en las consultorías que
            hago con pymes:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              { label: "Análisis de flujos internos", desc: "Mapeamos cómo entra un pedido, cómo se procesa, cómo se factura, cómo se cobra. Cada paso, quién lo hace, cuánto tarda, dónde se rompe." },
              { label: "Detección de cuellos de botella", desc: "Dónde se pierde tiempo, dónde se duplica trabajo, qué información se pide dos veces, qué decisiones dependen siempre de la misma persona." },
              { label: "Rediseño de procesos clave", desc: "Reescribir los flujos que peor funcionan: pedidos, facturación, cobros, compras, altas de cliente. Se simplifica y se estandariza." },
              { label: "Definición de roles y responsabilidades", desc: "Quién decide qué. Quién autoriza. A quién se le pregunta. Cuando esto no está claro, la empresa depende del dueño para todo." },
              { label: "Protocolos y documentación operativa", desc: "Instrucciones simples, en una página, para las tareas repetitivas. Así cualquier persona nueva se pone al día en días, no en meses." },
              { label: "Cuadro de mando básico", desc: "Cuatro o cinco indicadores clave para saber cada semana cómo va la empresa sin abrir cincuenta pantallas." },
              { label: "Selección de herramientas adecuadas", desc: "Solo si hace falta. A veces una hoja de cálculo bien montada resuelve más que un CRM de 200 € al mes." },
              { label: "Seguimiento durante la implantación", desc: "Estar dos o tres meses acompañando para que los cambios se asienten. Sin seguimiento, todo vuelve al estado anterior en seis semanas." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#9654;</span>
                <span>
                  <strong className="text-gray-900">{item.label}:</strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>

          {/* H2 — Cuándo tiene sentido */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo tiene sentido para tu empresa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No todas las empresas necesitan consultoría administrativa. Estas
            son las señales que más veo en pymes que sí la necesitan de
            verdad:
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            El titular está atrapado en la operativa
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si eres el dueño y te pasas el día apagando fuegos, autorizando
            cada gasto, resolviendo dudas de facturación y no encuentras dos
            horas seguidas para pensar en el negocio, tienes un problema
            administrativo. La empresa no tiene procesos — te tiene a ti.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Has crecido y todo es un caos de papeles
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Empezaste con cuatro clientes y todo cabía en la cabeza. Hoy
            tienes cuarenta, tres personas más en el equipo y nadie sabe
            dónde está la última versión de la oferta que enviaste a un
            cliente concreto. El crecimiento sin estructura administrativa se
            convierte en desorden. Y el desorden cuesta dinero.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Quieres profesionalizar antes de un relevo generacional
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Muchas empresas familiares gallegas están afrontando el relevo:
            hijos que entran, padres que se retiran. Si la empresa depende
            de la cabeza del fundador — que lleva veinte años haciéndolo todo
            de memoria — el relevo es imposible. La consultoría administrativa
            saca ese conocimiento de la cabeza y lo mete en procesos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Entra gente nueva y no hay protocolos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Contratar a alguien y tardar tres meses en que sea productivo es
            carísimo. Si cada vez que llega una persona nueva hay que
            explicárselo todo a mano, no tienes procesos — tienes tradición
            oral. Documentar y estandarizar acorta drásticamente los tiempos
            de incorporación.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Se pierde tiempo en tareas repetitivas
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si tu equipo pasa horas cada semana copiando datos de un Excel a
            otro, pasando facturas a mano, buscando información entre correos
            perdidos o generando informes que nadie mira, hay ineficiencia
            administrativa. Y suele haber margen para automatizar o
            simplificar entre un 30% y un 50% de esas horas.
          </p>

          {/* Aviso importante */}
          <div className="my-10 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
            <p className="font-semibold text-red-800">
              Señal clara de que lo necesitas
            </p>
            <p className="mt-2 text-red-700">
              Si al leer los cinco puntos anteriores has asentido con la
              cabeza en tres o más, la consultoría administrativa personalizada
              te va a devolver la inversión en pocos meses. Cada semana que
              pasa sin ordenar esto es tiempo (y dinero) que se escapa por
              procesos rotos.
            </p>
          </div>

          {/* H2 — Cuándo NO tiene sentido */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo NO tiene sentido
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Prefiero decírtelo antes que malgastar tu dinero y mi tiempo. Hay
            situaciones en las que la consultoría administrativa no es la
            respuesta:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Lo que necesitas es una gestoría real — si no tienes asesoría fiscal-laboral o la que tienes no funciona, arregla eso primero. La consultoría administrativa se apoya sobre una gestoría que ya está haciendo bien su parte.",
              "La empresa es demasiado pequeña — si eres autónomo solo, con cinco clientes y facturas veinte facturas al mes, no necesitas rediseño de procesos. Necesitas una plantilla de Excel y disciplina.",
              "No hay disposición real a cambiar cómo se hacen las cosas — si el dueño quiere que le arregle la empresa pero sin cambiar nada de lo que hace él, no vamos a ninguna parte. La consultoría requiere que se apliquen los cambios.",
              "Se esperan milagros en dos semanas — reordenar la operativa interna lleva meses. Si buscas un resultado inmediato para tapar un agujero puntual, esto no es lo tuyo.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* H2 — Casos reales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Casos reales de consultoría administrativa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tres ejemplos concretos de empresas con las que he trabajado —
            cambiando algún dato para preservar el anonimato — para que veas
            de qué estamos hablando cuando digo consultoría administrativa
            personalizada.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Empresa de servicios técnicos que perdía 20 horas al mes en
            facturación
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Una empresa con ocho técnicos que hacían mantenimiento en
            instalaciones de clientes. Cada final de mes, la persona de
            administración se encerraba dos días enteros a facturar: recopilar
            partes de trabajo escritos a mano, cruzar con contratos, calcular
            horas y desplazamientos, hacer la factura. Errores constantes,
            facturas fuera de plazo, cobros que se retrasaban.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Rediseñamos el flujo: partes digitales cumplimentados por el
            técnico al terminar cada intervención, cliente y contrato
            identificados desde el móvil, plantilla de facturación que se
            genera sola con los datos ya validados. Resultado: la facturación
            mensual pasó de dos días a media mañana. Cero errores en tres
            meses. Cobros veinte días antes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cadena de tres tiendas donde no cuadraba la caja
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un negocio de retail con tres puntos de venta. El dueño sabía que
            algo no cuadraba pero no era capaz de identificar qué. Cada tienda
            tenía su TPV, cada encargada llevaba su método, no había un
            control centralizado ni protocolos claros de arqueo, ni criterio
            único para descuadres.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Definimos un protocolo único de apertura, arqueo y cierre para
            las tres tiendas. Un cuadro semanal centralizado con ventas,
            descuadres, devoluciones y comparativa entre tiendas. Formación
            a las tres encargadas. En dos meses aparecieron los descuadres
            reales — pequeños errores de proceso, no fraude — y se
            corrigieron. Recuperación estimada: 4.200 &euro; al año en
            descuadres evitados.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Despacho profesional que no sabía qué clientes eran rentables
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un despacho con doce profesionales facturaba bien, pero el
            beneficio era irregular y nadie sabía por qué. No tenían control
            de horas por cliente, ni imputación de gastos, ni idea real de
            cuánto dejaba cada cuenta.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Montamos un sistema sencillo de imputación de horas y un cuadro
            mensual de rentabilidad por cliente. Al cabo de dos meses vimos
            que el 20% de los clientes generaba el 80% del margen. Y que
            había tres cuentas grandes que consumían muchísimas horas y
            dejaban prácticamente cero. Se renegociaron dos contratos, se
            dejó marchar a uno. El beneficio del despacho subió un 22% sin
            captar un cliente más.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No sabía dónde perdíamos el dinero. Pensaba que era una
            cosa. Era otra completamente distinta.&rdquo;
            <span className="mt-2 block text-base not-italic text-gray-500">
              — Socio director de despacho profesional
            </span>
          </blockquote>

          {/* H2 — Diferencia con la gestoría */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Diferencia con la gestoría: comparativa clara
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La forma más rápida de entender qué es cada cosa es verla en
            paralelo. Los dos servicios son necesarios y compatibles — no se
            sustituyen, se complementan.
          </p>

          {/* Tabla comparativa */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Aspecto
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Gestoría / asesoría
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Consultoría administrativa
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Objetivo
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Cumplir con Hacienda, SS y normativa
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Ordenar la operativa interna de la empresa
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Alcance
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Impuestos, nóminas, contratos, contabilidad
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Procesos, roles, protocolos, cuadros de mando
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Continuidad
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Servicio mensual permanente
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Proyecto temporal (2-6 meses) + seguimiento
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Enfoque
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Estandarizado (obligaciones legales)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Personalizado a cada empresa
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Resultado
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Cumplimiento normativo
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Menos tiempo, menos errores, más control
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Tu gestoría procesa lo que le llega. La consultoría administrativa
            se ocupa de que{" "}
            <strong className="text-gray-900">
              lo que le llega esté bien
            </strong>{" "}
            — a tiempo, sin errores y sin depender de que el dueño esté
            encima de todo.
          </p>

          {/* H2 — Cómo empezar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo empezar: el proceso paso a paso
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este es el recorrido tipo de una consultoría administrativa
            personalizada. Cada empresa tiene sus tiempos, pero la estructura
            es siempre parecida:
          </p>
          <ol className="mt-4 space-y-3">
            {[
              "Diagnóstico inicial (1-2 días): entrevistas con dueño y equipo, revisión de flujos actuales, observación directa de cómo se trabaja. Sin cambiar nada, solo entender.",
              "Informe con hallazgos: documento con los puntos de dolor identificados, cuellos de botella, riesgos y oportunidades. Priorizado por impacto y esfuerzo.",
              "Plan de acción por fases: qué se cambia primero, qué después, quién lo hace, en qué plazo. Realista y medible.",
              "Implantación acompañada (2-4 meses): rediseño de procesos concretos, redacción de protocolos, formación al equipo, ajustes sobre la marcha.",
              "Seguimiento (2-3 meses): revisiones periódicas para asegurar que los cambios se asientan y no se vuelve al estado anterior.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-gray-600 md:text-lg">
            En{" "}
            <a
              href="/servicios"
              className="text-accent-600 underline hover:text-accent-700"
            >
              nuestra página de servicios
            </a>{" "}
            puedes ver el detalle completo de cómo trabajamos y las
            distintas modalidades. Si quieres empezar por lo más útil, pide
            un{" "}
            <a
              href="/diagnostico-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              diagnóstico de tu negocio
            </a>{" "}
            — es gratuito, sin compromiso, y en 30 minutos podemos ver si
            tiene sentido dar el paso.
          </p>

          {/* H2 — Cierre */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: orden interno, resultados externos
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La consultoría administrativa personalizada no es glamurosa. No
            promete milagros de facturación ni triplicar clientes en un mes.
            Lo que hace es más aburrido y más importante: convertir tu empresa
            en una máquina que gira bien por dentro. Y cuando eso pasa,
            el resto — margen, crecimiento, tiempo libre para el dueño —
            llega solo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si estás atrapado en la operativa, si tu equipo se dedica a
            apagar fuegos, si nadie encuentra la información cuando la
            necesita y si sientes que tu empresa depende demasiado de ti,
            probablemente tengas un problema administrativo. Y probablemente
            tenga solución.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cada mes que pasa sin ordenar esto es tiempo que no recuperas y
            dinero que se escapa por procesos rotos. No mañana. Hoy.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="consultoria-administrativa-personalizada" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu empresa pierde tiempo y dinero en procesos administrativos
            que no están claros?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos cómo funciona hoy tu operativa interna y
            diseñamos un plan concreto para poner orden — sin humo, sin
            recetas de manual, adaptado a tu empresa.
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

      {/* Lecturas relacionadas */}
      <section className="border-t border-gray-200 bg-white py-10">
        <div className="container-narrow">
          <h2 className="text-center text-lg font-bold text-primary-900 md:text-xl">
            Sigue leyendo
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
            <a
              href="/blog/metodos-y-tiempos-para-pymes"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Organización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Métodos y tiempos para pymes: eficiencia sin ser una fábrica
              </p>
            </a>
            <a
              href="/blog/aumentar-rentabilidad-asesoria-despacho-gestoria"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Servicios profesionales
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Cómo aumentar la rentabilidad de una asesoría o gestoría
              </p>
            </a>
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Organización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Cómo organizar tu empresa para salir del autoempleo
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Consultoría por sectores */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            Consultoría especializada por sectores
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Trabajamos con negocios de distintos sectores. Cada uno tiene sus retos — y los conocemos.
          </p>
          <div className="mx-auto mt-4 flex flex-wrap justify-center gap-3">
            <a href="/consultoria-hosteleria-restauracion" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Hostelería</a>
            <a href="/consultoria-comercio-retail" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Comercio y retail</a>
            <a href="/consultoria-servicios-profesionales" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Servicios profesionales</a>
            <a href="/consultoria-salud-bienestar" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Salud y bienestar</a>
            <a href="/consultoria-formacion-turismo-eventos" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Formación y turismo</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="consultoria-administrativa-personalizada" />
    </>
  );
}
