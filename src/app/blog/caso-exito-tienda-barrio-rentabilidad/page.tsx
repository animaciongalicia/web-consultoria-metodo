import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: una tienda de barrio que competía con el supermercado y ganó | Consultoría Método",
  description:
    "Caso real de un comercio de alimentación de barrio en la provincia de A Coruña presionado por la gran distribución. Diferenciación, mix de producto, precios y servicio. Consultor de negocios para comercio local en Galicia.",
  keywords: [
    "caso éxito tienda barrio",
    "rentabilidad comercio local",
    "consultor comercio minorista Galicia",
    "consultoría tienda alimentación",
    "comercio barrio A Coruña",
    "diferenciación tienda pequeña",
    "consultor retail Galicia",
    "tienda barrio vs supermercado",
  ],
  openGraph: {
    title: "Caso de éxito: una tienda de barrio que competía con el supermercado y ganó",
    description:
      "Caso real de una tienda de alimentación de barrio que llevaba años perdiendo clientela y margen. Diferenciación, mix de producto y servicio: qué encontramos y qué cambiamos.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-tienda-barrio-rentabilidad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: una tienda de barrio que competía con el supermercado y ganó",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-21",
};

export default function CasoExitoTienda() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Caso de éxito — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Una tienda de barrio que competía con el supermercado — y ganó la partida
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Un comercio de alimentación en un barrio tradicional de la provincia de A Coruña.
            Tres supermercados abrieron en 500 metros a la redonda en cinco años. El margen se
            desplomaba, la clientela envejecía y los dueños se planteaban cerrar. Este es el
            caso real de cómo transformamos una tienda que iba a desaparecer en un comercio
            rentable y con identidad propia.
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

            <h2>La situación de partida: un comercio en retirada</h2>
            <p>
              La tienda llevaba más de veinte años abierta en un barrio consolidado del área
              metropolitana de A Coruña. Dos socios — hermanos — la llevaban desde que la
              heredaron de sus padres. Ofrecían alimentación general: frescos, conservas,
              lácteos, panadería, bebidas, droguería básica. Un modelo de &quot;todo a mano&quot;
              típico del comercio tradicional gallego.
            </p>
            <p>
              Durante años funcionó bien. Pero en los últimos cinco, tres grandes superficies
              abrieron en un radio de 500 metros: un supermercado mediano, un discount y una
              cadena de proximidad. La competencia en precio se volvió imposible y los márgenes
              se fueron desgastando. La facturación caía un 5-8 % al año de manera sostenida y
              cada vez costaba más pagar las nóminas de las dos dependientas a tiempo completo.
            </p>
            <p>
              &quot;Esto es una cuesta abajo. No sabemos si cerrar ahora o aguantar un año más&quot;.
              Eso me dijeron en la primera reunión. Estaban agotados. Pero había algo que no
              habían valorado: el negocio aún tenía activos muy valiosos — simplemente los
              estaban usando para competir donde no podían ganar.
            </p>

            {/* ── Diagnóstico visual ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">Radiografía del comercio — Antes de la consultoría</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facturación mensual</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">~22.000 €</p>
                  <p className="mt-1 text-sm text-gray-500">Caída sostenida 5 años</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Margen bruto medio</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">18 %</p>
                  <p className="mt-1 text-sm text-gray-500">Muy por debajo del sector</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ticket medio</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">7,40 €</p>
                  <p className="mt-1 text-sm text-gray-500">Compras muy pequeñas y puntuales</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Referencias en tienda</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">2.400</p>
                  <p className="mt-1 text-sm text-gray-500">Mucho stock, mucha merma</p>
                </div>
              </div>
            </div>

            <h2>Lo que encontramos: una tienda que intentaba ser &quot;el supermercado pequeño&quot;</h2>
            <p>
              El análisis con el{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Método Rentabilismo
              </a>{" "}
              reveló el problema de fondo en media hora: la tienda estaba intentando competir con
              los supermercados en el terreno donde los supermercados ganan siempre — precio y
              variedad. Y eso era una guerra perdida antes de empezar.
            </p>

            <ul>
              <li>
                <strong>Surtido muy amplio y poco diferenciado.</strong> 2.400 referencias en una
                tienda de 80 m². La mayoría de productos eran marcas nacionales también
                disponibles — más baratas — en los supermercados cercanos.
              </li>
              <li>
                <strong>Precios imposibles de igualar.</strong> Al comprar en volúmenes pequeños
                y sin poder de negociación, los precios de coste ya eran más altos que el PVP de
                los supermercados en muchas categorías.
              </li>
              <li>
                <strong>Frescos con mucha merma.</strong> Fruta, verdura y panadería se compraban
                sin ajuste al consumo real. Cada semana se tiraba entre un 15 % y un 20 % de
                producto fresco.
              </li>
              <li>
                <strong>Activos infrautilizados.</strong> Los dueños conocían a todos los
                clientes por su nombre. Sabían qué compraba cada vecino y cuándo. Hacían
                pedidos a medida por encargo. Pero nada de esto se monetizaba — se daba gratis.
              </li>
              <li>
                <strong>Cero producto diferencial.</strong> No había productos locales
                artesanos, ni alimentación ecológica, ni producto gallego de calidad, ni nada
                que hiciera único el surtido. Era una versión reducida y más cara del
                supermercado.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                La pregunta clave: ¿por qué un cliente del barrio iría a comprar a esta tienda
                en lugar de al supermercado de al lado? Si la respuesta es &quot;porque conocen a los
                dueños y está más cerca&quot;, no hay modelo de negocio — hay afecto. Y el afecto
                no paga facturas.
              </p>
            </div>

            {/* ── Las acciones ── */}
            <h2>Qué cambiamos: las 5 palancas que redefinieron la tienda</h2>

            {/* Acción 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Reposicionamiento: dejar de competir con el supermercado</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                La primera decisión fue estratégica: no competir en precio ni en variedad. La
                tienda se reposicionó como una tienda de alimentación de calidad, con acento en
                producto local gallego, frescos seleccionados y servicio personal. Se asumió que
                parte de la clientela &quot;de compra grande&quot; se iba a perder — y no pasaba
                nada.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Relacionado:{" "}
                <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
                  Cómo diferenciarte cuando todos venden lo mismo
                </a>.
              </p>
            </div>

            {/* Acción 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Reducción drástica del surtido — de 2.400 a 1.100 referencias</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Eliminamos más de la mitad de las referencias: productos de marca blanca que no
                podían competir con los supermercados, categorías de rotación muy baja y todo lo
                que generaba stock sin venta. Con ese espacio liberado, se incorporaron tres
                bloques nuevos: producto local gallego, ecológico seleccionado y frescos de
                proximidad.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                El resultado fue menos estantería llena, mejor presentada y con productos que
                la competencia cercana no tenía.
              </p>
            </div>

            {/* Acción 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Acuerdos directos con productores locales gallegos</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Firmamos acuerdos con una docena de productores locales de la provincia: quesería
                artesana, panadería de leña, huevos camperos, mermeladas caseras, conservas de
                pescado, miel local. Producto con historia, con origen y con margen — entre un
                35 % y un 45 %, muy por encima del producto industrial.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Y algo igual de importante: estos productos eran exclusivos. Los supermercados
                del barrio no los tenían. Eso dio a la tienda argumentos reales para atraer
                clientela.
              </p>
            </div>

            {/* Acción 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Monetización del servicio personal</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Lo que antes era un servicio gratuito — pedidos a medida, reserva de productos
                especiales, reparto a domicilio para clientes mayores del barrio — se
                estructuró y se convirtió en parte del valor diferencial:
              </p>
              <ul className="mt-2 text-base text-gray-700">
                <li>Servicio de pedidos por WhatsApp con entrega al día siguiente en el barrio.</li>
                <li>Cesta semanal de frescos bajo suscripción (5 personas al mes al principio, 28 a los 6 meses).</li>
                <li>Encargos personalizados para celebraciones (tablas de queso, cestas regalo, productos por temporada).</li>
              </ul>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                No se cobró por ninguno de estos servicios de manera directa, pero todos
                aumentaron el ticket medio y la frecuencia de compra.
              </p>
            </div>

            {/* Acción 5 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-gray-900">Control de stock y merma en frescos</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Los pedidos de frescos pasaron a ajustarse al consumo real de la semana anterior.
                Se creó un sistema sencillo de registro diario de ventas por categoría y de
                merma. Sin software complicado — hoja de cálculo semanal y 10 minutos de
                revisión al día.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                La merma en frescos bajó del 18 % al 6 % en tres meses. Solo ese cambio supuso
                una recuperación de unos 450 € mensuales que antes iban directamente a la
                basura.
              </p>
            </div>

            {/* ── Resultados — Before/After visual ── */}
            <h2>Los resultados: la misma tienda, otro negocio</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">Antes</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación mensual</span>
                      <span className="text-sm font-bold text-gray-900">22.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Margen bruto</span>
                      <span className="text-sm font-bold text-red-600">18 %</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Ticket medio</span>
                      <span className="text-sm font-bold text-gray-900">7,40 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Referencias</span>
                      <span className="text-sm font-bold text-gray-900">2.400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Merma frescos</span>
                      <span className="text-sm font-bold text-red-600">18 %</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Después (8 meses)</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación mensual</span>
                      <span className="text-sm font-bold text-gray-900">24.500 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Margen bruto</span>
                      <span className="text-sm font-bold text-emerald-700">28 %</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Ticket medio</span>
                      <span className="text-sm font-bold text-emerald-700">11,80 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Referencias</span>
                      <span className="text-sm font-bold text-gray-900">1.100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Merma frescos</span>
                      <span className="text-sm font-bold text-emerald-700">6 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Ligera subida de facturación, pero el margen bruto casi se dobló — y el ticket
                medio subió un 60 %. Ese es el efecto real de pasar de vender volumen a vender
                valor.
              </p>
            </div>

            <p>
              Algo igual de importante: la clientela cambió. Se perdió una parte de la compra
              grande, sí — pero llegó un perfil nuevo de cliente que buscaba producto local de
              calidad, que no encontraba en los supermercados. Gente que hacía un desplazamiento
              consciente al barrio porque la tienda ofrecía algo que antes no ofrecía: una
              propuesta diferencial.
            </p>

            {/* ── Lecciones ── */}
            <h2>Las lecciones que aplican a cualquier comercio local</h2>
            <p>
              Este caso se puede replicar en muchas tiendas de barrio, comercios de alimentación,
              ferreterías, papelerías, librerías o negocios de retail tradicional en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>. El patrón es muy claro:
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                "Intentar competir con la gran distribución en su terreno — precio y variedad — es una guerra perdida.",
                "El comercio local gana cuando deja de imitar al supermercado y construye una propuesta propia.",
                "Reducir surtido casi siempre mejora el margen: menos referencias, menos stock, menos merma, mejor presentación.",
                "Los activos del comercio tradicional — conocimiento del cliente, servicio personal, relación con el barrio — se pueden monetizar.",
                "El producto local, artesano, diferencial y de calidad es donde el comercio pequeño tiene ventaja real frente a la gran superficie.",
              ].map((lesson, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Si tienes un comercio pequeño y sientes la presión de la gran distribución, lee{" "}
                <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">
                  cómo definir la estrategia de tu negocio
                </a>. Y si quieres entender cómo dejar de competir por precio:{" "}
                <a href="/blog/como-vender-mas-sin-bajar-precios" className="text-accent-600 underline hover:text-accent-700">
                  cómo vender más sin bajar precios
                </a>.
              </p>
            </div>

            <h2>¿Por qué funciona la consultoría en comercio local?</h2>
            <p>
              Porque el comercio tradicional tiene activos únicos que no se están explotando:
              cercanía, conocimiento del cliente, historia, capacidad de ofrecer un trato humano
              que la gran distribución no puede dar. El problema no es que el comercio pequeño
              no tenga futuro — es que muchas tiendas intentan tener el futuro de los
              supermercados, que no es el suyo.
            </p>
            <p>
              Como{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en A Coruña
              </a>, llevo años trabajando con comercios locales en la provincia: tiendas de
              alimentación, ferreterías, librerías, mercerías, fruterías, comercios de barrio de
              toda la vida. El punto de partida suele ser un negocio en caída — y el punto de
              llegada, si se toman las decisiones adecuadas, suele ser un negocio rentable y con
              identidad propia que el cliente reconoce y valora.
            </p>
            <p>
              Eso es lo que hago en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>: ayudarte a encontrar el terreno donde tu negocio puede ganar — y construir
              desde ahí una propuesta sólida. Sin humo, sin inversiones imposibles. Con método,
              foco y las decisiones correctas.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="caso-exito-tienda-barrio-rentabilidad" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu comercio local lucha contra la gran distribución?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La mayoría de comercios de barrio tienen activos que no están usando. Si la
            facturación baja y los márgenes se estrechan, no es el fin — es el momento de
            replantear el modelo. El diagnóstico inicial es gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-tienda-barrio-rentabilidad" />
    </>
  );
}
