import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo mejorar la rentabilidad de una empresa — Guía completa para pymes | Consultoría Método",
  description:
    "Guía práctica para mejorar la rentabilidad de tu empresa. Aprende a analizar márgenes, subir precios sin perder clientes, reducir costes y vender mejor. Con ejemplos reales y plan de acción paso a paso.",
  keywords: [
    "mejorar rentabilidad empresa",
    "rentabilidad empresarial",
    "cómo ganar más dinero con mi negocio",
    "empresa no gana dinero",
    "mejorar beneficios empresa",
    "aumentar margen negocio",
    "rentabilidad pymes",
    "subir precios sin perder clientes",
    "reducir costes empresa",
    "mejorar ventas empresa",
    "consultoría rentabilidad",
    "consultoría empresarial",
  ],
  openGraph: {
    title:
      "Cómo mejorar la rentabilidad de una empresa — Guía completa para pymes",
    description:
      "Tu empresa factura pero no gana. Descubre cómo mejorar la rentabilidad de tu negocio con un plan práctico: márgenes, precios, costes, ventas y decisiones estratégicas.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-mejorar-rentabilidad-empresa",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo mejorar la rentabilidad de una empresa — Guía completa para pymes",
  description:
    "Guía práctica para mejorar la rentabilidad de tu empresa. Aprende a analizar márgenes, subir precios sin perder clientes, reducir costes y vender mejor. Con ejemplos reales y plan de acción paso a paso.",
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
  datePublished: "2025-04-10",
  dateModified: "2025-04-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-mejorar-rentabilidad-empresa",
  },
};

