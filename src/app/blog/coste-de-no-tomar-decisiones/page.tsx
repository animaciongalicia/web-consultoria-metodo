import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "El coste de no tomar decisiones en tu empresa | Consultoría Método",
  description:
    "La indecisión cuesta más que una mala decisión. Descubre los costes ocultos de la parálisis por análisis y aprende frameworks para decidir más rápido en tu pyme.",
  keywords: [
    "coste de no tomar decisiones",
    "parálisis por análisis empresa",
    "indecisión empresarial",
    "cómo decidir más rápido negocio",
    "toma de decisiones pyme",
    "consultor empresarial Coruña",
    "consultoría empresas Galicia",
  ],
  openGraph: {
    title: "El coste de no tomar decisiones en tu empresa",
    description:
      "La indecisión cuesta más que una mala decisión. Descubre los costes ocultos de la parálisis por análisis y frameworks para decidir más rápido.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/coste-de-no-tomar-decisiones" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El coste de no tomar decisiones en tu empresa",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-09",
};

export default function ArticuloCosteNoDecidir() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            El coste de no tomar decisiones en tu empresa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Crees que aplazar una decisión es la opción segura. En realidad, es la más cara.
            Cada semana que pospones una decisión importante, tu negocio paga un precio que no ves
            en ninguna factura — pero que aparece en tus resultados.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y online en toda España
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <h2>La parálisis por análisis: el enemigo silencioso de las pymes</h2>
            <p>
              Hay un patrón que veo en casi todas las pymes con las que trabajo como
              <strong> consultor empresarial en Coruña</strong>: el empresario sabe lo que tiene que hacer,
              pero no lo hace. No por falta de inteligencia ni de capacidad, sino por algo más insidioso:
              la creencia de que necesita &ldquo;más información&rdquo; antes de decidir.
            </p>
            <p>
              &ldquo;Necesito pensarlo más.&rdquo; &ldquo;Voy a esperar a ver cómo va el trimestre.&rdquo;
              &ldquo;Cuando tenga más claro el panorama.&rdquo; Estas frases suenan prudentes.
              En realidad, son la forma más cara de gestionar un negocio. Porque mientras esperas
              a tener el 100 % de la información, el mercado se mueve, los competidores actúan, el equipo
              se desmoraliza y las oportunidades se cierran.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;La decisión perfecta que llega tarde vale menos que la decisión buena que llega
              a tiempo. En los negocios, la velocidad razonable supera a la perfección lenta.&rdquo;
            </blockquote>

            {/* ── Costes ocultos ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Los 6 costes ocultos de la indecisión
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No decidir no es gratis. Tiene un coste real que se acumula cada día, cada semana, cada mes.
              Estos son los seis más destructivos — y los que con más frecuencia pasan desapercibidos.
            </p>

            <div className="my-10 space-y-6 not-prose">
              {[
                {
                  num: "1",
                  title: "Desmoralización del equipo",
                  desc: "Tu equipo ve los problemas. Espera que tú actúes. Cuando no lo haces semana tras semana, el mensaje que reciben es: «Aquí no cambia nada.» Los mejores se frustran y se van. Los que se quedan bajan el rendimiento. Y tú pierdes talento por no haber tomado una decisión a tiempo.",
                },
                {
                  num: "2",
                  title: "Oportunidades perdidas",
                  desc: "Aquella oportunidad de negocio que «ibas a mirar». Aquel local que estaba disponible. Aquel candidato excelente que te contactó. Mientras tú lo pensabas, alguien más actuó. Las mejores oportunidades tienen fecha de caducidad corta.",
                },
                {
                  num: "3",
                  title: "Pérdida de cuota de mercado",
                  desc: "Mientras tú piensas si lanzar ese servicio, tu competidor lo lanza. Mientras dudas si invertir en digital, otros captan a tus clientes por internet. El mercado no espera a que estés listo.",
                },
                {
                  num: "4",
                  title: "Rotación de empleados",
                  desc: "Los buenos profesionales quieren trabajar en empresas que avanzan. Un entorno donde las decisiones se eternizan genera frustración, incertidumbre y, al final, dimisiones. El coste de reemplazar a un buen empleado es de 6 a 12 meses de su salario.",
                },
                {
                  num: "5",
                  title: "Erosión del margen",
                  desc: "No subir precios es una decisión. No cortar un gasto innecesario es una decisión. No cerrar una línea que pierde dinero es una decisión. Solo que son decisiones por omisión, y cada mes te cuestan dinero real.",
                },
                {
                  num: "6",
                  title: "Desgaste del empresario",
                  desc: "Las decisiones pendientes no desaparecen — se acumulan en tu cabeza. Cada decisión aplazada consume energía mental, genera ansiedad nocturna y te resta capacidad para pensar con claridad. La indecisión crónica es una de las causas principales de burnout empresarial.",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5 rounded-xl border border-gray-100 bg-gray-50 p-5 md:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-900 text-lg font-bold text-white">
                    {item.num}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-gray-600 md:text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 md:text-lg">
              Si sumas todos estos costes en un año, la cifra asusta. He visto pymes donde la indecisión
              acumulada representaba entre 40.000 y 120.000 euros anuales en margen perdido, rotación,
              oportunidades desaprovechadas y sobrecostes mantenidos por inercia. Y todo por no decidir.
              Este patrón es, de hecho, uno de los{" "}
              <a href="/blog/errores-empresarios-pyme-mas-comunes" className="text-accent-600 underline hover:text-accent-700">
                errores más comunes entre empresarios de pymes
              </a>.
            </p>

            {/* ── Tabla comparativa ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Decidir mal vs. no decidir: ¿qué cuesta más?
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Muchos empresarios no deciden porque tienen miedo a equivocarse. Pero la comparación real
              no es &ldquo;decidir bien vs. decidir mal&rdquo;. Es &ldquo;decidir mal vs. no decidir&rdquo;.
              Y casi siempre, no decidir es peor.
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Escenario</th>
                    <th className="px-4 py-3 font-semibold">Decisión equivocada</th>
                    <th className="px-4 py-3 font-semibold">No decidir</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Contratar a alguien</td>
                    <td className="px-4 py-3 text-gray-600">Contratas al candidato equivocado. Pierdes 3-6 meses. Aprendes qué perfil necesitas realmente.</td>
                    <td className="px-4 py-3 text-gray-600">Sigues sobrecargado 12 meses más. El equipo se quema. Pierdes clientes por no poder atenderlos.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Subir precios</td>
                    <td className="px-4 py-3 text-gray-600">Pierdes un 5-10 % de clientes (normalmente los menos rentables).</td>
                    <td className="px-4 py-3 text-gray-600">Tu margen se erosiona cada mes. En 2 años trabajas el doble para ganar lo mismo.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Lanzar un servicio nuevo</td>
                    <td className="px-4 py-3 text-gray-600">No funciona. Pierdes la inversión inicial. Ganas información valiosa del mercado.</td>
                    <td className="px-4 py-3 text-gray-600">Tu competidor lo lanza. Capta a tus clientes. Tú sigues con los mismos servicios de hace 5 años.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Despedir a quien no rinde</td>
                    <td className="px-4 py-3 text-gray-600">Pagas indemnización. Buscas sustituto. 2-3 meses de transición.</td>
                    <td className="px-4 py-3 text-gray-600">Pagas un sueldo improductivo 12+ meses. El equipo se resiente. La cultura se deteriora.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">La regla clave</p>
              <p className="mt-2 text-accent-900">
                Una decisión equivocada tiene un coste puntual y genera aprendizaje.
                No decidir tiene un coste recurrente que se acumula cada mes y no enseña nada.
                Casi siempre es mejor decidir, corregir y avanzar que esperar indefinidamente.
              </p>
            </div>

            {/* ── La regla del 70 % ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              La regla del 70 %: decide con la información que tienes
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Jeff Bezos popularizó un principio que aplico constantemente con mis clientes:
              &ldquo;Si esperas a tener el 90 % de la información, llegas tarde. Decide cuando tengas
              el 70 % y corrige sobre la marcha.&rdquo;
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Este principio es liberador para el empresario que se bloquea buscando la certeza absoluta.
              La certeza absoluta no existe en los negocios. Lo que sí existe es un nivel de información
              suficiente para tomar una decisión razonable. Y ese nivel es más bajo de lo que crees.
            </p>

            <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm not-prose">
              <h3 className="text-lg font-bold text-gray-900">
                Cómo aplicar la regla del 70 % en tu pyme
              </h3>
              <ol className="mt-5 space-y-4">
                {[
                  "Identifica qué información realmente necesitas para decidir (no la que te gustaría tener, sino la imprescindible).",
                  "Evalúa: ¿ya tengo al menos el 70 % de esa información? Si la respuesta es sí, decide.",
                  "Define un plazo máximo para cada decisión pendiente. Sin plazo, no hay decisión — hay rumia.",
                  "Decide y establece un punto de revisión (30-60-90 días) para corregir si es necesario.",
                  "Acepta que corregir el rumbo es parte del proceso, no un fracaso.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-sm font-bold text-accent-700">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-gray-600 md:text-lg">
              Para profundizar en cómo tomar mejores decisiones en general, te recomiendo leer{" "}
              <a href="/blog/como-tomar-decisiones-en-un-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo tomar decisiones en un negocio sin quedarte bloqueado
              </a>. La combinación de ambos artículos te dará un sistema completo.
            </p>

            {/* ── Frameworks ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              3 herramientas para decidir más rápido
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No se trata de decidir de forma impulsiva. Se trata de tener un sistema que te ayude a
              decidir con criterio en menos tiempo. Estas tres herramientas las uso con todos mis clientes.
            </p>

            {/* Herramienta 1 */}
            <div className="my-10 space-y-8 not-prose">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Herramienta 1</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  Time-boxing: ponle fecha límite a cada decisión
                </h3>
                <p className="mt-3 text-gray-600 md:text-lg">
                  Toda decisión pendiente necesita un plazo. Sin plazo, se convierte en rumia permanente.
                  El truco: asigna un tiempo proporcional a la importancia de la decisión. Una decisión de
                  500 &euro; no merece 3 semanas de análisis. Una decisión de 50.000 &euro; merece unos
                  días, pero no seis meses.
                </p>
                <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-primary-50 text-primary-900">
                      <tr>
                        <th className="px-4 py-2 font-semibold">Tipo de decisión</th>
                        <th className="px-4 py-2 font-semibold">Plazo máximo razonable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="px-4 py-2">Operativa del día a día</td><td className="px-4 py-2">Mismo día</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-2">Compra / inversión menor (&lt; 5.000 &euro;)</td><td className="px-4 py-2">1 semana</td></tr>
                      <tr><td className="px-4 py-2">Contratación / despido</td><td className="px-4 py-2">2 semanas</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-2">Cambio de estrategia / inversión mayor</td><td className="px-4 py-2">1 mes</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Herramienta 2 */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Herramienta 2</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  Reversible vs. irreversible: no todas las decisiones pesan igual
                </h3>
                <p className="mt-3 text-gray-600 md:text-lg">
                  La mayoría de las decisiones empresariales son reversibles. Puedes cambiar de proveedor,
                  ajustar un precio, cancelar un servicio, reorganizar un equipo. Si la decisión es
                  reversible, decídela rápido. Solo las decisiones verdaderamente irreversibles —
                  vender la empresa, firmar un contrato a largo plazo, cerrar una sede — merecen un
                  análisis profundo.
                </p>
                <p className="mt-3 text-gray-600 md:text-lg">
                  El problema es que muchos empresarios tratan todas las decisiones como si fueran
                  irreversibles. Subir precios es reversible. Contratar a alguien con periodo de prueba
                  es reversible. Lanzar un servicio piloto es reversible. Cuando te das cuenta de esto,
                  el 80 % de tus decisiones pendientes se desbloquean.
                </p>
              </div>

              {/* Herramienta 3 */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Herramienta 3</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  Niveles de delegación: no decidas todo tú
                </h3>
                <p className="mt-3 text-gray-600 md:text-lg">
                  Parte de la parálisis viene de que el empresario cree que tiene que decidir todo
                  personalmente. No es así. Define niveles claros de delegación para tu equipo:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { level: "Nivel 1", desc: "El empleado decide y actúa sin consultar (decisiones operativas del día a día)." },
                    { level: "Nivel 2", desc: "El empleado decide y te informa después (compras menores, ajustes de agenda)." },
                    { level: "Nivel 3", desc: "El empleado propone y tú apruebas (contrataciones, gastos importantes)." },
                    { level: "Nivel 4", desc: "Solo tú decides (estrategia, inversiones mayores, cambios de modelo de negocio)." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                      <span className="shrink-0 rounded bg-primary-100 px-2 py-0.5 text-sm font-bold text-primary-800">
                        {item.level}
                      </span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-600 md:text-lg">
                  Cuando defines estos niveles, liberas un 60-70 % de las decisiones que hoy pasan por tu
                  mesa sin necesidad. Y eso te deja tiempo y energía mental para las que realmente importan.
                  Esto conecta directamente con saber{" "}
                  <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">
                    cómo definir la estrategia de tu negocio
                  </a>{" "}
                  para que las decisiones fluyan en la dirección correcta.
                </p>
              </div>
            </div>

            {/* ── Ejercicio práctico ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Ejercicio: calcula el coste de tus decisiones aplazadas
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Coge papel y bolígrafo. Esto te va a llevar 15 minutos y te va a cambiar la perspectiva.
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Decisión aplazada</th>
                    <th className="px-4 py-3 font-semibold">Meses pendiente</th>
                    <th className="px-4 py-3 font-semibold">Coste mensual estimado</th>
                    <th className="px-4 py-3 font-semibold">Coste acumulado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-600 italic">Ej.: No subir precios</td>
                    <td className="px-4 py-3">18 meses</td>
                    <td className="px-4 py-3">800 &euro;/mes</td>
                    <td className="px-4 py-3 font-semibold text-red-600">14.400 &euro;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-600 italic">Ej.: No despedir a X</td>
                    <td className="px-4 py-3">12 meses</td>
                    <td className="px-4 py-3">2.500 &euro;/mes</td>
                    <td className="px-4 py-3 font-semibold text-red-600">30.000 &euro;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600 italic">Ej.: No cerrar línea deficitaria</td>
                    <td className="px-4 py-3">24 meses</td>
                    <td className="px-4 py-3">1.200 &euro;/mes</td>
                    <td className="px-4 py-3 font-semibold text-red-600">28.800 &euro;</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-4 py-3 font-semibold" colSpan={3}>Total acumulado de indecisión</td>
                    <td className="px-4 py-3 font-bold text-red-700">73.200 &euro;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 md:text-lg">
              Ahora hazlo con tus números reales. La cifra te va a sorprender. Y esa sorpresa es
              exactamente el empujón que necesitas para empezar a decidir.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;No decidir no te protege del riesgo. Solo lo convierte en un goteo constante
              que no duele lo suficiente para reaccionar — hasta que ya es demasiado tarde.&rdquo;
            </blockquote>

            {/* ── Consejo Galicia ── */}
            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="font-semibold text-primary-800">Para empresarios en Galicia</p>
              <p className="mt-2 text-primary-900">
                En el tejido empresarial gallego, donde las relaciones personales pesan mucho,
                hay decisiones que se aplazan por lealtad: no cambiar de proveedor porque &ldquo;es
                amigo&rdquo;, no subir precios a un cliente &ldquo;de toda la vida&rdquo;, no
                reestructurar porque &ldquo;siempre se hizo así&rdquo;. La lealtad es un valor, pero
                no puede ser una excusa para la inacción. Un negocio que no se adapta acaba
                por no poder cuidar de nadie — ni del empresario, ni de su equipo, ni de sus clientes.
              </p>
            </div>

            {/* ── Conclusión ── */}
            <h2>Conclusión</h2>
            <p>
              La indecisión tiene un coste real, cuantificable y acumulativo. No es prudencia —
              es una forma cara de gestionar la incertidumbre. Y la incertidumbre no se elimina
              esperando. Se gestiona decidiendo con la información que tienes, corrigiendo sobre la
              marcha y aprendiendo de cada resultado.
            </p>
            <p>
              Si llevas meses o años con decisiones aplazadas, haz el ejercicio de calcular cuánto te
              están costando. Y después, empieza por una: la más urgente, la que más te pesa, la que
              llevas más tiempo evitando. No hace falta resolverlas todas a la vez. Pero sí hace falta
              empezar.
            </p>
            <p>
              Y si necesitas a alguien que te ayude a poner claridad, a cuantificar lo que te está
              costando la inacción y a construir un sistema de toma de decisiones que funcione en tu
              negocio, estoy aquí para eso. Sin juicio, sin presión — solo datos, método y la
              perspectiva externa que necesitas para desbloquear lo que llevas tiempo posponiendo.
            </p>

            {/* ── CTA inline ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Cuánto te está costando la indecisión en tu negocio?
              </p>
              <p className="mt-2 text-gray-600">
                En un diagnóstico gratuito analizamos juntos tus decisiones pendientes, calculamos su
                coste real y priorizamos por dónde empezar. Sin compromiso.
              </p>
              <a href="/diagnostico-negocio" className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600">
                Solicita tu diagnóstico gratuito
              </a>
            </div>
          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="coste-de-no-tomar-decisiones" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Llevas meses aplazando una decisión importante?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Hablemos. En 30 minutos te ayudo a identificar qué te está frenando, cuánto te está
            costando y cuál es el primer paso para desbloquear tu negocio.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación gratuita — 30 minutos, sin compromiso.
          </p>
        </div>
      </section>

      <BlogNav currentSlug="coste-de-no-tomar-decisiones" />
    </>
  );
}
