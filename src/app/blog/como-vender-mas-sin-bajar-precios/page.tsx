import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo vender más sin bajar precios | Consultoría Método",
  description:
    "Bajar precios no es una estrategia de ventas. Descubre cómo vender más mejorando tu propuesta de valor. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "vender más sin bajar precios",
    "aumentar ventas pyme",
    "estrategia ventas negocio",
    "vender por valor",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title: "Cómo vender más sin bajar precios | Consultoría Método",
    description:
      "Bajar precios no es una estrategia de ventas. Descubre cómo vender más mejorando tu propuesta de valor. Consultoría empresarial en Coruña, Galicia y online.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-vender-mas-sin-bajar-precios" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo vender más sin bajar precios",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2025-05-01",
};

export default function ArticuloVenderMas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo vender más sin bajar precios
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Cada vez que bajas el precio, estás diciéndole al mercado que tu producto no vale lo que pedías. Hay formas
            mucho mejores de vender más — y todas pasan por aportar más valor, no menos margen.
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

            <h2>La trampa del descuento</h2>
            <p>
              Cuando un cliente te pide un descuento y tú se lo das sin más, ocurren varias cosas a la vez: reduces tu
              margen, entrenas al cliente para que siempre pida rebaja y le dices al mercado que tu precio era inflado.
              Es una espiral descendente que muchas pymes conocen bien.
            </p>
            <p>
              He trabajado como <strong>consultor empresarial en Coruña</strong> con docenas de negocios que creían que
              su problema era el precio. En la mayoría de los casos, el problema real era otro: una propuesta de valor
              poco clara, un proceso de venta débil o un seguimiento comercial inexistente.
            </p>

            <blockquote>
              «Si lo más interesante que puedes decirle a un cliente es que eres el más barato, tienes un problema
              de propuesta de valor, no de precio.»
            </blockquote>

            <h2>Por qué bajar precios no funciona a largo plazo</h2>
            <ul>
              <li><strong>Destruye tu margen:</strong> un descuento del 10 % puede suponer un 30-50 % menos de beneficio neto.</li>
              <li><strong>Atrae al cliente equivocado:</strong> quien compra solo por precio se irá cuando otro sea más barato.</li>
              <li><strong>Desmoraliza al equipo:</strong> si siempre hay que regatear, tu equipo de ventas pierde confianza en lo que vende.</li>
              <li><strong>Genera una guerra de precios:</strong> si tú bajas, tu competencia baja, y nadie gana.</li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">📊 Dato clave</p>
              <p className="mt-2 text-accent-900">
                Según un estudio de McKinsey, una mejora del 1 % en el precio tiene un impacto medio del 8-11 % en el
                beneficio operativo. Bajar precios tiene el efecto contrario, amplificado.
              </p>
            </div>

            <h2>Vender por valor: el cambio de mentalidad</h2>
            <p>
              Vender por valor significa que el cliente entiende perfectamente <em>qué gana</em> al comprarte, y percibe
              que lo que paga es justo — o incluso una ganga — en relación a ese beneficio. Para llegar ahí necesitas
              trabajar tres cosas:
            </p>
            <ol>
              <li><strong>Conocer a tu cliente ideal:</strong> ¿qué problema tiene? ¿Cuánto le cuesta no resolverlo?</li>
              <li><strong>Articular tu propuesta de valor:</strong> no lo que haces, sino lo que el cliente obtiene.</li>
              <li><strong>Comunicarlo en cada punto de contacto:</strong> web, presupuestos, reuniones, seguimiento.</li>
            </ol>
            <p>
              Esto conecta directamente con saber{" "}
              <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo fijar precios en tu negocio
              </a>{" "}
              de forma estratégica, no por intuición o por copiar a la competencia.
            </p>

            <h2>Mejora tu proceso de ventas</h2>
            <p>
              Muchos negocios pierden ventas no porque su precio sea alto, sino porque su proceso de venta es caótico.
              Un proceso de ventas estructurado incluye:
            </p>
            <ul>
              <li><strong>Cualificación:</strong> no todos los que preguntan son clientes potenciales reales. Aprende a filtrar.</li>
              <li><strong>Diagnóstico:</strong> antes de ofrecer soluciones, entiende el problema del cliente en profundidad.</li>
              <li><strong>Presentación de valor:</strong> presenta tu oferta ligada a resultados, no a características.</li>
              <li><strong>Gestión de objeciones:</strong> prepara respuestas para las objeciones más comunes (incluida la de precio).</li>
              <li><strong>Seguimiento:</strong> el 80 % de las ventas se cierran entre el quinto y el duodécimo contacto. La mayoría de empresas abandonan al segundo.</li>
            </ul>

            <blockquote>
              «La venta no ocurre en el momento de la propuesta. Ocurre en el seguimiento. Y ahí es donde la mayoría
              de las pymes pierden dinero sin darse cuenta.»
            </blockquote>

            <h2>Upselling y cross-selling: vende más al mismo cliente</h2>
            <p>
              Conseguir un cliente nuevo cuesta entre 5 y 7 veces más que venderle algo adicional a uno existente. Sin
              embargo, la mayoría de las pymes dedican todo su esfuerzo a captar y casi nada a aumentar el valor medio
              de cada cliente.
            </p>
            <ul>
              <li><strong>Upselling:</strong> ofrece una versión superior o más completa de lo que el cliente ya compra.</li>
              <li><strong>Cross-selling:</strong> ofrece productos o servicios complementarios que resuelven problemas relacionados.</li>
              <li><strong>Paquetes:</strong> agrupa servicios en paquetes que resulten más atractivos que comprarlos por separado.</li>
            </ul>
            <p>
              Para profundizar en la captación, revisa{" "}
              <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo conseguir clientes para tu negocio
              </a>.
            </p>

            <h2>Mejora tus presupuestos y propuestas</h2>
            <p>
              Un presupuesto no es solo un papel con un número. Es tu principal herramienta de venta. Si tu presupuesto
              parece una factura, estás perdiendo oportunidades. Un buen presupuesto debe:
            </p>
            <ol>
              <li>Resumir el problema del cliente (demuestra que le has escuchado).</li>
              <li>Explicar tu solución y por qué es la adecuada.</li>
              <li>Detallar qué incluye — y qué no incluye.</li>
              <li>Mostrar el retorno esperado o el beneficio tangible.</li>
              <li>Incluir testimonios o casos de éxito relevantes.</li>
              <li>Tener una llamada a la acción clara y una fecha de validez.</li>
            </ol>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="font-semibold text-primary-800">💡 Consejo práctico</p>
              <p className="mt-2 text-primary-900">
                Ofrece siempre tres opciones en tu presupuesto (básica, recomendada, premium). El 60 % de los clientes
                elige la opción intermedia, y rara vez la más barata. Esto elimina la conversación de «es muy caro» y
                la sustituye por «¿cuál me conviene más?».
              </p>
            </div>

            <h2>Diferénciate para que el precio deje de ser el criterio</h2>
            <p>
              Cuando un cliente compara solo por precio, es porque no ve diferencia entre tú y tu competencia. La
              solución no es bajar el precio, sino{" "}
              <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
                diferenciarte de tu competencia
              </a>{" "}
              de forma que el precio pase a segundo plano. Los ejes de diferenciación más potentes son:
            </p>
            <ul>
              <li>Especialización en un nicho concreto.</li>
              <li>Experiencia del cliente excepcional.</li>
              <li>Garantías que tu competencia no ofrece.</li>
              <li>Rapidez y fiabilidad en la entrega.</li>
              <li>Cercanía y confianza personal.</li>
            </ul>

            <h2>Mide tus tasas de conversión</h2>
            <p>
              Si no mides, no mejoras. Como mínimo, necesitas conocer estas tres cifras de tu embudo comercial:
            </p>
            <ol>
              <li><strong>Tasa de conversión de contacto a presupuesto:</strong> ¿cuántos de los que preguntan reciben una propuesta?</li>
              <li><strong>Tasa de conversión de presupuesto a venta:</strong> ¿cuántas propuestas se convierten en clientes?</li>
              <li><strong>Valor medio por venta:</strong> ¿cuánto ingresa cada cliente de media?</li>
            </ol>
            <p>
              Con estas tres métricas puedes identificar dónde pierdes oportunidades. ¿Llegan pocos contactos? Es un
              problema de captación. ¿Llegan muchos pero pocos aceptan? Es un problema de propuesta o de precio. ¿Aceptan
              pero gastan poco? Es un problema de upselling.
            </p>

            <h2>Un plan de acción para vender más esta semana</h2>
            <ol>
              <li>Revisa tus últimos 10 presupuestos rechazados. ¿Cuál fue la razón real? Llama y pregunta.</li>
              <li>Identifica 5 clientes actuales a los que puedas ofrecer algo complementario.</li>
              <li>Rediseña tu presupuesto con la estructura de tres opciones.</li>
              <li>Establece un sistema de seguimiento (aunque sea una hoja de cálculo) y cumple los plazos.</li>
              <li>Practica una respuesta para cuando un cliente diga «es caro» que no sea bajar el precio.</li>
            </ol>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="font-semibold text-accent-800">🎯 Para negocios en Galicia</p>
              <p className="mt-2 text-accent-900">
                En la <strong>consultoría empresas Coruña</strong> veo que el tejido empresarial gallego tiene una ventaja
                enorme: la cercanía y la confianza personal. Úsalo a tu favor. Un cliente que confía en ti no te pide
                descuento — te pide que le ayudes más.
              </p>
            </div>

            <h2>Conclusión</h2>
            <p>
              Vender más sin bajar precios no es un truco — es una consecuencia de hacer bien las cosas: entender al
              cliente, comunicar tu valor, mejorar tu proceso comercial y hacer un seguimiento profesional. Si estás
              atrapado en la guerra de precios, la solución no está en bajar más, sino en subir el nivel.
            </p>
            <p>
              Como profesional de <strong>mejora de empresas</strong>, te puedo decir que los negocios que más crecen no
              son los más baratos — son los que mejor venden su valor. Si necesitas ayuda para replantear tu estrategia
              comercial, hablemos.
            </p>
          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-vender-mas-sin-bajar-precios" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres vender más sin competir solo por precio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudo a revisar tu propuesta de valor, tu proceso comercial y tu estrategia de precios para que vendas
            más y mejor. Diagnóstico gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="como-vender-mas-sin-bajar-precios" />
    </>
  );
}
