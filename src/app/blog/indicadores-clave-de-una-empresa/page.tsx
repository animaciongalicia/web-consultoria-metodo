import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Indicadores clave de una empresa — Guía completa de KPIs y control financiero para pymes | Consultoría Método",
  description:
    "Guía práctica con los KPIs que toda empresa pequeña debe controlar: margen, punto muerto, ticket medio, coste de adquisición, flujo de caja. Cómo interpretar datos y tomar decisiones de negocio con números reales.",
  keywords: [
    "indicadores clave de una empresa",
    "indicadores empresa",
    "control financiero negocio",
    "KPIs empresa pequeña",
    "cómo saber si mi negocio va bien",
    "margen bruto empresa",
    "punto de equilibrio pyme",
    "ticket medio negocio",
    "coste adquisición cliente",
    "flujo de caja pyme",
    "cuadro de mando pyme",
    "control de gestión empresarial",
  ],
  openGraph: {
    title:
      "Indicadores clave de una empresa — Guía completa de KPIs y control financiero para pymes",
    description:
      "Los KPIs que cualquier empresa debe controlar cada mes: margen, punto muerto, ticket medio, CAC, flujo de caja. Cómo interpretar datos y tomar decisiones con números.",
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
    "Indicadores clave de una empresa — Guía completa de KPIs y control financiero para pymes",
  description:
    "Guía práctica con los KPIs que toda empresa pequeña debe controlar: margen, punto muerto, ticket medio, coste de adquisición, flujo de caja. Cómo interpretar datos y tomar decisiones.",
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
  dateModified: "2025-04-10",
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

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 not-prose">
            <ol className="flex items-center gap-1">
              <li>
                <a href="/" className="hover:text-accent-600 transition-colors">Inicio</a>
              </li>
              <li className="before:content-['>'] before:mx-2 before:text-gray-400">
                <a href="/blog" className="hover:text-accent-600 transition-colors">Blog</a>
              </li>
              <li className="before:content-['>'] before:mx-2 before:text-gray-400">
                <span className="text-gray-700 font-medium">Indicadores clave de una empresa</span>
              </li>
            </ol>
          </nav>

          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Si te pregunto ahora mismo cuál fue el margen neto de tu negocio el
            mes pasado, ¿podrías decírmelo? ¿Y el coste de adquisición de un
            cliente nuevo? ¿Y qué porcentaje de tu facturación se va en gastos
            fijos? Si la respuesta a alguna de estas preguntas es «no lo
            sé exactamente», estás gestionando tu empresa a ciegas. Y no
            eres el único.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años asesorando a pymes, puedo decirte que la
            inmensa mayoría de los empresarios no controlan los indicadores
            clave de su negocio. Saben si «va bien» o «va
            mal» por sensaciones, por el saldo de la cuenta corriente o
            por lo estresados que están. Pero sensaciones no son datos. Y sin
            datos, cada decisión es una apuesta.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta guía no va de teoría financiera ni de cuadros de mando
            complejos. Va de los números esenciales que cualquier empresa —
            desde un autónomo hasta una pyme con 30 empleados — debería
            vigilar cada mes para saber dónde está, hacia dónde va y qué tiene
            que cambiar. Sin jerga, sin humo, con ejemplos reales.
          </p>

          {/* Índice de contenidos */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50/60 p-6 not-prose">
            <h2 className="text-lg font-bold text-primary-900 mb-4">Índice de contenidos</h2>
            <ol className="space-y-2 text-sm md:text-base text-primary-800">
              <li><a href="#por-que-no-miden" className="hover:text-accent-600 transition-colors">1. Por qué tantos empresarios gestionan sin mirar los números</a></li>
              <li><a href="#kpis-clave" className="hover:text-accent-600 transition-colors">2. Los 9 KPIs que debe controlar cualquier empresa</a></li>
              <li><a href="#tabla-resumen" className="hover:text-accent-600 transition-colors">3. Tabla resumen de indicadores clave</a></li>
              <li><a href="#interpretar-datos" className="hover:text-accent-600 transition-colors">4. Cómo interpretar los datos de tu negocio</a></li>
              <li><a href="#tomar-decisiones" className="hover:text-accent-600 transition-colors">5. Cómo tomar decisiones de negocio basadas en datos</a></li>
              <li><a href="#errores-habituales" className="hover:text-accent-600 transition-colors">6. Errores habituales al empezar a medir</a></li>
              <li><a href="#caso-real" className="hover:text-accent-600 transition-colors">7. Caso real: la empresa que descubrió que su mejor cliente era su peor negocio</a></li>
              <li><a href="#sistema-mensual" className="hover:text-accent-600 transition-colors">8. Sistema práctico: tu revisión mensual en 60 minutos</a></li>
              <li><a href="#conclusion" className="hover:text-accent-600 transition-colors">9. Conclusión: los números no mienten, las sensaciones sí</a></li>
            </ol>
          </div>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Lo que no se mide, no se gestiona. Y lo que no se gestiona,
            se deteriora.»
          </blockquote>

          {/* ====================== SECCIÓN 1 ====================== */}
          <h2 id="por-que-no-miden" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            1. Por qué tantos empresarios gestionan sin mirar los números
          </h2>
          <p className="text-gray-600 md:text-lg">
            Antes de hablar de qué medir, es importante entender por qué la
            mayoría no lo hace. No es por dejadez ni por incompetencia. Las
            razones suelen ser más simples y más humanas de lo que parece.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            «No tengo tiempo»
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la excusa más habitual. El empresario está tan metido en el día
            a día — atendiendo clientes, resolviendo problemas, gestionando
            empleados — que no le queda tiempo para sentarse a mirar los
            números. Pero la ironía es brutal: precisamente porque no mira los
            números, sigue atrapado en{" "}
            <a href="/blog/como-organizar-empresa-pequena-salir-autoempleo" className="text-accent-600 underline hover:text-accent-700">
              un día a día caótico
            </a>. Si supiera qué
            clientes le dan margen y cuáles no, qué servicios son rentables y
            cuáles le cuestan dinero, podría tomar decisiones que le liberarían
            horas cada semana.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            «Mi gestoría ya se encarga de eso»
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Tu gestoría se encarga de la contabilidad fiscal y de que cumplas
            con Hacienda. Pero eso no es gestión de negocio. Los informes que
            te manda tu gestor están pensados para la Agencia Tributaria, no
            para que tú tomes decisiones. Un balance y una cuenta de resultados
            del trimestre pasado son un retrovisor — te dicen dónde estuviste,
            no hacia dónde vas. Los indicadores de gestión son el parabrisas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            «Me da miedo lo que pueda encontrar»
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Esto nadie lo dice en voz alta, pero es más frecuente de lo que
            piensas. Muchos empresarios intuyen que hay problemas pero
            prefieren no confirmarlos. Es una reacción humana, comprensible,
            pero peligrosísima. Un problema que no miras no desaparece — crece.
            Y cuando finalmente te explota en la cara, las opciones para
            resolverlo son muchas menos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            «No sé qué mirar ni cómo interpretarlo»
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Esta es quizá la razón más legítima. Nadie nace sabiendo leer un
            cuadro de mando. Y la formación empresarial en España es
            prácticamente inexistente para el pequeño empresario. Pero no
            necesitas un máster en finanzas. Necesitas entender seis o siete
            números clave y revisarlos una vez al mes. Y eso es exactamente lo
            que vamos a ver ahora.
          </p>

          {/* Cuadro informativo */}
          <div className="my-10 rounded-xl border border-red-200 bg-red-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-red-900">
              El coste real de no medir
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Cuando un empresario no controla sus indicadores, estas son las
              consecuencias más habituales:
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

          {/* ====================== SECCIÓN 2 ====================== */}
          <h2 id="kpis-clave" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            2. Los 9 KPIs que debe controlar cualquier empresa
          </h2>
          <p className="text-gray-600 md:text-lg">
            No necesitas veinte indicadores. Necesitas los correctos. Estos son
            los nueve KPIs fundamentales que cualquier pyme debería vigilar como
            mínimo cada mes. Si controlas estos números, tendrás una
            visión más clara de tu negocio que el 90% de tus competidores.
          </p>

          {/* KPI 1 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
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
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
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
              factures: nunca generarás beneficio suficiente. Si facturas mucho
              pero{" "}
              <a href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero" className="text-accent-600 underline hover:text-accent-700">
                no ganas dinero
              </a>, el margen bruto es el primer sitio donde mirar.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> (Ingresos − Costes directos) ÷
              Ingresos × 100 &nbsp;|&nbsp; <strong>Referencia:</strong>{" "}
              Comercio 40-60% · Servicios &gt;50% ·{" "}
              <a href="/blog/como-mejorar-rentabilidad-restaurante-bar" className="text-accent-600 underline hover:text-accent-700">Hostelería 65-75%</a>
            </p>
          </div>

          {/* KPI 3 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
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
              margen bruto, tienes un problema serio que debes atajar cuanto
              antes para{" "}
              <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">
                mejorar la rentabilidad de tu empresa
              </a>.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Frecuencia:</strong> Mensual &nbsp;|&nbsp;{" "}
              <strong>Clave:</strong> Comparar la tendencia trimestre a
              trimestre
            </p>
          </div>

          {/* KPI 4 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                4
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Punto de equilibrio (punto muerto)
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              La cifra de facturación a partir de la cual empiezas a ganar
              dinero. Por debajo, pierdes. Por encima, ganas. Es el indicador
              más poderoso para un empresario porque te da una referencia
              concreta: «necesito facturar al menos X euros al mes para
              cubrir todos mis costes». Sin este dato, estás navegando
              sin brújula.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Conocer tu punto de equilibrio cambia tu forma de pensar. Sabes
              exactamente cuántos clientes necesitas al mes, cuántas ventas,
              cuántos servicios. Y puedes planificar tu captación y tu
              operativa para superar esa cifra cada mes con margen de seguridad.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Gastos fijos mensuales ÷ Margen bruto
              (%) &nbsp;|&nbsp; <strong>Ejemplo:</strong> 10.000 € fijos ÷ 0,55
              = 18.182 €/mes mínimo
            </p>
          </div>

          {/* KPI 5 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
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
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
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
              crecimiento que no requieren{" "}
              <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                captar clientes nuevos
              </a>. Si tu ticket
              medio es de 80 euros y consigues subirlo a 95 euros con ventas
              cruzadas o mejorando tu propuesta, has aumentado tus ingresos casi
              un 20% sin gastar un euro en publicidad.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              El ticket medio se mejora de muchas formas: ofreciendo un
              servicio complementario al principal, creando paquetes, mejorando
              la presentación de tu propuesta de valor o simplemente{" "}
              <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                ajustando tus precios
              </a>{" "}
              a lo que realmente vale tu trabajo.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Facturación total ÷ Número de
              transacciones &nbsp;|&nbsp; <strong>Clave:</strong> Buscar formas
              de incrementarlo sin forzar
            </p>
          </div>

          {/* KPI 7 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                7
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Coste de adquisición de cliente (CAC)
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Cuánto te cuesta de media conseguir un cliente nuevo. Suma todo
              lo que inviertes en captación (publicidad, tiempo comercial,
              comisiones, herramientas de marketing) y divídelo entre el número
              de clientes nuevos que has conseguido. Este indicador es
              fundamental porque te dice si tu inversión en captación es
              rentable o estás tirando dinero.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              La regla básica es sencilla: si un cliente nuevo te genera 500 €
              de margen a lo largo de su vida como cliente, no puedes gastar
              600 € en conseguirlo. Pero si no conoces tu CAC, no sabes si tu{" "}
              <a href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio" className="text-accent-600 underline hover:text-accent-700">
                publicidad está funcionando
              </a>{" "}
              o simplemente quemando presupuesto.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Fórmula:</strong> Inversión total en captación ÷ Nº
              clientes nuevos &nbsp;|&nbsp; <strong>Alerta:</strong> Si el CAC
              supera el margen que genera el cliente, estás perdiendo dinero
              por cada venta
            </p>
          </div>

          {/* KPI 8 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                8
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
              Varía mucho por sector, pero mide la tendencia mensual
            </p>
          </div>

          {/* KPI 9 */}
          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm not-prose">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                9
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Flujo de caja (tesorería disponible)
              </h3>
            </div>
            <p className="mt-3 text-gray-600 md:text-lg">
              Cuánto dinero real tienes disponible en la cuenta del negocio, no
              cuánto te deben ni cuánto has facturado — cuánto puedes usar hoy.
              Es el indicador de supervivencia. Muchas empresas rentables
              cierran por{" "}
              <a href="/blog/problemas-de-liquidez-en-pymes" className="text-accent-600 underline hover:text-accent-700">problemas de liquidez</a>: han vendido mucho pero cobran
              a 60 días y tienen que pagar a 30.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              El flujo de caja no solo te dice si puedes pagar las nóminas
              este mes. Te dice si puedes invertir, si puedes aguantar un
              imprevisto, si puedes negociar con proveedores desde una posición
              de fuerza. Vigilar la tesorería es vigilar el oxígeno de tu empresa.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Frecuencia:</strong> Semanal (sí, semanal) &nbsp;|&nbsp;{" "}
              <strong>Regla:</strong> Mantener al menos 2 meses de gastos fijos
              como colchón
            </p>
          </div>

          {/* ====================== SECCIÓN 3 ====================== */}
          <h2 id="tabla-resumen" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            3. Tabla resumen: los indicadores clave de tu empresa
          </h2>
          <p className="text-gray-600 md:text-lg">
            Aquí tienes una tabla de referencia rápida. Imprímela, pégala en
            tu despacho o guárdala en el móvil. Es tu cuadro de mando básico.
          </p>

          {/* Tabla principal */}
          <div className="my-10 overflow-x-auto not-prose">
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
                  ["Facturación", "Ingresos totales del mes", "Mensual", "Caída &gt;10% vs. mismo mes año anterior"],
                  ["Margen bruto", "(Ingresos − Costes directos) ÷ Ingresos", "Mensual", "Por debajo del mínimo de tu sector"],
                  ["Gastos fijos", "Suma de todos los costes fijos", "Mensual", "Crecen más rápido que la facturación"],
                  ["Punto de equilibrio", "Gastos fijos ÷ Margen bruto (%)", "Mensual", "Facturas por debajo 2+ meses seguidos"],
                  ["Beneficio neto", "Beneficio neto ÷ Facturación", "Mensual", "Inferior al 5% de forma recurrente"],
                  ["Ticket medio", "Facturación ÷ Nº transacciones", "Mensual", "Tendencia descendente sin causa clara"],
                  ["CAC", "Inversión captación ÷ Clientes nuevos", "Mensual", "Supera el margen que genera el cliente"],
                  ["Conversión", "Clientes ÷ Contactos interesados", "Mensual", "Baja sin cambios en producto o precio"],
                  ["Flujo de caja", "Dinero disponible real en cuenta", "Semanal", "Menos de 2 meses de gastos fijos"],
                ].map(([kpi, formula, freq, alarma], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{kpi}</td>
                    <td className="px-4 py-3 text-gray-600">{formula}</td>
                    <td className="px-4 py-3 text-gray-600">{freq}</td>
                    <td
                      className="px-4 py-3 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: alarma as string }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ====================== SECCIÓN 4 ====================== */}
          <h2 id="interpretar-datos" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            4. Cómo interpretar los datos de tu negocio
          </h2>

          <p className="text-gray-600 md:text-lg">
            Tener los datos es el primer paso. Pero un dato aislado no
            significa nada. Lo que transforma un número en información útil
            es el contexto. Y ese contexto viene de tres comparaciones
            fundamentales:
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Comparación temporal: tú contra ti mismo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            ¿Tu margen bruto este mes es mejor o peor que el mes pasado? ¿Y
            que el mismo mes del año anterior? La tendencia es lo que importa.
            Un margen del 45% puede ser excelente si el mes pasado era 40%, o
            preocupante si hace tres meses era 55%. El número aislado no te
            dice nada; la dirección sí.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Comparación con tu punto de equilibrio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Tu punto de equilibrio es tu línea roja. Cada mes, la primera
            pregunta es: ¿he superado mi punto de equilibrio? Si sí, estás
            generando beneficio. Si no, estás en pérdidas. Lo segundo es:
            ¿por cuánto margen lo he superado? Si estás un 5% por encima,
            cualquier imprevisto te pone en negativo. Si estás un 30% por
            encima, tienes colchón para invertir, para contratar o para
            ahorrar.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Comparación entre métricas: buscar la historia detrás de los datos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los KPIs no funcionan por separado. Se cuentan historias unos
            a otros. Algunos ejemplos:
          </p>
          <ul className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <span>
                <strong>Facturación sube pero beneficio baja:</strong> tus
                costes crecen más que tus ingresos. Revisa margen bruto y
                gastos fijos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <span>
                <strong>Conversión baja pero ticket medio sube:</strong> estás
                atrayendo menos clientes pero más cualificados. Puede ser
                positivo si el beneficio total crece.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <span>
                <strong>CAC sube y conversión baja:</strong> señal de alarma
                clara. Tu captación se está volviendo menos eficiente. Revisa
                canales, mensaje y proceso de venta.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <span>
                <strong>Facturación estable pero flujo de caja negativo:</strong>{" "}
                problema de cobros. Estás vendiendo pero no estás cobrando a
                tiempo. Necesitas revisar tus plazos de pago.
              </span>
            </li>
          </ul>

          {/* CTA intermedio */}
          <div className="my-10 rounded-xl border-2 border-accent-300 bg-accent-50 p-6 not-prose">
            <p className="font-semibold text-primary-900 text-lg">
              ¿Necesitas ayuda para interpretar los números de tu negocio?
            </p>
            <p className="mt-2 text-gray-700">
              En un{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700 font-medium"
              >
                diagnóstico gratuito
              </a>{" "}
              analizamos juntos tus indicadores, identificamos dónde están los
              problemas reales y definimos las primeras acciones concretas. 30
              minutos sin compromiso.
            </p>
          </div>

          {/* ====================== SECCIÓN 5 ====================== */}
          <h2 id="tomar-decisiones" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            5. Cómo tomar decisiones de negocio basadas en datos
          </h2>

          <p className="text-gray-600 md:text-lg">
            Los datos sin acción son decoración. El objetivo de medir no es
            tener una hoja de cálculo bonita — es{" "}
            <a href="/blog/como-tomar-decisiones-en-un-negocio" className="text-accent-600 underline hover:text-accent-700">
              tomar mejores decisiones
            </a>{" "}
            y alimentar tu{" "}
            <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">
              estrategia de negocio
            </a>{" "}
            con datos reales. Pero ¿cómo se pasa de los datos a la acción?
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            La regla del semáforo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un sistema simple que funciona: asigna a cada indicador un estado
            de semáforo. <strong>Verde:</strong> el indicador mejora o está
            en rango saludable. <strong>Amarillo:</strong> se ha deteriorado
            un poco o está en el límite. <strong>Rojo:</strong> está en zona
            de peligro o ha empeorado significativamente. Cada mes, mira tu
            cuadro de semáforos. Los verdes no necesitan atención. Los
            amarillos necesitan vigilancia. Los rojos necesitan acción
            inmediata.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Una decisión por indicador en rojo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cada indicador en rojo debe generar una decisión concreta. No
            una reflexión vaga, no un «ya lo miraré». Una decisión con
            responsable, plazo y resultado esperado. Si tu margen bruto
            está en rojo, la decisión puede ser: «Esta semana renegocio con
            el proveedor X para bajar un 5% el coste de la materia prima.
            Objetivo: subir el margen 2 puntos en 30 días». Concreto,
            medible, accionable.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            No intentes arreglar todo a la vez
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El error más habitual cuando un empresario empieza a ver sus
            números es querer corregirlo todo de golpe. No funciona.
            Prioriza: ¿cuál es el indicador que más impacto tiene en tu
            beneficio? Empieza por ese. Mejóralo. Cuando esté estabilizado,
            pasa al siguiente. La mejora constante y progresiva siempre
            gana a las revoluciones puntuales.
          </p>

          {/* ====================== SECCIÓN 6 ====================== */}
          <h2 id="errores-habituales" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            6. Errores habituales al empezar a medir
          </h2>
          <p className="text-gray-600 md:text-lg">
            Cuando un empresario decide empezar a controlar sus indicadores,
            hay errores frecuentes que conviene conocer para no caer en ellos.
          </p>

          <div className="my-10 overflow-x-auto not-prose">
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
                  ["Medir demasiadas cosas", "Te ahogas en datos y no actúas sobre ninguno", "Empieza con 5-9 KPIs, no con 30"],
                  ["Mirar solo la facturación", "Facturación sin margen es trabajo gratis", "Mide siempre margen y beneficio neto"],
                  ["No comparar con períodos anteriores", "Un dato aislado no dice nada", "Compara siempre mes a mes y año a año"],
                  ["Medir pero no actuar", "Los datos sin decisiones son decoración", "Cada mes, una acción concreta basada en datos"],
                  ["Buscar la herramienta perfecta", "Pierdes semanas evaluando software", "Empieza con Excel hoy, mejora después"],
                  ["Confundir facturación con cobro", "Puedes facturar mucho y no tener dinero", "Mide flujo de caja real, no facturación teórica"],
                  ["Ignorar el CAC", "No sabes si tu captación es rentable", "Calcula cuánto te cuesta cada cliente nuevo"],
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

          {/* ====================== SECCIÓN 7 ====================== */}
          <h2 id="caso-real" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            7. Caso real: la empresa que descubrió que su mejor cliente era su peor negocio
          </h2>
          <p className="text-gray-600 md:text-lg">
            Trabajé con una empresa de servicios técnicos en A Coruña. Tenía
            una facturación de unos 400.000 euros al año, ocho empleados y una
            cartera de unos 60 clientes. El dueño estaba satisfecho con la
            facturación pero no entendía por qué a final de año apenas le
            quedaba beneficio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando nos sentamos a montar su cuadro de indicadores y a
            analizarlos por primera vez, encontramos algo que le dejó de piedra.
          </p>

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-amber-900">
              Lo que revelaron los datos
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">1.</span>
                <span>
                  <strong>Su cliente más grande</strong> (90.000 €/año) tenía
                  un margen bruto del 12%. Después de costes directos,
                  desplazamientos, horas extra y gestión de incidencias, ese
                  cliente le dejaba menos beneficio que tres clientes pequeños
                  juntos.
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
                  <strong>Su coste de adquisición de cliente</strong> era de
                  280 € cuando su ticket medio era de 350 €. Enviaba muchos
                  presupuestos genéricos, sin seguimiento, sin personalización.
                  Tres de cada cuatro oportunidades se perdían por falta de
                  proceso comercial.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-gray-600 md:text-lg">
            Ninguno de estos problemas era visible a simple vista. La
            facturación total parecía sana. El día a día funcionaba. Pero los
            indicadores contaban una historia completamente diferente: una
            empresa que trabajaba mucho pero ganaba poco.
          </p>

          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-green-900">
              Resultado después de actuar sobre los datos
            </h3>
            <p className="mt-2 text-gray-600 md:text-lg">
              En los seis meses siguientes:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Renegoció condiciones con el cliente grande (subió precios un 18%) — el cliente aceptó.",
                "Eliminó 3.200 €/mes en gastos fijos innecesarios.",
                "Implementó seguimiento de presupuestos: conversión del 15% al 28%.",
                "El beneficio neto pasó del 4% al 11% sin aumentar la facturación.",
                "Dejó de necesitar la línea de crédito para cubrir baches de tesorería.",
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

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Los datos no resuelven los problemas. Pero te muestran
            exactamente dónde están. Y eso es el 80% del camino.»
          </blockquote>

          {/* ====================== SECCIÓN 8 ====================== */}
          <h2 id="sistema-mensual" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            8. Sistema práctico: tu revisión mensual en 60 minutos
          </h2>
          <p className="text-gray-600 md:text-lg">
            No se trata de obsesionarse con los números cada día. Se trata
            de crear un hábito mensual que te dé control y perspectiva. Aquí
            tienes un sistema que funciona:
          </p>

          <div className="my-10 space-y-6 not-prose">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Minutos 1-20
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Recoge los datos del mes anterior
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Abre tu hoja de cálculo (o tu libreta) y rellena los nueve
                indicadores. Facturación, costes directos, gastos fijos,
                clientes nuevos, presupuestos enviados, ticket medio, inversión
                en captación, saldo en cuenta. Con esos datos calculas el resto.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Minutos 20-35
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Compara y busca tendencias
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Compara cada indicador con el mes anterior y con el mismo mes
                del año pasado. Asigna el semáforo: verde, amarillo o rojo.
                Busca las relaciones entre métricas: ¿la facturación sube
                pero el margen baja? ¿El CAC crece pero la conversión no
                mejora?
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Minutos 35-50
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Identifica las señales de alarma y prioriza
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                ¿Hay algún indicador en rojo? ¿Alguno que lleve dos o tres
                meses empeorando? Prioriza: ¿cuál tiene más impacto en tu
                beneficio? Ese es el que necesita atención este mes.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Minutos 50-60
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Decide una acción concreta
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Una decisión con responsable, plazo y resultado esperado.
                Solo una. Puede ser pequeña: renegociar con un proveedor,
                eliminar una suscripción, subir el precio de un servicio,
                llamar a tres clientes que llevan meses sin comprar. Lo
                importante es que cada mes hagas algo basado en datos.
              </p>
            </div>
          </div>

          {/* Herramientas */}
          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm not-prose">
            <h3 className="text-lg font-bold text-gray-900">
              Herramientas sencillas para llevar tus KPIs
            </h3>
            <p className="mt-2 text-gray-500 text-sm">
              No necesitas invertir en software caro. Con cualquiera de estas
              opciones puedes empezar hoy mismo.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                ["Hoja de cálculo (Excel o Google Sheets)", "Gratis, flexible, suficiente para el 90% de las pymes. Una pestaña por mes, una fila por indicador."],
                ["Libreta y bolígrafo", "En serio. Si no eres digital, una tabla en papel que rellenas cada mes ya es infinitamente mejor que nada."],
                ["Tu programa de facturación", "Muchos ya incluyen informes básicos de facturación, margen y clientes. Aprovéchalos."],
                ["Un consultor externo", "Si necesitas ayuda para montar el sistema o interpretar los primeros datos, una sesión te puede ahorrar meses de tanteo."],
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

          {/* ====================== SECCIÓN 9 ====================== */}
          <h2 id="conclusion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            9. Conclusión: los números no mienten, las sensaciones sí
          </h2>
          <p className="text-gray-600 md:text-lg">
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
            Si necesitas ayuda para{" "}
            <a href="/blog/como-hacer-crecer-una-empresa-pequena" className="text-accent-600 underline hover:text-accent-700">
              hacer crecer tu empresa
            </a>{" "}
            con método, el primer paso siempre es el mismo: conocer los números
            reales de tu negocio. Porque no puedes mejorar lo que no mides.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El mejor momento para empezar a medir fue hace cinco años. El
            segundo mejor momento es este mes. Coge una hoja de cálculo, apunta
            los nueve indicadores y empieza. Y si necesitas a alguien que te
            ayude a montarlo o a interpretar lo que los números te dicen,{" "}
            <a href="/diagnostico-negocio" className="text-accent-600 underline hover:text-accent-700">
              hablamos
            </a>.
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

      <BlogNav currentSlug="indicadores-clave-de-una-empresa" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              Método Rentabilismo incluye herramientas gratuitas de diagnóstico
            </a>{" "}
            para empezar a medir tu negocio hoy. Consulta{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              casos reales de empresas que mejoraron sus indicadores
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
