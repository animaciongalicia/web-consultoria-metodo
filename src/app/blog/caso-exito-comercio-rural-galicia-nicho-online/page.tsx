import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: un comercio rural en Galicia que encontró su nicho online | Consultoría Método",
  description:
    "Caso real de una tienda de productos artesanales en la Galicia rural que paso de depender al 100 % de ventas presenciales a generar el 45 % de sus ingresos online. Diagnostico, estrategia digital y resultados en 12 meses.",
  keywords: [
    "caso éxito comercio rural",
    "digitalizar negocio rural Galicia",
    "tienda online productos gallegos",
    "vender productos artesanales online",
    "comercio rural venta online",
    "consultor negocios Galicia",
    "nicho online productos gallegos",
    "emprender Galicia rural",
    "consultoría digital pymes",
    "Google My Business comercio rural",
  ],
  openGraph: {
    title: "Caso de éxito: un comercio rural en Galicia que encontró su nicho online",
    description:
      "Una tienda de productos artesanales en la Galicia interior que paso de 3.200 a 5.800 euros al mes gracias a una estrategia digital sencilla y bien enfocada.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-comercio-rural-galicia-nicho-online" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: un comercio rural en Galicia que encontró su nicho online",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-23",
};

export default function CasoExitoComercioRuralGalicia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Caso de éxito — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Un comercio rural en Galicia que encontro su nicho online
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Una tienda de productos artesanales en el interior de Galicia, con clientela menguante
            y cero presencia digital. En 12 meses paso de facturar 3.200 euros al mes a 5.800,
            con el 45 % de las ventas llegando desde internet. Esta es la historia de como lo hicimos.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y online en toda España
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            {/* ── Contexto ── */}
            <h2>El punto de partida: un buen producto sin futuro visible</h2>
            <p>
              El negocio era una tienda familiar en una localidad del interior de Galicia
              — una zona donde la poblacion lleva decadas bajando. Vendian productos
              artesanales gallegos: conservas, miel, quesos, embutidos, licores y mermeladas
              de productores locales. Todo de calidad. Todo con historia detras.
            </p>
            <p>
              El problema no era el producto. El problema era el modelo. La tienda dependia
              al 100 % de los clientes que pasaban por la puerta. Y cada año habia menos
              gente en el pueblo. Los jovenes se iban, la poblacion envejecida compraba
              menos y los turistas — que pasaban en verano — no bastaban para sostener el
              negocio todo el año.
            </p>
            <p>
              Cuando la propietaria me contacto, la facturacion llevaba tres años bajando.
              Estaba valorando cerrar. &quot;No se si tiene sentido seguir abierta para
              cuatro clientes al dia&quot;. Eso fue lo que me dijo en la primera llamada.
            </p>

            {/* ── Diagnóstico grid ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">Diagnostico inicial — Lo que encontramos</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facturacion mensual</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">3.200 €</p>
                  <p className="mt-1 text-sm text-gray-500">En descenso constante desde 2023</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ventas online</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">0 %</p>
                  <p className="mt-1 text-sm text-gray-500">Sin web, sin redes activas, sin ficha Google</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Margen bruto</p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">22 %</p>
                  <p className="mt-1 text-sm text-gray-500">Precios bajos, sin valor añadido percibido</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Clientes diarios</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">4-6</p>
                  <p className="mt-1 text-sm text-gray-500">Mayoritariamente vecinos del pueblo</p>
                </div>
              </div>
            </div>

            <p>
              El diagnostico fue claro: habia un producto excelente, una propietaria con
              conocimiento profundo de lo que vendia y una historia autentica detras de cada
              productor. Pero todo eso era invisible para cualquiera que no viviera a 5 km
              de la tienda. El negocio estaba atrapado en un mercado local que se encogia
              año tras año.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                El error mas comun en comercios rurales no es tener mal producto — es
                pensar que el unico mercado posible es el que pasa por la puerta. Internet
                cambia esa ecuacion por completo, pero solo si se enfoca bien.
              </p>
            </div>

            {/* ── Acciones — numbered steps with border-l-4 ── */}
            <h2>Que hicimos: la estrategia paso a paso</h2>
            <p>
              No era un caso para hacer una inversion gigante en tecnologia. El presupuesto
              era limitado y la propietaria no tenia experiencia digital. Necesitabamos algo
              sencillo, enfocado y que generara resultados rapidos para mantener la motivacion.
              Esto fue lo que{" "}
              <a href="/blog/como-digitalizar-tu-negocio-pequeno" className="text-accent-600 underline hover:text-accent-700">
                diseñamos como plan de digitalizacion
              </a>:
            </p>

            {/* Paso 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Encontrar el nicho: &quot;cajas regalo gourmet gallegas&quot;</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                En lugar de intentar competir como &quot;tienda online de productos gallegos&quot;
                — un mercado saturado donde grandes distribuidores ya dominan — identificamos
                un nicho especifico con demanda real y poca competencia:{" "}
                <strong>cajas regalo de productos artesanales gallegos</strong>. Lotes
                tematicos (quesos, conservas, dulces tipicos) pensados para regalo, con
                packaging cuidado y una historia detras de cada productor.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                La investigacion de palabras clave confirmo que habia busquedas mensuales
                significativas para terminos como &quot;cesta regalo productos gallegos&quot;,
                &quot;lote gourmet Galicia&quot; y &quot;regalos tipicos Galicia&quot; — y la
                competencia directa en esas busquedas era baja.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Crear una tienda online sencilla y enfocada</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Montamos una tienda online basica con un coste inferior a 30 euros al mes.
                Sin diseño personalizado caro, sin funcionalidades innecesarias. Solo lo
                esencial: catalogo de cajas regalo con buenas fotos, descripciones que contaban
                la historia de cada producto, pasarela de pago segura y envio a toda España.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Empezamos con 6 cajas regalo distintas — suficiente para probar el mercado sin
                complicar la logistica. La propietaria aprendio a gestionar pedidos y
                envios en dos tardes de formacion.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Google My Business y visibilidad local-turistica</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Creamos y optimizamos la ficha de Google My Business con fotos profesionales
                del local y los productos, horarios actualizados, descripcion orientada al
                turista (&quot;tienda de productos artesanales gallegos, ideal para llevarte
                un recuerdo autentico&quot;) y pedimos reseñas a los clientes habituales.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                En pocas semanas, la tienda empezo a aparecer en busquedas de Google Maps
                cuando turistas buscaban &quot;productos tipicos&quot; o &quot;tienda gourmet&quot;
                cerca de la zona. El trafico de visitantes ocasionales — turistas de paso,
                gente de casas rurales cercanas — empezo a subir de forma notable.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Alianzas con casas rurales y turismo de la zona</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Contactamos con 12 casas rurales y alojamientos turisticos de la comarca.
                La propuesta era simple: incluir un folleto de la tienda en cada alojamiento
                y ofrecer un descuento del 10 % a sus huespedes. A cambio, la tienda
                recomendaba esos alojamientos a sus clientes online.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                8 de las 12 casas rurales aceptaron. Ademas, 3 de ellas empezaron a ofrecer
                las cajas regalo como &quot;detalle de bienvenida&quot; para sus huespedes,
                convirtiendose en un canal de venta recurrente que la tienda ni se habia
                planteado.
              </p>
            </div>

            {/* Paso 5 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-gray-900">Ajustar precios y margenes del canal online</h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Las cajas regalo online se vendian a precios significativamente mas altos
                que los productos sueltos en tienda, porque el cliente online paga por la
                experiencia, la seleccion, el packaging y la comodidad del envio. Una caja
                de 6 productos que en tienda se venderian por 28 euros sueltos, se vendia
                online a 42-48 euros como lote regalo — y el cliente lo percibia como un
                precio justo.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Esto elevo el margen bruto del canal online al 40-45 %, muy por encima del
                22 % que dejaba la venta en tienda. El margen medio ponderado del negocio
                subio del 22 % al 35 % a medida que crecian las ventas online.
              </p>
            </div>

            {/* ── Resultados — Before/After ── */}
            <h2>Los resultados: 12 meses despues</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                {/* ANTES */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">Antes</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturacion mensual</span>
                      <span className="text-sm font-bold text-gray-900">3.200 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Ventas online</span>
                      <span className="text-sm font-bold text-red-600">0 %</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Pedidos online / mes</span>
                      <span className="text-sm font-bold text-red-600">0</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Margen bruto</span>
                      <span className="text-sm font-bold text-red-600">22 %</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Presencia digital</span>
                      <span className="text-sm font-bold text-red-600">Ninguna</span>
                    </div>
                  </div>
                </div>
                {/* DESPUÉS */}
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Despues (12 meses)</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturacion mensual</span>
                      <span className="text-sm font-bold text-gray-900">5.800 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Ventas online</span>
                      <span className="text-sm font-bold text-emerald-700">45 %</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Pedidos online / mes</span>
                      <span className="text-sm font-bold text-emerald-700">180</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Margen bruto</span>
                      <span className="text-sm font-bold text-emerald-700">35 %</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Presencia digital</span>
                      <span className="text-sm font-bold text-emerald-700">Web + GMB + alianzas</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Incremento del 81 % en facturacion y del 59 % en margen bruto — con una
                inversion inicial inferior a 2.000 euros y un coste mensual de menos de
                80 euros en herramientas digitales.
              </p>
            </div>

            <p>
              Pero los numeros no cuentan toda la historia. Lo mas importante fue el cambio
              de perspectiva de la propietaria. Paso de pensar en cerrar a tener un negocio
              con futuro. Un negocio que ya no dependia exclusivamente de que alguien
              entrara por la puerta. Un negocio con dos canales de venta complementarios y
              un margen que por fin justificaba el esfuerzo.
            </p>

            {/* ── Lecciones aprendidas ── */}
            <h2>Lecciones de este caso que aplican a cualquier comercio rural</h2>

            <div className="not-prose my-8 space-y-3">
              {[
                "No necesitas vender de todo online — necesitas encontrar tu nicho. Un enfoque estrecho y bien definido funciona mejor que intentar ser un supermercado digital.",
                "El producto artesanal tiene una ventaja natural online: la autenticidad. Los grandes no pueden copiar la historia de tu productor local ni la tradicion detras de cada pieza.",
                "Google My Business es gratis y puede ser el canal mas rentable para un comercio fisico que tambien quiere captar turistas y visitantes ocasionales.",
                "Las alianzas locales (casas rurales, restaurantes, turismo) son un canal de venta que no cuesta dinero y genera confianza inmediata.",
                "El canal online permite margenes mas altos porque el cliente valora la comodidad, la seleccion y la experiencia de regalo — no compara producto a producto como en una tienda fisica.",
                "La digitalizacion no tiene que ser cara ni complicada. Con menos de 2.000 euros de inversion inicial se puede montar un sistema que funcione.",
                "El mayor obstaculo no es la tecnologia — es el miedo a cambiar. La propietaria temia que vender online fuera complicado, caro e inmanejable. No lo fue.",
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
                Si tienes un negocio fisico y estas pensando en dar el salto al online, lee{" "}
                <a href="/blog/como-digitalizar-tu-negocio-pequeno" className="text-accent-600 underline hover:text-accent-700">
                  como digitalizar tu negocio pequeño paso a paso
                </a>. Y si estas valorando emprender en Galicia, repasa{" "}
                <a href="/blog/emprender-galicia-errores" className="text-accent-600 underline hover:text-accent-700">
                  los errores mas comunes al emprender en Galicia
                </a>{" "}
                para no repetirlos.
              </p>
            </div>

            <h2>¿Tu negocio esta en una situacion parecida?</h2>
            <p>
              Muchos comercios en la Galicia rural — y en toda España — tienen un producto
              excelente pero un modelo de negocio que se agota. La poblacion baja, los
              habitos cambian y depender solo del trafico presencial es cada vez mas
              arriesgado.
            </p>
            <p>
              La buena noticia es que no hace falta reinventar el negocio. A veces basta
              con abrir un segundo canal, encontrar el nicho adecuado y ejecutar con
              cabeza. En este caso, la diferencia entre cerrar y facturar casi el doble
              fue una estrategia clara y 12 meses de trabajo constante.
            </p>
            <p>
              Eso es exactamente lo que hacemos en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Consultoria Metodo
              </a>: analizar tu situacion, encontrar las palancas de mejora y ayudarte a
              ejecutar un plan concreto. Sin humo, sin inversion desproporcionada, sin
              promesas irreales. Solo trabajo con metodo y resultados medibles.
            </p>

            {/* ── CTA ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Tienes un buen producto pero tu negocio no llega a donde deberia?
              </p>
              <p className="mt-2 text-gray-600">
                En el diagnostico gratuito analizamos juntos tu situacion, tu mercado y tus
                opciones reales de crecimiento. Sin compromiso, sin coste.
              </p>
              <a href="/diagnostico-negocio" className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600">
                Solicita tu diagnostico gratuito
              </a>
            </div>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="caso-exito-comercio-rural-galicia-nicho-online" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultoría sectorial */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            ¿Tienes una tienda, comercio o negocio de retail?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en comercio y retail: márgenes, diferenciación, captación de clientes y organización.
          </p>
          <a
            href="/consultoria-comercio-retail"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para comercio y retail →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-comercio-rural-galicia-nicho-online" />
    </>
  );
}
