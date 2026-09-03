import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo analizar a tu competencia: guía práctica para pymes | Consultoría Método",
  description:
    "Aprende a analizar a tu competencia de forma práctica y sin herramientas caras. Qué mirar, cómo usar la información y cómo construir tu ventaja competitiva real.",
  keywords: [
    "analizar competencia pyme",
    "análisis competitivo empresa",
    "estudio de mercado pymes",
    "ventaja competitiva negocio",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "análisis de competencia",
  ],
  openGraph: {
    title: "Cómo analizar a tu competencia: guía práctica para pymes",
    description:
      "Guía práctica de análisis competitivo para pequeñas empresas. Qué mirar, cómo usar la información y cómo diferenciarte de verdad.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-analizar-tu-competencia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo analizar a tu competencia: guía práctica para pymes",
  description:
    "Aprende a analizar a tu competencia de forma práctica y sin herramientas caras. Qué mirar, cómo usar la información y cómo construir tu ventaja competitiva real.",
  author: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  publisher: {
    "@type": "Organization",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  datePublished: "2025-06-05",
  dateModified: "2025-06-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-analizar-tu-competencia",
  },
};

export default function ArticuloAnalizarCompetencia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Blog — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo analizar a tu competencia: guía práctica para pymes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La mayoría de las pymes no analizan a su competencia. Creen
            saber lo que hacen los demás, pero en realidad van a ciegas.
            Un buen análisis competitivo no es espionaje — es
            inteligencia de negocio.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            «Yo ya sé lo que hace mi competencia.» Es una frase que oigo
            constantemente. Y cuando pregunto qué precios tienen, cómo
            captan clientes, qué dicen en su web, cuál es su propuesta
            de valor o por qué les eligen a ellos y no a ti, la respuesta
            suele ser un silencio incómodo o un «bueno, más o menos lo
            sé». Más o menos no es suficiente.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Analizar a tu competencia no es obsesionarte con lo que hacen
            los demás. Es entender el terreno en el que juegas para tomar
            mejores decisiones: sobre tus precios, tu posicionamiento, tu
            oferta, tu comunicación. No necesitas herramientas caras ni
            un departamento de inteligencia competitiva. Necesitas método,
            constancia y saber dónde mirar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo te explico cómo hacer un análisis competitivo
            práctico, qué información recoger, cómo usarla y — igual de
            importante — cómo no caer en la trampa de copiar a los demás
            en lugar de construir tu propia ventaja.
          </p>

          {/* H2 — Quién es tu competencia */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            ¿Quién es realmente tu competencia?
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de analizar, necesitas saber a quién analizar. Y aquí
            hay un error muy común: pensar que tu competencia es solo el
            negocio de al lado que hace lo mismo que tú.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tipo</th>
                  <th className="px-4 py-3 font-semibold">Definición</th>
                  <th className="px-4 py-3 font-semibold">Ejemplo (si eres una academia de inglés)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Competencia directa</td>
                  <td className="px-4 py-3">Ofrecen el mismo producto/servicio al mismo público</td>
                  <td className="px-4 py-3">Otras academias de inglés en tu ciudad</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Competencia indirecta</td>
                  <td className="px-4 py-3">Resuelven la misma necesidad de forma diferente</td>
                  <td className="px-4 py-3">Plataformas online como Duolingo, profesores particulares</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Sustitutos</td>
                  <td className="px-4 py-3">Alternativas que eliminan la necesidad</td>
                  <td className="px-4 py-3">Traductores automáticos con IA, viajes de inmersión</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La mayoría de las pymes solo vigilan la competencia directa y
            se olvidan del resto. Pero a menudo son los competidores
            indirectos y los sustitutos los que más te pueden afectar. Un
            restaurante no compite solo con otros restaurantes — compite
            con Glovo, con los supermercados que venden platos preparados
            y con el «hoy cenamos en casa».
          </p>

          {/* H2 — Qué analizar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué debes analizar de cada competidor
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No se trata de saberlo todo, sino de tener claras las piezas
            clave. Para cada competidor relevante (elige 3-5 como máximo),
            investiga lo siguiente:
          </p>

          <ul className="mt-6 space-y-3">
            {[
              { check: "Precios", desc: "¿Cuánto cobran? ¿Cómo estructuran sus tarifas? ¿Tienen packs, descuentos, cuotas?" },
              { check: "Posicionamiento", desc: "¿A quién se dirigen? ¿Qué prometen? ¿Cómo se presentan?" },
              { check: "Oferta", desc: "¿Qué productos o servicios ofrecen? ¿Qué incluyen y qué no?" },
              { check: "Presencia online", desc: "¿Cómo es su web? ¿Tienen redes activas? ¿Qué reseñas tienen en Google?" },
              { check: "Puntos fuertes", desc: "¿Qué hacen mejor que tú? ¿Dónde destacan? ¿Por qué les eligen?" },
              { check: "Puntos débiles", desc: "¿Dónde fallan? ¿Qué quejas tienen sus clientes? ¿Qué no ofrecen?" },
              { check: "Comunicación", desc: "¿Qué mensajes usan? ¿Qué tono tienen? ¿Qué contenido publican?" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-primary-600 font-bold">&#10003;</span>
                <span>
                  <strong>{item.check}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 md:text-lg">
            Gran parte de esta información es pública: sus webs, sus
            redes sociales, sus reseñas en Google, sus anuncios. No
            necesitas espías — necesitas dedicar unas horas a mirar con
            atención lo que ya está ahí fuera. Para entender cómo fijar
            tus propios precios en relación a la competencia, revisa{" "}
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo fijar precios en tu negocio
            </a>
            .
          </p>

          {/* H2 — No copies */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            No copies: usa la información para diferenciarte
          </h2>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; La trampa de obsesionarte con la competencia:
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              Analizar a la competencia es útil. Obsesionarte con ella es
              peligroso. Si cada vez que un competidor hace algo tú lo
              copias, siempre irás un paso por detrás. El análisis
              competitivo no es para imitar — es para encontrar los huecos
              que los demás no están cubriendo y ocuparlos tú. <strong>Tu
              objetivo no es ser mejor que la competencia haciendo lo
              mismo. Es ser diferente en algo que le importe a tu
              cliente.</strong>
            </p>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Usa la información competitiva para responder estas preguntas:
            ¿dónde hay una necesidad que nadie está cubriendo bien? ¿Qué
            se quejan los clientes de mis competidores que yo podría
            resolver? ¿Hay un segmento de mercado desatendido? ¿Puedo
            ofrecer algo que nadie más ofrece? Para profundizar en esto,
            lee sobre{" "}
            <a
              href="/blog/como-diferenciarte-de-tu-competencia"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo diferenciarte de tu competencia
            </a>
            .
          </p>

          {/* H2 — DAFO simplificado */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            DAFO simplificado: tu mapa competitivo en 4 cuadrantes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El análisis DAFO (Debilidades, Amenazas, Fortalezas,
            Oportunidades) es una herramienta clásica que sigue siendo
            útil si la usas de forma práctica — no como un ejercicio
            académico, sino como una herramienta de decisión.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Tu DAFO en 20 minutos:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="text-gray-700 md:text-lg">
                <strong>Fortalezas:</strong> ¿Qué haces mejor que tu
                competencia? ¿Qué recursos tienes que ellos no?
                ¿Qué dicen tus clientes que valoran de ti?
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Debilidades:</strong> ¿Dónde te ganan? ¿Qué te
                falta? ¿Qué quejas recibes? ¿Qué evitas mejorar por
                comodidad?
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Oportunidades:</strong> ¿Qué huecos ha dejado la
                competencia? ¿Qué tendencia del mercado puedes
                aprovechar? ¿Qué necesidad nueva ha surgido?
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Amenazas:</strong> ¿Qué competidores están
                creciendo? ¿Qué cambio tecnológico te puede afectar?
                ¿Qué regulación puede impactarte?
              </li>
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La clave del DAFO no es hacerlo — es actuar sobre él. Tus
            fortalezas son lo que debes comunicar y reforzar. Tus
            debilidades son lo que debes mejorar o compensar. Las
            oportunidades son donde debes invertir. Y las amenazas son
            para lo que debes prepararte. Para convertir esto en una
            estrategia concreta, lee sobre{" "}
            <a
              href="/blog/como-definir-estrategia-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo definir la estrategia de tu negocio
            </a>
            .
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;No necesitas ser mejor que tu competencia en todo.
            Necesitas ser claramente mejor en algo que le importe mucho
            a tu cliente ideal. Eso es ventaja competitiva. Todo lo demás
            es ruido.&rdquo;
          </blockquote>

          {/* H2 — Monitorización continua */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Monitorización continua: no lo hagas una vez y te olvides
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El análisis competitivo no es un informe que haces una vez y
            guardas en un cajón. El mercado cambia, los competidores
            cambian, tú cambias. Necesitas un sistema simple para
            mantener actualizada tu inteligencia competitiva.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Algunas prácticas que recomiendo a mis clientes: configura
            alertas de Google con el nombre de tus competidores, revisa
            sus webs y redes una vez al mes, lee sus reseñas de Google
            cada trimestre, visita su negocio o prueba su servicio una
            vez al año si es posible, y habla con clientes que hayan
            estado con ellos — te darán información que no encontrarás
            en ninguna web.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Dedica una hora al mes a esto. Solo una hora. Apunta lo que
            descubras en una hoja simple: qué han cambiado, qué nuevo
            ofrecen, qué tendencias ves. Esa hora te dará más información
            estratégica que muchas horas de trabajo operativo.
          </p>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: conoce a tu competencia, pero céntrate en ti
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El análisis competitivo es una herramienta, no una obsesión.
            Úsalo para tomar mejores decisiones sobre precios,
            posicionamiento y oferta. Para detectar oportunidades que
            otros no están aprovechando. Para anticipar amenazas antes
            de que te golpeen.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero no pierdas de vista lo más importante: tu cliente. Al
            final, no gana el que mejor conoce a su competencia, sino
            el que mejor conoce a su cliente y le da lo que necesita de
            forma que nadie más lo hace. Ese es el verdadero juego.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza esta semana: elige tres competidores directos, dedica
            una hora a investigar cada uno con la checklist que te he dado,
            y haz tu DAFO en 20 minutos. Tendrás más claridad estratégica
            que el 90% de las pymes de tu sector. Y eso, en sí mismo, ya
            es una ventaja competitiva.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-analizar-tu-competencia" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber cómo te posicionas frente a tu competencia?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a hacer un análisis competitivo real, encontrar
            tu ventaja diferencial y diseñar una estrategia para destacar
            en tu mercado.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
              Solicitar diagnóstico
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación gratuita — 30 minutos, sin compromiso.
          </p>
        </div>
      </section>

      <BlogNav currentSlug="como-analizar-tu-competencia" />

      {/* Lectura recomendada — cross-link a post relacionado nuevo */}
      <section className="border-t border-gray-200 bg-white py-10">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl rounded-xl border-2 border-accent-200 bg-accent-50/40 p-6 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-700">
              Sigue leyendo
            </p>
            <a
              href="/blog/analisis-competitivo-empresas-coruna"
              className="mt-2 block text-base font-bold text-primary-900 hover:text-primary-700 transition-colors md:text-lg"
            >
              Análisis competitivo para empresas en A Coruña: cómo hacerlo bien →
            </a>
            <p className="mt-2 text-sm text-gray-600">
              Versión aplicada al mercado gallego con ejemplos por sector: hostelería, comercio local y servicios profesionales en A Coruña.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y por videollamada en el resto de España
            </strong>{" "}
            y el{" "}
            <strong className="text-primary-800">Método Rentabilismo</strong>.
          </p>
          <a href="/" className="btn-primary mt-6 inline-block">
            Volver a la página principal
          </a>
        </div>
      </section>
    </>
  );
}
