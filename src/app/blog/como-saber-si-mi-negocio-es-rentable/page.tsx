import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo saber si tu negocio es rentable de verdad — 7 indicadores clave | Consultoría Método",
  description: "Facturar no es ganar. Aprende a medir la rentabilidad real de tu negocio con 7 indicadores clave. Guía práctica para saber si ganas dinero o solo mueves cifras.",
  keywords: ["cómo saber si mi negocio es rentable", "rentabilidad negocio", "indicadores rentabilidad pyme", "punto de equilibrio empresa", "consultor empresarial Coruña", "consultoría empresas Coruña", "mejora de empresas"],
  openGraph: { title: "Cómo saber si tu negocio es rentable de verdad — 7 indicadores clave", description: "Facturar no es ganar. Aprende a medir la rentabilidad real de tu negocio con 7 indicadores clave.", locale: "es_ES", type: "article" },
  alternates: { canonical: "https://consultoriametodo.es/blog/como-saber-si-mi-negocio-es-rentable" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Cómo saber si tu negocio es rentable de verdad — 7 indicadores clave", author: { "@type": "Person", name: "Pablo García Dacosta" }, publisher: { "@type": "Organization", name: "Consultoría Método" }, datePublished: "2025-04-17" };

export default function ArticuloNegocioRentable() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">Cómo saber si tu negocio es rentable de verdad</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">Facturar mucho no significa ganar dinero. Descubre los indicadores que revelan la rentabilidad real de tu empresa y qué hacer si los números no cuadran.</p>
          <p className="mt-4 text-sm text-primary-300">Por {SITE.consultant} · Consultoría de negocios — Galicia y por videollamada en el resto de España</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <p>
              Conozco empresarios que facturan 500.000 euros al año y viven peor que un asalariado con un sueldo modesto. Facturar y ganar son dos cosas completamente distintas. Si no tienes claro cuánto dinero se queda realmente en tu bolsillo después de pagar todo, estás pilotando tu negocio a ciegas.
            </p>

            <p>
              En este artículo te doy las herramientas para saber, con números reales, si tu negocio es rentable o si simplemente mueve dinero de un lado a otro sin dejarte nada.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Facturar mucho y ganar poco es la trampa más habitual del mundo pyme. La rentabilidad real se mide, no se adivina.&rdquo;
            </blockquote>

            <h2>Facturar no es ganar: la confusión más cara</h2>

            <p>
              La facturación es la cifra bruta de lo que vendes. La rentabilidad es lo que te queda después de pagar materiales, salarios, alquiler, impuestos, seguros, suministros y todo lo demás. Parece obvio, pero una cantidad sorprendente de empresarios confunden ambas cosas.
            </p>

            <p>
              Una empresa puede facturar millones y estar en números rojos. Y otra puede facturar una cifra modesta y ser extraordinariamente rentable. Lo que importa no es cuánto entra, sino cuánto se queda. Si quieres profundizar en este problema, lee{" "}
              <a href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero" className="text-accent-600 underline hover:text-accent-700">
                por qué tu empresa factura pero no gana dinero
              </a>.
            </p>

            <h2>Un ejemplo para ver la diferencia</h2>
            <p>
              Imagina dos empresas del mismo sector. La empresa A factura 600.000 € al año. La empresa B factura 240.000 €. ¿Cuál es más rentable? La respuesta intuitiva es A — pero los números reales suelen decir otra cosa:
            </p>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 p-3 text-left">Concepto</th>
                    <th className="border border-gray-200 p-3 text-right">Empresa A</th>
                    <th className="border border-gray-200 p-3 text-right">Empresa B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 p-3">Facturación anual</td><td className="border border-gray-200 p-3 text-right">600.000 €</td><td className="border border-gray-200 p-3 text-right">240.000 €</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Costes variables</td><td className="border border-gray-200 p-3 text-right">− 420.000 €</td><td className="border border-gray-200 p-3 text-right">− 120.000 €</td></tr>
                  <tr><td className="border border-gray-200 p-3">Costes fijos</td><td className="border border-gray-200 p-3 text-right">− 150.000 €</td><td className="border border-gray-200 p-3 text-right">− 60.000 €</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-semibold">Sueldo digno del gerente</td><td className="border border-gray-200 p-3 text-right">− 36.000 €</td><td className="border border-gray-200 p-3 text-right">− 36.000 €</td></tr>
                  <tr><td className="border border-gray-200 p-3 font-semibold">Beneficio neto</td><td className="border border-gray-200 p-3 text-right text-red-600 font-bold">− 6.000 €</td><td className="border border-gray-200 p-3 text-right text-emerald-700 font-bold">+ 24.000 €</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-semibold">Margen neto</td><td className="border border-gray-200 p-3 text-right text-red-600 font-bold">− 1 %</td><td className="border border-gray-200 p-3 text-right text-emerald-700 font-bold">+ 10 %</td></tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm text-gray-500">La empresa A factura 2,5 veces más que B — pero pierde dinero. B factura menos, pero es claramente rentable. Facturación alta sin estructura eficiente es simplemente mover más volumen de pérdidas.</p>
            </div>

            <p>
              Esto no es un ejemplo inventado. Es un patrón que veo constantemente: empresas que han crecido en facturación sin revisar su modelo de costes. Y que un día se dan cuenta de que tienen más trabajo, más problemas, más preocupaciones — pero menos beneficio.
            </p>

            <h2>Los 4 indicadores clave de rentabilidad</h2>

            <p>
              No necesitas un MBA para medir la rentabilidad de tu negocio. Estos cuatro indicadores te dan una imagen clara de la situación real:
            </p>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Los indicadores esenciales</h3>
              <ul className="ml-4 list-disc space-y-2 text-blue-800">
                <li><strong>Margen bruto:</strong> (Ventas - Coste directo) / Ventas x 100. Cuánto ganas por cada euro vendido antes de gastos generales.</li>
                <li><strong>Margen neto:</strong> Beneficio neto / Ventas x 100. Lo que realmente te queda después de pagar absolutamente todo.</li>
                <li><strong>ROI (Retorno sobre la inversión):</strong> Beneficio neto / Inversión total x 100. Mide si el dinero invertido en tu negocio rinde más que cualquier otra alternativa.</li>
                <li><strong>Punto de equilibrio:</strong> La cifra de ventas a partir de la cual empiezas a ganar dinero. Por debajo, pierdes.</li>
              </ul>
            </div>

            <p>
              Para un análisis más completo de los indicadores que debes vigilar, consulta nuestra guía sobre{" "}
              <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                indicadores clave de una empresa
              </a>.
            </p>

            <h2>Señales de que tu negocio NO es rentable (aunque lo parezca)</h2>

            <p>
              La falta de rentabilidad no siempre es evidente. A veces se esconde detrás de una facturación aparentemente sana. Estas son las señales de alarma:
            </p>

            <ul>
              <li>Facturas mucho pero siempre necesitas financiación o créditos para cubrir gastos corrientes.</li>
              <li>No puedes pagarte un sueldo digno como gerente, o directamente no te lo pagas.</li>
              <li>Trabajas más horas que cualquier empleado y ganas menos por hora que ellos.</li>
              <li>Dependes de uno o dos clientes grandes para mantener la empresa a flote.</li>
              <li>Los impuestos y la Seguridad Social te pillan siempre sin liquidez.</li>
              <li>Llevas años sin subir precios porque tienes miedo a perder clientes.</li>
              <li>Tu cuenta bancaria sube y baja como una montaña rusa sin que entiendas por qué.</li>
              <li>Cada vez que llega un imprevisto (avería, baja, devolución), el negocio tiembla.</li>
            </ul>

            <p>
              Si te identificas con tres o más de estos puntos, necesitas revisar tu modelo de negocio urgentemente.
            </p>

            <h2>Cómo calcular tu punto de equilibrio real</h2>

            <p>
              El punto de equilibrio es la cifra más importante que puedes conocer: lo mínimo que necesitas facturar para no perder dinero. Calcularlo es más sencillo de lo que parece:
            </p>

            <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-900">Fórmula del punto de equilibrio</h3>
              <p className="mb-2 text-amber-800"><strong>Punto de equilibrio = Costes fijos / Margen de contribución</strong></p>
              <p className="text-amber-800">Margen de contribución = (Precio de venta - Coste variable unitario) / Precio de venta</p>
              <p className="mt-3 text-sm text-amber-700">Ejemplo: si tus costes fijos son 5.000 euros/mes y tu margen de contribución es del 40 %, necesitas facturar al menos 12.500 euros al mes para no perder dinero. Todo lo que supere esa cifra es beneficio real.</p>
            </div>

            <p>
              El punto de equilibrio no es un número fijo para siempre. Cambia cuando suben tus costes fijos, cuando modificas precios o cuando varía tu mix de productos. Revísalo al menos cada trimestre.
            </p>

            <h2>Rentabilidad no es lo mismo que liquidez</h2>

            <p>
              Otra confusión habitual. Un negocio puede ser rentable y tener problemas de liquidez al mismo tiempo. O no ser rentable y tener liquidez temporal porque está financiándose con créditos o alargando pagos a proveedores. Son dos dimensiones distintas:
            </p>

            <ul>
              <li><strong>Rentabilidad:</strong> mide si tu negocio genera beneficio a largo plazo. Se calcula sobre la cuenta de resultados.</li>
              <li><strong>Liquidez:</strong> mide si tienes dinero disponible en el momento en que lo necesitas. Se calcula sobre el flujo de caja.</li>
            </ul>

            <p>
              Un caso típico: una empresa de reformas puede cerrar un proyecto con un margen del 25 % (rentable) pero cobrar a 90 días mientras paga a proveedores a 30 días (problema de liquidez). O una tienda que vende mucho en diciembre pero tiene los pagos de seguros y impuestos en enero. Para profundizar en esto, lee{" "}
              <a href="/blog/problemas-de-liquidez-en-pymes" className="text-accent-600 underline hover:text-accent-700">
                cómo resolver los problemas de liquidez en pymes
              </a>{" "}
              y{" "}
              <a href="/blog/como-mejorar-el-flujo-de-caja" className="text-accent-600 underline hover:text-accent-700">
                cómo mejorar el flujo de caja
              </a>.
            </p>

            <h2>Cómo analizar la rentabilidad por segmentos</h2>

            <p>
              Un negocio rara vez es uniformemente rentable. Normalmente hay clientes, productos o líneas de servicio que son muy rentables y otros que están arrastrando el negocio. Por eso mirar solo el margen global esconde información crítica. Deberías analizar la rentabilidad al menos por:
            </p>

            <ol>
              <li><strong>Producto o servicio.</strong> ¿Cuál es el margen real de cada referencia? Suele cumplirse la regla 80/20: el 20 % de lo que vendes genera el 80 % del beneficio. Profundiza con{" "}
                <a href="/blog/como-calcular-margen-beneficio-producto" className="text-accent-600 underline hover:text-accent-700">
                  cómo calcular el margen de beneficio de un producto
                </a>.</li>
              <li><strong>Cliente.</strong> No todos los clientes valen lo mismo. Hay clientes que aportan mucho y dan poco trabajo. Otros aportan poco y consumen mucho tiempo de tu equipo. La rentabilidad por cliente es un dato clave.</li>
              <li><strong>Canal de venta.</strong> Si vendes por varios canales (tienda física, online, distribuidores, comerciales), cada canal tiene su propia estructura de costes y su propio margen.</li>
              <li><strong>Línea de negocio.</strong> Si tu empresa tiene varias actividades, analizar cada una por separado evita que una línea rentable camufle las pérdidas de otra.</li>
            </ol>

            <h2>Ejemplo real: cuando el diagnóstico revela lo que nadie veía</h2>
            <p>
              En un{" "}
              <a href="/blog/caso-exito-restaurante-rentabilidad" className="text-accent-600 underline hover:text-accent-700">
                caso real de un restaurante que acompañamos
              </a>, el dueño tenía la sensación de que el negocio &quot;iba bien&quot; porque el local estaba lleno los fines de semana. Facturaba más de 10.000 € al mes. Pero cuando hicimos el diagnóstico de rentabilidad, la realidad era otra:
            </p>
            <ul>
              <li>El menú del día perdía dinero (margen negativo después de costes reales).</li>
              <li>De 52 platos de la carta, 14 concentraban el 80 % de las ventas y muchos de los otros 38 daban pérdidas.</li>
              <li>El food cost estaba en el 42 % cuando en hostelería lo saludable es 28-35 %.</li>
              <li>El margen neto real era prácticamente cero.</li>
            </ul>
            <p>
              El restaurante no era un negocio fracasado — era un negocio <strong>mal medido</strong>. En cuanto se puso luz sobre los números, las decisiones correctas aparecieron solas. En 3 meses pasó a tener un margen del 12-15 % estable.
            </p>

            <h2>Errores que destruyen la rentabilidad sin que lo notes</h2>

            <p>
              He trabajado con decenas de empresas que creían ser rentables y no lo eran. Estos son los errores más habituales:
            </p>

            <ol>
              <li><strong>No contabilizar tu propio sueldo como gasto.</strong> Si no te pagas un salario de mercado, estás subvencionando a tu empresa con tu trabajo gratuito.</li>
              <li><strong>Ignorar los costes ocultos.</strong> Amortizaciones, mantenimiento, formación, tiempo improductivo, desplazamientos... todo suma y nadie lo apunta.</li>
              <li><strong>Competir por precio.</strong> Bajar precios para ganar volumen es la autopista hacia la ruina en una pyme sin economías de escala.</li>
              <li><strong>No revisar la rentabilidad por producto o servicio.</strong> Es habitual que el 20 % de lo que vendes genere el 80 % del beneficio, y el resto te cueste dinero.</li>
              <li><strong>Crecer sin estructura.</strong> Más ventas con el mismo caos operativo suele significar más costes y menos margen, no más beneficio.</li>
            </ol>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;El empresario que no conoce su punto de equilibrio está apostando cada mes sin saber cuánto tiene que ganar para no perder.&rdquo;
            </blockquote>

            <h2>Qué hacer cuando descubres que no eres rentable</h2>

            <p>
              Descubrir que tu negocio no es rentable no es el final. Es el principio de la solución. Estos son los pasos que recomiendo a mis clientes:
            </p>

            <ul>
              <li><strong>Acepta la realidad.</strong> Lo peor que puedes hacer es seguir como si nada. Los números no mienten y el tiempo no arregla problemas estructurales.</li>
              <li><strong>Identifica los focos de pérdida.</strong> Analiza producto por producto, servicio por servicio. Encuentra exactamente qué te está costando dinero.</li>
              <li><strong>Revisa tu política de precios.</strong> En la mayoría de casos, el primer problema es que cobras demasiado poco. No tengas miedo a subir precios.</li>
              <li><strong>Recorta gastos con criterio.</strong> No elimines a lo loco. Quita lo que no aporta valor al cliente ni a la operación, pero no toques lo que genera retorno.</li>
              <li><strong>Reestructura tu oferta.</strong> Potencia lo rentable, transforma lo que tiene potencial y elimina lo que solo te genera trabajo y dolores de cabeza.</li>
              <li><strong>Busca ayuda externa.</strong> A veces necesitas una mirada de fuera para ver lo que tú ya no ves por estar metido en el día a día.</li>
            </ul>

            <p>
              Para una guía detallada sobre cómo mejorar tus márgenes paso a paso, visita nuestro artículo sobre{" "}
              <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">
                cómo mejorar la rentabilidad de tu empresa
              </a>.
            </p>

            <div className="not-prose my-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-900">Ejercicio práctico</h3>
              <p className="text-green-800">
                Dedica una hora esta semana a calcular estos cuatro indicadores con tus datos reales. No hace falta un software caro: una hoja de cálculo bien hecha es suficiente. Apunta el margen bruto, el margen neto, el ROI y tu punto de equilibrio. Si alguno de esos números te sorprende (y no para bien), ya sabes por dónde empezar.
              </p>
            </div>

            <h2>Cómo montar un sistema de seguimiento mensual</h2>
            <p>
              Saber si tu negocio es rentable no es un ejercicio de una vez — es una práctica continua. Con un par de horas al mes puedes tener un sistema de seguimiento que te dé información útil para decidir. No necesitas software caro ni un departamento financiero. Con esto basta:
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                { paso: "1. Cuadro mensual simple", desc: "Una hoja de cálculo con: facturación, costes variables, costes fijos, beneficio neto y % de margen. Un mes por columna, doce columnas al año." },
                { paso: "2. Desglose por producto/servicio", desc: "Cada trimestre, calcula el margen real de tus 10 productos o servicios principales. Ordénalos por margen y por volumen." },
                { paso: "3. Punto de equilibrio actualizado", desc: "Revisa trimestralmente tu punto de equilibrio. Si tus costes fijos han subido, tu objetivo de facturación mínima también." },
                { paso: "4. Reunión mensual contigo mismo", desc: "Bloquea 1 hora al mes para revisar los números con calma. Sin interrupciones. Es la hora más rentable del mes." },
                { paso: "5. Acciones concretas", desc: "Cada revisión debe terminar con 1-3 decisiones: algo que subir, algo que bajar, algo que medir mejor. Sin acción, no hay mejora." },
              ].map((item) => (
                <div key={item.paso} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <p className="font-bold text-gray-900">{item.paso}</p>
                  <p className="mt-1 text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2>Cuándo buscar ayuda externa</h2>
            <p>
              Hay momentos en los que mirar los números solo desde dentro de la empresa no es suficiente. Si llevas meses con la sensación de que algo no cuadra y no sabes por qué, si los números te agobian cada vez que los miras, o si el negocio ha crecido y ya no controlas las cifras con la intuición como antes — ahí es cuando una mirada externa aporta valor.
            </p>
            <p>
              Para entender mejor este momento, lee{" "}
              <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">
                cuándo merece la pena contratar un consultor de negocios
              </a>. Lo importante no es que el consultor sepa más que tú sobre tu negocio (no la sabe). Lo importante es que tiene el criterio y la distancia necesaria para ver patrones que tú ya no ves por estar metido en el día a día.
            </p>

            <h2>La rentabilidad se construye con datos, no con intuiciones</h2>

            <p>
              Si has llegado hasta aquí, ya tienes las herramientas para saber si tu negocio es rentable de verdad. No te conformes con la cifra de facturación ni con la sensación de que «las cosas van bien». Los indicadores están ahí para darte claridad y para que tomes decisiones con datos, no con miedo ni con esperanza.
            </p>

            <p>
              Como consultor empresarial en Coruña, he visto cómo negocios que parecían condenados se transforman cuando el empresario empieza a medir lo que importa. Y he visto negocios que parecían exitosos hundirse por ignorar sus propios números. La diferencia siempre está en quién mira los datos y actúa a tiempo.
            </p>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-saber-si-mi-negocio-es-rentable" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">¿Sabes realmente cuánto gana tu negocio?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">Te ayudo a analizar la rentabilidad real de tu empresa y a diseñar un plan concreto para mejorar tus márgenes. Sin rodeos, con números claros.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="como-saber-si-mi-negocio-es-rentable" />
    </>
  );
}
