import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Segmentación de clientes: cómo identificar a los rentables (y despedir a los tóxicos) | Consultoría Método",
  description:
    "Guía práctica para segmentar tu cartera de clientes por rentabilidad real. Cómo identificar a los que ganan dinero, a los que lo pierden y a los tóxicos que consumen recursos. Con ejemplos y método concreto para pymes.",
  keywords: [
    "segmentación de clientes rentables",
    "cliente rentable pyme",
    "analizar rentabilidad por cliente",
    "cartera clientes rentables",
    "cómo identificar clientes tóxicos",
    "matriz de clientes ABC",
    "clientes que dan pérdidas",
    "despedir clientes no rentables",
    "segmentación clientes empresa",
  ],
  openGraph: {
    title:
      "Segmentación de clientes: cómo identificar a los rentables (y despedir a los tóxicos)",
    description:
      "No todos tus clientes te dejan lo mismo. Cómo segmentar tu cartera por rentabilidad real y decidir a quién mimar, a quién revisar y a quién dejar ir.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/segmentacion-clientes-identificar-rentables",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Segmentación de clientes: cómo identificar a los rentables (y despedir a los tóxicos)",
  description:
    "Guía práctica para segmentar tu cartera de clientes por rentabilidad real. Cómo identificar a los rentables, a los que dan pérdidas y a los tóxicos, con método concreto para pymes.",
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
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/segmentacion-clientes-identificar-rentables",
  },
};

