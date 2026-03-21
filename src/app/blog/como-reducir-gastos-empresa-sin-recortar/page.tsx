import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo reducir gastos en tu empresa sin recortar en lo que importa | Consultoría Método",
  description: "7 áreas donde las pymes malgastan dinero y cómo optimizar gastos sin cargarte la calidad ni el crecimiento. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: ["reducir gastos empresa", "recortar costes negocio", "optimizar gastos pyme", "ahorrar costes empresa", "gastos innecesarios negocio", "consultor empresarial Coruña", "mejora de empresas Galicia"],
  openGraph: { title: "Cómo reducir gastos en tu empresa sin recortar en lo que importa", description: "Optimizar no es recortar. Descubre las 7 áreas donde tu pyme pierde dinero sin saberlo.", locale: "es_ES", type: "article" },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-reducir-gastos-empresa-sin-recortar" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Cómo reducir gastos en tu empresa sin recortar en lo que importa", author: { "@type": "Person", name: "Pablo García Dacosta" }, publisher: { "@type": "Organization", name: "Consultoría Método" }, datePublished: "2025-03-24" };

export default function ArticuloReducirGastos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">Cómo reducir gastos en tu empresa sin recortar en lo que importa</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">Cuando los números aprietan, el primer impulso es cortar. Pero recortar a ciegas puede hacerte más daño que el gasto en sí. La clave no es gastar menos — es gastar mejor.</p>
          <p className="mt-4 text-sm text-primary-300">Por {SITE.consultant} · Consultoría de negocios — Galicia y online en toda España</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Hay una diferencia enorme entre optimizar gastos y recortar a lo loco. Cuando una empresa tiene problemas de{" "}
            <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">rentabilidad</a>,
            lo más fácil es coger las tijeras y cortar por lo sano: fuera el marketing, fuera la formación, fuera la herramienta que «no se usa tanto».
            Pero eso suele empeorar las cosas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En más de 25 años trabajando con pymes, he visto cómo los recortes mal dirigidos acaban costando más que lo que ahorran.
            En este artículo vamos a ver dónde pierden dinero realmente las pymes, qué se puede optimizar y qué no deberías tocar nunca.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Optimizar no es recortar. Es poner cada euro donde más retorno genera.»
          </blockquote>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">La diferencia entre recortar y optimizar</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Recortar es eliminar gastos sin criterio: el primero que pillas, fuera. Optimizar es analizar cada gasto, preguntarte «¿qué retorno me da esto?»
            y redirigir el dinero a donde genera más valor. Un empresario que recorta ahorra 500 euros al mes. Un empresario que optimiza
            gana 5.000 euros más de margen al año con el mismo nivel de gasto.
          </p>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">7 áreas donde las pymes malgastan dinero sin saberlo</h2>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">1. Suscripciones y herramientas que nadie usa</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Software contratado hace dos años que ya no se usa. Licencias duplicadas. Planes premium cuando el básico sería suficiente.
            Haz un inventario de todas las suscripciones mensuales. Te vas a sorprender de cuánto suman. En una empresa de 8 empleados
            encontré 1.200 euros al mes en herramientas que o no se usaban o estaban duplicadas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">2. Proveedores que llevan años sin renegociar</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si llevas más de dos años con el mismo proveedor sin haber renegociado condiciones, estás pagando de más. No se trata de
            exprimir — se trata de pedir lo justo. Pide tres presupuestos alternativos y usa esa información para renegociar. El simple
            hecho de pedir ya te da poder de negociación.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">3. Procesos manuales que consumen horas</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El tiempo de tu equipo es dinero. Si alguien dedica 5 horas a la semana a pasar datos de un Excel a otro, a generar facturas
            manualmente o a enviar emails uno a uno, eso son 20 horas al mes que estás pagando por trabajo que una herramienta de 30 euros
            haría sola. El coste oculto de los procesos manuales es brutal.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">4. Empleados mal aprovechados</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No hablo de despedir — hablo de que personas cualificadas dediquen su tiempo a tareas que no requieren su cualificación.
            Un comercial que dedica el 40% de su tiempo a tareas administrativas es un gasto enorme de talento. Reorganizar funciones
            puede ahorrarte una contratación.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">5. Marketing sin medir resultados</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si no sabes cuántos clientes te trae cada canal de marketing, estás tirando dinero. No es que el marketing sea un gasto —
            es que el marketing sin{" "}
            <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">indicadores</a>{" "}
            es una apuesta. Mide el retorno de cada euro invertido y elimina lo que no funciona.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">6. Inventario o stock excesivo</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En negocios con producto físico, el exceso de stock es capital muerto. Cada euro en almacén es un euro que no está trabajando.
            Revisa qué tienes parado más de 90 días y liquídalo. Mejor vender con menos margen que no vender nada.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">7. Gastos «pequeños» que nadie controla</h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Desplazamientos innecesarios, dietas, material de oficina, envíos urgentes por mala planificación. Individualmente son
            pequeños. Sumados a final de año, pueden suponer 5.000-10.000 euros. No se trata de ser tacaño — se trata de ser consciente.
          </p>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Lo que NUNCA deberías recortar</h2>
          <div className="my-8 rounded-xl border-2 border-red-200 bg-red-50 p-6 not-prose">
            <h3 className="text-lg font-bold text-red-900">No toques esto por mucho que apriete</h3>
            <ul className="mt-4 space-y-3 text-gray-700 md:text-lg">
              {[
                "Marketing que funciona. Si un canal te trae clientes rentables, aumentarlo no es un gasto — es una inversión.",
                "Formación del equipo. Un equipo que no se forma se queda atrás. Y sustituir a alguien que se va cuesta 6-12 meses de su sueldo.",
                "Calidad del producto/servicio. Bajar la calidad para ahorrar destruye la reputación. Y la reputación tarda años en construirse.",
                "Herramientas que ahorran tiempo. Si una herramienta de 50€/mes te ahorra 10 horas, el retorno es brutal. No la canceles.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-1 text-red-500 font-bold">✕</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">Sistema práctico de revisión mensual de gastos</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cada mes, dedica 1 hora a revisar tus gastos con esta plantilla mental:
          </p>
          <div className="my-8 space-y-4 not-prose">
            {[
              { paso: "1. Lista todos los gastos del mes", desc: "Sin excepción. Suscripciones, proveedores, personal, marketing, suministros, todo." },
              { paso: "2. Clasifícalos en 3 categorías", desc: "Esencial (sin esto no funciono), Productivo (me genera retorno medible), Cuestionable (no sé qué retorno da)." },
              { paso: "3. Analiza los «Cuestionables»", desc: "¿Puedo medirlo? ¿Lleva más de 3 meses sin dar resultado? ¿Lo renegocio o lo elimino?" },
              { paso: "4. Redirige el ahorro", desc: "El dinero que ahorras no va al bolsillo — va a reforzar lo que sí funciona." },
            ].map((item) => (
              <div key={item.paso} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <p className="font-bold text-gray-900">{item.paso}</p>
                <p className="mt-1 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si tienes{" "}
            <a href="/blog/problemas-de-liquidez-en-pymes" className="text-accent-600 underline hover:text-accent-700">problemas de liquidez</a>,
            esta revisión mensual es todavía más urgente. Cada euro que dejas de malgastar es un euro más de oxígeno para tu negocio.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Las empresas que mejor gestionan sus gastos no son las que menos gastan. Son las que mejor saben dónde poner cada euro.»
          </blockquote>

          </article>
          <div className="mt-12 lg:mt-0"><div className="lg:sticky lg:top-28"><BlogSidebar currentSlug="como-reducir-gastos-empresa-sin-recortar" /></div></div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">¿Necesitas optimizar los gastos de tu empresa?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">En un diagnóstico analizamos juntos cada línea de gasto, identificamos lo que sobra y lo que falta, y diseñamos un plan para que cada euro trabaje a tu favor.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>
      <BlogNav currentSlug="como-reducir-gastos-empresa-sin-recortar" />
    </>
  );
}
