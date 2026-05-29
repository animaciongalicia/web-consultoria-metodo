import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo captar clientes en un negocio local sin tirar dinero | Consultoría Método",
  description:
    "Estrategias probadas de captación de clientes para negocios locales: Google My Business, SEO local, alianzas, referidos y micro-eventos. Qué funciona y qué no. Consultor de negocios en A Coruña.",
  keywords: [
    "captar clientes negocio local",
    "cómo conseguir clientes tienda",
    "marketing negocio local",
    "Google My Business optimización",
    "SEO local pymes",
    "alianzas negocios locales",
    "captación clientes hostelería",
    "clientes comercio local",
    "consultoría empresas Coruña",
    "consultor de negocios Galicia",
  ],
  openGraph: {
    title: "Cómo captar clientes en un negocio local sin tirar dinero",
    description:
      "Guía práctica con estrategias reales para negocios locales: qué canales funcionan, cuáles son una pérdida de dinero y cuánto cuesta cada cliente según el canal.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-captar-clientes-negocio-local",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo captar clientes en un negocio local sin tirar dinero",
  description:
    "Estrategias probadas de captación de clientes para negocios locales: Google My Business, SEO local, alianzas estratégicas, sistemas de referidos y micro-eventos. Con tabla comparativa de coste por canal.",
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
  datePublished: "2026-06-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-captar-clientes-negocio-local",
  },
};

