import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: una empresa de servicios técnicos que duplicó su margen | Consultoría Método",
  description:
    "Caso real de una empresa de instalaciones y mantenimiento en Galicia que pasó de un 15 % a un 32 % de margen bruto. Costeo por trabajo, tarifas por urgencia, contratos de mantenimiento y tamaño mínimo de encargo. Consultoría empresarial en Galicia.",
  keywords: [
    "caso éxito empresa servicios técnicos",
    "mejorar margen empresa instalaciones",
    "rentabilidad empresa mantenimiento",
    "costeo por trabajo",
    "tarifas urgencia servicios",
    "contratos mantenimiento recurrente",
    "consultoría empresarial Galicia",
    "consultor empresas servicios técnicos",
  ],
  openGraph: {
    title: "Caso de éxito: una empresa de servicios técnicos que duplicó su margen",
    description:
      "Caso real de una empresa de instalaciones y mantenimiento en Galicia. De un 15 % a un 32 % de margen bruto con costeo por trabajo, tarifas escalonadas y contratos recurrentes.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-empresa-servicios-tecnicos-margen" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: una empresa de servicios técnicos que duplicó su margen",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-02",
};

export default function CasoExitoServiciosTecnicosMargen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Caso de éxito — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Una empresa de servicios técnicos que duplicó su margen sin trabajar más
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Mucho trabajo, poco beneficio y un dueño que vivía encadenado a su negocio 60 horas a la semana.
            Este es el caso real de una empresa de instalaciones y mantenimiento en Galicia que pasó de
            sobrevivir a ganar dinero de verdad — con la misma estructura y el mismo equipo.
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

            <h2>La situación de partida: mucho movimiento, poco margen</h2>
            <p>
              La empresa llevaba más de diez años operando en la provincia de A Coruña. Se dedicaba a
              instalaciones eléctricas, fontanería, climatización y mantenimiento general, tanto para
              particulares como para comunidades de vecinos y pequeños negocios. Cuatro empleados,
              dos furgonetas y un dueño que lo hacía todo: presupuestaba, compraba material, salía a
              obra, facturaba y cobraba.
            </p>
            <p>
              Facturaba alrededor de 280.000 euros al año. Desde fuera, parecía una empresa que
              funcionaba. Pero la realidad era muy distinta: el margen bruto estaba en torno al 15 %,
              el dueño trabajaba 60 horas a la semana y a final de mes apenas quedaba dinero después
              de pagar nóminas, material, seguros y furgonetas.
            </p>
            <p>
              &quot;Tengo más trabajo del que puedo abarcar, pero no entiendo por qué no gano
              dinero&quot;. Esa fue la frase que me dijo en nuestra primera conversación. Una frase
              que escucho con frecuencia cuando trabajo como{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en Galicia
              </a>.
            </p>

            {/* ── Diagnostic cards ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">Radiografía del negocio — Antes de la consultoría</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facturación anual</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">~280.000 €</p>
                  <p className="mt-1 text-sm text-gray-500">Volumen alto, sin crecimiento real</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Margen bruto</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">~15 %</p>
                  <p className="mt-1 text-sm text-gray-500">Muy por debajo del sector (25-35 %)</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Horas dueño/semana</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">60 h</p>
                  <p className="mt-1 text-sm text-gray-500">Sin vacaciones en 3 años</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ingresos recurrentes</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">0 €</p>
                  <p className="mt-1 text-sm text-gray-500">Todo era trabajo puntual</p>
                </div>
              </div>
            </div>

            <h2>Lo que encontramos al analizar los números</h2>
            <p>
              Cuando nos sentamos a hacer el diagnóstico con el{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Método Rentabilismo
              </a>, aparecieron cuatro problemas que, combinados, explicaban por qué una empresa con
              tanto trabajo generaba tan poco beneficio:
            </p>

            <ul>
              <li>
                <strong>No existía costeo por trabajo.</strong> Nadie calculaba el coste real de cada
                servicio: horas de mano de obra, desplazamiento, material, tiempo de presupuestar y
                tiempo de facturar. Se ponían precios &quot;a ojo&quot;, comparando con lo que se
                cobraba siempre o mirando qué hacía la competencia. Había trabajos que se facturaban
                a 400 euros y costaban 500.
              </li>
              <li>
                <strong>Los trabajos urgentes se cobraban igual que los programados.</strong> Una avería
                a las 8 de la noche o un sábado se presupuestaba al mismo precio que un trabajo
                planificado para el martes. El coste real era mucho mayor — por horas extra, por
                desplazamiento fuera de ruta, por interrumpir otros trabajos — pero no se reflejaba
                en la tarifa.
              </li>
              <li>
                <strong>Demasiados trabajos pequeños que no cubrían costes.</strong> Un porcentaje alto
                de las intervenciones eran reparaciones menores: cambiar un enchufe, revisar un
                termostato, sustituir un grifo. Trabajos de 60-80 euros que, cuando sumabas desplazamiento,
                tiempo de presupuesto, material y facturación, dejaban margen cero o negativo.
              </li>
              <li>
                <strong>Cero ingresos recurrentes.</strong> Todo el negocio dependía de que cada mes
                entraran suficientes trabajos nuevos. Sin contratos de mantenimiento, sin acuerdos
                a largo plazo, sin nada que garantizara un mínimo de facturación. Cada mes se empezaba
                desde cero.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Dato clave: de los 420 trabajos anuales que hacía la empresa, el 35 % eran intervenciones
                de menos de 100 euros. Ese 35 % de los trabajos generaba solo el 9 % de la facturación
                y consumía una cantidad desproporcionada de tiempo en desplazamientos, presupuestos y
                gestión administrativa.
              </p>
            </div>

            {/* ── Las 4 soluciones ── */}
            <h2>Qué cambiamos: las 4 palancas que transformaron el negocio</h2>

            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Sistema de costeo por trabajo</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Creamos una hoja de cálculo sencilla donde cada trabajo se registraba con sus costes
                reales: horas de cada operario (incluido desplazamiento), material usado, subcontrataciones
                si las había y un porcentaje de gastos generales. Por primera vez, el dueño podía ver en
                cada trabajo cuánto ganaba — o cuánto perdía.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                El resultado fue demoledor. De los últimos 50 trabajos analizados, 12 habían dado pérdidas.
                No &quot;poco margen&quot; — pérdidas reales. Y el dueño no lo sabía porque nunca había
                hecho el cálculo. Para entender por qué esto es tan importante, lee{" "}
                <a href="/blog/como-calcular-margen-beneficio-producto" className="text-accent-600 underline hover:text-accent-700">
                  cómo calcular el margen de beneficio real
                </a>.
              </p>
            </div>

            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Tarifas escalonadas: estándar, urgente y emergencia</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Definimos tres niveles de tarifa según la urgencia del servicio. La tarifa estándar
                para trabajos programados con al menos 48 horas de antelación. La tarifa urgente (con
                un recargo del 30 %) para servicios solicitados para el mismo día o el siguiente. Y la
                tarifa de emergencia (recargo del 60 %) para intervenciones fuera de horario, fines de
                semana y festivos.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                El miedo era que los clientes rechazaran los recargos. La realidad fue la contraria:
                el cliente que tiene una avería un sábado a las 9 de la noche quiere que alguien venga,
                y entiende perfectamente que eso cuesta más. Lo que no es razonable es cobrar lo mismo
                que un lunes a las 10 de la mañana. En tres meses, no se perdió ni un solo cliente
                por este cambio.
              </p>
            </div>

            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Importe mínimo por intervención</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Establecimos un importe mínimo de 150 euros por servicio. Cualquier intervención que
                no llegara a ese mínimo se agrupaba con otras del mismo edificio o zona, o se derivaba
                a otro profesional con menor estructura de costes. Esto eliminó de golpe los trabajos
                que generaban pérdidas.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                El dueño temía perder clientes. Lo que ocurrió fue que liberó horas para dedicarlas a
                trabajos rentables. Al dejar de hacer 150 trabajos pequeños al año, ganó unas 600 horas
                de capacidad productiva — equivalente a un operario a media jornada — que se dedicaron a
                trabajos de mayor valor.
              </p>
            </div>

            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Contratos de mantenimiento recurrente</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Diseñamos un contrato de mantenimiento anual para comunidades de vecinos y negocios:
                revisiones trimestrales programadas, prioridad en averías, descuento en trabajos
                adicionales y una cuota mensual fija. A 300 euros al mes por contrato, cada cliente
                generaba 3.600 euros anuales garantizados — y las revisiones se programaban en días
                de baja actividad, aprovechando huecos en la agenda.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                En los primeros cuatro meses se firmaron 8 contratos. Eso supuso 2.400 euros al mes
                de ingresos recurrentes — dinero que entraba cada mes independientemente de cuántos
                trabajos puntuales hubiera. El dueño dejó de empezar cada mes desde cero.
              </p>
            </div>

            {/* ── Before/After comparison ── */}
            <h2>Los resultados: misma empresa, otra cuenta de resultados</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                {/* ANTES */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">Antes</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación anual</span>
                      <span className="text-sm font-bold text-gray-900">280.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Margen bruto</span>
                      <span className="text-sm font-bold text-red-600">~15 %</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Horas dueño/semana</span>
                      <span className="text-sm font-bold text-red-600">60 h</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Contratos recurrentes</span>
                      <span className="text-sm font-bold text-red-600">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Ingresos recurrentes/mes</span>
                      <span className="text-sm font-bold text-red-600">0 €</span>
                    </div>
                  </div>
                </div>
                {/* DESPUÉS */}
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Después (6 meses)</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación anual (ritmo)</span>
                      <span className="text-sm font-bold text-gray-900">310.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Margen bruto</span>
                      <span className="text-sm font-bold text-emerald-700">32 %</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Horas dueño/semana</span>
                      <span className="text-sm font-bold text-emerald-700">42 h</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Contratos recurrentes</span>
                      <span className="text-sm font-bold text-emerald-700">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Ingresos recurrentes/mes</span>
                      <span className="text-sm font-bold text-emerald-700">2.400 €</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                El margen bruto pasó del 15 % al 32 %. La facturación creció un 11 %.
                El dueño recuperó 18 horas semanales. Y por primera vez, había ingresos garantizados cada mes.
              </p>
            </div>

            <p>
              Pero el cambio más importante no se mide en porcentajes. El dueño dejó de ser un
              operario que además facturaba. Empezó a dirigir su empresa. Dedicaba las mañanas
              a gestión — costear trabajos, revisar números, visitar clientes de contratos — y
              las tardes a supervisar obra en vez de ejecutarla con sus propias manos.
            </p>
            <p>
              Por primera vez en años, cogió dos semanas de vacaciones. Y la empresa siguió
              funcionando.
            </p>

            {/* ── Lecciones ── */}
            <h2>Lecciones que aplican a cualquier empresa de servicios técnicos</h2>
            <p>
              Este caso no es excepcional. Es el patrón que encuentro en la mayoría de empresas
              de instalaciones, mantenimiento, reformas y servicios técnicos que analizo. Los
              problemas se repiten:
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                "No se costea cada trabajo. Se presupuesta a ojo y no se sabe cuáles dan dinero y cuáles lo quitan.",
                "Los trabajos urgentes se cobran igual que los programados, cuando cuestan mucho más en horas extra, desplazamientos y desorganización.",
                "Se aceptan todos los trabajos, incluidos los pequeños que no cubren costes. Por miedo a «perder clientes» se pierde dinero.",
                "No hay ingresos recurrentes. Cada mes se empieza de cero, con la incertidumbre y el estrés que eso genera.",
                "El dueño hace de todo: presupuesta, compra, ejecuta, factura, cobra. No tiene tiempo para dirigir y el negocio no crece.",
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
              Si te reconoces en alguno de estos puntos, no es un problema de esfuerzo ni de
              falta de trabajo. Es un problema de estructura y de método. Y tiene solución —
              normalmente más rápida de lo que imaginas.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Para profundizar en cómo mejorar la rentabilidad de tu empresa paso a paso, lee{" "}
                <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">
                  cómo mejorar la rentabilidad de una empresa
                </a>. Y si quieres entender cómo calcular el margen real de cada servicio:{" "}
                <a href="/blog/como-calcular-margen-beneficio-producto" className="text-accent-600 underline hover:text-accent-700">
                  cómo calcular el margen de beneficio
                </a>.
              </p>
            </div>

            <h2>¿Por qué funciona la consultoría en empresas de servicios técnicos?</h2>
            <p>
              Porque son negocios con palancas de mejora muy claras: precio por hora, costeo por
              trabajo, mix de servicios, eficiencia en desplazamientos y estructura de ingresos
              recurrentes. Cuando pones los números encima de la mesa, las decisiones son evidentes.
              Lo que falta en la mayoría de casos no es capacidad técnica — es método de gestión.
            </p>
            <p>
              Como consultor de empresas en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>, llevo años trabajando con este perfil de empresa. Y lo que más me sorprende
              siempre es la cantidad de margen que se pierde por no hacer cálculos que, en el fondo,
              son sencillos. No hacen falta inversiones ni tecnología compleja. Hace falta sentarse,
              mirar los números y tomar decisiones con criterio.
            </p>
            <p>
              Eso es exactamente lo que hago en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>: analizar la realidad de tu negocio y ayudarte a decidir qué cambiar para que
              funcione mejor. Sin humo, sin teoría. Acciones concretas y resultados medibles.
            </p>

            {/* ── CTA inline ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Tu empresa de servicios técnicos trabaja mucho pero no gana lo que debería?
              </p>
              <p className="mt-2 text-gray-600">
                La mayoría de empresas de instalaciones y mantenimiento pierden entre un 10 % y un 20 %
                de margen por trabajos mal costeados y tarifas que no reflejan el coste real. Si quieres
                saber dónde está el dinero que se te escapa, hablemos.
              </p>
              <a
                href="/diagnostico-negocio"
                className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
              >
                Solicita tu diagnóstico gratuito
              </a>
            </div>

          </article>

          <BlogSidebar currentSlug="caso-exito-empresa-servicios-tecnicos-margen" />
        </div>
      </section>

      {/* Consultoría sectorial */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            ¿Tienes un despacho, agencia o empresa de servicios?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en servicios profesionales: tarifas, captación, salida del autoempleo y organización.
          </p>
          <a
            href="/consultoria-servicios-profesionales"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para servicios profesionales →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-empresa-servicios-tecnicos-margen" />
    </>
  );
}
