import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo calcular el margen de beneficio de un producto o servicio | Consultoría Método",
  description: "Aprende a calcular el margen bruto y neto de tus productos y servicios con fórmulas claras y ejemplos reales. Consultoría empresarial en Coruña, Galicia y por videollamada.",
  keywords: ["calcular margen beneficio", "margen bruto producto", "rentabilidad por producto", "margen neto servicio", "fórmula margen beneficio", "consultoría empresas Coruña", "mejora de empresas"],
  openGraph: { title: "Cómo calcular el margen de beneficio de un producto o servicio", description: "La mayoría de pymes no sabe el margen real de lo que vende. Descubre cómo calcularlo y qué hacer cuando descubres que un producto te da pérdidas.", locale: "es_ES", type: "article" },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-calcular-margen-beneficio-producto" },
};
const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Cómo calcular el margen de beneficio de un producto o servicio", author: { "@type": "Person", name: "Pablo García Dacosta" }, publisher: { "@type": "Organization", name: "Consultoría Método" }, datePublished: "2025-04-07" };

export default function ArticuloMargen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">Cómo calcular el margen de beneficio de un producto o servicio</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">Si alguien te pregunta «¿qué margen tiene lo que vendes?» y no puedes responder con un número exacto, tienes un problema serio. Porque podrías estar perdiendo dinero en cada venta sin saberlo.</p>
          <p className="mt-4 text-sm text-primary-300">Por {SITE.consultant} · Consultoría de negocios — Galicia y por videollamada en el resto de España</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">Es una de las preguntas más básicas de cualquier negocio y, sin embargo, la mayoría de los empresarios pyme no la saben responder con precisión. Saben lo que facturan, saben lo que pagan, pero el margen real de cada producto o servicio es una incógnita.</p>
          <p className="mt-4 text-gray-600 md:text-lg">En este artículo vamos a ver qué es el margen de beneficio, cómo calcularlo correctamente (incluyendo los costes que casi todo el mundo olvida), y qué hacer cuando descubres que un producto que creías rentable en realidad te está costando dinero.</p>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Por qué este error se repite tanto en las pymes</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La mayoría de los empresarios aprendieron a llevar su negocio haciendo — no calculando. Pusieron precios imitando a la competencia o con un margen «a ojo». Y funcionó. Mientras tanto, el negocio crecía, los gastos aumentaban, los costes cambiaban, los proveedores subían precios, y nunca se volvió a sentar nadie a recalcular.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El resultado es el que encuentro casi siempre cuando hago un diagnóstico: entre un 20 % y un 40 % de los productos o servicios de una pyme tienen un margen muy inferior al que el empresario cree. Y un 10 % – 15 % directamente están en pérdidas. Lo he visto en tiendas, en talleres, en restaurantes, en empresas de servicios, en consultorías. En todos los sectores.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un ejemplo real: en el{" "}
            <a href="/blog/caso-exito-restaurante-rentabilidad" className="text-accent-600 underline hover:text-accent-700">
              caso de un restaurante que acompañamos
            </a>{" "}
            descubrimos que el chuletón — uno de los platos más pedidos — dejaba un margen del 8 % cuando el dueño pensaba que era del 35 %. Multiplicado por cientos de raciones al mes, la diferencia era brutal.
          </p>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Margen bruto vs margen neto: no es lo mismo</h2>
          <p className="mt-4 text-gray-600 md:text-lg">El <strong>margen bruto</strong> es lo que te queda después de restar los costes directos de producir o entregar lo que vendes (materiales, mano de obra directa, transporte). El <strong>margen neto</strong> es lo que queda después de restar también los costes indirectos (alquiler, administración, seguros, tu propio sueldo). Muchas empresas miran solo el margen bruto y creen que van bien, cuando el margen neto es mínimo o incluso negativo.</p>

          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50 p-6 not-prose">
            <h3 className="text-lg font-bold text-primary-900">Las fórmulas</h3>
            <div className="mt-4 space-y-4 text-gray-700 md:text-lg">
              <p><strong>Margen bruto (€)</strong> = Precio de venta − Costes directos</p>
              <p><strong>Margen bruto (%)</strong> = (Margen bruto / Precio de venta) × 100</p>
              <p><strong>Margen neto (€)</strong> = Margen bruto − Costes indirectos asignados</p>
              <p className="text-sm text-gray-500 mt-2">Ejemplo: Vendes un servicio a 1.000€. Te cuesta 400€ en mano de obra directa y materiales. Tu margen bruto es 600€ (60%). Si asignas 250€ de costes indirectos, tu margen neto real es 350€ (35%).</p>
            </div>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Los costes que casi nadie incluye</h2>
          <p className="mt-4 text-gray-600 md:text-lg">Aquí es donde la mayoría de pymes se equivoca. Calculan el margen contando solo el material y la mano de obra directa, pero olvidan:</p>
          <ul className="mt-4 space-y-2">
            {["Tu propio tiempo (si no lo cuentas como coste, estás regalando horas)", "Desplazamientos y transporte", "Tiempo de comercialización (horas de presupuesto, reuniones, seguimiento)", "Garantías y servicio postventa", "Impagados y morosidad (un % de lo que facturas no lo cobras)", "Costes financieros (si financias al cliente 60-90 días, eso tiene un coste)"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg"><span className="mt-1 text-red-500 font-bold">!</span><span>{item}</span></li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Cómo calcular el margen real en empresas de servicios</h2>
          <p className="mt-4 text-gray-600 md:text-lg">En servicios, el «material» es tu tiempo. Y el tiempo tiene un coste real que puedes calcular así:</p>
          <div className="my-8 rounded-xl border border-amber-200 bg-amber-50 p-6 not-prose">
            <p className="text-gray-700 md:text-lg"><strong>Coste/hora real</strong> = (Tu sueldo anual + Seguridad Social + gastos fijos) / horas productivas al año</p>
            <p className="mt-3 text-gray-700 md:text-lg">Si tu coste anual total es 60.000€ y trabajas 1.600 horas productivas, tu coste/hora real es 37,50€. Si cobras un servicio a 80€/hora, tu margen bruto es 42,50€/hora (53%). Si lo cobras a 40€/hora, tu margen es solo 2,50€/hora (6%).</p>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Ejemplos reales por sector</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El margen saludable varía enormemente según el tipo de negocio. Aquí tienes algunas referencias aproximadas que uso como primer filtro cuando analizo una empresa:
          </p>

          <div className="my-8 overflow-x-auto not-prose">
            <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 p-3 text-left text-gray-900">Sector</th>
                  <th className="border border-gray-200 p-3 text-left text-gray-900">Margen bruto típico</th>
                  <th className="border border-gray-200 p-3 text-left text-gray-900">Margen neto saludable</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 p-3 text-gray-700">Hostelería (restaurante)</td><td className="border border-gray-200 p-3 text-gray-700">65 – 72 %</td><td className="border border-gray-200 p-3 text-gray-700">10 – 15 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 text-gray-700">Retail / comercio</td><td className="border border-gray-200 p-3 text-gray-700">40 – 55 %</td><td className="border border-gray-200 p-3 text-gray-700">5 – 10 %</td></tr>
                <tr><td className="border border-gray-200 p-3 text-gray-700">Servicios profesionales</td><td className="border border-gray-200 p-3 text-gray-700">60 – 80 %</td><td className="border border-gray-200 p-3 text-gray-700">15 – 25 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 text-gray-700">Talleres y reparaciones</td><td className="border border-gray-200 p-3 text-gray-700">35 – 50 %</td><td className="border border-gray-200 p-3 text-gray-700">8 – 15 %</td></tr>
                <tr><td className="border border-gray-200 p-3 text-gray-700">Construcción / reformas</td><td className="border border-gray-200 p-3 text-gray-700">18 – 30 %</td><td className="border border-gray-200 p-3 text-gray-700">4 – 10 %</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 text-gray-700">E-commerce</td><td className="border border-gray-200 p-3 text-gray-700">30 – 45 %</td><td className="border border-gray-200 p-3 text-gray-700">4 – 12 %</td></tr>
              </tbody>
            </table>
            <p className="mt-3 text-sm text-gray-500">Son rangos orientativos. Cada negocio tiene su realidad particular — ubicación, tamaño, estructura de costes, tipo de cliente. Pero si estás muy por debajo del rango habitual de tu sector, ahí tienes una alarma.</p>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Ejemplo paso a paso: un taller mecánico</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Para que se vea claro, vamos a un caso concreto. Un taller que atiende una avería tipo — cambio de embrague — factura 850 € por el servicio. Así se descompone el cálculo real:
          </p>

          <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 not-prose">
            <ul className="space-y-2 text-gray-700 md:text-lg">
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Precio de venta</span><span className="font-semibold">850 €</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Pieza (embrague + consumibles)</span><span>− 260 €</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Mano de obra directa (5 h × 22 €)</span><span>− 110 €</span></li>
              <li className="flex justify-between border-b-2 border-gray-300 pb-2 pt-2 font-semibold"><span>Margen bruto</span><span className="text-emerald-700">480 € (56 %)</span></li>
              <li className="flex justify-between pt-2"><span>Alquiler del local (parte proporcional)</span><span>− 60 €</span></li>
              <li className="flex justify-between"><span>Suministros y seguros (proporcional)</span><span>− 35 €</span></li>
              <li className="flex justify-between"><span>Administración y gestoría (proporcional)</span><span>− 25 €</span></li>
              <li className="flex justify-between"><span>Tu sueldo como gerente (proporcional)</span><span>− 90 €</span></li>
              <li className="flex justify-between border-t-2 border-gray-300 pt-2 font-semibold"><span>Margen neto real</span><span className="text-emerald-700">270 € (32 %)</span></li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">El margen bruto parecía muy atractivo (56 %). Pero cuando repartes los costes indirectos proporcionalmente al tiempo que ocupa esa reparación, el margen real es del 32 %. Sigue siendo un buen número — pero muy distinto.</p>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">¿Y si descubres que un producto tiene margen negativo?</h2>
          <p className="mt-4 text-gray-600 md:text-lg">Pasa más de lo que crees. Cuando analizamos los márgenes por producto o servicio en una consultoría, siempre encontramos al menos uno que la empresa creía rentable y no lo era. Las opciones son:</p>
          <ol className="mt-4 space-y-3">
            {[
              ["Subir el precio.", <>Si el mercado lo permite, es la primera opción. Lee más sobre <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">cómo fijar precios</a>.</>],
              ["Reducir el coste de entrega.", "Buscar proveedores más baratos, optimizar procesos, reducir tiempos."],
              ["Eliminarlo.", "Si no puedes subirle el precio ni bajarle el coste, a veces la mejor decisión es dejar de ofrecerlo."],
              ["Usarlo como gancho.", "A veces un producto con margen bajo atrae clientes que luego compran otros con margen alto. Pero tiene que ser una decisión consciente, no accidental."],
            ].map(([titulo, desc], i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg"><span className="mt-1 text-primary-600 font-bold">{i+1}.</span><span><strong className="text-gray-900">{titulo}</strong> {desc}</span></li>
            ))}
          </ol>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">La regla 80/20 aplicada a los márgenes</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando analizamos el catálogo de productos o servicios de una pyme, el patrón que aparece casi siempre es el mismo: el 20 % de lo que vendes genera el 80 % del margen. Y el 30 % del catálogo, muchas veces, no solo no aporta — resta.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Por eso la primera acción que recomiendo después de calcular márgenes es clasificar cada producto en cuatro categorías:
          </p>

          <div className="my-8 grid gap-4 md:grid-cols-2 not-prose">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <p className="font-bold text-emerald-900">Estrella</p>
              <p className="mt-1 text-sm text-emerald-800">Margen alto + volumen alto. Tu motor. Protégelo, promociónalo, asegúrate de que siempre esté disponible.</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="font-bold text-blue-900">Apuesta</p>
              <p className="mt-1 text-sm text-blue-800">Margen alto + volumen bajo. Potencial de crecer. Dale visibilidad comercial y marketing.</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-900">Trabajador</p>
              <p className="mt-1 text-sm text-amber-800">Margen bajo + volumen alto. Genera tráfico pero poco beneficio. Intenta subir precio o reducir coste.</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-900">Lastre</p>
              <p className="mt-1 text-sm text-red-800">Margen bajo + volumen bajo. No aporta y complica. Candidato claro a eliminar.</p>
            </div>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Errores frecuentes al calcular el margen</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            En más de 25 años revisando cuentas de pymes, estos son los errores que me encuentro una y otra vez:
          </p>
          <ol className="mt-4 space-y-3 list-decimal list-inside">
            <li className="text-gray-700 md:text-lg"><strong className="text-gray-900">No contabilizar el tiempo del dueño.</strong> Si eres autónomo y tu tiempo no tiene coste, todos los márgenes están inflados.</li>
            <li className="text-gray-700 md:text-lg"><strong className="text-gray-900">Ignorar la merma.</strong> Producto que compras y no vendes: desperdicio, caducidad, devolución, roturas. Puede ser el 5-10 % del coste real.</li>
            <li className="text-gray-700 md:text-lg"><strong className="text-gray-900">No actualizar los costes cuando cambian los precios.</strong> Si el proveedor sube un 8 % y tú no actualizas tu escandallo, tu margen cae sin que te enteres.</li>
            <li className="text-gray-700 md:text-lg"><strong className="text-gray-900">Promedia en lugar de analizar por producto.</strong> Un margen medio del 40 % puede esconder un producto al 70 % y otro al 5 %. El promedio miente.</li>
            <li className="text-gray-700 md:text-lg"><strong className="text-gray-900">Olvidar los descuentos.</strong> El precio de venta en la factura no es el precio real si aplicas descuentos frecuentes, promociones o condiciones especiales.</li>
            <li className="text-gray-700 md:text-lg"><strong className="text-gray-900">No incluir impagados y morosidad.</strong> Si facturas 100 y cobras 95, tu margen real es sobre 95, no sobre 100.</li>
          </ol>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Plantilla mental para revisar tus márgenes cada trimestre</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El cálculo de márgenes no es un ejercicio que haces una vez y olvidas. Los costes cambian, los proveedores suben precios, la eficiencia operativa varía. Cada 3 meses deberías volver a hacer esta revisión:
          </p>

          <div className="my-8 space-y-3 not-prose">
            {[
              { paso: "1. Actualiza los costes directos", desc: "¿Ha subido algún proveedor? ¿Han cambiado tiempos de producción? Actualiza los escandallos." },
              { paso: "2. Revisa la asignación de costes indirectos", desc: "Si cambió el alquiler, los seguros o el personal, redistribuye los costes indirectos de forma realista." },
              { paso: "3. Recalcula margen por cada producto/servicio", desc: "Lista completa. Sin excepciones. Con la actualización de costes aplicada." },
              { paso: "4. Compara con el trimestre anterior", desc: "¿Qué ha mejorado? ¿Qué ha empeorado? ¿Por qué? Las tendencias son más importantes que los números puntuales." },
              { paso: "5. Decide qué cambiar", desc: "Subir precios, negociar con proveedores, eliminar referencias, cambiar procesos. Acción concreta — no más análisis." },
            ].map((item) => (
              <div key={item.paso} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <p className="font-bold text-gray-900">{item.paso}</p>
                <p className="mt-1 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 md:text-lg">
            Conocer tus márgenes reales es la base de cualquier mejora de{" "}
            <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">rentabilidad</a>.
            Sin este dato, todas las decisiones de precios, marketing y crecimiento se toman a ciegas. Y también es la base para{" "}
            <a href="/blog/como-saber-si-mi-negocio-es-rentable" className="text-accent-600 underline hover:text-accent-700">
              saber si tu negocio es rentable de verdad
            </a>{" "}
            — porque la rentabilidad global de la empresa no es más que la suma de los márgenes de todo lo que vendes.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza esta semana: coge tus 5 productos o servicios principales y calcula el margen real de cada uno. Lo que descubras puede cambiar tu negocio.
          </p>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si necesitas ayuda para montar un sistema de{" "}
            <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">indicadores</a>{" "}
            que te permita controlar márgenes mes a mes, es exactamente lo que hacemos en un diagnóstico de negocio.
          </p>

          </article>
          <div className="mt-12 lg:mt-0"><div className="lg:sticky lg:top-28"><BlogSidebar currentSlug="como-calcular-margen-beneficio-producto" /></div></div>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">¿Conoces el margen real de lo que vendes?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">En un diagnóstico de tu negocio analizamos la rentabilidad real de cada producto y servicio. Sin suposiciones — con números.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>
      <BlogNav currentSlug="como-calcular-margen-beneficio-producto" />
    </>
  );
}
