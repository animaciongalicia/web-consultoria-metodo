import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Por qué no funciona la publicidad en mi negocio (y cómo evitar tirar el dinero) | Consultoría Método",
  description:
    "Descubre por qué no funciona la publicidad en tu negocio. Errores habituales con agencias, publicidad sin estrategia, cómo medir si el marketing funciona y un sistema para evaluar campañas.",
  keywords: [
    "por qué no funciona la publicidad en mi negocio",
    "marketing para pymes",
    "publicidad que no funciona",
    "agencia de marketing no da resultados",
    "cómo medir publicidad",
    "evaluar campañas de marketing",
  ],
  openGraph: {
    title:
      "Por qué muchas empresas tiran el dinero en marketing (y cómo evitarlo)",
    description:
      "Frustración con agencias, publicidad sin estrategia y dinero perdido. Descubre cómo saber si tu marketing funciona y un sistema práctico para evaluarlo.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/por-que-no-funciona-la-publicidad-en-mi-negocio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Por qué muchas empresas tiran el dinero en marketing (y cómo evitarlo)",
  description:
    "Descubre por qué no funciona la publicidad en tu negocio. Errores habituales con agencias, publicidad sin estrategia, cómo medir si el marketing funciona y un sistema para evaluar campañas.",
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
  datePublished: "2025-03-13",
  dateModified: "2025-03-13",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/por-que-no-funciona-la-publicidad-en-mi-negocio",
  },
};

