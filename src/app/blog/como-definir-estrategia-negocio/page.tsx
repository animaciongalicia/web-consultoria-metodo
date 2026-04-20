import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo definir la estrategia de tu negocio para dejar de improvisar — Guía completa para pymes | Consultoría Método",
  description:
    "Guía práctica para definir la estrategia de tu negocio: modelo, propuesta de valor, posicionamiento y plan estratégico. Consultor empresarial en Coruña, Galicia y online en toda España.",
  keywords: [
    "estrategia negocio",
    "plan estratégico pyme",
    "modelo de negocio",
    "propuesta de valor",
    "posicionamiento empresa",
    "estrategia empresarial",
    "plan de negocio pyme",
    "dirección estratégica",
    "ventaja competitiva",
    "definir estrategia empresa",
    "consultor empresarial Coruña",
    "consultoría estratégica Galicia",
    "mejora de empresas estrategia",
  ],
  openGraph: {
    title:
      "Cómo definir la estrategia de tu negocio para dejar de improvisar — Guía completa",
    description:
      "Modelo de negocio, propuesta de valor, posicionamiento, plan estratégico simple y revisión anual. Todo lo que una pyme necesita para tener dirección clara.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-definir-estrategia-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo definir la estrategia de tu negocio para dejar de improvisar — Guía completa para pymes",
  description:
    "Guía práctica para definir la estrategia de tu negocio: modelo, propuesta de valor, posicionamiento, plan estratégico simple y revisión anual.",
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
  datePublished: "2025-03-17",
  dateModified: "2025-03-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-definir-estrategia-negocio",
  },
};

