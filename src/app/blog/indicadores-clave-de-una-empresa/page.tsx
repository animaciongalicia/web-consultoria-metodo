import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Indicadores clave de una empresa: qué números controlar para no ir a ciegas | Consultoría Método",
  description:
    "Descubre los indicadores clave de una empresa que todo empresario debe controlar cada mes. KPIs básicos, cómo analizarlos, ejemplo real y tabla explicativa para pymes.",
  keywords: [
    "indicadores clave de una empresa",
    "KPIs para pymes",
    "qué números controlar en un negocio",
    "indicadores de gestión empresarial",
    "control de gestión pyme",
    "cuadro de mando empresarial",
  ],
  openGraph: {
    title:
      "Qué números debe controlar cualquier empresa para no ir a ciegas",
    description:
      "Los indicadores clave que todo empresario debe vigilar cada mes. KPIs básicos, cómo interpretarlos y un sistema sencillo para tomar decisiones con datos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/indicadores-clave-de-una-empresa",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Qué números debe controlar cualquier empresa para no ir a ciegas",
  description:
    "Descubre los indicadores clave de una empresa que todo empresario debe controlar cada mes. KPIs básicos, cómo analizarlos, ejemplo real y tabla explicativa para pymes.",
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
      "https://consultoriametodo.es/blog/indicadores-clave-de-una-empresa",
  },
};

