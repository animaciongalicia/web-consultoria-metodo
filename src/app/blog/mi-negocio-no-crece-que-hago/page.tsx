import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Mi negocio no crece: qué hacer cuando te estancas | Consultoría Método",
  description:
    "Descubre por qué tu negocio está estancado y qué acciones concretas puedes tomar para salir del estancamiento. Diagnóstico y soluciones prácticas para pymes.",
  keywords: [
    "mi negocio no crece",
    "empresa estancada qué hacer",
    "negocio estancado soluciones",
    "cómo salir del estancamiento empresarial",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Mi negocio no crece: qué hacer cuando te estancas",
    description:
      "Guía práctica para diagnosticar el estancamiento de tu negocio y tomar acciones concretas para volver a crecer. Causas, señales y soluciones reales.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/mi-negocio-no-crece-que-hago",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mi negocio no crece: qué hacer cuando te estancas",
  description:
    "Descubre por qué tu negocio está estancado y qué acciones concretas puedes tomar para salir del estancamiento. Diagnóstico y soluciones prácticas para pymes.",
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
  datePublished: "2025-04-24",
  dateModified: "2025-04-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/mi-negocio-no-crece-que-hago",
  },
};

export default function ArticuloNegocioNoCrece() {
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
            Mi negocio no crece: qué hacer cuando te estancas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Facturas lo mismo que hace dos años. Trabajas igual o más. Sientes
            que el negocio no avanza pero tampoco retrocede. Y lo peor: no
            sabes exactamente qué está fallando. Si te suena, este artículo
            es para ti.
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
            El estancamiento es uno de los problemas más frustrantes que puede
            vivir un empresario. No es una crisis — no hay un incendio que
            apagar. Es algo peor: una lenta pérdida de impulso que va
            erosionando tu motivación, tu rentabilidad y tu confianza en el
            negocio. Todo sigue «funcionando», pero nada mejora.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He visto este patrón cientos de veces en más de 25 años
            trabajando con pymes. Negocios que arrancaron con fuerza, que
            crecieron durante unos años y que de pronto se quedaron
            atascados. La facturación no sube, los clientes no aumentan, las
            ideas no aparecen. Y el empresario empieza a pensar: «¿Esto es
            todo lo que puedo conseguir?»
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La respuesta corta es no. El estancamiento no es un destino, es
            un síntoma. Y como todo síntoma, si lo diagnosticas bien, puedes
            tratarlo. En este artículo vamos a ver qué causa el
            estancamiento, cómo diferenciarlo del declive, qué preguntas
            hacerte y qué acciones concretas puedes tomar para volver a
            mover tu negocio hacia adelante.
          </p>

          {/* H2 — Estancamiento vs declive */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Estancamiento y declive no son lo mismo (pero uno lleva al otro)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es importante distinguir entre estar estancado y estar en
            declive. El estancamiento es meseta: facturas lo mismo, ganas lo
            mismo, tienes los mismos clientes. El declive es pendiente:
            facturas menos, pierdes clientes, cada año es peor que el
            anterior.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            El problema es que en un entorno donde todo sube — costes,
            inflación, competencia — quedarse quieto ya es retroceder. Si
            facturas lo mismo que hace tres años pero tus costes han subido
            un 15%, tu beneficio real ha caído. Si tu mercado crece un 5%
            anual y tú no creces, estás perdiendo cuota. El estancamiento
            sostenido es la antesala del declive.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;En los negocios, quedarse quieto no es una opción neutra.
            Si no avanzas, retrocedes. El mercado no te espera.&rdquo;
          </blockquote>

          {/* H2 — Causas comunes */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Las causas más comunes del estancamiento empresarial
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de trabajar con muchos negocios estancados, he
            identificado un patrón. Casi siempre la causa está en una de
            estas cuatro categorías. A veces en varias a la vez.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. El mercado ha cambiado y tú no
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Lo que funcionaba hace cinco años puede no funcionar hoy. Los
            hábitos de compra de tus clientes han cambiado, la competencia
            ha evolucionado, han aparecido alternativas que antes no
            existían. Si sigues haciendo exactamente lo mismo que cuando
            arrancaste, es probable que el mercado te haya dejado atrás sin
            que te dieras cuenta.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            No hablo de revoluciones tecnológicas. Hablo de cosas sutiles: un
            competidor que ofrece mejor experiencia de compra, un cambio en
            la normativa que afecta a tu sector, un público objetivo que
            ahora busca cosas diferentes. Si no estás atento a estos cambios
            y no adaptas tu{" "}
            <a
              href="/blog/como-definir-estrategia-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              estrategia de negocio
            </a>
            , te quedas atrás.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Has llegado al techo de tu modelo actual
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Todo modelo de negocio tiene un techo natural. Si eres autónomo
            y vendes horas, tu techo son las horas que puedes trabajar. Si
            tienes una tienda, tu techo es el tráfico que pasa por tu calle.
            Si ofreces un solo servicio, tu techo es la demanda de ese
            servicio en tu zona.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cuando llegas a ese techo, hacer más de lo mismo no te va a
            llevar más lejos. Necesitas cambiar algo: el modelo, el canal,
            la oferta, el público. No necesariamente una revolución, pero sí
            una evolución consciente. Muchos negocios se estancan
            simplemente porque han agotado las posibilidades de su formato
            original y no se han dado cuenta.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. El cuello de botella eres tú
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Este es el más difícil de aceptar, pero también el más común.
            El negocio no crece porque tú no dejas que crezca. Todo pasa por
            ti: las decisiones, las ventas, la producción, la atención al
            cliente. Eres el centro de todo, y eso significa que el negocio
            solo puede crecer hasta donde tú puedas llegar personalmente.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            He trabajado con empresarios que se quejaban de que su negocio no
            crecía, pero cuando les preguntaba qué pasaba si se iban de
            vacaciones dos semanas, la respuesta era: «El negocio se para.»
            Eso no es un negocio — es un autoempleo disfrazado. Y el
            autoempleo tiene un techo muy bajo porque depende de una sola
            persona.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Falta de foco y dispersión
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Paradójicamente, intentar hacer demasiadas cosas puede ser la
            causa de que no crezcas en ninguna. Cuando un negocio pequeño
            intenta servir a todos los públicos, ofrecer todos los servicios
            y estar en todos los canales, acaba sin hacer bien ninguna de
            esas cosas. La energía se dispersa y los resultados se diluyen.
          </p>

          {/* Cuadro destacado */}
          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Pregunta clave para identificar la dispersión:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              ¿Puedes explicar en una frase a quién sirves y qué problema
              le resuelves? Si la respuesta es larga, confusa o incluye
              «bueno, hacemos un poco de todo», tienes un problema de foco.
              Y ese problema de foco probablemente explica tu estancamiento.
            </p>
          </div>

          {/* H2 — Preguntas diagnósticas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            10 preguntas para diagnosticar tu estancamiento
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de buscar soluciones, necesitas un diagnóstico honesto.
            Siéntate en un sitio tranquilo, sin móvil, y responde a estas
            preguntas con sinceridad. Si mientes, solo te mientes a ti
            mismo.
          </p>

          <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <ol className="space-y-4">
              {[
                "¿Tu facturación ha crecido en los últimos 24 meses? ¿Y tu beneficio?",
                "¿Tu número de clientes activos está subiendo, bajando o igual?",
                "¿Cuándo fue la última vez que lanzaste un producto, servicio o iniciativa nueva?",
                "¿Sabes exactamente quién es tu cliente ideal hoy (no hace cinco años)?",
                "¿Podrías irte de vacaciones dos semanas sin que el negocio se pare?",
                "¿Qué porcentaje de tus ingresos viene de un solo cliente o canal?",
                "¿Cuánto tiempo dedicas a trabajar EN el negocio vs trabajar PARA clientes?",
                "¿Tu competencia ha hecho algo nuevo en el último año que tú no?",
                "¿Conoces tus indicadores clave o gestionas por intuición?",
                "¿Si empezaras hoy de cero, montarías exactamente el mismo negocio?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si la respuesta a la pregunta 9 es «gestiono por intuición»,
            empieza por ahí. Sin datos, cualquier decisión que tomes será un
            tiro al aire. Necesitas conocer tus{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              indicadores clave
            </a>{" "}
            antes de poder cambiar nada con criterio.
          </p>

          {/* H2 — 5 acciones */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            5 acciones concretas para romper el estancamiento
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El diagnóstico está bien, pero sin acción no sirve de nada. Estas
            son cinco acciones que he visto funcionar una y otra vez en
            negocios estancados. No tienes que hacerlas todas a la vez —
            elige la que más encaje con tu situación y empieza por ahí.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Revisa tu propuesta de valor (sin piedad)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Pregúntale a diez clientes por qué te compran a ti y no a otro.
            Sus respuestas te van a sorprender. Lo que tú crees que te
            diferencia puede no ser lo que el cliente valora. Y lo que el
            cliente valora puede ser algo que tú das por sentado y no
            destacas. Ajusta tu propuesta de valor a lo que realmente importa
            al cliente de hoy, no al de hace cinco años.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Elimina lo que no funciona
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Todo negocio acumula lastre: productos que no se venden, clientes
            que no son rentables, procesos que nadie cuestiona, gastos que se
            mantienen por inercia. Haz limpieza. A veces, para crecer, lo
            primero que necesitas es soltar peso. Un negocio más ligero se
            mueve más rápido.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Invierte en lo que genera crecimiento
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cuando un negocio se estanca, la tendencia natural es recortar.
            Pero recortar sin criterio puede empeorar las cosas. Lo que
            necesitas es redirigir recursos hacia lo que realmente genera
            crecimiento: captación de clientes, mejora del producto,
            formación del equipo, desarrollo de nuevos canales. No más gasto,
            sino mejor gasto. Si quieres{" "}
            <a
              href="/blog/como-hacer-crecer-una-empresa-pequena"
              className="text-accent-600 underline hover:text-accent-700"
            >
              hacer crecer tu empresa
            </a>
            , tienes que invertir en crecimiento.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Sal de tu burbuja
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los empresarios estancados suelen tener algo en común: llevan
            años viendo su negocio desde dentro y han perdido perspectiva.
            Habla con otros empresarios, asiste a eventos de tu sector, busca
            un mentor o un consultor. A veces, una sola conversación con
            alguien que ve tu negocio desde fuera te da más claridad que un
            año entero dándole vueltas tú solo.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Pon objetivos concretos y mídelos cada mes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            «Quiero crecer» no es un objetivo. «Quiero facturar un 15% más
            en los próximos 12 meses captando 2 nuevos clientes al mes en
            el segmento X» sí lo es. Un objetivo claro, medible y con plazo
            te obliga a actuar. Y medirlo cada mes te dice si vas por buen
            camino o necesitas corregir.
          </p>

          {/* H2 — Pivotar o perseverar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            ¿Cuándo pivotar y cuándo perseverar?
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta es la gran pregunta. ¿Mi negocio necesita ajustes o necesita
            un cambio radical? No hay una respuesta universal, pero hay
            criterios que pueden ayudarte a decidir.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Persevera (ajusta) si...</th>
                  <th className="px-4 py-3 font-semibold">Pivota (cambia) si...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">Tus clientes están contentos pero no llegan nuevos</td>
                  <td className="px-4 py-3">Tu mercado se ha reducido de forma estructural</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Tu producto funciona pero tu marketing no</td>
                  <td className="px-4 py-3">Tu producto ya no resuelve un problema relevante</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Tienes margen para invertir en mejoras</td>
                  <td className="px-4 py-3">Llevas más de dos años bajando y no ves fondo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">El problema es operativo (procesos, equipo, costes)</td>
                  <td className="px-4 py-3">El problema es estratégico (modelo de negocio obsoleto)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Lo que no puedes hacer es quedarte en el medio: ni ajustas ni
            pivotas. La parálisis por análisis es tan dañina como tomar una
            mala decisión. Al menos una mala decisión te da información para
            corregir. No decidir nada solo te mantiene exactamente donde
            estás — y ya hemos visto que donde estás no te vale.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;El mayor riesgo no es equivocarte al cambiar de rumbo.
            Es seguir haciendo lo mismo y esperar resultados diferentes.
            Eso no es perseverancia — es inercia.&rdquo;
          </blockquote>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: el estancamiento no se resuelve solo
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si tu negocio lleva tiempo sin crecer, hay una causa. No es mala
            suerte, no es el mercado, no es «que las cosas están difíciles
            para todos». Hay algo específico — o varias cosas específicas —
            que están frenando tu crecimiento. Y hasta que no las
            identifiques y las abordes, nada va a cambiar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La buena noticia es que el estancamiento es, casi siempre,
            reversible. He visto negocios que llevaban años atascados
            encontrar una nueva dirección en cuestión de semanas cuando
            alguien les ayudó a ver lo que ellos, por estar dentro del día a
            día, no podían ver.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No hace falta reinventar la rueda. A veces basta con afinar el
            foco, cambiar una variable, tomar una decisión que llevas
            posponiendo o simplemente mirar los números con honestidad por
            primera vez en mucho tiempo. Si no sabes por dónde empezar,
            empieza por pedir ayuda. No hay nada más caro que un año más
            haciendo lo mismo.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="mi-negocio-no-crece-que-hago" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio está estancado y no sabes por qué?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Hacemos un diagnóstico completo de tu negocio para identificar
            exactamente qué te está frenando y diseñar un plan de acción
            para volver a crecer.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
              Solicitar diagnóstico
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

      <BlogNav currentSlug="mi-negocio-no-crece-que-hago" />

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
