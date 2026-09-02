import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo fijar precios en tu negocio sin perder clientes ni margen | Consultoría Método",
  description:
    "Aprende cómo poner precios a tus productos y servicios con una estrategia de precios rentable. Métodos prácticos de pricing para pymes y pequeñas empresas en España.",
  keywords: [
    "cómo poner precios a mis productos",
    "estrategia de precios pyme",
    "fijar precios negocio",
    "cómo calcular precio de venta",
    "pricing para pequeñas empresas",
    "consultoría precios empresa",
  ],
  openGraph: {
    title: "Cómo fijar precios en tu negocio sin perder clientes ni margen",
    description:
      "Guía práctica para fijar precios que protejan tu margen y atraigan a los clientes correctos. Estrategias de pricing reales para pymes.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-fijar-precios-en-tu-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo fijar precios en tu negocio sin perder clientes ni margen",
  description:
    "Aprende cómo poner precios a tus productos y servicios con una estrategia de precios rentable. Métodos prácticos de pricing para pymes y pequeñas empresas en España.",
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
  datePublished: "2025-03-15",
  dateModified: "2025-03-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-fijar-precios-en-tu-negocio",
  },
};

export default function ArticuloPrecios() {
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
            Cómo fijar precios en tu negocio sin perder clientes ni margen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Si alguna vez has puesto un precio «a ojo», copiando al de enfrente
            o simplemente sumándole un porcentaje al coste, este artículo es
            para ti. Fijar precios mal es la forma más rápida de trabajar mucho
            y ganar poco.
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
            Hay pocas decisiones en un negocio que tengan tanto impacto como el
            precio. Y sin embargo, la mayoría de pymes y autónomos fijan sus
            precios de la peor forma posible: por intuición, por miedo o
            copiando a la competencia. El resultado es siempre el mismo —
            trabajas cada vez más y ganas cada vez menos.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He visto negocios que facturaban bien pero no generaban beneficio.
            He visto empresarios que no se atrevían a subir precios durante
            años por miedo a perder clientes. Y he visto cómo un simple ajuste
            de precios, bien pensado y bien ejecutado, transformaba
            completamente la{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-primary-700 underline hover:text-primary-900"
            >
              rentabilidad de un negocio
            </a>{" "}
            en cuestión de semanas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo vamos a ver los errores más comunes, un método
            práctico para calcular tus precios y las estrategias que realmente
            funcionan en pequeñas y medianas empresas. Sin teoría de manual de
            MBA — solo lo que sirve en el mundo real.
          </p>

          {/* H2 — Errores al fijar precios */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 5 errores más comunes al fijar precios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años trabajando con pymes en{" "}
            <a
              href="/experiencia-sectores-casos"
              className="text-primary-700 underline hover:text-primary-900"
            >
              todo tipo de sectores
            </a>
            , estos son los errores que veo una y otra vez. Si te reconoces en
            alguno, no te preocupes — le pasa a casi todo el mundo. Lo
            importante es corregirlo.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Fijar precios solo por el coste
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            «Me cuesta 10, le sumo un 30% y lo vendo a 13.» Parece lógico,
            pero es un error enorme. Fijar precios exclusivamente por el coste
            ignora algo fundamental: lo que tu cliente está dispuesto a pagar.
            Si tu producto o servicio resuelve un problema importante para el
            cliente, su valor percibido puede ser muy superior a tu coste. Y al
            poner un precio basado solo en el coste, estás dejando dinero sobre
            la mesa.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Además, el enfoque puro de coste tiene otro problema: cuando tus
            costes suben — y siempre suben — no tienes margen de maniobra. Si
            tu precio está justo por encima del coste, cualquier incremento en
            materias primas, energía o transporte se come tu beneficio
            directamente.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Copiar los precios de la competencia
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            «El de al lado cobra 50, así que yo cobro 48.» Otra trampa clásica.
            Tu competidor puede tener una estructura de costes completamente
            diferente a la tuya. Quizá paga menos alquiler, tiene menos
            empleados, compra en mayor volumen o simplemente está perdiendo
            dinero sin saberlo. Copiar su precio es copiar sus problemas.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Competir en precio cuando eres pequeño es una carrera que casi
            siempre pierdes. Siempre habrá alguien dispuesto a cobrar menos.
            La pregunta no es «¿cuánto cobra el otro?» sino «¿cuánto necesito
            cobrar yo para que mi negocio sea rentable y sostenible?»
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Tener miedo a perder clientes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Este es probablemente el error más extendido y más dañino. El miedo
            a perder clientes lleva a mantener precios bajos durante años,
            incluso cuando los costes han subido. El empresario piensa: «Si
            subo, se van a ir.» Pero la realidad suele ser muy distinta.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los clientes que solo te compran por precio son los peores clientes
            que puedes tener. Pagan tarde, exigen mucho, se quejan de todo y se
            irán de todos modos cuando encuentren algo un euro más barato. Los
            clientes que valoran lo que haces — tu experiencia, tu atención, tu
            calidad — no se van por una subida razonable de precios. Se van
            cuando dejas de ofrecerles valor.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;Si nunca has perdido un cliente por precio, tus precios son
            demasiado bajos. Y si los pierdes todos, tu propuesta de valor no
            es suficiente. El punto óptimo está en el medio.&rdquo;
          </blockquote>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. No diferenciar precios entre servicios o productos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Muchos negocios cobran lo mismo por todo. La misma hora, el mismo
            porcentaje, la misma tarifa plana. Pero no todos los servicios
            tienen el mismo valor para el cliente ni el mismo coste para ti. Un
            servicio urgente vale más que uno programado. Un trabajo complejo
            merece más que uno sencillo. Un cliente grande genera más volumen
            pero también más exigencia.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Tener una tarifa única es cómodo, pero te está costando dinero.
            Cada vez que haces un trabajo que requiere más esfuerzo, más
            experiencia o más responsabilidad al mismo precio, estás regalando
            margen.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Ignorar el valor percibido
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El valor percibido es lo que el cliente cree que vale tu producto o
            servicio. Y esa percepción depende de muchos factores: la
            presentación, la marca, la experiencia de compra, las garantías, la
            confianza que transmites. Un fontanero que llega puntual, con ropa
            limpia, da presupuesto por escrito y garantiza su trabajo puede
            cobrar el doble que uno que llega tarde, con la furgoneta sucia y
            cobra en mano sin factura.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            El servicio técnico es el mismo. Pero el valor percibido es
            completamente diferente. Si no trabajas el valor percibido de tu
            oferta, estás condenado a competir solo por precio. Y esa es una
            guerra que solo gana el más grande o el más desesperado.
          </p>

          {/* H2 — Cómo calcular el precio correcto */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo calcular el precio correcto para tus productos o servicios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No existe una fórmula mágica, pero sí un{" "}
            <a
              href="/metodo-herramientas"
              className="text-primary-700 underline hover:text-primary-900"
            >
              método lógico y ordenado
            </a>{" "}
            que funciona para cualquier tipo de negocio. Estos son los cuatro
            pasos que sigo con todos mis clientes cuando trabajamos la
            estrategia de precios.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Paso 1: Conoce tus costes reales (todos)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Y cuando digo todos, me refiero a todos. No solo el coste de
            compra o el material. Incluye el tiempo que dedicas, el coste de
            envío, la parte proporcional de alquiler, suministros, seguros,
            gestoría, software, amortización de equipos. Si tienes empleados,
            su coste real por hora (con seguridad social, vacaciones y
            formación incluidas).
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Muchos empresarios se sorprenden cuando hacen este ejercicio. El
            coste real de producir un producto o prestar un servicio suele ser
            entre un 20% y un 40% más alto de lo que pensaban. Y si no
            conoces tu coste real, es imposible fijar un precio rentable.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Paso 2: Define tu margen objetivo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Una vez que conoces tus costes reales, necesitas decidir cuánto
            quieres ganar. No cuánto «te parece bien» ni cuánto «se lleva en
            el sector», sino cuánto necesitas para que tu negocio sea
            sostenible, para pagarte un sueldo digno, para reinvertir y para
            tener un colchón de seguridad.
          </p>

          {/* Tabla comparativa de márgenes */}
          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tipo de negocio</th>
                  <th className="px-4 py-3 font-semibold">Margen bruto sano</th>
                  <th className="px-4 py-3 font-semibold">Margen neto objetivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">Hostelería</td>
                  <td className="px-4 py-3">65% – 75%</td>
                  <td className="px-4 py-3">8% – 15%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Comercio minorista</td>
                  <td className="px-4 py-3">40% – 60%</td>
                  <td className="px-4 py-3">5% – 12%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Servicios profesionales</td>
                  <td className="px-4 py-3">50% – 70%</td>
                  <td className="px-4 py-3">15% – 30%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Fabricación / producción</td>
                  <td className="px-4 py-3">30% – 50%</td>
                  <td className="px-4 py-3">5% – 10%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">E-commerce</td>
                  <td className="px-4 py-3">40% – 65%</td>
                  <td className="px-4 py-3">8% – 20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si tus márgenes están por debajo de estos rangos, tienes un
            problema de precios, de costes o de ambos. Y si no lo sabes,
            tienes un problema de medición, que es todavía más peligroso.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Paso 3: Entiende el valor percibido de tu cliente
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Aquí es donde la mayoría de los métodos de pricing se quedan
            cortos. No basta con sumar costes y añadir margen. Necesitas
            entender cuánto vale lo que haces para tu cliente. ¿Le ahorras
            tiempo? ¿Le evitas un problema? ¿Le genera más ingresos? ¿Le da
            tranquilidad?
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un asesor fiscal que evita una sanción de 10.000 euros a su cliente
            puede cobrar 200 euros por hora con total legitimidad. Un
            cerrajero que abre la puerta de tu casa a las dos de la mañana
            vale mucho más que lo que cobra un cerrajero a las once de la
            mañana. El contexto cambia el valor. Y tu precio debe reflejar
            ese valor, no solo tus costes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Paso 4: Haz benchmarking inteligente (no copiar)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Sí, hay que mirar lo que cobra la competencia. Pero no para
            copiar, sino para posicionarte. Si tus precios están muy por
            debajo de la media del mercado, probablemente estás dejando dinero
            sobre la mesa. Si están muy por encima, necesitas justificarlo con
            un valor diferencial claro.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            El benchmarking inteligente consiste en entender la franja de
            precios del mercado y decidir conscientemente dónde quieres estar.
            ¿En la parte alta, ofreciendo más valor? ¿En la parte media, con
            un buen equilibrio? La única posición que no recomiendo es la parte
            baja — ahí solo gana el que tiene más volumen y más espalda
            financiera, y ese probablemente no eres tú.
          </p>

          {/* H2 — Estrategias de precios */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Estrategias de precios que funcionan en pymes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Más allá de calcular el precio «correcto», hay estrategias
            concretas que pueden aumentar tus ingresos y tu margen sin
            necesidad de subir precios de forma brusca. Son técnicas probadas
            que las grandes empresas usan desde hace décadas y que funcionan
            igual de bien — o mejor — en negocios pequeños.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Pricing por valor (Value-based pricing)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En lugar de calcular el precio desde los costes, lo calculas desde
            el valor que generas para el cliente. Si eres consultor y ayudas a
            un negocio a ganar 50.000 euros más al año, cobrar 5.000 euros por
            ese servicio no es caro — es una ganga. El cliente paga 5.000 y
            gana 50.000. El retorno es brutal.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Para aplicar pricing por valor, necesitas entender muy bien qué
            resultado obtiene tu cliente con lo que le ofreces. Y eso implica
            hacer preguntas, escuchar y personalizar tu propuesta. No se trata
            de cobrar más por lo mismo, sino de ofrecer resultados medibles y
            cobrar en proporción a esos resultados.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Precios escalonados (Tiered pricing)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En vez de ofrecer una sola opción, ofrece tres: básica, estándar
            y premium. Esto tiene varios efectos poderosos. Primero, le das
            al cliente la sensación de elegir en vez de decidir «sí o no».
            Segundo, el plan intermedio parece más atractivo por contraste con
            el básico y el premium. Tercero, siempre hay un porcentaje de
            clientes que elige lo mejor, así que tu ticket medio sube.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un taller mecánico puede ofrecer revisión básica, revisión
            completa y revisión premium con garantía extendida. Un diseñador
            puede ofrecer logotipo, identidad visual básica y marca completa.
            La clave es que cada nivel tenga un valor percibido claro y
            justifique el incremento de precio.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Anclaje de precios (Price anchoring)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El anclaje funciona así: cuando muestras primero la opción más
            cara, todo lo demás parece más asequible. Si en tu carta el primer
            plato cuesta 28 euros, uno de 18 parece razonable. Si empiezas
            mostrando el de 12, uno de 18 parece caro. El contexto cambia la
            percepción del precio.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Puedes usar anclaje en presupuestos, en la web, en la presentación
            de tus servicios. Siempre muestra primero la opción premium. No
            porque esperes que todos la elijan, sino porque hace que las
            demás opciones parezcan más accesibles por comparación.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Paquetes y bundles
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Agrupar productos o servicios en un paquete con un precio
            conjunto es una de las formas más efectivas de aumentar el ticket
            medio. El cliente siente que obtiene más valor por su dinero, y tú
            vendes más por operación. Un fotógrafo puede ofrecer sesión + 20
            fotos editadas + álbum digital por un precio paquete que, por
            separado, sería un 25% más caro.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            La clave de un buen bundle es que incluya al menos un elemento de
            alto valor percibido y bajo coste real para ti. Ese elemento es
            el que hace que el paquete parezca irresistible sin erosionar tu
            margen.
          </p>

          {/* Cuadro destacado */}
          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Recuerda: estas estrategias no son excluyentes.
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              Puedes combinar pricing por valor con precios escalonados y
              anclaje. De hecho, los negocios más rentables usan varias de
              estas técnicas a la vez. Lo importante es que cada decisión de
              precio sea consciente y esté respaldada por números, no por
              intuición ni por miedo.
            </p>
          </div>

          {/* H2 — Señales de que tus precios están mal */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Señales de que tus precios están mal
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            A veces el problema de precios no es obvio. No ves un cartel rojo
            que diga «tus precios están mal». Pero hay señales que, si sabes
            leerlas, te dicen exactamente eso. Estas son las más habituales.
          </p>

          {/* Cuadro de advertencia */}
          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; Señales de alarma:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Estás siempre ocupado pero no eres rentable — mucho trabajo, poco beneficio.",
                "Ningún cliente se queja nunca del precio — señal de que estás demasiado barato.",
                "Pierdes clientes constantemente por precio a competidores más baratos.",
                "No puedes permitirte contratar a alguien ni tomarte vacaciones.",
                "Tus márgenes se han ido reduciendo año tras año sin que hayas hecho nada.",
                "Aceptas cualquier trabajo porque «algo es algo» aunque no sea rentable.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-amber-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si te reconoces en tres o más de estas señales, necesitas revisar
            tu estrategia de precios con urgencia. Y no me refiero a subirlos
            un 2% — me refiero a sentarte, analizar tus números y replantear
            tu estructura de precios desde cero.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La señal más peligrosa es la segunda: que nadie se queje de tu
            precio. Parece algo positivo, pero no lo es. Significa que estás
            tan por debajo del valor percibido que el cliente ni siquiera
            considera tu precio como un factor de decisión. Y eso quiere
            decir que podrías estar cobrando un 20%, un 30% o hasta un 50%
            más sin perder ni un solo cliente.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;El precio no es lo que el cliente paga. Es lo que percibe
            que recibe a cambio. Si tu servicio vale mucho y cobras poco,
            no eres barato — eres invisible.&rdquo;
          </blockquote>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: cómo un cambio de precios transformó un negocio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace un par de años trabajé con un estudio de diseño gráfico en
            Galicia. Dos socios, cuatro empleados, facturaban alrededor de
            280.000 euros al año. Parecía un negocio sano. Pero cuando
            miramos los números de verdad, el beneficio neto era de apenas
            12.000 euros. Para dos socios que trabajaban 50 horas a la
            semana cada uno, eso suponía ganar menos de 3 euros la hora.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El problema era claro: cobraban por hora. Todos los proyectos se
            presupuestaban con una tarifa de 35 euros la hora, independientemente
            del tipo de trabajo, la complejidad o el tamaño del cliente. Un
            logotipo para una startup y una identidad completa para una empresa
            con 50 empleados se facturaban con la misma tarifa.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo que hicimos fue sencillo pero transformador:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Dejaron de cobrar por hora y empezaron a cobrar por proyecto con precio cerrado.",
              "Crearon tres niveles de servicio: básico, profesional y premium.",
              "Ajustaron precios al valor que generaban para el cliente, no al tiempo que invertían.",
              "Eliminaron clientes que solo querían «lo más barato» y no valoraban la calidad.",
              "Empezaron a decir que no a proyectos que no encajaban con su posicionamiento.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 md:text-lg">
            El resultado, doce meses después: facturaron 310.000 euros (un
            10% más) pero el beneficio neto subió a 68.000 euros. Casi seis
            veces más. Trabajaban menos horas, tenían mejores clientes y, por
            primera vez, los socios podían pagarse un sueldo digno.
          </p>

          {/* Tabla de resultados del caso */}
          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Métrica</th>
                  <th className="px-4 py-3 font-semibold">Antes</th>
                  <th className="px-4 py-3 font-semibold">Después (12 meses)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">Facturación anual</td>
                  <td className="px-4 py-3">280.000 &euro;</td>
                  <td className="px-4 py-3 font-semibold text-green-700">310.000 &euro;</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Beneficio neto</td>
                  <td className="px-4 py-3">12.000 &euro;</td>
                  <td className="px-4 py-3 font-semibold text-green-700">68.000 &euro;</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Margen neto</td>
                  <td className="px-4 py-3">4,3%</td>
                  <td className="px-4 py-3 font-semibold text-green-700">21,9%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Ticket medio por proyecto</td>
                  <td className="px-4 py-3">1.800 &euro;</td>
                  <td className="px-4 py-3 font-semibold text-green-700">4.200 &euro;</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Número de clientes activos</td>
                  <td className="px-4 py-3">155</td>
                  <td className="px-4 py-3">74</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Menos clientes, más beneficio. Parece contradictorio, pero es la
            realidad de muchas pymes. No necesitas más clientes — necesitas{" "}
            <a
              href="/blog/como-conseguir-clientes-para-tu-negocio"
              className="text-primary-700 underline hover:text-primary-900"
            >
              los clientes correctos
            </a>{" "}
            que valoren tu trabajo y estén dispuestos a pagar un precio justo
            por él.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un ejemplo muy claro de lo que ocurre cuando los precios se fijan
            sin haber escandallado bien los costes: el{" "}
            <a
              href="/blog/caso-exito-restaurante-rentabilidad"
              className="text-primary-700 underline hover:text-primary-900"
            >
              caso real de un restaurante que facturaba bien y no ganaba
              dinero
            </a>. Varios platos tenían margen negativo sin que el dueño lo
            supiera. La solución empezó por calcular los costes de verdad y
            ajustar los precios con criterio.
          </p>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: el precio es una decisión estratégica, no un cálculo
            matemático
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si hay algo que quiero que te lleves de este artículo es esto:
            fijar precios no es solo sumar costes y añadir un porcentaje. Es
            una de las decisiones estratégicas más importantes de tu negocio.
            Tus precios comunican quién eres, qué vales y a quién quieres
            servir.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Precios demasiado bajos atraen clientes que no te interesan,
            erosionan tu margen y te condenan a trabajar cada vez más para
            ganar cada vez menos. Precios bien pensados, basados en valor y
            respaldados por una propuesta sólida, atraen a los clientes que
            merecen tu trabajo y te permiten construir un negocio rentable y
            sostenible.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No esperes al momento perfecto para revisar tus precios. Ese
            momento no existe. Cada mes que pasa con precios equivocados es
            dinero que estás dejando sobre la mesa — o peor, dinero que estás
            perdiendo sin darte cuenta.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y si no sabes por dónde empezar, si llevas tiempo sospechando que
            tus precios no están bien pero no te atreves a tocarlos, quizá
            sea el momento de{" "}
            <a
              href="/diagnostico-negocio"
              className="text-primary-700 underline hover:text-primary-900"
            >
              pedir un diagnóstico profesional
            </a>
            . A veces, una mirada externa es todo lo que necesitas para tomar
            la decisión que llevas meses posponiendo.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-fijar-precios-en-tu-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Necesitas ayuda para fijar los precios de tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos tu estructura de costes, tu posicionamiento y tu mercado
            para diseñar una estrategia de precios que proteja tu margen y
            atraiga a los clientes que realmente quieres tener.
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

      <BlogNav currentSlug="como-fijar-precios-en-tu-negocio" />

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
