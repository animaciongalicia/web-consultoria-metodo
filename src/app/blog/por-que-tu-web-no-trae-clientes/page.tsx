import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Por qué tu web no te trae clientes (y qué hacer) | Consultoría Método",
  description:
    "Tu web existe, pero no genera clientes. Descubre los 7 errores más comunes en webs de pymes y cómo solucionarlos sin grandes inversiones. Consultor de negocios en A Coruña.",
  keywords: [
    "web no genera clientes",
    "página web pyme no funciona",
    "SEO local negocios",
    "web para empresas pequeñas",
    "mejorar web empresa",
    "Google My Business negocio local",
    "consultor marketing digital Coruña",
    "diseño web pymes Galicia",
  ],
  openGraph: {
    title: "Por qué tu web no te trae clientes (y qué hacer)",
    description:
      "Los 7 errores que hacen que la web de tu pyme no genere clientes. Soluciones rápidas, cuándo necesitas un rediseño y cuánto debería costarte.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/por-que-tu-web-no-trae-clientes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Por qué tu web no te trae clientes (y qué hacer)",
  description:
    "Tu web existe, pero no genera clientes. Descubre los 7 errores más comunes en webs de pymes y cómo solucionarlos sin grandes inversiones.",
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
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/por-que-tu-web-no-trae-clientes",
  },
};

