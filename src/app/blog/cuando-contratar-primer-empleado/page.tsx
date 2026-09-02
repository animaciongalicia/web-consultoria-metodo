import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cuándo y cómo contratar a tu primer empleado | Consultoría Método",
  description:
    "Descubre cuándo es el momento de contratar a tu primer empleado, cómo prepararte financieramente y los errores más comunes que cometen las pymes al hacerlo.",
  keywords: [
    "contratar primer empleado",
    "cuándo contratar empleado pyme",
    "coste primer empleado España",
    "primer trabajador autónomo",
    "contratar personal pequeña empresa",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Cuándo y cómo contratar a tu primer empleado",
    description:
      "Señales de que necesitas contratar, preparación financiera, definición del puesto y errores que debes evitar. Guía práctica para pymes y autónomos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/cuando-contratar-primer-empleado",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cuándo y cómo contratar a tu primer empleado",
  description:
    "Descubre cuándo es el momento de contratar a tu primer empleado, cómo prepararte financieramente y los errores más comunes que cometen las pymes al hacerlo.",
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
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/cuando-contratar-primer-empleado",
  },
};

export default function ArticuloContratarPrimerEmpleado() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Blog — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cuándo y cómo contratar a tu primer empleado
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Contratar a tu primera persona es el salto más importante que da
            un negocio. Y también el que más miedo produce. Aquí tienes una
            guía práctica para saber si estás preparado, qué perfil necesitas
            y cómo evitar los errores que cometen la mayoría de pymes al
            hacerlo.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ── Artículo ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
            {/* Introducción */}
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Hay un momento en la vida de todo negocio en el que el dueño
              llega al límite. Trabaja 12 horas al día, rechaza proyectos
              porque no da abasto, hace tareas que no le corresponden y siente
              que el negocio no puede crecer porque depende al 100% de él. Ese
              momento es la señal: necesitas a alguien más.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Pero contratar no es simplemente poner un anuncio y elegir al
              que mejor caiga. Es una decisión financiera, operativa y
              estratégica. Mal hecha, puede hundirte. Bien hecha, puede
              duplicar tu capacidad y{" "}
              <a
                href="/blog/como-preparar-tu-empresa-para-crecer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                preparar tu empresa para crecer
              </a>{" "}
              de verdad.
            </p>

            {/* H2 — Señales */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              5 señales claras de que necesitas contratar
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No se trata de intuición. Hay indicadores objetivos que dicen
              que ha llegado el momento. Si reconoces tres o más de estos,
              probablemente ya llegas tarde.
            </p>

            <div className="my-8 space-y-4">
              {[
                {
                  num: "1",
                  title: "Llevas más de 3 meses trabajando por encima de tu capacidad",
                  desc: "No hablamos de una semana punta. Si llevas un trimestre entero acabando a las 10 de la noche y trabajando fines de semana, esto no es un pico de trabajo: es tu nueva normalidad. Y esa normalidad es insostenible.",
                },
                {
                  num: "2",
                  title: "Estás rechazando clientes o proyectos",
                  desc: "Cada proyecto que rechazas es dinero que no entra y un cliente que se va a la competencia. Si dices que no más de una vez al mes por falta de capacidad, estás dejando crecer a otros con tu mercado.",
                },
                {
                  num: "3",
                  title: "Dedicas tiempo a tareas por debajo de tu nivel",
                  desc: "Si facturas 60 euros la hora como profesional pero dedicas 3 horas al día a embalar pedidos, responder emails rutinarios o llevar la contabilidad básica, estás quemando dinero. Esas tareas las puede hacer alguien a 10-15 euros la hora.",
                },
                {
                  num: "4",
                  title: "La calidad de tu trabajo empieza a resentirse",
                  desc: "Cuando no das abasto, lo primero que baja es la calidad. Entregas tarde, cometes errores, no das el seguimiento que deberías. Y eso erosiona tu reputación, que es lo más difícil de recuperar.",
                },
                {
                  num: "5",
                  title: "Tu salud física o mental está en riesgo",
                  desc: "No duermes bien, estás irritable, no desconectas nunca. Esto no es voluntad emprendedora, es una señal de alarma. Un negocio que necesita destruir a su dueño para funcionar tiene un problema estructural.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
              &ldquo;No contrates cuando estés desesperado. Contrata cuando
              lleves tres meses viendo que no llegas. La desesperación te hace
              elegir mal y negociar peor.&rdquo;
            </blockquote>

            {/* H2 — Preparación financiera */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Preparación financiera: lo que necesitas antes de firmar
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              El entusiasmo no paga nóminas. Antes de contratar, necesitas
              tener la casa financiera en orden. He visto negocios que
              contratan con la facturación justa y al tercer mes no pueden
              pagar la Seguridad Social. Eso es peor que no haber contratado.
            </p>

            <div className="my-8 rounded-xl border border-emerald-300 bg-emerald-50 p-6">
              <p className="font-bold text-emerald-900 md:text-lg">
                Checklist financiero antes de contratar
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Tienes al menos 6 meses de coste total del empleado en reserva (salario + Seguridad Social + extras).",
                  "Tu facturación cubre tus gastos actuales + el nuevo coste con un margen mínimo del 15%.",
                  "Tienes claro cuánto te cuesta realmente un empleado — no solo el salario bruto.",
                  "Tu flujo de caja es estable: no dependes de un solo cliente ni de cobros a 90 días.",
                  "Has calculado el punto de retorno: cuántos meses tardará el empleado en generar más de lo que cuesta.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="mt-1 text-emerald-600">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              Si no tienes claro el punto tres, lee antes{" "}
              <a
                href="/blog/cuanto-cuesta-realmente-un-empleado"
                className="text-accent-600 underline hover:text-accent-700"
              >
                cuánto cuesta realmente un empleado
              </a>
              . Spoiler: en España, un empleado con un salario bruto de 1.500
              euros te cuesta entre 2.000 y 2.300 euros al mes cuando sumas
              Seguridad Social, vacaciones, bajas y otros conceptos. Muchos
              empresarios solo miran el bruto y luego se llevan un susto con
              la primera TC1.
            </p>

            {/* H2 — El coste real */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              El coste real de tu primer empleado: la tabla que necesitas
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Vamos a poner números reales para un empleado con salario bruto
              de 1.500 euros/mes en un contrato general en 2026.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 text-sm">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-primary-900">
                      Concepto
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-primary-900">
                      Coste mensual
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-primary-900">
                      Coste anual
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Salario bruto", "1.500 €", "18.000 €"],
                    ["Seguridad Social empresa (~31%)", "465 €", "5.580 €"],
                    ["Prorrata pagas extra (2 pagas)", "250 €", "3.000 €"],
                    ["Vacaciones (coste implícito)", "125 €", "1.500 €"],
                    ["Prevención de riesgos laborales", "25 €", "300 €"],
                    ["Gestoría/asesoría laboral", "40 €", "480 €"],
                    ["Material, equipo, formación", "50 €", "600 €"],
                  ].map(([concepto, mensual, anual], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-700">{concepto}</td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {mensual}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {anual}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-primary-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-primary-900">
                      COSTE TOTAL REAL
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-primary-900">
                      ~2.455 €
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-primary-900">
                      ~29.460 €
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              Es decir, por un salario bruto de 1.500 euros, necesitas tener
              capacidad para asumir casi 2.500 euros al mes. Y eso sin contar
              el periodo de adaptación en el que el empleado todavía no rinde
              al 100%. Planifica al menos 2-3 meses de curva de aprendizaje.
            </p>

            {/* H2 — Cómo definir el puesto */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Cómo definir el puesto correctamente
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              El mayor error que veo es contratar sin tener claro qué va a
              hacer esa persona. &ldquo;Necesito ayuda&rdquo; no es una
              descripción de puesto. Antes de buscar a nadie, responde estas
              preguntas:
            </p>

            <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
              <p className="font-semibold text-primary-900 md:text-lg">
                Preguntas para definir tu primera contratación:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 md:text-lg">
                <li>
                  <strong>1.</strong> ¿Qué tareas concretas hará esta persona
                  cada día?
                </li>
                <li>
                  <strong>2.</strong> ¿Cuáles de esas tareas hago yo ahora y
                  cuántas horas me ocupan a la semana?
                </li>
                <li>
                  <strong>3.</strong> ¿Qué resultado espero de este puesto a
                  los 3, 6 y 12 meses?
                </li>
                <li>
                  <strong>4.</strong> ¿Necesito alguien operativo (que ejecute)
                  o alguien estratégico (que decida)?
                </li>
                <li>
                  <strong>5.</strong> ¿Tengo procesos documentados o va a tener
                  que aprender todo por ósmosis?
                </li>
              </ul>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              Si no tienes procesos escritos, tu primera tarea antes de
              contratar es documentar cómo se hacen las cosas. Si todo está en
              tu cabeza, la persona nueva dependerá de ti para cada pregunta y
              habrás creado un cuello de botella nuevo en lugar de resolver
              uno. Aprende a{" "}
              <a
                href="/blog/como-delegar-tareas-sin-perder-control"
                className="text-accent-600 underline hover:text-accent-700"
              >
                delegar tareas sin perder el control
              </a>{" "}
              antes de dar el paso.
            </p>

            {/* H2 — Errores comunes */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Los 5 errores que cometen casi todas las pymes al contratar por
              primera vez
            </h2>

            <div className="my-8 space-y-4">
              {[
                {
                  num: "1",
                  title: "Contratar un clon de ti mismo",
                  desc: "Buscas a alguien que piense igual, que haga las cosas como tú. Pero lo que necesitas es alguien que haga bien lo que tú haces mal o no te da tiempo a hacer. Si eres bueno vendiendo pero malo organizando, no contrates a otro comercial: contrata a alguien de operaciones.",
                },
                {
                  num: "2",
                  title: "Contratar demasiado senior (o demasiado junior)",
                  desc: "Un perfil senior te costará el doble y se frustrará en una empresa pequeña sin estructura. Un perfil demasiado junior necesitará una formación que no puedes darle. Busca alguien con 2-4 años de experiencia, autónomo en lo básico pero con hambre de crecer.",
                },
                {
                  num: "3",
                  title: "No tener procesos documentados",
                  desc: "Sin manuales, sin procedimientos, sin checklists. El nuevo empleado llega y no sabe qué hacer ni cómo hacerlo. Pasa dos semanas preguntándote todo y tú acabas trabajando más que antes de contratar.",
                },
                {
                  num: "4",
                  title: "Contratar por urgencia en vez de por estrategia",
                  desc: "Cuando estás desesperado coges al primero que aparece. No haces buenas entrevistas, no compruebas referencias, no evalúas el encaje cultural. Y a los tres meses estás otra vez solo, pero con tres meses perdidos y dinero gastado.",
                },
                {
                  num: "5",
                  title: "No calcular el coste total antes de firmar",
                  desc: "Solo miras el salario bruto y te olvidas de la Seguridad Social, las pagas extra, las vacaciones, el material, la formación y la gestoría. Un empleado de 1.200 euros brutos te cuesta más de 1.900 euros al mes. Si no lo sabes antes de contratar, te llevarás un susto.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 rounded-xl border border-red-100 bg-red-50/50 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
              &ldquo;Tu primer empleado no tiene que ser perfecto. Tiene que
              ser la persona correcta para las tareas correctas, en el momento
              correcto. Si falla alguno de esos tres factores, la
              contratación será un problema en lugar de una solución.&rdquo;
            </blockquote>

            {/* H2 — Basics legales en España */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Básicos legales en España para tu primera contratación
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No soy abogado laboralista ni pretendo serlo, pero después de
              acompañar a decenas de pymes en su primer proceso de
              contratación, estos son los puntos legales que todo empresario
              debería conocer antes de firmar.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 text-sm">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-primary-900">
                      Obligación
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-primary-900">
                      Qué implica
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "Alta en el Sistema RED",
                      "Antes del primer día de trabajo. Tu gestoría lo tramita, pero tú debes dar los datos a tiempo.",
                    ],
                    [
                      "Contrato por escrito",
                      "Obligatorio si dura más de 4 semanas. Elige bien el tipo: indefinido, temporal por sustitución o fijo-discontinuo.",
                    ],
                    [
                      "Prevención de riesgos",
                      "Obligatorio desde el primer empleado. Necesitas contratar un servicio de prevención ajeno (desde 120 euros/año).",
                    ],
                    [
                      "Nóminas y TC1/TC2",
                      "Mensualmente. La Seguridad Social se paga antes del último día del mes siguiente.",
                    ],
                    [
                      "Convenio colectivo",
                      "Cada sector tiene el suyo. Fija salarios mínimos, jornada, vacaciones y complementos. Conócelo antes de negociar.",
                    ],
                    [
                      "Periodo de prueba",
                      "Máximo 6 meses para técnicos titulados, 2 meses para los demás. Salvo que el convenio diga otra cosa.",
                    ],
                  ].map(([obligacion, detalle], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {obligacion}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{detalle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
              <p className="font-bold text-amber-900 md:text-lg">
                &#9888; Consejo importante:
              </p>
              <p className="mt-2 text-gray-700 md:text-lg">
                No te ahogues con la parte legal. Para eso están los gestores
                y asesores laborales. Tu trabajo como empresario es decidir
                a quién contratar, para qué y cuándo. Deja los papeles a quien
                sabe. Pero infórmate lo suficiente como para no firmar algo
                que no entiendes.
              </p>
            </div>

            {/* H2 — Conclusión */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Conclusión: contratar bien es la mejor inversión que puede hacer
              tu negocio
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Tu primer empleado no es un gasto. Es una inversión que, bien
              hecha, te devuelve tiempo, capacidad y facturación. Mal hecha,
              te cuesta dinero, energía y confianza. La diferencia entre una y
              otra está en la preparación.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Prepárate financieramente. Define el puesto con claridad.
              Documenta tus procesos antes de que llegue nadie. Busca el
              perfil adecuado, no el perfil perfecto. Y da el paso cuando los
              números digan que sí, no cuando la desesperación te empuje a
              ello.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Si estás en ese punto en el que sabes que necesitas ayuda pero
              no tienes claro cómo dar el paso, a veces una conversación con
              alguien que ya ha acompañado a otros en esa transición te ahorra
              meses de errores y miles de euros. Eso es exactamente lo que
              hacemos en{" "}
              <a
                href="/blog/como-preparar-tu-empresa-para-crecer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                consultoría de crecimiento empresarial
              </a>
              .
            </p>

            {/* CTA interno */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Estás pensando en contratar pero no sabes si es el momento?
              </p>
              <p className="mt-2 text-gray-600">
                Analizamos tus números, tu carga de trabajo y tu estructura
                para que tomes la decisión con datos, no con miedo.
              </p>
              <a
                href="/diagnostico-negocio"
                className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
              >
                Solicita tu diagnóstico gratuito
              </a>
            </div>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="cuando-contratar-primer-empleado" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio necesita crecer pero no sabes por dónde empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a decidir si es momento de contratar, qué perfil
            necesitas y cómo preparar tu empresa para absorber el cambio sin
            perder rentabilidad.
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

      <BlogNav currentSlug="cuando-contratar-primer-empleado" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y online en toda
              España
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
