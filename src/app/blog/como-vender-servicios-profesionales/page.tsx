import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo vender servicios profesionales sin sentirte vendedor | Consultoría Método",
  description:
    "Guía práctica para profesionales que odian vender. Cómo conseguir clientes con un enfoque basado en confianza: diagnosticar antes de proponer, compartir conocimiento y hacer seguimiento sin presión. Consultoría empresarial en Galicia y online.",
  keywords: [
    "vender servicios profesionales",
    "cómo vender sin ser vendedor",
    "venta consultiva",
    "conseguir clientes consultor",
    "vender servicios confianza",
    "proceso comercial profesionales",
    "consultoría empresarial Galicia",
    "propuesta comercial servicios",
  ],
  openGraph: {
    title: "Cómo vender servicios profesionales sin sentirte vendedor",
    description:
      "Guía práctica para profesionales que odian vender. Enfoque basado en confianza: diagnosticar antes de proponer, compartir conocimiento y hacer seguimiento sin presión.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-vender-servicios-profesionales" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo vender servicios profesionales sin sentirte vendedor",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-06-29",
};

export default function ArticuloVenderServiciosProfesionales() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo vender servicios profesionales sin sentirte vendedor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Eres bueno en lo tuyo. Pero cada vez que toca &quot;vender&quot;, algo se bloquea.
            No quieres parecer insistente, no quieres presionar, no quieres ser &quot;ese tipo de persona&quot;.
            La buena noticia: vender bien no se parece en nada a lo que imaginas.
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

            <h2>El problema no es vender. Es cómo te imaginas la venta</h2>
            <p>
              Consultores, abogados, arquitectos, diseñadores, ingenieros, formadores. Profesionales
              excelentes en lo suyo que comparten un mismo problema: detestan la parte comercial de su
              trabajo. Cuando les dices &quot;tienes que vender más&quot;, imaginan llamadas frías,
              presión, descuentos y frases artificiales.
            </p>
            <p>
              Pero esa imagen de la venta es una caricatura. La venta real — la que funciona con
              servicios profesionales — no tiene nada que ver con presionar. Tiene que ver con
              <strong> ayudar a alguien a tomar una decisión</strong>. Y eso es exactamente lo que
              haces en tu trabajo: diagnosticar, recomendar y acompañar.
            </p>

            <blockquote>
              &laquo;Vender no es convencer a alguien de que te necesita. Es mostrarle con claridad
              qué puede cambiar si trabaja contigo — y dejar que decida.&raquo;
            </blockquote>

            <h2>El enfoque basado en confianza: 4 principios</h2>
            <p>
              Después de más de 25 años trabajando con profesionales independientes y empresas de
              servicios, he visto que los que consiguen clientes de forma consistente — sin sentirse
              vendedores — comparten cuatro hábitos:
            </p>

            {/* ── Principios visuales ── */}
            <div className="not-prose my-10 space-y-4">
              <div className="rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                  <h3 className="text-lg font-bold text-gray-900">Comparten conocimiento antes de pedir nada</h3>
                </div>
                <p className="mt-3 text-base text-gray-700 leading-relaxed">
                  No guardan su experiencia como secreto comercial. Publican, explican, resuelven
                  dudas reales. Cuando un potencial cliente llega a ellos, ya confía en su criterio
                  porque ha visto cómo piensan. Un artículo útil, una charla en un evento local, una
                  respuesta generosa en una conversación informal: todo suma. El que da primero, vende después.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                  <h3 className="text-lg font-bold text-gray-900">Diagnostican antes de proponer</h3>
                </div>
                <p className="mt-3 text-base text-gray-700 leading-relaxed">
                  No envían una propuesta a la primera llamada. Escuchan, preguntan, entienden la
                  situación real del cliente y solo entonces proponen. Esto cambia toda la dinámica:
                  el cliente no siente que le están vendiendo — siente que le están ayudando a entender
                  su problema. Y cuando la propuesta llega, es la respuesta lógica a un diagnóstico
                  que el propio cliente ha validado.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                  <h3 className="text-lg font-bold text-gray-900">Presentan opciones, no solo un precio</h3>
                </div>
                <p className="mt-3 text-base text-gray-700 leading-relaxed">
                  En lugar de enviar un presupuesto con una cifra y esperar, ofrecen dos o tres opciones
                  con alcances distintos. Esto convierte la conversación de &quot;es caro o barato&quot;
                  en &quot;cuál me encaja mejor&quot;. El cliente tiene el control, tú mantienes el
                  margen, y la decisión se toma con más calma y menos fricción.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                  <h3 className="text-lg font-bold text-gray-900">Hacen seguimiento sin presionar</h3>
                </div>
                <p className="mt-3 text-base text-gray-700 leading-relaxed">
                  El seguimiento no es &quot;¿has visto mi presupuesto?&quot;. Es aportar valor:
                  compartir un artículo relevante, enviar un dato que refuerza la propuesta, preguntar
                  si surgieron dudas. Mantener la conversación viva sin que el cliente sienta presión.
                  La mayoría de los profesionales abandonan después del primer contacto. Los que cierran
                  son los que saben estar presentes sin agobiar.
                </p>
              </div>
            </div>

            <p>
              Estos cuatro principios son la base de lo que explico también en{" "}
              <a href="/blog/como-vender-mas-sin-bajar-precios" className="text-accent-600 underline hover:text-accent-700">
                cómo vender más sin bajar precios
              </a>: la venta que funciona a largo plazo no es la que presiona, es la que genera
              confianza.
            </p>

            <h2>Guiones prácticos para situaciones reales</h2>
            <p>
              La teoría está bien, pero lo que necesitas son frases concretas para los momentos
              que más te incomodan. Aquí van los más habituales:
            </p>

            <h3>Cuando alguien te pregunta &quot;cuánto cobras&quot; en los primeros 5 minutos</h3>
            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">Lo que NO funciona</p>
              <p className="mt-1 text-sm text-gray-600 italic">&quot;Depende... mis tarifas están entre X e Y...&quot;</p>
              <p className="mt-3 text-sm font-semibold text-accent-800">Lo que SI funciona</p>
              <p className="mt-1 text-sm text-gray-700">
                &quot;Antes de hablar de precios necesito entender bien tu situación. Cada caso es distinto
                y no quiero darte un número que no refleje lo que realmente necesitas. Si te parece, te hago
                unas preguntas y luego te preparo una propuesta con opciones claras.&quot;
              </p>
            </div>

            <h3>Cuando envías una propuesta y no contestan</h3>
            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">Lo que NO funciona</p>
              <p className="mt-1 text-sm text-gray-600 italic">&quot;Solo quería saber si habías visto mi presupuesto...&quot;</p>
              <p className="mt-3 text-sm font-semibold text-accent-800">Lo que SI funciona</p>
              <p className="mt-1 text-sm text-gray-700">
                &quot;Hola [nombre]. Encontré este [artículo/dato/caso] que tiene mucho que ver con lo que
                hablamos. Te lo envío por si te resulta útil. Si te surge cualquier duda sobre la propuesta,
                estoy disponible.&quot;
              </p>
            </div>

            <h3>Cuando el cliente dice &quot;me lo pienso&quot;</h3>
            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">Lo que NO funciona</p>
              <p className="mt-1 text-sm text-gray-600 italic">&quot;Si contratas esta semana te hago un 10 % de descuento.&quot;</p>
              <p className="mt-3 text-sm font-semibold text-accent-800">Lo que SI funciona</p>
              <p className="mt-1 text-sm text-gray-700">
                &quot;Me parece bien. Es una decisión importante. ¿Hay algo que te genere duda o que
                necesites que te aclare para poder valorarlo mejor? Sin prisa.&quot;
              </p>
            </div>

            <p>
              Fíjate en el patrón: en todos los casos la respuesta efectiva pone el foco en el
              cliente, no en ti. No es &quot;cómprame&quot;. Es &quot;ayúdame a ayudarte&quot;.
              Si quieres profundizar en cómo construir un proceso de ventas completo para tu tipo
              de negocio, lee{" "}
              <a href="/blog/como-hacer-proceso-comercial-pyme" className="text-accent-600 underline hover:text-accent-700">
                cómo montar un proceso comercial en una pyme
              </a>.
            </p>

            <h2>Por qué tus propuestas no se aceptan (y cómo arreglarlo)</h2>
            <p>
              La mayoría de las propuestas de servicios profesionales fallan por las mismas razones.
              No es el precio — es la forma. Estos son los errores más frecuentes que veo:
            </p>

            <ul>
              <li>
                <strong>Propuesta genérica.</strong> El cliente no ve que hayas entendido su problema
                concreto. Se nota que es una plantilla con el nombre cambiado.
              </li>
              <li>
                <strong>Solo habla de lo que haces, no de lo que el cliente obtiene.</strong> Páginas
                de metodología, herramientas y fases. Al cliente le importa el resultado, no el proceso.
              </li>
              <li>
                <strong>Una sola opción y un solo precio.</strong> Cuando presentas solo una cifra, la
                conversación se reduce a sí o no. Con tres opciones, el cliente elige cómo quiere
                avanzar.
              </li>
              <li>
                <strong>Sin fecha de validez ni siguiente paso.</strong> La propuesta se queda flotando
                en el limbo. Sin urgencia real, sin un paso concreto para avanzar.
              </li>
              <li>
                <strong>Sin casos de referencia.</strong> El cliente necesita ver que has hecho esto antes
                y que ha funcionado. Un ejemplo real vale más que diez páginas de credenciales.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="font-semibold text-primary-800">Estructura de una propuesta que convierte</p>
              <ol className="mt-3 space-y-2 text-sm text-primary-900">
                <li><strong>1. Resumen del problema</strong> — lo que el cliente te ha contado, con tus palabras. Esto demuestra que has escuchado.</li>
                <li><strong>2. Diagnóstico</strong> — tu interpretación profesional de la situación. Aquí aportas valor antes de cobrar.</li>
                <li><strong>3. Propuesta de trabajo</strong> — qué harás, en qué plazos y qué resultado puede esperar.</li>
                <li><strong>4. Tres opciones</strong> — con alcances y precios distintos. El cliente elige.</li>
                <li><strong>5. Caso similar</strong> — un ejemplo de alguien en situación parecida y el resultado que obtuvo.</li>
                <li><strong>6. Siguiente paso claro</strong> — una llamada, una reunión, una fecha concreta.</li>
              </ol>
            </div>

            <h2>Diferenciarte es la mejor estrategia de ventas</h2>
            <p>
              Cuando un potencial cliente te compara con otros tres profesionales y no ve diferencia,
              elige por precio. Pero si percibe que tú entiendes su problema mejor que los demás, que
              tu enfoque es más claro y que tienes experiencia demostrable en su tipo de situación, el
              precio pasa a segundo plano.
            </p>
            <p>
              La diferenciación no es tener un logo bonito o un eslogan creativo. Es que el cliente
              piense: &quot;Este es el que mejor entiende lo que me pasa&quot;. Y eso se consigue con
              el enfoque que hemos descrito: compartir conocimiento, diagnosticar antes de proponer y
              presentar propuestas personalizadas. Si quieres ir más a fondo en este tema, tengo un
              artículo completo sobre{" "}
              <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
                cómo diferenciarte de tu competencia
              </a>.
            </p>

            <h2>Plan de acción: empieza esta semana</h2>
            <ol>
              <li>
                <strong>Revisa tus últimas 5 propuestas rechazadas.</strong> Llama a esos contactos y
                pregunta con honestidad por qué no avanzaron. Lo que descubras vale oro.
              </li>
              <li>
                <strong>Reescribe tu propuesta tipo con la estructura de 6 puntos.</strong> Personaliza
                el resumen del problema para cada cliente. Incluye siempre tres opciones.
              </li>
              <li>
                <strong>Publica un contenido útil.</strong> Un artículo, un post, un vídeo corto explicando
                algo que tu cliente ideal necesita saber. Sin vender nada — solo aportar.
              </li>
              <li>
                <strong>Establece una rutina de seguimiento.</strong> Cada propuesta enviada lleva asociados
                tres momentos de contacto: a los 3 días (valor añadido), a los 7 días (pregunta abierta)
                y a los 14 días (cierre amable).
              </li>
              <li>
                <strong>Mide tu tasa de conversión.</strong> De cada 10 conversaciones iniciales, ¿cuántas
                acaban en propuesta? De cada 10 propuestas, ¿cuántas se aceptan? Si no mides, no puedes
                mejorar.
              </li>
            </ol>

            <h2>Conclusión: vender es ayudar a decidir</h2>
            <p>
              Si eres un buen profesional, ya tienes la base más importante para vender: sabes resolver
              problemas reales. Lo que te falta no es técnica de ventas — es un sistema que te permita
              mostrar tu valor de forma natural, sin forzar, sin presionar.
            </p>
            <p>
              Diagnostica antes de proponer. Comparte tu conocimiento con generosidad. Presenta opciones,
              no ultimátums. Y haz seguimiento como harías con un paciente o un cliente que te importa:
              con interés genuino, no con prisa por cobrar.
            </p>
            <p>
              Eso no es vender. Es ejercer tu profesión con criterio comercial. Y los resultados llegan.
            </p>

            {/* ── CTA inline ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Quieres montar un proceso comercial que funcione sin sentirte vendedor?
              </p>
              <p className="mt-2 text-gray-600">
                Te ayudo a diseñar tu sistema de captación y venta: desde la primera conversación hasta
                el cierre. Adaptado a tu perfil profesional y a tu tipo de cliente.
              </p>
              <a
                href="/diagnostico-negocio"
                className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
              >
                Solicita tu diagnóstico gratuito
              </a>
            </div>

          </article>

          <BlogSidebar currentSlug="como-vender-servicios-profesionales" />
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

      <BlogNav currentSlug="como-vender-servicios-profesionales" />
    </>
  );
}