export default function ArticuloSegmentacionClientes() {
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
            Segmentación de clientes: cómo identificar a los rentables (y despedir a los tóxicos)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            No todos tus clientes te dejan lo mismo. De hecho, muchas pymes
            descubren que el 20% de sus clientes les generan el 80% del
            beneficio — y que otro 20% les hacen perder dinero directamente.
            Guía práctica para poner orden en tu cartera.
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
            Cuando le pregunto a un empresario cuáles son sus clientes más
            rentables, casi siempre pasa lo mismo: me nombra a los que más
            facturan. No a los que más beneficio le dejan — a los que más
            facturan. Y esas dos cosas, en la mayoría de las pymes, no coinciden
            en absoluto.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo he visto decenas de veces. Un cliente estrella al que se le
            factura 40.000 euros al año, pero que exige tantas revisiones,
            reuniones extra y descuentos de última hora que, si echas cuentas
            reales, la empresa pierde dinero cada vez que trabaja para él. Y
            justo al lado, un cliente pequeño de 6.000 euros anuales que paga a
            tiempo, pide poco, y deja un margen limpio del 40%.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La idea de que{" "}
            <strong className="text-gray-900">
              «todos los clientes son bienvenidos»
            </strong>{" "}
            suena bonita, pero arruina negocios. Porque un cliente que consume
            más recursos de los que aporta no es un cliente: es un problema
            disfrazado de facturación. Y hasta que no aprendas a distinguir a
            unos de otros, seguirás trabajando el doble para ganar la mitad.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo te explico el método que uso para segmentar la
            cartera de clientes de una pyme: cómo identificar a los rentables,
            a los que están en zona gris, y a los que directamente te están
            haciendo perder dinero — aunque no lo veas en la cuenta de
            resultados. Y sobre todo, qué hacer con cada uno de ellos.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;En la mayoría de las pymes, el problema no es que falten
            clientes. Es que no saben cuáles ganan dinero y cuáles lo
            pierden.&rdquo;
          </blockquote>

          {/* H2 — Por qué no segmentan */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué la mayoría de pymes no segmentan a sus clientes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Segmentar una cartera parece algo obvio. Y sin embargo, en la
            mayoría de las pymes con las que trabajo, no se hace. Ni una vez al
            año, ni cada trimestre, ni nunca. La razón es una combinación de
            tres factores que se repiten con una precisión casi matemática.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El primero es <strong>miedo</strong>. Miedo a descubrir que ese
            cliente tan importante en realidad no lo es. Miedo a tener que
            tomar decisiones incómodas si los números salen mal. Miedo a
            reducir la cartera y quedarse con menos facturación. Es más fácil
            no mirar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El segundo es <strong>desconocimiento del método</strong>. Muchos
            empresarios no saben cómo calcular la rentabilidad real de un
            cliente. Sí saben cuánto factura, pero no cuánto cuesta servirlo —
            en tiempo, en recursos, en dinero indirecto. Y sin ese dato, la
            segmentación es imposible.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El tercero es <strong>cultura del «todos son bienvenidos»</strong>.
            Se confunde la ética del buen empresario con la obligación de
            aceptar cualquier trabajo. Como si decir «este cliente no me
            interesa» fuese una traición. No lo es. Es gestión.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te interesa entender por qué muchas empresas facturan mucho
            pero ganan poco, este es uno de los motivos principales. Lo
            desarrollo con más detalle en{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-accent-600 underline hover:text-accent-700"
            >
              por qué tu empresa factura pero no gana dinero
            </a>
            .
          </p>

          {/* H2 — Los 4 tipos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 4 tipos de cliente que tiene toda pyme
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando pongo la lupa sobre la cartera de un cliente, siempre
            aparecen los mismos cuatro perfiles. Los nombres pueden variar,
            pero la estructura se repite en cualquier sector: hostelería,
            servicios, comercio, salud, formación. Toda pyme tiene estos
            cuatro tipos. La diferencia está en la proporción — y en si el
            empresario los ha identificado o no.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cliente estrella (A): rentable, paga bien, pide poco
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es el cliente ideal. Deja un margen alto, paga en plazo, no
            regatea, respeta tu tiempo y confía en tu criterio. Suele
            recomendarte. Trabajar con él es fácil y rentable. Estos clientes
            son minoría — casi nunca superan el 15-20% de la cartera —, pero
            aportan la mayor parte del beneficio real. La regla con ellos es
            simple: <strong>retenerlos a toda costa</strong>. Cuidarlos, hacer
            seguimiento, sorprenderlos de vez en cuando y asegurarte de que
            nadie de la competencia les llame antes que tú.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cliente rentable normal (B): margen razonable, comportamiento sano
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es el grueso de una cartera sana. Deja un margen aceptable, paga
            razonablemente bien, y su relación contigo es funcional. No es
            espectacular, pero suma. Con estos clientes la estrategia es doble:
            <strong> mantenerlos estables y buscar oportunidades para
            subirlos a categoría A</strong>. Puede ser ampliando el ticket
            medio, aumentando la frecuencia de compra, o cerrando servicios
            adicionales que hoy contratan a la competencia.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cliente poco rentable (C): margen bajo, esfuerzo alto
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es el cliente que técnicamente no da pérdidas, pero que consume
            mucho más de lo que aporta en proporción. Pide muchas revisiones,
            regatea siempre, exige plazos ajustados, tarda en decidir. La
            factura cuadra, pero el desgaste no compensa. Aquí caben dos
            opciones: <strong>subir precios para reflejar el coste real de
            servirlo</strong> — y ver si acepta o no —, o <strong>dejarlo ir
            con elegancia</strong> cuando el margen ya no compense el desgaste.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cliente tóxico (D): consume tiempo, no paga bien, trato malo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es el cliente que hay que despedir. Paga tarde o mal, exige
            constantemente descuentos, trata sin respeto a tu equipo, cambia
            de opinión cada semana, genera facturación pero destruye margen y
            moral. Cada minuto que le dedicas es un minuto que no le dedicas a
            un cliente A. Cuanto antes lo saques de la cartera, mejor. Y sí,
            se puede hacer con elegancia — más abajo te explico cómo.
          </p>

          {/* Aviso importante */}
          <div className="my-10 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
            <p className="font-semibold text-red-800">
              Error frecuente
            </p>
            <p className="mt-2 text-red-700">
              Muchos empresarios confunden facturación con rentabilidad. Un
              cliente puede facturar 50.000 euros al año y, después de
              descontar tiempo, recursos, revisiones extra y coste de
              oportunidad, dejar menos beneficio que otro que factura 8.000.
              Sin analizar el margen real por cliente, decisiones críticas se
              toman a ciegas.
            </p>
          </div>

          {/* H2 — Medir rentabilidad */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo medir la rentabilidad real por cliente, paso a paso
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Segmentar sin números es opinar. Y opinar sobre clientes es
            peligroso, porque los sesgos personales (el que te cae bien, el
            veterano, el que te trajo tu cuñado) contaminan cualquier
            decisión. Este es el proceso que uso para poner los números
            encima de la mesa.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Reunir los datos básicos de cada cliente
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Necesitas, para cada cliente activo del último año, cuatro datos
            mínimos:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Facturación anual (lo que te ha pagado o facturado, sin IVA).",
              "Coste directo del servicio o producto que le has entregado (materiales, horas de equipo, subcontrataciones).",
              "Horas reales dedicadas — incluyendo reuniones, revisiones, correos, incidencias y postventa.",
              "Comportamiento de pago (días medios de cobro, incidencias, impagos parciales).",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Calcular el margen real por cliente
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El margen real no es facturación menos coste directo. Es
            facturación menos coste directo menos <strong>coste de
            tiempo</strong>. Y ese último es el que la mayoría no cuenta.
            Multiplica las horas reales por un coste/hora razonable (el de tu
            equipo, o el tuyo si eres tú quien lo atiende) y réstalo. Si el
            resultado es negativo, ese cliente te está haciendo perder dinero.
            Si es positivo pero muy bajo, está en zona gris.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Para entender cómo fijar bien tu coste/hora y tus precios, te
            recomiendo{" "}
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo fijar precios en tu negocio
            </a>
            . Sin esa base, cualquier cálculo de rentabilidad por cliente sale
            distorsionado.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Ordenar la cartera en una tabla simple
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No necesitas software. Necesitas una hoja de cálculo con estas
            columnas:
          </p>

          {/* Tabla ejemplo */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Cliente
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">
                    Facturación
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">
                    Coste total
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">
                    Margen real
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                    Segmento
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">Cliente 01</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">42.000 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">21.000 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-green-700">+21.000 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-center font-bold text-primary-900">A</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">Cliente 02</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">18.500 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">12.200 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-green-700">+6.300 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-center font-bold text-primary-900">B</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">Cliente 03</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">9.800 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">9.100 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-amber-700">+700 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-center font-bold text-amber-700">C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">Cliente 04</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">31.000 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">34.500 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-red-700">−3.500 &euro;</td>
                  <td className="border border-gray-200 px-4 py-3 text-center font-bold text-red-700">D</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando ves esta tabla ordenada, se acaba la ambigüedad. Ya no
            estás opinando: estás decidiendo con datos. Y casi siempre hay
            sorpresas: clientes «pequeños» que aparecen entre los más
            rentables, y clientes «grandes» que resultan estar en rojo.
          </p>

          {/* H2 — Regla 80/20 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            La regla 80/20 aplicada a tu cartera de clientes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La ley de Pareto — el 20% de las causas produce el 80% de los
            efectos — se cumple con una precisión casi molesta en las carteras
            de clientes de pyme. Aproximadamente el 20% de tus clientes
            aportan el 80% de tu beneficio real. Y otro 20% te consume
            recursos que no te devuelven nada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un ejemplo real que vi hace poco: una empresa de servicios con 48
            clientes activos. Al ordenar la cartera por margen real, los 9
            primeros aportaban el 78% del beneficio total. Los 10 últimos
            estaban en negativo — juntos, restaban 14.000 euros al año al
            resultado. Es decir, la empresa habría ganado más dinero teniendo
            38 clientes que 48. Solo dejar ir a esos 10 significaba mejorar el
            beneficio en 14.000 euros, sin vender ni un servicio más.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esto es lo que revela la segmentación. No solo cuáles son tus
            mejores clientes: también cuáles son los que te impiden crecer,
            porque te bloquean tiempo y recursos que podrías dedicar a los
            que sí lo merecen.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;A veces la mejor decisión comercial no es conseguir un
            cliente nuevo. Es dejar de trabajar con uno que te está costando
            dinero.&rdquo;
          </blockquote>

          {/* H2 — Qué hacer con cada segmento */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué hacer con cada segmento
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Segmentar sin actuar es un ejercicio académico. La segmentación
            solo sirve si detrás hay decisiones concretas para cada grupo.
            Estas son las palancas que aplico con cada segmento.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Con los A: mimar, hacer seguimiento y pedir referidos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los clientes A necesitan sentirse cuidados. Contacto proactivo,
            propuestas anticipadas, respuesta rápida, algún detalle puntual.
            Y una acción clave: pedirles referidos activamente. Un cliente A
            satisfecho es tu mejor comercial — pero solo si le pides que lo
            sea. La mayoría no lo hace por iniciativa propia; hay que
            invitarles a ello.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Con los B: buscar oportunidades de crecimiento
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los B son tu bolsa natural de crecimiento. Analiza qué te compran
            hoy y qué podrían comprarte si les hicieses la oferta adecuada.
            Cross-selling, upselling, servicios recurrentes, contratos
            anuales en lugar de proyectos puntuales. Muchos B están a un
            paso de convertirse en A — pero necesitan que tú se lo propongas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Con los C: revisar precios o reducir esfuerzo
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Con los C hay dos caminos. El primero es subir precios para
            reflejar el coste real de servirlos. Si aceptan, pasan a ser B;
            si no, se van solos y liberas tiempo. El segundo camino es
            estandarizar el servicio: reducir el número de reuniones,
            estructurar entregas, eliminar customizaciones. Un cliente C con
            un servicio estandarizado puede volverse rentable sin subir
            precios.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Con los D: despedirlos con elegancia
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los D no se rescatan. Cada mes que sigas trabajando con ellos es
            un mes que pierdes dinero y desgastas a tu equipo. La única
            decisión racional es cerrar la relación de forma limpia, sin
            drama, sin explicaciones excesivas. En el siguiente apartado te
            explico cómo hacerlo.
          </p>

          {/* H2 — Despedir con elegancia */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo despedir a un cliente tóxico con elegancia
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Despedir a un cliente asusta. Pero hacerlo bien no requiere
            confrontación ni malos rollos. Requiere método. Estos son los
            pasos que recomiendo.
          </p>
          <ol className="mt-4 space-y-3">
            {[
              "Ten el argumento claro para ti antes de comunicarlo. No vas a discutirlo con el cliente, pero sí necesitas saber por qué lo estás haciendo: márgenes, comportamiento, coste de oportunidad. Sin culpa.",
              "Comunícalo por escrito, en tono profesional. Un email o carta breve. Nada de reproches, nada de emociones. Motivo tipo: «Estamos reorganizando nuestra estructura de servicios y no vamos a poder seguir atendiéndote a partir de X fecha».",
              "Ofrece alternativas si puedes. Recomienda otro proveedor, indica cómo puede migrar sus datos o proyectos. Esto reduce fricciones y protege tu reputación.",
              "Da un plazo razonable de transición. Entre 30 y 90 días, según el tipo de servicio. Ni tan corto que parezca hostil, ni tan largo que se dilate para siempre.",
              "No te justifiques ni te disculpes. Estás tomando una decisión de negocio, no cometiendo una falta. Los clientes tóxicos suelen intentar renegociar en el último momento. No entres en ese terreno.",
              "Sigue el plan hasta el final. Si el cliente presiona, negocia, ofrece más dinero o intenta manipular emocionalmente, mantente firme. Si lo estás despidiendo es por algo, y ese algo no se arregla con una subida puntual de precio.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <div className="my-10 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
            <p className="font-semibold text-amber-800">
              Consejo práctico
            </p>
            <p className="mt-2 text-amber-700">
              No despidas a varios clientes tóxicos a la vez. Hazlo de forma
              escalonada, uno cada 4-6 semanas. Así vas comprobando que la
              caída de facturación es asumible, y liberas capacidad
              progresivamente para dedicarla a los A y a captar nuevos B.
            </p>
          </div>

          {/* H2 — Casos reales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Casos reales de segmentación bien hecha
          </h2>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Consultora que subió tarifas un 30%
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Una consultora con 25 clientes recurrentes segmentó su cartera y
            descubrió que 8 estaban en zona C y 3 en D. Decidió subir un 30%
            las tarifas a los 11 clientes menos rentables como filtro
            automático. Resultado: 4 clientes se marcharon (3 D y 1 C), 7 se
            quedaron aceptando el nuevo precio. La facturación subió un 22%
            neto, dedicando menos horas al mes al conjunto de la cartera. Y
            los que se fueron no fueron una pérdida — fueron una liberación.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Restaurante que dejó de aceptar comuniones
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un restaurante familiar hacía cinco comuniones al año. Facturaba
            bien con ellas — unos 6.000 euros cada una —, pero cuando
            analizamos el margen real (personal extra, bloqueo del local
            entero durante todo el fin de semana, desgaste del equipo,
            reclamaciones habituales de familias exigentes), descubrimos que
            eran las peores fechas del año en rentabilidad. Decidieron dejar
            de aceptarlas. Al año siguiente esos mismos fines de semana los
            dedicaron a servicio normal — más rentable, menos estrés y sin
            perder clientela habitual.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Servicios técnicos que despidió a 3 clientes tóxicos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Una empresa de servicios técnicos tenía 3 clientes que juntos
            representaban el 12% de la facturación pero el 40% de las
            reclamaciones, el 55% de los impagos parciales y una parte
            enorme del desgaste emocional del equipo. Los despidió de forma
            escalonada en 4 meses. La facturación bajó un 9% temporalmente
            (recuperada en 5 meses con nuevos clientes B), pero el margen
            neto subió 3 puntos porcentuales desde el primer trimestre — y
            la rotación de personal se redujo a la mitad.
          </p>

          <p className="mt-6 text-gray-600 md:text-lg">
            Puedes ver más ejemplos concretos de cómo trabajamos por sectores
            en nuestra{" "}
            <a
              href="/experiencia-sectores-casos"
              className="text-accent-600 underline hover:text-accent-700"
            >
              página de experiencia y casos
            </a>
            .
          </p>

          {/* H2 — Errores típicos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Errores típicos al segmentar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Segmentar mal es peor que no segmentar. Estos son los cinco
            errores que veo con más frecuencia cuando un empresario intenta
            hacerlo por su cuenta.
          </p>
          <ul className="mt-4 space-y-3">
            {[
              { label: "Segmentar solo por facturación", desc: "Es el error más común. Facturación no es beneficio. Un cliente que factura mucho puede estar dejándote pérdidas si consume más recursos de los que aporta." },
              { label: "Dejar que el miedo condicione el análisis", desc: "«Si le subo precios se va». Puede que sí, puede que no. Pero si se va porque no acepta un precio justo, ese cliente ya no era tuyo. La rentabilidad manda." },
              { label: "No incluir el coste de tu tiempo", desc: "Si tú personalmente atiendes al cliente, tu hora tiene un coste. Si no lo cuentas, el margen sale artificialmente alto — y tomas decisiones equivocadas." },
              { label: "Segmentar una vez y no volver a hacerlo", desc: "La cartera cambia. Un cliente A puede convertirse en C si empieza a exigir demasiado, y viceversa. Sin revisión periódica, el análisis caduca." },
              { label: "Actuar sin comunicar internamente", desc: "Si tienes equipo, deben conocer la segmentación. Un comercial que trata a un cliente C como si fuese A pierde rentabilidad sin darse cuenta." },
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

          {/* H2 — Frecuencia */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Con qué frecuencia revisar la segmentación
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La segmentación no es un ejercicio de una vez en la vida. Es un
            proceso vivo que se debe revisar de forma sistemática. Esta es la
            cadencia que recomiendo para una pyme típica.
          </p>
          <ul className="mt-4 space-y-3">
            {[
              { label: "Anual profundo", desc: "Una vez al año, un análisis completo con datos reales de facturación, costes y márgenes. Preferentemente en enero, con los cierres del año anterior en la mano." },
              { label: "Trimestral rápido", desc: "Cada tres meses, una revisión más ágil: cambios significativos en la cartera, clientes nuevos, clientes que han bajado de segmento, incidencias de pago." },
              { label: "Alertas continuas", desc: "Umbrales de aviso automático: si un cliente supera X reclamaciones al mes, X días de retraso en pagos, o X horas de dedicación por encima de lo previsto, se marca para revisión inmediata." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>
                  <strong className="text-gray-900">{item.label}:</strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este ritmo evita que la cartera se descontrole y te da información
            para tomar decisiones antes de que los problemas se conviertan en
            pérdidas serias. Si quieres profundizar en qué otros indicadores
            deberías controlar cada mes en tu negocio, echa un ojo a{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              los indicadores clave de una empresa
            </a>
            .
          </p>

          {/* H2 — Cierre */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: no necesitas más clientes, necesitas mejores clientes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de años trabajando con empresarios de todos los sectores,
            he llegado a una convicción: la mayoría de las pymes no tienen un
            problema de captación. Tienen un problema de{" "}
            <strong>gestión de cartera</strong>. Aceptan a todos, cobran a
            todos por igual, y luego se preguntan por qué a final de mes no
            queda dinero.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Segmentar tu cartera es uno de los ejercicios de mayor impacto que
            puedes hacer en tu negocio en las próximas semanas. No requiere
            inversión. No requiere contratar a nadie. Requiere método,
            números y honestidad para mirar lo que muchas veces preferimos no
            ver. Y a cambio, puede darte más margen, más tiempo y menos
            desgaste en cuestión de meses.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres que te ayude a hacer este análisis para tu empresa —
            identificar quién te deja dinero, quién te lo hace perder y qué
            hacer con cada uno —, puedes ver mis{" "}
            <a
              href="/servicios"
              className="text-accent-600 underline hover:text-accent-700"
            >
              servicios de consultoría
            </a>{" "}
            o solicitar directamente un{" "}
            <a
              href="/diagnostico-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              diagnóstico gratuito de tu negocio
            </a>
            . En una sesión de 30 minutos podemos identificar si tu problema
            está en la cartera, en los precios o en la estructura de costes —
            y qué palanca priorizar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cada mes que sigues aceptando a todos por igual es un mes en el
            que estás regalando margen. No mañana. Hoy.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="segmentacion-clientes-identificar-rentables" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber qué clientes te están haciendo perder dinero sin que te des cuenta?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos tu cartera de clientes — facturación real,
            coste de servir, margen limpio — y diseñamos un plan para
            quedarte con los que ganan dinero y despedir con elegancia a los
            que lo pierden.
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

      <BlogNav currentSlug="segmentacion-clientes-identificar-rentables" />
    </>
  );
}
