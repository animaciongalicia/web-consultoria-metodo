import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";

export const metadata: Metadata = {
  title:
    "Por qué tu empresa factura pero no gana dinero | Consultoría Método",
  description:
    "Descubre por qué mi empresa no es rentable a pesar de facturar. Errores habituales, cómo calcular la rentabilidad real y decisiones que mejoran los beneficios de tu pyme.",
  keywords: [
    "por qué mi empresa no es rentable",
    "empresa factura pero no gana dinero",
    "mejorar rentabilidad empresa",
    "rentabilidad pyme",
    "empresa no da beneficios",
    "consultoría rentabilidad empresas",
  ],
  openGraph: {
    title: "Por qué tu empresa factura pero no gana dinero",
    description:
      "Muchas pymes facturan bien pero no ven beneficios. Analizamos los errores más habituales y las decisiones que mejoran la rentabilidad rápidamente.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/por-que-tu-empresa-factura-pero-no-gana-dinero",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Por qué tu empresa factura pero no gana dinero",
  description:
    "Descubre por qué mi empresa no es rentable a pesar de facturar. Errores habituales, cómo calcular la rentabilidad real y decisiones que mejoran los beneficios de tu pyme.",
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
      "https://consultoriametodo.es/blog/por-que-tu-empresa-factura-pero-no-gana-dinero",
  },
};

