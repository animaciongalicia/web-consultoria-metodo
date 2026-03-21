import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo calcular el margen de beneficio de un producto o servicio | Consultoría Método",
  description: "Aprende a calcular el margen bruto y neto de tus productos y servicios con fórmulas claras y ejemplos reales. Consultoría empresarial en Coruña, Galicia y online.",
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
          <p className="mt-4 text-sm text-primary-300">Por {SITE.consultant} · Consultoría de negocios — Galicia y online en toda España</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">Es una de las preguntas más básicas de cualquier negocio y, sin embargo, la mayoría de los empresarios pyme no la saben responder con precisión. Saben lo que facturan, saben lo que pagan, pero el margen real de cada producto o servicio es una incógnita.</p>
          <p className="mt-4 text-gray-600 md:text-lg">En este artículo vamos a ver qué es el margen de beneficio, cómo calcularlo correctamente (incluyendo los costes que casi todo el mundo olvida), y qué hacer cuando descubres que un producto que creías rentable en realidad te está costando dinero.</p>

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

          <p className="mt-8 text-gray-600 md:text-lg">
            Conocer tus márgenes reales es la base de cualquier mejora de{" "}
            <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">rentabilidad</a>.
            Sin este dato, todas las decisiones de precios, marketing y crecimiento se toman a ciegas. Empieza esta semana: coge tus 5 productos o servicios
            principales y calcula el margen real de cada uno. Lo que descubras puede cambiar tu negocio.
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
