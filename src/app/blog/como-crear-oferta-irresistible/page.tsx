import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo crear una oferta irresistible para tu negocio | Consultoría Método",
  description:
    "Aprende a construir ofertas que se venden solas: resultado claro, garantías, urgencia real y bonificaciones que aportan valor. Guía práctica para pymes y autónomos.",
  keywords: [
    "oferta irresistible negocio",
    "cómo crear una oferta de valor",
    "propuesta de valor pyme",
    "estrategia de ventas negocio",
    "aumentar ventas sin descuentos",
    "consultor empresarial Coruña",
    "consultoría empresas Galicia",
  ],
  openGraph: {
    title: "Cómo crear una oferta irresistible para tu negocio",
    description:
      "Aprende a construir ofertas que se venden solas: resultado claro, garantías, urgencia real y bonificaciones que aportan valor. Guía práctica para pymes.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-crear-oferta-irresistible" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo crear una oferta irresistible para tu negocio",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-07-06",
};

export default function ArticuloOfertaIrresistible() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Cómo crear una oferta irresistible para tu negocio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La mayoría de los negocios no tienen un problema de producto ni de precio. Tienen un problema de oferta.
            Aprende a empaquetar lo que vendes para que el cliente sienta que dice &ldquo;sí&rdquo; casi sin pensarlo.
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

            <h2>La diferencia entre un producto y una oferta</h2>
            <p>
              Un producto es lo que haces. Una oferta es cómo lo presentas. Y esa diferencia lo cambia todo.
              Puedes tener el mejor servicio de tu sector, pero si lo presentas como una lista de características
              con un precio al final, estás compitiendo por precio. Siempre.
            </p>
            <p>
              Una oferta irresistible es aquella en la que el cliente percibe que el valor que recibe es
              <strong> enormemente superior al precio que paga</strong>. No porque sea barato, sino porque está
              tan bien construido que decir &ldquo;no&rdquo; parece irracional.
            </p>
            <p>
              Después de trabajar con decenas de pymes como <strong>consultor empresarial en Coruña</strong>,
              he comprobado que la capacidad de construir ofertas potentes es lo que separa a los negocios que
              venden con facilidad de los que luchan cada mes por llegar a facturar.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;No compites contra otros productos. Compites contra la indiferencia del cliente.
              Una buena oferta rompe esa indiferencia.&rdquo;
            </blockquote>

            {/* ── Anatomía ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              La anatomía de una oferta irresistible: 5 ingredientes
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No importa si vendes servicios profesionales, productos físicos o experiencias gastronómicas.
              Toda oferta que funciona comparte estos cinco elementos. Si le falta alguno, pierde fuerza.
            </p>

            <div className="my-10 space-y-6 not-prose">
              {[
                {
                  num: "1",
                  title: "Resultado claro y específico",
                  desc: "El cliente no compra lo que haces — compra lo que consigue. «Diseño web» no vende. «Una web que te genera al menos 10 contactos cualificados al mes» sí vende. Cuanto más concreto y medible sea el resultado que prometes, más fuerte es tu oferta.",
                },
                {
                  num: "2",
                  title: "Reversión del riesgo (garantías)",
                  desc: "El miedo a equivocarse frena más ventas que el precio. Cuando ofreces una garantía — de satisfacción, de resultado, de devolución — transfieres el riesgo de la mesa del cliente a la tuya. Y el que no teme comprar, compra más rápido.",
                },
                {
                  num: "3",
                  title: "Urgencia real (no artificial)",
                  desc: "La urgencia funciona, pero solo si es legítima. Plazas limitadas porque realmente tienes capacidad limitada. Precio especial porque estás lanzando algo nuevo y necesitas testimonios. Fechas de cierre porque tu agenda se llena. La urgencia falsa destruye la confianza; la real acelera la decisión.",
                },
                {
                  num: "4",
                  title: "Bonificaciones que amplían el valor",
                  desc: "Añadir extras relevantes es mucho más poderoso que hacer un descuento. Un extra bien elegido aumenta el valor percibido sin erosionar tu margen. La clave: que el bonus resuelva un problema relacionado con lo que vendes.",
                },
                {
                  num: "5",
                  title: "Precio anclado al valor, no al coste",
                  desc: "Antes de mostrar el precio, el cliente debe entender todo lo que va a recibir. Y el precio debe parecer una fracción del valor total. Si tu servicio genera 50.000 euros de beneficio adicional y cobras 3.000, el cliente no discute el precio — discute cómo empezar.",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5 rounded-xl border border-gray-100 bg-gray-50 p-5 md:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white">
                    {item.num}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-gray-600 md:text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Ejemplos por sector ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Ejemplos de ofertas irresistibles por tipo de negocio
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              La teoría está bien, pero lo que funciona son los ejemplos concretos. Así se aplican
              los cinco ingredientes en negocios reales.
            </p>

            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Negocio</th>
                    <th className="px-4 py-3 font-semibold">Oferta mediocre</th>
                    <th className="px-4 py-3 font-semibold">Oferta irresistible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Asesoría fiscal</td>
                    <td className="px-4 py-3 text-gray-500">&ldquo;Llevamos tu contabilidad por 150 &euro;/mes&rdquo;</td>
                    <td className="px-4 py-3 text-gray-900">&ldquo;Garantizamos cero sanciones o te devolvemos la cuota del trimestre. Incluye revisión fiscal anual y alertas de ahorro proactivas.&rdquo;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Restaurante</td>
                    <td className="px-4 py-3 text-gray-500">&ldquo;Menú degustación: 45 &euro;&rdquo;</td>
                    <td className="px-4 py-3 text-gray-900">&ldquo;Menú maridaje con 5 tiempos + cóctel de bienvenida + café y petit four. Solo 12 plazas por noche. Si no repites, la próxima cena la invitamos nosotros.&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Taller mecánico</td>
                    <td className="px-4 py-3 text-gray-500">&ldquo;Revisión pre-ITV: 39 &euro;&rdquo;</td>
                    <td className="px-4 py-3 text-gray-900">&ldquo;Revisión pre-ITV con 27 puntos de control + informe escrito + si no pasas la ITV, te arreglamos lo que falle sin coste de mano de obra.&rdquo;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Tienda de ropa</td>
                    <td className="px-4 py-3 text-gray-500">&ldquo;20 % de descuento en toda la tienda&rdquo;</td>
                    <td className="px-4 py-3 text-gray-900">&ldquo;Sesión de asesoramiento de imagen personalizado + 3 looks completos seleccionados para ti + arreglos incluidos + devolución sin preguntas en 30 días.&rdquo;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 md:text-lg">
              Observa el patrón: la oferta irresistible no es más barata. Es más completa, más concreta y elimina
              más riesgos. El cliente no compara por precio porque no hay nada comparable. Y esto conecta directamente
              con saber{" "}
              <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">
                cómo diferenciarte de tu competencia
              </a>{" "}
              de forma que el precio pase a segundo plano.
            </p>

            {/* ── Error descuento ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              El error más caro: descontar en lugar de añadir valor
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Cuando las ventas bajan, el primer impulso de la mayoría de los negocios es bajar el precio.
              Y es exactamente lo peor que puedes hacer. Un descuento reduce tu margen, entrena al cliente
              para esperar rebajas y le dice al mercado que tu precio era inflado.
            </p>

            <div className="my-8 rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose">
              <p className="font-semibold text-accent-800">Dato clave: descuento vs. bonificación</p>
              <p className="mt-2 text-accent-900">
                Un descuento del 20 % sobre un servicio de 1.000 &euro; con margen del 40 % reduce tu beneficio
                un <strong>50 %</strong> (de 400 &euro; a 200 &euro;). En cambio, añadir un bonus que te cuesta
                100 &euro; pero el cliente percibe como valor de 300 &euro; aumenta el valor percibido un 30 % y
                solo reduce tu margen un 25 %. Siempre es mejor sumar que restar.
              </p>
            </div>

            <p className="text-gray-600 md:text-lg">
              En lugar de descontar, pregúntate: &ldquo;¿Qué puedo añadir que tenga alto valor percibido
              para el cliente y bajo coste real para mí?&rdquo; La respuesta a esa pregunta es tu próximo
              bonus. Si necesitas profundizar en la lógica de los precios, revisa{" "}
              <a href="/blog/como-fijar-precios-en-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo fijar precios en tu negocio
              </a>{" "}
              de forma estratégica.
            </p>

            {/* ── Tabla descuento vs valor ── */}
            <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary-50 text-primary-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Estrategia</th>
                    <th className="px-4 py-3 font-semibold">Impacto en el cliente</th>
                    <th className="px-4 py-3 font-semibold">Impacto en tu margen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">Descuento del 15 %</td>
                    <td className="px-4 py-3 text-gray-600">Percibe un ahorro puntual</td>
                    <td className="px-4 py-3 font-semibold text-red-600">Reduce beneficio un 30-50 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Bonus de alto valor percibido</td>
                    <td className="px-4 py-3 text-gray-600">Percibe más valor, más compromiso</td>
                    <td className="px-4 py-3 font-semibold text-green-700">Coste marginal, margen casi intacto</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Garantía de resultado</td>
                    <td className="px-4 py-3 text-gray-600">Percibe seguridad, confianza</td>
                    <td className="px-4 py-3 font-semibold text-green-700">Coste cero si cumples bien</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Paquete con extras incluidos</td>
                    <td className="px-4 py-3 text-gray-600">Percibe exclusividad, completitud</td>
                    <td className="px-4 py-3 font-semibold text-green-700">Ticket medio sube, margen sube</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Garantías ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Garantías que venden: cómo revertir el riesgo a tu favor
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              La mayoría de los empresarios tienen miedo de ofrecer garantías porque piensan que los clientes
              abusarán. La realidad es justo la contraria: las tasas de reclamación de garantía en negocios
              que hacen bien su trabajo suelen estar entre el 1 % y el 3 %. Y a cambio, la tasa de conversión
              sube entre un 20 % y un 40 %.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Tipos de garantía que puedes ofrecer según tu negocio:
            </p>
            <ul>
              <li><strong>Garantía de satisfacción:</strong> &ldquo;Si no quedas satisfecho, te devolvemos el dinero.&rdquo; Perfecta para servicios.</li>
              <li><strong>Garantía de resultado:</strong> &ldquo;Si no consigues X resultado, no pagas.&rdquo; La más potente, pero exige que controles bien tu proceso.</li>
              <li><strong>Garantía parcial:</strong> &ldquo;Si no te convence, la siguiente sesión es gratis.&rdquo; Un punto intermedio que reduce el riesgo sin exponerte del todo.</li>
              <li><strong>Garantía de plazo:</strong> &ldquo;Lo tienes en 48 horas o te sale gratis.&rdquo; Funciona muy bien en logística y servicios de urgencia.</li>
            </ul>
            <p className="mt-4 text-gray-600 md:text-lg">
              La garantía no es solo una herramienta de venta — es una declaración de confianza en lo que haces.
              Y eso el cliente lo percibe. Si quieres aprender a{" "}
              <a href="/blog/como-vender-mas-sin-bajar-precios" className="text-accent-600 underline hover:text-accent-700">
                vender más sin bajar precios
              </a>, la garantía es una de tus mejores armas.
            </p>

            {/* ── Framework práctico ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Construye tu oferta irresistible en 5 pasos
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No hace falta reinventar tu negocio. Con lo que ya tienes, puedes construir una oferta mucho
              más potente siguiendo este proceso:
            </p>

            <div className="my-10 space-y-5 not-prose">
              {[
                {
                  step: "1",
                  title: "Define el resultado concreto",
                  desc: "Responde a: «Cuando el cliente termina de trabajar conmigo / compra mi producto, ¿qué tiene que antes no tenía?» Escríbelo en una frase.",
                },
                {
                  step: "2",
                  title: "Identifica el mayor miedo del cliente",
                  desc: "¿Qué le frena para comprar? ¿Miedo a que no funcione? ¿A perder dinero? ¿A que no le guste? Diseña una garantía que elimine ese miedo específico.",
                },
                {
                  step: "3",
                  title: "Añade 2-3 bonus de alto valor percibido",
                  desc: "Extras que complementen tu oferta principal: una guía, una sesión extra, un servicio postventa, acceso a algo exclusivo. Que te cuesten poco pero valgan mucho para el cliente.",
                },
                {
                  step: "4",
                  title: "Crea una razón legítima de urgencia",
                  desc: "Plazas limitadas, fecha de cierre real, edición especial, primer lote. No inventes urgencia — encuentra la que ya existe en tu negocio.",
                },
                {
                  step: "5",
                  title: "Presenta el valor antes del precio",
                  desc: "En tu propuesta, tu web o tu conversación, detalla todo lo que incluye la oferta, el valor total y las garantías. Solo al final, muestra el precio. El contraste hace el trabajo.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-900 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Errores comunes ── */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Los 4 errores más comunes al crear ofertas
            </h2>

            <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6 not-prose">
              <p className="font-bold text-amber-900 md:text-lg">Errores que debes evitar:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Prometer resultados que no puedes cumplir. La oferta irresistible se basa en la verdad, no en la exageración. Si prometes y no cumples, destruyes tu reputación.",
                  "Crear urgencia falsa. «Solo quedan 2 plazas» cuando tienes 20 es manipulación. El cliente lo nota, pierde confianza y no vuelve.",
                  "Añadir bonus irrelevantes. Un ebook genérico no es un bonus de valor — es relleno. Cada extra debe resolver un problema real y estar conectado con la oferta principal.",
                  "Complicar la oferta con demasiadas opciones. Tres opciones funcionan. Siete opciones paralizan. La claridad vende; la complejidad ahuyenta.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                    <span className="mt-1 text-amber-600">&#9888;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;La mejor oferta del mundo no salva un mal producto. Pero un buen producto sin una buena
              oferta es como un gran restaurante en una calle sin rótulo.&rdquo;
            </blockquote>

            {/* ── Consejo Galicia ── */}
            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="font-semibold text-primary-800">Para negocios en Galicia</p>
              <p className="mt-2 text-primary-900">
                El tejido empresarial gallego se apoya mucho en la confianza personal y el boca a boca.
                Las garantías y los bonus funcionan especialmente bien aquí porque refuerzan esa confianza.
                Cuando tu cliente le dice a un vecino &ldquo;me devuelven el dinero si no quedo contento&rdquo;,
                estás creando el mejor marketing posible: la recomendación sin reservas.
              </p>
            </div>

            {/* ── Conclusión ── */}
            <h2>Conclusión</h2>
            <p>
              Crear una oferta irresistible no es manipulación ni marketing agresivo. Es empaquetar lo que
              ya haces bien de forma que el cliente entienda el valor, sienta seguridad y perciba que dice
              &ldquo;sí&rdquo; a una oportunidad, no a un gasto. Es la diferencia entre esperar a que
              el cliente decida y hacer que la decisión sea obvia.
            </p>
            <p>
              Si tu negocio tiene un buen producto o servicio pero te cuesta convertir presupuestos en
              ventas, el problema probablemente no es lo que ofreces — es cómo lo presentas. Revisa tu
              oferta con los cinco ingredientes de este artículo y verás cómo cambian las conversaciones
              con tus clientes.
            </p>
            <p>
              Y si necesitas ayuda para rediseñar tu propuesta comercial, construir ofertas que se vendan
              solas o dejar de competir solo por precio, hablemos. Es exactamente lo que hacemos en{" "}
              <strong>Consultoría Método</strong>.
            </p>

            {/* ── CTA inline ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Quieres crear una oferta que tus clientes no puedan rechazar?
              </p>
              <p className="mt-2 text-gray-600">
                Te ayudo a construir una propuesta de valor potente, con garantías, bonus y un proceso
                comercial que convierta más. Diagnóstico gratuito y sin compromiso.
              </p>
              <a href="/diagnostico-negocio" className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600">
                Solicita tu diagnóstico gratuito
              </a>
            </div>
          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-crear-oferta-irresistible" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu oferta actual convence o solo informa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Revisamos tu propuesta comercial, identificamos lo que le falta y la rediseñamos para que
            convierta más. Primer diagnóstico gratuito.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
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

      <BlogNav currentSlug="como-crear-oferta-irresistible" />
    </>
  );
}
