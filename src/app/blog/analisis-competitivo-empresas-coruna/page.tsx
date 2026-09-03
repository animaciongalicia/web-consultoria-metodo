import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Análisis competitivo para empresas en A Coruña: cómo hacerlo bien sin gastar en informes que no lees | Consultoría Método",
  description:
    "Cómo hacer análisis competitivo real para una pyme en A Coruña. Sin plantillas académicas ni informes de 80 páginas. Guía práctica con ejemplos locales por sector: hostelería, comercio y servicios.",
  keywords: [
    "análisis competitivo coruña",
    "análisis competencia empresa Coruña",
    "cómo analizar competencia pyme",
    "estudio competitivo Galicia",
    "consultor análisis competitivo Coruña",
    "conocer competencia negocio local",
    "análisis competitivo hostelería Coruña",
    "análisis competitivo comercio local",
  ],
  openGraph: {
    title:
      "Análisis competitivo para empresas en A Coruña: cómo hacerlo bien sin gastar en informes que no lees",
    description:
      "Guía práctica para hacer análisis competitivo real en A Coruña. Cuatro pasos aplicables, ejemplos por sector y los errores que veo repetirse en pymes locales.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/analisis-competitivo-empresas-coruna",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Análisis competitivo para empresas en A Coruña: cómo hacerlo bien sin gastar en informes que no lees",
  description:
    "Guía práctica para hacer análisis competitivo real en una pyme de A Coruña. Cuatro pasos, ejemplos por sector y errores frecuentes.",
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
  datePublished: "2026-08-31",
  dateModified: "2026-08-31",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/analisis-competitivo-empresas-coruna",
  },
};