export default function ArticuloRentabilidad() {
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
            Por qué tu empresa factura pero no gana dinero
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Trabajas más que nunca, facturas más que el año pasado y, sin
            embargo, cuando miras la cuenta del negocio al final de mes, el
            dinero no aparece. Si esto te suena, no estás solo.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios en A Coruña y
            Galicia
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <article className="section-padding bg-white">
        <div className="container-narrow prose prose-lg mx-auto max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Hay una situación que se repite en cientos de pymes y negocios en
            España. El empresario trabaja doce o catorce horas al día. La
            facturación crece — o al menos se mantiene. Pero cuando llega el
            momento de mirar los números reales, los beneficios no están. O son
            tan pequeños que no compensan el esfuerzo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Te levantas pensando en el negocio y te acuestas pensando en el
            negocio. Pagas nóminas, proveedores, alquiler, impuestos, seguros.
            Facturas, sí. Pero al final del mes te preguntas:{" "}
            <strong className="text-gray-900">
              ¿por qué mi empresa no es rentable si estoy vendiendo?
            </strong>
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es una de las preguntas más frecuentes que escucho en las primeras
            conversaciones con empresarios que llegan a mi consultoría. Y la
            respuesta casi nunca es sencilla, pero sí tiene patrones que se
            repiten una y otra vez. Vamos a verlos.
          </p>

          {/* H2 — Errores habituales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Errores habituales que destruyen la rentabilidad
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando una empresa factura pero no gana dinero, rara vez hay una
            sola causa. Lo habitual es que se acumulen varios errores
            silenciosos que, por separado, parecen pequeños, pero juntos se
            comen todo el margen. Estos son los que veo con más frecuencia
            después de más de 25 años trabajando con pymes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. No conocer los márgenes reales de cada producto o servicio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Muchos negocios venden sin saber exactamente cuánto ganan con cada
            venta. Saben el precio al que compran y el precio al que venden,
            pero no incluyen todos los costes intermedios: transporte, mermas,
            tiempo de preparación, comisiones, embalaje, devoluciones. Cuando se
            calcula el margen real — no el teórico — la sorpresa suele ser
            desagradable.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un restaurante puede pensar que su plato estrella le deja un 60% de
            margen, pero cuando incluye desperdicios, coste de personal de
            cocina y tiempo de preparación, ese margen baja al 25%. Y si encima
            es el plato más pedido, la pérdida se multiplica cada día.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Fijar precios mirando a la competencia en vez de a los números
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Este es uno de los errores más peligrosos. Poner precios porque «el
            de al lado cobra esto» es una forma segura de destruir tu
            rentabilidad. Tu competidor puede tener un alquiler más bajo, menos
            empleados, una estructura de costes completamente diferente a la
            tuya. Copiar su precio sin conocer tu propia estructura es trabajar a
            ciegas.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los precios deben construirse desde dentro hacia fuera: primero tus
            costes, después tu margen objetivo y luego el precio final. Si el
            mercado no acepta ese precio, el problema no es el precio — es tu
            estructura de costes o tu propuesta de valor. Pero al menos lo
            sabrás.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Confundir facturación con beneficio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Facturar 500.000 euros al año no significa ganar 500.000 euros. Parece
            obvio, pero es sorprendente cuántos empresarios toman decisiones
            basándose en la facturación en lugar del beneficio neto. Contratan
            más personal porque «estamos facturando mucho», amplían el local,
            compran maquinaria, abren una segunda sede. Sin verificar antes si
            el negocio actual genera suficiente beneficio para sostener esa
            inversión.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Crecer en facturación es relativamente fácil si bajas precios o
            aceptas cualquier cliente. Crecer en rentabilidad requiere
            disciplina, números claros y decisiones que a veces duelen.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Tener demasiados gastos fijos sin control
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Suscripciones que nadie usa. Software que se contrató hace tres años
            y ya no aporta. Un local más grande de lo necesario. Personal en
            funciones que podrían automatizarse o externalizarse. Los gastos
            fijos son como una gotera: si no los revisas periódicamente, se
            acumulan sin que te des cuenta y cuando quieres reaccionar ya te han
            inundado la cuenta de resultados.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. No medir, no analizar, no revisar
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Muchas pymes funcionan «a ojo». El empresario tiene una sensación
            general de cómo va el negocio, pero no revisa los números cada mes.
            No sabe cuál es su punto de equilibrio, no controla los KPIs básicos,
            no compara un mes con otro. Sin medición no hay gestión. Y sin
            gestión, la rentabilidad se escapa por grietas que ni siquiera ves.
          </p>

          {/* H2 — Cómo calcular */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo calcular si tu negocio realmente gana dinero
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de buscar soluciones, necesitas saber dónde estás. Y para eso
            hacen falta números, no sensaciones. Hay tres cálculos básicos que
            todo empresario debería tener claros cada mes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Margen bruto real
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la diferencia entre lo que ingresas y lo que te cuesta
            directamente generar ese ingreso (materias primas, mano de obra
            directa, costes de producción). Si tu margen bruto es bajo, da
            igual cuánto vendas: nunca tendrás beneficio suficiente para cubrir
            los gastos fijos y que sobre algo para ti.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un margen bruto sano varía por sector, pero como referencia: en
            hostelería debería estar entre el 65% y el 75%, en comercio entre
            el 40% y el 60%, en servicios profesionales por encima del 50%.
            Si estás por debajo, tienes un problema de costes directos o de
            precios.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Punto de equilibrio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la cifra de facturación a partir de la cual empiezas a ganar
            dinero. Por debajo, pierdes. Por encima, ganas. Calcularlo es más
            sencillo de lo que parece: divide tus gastos fijos mensuales entre
            tu porcentaje de margen bruto. Si tus gastos fijos son 8.000 euros
            al mes y tu margen bruto es del 60%, necesitas facturar al menos
            13.333 euros al mes solo para no perder dinero.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Conocer tu punto de equilibrio te permite tomar decisiones con
            criterio. Si estás justo en el límite, sabes que cualquier imprevisto
            te pone en pérdidas. Y si estás muy por encima, sabes que tienes
            margen para invertir o para decir no a clientes que no te interesan.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Beneficio neto real (lo que queda para ti)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Después de pagar todos los costes directos, todos los gastos fijos,
            los impuestos y las amortizaciones, ¿cuánto queda? Ese es tu
            beneficio neto real. Si ese número es cero — o negativo — tienes un
            problema serio por mucho que factures. Y si es positivo pero
            ridículamente pequeño en proporción a las horas que dedicas, tienes
            que preguntarte si tu negocio te está pagando lo que mereces o si
            estás trabajando gratis.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un ejercicio brutal pero necesario: divide tu beneficio neto anual
            entre las horas que trabajas al año. Si el resultado es inferior al
            salario medio de un empleado de tu sector, algo falla. Eres el
            dueño, asumes todo el riesgo y cobras menos que alguien que ficha a
            las ocho y se va a las tres. Esa situación no es sostenible.
          </p>

          {/* H2 — Decisiones */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Decisiones que mejoran la rentabilidad rápidamente
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La buena noticia es que, en muchos casos, la rentabilidad de un
            negocio puede mejorar significativamente en pocas semanas con
            decisiones claras y bien orientadas. No se trata de fórmulas
            mágicas, sino de dejar de hacer cosas que te cuestan dinero y
            empezar a hacer las que te lo generan.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Revisa y ajusta tus precios
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la palanca más potente y la que más miedo da. Subir precios un
            10% puede suponer duplicar el beneficio neto sin vender ni una
            unidad más. Haz los números. Si pierdes un 5% de clientes pero
            ganas un 10% más por cada venta, sigues ganando. Y normalmente los
            clientes que pierdes por precio son los que más problemas te dan y
            menos margen te dejan.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Elimina productos o servicios que no son rentables
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No todo lo que vendes te hace ganar dinero. Analiza cada línea de
            producto o servicio con sus costes reales. Si hay productos que te
            cuestan más de lo que te aportan — en dinero, en tiempo, en
            complejidad operativa — elimínalos o súbeles el precio. Menos
            catálogo, más margen. Menos dispersión, más foco.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Renegocia con proveedores
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            ¿Cuándo fue la última vez que revisaste las condiciones con tus
            proveedores? Muchos empresarios mantienen los mismos proveedores
            durante años sin comparar ni renegociar. Pide presupuestos
            alternativos, negocia volúmenes, revisa plazos de pago. Un ahorro
            del 5% en compras va directo al beneficio.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Recorta gastos que no generan retorno
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Haz una auditoría de todos tus gastos fijos y pregúntate por cada
            uno: ¿esto contribuye directamente a generar ingresos o a mejorar
            la operación del negocio? Si la respuesta es no, elimínalo o
            búscale alternativa. Suscripciones innecesarias, herramientas
            duplicadas, gastos «por si acaso». Todo eso son fugas silenciosas
            de rentabilidad.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Céntrate en los clientes que más margen te dejan
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No todos los clientes valen lo mismo. Seguramente el 20% de tus
            clientes genera el 80% de tu beneficio. Identifica quiénes son,
            cuida la relación con ellos, ofréceles más valor y dedica menos
            energía a los que te dan problemas, pagan tarde y regatean cada
            euro. La rentabilidad mejora cuando dejas de intentar servir a
            todo el mundo.
          </p>

          {/* H2 — Cuándo pedir ayuda */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo pedir ayuda externa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hay un momento en el que un empresario ha leído artículos, ha
            probado cosas por su cuenta, ha intentado recortar aquí y ajustar
            allá, pero sigue sin ver resultados claros. Y eso no significa que
            sea mal empresario. Significa que está demasiado dentro del
            problema para verlo con perspectiva.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un consultor de negocios externo no tiene las ataduras emocionales
            que tú tienes con tu empresa. No tiene miedo a subir precios porque
            no conoce a los clientes de toda la vida. No tiene apego a un
            producto que no funciona porque no lo inventó él. Ve los números
            fríos, identifica los problemas reales y propone soluciones
            prácticas basadas en lo que funciona.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pedir ayuda tiene sentido cuando:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Llevas meses sintiéndote atrapado en la misma situación.",
              "Facturas pero no ves beneficios y no entiendes por qué.",
              "Sabes que hay cosas que mejorar pero no tienes claro por dónde empezar.",
              "No tienes tiempo para pararte a analizar el negocio en profundidad.",
              "Necesitas a alguien que te diga la verdad sin filtros ni intereses ocultos.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 md:text-lg">
            En mi consultoría trabajo exactamente así. Me siento contigo, miro
            los números de tu negocio, identifico dónde se está escapando la
            rentabilidad y te propongo un plan de acción concreto. Sin teoría
            vacía, sin informes decorativos, sin promesas mágicas. Solo
            decisiones claras que producen resultados medibles.
          </p>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: facturar no es ganar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si has llegado hasta aquí, probablemente te has reconocido en más
            de un punto. Y eso no es malo — es el primer paso. Porque el
            problema más peligroso no es que tu empresa no sea rentable. El
            problema más peligroso es no saberlo, o saberlo y no hacer nada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La rentabilidad no llega sola por facturar más. Llega por tomar las
            decisiones correctas: en precios, en costes, en clientes, en
            procesos y en foco. Y cuanto antes empieces, antes dejarás de
            trabajar para pagar facturas y empezarás a trabajar para construir
            el negocio que quieres tener.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cada mes que pasa sin revisar la estructura de tu negocio es dinero
            que se pierde. No se trata de trabajar más horas — se trata de
            trabajar con más claridad y con mejores decisiones. Y para eso, a
            veces, necesitas a alguien que mire desde fuera lo que tú ya no
            puedes ver desde dentro.
          </p>
        </div>
      </article>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber por qué tu negocio no es rentable?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Solicita un diagnóstico de tu negocio. Analizamos juntos los números,
            identificamos los problemas reales y diseñamos un plan de acción
            concreto para mejorar tu rentabilidad.
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

      <BlogNav currentSlug="por-que-tu-empresa-factura-pero-no-gana-dinero" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios en A Coruña y Galicia
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