export default function ArticuloWebNoTraeClientes() {
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
            Por qué tu web no te trae clientes (y qué hacer)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Tienes una web. Te costó dinero. Pero no suena el teléfono, no
            llegan formularios y Google parece ignorarte. No es mala
            suerte — es que tu web tiene problemas concretos con
            soluciones concretas.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            online en toda España
          </p>
        </div>
      </section>

      {/* ARTICULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introduccion */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Trabajo con pymes de todo tipo — talleres, despachos
            profesionales, comercios, empresas de servicios — y hay una
            queja que se repite constantemente: &ldquo;Tengo web, pero no
            me sirve para nada.&rdquo; Y cuando le echo un vistazo a esa
            web, casi siempre entiendo por qué.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La web de la mayoría de las pymes es una tarjeta de visita
            digital que nadie visita. Se hizo hace años, nadie la ha
            tocado desde entonces, y cumple la función de existir. Pero
            existir no es suficiente. Una web que no genera contactos,
            llamadas o ventas no es un activo — es un gasto. Y lo peor
            es que los problemas suelen ser los mismos y, en muchos
            casos, se solucionan sin tirar todo a la basura.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este artículo complementa lo que ya he escrito sobre{" "}
            <a
              href="/blog/como-conseguir-clientes-para-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo conseguir clientes para tu negocio
            </a>{" "}
            y sobre{" "}
            <a
              href="/blog/redes-sociales-para-pymes"
              className="text-accent-600 underline hover:text-accent-700"
            >
              redes sociales para pymes
            </a>
            . La web es una pieza más del puzzle de captación, pero es
            la pieza central. Porque cuando alguien te busca — por
            recomendación, por Google, por un anuncio — la web es donde
            decide si te contacta o no.
          </p>

          {/* H2 — Los 7 errores */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 7 errores que hacen que tu web no funcione
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de revisar cientos de webs de pymes, estos son los
            problemas que encuentro una y otra vez. Si tu web tiene tres
            o más de estos, es muy probable que esté espantando clientes
            en lugar de atraerlos.
          </p>

          {/* Error 1 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. No hay una propuesta de valor clara
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Entras en la web y ves un slider bonito con fotos genéricas,
            el logo de la empresa y un eslogan del tipo &ldquo;Calidad y
            profesionalidad&rdquo;. Pero no entiendes qué hace la empresa,
            para quién lo hace ni por qué deberías elegirla a ella y no a
            otra. Si un visitante no entiende qué ofreces en los primeros
            5 segundos, se va. Así de simple.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            La solución: tu página de inicio tiene que responder tres
            preguntas inmediatamente — &ldquo;Qué hago&rdquo;,
            &ldquo;Para quién&rdquo; y &ldquo;Qué te aporta&rdquo;. En
            texto grande, visible, sin tener que hacer scroll.
          </p>

          {/* Error 2 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. No hay llamada a la acción (CTA)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El visitante lee tu web, le interesa lo que haces... ¿y ahora
            qué? Si la única forma de contactarte es un enlace
            &ldquo;Contacto&rdquo; perdido en el menú, estás perdiendo
            oportunidades. Cada página de tu web necesita un botón visible
            que diga claramente qué quieres que haga el visitante:
            &ldquo;Pide presupuesto&rdquo;, &ldquo;Llámanos&rdquo;,
            &ldquo;Reserva tu cita&rdquo;.
          </p>

          {/* Error 3 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. La web es lenta
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si tu web tarda más de 3 segundos en cargar, la mitad de los
            visitantes la abandonan antes de verla. Google penaliza las
            webs lentas en los resultados de búsqueda, así que además de
            perder a quien te visita, pierdes a quien podría visitarte.
            Las causas habituales: imágenes sin comprimir, hosting barato,
            exceso de plugins y plantillas pesadas.
          </p>

          {/* Error 4 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. No se ve bien en el móvil
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Más del 70% de las visitas a webs de negocios locales se hacen
            desde el móvil. Si tu web no es responsive — si los textos se
            ven diminutos, los botones no se pueden pulsar y hay que hacer
            zoom para leer — estás perdiendo a siete de cada diez
            visitantes. Compruébalo ahora mismo: abre tu web en el móvil
            y navega como lo haría un cliente.
          </p>

          {/* Error 5 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. No hay SEO local
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si tienes un negocio en A Coruña y alguien busca en Google tu
            servicio + &ldquo;Coruña&rdquo;, ¿apareces? La mayoría de las
            webs de pymes no están optimizadas para búsquedas locales. No
            mencionan la ciudad, no tienen páginas específicas para sus
            servicios, no usan las palabras clave que buscan sus clientes.
            Es como tener una tienda sin cartel.
          </p>

          {/* Error 6 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            6. No está conectada con Google My Business
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Tu ficha de Google My Business (ahora Google Business Profile)
            es, para muchos negocios locales, más importante que la propia
            web. Es lo primero que aparece cuando alguien busca tu nombre
            o tu categoría de negocio en la zona. Si no la tienes, la
            tienes desactualizada o no la has vinculado con tu web, estás
            regalando visibilidad a tu competencia.
          </p>

          {/* Error 7 */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            7. No hay contenido que genere confianza
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Testimonios, casos de éxito, fotos reales del equipo y del
            trabajo, preguntas frecuentes bien respondidas. El contenido
            que genera confianza es lo que convierte un visitante curioso
            en un cliente potencial. Sin él, tu web es una cáscara bonita
            pero vacía. El visitante no tiene elementos para decidir que
            tú eres la opción correcta.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;Tu web no tiene que ser la más bonita de tu sector.
            Tiene que ser la más clara: qué haces, para quién, por qué
            eres la mejor opción y cómo contactarte. Si consigues eso,
            funciona.&rdquo;
          </blockquote>

          {/* H2 — 7 arreglos rapidos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            7 arreglos que puedes hacer esta semana
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No siempre necesitas una web nueva. A veces necesitas
            arreglar lo que tienes. Estas son las mejoras que más impacto
            generan con menos inversión:
          </p>

          <div className="my-8 space-y-3">
            {[
              {
                fix: "Reescribe el titular de tu página de inicio",
                detail: "Cambia el eslogan genérico por una frase que explique qué haces y qué problema resuelves. Ejemplo: de \"Soluciones integrales de calidad\" a \"Instalaciones eléctricas en A Coruña — presupuesto en 24 horas\".",
              },
              {
                fix: "Pon un botón de acción visible en cada página",
                detail: "\"Pide presupuesto\", \"Llámanos\" o \"Reserva tu cita\". Que se vea sin hacer scroll. Color que contraste con el fondo.",
              },
              {
                fix: "Comprime todas las imágenes",
                detail: "Usa herramientas gratuitas como TinyPNG o Squoosh. Una imagen que pesa 3 MB puede pesar 200 KB sin perder calidad visible. Tu web cargará el doble de rápido.",
              },
              {
                fix: "Añade tu ciudad en los títulos y textos clave",
                detail: "En el título de la web, en los encabezados de servicios, en el pie de página. Google necesita saber dónde estás para mostrarte en búsquedas locales.",
              },
              {
                fix: "Crea o actualiza tu ficha de Google Business Profile",
                detail: "Fotos actuales, horario correcto, descripción completa, categorías bien elegidas. Pide reseñas a tus mejores clientes.",
              },
              {
                fix: "Añade 3-5 testimonios reales",
                detail: "Con nombre, empresa si aplica, y una foto. Un testimonio real vale más que diez frases de marketing. Si no tienes, pídelos hoy mismo a tus clientes satisfechos.",
              },
              {
                fix: "Pon tu teléfono visible y clicable en móvil",
                detail: "En la parte superior de cada página. Que al tocarlo desde el móvil llame directamente. Parece obvio, pero muchas webs no lo tienen.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.fix}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* H2 — Rediseno vs contenido */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            ¿Necesitas una web nueva o solo mejorar el contenido?
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No siempre la solución es tirar la web y empezar de cero.
            A veces sí, pero muchas veces basta con trabajar el contenido
            y el SEO sobre la estructura que ya tienes. Aquí tienes una
            guía rápida para decidir:
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Necesitas un rediseño si...</th>
                  <th className="px-4 py-3 font-semibold">Basta con contenido/SEO si...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">La web tiene más de 5 años</td>
                  <td className="px-4 py-3">El diseño es correcto pero no hay tráfico</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">No es responsive (no se adapta al móvil)</td>
                  <td className="px-4 py-3">Se ve bien pero los textos no venden</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Está hecha en Flash o tecnología obsoleta</td>
                  <td className="px-4 py-3">La estructura es lógica pero falta SEO</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">No puedes editarla sin un programador</td>
                  <td className="px-4 py-3">Tienes un CMS (WordPress, etc.) accesible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">La velocidad de carga es irrecuperable</td>
                  <td className="px-4 py-3">Es lenta pero se puede optimizar (imágenes, caché)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si necesitas un rediseño, no es una tragedia. Lo importante es
            que la nueva web se construya con criterio de captación desde
            el principio, no como un folleto bonito. Si basta con mejorar
            contenido y SEO, puedes empezar hoy mismo con los 7 arreglos
            que te he listado arriba.
          </p>

          {/* H2 — Costes */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            ¿Cuánto debería costar arreglar (o rehacer) tu web?
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este es uno de los temas donde más confusión hay. Te doy
            rangos orientativos para una web de pyme:
          </p>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              Rangos orientativos de inversión (2026):
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  <strong>Optimización de contenido y SEO local:</strong>{" "}
                  500-1.500 euros. Reescritura de textos, optimización de
                  imágenes, configuración de Google Business Profile y SEO
                  básico on-page.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  <strong>Rediseño sobre WordPress o similar:</strong>{" "}
                  1.500-4.000 euros. Diseño nuevo, responsive, textos
                  orientados a conversión, formularios, SEO básico
                  incluido.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  <strong>Web con tienda online básica:</strong>{" "}
                  3.000-6.000 euros. Todo lo anterior más catálogo de
                  productos, carrito, pasarela de pago y configuración
                  logística.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  <strong>Mantenimiento SEO mensual:</strong> 300-800
                  euros/mes. Creación de contenido, linkbuilding, análisis
                  de posiciones y ajustes continuos.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Desconfía de quien te ofrezca una web por 200 euros y de
            quien te pida 15.000 para un negocio local. Ambos extremos
            son señales de alarma. Lo importante no es el precio — es que
            la web esté pensada para generar contactos, no para ganar un
            premio de diseño. Si quieres profundizar en cómo encaja la
            web en tu estrategia digital completa, lee el artículo sobre{" "}
            <a
              href="/blog/como-digitalizar-tu-negocio-pequeno"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo digitalizar tu negocio pequeño
            </a>
            .
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              La regla de oro de una web que funciona:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              Si un desconocido entra en tu web desde el móvil, ¿puede
              entender qué haces, dónde estás y cómo contactarte en menos
              de 10 segundos? Si la respuesta es no, tu web no está
              cumpliendo su función. Todo lo demás — colores, fotos,
              animaciones — es secundario frente a esas tres cosas.
            </p>
          </div>

          {/* H2 — Conclusion */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: tu web puede ser tu mejor comercial
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Una web bien hecha trabaja para ti 24 horas al día, 7 días a
            la semana. Mientras duermes, mientras estás con un cliente,
            mientras estás de vacaciones. Pero solo si está diseñada para
            eso. Una web que solo &ldquo;está ahí&rdquo; no capta
            clientes. Es como tener un empleado que va a la oficina todos
            los días pero no hace nada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La buena noticia es que no necesitas una inversión enorme para
            que tu web empiece a generar contactos. Con los 7 arreglos
            que te he descrito, puedes mejorar drásticamente los
            resultados en cuestión de semanas. Empieza por los tres
            primeros esta semana y mide el resultado durante un mes.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y si tu web ya es irrecuperable, no la remiendas — la
            rehaces. Pero esta vez con un objetivo claro: que cada
            página tenga una razón de existir y que cada visitante sepa
            exactamente qué hacer cuando llega. Tu web no tiene que ser
            perfecta. Tiene que ser útil.
          </p>

          {/* CTA en articulo */}
          <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              ¿Tu web no te genera clientes?
            </p>
            <p className="mt-2 text-gray-600">
              Analizamos tu presencia digital, identificamos los fallos
              que te hacen perder oportunidades y te damos un plan de
              acción concreto para solucionarlo.
            </p>
            <a
              href="/diagnostico-negocio"
              className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
            >
              Solicita tu diagnóstico gratuito
            </a>
          </div>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="por-que-tu-web-no-trae-clientes" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres que tu web trabaje para ti?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a diagnosticar qué falla en tu presencia digital
            y a implementar las mejoras que conviertan visitantes en
            clientes reales.
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

      <BlogNav currentSlug="por-que-tu-web-no-trae-clientes" />

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
