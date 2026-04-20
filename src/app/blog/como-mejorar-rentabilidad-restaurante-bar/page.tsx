import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo mejorar la rentabilidad de un restaurante o bar (guía práctica) | Consultoría Método",
  description:
    "Guía práctica para mejorar la rentabilidad de tu restaurante o bar. Escandallo, control de costes, food cost, carta rentable y decisiones que aumentan el margen en hostelería.",
  keywords: [
    "mejorar rentabilidad restaurante",
    "rentabilidad bar",
    "consultor hostelería",
    "escandallar platos restaurante",
    "reducir costes restaurante",
    "consultoría restaurantes",
    "food cost restaurante",
    "carta rentable restaurante",
  ],
  openGraph: {
    title: "Cómo mejorar la rentabilidad de un restaurante o bar (guía práctica)",
    description:
      "El restaurante lleno no siempre es rentable. Descubre cómo controlar costes, escandallar platos y tomar decisiones que mejoran el margen en hostelería.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-mejorar-rentabilidad-restaurante-bar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo mejorar la rentabilidad de un restaurante o bar (guía práctica)",
  description:
    "Guía práctica para mejorar la rentabilidad de tu restaurante o bar. Escandallo, control de costes, food cost, carta rentable y decisiones que aumentan el margen en hostelería.",
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
      "https://consultoriametodo.es/blog/como-mejorar-rentabilidad-restaurante-bar",
  },
};

