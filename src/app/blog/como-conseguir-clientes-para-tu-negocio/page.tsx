import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo conseguir más clientes para tu negocio — Guía completa de captación para pymes | Consultoría Método",
  description:
    "Guía práctica para conseguir clientes de forma constante: marketing local, digital, alianzas y sistema de ventas para pymes. Consultor de negocios en Coruña, Galicia y online.",
  keywords: [
    "cómo conseguir clientes",
    "captación de clientes pymes",
    "empresa sin clientes",
    "cómo vender más",
    "conseguir clientes para mi negocio",
    "captar clientes sin publicidad",
    "marketing para pymes",
    "estrategia captación clientes",
    "sistema de ventas pyme",
    "clientes para negocio local",
    "consultoría empresas Coruña",
    "consultor de negocios Galicia",
    "mejora de empresas captación clientes",
  ],
  openGraph: {
    title:
      "Cómo conseguir más clientes para tu negocio — Guía completa de captación para pymes",
    description:
      "Tu negocio depende del boca a boca y cada mes es una incógnita. Descubre cómo montar un sistema de captación estable que funcione sin grandes inversiones.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-conseguir-clientes-para-tu-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo conseguir más clientes para tu negocio — Guía completa de captación para pymes",
  description:
    "Guía práctica para conseguir clientes de forma constante. Estrategias reales de captación para pymes: marketing local, digital, alianzas, proceso comercial y sistema de ventas que funciona.",
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
  datePublished: "2025-03-13",
  dateModified: "2025-04-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-conseguir-clientes-para-tu-negocio",
  },
};

