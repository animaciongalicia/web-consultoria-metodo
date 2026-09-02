import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo mejorar el flujo de caja en tu negocio | Consultoría Método",
  description:
    "Descubre cómo mejorar el flujo de caja de tu pyme con 7 estrategias prácticas. Aprende a gestionar la tesorería, cobrar antes y evitar los problemas de liquidez que hunden negocios rentables.",
  keywords: [
    "mejorar flujo de caja",
    "tesorería pymes",
    "gestión de cobros empresa",
    "problemas de liquidez negocio",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "cash flow pyme",
  ],
  openGraph: {
    title: "Cómo mejorar el flujo de caja en tu negocio",
    description:
      "7 estrategias prácticas para mejorar la tesorería de tu pyme y evitar que un negocio rentable se quede sin dinero.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-mejorar-el-flujo-de-caja",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo mejorar el flujo de caja en tu negocio",
  description:
    "Descubre cómo mejorar el flujo de caja de tu pyme con 7 estrategias prácticas. Aprende a gestionar la tesorería, cobrar antes y evitar los problemas de liquidez que hunden negocios rentables.",
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
  datePublished: "2025-05-19",
  dateModified: "2025-05-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-mejorar-el-flujo-de-caja",
  },
};

export default function ArticuloFlujoDeCaja() {
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
            Cómo mejorar el flujo de caja en tu negocio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Tu negocio puede ser rentable sobre el papel y aun así quedarse
            sin dinero para pagar las nóminas. Si eso te suena, el problema
            no son tus ventas — es tu flujo de caja. Y tiene solución.
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
            Hay una paradoja que destruye empresas todos los años: negocios
            que venden bien, que tienen buenos márgenes, que sobre el papel
            son rentables... pero que no tienen dinero en la cuenta para
            pagar a sus proveedores, a Hacienda o a sus propios empleados.
            No es una paradoja, en realidad. Es un problema de flujo de
            caja. Y es mucho más común de lo que crees.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El flujo de caja — o cash flow — es sencillamente el dinero que
            entra y sale de tu empresa en un periodo de tiempo. No es lo
            mismo que el beneficio. Puedes tener un beneficio anual de
            100.000 euros y un flujo de caja negativo si cobras a 90 días
            y pagas a 30. Esa diferencia de 60 días es un agujero por el
            que se escapan muchos negocios.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres profundizar en por qué las empresas facturan pero no
            ganan dinero, te recomiendo este artículo sobre{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-accent-600 underline hover:text-accent-700"
            >
              por qué tu empresa factura pero no gana dinero
            </a>
            . Hoy nos centramos en el flujo de caja: cómo entenderlo, cómo
            mejorarlo y cómo evitar que te lleve a una crisis de liquidez.
          </p>

          {/* H2 — Beneficio vs cash flow */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Beneficio y flujo de caja: por qué no son lo mismo
          </h2>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; No confundas beneficio con dinero en el banco:
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              El beneficio es un concepto contable: ingresos menos gastos
              en un periodo. El flujo de caja es dinero real: lo que entra
              y sale de tu cuenta corriente. Puedes tener beneficio y no
              tener dinero. Y cuando no tienes dinero, no puedes pagar —
              da igual lo que diga la cuenta de resultados.
            </p>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Imagina que haces una venta de 20.000 euros en enero con pago
            a 90 días. Contablemente, ese ingreso es de enero. Pero el
            dinero no llega hasta abril. Mientras tanto, en febrero tienes
            que pagar nóminas, alquiler, proveedores y a Hacienda. Si no
            tienes colchón suficiente, tienes un problema de liquidez con
            un negocio que, sobre el papel, va muy bien.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este desfase entre el momento contable y el momento de cobro
            real es la causa número uno de los problemas de tesorería en
            las pymes españolas. Y está directamente relacionado con los{" "}
            <a
              href="/blog/problemas-de-liquidez-en-pymes"
              className="text-accent-600 underline hover:text-accent-700"
            >
              problemas de liquidez más comunes en pymes
            </a>
            .
          </p>

          {/* H2 — Tabla buenas vs malas prácticas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Buenas y malas prácticas en la gestión de tesorería
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de ver las estrategias concretas, veamos qué separa a las
            empresas que gestionan bien su caja de las que van siempre
            ahogadas.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Buenas prácticas</th>
                  <th className="px-4 py-3 font-semibold">Malas prácticas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">Facturar el mismo día que se entrega el trabajo</td>
                  <td className="px-4 py-3">Facturar a fin de mes «por comodidad»</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Cobrar un anticipo antes de empezar</td>
                  <td className="px-4 py-3">Empezar a trabajar sin ningún cobro previo</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Negociar plazos de pago más largos con proveedores</td>
                  <td className="px-4 py-3">Aceptar las condiciones del proveedor sin negociar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Revisar la previsión de caja cada semana</td>
                  <td className="px-4 py-3">Mirar la cuenta del banco solo cuando hay un problema</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Tener una línea de crédito «por si acaso»</td>
                  <td className="px-4 py-3">Pedir financiación solo cuando ya estás ahogado</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Mantener stock justo y rotarlo rápido</td>
                  <td className="px-4 py-3">Comprar grandes cantidades «por si acaso»</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* H2 — 7 estrategias */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            7 estrategias para mejorar tu flujo de caja
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Estas son las palancas que más impacto tienen en la tesorería
            de una pyme. No hace falta implementarlas todas a la vez —
            empieza por las dos o tres que más sentido tengan para tu
            negocio.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Factura más rápido
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Parece obvio, pero muchísimas pymes facturan a fin de mes por
            costumbre. Si entregas un trabajo el día 3, ¿por qué esperar
            al 30 para facturarlo? Cada día que tardas en facturar es un
            día más que tardas en cobrar. Factura el mismo día que entregas.
            Con las herramientas de facturación actuales, es cuestión de
            dos minutos. Ese hábito puede adelantar tus cobros 15-20 días
            de media.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Negocia condiciones de pago con clientes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No aceptes el «ya te pagaré cuando pueda». Establece
            condiciones claras desde el presupuesto: pago a 30 días,
            transferencia bancaria, con un pequeño descuento del 2% por
            pronto pago si lo necesitas. Y lo más importante: cumple tus
            propios plazos de reclamación. Si un cliente se retrasa, llama
            al día siguiente del vencimiento. No esperes a que pasen dos
            meses.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Cobra por adelantado (o a cuenta)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Pedir un anticipo del 30-50% antes de empezar un trabajo no es
            descortés — es profesional. Reduce tu riesgo de impago, mejora
            tu liquidez y filtra a los clientes que no tienen intención
            real de pagarte. Si un cliente se niega a pagar cualquier
            anticipo, pregúntate si realmente quieres trabajar con él.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Reduce el stock al mínimo necesario
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Cada euro que tienes en stock es un euro que no tienes en el
            banco. Si vendes productos físicos, analiza cuánto stock
            necesitas realmente para mantener tu nivel de servicio y reduce
            el resto. Negocia entregas más frecuentes con proveedores en
            lugar de compras masivas. Identifica los productos que llevan
            meses sin moverse y liquídalos — mejor recuperar algo que
            tener dinero muerto en una estantería.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Negocia plazos más largos con proveedores
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si tus clientes te pagan a 60 días y tú pagas a tus
            proveedores a 30, tienes un problema estructural. Intenta
            alinear los plazos: negocia pagar a 60 o 90 días cuando sea
            posible. No todos los proveedores aceptarán, pero muchos sí,
            especialmente si eres un buen cliente y les das volumen. Esa
            diferencia de 30 días puede cambiar completamente tu
            situación de tesorería.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            6. Ten una línea de crédito antes de necesitarla
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El peor momento para pedir un préstamo es cuando lo necesitas
            desesperadamente. Los bancos lo saben y las condiciones serán
            peores. Negocia una línea de crédito o una póliza cuando tus
            números estén bien. Puede que no la uses nunca, pero tenerla
            disponible te da un colchón de seguridad que vale su peso en
            oro. El coste de mantenimiento es pequeño comparado con la
            tranquilidad que aporta.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            7. Planifica la estacionalidad
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si tu negocio tiene meses fuertes y meses flojos — y casi todos
            los tienen — planifícalo. En los meses buenos, no te gastes
            todo lo que entra. Reserva una parte para cubrir los meses
            malos. Suena simple, pero la mayoría de los empresarios caen
            en la trampa de gastar más cuando hay más dinero, en lugar de
            guardarlo para cuando no lo haya. Si quieres ayuda con esta
            planificación, revisa cómo hacer{" "}
            <a
              href="/blog/como-hacer-un-presupuesto-empresarial"
              className="text-accent-600 underline hover:text-accent-700"
            >
              un presupuesto empresarial
            </a>
            .
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;El flujo de caja es el oxígeno de tu empresa. Puedes
            tener los mejores músculos del mundo, pero si te quedas sin
            oxígeno, no hay músculo que valga. Cuida tu tesorería como
            cuidas tu facturación — o más.&rdquo;
          </blockquote>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: una empresa de construcción al borde del cierre
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace unos años trabajé con una empresa de reformas en A Coruña
            que facturaba 600.000 euros al año con un margen bruto del 25%.
            Sobre el papel, un negocio sano. Pero el dueño no podía dormir
            porque cada mes era una carrera para cubrir los pagos.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El problema era claro: cobraba a 90-120 días de las promotoras
            y comunidades de propietarios, pero pagaba a sus proveedores
            de materiales a 30 días y las nóminas semanalmente. Tenía un
            desfase permanente de más de 50.000 euros que cubría con una
            póliza de crédito al 8% de interés.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La solución fue múltiple: empezamos a cobrar un 40% por
            adelantado en cada obra, renegociamos con los proveedores
            principales pagos a 60 días, implementamos certificaciones
            mensuales en lugar de cobrar al final de la obra, y liquidamos
            material sobrante de obras anteriores que tenía acumulado en
            un almacén. En seis meses, pasó de necesitar 50.000 euros de
            crédito permanente a tener 15.000 euros de colchón propio.
            Misma facturación, mismo margen, pero un flujo de caja
            completamente diferente.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              La previsión de caja: tu herramienta más importante
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              Haz una previsión semanal de los próximos 8-12 semanas:
              apunta todos los cobros esperados y todos los pagos
              comprometidos. Así verás con antelación cuándo vas a tener
              problemas y podrás actuar antes de que lleguen. Una hoja de
              cálculo simple con tres columnas — fecha, cobros, pagos —
              es suficiente. La clave no es la herramienta, es el hábito
              de actualizarla cada semana.
            </p>
          </div>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: cuida tu caja como cuidas tus ventas
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La mayoría de los empresarios dedican el 90% de su energía a
            vender más y el 10% a gestionar su dinero. Debería ser al menos
            un 50-50. De nada sirve vender si no cobras, o si cobras
            demasiado tarde, o si gastas más rápido de lo que ingresa.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El flujo de caja se puede mejorar con decisiones sencillas:
            facturar más rápido, cobrar antes, pagar más tarde, reducir
            stock, planificar la estacionalidad. Ninguna de estas medidas
            requiere invertir dinero ni contratar a nadie. Solo requiere
            atención, disciplina y un cambio de mentalidad: dejar de
            mirar solo la cifra de ventas y empezar a mirar cuándo entra
            y cuándo sale el dinero.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza esta semana con una cosa: haz la previsión de tesorería
            de las próximas ocho semanas. Solo eso. Verás tu negocio de
            una forma completamente nueva. Y podrás tomar decisiones antes
            de que los problemas te obliguen a improvisar.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-mejorar-el-flujo-de-caja" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio tiene problemas de tesorería?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a diagnosticar el origen de tus problemas de
            liquidez y a implementar las medidas que mejoren tu flujo de
            caja de forma sostenible.
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

      <BlogNav currentSlug="como-mejorar-el-flujo-de-caja" />

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