export default function ArticuloRentabilidadHosteleria() {
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
            Cómo mejorar la rentabilidad de un restaurante o bar (guía práctica)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            El local lleno, la cocina a tope, el equipo sin parar... y cuando
            miras la cuenta a final de mes, el dinero no aparece. Si te suena
            esta historia, este artículo es para ti.
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
            La hostelería en España tiene una paradoja que se repite día tras
            día. El restaurante está lleno. El bar no para de servir cañas y
            tapas. El dueño trabaja catorce horas diarias, siete días a la
            semana. Y sin embargo, cuando llega el momento de mirar los
            números reales, el beneficio es ridículo — o directamente no
            existe.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es una situación mucho más habitual de lo que parece. Según datos
            del sector, alrededor del 30% de los restaurantes en España no
            superan los tres primeros años de vida. Y de los que sobreviven,
            una parte importante lo hace con márgenes tan ajustados que el
            propietario cobra menos que un camarero contratado por horas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La pregunta entonces no es si tu restaurante o bar tiene clientes.
            La pregunta es:{" "}
            <strong className="text-gray-900">
              ¿te está dejando dinero cada uno de esos clientes?
            </strong>{" "}
            Porque si la respuesta no está clara, tienes un problema de
            rentabilidad que no se resuelve con más trabajo ni con más
            clientes. Se resuelve con números, con método y con decisiones
            bien tomadas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres ver un ejemplo concreto de cómo se hace este trabajo en
            la práctica, lee el{" "}
            <a
              href="/blog/caso-exito-restaurante-rentabilidad"
              className="text-accent-600 underline hover:text-accent-700"
            >
              caso real de un restaurante que facturaba 10.000 € al mes sin
              ganar dinero
            </a>{" "}
            y cómo pasó a tener un margen estable del 12-15 % en tres meses.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te interesa entender este fenómeno de forma general — más allá
            de la hostelería —, te recomiendo leer{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-accent-600 underline hover:text-accent-700"
            >
              por qué muchas empresas facturan pero no ganan dinero
            </a>
            . Pero en este artículo vamos a ir al grano con lo que afecta
            específicamente a restaurantes y bares.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;En hostelería, el problema casi nunca es que falten
            clientes. El problema es que no sabes cuánto te cuesta servir a
            cada uno de ellos.&rdquo;
          </blockquote>

          {/* H2 — Por qué facturan pero no ganan */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué muchos restaurantes facturan bien pero no ganan dinero
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Para un hostelero resulta difícil de aceptar: el local está lleno,
            las comandas no paran, los fines de semana hay lista de espera.
            ¿Cómo puede ser que no haya beneficio? La respuesta está en una
            combinación de factores que, por separado, parecen menores, pero
            juntos se comen todo el margen.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Costes fijos descontrolados
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Alquiler, suministros (luz, gas, agua), seguros, gestoría,
            licencias, mantenimiento de equipos, cuotas de autónomos. En
            hostelería, los costes fijos son especialmente altos porque
            necesitas un local grande, equipamiento de cocina caro y un
            consumo energético brutal. Si no tienes estos números controlados
            al céntimo, el margen desaparece antes de que te des cuenta.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Ausencia de control de costes de materia prima
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El food cost — lo que te cuesta la materia prima de cada plato —
            es la variable más importante en la cuenta de resultados de un
            restaurante. Y sin embargo, una cantidad alarmante de hosteleros
            no lo calculan. Compran «lo que hace falta», tiran lo que sobra y
            confían en que «más o menos cuadra». Ese «más o menos» puede ser
            la diferencia entre ganar dinero o perderlo cada mes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Precios puestos a ojo o copiados de la competencia
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si fijas los precios de tu carta mirando lo que cobra el
            restaurante de al lado, estás cometiendo un error que puede
            costarte el negocio. Tu competidor puede tener un alquiler más
            bajo, puede no pagar personal porque trabaja solo con familia, o
            puede estar perdiendo dinero sin saberlo. Copiar un precio sin
            conocer tu propia estructura de costes es jugar a la ruleta rusa
            con tu cuenta de resultados. Si quieres profundizar en cómo fijar
            precios correctamente, te lo explico en detalle en{" "}
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo fijar precios en tu negocio
            </a>.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Sobredimensionamiento de la plantilla
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El coste de personal en hostelería suele estar entre el 30% y el
            40% de la facturación. Si supera el 40%, tienes un problema serio.
            Y no es raro: turnos mal planificados, horas muertas con personal
            completo, extras innecesarios en días flojos. Cada hora de un
            empleado que no está generando valor directo es dinero que sale de
            tu bolsillo.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Exceso de trabajo del propietario
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Esto es muy habitual en hostelería familiar: el dueño trabaja en
            cocina, atiende en barra, hace las compras, lleva las cuentas y
            gestiona al personal. Está tan metido en el día a día que nunca
            tiene tiempo de pararse a analizar los números. Es la trampa
            perfecta: cuanto más trabajas, menos controlas; cuanto menos
            controlas, peores resultados; cuantos peores resultados, más
            trabajas para compensar.
          </p>

          {/* Aviso importante */}
          <div className="my-10 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
            <p className="font-semibold text-red-800">
              Error frecuente en hostelería
            </p>
            <p className="mt-2 text-red-700">
              Muchos hosteleros intentan solucionar la falta de rentabilidad
              abriendo más horas, añadiendo más platos a la carta o metiendo
              más mesas. Pero si el modelo no es rentable con lo que ya tienes,
              ampliarlo solo multiplica las pérdidas. Antes de crecer, asegúrate
              de que cada plato, cada servicio y cada hora de apertura te deja
              dinero.
            </p>
          </div>

          {/* H2 — Los números que controlar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los números que todo hostelero debería controlar cada mes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Gestionar un restaurante sin mirar los indicadores clave es como
            conducir de noche sin luces: puedes avanzar un rato, pero tarde o
            temprano te sales de la carretera. Estos son los números que
            necesitas tener bajo control — no de forma anual, sino{" "}
            <strong>cada mes</strong>. Si quieres conocer los indicadores
            clave de cualquier negocio en general, revisa mi artículo sobre{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              los indicadores clave de una empresa
            </a>
            . Aquí nos centramos en los específicos de hostelería.
          </p>

          {/* Tabla de indicadores */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Indicador
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Qué mide
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Valor saludable
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Señal de alarma
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Food cost (%)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Coste de materia prima sobre ventas
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    25% – 33%
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    &gt; 35%
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Coste de personal (%)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Salarios + SS sobre facturación
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    28% – 35%
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    &gt; 40%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Prime cost (%)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Food cost + coste de personal
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    55% – 65%
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    &gt; 70%
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Ticket medio
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Facturación total ÷ n.º de clientes
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    Depende del formato
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    Estancado o bajando
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Tasa de ocupación
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Mesas ocupadas ÷ mesas disponibles
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    &gt; 70% en servicio
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    &lt; 50% habitual
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Desperdicio (%)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Producto tirado o no vendido
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    &lt; 5% de compras
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    &gt; 8%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Beneficio neto (%)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Lo que queda tras todos los gastos
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                    8% – 15%
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-red-700 font-medium">
                    &lt; 5%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si no conoces estos números de tu restaurante, el primer paso es
            calcularlos. No necesitas un software caro ni un controller
            financiero. Necesitas una hoja de cálculo, las facturas de compras
            del último mes y dos horas de trabajo. Lo que descubras en esas
            dos horas puede cambiar la dirección de tu negocio.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;He visto restaurantes que facturaban 40.000 euros al mes y
            perdían dinero. Y he visto bares de barrio que facturaban 12.000
            y su dueño se llevaba un sueldo digno a casa. La diferencia nunca
            es la facturación — siempre son los números.&rdquo;
          </blockquote>

          {/* H2 — El escandallo */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El escandallo: la herramienta que cambia la rentabilidad
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si tuviera que elegir una sola herramienta para mejorar la
            rentabilidad de un restaurante, sería el escandallo. Y sin
            embargo, la mayoría de los hosteleros no lo hacen — o lo hacen
            una vez y nunca lo actualizan.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El escandallo es, simplemente, el cálculo detallado del coste de
            cada plato. No el coste aproximado, no el «más o menos». El
            coste real, ingrediente por ingrediente, gramo por gramo,
            incluyendo mermas y desperdicios. Es lo que te permite saber
            exactamente cuánto te cuesta poner un plato en la mesa y, por
            tanto, cuánto ganas (o pierdes) cada vez que lo vendes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Cómo hacer un escandallo paso a paso
          </h3>
          <ol className="mt-4 space-y-3">
            {[
              "Lista todos los ingredientes del plato con la cantidad exacta que usas (en gramos, mililitros, unidades).",
              "Busca el precio de compra de cada ingrediente y calcula el coste por unidad de medida (precio por kilo, por litro, etc.).",
              "Multiplica la cantidad usada por el coste unitario para obtener el coste de cada ingrediente.",
              "Suma todos los costes de ingredientes para obtener el coste total de materia prima del plato.",
              "Añade un porcentaje de merma (normalmente entre un 5% y un 15%, dependiendo del producto) para reflejar desperdicios, partes no aprovechables y variaciones.",
              "Compara el coste total con el precio de venta (sin IVA) para conocer tu margen real.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Ejemplo práctico: escandallo de una merluza a la gallega
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Veamos un ejemplo concreto con un plato típico de la zona:
          </p>

          {/* Tabla de escandallo */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Ingrediente
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">
                    Cantidad
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">
                    Precio/kg o ud.
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">
                    Coste
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Merluza fresca (lomo)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    250 g
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    14,00 &euro;/kg
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-gray-900">
                    3,50 &euro;
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Patatas
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    200 g
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    1,20 &euro;/kg
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-gray-900">
                    0,24 &euro;
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Cebolla
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    80 g
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    1,50 &euro;/kg
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-gray-900">
                    0,12 &euro;
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Aceite de oliva virgen extra
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    30 ml
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    8,00 &euro;/l
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-gray-900">
                    0,24 &euro;
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Pimentón, sal, laurel
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    —
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-600">
                    —
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-gray-900">
                    0,10 &euro;
                  </td>
                </tr>
                <tr className="bg-primary-50 font-semibold">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900" colSpan={2}>
                    Subtotal materia prima
                  </td>
                  <td className="border border-gray-200 px-4 py-3" />
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-900">
                    4,20 &euro;
                  </td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900" colSpan={2}>
                    + Merma estimada (10%)
                  </td>
                  <td className="border border-gray-200 px-4 py-3" />
                  <td className="border border-gray-200 px-4 py-3 text-right font-medium text-red-700">
                    0,42 &euro;
                  </td>
                </tr>
                <tr className="bg-primary-100 font-bold">
                  <td className="border border-gray-200 px-4 py-3 text-primary-900" colSpan={2}>
                    Coste total del plato
                  </td>
                  <td className="border border-gray-200 px-4 py-3" />
                  <td className="border border-gray-200 px-4 py-3 text-right text-primary-900">
                    4,62 &euro;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si este plato se vende a 16,00 &euro; (sin IVA: 13,22 &euro;), el
            food cost real es del <strong>34,9%</strong> (4,62 / 13,22). Está
            ligeramente por encima del rango ideal. Para bajarlo tienes varias
            opciones: ajustar la ración de merluza a 220 g, buscar un
            proveedor con mejor precio, o subir el PVP a 17,50 &euro;.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La clave del escandallo no es hacerlo una vez. Es hacerlo para
            cada plato de la carta y actualizarlo cada vez que cambien los
            precios de compra. Si los precios suben y tú no ajustas, estás
            perdiendo margen cada día sin saberlo.
          </p>

          {/* Aviso importante */}
          <div className="my-10 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
            <p className="font-semibold text-red-800">
              Error frecuente con el escandallo
            </p>
            <p className="mt-2 text-red-700">
              Muchos hosteleros calculan el food cost sobre el precio con IVA.
              Eso da un porcentaje artificialmente bajo y te engaña. El food
              cost siempre se calcula sobre el precio sin IVA, porque el IVA
              no es ingreso tuyo — es del Estado. Si calculas sobre PVP con
              IVA, tu food cost real puede ser un 10% peor de lo que crees.
            </p>
          </div>

          {/* H2 — 7 decisiones */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            7 decisiones que mejoran la rentabilidad de un restaurante
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Una vez que tienes los números claros — food cost, coste de
            personal, ticket medio, desperdicio — llega el momento de actuar.
            Estas son las siete decisiones que, en mi experiencia asesorando
            negocios de hostelería, más impacto generan en la rentabilidad.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Rediseña la carta pensando en margen, no solo en gustos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La carta de un restaurante no es solo una lista de platos — es tu
            herramienta comercial más importante. Cada plato debería estar ahí
            por una razón económica, no solo gastronómica. Usa el escandallo
            para clasificar tus platos en cuatro categorías:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              { label: "Estrellas", desc: "Alta popularidad + alto margen. Promociónales, dales la mejor posición en la carta." },
              { label: "Caballos de batalla", desc: "Alta popularidad + bajo margen. Busca cómo reducir su coste o subir precio sin perder ventas." },
              { label: "Puzzles", desc: "Baja popularidad + alto margen. Mejora su presentación, recomiéndales al comensal, dale visibilidad." },
              { label: "Perros", desc: "Baja popularidad + bajo margen. Elimínalos de la carta. No aportan nada." },
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
          <p className="mt-4 text-gray-600 md:text-lg">
            Una carta más corta, más rentable y mejor diseñada vende más que
            una carta kilométrica donde el cliente se pierde. Menos platos
            significa menos stock, menos desperdicio, menos complejidad en
            cocina y más control sobre los costes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Negocia con proveedores de forma activa
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No esperes a que el proveedor te suba el precio para reaccionar.
            Pide presupuestos alternativos al menos dos veces al año. Compara
            precios, negocia rappels por volumen, revisa condiciones de pago.
            Un ahorro del 3% en compras de materia prima, en un restaurante
            que compra 8.000 euros al mes, son 240 euros más de beneficio
            cada mes — casi 3.000 euros al año que van directos a tu bolsillo.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Y no se trata solo de precio. Negocia la frecuencia de entrega
            para reducir stock, pide productos ya limpios o cortados si eso
            te ahorra tiempo de personal, y evalúa si la calidad de lo que
            compras es la adecuada para lo que vendes — ni más, ni menos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Reduce el desperdicio de forma sistemática
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El desperdicio en hostelería es un agujero negro de rentabilidad.
            Producto que caduca, raciones que se devuelven, preparaciones que
            sobran y se tiran, mermas excesivas en el procesado. Cada euro
            que tiras a la basura es un euro menos de beneficio.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Acciones concretas: implementa el sistema FIFO (primero en
            entrar, primero en salir) en cámaras y almacén; estandariza
            las raciones con gramaje exacto; aprovecha recortes y mermas
            en caldos, salsas o tapas; revisa semanalmente qué se tira y
            por qué. Un restaurante que reduce su desperdicio del 10% al
            5% sobre compras de 8.000 &euro;/mes ahorra 400 &euro;
            mensuales netos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Optimiza la planificación de personal
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Analiza tus servicios hora por hora, día por día. ¿Realmente
            necesitas el mismo equipo un martes al mediodía que un sábado
            noche? Ajusta los turnos a la demanda real. Usa contratos
            parciales o fijos discontinuos cuando tenga sentido. Forma a tu
            equipo para que sea polivalente — un camarero que puede ayudar
            en cocina en momentos puntuales vale el doble.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            El objetivo no es pagar menos a tu gente — es que cada hora de
            trabajo genere el máximo valor posible. Un equipo bien organizado
            con cuatro personas rinde más que uno desorganizado con seis.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Sube precios de forma estratégica
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la decisión que más miedo da en hostelería, pero suele ser la
            más efectiva. Si tus costes han subido un 15% en los últimos dos
            años y tus precios solo un 5%, estás regalando margen. La
            realidad es que una subida del 8-10% en precios rara vez provoca
            una caída significativa de clientes — sobre todo si la acompañas
            de mejora en la presentación, el servicio o la experiencia.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Haz las cuentas: si tu ticket medio es de 18 &euro; y subes un
            10%, pasas a 19,80 &euro;. Si atiendes 60 comensales al día,
            son 108 &euro; más cada día. 3.240 &euro; al mes. Más de
            38.000 &euro; al año. ¿Cuántos clientes necesitarías perder
            para que esa subida no compensara? Muchos más de los que
            realmente perderás.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            6. Potencia los artículos de alto margen
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No todos los productos dejan el mismo margen. En general, las
            bebidas (especialmente vino, cócteles y cafés) tienen márgenes
            muy superiores a la comida. Postres caseros, entrantes para
            compartir, cafés especiales y sugerencias del día con
            ingredientes de bajo coste son palancas de rentabilidad
            enormes.
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Forma a tu equipo de sala para que sugiera activamente: «¿Os
            apetece un postre? Hoy tenemos tarta de queso casera». Un
            postre que te cuesta 0,80 &euro; y vendes a 5,50 &euro; mejora
            la rentabilidad de cada mesa de forma brutal. Multiplicado por
            30 mesas al día, son más de 4.000 &euro; de beneficio extra
            al mes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            7. Revisa los gastos fijos con lupa
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            ¿Cuándo fue la última vez que negociaste el alquiler? ¿Has
            comparado tu tarifa eléctrica con otras comercializadoras?
            ¿Tienes suscripciones a plataformas de delivery que no te
            compensan? ¿Tu seguro es el adecuado o estás pagando coberturas
            que no necesitas? ¿La gestoría te da un servicio acorde a lo
            que pagas?
          </p>
          <p className="mt-3 text-gray-600 md:text-lg">
            Haz una auditoría completa de todos los gastos fijos al menos
            una vez al año. En hostelería, los gastos fijos pueden suponer
            entre el 20% y el 30% de la facturación. Reducirlos un 10%
            equivale a aumentar tu beneficio neto entre un 2% y un 3%
            sobre ventas — que en este sector es la diferencia entre
            sobrevivir y vivir bien.
          </p>

          {/* Aviso importante */}
          <div className="my-10 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
            <p className="font-semibold text-amber-800">
              Consejo práctico
            </p>
            <p className="mt-2 text-amber-700">
              No intentes aplicar las siete decisiones a la vez. Empieza por
              las dos que más impacto inmediato tengan en tu caso — normalmente
              el escandallo y la subida de precios. Una vez estabilizadas,
              pasa a las siguientes. Los cambios sostenibles se hacen paso a
              paso.
            </p>
          </div>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: restaurante familiar que mejoró su margen un 50%
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace un tiempo trabajé con un restaurante familiar en una ciudad
            gallega. Llevaban doce años abiertos, con buena clientela y una
            facturación mensual de unos 35.000 euros. El problema: el
            propietario no se llevaba más de 1.200 euros al mes — después de
            trabajar todos los días de la semana, festivos incluidos. Su
            mujer llevaba la sala y su hijo estaba en cocina. Una familia
            entera dedicada al negocio con un retorno ridículo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando nos sentamos a analizar los números, encontramos los
            sospechosos habituales:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Food cost del 38% — casi cinco puntos por encima de lo recomendable. No escandallaban ningún plato.",
              "Una carta con 52 platos, de los cuales 18 se vendían muy poco pero generaban stock, desperdicio y complejidad en cocina.",
              "Desperdicio estimado del 12% sobre compras. Mucho producto fresco se tiraba los lunes por pedidos excesivos del jueves.",
              "El precio del menú del día no había subido en tres años, a pesar de que la materia prima había subido un 20%.",
              "Un contrato eléctrico de 2019 que nadie había revisado — pagaban un 30% más de lo necesario.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-accent-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 md:text-lg">
            El plan de acción fue directo:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Escandallamos los 30 platos más vendidos y ajustamos gramajes donde era posible sin afectar la percepción del cliente.",
              "Redujimos la carta de 52 a 34 platos, eliminando los que no se vendían y los de margen bajo que no aportaban diferenciación.",
              "Implementamos control de pedidos con previsión semanal para reducir el desperdicio del 12% al 6%.",
              "Subimos el menú del día de 12 a 14 euros y ajustamos la carta entre un 8% y un 12% según el plato.",
              "Renegociamos el contrato eléctrico y cambiamos de comercializadora, ahorrando 280 euros al mes.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 md:text-lg">
            <strong>Resultado a los cuatro meses:</strong> la facturación
            bajó un 3% (perdieron algunos clientes muy sensibles al precio
            del menú), pero el beneficio neto pasó de 1.200 a 1.850 euros
            mensuales para el propietario — un incremento de más del 50%.
            Con la carta más corta, la cocina funcionaba mejor, se tiraba
            menos producto y el equipo estaba menos estresado. El propietario
            empezó a librar un día a la semana por primera vez en cinco años.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No fue magia. No fue una inversión millonaria. Fue sentarse,
            mirar los números y tomar decisiones con método. Puedes ver más
            ejemplos de cómo trabajamos con distintos sectores en nuestra{" "}
            <a
              href="/experiencia-sectores-casos"
              className="text-accent-600 underline hover:text-accent-700"
            >
              página de experiencia y casos
            </a>.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No necesitábamos más clientes. Necesitábamos saber cuánto
            nos costaba cada plato y dejar de regalar margen sin saberlo.&rdquo;
            <span className="mt-2 block text-base not-italic text-gray-500">
              — Propietario de restaurante familiar, Galicia
            </span>
          </blockquote>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: la hostelería es dura, pero controlable con método
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si has llegado hasta aquí, probablemente te hayas reconocido en
            más de un punto. Y eso no es malo — es el primer paso para
            cambiar las cosas. La hostelería es uno de los sectores más
            exigentes que existen: horarios interminables, márgenes
            ajustados, una dependencia brutal de la materia prima y del
            equipo humano.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero también es un sector donde pequeñas decisiones bien tomadas
            producen resultados enormes. Escandallar la carta, ajustar
            precios, controlar el desperdicio, negociar con proveedores y
            optimizar el personal no requiere una inversión millonaria.
            Requiere números claros, método y la voluntad de mirar lo que
            muchas veces preferimos no ver.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tu restaurante o bar puede ser rentable. Puede darte un sueldo
            digno. Puede darte incluso tiempo libre. Pero para eso necesitas
            dejar de gestionarlo «a ojo» y empezar a gestionarlo con datos.
            Y si necesitas a alguien que te ayude a dar ese paso, que se
            siente contigo a mirar los números y te diga exactamente dónde
            se escapa tu rentabilidad,{" "}
            <a
              href="/diagnostico-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              puedes solicitar un diagnóstico de tu negocio
            </a>
            . Es gratuito, sin compromiso, y puede ser el punto de inflexión
            que tu restaurante necesita.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cada mes que pasa sin revisar la estructura de tu restaurante es
            dinero que se pierde. No mañana. Hoy.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-mejorar-rentabilidad-restaurante-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres mejorar la rentabilidad de tu restaurante?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos los números de tu negocio hostelero —
            escandallo, food cost, personal, desperdicio — y diseñamos un
            plan de acción concreto para que cada plato y cada servicio te
            deje el margen que merece.
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

      <BlogNav currentSlug="como-mejorar-rentabilidad-restaurante-bar" />

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
