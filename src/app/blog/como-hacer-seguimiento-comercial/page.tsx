import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo hacer seguimiento comercial sin ser pesado | Consultoría Método",
  description:
    "Sistema práctico de seguimiento comercial para pymes. Cadencia, plantillas y CRM básico para no perder ventas sin agobiar al cliente. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "seguimiento comercial",
    "cómo hacer seguimiento de ventas",
    "seguimiento clientes pyme",
    "follow up ventas",
    "cadencia seguimiento comercial",
    "CRM pymes",
    "no perder ventas",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Cómo hacer seguimiento comercial sin ser pesado",
    description:
      "El 80 % de las ventas ocurren después del quinto contacto, pero casi nadie llega ahí. Sistema práctico de seguimiento para pymes que quieren vender más sin agobiar.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-hacer-seguimiento-comercial" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo hacer seguimiento comercial sin ser pesado",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-13",
};

export default function ArticuloSeguimientoComercial() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo hacer seguimiento comercial sin ser pesado
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La diferencia entre una pyme que vende y una que sobrevive casi nunca es el producto. Es
            el seguimiento. El 80 % de las ventas ocurren a partir del quinto contacto, pero la
            mayoría de los negocios abandonan después del primero. Aquí te enseño un sistema para
            hacer seguimiento que funcione sin que el cliente te bloquee el teléfono.
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
              Voy a decirte algo que probablemente ya intuyes pero no quieres escuchar: cada presupuesto que
              envías y no sigues es dinero que dejas en la mesa. No porque el cliente no quiera comprarte,
              sino porque está ocupado, tiene dudas que no te ha dicho o simplemente se le olvidó. Y tú,
              por miedo a ser pesado, no vuelves a llamar.
            </p>
            <p>
              Después de más de 25 años trabajando con pymes, puedo decirte que el seguimiento es la
              habilidad comercial más rentable y más infrautilizada. No se trata de acosar a nadie. Se trata
              de tener un sistema que mantenga la conversación abierta aportando valor en cada contacto.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;No perdemos ventas porque el cliente diga que no. Las perdemos porque dejamos de
              preguntar antes de que diga nada.&rdquo;
            </blockquote>

            <h2>Los números que deberían quitarte el miedo al seguimiento</h2>
            <p>
              Antes de hablar de cómo hacerlo, necesitas entender por qué es tan importante. Hay datos de
              sobra que lo demuestran:
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Dato</th>
                    <th className="px-4 py-3 font-semibold">Realidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Ventas cerradas tras el 1.er contacto</td>
                    <td className="px-4 py-3">Solo el 2 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Ventas cerradas del contacto 5 al 12</td>
                    <td className="px-4 py-3">El 80 % del total</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Comerciales que abandonan tras el 1.er intento</td>
                    <td className="px-4 py-3">El 44 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Comerciales que llegan al 5.o contacto</td>
                    <td className="px-4 py-3">Solo el 8 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Lee esos números otra vez. La inmensa mayoría de tus competidores abandona antes de llegar
              donde se cierran las ventas. Si montas un sistema de seguimiento, aunque sea básico, ya
              estás en otro nivel. Esto conecta directamente con tener un{" "}
              <a href="/blog/como-hacer-proceso-comercial-pyme" className="text-accent-600 underline hover:text-accent-700">
                proceso comercial estructurado en tu pyme
              </a>{" "}
              — el seguimiento es la pieza que hace que ese proceso funcione de verdad.
            </p>

            <h2>La cadencia de seguimiento: cuándo, cómo y por qué canal</h2>
            <p>
              El error más habitual es improvisar. Envías el presupuesto, esperas unos días, llamas una
              vez, no contestas, y lo dejas. O peor: llamas tres veces seguidas el mismo día y el
              cliente siente que lo acosas. Lo que necesitas es una cadencia: un plan de contactos
              espaciados, cada uno con un propósito claro.
            </p>

            {/* Cadencia visual con tarjetas numeradas */}
            <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">1</div>
                <h3 className="text-lg font-bold text-gray-900">Día 0 — Envío + confirmación</h3>
                <p className="mt-2 text-gray-600">
                  Envías la propuesta por email. Inmediatamente después, un mensaje breve por WhatsApp o
                  llamada: &laquo;Te acabo de enviar la propuesta. Si tienes cualquier duda, dime.&raquo;
                  Objetivo: asegurar que la ha recibido.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">2</div>
                <h3 className="text-lg font-bold text-gray-900">Día 3 — Contacto de valor</h3>
                <p className="mt-2 text-gray-600">
                  No preguntes &laquo;qué tal la propuesta&raquo;. Aporta algo: un caso de un cliente similar,
                  un dato relevante, una aclaración sobre un punto que suele generar dudas.
                  El objetivo es reabrir la conversación con utilidad.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-800">3</div>
                <h3 className="text-lg font-bold text-gray-900">Día 7 — Pregunta directa (suave)</h3>
                <p className="mt-2 text-gray-600">
                  &laquo;¿Has podido revisarla? ¿Hay algo que te frene o que necesites aclarar?&raquo; Aquí
                  abres la puerta a objeciones. Si el cliente tiene dudas, las va a soltar ahora. Y una
                  objeción expresada es una venta más cerca.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-800">4</div>
                <h3 className="text-lg font-bold text-gray-900">Día 14 — El cierre amable</h3>
                <p className="mt-2 text-gray-600">
                  &laquo;Me gustaría saber si seguimos adelante o si lo dejamos para otro momento. Sin
                  ningún problema en cualquier caso.&raquo; Le das una salida digna. Muchos clientes dicen
                  &laquo;sí&raquo; en este punto simplemente porque les das la opción de decir &laquo;no&raquo;.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">5</div>
                <h3 className="text-lg font-bold text-gray-900">Día 30 — Último contacto</h3>
                <p className="mt-2 text-gray-600">
                  Si no hay respuesta: &laquo;Entiendo que ahora no es el momento. Quedo a tu disposición
                  cuando lo necesites.&raquo; Profesional, limpio, sin resentimiento. Apuntas el contacto
                  en tu lista de &laquo;recuperación&raquo; para dentro de 3 meses.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">6</div>
                <h3 className="text-lg font-bold text-gray-900">Mes 3 — Reactivación</h3>
                <p className="mt-2 text-gray-600">
                  Un mensaje breve: una novedad en tu servicio, un contenido útil, un &laquo;recordaba tu
                  situación y pensé en esto&raquo;. No vendes. Siembras. Muchas ventas se cierran en esta
                  fase, meses después del primer contacto.
                </p>
              </div>
            </div>

            <h2>Plantillas de seguimiento que no suenan a vendedor desesperado</h2>
            <p>
              El tono lo es todo. La diferencia entre ser pesado y ser profesional está en tres cosas:
              aportar valor en cada contacto, dar siempre una salida digna, y no escribir mensajes
              kilométricos. Aquí van ejemplos que puedes adaptar a tu negocio:
            </p>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Plantilla 1 — Contacto de valor (día 3)</h3>
              <p className="text-blue-800 italic">
                &laquo;Hola [nombre], te escribo porque después de preparar tu propuesta me acordé de un
                caso similar al tuyo: [ejemplo breve de resultado]. Creo que te puede interesar verlo.
                Si tienes alguna duda sobre lo que te envié, dime y te la aclaro encantado.&raquo;
              </p>
            </div>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Plantilla 2 — Pregunta directa (día 7)</h3>
              <p className="text-blue-800 italic">
                &laquo;Hola [nombre], ¿has tenido ocasión de revisar la propuesta? Si hay algo que no
                encaje o que necesites ajustar, lo vemos sin problema. Y si ahora no es el momento,
                también lo entiendo perfectamente.&raquo;
              </p>
            </div>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Plantilla 3 — Cierre amable (día 14)</h3>
              <p className="text-blue-800 italic">
                &laquo;Hola [nombre], cierro el círculo por mi parte. ¿Te interesa que avancemos con lo
                que hablamos o lo dejamos aparcado por ahora? Cualquiera de las dos opciones está
                perfectamente bien. Un saludo.&raquo;
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">La regla de oro del seguimiento</p>
              <p className="mt-2 text-accent-900">
                Cada contacto de seguimiento debe cumplir al menos uno de estos tres requisitos: aporta
                información útil, resuelve una posible duda, o facilita la decisión. Si tu mensaje no
                cumple ninguno, no lo envíes. Eso sí es ser pesado.
              </p>
            </div>

            <h2>Elige el canal adecuado para cada momento</h2>
            <p>
              No todos los canales sirven para todo. El canal correcto depende de la fase de seguimiento
              y del tipo de relación que tengas con el cliente. Esta es mi recomendación basada en lo que
              funciona en pymes reales:
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Canal</th>
                    <th className="px-4 py-3 font-semibold">Mejor para</th>
                    <th className="px-4 py-3 font-semibold">Evitar si</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Llamada</td>
                    <td className="px-4 py-3">Primeras tomas de contacto, resolver objeciones, cerrar</td>
                    <td className="px-4 py-3">El cliente ya te ha dicho que prefiere email</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">WhatsApp</td>
                    <td className="px-4 py-3">Confirmaciones rápidas, seguimiento breve, relaciones ya establecidas</td>
                    <td className="px-4 py-3">Es un primer contacto formal o corporativo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Email</td>
                    <td className="px-4 py-3">Enviar propuestas, documentación, información detallada</td>
                    <td className="px-4 py-3">Necesitas respuesta rápida (los emails se pierden)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Visita presencial</td>
                    <td className="px-4 py-3">Clientes de alto valor, cierres importantes, relaciones a largo plazo</td>
                    <td className="px-4 py-3">El ticket es bajo o el cliente está lejos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Lo ideal es alternar canales. Si enviaste la propuesta por email, haz el primer seguimiento
              por teléfono o WhatsApp. Si el día 7 escribiste por WhatsApp, el día 14 llama. La
              variedad de canal mantiene la conversación fresca y evita la sensación de acoso.
            </p>

            <h2>CRM básico para pymes: no necesitas complicarte</h2>
            <p>
              La palabra CRM asusta a muchos empresarios, pero en realidad es solo un sitio donde apuntas
              a quién tienes que llamar, cuándo y qué le dijiste la última vez. Puede ser tan simple como
              una hoja de cálculo con estas columnas:
            </p>

            <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-900">Tu CRM mínimo viable (hoja de cálculo)</h3>
              <ol className="ml-4 list-decimal space-y-2 text-amber-800">
                <li><strong>Nombre y empresa:</strong> quién es y de dónde viene.</li>
                <li><strong>Origen:</strong> cómo te encontró (web, recomendación, red social, evento...).</li>
                <li><strong>Fecha primer contacto:</strong> cuándo empezó la conversación.</li>
                <li><strong>Estado:</strong> nuevo, propuesta enviada, en seguimiento, cerrado (sí/no).</li>
                <li><strong>Próxima acción:</strong> qué tienes que hacer y cuándo. Esta es la columna más importante.</li>
                <li><strong>Notas:</strong> qué te dijo, qué objeciones tiene, qué le importa.</li>
              </ol>
            </div>

            <p>
              Si manejas más de 15-20 contactos activos al mes, una hoja de cálculo se quedará corta.
              En ese caso, herramientas como HubSpot (gratuito), Pipedrive o noCRM hacen exactamente lo
              mismo pero con recordatorios automáticos y mejor visualización. Elige la que tu equipo
              vaya a usar de verdad — la herramienta perfecta que nadie abre no sirve para nada.
            </p>

            <h2>Cuándo dejar de hacer seguimiento</h2>
            <p>
              Hacer seguimiento no significa perseguir a alguien eternamente. Hay momentos claros para
              parar:
            </p>

            <ul>
              <li><strong>Ha dicho &laquo;no&raquo; de forma clara.</strong> Respeta su decisión. Agradece y pregunta el motivo — esa información es oro. Pero no insistas.</li>
              <li><strong>No ha respondido tras 4-5 intentos en un mes.</strong> El silencio sostenido es un &laquo;no&raquo; implícito. Pásalo a tu lista de reactivación y vuelve a contactar en 3 meses con un enfoque diferente.</li>
              <li><strong>Ha elegido a un competidor.</strong> Felicítale, desea le vaya bien y deja la puerta abierta. Muchos de estos clientes vuelven cuando la otra opción no funciona.</li>
              <li><strong>El proyecto ya no existe.</strong> Si el cliente ha cancelado el proyecto o ha cambiado de circunstancias, hacer seguimiento no tiene sentido. Archívalo.</li>
            </ul>

            <p>
              Saber cuándo parar es tan profesional como saber cuándo insistir. Lo que no puedes hacer
              es parar por pereza o por miedo al &laquo;no&raquo;. Eso no es respetar al cliente — es abandonar
              la venta.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;El seguimiento no es insistir. Es demostrar que te importa lo suficiente como para
              estar ahí cuando el cliente esté listo para decidir.&rdquo;
            </blockquote>

            <h2>El seguimiento post-venta: donde empieza la rentabilidad real</h2>
            <p>
              Cuando un cliente te compra, la mayoría de los negocios pasan al siguiente lead y se
              olvidan del que acaba de pagar. Error gravísimo. Captar un cliente nuevo cuesta entre 5 y
              7 veces más que vender a uno existente. Si quieres{" "}
              <a href="/blog/como-vender-mas-sin-bajar-precios" className="text-accent-600 underline hover:text-accent-700">
                vender más sin bajar precios
              </a>, la mitad de la respuesta está en cuidar a los que ya te compraron.
            </p>
            <p>
              Tu seguimiento post-venta mínimo debería incluir:
            </p>
            <ol>
              <li><strong>Semana 1-2:</strong> Contacto para confirmar que todo va bien. &laquo;¿Cómo estás con [el producto/servicio]? ¿Necesitas algo?&raquo;</li>
              <li><strong>Mes 2-3:</strong> Contacto de mantenimiento. Comparte algo útil, pregunta cómo van las cosas. No vendas nada todavía.</li>
              <li><strong>Mes 6:</strong> Ofrece algo complementario si tiene sentido. O simplemente mantén la relación viva.</li>
            </ol>
            <p>
              Esto es la base de la{" "}
              <a href="/blog/como-fidelizar-clientes-pyme" className="text-accent-600 underline hover:text-accent-700">
                fidelización de clientes en una pyme
              </a>. Un cliente bien cuidado vuelve, compra más y te recomienda. Y una recomendación es el
              lead más caliente que existe.
            </p>

            <h2>Plan de acción: monta tu sistema de seguimiento esta semana</h2>

            <div className="not-prose my-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-900">Tu plan en 5 pasos</h3>
              <ol className="ml-4 list-decimal space-y-2 text-green-800">
                <li><strong>Hoy:</strong> Lista todos los presupuestos y propuestas enviados en los últimos 60 días que no hayas seguido. Ahí tienes ventas esperándote.</li>
                <li><strong>Mañana:</strong> Crea tu hoja de seguimiento (CRM mínimo) con las 6 columnas que te he dado. Mete todos los contactos activos.</li>
                <li><strong>Esta semana:</strong> Define tu cadencia: día 0, día 3, día 7, día 14, día 30. Adapta los plazos a tu sector y copia las plantillas.</li>
                <li><strong>Cada viernes:</strong> Revisa tu hoja de seguimiento 15 minutos. ¿A quién tienes que contactar la semana que viene? ¿Algún contacto para archivar?</li>
                <li><strong>Cada mes:</strong> Mide tu tasa de conversión (propuestas enviadas vs. cerradas). Si sube, tu seguimiento funciona. Si no, revisa las plantillas y los tiempos.</li>
              </ol>
            </div>

            <h2>Conclusión</h2>
            <p>
              Hacer seguimiento comercial no es ser pesado. Pesado es llamar sin aportar nada, sin
              respetar los tiempos del cliente y sin dar opción a decir que no. Un seguimiento profesional
              es todo lo contrario: es un sistema que demuestra interés, aporta valor y facilita la decisión.
            </p>
            <p>
              La mayoría de tus competidores no hacen seguimiento. Los que lo hacen, lo hacen mal. Si
              montas un sistema como el que te he descrito, vas a cerrar más ventas con los mismos contactos
              que ya tienes. No necesitas más leads — necesitas no perder los que ya tienes delante.
            </p>

            {/* ── CTA Inline ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Necesitas ayuda para montar tu sistema de seguimiento comercial?
              </p>
              <p className="mt-2 text-gray-600">
                Te ayudo a diseñar una cadencia de seguimiento adaptada a tu negocio, con plantillas,
                métricas y el CRM que mejor encaje con tu equipo. Diagnóstico gratuito y sin compromiso.
              </p>
              <a href="/diagnostico-negocio" className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600">
                Solicita tu diagnóstico gratuito
              </a>
            </div>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-hacer-seguimiento-comercial" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Cuántas ventas estás perdiendo por falta de seguimiento?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Revisamos juntos tu proceso comercial, identificamos dónde se te escapan ventas y montamos
            un sistema de seguimiento que funcione. Sin agobios, con método.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="como-hacer-seguimiento-comercial" />
    </>
  );
}