export default function ArticuloEstrategia() {
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
            Cómo definir la estrategia de tu negocio para dejar de improvisar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Si te preguntan «¿cuál es la estrategia de tu negocio?» y no
            tienes una respuesta clara de dos frases, tienes un problema.
            No porque seas mal empresario — sino porque estás tomando
            decisiones importantes sin una brújula. Y eso, tarde o temprano,
            se paga.
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
                <span className="text-gray-700 font-medium">Estrategia de negocio</span>
              </li>
            </ol>
          </nav>

          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            La mayoría de las pymes en España no tienen una estrategia. Tienen
            inercia. Hacen lo que hacen porque «siempre se ha hecho así» o
            porque «algo hay que hacer». Y cuando las cosas van bien, la
            inercia disimula. Pero cuando el mercado aprieta, la competencia
            crece o los márgenes bajan, la falta de dirección se nota — y
            duele.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tener estrategia no significa tener un documento de 80 páginas
            guardado en un cajón. Significa tener claro a dónde vas, qué te
            diferencia, para quién trabajas, qué no vas a hacer y cómo vas a
            medir si avanzas. Es, literalmente, la diferencia entre un negocio
            que reacciona y un negocio que decide.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En esta guía vamos a ver qué es (y qué no es) estrategia para una
            pyme, por qué la mayoría no la tienen, cómo construir la tuya paso
            a paso y cómo revisarla para que no se quede en papel mojado. Con
            ejemplos reales, herramientas simples y cero teoría académica.
          </p>

          {/* Índice de contenidos */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50/60 p-6 not-prose">
            <h2 className="text-lg font-bold text-primary-900 mb-4">Índice de contenidos</h2>
            <ol className="space-y-2 text-sm md:text-base text-primary-800">
              <li><a href="#que-es-estrategia" className="hover:text-accent-600 transition-colors">1. Qué es (y qué NO es) estrategia para una pyme</a></li>
              <li><a href="#por-que-no-tienen" className="hover:text-accent-600 transition-colors">2. Por qué la mayoría de pymes no tienen estrategia</a></li>
              <li><a href="#modelo-negocio" className="hover:text-accent-600 transition-colors">3. Tu modelo de negocio: ¿funciona o solo sobrevive?</a></li>
              <li><a href="#propuesta-valor" className="hover:text-accent-600 transition-colors">4. Propuesta de valor: la diferencia entre existir y ser elegido</a></li>
              <li><a href="#posicionamiento" className="hover:text-accent-600 transition-colors">5. Posicionamiento: deja de ser «uno más»</a></li>
              <li><a href="#plan-estrategico" className="hover:text-accent-600 transition-colors">6. Plan estratégico simple: tu estrategia en una página</a></li>
              <li><a href="#errores-estrategicos" className="hover:text-accent-600 transition-colors">7. Los errores estratégicos que más dinero cuestan</a></li>
              <li><a href="#revision" className="hover:text-accent-600 transition-colors">8. Cuándo y cómo revisar tu estrategia</a></li>
              <li><a href="#caso-real" className="hover:text-accent-600 transition-colors">9. Caso real: la clínica dental que dejó de competir en precio</a></li>
              <li><a href="#conclusion" className="hover:text-accent-600 transition-colors">10. Conclusión: sin estrategia, todo lo demás es ruido</a></li>
            </ol>
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Si no sabes a dónde vas, cualquier camino te sirve. Y eso es
            exactamente lo que le pasa a la mayoría de pymes: van, pero no
            saben a dónde.»
          </blockquote>

          {/* ====================== SECCIÓN 1 ====================== */}
          <h2 id="que-es-estrategia" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            1. Qué es (y qué NO es) estrategia para una pyme
          </h2>
          <p className="text-gray-600 md:text-lg">
            Hay mucha confusión con la palabra «estrategia». En las escuelas
            de negocios la rodean de frameworks, matrices y jerga que intimida.
            Pero para una pyme, la estrategia se reduce a responder con
            claridad a cinco preguntas fundamentales:
          </p>

          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-primary-900">
              Las 5 preguntas que definen tu estrategia
            </h3>
            <ol className="mt-4 space-y-4">
              {[
                ["¿Para quién trabajo?", "No «para todo el mundo». Para quién específicamente. Qué tipo de cliente, qué problema tiene, qué necesita."],
                ["¿Qué problema resuelvo?", "No qué servicio ofrezco — qué problema real soluciono. El cliente no compra un servicio, compra la solución a su problema."],
                ["¿Por qué me eligen a mí?", "Qué me hace diferente de forma concreta y demostrable. Si la respuesta es «calidad y buen servicio», no tienes estrategia."],
                ["¿Qué NO voy a hacer?", "Tan importante como lo que haces es lo que decides no hacer. Los negocios que intentan abarcar todo acaban sin foco y sin margen."],
                ["¿Cómo sé si avanzo?", "Qué indicadores miras para saber si vas en la dirección correcta. Sin métricas, la estrategia es un deseo."],
              ].map(([pregunta, respuesta], i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-primary-600 font-bold">{i + 1}.</span>
                  <span>
                    <strong className="text-gray-900">{pregunta}</strong>{" "}
                    {respuesta}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Lo que NO es estrategia
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un plan de marketing no es una estrategia. Un presupuesto anual
            tampoco. Una lista de objetivos genéricos («facturar más», «crecer»,
            «mejorar») no es estrategia — es una carta a los Reyes Magos.
            Estrategia es elegir. Elegir a quién servir, cómo diferenciarte
            y qué dejar de hacer. Y las elecciones implican renuncias, que
            es exactamente lo que la mayoría de empresarios evita.
          </p>

          {/* ====================== SECCIÓN 2 ====================== */}
          <h2 id="por-que-no-tienen" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            2. Por qué la mayoría de pymes no tienen estrategia
          </h2>
          <p className="text-gray-600 md:text-lg">
            No es por falta de inteligencia ni por falta de ganas. Es por una
            combinación de factores que se retroalimentan y que, con los años,
            se convierten en la forma normal de operar.
          </p>

          <div className="my-10 overflow-x-auto not-prose">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Razón</th>
                  <th className="px-4 py-3 font-semibold">Cómo se manifiesta</th>
                  <th className="px-4 py-3 font-semibold">Consecuencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["El día a día te come", "Apagar fuegos se lleva el 100% de tu tiempo. No queda espacio para pensar.", "Tomas decisiones reactivas, no estratégicas"],
                  ["Miedo a elegir", "Si te especializas, ¿pierdes clientes? Si dices que no a algo, ¿te quedas sin ingresos?", "Intentas abarcar todo y no destacas en nada"],
                  ["Falta de datos", "No sabes qué clientes son rentables, qué servicios dan margen, qué canales funcionan.", "Decides por intuición, no por información"],
                  ["Confundes estrategia con plan de negocio", "Crees que si ya facturarás, no necesitas más. La estrategia te parece algo de grandes empresas.", "Navegas sin rumbo hasta que algo falla"],
                  ["Soledad del empresario", "No tienes con quién contrastar ideas. Estás dentro del bosque y no ves el bosque.", "Te quedas atrapado en tu propia perspectiva"],
                ].map(([razon, manifiesta, consecuencia], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{razon}</td>
                    <td className="px-4 py-3 text-gray-600">{manifiesta}</td>
                    <td className="px-4 py-3 text-gray-600">{consecuencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 md:text-lg">
            La buena noticia: definir una estrategia clara para una pyme no
            requiere meses ni consultores caros. Requiere pararte, pensar con
            honestidad y{" "}
            <a href="/blog/como-tomar-decisiones-en-un-negocio" className="text-accent-600 underline hover:text-accent-700">
              tomar unas cuantas decisiones
            </a>{" "}
            que llevas posponiendo.
          </p>

          {/* ====================== SECCIÓN 3 ====================== */}
          <h2 id="modelo-negocio" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            3. Tu modelo de negocio: ¿funciona o solo sobrevive?
          </h2>
          <p className="text-gray-600 md:text-lg">
            Antes de hablar de estrategia, necesitas entender tu modelo de
            negocio actual. No lo que crees que es — lo que realmente es. Un
            modelo de negocio responde a una pregunta brutal: ¿cómo ganas
            dinero exactamente?
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un ejemplo clarísimo de cómo un cambio de modelo transforma un
            negocio es el{" "}
            <a href="/blog/caso-exito-ferrados-transformacion-modelo-negocio" className="text-accent-600 underline hover:text-accent-700">
              caso de un proyecto con miles de visitas y cero ingresos
            </a>{" "}
            que reconvertimos en un sistema rentable. No faltaba tráfico, ni
            contenido, ni audiencia — faltaba modelo. Es un patrón que se
            repite en muchas empresas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Los 4 pilares de un modelo de negocio
          </h3>
          <div className="my-8 grid gap-4 sm:grid-cols-2 not-prose">
            {[
              {
                titulo: "Propuesta de valor",
                texto: "¿Qué ofreces que el cliente valora lo suficiente como para pagar por ello? No tu lista de servicios — tu promesa real.",
              },
              {
                titulo: "Segmento de cliente",
                texto: "¿Quién paga? ¿Qué tipo de cliente genera el 80% de tus ingresos? ¿Todos los clientes son igual de rentables?",
              },
              {
                titulo: "Estructura de costes",
                texto: "¿Cuánto te cuesta entregar lo que vendes? ¿Tus costes fijos son sostenibles? ¿Tu punto de equilibrio está controlado?",
              },
              {
                titulo: "Fuentes de ingreso",
                texto: "¿Dependes de un solo tipo de ingreso? ¿Tienes recurrencia o vives de ventas puntuales? ¿Tus precios cubren los costes reales?",
              },
            ].map((item) => (
              <div key={item.titulo} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900">{item.titulo}</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 md:text-lg">
            Muchas pymes operan con un modelo que funcionó hace 10 años pero
            que hoy ya no da margen suficiente. Si tu{" "}
            <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">
              rentabilidad lleva tiempo estancada
            </a>{" "}
            a pesar de que facturas razonablemente bien, el problema
            probablemente está en el modelo, no en la ejecución.
          </p>

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 not-prose">
            <h3 className="text-lg font-bold text-amber-900">
              Autodiagnóstico rápido de tu modelo
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Responde con sinceridad. Si dices «no» a más de dos, tu modelo
              necesita revisión:
            </p>
            <ul className="mt-4 space-y-3 text-gray-700 md:text-lg">
              {[
                "¿Puedes explicar en una frase cómo ganas dinero?",
                "¿Sabes cuál es tu servicio más rentable (no el que más facturas)?",
                "¿Podrías perder a tu mayor cliente sin que la empresa entre en crisis?",
                "¿Tus precios te permiten pagar todo, incluido tu sueldo real?",
                "¿Tu modelo puede crecer sin que tú trabajes proporcionalmente más horas?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-amber-600">&#9744;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ====================== SECCIÓN 4 ====================== */}
          <h2 id="propuesta-valor" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            4. Propuesta de valor: la diferencia entre existir y ser elegido
          </h2>
          <p className="text-gray-600 md:text-lg">
            La propuesta de valor es la razón por la que un cliente te elige
            a ti en vez de a otro. No es tu eslogan. No es lo que pones en la
            web. Es lo que el cliente percibe que recibe al trabajar contigo
            y que no encuentra en otro sitio.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Propuestas de valor genéricas vs reales
          </h3>
          <div className="my-8 overflow-x-auto not-prose">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Genérica (no funciona)</th>
                  <th className="px-4 py-3 font-semibold">Real (sí funciona)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["«Calidad y buen servicio»", "«Entregamos la reforma terminada en el plazo pactado o te devolvemos el 10% del presupuesto»"],
                  ["«Atención personalizada»", "«Tienes un interlocutor único que responde en menos de 2 horas en horario laboral»"],
                  ["«Los mejores precios»", "«Igualamos cualquier presupuesto comparable y además incluimos 2 años de garantía»"],
                  ["«Experiencia y profesionalidad»", "«Llevamos 15 años especializados solo en impermeabilización de cubiertas. No hacemos otra cosa»"],
                  ["«Soluciones a medida»", "«Analizamos tus datos, diseñamos un plan personalizado y te acompañamos 6 meses en la ejecución»"],
                ].map(([generica, real], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-500 line-through">{generica}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">{real}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 md:text-lg">
            Una propuesta de valor real es específica, concreta, verificable y
            relevante para el cliente. Si la tuya podría copiarla cualquier
            competidor cambiando solo el nombre de la empresa, no tienes
            propuesta de valor — tienes un texto bonito.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Cómo construir tu propuesta de valor en 3 pasos
          </h3>
          <ol className="mt-4 space-y-4">
            {[
              ["Identifica el dolor real del cliente.", "No lo que tú crees que necesita — lo que él siente que le quita el sueño. Habla con tus mejores clientes y pregunta: ¿por qué me elegiste? ¿Qué problema te resolvía?"],
              ["Define qué haces diferente para resolver ese dolor.", <>No basta con resolver el problema — muchos lo hacen. Qué haces tú que el cliente nota y valora. Puede ser tu especialización, tu método, tu garantía, tu velocidad, tu cercanía. Lo que te haga <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">genuinamente diferente</a>.</>],
              ["Exprésalo en una frase que el cliente entienda.", "Sin jerga técnica, sin palabras vacías. Una frase que tu cliente pueda repetir cuando le pregunten «¿por qué trabajas con ellos?»."],
            ].map(([titulo, texto], i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-primary-600 font-bold">{i + 1}.</span>
                <span><strong className="text-gray-900">{titulo}</strong> {texto}</span>
              </li>
            ))}
          </ol>

          {/* ====================== SECCIÓN 5 ====================== */}
          <h2 id="posicionamiento" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            5. Posicionamiento: deja de ser «uno más»
          </h2>
          <p className="text-gray-600 md:text-lg">
            El posicionamiento es el lugar que ocupas en la mente de tu
            cliente. No el que tú quieres ocupar — el que realmente ocupas.
            Y para la mayoría de las pymes, ese lugar es: «uno más». Uno más
            entre muchos que hacen lo mismo. Y cuando eres «uno más», el
            cliente decide por precio. Siempre.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Los 3 ejes del posicionamiento para pymes
          </h3>
          <div className="my-8 grid gap-4 sm:grid-cols-3 not-prose">
            {[
              {
                eje: "Especialización",
                desc: "Ser el referente en algo muy concreto. No haces de todo — haces una cosa mejor que nadie en tu zona o sector.",
                ejemplo: "«Solo hacemos mudanzas de oficinas en Galicia»",
              },
              {
                eje: "Experiencia del cliente",
                desc: "Ofrecer un proceso de trabajo que el cliente valora por encima del resultado en sí. Cómo compra, cómo le tratas, cómo le informas.",
                ejemplo: "«Presupuesto en 24h, obra limpia, comunicación diaria por WhatsApp»",
              },
              {
                eje: "Nicho de mercado",
                desc: "Servir a un tipo de cliente muy específico que tiene necesidades que los generalistas no entienden.",
                ejemplo: "«Asesoría fiscal solo para autónomos del sector creativo»",
              },
            ].map((item) => (
              <div key={item.eje} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-bold text-primary-800">{item.eje}</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                <p className="mt-3 text-xs text-gray-500 italic">{item.ejemplo}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 md:text-lg">
            No necesitas los tres. Con uno bien definido ya dejas de ser «uno
            más». El error es no elegir ninguno y quedarte en tierra de nadie:
            haces de todo, para todos, sin destacar en nada. Eso es
            exactamente la definición de no tener posicionamiento.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «No puedes ser la mejor opción para todo el mundo. Pero puedes
            ser la mejor opción para alguien. Elige bien para quién.»
          </blockquote>

          {/* CTA intermedio */}
          <div className="my-10 rounded-xl border-2 border-accent-300 bg-accent-50 p-6 not-prose">
            <p className="font-semibold text-primary-900 text-lg">
              ¿No tienes clara la dirección de tu negocio?
            </p>
            <p className="mt-2 text-gray-700">
              En un{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700 font-medium"
              >
                diagnóstico gratuito
              </a>{" "}
              analizamos tu modelo, tu posicionamiento y tus oportunidades
              reales. 30 minutos que pueden cambiar la dirección de tu
              empresa.
            </p>
          </div>

          {/* ====================== SECCIÓN 6 ====================== */}
          <h2 id="plan-estrategico" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            6. Plan estratégico simple: tu estrategia en una página
          </h2>
          <p className="text-gray-600 md:text-lg">
            Olvida los documentos de 50 páginas. Una pyme necesita un plan
            estratégico que quepa en una página y que se entienda en 5
            minutos. Si tu estrategia no se puede explicar con claridad en
            una conversación de café, no es una estrategia — es un ejercicio
            teórico.
          </p>

          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-primary-900">
              Tu plan estratégico en una página
            </h3>
            <div className="mt-6 space-y-5">
              {[
                {
                  bloque: "1. Mi cliente ideal",
                  contenido: <>Descripción concreta del cliente para el que trabajas. No «empresas». Qué tipo, qué tamaño, qué problema tiene, dónde está. Y cómo vas a <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">llegar a él de forma sistemática</a>.</>,
                },
                {
                  bloque: "2. El problema que resuelvo",
                  contenido: "No tu servicio — el dolor real del cliente. ¿Qué le quita el sueño? ¿Qué le hace buscar a alguien como tú?",
                },
                {
                  bloque: "3. Mi diferenciación",
                  contenido: "Qué me hace diferente de forma concreta y demostrable. Por qué me eligen a mí y no a otro.",
                },
                {
                  bloque: "4. Mis 2-3 servicios clave",
                  contenido: "No la lista completa — los servicios que concentran el 80% de mi facturación y margen. Lo que hago mejor.",
                },
                {
                  bloque: "5. Lo que NO hago",
                  contenido: "Igual de importante: qué he decidido dejar de hacer, qué tipo de clientes no acepto, qué servicios no ofrezco.",
                },
                {
                  bloque: "6. Mis 3 objetivos a 12 meses",
                  contenido: "Concretos, medibles y realistas. Ejemplo: «Subir el margen bruto del 25% al 32%», «Captar 3 clientes nuevos al mes», «Delegar la producción al 80%».",
                },
                {
                  bloque: "7. Mis indicadores de seguimiento",
                  contenido: <>Los 4-5 <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">indicadores clave</a> que voy a mirar cada mes para saber si avanzo en la dirección correcta.</>,
                },
              ].map((item) => (
                <div key={item.bloque} className="border-b border-primary-200 pb-4 last:border-b-0">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                    {item.bloque}
                  </p>
                  <p className="mt-1 text-gray-700 md:text-lg">{item.contenido}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 md:text-lg">
            Imprímelo. Ponlo en la pared de tu despacho. Que esté visible.
            Que cada vez que tengas que tomar una decisión importante, puedas
            mirar esa página y preguntarte: «¿esto me acerca o me aleja de mi
            estrategia?». Ese es el poder de tener dirección.
          </p>

          {/* ====================== SECCIÓN 7 ====================== */}
          <h2 id="errores-estrategicos" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            7. Los errores estratégicos que más dinero cuestan
          </h2>
          <p className="text-gray-600 md:text-lg">
            Una mala decisión operativa te cuesta dinero. Una mala decisión
            estratégica te puede costar años. Estos son los errores
            estratégicos que he visto destrozar negocios que, por lo demás,
            funcionaban razonablemente bien.
          </p>

          <div className="my-10 space-y-4 not-prose">
            {[
              {
                error: "Crecer sin rumbo",
                desc: "Facturar más sin saber por qué ni hacia dónde. Más clientes, más servicios, más empleados — pero sin dirección. Acabas más grande, más complejo y menos rentable.",
                solucion: "Define primero a dónde quieres llegar y qué tipo de empresa quieres ser. Después crece en esa dirección.",
              },
              {
                error: "Decir sí a todo",
                desc: "Aceptar cualquier cliente, cualquier proyecto, cualquier oportunidad. El miedo a decir no te lleva a dispersarte y a trabajar para clientes que no te interesan a precios que no te convienen.",
                solucion: "Aprende a decir no. Cada «sí» a algo equivocado es un «no» a algo mejor que podría haber llegado.",
              },
              {
                error: "Competir solo en precio",
                desc: <>La forma más rápida de destruir tu negocio. Si tu único argumento es ser más barato, siempre habrá alguien más barato que tú. Y mientras, tus <a href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero" className="text-accent-600 underline hover:text-accent-700">márgenes se desangran</a>.</>,
                solucion: "Compite en valor, no en precio. Diferénciate por lo que haces, cómo lo haces o para quién lo haces.",
              },
              {
                error: "Copiar al competidor sin entender por qué",
                desc: "«Si él hace X, yo también.» Pero no sabes cuánto le cuesta, si le funciona, ni si encaja con tu modelo. Copiar sin criterio es perder identidad y dinero.",
                solucion: "Observa al competidor, pero diseña tu propia estrategia basada en tus fortalezas y tus datos.",
              },
              {
                error: "Ignorar las señales del mercado",
                desc: "Los clientes te dicen cosas con su comportamiento: qué compran, qué no, por qué se van, qué piden. Si no escuchas, te quedas vendiendo lo que ya nadie necesita.",
                solucion: "Habla con tus clientes. Pregunta. Analiza datos. El mercado te da la información — solo tienes que escuchar.",
              },
              {
                error: "No tener una revisión periódica",
                desc: "Defines una estrategia y la guardas en un cajón. El mundo cambia, tú no. En 2 años tu estrategia ya no refleja la realidad.",
                solucion: "Revisa tu estrategia cada trimestre. Ajusta lo que no funciona, refuerza lo que sí.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-red-100 bg-red-50/50 p-5 md:p-6">
                <h3 className="text-base font-bold text-red-900">
                  Error {i + 1}: {item.error}
                </h3>
                <p className="mt-2 text-gray-700 md:text-lg">{item.desc}</p>
                <p className="mt-3 text-gray-900 font-medium md:text-lg">
                  <span className="text-green-700">Alternativa:</span> {item.solucion}
                </p>
              </div>
            ))}
          </div>

          {/* ====================== SECCIÓN 8 ====================== */}
          <h2 id="revision" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            8. Cuándo y cómo revisar tu estrategia
          </h2>
          <p className="text-gray-600 md:text-lg">
            Una estrategia no es un documento estático. Es una herramienta
            viva que necesita revisión regular. El mercado cambia, tú cambias,
            tus clientes cambian. Tu estrategia tiene que adaptarse — pero
            con criterio, no con cada moda.
          </p>

          <div className="my-10 overflow-x-auto not-prose">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Frecuencia</th>
                  <th className="px-4 py-3 font-semibold">Qué revisas</th>
                  <th className="px-4 py-3 font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Mensual", "Indicadores clave: ¿vas en la dirección correcta? ¿Los números cuadran con el plan?", "1 hora"],
                  ["Trimestral", "Objetivos a 12 meses: ¿siguen siendo válidos? ¿Hay que ajustar prioridades? ¿Qué has aprendido?", "Medio día"],
                  ["Anual", "Revisión completa: modelo de negocio, propuesta de valor, posicionamiento, servicios, clientes objetivo. ¿La estrategia sigue vigente?", "1-2 días"],
                  ["Extraordinaria", "Cuando algo cambia radicalmente: pierdes un gran cliente, entra un competidor fuerte, cambia la regulación, surge una oportunidad imprevista.", "Lo que haga falta"],
                ].map(([freq, revisa, duracion], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{freq}</td>
                    <td className="px-4 py-3 text-gray-600">{revisa}</td>
                    <td className="px-4 py-3 text-gray-600">{duracion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 md:text-lg">
            La revisión trimestral es la más importante para una pyme. Es el
            momento de salir del día a día, mirar los números, evaluar si lo
            que estás haciendo tiene sentido y ajustar el rumbo antes de que
            sea tarde. Si no tienes esta disciplina,{" "}
            <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">
              un consultor externo
            </a>{" "}
            puede ayudarte a mantenerla — y a aportar la perspectiva que tú,
            desde dentro, no puedes tener.
          </p>

          {/* ====================== SECCIÓN 9 ====================== */}
          <h2 id="caso-real" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            9. Caso real: la clínica dental que dejó de competir en precio
          </h2>
          <p className="text-gray-600 md:text-lg">
            Una clínica dental en una ciudad mediana de Galicia. Dos
            dentistas, tres empleados. Facturaban 420.000 euros al año pero el
            margen era del 12% — apenas daba para vivir dignamente. El
            problema: hacían de todo (ortodoncia, estética, implantes,
            limpieza, endodoncia) y competían en precio con franquicias que
            ofrecían financiación a 60 meses y primeras visitas gratis.
          </p>

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-amber-900">
              La decisión estratégica
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Después de analizar qué tratamientos daban más margen, cuáles
              generaban más recomendaciones y dónde la competencia low-cost no
              podía llegar, decidieron especializarse en implantología y
              rehabilitación oral completa. Dejaron de hacer ortodoncia
              infantil, dejaron de hacer ofertas en limpieza y dejaron de
              competir con las franquicias.
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              Rediseñaron su propuesta de valor: «Especialistas en implantes
              con garantía de 10 años, cirujano maxilofacial propio y
              seguimiento durante 5 años incluido.» Algo que ninguna
              franquicia podía ofrecer.
            </p>
          </div>

          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-green-900">
              Resultados a los 18 meses
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Facturación: de 420.000 a 510.000 euros con un 30% menos de pacientes. Menos trabajo, más valor por paciente.",
                "Margen: del 12% al 31%. Casi triplicado.",
                "Ticket medio: de 180 euros a 2.800 euros por paciente.",
                "El 70% de nuevos pacientes llegaban por recomendación de otros pacientes satisfechos.",
                "Dejaron de competir en precio. Los pacientes que llegaban no preguntaban «¿cuánto cuesta?» sino «¿cuándo podemos empezar?».",
                "Los dos dentistas recuperaron calidad de vida y dejaron de hacer guardias de urgencias que no pagaban.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-green-800 md:text-lg">
                  <span className="mt-1 font-bold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 md:text-lg">
            La clave no fue trabajar más. Fue elegir. Elegir en qué
            especializarse, para quién trabajar y qué dejar de hacer. Eso es
            estrategia.
          </p>

          {/* ====================== SECCIÓN 10 ====================== */}
          <h2 id="conclusion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            10. Conclusión: sin estrategia, todo lo demás es ruido
          </h2>
          <p className="text-gray-600 md:text-lg">
            Puedes tener el mejor equipo, el mejor producto y el mejor
            marketing. Pero si no sabes a dónde vas, todo ese esfuerzo se
            dispersa. La estrategia es lo que conecta todo lo demás: tu{" "}
            <a href="/blog/como-organizar-empresa-pequena-salir-autoempleo" className="text-accent-600 underline hover:text-accent-700">
              organización interna
            </a>, tu captación de clientes, tu forma de{" "}
            <a href="/blog/como-hacer-crecer-una-empresa-pequena" className="text-accent-600 underline hover:text-accent-700">
              crecer
            </a>. Sin estrategia, cada pieza va por su lado.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas un MBA ni un consultor de estrategia de los caros.
            Necesitas pararte, pensar con honestidad, elegir con valentía y
            ser disciplinado en la ejecución y la revisión. Una página con
            tu estrategia clara vale más que cien reuniones sin rumbo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si sientes que tu negocio va, pero no sabes exactamente a dónde,
            es el momento de definir tu estrategia. Y si necesitas una
            perspectiva externa para verlo con más claridad, un{" "}
            <a href="/diagnostico-negocio" className="text-accent-600 underline hover:text-accent-700">
              diagnóstico de negocio
            </a>{" "}
            es un buen punto de partida. 30 minutos para entender dónde estás
            y hacia dónde tiene sentido ir.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «La estrategia no es lo que dices que vas a hacer. Es lo que
            haces cada día, con cada decisión, con cada euro. Si no la tienes
            clara, cada día improvisas. Y la improvisación es cara.»
          </blockquote>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-definir-estrategia-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio funciona pero no tiene dirección?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            En un diagnóstico de tu negocio analizamos tu modelo, tu
            posicionamiento, tu propuesta de valor y tus oportunidades reales
            de crecimiento. Sin teoría académica — solo claridad y un plan
            de acción concreto.
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

      <BlogNav currentSlug="como-definir-estrategia-negocio" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Descubre nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              Método Rentabilismo y herramientas de estrategia empresarial
            </a>{" "}
            y consulta{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              casos reales de empresas que han definido su estrategia
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
