import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Caso de éxito: un restaurante que llenaba cada fin de semana y perdía dinero | Consultoría Método",
  description:
    "Caso real de un restaurante en Galicia que facturaba bien pero no ganaba dinero. Escandallos, carta, turnos y proveedores: qué encontramos y qué cambiamos. Consultor de hostelería en A Coruña.",
  keywords: [
    "caso éxito restaurante",
    "rentabilidad restaurante",
    "consultor hostelería Galicia",
    "escandallos restaurante",
    "mejorar márgenes restaurante",
    "consultor restaurantes A Coruña",
    "food cost hostelería",
    "consultoría empresarial hostelería",
  ],
  openGraph: {
    title: "Caso de éxito: un restaurante que llenaba cada fin de semana y perdía dinero",
    description:
      "Caso real de un restaurante en Galicia que facturaba bien pero no ganaba dinero. Qué encontramos y qué cambiamos para que empezara a ser rentable.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/caso-exito-restaurante-rentabilidad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Caso de éxito: un restaurante que llenaba cada fin de semana y perdía dinero",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-04",
};

export default function ArticuloCasoExitoRestaurante() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Caso de éxito — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Un restaurante que llenaba cada fin de semana y perdía dinero: qué encontramos y qué cambiamos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            El local lleno, la cocina a tope, los fines de semana sin mesa libre. Y cada mes, al mirar
            las cuentas, la misma sensación: &quot;¿Dónde está el dinero?&quot;. Este es el caso real de un
            restaurante en Galicia que facturaba más de 10.000 € al mes y no conseguía ganar dinero.
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

            <h2>La situación de partida: mucho movimiento, poco beneficio</h2>
            <p>
              El restaurante llevaba varios años abierto en una localidad cercana a A Coruña. Tenía clientela
              fiel, buena reputación y una carta amplia. Los fines de semana llenaba y entre semana mantenía
              un ritmo aceptable con menús del día y algún evento.
            </p>
            <p>
              Desde fuera, todo parecía funcionar. Pero el dueño me contactó porque llevaba meses con la
              misma frustración: facturaba más de 10.000 € al mes y a final de mes no quedaba nada. Pagaba
              proveedores, nóminas, alquiler, suministros… y la cuenta quedaba a cero o en negativo.
            </p>
            <p>
              &quot;Trabajo más que nadie en este negocio y no me llevo nada a casa&quot;. Esa fue la frase
              que me dijo en la primera llamada. Una frase que, por desgracia, escucho con mucha frecuencia
              en{" "}
              <a href="/experiencia-sectores-casos" className="text-accent-600 underline hover:text-accent-700">
                mi trabajo como consultor de negocios
              </a>.
            </p>

            <h2>Lo primero: entender los números de verdad</h2>
            <p>
              En la primera sesión de diagnóstico hicimos algo que no se había hecho nunca en ese restaurante:
              poner todos los números encima de la mesa. No los del contable — los números reales del negocio.
            </p>
            <p>
              Y lo que encontramos fue lo que encuentro en muchos restaurantes y bares cuando hago este
              ejercicio:
            </p>
            <ul>
              <li><strong>No había escandallos.</strong> Ningún plato de la carta tenía calculado su coste real. Se compraba &quot;a ojo&quot; y se ponían precios mirando lo que cobraban otros restaurantes de la zona.</li>
              <li><strong>El food cost estaba por encima del 40 %.</strong> En hostelería, un food cost saludable está entre el 28 % y el 35 % dependiendo del tipo de establecimiento. Este restaurante estaba en un 42 %.</li>
              <li><strong>La carta tenía 52 platos.</strong> Demasiados. Más platos significan más stock, más merma, más complejidad en cocina y más desperdicio. Y muchos de esos platos apenas se pedían.</li>
              <li><strong>Los menús del día perdían dinero.</strong> El menú entre semana estaba a 12 €, incluida bebida y postre. Cuando calculamos el coste real — comida, personal de cocina asignado, consumo de suministros — el margen era negativo en la mayoría de días.</li>
              <li><strong>No se controlaba la merma.</strong> Producto que se compraba, no se usaba y acababa en la basura. Sin registro, sin cuantificación, sin acción correctiva.</li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Dato clave: de los 52 platos de la carta, solo 14 concentraban el 80 % de los pedidos.
                Los otros 38 generaban complejidad, coste y merma — pero prácticamente no se vendían.
              </p>
            </div>

            <h2>El problema no era la facturación — era la estructura de costes</h2>
            <p>
              Este es el error más habitual en hostelería: confundir facturación con beneficio. El restaurante
              facturaba bien. El problema era que cada euro que entraba se iba en costes que nadie controlaba.
            </p>
            <p>
              Si quieres profundizar en este concepto, tengo un artículo completo sobre{" "}
              <a href="/blog/como-mejorar-rentabilidad-restaurante-bar" className="text-accent-600 underline hover:text-accent-700">
                cómo mejorar la rentabilidad de un restaurante o bar
              </a>{" "}
              donde explico cada palanca con detalle. Aquí voy a centrarme en lo que hicimos en este caso concreto.
            </p>

            <h2>Qué cambiamos: las 5 acciones que dieron la vuelta al negocio</h2>

            <h3>1. Escandallar cada plato de la carta</h3>
            <p>
              Lo primero fue calcular el coste real de cada plato: ingredientes, cantidades exactas, coste
              por ración. Parece básico, pero la inmensa mayoría de restaurantes que he analizado no lo
              tienen hecho. Y sin escandallos no puedes saber si un plato te da dinero o te lo quita.
            </p>
            <p>
              El resultado fue revelador. Había platos estrella — los que más se pedían — que tenían un
              margen razonable. Pero había otros con márgenes ridículos o directamente negativos. El
              chuletón, por ejemplo, era uno de los más pedidos y uno de los que menos margen dejaba.
            </p>

            <h3>2. Reducir la carta de 52 a 24 platos</h3>
            <p>
              Eliminamos los platos que nadie pedía, los que tenían margen negativo y los que complicaban
              la operativa de cocina sin justificación. Nos quedamos con 24 platos: los que los clientes
              realmente querían y los que al negocio le interesaba vender.
            </p>
            <p>
              Esto redujo el stock necesario, la merma, el tiempo de preparación y la complejidad logística.
              Menos referencias, más control. Y el cliente no notó la diferencia — porque seguían estando
              los platos que realmente pedía.
            </p>

            <h3>3. Rediseñar el menú del día</h3>
            <p>
              El menú del día a 12 € con bebida y postre era una trampa de costes. No lo eliminamos —
              porque era un motor de tráfico entre semana — pero lo rediseñamos:
            </p>
            <ul>
              <li>Subimos el precio a 14 € (bebida y café incluidos, postre opcional a 2 €).</li>
              <li>Diseñamos los platos del menú con escandallos específicos, usando producto de temporada y aprovechando compras de volumen.</li>
              <li>Controlamos las raciones para que fueran generosas pero no excesivas.</li>
            </ul>
            <p>
              El resultado: el menú pasó de dar pérdidas a generar un margen neto del 18 %. Y no se perdió
              ni un solo cliente por la subida de 2 €.
            </p>

            <h3>4. Renegociar proveedores y consolidar compras</h3>
            <p>
              El restaurante compraba a 6 proveedores distintos sin negociar condiciones. Consolidamos
              las compras en 3 proveedores principales, negociamos precios por volumen y establecimos
              un calendario de pedidos para evitar compras de urgencia — que siempre son más caras.
            </p>
            <p>
              Solo con esto conseguimos una reducción del 8 % en el coste de materias primas. En un
              restaurante que compra 4.000–5.000 € al mes en producto, eso son 300–400 € mensuales
              directos al beneficio.
            </p>

            <h3>5. Reorganizar turnos y funciones en cocina</h3>
            <p>
              Había dos cocineros a jornada completa más el dueño, que también cocinaba. Los turnos
              estaban mal organizados: los tres coincidían en las horas de menos trabajo y faltaban
              manos en los picos de demanda. Rediseñamos los turnos para cubrir los momentos clave
              y liberamos al dueño de cocina dos días a la semana para que pudiera dedicarse a
              gestionar el negocio.
            </p>
            <p>
              Porque ese era otro problema silencioso: el dueño pasaba 12 horas diarias en cocina y
              no tenía tiempo para dirigir. No miraba números, no negociaba con proveedores, no
              pensaba en estrategia. Estaba atrapado en la operativa.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Para entender por qué esto es tan importante, lee{" "}
                <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                  qué números debe controlar cualquier empresa
                </a>. Sin datos, no hay decisiones. Sin decisiones, no hay mejora.
              </p>
            </div>

            <h2>Los resultados: de sobrevivir a ganar dinero</h2>
            <p>
              En 3 meses, el restaurante pasó de facturar 10.000 € al mes a facturar 15.000 €. Un
              incremento del 50 %. Pero lo más importante no fue la facturación — fue el margen.
            </p>
            <p>
              Antes de la consultoría, el margen neto era prácticamente cero (o negativo algunos meses).
              Después de aplicar los cambios:
            </p>
            <ul>
              <li><strong>Food cost:</strong> bajó del 42 % al 31 %.</li>
              <li><strong>Merma:</strong> se redujo un 60 % al tener menos referencias y mejor control.</li>
              <li><strong>Ticket medio:</strong> subió de 16 € a 19 € gracias a una carta mejor diseñada.</li>
              <li><strong>Margen neto:</strong> pasó a un 12–15 % mensual estable.</li>
              <li><strong>Facturación:</strong> de 10.000 € a 15.000 € al mes con la misma estructura.</li>
            </ul>
            <p>
              Y lo que no se mide en números: el dueño dejó de estar 12 horas en cocina, empezó a
              dedicar tiempo a gestionar su negocio y, por primera vez en años, sentía que el
              restaurante trabajaba para él y no al revés.
            </p>

            <h2>Las lecciones que aplican a cualquier negocio de hostelería</h2>
            <p>
              Este caso no es excepcional. De hecho, es el patrón más habitual que encuentro cuando
              trabajo con restaurantes, bares y negocios de hostelería en Galicia. Los problemas se
              repiten una y otra vez:
            </p>
            <ul>
              <li>Cartas demasiado amplias que generan complejidad y merma.</li>
              <li>Precios puestos sin escandallar — copiando a la competencia o &quot;a ojo&quot;.</li>
              <li>Menús del día que parecen un buen gancho pero pierden dinero.</li>
              <li>Proveedores sin negociar porque &quot;siempre se compró aquí&quot;.</li>
              <li>El dueño atrapado en la operativa, sin tiempo para dirigir.</li>
            </ul>
            <p>
              Si te reconoces en alguno de estos puntos, no es un problema de esfuerzo. Es un problema
              de método. Y tiene solución — normalmente más rápida de lo que imaginas.
            </p>
            <p>
              Te recomiendo leer también{" "}
              <a href="/blog/como-saber-si-mi-negocio-es-rentable" className="text-accent-600 underline hover:text-accent-700">
                cómo saber si tu negocio es rentable de verdad
              </a>. Es el primer paso para dejar de trabajar a ciegas.
            </p>

            <h2>¿Por qué funciona la consultoría en hostelería?</h2>
            <p>
              Porque el sector tiene palancas de mejora muy claras y medibles. No es un negocio
              donde los cambios tardan años en verse. En hostelería, cuando ajustas escandallos,
              carta y costes, los resultados aparecen en semanas — no en meses.
            </p>
            <p>
              Como <strong>consultor de empresas en A Coruña</strong>, llevo años trabajando con
              restaurantes, bares, cafeterías y negocios de hostelería en Galicia. Y lo que más
              me sorprende siempre es la cantidad de margen que se pierde por no hacer cosas que
              son, en el fondo, sencillas. No requieren inversión. No requieren obras. Solo
              requieren poner los números encima de la mesa y tomar decisiones con criterio.
            </p>
            <p>
              Eso es exactamente lo que hago en{" "}
              <a href="/metodo-herramientas" className="text-accent-600 underline hover:text-accent-700">
                Consultoría Método
              </a>: sentarme contigo, analizar la realidad de tu negocio y ayudarte a decidir
              qué cambiar para que funcione mejor. Sin humo, sin teoría, sin PowerPoints.
              Acciones concretas y resultados medibles.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="caso-exito-restaurante-rentabilidad" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu restaurante factura pero no gana lo que debería?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La mayoría de restaurantes pierden entre un 10 % y un 20 % de margen por cosas
            que se pueden corregir en semanas. Si quieres saber dónde está el dinero que se
            te escapa, hablemos. El diagnóstico inicial es gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-restaurante-rentabilidad" />
    </>
  );
}
