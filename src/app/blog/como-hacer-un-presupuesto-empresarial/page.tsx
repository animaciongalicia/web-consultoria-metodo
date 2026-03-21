import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo hacer un presupuesto empresarial: guía práctica para pymes | Consultoría Método",
  description:
    "Aprende a crear un presupuesto empresarial paso a paso. Guía práctica para pymes que quieren controlar sus finanzas, reducir gastos innecesarios y tomar mejores decisiones de negocio.",
  keywords: [
    "cómo hacer presupuesto empresarial",
    "presupuesto para pymes",
    "planificación financiera negocio",
    "control de gastos empresa",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "gestión financiera pyme",
  ],
  openGraph: {
    title: "Cómo hacer un presupuesto empresarial: guía práctica para pymes",
    description:
      "Guía paso a paso para crear un presupuesto empresarial que funcione. Control financiero real para pequeñas y medianas empresas.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-hacer-un-presupuesto-empresarial",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo hacer un presupuesto empresarial: guía práctica para pymes",
  description:
    "Aprende a crear un presupuesto empresarial paso a paso. Guía práctica para pymes que quieren controlar sus finanzas, reducir gastos innecesarios y tomar mejores decisiones de negocio.",
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
  datePublished: "2025-05-15",
  dateModified: "2025-05-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-hacer-un-presupuesto-empresarial",
  },
};

