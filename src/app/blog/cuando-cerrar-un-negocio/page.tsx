import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cuándo cerrar un negocio: señales que no debes ignorar | Consultoría Método",
  description:
    "Descubre las 7 señales claras de que ha llegado el momento de cerrar tu negocio. Guía honesta para empresarios que necesitan tomar la decisión más difícil.",
  keywords: [
    "cuándo cerrar un negocio",
    "señales cerrar empresa",
    "mi negocio no es rentable",
    "cerrar empresa España",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "cierre de empresa pyme",
  ],
  openGraph: {
    title: "Cuándo cerrar un negocio: señales que no debes ignorar",
    description:
      "Las 7 señales claras de que ha llegado el momento de cerrar. Una guía honesta para la decisión más difícil de un empresario.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/cuando-cerrar-un-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cuándo cerrar un negocio: señales que no debes ignorar",
  description:
    "Descubre las 7 señales claras de que ha llegado el momento de cerrar tu negocio. Guía honesta para empresarios que necesitan tomar la decisión más difícil.",
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
  datePublished: "2025-05-22",
  dateModified: "2025-05-22",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/cuando-cerrar-un-negocio",
  },
};

export default function ArticuloCuandoCerrar() {
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
            Cuándo cerrar un negocio: señales que no debes ignorar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Nadie quiere hablar de cerrar. Pero a veces, cerrar a tiempo
            es la decisión más inteligente, más valiente y más rentable
            que puede tomar un empresario. Este artículo te ayuda a
            saber si ha llegado ese momento.
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
            En más de 25 años de consultoría he acompañado a muchos
            empresarios en decisiones difíciles. Pero ninguna es tan
            dura como decidir cerrar. Cerrar un negocio que tú creaste,
            al que le dedicaste años, que lleva tu nombre, que es parte
            de tu identidad. No es solo una decisión empresarial — es
            una decisión emocional de primera magnitud.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y sin embargo, a veces cerrar es lo correcto. Cerrar a tiempo,
            con orden, con dignidad, preservando lo que se pueda preservar.
            Porque la alternativa — seguir arrastrando un negocio que no
            funciona, acumulando deudas, perdiendo salud y quemando el
            patrimonio familiar — es mucho peor. He visto a demasiados
            empresarios llegar a ese punto por no haber tomado la decisión
            cuando debían.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este artículo no es para animarte a cerrar. Es para ayudarte
            a ver con claridad si estás en esa situación. Y si lo estás,
            para que lo hagas bien.
          </p>

          {/* H2 — Por qué es tabú */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué nadie habla de cerrar un negocio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Vivimos en una cultura que glorifica el emprendimiento y
            estigmatiza el fracaso. En las redes sociales todo el mundo
            «escala», «crece» y «factura más que nunca». Nadie cuenta que
            cerró, que perdió dinero, que se equivocó. Y eso crea una
            presión enorme sobre los empresarios que están pasándolo mal:
            sienten que cerrar es fracasar, que les señalarán, que habrán
            desperdiciado su vida.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero cerrar no es fracasar. Fracasar es seguir tirando dinero
            a un pozo sin fondo por orgullo. Fracasar es hipotecar tu casa
            para mantener vivo algo que ya no tiene sentido. Fracasar es
            arruinar tu salud y tu familia por no aceptar la realidad.
            Cerrar a tiempo, con consciencia y con plan, es un acto de
            madurez empresarial. Y a menudo es el primer paso para
            empezar algo mejor.
          </p>

          {/* H2 — Las 7 señales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            7 señales claras de que deberías plantearte cerrar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No existe una señal mágica que te diga «cierra hoy». Pero sí
            hay patrones que, cuando se acumulan, te están enviando un
            mensaje claro. Si reconoces tres o más de estas señales en
            tu negocio, es hora de sentarte a reflexionar seriamente.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Llevas más de 2 años con pérdidas sostenidas
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un mal año lo tiene cualquiera. Dos años malos pueden ser una
            crisis del sector o un periodo de transición. Pero si llevas
            más de 24 meses perdiendo dinero sin una tendencia clara de
            mejora, el problema es estructural. No es mala suerte ni el
            mercado — es que tu modelo de negocio no funciona. Y esperar
            un año más rara vez cambia eso. Para evaluar esto con datos,
            revisa cómo{" "}
            <a
              href="/blog/como-saber-si-mi-negocio-es-rentable"
              className="text-accent-600 underline hover:text-accent-700"
            >
              saber si tu negocio es realmente rentable
            </a>
            .
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Tu deuda personal crece para sostener el negocio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cuando empiezas a usar tus ahorros personales, las tarjetas
            de crédito, el dinero de la hipoteca o préstamos familiares
            para pagar nóminas o proveedores, estás cruzando una línea
            muy peligrosa. El negocio ya no se mantiene solo — te está
            arrastrando a ti. Y si cae, no cae solo la empresa: caes tú
            y tu familia con ella.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. No tienes ventaja competitiva
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si no puedes responder en una frase a la pregunta «¿por qué
            debería comprarte a ti y no a tu competencia?», tienes un
            problema serio. Sin ventaja competitiva, solo puedes competir
            en precio. Y competir en precio es una carrera al fondo que
            solo ganan los más grandes. Si el mercado te ha comoditizado
            y no encuentras forma de diferenciarte, el negocio tiene
            fecha de caducidad.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Tu mercado ha desaparecido o cambiado radicalmente
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            A veces el problema no eres tú — es que el mundo ha cambiado
            y tu negocio ya no tiene demanda suficiente. Tiendas de
            fotografía analógica, videoclub, agencias de viajes
            tradicionales... El mercado no espera a nadie. Si tu sector
            está en declive terminal y no puedes pivotar a algo viable,
            mejor cerrar con recursos que esperar a que se agoten.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Tu salud se está deteriorando
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Insomnio crónico, ansiedad, problemas digestivos, dolores de
            espalda, ataques de pánico, depresión. Si tu negocio te está
            enfermando, ningún beneficio económico justifica ese precio.
            Y lo más irónico es que, cuando estás enfermo, tomas peores
            decisiones, rindes menos y el negocio va peor — un círculo
            vicioso que solo se rompe parando.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            6. Has perdido la pasión por completo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No hablo de los días malos que tiene todo empresario. Hablo
            de levantarte cada mañana sin ninguna gana de ir a trabajar,
            de sentir que tu negocio es una cárcel, de no disfrutar
            absolutamente nada de lo que haces. Si llevas meses — o
            años — arrastrándote sin ilusión, ni tú ni tu negocio vais
            a mejorar. A veces la falta de pasión es el síntoma de que
            tu camino está en otra parte.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            7. El coste de oportunidad es demasiado alto
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cada hora que dedicas a un negocio que no funciona es una hora
            que no dedicas a uno que podría funcionar — o a un empleo que
            te dé estabilidad mientras repiensas tu próximo paso. Si
            tienes claro que tu tiempo, tu energía y tu dinero rendirían
            más en otra cosa, seguir con el negocio actual no es
            perseverancia: es inercia. Sobre tomar buenas decisiones en
            estos momentos, te puede ayudar leer sobre{" "}
            <a
              href="/blog/como-tomar-decisiones-en-un-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo tomar decisiones difíciles en un negocio
            </a>
            .
          </p>

          {/* H2 — La trampa del coste hundido */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            La trampa emocional del coste hundido
          </h2>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; Cuidado con la falacia del coste hundido:
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              «Ya he invertido demasiado para dejarlo ahora.» Esta frase
              es la que más empresarios ha arruinado. El dinero, el tiempo
              y el esfuerzo que ya invertiste no vuelven — da igual si
              sigues o si cierras. La única pregunta relevante es: <strong>si
              empezases de cero hoy, ¿abrirías este mismo negocio?</strong> Si
              la respuesta es no, el coste hundido no debería retenerte.
            </p>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Es una trampa psicológica poderosa. Cuanto más has invertido,
            más difícil es soltar. Pero seguir invirtiendo en algo que no
            funciona no recupera lo invertido — solo aumenta las pérdidas.
            Es como el jugador que dobla la apuesta esperando recuperar lo
            perdido. Rara vez funciona.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;La valentía no es aguantar hasta el final. La valentía
            es mirar la realidad a la cara, aceptarla y actuar en
            consecuencia. A veces, la decisión más valiente de un
            empresario es cerrar.&rdquo;
          </blockquote>

          {/* H2 — Cuándo NO cerrar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo NO deberías cerrar: crisis temporal vs. problema
            estructural
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No toda dificultad significa que debas cerrar. Es fundamental
            distinguir entre una crisis temporal y un problema estructural.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Crisis temporal</th>
                  <th className="px-4 py-3 font-semibold">Problema estructural</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">Un impago puntual de un cliente grande</td>
                  <td className="px-4 py-3">Impagos recurrentes de múltiples clientes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Bajada de ventas por un evento externo concreto</td>
                  <td className="px-4 py-3">Caída constante de ventas sin causa puntual</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Problema de liquidez con negocio rentable</td>
                  <td className="px-4 py-3">Pérdidas operativas año tras año</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Pérdida de un empleado clave</td>
                  <td className="px-4 py-3">Incapacidad de atraer o retener talento</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Sector afectado por crisis puntual (pandemia)</td>
                  <td className="px-4 py-3">Sector en declive estructural sin vuelta atrás</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Tienes un plan claro para remontar</td>
                  <td className="px-4 py-3">No sabes qué hacer diferente para cambiar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si tu problema es temporal y tienes un plan para resolverlo,
            cerrar sería precipitado. Si tu negocio no crece pero tiene
            fundamentos sólidos, hay mucho que se puede hacer antes de
            cerrar — lee sobre{" "}
            <a
              href="/blog/mi-negocio-no-crece-que-hago"
              className="text-accent-600 underline hover:text-accent-700"
            >
              qué hacer cuando tu negocio se estanca
            </a>
            . Pero si los problemas son estructurales, recurrentes y no
            tienes un plan realista para cambiarlos, seguir abierto solo
            empeora las cosas.
          </p>

          {/* H2 — Cómo cerrar con dignidad */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo cerrar un negocio con dignidad
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si decides que cerrar es lo correcto, hazlo bien. Un cierre
            ordenado protege tu reputación, minimiza las pérdidas y te
            permite empezar tu siguiente etapa sin lastres innecesarios.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Pasos para un cierre ordenado:
            </p>
            <ol className="mt-4 space-y-3 list-decimal list-inside">
              <li className="text-gray-700 md:text-lg">
                <strong>Consulta con un asesor fiscal y legal</strong> antes
                de hacer nada. Hay obligaciones legales, plazos y formas de
                minimizar el impacto fiscal del cierre.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Comunica a tus empleados con honestidad y
                antelación.</strong> Se lo merecen. Ayúdales en la transición
                si puedes.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Informa a tus clientes</strong> y ayúdales a
                encontrar alternativas. Cumple los compromisos pendientes.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Negocia con tus acreedores.</strong> La mayoría
                prefieren cobrar algo a no cobrar nada. Un plan de pagos
                razonable casi siempre es posible.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Liquida activos de forma ordenada</strong> — stock,
                maquinaria, mobiliario. Mejor vender a buen precio que
                malvender por prisas.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Cierra la empresa legalmente:</strong> baja en
                Hacienda, Seguridad Social, registro mercantil, contratos
                de alquiler, suministros.
              </li>
            </ol>
          </div>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: cerrar a tiempo es de sabios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cerrar un negocio no define tu valor como persona ni como
            empresario. Define tu capacidad para tomar decisiones
            difíciles con cabeza fría. Los mejores empresarios que conozco
            han cerrado negocios — y luego han abierto otros mejores,
            con más experiencia, más sabiduría y menos ilusiones
            ingenuas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si este artículo te ha hecho pensar, no lo dejes para mañana.
            Habla con alguien de confianza — un asesor, un mentor, un
            consultor — y analiza tu situación con datos encima de la
            mesa. No con miedos, no con orgullo, no con la presión de lo
            que dirán. Con datos. Y después, toma la decisión que tengas
            que tomar. Sea seguir luchando con un plan claro, o cerrar
            con dignidad y abrir un nuevo capítulo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En ambos casos, estarás tomando las riendas de tu vida. Y eso
            nunca es un fracaso.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="cuando-cerrar-un-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Necesitas una opinión honesta sobre tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a analizar tu situación con objetividad, sin
            edulcorar la realidad. A veces lo que necesitas es alguien
            que te diga la verdad con datos en la mano.
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

      <BlogNav currentSlug="cuando-cerrar-un-negocio" />

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