export default function ArticuloMarketing() {
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
            Por qué muchas empresas tiran el dinero en marketing (y cómo
            evitarlo)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Has contratado una agencia, has pagado campañas en redes sociales,
            has probado Google Ads. Y los resultados no llegan. O no sabes si
            llegan. O te llegan &ldquo;seguidores&rdquo; pero no clientes.
            Suena familiar, ¿verdad?
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
            La frustración con el marketing es una de las quejas más habituales
            que escucho en mi consultoría. Empresarios que han gastado miles de
            euros en publicidad digital y no son capaces de decirte cuántos
            clientes les ha traído. Pymes que han pasado por dos o tres
            agencias distintas y siguen sin ver resultados. Negocios que
            publican en redes sociales todos los días y no venden ni un euro
            más.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y lo peor no es el dinero perdido — es la sensación de que
            &ldquo;el marketing no funciona para mi negocio&rdquo;. Esa
            conclusión es casi siempre equivocada. El marketing sí funciona.
            Lo que no funciona es hacer publicidad sin estrategia, sin
            medición y sin objetivos claros. Que es exactamente lo que hacen
            la mayoría de las pymes.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En este artículo vamos a ver por qué pasa esto, cuáles son los
            errores más habituales, cómo saber de verdad si tu marketing está
            funcionando y cómo montar un sistema sencillo para evaluar cada
            euro que inviertes. Sin tecnicismos, sin humo — solo lo que
            necesitas saber para dejar de tirar dinero.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;El marketing sin estrategia es ruido. Y el ruido cuesta
            dinero.&rdquo;
          </blockquote>

          {/* H2 — Empresarios frustrados con agencias */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            La frustración con las agencias: por qué tantos empresarios se
            sienten engañados
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Voy a ser directo: hay agencias de marketing que hacen un trabajo
            excelente. Pero también hay muchas que viven de vender humo a
            empresarios que no saben qué preguntar. Y cuando un empresario no
            sabe qué exigir, lo que suele pasar es previsible.
          </p>

          {/* Cuadro de señales de alerta */}
          <div className="my-10 rounded-xl border border-red-200 bg-red-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-red-900">
              Señales de que tu agencia no te está aportando valor
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Te mandan informes llenos de métricas bonitas (impresiones, alcance, clics) pero no te dicen cuántos clientes nuevos has conseguido.",
                "No pueden decirte cuánto te cuesta adquirir un cliente nuevo a través de la publicidad que gestionan.",
                "Llevan meses con la misma estrategia sin probar nada diferente, aunque los resultados no mejoren.",
                "Te hablan de «posicionamiento de marca» y «engagement» pero no de ventas ni de retorno de inversión.",
                "No te preguntan por tus objetivos de negocio, solo por tu presupuesto de publicidad.",
                "Cuando preguntas si la inversión está siendo rentable, responden con evasivas o tecnicismos.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 md:text-lg"
                >
                  <span className="mt-1 text-red-500 font-bold">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            El problema de fondo es que muchas agencias están optimizando
            para métricas que a ellas les convienen — las que les permiten
            justificar su trabajo — y no para las métricas que a ti te
            importan, que son ventas y beneficio. Un post con 500 likes no
            vale nada si no genera ni un solo cliente. Mil visitas a tu web
            son irrelevantes si ninguna se convierte en una llamada o un
            presupuesto.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero antes de echarle toda la culpa a las agencias, hay algo que
            los empresarios necesitan escuchar: si tú no sabes qué pedir, no
            puedes culpar a otro de no dártelo. Y la mayoría de los
            empresarios contratan marketing sin tener claro qué quieren
            conseguir, cuánto están dispuestos a invertir y cómo van a medir
            si funciona.
          </p>

          {/* H2 — Publicidad sin estrategia */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Publicidad sin estrategia: el error más caro que puedes cometer
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La escena se repite en cientos de pymes: el empresario ve que la
            competencia está en Instagram, o que &ldquo;todo el mundo está
            haciendo Google Ads&rdquo;, y decide invertir. Contrata una
            agencia o lo intenta por su cuenta. Pone 500 euros al mes, 1.000,
            2.000. Y espera que pasen cosas. Pero no tiene claro qué cosas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hacer publicidad sin estrategia es como subirse a un coche y
            conducir sin saber adónde vas. Puedes gastar mucha gasolina,
            recorrer muchos kilómetros y acabar exactamente donde empezaste.
          </p>

          {/* Tabla comparativa */}
          <div className="my-10 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">
                    Publicidad SIN estrategia
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Publicidad CON estrategia
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  [
                    "«Quiero estar en redes sociales»",
                    "«Quiero conseguir 15 contactos cualificados al mes a través de redes»",
                  ],
                  [
                    "«Vamos a hacer publicidad en Google»",
                    "«Vamos a invertir 800 € en Google Ads con objetivo de coste por contacto inferior a 25 €»",
                  ],
                  [
                    "«Necesito más seguidores»",
                    "«Necesito que el 3% de los visitantes de mi web pidan presupuesto»",
                  ],
                  [
                    "«La agencia me manda un informe que no entiendo»",
                    "«Cada mes reviso ventas atribuidas a cada canal y su coste de adquisición»",
                  ],
                  [
                    "«Llevo seis meses pagando y no sé si funciona»",
                    "«A los dos meses sin resultados, cambio la estrategia o paro»",
                  ],
                ].map(([sin, con], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-gray-500 italic">{sin}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {con}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Los 5 errores de estrategia más habituales
          </h3>

          <p className="mt-4 text-gray-600 md:text-lg">
            <strong className="text-gray-900">
              1. No definir a quién te diriges.
            </strong>{" "}
            &ldquo;Mi producto es para todo el mundo&rdquo; es la frase que
            más dinero ha quemado en publicidad. Si no defines a tu cliente
            ideal — edad, situación, problema, dónde está, qué busca — tu
            mensaje se diluye y no le habla a nadie. Antes de invertir en publicidad,{" "}
            <a href="/blog/como-diferenciarte-de-tu-competencia" className="text-accent-600 underline hover:text-accent-700">define qué te diferencia</a>.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong className="text-gray-900">
              2. No tener una oferta clara.
            </strong>{" "}
            Tu publicidad lleva tráfico a tu web o a tu negocio, pero cuando
            el cliente llega, ¿qué se encuentra? Si no hay una propuesta
            clara, un motivo para actuar ahora y un camino fácil para
            contactarte, ese tráfico se pierde.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong className="text-gray-900">
              3. Esperar resultados inmediatos.
            </strong>{" "}
            Hay acciones de marketing que dan resultados rápidos (publicidad
            directa) y otras que tardan meses (SEO, contenidos, redes
            sociales orgánicas). Si no entiendes la diferencia, abandonarás
            lo que funciona a largo plazo y gastarás de más en lo inmediato.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong className="text-gray-900">
              4. Copiar lo que hacen las grandes empresas.
            </strong>{" "}
            Coca-Cola puede hacer branding puro porque ya te conoce todo el
            mundo. Tu pyme necesita marketing que genere contactos y ventas
            directas. No confundas el marketing de las multinacionales con el
            que necesita tu negocio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            <strong className="text-gray-900">
              5. No tener página de aterrizaje adecuada.
            </strong>{" "}
            Inviertes en publicidad y mandas el tráfico a la página de inicio
            de tu web — que habla de todo y de nada. Cada campaña necesita
            una página específica con un mensaje claro, una oferta concreta y
            un formulario o teléfono visible. Sin eso, estás pagando por
            visitas que se evaporan.
          </p>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;La publicidad no es un gasto. Es una inversión. Pero solo
            si sabes en qué la estás invirtiendo, para quién y cómo vas a
            medir el retorno.&rdquo;
          </blockquote>

          {/* H2 — Cómo saber si el marketing funciona */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo saber de verdad si tu marketing está funcionando
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aquí es donde se separa la publicidad que funciona de la que quema
            dinero. La clave es medir los{" "}
            <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">indicadores clave de tu empresa</a> — y solo los
            correctos. No necesitas un dashboard de 40 gráficos. Necesitas
            cuatro o cinco números que te digan con claridad si el dinero que
            inviertes vuelve multiplicado o se evapora.
          </p>

          {/* Tarjetas de métricas */}
          <div className="my-10 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                  1
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Coste de adquisición de cliente (CAC)
                </h3>
              </div>
              <p className="mt-3 text-gray-600 md:text-lg">
                Cuánto te cuesta conseguir un cliente nuevo. Si gastas 1.000
                euros en publicidad y consigues 10 clientes nuevos, tu CAC es
                de 100 euros. Si ese cliente te deja de media 300 euros de
                margen, la publicidad funciona. Si te deja 80 euros, estás
                perdiendo dinero con cada cliente que captas.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Fórmula:</strong> Inversión en marketing ÷ Clientes
                nuevos conseguidos
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                  2
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Retorno de inversión publicitaria (ROAS)
                </h3>
              </div>
              <p className="mt-3 text-gray-600 md:text-lg">
                Por cada euro que inviertes en publicidad, ¿cuántos euros
                factura tu negocio? Si inviertes 1.000 euros y facturas 5.000
                euros atribuibles a esa publicidad, tu ROAS es de 5x. Un ROAS
                mínimo saludable para una pyme debería estar entre 3x y 5x,
                dependiendo del margen de tu negocio.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Fórmula:</strong> Facturación generada por la campaña
                ÷ Inversión en la campaña
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                  3
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Tasa de conversión por canal
                </h3>
              </div>
              <p className="mt-3 text-gray-600 md:text-lg">
                De cada 100 personas que ven tu publicidad o visitan tu web,
                ¿cuántas acaban contactándote o comprando? Si tu tasa de
                conversión es del 1%, necesitas 1.000 visitas para conseguir
                10 contactos. Si la subes al 3%, necesitas solo 333 visitas
                para el mismo resultado. Mejorar la conversión es casi
                siempre más barato que atraer más tráfico.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Fórmula:</strong> Contactos o ventas ÷ Visitas o
                impresiones × 100
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                  4
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Valor del cliente a lo largo del tiempo (LTV)
                </h3>
              </div>
              <p className="mt-3 text-gray-600 md:text-lg">
                Un cliente no vale lo que gasta en su primera compra — vale lo
                que gasta a lo largo de toda la relación contigo. Si un
                cliente nuevo te gasta 200 euros la primera vez pero repite
                cuatro veces al año durante tres años, su valor real es de
                2.400 euros. Conocer este dato cambia por completo cuánto
                puedes permitirte invertir para captarlo.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Fórmula:</strong> Ticket medio × Frecuencia de compra
                × Duración media de la relación
              </p>
            </div>
          </div>

          {/* Cuadro de regla de oro */}
          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              La regla de oro del marketing rentable
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Tu marketing es rentable cuando el{" "}
              <strong>valor del cliente (LTV)</strong> es al menos{" "}
              <strong>3 veces mayor</strong> que el{" "}
              <strong>coste de adquisición (CAC)</strong>.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2 rounded-lg bg-accent-50 p-4 text-center">
              <p className="text-2xl font-bold text-primary-900">
                LTV &ge; 3 &times; CAC
              </p>
              <p className="text-sm text-gray-500">
                Si tu LTV es de 1.500 € y tu CAC es de 200 € (ratio 7,5x),
                tu marketing es muy rentable. Si tu LTV es de 300 € y tu CAC
                es de 250 € (ratio 1,2x), estás perdiendo dinero.
              </p>
            </div>
          </div>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: el negocio que gastaba 2.000 euros al mes en
            publicidad y no sabía si funcionaba
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Llegó a mi consultoría el dueño de una clínica de fisioterapia y
            rehabilitación en A Coruña. Llevaba un año y medio pagando a una
            agencia 1.200 euros al mes por gestión de redes sociales y
            campañas en Instagram y Facebook. Además, gastaba unos 800 euros
            al mes en anuncios de Google Ads que gestionaba él mismo &ldquo;a
            ojo&rdquo;. Total: 2.000 euros al mes en marketing.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando le pregunté cuántos clientes nuevos le traía ese
            marketing, no supo responder. La agencia le mandaba informes con
            impresiones, alcance y seguidores ganados. Pero nadie — ni la
            agencia ni él — había montado un sistema para rastrear cuántos de
            esos seguidores acababan pidiendo cita.
          </p>

          {/* Cuadro de diagnóstico */}
          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-amber-900">
              Lo que descubrimos al analizar los datos
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">1.</span>
                <span>
                  <strong>De los 2.000 €/mes en marketing,</strong> solo 300 €
                  en Google Ads estaban generando pacientes nuevos
                  rastreables. El resto (1.700 €) iba a redes sociales cuyo
                  impacto en citas reales era imposible de medir porque no
                  había ningún sistema de seguimiento.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">2.</span>
                <span>
                  <strong>La agencia publicaba 4 posts semanales</strong> con
                  fotos bonitas y consejos de salud genéricos. Tenían buen
                  engagement pero ninguna llamada a la acción clara. Ninguno
                  invitaba a pedir cita, a llamar o a visitar la web.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">3.</span>
                <span>
                  <strong>La web no tenía página de aterrizaje</strong> para
                  las campañas. Todo el tráfico de Google Ads aterrizaba en la
                  página de inicio, que hablaba de la clínica en general pero
                  no facilitaba pedir cita rápidamente.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">4.</span>
                <span>
                  <strong>El 70% de los pacientes nuevos</strong> venían por
                  recomendación directa, no por marketing. El marketing
                  digital apenas aportaba el 15% de los nuevos pacientes, a
                  pesar de representar un gasto significativo.
                </span>
              </li>
            </ul>
          </div>

          {/* Cuadro de resultados */}
          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-green-900">
              Resultado después de reestructurar el marketing
            </h3>
            <p className="mt-2 text-gray-600 md:text-lg">
              Estas son las decisiones que tomamos y los resultados en los
              siguientes seis meses:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Cambió de agencia a una más pequeña que cobró la mitad y se centró en campañas orientadas a captación de pacientes.",
                "Redujo la inversión total a 1.100 €/mes (un 45% menos) y la redistribuyó: 700 € en Google Ads optimizado y 400 € en gestión de campañas.",
                "Creó una página de aterrizaje específica para cada servicio principal con formulario de cita directa.",
                "Montó un sistema simple para preguntar a cada paciente nuevo cómo había llegado (formulario de primera visita).",
                "Los pacientes nuevos por marketing pasaron de un estimado de 8/mes a 22/mes verificados.",
                "El coste de adquisición de paciente bajó de 250 € estimados a 50 € reales.",
                "El ahorro acumulado en 6 meses fue de 5.400 €, con más del doble de pacientes nuevos.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-green-800 md:text-lg"
                >
                  <span className="mt-1 font-bold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cita destacada */}
          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No gastó más en marketing. Gastó mejor. Y esa diferencia
            le devolvió miles de euros y decenas de clientes.&rdquo;
          </blockquote>

          {/* H2 — Sistema para evaluar campañas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Sistema práctico para evaluar si tu marketing funciona (cada mes)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas ser un experto en marketing digital para saber si tu
            inversión funciona. Necesitas un sistema simple que puedas
            revisar cada mes en 30 minutos. Aquí tienes uno que funciona para
            cualquier pyme.
          </p>

          {/* Pasos del sistema */}
          <div className="my-10 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 1
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Pregunta a cada cliente nuevo cómo te encontró
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Es lo más básico y lo más importante. Pon un campo en tu
                formulario, pregúntalo en la primera llamada, añádelo al
                proceso de alta. &ldquo;¿Cómo nos has conocido?&rdquo; con
                opciones: Google, redes sociales, recomendación, pasaba por
                aquí, otro. Sin este dato, todo lo demás es especulación.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 2
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Registra la inversión por canal cada mes
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Apunta cuánto gastas en cada canal: Google Ads, redes
                sociales, agencia, folletos, patrocinios, lo que sea. No hace
                falta más que una tabla sencilla: canal, inversión mensual. Si
                no sabes cuánto inviertes en cada sitio, no puedes saber qué
                te rinde.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 3
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Calcula el coste de adquisición por canal
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Divide la inversión de cada canal entre los clientes nuevos
                que te ha traído. Google Ads: 700 € invertidos, 14 clientes
                nuevos = 50 €/cliente. Redes sociales: 400 € invertidos, 3
                clientes nuevos = 133 €/cliente. Ahora sabes dónde invertir
                más y dónde cortar.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 4
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Compara con el valor del cliente
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Si un cliente nuevo te deja de media 500 € de margen y te
                cuesta 50 € captarlo, tu marketing es muy rentable en ese
                canal (ratio 10x). Si te cuesta 200 € captarlo, sigue siendo
                rentable (ratio 2,5x) pero con menos margen. Si te cuesta
                más de lo que te deja, estás perdiendo dinero: para o cambia
                la estrategia.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Paso 5
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Decide cada mes: mantener, ajustar o cortar
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Con los datos encima de la mesa, la decisión es mucho más
                fácil. Lo que funciona, mantenlo o amplíalo. Lo que no
                funciona después de tres meses, cámbialo. Lo que no funciona
                después de seis meses, córtalo. Sin dramas, sin apegos —
                solo datos.
              </p>
            </div>
          </div>

          {/* Tabla del sistema mensual */}
          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Plantilla de revisión mensual de marketing
            </h3>
            <p className="mt-2 text-gray-500 text-sm">
              Rellena esta tabla cada mes. En 15 minutos tendrás una foto
              clara de qué funciona y qué no.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="pb-2 pr-3 font-semibold text-primary-900">
                      Canal
                    </th>
                    <th className="pb-2 pr-3 font-semibold text-primary-900">
                      Inversión/mes
                    </th>
                    <th className="pb-2 pr-3 font-semibold text-primary-900">
                      Clientes nuevos
                    </th>
                    <th className="pb-2 pr-3 font-semibold text-primary-900">
                      CAC
                    </th>
                    <th className="pb-2 font-semibold text-primary-900">
                      Decisión
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
                  {[
                    ["Google Ads", "700 €", "14", "50 €", "Ampliar"],
                    ["Redes sociales", "400 €", "3", "133 €", "Revisar estrategia"],
                    ["Recomendación", "0 €", "18", "0 €", "Potenciar con programa de referidos"],
                    ["Folletos locales", "150 €", "1", "150 €", "Cortar"],
                  ].map(([canal, inv, clientes, cac, decision], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-3 font-medium text-gray-800">
                        {canal}
                      </td>
                      <td className="py-3 pr-3 text-gray-600">{inv}</td>
                      <td className="py-3 pr-3 text-gray-600">{clientes}</td>
                      <td className="py-3 pr-3 text-gray-600">{cac}</td>
                      <td className="py-3 text-gray-900 font-medium">
                        {decision}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: el problema no es el marketing — es cómo lo usas
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si has llegado hasta aquí y te has sentido identificado, hay una
            buena noticia: no necesitas gastar más en marketing. Probablemente
            necesitas gastar mejor. Y para eso solo necesitas tres cosas:
            objetivos claros, medición real y la disciplina de revisar los
            datos cada mes.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El marketing funciona cuando se trata como una inversión con
            retorno medible, no como un gasto obligatorio que &ldquo;hay que
            hacer porque todo el mundo lo hace&rdquo;. Y muchas veces, antes
            de invertir más en publicidad, conviene{" "}
            <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">revisar tu estrategia de captación de clientes</a>{" "}
            desde la base. Cada euro que inviertes
            tiene que poder justificarse. Y si no puede, o cambias la
            estrategia o dejas de invertirlo ahí.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y si no sabes por dónde empezar, si sientes que llevas demasiado
            tiempo gastando dinero sin ver resultados claros, a veces lo que
            necesitas es alguien que mire desde fuera, ponga orden en los
            datos y te ayude a tomar las decisiones correctas. Para eso es
            exactamente para lo que sirve una consultoría de negocio.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="por-que-no-funciona-la-publicidad-en-mi-negocio" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Crees que estás tirando dinero en marketing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos tu inversión en marketing, identificamos qué
            funciona y qué no, y diseñamos un sistema para que cada euro
            invertido tenga retorno medible. Sin humo, sin tecnicismos —
            solo datos y decisiones claras.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://consultoriametodo.es/diagnostico-negocio"
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

      <BlogNav currentSlug="por-que-no-funciona-la-publicidad-en-mi-negocio" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Descubre nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              Método Rentabilismo para optimizar tu inversión en marketing
            </a>{" "}
            y consulta{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              casos reales de empresas que han mejorado su captación
            </a>.
          </p>
          <a href="/diagnostico-negocio" className="btn-primary mt-6 inline-block">
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
