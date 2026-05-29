import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: una empresa de formación que facturaba sin saber si ganaba dinero | Consultoría Método",
  description:
    "Caso real de una empresa de formación en Galicia con 14 cursos en catálogo y cero control de márgenes. Escandallo por curso, eliminación de líneas deficitarias y producto recurrente. Consultor de negocios para empresas de formación en A Coruña.",
  keywords: [
    "caso éxito empresa formación",
    "rentabilidad formación",
    "consultor empresas formación Galicia",
    "escandallo curso",
    "estacionalidad formación",
    "producto recurrente formación",
    "consultor formación A Coruña",
    "consultoría empresarial formación",
  ],
  openGraph: {
    title: "Caso de éxito: una empresa de formación que facturaba sin saber si ganaba dinero",
    description:
      "Caso real de una empresa de formación en Galicia que tenía 14 cursos activos pero no sabía cuáles rentaban. Qué encontramos y qué cambiamos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-empresa-formacion-rentabilidad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: una empresa de formación que facturaba sin saber si ganaba dinero",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-21",
};

export default function CasoExitoFormacion() {
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
            Una empresa de formación con 14 cursos activos — y ninguna idea de cuáles daban dinero
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Catálogo amplio, alumnos satisfechos, buena reputación — y un problema de base: nadie
            sabía, curso por curso, cuál generaba beneficio y cuál solo ocupaba agenda. Este es el
            caso real de una empresa de formación en la provincia de A Coruña que descubrió que
            casi la mitad de sus cursos no eran rentables.
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

            <h2>La situación de partida: mucha actividad, poco control</h2>
            <p>
              La empresa ofrecía formación técnica y profesional para particulares y empresas en
              la provincia de A Coruña. Tenía 14 cursos en catálogo, dos aulas propias, un equipo
              de seis formadores (algunos internos, la mayoría externos) y una administrativa que
              coordinaba matrículas, horarios y facturación.
            </p>
            <p>
              Facturaba unos 180.000 € al año y llevaba 8 años en el mercado. La dirección estaba
              convencida de que el negocio iba bien — hasta que los dos últimos ejercicios
              empezaron a cerrar con resultado plano o ligeramente negativo. Ahí es cuando me
              contactaron.
            </p>
            <p>
              &quot;No entendemos qué está pasando. Facturamos lo mismo que hace tres años pero ya
              no queda nada a final de año&quot;. Eso me dijo la gerente en la primera reunión.
              La respuesta no estaba en la facturación total — estaba en lo que se facturaba y
              cómo se facturaba.
            </p>

            {/* ── Diagnóstico visual ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">Radiografía del catálogo — Antes de la consultoría</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Cursos activos</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">14</p>
                  <p className="mt-1 text-sm text-gray-500">Ningún escandallo de costes</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facturación anual</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">~180.000 €</p>
                  <p className="mt-1 text-sm text-gray-500">Estancada, resultado plano</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Estacionalidad</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">Muy alta</p>
                  <p className="mt-1 text-sm text-gray-500">70 % facturación oct-may</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ingresos recurrentes</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">0 €</p>
                  <p className="mt-1 text-sm text-gray-500">Todo venta de curso único</p>
                </div>
              </div>
            </div>

            <h2>Lo que encontramos al escandallar cada curso</h2>
            <p>
              El análisis con el{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Método Rentabilismo
              </a>{" "}
              empezó con lo más básico — y lo más revelador: calcular, curso por curso, cuánto
              costaba realmente impartirlo y cuánto dejaba de margen:
            </p>

            <ul>
              <li>
                <strong>Escandallo inexistente.</strong> Los precios de cada curso se habían
                fijado hace años mirando al mercado. Nadie había sumado coste del formador,
                horas de coordinación, materiales, amortización del aula, suministros y gastos
                estructurales asignables.
              </li>
              <li>
                <strong>Formadores externos con márgenes muy dispares.</strong> Algunos se pagaban
                a 25 € la hora y dejaban buen margen; otros a 45-50 € la hora dejaban un margen
                mínimo o directamente negativo — especialmente cuando el grupo no llenaba.
              </li>
              <li>
                <strong>Cursos con grupos muy pequeños.</strong> Cuatro de los 14 cursos se
                impartían con 5-7 alumnos cuando el punto muerto estaba en 12. Se hacían
                &quot;porque estaban en el catálogo&quot;, no porque fueran rentables.
              </li>
              <li>
                <strong>Estacionalidad brutal.</strong> Junio, julio y agosto eran tres meses
                prácticamente muertos. La estructura de costes fijos seguía corriendo, pero los
                ingresos caían más del 80 %.
              </li>
              <li>
                <strong>Cero producto recurrente.</strong> Cada alumno se captaba, pagaba su
                curso y desaparecía. No había formación continua, ni suscripciones, ni acuerdos
                anuales con empresas, ni contenido online de pago.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Dato clave: de los 14 cursos en catálogo, 6 eran claramente rentables, 2 estaban en
                punto de equilibrio — y 6 perdían dinero sistemáticamente. La empresa estaba
                subvencionando la mitad de su catálogo con la otra mitad.
              </p>
            </div>

            {/* ── Tabla visual de cursos ── */}
            <div className="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-base font-bold text-gray-900">Clasificación del catálogo por rentabilidad</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">6</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cursos rentables</p>
                      <p className="text-xs text-gray-500">Margen &gt; 25 %, grupos al máximo</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Mantener y potenciar</span>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">2</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cursos en equilibrio</p>
                      <p className="text-xs text-gray-500">Margen 0–10 %, grupos irregulares</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Rediseñar</span>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">6</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cursos deficitarios</p>
                      <p className="text-xs text-gray-500">Margen negativo, grupos por debajo del punto muerto</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">Eliminar o transformar</span>
                </div>
              </div>
            </div>

            {/* ── Las acciones ── */}
            <h2>Qué cambiamos: las 5 decisiones que dieron la vuelta al negocio</h2>

            {/* Acción 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Reducción del catálogo — de 14 a 9 cursos</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Eliminamos 5 de los 6 cursos deficitarios. El sexto lo rediseñamos: cambio de
                formador, reducción de horas y ajuste del precio al alza. Los 2 cursos en
                equilibrio se ajustaron subiendo precio y limitando los grupos a un mínimo de 10
                alumnos para activar la convocatoria.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Decisión difícil, porque había cursos con mucha tradición y alumnos habituales.
                Pero el criterio fue claro: la empresa no podía seguir subvencionando formación
                que no rentaba.
              </p>
            </div>

            {/* Acción 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Renegociación con formadores externos</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Los formadores externos más caros se renegociaron por tarifas mixtas (fijo + variable
                por número de alumnos), lo que alineaba sus intereses con los de la empresa.
                Algunos aceptaron, otros no. Los que no aceptaron fueron sustituidos progresivamente.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                El coste medio de impartición bajó un 18 % sin pérdida de calidad percibida por
                los alumnos.
              </p>
            </div>

            {/* Acción 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Lanzamiento de producto recurrente — formación continua empresarial</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                El cambio más importante del proyecto. Diseñamos un producto nuevo: un programa de
                formación continua para empresas, con cuota anual y plan formativo personalizado.
                No era un curso — era un servicio de acompañamiento formativo para pymes de la
                provincia.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                En los primeros 6 meses, se firmaron 11 acuerdos anuales con empresas locales.
                Esto generó un ingreso recurrente de unos 3.800 € mensuales que antes no existía —
                y que estabilizaba la facturación todo el año.
              </p>
            </div>

            {/* Acción 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Ataque a la estacionalidad</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Para los meses de verano diseñamos dos formatos específicos: cursos intensivos
                cortos (1-2 semanas) orientados a alumnos que querían aprovechar el verano y
                bonos de formación para empresas con sus plantillas. La estacionalidad no
                desapareció, pero junio, julio y agosto dejaron de ser meses muertos.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Relacionado:{" "}
                <a href="/blog/como-mejorar-el-flujo-de-caja" className="text-accent-600 underline hover:text-accent-700">
                  Cómo mejorar el flujo de caja en tu negocio
                </a>.
              </p>
            </div>

            {/* Acción 5 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-gray-900">Sistema mensual de control por curso</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Establecimos un cuadro de mando mensual con 5 indicadores clave por curso: número
                de matriculados, tasa de ocupación, margen bruto, coste de adquisición y
                satisfacción del alumno. Esto permitió que las decisiones sobre convocatorias,
                precios y promociones dejaran de tomarse a ciegas.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Relacionado:{" "}
                <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                  Qué números debe controlar cualquier empresa
                </a>.
              </p>
            </div>

            {/* ── Resultados — Before/After visual ── */}
            <h2>Los resultados: menos catálogo, más beneficio</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">Antes</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Cursos activos</span>
                      <span className="text-sm font-bold text-gray-900">14</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación anual</span>
                      <span className="text-sm font-bold text-gray-900">180.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Margen neto</span>
                      <span className="text-sm font-bold text-red-600">~0–2 %</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Ingresos recurrentes</span>
                      <span className="text-sm font-bold text-red-600">0 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Meses en pérdidas</span>
                      <span className="text-sm font-bold text-red-600">3 al año</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Después (12 meses)</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Cursos activos</span>
                      <span className="text-sm font-bold text-gray-900">9</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación anual</span>
                      <span className="text-sm font-bold text-gray-900">205.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Margen neto</span>
                      <span className="text-sm font-bold text-emerald-700">18 %</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Ingresos recurrentes</span>
                      <span className="text-sm font-bold text-emerald-700">3.800 €/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Meses en pérdidas</span>
                      <span className="text-sm font-bold text-emerald-700">0</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Menos cursos, más facturación, margen positivo estable y un componente recurrente
                que transforma la salud financiera del negocio.
              </p>
            </div>

            <p>
              Pero el resultado más importante fue estratégico: la empresa pasó de depender de
              una &quot;temporada alta&quot; para sobrevivir al resto del año, a tener ingresos
              estables los 12 meses. Eso cambia la manera de planificar, invertir y tomar
              decisiones de futuro.
            </p>

            {/* ── Lecciones ── */}
            <h2>Las lecciones que aplican a cualquier empresa de formación o servicios</h2>
            <p>
              Este patrón se repite en muchos negocios de formación, pero también en academias,
              centros de idiomas, consultorías técnicas y cualquier empresa que venda servicios
              con catálogo amplio y estacionalidad marcada:
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                "Catálogo amplio sin saber qué producto renta y qué producto se arrastra por tradición.",
                "Precios fijados por comparación con el mercado — nunca por escandallo real de costes.",
                "Grupos mínimos por debajo del punto muerto «porque ya están convocados».",
                "Negocio 100 % de venta única — cada cliente hay que captarlo desde cero otra vez.",
                "Estacionalidad asumida como inevitable en vez de como un problema a resolver.",
              ].map((lesson, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Si vendes servicios con catálogo amplio y te suena esta descripción, te recomiendo
                leer{" "}
                <a href="/blog/como-calcular-margen-beneficio-producto" className="text-accent-600 underline hover:text-accent-700">
                  cómo calcular el margen de beneficio de un producto o servicio
                </a>. Y también{" "}
                <a href="/blog/como-reducir-gastos-empresa-sin-recortar" className="text-accent-600 underline hover:text-accent-700">
                  cómo reducir gastos sin recortar en lo que importa
                </a>.
              </p>
            </div>

            <h2>¿Por qué funciona la consultoría en empresas de formación?</h2>
            <p>
              Porque la formación es un sector con estructuras de coste muy claras y palancas de
              mejora muy concretas: escandallo por curso, tasa de ocupación, margen por grupo,
              mix de catálogo, peso del producto recurrente. Cuando alineas todo esto, los
              resultados aparecen rápido.
            </p>
            <p>
              Como{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en A Coruña
              </a>, he trabajado con academias, centros de formación, escuelas técnicas y
              consultoras educativas en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>. El patrón es casi siempre el mismo — y la solución también: orden en el
              catálogo, claridad en los números y diseño de producto recurrente.
            </p>
            <p>
              Eso es lo que hago en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>: ayudarte a entender qué parte de tu negocio te da dinero, qué parte te lo
              quita y qué cambios concretos necesitas hacer para que el conjunto sea rentable.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="caso-exito-empresa-formacion-rentabilidad" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu empresa de formación factura bien y gana poco?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Si tu catálogo ha ido creciendo pero no sabes cuánto aporta cada curso al beneficio,
            hay dinero encima de la mesa esperando a ser recuperado. El diagnóstico inicial es
            gratuito y sin compromiso: 30 minutos para entender dónde se te escapa el margen.
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
            ¿Tienes una academia, empresa de eventos o negocio de turismo?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en formación, turismo y eventos: estacionalidad, captación de alumnos, rentabilidad por actividad y organización.
          </p>
          <a
            href="/consultoria-formacion-turismo-eventos"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para formación, turismo y eventos →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-empresa-formacion-rentabilidad" />
    </>
  );
}