export default function ArticuloRentabilidadEmpresa() {
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
            Cómo mejorar la rentabilidad de una empresa: guía completa para pymes que facturan pero no ganan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Facturas cada mes, trabajas más que nadie, y cuando miras la cuenta
            de resultados el beneficio es ridículo. Este artículo te explica
            exactamente por qué pasa y qué hacer para cambiarlo.
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
                <span className="text-gray-700 font-medium">Cómo mejorar la rentabilidad de una empresa</span>
              </li>
            </ol>
          </nav>

          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Hay una frase que escucho en casi todas las primeras reuniones con
            empresarios: <em>«Facturamos bastante, pero no vemos el dinero»</em>.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo dicen dueños de talleres, de tiendas, de empresas de servicios, de
            negocios industriales. Gente que trabaja doce horas al día, que tiene
            clientes, que mueve dinero. Pero que cuando llega el final de mes — o
            peor, el final de año — se encuentra con que apenas queda nada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No es un problema de vagancia. No es un problema de falta de
            esfuerzo. Es un problema de <strong>rentabilidad</strong>. Y la
            rentabilidad no mejora trabajando más. Mejora entendiendo dónde se
            genera el margen, dónde se pierde y qué decisiones lo están
            destruyendo sin que te des cuenta.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta guía es el artículo que me habría gustado poder entregar a cada
            empresario antes de nuestra primera sesión de trabajo. Todo lo que
            necesitas saber para mejorar la rentabilidad de tu empresa, explicado
            con claridad, sin teoría vacía, con ejemplos reales y un plan de
            acción concreto.
          </p>

          {/* Índice de contenidos */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50/60 p-6 not-prose">
            <h2 className="text-lg font-bold text-primary-900 mb-4">Índice de contenidos</h2>
            <ol className="space-y-2 text-sm md:text-base text-primary-800">
              <li><a href="#que-es-rentabilidad" className="hover:text-accent-600 transition-colors">1. Qué es realmente la rentabilidad de una empresa</a></li>
              <li><a href="#factura-no-gana" className="hover:text-accent-600 transition-colors">2. Por qué muchas empresas facturan pero no ganan dinero</a></li>
              <li><a href="#errores-habituales" className="hover:text-accent-600 transition-colors">3. Los 8 errores que destruyen la rentabilidad</a></li>
              <li><a href="#analizar-margenes" className="hover:text-accent-600 transition-colors">4. Cómo analizar los márgenes de tu empresa</a></li>
              <li><a href="#subir-precios" className="hover:text-accent-600 transition-colors">5. Cómo subir precios sin perder clientes</a></li>
              <li><a href="#mejorar-costes" className="hover:text-accent-600 transition-colors">6. Cómo reducir costes sin cargarte la empresa</a></li>
              <li><a href="#vender-mejor" className="hover:text-accent-600 transition-colors">7. Cómo vender mejor (no solo más)</a></li>
              <li><a href="#casos-reales" className="hover:text-accent-600 transition-colors">8. Casos reales de mejora de rentabilidad</a></li>
              <li><a href="#plan-accion" className="hover:text-accent-600 transition-colors">9. Plan práctico de mejora en 90 días</a></li>
              <li><a href="#conclusion" className="hover:text-accent-600 transition-colors">10. Conclusión: la rentabilidad no es suerte</a></li>
            </ol>
          </div>

          {/* ====================== SECCIÓN 1 ====================== */}
          <h2 id="que-es-rentabilidad" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            1. Qué es realmente la rentabilidad de una empresa
          </h2>

          <p className="text-gray-600 md:text-lg">
            La rentabilidad no es cuánto facturas. No es cuántos clientes
            tienes. No es cuánto crece tu empresa cada año.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>La rentabilidad es lo que queda después de pagar todo.</strong>{" "}
            Es el beneficio real que genera tu negocio una vez descontados los
            costes directos, los gastos fijos, los impuestos, tu propio sueldo
            y la reinversión necesaria para seguir funcionando.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Dicho de otra forma: una empresa es rentable cuando el dinero que
            entra supera con margen suficiente al dinero que sale. No con un
            margen ridículo del 1% o 2%, sino con un margen que te permita:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Pagarte un sueldo digno como empresario
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Tener un colchón para imprevistos
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Invertir en mejoras sin endeudarte
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Dormir tranquilo sabiendo que el negocio aguanta un mal mes
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Facturación vs. rentabilidad: la confusión más cara
          </h3>
          <p className="text-gray-600 md:text-lg">
            Muchos empresarios confunden facturar mucho con ganar dinero. Son
            cosas completamente diferentes. Una empresa que factura 500.000€ al
            año puede ser menos rentable que una que factura 200.000€. Todo
            depende de la estructura de costes, los márgenes por producto o
            servicio, y las decisiones que toma el empresario cada día.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He trabajado con empresas que facturaban más de un millón de euros
            anuales y sus dueños apenas se pagaban un sueldo de 1.500€.
            Y he visto negocios con 150.000€ de facturación que dejaban un
            beneficio neto superior. La diferencia nunca estaba en el volumen
            de ventas. Estaba en{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo se gestionaba cada euro que entraba y cada euro que salía
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Los tres niveles de margen que debes conocer
          </h3>
          <p className="text-gray-600 md:text-lg">
            Para entender la rentabilidad de tu empresa necesitas distinguir
            tres niveles de margen:
          </p>
          <ul className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">1.</span>
              <span>
                <strong>Margen bruto:</strong> lo que queda después de restar los
                costes directos del producto o servicio (materias primas, mano de
                obra directa, subcontrataciones). Te dice si tu actividad
                principal es viable.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">2.</span>
              <span>
                <strong>Margen operativo:</strong> lo que queda después de restar
                también los gastos fijos (alquiler, sueldos de estructura,
                suministros, seguros, gestorías). Te dice si tu empresa se
                sostiene operativamente.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">3.</span>
              <span>
                <strong>Margen neto:</strong> lo que queda después de impuestos,
                amortizaciones y gastos financieros. Es lo que de verdad gana tu
                empresa. El número que importa.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si no conoces estos tres números de tu negocio, estás tomando
            decisiones a ciegas. Y eso siempre sale caro.
          </p>

          {/* ====================== SECCIÓN 2 ====================== */}
          <h2 id="factura-no-gana" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            2. Por qué muchas empresas facturan pero no ganan dinero
          </h2>

          <p className="text-gray-600 md:text-lg">
            Es la paradoja más dolorosa del mundo empresarial. Tienes clientes,
            tienes trabajo, la caja se mueve — pero al final de mes no queda
            nada. O queda tan poco que no justifica el esfuerzo brutal que
            haces.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años trabajando con pymes de todos los
            sectores, he identificado las causas que se repiten una y otra vez:
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Los precios no están bien calculados
          </h3>
          <p className="text-gray-600 md:text-lg">
            Es la causa número uno. El empresario fija precios «porque así
            están en el mercado» o «porque la competencia cobra eso» o «porque
            siempre lo hemos hecho así». Nunca se ha sentado a calcular cuánto
            le cuesta realmente producir o entregar ese producto o servicio.
            Y cuando lo haces — cuando desglosas cada coste — descubres que
            llevas años vendiendo cosas con márgenes ridículos, o incluso
            perdiendo dinero en algunos productos sin saberlo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres profundizar en este tema, tengo un artículo completo
            sobre{" "}
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo fijar precios en tu negocio sin perder clientes ni margen
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Los costes crecen sin control
          </h3>
          <p className="text-gray-600 md:text-lg">
            La empresa empieza pequeña, con gastos ajustados. Pero a medida que
            crece, los costes se van acumulando: un empleado más, un local más
            grande, un software, una furgoneta, un seguro, otra cuota. Cada
            gasto parecía justificado en su momento. Pero nadie se para a
            sumar todo y compararlo con el margen real que generan las ventas.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Se vende de todo a todo el mundo
          </h3>
          <p className="text-gray-600 md:text-lg">
            Muchas pymes intentan abarcar demasiado. Ofrecen veinte servicios
            diferentes, aceptan cualquier encargo, entran en sectores que no
            dominan. Y cada vez que abres un frente nuevo sin cerrar el
            anterior, dispersas recursos, generas complejidad operativa y bajas
            el margen medio. No todos los clientes valen lo mismo. No todos los
            productos son igual de rentables. Pero si no lo mides, tratas todo
            por igual.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            El empresario no se paga un sueldo real
          </h3>
          <p className="text-gray-600 md:text-lg">
            Esto pasa más de lo que la gente cree. El dueño «se paga lo que
            queda» o directamente no se paga. Y como no incluye su propio
            sueldo como gasto fijo, los números parecen cuadrar. Pero es un
            espejismo. Si incluyeras tu sueldo real — lo que te pagarían por
            hacer ese mismo trabajo en otra empresa — muchos negocios estarían
            en pérdidas.
          </p>

          <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
            <p className="text-gray-700 italic md:text-lg">
              «Si tu empresa solo funciona porque tú no cobras, no tienes una
              empresa. Tienes un puesto de trabajo que tú mismo te has creado
              y que además te paga mal.»
            </p>
          </blockquote>

          {/* ====================== SECCIÓN 3 ====================== */}
          <h2 id="errores-habituales" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            3. Los 8 errores que destruyen la rentabilidad de una empresa
          </h2>

          <p className="text-gray-600 md:text-lg">
            A lo largo de mi carrera como consultor de negocios he visto estos
            errores repetirse en cientos de empresas. Los enumero para que
            puedas identificar cuáles aplican a tu caso:
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 1: No conocer el coste real de cada producto o servicio
          </h3>
          <p className="text-gray-600 md:text-lg">
            Si no sabes cuánto te cuesta realmente producir o entregar lo que
            vendes — incluyendo tiempo, materiales, desplazamientos, garantías,
            mermas y costes indirectos — es imposible que fíjes un precio
            correcto. Y sin precio correcto, no hay margen. Sin margen, no hay
            rentabilidad.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 2: Competir por precio
          </h3>
          <p className="text-gray-600 md:text-lg">
            Bajar precios para ganar clientes es la estrategia más peligrosa
            que existe para una pyme. Los grandes pueden permitírselo porque
            compensan con volumen. Tú no. Cada vez que bajas un 10% tu precio,
            puedes estar eliminando el 50% o más de tu margen neto. Si tu{" "}
            <a
              href="/blog/como-diferenciarte-de-tu-competencia"
              className="text-accent-600 underline hover:text-accent-700"
            >
              única ventaja competitiva es ser el más barato
            </a>
            , tu empresa tiene un problema estructural.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 3: Crecer sin estructura
          </h3>
          <p className="text-gray-600 md:text-lg">
            Más ventas no significan más beneficio si cada venta nueva requiere
            más recursos sin proporción. He visto empresas duplicar facturación
            y reducir beneficio a la mitad porque cada nuevo cliente exigía
            contratar personal, comprar material y asumir riesgos que no estaban
            calculados. Crecer es bueno, pero{" "}
            <a
              href="/blog/como-hacer-crecer-una-empresa-pequena"
              className="text-accent-600 underline hover:text-accent-700"
            >
              crecer sin estructura es un suicidio financiero lento
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 4: No revisar los números cada mes
          </h3>
          <p className="text-gray-600 md:text-lg">
            Muchos empresarios solo miran los números cuando hacen la
            declaración de la renta o cuando el banco les llama. Para entonces
            ya es demasiado tarde. La rentabilidad hay que{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              monitorizar con indicadores cada mes
            </a>
            , no una vez al año.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 5: Confundir caja con beneficio
          </h3>
          <p className="text-gray-600 md:text-lg">
            Que haya dinero en la cuenta no significa que estés ganando. Puede
            ser dinero de un cobro adelantado, de un IVA que tendrás que
            liquidar, o de una factura que no cubre los costes reales. Y al
            revés: puedes no tener liquidez y sin embargo ser rentable a nivel
            operativo. Son dos problemas diferentes que requieren soluciones
            diferentes. Si tu problema es más de{" "}
            <a
              href="/blog/problemas-de-liquidez-en-pymes"
              className="text-accent-600 underline hover:text-accent-700"
            >
              liquidez que de rentabilidad, este artículo te interesa
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 6: No saber decir «no»
          </h3>
          <p className="text-gray-600 md:text-lg">
            Aceptar trabajos que no son rentables, clientes que pagan tarde,
            encargos fuera de tu especialidad, condiciones que te hacen perder
            dinero. El miedo a perder un cliente nos hace aceptar cosas que
            nos cuestan más de lo que nos dan. Cada «sí» a un mal negocio es
            un «no» a una oportunidad mejor.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 7: Depender de un solo cliente o canal
          </h3>
          <p className="text-gray-600 md:text-lg">
            Cuando un solo cliente representa más del 30% de tu facturación,
            no tienes una empresa. Tienes una dependencia. Y esa dependencia
            te quita poder de negociación, te obliga a aceptar sus condiciones
            y convierte cualquier decisión suya en una crisis para ti.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 8: No invertir en lo que genera retorno
          </h3>
          <p className="text-gray-600 md:text-lg">
            Hay empresarios que no gastan en nada — ni en formación, ni en
            tecnología, ni en mejorar procesos. Y hay otros que gastan en
            todo, sin calcular el retorno. Ambos destruyen rentabilidad. La
            clave es invertir solo en aquello que tiene un retorno medible:
            un software que ahorra horas, una formación que mejora ventas,
            un proceso que reduce errores.
          </p>

          {/* ====================== SECCIÓN 4 ====================== */}
          <h2 id="analizar-margenes" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            4. Cómo analizar los márgenes de tu empresa paso a paso
          </h2>

          <p className="text-gray-600 md:text-lg">
            Antes de mejorar nada, necesitas saber dónde estás. Y para eso
            necesitas números. No estimaciones. No sensaciones. Números
            reales, actualizados y desglosados.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Paso 1: Lista todos tus productos o servicios
          </h3>
          <p className="text-gray-600 md:text-lg">
            Haz una lista de todo lo que vendes. Cada producto, cada servicio,
            cada línea de actividad. Si tu empresa tiene veinte productos,
            necesitas analizar los veinte. No te quedes solo con los tres o
            cuatro que crees que más vendes.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Paso 2: Calcula el coste real de cada uno
          </h3>
          <p className="text-gray-600 md:text-lg">
            Para cada producto o servicio, suma todos los costes directos:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Materias primas o materiales
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Mano de obra directa (incluye seguridad social)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Subcontrataciones
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Transporte y logística
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Mermas, desperdicios y devoluciones
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Garantías y servicio post-venta
            </li>
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Incluye todo. Los costes ocultos son los que más daño hacen porque
            pasan desapercibidos hasta que miras los números con lupa.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Paso 3: Calcula el margen bruto por producto
          </h3>
          <p className="text-gray-600 md:text-lg">
            La fórmula es sencilla: precio de venta menos coste directo,
            dividido entre precio de venta, multiplicado por cien. Eso te da
            el porcentaje de margen bruto. Haz esto para cada línea.
          </p>

          {/* Tabla de ejemplo */}
          <div className="my-8 overflow-x-auto not-prose">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50 text-left">
                  <th className="border border-primary-200 px-4 py-3 font-semibold text-primary-900">Producto / Servicio</th>
                  <th className="border border-primary-200 px-4 py-3 font-semibold text-primary-900">Precio venta</th>
                  <th className="border border-primary-200 px-4 py-3 font-semibold text-primary-900">Coste directo</th>
                  <th className="border border-primary-200 px-4 py-3 font-semibold text-primary-900">Margen bruto</th>
                  <th className="border border-primary-200 px-4 py-3 font-semibold text-primary-900">% Margen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">Servicio A (presupuesto tipo)</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">1.200 €</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">780 €</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-emerald-700">420 €</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-emerald-700">35%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">Producto B</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">85 €</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">62 €</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-amber-700">23 €</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-amber-700">27%</td>
                </tr>
                <tr>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">Servicio C (mantenimiento)</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">450 €/mes</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">180 €/mes</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-emerald-700">270 €/mes</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-emerald-700">60%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">Producto D (bajo margen)</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">40 €</td>
                  <td className="border border-primary-100 px-4 py-2 text-gray-700">34 €</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-red-600">6 €</td>
                  <td className="border border-primary-100 px-4 py-2 font-semibold text-red-600">15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 md:text-lg">
            Este ejercicio siempre genera sorpresas. Productos que creías
            rentables resultan tener un margen mínimo. Servicios que
            considerabas «poco importantes» resultan ser los que realmente
            sostienen tu empresa.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Paso 4: Reparte los gastos fijos
          </h3>
          <p className="text-gray-600 md:text-lg">
            Suma todos los gastos fijos mensuales de tu empresa: alquiler,
            nóminas de estructura, suministros, seguros, gestoría, software,
            cuotas, amortizaciones. Divide ese total entre tus líneas de
            negocio en proporción al tiempo, espacio o recursos que consume
            cada una.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Ahora resta esa parte de gastos fijos al margen bruto de cada
            línea. Lo que queda es el margen operativo real. Y ahí es donde
            muchas empresas descubren que algunas de sus actividades, lejos de
            generar beneficio, están absorbiendo recursos que podrían
            dedicarse a las actividades realmente rentables.
          </p>

          <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
            <p className="text-gray-700 italic md:text-lg">
              «No se puede mejorar lo que no se mide. Y en las pymes, el
              problema casi nunca es que los números sean malos. El problema
              es que nadie los mira.»
            </p>
          </blockquote>

          {/* ====================== SECCIÓN 5 ====================== */}
          <h2 id="subir-precios" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            5. Cómo subir precios sin perder clientes
          </h2>

          <p className="text-gray-600 md:text-lg">
            Subir precios es la palanca más poderosa para mejorar la
            rentabilidad. También es la que más miedo da. El empresario piensa:
            «Si subo precios, perderé clientes». Y es verdad que puedes perder
            algunos. Pero la pregunta correcta no es si perderás clientes. La
            pregunta es: ¿cuántos clientes necesitas perder para que la subida
            no merezca la pena?
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            La matemática que todo empresario debería conocer
          </h3>
          <p className="text-gray-600 md:text-lg">
            Imagina que vendes un servicio a 100€ con un coste de 70€. Tu
            margen es 30€. Si subes un 10% el precio (a 110€), tu margen pasa
            a 40€ — un 33% más de beneficio por cada venta.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Para que esa subida sea negativa, tendrías que perder más del 25%
            de tus clientes. ¿Crees que uno de cada cuatro clientes se irá
            por un 10% de diferencia? En la mayoría de los casos, la respuesta
            es no. Sobre todo si tu propuesta de valor es sólida y tu cliente
            te valora por algo más que el precio.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Estrategias para subir precios con éxito
          </h3>
          <ol className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">1.</span>
              <span>
                <strong>Sube poco pero con frecuencia.</strong> Un 3-5% cada
                año pasa casi inadvertido. Un 20% de golpe genera rechazo.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">2.</span>
              <span>
                <strong>Añade valor antes de subir.</strong> Mejora algo del
                servicio — rapidez, garantía, atención — y comunica el cambio.
                El cliente asocia la subida a una mejora, no a una imposición.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">3.</span>
              <span>
                <strong>Diferencia precios por segmento.</strong> No todos tus
                clientes tienen la misma sensibilidad al precio. Crea
                versiones premium o básicas. Adapta la oferta.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">4.</span>
              <span>
                <strong>Comunica con transparencia.</strong> «Los costes han
                subido un 8%, nosotros subimos un 4%» es un mensaje que
                cualquier empresario entiende y respeta.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">5.</span>
              <span>
                <strong>Empieza por los clientes nuevos.</strong> Los precios
                nuevos se aplican a nuevas propuestas. Los clientes actuales
                reciben el ajuste después, con comunicación previa.
              </span>
            </li>
          </ol>
          <p className="mt-4 text-gray-600 md:text-lg">
            Recuerda: si nunca has subido precios y llevas años absorbiendo
            subidas de costes, no estás siendo competitivo — estás regalando
            tu trabajo.
          </p>

          {/* ====================== SECCIÓN 6 ====================== */}
          <h2 id="mejorar-costes" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            6. Cómo reducir costes sin cargarte la empresa
          </h2>

          <p className="text-gray-600 md:text-lg">
            Reducir costes no es recortar a lo loco. No es eliminar el café de
            la oficina ni dejar de invertir en herramientas necesarias. Reducir
            costes de forma inteligente es eliminar lo que no aporta valor y
            optimizar lo que sí.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Los cuatro tipos de costes en tu empresa
          </h3>
          <ul className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>
                <strong>Costes imprescindibles:</strong> sin ellos la empresa
                no puede funcionar. Materia prima, alquiler del local, salarios
                clave. No los toques salvo que cambies el modelo.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
              <span>
                <strong>Costes optimizables:</strong> son necesarios pero se
                pueden reducir. Seguros que no se renegocian desde hace años,
                contratos de suministro nunca revisados, proveedores con los
                que no se negocia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                <strong>Costes de inversión:</strong> generan retorno futuro.
                Formación, tecnología, marketing medible. No son gasto — son
                siembra. Recortarlos es pan para hoy, hambre para mañana.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
              <span>
                <strong>Costes parásitos:</strong> no aportan valor, están ahí
                por inercia. Suscripciones olvidadas, servicios duplicados,
                seguros redundantes, gastos «porque siempre se ha hecho así».
                Estos hay que eliminarlos sin contemplaciones.
              </span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Plan práctico para recortar inteligente
          </h3>
          <ol className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">1.</span>
              <span>
                Imprime los extractos bancarios de los últimos 6 meses.
                Revisa cada línea. ¿Qué sigue siendo necesario? ¿Qué puedes
                renegociar? ¿Qué puedes eliminar?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">2.</span>
              <span>
                Pide tres presupuestos para cada servicio externo que contratas:
                seguros, telefonía, suministros, limpieza, mantenimiento.
                Negocia o cambia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">3.</span>
              <span>
                Revisa la productividad de tu equipo. ¿Hay tareas que se
                podrían automatizar? ¿Procesos duplicados? ¿Reuniones que no
                producen decisiones? Cada hora improductiva es dinero perdido.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">4.</span>
              <span>
                Analiza las mermas y desperdicios. En producción, en
                almacenaje, en logística. A veces un simple cambio en el
                proceso reduce el desperdicio un 20%.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">5.</span>
              <span>
                Evalúa si hay clientes que te cuestan dinero. Clientes que
                pagan tarde, reclaman mucho, exigen descuentos constantes o
                consumen más recursos de los que pagan.
              </span>
            </li>
          </ol>
          <p className="mt-4 text-gray-600 md:text-lg">
            En mi experiencia, la primera vez que un empresario hace este
            ejercicio a fondo siempre descubre entre un 5% y un 15% de ahorro
            posible en gastos. Dinero que va directo a beneficio sin tocar
            las ventas.
          </p>

          {/* ====================== SECCIÓN 7 ====================== */}
          <h2 id="vender-mejor" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            7. Cómo vender mejor (no solo más)
          </h2>

          <p className="text-gray-600 md:text-lg">
            Vender más no es la solución si cada venta nueva te deja el mismo
            margen raquítico. La clave para mejorar la rentabilidad desde las
            ventas no es solo aumentar volumen. Es vender mejor.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Vender lo que más margen te deja
          </h3>
          <p className="text-gray-600 md:text-lg">
            Cuando hayas hecho el análisis de márgenes del punto anterior,
            sabrás exactamente qué productos o servicios son los más
            rentables. Tu trabajo es dirigir más ventas hacia esas líneas.
            Promociónalas. Destácalas. Facilita su contratación. Si un
            servicio te deja un 60% de margen y otro un 15%, cada hora que
            tu equipo dedica a vender el segundo en vez del primero te está
            costando dinero.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Aumentar el ticket medio
          </h3>
          <p className="text-gray-600 md:text-lg">
            Es más fácil que un cliente que ya te compra gaste un poco más,
            que conseguir un cliente nuevo. Estrategias probadas:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Ofrecer complementos en el momento de la venta
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Crear packs o paquetes con mayor valor percibido
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Versiones premium de tus productos o servicios
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Contratos de mantenimiento o servicio recurrente
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Retener y fidelizar
          </h3>
          <p className="text-gray-600 md:text-lg">
            Conseguir un cliente nuevo cuesta entre 5 y 7 veces más que
            mantener uno existente. Si tu tasa de repetición es baja, tienes
            un problema serio de rentabilidad. Cada cliente que pierdes te
            obliga a gastar más en captación para mantener el mismo nivel
            de ventas. Invertir en la experiencia del cliente, en el
            seguimiento post-venta y en la relación a largo plazo no es un
            lujo — es la inversión más rentable que puedes hacer.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Marketing con retorno medible
          </h3>
          <p className="text-gray-600 md:text-lg">
            No hablamos de «hacer marketing» en abstracto. Hablamos de{" "}
            <a
              href="/blog/como-conseguir-clientes-para-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              invertir en canales que te traigan clientes rentables
            </a>{" "}
            con un coste de adquisición que conozcas y controles. Cada euro
            que inviertes en marketing debe poder atribuirse a un resultado.
            Si{" "}
            <a
              href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              no puedes medir lo que te devuelve, deja de gastar en ello
            </a>.
          </p>

          {/* ====================== SECCIÓN 8 ====================== */}
          <h2 id="casos-reales" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            8. Casos reales de mejora de rentabilidad
          </h2>

          <p className="text-gray-600 md:text-lg">
            No voy a dar nombres — la discreción con mis clientes es
            sagrada — pero sí puedo compartir situaciones reales que
            ilustran cómo se mejora la rentabilidad en la práctica.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Caso 1: Empresa de servicios industriales — «Facturábamos 800.000€ y nos quedaban 18.000€»
          </h3>
          <p className="text-gray-600 md:text-lg">
            Una empresa de mantenimiento industrial con 12 empleados. Gran
            volumen de trabajo, clientes estables, presupuestos constantes.
            Pero el margen neto era del 2,2%.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Diagnóstico:</strong> Los presupuestos no incluían
            correctamente los costes de desplazamiento ni las horas de gestión
            administrativa. Tres de sus cinco servicios principales tenían un
            margen bruto inferior al 20%. Un cliente que representaba el 40%
            de la facturación pagaba a 120 días y exigía precios congelados.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Acciones:</strong> Recalculamos el coste real de cada
            servicio. Subimos precios un 8% con argumentos sólidos — solo
            perdimos un cliente pequeño. Renegociamos las condiciones con el
            cliente grande (90 días en vez de 120 y actualización de tarifas).
            Eliminamos dos servicios que daban margen negativo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Resultado en 12 meses:</strong> Facturación bajó a
            740.000€ — pero el beneficio neto subió a 62.000€. Margen del
            8,4%. El empresario triplicó su beneficio facturando menos.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Caso 2: Tienda especializada — «Vendemos mucho pero no llegamos a fin de mes»
          </h3>
          <p className="text-gray-600 md:text-lg">
            Comercio minorista con buena ubicación y tráfico constante de
            clientes. Facturaba 320.000€ al año. La dueña trabajaba 10 horas
            al día, más fines de semana. No se pagaba sueldo regular.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Diagnóstico:</strong> El 60% de los productos tenían un
            margen bruto inferior al 30%. Muchos artículos se compraban por
            costumbre sin analizar rotación ni margen. El stock muerto
            (productos sin vender en más de 6 meses) representaba 28.000€
            inmovilizados.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Acciones:</strong> Análisis de rentabilidad por producto.
            Eliminación del 30% de referencias con peor rotación y margen.
            Liquidación del stock muerto. Renegociación con proveedores clave.
            Subida selectiva de precios en productos exclusivos (+12%).
            Introducción de servicios de valor añadido.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Resultado en 8 meses:</strong> Facturación bajó a
            280.000€ pero el margen bruto medio subió del 28% al 42%. La
            dueña empezó a pagarse un sueldo de 2.200€/mes y cerró los
            domingos.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Caso 3: Consultoría técnica — «Crecemos pero cada vez ganamos menos»
          </h3>
          <p className="text-gray-600 md:text-lg">
            Empresa de consultoría con 6 técnicos. Había crecido un 35% en
            facturación en dos años contratando más personal. Pero el
            beneficio neto había caído del 12% al 4%.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Diagnóstico:</strong> El crecimiento había sido
            descontrolado. Se aceptaban proyectos de todo tipo sin filtrar por
            rentabilidad. Los nuevos técnicos facturaban menos horas de las
            previstas. Los costes de estructura se habían disparado.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Acciones:</strong> Definimos los tipos de proyecto más
            rentables y nos enfocamos en ellos. Implementamos un{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              sistema de control con indicadores clave
            </a>{" "}
            semanales. Mejoramos la productividad del equipo con mejor{" "}
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="text-accent-600 underline hover:text-accent-700"
            >
              organización de procesos internos
            </a>
            . Rechazamos proactivamente los proyectos de bajo margen.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Resultado en 10 meses:</strong> Facturación se mantuvo
            estable, pero el margen neto volvió al 11%. Se redujeron horas
            extra un 40%.
          </p>

          <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
            <p className="text-gray-700 italic md:text-lg">
              En los tres casos el patrón es el mismo: facturar más no era la
              solución. La solución fue entender los números, tomar decisiones
              difíciles y enfocarse en lo que realmente generaba beneficio.
            </p>
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres ver más ejemplos de sectores donde he trabajado, puedes
            visitar la página de{" "}
            <a
              href="/experiencia-sectores-casos"
              className="text-accent-600 underline hover:text-accent-700"
            >
              experiencia y casos reales de consultoría
            </a>.
          </p>

          {/* ====================== SECCIÓN 9 ====================== */}
          <h2 id="plan-accion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            9. Plan práctico de mejora de rentabilidad en 90 días
          </h2>

          <p className="text-gray-600 md:text-lg">
            Todo lo anterior puede parecer mucho. Pero no necesitas cambiarlo
            todo de golpe. Lo que necesitas es un plan de acción claro, por
            fases, con prioridades definidas. Este es el plan que suelo
            trabajar con mis clientes:
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Días 1 a 15: Diagnóstico y números
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Recopilar datos financieros reales de los últimos 12 meses
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Calcular el margen bruto de cada producto o servicio
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Identificar los gastos fijos y clasificarlos por tipo
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Calcular el margen operativo y neto real
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Detectar las tres principales fugas de rentabilidad
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Días 15 a 45: Acciones de impacto rápido
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Eliminar costes parásitos (ahorro inmediato)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Renegociar los 3-5 proveedores principales
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Ajustar precios en los productos de margen más bajo
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Dejar de ofrecer los productos o servicios que dan pérdidas
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Implantar seguimiento semanal de indicadores clave
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Días 45 a 90: Mejora estructural
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Enfocar el esfuerzo comercial en los productos más rentables
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Optimizar procesos internos para reducir tiempos improductivos
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Revisar la política de cobros (reducir plazos, penalizar impagos)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Trabajar el ticket medio y la recurrencia con clientes actuales
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              Establecer un cuadro de mando mensual con las métricas clave
            </li>
          </ul>

          <div className="my-8 rounded-xl border-2 border-accent-300 bg-accent-50 p-6 not-prose">
            <p className="font-semibold text-primary-900 text-lg">
              ¿Necesitas ayuda con este proceso?
            </p>
            <p className="mt-2 text-gray-700">
              Si prefieres tener a un profesional a tu lado que te guíe paso a
              paso, que analice tus números contigo y te ayude a tomar las
              decisiones correctas, puedes{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700 font-medium"
              >
                solicitar un diagnóstico gratuito de tu negocio
              </a>
              . Sin compromiso. En 30 minutos te digo exactamente dónde están
              tus principales fugas de rentabilidad y qué puedes hacer para
              corregirlas.
            </p>
          </div>

          {/* ====================== SECCIÓN 10 ====================== */}
          <h2 id="conclusion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            10. Conclusión: la rentabilidad no es suerte — es método
          </h2>

          <p className="text-gray-600 md:text-lg">
            La rentabilidad de una empresa no depende de tener suerte, de
            encontrar un mercado fácil ni de que la economía vaya bien. La
            rentabilidad depende de decisiones concretas que tomas cada día:
            qué vendes, a qué precio, con qué costes, a qué clientes y con
            qué estructura.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No es algo que pase por casualidad. Es algo que se construye
            deliberadamente, con información, con criterio y con{" "}
            <a
              href="/blog/como-definir-estrategia-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              una estrategia clara
            </a>.
            He visto empresas en los sectores más difíciles ser muy rentables.
            Y empresas en sectores «fáciles» estar al borde de cerrar. La
            diferencia nunca era el sector. Era cómo se tomaban las{" "}
            <a
              href="/blog/como-tomar-decisiones-en-un-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              decisiones de negocio
            </a>.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si has llegado hasta aquí es porque intuyes que tu empresa puede
            dar más. Y probablemente tengas razón. La mayoría de las pymes
            tienen un margen de mejora de rentabilidad de entre un 30% y un
            100% sin necesidad de aumentar ventas. Solo hace falta mirar los
            números con honestidad y tomar las decisiones que llevas meses
            posponiendo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No lo dejes para mañana. Cada mes que pasa con la estructura
            actual es dinero que se pierde y no se recupera. Empieza hoy
            mismo, aunque sea solo con el primer paso: abre una hoja de
            cálculo y calcula el margen bruto de tus cinco productos
            principales. Ese simple ejercicio puede cambiar la forma en
            que ves tu negocio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y si quieres que alguien te acompañe en este proceso — alguien
            con más de 25 años de experiencia ayudando a empresarios a mejorar
            la rentabilidad de sus negocios — el primer paso es sencillo:{" "}
            <a
              href="/diagnostico-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              solicita un diagnóstico gratuito
            </a>{" "}
            y hablamos.
          </p>

          </article>

          {/* SIDEBAR */}
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-mejorar-rentabilidad-empresa" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres mejorar la rentabilidad de tu empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos los números de tu negocio — márgenes, costes,
            precios, estructura — y diseñamos un plan de acción concreto
            para que cada mes sea más rentable que el anterior.
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

      <BlogNav currentSlug="como-mejorar-rentabilidad-empresa" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y online en toda España
            </strong>{" "}
            y el{" "}
            <a
              href="/metodo-herramientas"
              className="text-accent-600 underline hover:text-accent-700 font-semibold"
            >
              Método Rentabilismo
            </a>.
          </p>
          <a href="/" className="btn-primary mt-6 inline-block">
            Volver a la página principal
          </a>
        </div>
      </section>
    </>
  );
}
