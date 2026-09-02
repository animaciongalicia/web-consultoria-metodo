import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo montar un sistema de cobros que funcione | Consultoría Método",
  description:
    "Guía práctica para crear un sistema de cobros eficaz en tu pyme. Condiciones claras, recordatorios automáticos, escalado de reclamaciones y cálculo del impacto en caja. Consultor empresarial en A Coruña.",
  keywords: [
    "sistema de cobros pyme",
    "gestión de cobros empresa",
    "cobrar facturas impagadas",
    "morosidad pymes",
    "reclamación de impagos",
    "consultor empresarial Coruña",
    "consultoría empresas Galicia",
    "control de cobros negocio",
  ],
  openGraph: {
    title: "Cómo montar un sistema de cobros que funcione",
    description:
      "Sistema práctico para cobrar a tiempo, reducir la morosidad y proteger la tesorería de tu pyme. Con escalera de reclamación y cálculo de impacto.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-montar-sistema-cobros",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo montar un sistema de cobros que funcione",
  description:
    "Guía práctica para crear un sistema de cobros eficaz en tu pyme. Condiciones claras, recordatorios automáticos, escalado de reclamaciones y cálculo del impacto en caja.",
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
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-montar-sistema-cobros",
  },
};

export default function ArticuloSistemaCobros() {
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
            Cómo montar un sistema de cobros que funcione
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Vender es solo la mitad del trabajo. La otra mitad es cobrar. Y
            muchas pymes pierden miles de euros al año porque no tienen un
            sistema claro para hacerlo. Aquí tienes uno que funciona.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ARTICULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introduccion */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Si llevas una pyme, seguro que te ha pasado: haces un buen
            trabajo, entregas en plazo, envías la factura... y el cliente no
            paga. Pasa una semana. Pasan dos. Pasa un mes. Y tú mientras
            tanto cubriendo nóminas, proveedores y alquiler con tu propio
            dinero. No eres el único. Según los datos del sector, el plazo
            medio de pago entre empresas en España supera los 80 días. Y en
            muchas pymes gallegas que conozco, la cifra real es peor.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El problema casi nunca es que tus clientes sean malas personas.
            El problema es que no tienes un sistema. No hay condiciones
            claras, no hay recordatorios, no hay consecuencias. Y cuando no
            hay sistema, el cobro depende de tu memoria, tu tiempo libre y
            tu ganas de pasar el mal trago de reclamar. Es decir: depende
            de lo que menos tienes cuando estás ocupado sacando el trabajo
            adelante.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este artículo conecta directamente con dos problemas que ya he
            tratado en el blog: los{" "}
            <a
              href="/blog/problemas-de-liquidez-en-pymes"
              className="text-accent-600 underline hover:text-accent-700"
            >
              problemas de liquidez más comunes en pymes
            </a>{" "}
            y las estrategias para{" "}
            <a
              href="/blog/como-mejorar-el-flujo-de-caja"
              className="text-accent-600 underline hover:text-accent-700"
            >
              mejorar el flujo de caja
            </a>
            . Porque la causa número uno de los problemas de tesorería no
            es vender poco — es cobrar tarde.
          </p>

          {/* H2 — Los 3 problemas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los tres problemas que destrozan el cobro en una pyme
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de montar el sistema, hay que entender por qué falla el
            cobro en la mayoría de los negocios pequeños. Son casi siempre
            los mismos tres problemas.
          </p>

          <div className="my-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                num: "1",
                title: "No hay condiciones claras",
                desc: "El presupuesto no dice cuándo ni cómo se paga. El cliente asume que puede pagar cuando quiera.",
              },
              {
                num: "2",
                title: "No hay seguimiento",
                desc: "Nadie lleva un control de qué facturas están pendientes ni cuántos días llevan sin pagar.",
              },
              {
                num: "3",
                title: "Miedo a reclamar",
                desc: "El empresario teme que reclamar el pago enfade al cliente y pierda la relación comercial.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-800 text-sm font-bold text-white">
                  {card.num}
                </span>
                <p className="mt-3 font-semibold text-gray-900">
                  {card.title}
                </p>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            El resultado combinado de estos tres problemas es predecible:
            cobras tarde, cobras menos de lo que deberías y acabas
            financiando a tus clientes con tu propio dinero. Lo irónico es
            que solucionar esto no requiere ni tecnología cara ni
            confrontación. Requiere un proceso claro.
          </p>

          {/* H2 — Paso 1: Condiciones */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Paso 1: Define condiciones de pago antes de empezar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El cobro no empieza cuando envías la factura. Empieza cuando
            presentas el presupuesto. Cada presupuesto que salga de tu
            empresa tiene que incluir, de forma explícita y bien visible,
            estas cuatro cosas:
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              Cuatro elementos obligatorios en todo presupuesto:
            </p>
            <ol className="mt-4 space-y-3 list-decimal list-inside">
              <li className="text-gray-700 md:text-lg">
                <strong>Forma de pago:</strong> transferencia, domiciliación,
                tarjeta. Evita el efectivo siempre que puedas — no deja rastro.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Plazo de pago:</strong> 15 días, 30 días o al contado.
                No dejes que el cliente lo decida. Si no pones plazo, el plazo
                es &ldquo;cuando me apetezca&rdquo;.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Anticipo si aplica:</strong> entre un 30% y un 50%
                antes de empezar el trabajo. Filtra morosos y mejora tu caja.
              </li>
              <li className="text-gray-700 md:text-lg">
                <strong>Recargo por demora:</strong> un 1,5-2% mensual
                pactado por escrito. No es para hacerte rico — es para que el
                cliente tenga un incentivo real para pagar a tiempo.
              </li>
            </ol>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si te parece excesivo poner un recargo por demora, piénsalo así:
            ese dinero que te deben te está costando dinero. Si tienes una
            póliza de crédito para cubrir el desfase, estás pagando intereses.
            Si no la tienes, estás dejando de invertir en tu negocio. El
            retraso del cliente no es gratis para ti. Tiene todo el sentido
            que tampoco sea gratis para él.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Estas condiciones deben estar en el presupuesto que firma el
            cliente. No en la letra pequeña de tus condiciones generales que
            nadie lee. En el mismo documento, con el mismo tamaño de letra.
            Si quieres profundizar en cómo estructurar bien tus números,
            revisa la guía sobre{" "}
            <a
              href="/blog/como-hacer-un-presupuesto-empresarial"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo hacer un presupuesto empresarial
            </a>
            .
          </p>

          {/* H2 — Paso 2: Recordatorios */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Paso 2: Automatiza los recordatorios
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si dependes de tu memoria para reclamar facturas, vas a cobrar
            tarde. La solución es automatizar. La mayoría de los programas
            de facturación actuales — Holded, Billin, Quaderno, Factura
            Directa — permiten enviar recordatorios automáticos cuando una
            factura se acerca a su vencimiento o lo supera. Configúralo una
            vez y olvídate.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Momento</th>
                  <th className="px-4 py-3 font-semibold">Acción automática</th>
                  <th className="px-4 py-3 font-semibold">Tono</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">3 días antes del vencimiento</td>
                  <td className="px-4 py-3">Email recordatorio con factura adjunta</td>
                  <td className="px-4 py-3">Informativo: &ldquo;Te recordamos que...&rdquo;</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Día del vencimiento</td>
                  <td className="px-4 py-3">Email de aviso si no hay pago registrado</td>
                  <td className="px-4 py-3">Cordial: &ldquo;Hoy vence la factura...&rdquo;</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">7 días después</td>
                  <td className="px-4 py-3">Segundo email + llamada de tu parte</td>
                  <td className="px-4 py-3">Firme: &ldquo;No hemos recibido el pago...&rdquo;</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">15 días después</td>
                  <td className="px-4 py-3">Llamada directa + email con aviso de recargo</td>
                  <td className="px-4 py-3">Serio: &ldquo;Procedemos a aplicar recargo...&rdquo;</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">30 días después</td>
                  <td className="px-4 py-3">Carta formal + suspensión de servicio</td>
                  <td className="px-4 py-3">Legal: &ldquo;Nos vemos obligados a...&rdquo;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            El primer recordatorio no es una reclamación. Es un servicio
            al cliente: le estás ayudando a no olvidarse. El segundo ya
            es una reclamación amable. A partir del tercero, es un proceso
            formal. Y eso está bien. No estás pidiendo un favor — estás
            pidiendo lo que te deben.
          </p>

          {/* H2 — Paso 3: Escalera */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Paso 3: La escalera de reclamación
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El secreto de un buen sistema de cobros es que cada paso tiene
            una consecuencia. No es que &ldquo;ya le mandaré otro email a
            ver si paga&rdquo;. Hay una escalada predefinida, y el cliente
            la conoce de antemano.
          </p>

          <div className="my-8 space-y-4">
            {[
              {
                step: "Nivel 1 — Amistoso",
                time: "1-7 días de retraso",
                action: "Recordatorio por email y una llamada cordial. Asumes buena fe: quizá se ha traspapelado.",
                color: "border-green-400 bg-green-50",
              },
              {
                step: "Nivel 2 — Firme",
                time: "8-30 días de retraso",
                action: "Llamada directa al responsable de pagos. Comunicación escrita indicando que se aplicarán recargos. Suspensión de nuevos encargos hasta regularizar.",
                color: "border-amber-400 bg-amber-50",
              },
              {
                step: "Nivel 3 — Formal",
                time: "31-60 días de retraso",
                action: "Carta con acuse de recibo o burofax. Aplicación efectiva del recargo pactado. Corte de servicio si es un servicio continuado.",
                color: "border-orange-400 bg-orange-50",
              },
              {
                step: "Nivel 4 — Legal",
                time: "Más de 60 días",
                action: "Reclamación a través de abogado o empresa de recobro. Procedimiento monitorio si supera los 250 euros. Inclusión en ficheros de morosidad si procede.",
                color: "border-red-400 bg-red-50",
              },
            ].map((level) => (
              <div
                key={level.step}
                className={`rounded-xl border-l-4 p-5 ${level.color}`}
              >
                <p className="font-bold text-gray-900">{level.step}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {level.time}
                </p>
                <p className="mt-2 text-gray-700 md:text-lg">
                  {level.action}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;Cobrar no es ser agresivo. Es ser profesional. El
            cliente que se ofende porque le pides que pague lo que debe no
            es un buen cliente. Y cuanto antes lo descubras, mejor para
            tu negocio.&rdquo;
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Esto no es teoría: es el mismo sistema que usan las empresas
            que cobran bien. La diferencia con las pymes que cobran mal
            es que estas se saltan pasos, esperan demasiado o directamente
            no tienen pasos definidos. Si tu sistema es &ldquo;enviar la
            factura y esperar&rdquo;, no tienes un sistema.
          </p>

          {/* H2 — Incentivos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El otro lado: incentivos para cobrar antes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Además del palo, hay zanahoria. Un descuento por pronto pago
            bien diseñado puede ser tremendamente rentable. Parece
            contradictorio cobrar menos para cobrar mejor, pero haz los
            números:
          </p>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              Ejemplo: descuento por pronto pago del 2%
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  Factura de 5.000 euros a 60 días. Con descuento del 2% por
                  pago en 10 días, el cliente paga 4.900 euros.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  Tú pierdes 100 euros, pero ganas 50 días de liquidez.
                  Si esos 5.000 euros te ahorran recurrir a una póliza
                  de crédito al 7% anual, te estás ahorrando unos 48 euros
                  en intereses.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600">&#9654;</span>
                <span>
                  El coste neto real del descuento es de 52 euros. A cambio,
                  tienes el dinero 50 días antes, reduces riesgo de impago
                  y liberas tiempo de gestión de cobros.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            No todos los clientes aprovecharán el descuento, pero los que
            lo hagan mejorarán tu caja de forma inmediata. Ofrécelo como
            opción, no como obligación.
          </p>

          {/* H2 — Cuando cortar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuándo cortar el servicio a un cliente moroso
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta es la decisión que más cuesta tomar. Pero es la más
            importante. Si un cliente te debe dinero y tú sigues
            trabajando para él, estás aumentando tu exposición al riesgo.
            No estás cuidando la relación — estás financiándole gratis.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La regla que recomiendo es sencilla: cuando un cliente acumula
            más de 30 días de retraso o más del equivalente a un mes de
            facturación sin pagar, se suspende el servicio. Sin dramas,
            sin discusiones. Un email profesional: &ldquo;Lamentablemente,
            hasta que no se regularice el saldo pendiente de X euros, no
            podemos continuar prestando el servicio. Quedamos a vuestra
            disposición para acordar un plan de pago.&rdquo;
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En el 80% de los casos, el pago llega en menos de una semana.
            El otro 20% te confirma que era un cliente que nunca iba a
            pagarte — y más vale descubrirlo debiendo 5.000 euros que
            debiendo 25.000.
          </p>

          {/* H2 — Impacto en caja */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El impacto real en tu caja: haz los números
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Para ver lo que te cuesta no tener un sistema de cobros,
            calcula esto:
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Concepto</th>
                  <th className="px-4 py-3 font-semibold">Sin sistema</th>
                  <th className="px-4 py-3 font-semibold">Con sistema</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Plazo medio de cobro</td>
                  <td className="px-4 py-3">75 días</td>
                  <td className="px-4 py-3">35 días</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Facturas impagadas (&gt;90 días)</td>
                  <td className="px-4 py-3">8-12% de la facturación</td>
                  <td className="px-4 py-3">1-3% de la facturación</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Horas/mes en gestión de cobros</td>
                  <td className="px-4 py-3">12-15 horas (caóticas)</td>
                  <td className="px-4 py-3">2-3 horas (sistemáticas)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Necesidad de financiación externa</td>
                  <td className="px-4 py-3">Permanente</td>
                  <td className="px-4 py-3">Puntual o ninguna</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Estrés del empresario</td>
                  <td className="px-4 py-3">Alto</td>
                  <td className="px-4 py-3">Controlado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si tu empresa factura 300.000 euros al año y estás perdiendo
            un 10% por impagos o cobros muy retrasados, son 30.000 euros.
            Montar un sistema de cobros como el que te describo aquí puede
            costarte cero euros y una tarde de trabajo. El retorno es
            brutal.
          </p>

          {/* H2 — Conclusion */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: cobrar bien no es opcional
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un sistema de cobros no es agresividad comercial. Es
            profesionalidad. Es proteger tu trabajo, tu equipo y tu
            empresa. Los mejores negocios que conozco tienen todos algo
            en común: cobran bien. No porque tengan suerte con sus
            clientes, sino porque tienen un proceso que no deja nada al
            azar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Resume tu plan de acción en cuatro puntos: condiciones claras
            en el presupuesto, recordatorios automáticos, escalera de
            reclamación predefinida e incentivos para el pronto pago.
            Implementa estos cuatro elementos y verás cómo tu tesorería
            mejora en cuestión de semanas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si el dinero que te deben ya está creando problemas en tu
            empresa, te recomiendo empezar hoy mismo. No mañana, no el
            lunes. Hoy. Cada día que pasa sin sistema es un día más que
            estás financiando gratis a tus clientes.
          </p>

          {/* CTA en articulo */}
          <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              ¿Tu empresa tiene problemas de cobro o morosidad?
            </p>
            <p className="mt-2 text-gray-600">
              Te ayudamos a montar un sistema de cobros adaptado a tu
              negocio, recuperar el control de tu tesorería y dejar de
              perder dinero por impagos.
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
              <BlogSidebar currentSlug="como-montar-sistema-cobros" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres cobrar mejor y dormir tranquilo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos tu proceso de cobro actual, identificamos los
            puntos débiles y te ayudamos a implantar un sistema que
            funcione desde la primera semana.
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

      <BlogNav currentSlug="como-montar-sistema-cobros" />

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
