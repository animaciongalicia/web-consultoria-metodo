import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo montar un proceso comercial en tu pyme (aunque no seas vendedor) | Consultoría Método",
  description:
    "Aprende a crear un proceso comercial sencillo y efectivo para tu pyme. Pipeline, seguimiento y sistema de ventas paso a paso. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "proceso comercial pyme",
    "cómo vender en una pyme",
    "pipeline de ventas pequeña empresa",
    "sistema de ventas negocio",
    "seguimiento comercial",
    "proceso de ventas paso a paso",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Cómo montar un proceso comercial en tu pyme (aunque no seas vendedor)",
    description:
      "No necesitas ser comercial nato para vender bien. Necesitas un proceso claro. Guía práctica para pymes que quieren dejar de improvisar con sus ventas.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-hacer-proceso-comercial-pyme" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo montar un proceso comercial en tu pyme (aunque no seas vendedor)",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-05-25",
};

export default function ArticuloProcesoComercialPyme() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo montar un proceso comercial en tu pyme (aunque no seas vendedor)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La mayoría de las pymes no tienen un proceso de ventas. Tienen buenas intenciones, contactos sueltos y
            la esperanza de que el teléfono suene. Eso no es vender — es esperar. Aquí te enseño a montar un sistema
            comercial sencillo que funciona, aunque nunca te hayas considerado vendedor.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <p>
              Después de más de 25 años trabajando con pymes, puedo decirte algo con total seguridad: la mayoría de
              los negocios pequeños no pierden ventas porque su producto sea malo o porque haya demasiada competencia.
              Las pierden porque no tienen un proceso comercial. Nada. Cero. El dueño hace «algo» de ventas cuando
              tiene tiempo, algún comercial hace lo que puede sin estructura, y los presupuestos se envían y se
              olvidan.
            </p>
            <p>
              Y lo entiendo. Si montaste una clínica dental, un taller mecánico o un despacho de arquitectura, no lo
              hiciste para ser comercial. Pero el negocio necesita ventas para sobrevivir. Y las ventas necesitan un
              sistema para ser predecibles. La buena noticia: no necesitas ser un vendedor nato. Necesitas un proceso
              simple, repetible y que puedas seguir incluso en las semanas en que vas hasta arriba de trabajo.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Un proceso comercial no te convierte en vendedor agresivo. Te convierte en un profesional que sabe
              a quién se dirige, qué ofrece y cuándo hacer seguimiento. Eso es todo.&rdquo;
            </blockquote>

            <h2>Paso 1: Define a tu cliente ideal (de verdad)</h2>
            <p>
              Antes de vender nada, necesitas saber a quién le vendes. Y no vale decir «a todo el mundo». Cuanto más
              específico seas, más fácil será todo lo que viene después: el mensaje, la propuesta, el canal de captación.
            </p>
            <p>
              Hazte estas preguntas y escribe las respuestas:
            </p>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Ficha de cliente ideal</h3>
              <ul className="ml-4 list-disc space-y-2 text-blue-800">
                <li><strong>Tipo de cliente:</strong> particular, autónomo, empresa. Sector. Tamaño.</li>
                <li><strong>Problema principal:</strong> ¿qué le quita el sueño? ¿Qué necesita resolver con urgencia?</li>
                <li><strong>Capacidad de pago:</strong> ¿puede permitirse tu servicio sin que sea una decisión agónica?</li>
                <li><strong>Dónde está:</strong> ¿cómo te encontraría? ¿Google? ¿Recomendación? ¿Redes?</li>
                <li><strong>Qué valora:</strong> ¿rapidez? ¿Precio? ¿Confianza? ¿Experiencia? ¿Cercanía?</li>
              </ul>
            </div>

            <p>
              Si no tienes claro quién es tu cliente ideal, todo tu esfuerzo comercial será disperso e ineficiente.
              Para profundizar en captación, te recomiendo leer{" "}
              <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo conseguir clientes para tu negocio
              </a>{" "}
              — ahí detallo los canales que mejor funcionan para pymes.
            </p>

            <h2>Paso 2: Crea tu pipeline comercial (simple, por favor)</h2>
            <p>
              Un pipeline es simplemente el camino que recorre un contacto desde que aparece hasta que se convierte
              en cliente (o se descarta). No necesitas un CRM de 200 euros al mes. Necesitas cuatro columnas en una
              hoja de cálculo, una pizarra o una herramienta gratuita tipo Trello.
            </p>

            {/* Pipeline visual con tarjetas numeradas */}
            <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">1</div>
                <h3 className="text-lg font-bold text-gray-900">Contacto nuevo</h3>
                <p className="mt-2 text-gray-600">
                  Alguien pregunta, pide info, rellena un formulario o te llama. Todavía no sabes si es un cliente
                  real. Lo apuntas con nombre, teléfono, origen y fecha.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">2</div>
                <h3 className="text-lg font-bold text-gray-900">Reunión / diagnóstico</h3>
                <p className="mt-2 text-gray-600">
                  Has hablado con él, entiendes su necesidad y confirmas que es un cliente potencial real. Si no encaja,
                  lo descartas sin remordimiento — eso también es vender bien.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-800">3</div>
                <h3 className="text-lg font-bold text-gray-900">Propuesta enviada</h3>
                <p className="mt-2 text-gray-600">
                  Le has mandado presupuesto o propuesta. Aquí empieza la fase crítica: el seguimiento. La mayoría de
                  las pymes pierden ventas en esta fase por no hacer seguimiento.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">4</div>
                <h3 className="text-lg font-bold text-gray-900">Cierre (sí o no)</h3>
                <p className="mt-2 text-gray-600">
                  El contacto acepta o rechaza. En ambos casos, registra el resultado y el motivo. Los «no» son oro
                  puro: te dicen qué mejorar en tu propuesta o en tu proceso.
                </p>
              </div>
            </div>

            <p>
              Eso es todo. Cuatro fases. No necesitas más para empezar. Cuando tengas este pipeline funcionando durante
              tres meses, ya podrás añadir complejidad si la necesitas.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">Dato clave</p>
              <p className="mt-2 text-accent-900">
                El 80 % de las ventas se cierran entre el quinto y el duodécimo contacto de seguimiento. Sin embargo,
                el 44 % de los comerciales abandonan después del primer intento. Si montas un sistema de seguimiento
                básico, ya estarás por delante de casi toda tu competencia.
              </p>
            </div>

            <h2>Paso 3: Monta tu sistema de seguimiento</h2>
            <p>
              Este es el punto donde la mayoría de las pymes fallan. Envían el presupuesto y esperan. «Si le interesa,
              ya llamará.» Mentira. El cliente está ocupado, tiene otras opciones encima de la mesa y tu propuesta se
              pierde entre veinte emails. Si no haces seguimiento, no estás vendiendo.
            </p>

            <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-900">Sistema de seguimiento mínimo viable</h3>
              <ol className="ml-4 list-decimal space-y-2 text-amber-800">
                <li><strong>Día 1:</strong> Envías la propuesta. Confirmas por teléfono o WhatsApp que la ha recibido.</li>
                <li><strong>Día 3-4:</strong> Contacto breve. «¿Has podido revisarla? ¿Tienes alguna duda?» Sin presión.</li>
                <li><strong>Día 7-10:</strong> Si no ha respondido, segundo contacto. Aporta algo de valor: un dato, un caso, una aclaración.</li>
                <li><strong>Día 15-20:</strong> Tercer contacto. Pregunta directa: «¿Seguimos adelante o lo dejamos para otro momento?»</li>
                <li><strong>Si dice no:</strong> Agradece, pregunta el motivo y anótalo. Ese dato vale más que la venta.</li>
              </ol>
            </div>

            <p>
              Lo que diferencia a una pyme que vende bien de una que no es, en muchos casos, simplemente esto: un
              sistema de seguimiento. No es talento, no es carisma. Es disciplina y una agenda bien organizada.
            </p>

            <h2>Paso 4: Mide lo que importa</h2>
            <p>
              No puedes mejorar lo que no mides. Con tu pipeline en marcha, empieza a controlar estos tres números
              cada mes:
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Indicador</th>
                    <th className="px-4 py-3 font-semibold">Qué mide</th>
                    <th className="px-4 py-3 font-semibold">Por qué importa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Contactos nuevos / mes</td>
                    <td className="px-4 py-3">Cuántos leads entran en tu pipeline</td>
                    <td className="px-4 py-3">Si entran pocos, tu problema es de captación, no de ventas</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Tasa de conversión</td>
                    <td className="px-4 py-3">% de propuestas que se convierten en venta</td>
                    <td className="px-4 py-3">Si es baja, el problema está en la propuesta, el precio o el seguimiento</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Valor medio por venta</td>
                    <td className="px-4 py-3">Cuánto ingresa cada cliente de media</td>
                    <td className="px-4 py-3">Si es bajo, puedes estar vendiendo lo equivocado al cliente equivocado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Con solo estas tres cifras ya puedes diagnosticar el 90 % de los problemas comerciales de una pyme.
              Para entender mejor cómo usar estos datos, lee{" "}
              <a href="/blog/como-vender-mas-sin-bajar-precios" className="text-accent-600 underline hover:text-accent-700">
                cómo vender más sin bajar precios
              </a>{" "}
              — donde explico cómo aumentar la conversión y el ticket medio sin tocar el precio.
            </p>

            <h2>Paso 5: Cuándo es momento de sistematizar</h2>
            <p>
              Si estás empezando, una hoja de cálculo y un calendario son suficientes. No caigas en la trampa de
              comprar un CRM caro antes de tener un proceso que funcione. La herramienta no crea el proceso — el
              proceso determina qué herramienta necesitas.
            </p>
            <p>
              Es momento de dar un salto cuando:
            </p>
            <ul>
              <li>Tienes más de 15-20 contactos activos al mes y pierdes el hilo.</li>
              <li>Más de una persona en tu equipo participa en el proceso comercial.</li>
              <li>Necesitas automatizar recordatorios de seguimiento porque se te escapan.</li>
              <li>Quieres analizar datos históricos para detectar patrones.</li>
            </ul>

            <p>
              Cuando llegue ese momento, busca un CRM sencillo (HubSpot gratuito, Pipedrive, noCRM) y migra tu
              proceso tal cual. No añadas complejidad innecesaria. El mejor CRM es el que tu equipo usa de verdad,
              no el que tiene más funciones.
            </p>

            <h2>El error que más dinero cuesta: no cuidar a los que ya te compraron</h2>
            <p>
              El proceso comercial no termina con el cierre. De hecho, lo más rentable empieza después. Un cliente
              satisfecho vuelve, te recomienda y te compra más cosas. Pero solo si le cuidas.
            </p>
            <p>
              Después de cada venta, integra en tu proceso al menos estas dos acciones:
            </p>
            <ol>
              <li><strong>Seguimiento post-venta (semana 2-4):</strong> llama o escribe para preguntar cómo va todo, si necesita algo más. No para vender — para demostrar que te importa.</li>
              <li><strong>Contacto periódico (cada 2-3 meses):</strong> mantén la relación viva con información útil, novedades o simplemente un «¿cómo van las cosas?».</li>
            </ol>
            <p>
              Esto conecta directamente con la fidelización. Si quieres profundizar, lee{" "}
              <a href="/blog/como-fidelizar-clientes-pyme" className="text-accent-600 underline hover:text-accent-700">
                cómo fidelizar clientes en una pyme
              </a>{" "}
              — es una de las palancas de crecimiento más potentes y más ignoradas.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Vender no es convencer a nadie. Vender es tener un proceso que pone a la persona adecuada delante
              de la solución adecuada en el momento adecuado. Y hacer seguimiento.&rdquo;
            </blockquote>

            <h2>Plan de acción: monta tu proceso comercial esta semana</h2>

            <div className="not-prose my-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-900">Tu plan en 5 días</h3>
              <ol className="ml-4 list-decimal space-y-2 text-green-800">
                <li><strong>Lunes:</strong> Escribe la ficha de tu cliente ideal. Sé específico: nombre, sector, problema, presupuesto.</li>
                <li><strong>Martes:</strong> Crea tu pipeline en una hoja de cálculo con las 4 columnas (contacto, reunión, propuesta, cierre).</li>
                <li><strong>Miércoles:</strong> Pasa todos tus contactos activos al pipeline. Los que llevan meses sin movimiento, contacta hoy o descarta.</li>
                <li><strong>Jueves:</strong> Define tu sistema de seguimiento: qué haces en el día 1, día 3, día 7 y día 15 tras enviar una propuesta.</li>
                <li><strong>Viernes:</strong> Mide: ¿cuántos contactos tienes? ¿Cuántas propuestas enviaste este mes? ¿Cuántas cerraste? Esos son tus números base.</li>
              </ol>
            </div>

            <h2>Conclusión</h2>
            <p>
              No necesitas ser un vendedor nato para tener un negocio que vende bien. Necesitas un proceso: saber a
              quién te diriges, tener un pipeline visible, hacer seguimiento sistemático y medir resultados. Es así
              de simple y así de difícil a la vez.
            </p>
            <p>
              Las pymes que montan un proceso comercial, por básico que sea, venden más, tienen más previsibilidad
              y dependen menos de la suerte. No es magia — es método. Y si te cuesta arrancarlo solo, no tengas
              problema en pedir ayuda. Para eso estamos.
            </p>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-hacer-proceso-comercial-pyme" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres ayuda para montar tu proceso comercial?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudo a diseñar un sistema de ventas adaptado a tu negocio: pipeline, seguimiento, métricas y
            propuestas que convierten. Diagnóstico gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Consultoría por sectores */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            Consultoría especializada por sectores
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Trabajamos con negocios de distintos sectores. Cada uno tiene sus retos — y los conocemos.
          </p>
          <div className="mx-auto mt-4 flex flex-wrap justify-center gap-3">
            <a href="/consultoria-hosteleria-restauracion" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Hostelería</a>
            <a href="/consultoria-comercio-retail" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Comercio y retail</a>
            <a href="/consultoria-servicios-profesionales" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Servicios profesionales</a>
            <a href="/consultoria-salud-bienestar" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Salud y bienestar</a>
            <a href="/consultoria-formacion-turismo-eventos" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Formación y turismo</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="como-hacer-proceso-comercial-pyme" />
    </>
  );
}
