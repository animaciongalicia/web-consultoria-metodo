import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo dejar de competir por precio: estrategia de valor para pymes | Consultoría Método",
  description:
    "Sal de la guerra de precios con estrategias reales de diferenciación. Aprende a competir por valor, no por precio, y protege la rentabilidad de tu pyme.",
  keywords: [
    "competir por precio",
    "estrategia de valor pyme",
    "dejar de competir por precio",
    "diferenciación negocio",
    "propuesta de valor",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Cómo dejar de competir por precio: estrategia de valor para pymes",
    description:
      "Sal de la guerra de precios con estrategias reales. Cómo construir una propuesta de valor que te permita cobrar más y vender mejor.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-dejar-de-competir-por-precio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo dejar de competir por precio: estrategia de valor para pymes",
  description:
    "Sal de la guerra de precios con estrategias reales de diferenciación. Aprende a competir por valor, no por precio, y protege la rentabilidad de tu pyme.",
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
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-dejar-de-competir-por-precio",
  },
};

export default function ArticuloDejarCompetirPorPrecio() {
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
            Cómo dejar de competir por precio: estrategia de valor para pymes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Si tu principal argumento de venta es ser más barato que la
            competencia, estás en una carrera que solo puede terminar de una
            forma: con tu margen en cero. Esta guía te muestra cómo salir de
            esa trampa y construir un negocio donde el precio deja de ser el
            factor decisivo.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ── Artículo ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
            {/* Introducción */}
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Hay una frase que escucho cada semana en alguna consultoría:
              &ldquo;Es que en mi sector solo se compite por precio.&rdquo;
              Fontaneros, talleres mecánicos, tiendas de barrio, despachos
              profesionales, empresas de servicios. Todos convencidos de que
              su mercado es diferente y que no hay más remedio que ser el más
              barato.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              No es verdad. En todos esos sectores hay empresas que cobran un
              30, 50 o 100% más que la media y tienen lista de espera. La
              diferencia no está en el sector. Está en la estrategia. Y en
              este artículo vamos a ver exactamente qué hacen esas empresas
              que tú todavía no haces.
            </p>

            <blockquote className="not-prose my-10 rounded-r-lg border-l-4 border-accent-500 bg-accent-50 px-6 py-6 italic text-gray-800 md:text-xl">
              &ldquo;Competir por precio es la estrategia por defecto de los
              negocios que no tienen estrategia&rdquo;
            </blockquote>

            {/* H2 — Por qué caemos en la trampa */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Por qué las pymes caen en la trampa del precio
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Competir por precio es la estrategia por defecto de los
              negocios que no tienen estrategia. Suena duro, pero es la
              realidad. Cuando no sabes exactamente qué te hace diferente, lo
              único que puedes ofrecer es un número más bajo que el del
              vecino.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Y tiene sentido: bajar el precio es lo más fácil del mundo. No
              requiere creatividad, ni esfuerzo, ni inversión. Solo requiere
              apretar tu margen. Pero eso funciona hasta que llega alguien
              dispuesto a apretar un poco más. Y siempre llega.
            </p>

            <div className="not-prose my-8 rounded-xl border-l-4 border-red-400 bg-red-50 p-5">
              <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                La trampa
              </p>
              <p className="mt-2 text-gray-800">
                Cuando no sabes qué te hace diferente, lo único que puedes
                ofrecer es un número más bajo. Y ese número siempre lo puede
                batir alguien que tenga menos que perder que tú.
              </p>
            </div>

            <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
              <p className="font-bold text-amber-900 md:text-lg">
                &#9888; Las tres razones por las que acabas compitiendo por precio:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "No has definido qué te diferencia de la competencia. Si tú no lo sabes, el cliente tampoco.",
                  "Tu comunicación se centra en lo que haces, no en lo que el cliente consigue. Vendes horas y servicios en vez de resultados.",
                  "Atraes al cliente equivocado. Si tu marketing solo habla de precio y descuentos, atraerás a compradores de precio.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="mt-1 text-amber-600">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              Si quieres profundizar en esto, empieza por analizar{" "}
              <a
                href="/blog/como-diferenciarte-de-tu-competencia"
                className="text-accent-600 underline hover:text-accent-700"
              >
                cómo diferenciarte de tu competencia
              </a>{" "}
              de forma real, no con frases vacías tipo &ldquo;calidad y
              servicio&rdquo; que dicen todos.
            </p>

            {/* H2 — La escalera de valor */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              La escalera de valor: de commodity a transformación
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Todo negocio opera en uno de cuatro niveles de valor. Cuanto
              más arriba estés en la escalera, menos importa el precio y más
              importa lo que aportas. El objetivo es subir de nivel
              conscientemente.
            </p>

            <div className="my-8 space-y-0">
              {[
                {
                  level: "4",
                  name: "Transformación",
                  desc: "Cambias la situación del cliente de forma profunda. Un consultor que ayuda a una empresa a pasar de perder dinero a ser rentable. Un entrenador personal que transforma la salud de alguien. Aquí el precio es casi irrelevante.",
                  color: "bg-emerald-500",
                  border: "border-emerald-200",
                  bg: "bg-emerald-50",
                },
                {
                  level: "3",
                  name: "Experiencia",
                  desc: "El proceso de trabajar contigo es diferente. No solo haces el trabajo, sino que el cliente se siente acompañado, informado, cuidado. Un taller mecánico que te manda vídeo del problema, te recoge el coche y te lo devuelve lavado.",
                  color: "bg-blue-500",
                  border: "border-blue-200",
                  bg: "bg-blue-50",
                },
                {
                  level: "2",
                  name: "Servicio",
                  desc: "Haces el trabajo bien y a tiempo. Cumples. Pero no hay nada especial en cómo lo haces. Es donde está la mayoría. Aquí ya empieza la guerra de precios.",
                  color: "bg-amber-500",
                  border: "border-amber-200",
                  bg: "bg-amber-50",
                },
                {
                  level: "1",
                  name: "Commodity",
                  desc: "Lo que ofreces es idéntico a lo que ofrece cualquier otro. El cliente no ve diferencia. Solo queda el precio. Si estás aquí, no ganas dinero.",
                  color: "bg-red-500",
                  border: "border-red-200",
                  bg: "bg-red-50",
                },
              ].map((item) => (
                <div
                  key={item.level}
                  className={`flex items-start gap-4 border ${item.border} ${item.bg} p-5 first:rounded-t-xl last:rounded-b-xl`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.color} text-sm font-bold text-white`}
                  >
                    {item.level}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
              &ldquo;El cliente no compara precios cuando siente que lo que tú
              ofreces no se puede comparar con lo de nadie más. Tu trabajo es
              crear esa percepción. Y que sea verdad.&rdquo;
            </blockquote>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-primary-100">
                  <tr>
                    <th className="p-3 text-left font-bold text-primary-900">
                      Aspecto
                    </th>
                    <th className="p-3 text-left font-bold text-red-700">
                      Compitiendo por precio
                    </th>
                    <th className="p-3 text-left font-bold text-emerald-700">
                      Compitiendo por valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Margen</td>
                    <td className="p-3">Cada vez más pequeño</td>
                    <td className="p-3">Estable o creciente</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Cliente tipo</td>
                    <td className="p-3">Va y viene según precio</td>
                    <td className="p-3">Fiel, referidor</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Estrés</td>
                    <td className="p-3">Constante</td>
                    <td className="p-3">Bajo control</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Futuro</td>
                    <td className="p-3">Peor cada año</td>
                    <td className="p-3">Más previsible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* H2 — Estrategias prácticas */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              6 estrategias prácticas para dejar de competir por precio
            </h2>

            <div className="my-8 space-y-4">
              {[
                {
                  num: "1",
                  title: "Especialízate en un nicho concreto",
                  desc: "Un abogado generalista compite por precio. Un abogado especializado en herencias internacionales cobra lo que quiere porque hay pocos que hagan eso. Cuanto más específico es tu posicionamiento, menos competencia directa tienes y más puedes cobrar. No intentes ser todo para todos.",
                },
                {
                  num: "2",
                  title: "Empaqueta servicios en vez de vender horas",
                  desc: "Cuando vendes horas, el cliente compara tu hora con la del competidor. Cuando vendes un paquete con nombre propio — \"Plan de lanzamiento comercial\", \"Revisión 360 de tu negocio\" — el cliente no puede comparar porque no existe un equivalente exacto. Crea tus propios productos.",
                },
                {
                  num: "3",
                  title: "Añade una capa de conocimiento experto",
                  desc: "No vendas solo la ejecución. Vende el diagnóstico, el análisis, la recomendación. Un electricista que te instala un enchufe compite por precio. Un electricista que revisa toda tu instalación, te hace un informe de eficiencia energética y te recomienda cambios que te ahorran 200 euros al mes en la factura de la luz cobra tres veces más.",
                },
                {
                  num: "4",
                  title: "Crea costes de cambio",
                  desc: "Haz que cambiarte por otro proveedor tenga un coste real para el cliente: informes históricos que perderían, integraciones con sus sistemas, conocimiento acumulado de su negocio. No es encerrar al cliente — es crear tanto valor acumulado que irse no merezca la pena.",
                },
                {
                  num: "5",
                  title: "Construye una marca que genere confianza",
                  desc: "Las reseñas, los casos de éxito, el contenido que publicas, tu presencia en Google — todo suma a la percepción de que eres la opción segura. Y la opción segura nunca es la más barata. La gente paga más cuando confía más. Invierte en tu reputación como invertirías en cualquier activo.",
                },
                {
                  num: "6",
                  title: "Diseña una oferta irresistible",
                  desc: "No bajes el precio: sube el valor percibido. Añade garantías, bonus, seguimiento post-venta, acceso prioritario. Haz que tu oferta sea tan completa que el precio deje de ser la objeción principal.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              La estrategia 6 es especialmente potente. Si quieres
              profundizar, tengo un artículo completo sobre{" "}
              <a
                href="/blog/como-crear-oferta-irresistible"
                className="text-accent-600 underline hover:text-accent-700"
              >
                cómo crear una oferta irresistible
              </a>{" "}
              que tus clientes no puedan rechazar.
            </p>

            {/* H2 — Ejemplos por sector */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Ejemplos reales por sector: del precio al valor
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              La teoría está bien, pero lo que convence son los ejemplos. Así
              es como negocios reales de distintos sectores han dejado de
              competir por precio.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 text-sm">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-primary-900">
                      Sector
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-primary-900">
                      Antes (commodity)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-primary-900">
                      Después (valor)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "Taller mecánico",
                      "Revisión + cambio de aceite por 39,90 €",
                      "Plan de mantenimiento anual con recogida a domicilio, informe digital y aviso automático. 299 €/año.",
                    ],
                    [
                      "Asesoría fiscal",
                      "Declaración de IVA por 30 €/mes",
                      "Paquete de gestión integral con reunión trimestral de planificación fiscal, alertas de ahorro y acceso directo al asesor. 180 €/mes.",
                    ],
                    [
                      "Peluquería",
                      "Corte de pelo 12 €",
                      "Sesión de imagen personalizada con diagnóstico capilar, corte, productos recomendados y seguimiento. 45 €.",
                    ],
                    [
                      "Empresa de limpieza",
                      "Limpieza por m² a precio hora",
                      "Servicio de higiene garantizada con checklist fotográfico, auditoría mensual y reposición incluida. Contrato anual.",
                    ],
                    [
                      "Tienda de ropa local",
                      "Mismas marcas que todos, compitiendo con online",
                      "Servicio de asesoría de estilo personal, eventos exclusivos para clientas VIP, programa de fidelización con experiencias.",
                    ],
                  ].map(([sector, antes, despues], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {sector}
                      </td>
                      <td className="px-4 py-3 text-gray-500 line-through">
                        {antes}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{despues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              En todos los casos, el patrón es el mismo: dejan de vender la
              tarea y empiezan a vender el resultado o la experiencia. El
              producto técnico es similar, pero la percepción de valor es
              radicalmente distinta.
            </p>

            {/* H2 — El cambio de percepción */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              El cambio de mentalidad: de &ldquo;soy caro&rdquo; a
              &ldquo;valgo lo que cobro&rdquo;
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              El mayor obstáculo para dejar de competir por precio no está en
              el mercado. Está en tu cabeza. La mayoría de los empresarios que
              conozco tienen un problema de percepción de su propio valor. Han
              internalizado que su trabajo no vale tanto. Que si cobran más,
              nadie les comprará.
            </p>

            <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
              &ldquo;Caro es un concepto relativo. Un fontanero que te cobra
              300 euros y te soluciona una avería en una hora es barato. Uno
              que te cobra 80 euros, viene tres veces y no lo arregla, es
              carísimo. El precio solo tiene sentido en relación al valor que
              se recibe.&rdquo;
            </blockquote>

            <p className="mt-4 text-gray-600 md:text-lg">
              Si necesitas herramientas concretas para aplicar esto a tus
              tarifas, lee{" "}
              <a
                href="/blog/como-subir-precios-sin-perder-clientes"
                className="text-accent-600 underline hover:text-accent-700"
              >
                cómo subir precios sin perder clientes
              </a>
              . Ahí encontrarás la mecánica paso a paso para comunicar una
              subida de precios basada en valor.
            </p>

            <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
              <p className="font-semibold text-primary-900 md:text-lg">
                Las 3 preguntas que tu cliente se hace (y ninguna es el precio):
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 md:text-lg">
                <li>
                  <strong>1.</strong> ¿Confío en que esta persona o empresa va
                  a resolver mi problema?
                </li>
                <li>
                  <strong>2.</strong> ¿Qué riesgo corro si elijo mal? ¿Quién
                  me da más seguridad?
                </li>
                <li>
                  <strong>3.</strong> ¿Me compensa el resultado que voy a
                  obtener respecto a lo que pago?
                </li>
              </ul>
              <p className="mt-4 text-gray-700 md:text-lg">
                Si tus respuestas a estas tres preguntas son fuertes, el
                precio pasa a ser un dato secundario. Trabaja en responderlas
                bien, no en ser el más barato.
              </p>
            </div>

            {/* H2 — Conclusión */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Conclusión: el precio es la excusa, el valor es la respuesta
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Competir por precio no es una estrategia. Es la ausencia de
              estrategia. Y salir de esa dinámica no requiere cambiar de
              sector ni inventar algo revolucionario. Requiere decidir
              conscientemente en qué vas a ser diferente, comunicarlo con
              claridad y construir cada día pruebas de que esa diferencia es
              real.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Especialízate. Empaqueta. Añade conocimiento. Crea una marca
              que inspire confianza. Y sobre todo, deja de pedir disculpas por
              tus precios. Si resuelves un problema real, si lo haces bien y
              si cuidas a tu cliente, mereces cobrar un precio que refleje ese
              valor.
            </p>

            <ol className="not-prose my-8 space-y-3 rounded-xl border-2 border-primary-200 bg-primary-50/40 p-6 text-gray-700">
              <li>
                <strong className="text-primary-900">
                  1. Especialización
                </strong>{" "}
                — deja de ser un &ldquo;todo para todos&rdquo; y conviértete
                en el referente de un nicho concreto.
              </li>
              <li>
                <strong className="text-primary-900">
                  2. Servicio superior
                </strong>{" "}
                — cuida el proceso, no solo el resultado. La experiencia
                importa tanto como el trabajo entregado.
              </li>
              <li>
                <strong className="text-primary-900">
                  3. Marca y confianza
                </strong>{" "}
                — reseñas, casos, contenido y presencia. La opción segura
                nunca es la más barata.
              </li>
              <li>
                <strong className="text-primary-900">
                  4. Producto o paquete diferencial
                </strong>{" "}
                — deja de vender horas; empaqueta resultados con nombre
                propio.
              </li>
            </ol>
            <p className="mt-4 text-gray-600 md:text-lg">
              El mercado no castiga a los caros. Castiga a los que no aportan
              valor. Si tú aportas valor, el precio deja de ser una barrera y
              se convierte en un filtro que atrae exactamente al tipo de
              cliente que quieres tener.
            </p>

            <div className="not-prose my-8 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                Consejo práctico
              </p>
              <p className="mt-2 text-gray-800">
                Antes de bajar un precio, pregúntate qué podrías añadir para
                justificar el actual. Casi siempre es más rentable sumar valor
                que restar euros — y protege tu margen sin tocar tu tarifa.
              </p>
            </div>

            {/* CTA interno */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Tu negocio está atrapado en la guerra de precios?
              </p>
              <p className="mt-2 text-gray-600">
                Analizamos tu propuesta de valor, tu posicionamiento y tu
                comunicación comercial para diseñar una estrategia que te
                permita cobrar lo que tu trabajo vale.
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
              <BlogSidebar currentSlug="como-dejar-de-competir-por-precio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres dejar de competir por precio y empezar a competir por
            valor?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a redefinir tu propuesta de valor, tu estrategia de
            precios y tu comunicación comercial para atraer clientes que
            valoren lo que haces, no solo lo que cobras.
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

      <BlogNav currentSlug="como-dejar-de-competir-por-precio" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y online en toda
              España
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
