import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo negociar con proveedores cuando eres pequeño | Consultoría Método",
  description:
    "Estrategias reales de negociación con proveedores para pymes sin poder de compra. Tácticas para mejorar precios, plazos de pago y condiciones sin quemar relaciones.",
  keywords: [
    "negociar con proveedores",
    "negociación proveedores pyme",
    "cómo conseguir mejores precios proveedores",
    "condiciones de pago proveedores",
    "reducir costes proveedores",
    "gestión de compras pyme",
    "consultor empresarial Coruña",
    "mejorar rentabilidad empresa",
  ],
  openGraph: {
    title: "Cómo negociar con proveedores cuando eres pequeño",
    description:
      "No necesitas comprar millones para negociar bien. 6 tácticas probadas para pymes que quieren mejores condiciones sin quemar relaciones.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/blog/como-negociar-con-proveedores",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo negociar con proveedores cuando eres pequeño",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-06-11",
};

export default function ArticuloNegociarProveedores() {
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
            Cómo negociar con proveedores cuando eres pequeño
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            No compras millones al año. No eres la cuenta más grande de
            nadie. Pero eso no significa que no puedas negociar. Significa
            que tienes que negociar de otra manera.
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
            Una de las primeras cosas que reviso cuando trabajo con una pyme
            es la relación con sus proveedores. Y casi siempre encuentro lo
            mismo: condiciones que llevan años sin renegociar, precios
            aceptados sin comparar y una sensación generalizada de que
            &ldquo;como somos pequeños, no tenemos fuerza para pedir
            nada&rdquo;.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es falso. He visto a empresas de 3 empleados conseguir un 12 %
            de ahorro anual en compras simplemente cambiando su forma de
            negociar. No hace falta ser grande. Hace falta ser metódico, estar
            informado y entender que la negociación no va solo de precio — va
            de condiciones.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este artículo te da las tácticas concretas que aplico con mis
            clientes. Son las mismas que han generado ahorros de entre
            8.000 y 45.000 euros anuales en pymes de facturación modesta.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No negocias con tu proveedor una vez al año. Negocias
            cada vez que aceptas un precio, un plazo o una condición sin
            cuestionarlos.&rdquo;
          </blockquote>

          {/* Por qué las pymes no negocian */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué la mayoría de pymes no negocian (y lo que les cuesta)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las razones son siempre las mismas: falta de tiempo, miedo a
            molestar al proveedor, la creencia de que no tienen poder de
            negociación o simplemente la inercia de llevar años con las
            mismas condiciones.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El coste de esa pasividad es enorme. Si compras 200.000 euros
            al año en materiales y servicios — algo habitual en una pyme de
            5–10 empleados — y consigues una mejora media del 7 %, son
            14.000 euros que van directos a tu beneficio. No a tu
            facturación, a tu beneficio neto. Pocos esfuerzos comerciales
            tienen un retorno tan directo.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              La regla del impacto directo:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              Cada euro que ahorras en compras va íntegramente a tu
              beneficio. Para generar ese mismo euro vendiendo más,
              necesitas facturar entre 5 y 10 euros adicionales (dependiendo
              de tu margen). Negociar mejor con proveedores es la forma más
              rápida de{" "}
              <a
                href="/blog/como-mejorar-rentabilidad-empresa"
                className="text-accent-600 underline hover:text-accent-700"
              >
                mejorar la rentabilidad de tu empresa
              </a>.
            </p>
          </div>

          {/* 6 tácticas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            6 tácticas de negociación que funcionan sin ser grande
          </h2>

          <div className="not-prose my-8 space-y-6">
            {/* Táctica 1 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">1</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Consolida tus compras
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Si compras el mismo tipo de producto a tres proveedores
                    diferentes, tu volumen se diluye y tu poder de
                    negociación desaparece. Concentra las compras en menos
                    proveedores para conseguir volumen unitario. Un cliente
                    mío compraba material de oficina a cuatro proveedores
                    distintos. Al consolidar en uno solo, negoció un 15 % de
                    descuento y portes gratuitos. Ahorro anual: 3.200 euros.
                  </p>
                </div>
              </div>
            </div>

            {/* Táctica 2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">2</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Negocia condiciones, no solo precio
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    El precio es solo una de las variables. Puedes negociar
                    plazos de pago (de 30 a 60 días ganas un mes de
                    tesorería), portes incluidos, rappels por volumen anual,
                    prioridad en entregas, devoluciones sin coste o
                    formación sobre el producto. A veces un proveedor no
                    puede bajar el precio pero sí darte 60 días de pago —
                    y eso puede valer más para tu{" "}
                    <a
                      href="/blog/como-mejorar-el-flujo-de-caja"
                      className="text-accent-600 underline hover:text-accent-700"
                    >
                      flujo de caja
                    </a>{" "}
                    que un 3 % de descuento.
                  </p>
                </div>
              </div>
            </div>

            {/* Táctica 3 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">3</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Ten siempre una alternativa real
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Antes de negociar, pide presupuesto a dos o tres
                    competidores. No para cambiar necesariamente, sino para
                    tener información. Cuando te sientas a hablar con tu
                    proveedor habitual y puedes decir &ldquo;he recibido una
                    oferta un 10 % más baja con condiciones similares&rdquo;,
                    la conversación cambia completamente. No es una amenaza —
                    es información legítima que convierte una petición en una
                    negociación real.
                  </p>
                  <div className="mt-4 rounded-lg bg-primary-50/60 border-l-4 border-primary-500 px-4 py-3">
                    <p className="text-sm font-semibold text-primary-800">
                      Regla práctica: revisa al menos un proveedor importante cada trimestre. Pide dos alternativas y compara.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Táctica 4 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">4</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Construye relación, no solo transacción
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Los proveedores también son empresas. Y como toda
                    empresa, prefieren trabajar con clientes fiables,
                    puntuales y fáciles de gestionar. Paga siempre a tiempo,
                    avisa con antelación de cambios en tus pedidos, da
                    feedback sobre la calidad y sé transparente. Un cliente
                    pequeño pero fiable vale más que un cliente grande que
                    paga a 120 días y da problemas constantemente. Esa
                    fiabilidad es tu moneda de cambio.
                  </p>
                </div>
              </div>
            </div>

            {/* Táctica 5 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">5</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Ofrece compromiso a cambio de mejores condiciones
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Un proveedor valora la previsibilidad. Si puedes
                    comprometer un volumen mínimo anual o trimestral, tienes
                    algo que ofrecer a cambio de un mejor precio. &ldquo;Te
                    garantizo 4.000 euros al mes durante 12 meses a cambio
                    de un 8 % de descuento y portes incluidos.&rdquo; Para
                    el proveedor eso es una venta asegurada — y eso tiene
                    valor real en su planificación. Un restaurante que
                    trabajé pasó de comprar semana a semana a comprometer un
                    volumen mensual con su distribuidor: consiguió un 9 % de
                    ahorro y prioridad en entregas.
                  </p>
                </div>
              </div>
            </div>

            {/* Táctica 6 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">6</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Negocia en el momento adecuado
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    El timing importa. Los mejores momentos para renegociar
                    son: al final del trimestre o del año fiscal del
                    proveedor (necesita cerrar cifras), cuando lanza un
                    producto nuevo que quiere colocar, cuando sabes que ha
                    perdido un cliente grande o cuando tú tienes una
                    alternativa encima de la mesa. El peor momento: cuando
                    necesitas un pedido urgente. Nunca negocies desde la
                    necesidad — negocia desde la calma y la información.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ejemplo de impacto real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Ejemplo real: 18.700 euros de ahorro en una empresa de 7
            personas
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Una empresa de servicios técnicos con 7 empleados y 380.000
            euros de facturación anual gastaba 145.000 euros en compras a
            proveedores. Nunca había negociado formalmente. Este fue el
            resultado tras aplicar las tácticas anteriores durante tres
            meses:
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Acción</th>
                  <th className="px-4 py-3 font-semibold">Detalle</th>
                  <th className="px-4 py-3 font-semibold">Ahorro anual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Consolidar proveedores de material</td>
                  <td className="px-4 py-3">De 5 a 2 proveedores, mayor volumen unitario</td>
                  <td className="px-4 py-3 text-green-700 font-medium">6.200 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Renegociar seguros</td>
                  <td className="px-4 py-3">Comparativa con 3 corredores, mismas coberturas</td>
                  <td className="px-4 py-3 text-green-700 font-medium">2.800 €</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Ampliar plazo de pago</td>
                  <td className="px-4 py-3">De 30 a 60 días con proveedor principal</td>
                  <td className="px-4 py-3 text-green-700 font-medium">4.100 € *</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Compromiso de volumen anual</td>
                  <td className="px-4 py-3">Rappel del 7 % por volumen garantizado</td>
                  <td className="px-4 py-3 text-green-700 font-medium">5.600 €</td>
                </tr>
                <tr className="bg-primary-50">
                  <td className="px-4 py-3 font-bold" colSpan={2}>Total ahorro anual</td>
                  <td className="px-4 py-3 text-green-700 font-bold">18.700 €</td>
                </tr>
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs text-gray-500 italic">
              * El ahorro en plazo de pago se calcula como coste financiero evitado (línea de crédito no utilizada).
            </p>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            18.700 euros que fueron directos al beneficio, sin vender un
            euro más. Ese dinero equivale a cerrar 15–20 ventas adicionales
            al año. Si quieres ver más formas de mejorar tu margen sin
            aumentar la facturación, te interesa el artículo sobre{" "}
            <a
              href="/blog/como-reducir-gastos-empresa-sin-recortar"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo reducir gastos sin recortar en lo que importa
            </a>.
          </p>

          {/* Lo que NO debes hacer */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Lo que NO debes hacer al negociar
          </h2>

          <div className="my-8 rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="font-bold text-red-900 md:text-lg">
              Errores que destrozan relaciones con proveedores:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Mentir sobre ofertas de la competencia: si te pillan, pierdes toda credibilidad.",
                "Exprimir al proveedor hasta que no gane nada: un proveedor sin margen te dará peor servicio o te dejará tirado cuando tenga opción.",
                "Negociar solo cuando estás desesperado: desde la urgencia no se negocia, se suplica.",
                "Cambiar de proveedor solo por precio: el más barato no siempre es el más rentable si falla en plazos, calidad o servicio postventa.",
                "No cumplir lo pactado: si prometes un volumen y no lo alcanzas, la próxima negociación será mucho más difícil.",
                "Tratar la negociación como una batalla: es una conversación entre dos empresas que quieren trabajar juntas en buenas condiciones.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-red-600">&#10007;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklist */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Checklist antes de sentarte a negociar
          </h2>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              Prepara estos datos antes de cada negociación:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Tu volumen de compra anual con ese proveedor (dato exacto, no aproximado).",
                "Tu historial de pago: ¿siempre puntual? Es tu mejor argumento.",
                "Al menos un presupuesto alternativo de un competidor real.",
                "Las condiciones exactas que quieres conseguir (precio, plazo, portes, rappel).",
                "Tu mejor alternativa si la negociación no sale bien.",
                "El dato de cuánto margen gana el proveedor contigo (si puedes estimarlo).",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-amber-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: negociar bien es puro beneficio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas ser una gran empresa para negociar bien con tus
            proveedores. Necesitas información, alternativas, fiabilidad y
            un enfoque de relación a largo plazo. La negociación no es un
            evento puntual — es una actitud permanente ante cada condición
            que aceptas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Revisa cada año tus cinco proveedores principales. Pide
            alternativas. Compara. Siéntate a hablar con datos encima de la
            mesa. El ahorro medio que consigo con mis clientes en la primera
            ronda de renegociación está entre el 7 y el 12 % del gasto
            total en compras. Es dinero que estaba ahí, esperando a que
            alguien lo pidiera.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;En una pyme, cada euro ahorrado en compras vale entre 5
            y 10 euros en ventas nuevas. No hay ninguna acción comercial
            con un retorno tan inmediato.&rdquo;
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres un plan completo para mejorar los números de tu
            negocio, combina este artículo con la guía sobre{" "}
            <a
              href="/blog/como-mejorar-rentabilidad-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo mejorar la rentabilidad de tu empresa
            </a>{" "}
            y el artículo sobre{" "}
            <a
              href="/blog/como-mejorar-el-flujo-de-caja"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo mejorar tu flujo de caja
            </a>
            . Los tres juntos cubren las palancas clave de la salud
            financiera de una pyme.
          </p>

          {/* CTA inline */}
          <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              ¿Cuánto podrías ahorrar renegociando con tus proveedores?
            </p>
            <p className="mt-2 text-gray-600">
              Analizamos tu estructura de compras, identificamos las
              oportunidades de mejora y te acompañamos en las negociaciones
              clave. Resultados desde el primer mes.
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
              <BlogSidebar currentSlug="como-negociar-con-proveedores" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres mejorar las condiciones con tus proveedores?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Revisamos tu estructura de compras y te ayudamos a negociar
            mejores condiciones. Sin coste hasta que veas resultados.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
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

      <BlogNav currentSlug="como-negociar-con-proveedores" />
    </>
  );
}