export default function ArticuloConseguirClientes() {
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
            Cómo conseguir más clientes para tu negocio: guía completa de captación para pymes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Tu negocio depende del boca a boca, algunos meses van bien y otros
            son un desierto. No tienes un sistema y cada mes es una incógnita.
            Esta guía te explica cómo cambiar eso de forma práctica.
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

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 not-prose">
            <ol className="flex items-center gap-1">
              <li>
                <a href="/" className="hover:text-accent-600 transition-colors">Inicio</a>
              </li>
              <li className="before:content-['>'] before:mx-2 before:text-gray-400">
                <a href="/blog" className="hover:text-accent-600 transition-colors">Blog</a>
              </li>
              <li className="before:content-['>'] before:mx-2 before:text-gray-400">
                <span className="text-gray-700 font-medium">Cómo conseguir más clientes para tu negocio</span>
              </li>
            </ol>
          </nav>

          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Hay una frase que escucho en casi todas las primeras reuniones con
            empresarios: <em>«Necesito más clientes»</em>.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo dicen dueños de talleres, de tiendas, de asesorías, de empresas
            de reformas, de clínicas, de negocios de todo tipo. Gente que hace
            bien su trabajo, que tiene clientes contentos, pero que depende
            completamente de que suene el teléfono. Algunos meses va bien.
            Otros meses, silencio. Y cuando el silencio se alarga, empieza la
            angustia.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El problema no es que tu servicio sea malo. El problema es que no
            tienes un <strong>sistema de captación de clientes</strong>. Dependes
            del boca a boca, de la suerte, de que alguien se acuerde de ti en
            el momento adecuado. Y eso no es una estrategia. Es una lotería.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta guía te explica cómo dejar de depender de la suerte y construir
            un sistema real para conseguir clientes de forma constante. Sin
            teoría vacía, sin fórmulas mágicas, sin necesidad de gastarte una
            fortuna en publicidad. Estrategias probadas con pymes reales que
            funcionan.
          </p>

          {/* Índice de contenidos */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50/60 p-6 not-prose">
            <h2 className="text-lg font-bold text-primary-900 mb-4">Índice de contenidos</h2>
            <ol className="space-y-2 text-sm md:text-base text-primary-800">
              <li><a href="#por-que-fallan" className="hover:text-accent-600 transition-colors">1. Por qué fallan las empresas en captación de clientes</a></li>
              <li><a href="#propuesta-valor" className="hover:text-accent-600 transition-colors">2. Sin propuesta de valor clara no hay clientes</a></li>
              <li><a href="#marketing-mal-enfocado" className="hover:text-accent-600 transition-colors">3. Marketing mal enfocado: los errores que tiran tu dinero</a></li>
              <li><a href="#canales-reales" className="hover:text-accent-600 transition-colors">4. Canales reales que funcionan para pymes</a></li>
              <li><a href="#local-vs-digital" className="hover:text-accent-600 transition-colors">5. Estrategia local vs. digital: qué necesita tu negocio</a></li>
              <li><a href="#sistema-captacion" className="hover:text-accent-600 transition-colors">6. Cómo crear un sistema de captación estable</a></li>
              <li><a href="#errores-dinero" className="hover:text-accent-600 transition-colors">7. Los 7 errores que tiran dinero en captación</a></li>
              <li><a href="#casos-reales" className="hover:text-accent-600 transition-colors">8. Casos reales de captación de clientes</a></li>
              <li><a href="#plan-accion" className="hover:text-accent-600 transition-colors">9. Plan de acción para empezar esta semana</a></li>
              <li><a href="#conclusion" className="hover:text-accent-600 transition-colors">10. Conclusión: los clientes no llegan solos</a></li>
            </ol>
          </div>

          {/* ====================== SECCIÓN 1 ====================== */}
          <h2 id="por-que-fallan" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            1. Por qué fallan las empresas en captación de clientes
          </h2>

          <p className="text-gray-600 md:text-lg">
            Después de más de 25 años trabajando con pymes, he identificado un
            patrón que se repite constantemente. Las empresas que no consiguen
            clientes suficientes no suelen tener un problema de producto o
            servicio. Tienen un problema de sistema.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La mayoría de negocios nacen del saber hacer del fundador. Alguien
            que es buen fontanero, buen abogado, buen diseñador. Abre su
            negocio, sus primeros clientes llegan por contactos y el boca a
            boca hace el resto. Pero llega un momento en el que esa fuente se
            seca o no es suficiente. Y el empresario se encuentra con una
            realidad incómoda: sabe hacer su trabajo, pero no sabe vender.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            No es falta de esfuerzo — es falta de método
          </h3>
          <p className="text-gray-600 md:text-lg">
            La captación de clientes no es algo que se improvise. Requiere
            las mismas habilidades que cualquier otra área del negocio:
            planificación, medición, ajuste y constancia. Pero la mayoría de
            empresarios nunca han dedicado tiempo a diseñar un sistema
            comercial. Simplemente reaccionan: cuando faltan clientes,
            entran en pánico y hacen algo precipitado (una campaña sin
            estrategia, un descuento desesperado, una llamada a puerta fría).
            Cuando tienen trabajo, se olvidan de captar. Y el ciclo se repite.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Los tres pilares que necesita todo negocio
          </h3>
          <p className="text-gray-600 md:text-lg">
            Para que los clientes lleguen de forma constante necesitas tres
            cosas funcionando a la vez:
          </p>
          <ol className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">1.</span>
              <span>
                <strong>Visibilidad:</strong> que la gente adecuada sepa que
                existes. Si nadie te encuentra, nadie te compra.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">2.</span>
              <span>
                <strong>Propuesta clara:</strong> que cuando te encuentren,
                entiendan qué haces, para quién y por qué elegirte a ti.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">3.</span>
              <span>
                <strong>Proceso de conversión:</strong> que cuando alguien se
                interese, exista un proceso que lo guíe hasta convertirse en
                cliente.
              </span>
            </li>
          </ol>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si falla uno solo de estos pilares, la captación no funciona. Y
            lo habitual es que fallen los tres a la vez.
          </p>

          {/* ====================== SECCIÓN 2 ====================== */}
          <h2 id="propuesta-valor" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            2. Sin propuesta de valor clara no hay clientes
          </h2>

          <p className="text-gray-600 md:text-lg">
            Si le preguntas a muchos empresarios «¿qué haces y por qué debería
            elegirte a ti?», la respuesta es larga, confusa y genérica:
            «Somos una empresa de servicios que ofrece soluciones integrales de
            calidad con más de 15 años de experiencia». Eso no le dice nada a
            nadie.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un cliente potencial necesita entender en cinco segundos qué
            ofreces, para quién es y qué problema resuelves. Si no lo tiene
            claro, se va. No porque tu servicio sea malo, sino porque no has
            sabido comunicar su valor.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Cómo construir una propuesta que funciona
          </h3>
          <p className="text-gray-600 md:text-lg">
            Una propuesta de valor efectiva responde a tres preguntas:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <strong>¿Qué problema concreto resuelves?</strong> No «ofrecemos
              soluciones» — sino «reducimos tu factura energética un 30%».
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <strong>¿Para quién es?</strong> No «para todo el mundo» — sino
              «para restaurantes y hoteles en Galicia».
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              <strong>¿Por qué tú y no otro?</strong> No «tenemos experiencia»
              — sino «hemos optimizado más de 200 instalaciones en hostelería
              y garantizamos resultados por contrato».
            </li>
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando tu propuesta es clara y específica, el cliente adecuado se
            identifica inmediatamente. Y los que no son tu cliente ideal
            también lo saben — lo cual te ahorra tiempo y dinero. Si tu negocio{" "}
            <a
              href="/blog/como-diferenciarte-de-tu-competencia"
              className="text-accent-600 underline hover:text-accent-700"
            >
              no se diferencia de la competencia
            </a>
            , da igual cuánto inviertas en marketing: estás compitiendo en un
            mercado donde todos parecen iguales.
          </p>

          <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
            <p className="text-gray-700 italic md:text-lg">
              «El mejor marketing del mundo no puede vender algo que nadie
              entiende. Antes de gastar en publicidad, define tu propuesta.»
            </p>
          </blockquote>

          {/* ====================== SECCIÓN 3 ====================== */}
          <h2 id="marketing-mal-enfocado" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            3. Marketing mal enfocado: los errores que tiran tu dinero
          </h2>

          <p className="text-gray-600 md:text-lg">
            Has probado publicidad y no ha funcionado. Has pagado por redes
            sociales y no has visto resultados. Quizás has invertido en una
            web cara que no genera ni una llamada. Y la conclusión ha sido:
            «el marketing no funciona para mi negocio».
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La conclusión correcta es otra:{" "}
            <a
              href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              el marketing mal hecho no funciona para ningún negocio
            </a>
            . Y la mayoría de pymes hacen marketing mal. No por incapacidad,
            sino porque siguen consejos genéricos que no aplican a su realidad.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Copiar lo que hacen las grandes empresas
          </h3>
          <p className="text-gray-600 md:text-lg">
            Las estrategias de marketing de una multinacional no sirven para
            una pyme. Coca-Cola hace branding. Tú necesitas clientes que
            llamen hoy. Zara invierte millones en imagen de marca. Tú
            necesitas que el fontanero de tu zona sepa que existes. Aplicar
            estrategias de gran empresa con presupuesto de pyme es la
            fórmula perfecta para tirar dinero.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Invertir sin medir resultados
          </h3>
          <p className="text-gray-600 md:text-lg">
            Si no sabes cuánto te cuesta conseguir un cliente, no puedes saber
            si tu marketing funciona. Muchas pymes gastan en publicidad como
            quien echa monedas a una fuente: con fe pero sin datos. ¿Cuánto
            has invertido este mes en captación? ¿Cuántos clientes han llegado
            por esa vía? ¿Cuál es el coste por cliente? Si no puedes
            responder, estás operando a ciegas. Necesitas{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              indicadores claros para controlar tu negocio
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Perseguir tendencias en vez de clientes
          </h3>
          <p className="text-gray-600 md:text-lg">
            TikTok, Instagram Reels, podcast, newsletter, webinars... Cada
            semana hay algo nuevo que «deberías estar haciendo». Y el
            empresario, presionado por el ruido, intenta estar en todas
            partes. El resultado: presencia mediocre en cinco canales en vez
            de presencia potente en uno. No necesitas estar en todas partes.
            Necesitas estar donde están tus clientes.
          </p>

          {/* ====================== SECCIÓN 4 ====================== */}
          <h2 id="canales-reales" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            4. Canales reales que funcionan para pymes
          </h2>

          <p className="text-gray-600 md:text-lg">
            Después de trabajar con cientos de pequeñas empresas, estos son
            los canales que de verdad generan clientes para negocios que no
            son multinacionales:
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Google Business Profile (antes Google My Business)
          </h3>
          <p className="text-gray-600 md:text-lg">
            Si tu negocio tiene componente local — y la mayoría lo tienen —
            tu ficha de Google Business es tu activo de captación más
            importante. Cuando alguien busca «fontanero en A Coruña» o
            «restaurante italiano en Vigo», Google muestra un mapa con las
            fichas más relevantes. Si la tuya no está, estás regalando esos
            clientes a tu competencia.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Optimizar tu ficha es gratis y tiene un impacto brutal: fotos
            reales, descripción con palabras clave, categoría correcta,
            horario actualizado y — lo más importante — reseñas de clientes
            reales. Un negocio con 40 reseñas de 4,8 estrellas genera
            confianza instantánea. Uno sin reseñas genera sospecha.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Alianzas estratégicas
          </h3>
          <p className="text-gray-600 md:text-lg">
            El boca a boca funciona, pero se puede sistematizar. Identifica
            negocios complementarios al tuyo que atiendan al mismo tipo de
            cliente pero no compitan contigo. Si eres fisioterapeuta, habla
            con gimnasios. Si eres diseñador web, habla con gestorías. Si
            vendes muebles, habla con inmobiliarias.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Propón un acuerdo simple: «Yo te recomiendo a mis clientes, tú
            me recomiendas a los tuyos». Es la forma más barata de conseguir
            clientes cualificados porque llegan con la confianza de alguien
            que ya conocen. Una buena alianza puede generarte 2-5 clientes
            al mes sin coste.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Contenido útil (SEO)
          </h3>
          <p className="text-gray-600 md:text-lg">
            Una web que solo dice «somos los mejores, llámanos» no genera
            tráfico. Una web que responde las preguntas que tus clientes
            potenciales están buscando en Google sí. Artículos, guías,
            preguntas frecuentes: contenido que demuestra que sabes de lo
            que hablas y que posiciona tu web en los resultados de búsqueda.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas publicar cada día. Un artículo sólido al mes,
            orientado a una búsqueda que tu cliente potencial hace, vale
            más que 30 publicaciones vacías en redes sociales.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Base de datos de clientes y seguimiento
          </h3>
          <p className="text-gray-600 md:text-lg">
            El cliente más barato de conseguir es el que ya te ha comprado.
            Venderle a un cliente existente cuesta entre 5 y 7 veces menos
            que captar uno nuevo. Sin embargo, la mayoría de pymes no tienen
            ningún sistema de seguimiento postventa. Un simple mensaje
            trimestral preguntando «¿Cómo te va? ¿Necesitas algo?» puede
            reactivar clientes dormidos y generar recomendaciones.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Publicidad pagada — pero bien hecha
          </h3>
          <p className="text-gray-600 md:text-lg">
            La publicidad de pago (Google Ads, Facebook Ads) puede funcionar
            muy bien para pymes, pero solo cuando el resto de piezas están en
            su sitio: propuesta clara, web que convierte, proceso comercial
            definido. Invertir en publicidad sin esas bases es como echar
            gasolina a un coche sin ruedas. Te gastas el presupuesto pero
            no vas a ninguna parte.
          </p>

          {/* ====================== SECCIÓN 5 ====================== */}
          <h2 id="local-vs-digital" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            5. Estrategia local vs. digital: qué necesita tu negocio
          </h2>

          <p className="text-gray-600 md:text-lg">
            Una de las preguntas más habituales es: «¿Me centro en lo local
            o en lo digital?» La respuesta depende de tu negocio, pero para
            la mayoría de pymes la combinación de ambos es lo que mejor
            funciona.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Si tu cliente es local
          </h3>
          <p className="text-gray-600 md:text-lg">
            Prioriza: Google Business Profile, alianzas con negocios de tu
            zona, presencia en directorios locales, participación en eventos
            del sector, networking presencial. Lo digital complementa pero
            no sustituye: tu web debe posicionar para búsquedas locales
            («tu servicio + tu ciudad»).
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Si puedes vender a nivel nacional
          </h3>
          <p className="text-gray-600 md:text-lg">
            Prioriza: contenido SEO que posicione para búsquedas de tu
            sector, publicidad segmentada en Google Ads, presencia en
            plataformas donde tu cliente busca soluciones. El marketing
            digital es tu canal principal de captación.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            La combinación ganadora para la mayoría
          </h3>
          <p className="text-gray-600 md:text-lg">
            Para la mayoría de pymes lo que mejor funciona es combinar una
            base sólida local (Google Business, alianzas, reputación de zona)
            con una capa digital que amplifica tu alcance (web con SEO,
            contenido útil, alguna campaña puntual de publicidad bien
            segmentada). No necesitas elegir uno u otro. Necesitas saber
            cuál priorizar según tu etapa y tus recursos.
          </p>

          {/* ====================== SECCIÓN 6 ====================== */}
          <h2 id="sistema-captacion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            6. Cómo crear un sistema de captación estable
          </h2>

          <p className="text-gray-600 md:text-lg">
            La diferencia entre un negocio que sufre por clientes y uno que
            los tiene de forma constante no es el tamaño ni el sector.
            Es que el segundo tiene un sistema. Un proceso definido,
            repetible y medible para generar oportunidades comerciales.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Fase 1: Generación de contactos
          </h3>
          <p className="text-gray-600 md:text-lg">
            Necesitas fuentes predecibles de contactos interesados. No vale
            «esperar a que llamen». Define al menos tres fuentes activas:
            tu web posicionada, tus alianzas estratégicas, tu base de
            clientes existentes. Si una falla, las otras compensan.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Fase 2: Cualificación
          </h3>
          <p className="text-gray-600 md:text-lg">
            No todos los que preguntan son buenos clientes. Necesitas un
            filtro rápido para saber si esa persona tiene el problema que
            resuelves, el presupuesto para pagarte y la urgencia para
            decidir. Dedicar dos horas a preparar un presupuesto para
            alguien que solo está «mirando precios» es tiempo perdido.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Fase 3: Proceso de conversión
          </h3>
          <p className="text-gray-600 md:text-lg">
            Cuando tienes un contacto cualificado, necesitas un proceso
            para convertirlo en cliente. No improvisar. Un proceso claro:
          </p>
          <ol className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">1.</span>
              Responder en menos de 2 horas (la velocidad de respuesta es
              decisiva)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">2.</span>
              Primera conversación breve para entender la necesidad
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">3.</span>
              Propuesta clara y personalizada en 24-48 horas
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">4.</span>
              Seguimiento a los 3 días si no hay respuesta
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">5.</span>
              Segunda llamada a la semana con un caso de éxito relevante
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 font-bold text-accent-600">6.</span>
              Contacto final a las 2 semanas cerrando o descartando
            </li>
          </ol>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este proceso, por simple que parezca, puede duplicar tu tasa de
            conversión. La mayoría de negocios pierden clientes no porque no
            les interese, sino porque nadie hace seguimiento. El interesado
            se enfría, se olvida o se va con el competidor que sí le llamó.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Fase 4: Medición y ajuste
          </h3>
          <p className="text-gray-600 md:text-lg">
            Cada mes, revisa los números: ¿Cuántos contactos has generado?
            ¿De qué fuente? ¿Cuántos se han convertido en propuestas?
            ¿Cuántas propuestas se han cerrado? ¿Cuál es tu coste de
            adquisición? Sin estos datos no puedes mejorar nada. Con ellos,
            puedes optimizar cada parte del sistema. Aprende a{" "}
            <a
              href="/blog/como-tomar-decisiones-en-un-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              tomar decisiones de negocio basadas en datos
            </a>{" "}
            y no en intuiciones.
          </p>

          <div className="my-8 rounded-xl border-2 border-accent-300 bg-accent-50 p-6 not-prose">
            <p className="font-semibold text-primary-900 text-lg">
              ¿No sabes por dónde empezar?
            </p>
            <p className="mt-2 text-gray-700">
              Si necesitas a alguien que te ayude a montar un sistema de
              captación adaptado a tu negocio,{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700 font-medium"
              >
                solicita un diagnóstico gratuito
              </a>
              . En 30 minutos analizamos tu situación y definimos las
              primeras acciones concretas.
            </p>
          </div>

          {/* ====================== SECCIÓN 7 ====================== */}
          <h2 id="errores-dinero" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            7. Los 7 errores que tiran dinero en captación de clientes
          </h2>

          <p className="text-gray-600 md:text-lg">
            Estos son los errores que veo más a menudo y que literalmente
            queman el presupuesto de las pymes:
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 1: Invertir en publicidad sin propuesta clara
          </h3>
          <p className="text-gray-600 md:text-lg">
            Si tu mensaje no convence, da igual que lo vean un millón de
            personas. Antes de gastar en publicidad, asegúrate de que tu
            propuesta de valor está afilada y tu web convierte. Si no, estás
            pagando para enseñar algo que no genera acción.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 2: Bajar precios para atraer clientes
          </h3>
          <p className="text-gray-600 md:text-lg">
            El cliente que viene por precio se va por precio. Atraer
            clientes con descuentos agresivos destruye tu{" "}
            <a
              href="/blog/como-mejorar-rentabilidad-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              rentabilidad empresarial
            </a>{" "}
            y posiciona tu marca como «la opción barata». Cuando intentes
            cobrar lo que vale tu trabajo, esos clientes desaparecerán. Es
            mejor tener menos clientes que paguen bien que muchos que no
            cubran costes.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 3: No tener web o tener una web inútil
          </h3>
          <p className="text-gray-600 md:text-lg">
            En 2025, un negocio sin web es un negocio invisible para la
            mitad de sus clientes potenciales. Pero una web que solo dice
            «bienvenido a nuestra empresa, somos líderes en nuestro sector»
            tampoco sirve. Tu web tiene que responder la pregunta del
            visitante en 5 segundos: qué haces, para quién y cómo contactar.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 4: Estar en redes sociales sin estrategia
          </h3>
          <p className="text-gray-600 md:text-lg">
            Publicar por publicar, sin objetivo, sin constancia y sin medir
            resultados. «Es que hay que estar en redes», dicen. No. Hay que
            estar donde estén tus clientes y con un objetivo claro. Si tu
            cuenta de Instagram no te genera consultas ni ventas, tu tiempo
            está mejor invertido en otros canales. Este tema es tan frecuente
            que le he dedicado un artículo entero:{" "}
            <a href="/blog/redes-sociales-para-pymes" className="text-accent-600 underline hover:text-accent-700">
              cuándo las redes sociales sirven para una pyme y cuándo son una
              pérdida de tiempo
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 5: No hacer seguimiento de los presupuestos
          </h3>
          <p className="text-gray-600 md:text-lg">
            Envías un presupuesto y esperas. Si no llaman, asumes que no
            les interesó. Error. El 60% de las ventas se cierran después
            del quinto contacto. La mayoría de empresarios abandonan
            después del primero. Cada presupuesto sin seguimiento es dinero
            sobre la mesa.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 6: Querer vender a todo el mundo
          </h3>
          <p className="text-gray-600 md:text-lg">
            Cuando intentas vender a todos, no convences a nadie. La
            especialización da miedo porque parece que reduces tu mercado.
            En realidad, lo enfocas. Y un mercado enfocado es un mercado
            donde puedes posicionarte como referente, cobrar más y tener
            menos competencia directa.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Error 7: No pedir recomendaciones activamente
          </h3>
          <p className="text-gray-600 md:text-lg">
            El boca a boca no ocurre solo. Hay que provocarlo. Tus clientes
            satisfechos están dispuestos a recomendarte, pero no lo harán
            si no se lo pides. Un simple «¿Conoces a alguien que pueda
            necesitar esto?» al terminar un trabajo puede generar un flujo
            constante de referidos.
          </p>

          {/* ====================== SECCIÓN 8 ====================== */}
          <h2 id="casos-reales" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            8. Casos reales de captación de clientes
          </h2>

          <p className="text-gray-600 md:text-lg">
            No voy a dar nombres — la discreción con mis clientes es
            sagrada — pero sí puedo compartir situaciones reales.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Caso 1: Abogada en A Coruña — De depender del boca a boca a tener lista de espera
          </h3>
          <p className="text-gray-600 md:text-lg">
            Abogada con 8 años de experiencia. Buenos clientes pero flujo
            errático: unos meses facturaba bien, otros apenas cubría gastos.
            Había probado anuncios en redes sin resultado.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Lo que hicimos:</strong> Dejó de ser «abogada generalista»
            y se posicionó como especialista en herencias y derecho de familia
            en A Coruña. Optimizamos su Google Business, pedimos reseñas a
            clientes satisfechos. Establecimos alianzas con dos gestorías y
            una inmobiliaria. Definimos un proceso comercial: respuesta en
            menos de una hora, primera consulta breve gratuita, presupuesto
            claro en 24 horas, seguimiento a los 3 días.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Resultado en 3 meses:</strong> Lista de espera. Cero
            euros en publicidad. Solo orden, estrategia y sistema.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Caso 2: Empresa de reformas — De 3 presupuestos al mes a 12
          </h3>
          <p className="text-gray-600 md:text-lg">
            Empresa familiar de reformas integrales. Buen trabajo, clientes
            contentos, pero dependían totalmente de que alguien les
            recomendara. Hacían 3-4 presupuestos al mes y cerraban 1.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Lo que hicimos:</strong> Creamos una web simple pero
            bien posicionada para búsquedas como «empresa de reformas en
            [su ciudad]». Incluimos fotos reales de antes/después de sus
            obras. Optimizamos su Google Business con todas las reseñas
            acumuladas. Alianza con una inmobiliaria que les derivaba pisos
            recién comprados. Y un proceso de seguimiento de presupuestos
            que pasó su ratio de cierre del 25% al 45%.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Resultado en 6 meses:</strong> 12 presupuestos al mes,
            cerrando 5. Facturación duplicada con el mismo equipo. El dueño
            dejó de hacer obras para dedicarse a gestionar y vender.
          </p>

          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
            Caso 3: Consultoría técnica — De vender horas a vender proyectos
          </h3>
          <p className="text-gray-600 md:text-lg">
            Ingeniero que vendía servicios de consultoría por horas.
            Competía con otros consultores por precio. Márgenes bajos,
            flujo irregular, estrés constante por conseguir el siguiente
            proyecto.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Lo que hicimos:</strong> Redefinimos su propuesta: dejó
            de vender «horas de consultoría» y empezó a vender «proyectos
            de mejora con resultado garantizado». Subió precios un 40%
            empaquetando sus servicios en soluciones cerradas. Creó
            contenido especializado que le posicionó como referente en su
            nicho. Un artículo bien posicionado le generaba 2-3 consultas
            cualificadas al mes.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong>Resultado en 8 meses:</strong> Menos clientes pero
            mejores. Margen duplicado. Agenda planificada a 2 meses vista.{" "}
            Si quieres ver más casos y sectores donde he trabajado, visita
            la página de{" "}
            <a
              href="/experiencia-sectores-casos"
              className="text-accent-600 underline hover:text-accent-700"
            >
              experiencia y casos reales
            </a>.
          </p>

          <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
            <p className="text-gray-700 italic md:text-lg">
              En los tres casos, la clave no fue gastar más en marketing.
              Fue definir bien la propuesta, elegir los canales correctos
              y tener un proceso comercial que convierte interesados en
              clientes.
            </p>
          </blockquote>

          {/* ====================== SECCIÓN 9 ====================== */}
          <h2 id="plan-accion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            9. Plan de acción para empezar esta semana
          </h2>

          <p className="text-gray-600 md:text-lg">
            No necesitas hacerlo todo a la vez. Empieza por lo que más
            impacto tiene. Este es el orden que recomiendo:
          </p>

          <div className="mt-8 space-y-6 not-prose">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                Semana 1
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Define tu propuesta de valor en una frase
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Responde con claridad: ¿qué haces, para quién y qué resultado
                concreto obtendrá tu cliente? Si no puedes decirlo en una
                frase, es que no lo tienes claro. Y si tú no lo tienes claro,
                tu cliente tampoco.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                Semana 2
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Optimiza tu presencia en Google
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Actualiza tu Google Business Profile con fotos reales, horario
                correcto, descripción clara y categoría adecuada. Pide a 5
                clientes satisfechos que te dejen una reseña esta semana. Esto
                solo ya puede generar consultas nuevas en menos de un mes.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                Semana 3
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Establece 3 alianzas y reactiva tu base de clientes
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Identifica 3 negocios complementarios y propón recomendación
                mutua. Contacta a todos tus clientes del último año con un
                mensaje personal. No vendas: abre la conversación. Te
                sorprenderá cuántos responden.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                Semana 4
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Monta tu proceso comercial y empieza a medir
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Define los pasos de tu proceso de venta. Apunta cuántas
                consultas recibes, de qué fuente y cuántas cierras. Haz
                seguimiento de cada presupuesto. En un mes tendrás datos
                reales para saber qué funciona y qué no.
              </p>
            </div>
          </div>

          {/* ====================== SECCIÓN 10 ====================== */}
          <h2 id="conclusion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            10. Conclusión: los clientes no llegan solos — pero tampoco hace falta arruinarse para atraerlos
          </h2>

          <p className="text-gray-600 md:text-lg">
            Conseguir clientes para tu negocio de forma constante no es
            cuestión de suerte ni de grandes presupuestos de publicidad.
            Es cuestión de tener claro qué ofreces, a quién se lo ofreces
            y cómo llegas a esas personas de forma sistemática.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La mayoría de pymes tienen mucho más potencial del que
            aprovechan. Clientes dormidos que no reactivan, oportunidades
            que no convierten, alianzas que no establecen, una presencia
            digital que no cuidan. No necesitas reinventar tu negocio.
            Necesitas poner en orden lo que ya tienes y crear un sistema
            que funcione sin que tú estés encima las 24 horas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He trabajado con{" "}
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="text-accent-600 underline hover:text-accent-700"
            >
              empresarios que vivían atrapados en el día a día
            </a>{" "}
            de su negocio, sin tiempo ni energía para pensar en cómo{" "}
            <a
              href="/blog/como-hacer-crecer-una-empresa-pequena"
              className="text-accent-600 underline hover:text-accent-700"
            >
              hacer crecer su empresa
            </a>. La solución nunca fue trabajar más horas. Fue
            trabajar con método: definir prioridades, montar sistemas
            y dejar de improvisar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si llevas tiempo preguntándote cómo conseguir clientes para
            tu negocio sin depender del azar, la respuesta empieza por
            mirar hacia dentro: tu propuesta, tu proceso, tu{" "}
            <a
              href="/blog/como-definir-estrategia-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              estrategia de negocio
            </a>.
            Y cuando necesitas una mirada externa que te ayude a ver lo
            que tú ya no puedes ver desde dentro,{" "}
            <a
              href="/diagnostico-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              solicita un diagnóstico gratuito de tu negocio
            </a>
            . Es el primer paso para dejar de depender de la suerte.
          </p>

          </article>

          {/* SIDEBAR */}
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-conseguir-clientes-para-tu-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Necesitas un sistema para captar clientes de forma constante?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos tu negocio, tu propuesta, tu proceso comercial y
            diseñamos un plan de captación que funcione sin depender de la
            suerte ni de grandes inversiones en publicidad.
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

      <BlogNav currentSlug="como-conseguir-clientes-para-tu-negocio" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Descubre nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              Método Rentabilismo y herramientas gratuitas
            </a>{" "}
            o consulta{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              casos reales de empresas que han mejorado su captación de clientes
            </a>.
          </p>
          <a href="/diagnostico-negocio" className="btn-primary mt-6 inline-block">
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
