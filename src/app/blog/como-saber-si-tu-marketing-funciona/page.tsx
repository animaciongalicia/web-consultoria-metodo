import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo saber si tu marketing está funcionando: métricas para pymes | Consultoría Método",
  description:
    "Aprende a medir si tu marketing funciona con métricas sencillas: CAC, conversión, ROI por campaña y coste por lead. Guía práctica para pymes. Consultoría en Coruña, Galicia y por videollamada.",
  keywords: [
    "métricas marketing pymes",
    "medir marketing funciona",
    "coste adquisición cliente",
    "ROI marketing",
    "coste por lead",
    "consultor empresarial Coruña",
    "consultoría empresas Galicia",
    "marketing pyme métricas",
  ],
  openGraph: {
    title:
      "Cómo saber si tu marketing está funcionando: métricas para pymes",
    description:
      "Métricas sencillas para que cualquier pyme sepa si su marketing funciona o está tirando el dinero. CAC, conversión, ROI y señales de alarma.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-saber-si-tu-marketing-funciona",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo saber si tu marketing está funcionando: métricas para pymes",
  description:
    "Aprende a medir si tu marketing funciona con métricas sencillas: CAC, conversión, ROI por campaña y coste por lead. Guía práctica para pymes.",
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
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-saber-si-tu-marketing-funciona",
  },
};

