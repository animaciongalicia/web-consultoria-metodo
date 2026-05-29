import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Redes sociales para pymes: cuándo sirven, cuándo no y cuándo son una pérdida de tiempo | Consultoría Método",
  description:
    "¿Las redes sociales funcionan para tu negocio? Análisis honesto de cuándo sirven, cuándo no, errores que queman dinero y alternativas más rentables para pymes. Consultor de marketing en A Coruña.",
  keywords: [
    "redes sociales pymes",
    "marketing redes sociales empresas",
    "Instagram para negocios",
    "redes sociales para empresas pequeñas",
    "marketing digital pymes",
    "consultor marketing A Coruña",
    "estrategia redes sociales pyme",
    "marketing para pymes Galicia",
  ],
  openGraph: {
    title: "Redes sociales para pymes: cuándo sirven, cuándo no y cuándo son una pérdida de tiempo",
    description:
      "Análisis honesto sobre redes sociales para negocios pequeños. Cuándo invertir, cuándo no y qué alternativas funcionan mejor para captar clientes.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/redes-sociales-para-pymes" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Redes sociales para pymes: cuándo sirven, cuándo no y cuándo son una pérdida de tiempo",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-04",
};

export default function ArticuloRedesSocialesPymes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Redes sociales para pymes: cuándo sirven, cuándo no y cuándo son una pérdida de tiempo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            &quot;Tienes que estar en redes&quot;, te dicen. Y tú publicas, publicas y publicas.
            Pero los clientes no llegan, las ventas no suben y el único que da likes es tu cuñado.
            Hablemos en serio de redes sociales para negocios pequeños.
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

            <h2>El mito de &quot;hay que estar en redes sociales&quot;</h2>
            <p>
              Es probablemente el consejo más repetido en marketing para pymes: &quot;Tienes que estar
              en redes sociales&quot;. Lo dicen las agencias, lo dicen los cursos online, lo dice tu
              sobrino que &quot;sabe mucho de Instagram&quot;.
            </p>
            <p>
              Y no es que sea mentira del todo. Pero es una verdad a medias que ha llevado a miles
              de pequeñas empresas a gastar tiempo, dinero y energía en algo que no les está
              devolviendo nada.
            </p>
            <p>
              Porque la pregunta no es si tienes que estar en redes sociales. La pregunta es:
              <strong> ¿las redes sociales son el canal adecuado para TU negocio, TU cliente y
              TU situación?</strong> Y la respuesta, en muchos casos, es que no.
            </p>
            <p>
              Tengo un artículo más amplio sobre{" "}
              <a href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio" className="text-accent-600 underline hover:text-accent-700">
                por qué muchas empresas tiran el dinero en marketing
              </a>{" "}
              donde analizo el problema general de invertir sin estrategia. Aquí voy a centrarme
              específicamente en redes sociales — que es donde veo más dinero y tiempo perdido
              en las pymes con las que trabajo.
            </p>

            <h2>Cuándo las redes sociales SÍ funcionan para una pyme</h2>
            <p>
              No voy a decir que las redes no sirven para nada. Sirven, pero en contextos muy
              concretos. Funcionan cuando se cumplen estas condiciones:
            </p>

            <h3>Tu producto es visual</h3>
            <p>
              Si vendes algo que entra por los ojos — comida, moda, decoración, estética,
              eventos — las redes sociales pueden ser un escaparate brutal. Un restaurante con
              buenas fotos de platos, una tienda de ropa con looks bien montados, una floristería
              con arreglos que enamoran. Ahí Instagram funciona. Porque el contenido es el producto.
            </p>

            <h3>Tu cliente está en esa red (y busca lo que vendes allí)</h3>
            <p>
              Si tu cliente objetivo tiene 25-45 años y busca inspiración en Instagram para decidir
              dónde comer, qué comprar o a quién contratar para su boda — tiene sentido estar ahí.
              Pero si vendes maquinaria industrial, servicios B2B o asesoría fiscal, tu cliente no
              te va a encontrar haciendo scroll en el móvil.
            </p>

            <h3>Eres constante y tienes capacidad de crear contenido</h3>
            <p>
              Las redes premian la constancia. Publicar 3 veces una semana, desaparecer un mes y
              volver con un &quot;¡Ya estamos de vuelta!&quot; no funciona. Si no tienes tiempo,
              capacidad o ganas de mantener una presencia regular con contenido de calidad, vas a
              invertir esfuerzo para cero resultados.
            </p>

            <h3>Tienes una estrategia clara (no solo &quot;publicar cosas&quot;)</h3>
            <p>
              Publicar por publicar no es una estrategia. Una estrategia implica saber qué quieres
              conseguir (visibilidad, tráfico a la web, reservas, leads), a quién te diriges, qué
              tipo de contenido funciona para ese objetivo y cómo mides si está funcionando.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Regla rápida: si no puedes responder a &quot;¿cuántos clientes han llegado este mes
                por redes sociales?&quot;, no tienes una estrategia. Tienes una rutina.
              </p>
            </div>

            <h2>Cuándo las redes sociales NO funcionan (y estás tirando el tiempo)</h2>
            <p>
              Después de años trabajando con pymes en Galicia y en toda España, estos son los
              patrones que veo una y otra vez:
            </p>

            <h3>Negocios locales con mercado limitado</h3>
            <p>
              Si eres una ferretería en un pueblo de 5.000 habitantes, tu mercado es la gente del
              pueblo y alrededores. Esa gente ya sabe que existes. No te van a descubrir por
              Instagram. Tu mejor marketing es el boca a boca, la atención al cliente y estar en
              Google Maps con buenas reseñas.
            </p>

            <h3>Servicios profesionales B2B</h3>
            <p>
              Asesorías, consultoras, empresas de limpieza industrial, proveedores de materias
              primas, servicios técnicos. Tu cliente no busca proveedor en TikTok. Busca en
              Google, pregunta a contactos o va a ferias del sector. Tus recursos están mejor
              invertidos en una web bien posicionada, en networking y en un buen sistema de
              referencias.
            </p>

            <h3>Cuando no tienes claro qué vendes ni a quién</h3>
            <p>
              Las redes sociales amplifican lo que ya funciona. Si tu propuesta de valor no está
              clara, si no sabes quién es tu cliente ideal o si tu mensaje es genérico, las redes
              solo van a amplificar la confusión. Antes de gastar un euro en redes, define tu{" "}
              <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
                diferenciación
              </a>{" "}
              y tu propuesta de valor.
            </p>

            <h3>Cuando la agencia te vende seguidores y likes</h3>
            <p>
              Si la agencia que llevas tu redes te manda un informe mensual con &quot;alcance&quot;,
              &quot;impresiones&quot;, &quot;nuevos seguidores&quot; y &quot;engagement rate&quot;
              pero no te dice cuántos clientes o cuántas ventas han generado, estás pagando por
              métricas de vanidad. Los likes no pagan las nóminas.
            </p>

            <h2>Los 5 errores que más dinero queman en redes sociales</h2>

            <h3>1. Estar en todas las redes &quot;por si acaso&quot;</h3>
            <p>
              Facebook, Instagram, TikTok, LinkedIn, YouTube, X… Algunas pymes intentan estar en
              todas y acaban haciéndolo mal en todas. Es mejor estar en una o dos redes bien —
              donde está tu cliente — que repartir esfuerzo en cinco donde no pasa nada.
            </p>

            <h3>2. Publicar sin objetivo</h3>
            <p>
              &quot;Hoy toca publicar algo&quot;. Y se sube una foto del equipo, un meme del
              sector, una frase motivacional o un &quot;feliz lunes&quot;. Eso no es contenido
              de marketing. Es ruido. Cada publicación debería tener un objetivo: informar,
              educar, generar confianza o llevar al cliente a una acción concreta.
            </p>

            <h3>3. No medir resultados reales</h3>
            <p>
              ¿Cuántos clientes llegaron este mes por redes? ¿Cuántas reservas? ¿Cuántas consultas?
              Si no lo mides, no sabes si funciona. Y si no sabes si funciona, no puedes mejorar.
              Es lo mismo que aplico a cualquier área del negocio: sin{" "}
              <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                indicadores claros
              </a>, estás tomando decisiones a ciegas.
            </p>

            <h3>4. Delegar en alguien que no entiende tu negocio</h3>
            <p>
              Contratar a un community manager de 22 años que no ha pisado tu negocio ni sabe qué
              problema resuelves a tu cliente. El resultado: publicaciones bonitas que no conectan
              con nadie. Quien gestione tus redes tiene que entender tu negocio, tu cliente y tu
              propuesta de valor. Si no, es dinero tirado.
            </p>

            <h3>5. Gastar en publicidad sin embudo</h3>
            <p>
              &quot;Vamos a meter 500 € en Instagram Ads&quot;. Vale, ¿y cuando alguien hace clic,
              a dónde llega? ¿A tu web genérica? ¿A un formulario? ¿A una landing page con una
              oferta clara? Si no tienes un embudo — un camino claro desde el anuncio hasta la
              venta — la publicidad de pago es quemar billetes.
            </p>

            <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-red-800">
                Dato que duele: según mis datos trabajando con pymes, más del 60 % del gasto en
                redes sociales no genera ningún retorno medible. No es que el retorno sea bajo
                — es que es cero.
              </p>
            </div>

            <h2>¿Qué funciona mejor que las redes sociales para una pyme?</h2>
            <p>
              Depende del negocio, pero en general estas alternativas dan mejor retorno para
              la mayoría de pymes que he analizado:
            </p>

            <h3>Google My Business (Google Maps)</h3>
            <p>
              Para cualquier negocio local — restaurante, clínica, taller, tienda, academia —
              estar bien posicionado en Google Maps es más importante que tener 10.000 seguidores
              en Instagram. Las reseñas, las fotos actualizadas, los horarios correctos y
              responder a las preguntas de los clientes en tu ficha de Google genera más
              visitas y más ventas que cualquier red social.
            </p>

            <h3>Una web bien hecha con SEO local</h3>
            <p>
              Cuando alguien busca &quot;fontanero en A Coruña&quot; o &quot;mejor restaurante
              Vigo&quot;, busca en Google. No en Instagram. Tener una web profesional que
              aparezca en esas búsquedas es una inversión que trabaja para ti 24/7, sin
              necesidad de publicar contenido cada día.
            </p>

            <h3>Email marketing (sí, el email sigue funcionando)</h3>
            <p>
              Una base de datos de clientes y potenciales clientes a los que puedes escribir
              directamente vale más que 5.000 seguidores en Instagram. El email tiene tasas de
              conversión muy superiores a las redes sociales y no dependes del algoritmo de
              nadie para llegar a tu audiencia.
            </p>

            <h3>Boca a boca sistemático</h3>
            <p>
              El boca a boca no es casual — se puede sistematizar. Programas de referidos,
              pedir reseñas activamente, colaboraciones con negocios complementarios, seguimiento
              post-venta que genera recomendaciones. Llevo años viendo cómo la{" "}
              <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                captación de clientes
              </a>{" "}
              más rentable para pymes viene del boca a boca bien trabajado, no de las redes.
            </p>

            <h3>Publicidad en Google (Search Ads)</h3>
            <p>
              A diferencia de la publicidad en redes — donde interrumpes a alguien que está
              viendo fotos de gatos — en Google Ads apareces cuando alguien busca activamente
              lo que vendes. &quot;Consultor fiscal Vigo&quot;, &quot;clínica dental Santiago&quot;,
              &quot;empresa de reformas A Coruña&quot;. Eso es demanda real. No interrupciones.
            </p>

            <h2>Entonces, ¿dejo las redes sociales?</h2>
            <p>
              No necesariamente. Lo que digo es que antes de invertir tiempo y dinero en redes,
              respondas a estas preguntas con honestidad:
            </p>
            <ul>
              <li>¿Mi cliente ideal está en esta red y busca lo que yo ofrezco allí?</li>
              <li>¿Tengo capacidad real para mantener una presencia constante y de calidad?</li>
              <li>¿Tengo una estrategia con objetivos medibles — no solo &quot;ganar visibilidad&quot;?</li>
              <li>¿Estoy midiendo los resultados reales (clientes, ventas, consultas)?</li>
              <li>¿He descartado que haya canales más rentables para mi tipo de negocio?</li>
            </ul>
            <p>
              Si la respuesta a alguna de esas preguntas es &quot;no&quot;, antes de publicar
              otro post en Instagram, para y piensa si ese tiempo y ese dinero estarían mejor
              invertidos en otra cosa.
            </p>

            <h2>El error de fondo: confundir actividad con estrategia</h2>
            <p>
              El problema de las redes sociales en las pymes no es técnico. No es que falten
              herramientas, ni tutoriales, ni agencias. El problema es estratégico: muchas
              empresas pequeñas hacen cosas de marketing sin saber por qué las hacen.
            </p>
            <p>
              &quot;Publico en Instagram porque todo el mundo lo hace&quot;. &quot;Pago a una
              agencia porque me dijeron que tenía que hacerlo&quot;. &quot;Hago TikToks porque
              mi competencia los hace&quot;. Eso no es estrategia. Es imitación.
            </p>
            <p>
              Una estrategia de marketing empieza por entender tu negocio: qué vendes, a quién,
              qué problema resuelves, qué te diferencia y dónde está tu cliente. Después — y
              solo después — decides qué canales usar. A veces serán redes sociales. Muchas
              veces, no.
            </p>
            <p>
              Si necesitas poner orden en esto, te recomiendo leer{" "}
              <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
                cómo diferenciarte de tu competencia
              </a>{" "}
              y{" "}
              <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo definir la estrategia de tu negocio
              </a>. Son la base sobre la que debería construirse cualquier acción de marketing
              — incluidas las redes sociales.
            </p>

            <h2>Un consejo final para empresarios en Galicia</h2>
            <p>
              Si tienes un negocio en A Coruña, Santiago, Vigo, Lugo o cualquier punto de Galicia,
              la realidad es la misma: las redes sociales no son la solución mágica que te han
              vendido. Son una herramienta más — y como toda herramienta, funciona si se usa bien
              y es inútil si se usa mal.
            </p>
            <p>
              En mi experiencia como <strong>consultor de negocios en Galicia</strong>, las pymes
              que mejor captan clientes no son las que más publican en Instagram. Son las que tienen
              claro qué venden, a quién y cómo llegar a ese cliente. Lo demás viene solo.
            </p>
            <p>
              Si sientes que estás invirtiendo tiempo y dinero en marketing sin ver resultados,
              probablemente el problema no sea el canal. Sea la estrategia. Y eso es exactamente
              lo que trabajo en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="redes-sociales-para-pymes" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Estás invirtiendo en marketing sin ver resultados?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            El primer paso es entender dónde está realmente tu cliente y qué canal
            te va a dar el mejor retorno. Solicita un diagnóstico gratuito y lo
            analizamos juntos — sin compromiso.
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

      <BlogNav currentSlug="redes-sociales-para-pymes" />
    </>
  );
}