export default function ArticuloIndicadores() {
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
            Qué números debe controlar cualquier empresa para no ir a ciegas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La mayoría de los empresarios trabajan sin mirar los indicadores
            clave de su negocio. Toman decisiones por instinto, por costumbre o
            por urgencia. Y así es muy difícil mejorar algo que ni siquiera
            estás midiendo.
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
            Si te pregunto ahora mismo cuál fue el margen neto de tu negocio el
            mes pasado, ¿podrías decírmelo? ¿Y el coste de adquisición de un
            cliente nuevo? ¿Y qué porcentaje de tu facturación se va en gastos
            fijos? Si la respuesta a alguna de estas preguntas es &ldquo;no lo
            sé exactamente&rdquo;, estás gestionando tu empresa a ciegas. Y no
            eres el único.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años asesorando a pymes, puedo decirte que la
            inmensa mayoría de los empresarios no controlan los indicadores
            clave de su negocio. Saben si &ldquo;va bien&rdquo; o &ldquo;va
            mal&rdquo; por sensaciones, por el saldo de la cuenta corriente o
            por lo estresados que están. Pero sensaciones no son datos. Y sin
            datos, cada decisión es una apuesta.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este artículo no va de teoría financiera ni de cuadros de mando
            complejos. Va de los números esenciales que cualquier empresa —
            desde un autónomo hasta una pyme con 30 empleados — debería
            vigilar cada mes para saber dónde está, hacia dónde va y qué tiene
            que cambiar.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Lo que no se mide, no se gestiona. Y lo que no se gestiona,
            se deteriora.&rdquo;
          </blockquote>

          {/* H2 — Empresarios que no miran indicadores */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué tantos empresarios gestionan sin mirar los números
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de hablar de qué medir, es importante entender por qué la
            mayoría no lo hace. No es por dejadez ni por incompetencia. Las
            razones suelen ser más simples y más humanas de lo que parece.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            &ldquo;No tengo tiempo&rdquo;
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la excusa más habitual. El empresario está tan metido en el día
            a día — atendiendo clientes, resolviendo problemas, gestionando
            empleados — que no le queda tiempo para sentarse a mirar los
            números. Pero la ironía es brutal: precisamente porque no mira los
            números, sigue atrapado en un día a día caótico. Si supiera qué
            clientes le dan margen y cuáles no, qué servicios son rentables y
            cuáles le cuestan dinero, podría tomar decisiones que le liberarían
            horas cada semana.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            &ldquo;Mi gestoría ya se encarga de eso&rdquo;
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Tu gestoría se encarga de la contabilidad fiscal y de que cumplas
            con Hacienda. Pero eso no es gestión de negocio. Los informes que
            te manda tu gestor están pensados para la Agencia Tributaria, no
            para que tú tomes decisiones. Un balance y una cuenta de resultados
            del trimestre pasado son un retrovisor — te dicen dónde estuviste,
            no hacia dónde vas. Los indicadores de gestión son el parabrisas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            &ldquo;Me da miedo lo que pueda encontrar&rdquo;
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Esto nadie lo dice en voz alta, pero es más frecuente de lo que
            piensas. Muchos empresarios intuyen que hay problemas pero
            prefieren no confirmarlos. Es una reacción humana, comprensible,
            pero peligrosísima. Un problema que no miras no desaparece — crece.
            Y cuando finalmente te explota en la cara, las opciones para
            resolverlo son muchas menos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            &ldquo;No sé qué mirar ni cómo interpretarlo&rdquo;
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Esta es quizá la razón más legítima. Nadie nace sabiendo leer un
            cuadro de mando. Y la formación empresarial en España es
            prácticamente inexistente para el pequeño empresario. Pero no
            necesitas un máster en finanzas. Necesitas entender cinco o seis
            números clave y revisarlos una vez al mes. Y eso es exactamente lo
            que vamos a ver ahora.
          </p>

          {/* Cuadro informativo */}
          <div className="my-10 rounded-xl border border-red-200 bg-red-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-red-900">
              El coste real de no medir
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Cuando un empresario no controla sus indicadores, estas son las
              consecuencias más habituales que veo en mi consultoría:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Mantiene clientes que le cuestan dinero sin saberlo.",
                "Invierte en lo que no funciona y deja de invertir en lo que sí.",
                "Descubre los problemas demasiado tarde, cuando ya son crisis.",
                "Toma decisiones por instinto que contradicen la realidad de los datos.",
                "No puede demostrar la salud de su negocio si necesita financiación.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 md:text-lg"
                >
                  <span className="mt-1 text-red-500 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* H2 — KPIs básicos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los indicadores clave de una empresa: los 8 KPIs que debes
            controlar cada mes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas veinte indicadores. Necesitas los correctos. Estos son
            los ocho KPIs fundamentales que cualquier pyme debería vigilar como
            mínimo cada mes. Si controlas estos ocho números, tendrás una
            visión clara de tu negocio — más clara que el 90% de tus
            competidores.
          </p>

          {/* KPI 1 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                1
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Facturación mensual
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Cuánto ingresas cada mes. Parece obvio, pero muchos empresarios
              solo miran la facturación cuando llega el trimestre fiscal. Necesitas
              verla mes a mes, comparada con el mismo mes del año anterior y con
              tu objetivo. No como dato aislado, sino como tendencia: ¿está
              subiendo, bajando o estancada?
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Frecuencia:</strong> Mensual &nbsp;|&nbsp;{" "}
              <strong>Comparar con:</strong> Mismo mes año anterior + objetivo
              mensual
            </p>
          </div>

          {/* KPI 2 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                2
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Margen bruto (%)
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              El porcentaje que te queda después de pagar los costes directos
              de lo que vendes (materias primas, mano de obra directa,
              subcontrataciones). Es el indicador que te dice si tu modelo de
              negocio es viable. Si tu margen bruto es bajo, no importa cuánto
              factures: nunca generarás beneficio suficiente.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> (Ingresos − Costes directos) ÷
              Ingresos × 100 &nbsp;|&nbsp; <strong>Referencia:</strong>{" "}
              Comercio 40-60% · Servicios &gt;50% · Hostelería 65-75%
            </p>
          </div>

          {/* KPI 3 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                3
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Gastos fijos mensuales
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Todo lo que pagas independientemente de que vendas o no: alquiler,
              nóminas, seguros, suscripciones, suministros, gestoría, cuotas de
              préstamos. Este número es tu línea de flotación. Cada euro de
              gasto fijo es un euro más que necesitas facturar antes de empezar
              a ganar dinero. Si tus gastos fijos crecen más rápido que tu
              margen bruto, tienes un problema serio.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Frecuencia:</strong> Mensual &nbsp;|&nbsp;{" "}
              <strong>Clave:</strong> Comparar la tendencia trimestre a
              trimestre
            </p>
          </div>

          {/* KPI 4 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                4
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Punto de equilibrio
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              La cifra de facturación a partir de la cual empiezas a ganar
              dinero. Por debajo, pierdes. Por encima, ganas. Es el indicador
              más poderoso para un empresario porque te da una referencia
              concreta: &ldquo;necesito facturar al menos X euros al mes para
              cubrir todos mis costes&rdquo;. Sin este dato, estás navegando
              sin brújula.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Gastos fijos mensuales ÷ Margen bruto
              (%) &nbsp;|&nbsp; <strong>Ejemplo:</strong> 10.000 € fijos ÷ 0,55
              = 18.182 €/mes mínimo
            </p>
          </div>

          {/* KPI 5 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                5
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Beneficio neto (%)
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Lo que realmente queda después de pagar absolutamente todo:
              costes directos, gastos fijos, impuestos, amortizaciones. Es la
              verdad desnuda de tu negocio. Si este número es cero o negativo
              mes tras mes, da igual cuánto factures — estás trabajando gratis
              o perdiendo dinero. Una pyme sana debería aspirar a un beneficio
              neto de al menos el 8-15% sobre facturación.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Beneficio neto ÷ Facturación × 100
              &nbsp;|&nbsp; <strong>Alerta:</strong> Si es &lt;5% tu negocio es
              frágil ante cualquier imprevisto
            </p>
          </div>

          {/* KPI 6 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                6
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Ticket medio por cliente
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Cuánto te gasta de media cada cliente en cada compra o servicio.
              Es un indicador clave porque te muestra oportunidades de
              crecimiento que no requieren captar clientes nuevos. Si tu ticket
              medio es de 80 euros y consigues subirlo a 95 euros con ventas
              cruzadas o mejorando tu propuesta, has aumentado tus ingresos casi
              un 20% sin gastar un euro en publicidad.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Facturación total ÷ Número de
              transacciones &nbsp;|&nbsp; <strong>Clave:</strong> Buscar formas
              de incrementarlo sin forzar
            </p>
          </div>

          {/* KPI 7 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                7
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Tasa de conversión
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              De cada 100 personas que muestran interés en tu negocio
              (presupuestos pedidos, visitas a la tienda, consultas
              recibidas), ¿cuántas acaban comprando? Si tu tasa de conversión
              es del 20% y la subes al 30%, acabas de aumentar tus ventas un
              50% con los mismos clientes potenciales. Es uno de los
              indicadores más rentables de mejorar porque no requiere más
              tráfico, solo cerrar mejor.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Clientes nuevos ÷ Contactos o
              presupuestos × 100 &nbsp;|&nbsp; <strong>Referencia:</strong>{" "}
              Varía mucho por sector, pero mide la tendencia
            </p>
          </div>

          {/* KPI 8 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                8
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Tesorería disponible (cash flow)
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Cuánto dinero real tienes disponible en la cuenta del negocio, no
              cuánto te deben ni cuánto has facturado — cuánto puedes usar hoy.
              Es el indicador de supervivencia. Muchas empresas rentables
              cierran por problemas de tesorería: han vendido mucho pero cobran
              a 60 días y tienen que pagar a 30. Vigilar la tesorería es
              vigilar el oxígeno de tu empresa.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Frecuencia:</strong> Semanal (sí, semanal) &nbsp;|&nbsp;{" "}
              <strong>Regla:</strong> Mantener al menos 2 meses de gastos fijos
              como colchón
            </p>
          </div>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No necesitas veinte indicadores. Necesitas los ocho
            correctos, revisados cada mes, con alguien al lado que te ayude a
            interpretarlos.&rdquo;
          </blockquote>

          {/* H2 — Tabla resumen de KPIs */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Tabla resumen: los 8 indicadores clave de tu empresa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aquí tienes una tabla de referencia rápida con los ocho
            indicadores, su fórmula, la frecuencia de revisión y qué señal de
            alarma debe encender cada uno. Imprímela, pégala en tu despacho o
            guárdala en el móvil. Es tu cuadro de mando básico.
          </p>

          {/* Tabla principal */}
          <div className="my-10 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">KPI</th>
                  <th className="px-4 py-3 font-semibold">Fórmula / Qué mide</th>
                  <th className="px-4 py-3 font-semibold">Frecuencia</th>
                  <th className="px-4 py-3 font-semibold">Señal de alarma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  [
                    "Facturación",
                    "Ingresos totales del mes",
                    "Mensual",
                    "Caída &gt;10% vs. mismo mes año anterior",
                  ],
                  [
                    "Margen bruto",
                    "(Ingresos − Costes directos) ÷ Ingresos",
                    "Mensual",
                    "Por debajo del mínimo de tu sector",
                  ],
                  [
                    "Gastos fijos",
                    "Suma de todos los costes fijos",
                    "Mensual",
                    "Crecen más rápido que la facturación",
                  ],
                  [
                    "Punto de equilibrio",
                    "Gastos fijos ÷ Margen bruto (%)",
                    "Mensual",
                    "Facturas por debajo del punto de equilibrio",
                  ],
                  [
                    "Beneficio neto",
                    "Beneficio neto ÷ Facturación",
                    "Mensual",
                    "Inferior al 5% de forma recurrente",
                  ],
                  [
                    "Ticket medio",
                    "Facturación ÷ Nº transacciones",
                    "Mensual",
                    "Tendencia descendente sin causa clara",
                  ],
                  [
                    "Conversión",
                    "Clientes ÷ Contactos interesados",
                    "Mensual",
                    "Baja sin cambios en el producto o precio",
                  ],
                  [
                    "Tesorería",
                    "Dinero disponible real en cuenta",
                    "Semanal",
                    "Menos de 2 meses de gastos fijos",
                  ],
                ].map(([kpi, formula, freq, alarma], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {kpi}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{formula}</td>
                    <td className="px-4 py-3 text-gray-600">{freq}</td>
                    <td
                      className="px-4 py-3 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: alarma }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H2 — Cómo analizar tu negocio */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo analizar tu negocio con estos indicadores (sistema práctico)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tener los indicadores no sirve de nada si no los miras con
            regularidad y con un sistema. No se trata de obsesionarse con los
            números cada día, sino de crear un hábito mensual que te dé
            control y perspectiva. Aquí tienes un sistema sencillo que
            funciona.
          </p>

          {/* Pasos del sistema */}
          <div className="my-10 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Semana 1 del mes
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Recoge los datos del mes anterior
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Dedica una hora — solo una — a recopilar los ocho datos en una
                hoja de cálculo sencilla o incluso en una libreta. No
                necesitas software sofisticado. Lo que necesitas es la
                disciplina de hacerlo cada mes. Facturación, costes directos,
                gastos fijos, clientes nuevos, presupuestos enviados, ticket
                medio, saldo en cuenta. Con esos datos calculas el resto.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Semana 1 del mes
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Compara con el mes anterior y con el mismo mes del año pasado
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Los números aislados no dicen nada. Lo que importa es la
                tendencia. ¿Tu margen bruto está subiendo o bajando? ¿Tus
                gastos fijos crecen más que tu facturación? ¿Tu tasa de
                conversión mejora o empeora? La comparación es lo que
                transforma un dato en información útil para tomar decisiones.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Semana 2 del mes
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Identifica las señales de alarma
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Revisa cada indicador y pregúntate: ¿hay algo aquí que me
                preocupe? ¿Algún número que se esté moviendo en la dirección
                equivocada? No busques problemas donde no los hay, pero sé
                honesto con los que aparecen. Un margen bruto que baja tres
                meses seguidos no es una casualidad — es una tendencia que
                necesita atención.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Semana 2 del mes
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Decide una acción concreta
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Cada mes, después de revisar los indicadores, toma al menos
                una decisión basada en lo que ves. Solo una. Puede ser
                pequeña: renegociar con un proveedor, eliminar una
                suscripción, subir el precio de un servicio, llamar a tres
                clientes que llevan meses sin comprar. Lo importante es que
                cada mes hagas algo basado en datos, no en inercia.
              </p>
            </div>
          </div>

          {/* Cuadro de herramientas */}
          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              Herramientas sencillas para llevar tus KPIs
            </h3>
            <p className="mt-2 text-gray-500 text-sm">
              No necesitas invertir en software caro. Con cualquiera de estas
              opciones puedes empezar hoy mismo.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                [
                  "Hoja de cálculo (Excel o Google Sheets)",
                  "Gratis, flexible, suficiente para el 90% de las pymes. Una pestaña por mes, una fila por indicador.",
                ],
                [
                  "Libreta y bolígrafo",
                  "En serio. Si no eres digital, una tabla en papel que rellenas cada mes ya es infinitamente mejor que nada.",
                ],
                [
                  "Tu programa de facturación",
                  "Muchos ya incluyen informes básicos de facturación, margen y clientes. Aprovéchalos.",
                ],
                [
                  "Un consultor externo",
                  "Si necesitas ayuda para montar el sistema o interpretar los primeros datos, una sesión de trabajo con un consultor te puede ahorrar meses de tanteo.",
                ],
              ].map(([titulo, desc], i) => (
                <li key={i} className="flex items-start gap-3 md:text-lg">
                  <span className="mt-1 text-accent-500">&#10003;</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-900">{titulo}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* H2 — Ejemplo real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Ejemplo real: la empresa que descubrió que su mejor cliente era su
            peor negocio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace poco trabajé con una empresa de servicios técnicos en A
            Coruña. Tenía una facturación de unos 400.000 euros al año, ocho
            empleados y una cartera de unos 60 clientes. El dueño estaba
            satisfecho con la facturación pero no entendía por qué a final de
            año apenas le quedaba beneficio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando nos sentamos a montar su cuadro de indicadores y a
            analizarlos por primera vez, encontramos algo que le dejó de piedra.
          </p>

          {/* Cuadro de descubrimiento */}
          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-amber-900">
              Lo que revelaron los datos
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">1.</span>
                <span>
                  <strong>Su cliente más grande</strong> (el que más facturaba,
                  unos 90.000 euros al año) tenía un margen bruto del 12%.
                  Después de costes directos, desplazamientos, horas extra y
                  gestión de incidencias, ese cliente le dejaba menos
                  beneficio que tres clientes pequeños juntos.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">2.</span>
                <span>
                  <strong>Sus gastos fijos</strong> habían crecido un 22% en
                  dos años sin que él lo hubiera notado. Suscripciones,
                  herramientas, un vehículo extra que apenas se usaba y un
                  almacén que pagaba pero solo ocupaba al 30%.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">3.</span>
                <span>
                  <strong>Su tasa de conversión</strong> de presupuestos a
                  clientes era del 15%. Enviaba muchos presupuestos
                  genéricos, sin seguimiento, sin personalización. Tres de
                  cada cuatro oportunidades se perdían por falta de proceso
                  comercial.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Ninguno de estos problemas era visible a simple vista. La
            facturación total parecía sana. El día a día funcionaba. Los
            clientes no se quejaban. Pero los indicadores contaban una
            historia completamente diferente: una empresa que trabajaba mucho
            pero ganaba poco, con un modelo que se deterioraba lentamente.
          </p>

          {/* Cuadro de resultados */}
          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-green-900">
              Resultado después de actuar sobre los datos
            </h3>
            <p className="mt-2 text-gray-600 md:text-lg">
              En los seis meses siguientes, estas fueron las decisiones y
              resultados:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Renegoció condiciones con el cliente grande (subió precios un 18%) — el cliente aceptó.",
                "Eliminó 3.200 euros mensuales en gastos fijos innecesarios.",
                "Implementó un proceso de seguimiento de presupuestos que subió la conversión del 15% al 28%.",
                "El beneficio neto pasó del 4% al 11% sin aumentar la facturación.",
                "Dejó de necesitar la línea de crédito que usaba para cubrir baches de tesorería.",
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
              Todo esto no sucedió porque el empresario trabajase más. Sucedió
              porque, por primera vez, tenía los datos delante y podía tomar
              decisiones con criterio en lugar de con instinto.
            </p>
          </div>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Los datos no resuelven los problemas. Pero te muestran
            exactamente dónde están. Y eso es el 80% del camino.&rdquo;
          </blockquote>

          {/* H2 — Errores comunes */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Errores habituales al empezar a medir (y cómo evitarlos)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando un empresario decide empezar a controlar sus indicadores,
            hay algunos errores frecuentes que conviene conocer para no caer
            en ellos.
          </p>

          {/* Tabla de errores */}
          <div className="my-10 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Error</th>
                  <th className="px-4 py-3 font-semibold">Por qué es un problema</th>
                  <th className="px-4 py-3 font-semibold">Qué hacer en su lugar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  [
                    "Medir demasiadas cosas",
                    "Te ahogas en datos y no actúas sobre ninguno",
                    "Empieza con 5-8 KPIs, no con 30",
                  ],
                  [
                    "Mirar solo la facturación",
                    "Facturación sin margen es trabajo gratis",
                    "Mide siempre margen y beneficio neto",
                  ],
                  [
                    "No comparar con períodos anteriores",
                    "Un dato aislado no dice nada",
                    "Compara siempre mes a mes y año a año",
                  ],
                  [
                    "Medir pero no actuar",
                    "Los datos sin decisiones son decoración",
                    "Cada mes, una acción concreta basada en los datos",
                  ],
                  [
                    "Buscar la herramienta perfecta",
                    "Pierdes semanas evaluando software",
                    "Empieza con Excel hoy, mejora después",
                  ],
                ].map(([error, problema, solucion], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {error}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{problema}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {solucion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: los números no mienten, las sensaciones sí
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si has llegado hasta aquí, ya sabes qué indicadores clave necesita
            tu empresa y cómo empezar a medirlos. No es complicado, no
            requiere mucho tiempo y la diferencia entre gestionar con datos y
            gestionar con sensaciones es abismal.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un empresario que controla sus indicadores sabe cuándo subir
            precios, cuándo recortar gastos, qué clientes cuidar y cuáles
            soltar, dónde invertir y dónde frenar. Toma decisiones con
            seguridad, no con miedo. Y duerme mejor porque sabe exactamente
            cómo va su negocio — no lo intuye, lo sabe.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El mejor momento para empezar a medir fue hace cinco años. El
            segundo mejor momento es este mes. Coge una hoja de cálculo, apunta
            los ocho indicadores y empieza. Y si necesitas ayuda para montarlo
            o para interpretar lo que los números te dicen, hablamos.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="indicadores-clave-de-una-empresa" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber qué dicen los números de tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            En un diagnóstico de tu negocio analizamos juntos tus indicadores
            clave, identificamos dónde están los problemas y diseñamos un plan
            de acción con decisiones concretas. Sin teoría, sin informes
            decorativos — solo datos y soluciones.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://consultoriametodo.es/diagnostico-negocio"
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

      <BlogNav currentSlug="indicadores-clave-de-una-empresa" />

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