export default function ArticuloPresupuestoEmpresarial() {
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
            Cómo hacer un presupuesto empresarial: guía práctica para pymes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La mayoría de las pymes españolas no tienen presupuesto. Funcionan
            mirando la cuenta del banco y cruzando los dedos. En este artículo
            te enseño a crear uno que te dé control real sobre tus finanzas.
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
            Pregúntale a diez dueños de pymes si tienen un presupuesto
            empresarial y ocho te dirán que no. Los otros dos tendrán una hoja
            de Excel medio abandonada que hicieron hace tres años. No exagero:
            en más de 25 años de consultoría he visto este patrón cientos de
            veces. Y es uno de los errores financieros más graves que puede
            cometer un empresario.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un presupuesto no es un ejercicio burocrático ni algo reservado
            para grandes corporaciones. Es, sencillamente, la herramienta que
            te permite saber a dónde va tu dinero, anticipar problemas de
            tesorería y tomar decisiones basadas en datos en lugar de en
            intuición. Sin presupuesto, pilotas a ciegas. Y pilotar a ciegas
            funciona hasta que no funciona.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En esta guía te voy a explicar cómo crear un presupuesto
            empresarial paso a paso, sin complicaciones, adaptado a la
            realidad de una pyme. No necesitas un director financiero ni
            software caro. Necesitas un par de horas, una hoja de cálculo y
            la decisión de dejar de improvisar con tu dinero.
          </p>

          {/* H2 — Por qué no presupuestan */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué la mayoría de las pymes no hacen presupuesto
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las excusas más habituales que escucho son siempre las mismas:
            «mi negocio es demasiado pequeño para eso», «ya llevo las
            cuentas en la cabeza», «es imposible prever lo que va a pasar».
            Detrás de estas frases hay una mezcla de desconocimiento,
            pereza y miedo a enfrentarse a la realidad de los números.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El resultado es predecible: gastos que se descontrolan sin que
            nadie se dé cuenta, inversiones que se hacen «porque hay dinero
            en la cuenta» sin valorar si son prioritarias, y meses en los que
            no se puede pagar a proveedores porque nadie anticipó que iban a
            coincidir tres pagos grandes. Esto no es mala suerte — es falta
            de planificación. Y se soluciona con un presupuesto.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres entender por qué tu empresa puede estar facturando
            bien pero no ganando dinero, te recomiendo leer este artículo
            sobre los{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              indicadores clave que toda empresa debería vigilar
            </a>
            . El presupuesto y los indicadores van de la mano.
          </p>

          {/* H2 — Elementos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 6 elementos de un buen presupuesto empresarial
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un presupuesto empresarial no tiene que ser complicado, pero sí
            completo. Estos son los seis bloques que debe incluir.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Bloque</th>
                  <th className="px-4 py-3 font-semibold">Qué incluye</th>
                  <th className="px-4 py-3 font-semibold">Ejemplo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Previsión de ingresos</td>
                  <td className="px-4 py-3">Ventas esperadas por línea de producto o servicio</td>
                  <td className="px-4 py-3">Servicio A: 8.000 €/mes, Servicio B: 3.500 €/mes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Costes fijos</td>
                  <td className="px-4 py-3">Gastos que no varían con las ventas</td>
                  <td className="px-4 py-3">Alquiler, nóminas, seguros, cuotas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Costes variables</td>
                  <td className="px-4 py-3">Gastos que cambian según la actividad</td>
                  <td className="px-4 py-3">Materias primas, comisiones, envíos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Inversiones previstas</td>
                  <td className="px-4 py-3">Compras de activos, mejoras, proyectos</td>
                  <td className="px-4 py-3">Nueva maquinaria, reforma, web nueva</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Fondo de emergencia</td>
                  <td className="px-4 py-3">Reserva para imprevistos (5-10% de ingresos)</td>
                  <td className="px-4 py-3">Avería, impago de cliente, subida de costes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Resultado previsto</td>
                  <td className="px-4 py-3">Ingresos – gastos – inversiones – reserva</td>
                  <td className="px-4 py-3">Beneficio neto esperado por mes y año</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La clave está en ser realista con las previsiones de ingresos.
            La tentación es siempre ser optimista, pero un presupuesto
            optimista es peor que no tener presupuesto — te da una falsa
            sensación de seguridad. Mejor prever un escenario conservador
            y sorprenderte positivamente que planificar un escenario ideal
            y quedarte corto.
          </p>

          {/* H2 — Paso a paso */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo crear tu presupuesto paso a paso
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No hace falta que dediques una semana a esto. Con dos o tres
            horas de trabajo concentrado puedes tener un presupuesto
            funcional. Sigue estos pasos:
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Recopila los datos del último año
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Antes de prever el futuro, necesitas entender el pasado. Revisa
            tus facturas, extractos bancarios y declaraciones fiscales de los
            últimos 12 meses. Clasifica cada ingreso y cada gasto en las
            categorías de la tabla anterior. Este ejercicio ya te dará
            sorpresas — casi siempre descubres gastos que no recordabas o
            que son mayores de lo que creías.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Estima los ingresos mes a mes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No pongas una cifra anual y la dividas entre 12. La mayoría de
            los negocios tienen estacionalidad: meses fuertes y meses
            flojos. Usa los datos del año pasado como base y ajusta según
            lo que esperas que cambie (nuevos clientes, pérdida de un
            contrato, lanzamiento de un servicio). Haz tres escenarios:
            pesimista, realista y optimista. Trabaja con el realista pero
            prepárate para el pesimista.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Lista todos los gastos fijos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Alquiler, nóminas, seguros sociales, seguros de la empresa,
            suministros, cuotas de software, asesoría, préstamos... Los
            gastos fijos son los que tienes que pagar vendas o no vendas.
            Son tu «mínimo vital» como empresa. Si tus ingresos no cubren
            estos gastos de forma consistente, tienes un problema
            estructural que debes resolver antes de cualquier otra cosa.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Calcula los costes variables
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Estos dependen del volumen de actividad: materias primas,
            comisiones de venta, costes de envío, subcontrataciones
            puntuales. Exprésalos como porcentaje de los ingresos cuando
            sea posible. Si sabes que tus materias primas representan el
            35% de tus ventas, puedes calcular automáticamente este coste
            para cualquier nivel de facturación. Si necesitas ayuda con
            este cálculo, el artículo sobre{" "}
            <a
              href="/blog/como-calcular-margen-beneficio-producto"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo calcular el margen de beneficio
            </a>{" "}
            te será útil.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Planifica las inversiones
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            ¿Qué compras o proyectos necesitas hacer este año? ¿Cuándo?
            ¿Cuánto cuestan? No se trata de renunciar a invertir, sino de
            planificar cuándo hacerlo para que no coincida con meses de
            baja facturación. Una inversión de 15.000 euros en enero puede
            ser inasumible, pero la misma inversión en junio, después de
            tres meses fuertes, puede ser perfectamente manejable.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            6. Reserva un fondo de emergencia
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Destina entre un 5% y un 10% de tus ingresos previstos a un
            colchón para imprevistos. Averías, impagos, subidas de costes
            inesperadas, una pandemia... Los imprevistos no son tan
            imprevistos si reservas dinero para ellos. Esta reserva es
            sagrada: no se toca salvo emergencia real.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            7. Calcula el resultado previsto
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Ingresos menos gastos fijos, menos costes variables, menos
            inversiones, menos reserva de emergencia. El resultado es tu
            beneficio previsto. Si es positivo, bien — pero revisa que sea
            suficiente para que el negocio sea sostenible. Si es negativo,
            tienes que actuar antes de que sea tarde: o aumentas ingresos,
            o reduces gastos, o ambas cosas.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;Un presupuesto no predice el futuro. Te prepara para él.
            La diferencia entre un empresario que controla su negocio y uno
            que va a remolque es, muchas veces, una simple hoja de
            cálculo.&rdquo;
          </blockquote>

          {/* H2 — Errores comunes */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los errores más comunes al hacer un presupuesto
          </h2>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; Errores que debes evitar:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Ser demasiado optimista con los ingresos — mejor quedarte corto y superar las previsiones.",
                "Olvidar gastos «invisibles»: comisiones bancarias, impuestos trimestrales, renovaciones automáticas.",
                "Hacer el presupuesto y guardarlo en un cajón — un presupuesto solo funciona si lo revisas.",
                "No actualizar cuando cambian las circunstancias — un presupuesto es un documento vivo.",
                "Mezclar gastos personales y empresariales — esto distorsiona toda la información.",
                "No incluir tu propio sueldo como gasto fijo — el negocio tiene que pagarte a ti también.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-amber-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            El error más grave de todos es el tercero: hacer el presupuesto
            y no usarlo. Un presupuesto que no se revisa mensualmente es
            papel mojado. Bloquea una hora al mes — siempre la misma fecha
            — para comparar lo presupuestado con lo real. Las desviaciones
            te darán información valiosísima sobre tu negocio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si descubres que tus gastos están descontrolados, este artículo
            sobre{" "}
            <a
              href="/blog/como-reducir-gastos-empresa-sin-recortar"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo reducir gastos sin recortar lo importante
            </a>{" "}
            te dará estrategias concretas para optimizar sin dañar el negocio.
          </p>

          {/* H2 — Revisión trimestral */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo revisar y ajustar tu presupuesto cada trimestre
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un presupuesto anual es un punto de partida, no una verdad
            grabada en piedra. Cada trimestre debes sentarte a revisar tres
            cosas: qué se ha cumplido, qué no, y por qué.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Revisión trimestral en 4 preguntas:
            </p>
            <ol className="mt-4 space-y-3 list-decimal list-inside">
              <li className="text-gray-700 md:text-lg">
                <strong>¿Los ingresos reales están por encima o por debajo
                de lo previsto?</strong> Si están por debajo dos trimestres
                seguidos, hay un problema comercial que debes abordar.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>¿Hay gastos que se han disparado sin
                justificación?</strong> Identifica las partidas que se han
                desviado más del 10% y averigua por qué.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>¿Las inversiones planificadas siguen teniendo
                sentido?</strong> Quizá una inversión que parecía urgente
                en enero ya no lo es en abril, o ha surgido otra más
                prioritaria.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>¿El fondo de emergencia está intacto?</strong> Si
                has tenido que usarlo, planifica cómo reponerlo en el
                siguiente trimestre.
              </li>
            </ol>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Después de responder estas preguntas, ajusta las cifras del
            presupuesto para el resto del año. No es trampa cambiar un
            presupuesto — es inteligencia. Lo importante es que siempre
            tengas una referencia actualizada contra la que medir tus
            decisiones.
          </p>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: el presupuesto es tu mapa financiero
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas ser contable ni financiero para hacer un
            presupuesto. Necesitas conocer tu negocio, dedicar unas horas
            a poner las cifras negro sobre blanco, y comprometerte a
            revisarlo cada mes. Es la herramienta de gestión más básica y
            más poderosa que existe. Y sin embargo, la mayoría de las pymes
            no la usan.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si haces un presupuesto este mes, dentro de tres meses tendrás
            más claridad sobre tus finanzas de la que has tenido en años.
            Sabrás exactamente cuánto puedes gastar, cuánto necesitas
            vender y cuándo van a venir los meses difíciles. Eso no es
            burocracia — es libertad. La libertad de tomar decisiones con
            información en lugar de con miedo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza hoy. Abre una hoja de cálculo, pon las cifras del
            último año y dibuja el mapa de los próximos doce meses. Tu
            negocio — y tu tranquilidad — te lo agradecerán.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-hacer-un-presupuesto-empresarial" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Necesitas ayuda para organizar las finanzas de tu empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a crear un presupuesto realista, identificar gastos
            innecesarios y diseñar un plan financiero que te dé control y
            tranquilidad.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
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

      <BlogNav currentSlug="como-hacer-un-presupuesto-empresarial" />

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
