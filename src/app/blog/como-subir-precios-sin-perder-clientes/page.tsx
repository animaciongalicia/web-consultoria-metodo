import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo subir precios sin perder clientes: guía para pymes | Consultoría Método",
  description:
    "Aprende cuándo y cómo subir precios en tu negocio sin perder clientes. Estrategias probadas para comunicar una subida de precios y proteger tu rentabilidad.",
  keywords: [
    "subir precios sin perder clientes",
    "cómo aumentar precios negocio",
    "estrategia subida precios pyme",
    "comunicar subida precios",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Cómo subir precios sin perder clientes: guía para pymes",
    description:
      "Guía práctica para subir precios en tu negocio sin perder clientes. Estrategias reales de comunicación y transición para pymes y autónomos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-subir-precios-sin-perder-clientes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo subir precios sin perder clientes: guía para pymes",
  description:
    "Aprende cuándo y cómo subir precios en tu negocio sin perder clientes. Estrategias probadas para comunicar una subida de precios y proteger tu rentabilidad.",
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
  datePublished: "2025-04-21",
  dateModified: "2025-04-21",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-subir-precios-sin-perder-clientes",
  },
};

export default function ArticuloSubirPrecios() {
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
            Cómo subir precios sin perder clientes: guía para pymes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Llevas meses — o años — sabiendo que tus precios están bajos.
            Pero cada vez que piensas en subirlos, te entra el miedo: «¿y si
            se van?». Esta guía te enseña cuándo, cuánto y cómo hacerlo sin
            destrozar tu cartera de clientes.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            online en toda España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Subir precios es una de las decisiones más difíciles para cualquier
            empresario. Y también una de las más necesarias. Porque si tus
            costes suben cada año — alquiler, suministros, salarios, materias
            primas — y tus precios se quedan igual, lo que está bajando en
            realidad es tu margen. Cada mes que pasa sin ajustar precios,
            estás trabajando más por menos dinero.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He trabajado con decenas de pymes que llevaban años sin tocar sus
            tarifas. No por estrategia, sino por miedo. Miedo a perder
            clientes, a la reacción negativa, a quedarse sin trabajo. Y en
            casi todos los casos, cuando finalmente subieron precios — con
            método, con comunicación y con cabeza — los resultados fueron
            mucho mejores de lo que esperaban.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo vamos a ver por qué nos cuesta tanto subir
            precios, cuándo es el momento adecuado, cómo comunicarlo y qué
            estrategias concretas puedes usar para proteger tu base de
            clientes mientras mejoras tu{" "}
            <a
              href="/blog/como-mejorar-rentabilidad-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              rentabilidad
            </a>
            .
          </p>

          {/* H2 — Por qué nos da miedo subir precios */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué nos da tanto miedo subir precios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El miedo a subir precios es universal. Lo he visto en empresarios
            con 30 años de experiencia y en emprendedores que acaban de
            arrancar. Y tiene raíces muy humanas: miedo al rechazo, miedo a
            la confrontación, miedo a perder lo que tanto te ha costado
            construir.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Pero vamos a ser honestos: la mayoría de esos miedos son
            irracionales. Los datos dicen algo muy distinto a lo que
            imaginamos. Cuando subes precios un 10-15% de forma justificada,
            la pérdida media de clientes rara vez supera el 3-5%. Y los
            clientes que pierdes suelen ser precisamente los menos rentables:
            los que más exigen, los que peor pagan y los que más problemas
            dan.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;Si subes precios un 10% y pierdes un 5% de clientes,
            sigues ganando más dinero que antes. Haz las cuentas. El miedo a
            subir precios casi siempre te cuesta más que la subida en
            sí.&rdquo;
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Hay una trampa mental adicional: creemos que nuestros clientes
            están pendientes del precio todo el rato. Pero la realidad es que
            la mayoría de tus clientes fieles te compran por confianza, por
            comodidad, por costumbre o por la calidad de lo que ofreces. El
            precio es un factor, sí, pero rara vez es el único ni el más
            importante.
          </p>

          {/* H2 — Cuándo es el momento */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo es el momento adecuado para subir precios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No existe el momento perfecto, pero sí hay señales claras de que
            ya llegas tarde. Si reconoces tres o más de estas situaciones, es
            hora de actuar.
          </p>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; Señales de que necesitas subir precios ya:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Tus costes han subido pero tus precios llevan más de un año sin cambiar.",
                "Trabajas más horas que nunca pero tu beneficio no mejora.",
                "Ningún cliente te ha cuestionado el precio en los últimos meses.",
                "No puedes permitirte contratar ayuda ni invertir en mejoras.",
                "Tu margen de beneficio se ha reducido respecto al año anterior.",
                "Aceptas trabajos poco rentables porque necesitas facturar.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-amber-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Hay momentos especialmente buenos para aplicar subidas: el inicio
            de un nuevo año, cuando lanzas un servicio mejorado, cuando
            renuevas contratos anuales o cuando el mercado en general está
            subiendo precios. En esos contextos, el cliente lo entiende de
            forma natural.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Lo que no puedes hacer es esperar a estar desesperado. Si subes
            precios cuando ya estás en apuros financieros, tu comunicación
            transmitirá urgencia y los clientes lo notarán. Sube precios desde
            una posición de confianza, no de supervivencia.
          </p>

          {/* H2 — Cómo comunicar la subida */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo comunicar una subida de precios sin que suene a excusa
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La comunicación lo es todo. La misma subida de un 15% puede
            generar rechazo o aceptación total dependiendo de cómo la
            presentes. Estos son los principios que funcionan.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Avisa con antelación
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Nunca sorprendas al cliente con un precio nuevo en la factura. Da
            al menos 30 días de preaviso — idealmente 60 si se trata de
            servicios recurrentes. Ese plazo les permite adaptarse, presupuestar
            y, sobre todo, sentir que los respetas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Explica el porqué, no te disculpes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No digas «sentimos tener que subir precios». Eso suena a
            disculpa. Di «ajustamos nuestras tarifas para seguir ofreciendo
            la calidad que esperas de nosotros». Explica las razones reales
            — subida de costes, mejoras en el servicio, inversión en
            herramientas — pero sin disculparte. Subir precios es legítimo
            y normal.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Pon el foco en el valor, no en el precio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En tu comunicación, dedica más espacio a lo que el cliente recibe
            que a lo que va a pagar. «A partir de septiembre, nuestro
            servicio incluirá X, Y y Z. La nueva tarifa será de...» El
            cliente recibe primero el valor y después el precio. El orden
            importa.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Personaliza siempre que puedas
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un email genérico a toda la base de datos funciona peor que una
            conversación personal con tus 20 mejores clientes. Para los
            clientes grandes o de larga relación, coge el teléfono. Una
            llamada de cinco minutos vale más que diez correos electrónicos.
          </p>

          {/* Cuadro destacado */}
          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Regla de oro de la comunicación de precios:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              El cliente no recuerda cuánto pagaba antes. Recuerda cómo le
              hiciste sentir cuando le dijiste que iba a pagar más. Si la
              experiencia fue transparente y respetuosa, la subida se acepta
              sin problema. Si fue fría o sorpresiva, genera resentimiento
              aunque la subida sea mínima.
            </p>
          </div>

          {/* H2 — Estrategias */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Estrategias concretas para subir precios y retener clientes
          </h2>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Añadir valor antes de subir el precio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La forma más elegante de subir precios es que el cliente sienta
            que recibe más. Antes de anunciar la subida, introduce una mejora
            visible: un servicio adicional, una garantía extendida, un
            informe más detallado, un tiempo de respuesta más rápido. El
            coste de esa mejora para ti debe ser menor que la subida de
            precio. Así ganas margen y el cliente siente que gana valor.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            La estrategia del «grandfather» para clientes antiguos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Ofrece a tus clientes más fieles una tarifa de transición: «Los
            nuevos clientes pagan 150, pero tú, que llevas con nosotros
            desde el principio, pagarás 120 durante los próximos seis meses.»
            El cliente se siente valorado, tú subes el precio igualmente y la
            transición es suave.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Esta estrategia funciona especialmente bien en servicios
            recurrentes — mantenimientos, asesorías, suscripciones. El
            cliente sabe que el precio subirá, pero agradece el trato
            preferente y la transición gradual.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Subidas escalonadas en lugar de un salto grande
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si necesitas subir un 20%, no lo hagas de golpe. Sube un 8% ahora
            y otro 10-12% en seis meses. Dos subidas pequeñas se absorben
            mucho mejor que una grande. El cliente apenas nota la primera y
            cuando llega la segunda ya se ha acostumbrado al nuevo contexto.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Crear niveles de servicio diferenciados
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si hasta ahora tenías un solo precio, crea tres niveles: básico,
            estándar y premium. Coloca tu precio actual como el nivel básico
            y añade opciones superiores con más valor y mayor precio. Así no
            «subes» precios — amplías la oferta. Y como ya sabes por la{" "}
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              estrategia de precios escalonados
            </a>
            , un buen porcentaje de clientes elegirá las opciones superiores
            de forma natural.
          </p>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Ejemplo real: subida de precios en una empresa de servicios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Trabajé con una empresa de mantenimiento industrial en Galicia
            que llevaba cuatro años sin tocar sus tarifas. En ese tiempo, el
            coste de materiales había subido un 22% y los salarios un 14%.
            Su margen neto había pasado del 12% al 3%. Estaban al borde de
            perder dinero.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El dueño tenía pánico: «Si subo precios, mis clientes se van a
            la competencia.» Así que hicimos un análisis de su cartera.
            Tenía 45 clientes. De esos 45, solo 8 representaban el 60% de su
            facturación. Y de esos 8, ninguno le había pedido una rebaja en
            años — simplemente renovaban cada año sin preguntar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La estrategia fue sencilla:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Subida del 18% para nuevos clientes y contratos nuevos, efectiva inmediatamente.",
              "Subida del 12% para clientes existentes, comunicada personalmente con 60 días de preaviso.",
              "Tarifa preferente (subida del 8%) para los 8 clientes principales, con compromiso de contrato a dos años.",
              "Se añadió un informe trimestral de mantenimiento preventivo como valor adicional sin coste relevante.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 md:text-lg">
            Resultado: perdió 3 clientes de los 45 (los tres más pequeños y
            problemáticos). Los 8 principales aceptaron el contrato a dos
            años con la tarifa preferente. Su margen neto pasó del 3% al 11%
            en seis meses. Y por primera vez en tres años, pudo invertir en
            una furgoneta nueva y contratar un técnico más.
          </p>

          {/* H2 — Qué pasa cuando NO subes precios */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Lo que pasa cuando NO subes precios (y nadie te cuenta)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No subir precios parece la opción segura, pero en realidad es la
            más arriesgada. Cuando tus costes suben y tus precios no, estás
            decidiendo — aunque sea por omisión — que tu trabajo vale cada
            año un poco menos. Estas son las consecuencias reales que he
            visto en negocios que no ajustan precios durante años.
          </p>

          <ul className="mt-4 space-y-3">
            {[
              "Tu margen se erosiona año tras año hasta que un mal mes te pone en números rojos.",
              "No puedes invertir en mejoras, así que la calidad baja y entonces sí pierdes clientes.",
              "Te quemas trabajando más horas por menos dinero, y eso afecta a tu motivación y a tu salud.",
              "Atraes al peor tipo de cliente: el que solo busca lo más barato.",
              "Cuando por fin te ves obligado a subir precios, la subida es tan grande que sí genera rechazo.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;No subir precios no es ser generoso con tus clientes. Es
            ser negligente con tu negocio. Un negocio que no es rentable no
            puede servir a nadie a largo plazo.&rdquo;
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si necesitas entender mejor cómo afecta esto a tus números,
            empieza por{" "}
            <a
              href="/blog/como-calcular-margen-beneficio-producto"
              className="text-accent-600 underline hover:text-accent-700"
            >
              calcular tu margen de beneficio real
            </a>
            . Muchos empresarios se sorprenden al descubrir que están ganando
            mucho menos de lo que creían — o que directamente están perdiendo
            dinero sin saberlo.
          </p>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: subir precios es proteger tu negocio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Subir precios no es avaricia. No es falta de empatía con el
            cliente. Es la responsabilidad básica de cualquier empresario
            que quiera tener un negocio sostenible. Si ofreces un buen
            servicio, si resuelves problemas reales, si cuidas a tus
            clientes — entonces mereces cobrar un precio que refleje ese
            valor.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Los clientes que se van por un 10% de subida no eran tus
            clientes. Eran clientes del precio. Y esos siempre se irán,
            tarde o temprano, cuando encuentren algo más barato. Los
            clientes que valoran lo que haces se quedan, entienden que los
            costes suben y aprecian la transparencia.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si llevas tiempo pensando que deberías subir precios pero no te
            atreves, quizá necesitas una mirada externa que te ayude a ver
            lo que tú, por estar dentro del negocio cada día, no puedes ver.
            A veces lo único que separa un negocio mediocre de uno rentable
            es una decisión que llevas meses posponiendo.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-subir-precios-sin-perder-clientes" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Necesitas ayuda para ajustar los precios de tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos tu estructura de costes, tus márgenes y tu cartera de
            clientes para diseñar una estrategia de precios que mejore tu
            rentabilidad sin poner en riesgo tu base de clientes.
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

      <BlogNav currentSlug="como-subir-precios-sin-perder-clientes" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y online en toda España
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
