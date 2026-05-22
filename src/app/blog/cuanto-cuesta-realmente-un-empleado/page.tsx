import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cuánto cuesta realmente un empleado (y cómo calcularlo) | Consultoría Método",
  description:
    "El coste real de un empleado va mucho más allá del salario bruto. Aprende a calcularlo con datos reales: SS, vacaciones, espacio, herramientas, gestión. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "cuánto cuesta un empleado",
    "coste real empleado pyme",
    "calcular coste empleado",
    "coste laboral total",
    "seguridad social empresa",
    "cuándo contratar empleado",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "gestión de personal pyme",
  ],
  openGraph: {
    title: "Cuánto cuesta realmente un empleado (y cómo calcularlo)",
    description:
      "Un empleado con 1.500 € de salario bruto cuesta entre 2.800 y 3.200 € al mes. Te enseño a calcular el coste real y a decidir si contratar tiene sentido para tu negocio.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/cuanto-cuesta-realmente-un-empleado" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cuánto cuesta realmente un empleado (y cómo calcularlo)",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-05-28",
};

export default function ArticuloCuantoCuestaEmpleado() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cuánto cuesta realmente un empleado (y cómo calcularlo)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Cuando un empresario piensa en contratar, mira el salario bruto. Pero el coste real de un empleado es
            entre un 80 % y un 110 % más que esa cifra. Si no haces bien los números antes de contratar, puedes
            convertir una buena decisión en un problema de tesorería.
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

            <p>
              Es una de las preguntas que más me hacen los empresarios de pyme: «quiero contratar a alguien, pero
              no sé si me lo puedo permitir». Y cuando les pido que me digan cuánto creen que les costará ese
              empleado, casi siempre me dan el salario bruto. Como si fuera el único coste.
            </p>
            <p>
              No lo es. Ni de lejos. Un empleado con un salario bruto de 1.500 euros al mes le cuesta a la empresa
              entre 2.800 y 3.200 euros mensuales cuando sumas todos los conceptos. Y si no tienes claros esos
              números antes de contratar, puedes encontrarte con un agujero en la tesorería que no esperabas.
            </p>
            <p>
              En este artículo voy a desglosar cada partida del coste real de un empleado para que puedas calcular
              la cifra exacta en tu caso. Sin sorpresas, sin sustos. Con números reales.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Contratar es una de las decisiones más importantes que toma un empresario. Y también una de las
              que peor se calculan. No por maldad — por desconocimiento.&rdquo;
            </blockquote>

            <h2>Los costes que todo el mundo ve</h2>

            <h3>1. Salario bruto</h3>
            <p>
              Es el punto de partida. El salario bruto incluye la retribución pactada más la parte del IRPF y la
              Seguridad Social que paga el trabajador (que se retiene de su nómina). En nuestro ejemplo: 1.500
              euros brutos al mes, 12 pagas + 2 extras = 21.000 euros brutos anuales.
            </p>

            <h3>2. Seguridad Social a cargo de la empresa</h3>
            <p>
              Este es el coste que más sorprende a los empresarios que contratan por primera vez. La empresa paga
              alrededor del 30-33 % del salario bruto en cotizaciones a la Seguridad Social (contingencias comunes,
              desempleo, formación profesional, FOGASA, accidentes de trabajo). Para un salario de 1.500 euros
              brutos, eso supone entre 450 y 500 euros al mes adicionales. Es dinero que no aparece en la nómina
              del trabajador pero que sale de tu cuenta.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">Regla rápida</p>
              <p className="mt-2 text-accent-900">
                Para hacer un cálculo rápido del coste de Seguridad Social, multiplica el salario bruto por 1,32.
                Eso te dará una aproximación bastante fiable del coste directo (salario + SS empresa). Con 1.500 €
                brutos: 1.500 x 1,32 = 1.980 €/mes. Y eso es solo el principio.
              </p>
            </div>

            <h2>Los costes que casi nadie cuenta</h2>
            <p>
              Aquí es donde la mayoría de los empresarios se pierden. El salario y la Seguridad Social son el coste
              directo, pero hay una larga lista de costes indirectos que pueden sumar tanto como los directos.
            </p>

            {/* Tarjetas de costes ocultos */}
            <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-800">1</div>
                <h3 className="text-lg font-bold text-gray-900">Vacaciones y festivos</h3>
                <p className="mt-2 text-gray-600">
                  El empleado tiene derecho a 22-30 días laborables de vacaciones al año, más 14 festivos. Eso
                  significa que de los 365 días del año, trabaja unos 220. Le pagas 365, trabaja 220. Ese diferencial
                  es un coste real.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-800">2</div>
                <h3 className="text-lg font-bold text-gray-900">Bajas y ausencias</h3>
                <p className="mt-2 text-gray-600">
                  El absentismo medio en pymes ronda el 5-7 %. Además, los primeros días de baja por enfermedad
                  común los paga la empresa al 60 %. Y si necesitas cubrir esa baja con un sustituto, el coste se
                  multiplica.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-800">3</div>
                <h3 className="text-lg font-bold text-gray-900">Espacio de trabajo</h3>
                <p className="mt-2 text-gray-600">
                  Cada persona necesita un puesto: mesa, silla, espacio. Si alquilas una oficina o local, cada metro
                  cuadrado tiene un coste. Calcula entre 100 y 300 euros al mes por puesto, dependiendo de la zona y
                  el tipo de trabajo.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-800">4</div>
                <h3 className="text-lg font-bold text-gray-900">Herramientas y equipamiento</h3>
                <p className="mt-2 text-gray-600">
                  Ordenador, teléfono, software, licencias, uniformes, EPIs, vehículo de empresa... Según el puesto,
                  esto puede ir de 50 a 500 euros al mes amortizados. Y se renueva cada 3-5 años.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">5</div>
                <h3 className="text-lg font-bold text-gray-900">Formación y adaptación</h3>
                <p className="mt-2 text-gray-600">
                  Un empleado nuevo necesita entre 1 y 3 meses para ser productivo. Durante ese tiempo, produce
                  menos de lo que cuesta. Además, necesita formación inicial y continua. Es una inversión, pero
                  es un coste real.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">6</div>
                <h3 className="text-lg font-bold text-gray-900">Tu tiempo de gestión</h3>
                <p className="mt-2 text-gray-600">
                  Cada empleado te consume tiempo: supervisión, coordinación, resolución de problemas, nóminas,
                  contratos. En una pyme sin departamento de RRHH, ese tiempo sale de tu jornada. Y tu tiempo
                  tiene un coste de oportunidad enorme.
                </p>
              </div>
            </div>

            <h2>El cálculo completo: ejemplo con 1.500 euros brutos</h2>
            <p>
              Vamos a poner números reales. Un empleado con un salario bruto de 1.500 euros al mes (21.000 euros
              anuales en 14 pagas):
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Concepto</th>
                    <th className="px-4 py-3 font-semibold text-right">Coste mensual</th>
                    <th className="px-4 py-3 font-semibold text-right">Coste anual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Salario bruto (con prorrata extras)</td>
                    <td className="px-4 py-3 text-right">1.750 €</td>
                    <td className="px-4 py-3 text-right">21.000 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Seguridad Social empresa (~32 %)</td>
                    <td className="px-4 py-3 text-right">560 €</td>
                    <td className="px-4 py-3 text-right">6.720 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Espacio de trabajo</td>
                    <td className="px-4 py-3 text-right">150 €</td>
                    <td className="px-4 py-3 text-right">1.800 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Equipamiento y herramientas</td>
                    <td className="px-4 py-3 text-right">100 €</td>
                    <td className="px-4 py-3 text-right">1.200 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Formación (amortizada)</td>
                    <td className="px-4 py-3 text-right">50 €</td>
                    <td className="px-4 py-3 text-right">600 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Bajas, ausencias y absentismo</td>
                    <td className="px-4 py-3 text-right">100 €</td>
                    <td className="px-4 py-3 text-right">1.200 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Gestión administrativa (gestoría, tu tiempo)</td>
                    <td className="px-4 py-3 text-right">80 €</td>
                    <td className="px-4 py-3 text-right">960 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Prevención de riesgos laborales</td>
                    <td className="px-4 py-3 text-right">25 €</td>
                    <td className="px-4 py-3 text-right">300 €</td>
                  </tr>
                  <tr className="bg-primary-50 font-bold">
                    <td className="px-4 py-3 text-primary-900">COSTE TOTAL REAL</td>
                    <td className="px-4 py-3 text-right text-primary-900">2.815 €</td>
                    <td className="px-4 py-3 text-right text-primary-900">33.780 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="font-semibold text-primary-800">Conclusión del cálculo</p>
              <p className="mt-2 text-primary-900">
                Un empleado con 1.500 € brutos de salario cuesta realmente entre <strong>2.800 y 3.200 € al mes</strong>,
                dependiendo del sector y las circunstancias. Eso es un <strong>87-113 % más</strong> que el salario bruto.
                Si solo miras la nómina para decidir si contratar, estás viendo menos de la mitad del coste real.
              </p>
            </div>

            <p>
              Estos números encajan directamente con la planificación financiera que explico en{" "}
              <a href="/blog/como-hacer-un-presupuesto-empresarial" className="text-accent-600 underline hover:text-accent-700">
                cómo hacer un presupuesto empresarial
              </a>{" "}
              — si no presupuestas el coste real de tu plantilla, tu presupuesto estará equivocado desde el principio.
            </p>

            <h2>Cuándo tiene sentido contratar</h2>
            <p>
              Sabiendo el coste real, la pregunta clave es: ¿genera ese empleado más valor del que cuesta? No siempre
              es fácil de calcular, pero hay indicadores claros:
            </p>

            <div className="not-prose my-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-900">Contratar tiene sentido cuando...</h3>
              <ul className="ml-4 list-disc space-y-2 text-green-800">
                <li><strong>Estás rechazando trabajo</strong> porque no das abasto. Dinero que entra y no puedes coger es el mejor indicador.</li>
                <li><strong>Tu tiempo como empresario se gasta en tareas operativas</strong> que no requieren tu nivel de decisión. Si tú haces por 15 €/hora lo que alguien podría hacer por 10, estás perdiendo dinero.</li>
                <li><strong>El nuevo puesto genera ingresos directos</strong> (comercial, técnico facturable) y puedes estimar un retorno superior al coste.</li>
                <li><strong>Llevas 3-6 meses consecutivos</strong> con carga de trabajo que excede tu capacidad y la de tu equipo actual.</li>
              </ul>
            </div>

            <div className="not-prose my-8 rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-red-900">Contratar NO tiene sentido cuando...</h3>
              <ul className="ml-4 list-disc space-y-2 text-red-800">
                <li><strong>Tienes un pico puntual de trabajo.</strong> Mejor subcontrata, usa freelancers o empresas de trabajo temporal.</li>
                <li><strong>No tienes procesos definidos.</strong> Si contratas sin tener claro qué va a hacer esa persona, acabarás con alguien que depende de ti para todo.</li>
                <li><strong>Tus márgenes no lo soportan.</strong> Si después de sumar el coste real tu beneficio desaparece, estás subvencionando empleo con tu patrimonio.</li>
                <li><strong>Contratas para resolver un problema de organización.</strong> Más personas en un sistema caótico solo generan más caos.</li>
              </ul>
            </div>

            <p>
              Para tomar esta decisión con datos, necesitas tener claros tus indicadores financieros. Te recomiendo
              revisar{" "}
              <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                los indicadores clave que toda empresa debe controlar
              </a>{" "}
              — sin esas cifras, cualquier decisión de contratación es un tiro al aire.
            </p>

            <h2>Alternativas a contratar que deberías considerar</h2>
            <p>
              Antes de asumir un coste fijo de 2.800-3.200 euros al mes, valora si alguna de estas opciones resuelve
              tu problema con menor riesgo:
            </p>
            <ul>
              <li><strong>Freelancers o autónomos:</strong> pagas por proyecto o por horas. Sin coste fijo, sin Seguridad Social, sin gestión de personal. Ideal para tareas especializadas o puntuales.</li>
              <li><strong>Subcontratación:</strong> externaliza funciones completas (contabilidad, marketing, limpieza, logística). Conviertes un coste fijo en variable.</li>
              <li><strong>Automatización:</strong> muchas tareas repetitivas que hoy hace una persona se pueden automatizar con herramientas que cuestan 20-50 euros al mes.</li>
              <li><strong>Reorganización interna:</strong> a veces no necesitas más personas, sino organizar mejor las que ya tienes. Revisa procesos antes de contratar.</li>
              <li><strong>Contrato a tiempo parcial:</strong> si necesitas 20 horas semanales de alguien, no contrates a jornada completa. Ajusta el contrato a la necesidad real.</li>
            </ul>

            <p>
              La gestión de personas en una pyme es un tema amplio. Si ya tienes equipo y quieres mejorar cómo lo
              gestionas, lee{" "}
              <a href="/blog/como-gestionar-empleados-pyme" className="text-accent-600 underline hover:text-accent-700">
                cómo gestionar empleados en una pyme
              </a>.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Contratar a alguien es fácil. Pagar su coste real durante 12 meses consecutivos, incluso en los
              meses flojos, es lo que separa una decisión valiente de una decisión imprudente.&rdquo;
            </blockquote>

            <h2>Checklist antes de contratar</h2>

            <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-900">Antes de firmar un contrato, responde a estas preguntas</h3>
              <ol className="ml-4 list-decimal space-y-2 text-amber-800">
                <li>He calculado el coste real total (no solo el salario bruto).</li>
                <li>Mi facturación actual puede absorber ese coste durante al menos 6 meses, incluso en meses flojos.</li>
                <li>Tengo claro qué va a hacer esa persona (tareas, objetivos, indicadores).</li>
                <li>He descartado alternativas más flexibles (freelancer, subcontratación, automatización).</li>
                <li>El puesto genera valor medible: ingresos directos, liberación de mi tiempo o mejora de servicio al cliente.</li>
                <li>Tengo capacidad para formar, supervisar y gestionar a esa persona (o alguien en mi equipo la tiene).</li>
              </ol>
            </div>

            <h2>Conclusión</h2>
            <p>
              Contratar es una de las palancas de crecimiento más potentes que tiene una pyme. Pero solo funciona si
              haces bien los números antes. No después, cuando ya tienes el coste encima y descubres que los márgenes
              no dan.
            </p>
            <p>
              El salario bruto es solo la punta del iceberg. Seguridad Social, vacaciones, bajas, espacio, herramientas,
              formación y tu propio tiempo de gestión pueden duplicar la cifra. Conocer el coste real no es para
              desanimarte — es para que tomes la decisión con datos, no con esperanza.
            </p>
            <p>
              Si los números cuadran, contrata sin miedo. Un buen empleado, bien calculado y bien gestionado, es la
              mejor inversión que puede hacer un negocio. Pero si los números no cuadran, es mejor saberlo antes que
              descubrirlo seis meses después mirando la cuenta del banco.
            </p>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="cuanto-cuesta-realmente-un-empleado" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Necesitas ayuda para decidir si contratar o cómo organizar tu equipo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudo a calcular los números reales, valorar alternativas y tomar la decisión con criterio.
            Diagnóstico gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="cuanto-cuesta-realmente-un-empleado" />
    </>
  );
}