export default function ArticuloCaptarClientesNegocioLocal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Blog — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo captar clientes en un negocio local sin tirar dinero
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Tienes un buen producto o servicio, pero cada mes es una ruleta.
            Unas semanas entran clientes y otras, silencio. Esta guía te
            explica qué canales funcionan de verdad para un negocio local
            y cuáles son una trampa disfrazada de oportunidad.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            online en toda España
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
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
                  <span className="text-gray-700 font-medium">Captar clientes en negocio local</span>
                </li>
              </ol>
            </nav>

            {/* ── Introducción ── */}
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Si tienes una tienda, un restaurante, una peluquería, un taller o
              cualquier negocio que depende del cliente que pasa por la puerta,
              llevas años escuchando que &quot;tienes que estar en redes&quot;,
              que &quot;necesitas hacer publicidad online&quot; o que
              &quot;el futuro es digital&quot;.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Y probablemente has probado alguna de esas cosas. Has pagado a
              alguien para que te lleve Instagram. Has puesto anuncios en
              Facebook. Quizás incluso has contratado a una agencia que te
              prometía resultados. Y el resultado ha sido el mismo: dinero
              gastado, pocos clientes nuevos y la sensación de que el
              marketing no funciona para tu negocio.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              El problema no es el marketing. El problema es que te están
              vendiendo herramientas pensadas para empresas que venden a todo
              el país cuando tu cliente está a 10 minutos andando. Y eso cambia
              radicalmente las reglas del juego. Si ya has pasado por esa
              frustración, te recomiendo leer{" "}
              <a
                href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio"
                className="text-accent-600 underline hover:text-accent-700"
              >
                por qué no funciona la publicidad en muchos negocios
              </a>{" "}
              antes de seguir invirtiendo en el canal equivocado.
            </p>

            {/* ── Lo que NO funciona para un negocio local ── */}
            <h2 className="text-2xl font-bold text-primary-900 mt-14 mb-6">
              Lo que no funciona para captar clientes locales
            </h2>
            <p className="text-gray-600 md:text-lg">
              Antes de hablar de lo que sí funciona, vamos a quitarnos de
              encima lo que no. Porque la mayoría del dinero que pierden los
              negocios locales en marketing se va en canales que no son para
              ellos.
            </p>

            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
              Redes sociales genéricas
            </h3>
            <p className="text-gray-600 md:text-lg">
              Publicar tres veces a la semana en Instagram fotos de tu tienda
              no te va a traer clientes. Las redes sociales funcionan para
              construir marca a largo plazo o para negocios que venden online
              a nivel nacional. Para un negocio local, el alcance orgánico de
              una publicación es ridículo: de tus 800 seguidores, quizás ven
              el post 40 personas. Y de esas 40, la mayoría ya son clientes.
              El retorno es prácticamente cero.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              No digo que no tengas redes. Digo que no deposites en ellas tu
              estrategia de captación. Son un escaparate, no un motor de
              ventas.
            </p>

            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
              Campañas de publicidad de alcance nacional
            </h3>
            <p className="text-gray-600 md:text-lg">
              He visto peluquerías en A Coruña poniendo anuncios de Facebook
              que se mostraban en Sevilla. Restaurantes pagando campañas de
              Google Ads que aparecían para búsquedas genéricas en toda
              España. El resultado: muchos clics, cero clientes. Porque el
              cliente que puede venir a tu negocio vive a 15 minutos, no
              a 800 kilómetros.
            </p>

            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
              Folletos y buzoneo masivo
            </h3>
            <p className="text-gray-600 md:text-lg">
              El ratio de conversión del buzoneo masivo está entre el 0,1 %
              y el 0,5 %. De cada 1.000 folletos que repartes, te llegan
              entre 1 y 5 personas. A un coste de impresión y reparto de
              150-300 euros por tirada, el coste por cliente se dispara. No es
              que nunca funcione. Es que hay canales 10 veces más eficientes
              para lo que cuesta.
            </p>

            <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
              <p className="text-gray-700 italic md:text-lg">
                &laquo;El error más caro en marketing local no es gastar poco.
                Es gastar en el canal equivocado. Cien euros bien puestos en
                Google My Business valen más que mil en publicidad genérica de
                redes sociales.&raquo;
              </p>
            </blockquote>

            {/* ── Lo que SÍ funciona ── */}
            <h2 className="text-2xl font-bold text-primary-900 mt-14 mb-6">
              Los 5 canales que sí funcionan para negocios locales
            </h2>
            <p className="text-gray-600 md:text-lg">
              Después de más de 25 años trabajando con comercios, restaurantes,
              talleres, clínicas y todo tipo de negocios locales, estos son los
              canales que consistentemente generan clientes reales con un
              coste razonable.
            </p>

            {/* Canal 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Google Business Profile (Google My Business)</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Es, con diferencia, el canal más importante para cualquier negocio
                local. Cuando alguien busca &quot;peluquería cerca de mí&quot;
                o &quot;taller mecánico en Coruña&quot;, Google muestra un mapa
                con 3 fichas. Si estás ahí, recibes llamadas. Si no, no
                existes.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                <strong>Qué hacer:</strong> Completa tu ficha al 100 %.
                Sube 15-20 fotos reales (no de stock). Elige la categoría
                exacta. Escribe una descripción con palabras clave naturales.
                Publica una novedad semanal (ofertas, novedades, horarios
                especiales). Y sobre todo: consigue reseñas. Un negocio con
                50 reseñas de 4,7 estrellas le gana siempre al que tiene 3
                reseñas, por bueno que sea su servicio.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Coste: 0 euros. Tiempo: 2-3 horas de configuración + 15
                minutos semanales de mantenimiento. Resultado: clientes que
                llaman directamente porque te han encontrado buscando.
              </p>
            </div>

            {/* Canal 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">SEO local: que te encuentren cuando buscan</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Tu web no necesita ser bonita. Necesita aparecer cuando alguien
                busca lo que tú vendes en tu zona. Si eres fontanero en
                Arteixo, tu web tiene que salir cuando alguien busque
                &quot;fontanero en Arteixo&quot;. Así de simple.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                <strong>Qué hacer:</strong> Crea una página por cada servicio
                principal con el nombre de tu ciudad. Incluye tu dirección,
                teléfono y horario en todas las páginas. Escribe contenido
                que responda preguntas que tus clientes hacen (&quot;cuánto
                cuesta cambiar una caldera en Coruña&quot;). Registra tu
                negocio en directorios locales (Páginas Amarillas, QDQ,
                directorios del ayuntamiento).
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Coste: desde 0 euros (hazlo tú) hasta 300-500 euros si
                contratas a alguien. Los resultados tardan 2-3 meses pero
                son duraderos.
              </p>
            </div>

            {/* Canal 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Sistema de referidos: el boca a boca con método</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                El boca a boca es el canal más poderoso para negocios locales.
                Pero la mayoría de empresarios lo dejan al azar. Un sistema
                de referidos convierte algo aleatorio en algo predecible.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                <strong>Qué hacer:</strong> Después de cada trabajo bien
                hecho, pide la recomendación explícitamente: &quot;Si conoces
                a alguien que necesite esto, me harías un favor
                recomendándome&quot;. Ofrece algo a cambio: un descuento en
                el próximo servicio, un detalle, una ventaja. No tiene que
                ser mucho, solo algo que reconozca el gesto. Un taller
                mecánico que conozco consigue 4-5 clientes nuevos al mes
                solo con un sistema de &quot;trae a un amigo y los dos
                tenéis un 10 % en la próxima revisión&quot;.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Coste: prácticamente cero. El descuento que das al
                referidor se paga solo con el cliente nuevo que llega.
              </p>
            </div>

            {/* Canal 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Alianzas con negocios complementarios</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Este es el canal más infravalorado y uno de los más
                rentables. Busca negocios de tu zona que atiendan al mismo
                perfil de cliente pero no compitan contigo. Si tienes una
                clínica de fisioterapia, habla con gimnasios y centros de
                yoga. Si tienes una tienda de muebles, habla con
                inmobiliarias y pintores. Si tienes un restaurante, habla
                con hoteles cercanos.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                <strong>Qué hacer:</strong> Propón un acuerdo simple de
                recomendación mutua. Deja tarjetas en su local. Ofrece
                un descuento especial para los clientes que vengan de su
                parte. Haz lo mismo por ellos. Una buena alianza puede
                generar 3-6 clientes al mes sin inversión publicitaria.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Coste: 0 euros. Solo requiere relación, generosidad y
                constancia.
              </p>
            </div>

            {/* Canal 5 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-gray-900">Micro-eventos y jornadas de puertas abiertas</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                No hablo de grandes eventos con catering y DJ. Hablo de
                acciones pequeñas y enfocadas que atraigan a gente nueva a
                tu local. Una cata de productos, una demostración, un taller
                gratuito de 30 minutos, una jornada de asesoramiento abierto.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                <strong>Qué hacer:</strong> Organiza un micro-evento al mes
                o cada dos meses. Algo que aporte valor a tu cliente
                potencial y que le dé una razón para cruzar tu puerta por
                primera vez. Una tienda de running que organiza salidas
                grupales los sábados. Una tienda de vinos que hace catas
                mensuales. Una asesoría que ofrece una charla gratuita sobre
                cambios fiscales. El coste es mínimo y el impacto en
                captación puede ser enorme, porque el cliente te conoce en
                persona y se genera confianza inmediata.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Coste: 50-150 euros por evento. Resultado: 5-15 contactos
                nuevos cualificados por evento.
              </p>
            </div>

            {/* ── Tabla comparativa de coste ── */}
            <h2 className="text-2xl font-bold text-primary-900 mt-14 mb-6">
              Comparativa de coste por canal: dónde poner cada euro
            </h2>
            <p className="text-gray-600 md:text-lg">
              Esta tabla resume lo que he visto en negocios locales reales.
              No son datos teóricos de un estudio americano. Son cifras
              aproximadas basadas en pymes españolas con las que he
              trabajado en los últimos años.
            </p>

            <div className="not-prose my-10 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Canal</th>
                    <th className="px-4 py-3 text-center font-semibold">Inversión mensual</th>
                    <th className="px-4 py-3 text-center font-semibold">Clientes/mes estimados</th>
                    <th className="px-4 py-3 text-center font-semibold">Coste por cliente</th>
                    <th className="px-4 py-3 text-center font-semibold">Plazo resultados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-emerald-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Google Business Profile</td>
                    <td className="px-4 py-3 text-center text-gray-700">0 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">5-15</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-700">0 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">2-4 semanas</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-emerald-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">SEO local (web)</td>
                    <td className="px-4 py-3 text-center text-gray-700">0-500 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">3-10</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-700">0-50 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">2-4 meses</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-emerald-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Sistema de referidos</td>
                    <td className="px-4 py-3 text-center text-gray-700">0-50 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">3-8</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-700">0-15 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">1-2 semanas</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-emerald-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Alianzas locales</td>
                    <td className="px-4 py-3 text-center text-gray-700">0 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">3-6</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-700">0 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">2-4 semanas</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-emerald-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Micro-eventos</td>
                    <td className="px-4 py-3 text-center text-gray-700">50-150 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">5-15</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-700">10-30 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">Inmediato</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">Google Ads local</td>
                    <td className="px-4 py-3 text-center text-gray-700">200-500 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">5-15</td>
                    <td className="px-4 py-3 text-center text-gray-700">20-50 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">1-2 semanas</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Redes sociales (orgánico)</td>
                    <td className="px-4 py-3 text-center text-gray-700">0-300 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">0-2</td>
                    <td className="px-4 py-3 text-center font-bold text-red-600">150+ €</td>
                    <td className="px-4 py-3 text-center text-gray-700">Incierto</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Facebook/Instagram Ads genérico</td>
                    <td className="px-4 py-3 text-center text-gray-700">200-500 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">1-3</td>
                    <td className="px-4 py-3 text-center font-bold text-red-600">100-300 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">1-2 semanas</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Buzoneo masivo</td>
                    <td className="px-4 py-3 text-center text-gray-700">150-300 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">1-5</td>
                    <td className="px-4 py-3 text-center font-bold text-red-600">60-300 €</td>
                    <td className="px-4 py-3 text-center text-gray-700">1-2 semanas</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-center text-xs text-gray-500">
                * Cifras orientativas basadas en negocios locales reales.
                Los resultados varían según sector, ubicación y ejecución.
                Las filas verdes indican canales recomendados para negocios
                locales; las rojas, canales habitualmente ineficientes.
              </p>
            </div>

            <p className="text-gray-600 md:text-lg">
              La conclusión es clara: los canales más baratos y más
              efectivos para un negocio local son los que te conectan
              directamente con gente de tu zona que ya está buscando lo que
              ofreces. No necesitas llegar a miles de personas. Necesitas
              llegar a las 20 o 30 personas al mes que necesitan lo que
              vendes y están a 15 minutos de tu puerta.
            </p>

            {/* ── El sistema completo ── */}
            <h2 className="text-2xl font-bold text-primary-900 mt-14 mb-6">
              Cómo montar un sistema de captación local en 4 semanas
            </h2>
            <p className="text-gray-600 md:text-lg">
              No intentes hacer todo a la vez. Sigue este orden y en un mes
              tendrás un sistema básico funcionando.
            </p>

            <div className="mt-8 space-y-6 not-prose">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                  Semana 1
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  Google Business Profile al 100 %
                </h3>
                <p className="mt-2 text-gray-600 md:text-lg">
                  Completa cada campo de tu ficha. Sube fotos reales del
                  local, el equipo y tus productos o servicios. Escribe una
                  descripción con las palabras clave de tu sector y tu ciudad.
                  Pide a 10 clientes de confianza que te dejen una reseña
                  honesta esta misma semana.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                  Semana 2
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  Activa tu sistema de referidos
                </h3>
                <p className="mt-2 text-gray-600 md:text-lg">
                  Define qué ofreces al cliente que recomienda y al nuevo
                  cliente que llega por recomendación. Imprime unas tarjetas
                  sencillas o simplemente comunícalo verbalmente después de
                  cada servicio. Lo importante es que sea sistemático: cada
                  cliente que sale contento recibe la petición de
                  recomendación.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                  Semana 3
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  Establece 3 alianzas estratégicas
                </h3>
                <p className="mt-2 text-gray-600 md:text-lg">
                  Identifica 3 negocios de tu zona que atiendan al mismo
                  perfil de cliente. Visítalos, preséntate y propón
                  recomendación mutua. No pidas: ofrece primero. Recomienda
                  tú a tus clientes y la reciprocidad vendrá sola.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                  Semana 4
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  Planifica tu primer micro-evento
                </h3>
                <p className="mt-2 text-gray-600 md:text-lg">
                  Elige una fecha del mes siguiente. Define una actividad
                  que atraiga a tu cliente ideal: una demostración, una
                  charla, una cata, una jornada especial. Comunícalo a tu
                  base de clientes y a tus aliados. Y mide: cuántas
                  personas vinieron, cuántas dejaron sus datos, cuántas se
                  convirtieron en clientes.
                </p>
              </div>
            </div>

            {/* ── Errores frecuentes ── */}
            <h2 className="text-2xl font-bold text-primary-900 mt-14 mb-6">
              Los 3 errores que más dinero cuestan
            </h2>

            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
              Error 1: Gastar antes de optimizar lo gratuito
            </h3>
            <p className="text-gray-600 md:text-lg">
              No tiene sentido pagar publicidad si tu ficha de Google está
              incompleta, no tienes reseñas y tu web no aparece para
              búsquedas locales. Primero agota lo gratuito. Después, cuando
              esos canales estén dando resultados, puedes plantearte
              invertir para amplificarlos.
            </p>

            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
              Error 2: Captar sin fidelizar
            </h3>
            <p className="text-gray-600 md:text-lg">
              De nada sirve traer 10 clientes nuevos al mes si pierdes 8
              de los que ya tienes. Antes de invertir en captación, asegúrate
              de que tu servicio genera repetición y que tienes un sistema
              mínimo de seguimiento. Un mensaje de agradecimiento, una
              llamada al mes siguiente, un detalle por fidelidad. El
              cliente que repite es el más rentable de todos.
            </p>

            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
              Error 3: No medir nada
            </h3>
            <p className="text-gray-600 md:text-lg">
              Si no sabes de dónde vienen tus clientes, no puedes saber qué
              funciona. Pregunta siempre: &quot;¿Cómo nos has
              conocido?&quot;. Apúntalo. En un par de meses tendrás datos
              reales para saber dónde concentrar tu esfuerzo. Es la base
              de cualquier decisión inteligente. Para profundizar en esto,
              te recomiendo la{" "}
              <a
                href="/blog/como-conseguir-clientes-para-tu-negocio"
                className="text-accent-600 underline hover:text-accent-700"
              >
                guía completa de captación de clientes para pymes
              </a>{" "}
              donde explico cómo montar un sistema de medición sencillo.
            </p>

            <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
              <p className="text-gray-700 italic md:text-lg">
                &laquo;Un negocio local no necesita miles de seguidores
                ni campañas virales. Necesita que las 200 familias de su
                barrio sepan que existe y confíen en él. Eso se consigue
                con presencia local, buen servicio y boca a boca
                organizado.&raquo;
              </p>
            </blockquote>

            {/* ── Conclusión ── */}
            <h2 className="text-2xl font-bold text-primary-900 mt-14 mb-6">
              Conclusión: tu mejor inversión es la que te conecta con tu barrio
            </h2>
            <p className="text-gray-600 md:text-lg">
              Si tienes un negocio local y sientes que no consigues
              clientes suficientes, lo más probable es que estés mirando
              en la dirección equivocada. No necesitas más seguidores.
              No necesitas una campaña de Facebook. No necesitas un
              vídeo viral.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Necesitas que cuando alguien de tu zona busque lo que
              ofreces, te encuentre. Necesitas que tus clientes actuales
              te recomienden de forma activa. Necesitas aliados en tu barrio
              que te deriven clientes. Y necesitas un pequeño sistema para
              que todo eso no dependa de la suerte.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Llevo más de 25 años como{" "}
              <a
                href="/consultor-empresas-coruna"
                className="text-accent-600 underline hover:text-accent-700"
              >
                consultor de empresas en A Coruña
              </a>{" "}
              ayudando a negocios locales a captar clientes de forma
              eficiente. La solución casi nunca pasa por gastar más
              dinero. Pasa por gastar mejor. O, muchas veces, por dejar
              de gastar en lo que no funciona y dedicar ese esfuerzo a
              lo que sí.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Si quieres que analicemos juntos tu situación y definamos
              los canales de captación que tienen más sentido para tu
              negocio concreto,{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700"
              >
                solicita un diagnóstico gratuito
              </a>. En 30 minutos tendrás claridad sobre por dónde empezar.
            </p>

            {/* ── CTA final en artículo ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Quieres saber qué canales de captación son los más rentables para tu negocio concreto?
              </p>
              <p className="mt-2 text-gray-600">
                Analizamos tu situación, tu zona y tu tipo de cliente para diseñar un plan de captación local que funcione sin grandes inversiones.
              </p>
              <a
                href="/diagnostico-negocio"
                className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
              >
                Solicita tu diagnóstico gratuito
              </a>
            </div>

          </article>

          {/* SIDEBAR */}
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-captar-clientes-negocio-local" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio local necesita más clientes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La mayoría de negocios locales tienen clientes potenciales a su
            alrededor que no saben que existen. No hace falta gastar una
            fortuna para llegar a ellos. Hace falta un plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
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

      <BlogNav currentSlug="como-captar-clientes-negocio-local" />
    </>
  );
}
