import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Consultor de empresas en A Coruña: guía para pymes que buscan ayuda real | Consultoría Método",
  description:
    "Guía completa sobre cómo elegir consultor de empresas en la provincia de A Coruña: qué servicios esperar, precios orientativos, diferencia con gestoría, sectores atendidos y errores a evitar.",
  keywords: [
    "consultor empresas A Coruña",
    "consultor de negocios Coruña",
    "consultoría pymes A Coruña",
    "consultoría empresarial provincia Coruña",
    "elegir consultor Galicia",
    "qué hace un consultor de empresas",
    "precio consultoría pymes",
    "diferencia consultor y gestoría",
  ],
  openGraph: {
    title: "Consultor de empresas en A Coruña: guía para pymes que buscan ayuda real",
    description:
      "Qué esperar de un consultor de empresas en A Coruña, cuánto cuesta, cómo elegir bien y en qué se diferencia de una gestoría.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/consultor-empresas-a-coruna-guia" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Consultor de empresas en A Coruña: guía para pymes que buscan ayuda real",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-21",
};

export default function ConsultorCorunaGuia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Guía local — A Coruña</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultor de empresas en A Coruña: guía para pymes que buscan ayuda real
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Si tu pyme está en la provincia de A Coruña y te planteas contratar consultor,
            esta guía te explica qué esperar, cómo elegir bien, cuánto cuesta y en qué se
            diferencia de una gestoría.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — A Coruña, Galicia
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <h2>Por qué una pyme en A Coruña contrata un consultor</h2>
            <p>
              La mayoría de pymes de la provincia de A Coruña llegan a la consultoría empujadas
              por la misma situación: se dan cuenta de que, aunque trabajan más que nunca, el
              negocio no avanza. Facturan, pero no ganan. Tienen clientes, pero están estancados.
              Trabajan 60 horas a la semana y al final del mes apenas queda margen.
            </p>
            <p>
              En esos momentos, una conversación con alguien externo — que haya visto muchos
              negocios parecidos y sepa dónde mirar — suele ser el primer paso para desatascar
              el negocio. Eso es lo que hace un{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en A Coruña
              </a>: aportar mirada externa, método y decisiones.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Un consultor no viene a decirte lo que tú ya sabes. Viene a ayudarte a ver lo que
                no ves y a tomar decisiones con criterio sobre lo que sí ves pero no te atreves
                a tocar.
              </p>
            </div>

            <h2>Qué hace realmente un consultor de empresas (y qué no hace)</h2>
            <p>
              En A Coruña, como en el resto de España, se usa mucho la palabra &quot;consultor&quot;
              para cosas muy distintas. Conviene poner orden antes de contratar.
            </p>

            <h3>Lo que sí hace un consultor de negocios</h3>
            <ul>
              <li>Analiza los números reales del negocio — márgenes, costes, productividad, punto de equilibrio.</li>
              <li>Identifica problemas estructurales: precios mal puestos, servicios deficitarios, exceso de catálogo, mala organización del tiempo.</li>
              <li>Propone un plan de acción priorizado y medible.</li>
              <li>Acompaña la ejecución y ajusta el plan según los resultados.</li>
              <li>Ayuda al empresario a tomar decisiones difíciles con criterio — no con intuición.</li>
            </ul>

            <h3>Lo que NO hace un consultor de negocios</h3>
            <ul>
              <li>No te lleva las nóminas ni los impuestos (eso es la gestoría).</li>
              <li>No te diseña la web ni te gestiona las redes sociales (eso es marketing).</li>
              <li>No te hace el plan de empresa para una subvención (eso es ingeniería financiera).</li>
              <li>No te vende software ni CRM (eso es tecnología).</li>
            </ul>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Para profundizar:{" "}
                <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">
                  Cuándo contratar un consultor de negocios (y cuándo no)
                </a>.
              </p>
            </div>

            <h2>Diferencia entre consultor y gestoría</h2>
            <p>
              Es la pregunta más frecuente que me hacen pymes de la provincia. Y tiene una
              respuesta sencilla:
            </p>

            <div className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                <div>Gestoría</div>
                <div>Consultor de negocios</div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <div>Cumplimiento legal, fiscal y laboral</div>
                <div>Rentabilidad, estrategia y decisiones</div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                <div>Mira al pasado: liquidar impuestos, presentar modelos</div>
                <div>Mira al futuro: dónde va el negocio y cómo mejorarlo</div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <div>Te dice lo que debes a Hacienda</div>
                <div>Te dice qué servicios te ganan dinero y cuáles te lo quitan</div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                <div>Obligatoria para cumplir la ley</div>
                <div>Opcional, pero rentable si se elige bien</div>
              </div>
            </div>

            <p>
              No son servicios que compitan — son complementarios. Una buena gestoría te pone al
              día con la Administración; un buen consultor te pone al día con tu propio negocio.
            </p>

            <h2>Cuánto cuesta un consultor de empresas en A Coruña</h2>
            <p>
              Depende del alcance del trabajo. Pero para que te sirva como referencia real, estos
              son los rangos habituales en la provincia:
            </p>

            <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Diagnóstico</p>
                <p className="mt-2 text-2xl font-extrabold text-gray-900">300–600 €</p>
                <p className="mt-1 text-xs text-gray-500">Sesión inicial de análisis + informe con recomendaciones priorizadas</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Programa corto</p>
                <p className="mt-2 text-2xl font-extrabold text-gray-900">1.000–1.800 €</p>
                <p className="mt-1 text-xs text-gray-500">Acompañamiento de 4–8 semanas con ejecución de acciones concretas</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Programa completo</p>
                <p className="mt-2 text-2xl font-extrabold text-gray-900">2.000–4.500 €</p>
                <p className="mt-1 text-xs text-gray-500">Transformación del negocio: 3–6 meses de trabajo estructurado</p>
              </div>
            </div>

            <p>
              Hay consultorías más caras — normalmente grandes firmas con estructura pesada — y
              más baratas, que suelen ser asesores comerciales disfrazados de consultores. El
              rango indicado corresponde a consultoría real para pymes en la provincia de
              A Coruña.
            </p>

            <h2>Cómo elegir bien consultor de empresas en A Coruña</h2>

            <div className="not-prose my-8 space-y-3">
              {[
                { t: "Busca experiencia, no titulitis", d: "Importa más haber gestionado y analizado muchos negocios reales que tener un MBA de renombre." },
                { t: "Pide ejemplos concretos", d: "Un consultor serio te explicará casos reales con nombres de sectores, cifras y decisiones — no generalidades." },
                { t: "Comprueba que pregunta más que habla", d: "Si en la primera reunión hace más presentación que escucha, desconfía." },
                { t: "Claridad en precios y entregables", d: "Debe decirte qué vas a recibir, en qué plazo y cuánto cuesta. Sin zonas grises." },
                { t: "Cercanía y conocimiento del tejido local", d: "Un consultor que conoce la provincia de A Coruña entiende la estacionalidad, el tamaño del mercado local y el perfil de empresa gallega." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-700 text-xs font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.t}</p>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Sectores donde más se contrata consultoría en la provincia</h2>
            <p>
              Por experiencia trabajando en el{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                área metropolitana de A Coruña
              </a>{" "}
              y en comarcas como Betanzos, Ferrolterra, Barbanza, Costa da Morte o Bergantiños,
              estos son los sectores donde más pymes contratan consultoría:
            </p>
            <ul>
              <li><strong>Hostelería y restauración</strong> — escandallos, cartas, márgenes.</li>
              <li><strong>Comercio local y retail</strong> — diferenciación frente a la gran distribución.</li>
              <li><strong>Clínicas y servicios profesionales</strong> — rentabilidad por servicio, recall, precios.</li>
              <li><strong>Talleres y pequeña industria</strong> — productividad, pricing y organización.</li>
              <li><strong>Empresas de servicios</strong> — modelo de negocio, recurrencia, cartera.</li>
              <li><strong>Formación y centros de actividad</strong> — catálogo, estacionalidad, mix.</li>
            </ul>

            <h2>Presencial o por videollamada: ¿qué funciona mejor?</h2>
            <p>
              Atiendo tanto en formato presencial — desplazándome a la empresa en la provincia
              de A Coruña — como por videollamada para pymes en el resto de Galicia y España.
              Ninguno es superior al otro. El formato presencial permite ver la operativa real,
              hablar con el equipo y captar detalles que no salen en un informe. La videollamada, en
              cambio, ahorra tiempo y facilita que las sesiones de seguimiento sean más
              frecuentes.
            </p>
            <p>
              En la práctica, muchos proyectos combinan ambos: sesiones presenciales clave al
              principio y al final, y seguimiento por videollamada durante la ejecución. Eso funciona
              especialmente bien en pymes de Santiago, Ferrol, Carballo, Betanzos o Arteixo.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Si quieres ver la metodología concreta que utilizo:{" "}
                <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                  Método Rentabilismo
                </a>. Y si prefieres ver casos reales de pymes con las que he trabajado:{" "}
                <a href="/experiencia-sectores-casos" className="text-accent-600 underline hover:text-accent-700">
                  sectores y casos
                </a>.
              </p>
            </div>

            <h2>El primer paso: diagnóstico gratuito</h2>
            <p>
              La mayoría de pymes que acaban contratando consultoría empiezan por una conversación
              gratuita de 30 minutos. Sirve para que me cuentes dónde está la frustración, que yo
              haga las preguntas clave y para decidir juntos si tiene sentido trabajar — o no. Si
              no lo tiene, lo digo directamente. No todo el mundo necesita un consultor.
            </p>
            <p>
              Si tu empresa está en la provincia de A Coruña, en el resto de Galicia o en
              cualquier punto de España, puedes solicitar ese primer contacto desde la página de{" "}
              <a href="/diagnostico-negocio" className="text-accent-600 underline hover:text-accent-700">
                diagnóstico gratuito
              </a>{" "}
              o escribirme directamente por{" "}
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent-600 underline hover:text-accent-700">
                WhatsApp
              </a>.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="consultor-empresas-a-coruna-guia" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu pyme de la provincia de A Coruña necesita una mirada externa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            30 minutos de conversación gratuita para entender dónde está el cuello de botella
            de tu negocio. Sin presión, sin compromiso, sin letra pequeña.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="consultor-empresas-a-coruna-guia" />
    </>
  );
}
