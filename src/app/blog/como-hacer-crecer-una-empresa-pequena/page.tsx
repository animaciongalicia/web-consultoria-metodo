import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo hacer crecer una empresa paso a paso — Guía completa de crecimiento empresarial para pymes | Consultoría Método",
  description:
    "Guía práctica para hacer crecer tu empresa: fases de crecimiento, errores al escalar, cuándo invertir y cuándo contratar. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "crecer empresa",
    "escalar negocio",
    "empresa estancada",
    "estrategia crecimiento empresarial",
    "cómo hacer crecer una empresa pequeña",
    "plan de crecimiento empresa",
    "fases crecimiento empresa",
    "cuándo contratar empleados",
    "cuándo invertir en el negocio",
    "escalar un negocio pequeño",
    "consultoría empresarial A Coruña",
    "mejora de empresas Galicia",
    "consultor crecimiento empresas",
  ],
  openGraph: {
    title:
      "Cómo hacer crecer una empresa paso a paso — Guía completa de crecimiento empresarial",
    description:
      "Fases de crecimiento, errores al escalar, cuándo invertir, cuándo contratar, nuevas líneas de negocio, mentalidad empresarial y plan real de crecimiento para pymes.",
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
    "Cómo hacer crecer una empresa paso a paso — Guía completa de crecimiento empresarial para pymes",
  description:
    "Guía práctica para hacer crecer tu empresa: fases de crecimiento, errores al escalar, cuándo invertir, cuándo contratar, nuevas líneas y plan real de crecimiento.",
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
            Cómo hacer crecer una empresa paso a paso (sin improvisar ni
            arriesgar todo)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Hubo un tiempo en que tu negocio crecía. Los clientes llegaban, la
            facturación subía, había energía. Pero en algún momento todo se
            detuvo. Trabajas igual o más, pero los resultados ya no mejoran.
            Esta guía es para salir de ahí — con método, no con suerte.
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
                <span className="text-gray-700 font-medium">Cómo hacer crecer una empresa</span>
              </li>
            </ol>
          </nav>

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
            <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">falta
            de estrategia</a> que se disimula con esfuerzo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En esta guía vamos a ver las fases reales del crecimiento
            empresarial, los errores que cometen la mayoría de pymes al
            intentar escalar, cuándo es el momento de invertir, de contratar
            y de abrir nuevas líneas — y cómo construir un plan de
            crecimiento real que funcione en la práctica, no solo en un
            PowerPoint.
          </p>

          {/* Índice de contenidos */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50/60 p-6 not-prose">
            <h2 className="text-lg font-bold text-primary-900 mb-4">Índice de contenidos</h2>
            <ol className="space-y-2 text-sm md:text-base text-primary-800">
              <li><a href="#fases-crecimiento" className="hover:text-accent-600 transition-colors">1. Las fases reales del crecimiento de una empresa</a></li>
              <li><a href="#por-que-estancada" className="hover:text-accent-600 transition-colors">2. Por qué tu empresa se ha estancado (las causas reales)</a></li>
              <li><a href="#errores-al-crecer" className="hover:text-accent-600 transition-colors">3. Errores que cometen las empresas al intentar crecer</a></li>
              <li><a href="#cuando-invertir" className="hover:text-accent-600 transition-colors">4. Cuándo invertir en tu negocio (y cuándo no)</a></li>
              <li><a href="#cuando-contratar" className="hover:text-accent-600 transition-colors">5. Cuándo contratar (y cómo no equivocarse)</a></li>
              <li><a href="#nuevas-lineas" className="hover:text-accent-600 transition-colors">6. Cuándo abrir nuevas líneas de negocio</a></li>
              <li><a href="#mentalidad" className="hover:text-accent-600 transition-colors">7. La mentalidad que necesita un empresario para crecer</a></li>
              <li><a href="#plan-crecimiento" className="hover:text-accent-600 transition-colors">8. Plan real de crecimiento en 6 pasos</a></li>
              <li><a href="#caso-real" className="hover:text-accent-600 transition-colors">9. Caso real: la empresa de reformas que creció un 36% haciendo menos cosas</a></li>
              <li><a href="#conclusion" className="hover:text-accent-600 transition-colors">10. Conclusión: crecer no es cuestión de suerte</a></li>
            </ol>
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Un negocio estancado no necesita más esfuerzo. Necesita una
            dirección diferente.»
          </blockquote>

          {/* ====================== SECCIÓN 1 ====================== */}
          <h2 id="fases-crecimiento" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            1. Las fases reales del crecimiento de una empresa
          </h2>
          <p className="text-gray-600 md:text-lg">
            El crecimiento de una empresa no es lineal. No es una línea recta
            que sube año tras año. Es una curva con fases muy distintas, y cada
            fase tiene sus propios retos, sus propias reglas y sus propias
            trampas. Entender en qué fase estás es el primer paso para saber
            qué necesitas.
          </p>

          <div className="my-10 overflow-x-auto not-prose">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Fase</th>
                  <th className="px-4 py-3 font-semibold">Qué ocurre</th>
                  <th className="px-4 py-3 font-semibold">Reto principal</th>
                  <th className="px-4 py-3 font-semibold">Error típico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Arranque (0-2 años)", "Captar los primeros clientes, validar el modelo", "Sobrevivir y generar ingresos estables", "Gastar antes de validar"],
                  ["Aceleración (2-5 años)", "Los clientes llegan, la facturación sube", "Organizar sin perder agilidad", "Crecer sin estructura"],
                  ["Meseta (5-10 años)", "La facturación se estanca, todo cuesta más", "Reinventarse sin destruir lo que funciona", "Seguir haciendo lo mismo esperando resultados diferentes"],
                  ["Expansión o declive", "O escalas con método o empiezas a perder", "Tomar decisiones estratégicas difíciles", "No decidir (que también es decidir)"],
                ].map(([fase, ocurre, reto, error], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{fase}</td>
                    <td className="px-4 py-3 text-gray-600">{ocurre}</td>
                    <td className="px-4 py-3 text-gray-600">{reto}</td>
                    <td className="px-4 py-3 text-gray-600">{error}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 md:text-lg">
            La mayoría de las empresas que llegan a mi consultoría están en la
            fase de meseta. Han alcanzado un nivel de facturación y se han
            quedado ahí, sin saber cómo dar el siguiente paso. Lo que funcionó
            para llegar hasta aquí no es lo que necesitan para ir más allá.
          </p>

          {/* ====================== SECCIÓN 2 ====================== */}
          <h2 id="por-que-estancada" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            2. Por qué tu empresa se ha estancado (las causas reales)
          </h2>
          <p className="text-gray-600 md:text-lg">
            Las razones del estancamiento son casi siempre las mismas. No son
            espectaculares ni dramáticas. Son errores silenciosos que se
            acumulan hasta que bloquean cualquier posibilidad de avance.
          </p>

          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-primary-900">
              Las 6 causas más habituales del estancamiento
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                ["Dependencia del dueño", <>El negocio no funciona si tú no estás. <a href="/blog/como-organizar-empresa-pequena-salir-autoempleo" className="text-accent-600 underline hover:text-accent-700">Eso te convierte en el techo</a> de tu propia empresa.</>],
                ["Modelo agotado", "Lo que funcionó los primeros años ya no da más de sí. El mercado ha cambiado, la competencia ha crecido, pero tú sigues haciendo lo mismo."],
                ["Falta de captación sistemática", <><a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">No captas clientes nuevos</a> con regularidad. Vives de los de siempre y cuando pierdes uno, lo notas.</>],
                ["Dispersión", "Haces demasiadas cosas, para demasiados tipos de clientes, con demasiados servicios. Mucho catálogo, poco foco."],
                ["No invertir en lo que genera retorno", <>Recortas en marketing, en formación, en herramientas — justo en lo que podría impulsar el crecimiento. Si tu <a href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio" className="text-accent-600 underline hover:text-accent-700">publicidad no funciona</a>, el problema no es invertir — es cómo inviertes.</>],
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

          <p className="text-gray-600 md:text-lg">
            Si te reconoces en dos o tres de estos puntos, es exactamente lo
            normal. El estancamiento no llega por un gran error, sino por la
            acumulación de inercias. La clave es identificarlas y actuar antes
            de que la meseta se convierta en declive.
          </p>

          {/* ====================== SECCIÓN 3 ====================== */}
          <h2 id="errores-al-crecer" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            3. Errores que cometen las empresas al intentar crecer
          </h2>
          <p className="text-gray-600 md:text-lg">
            Tan peligroso como no crecer es crecer mal. He visto muchas
            empresas que, en su intento de escalar, han acabado peor que cuando
            estaban estancadas. Estos son los errores más frecuentes:
          </p>

          <div className="my-10 overflow-x-auto not-prose">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Error</th>
                  <th className="px-4 py-3 font-semibold">Qué pasa cuando lo cometes</th>
                  <th className="px-4 py-3 font-semibold">Qué hacer en su lugar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Crecer sin estructura", "Más facturación pero más caos, más estrés y menos margen", "Primero organiza, después crece"],
                  ["Contratar por urgencia", "Empleados que no encajan, rotación alta, coste oculto enorme", "Contrata por estrategia, no por emergencia"],
                  ["Abrir líneas sin validar", "Dispersas recursos en algo que no sabes si funcionará", "Valida primero a pequeña escala"],
                  ["Copiar al competidor", "Pierdes tu identidad y acabas compitiendo en precio", "Diferénciate, no copies"],
                  ["Invertir antes de medir", "No sabes qué funciona y tiras dinero a ciegas", "Mide primero, invierte después"],
                  ["Crecer en facturación pero no en margen", "Trabajas más pero ganas igual o menos", "Enfócate en rentabilidad, no solo en ventas"],
                  ["No delegar al crecer", "Tú te conviertes en el cuello de botella del crecimiento", "Delega antes de necesitarlo"],
                ].map(([error, consecuencia, alternativa], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{error}</td>
                    <td className="px-4 py-3 text-gray-600">{consecuencia}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">{alternativa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Crecer no es facturar más. Crecer es ganar más, trabajar mejor
            y tener un negocio más sólido. Si solo sube la facturación pero
            baja el margen, no estás creciendo — estás corriendo más rápido
            en la rueda del hámster.»
          </blockquote>

          {/* ====================== SECCIÓN 4 ====================== */}
          <h2 id="cuando-invertir" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            4. Cuándo invertir en tu negocio (y cuándo no)
          </h2>
          <p className="text-gray-600 md:text-lg">
            La inversión es uno de los temas que más ansiedad genera en los
            empresarios. ¿Invierto ahora o espero? ¿Cuánto? ¿En qué? La
            respuesta nunca es sencilla, pero hay criterios claros que te
            ayudan a decidir.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Invierte cuando se cumplan estas tres condiciones
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Tienes datos que respaldan la inversión. No inviertas por intuición — invierte porque los números te dicen que hay demanda, que hay margen y que el retorno es razonable.",
              "Ya has optimizado lo que tienes. Antes de gastar dinero en algo nuevo, asegúrate de que estás sacando el máximo de lo que ya tienes. A menudo, mejorar la rentabilidad de lo existente es más rentable que abrir algo nuevo.",
              "Puedes asumir la inversión sin poner en riesgo la supervivencia. Nunca inviertas dinero que necesitas para operar. El colchón de tesorería es sagrado.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 md:text-lg"
              >
                <span className="mt-1 text-green-600 font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            No inviertas cuando...
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Lo haces por miedo a quedarte atrás («todos mis competidores están en redes sociales»).",
              "No puedes medir el retorno de la inversión de ninguna forma.",
              "Estás intentando resolver un problema de modelo de negocio con dinero.",
              "Tu flujo de caja ya está al límite y tendrías que endeudarte para hacerlo.",
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

          <p className="mt-6 text-gray-600 md:text-lg">
            La mejor inversión que puede hacer una pyme no suele ser la más
            cara. A menudo es mejorar un proceso,{" "}
            <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
              ajustar los precios
            </a>, formar al equipo o contratar una hora de consultoría que te
            da claridad sobre los siguientes pasos. No siempre se necesita
            dinero — a veces se necesita dirección.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un ejemplo de cambio de modelo sin inversión enorme: el{" "}
            <a href="/blog/caso-exito-ferrados-transformacion-modelo-negocio" className="text-accent-600 underline hover:text-accent-700">
              caso de un proyecto con mucho tráfico y ningún ingreso
            </a>{" "}
            que reconvertimos en un sistema rentable de captación. No fue una
            cuestión de más presupuesto — fue una cuestión de modelo.
          </p>

          {/* ====================== SECCIÓN 5 ====================== */}
          <h2 id="cuando-contratar" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            5. Cuándo contratar (y cómo no equivocarse)
          </h2>
          <p className="text-gray-600 md:text-lg">
            Contratar es la decisión más cara y más difícil de revertir que
            puede tomar un empresario. Una mala contratación no solo cuesta
            dinero — cuesta tiempo, energía y a veces clientes. Por eso es
            fundamental contratar en el momento correcto y por las razones
            correctas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Señales de que necesitas contratar
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Estás rechazando trabajo de forma recurrente por falta de
            capacidad. Tu equipo está sobrecargado y la calidad empieza a
            bajar. Tú estás dedicando más del 70% de tu tiempo a tareas
            operativas que podría hacer otro. Los{" "}
            <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
              indicadores de tu empresa
            </a>{" "}
            muestran demanda estable durante al menos 3-6 meses.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Señales de que NO debes contratar (todavía)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Lo que necesitas es organizar mejor lo que ya tienes, no más
            manos. Estás contratando para resolver un pico puntual, no una
            necesidad sostenida. No tienes claro qué va a hacer exactamente
            esa persona ni cómo vas a medir si rinde. No puedes pagar 6 meses
            de nómina con la tesorería actual sin poner en riesgo la empresa.
          </p>

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 not-prose">
            <h3 className="text-lg font-bold text-amber-900">
              Antes de contratar, hazte estas 3 preguntas
            </h3>
            <ol className="mt-4 space-y-3 text-gray-700 md:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-amber-600 font-bold">1.</span>
                <span>¿Puedo resolver esto con procesos o tecnología en vez de con una persona?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-amber-600 font-bold">2.</span>
                <span>¿Puedo externalizar esta función en lugar de internalizar (autónomos, freelances, servicios)?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-amber-600 font-bold">3.</span>
                <span>¿Si contrato, tengo claro el puesto, las funciones, los resultados esperados y cómo voy a medir su rendimiento?</span>
              </li>
            </ol>
          </div>

          {/* CTA intermedio */}
          <div className="my-10 rounded-xl border-2 border-accent-300 bg-accent-50 p-6 not-prose">
            <p className="font-semibold text-primary-900 text-lg">
              ¿Tu empresa necesita crecer pero no sabes por dónde empezar?
            </p>
            <p className="mt-2 text-gray-700">
              En un{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700 font-medium"
              >
                diagnóstico gratuito
              </a>{" "}
              analizamos juntos dónde estás, identificamos las oportunidades de
              crecimiento reales y diseñamos los primeros pasos concretos. 30
              minutos sin compromiso.
            </p>
          </div>

          {/* ====================== SECCIÓN 6 ====================== */}
          <h2 id="nuevas-lineas" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            6. Cuándo abrir nuevas líneas de negocio
          </h2>
          <p className="text-gray-600 md:text-lg">
            Abrir una nueva línea de negocio es tentador cuando sientes que el
            crecimiento se ha estancado. «Si vendiera también X, facturaría
            más.» Pero abrir líneas sin criterio es una de las formas más
            rápidas de destruir la rentabilidad de lo que ya funciona.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Abre una nueva línea cuando...
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Tus clientes actuales te la están pidiendo. No tienes que adivinar — ya hay demanda real.",
              "Es complementaria a lo que ya haces. Aprovechas tu equipo, tu marca, tu base de clientes.",
              "La has validado a pequeña escala. Has hecho 5-10 ventas piloto y los números cuadran.",
              "No canibaliza tu negocio principal. La nueva línea suma, no resta.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-green-600 font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            No abras una nueva línea cuando...
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Lo haces porque tu negocio principal no funciona. Primero arregla lo que tienes.",
              "Requiere competencias completamente nuevas que no dominas.",
              "Necesita una inversión que compromete tu tesorería.",
              "Te dispersa de lo que ya funciona y te quita foco.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-red-500 font-bold">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 md:text-lg">
            La regla de oro: antes de añadir, optimiza. Muchas veces, la mejor
            forma de crecer no es hacer cosas nuevas sino hacer mucho mejor lo
            que ya haces.{" "}
            <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
              Diferenciarte
            </a>{" "}
            en tu especialidad suele ser más rentable que diversificar
            sin criterio.
          </p>

          {/* ====================== SECCIÓN 7 ====================== */}
          <h2 id="mentalidad" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            7. La mentalidad que necesita un empresario para crecer
          </h2>
          <p className="text-gray-600 md:text-lg">
            Puedes tener el mejor plan del mundo, pero si tu mentalidad no
            está preparada para crecer, te autoboicotearás sin darte cuenta.
            El crecimiento empresarial no es solo un reto operativo — es un
            reto personal. Requiere cambiar la forma en que piensas sobre tu
            negocio y sobre tu rol en él.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            De técnico a director
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La mayoría de los empresarios empezaron como técnicos excelentes
            en su oficio: un buen fontanero, un buen diseñador, un buen
            cocinero. Pero dirigir una empresa que crece requiere habilidades
            diferentes: pensar en estrategia, gestionar personas,{" "}
            <a href="/blog/como-tomar-decisiones-en-un-negocio" className="text-accent-600 underline hover:text-accent-700">
              tomar decisiones
            </a>{" "}
            difíciles, delegar. El salto de técnico a director es el cambio
            mental más importante que puedes hacer como empresario.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Pensar a 12 meses, no a 12 días
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cuando estás atrapado en lo operativo, toda tu energía se va en
            resolver los problemas de esta semana. Pero el crecimiento
            requiere pensar en lo que quieres dentro de un año y trabajar
            hacia eso, aunque el día a día empuje en otra dirección. Reservar
            tiempo cada semana para pensar en estrategia — aunque sean solo
            2 horas — cambia completamente la trayectoria de tu negocio.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Aceptar la incomodidad del cambio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Crecer es incómodo. Significa hacer cosas que no has hecho antes,
            soltar control, confiar en otras personas, asumir riesgos
            calculados. Si solo haces lo que te resulta cómodo, te quedarás
            exactamente donde estás. Las empresas que crecen son las que
            toman decisiones incómodas en el momento adecuado.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Buscar perspectiva externa
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los problemas que te tienen atascado no los vas a resolver con
            la misma forma de pensar que los creó. Habla con otros
            empresarios, busca un mentor, contrata un{" "}
            <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">
              consultor de negocios
            </a>. No para que te digan qué hacer, sino para que te ayuden
            a ver tu negocio desde un ángulo que tú, desde dentro, no puedes
            ver.
          </p>

          {/* ====================== SECCIÓN 8 ====================== */}
          <h2 id="plan-crecimiento" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            8. Plan real de crecimiento en 6 pasos
          </h2>
          <p className="text-gray-600 md:text-lg">
            No necesitas un documento de 50 páginas. Necesitas un plan claro,
            realista y ejecutable. Aquí tienes uno que puedes empezar esta
            misma semana.
          </p>

          <div className="my-10 space-y-6 not-prose">
            {[
              {
                paso: "Paso 1 — Diagnóstico",
                titulo: "Analiza dónde estás realmente",
                texto: "Mira tus números con honestidad: facturación por servicio, margen por cliente, gastos fijos, punto de equilibrio. ¿Qué funciona? ¿Qué no? ¿Dónde se escapa la rentabilidad? Sin este diagnóstico, cualquier plan es un castillo en el aire.",
              },
              {
                paso: "Paso 2 — Foco",
                titulo: "Elige en qué vas a concentrar tu energía",
                texto: "De todo lo que haces, ¿qué es lo más rentable, lo que más te diferencia y lo que mejor sabes hacer? Elige una o dos líneas de crecimiento y pon toda tu energía ahí. Lo demás, mantenlo o elimínalo.",
              },
              {
                paso: "Paso 3 — Diferenciación",
                titulo: "Define qué te hace diferente (de verdad)",
                texto: "«Calidad» y «buen servicio» no son diferenciadores — todo el mundo dice lo mismo. Tu diferenciación tiene que ser concreta, demostrable y relevante. ¿Tu especialización? ¿Tu garantía? ¿Tu método? Si no puedes explicar en una frase por qué elegirte a ti, tienes un problema.",
              },
              {
                paso: "Paso 4 — Estructura",
                titulo: "Organiza tu empresa para soportar el crecimiento",
                texto: "Procesos documentados, equipo con responsabilidades claras, sistemas de delegación que funcionen sin ti. Si no tienes estructura, cada euro de facturación extra genera más caos en vez de más beneficio.",
              },
              {
                paso: "Paso 5 — Captación",
                titulo: "Monta un sistema para atraer clientes nuevos",
                texto: "Al menos dos canales activos que funcionen mes a mes: presencia online local, alianzas, marketing de contenidos, red de contactos, publicidad local. Un sistema, no un esfuerzo puntual.",
              },
              {
                paso: "Paso 6 — Revisión mensual",
                titulo: "Ejecuta el plan y mide resultados cada mes",
                texto: "Cada mes, revisa los indicadores clave: ¿están mejorando? ¿El foco da resultados? ¿La captación funciona? Si algo no funciona, ajústalo rápido. Si funciona, potencialo. La disciplina de medir y ajustar cada mes es lo que separa a las empresas que crecen de las que se estancan.",
              },
            ].map((item) => (
              <div key={item.paso} className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                  {item.paso}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-gray-600 md:text-lg">{item.texto}</p>
              </div>
            ))}
          </div>

          {/* Tabla resumen del plan */}
          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-primary-900">
              Resumen del plan en una tabla
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="pb-2 pr-4 font-semibold text-primary-900">Paso</th>
                    <th className="pb-2 pr-4 font-semibold text-primary-900">Acción</th>
                    <th className="pb-2 font-semibold text-primary-900">Resultado esperado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
                  {[
                    ["Diagnóstico", "Analizar números reales por servicio y cliente", "Saber exactamente dónde estás"],
                    ["Foco", "Elegir 1-2 líneas de crecimiento prioritarias", "Concentrar energía donde más impacta"],
                    ["Diferenciación", "Definir tu ventaja competitiva concreta", "Dejar de competir en precio"],
                    ["Estructura", "Organizar procesos, equipo y delegación", "Empresa que crece sin depender de ti"],
                    ["Captación", "Montar 2 canales activos de nuevos clientes", "Flujo constante de oportunidades"],
                    ["Revisión", "Medir KPIs y ajustar cada mes", "Mejora continua basada en datos"],
                  ].map(([paso, accion, resultado], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 font-medium text-gray-800">{paso}</td>
                      <td className="py-3 pr-4 text-gray-600">{accion}</td>
                      <td className="py-3 text-gray-600">{resultado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ====================== SECCIÓN 9 ====================== */}
          <h2 id="caso-real" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            9. Caso real: la empresa de reformas que creció un 36% haciendo menos cosas
          </h2>
          <p className="text-gray-600 md:text-lg">
            Una pequeña empresa de reformas en A Coruña. Cuatro empleados,
            el dueño incluido. Facturaban 280.000 euros al año y llevaban tres
            años estancados. Hacían de todo — fontanería, electricidad,
            albañilería, pintura — y aceptaban cualquier presupuesto.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El problema: hacían de todo, para todos, y no destacaban en nada.
            Competían en precio contra empresas más grandes y contra autónomos
            con menos gastos. El margen era cada vez más fino.
          </p>

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-amber-900">
              La decisión estratégica
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Después de analizar datos, clientes y mercado, tomaron una
              decisión que al principio dio vértigo: especializarse solo en
              reformas de cocinas y baños. ¿Por qué? Porque los datos
              mostraban que era el servicio con mayor margen, mayor ticket
              medio, más recomendaciones y menos competencia de calidad en la
              zona.
            </p>
          </div>

          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-green-900">
              Resultados a los 12 meses
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Facturación: de 280.000 a 380.000 euros (+36%) con menos presupuestos pero más cualificados.",
                "Margen bruto: del 28% al 45% al dejar de competir en precio.",
                "Ticket medio: de 3.500 a 8.200 euros por proyecto.",
                "Dejaron de aceptar trabajos pequeños que costaban más de lo que daban.",
                "El 60% de clientes nuevos llegaban por recomendación directa.",
                "El dueño recuperó dos tardes a la semana para pensar en estrategia.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-green-800 md:text-lg">
                  <span className="mt-1 font-bold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 md:text-lg">
              No creció haciendo más. Creció haciendo menos pero mucho mejor.
              A veces, para crecer, tienes que reducir.
            </p>
          </div>

          {/* ====================== SECCIÓN 10 ====================== */}
          <h2 id="conclusion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            10. Conclusión: crecer no es cuestión de suerte, es cuestión de método
          </h2>
          <p className="text-gray-600 md:text-lg">
            Si tu empresa está estancada, no es porque el mercado esté
            saturado ni porque ya no haya oportunidades. Es porque necesitas
            un cambio de enfoque. El estancamiento no se resuelve con más
            horas de trabajo. Se resuelve con mejores decisiones, más foco
            y una dirección clara.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las empresas que crecen de forma sostenida no son las que más
            trabajan ni las que más invierten. Son las que tienen claro a
            dónde van, se diferencian de verdad, captan clientes con sistema,{" "}
            <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">
              cuidan su rentabilidad
            </a>{" "}
            y revisan sus resultados con disciplina. Y todo eso es accesible
            para cualquier pyme — con o sin grandes recursos.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si llevas meses o años sintiendo que tu negocio no avanza y
            quieres salir de ese estancamiento, el primer paso es pedir una
            perspectiva externa. A veces, lo que necesitas no es trabajar
            más — es ver tu negocio desde un ángulo diferente. Y eso es
            exactamente lo que hacemos en{" "}
            <a href="/diagnostico-negocio" className="text-accent-600 underline hover:text-accent-700">
              un diagnóstico de negocio
            </a>.
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
