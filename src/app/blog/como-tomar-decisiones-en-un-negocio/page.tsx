import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo tomar decisiones en un negocio sin quedarte bloqueado | Consultoría Método",
  description:
    "Descubre cómo tomar decisiones en un negocio cuando sientes bloqueo, soledad o miedo a equivocarte. Claves para pensar con claridad estratégica y dejar de frenar tu empresa.",
  keywords: [
    "cómo tomar decisiones en un negocio",
    "bloqueo mental empresario",
    "miedo a equivocarse en los negocios",
    "soledad del empresario",
    "decisiones estratégicas pyme",
    "consultoría empresarial decisiones",
  ],
  openGraph: {
    title:
      "Las decisiones que están frenando tu negocio (aunque no te des cuenta)",
    description:
      "Soledad, miedo, decisiones emocionales y falta de claridad estratégica. Descubre qué bloquea a los empresarios y cómo superarlo con método.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-tomar-decisiones-en-un-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Las decisiones que están frenando tu negocio (aunque no te des cuenta)",
  description:
    "Descubre cómo tomar decisiones en un negocio cuando sientes bloqueo, soledad o miedo a equivocarte. Claves para pensar con claridad estratégica y dejar de frenar tu empresa.",
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
      "https://consultoriametodo.es/blog/como-tomar-decisiones-en-un-negocio",
  },
};

