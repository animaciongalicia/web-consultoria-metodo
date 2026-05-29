import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: una clínica con agenda llena y rentabilidad baja | Consultoría Método",
  description:
    "Caso real de una clínica en la provincia de A Coruña con buena ocupación pero márgenes muy bajos. Análisis de servicios, captación, recall de pacientes y reorganización de precios. Consultor de negocios para clínicas en Galicia.",
  keywords: [
    "caso éxito clínica",
    "rentabilidad clínica",
    "consultor clínicas Galicia",
    "consultoría sanitaria A Coruña",
    "mejorar ocupación clínica",
    "recall pacientes",
    "precios servicios clínica",
    "consultor empresas salud",
  ],
  openGraph: {
    title: "Caso de éxito: una clínica con agenda llena y rentabilidad baja",
    description:
      "Caso real de una clínica en A Coruña que trabajaba a destajo pero no ganaba lo que debería. Qué encontramos y qué cambiamos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-clinica-ocupacion-rentabilidad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: una clínica con agenda llena y rentabilidad baja",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-21",
};

export default function CasoExitoClinica() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Caso de éxito — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Una clínica con agenda llena y rentabilidad baja: cómo reorganizamos el negocio para que cada hora contara
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Ocupación alta, pacientes fieles, profesionales cualificados — y un margen que no
            compensaba el esfuerzo. Este es el caso real de una clínica en la provincia de
            A Coruña que facturaba bien pero no conseguía que el negocio fuera rentable.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — A Coruña, Galicia
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            {/* ── Situación de partida ── */}
            <h2>La situación de partida: mucho trabajo, poco beneficio</h2>
            <p>
              La clínica llevaba más de seis años abierta en una localidad de la provincia de A Coruña.
              Ofrecía servicios de fisioterapia, podología y estética avanzada. Tenía dos profesionales
              contratados, una recepcionista a media jornada y la propia dueña — que atendía pacientes,
              gestionaba la agenda, negociaba con proveedores y hacía las cuentas por la noche.
            </p>
            <p>
              Desde fuera, todo funcionaba: la agenda estaba llena a partir de las 10 de la mañana, los
              pacientes repetían y el boca a boca era el principal canal de captación. Pero al final de
              cada mes, después de pagar nóminas, alquiler, suministros, productos y seguros, la dueña
              se quedaba con menos de 1.200 € para ella. Trabajando 50 horas semanales.
            </p>
            <p>
              &quot;Tengo pacientes, tengo trabajo, pero no entiendo por qué no me da para más&quot;.
              Esa fue la frase con la que me contactó. Una situación que, por desgracia, es muy frecuente
              en{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                las pymes de la provincia de A Coruña
              </a>.
            </p>

            {/* ── Diagnóstico visual ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">Radiografía del negocio — Antes de la consultoría</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facturación mensual</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">~8.500 €</p>
                  <p className="mt-1 text-sm text-gray-500">Buen volumen, pero estancada 2 años</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Beneficio neto dueña</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">&lt; 1.200 €</p>
                  <p className="mt-1 text-sm text-gray-500">Menos que el sueldo de sus empleadas</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ocupación agenda</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">78 %</p>
                  <p className="mt-1 text-sm text-gray-500">Alta en mañanas, baja en tardes</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Tasa de anulación</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">22 %</p>
                  <p className="mt-1 text-sm text-gray-500">1 de cada 5 citas se perdía</p>
                </div>
              </div>
            </div>

            <h2>Lo que encontramos al poner los números encima de la mesa</h2>
            <p>
              Cuando hicimos el análisis de diagnóstico con el{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Método Rentabilismo
              </a>, aparecieron 5 problemas que, juntos, explicaban por qué una clínica con buena
              clientela apenas dejaba beneficio:
            </p>

            <ul>
              <li>
                <strong>Precios sin actualizar desde la apertura.</strong> La fisioterapia seguía a 35 €
                la sesión, el mismo precio de hacía seis años. En ese tiempo habían subido alquiler,
                suministros, materiales y salarios — pero los precios no.
              </li>
              <li>
                <strong>Servicios con rentabilidad muy desigual.</strong> La estética avanzada generaba un
                margen del 55 %, pero la fisioterapia — que ocupaba el 60 % de la agenda — dejaba un
                margen del 18 % después de costes. Nadie había hecho ese cálculo.
              </li>
              <li>
                <strong>22 % de anulaciones y huecos sin cubrir.</strong> No existía una política de
                anulación, no se enviaban recordatorios y no había lista de espera para cubrir
                cancelaciones de última hora. Cada hueco era dinero perdido.
              </li>
              <li>
                <strong>Nulo sistema de recall.</strong> Los pacientes venían, terminaban su tratamiento
                y nadie les contactaba después. No había seguimiento, no había bonos de continuidad, no
                había comunicación post-tratamiento. Se dependía del boca a boca pasivo.
              </li>
              <li>
                <strong>La dueña hacía todo.</strong> Atendía pacientes 6 horas al día, gestionaba agenda,
                contestaba llamadas entre sesiones, compraba material y hacía la contabilidad. No tenía
                tiempo ni para pensar en el negocio.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Dato clave: el 60 % de la agenda estaba ocupado por el servicio con menor margen.
                La clínica trabajaba mucho, pero no trabajaba en lo que más rentaba.
              </p>
            </div>

            {/* ── Las acciones ── */}
            <h2>Qué cambiamos: las 5 palancas que transformaron el negocio</h2>

            {/* Acción 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Escandallo de cada servicio</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Calculamos el coste real de cada sesión: tiempo del profesional, producto consumido,
                uso de equipamiento, porcentaje de gastos fijos asignables. El resultado fue revelador:
                la sesión de fisioterapia a 35 € dejaba un margen real de 6,30 € — menos del 18 %.
                En cambio, ciertos tratamientos de estética generaban más de 30 € de margen neto por sesión.
              </p>
            </div>

            {/* Acción 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Ajuste de precios por servicio</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Subimos la fisioterapia de 35 € a 42 €. No de golpe — primero para nuevos pacientes,
                después para los habituales con un aviso personal. También creamos una tarifa bono
                (5 sesiones a 190 €) que garantizaba continuidad y mejoraba el flujo de caja.
                El resultado: cero bajas. Ningún paciente se marchó por la subida.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Para profundizar en esta estrategia:{" "}
                <a href="/blog/como-subir-precios-sin-perder-clientes" className="text-accent-600 underline hover:text-accent-700">
                  Cómo subir precios sin perder clientes
                </a>.
              </p>
            </div>

            {/* Acción 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Sistema de recall y fidelización</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Implantamos un sistema sencillo de seguimiento post-tratamiento. A los 30 días
                del alta, un mensaje personalizado preguntando por la evolución y ofreciendo una
                sesión de revisión. A los 90 días, un recordatorio de mantenimiento. Sin presión,
                sin spam — simplemente mantener el contacto.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                En tres meses, el 35 % de los pacientes que habían terminado tratamiento volvieron
                por una revisión o iniciaron uno nuevo. Antes, esa cifra era inferior al 8 %.
              </p>
            </div>

            {/* Acción 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Control de anulaciones y huecos</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Establecimos tres cosas simples: recordatorio automático por WhatsApp 24 h antes
                de la cita, política de anulación mínima de 12 h (comunicada con normalidad, sin
                castigos) y una lista de espera para cubrir cancelaciones con pacientes que
                pedían hueco.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                La tasa de anulación bajó del 22 % al 9 % en dos meses. Cada punto de mejora
                representaba unas 3-4 citas recuperadas al mes — dinero que antes simplemente
                se perdía.
              </p>
            </div>

            {/* Acción 5 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-gray-900">Reorganizar el rol de la dueña</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Este fue el cambio más difícil de asumir pero el más importante. La dueña redujo
                su tiempo de atención directa de 6 horas a 4 horas diarias. Las 2 horas liberadas
                se dedicaron a gestión: análisis de números, recall de pacientes, planificación de
                servicios y acciones comerciales puntuales. Dejó de ser técnico a tiempo completo
                para ser también directora de su propio negocio.
              </p>
            </div>

            {/* ── Resultados — Before/After visual ── */}
            <h2>Los resultados: misma clínica, otra cuenta de resultados</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                {/* ANTES */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">Antes</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación mensual</span>
                      <span className="text-sm font-bold text-gray-900">8.500 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Margen neto</span>
                      <span className="text-sm font-bold text-red-600">~14 %</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Beneficio dueña</span>
                      <span className="text-sm font-bold text-red-600">&lt; 1.200 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Tasa anulación</span>
                      <span className="text-sm font-bold text-red-600">22 %</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Retorno pacientes</span>
                      <span className="text-sm font-bold text-red-600">8 %</span>
                    </div>
                  </div>
                </div>
                {/* DESPUÉS */}
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Después (4 meses)</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación mensual</span>
                      <span className="text-sm font-bold text-gray-900">11.800 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Margen neto</span>
                      <span className="text-sm font-bold text-emerald-700">28 %</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Beneficio dueña</span>
                      <span className="text-sm font-bold text-emerald-700">3.300 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Tasa anulación</span>
                      <span className="text-sm font-bold text-emerald-700">9 %</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Retorno pacientes</span>
                      <span className="text-sm font-bold text-emerald-700">35 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Incremento del 39 % en facturación y del 175 % en beneficio neto — sin inversión en
                infraestructura, sin nuevo personal, sin cambiar de local.
              </p>
            </div>

            <p>
              Pero el cambio más importante no aparece en la tabla: la dueña dejó de trabajar
              50 horas semanales atrapada en la operativa. Empezó a dirigir su negocio. A tomar
              decisiones con datos. A planificar. Y por primera vez en años, sentía que la
              clínica trabajaba para ella — no al revés.
            </p>

            {/* ── Lecciones ── */}
            <h2>Las lecciones que aplican a cualquier clínica o centro de salud</h2>
            <p>
              Este caso no es excepcional. Es el patrón que encuentro en la mayoría de clínicas,
              centros de fisioterapia, consultas de podología y centros de estética que analizo
              en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>. Los problemas se repiten:
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                "Precios que no se revisan porque «el paciente ya está acostumbrado».",
                "Agenda llena del servicio que menos rentabilidad deja.",
                "Anulaciones que nadie mide ni gestiona — simplemente se asumen.",
                "Pacientes que terminan tratamiento y desaparecen porque nadie les contacta.",
                "El dueño atrapado en la parte técnica sin tiempo para gestionar.",
              ].map((lesson, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>

            <p>
              Si te reconoces en alguno de estos puntos, no es un problema de esfuerzo. Es un
              problema de estructura. Y tiene solución — normalmente más rápida y más sencilla de
              lo que imaginas.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Para entender cómo funciona este análisis paso a paso, lee{" "}
                <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                  qué números debe controlar cualquier empresa
                </a>. Y si quieres saber si tu negocio es realmente rentable:{" "}
                <a href="/blog/como-saber-si-mi-negocio-es-rentable" className="text-accent-600 underline hover:text-accent-700">
                  cómo saber si tu negocio es rentable de verdad
                </a>.
              </p>
            </div>

            <h2>¿Por qué funciona la consultoría en el sector sanitario?</h2>
            <p>
              Porque las clínicas y centros de salud tienen palancas de mejora muy concretas y
              medibles: precio por sesión, ocupación de agenda, tasa de retorno, mix de servicios.
              Son negocios donde los cambios se notan en semanas, no en años.
            </p>
            <p>
              Como{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en A Coruña
              </a>, llevo años trabajando con profesionales del sector salud en la provincia.
              Y lo que más me sorprende siempre es la cantidad de margen que se pierde por no
              hacer cálculos que, en el fondo, son sencillos. No hacen falta grandes inversiones.
              Hace falta sentarse, poner los números encima de la mesa y tomar decisiones con
              criterio.
            </p>
            <p>
              Eso es exactamente lo que hago en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>: analizar la realidad de tu negocio y ayudarte a decidir qué cambiar para que
              funcione mejor. Sin humo, sin teoría. Acciones concretas y resultados medibles.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="caso-exito-clinica-ocupacion-rentabilidad" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu clínica trabaja mucho pero no gana lo que debería?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La mayoría de clínicas pierden entre un 15 % y un 25 % de margen por cosas que se
            pueden corregir en semanas. Si quieres saber dónde está el dinero que se te escapa,
            hablemos. El diagnóstico inicial es gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Consultoría sectorial */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            ¿Tienes una clínica, gimnasio o centro de bienestar?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en salud y bienestar: rentabilidad por servicio, captación de pacientes, recall y organización.
          </p>
          <a
            href="/consultoria-salud-bienestar"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para salud y bienestar →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-clinica-ocupacion-rentabilidad" />
    </>
  );
}
