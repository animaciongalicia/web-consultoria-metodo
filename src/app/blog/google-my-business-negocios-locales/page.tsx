import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Google My Business para negocios locales: guía práctica | Consultoría Método",
  description:
    "Guía paso a paso para optimizar tu ficha de Google Business Profile. Categorías, fotos, reseñas, publicaciones y SEO local para negocios que quieren más clientes. Consultoría empresarial en Coruña.",
  keywords: [
    "Google My Business",
    "Google Business Profile",
    "ficha de Google negocios",
    "SEO local",
    "reseñas Google",
    "negocio local Google",
    "cómo salir en Google Maps",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "marketing local pymes",
  ],
  openGraph: {
    title: "Google My Business para negocios locales: guía práctica",
    description:
      "Los negocios con perfil optimizado en Google reciben 7 veces más clics. Guía paso a paso para que tu negocio local aparezca donde buscan tus clientes.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/google-my-business-negocios-locales" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google My Business para negocios locales: guía práctica",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-16",
};

export default function ArticuloGoogleMyBusiness() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Google My Business para negocios locales: guía práctica
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Cuando alguien busca &laquo;fontanero en Coruña&raquo; o &laquo;restaurante cerca de mí&raquo;,
            Google decide quién aparece primero. Si tu ficha no está optimizada, estás regalando
            clientes a tu competencia. Los negocios con perfil completo reciben 7 veces más clics
            que los que tienen la ficha a medio rellenar. Aquí te enseño a hacerlo bien, paso a paso.
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
              Google Business Profile (antes Google My Business) es la herramienta gratuita más
              poderosa que tiene un negocio local para captar clientes. Y sin embargo, la mayoría de
              las pymes la tienen abandonada: datos desactualizados, sin fotos, sin reseñas y sin
              publicaciones. Es como tener un escaparate sucio en la calle más transitada de tu ciudad.
            </p>
            <p>
              Llevo años ayudando a negocios locales a{" "}
              <a href="/blog/como-captar-clientes-negocio-local" className="text-accent-600 underline hover:text-accent-700">
                captar clientes en su zona
              </a>, y te puedo asegurar que optimizar tu ficha de Google es una de las acciones con
              mejor retorno de inversión que puedes hacer. No cuesta dinero, lleva unas horas de
              trabajo bien hecho, y los resultados se notan en semanas.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Tu ficha de Google es tu primer escaparate. La mayoría de tus clientes potenciales
              te van a juzgar ahí antes de llamarte, visitarte o pisar tu local.&rdquo;
            </blockquote>

            <h2>Los 7 factores que determinan tu visibilidad en Google</h2>
            <p>
              Google no ordena las fichas de negocios al azar. Utiliza un algoritmo que valora varios
              factores. Cuantos más tengas bien, más arriba apareces cuando alguien busca lo que tú
              vendes. Estos son los que más pesan:
            </p>

            <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">1</div>
                <h3 className="text-lg font-bold text-gray-900">Perfil completo al 100 %</h3>
                <p className="mt-2 text-gray-600">
                  Nombre exacto del negocio, dirección, teléfono, horario, web, descripción y atributos.
                  Google penaliza las fichas incompletas. Cada campo vacío es visibilidad que pierdes.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">2</div>
                <h3 className="text-lg font-bold text-gray-900">Categorías bien elegidas</h3>
                <p className="mt-2 text-gray-600">
                  La categoría principal debe ser la más específica posible. Si eres &laquo;clínica de
                  fisioterapia&raquo;, no pongas &laquo;centro médico&raquo;. Puedes añadir hasta 9
                  categorías secundarias.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-800">3</div>
                <h3 className="text-lg font-bold text-gray-900">Reseñas (cantidad + calidad)</h3>
                <p className="mt-2 text-gray-600">
                  Las reseñas son el factor de confianza número uno. No solo importa la nota media: Google
                  valora la cantidad, la frecuencia y que respondas a todas, buenas y malas.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-800">4</div>
                <h3 className="text-lg font-bold text-gray-900">Fotos actualizadas</h3>
                <p className="mt-2 text-gray-600">
                  Los negocios con más de 100 fotos reciben un 520 % más de llamadas que los que no
                  tienen fotos. Sube fotos reales del local, equipo, productos y trabajos realizados.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">5</div>
                <h3 className="text-lg font-bold text-gray-900">Publicaciones regulares</h3>
                <p className="mt-2 text-gray-600">
                  Google permite publicar novedades, ofertas y eventos directamente en tu ficha. Los
                  negocios que publican regularmente reciben más interacciones y Google los considera
                  más activos.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">6</div>
                <h3 className="text-lg font-bold text-gray-900">Preguntas y respuestas</h3>
                <p className="mt-2 text-gray-600">
                  La sección de Q&A la puede usar cualquiera. Si no la controlas tú, otros la rellenarán
                  por ti. Adelántate: crea tus propias preguntas frecuentes y respóndelas.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-800">7</div>
                <h3 className="text-lg font-bold text-gray-900">Coherencia NAP (nombre, dirección, teléfono)</h3>
                <p className="mt-2 text-gray-600">
                  Tu nombre, dirección y teléfono deben ser exactamente iguales en tu ficha de Google,
                  en tu web, en directorios y en redes sociales. Cualquier inconsistencia confunde al
                  algoritmo y baja tu posición.
                </p>
              </div>
            </div>

            <h2>Paso a paso: optimiza tu ficha en una tarde</h2>
            <p>
              No necesitas contratar a nadie para esto. Con una tarde de trabajo bien enfocado puedes
              tener una ficha profesional que trabaje para ti 24 horas al día. Sigue este orden:
            </p>

            <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-900">Checklist de optimización (en orden de impacto)</h3>
              <ol className="ml-4 list-decimal space-y-2 text-amber-800">
                <li><strong>Verifica tu negocio</strong> si no lo has hecho. Sin verificación, Google no te muestra. Puedes hacerlo por correo postal, teléfono o email.</li>
                <li><strong>Nombre exacto del negocio.</strong> No metas palabras clave artificiales (&laquo;Fontanería Pérez - Mejor Fontanero en Madrid&raquo;). Google lo penaliza.</li>
                <li><strong>Elige la categoría principal correcta.</strong> Busca la más específica que describa tu actividad principal. Añade categorías secundarias para otros servicios.</li>
                <li><strong>Completa la descripción</strong> (750 caracteres). Describe qué haces, para quién y qué te diferencia. Incluye tu ciudad y zona de servicio de forma natural.</li>
                <li><strong>Horario actualizado.</strong> Incluye horarios especiales para festivos. Un horario incorrecto genera reseñas negativas automáticas.</li>
                <li><strong>Sube mínimo 20 fotos</strong> de calidad: fachada, interior, equipo, productos, trabajos realizados. Fotos reales, no de stock.</li>
                <li><strong>Activa la mensajería</strong> si puedes atenderla. Los clientes prefieren escribir antes que llamar.</li>
                <li><strong>Crea tu primera publicación</strong> con una novedad o servicio destacado.</li>
                <li><strong>Añade tus servicios/productos</strong> con descripciones y precios si es posible.</li>
                <li><strong>Rellena las preguntas y respuestas</strong> con las 5 preguntas que más te hacen tus clientes.</li>
              </ol>
            </div>

            <h2>Reseñas: cómo conseguirlas (y cómo responder)</h2>
            <p>
              Las reseñas son el factor decisivo para la mayoría de los consumidores. El 88 % de las
              personas confía en las reseñas online tanto como en una recomendación personal. Y Google
              las usa como señal de relevancia para posicionarte. Pero pedir reseñas da vergüenza a
              muchos empresarios. Aquí va un sistema que funciona:
            </p>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Sistema para conseguir reseñas sin incomodar</h3>
              <ul className="ml-4 list-disc space-y-2 text-blue-800">
                <li><strong>Momento clave:</strong> Pide la reseña justo después de entregar un buen resultado, cuando el cliente está contento. No esperes días.</li>
                <li><strong>Hazlo fácil:</strong> Genera tu enlace directo de reseñas desde Google Business Profile y mándalo por WhatsApp con un mensaje breve: &laquo;¿Te importaría dejarnos una reseña? Nos ayuda mucho. Aquí tienes el enlace.&raquo;</li>
                <li><strong>Cartel en el local:</strong> Un QR que lleve directamente a la página de reseñas. Ponlo junto a la caja o en la puerta de salida.</li>
                <li><strong>En la firma del email:</strong> Añade un enlace tipo &laquo;Déjanos tu opinión en Google&raquo; en cada email que envíes.</li>
                <li><strong>No compres reseñas falsas.</strong> Google las detecta y te penaliza. Además, un cliente real nota las reseñas inventadas a kilómetros.</li>
              </ul>
            </div>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">Responder a las reseñas: obligatorio</p>
              <p className="mt-2 text-accent-900">
                Responde a todas las reseñas, positivas y negativas. A las positivas: agradece con
                nombre y personaliza. A las negativas: nunca discutas, reconoce el problema, ofrece
                solución y lleva la conversación al privado. Otros clientes potenciales leen tus
                respuestas. Lo que dices ahí es marketing puro.
              </p>
            </div>

            <h2>Las publicaciones de Google: tu arma secreta gratuita</h2>
            <p>
              Muy pocos negocios locales usan las publicaciones de Google Business Profile. Es como
              tener un tablón de anuncios gratuito en la primera página de resultados de Google y no
              usarlo. Puedes publicar:
            </p>

            <ul>
              <li><strong>Novedades:</strong> Nuevo servicio, nuevo producto, nueva incorporación al equipo.</li>
              <li><strong>Ofertas:</strong> Descuentos temporales, promociones estacionales.</li>
              <li><strong>Eventos:</strong> Si organizas talleres, jornadas de puertas abiertas o cualquier evento.</li>
              <li><strong>Contenido útil:</strong> Consejos rápidos relacionados con tu sector. Posiciona tu negocio como referente.</li>
            </ul>

            <p>
              Lo ideal es publicar al menos una vez por semana. Las publicaciones caducan a los 7 días,
              así que necesitas constancia. 15 minutos semanales son suficientes para mantener tu ficha
              activa y señalar a Google que tu negocio está vivo.
            </p>

            <h2>Errores que hunden tu ficha de Google</h2>
            <p>
              He auditado cientos de fichas de negocios locales. Estos son los errores que más veo y que
              más daño hacen:
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Error</th>
                    <th className="px-4 py-3 font-semibold">Consecuencia</th>
                    <th className="px-4 py-3 font-semibold">Solución</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Nombre con palabras clave forzadas</td>
                    <td className="px-4 py-3">Google puede suspender tu ficha</td>
                    <td className="px-4 py-3">Usa el nombre real y legal de tu negocio</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Categoría demasiado genérica</td>
                    <td className="px-4 py-3">Compites contra negocios que no son tu competencia real</td>
                    <td className="px-4 py-3">Elige la categoría más específica disponible</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">No responder reseñas negativas</td>
                    <td className="px-4 py-3">Los clientes potenciales asumen que no te importa</td>
                    <td className="px-4 py-3">Responde siempre con profesionalidad y empatía</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Fotos de mala calidad o de stock</td>
                    <td className="px-4 py-3">Transmite desconfianza y poca profesionalidad</td>
                    <td className="px-4 py-3">Fotos reales, bien iluminadas, con el móvil basta</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Horario desactualizado</td>
                    <td className="px-4 py-3">Clientes que llegan y encuentran cerrado = reseña negativa</td>
                    <td className="px-4 py-3">Revísalo cada mes y añade horarios especiales</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Datos diferentes en web, redes y Google</td>
                    <td className="px-4 py-3">Google no sabe cuál es la información correcta y baja tu posición</td>
                    <td className="px-4 py-3">Unifica NAP en todos los canales</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Google Business Profile y SEO local: cómo se conectan</h2>
            <p>
              Tu ficha de Google no funciona sola. Es una pieza dentro de tu estrategia de visibilidad
              local. Para que funcione al máximo, necesita ir acompañada de:
            </p>

            <ol>
              <li><strong>Una web optimizada para tu ciudad y zona.</strong> Tu web debe mencionar de forma natural tu ubicación, servicios y zona de cobertura. No hace falta una web cara — hace falta una web bien hecha. Si aún no la tienes, revisa{" "}
                <a href="/blog/como-digitalizar-tu-negocio-pequeno" className="text-accent-600 underline hover:text-accent-700">
                  cómo digitalizar tu negocio
                </a>{" "} para empezar con lo esencial.
              </li>
              <li><strong>Presencia en directorios locales</strong> (Páginas Amarillas, QDQ, Yelp, TripAdvisor si aplica) con datos idénticos a tu ficha de Google.</li>
              <li><strong>Contenido local en tu web</strong> (un blog con artículos que mencionen tu ciudad, tu barrio, problemas locales de tus clientes).</li>
              <li><strong>Enlaces desde webs locales</strong> (asociaciones de comerciantes, cámara de comercio, periódicos locales, colaboraciones).</li>
            </ol>

            <p>
              Todo esto le dice a Google: &laquo;Este negocio es relevante para esta zona.&raquo; Y eso se
              traduce en aparecer más arriba cuando alguien busca lo que tú ofreces en tu ciudad.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;No necesitas invertir miles de euros en publicidad para que te encuentren. Necesitas
              una ficha de Google bien hecha, reseñas reales y una web que confirme lo que dice tu
              ficha. Eso, para un negocio local, vale más que cualquier campaña.&rdquo;
            </blockquote>

            <h2>El impacto real: datos que hablan</h2>

            <div className="not-prose my-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-primary-200 bg-primary-50 p-5 text-center">
                <p className="text-3xl font-extrabold text-primary-900">7x</p>
                <p className="mt-2 text-sm text-primary-700">más clics en fichas completas vs. fichas a medio rellenar</p>
              </div>
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-5 text-center">
                <p className="text-3xl font-extrabold text-accent-900">520 %</p>
                <p className="mt-2 text-sm text-accent-700">más llamadas en negocios con +100 fotos en su ficha</p>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
                <p className="text-3xl font-extrabold text-green-900">88 %</p>
                <p className="mt-2 text-sm text-green-700">de consumidores confía en reseñas online como en recomendaciones personales</p>
              </div>
            </div>

            <p>
              Estos números no son teóricos. Son datos que veo reflejados en los negocios con los que
              trabajo. Un{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor empresarial en Coruña
              </a>{" "}
              te puede ayudar a auditar tu presencia online y priorizar las acciones que más impacto
              tienen en tu captación local.
            </p>

            <h2>Plan de acción: optimiza tu Google Business Profile esta semana</h2>

            <div className="not-prose my-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-900">Tu plan en 5 días</h3>
              <ol className="ml-4 list-decimal space-y-2 text-green-800">
                <li><strong>Lunes:</strong> Verifica tu ficha (si no lo has hecho). Completa todos los campos básicos: nombre, dirección, teléfono, horario, web, descripción.</li>
                <li><strong>Martes:</strong> Revisa y ajusta tus categorías. Busca la más específica como principal. Añade 3-5 secundarias que describan otros servicios.</li>
                <li><strong>Miércoles:</strong> Sube un mínimo de 20 fotos reales y de calidad. Fachada, interior, equipo, productos, trabajos realizados. Nombra los archivos con tu negocio y ciudad antes de subirlos.</li>
                <li><strong>Jueves:</strong> Manda un WhatsApp a tus 10 mejores clientes pidiendo una reseña honesta. Incluye el enlace directo. Responde a todas las reseñas que ya tengas.</li>
                <li><strong>Viernes:</strong> Crea tu primera publicación y escribe 5 preguntas frecuentes con sus respuestas. Pon un recordatorio semanal para publicar cada semana.</li>
              </ol>
            </div>

            <h2>Conclusión</h2>
            <p>
              Google Business Profile es gratuito, potente y está al alcance de cualquier negocio local.
              No hace falta ser experto en tecnología ni contratar a una agencia. Hace falta dedicar unas
              horas a hacerlo bien y mantener la constancia.
            </p>
            <p>
              Si tu competidor tiene una ficha mejor que la tuya, está captando clientes que deberían
              ser tuyos. Cada día sin tu ficha optimizada es un día regalando visibilidad. La buena
              noticia es que la mayoría de los negocios locales no hacen esto. Así que si tú lo haces
              bien, vas a destacar. No por gastar más, sino por hacer las cosas con método.
            </p>

            {/* ── CTA Inline ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Quieres una auditoría de la presencia online de tu negocio?
              </p>
              <p className="mt-2 text-gray-600">
                Revisamos tu ficha de Google, tu web y tu estrategia de captación local para
                identificar qué mejorar primero. Diagnóstico gratuito y sin compromiso.
              </p>
              <a href="/diagnostico-negocio" className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600">
                Solicita tu diagnóstico gratuito
              </a>
            </div>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="google-my-business-negocios-locales" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio aparece donde buscan tus clientes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudo a optimizar tu presencia local en Google y a montar un sistema de captación
            que funcione. Sin humo, sin agencias caras — con método y sentido común.
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

      <BlogNav currentSlug="google-my-business-negocios-locales" />
    </>
  );
}
