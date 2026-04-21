import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: un despacho profesional atrapado en el autoempleo | Consultoría Método",
  description:
    "Caso real de un profesional independiente en A Coruña que facturaba pero no crecía. Segmentación de cartera, subida de tarifas, sistematización de procesos y salida del autoempleo. Consultor de negocios para despachos y profesionales liberales en Galicia.",
  keywords: [
    "caso éxito despacho profesional",
    "consultor profesional independiente",
    "salir del autoempleo",
    "consultoría despacho A Coruña",
    "subir tarifas profesional",
    "segmentación cartera clientes",
    "consultor empresas profesional liberal",
    "rentabilidad despacho Galicia",
  ],
  openGraph: {
    title: "Caso de éxito: un despacho profesional atrapado en el autoempleo",
    description:
      "Caso real de un profesional independiente que trabajaba 55 horas semanales y ganaba menos que un asalariado. Qué encontramos y qué cambiamos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-despacho-profesional-independiente" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: un despacho profesional atrapado en el autoempleo",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-21",
};

export default function CasoExitoDespacho() {
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
            Un profesional independiente que trabajaba 55 horas a la semana y ganaba menos que un asalariado
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Buena reputación, clientes fieles, años de experiencia. Pero una trampa invisible: ser
            el empleado más barato de su propio despacho. Este es el caso real de un profesional
            independiente en la provincia de A Coruña que necesitaba dejar de trabajar &quot;en&quot;
            el negocio para empezar a trabajar &quot;sobre&quot; el negocio.
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

            <h2>La situación de partida: mucha dedicación, poco retorno</h2>
            <p>
              El despacho llevaba más de diez años en activo. Su titular — un profesional técnico
              con excelente reputación en su sector — trabajaba con una pequeña cartera de clientes
              desde una oficina propia en el área metropolitana de A Coruña. Tenía una
              administrativa a media jornada y, ocasionalmente, subcontrataba tareas puntuales a
              colaboradores externos.
            </p>
            <p>
              La realidad, sin embargo, era esta: trabajaba entre 50 y 55 horas semanales, atendía
              personalmente cada encargo, contestaba llamadas a cualquier hora y llevaba años sin
              subir tarifas porque &quot;los clientes se irían&quot;. Cuando hicimos cuentas,
              descubrimos que su ingreso neto equivalía a unos 1.800 € al mes — considerablemente
              menos de lo que cobraría como asalariado en una empresa del sector.
            </p>
            <p>
              &quot;He montado un negocio que me da más trabajo y menos dinero que un empleo
              normal&quot;. Eso me dijo en nuestra primera conversación. Es una frase que escucho
              con frecuencia en profesionales independientes: abogados, arquitectos, ingenieros,
              consultores técnicos, diseñadores. El patrón es casi siempre el mismo.
            </p>

            {/* ── Diagnóstico visual ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">Radiografía del despacho — Antes de la consultoría</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facturación anual</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">~72.000 €</p>
                  <p className="mt-1 text-sm text-gray-500">Estancada 3 años consecutivos</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ingreso neto titular</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">~1.800 €/mes</p>
                  <p className="mt-1 text-sm text-gray-500">Menos que como asalariado</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">N.º clientes activos</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">38</p>
                  <p className="mt-1 text-sm text-gray-500">Muy dispersos en tipo y facturación</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Horas semanales</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">50–55 h</p>
                  <p className="mt-1 text-sm text-gray-500">Sin vacaciones reales en 3 años</p>
                </div>
              </div>
            </div>

            <h2>Lo que encontramos: la trampa del profesional que &quot;hace de todo&quot;</h2>
            <p>
              El análisis con el{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Método Rentabilismo
              </a>{" "}
              reveló un patrón muy habitual en despachos unipersonales:
            </p>

            <ul>
              <li>
                <strong>Cartera sin segmentar.</strong> De los 38 clientes, 8 generaban el 62 % de la
                facturación. Los otros 30 aportaban poco dinero pero consumían la mayor parte del
                tiempo: llamadas, revisiones, urgencias, pequeños encargos mal definidos.
              </li>
              <li>
                <strong>Tarifas obsoletas.</strong> Las tarifas no se habían actualizado en cinco años.
                Y lo más grave: se cobraba por hora o por proyecto cerrado, sin distinguir la
                complejidad ni el valor aportado. Un encargo que requería 20 horas de trabajo se
                presupuestaba igual que otro de 20 horas que generaba diez veces más valor al cliente.
              </li>
              <li>
                <strong>Cero sistematización.</strong> Cada encargo empezaba de cero. No había
                plantillas, no había procesos documentados, no había checklist. El titular hacía
                cada trabajo &quot;a medida&quot; aunque muchos seguían el mismo patrón.
              </li>
              <li>
                <strong>Todo pasaba por él.</strong> La administrativa gestionaba agenda y
                facturación, pero cualquier decisión técnica, cualquier duda del cliente, cualquier
                presupuesto — todo requería la intervención directa del titular. Sin él, el
                despacho se paraba.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Dato clave: los 8 mejores clientes generaban el 62 % de la facturación y
                consumían el 35 % del tiempo. Los 30 restantes generaban el 38 % de la
                facturación y consumían el 65 % del tiempo. Una desproporción enorme.
              </p>
            </div>

            {/* ── Las acciones ── */}
            <h2>Qué cambiamos: las 4 palancas que transformaron el despacho</h2>

            {/* Acción 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Segmentación de la cartera de clientes</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Clasificamos los 38 clientes en tres categorías según rentabilidad real (no solo
                facturación, sino horas invertidas y margen neto):
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-4 py-3 border border-emerald-100">
                  <span className="text-sm font-bold text-emerald-700">A</span>
                  <span className="text-sm text-gray-700">8 clientes — alta rentabilidad, relación fluida, pago puntual</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-amber-50 px-4 py-3 border border-amber-100">
                  <span className="text-sm font-bold text-amber-700">B</span>
                  <span className="text-sm text-gray-700">12 clientes — rentabilidad media, potencial de mejora con ajuste de tarifas</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-red-50 px-4 py-3 border border-red-100">
                  <span className="text-sm font-bold text-red-700">C</span>
                  <span className="text-sm text-gray-700">18 clientes — baja rentabilidad, alta demanda de tiempo, pagos irregulares</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                La decisión fue clara: dedicar más tiempo y mejor servicio a los A, subir tarifas a
                los B y dejar ir progresivamente a los C que no aceptaran las nuevas condiciones.
              </p>
            </div>

            {/* Acción 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Reestructuración de tarifas — cobrar por valor, no por horas</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Dejamos de cobrar por hora y pasamos a un modelo de tarifa por proyecto con tres
                niveles (básico, estándar, premium) según alcance y complejidad. Además, se creó
                una cuota de mantenimiento mensual para clientes que necesitaban disponibilidad
                continua — algo que antes se hacía gratis.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                El resultado: la tarifa media por encargo subió un 35 %. Y la cuota de
                mantenimiento generó un ingreso recurrente de 2.400 € al mes que no existía antes.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Para profundizar:{" "}
                <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                  Cómo fijar precios sin perder clientes ni margen
                </a>.
              </p>
            </div>

            {/* Acción 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Sistematización de procesos repetitivos</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Identificamos que el 70 % de los encargos seguían uno de tres patrones. Para cada
                uno creamos un proceso estandarizado: plantilla de arranque, checklist de
                entregables, esquema de comunicación con el cliente y modelo de cierre.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Esto redujo el tiempo medio por encargo un 25 % y permitió que la administrativa
                — con una pequeña formación — pudiera gestionar las fases iniciales y de cierre
                sin intervención del titular.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Relacionado:{" "}
                <a href="/blog/como-organizar-empresa-pequena-salir-autoempleo" className="text-accent-600 underline hover:text-accent-700">
                  Cómo salir del autoempleo y organizar tu empresa
                </a>.
              </p>
            </div>

            {/* Acción 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Liberación del tiempo del titular</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Con los procesos sistematizados y la cartera depurada, el titular pasó de 55 horas
                semanales a 40. Las horas liberadas no se &quot;regalaron&quot; — se reinvirtieron
                en dos cosas: mejorar la relación con los clientes A (visitas periódicas, informes
                proactivos) y dedicar medio día a la semana a desarrollo comercial — algo que no
                hacía desde que abrió el despacho.
              </p>
            </div>

            {/* ── Resultados — Before/After visual ── */}
            <h2>Los resultados: misma persona, otro negocio</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">Antes</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación anual</span>
                      <span className="text-sm font-bold text-gray-900">72.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Ingreso neto titular</span>
                      <span className="text-sm font-bold text-red-600">1.800 €/mes</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">N.º clientes activos</span>
                      <span className="text-sm font-bold text-gray-900">38</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Horas semanales</span>
                      <span className="text-sm font-bold text-red-600">50–55 h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Ingresos recurrentes</span>
                      <span className="text-sm font-bold text-red-600">0 €</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Después (6 meses)</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación anual (proy.)</span>
                      <span className="text-sm font-bold text-gray-900">96.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Ingreso neto titular</span>
                      <span className="text-sm font-bold text-emerald-700">3.500 €/mes</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">N.º clientes activos</span>
                      <span className="text-sm font-bold text-gray-900">22</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Horas semanales</span>
                      <span className="text-sm font-bold text-emerald-700">40 h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Ingresos recurrentes</span>
                      <span className="text-sm font-bold text-emerald-700">2.400 €/mes</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Menos clientes, menos horas, más facturación, casi el doble de ingreso neto — y
                un componente de ingreso recurrente que antes no existía.
              </p>
            </div>

            <p>
              Pero el número que más importa no está en la tabla. Es este: por primera vez en
              años, el titular cogió tres semanas de vacaciones seguidas. El despacho siguió
              funcionando. Los clientes siguieron atendidos. Y al volver, la facturación no
              había caído. Ese es el verdadero cambio.
            </p>

            {/* ── Lecciones ── */}
            <h2>Las lecciones que aplican a cualquier profesional independiente</h2>
            <p>
              Si eres autónomo, tienes un despacho o trabajas como profesional liberal, es muy
              probable que te reconozcas en parte de este caso. Los patrones que veo cuando
              trabajo con{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                profesionales en Galicia
              </a>{" "}
              son recurrentes:
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                "Cobras por horas en vez de por el valor que aportas al cliente.",
                "Tienes clientes que te consumen mucho tiempo y te aportan poco dinero — pero no te atreves a soltar.",
                "Cada encargo empieza de cero porque no has sistematizado nada.",
                "Eres imprescindible para todo: si tú paras, el negocio para.",
                "Llevas años sin subir tarifas porque «la competencia cobra menos».",
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
              Ninguno de estos problemas se resuelve &quot;trabajando más&quot;. De hecho,
              trabajar más es exactamente lo que los agrava. La solución pasa por pararse,
              analizar y tomar decisiones que duelen pero liberan.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Si quieres entender por qué tu negocio no crece aunque trabajas más que nunca:{" "}
                <a href="/blog/mi-negocio-no-crece-que-hago" className="text-accent-600 underline hover:text-accent-700">
                  Mi negocio no crece: qué hacer cuando te estancas
                </a>. Y si necesitas calcular si realmente te compensa:{" "}
                <a href="/blog/cuanto-debe-ganar-el-dueno-de-un-negocio" className="text-accent-600 underline hover:text-accent-700">
                  Cuánto debe ganar el dueño de un negocio
                </a>.
              </p>
            </div>

            <h2>¿Por qué funciona la consultoría para profesionales independientes?</h2>
            <p>
              Porque el profesional liberal es, por definición, alguien técnicamente excelente
              que nunca estudió gestión empresarial. Sabe hacer su trabajo mejor que nadie —
              pero nadie le enseñó a poner precio a lo que hace, a seleccionar clientes, a
              sistematizar procesos o a generar ingresos recurrentes.
            </p>
            <p>
              Como{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en la provincia de A Coruña
              </a>, trabajo frecuentemente con abogados, arquitectos, ingenieros, consultores
              técnicos y profesionales de servicios que comparten exactamente este patrón.
              Y el alivio que sienten cuando dejan de ser esclavos de su propio negocio es
              siempre el mismo: &quot;¿Por qué no hice esto antes?&quot;.
            </p>
            <p>
              Eso es lo que hago en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>: ayudarte a dejar de ser el empleado más barato de tu propio despacho. Sin
              fórmulas mágicas — con método, datos y decisiones concretas.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="caso-exito-despacho-profesional-independiente" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Eres profesional independiente y sientes que no te compensa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Si trabajas más que nadie en tu negocio y ganas menos de lo que deberías, no es un
            problema de esfuerzo — es un problema de estructura. El diagnóstico inicial es
            gratuito y sin compromiso: 30 minutos para entender dónde está el problema.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-despacho-profesional-independiente" />
    </>
  );
}