export default function ArticuloAnalisisCompetitivoCoruna() {
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
            Análisis competitivo para empresas en A Coruña: cómo hacerlo bien
            sin gastar en informes que no lees
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Análisis competitivo no es hacer un DAFO ni comprar un informe
            sectorial de 80 páginas. Es entender contra quién compites de
            verdad, qué hace bien y qué mal, y qué puedes aprovechar tú. Guía
            práctica adaptada al mercado de A Coruña y Galicia.
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
              Cuando me siento con un empresario de A Coruña por primera vez y
              le pregunto cómo es su competencia, suelo encontrarme con dos
              respuestas extremas. La primera: «No tengo competencia, lo mío es
              distinto». La segunda: «Tengo la competencia estudiadísima»,
              seguido de tres o cuatro nombres genéricos y ningún dato concreto.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Entre esos dos extremos está la mayoría: pymes que nunca han
              hecho un análisis competitivo real, o que en algún momento
              pagaron un informe sectorial que se quedó guardado en un cajón
              porque tenía 80 páginas de gráficos que no aplicaban a su calle
              ni a su barrio. Ninguna de las dos opciones te ayuda a vender
              más, a defender margen ni a decidir mejor.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              En este artículo te voy a explicar cómo hago yo un análisis
              competitivo cuando trabajo con una empresa en A Coruña. Sin
              plantillas académicas, sin humo consultor y sin informes que no
              vas a leer. Cuatro pasos, ejemplos concretos por sector y los
              errores que veo repetirse una y otra vez.
            </p>

            {/* Cita destacada */}
            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Un análisis competitivo que no termina en decisiones
              concretas no es análisis: es entretenimiento caro.&rdquo;
            </blockquote>

            {/* H2 — Qué es (y qué no es) */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Qué es análisis competitivo (y qué NO es)
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Análisis competitivo es entender, con datos concretos, contra
              quién compites de verdad en tu mercado, qué hace bien la
              competencia, dónde flaquea y qué puedes hacer tú para diferenciar
              tu propuesta y ganar cuota, margen o los dos.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              No es hacer un DAFO en una hoja de Word para cumplir el
              expediente. No es descargar un informe sectorial de 200 euros
              con datos agregados de toda España. No es tampoco lo que hace
              tu cuñado cuando entra en las webs de los competidores y te
              dice «pues son parecidos a ti». Es un trabajo de campo, con
              método, orientado a tomar decisiones.
            </p>

            {/* H2 — Los 4 pasos */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Los 4 pasos del análisis competitivo práctico
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Este es el proceso que sigo cuando trabajo con una pyme como{" "}
              <a
                href="/consultor-empresas-coruna"
                className="text-accent-600 underline hover:text-accent-700"
              >
                consultor de empresas en A Coruña
              </a>
              . Es aplicable a hostelería, comercio, servicios profesionales,
              clínicas o cualquier negocio local. Cambian los ejemplos, pero
              el método es el mismo.
            </p>

            {/* Resumen visual de los 4 pasos */}
            <ol className="not-prose my-8 space-y-3 rounded-xl border-2 border-primary-200 bg-primary-50/40 p-6 text-gray-700">
              <li>
                <strong className="text-primary-900">1. Identificar competencia real</strong>{" "}
                — directa (mismo producto o servicio en tu zona) y sustituta (todo lo que resuelve el mismo problema al cliente).
              </li>
              <li>
                <strong className="text-primary-900">2. Recopilar información de campo</strong>{" "}
                — Google Maps, reseñas, cliente misterioso, precios reales y conversaciones con tus propios clientes.
              </li>
              <li>
                <strong className="text-primary-900">3. Comparar en una tabla simple</strong>{" "}
                — una sola hoja con tú y tus principales competidores enfrentados por precio, propuesta, servicio y debilidades.
              </li>
              <li>
                <strong className="text-primary-900">4. Decidir qué haces con esa información</strong>{" "}
                — tres o cuatro acciones concretas: diferenciación, precios, refuerzos y canales de captación.
              </li>
            </ol>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              1. Identificar la competencia real (directa y sustituta)
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              El primer error es pensar que solo compites con quien vende
              exactamente lo mismo que tú. La competencia directa es la
              obvia — otro restaurante italiano en Cuatro Caminos, otra
              asesoría fiscal en el Ensanche, otra clínica dental en Los
              Rosales. Pero la competencia sustituta es la que suele
              comerte cuota sin que la veas venir.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Si tienes un bar de tapas en el Orzán, tu competencia no es
              solo el bar de al lado — es también el supermercado que vende
              cena preparada, el delivery de sushi que llega en veinte
              minutos y el plan alternativo que hace que un jueves la
              gente se quede en casa. En A Coruña, identificar los cinco o
              seis competidores directos y los tres o cuatro sustitutos
              reales es el primer trabajo serio.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              2. Recopilar información de campo (no de informes)
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Aquí es donde muchos se caen: piensan que hace falta un
              estudio de mercado carísimo. La realidad es que la mayor
              parte de la información útil está a un clic o a una visita
              de distancia:
            </p>
            <ul className="my-6 space-y-3 rounded-xl border border-primary-200 bg-primary-50/30 p-6 text-gray-700">
              <li>
                <strong className="text-primary-900">Google Maps y reseñas</strong> —
                nota media, número de reseñas, qué elogian los clientes y
                qué critican. Las quejas repetidas de tu competencia son
                oportunidades para ti.
              </li>
              <li>
                <strong className="text-primary-900">Web y redes sociales</strong> —
                qué comunican, con qué frecuencia, qué promociones lanzan,
                qué producto potencian. Suscríbete a sus newsletters.
              </li>
              <li>
                <strong className="text-primary-900">Cliente misterioso</strong> —
                ve, compra, prueba, observa. En una tarde puedes visitar
                a tres competidores directos y aprender más que en veinte
                informes.
              </li>
              <li>
                <strong className="text-primary-900">Precios y condiciones</strong> —
                cartas, tarifas públicas, presupuestos comparativos. Si son
                servicios, pide un presupuesto real como cliente.
              </li>
              <li>
                <strong className="text-primary-900">Conversaciones con clientes tuyos</strong> —
                pregúntales qué otras opciones valoraron antes de elegirte
                y por qué al final eligieron a otro cuando no te eligieron
                a ti.
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              3. Comparar en una tabla simple
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Toda la información recogida acaba en una tabla de una sola
              hoja. Sin florituras. En las columnas: tú y tus principales
              competidores. En las filas, cinco o seis criterios que
              importan de verdad en tu sector:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Precio", desc: "Rango de precios, tickets medios, política de descuentos." },
                { label: "Propuesta de valor", desc: "Qué prometen, en qué se posicionan, qué destacan en su comunicación." },
                { label: "Servicio y experiencia", desc: "Atención al cliente, tiempos, presentación, procesos." },
                { label: "Captación y visibilidad", desc: "Presencia digital, reseñas, publicidad, boca a boca." },
                { label: "Debilidades detectadas", desc: "Quejas frecuentes, huecos que no cubren, servicios que no ofrecen." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-accent-500">&#9654;</span>
                  <span>
                    <strong className="text-gray-900">{item.label}:</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tabla comparativa de ejemplo */}
            <div className="not-prose my-8 overflow-x-auto rounded-xl border border-primary-200 shadow-sm">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Competidor</th>
                    <th className="px-4 py-3 text-left font-semibold">Precio</th>
                    <th className="px-4 py-3 text-left font-semibold">Propuesta de valor</th>
                    <th className="px-4 py-3 text-left font-semibold">Debilidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100 bg-white text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-bold text-primary-900">Competidor A</td>
                    <td className="px-4 py-3">Alto — ticket medio 45 €</td>
                    <td className="px-4 py-3">Producto premium, marca reconocida</td>
                    <td className="px-4 py-3">Reseñas quejan del servicio lento</td>
                  </tr>
                  <tr className="bg-primary-50/40">
                    <td className="px-4 py-3 font-bold text-primary-900">Competidor B</td>
                    <td className="px-4 py-3">Medio — ticket medio 28 €</td>
                    <td className="px-4 py-3">Relación calidad-precio, cercanía</td>
                    <td className="px-4 py-3">Sin presencia digital ni reservas online</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-primary-900">Competidor C</td>
                    <td className="px-4 py-3">Bajo — ticket medio 18 €</td>
                    <td className="px-4 py-3">Precio agresivo, rotación alta</td>
                    <td className="px-4 py-3">Experiencia impersonal, sin fidelización</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500 italic">
              Ejemplo simplificado. En una sesión real la tabla incluye también tu negocio como columna y añade filas de servicio, captación y presencia digital.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              4. Decidir qué haces con esa información
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Este es el paso que casi nadie da y el único que importa.
              Cada análisis competitivo tiene que terminar con tres o
              cuatro decisiones concretas: en qué te diferencias
              activamente, qué vas a reforzar, qué precios tocas y por
              dónde vas a captar. Si el análisis no cambia lo que haces
              el lunes siguiente, no ha servido de nada.
            </p>

            {/* H2 — Ejemplos por sector */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Ejemplos concretos por sector en A Coruña
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              El método es el mismo, pero cada sector tiene sus matices.
              Estos son los ejemplos con los que más me encuentro trabajando
              en la ciudad y el área metropolitana.
            </p>

            {/* Tarjetas visuales por sector */}
            <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Sector
                </p>
                <p className="mt-2 text-lg font-bold text-primary-900">
                  Hostelería A Coruña centro
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Competencia hiperlocal — Marina, Estrella, Juan Flórez —
                  con densidad de treinta metros. El análisis se centra en
                  posicionamiento (tapa clásica, cocina de mercado,
                  gastronomía temática) y en la experiencia. Diferenciarse
                  por concepto — producto local trabajado, formato
                  compartir, horario atípico — funciona mejor que competir
                  en precio.
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Guía específica:{" "}
                  <a
                    href="/blog/hosteleria-coruna-rentabilidad"
                    className="font-semibold text-accent-600 underline hover:text-accent-700"
                  >
                    hostelería en A Coruña y cómo ser rentable
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Sector
                </p>
                <p className="mt-2 text-lg font-bold text-primary-900">
                  Comercio local en barrios
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Un comercio en el Ensanche, Monte Alto o Elviña no
                  compite solo con la tienda de su calle. Compite con
                  Marineda City, con Cuatro Caminos y con Amazon. El
                  análisis debe incluir esos sustitutos. La diferenciación
                  suele estar en asesoramiento personal, servicio cercano,
                  gama especializada y experiencia de compra que la gran
                  superficie no puede ofrecer.
                </p>
              </div>

              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Sector
                </p>
                <p className="mt-2 text-lg font-bold text-primary-900">
                  Servicios profesionales
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Asesorías, abogados, arquitectos o consultores en A
                  Coruña compiten con despachos locales establecidos y,
                  cada vez más, con plataformas online de precio bajo y
                  servicio estándar. El análisis se centra en
                  posicionamiento (generalista vs. especialista), tarifas,
                  canal de captación y reputación. La diferenciación real
                  está casi siempre en nicho, cercanía y resultados
                  medibles.
                </p>
              </div>
            </div>

            {/* H2 — Errores típicos */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Errores típicos al analizar la competencia
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "Obsesionarse con la competencia y olvidar al cliente. El análisis competitivo es una herramienta, no el objetivo. Tu foco sigue siendo el cliente.",
                "Copiar sin criterio. Que un competidor haga algo no significa que a ti te funcione. Puede estar perdiendo dinero o tener otra estructura de costes.",
                "Hacerlo una única vez. El mercado cambia. Un análisis de hace dos años ya no vale.",
                "Ignorar la competencia sustituta. Es la que más te come cuota sin que te des cuenta.",
                "No traducirlo a decisiones. Analizar sin decidir es tiempo perdido.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-accent-500">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Caja Error frecuente */}
            <div className="not-prose my-8 rounded-xl border-l-4 border-red-400 bg-red-50 p-5">
              <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                Error frecuente
              </p>
              <p className="mt-2 text-gray-800">
                Muchos empresarios hacen el análisis, lo miran, dicen
                «qué interesante» y siguen exactamente igual que estaban.
                Un análisis competitivo sin plan de acción es un pasatiempo,
                no una herramienta de gestión. Si tu revisión de competencia
                no termina en tres o cuatro decisiones concretas para el
                lunes siguiente, has hecho un informe, no un análisis.
              </p>
            </div>

            {/* H2 — Frecuencia */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Con qué frecuencia hacer análisis competitivo
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No hace falta vivir mirando a la competencia — pero sí tener
              un ritmo mínimo. Yo suelo recomendar tres niveles:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Anual profundo", desc: "Una vez al año, dos jornadas dedicadas a revisar el mapa competitivo completo, actualizar la tabla y decidir la estrategia del siguiente ejercicio." },
                { label: "Trimestral rápido", desc: "Cada tres meses, una hora para revisar novedades relevantes: nuevos competidores, cambios de precio, campañas destacadas." },
                { label: "Continuo con alertas", desc: "Configurar avisos de Google, seguir en redes a los competidores clave y anotar cambios según ocurren, sin necesidad de sesión formal." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="text-gray-900">{item.label}:</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Conclusión */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Conclusión: análisis competitivo útil, no académico
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Hacer análisis competitivo en A Coruña no requiere una
              inversión enorme ni un informe de 80 páginas. Requiere
              método, trabajo de campo y voluntad de convertir lo que
              descubres en decisiones concretas. Los cuatro pasos —
              identificar, recopilar, comparar y decidir — funcionan
              en cualquier sector y en cualquier tamaño de pyme.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Si quieres que te ayude a hacer este trabajo en tu negocio
              — con tus competidores reales, tu mercado y tus números —,
              puedes ver cómo trabajamos en la página de{" "}
              <a
                href="/servicios"
                className="text-accent-600 underline hover:text-accent-700"
              >
                servicios de Consultoría Método
              </a>{" "}
              o contactar directamente. El objetivo no es que tengas más
              información: es que tomes mejores decisiones.
            </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="analisis-competitivo-empresas-coruna" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres analizar tu situación competitiva real en A Coruña?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Estudiamos juntos a tu competencia real — directa y sustituta —,
            detectamos tus puntos fuertes frente al mercado y diseñamos un
            plan concreto de diferenciación, precios y captación. Sin
            informes de 80 páginas: decisiones que puedes aplicar el lunes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
              Solicitar diagnóstico de mi negocio
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

      {/* Lecturas relacionadas */}
      <section className="border-t border-gray-200 bg-white py-10">
        <div className="container-narrow">
          <h2 className="text-center text-lg font-bold text-primary-900 md:text-xl">
            Sigue leyendo
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
            <a
              href="/blog/como-analizar-tu-competencia"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Estrategia
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Cómo analizar a tu competencia: guía completa
              </p>
            </a>
            <a
              href="/blog/como-diferenciarte-de-tu-competencia"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Estrategia
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Cómo diferenciarte sin competir en precio
              </p>
            </a>
            <a
              href="/consultor-empresas-coruna"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Página local
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Consultor de empresas en A Coruña
              </p>
            </a>
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

      <BlogNav currentSlug="analisis-competitivo-empresas-coruna" />
    </>
  );
}