export default function ArticuloDecisiones() {
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
            Las decisiones que están frenando tu negocio (aunque no te des
            cuenta)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Llevas años al frente de tu empresa. Has resuelto mil incendios. Pero
            hay decisiones que no tomas, preguntas que no te haces y caminos que
            no exploras — no por falta de capacidad, sino por bloqueo. Hoy
            hablamos de eso.
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
            Hay un momento en la vida de casi todo empresario en el que siente
            que está atrapado. No es que el negocio vaya mal — o quizá sí — pero
            lo que realmente le paraliza no son los números. Es algo más
            profundo: la sensación de no saber qué decisión tomar, de no tener a
            quién preguntar, de cargar con todo el peso solo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años trabajando con empresarios y pymes en
            Galicia, he visto este patrón cientos de veces. Gente muy capaz,
            muy trabajadora, con negocios que funcionan razonablemente bien, pero
            que están frenados. No por el mercado, no por la competencia, no por
            la economía. Están frenados por sus propias decisiones — o, más
            exactamente, por las decisiones que no están tomando.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si alguna vez has sentido que tu negocio está estancado y no sabes
            por qué, que trabajas más que nunca pero no avanzas, o que cada
            decisión importante te genera una ansiedad desproporcionada, este
            artículo es para ti. Vamos a desmontar las trampas mentales más
            habituales del empresario y a darte herramientas para salir de
            ellas.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;El mayor riesgo de un empresario no es equivocarse. Es
            quedarse paralizado tanto tiempo que el mercado decide por
            él.&rdquo;
          </blockquote>

          {/* H2 — La soledad del empresario */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            La soledad del empresario: el problema del que nadie habla
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si diriges una pyme, probablemente te resulte familiar esta
            situación: tienes que tomar una decisión importante — contratar a
            alguien, invertir en algo, cambiar de proveedor, cerrar una línea de
            negocio — y no tienes a quién preguntar. Tu pareja no entiende los
            números. Tus empleados no conocen la foto completa. Tu asesor te
            habla de impuestos, no de estrategia. Y tus amigos empresarios
            tienen sus propios problemas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Así que decides solo. O peor: no decides. Aplazas. Esperas a que
            &ldquo;las cosas se aclaren&rdquo;. Pero las cosas no se aclaran
            solas. Y mientras esperas, el negocio sigue en piloto automático,
            repitiendo los mismos errores, con los mismos resultados.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La soledad del empresario no es un tema menor. Es una de las causas
            principales de malas decisiones, de burnout y de negocios que se
            estancan durante años. No porque el dueño sea incompetente, sino
            porque no tiene con quién contrastar, debatir, reflexionar. El
            cerebro humano no está diseñado para resolver problemas complejos
            en aislamiento.
          </p>

          {/* Cuadro informativo */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Señales de que la soledad está afectando a tus decisiones
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Aplazas decisiones importantes semanas o meses sin motivo real.",
                "Rumias los problemas por la noche sin llegar a conclusiones claras.",
                "Sientes que nadie a tu alrededor entiende la presión que llevas.",
                "Tomas decisiones impulsivas para «quitarte el problema de encima».",
                "Evitas mirar ciertos números porque te generan ansiedad.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 md:text-lg"
                >
                  <span className="mt-1 text-primary-600 font-bold">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* H2 — Miedo a equivocarse */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El miedo a equivocarse: la trampa que más negocios frena
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Todo empresario se ha equivocado. Si llevas años al frente de un
            negocio, has tomado decisiones que no salieron bien. Has contratado a
            la persona equivocada, has invertido en algo que no funcionó, has
            confiado en un proveedor que te falló. Y esas experiencias dejan
            marca. El problema no es haberse equivocado — el problema es que el
            miedo a repetir el error te paralice.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He conocido a empresarios que llevan años sabiendo que necesitan
            cambiar su modelo de negocio, pero no lo hacen porque &ldquo;ya
            probé algo parecido y no funcionó&rdquo;. He visto negocios que
            necesitan urgentemente subir precios, pero el dueño no se atreve
            porque &ldquo;una vez perdí un cliente importante por
            eso&rdquo;. Una mala experiencia del pasado se convierte en una ley
            universal que bloquea cualquier intento de cambio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero la realidad es que no decidir también es una decisión. Y
            normalmente es la peor. Cuando no subes precios, estás decidiendo
            perder margen. Cuando no despides a alguien que no funciona, estás
            decidiendo que el resto del equipo cargue con su trabajo. Cuando no
            cambias de estrategia, estás decidiendo que los resultados actuales
            son aceptables.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No decidir también es decidir. Y normalmente es la decisión
            más cara de todas.&rdquo;
          </blockquote>

          {/* H2 — Decisiones emocionales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Decisiones emocionales: cuando el corazón manda sobre los números
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Uno de los patrones más peligrosos que veo en pymes es la toma de
            decisiones basada en emociones. Y no me refiero a grandes dramas —
            me refiero a decisiones cotidianas que parecen razonables pero están
            contaminadas por apegos, miedos o inercias emocionales.
          </p>

          {/* Tabla comparativa */}
          <div className="my-10 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Decisión emocional</th>
                  <th className="px-4 py-3 font-semibold">Decisión racional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  [
                    "No subir precios porque «me da cosa» con los clientes de siempre",
                    <>Calcular el margen real y <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">ajustar precios a la rentabilidad necesaria</a></>,
                  ],
                  [
                    "Mantener a un empleado que no rinde porque «lleva años conmigo»",
                    "Evaluar el coste de su bajo rendimiento y tomar una decisión justa",
                  ],
                  [
                    "Seguir con un proveedor caro por lealtad personal",
                    "Comparar presupuestos y negociar condiciones sin apego",
                  ],
                  [
                    "No cerrar una línea de negocio porque «fue la primera que monté»",
                    "Analizar la rentabilidad por línea y eliminar las que no aportan",
                  ],
                  [
                    "Aceptar cualquier cliente por miedo a decir que no",
                    "Filtrar clientes por rentabilidad y alineación con tu negocio",
                  ],
                ].map(([emocional, racional], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-gray-600">{emocional}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {racional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            No se trata de ser frío o insensible. Se trata de separar lo que
            sientes de lo que necesita tu negocio. Las emociones son
            legítimas, pero no pueden ser el criterio principal para tomar
            decisiones empresariales. Un negocio que se gestiona desde la
            emoción es un negocio que se gestiona desde la vulnerabilidad.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He visto a empresarios mantener durante años situaciones que les
            costaban miles de euros al mes — un empleado que no rinde, un local
            demasiado grande, un cliente que paga tarde y exige mucho — solo
            porque la decisión de cambiar les resultaba emocionalmente
            incómoda. El coste acumulado de esas decisiones emocionales suele
            ser devastador.
          </p>

          {/* H2 — Falta de claridad estratégica */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Falta de claridad estratégica: ir rápido sin saber adónde
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Muchos empresarios están tan metidos en el día a día que no levantan
            la cabeza para pensar hacia dónde van. Apagan fuegos, resuelven
            urgencias, atienden clientes, gestionan proveedores y empleados. Y
            cuando alguien les pregunta &ldquo;¿cuál es tu plan para los
            próximos dos años?&rdquo;, la respuesta suele ser un silencio
            incómodo o un vago &ldquo;seguir creciendo&rdquo;.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero &ldquo;seguir creciendo&rdquo; no es un plan. Sin una
            dirección clara, cada decisión se toma de forma aislada, sin
            contexto. ¿Deberías abrir una segunda sede? Depende de tu
            estrategia. ¿Deberías contratar a un comercial? Depende de tu
            estrategia. ¿Deberías invertir en marketing digital? Depende de tu
            estrategia. Sin estrategia, cada decisión es una moneda al aire.
          </p>

          {/* Cuadro con preguntas clave */}
          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              5 preguntas que revelan si tienes claridad estratégica
            </h3>
            <p className="mt-2 text-gray-500 text-sm">
              Si no puedes responder a al menos 4 de estas preguntas con
              concreción, necesitas pararte a pensar antes de seguir corriendo.
            </p>
            <ol className="mt-5 space-y-4">
              {[
                "¿Cuál es la ventaja competitiva real de tu negocio (lo que te hace diferente y difícil de copiar)?",
                "¿Quién es tu cliente ideal y por qué te elige a ti?",
                "¿Qué líneas de negocio son rentables y cuáles solo te dan trabajo?",
                "¿Dónde quieres que esté tu empresa dentro de 2 años (con cifras concretas)?",
                "¿Qué 3 cosas deberías dejar de hacer hoy para que tu negocio mejore?",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 md:text-lg"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-sm font-bold text-accent-700">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La falta de claridad estratégica no es un problema teórico — tiene
            consecuencias muy reales. Sin dirección clara, se invierte en lo
            que no toca, se contrata sin criterio, se aceptan clientes que no
            encajan y se dispersa la energía en cien frentes distintos. El
            resultado es un negocio que funciona pero no avanza. Mucho
            movimiento, poco progreso.
          </p>

          {/* H2 — Cómo pensar estratégicamente */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo aprender a pensar estratégicamente (aunque nunca lo hayas
            hecho)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pensar estratégicamente no es algo que solo hacen las grandes
            empresas ni requiere un MBA. Es simplemente el hábito de pararte
            regularmente a mirar tu negocio desde fuera, hacerte las preguntas
            correctas y tomar decisiones con perspectiva — no solo con
            urgencia.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aquí van claves prácticas que puedes empezar a aplicar esta
            misma semana:
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Reserva tiempo para pensar (y protégelo)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Bloquea en tu agenda al menos dos horas a la semana solo para
            pensar en tu negocio — no para trabajar en tu negocio, sino para
            pensar sobre él. Sin teléfono, sin interrupciones, sin urgencias.
            En ese tiempo, revisa números, analiza decisiones pendientes,
            evalúa lo que funciona y lo que no. Si no proteges ese tiempo,
            nunca llegará.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Separa las decisiones urgentes de las importantes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La mayoría de los empresarios viven apagando fuegos urgentes y
            nunca llegan a las decisiones importantes. Pero son las decisiones
            importantes — estrategia de precios, modelo de negocio, equipo,
            posicionamiento — las que realmente determinan el futuro de tu
            empresa. Las urgencias se resuelven. Las decisiones importantes, si
            no las tomas tú, se toman solas — y casi nunca a tu favor.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Usa datos, no sensaciones
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Antes de tomar cualquier decisión relevante, pregúntate:
            &ldquo;¿Qué me dicen los números?&rdquo;. No lo que sientes, no lo
            que crees, no lo que te parece — los{" "}
            <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">indicadores clave de tu empresa</a>.
            Rentabilidad por cliente, margen por servicio, coste de cada empleado, retorno de
            cada inversión. Los datos eliminan el miedo porque sustituyen la
            incertidumbre por información.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Busca una perspectiva externa
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cuando llevas años dentro de un negocio, hay cosas que dejas de
            ver. No por incompetencia, sino por costumbre.{" "}
            <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">Un consultor de negocios</a>,
            un mentor o simplemente alguien de confianza que conozca
            el mundo empresarial puede darte la perspectiva que necesitas para
            desbloquear decisiones que llevas meses aplazando.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Acepta que equivocarse es parte del proceso
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No existe la decisión perfecta. Toda decisión empresarial tiene
            riesgo. Pero el riesgo de no decidir siempre es mayor que el riesgo
            de decidir con información, análisis y sentido común. Los
            empresarios que progresan no son los que nunca se equivocan — son
            los que deciden rápido, corrigen rápido y aprenden de cada error.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Un buen empresario no es el que acierta siempre. Es el que
            decide con criterio, corrige sin drama y aprende sin
            parar.&rdquo;
          </blockquote>

          {/* H2 — Ejemplo real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Ejemplo real: el empresario que llevaba tres años bloqueado
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace unos meses llegó a mi consultoría un empresario gallego con un
            negocio de distribución alimentaria. Facturaba alrededor de 800.000
            euros al año, tenía seis empleados y llevaba tres años sintiendo
            que el negocio &ldquo;no tiraba&rdquo;. Trabajaba de seis de la
            mañana a ocho de la tarde, su margen era cada vez más estrecho y
            sentía que estaba atrapado.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando nos sentamos a analizar la situación, descubrimos tres cosas
            que él sabía pero no se atrevía a enfrentar:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Tenía un empleado con bajo rendimiento al que no despedía porque «lleva conmigo desde el principio». Le costaba 28.000 euros al año en sueldo y al menos otros 15.000 en errores, devoluciones y clientes perdidos por mal servicio.",
              "Mantenía una ruta de reparto a una zona rural que llevaba dos años dando pérdidas. No la cerraba porque «siempre hemos ido allí» y por lealtad a los clientes de esa zona.",
              "No había subido precios en cuatro años por miedo a perder clientes, mientras sus costes de transporte y mercancía habían subido un 18%.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 md:text-lg"
              >
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Cuadro de resultados */}
          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-green-900">
              Resultado a los 6 meses
            </h3>
            <p className="mt-2 text-gray-600 md:text-lg">
              Después de tomar esas tres decisiones — que él llevaba meses
              (algunos, años) evitando — los resultados fueron claros:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "El beneficio neto subió un 40% sin aumentar la facturación.",
                "Dejó de trabajar los sábados porque la operación era más eficiente.",
                "La moral del equipo mejoró al eliminar la frustración del compañero que no rendía.",
                "Los clientes aceptaron la subida de precios — solo perdió 2 de 120.",
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
              Las tres decisiones que lo estaban frenando no eran complicadas.
              Eran incómodas. Y lo que necesitaba no era más información — era
              alguien que le ayudase a ver con claridad y a dar el paso.
            </p>
          </div>

          {/* H2 — Ejercicio práctico */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Ejercicio práctico: desbloquea tus decisiones pendientes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te has reconocido en algo de lo que has leído, te propongo un
            ejercicio sencillo pero poderoso. No necesitas más de 30 minutos
            y papel y bolígrafo. Hazlo esta semana, no &ldquo;cuando tenga
            tiempo&rdquo;.
          </p>

          {/* Pasos del ejercicio */}
          <div className="my-10 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 1
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Lista las 5 decisiones que llevas aplazando
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Escríbelas tal cual te vengan a la cabeza. Sin filtro, sin
                juzgar. Pueden ser grandes o pequeñas: subir precios, despedir a
                alguien, cerrar un servicio, invertir en algo, cambiar de local,
                hablar con un socio.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 2
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Para cada una, responde: ¿qué me frena?
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Sé honesto. ¿Es miedo? ¿Es comodidad? ¿Es falta de información?
                ¿Es lealtad? ¿Es que no sé por dónde empezar? Identificar el
                bloqueo real es el primer paso para superarlo.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 3
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Calcula el coste de no decidir
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Para cada decisión aplazada, estima cuánto te está costando al
                mes no tomarla. En dinero, en tiempo, en energía, en
                oportunidades perdidas. Ponle un número — aunque sea
                aproximado. Cuando ves el coste acumulado de la indecisión, la
                motivación para actuar cambia.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 4
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Elige una y decide esta semana
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                No intentes resolver las cinco a la vez. Elige la que tenga más
                impacto o la que más tiempo lleves aplazando. Y toma la
                decisión esta semana. No el mes que viene, no cuando las cosas
                se calmen — esta semana. Una decisión tomada es mejor que cinco
                decisiones pensadas.
              </p>
            </div>
          </div>

          {/* Cuadro resumen final */}
          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Resumen: los 4 bloqueos del empresario y cómo superarlos
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="pb-2 pr-4 font-semibold text-primary-900">
                      Bloqueo
                    </th>
                    <th className="pb-2 font-semibold text-primary-900">
                      Solución
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
                  {[
                    ["Soledad", "Buscar un interlocutor externo de confianza"],
                    [
                      "Miedo a equivocarse",
                      "Aceptar que no decidir es la peor decisión",
                    ],
                    [
                      "Decisiones emocionales",
                      "Basar las decisiones en datos, no en apegos",
                    ],
                    [
                      "Falta de estrategia",
                      "Reservar tiempo para pensar y definir una dirección clara",
                    ],
                  ].map(([bloqueo, solucion], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 font-medium text-gray-800">
                        {bloqueo}
                      </td>
                      <td className="py-3 text-gray-600">{solucion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: el negocio no cambia hasta que el empresario decide
            cambiar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si has llegado hasta aquí, probablemente te has visto reflejado en
            más de un punto. Y eso no es malo — es una señal de que estás
            preparado para algo diferente. El primer paso siempre es reconocer
            que hay decisiones pendientes y que el bloqueo no se resuelve solo
            con más horas de trabajo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tu negocio es un reflejo de tus decisiones. Si las decisiones que
            estás tomando — o no tomando — no te están dando los resultados que
            quieres, es momento de cambiar algo. No hace falta cambiarlo todo
            a la vez. A veces una sola decisión bien tomada desbloquea todo lo
            demás.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y si sientes que necesitas a alguien que te ayude a ver con
            claridad, a poner orden en las ideas y a dar el paso que llevas
            meses evitando — para eso estoy aquí. No para decirte lo que
            quieres oír, sino lo que necesitas escuchar.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-tomar-decisiones-en-un-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Sientes que tu negocio está bloqueado?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Hablemos. En una conversación de 30 minutos puedo ayudarte a
            identificar las decisiones que están frenando tu negocio y a
            diseñar un camino claro para desbloquearlas. Sin compromiso, sin
            presión — solo claridad.
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

      <BlogNav currentSlug="como-tomar-decisiones-en-un-negocio" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Descubre nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              Método Rentabilismo para tomar decisiones con datos
            </a>{" "}
            y consulta{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              casos reales de empresarios que han desbloqueado su negocio
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