export default function ArticuloMarketingFunciona() {
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
            Cómo saber si tu marketing está funcionando: métricas para
            pymes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Gastas en publicidad, en redes sociales, en una web, quizá
            en una agencia. Pero cuando alguien te pregunta
            &ldquo;¿funciona tu marketing?&rdquo;, no sabes qué
            contestar. Si eso te resulta familiar, este artículo es para
            ti. Vamos a poner números donde hoy solo hay sensaciones.
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
            En más de 25 años trabajando con pymes como consultor
            empresarial en Coruña y por toda España, he visto una
            constante alarmante: la inmensa mayoría de los pequeños
            negocios no miden su marketing. Gastan dinero — a veces
            mucho — sin saber qué funciona y qué no. Es como conducir
            con los ojos cerrados. Puedes tener suerte un tiempo, pero
            tarde o temprano te estrellas.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Si no puedes medir cuánto te cuesta conseguir un
            cliente, no estás haciendo marketing. Estás haciendo
            caridad.&rdquo;
          </blockquote>

          {/* Las 4 métricas esenciales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Las 4 métricas que toda pyme necesita controlar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas un dashboard de 20 KPIs ni un software caro.
            Con estas cuatro métricas puedes saber si tu marketing está
            generando negocio o quemando dinero. Si quieres profundizar
            en indicadores de gestión más amplios, lee{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              indicadores clave de una empresa
            </a>.
          </p>

          <div className="my-10 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Métrica 1
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Coste de adquisición de cliente (CAC)
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Es la pregunta más importante: ¿cuánto te cuesta
                conseguir un cliente nuevo? La fórmula es simple:
              </p>
              <div className="my-4 rounded-lg bg-white border border-primary-200 p-4 text-center">
                <p className="text-lg font-bold text-primary-800">
                  CAC = Gasto total en marketing y ventas / Clientes
                  nuevos conseguidos
                </p>
              </div>
              <p className="mt-2 text-gray-600 md:text-lg">
                Incluye todo: publicidad, agencia, herramientas, tiempo
                del equipo comercial, ferias, folletos — todo lo que
                gastas para atraer clientes. Si gastas 2.000 euros al
                mes y consigues 10 clientes nuevos, tu CAC es 200
                euros. ¿Esos 200 euros son mucho o poco? Depende de
                cuánto te genera ese cliente a lo largo del tiempo, que
                es lo que mide el LTV (valor de vida del cliente). Como
                regla general, tu LTV debería ser al menos 3 veces tu
                CAC.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Métrica 2
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Tasa de conversión por canal
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                No todos los canales convierten igual. Necesitas saber
                qué porcentaje de las personas que llegan a ti a través
                de cada canal acaban comprando. Por ejemplo: de cada 100
                personas que visitan tu web, ¿cuántas piden presupuesto?
                De cada 50 que te llaman, ¿cuántas compran? De cada 200
                que ven tu anuncio en Instagram, ¿cuántas hacen clic?
              </p>
              <div className="my-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="border border-gray-200 px-3 py-2 font-semibold text-primary-900">
                        Canal
                      </th>
                      <th className="border border-gray-200 px-3 py-2 font-semibold text-primary-900">
                        Conversión típica
                      </th>
                      <th className="border border-gray-200 px-3 py-2 font-semibold text-primary-900">
                        Buena conversión
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2 text-gray-900">
                        Web (visita a contacto)
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        1-3%
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        &gt;5%
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-3 py-2 text-gray-900">
                        Google Ads (clic a lead)
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        3-5%
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        &gt;8%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2 text-gray-900">
                        Redes sociales (seguidor a lead)
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        0,5-2%
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        &gt;3%
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-3 py-2 text-gray-900">
                        Email marketing (envío a clic)
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        2-4%
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        &gt;6%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2 text-gray-900">
                        Recomendación boca a boca
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        20-40%
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">
                        &gt;50%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-gray-600 md:text-lg">
                Medir la conversión por canal te dice dónde enfocar tu
                dinero y tu tiempo. Si las redes sociales te generan
                muchos &ldquo;likes&rdquo; pero ningún cliente, ese
                canal no está funcionando para ti. Si quieres entender
                mejor por qué puede estar pasando esto, lee{" "}
                <a
                  href="/blog/redes-sociales-para-pymes"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  redes sociales para pymes: lo que funciona de verdad
                </a>.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Métrica 3
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                ROI por campaña o acción
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                El ROI (retorno sobre la inversión) te dice cuánto
                ganas por cada euro que inviertes en marketing. La
                fórmula:
              </p>
              <div className="my-4 rounded-lg bg-white border border-primary-200 p-4 text-center">
                <p className="text-lg font-bold text-primary-800">
                  ROI = (Ingresos generados - Coste de la campaña) /
                  Coste de la campaña x 100
                </p>
              </div>
              <p className="mt-2 text-gray-600 md:text-lg">
                Si inviertes 500 euros en una campaña de Google Ads y
                generas 2.500 euros en ventas, tu ROI es del 400%.
                Cada euro invertido ha generado 4 euros de beneficio
                bruto. Un ROI por debajo del 100% significa que estás
                perdiendo dinero con esa acción.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">
                Métrica 4
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Coste por lead (CPL)
              </h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                Un lead es una persona que ha mostrado interés real: ha
                pedido información, ha rellenado un formulario, ha
                llamado. El coste por lead te dice cuánto te cuesta
                llegar hasta ese punto. Es útil porque puedes medirlo
                antes de que se cierre la venta. Si tu CPL es
                altísimo, ya sabes que algo va mal antes de esperar a
                ver si esos leads compran.
              </p>
              <div className="my-4 rounded-lg bg-white border border-primary-200 p-4 text-center">
                <p className="text-lg font-bold text-primary-800">
                  CPL = Gasto en la campaña / Leads generados
                </p>
              </div>
            </div>
          </div>

          {/* Cómo medir sin herramientas caras */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo medir todo esto sin herramientas caras
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas un CRM de 300 euros al mes ni un equipo de
            analítica de datos. Una pyme puede medir su marketing con
            herramientas gratuitas o muy baratas:
          </p>

          <ul className="mt-4 space-y-3 text-gray-600 md:text-lg">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>
                <strong>Google Analytics</strong> (gratuito): te dice
                cuántas visitas tiene tu web, de dónde vienen y qué
                hacen.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>
                <strong>Hoja de cálculo</strong> (gratuita): un
                simple Excel o Google Sheets donde apuntas cada mes
                cuánto gastas, cuántos leads recibes y cuántos
                clientes cierras.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>
                <strong>Pregunta &ldquo;¿cómo nos conociste?&rdquo;</strong>:
                la herramienta de medición más potente del mundo. A
                cada cliente nuevo que llega, pregúntale cómo te
                encontró. Apúntalo. Cada mes, revisa los datos.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>
                <strong>Números de teléfono distintos</strong>: pon
                un número diferente en tu web, en Google My Business y
                en tus folletos. Así sabes exactamente de dónde viene
                cada llamada.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>
                <strong>Códigos de descuento rastreables</strong>: si
                haces una promoción en redes, usa un código exclusivo.
                Cada venta con ese código es una venta que sabes de
                dónde viene.
              </span>
            </li>
          </ul>

          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              El cuadro de mando mínimo para una pyme
            </h3>
            <p className="mt-2 text-gray-700 md:text-lg">
              Cada mes, dedica 30 minutos a rellenar esta tabla:
              cuánto gasté en marketing (total y por canal), cuántos
              leads recibí, cuántos clientes nuevos cerré, cuánto
              facturé con esos clientes nuevos. Con esos datos puedes
              calcular tu CAC, tu CPL y tu ROI. Es todo lo que
              necesitas para tomar decisiones informadas.
            </p>
          </div>

          {/* Señales de alarma */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Señales de alarma: tu marketing está tirando dinero
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Estas son las banderas rojas que veo repetidamente en las
            pymes que vienen a mi consultoría. Si te identificas con
            dos o más, necesitas parar y revisar tu estrategia. Te puede
            interesar también{" "}
            <a
              href="/blog/por-que-no-funciona-la-publicidad-en-mi-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              por qué no funciona la publicidad en tu negocio
            </a>.
          </p>

          <div className="my-10 space-y-4">
            {[
              {
                bandera: "No sabes cuánto te cuesta un cliente nuevo",
                detalle:
                  "Si no puedes decirme una cifra aproximada, no estás midiendo. Y si no mides, no puedes mejorar.",
              },
              {
                bandera: "Tu agencia te habla de impresiones y alcance, nunca de ventas",
                detalle:
                  "Las impresiones no pagan facturas. Si tu agencia nunca te dice cuántos clientes te ha generado, tienes un problema.",
              },
              {
                bandera: "Llevas meses invirtiendo y no notas más clientes",
                detalle:
                  "El marketing que funciona se nota. Si llevas 3-6 meses gastando y tus ventas siguen igual, algo está roto.",
              },
              {
                bandera: "No puedes distinguir qué canal trae clientes y cuál no",
                detalle:
                  "Si no sabes si tus clientes vienen de Google, de Instagram o de recomendación, estás disparando a ciegas.",
              },
              {
                bandera: "Gastas lo mismo cada mes sin preguntarte por qué",
                detalle:
                  "El presupuesto de marketing no debería ser un gasto fijo automático. Debería revisarse cada mes en función de resultados.",
              },
              {
                bandera: "Tus redes sociales tienen muchos seguidores pero tu teléfono no suena",
                detalle:
                  "Seguidores sin conversión es vanidad, no marketing. Un negocio local necesita clientes, no fans.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-5 md:p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                  !
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.bandera}
                  </p>
                  <p className="mt-1 text-gray-600">{item.detalle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cuándo despedir a tu agencia */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo despedir a tu agencia de marketing
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No tengo nada en contra de las agencias. Hay muchas que
            hacen un trabajo excelente. Pero hay situaciones en las que
            seguir pagando es tirar el dinero:
          </p>

          <div className="my-10 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border-l-4 border-accent-500 bg-accent-50 p-5 md:p-6">
              <div>
                <p className="font-semibold text-gray-900">
                  No te reportan resultados medibles
                </p>
                <p className="mt-1 text-gray-600">
                  Si cada mes recibes un informe lleno de gráficas
                  bonitas pero sin un número claro de leads o clientes
                  generados, están ocultando la falta de resultados
                  detrás de métricas de vanidad.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border-l-4 border-accent-500 bg-accent-50 p-5 md:p-6">
              <div>
                <p className="font-semibold text-gray-900">
                  Llevas más de 6 meses sin ver retorno
                </p>
                <p className="mt-1 text-gray-600">
                  El marketing digital puede tardar 2-3 meses en dar
                  frutos. Pero si a los 6 meses no hay mejora
                  medible, no es que necesite más tiempo — es que no
                  está funcionando.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border-l-4 border-accent-500 bg-accent-50 p-5 md:p-6">
              <div>
                <p className="font-semibold text-gray-900">
                  No entienden tu negocio ni tu cliente
                </p>
                <p className="mt-1 text-gray-600">
                  Si la agencia nunca te ha preguntado quién es tu
                  cliente ideal, cuál es tu margen o qué te diferencia,
                  están aplicando una plantilla genérica. Y eso no
                  funciona.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border-l-4 border-accent-500 bg-accent-50 p-5 md:p-6">
              <div>
                <p className="font-semibold text-gray-900">
                  Te dicen que &ldquo;es imposible&rdquo; medir el
                  retorno
                </p>
                <p className="mt-1 text-gray-600">
                  Medir no es imposible. Es incómodo para quien no
                  genera resultados. Cualquier acción de marketing puede
                  medirse si se diseña con ese objetivo desde el
                  principio.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;El marketing que no se mide no es marketing. Es un
            acto de fe. Y los actos de fe no deberían pagarse con el
            dinero del negocio.&rdquo;
          </blockquote>

          {/* Tu plan de medición */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Tu plan de medición en 4 pasos
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas revolucionar nada. Con estos cuatro pasos,
            este mes puedes empezar a saber si tu marketing funciona:
          </p>

          <div className="my-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">
                1
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Anota todo lo que gastas
              </h3>
              <p className="mt-2 text-gray-600">
                Haz una lista de cada euro que destinas a marketing:
                publicidad, agencia, herramientas, material impreso,
                ferias, patrocinios. Todo.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">
                2
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Pregunta a cada nuevo cliente cómo te encontró
              </h3>
              <p className="mt-2 text-gray-600">
                Hazlo de forma sistemática. No a veces — siempre.
                Registra la respuesta en una hoja de cálculo.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">
                3
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Calcula tus 4 métricas cada mes
              </h3>
              <p className="mt-2 text-gray-600">
                CAC, conversión por canal, ROI por campaña y CPL. Son
                30 minutos al mes que te ahorran miles de euros al
                año.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">
                4
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Toma decisiones con datos, no con intuición
              </h3>
              <p className="mt-2 text-gray-600">
                Si un canal no convierte en 3 meses, reasigna ese
                presupuesto al que sí funciona. Sin dramas, sin
                apegos.
              </p>
            </div>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Medir tu marketing no es complicado. Lo complicado es
            aceptar lo que los números te dicen. Porque a veces te
            dicen que esa campaña en la que confiabas no funciona, que
            la agencia a la que llevas pagando un año no te ha traído
            clientes, o que el canal donde más inviertes es el que
            peor convierte.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero eso es exactamente lo que necesitas saber. Porque
            cada euro que dejas de gastar en lo que no funciona es un
            euro que puedes invertir en lo que sí. Y para una pyme,
            donde cada euro cuenta, eso marca la diferencia entre
            crecer y sobrevivir.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza este mes. Apunta lo que gastas, pregunta cómo te
            encuentran, calcula tus métricas. En tres meses tendrás
            más claridad sobre tu marketing que el 90% de las pymes
            de tu sector. Y con esa claridad, podrás tomar decisiones
            que de verdad muevan la aguja de tu negocio.
          </p>

          {/* CTA */}
          <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              ¿Inviertes en marketing pero no sabes si funciona?
            </p>
            <p className="mt-2 text-gray-600">
              Auditamos tu inversión en marketing, medimos lo que
              funciona y lo que no, y te ayudamos a redirigir tu
              presupuesto hacia lo que genera clientes de verdad.
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
              <BlogSidebar currentSlug="como-saber-si-tu-marketing-funciona" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber si tu marketing está generando negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos tu inversión en marketing, medimos resultados
            reales y te decimos exactamente dónde estás perdiendo
            dinero y dónde deberías invertir más.
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

      <BlogNav currentSlug="como-saber-si-tu-marketing-funciona" />

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
