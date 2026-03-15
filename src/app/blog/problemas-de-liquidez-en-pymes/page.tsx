import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Problemas de liquidez en pymes: por qué facturas pero nunca hay dinero | Consultoría Método",
  description:
    "Descubre por qué tu pyme factura pero no tiene liquidez. Las 7 causas más comunes de falta de tesorería, señales de alerta y un plan de acción con 8 medidas prácticas para mejorar el cash flow de tu negocio.",
  keywords: [
    "problemas de liquidez pyme",
    "falta de tesorería negocio",
    "empresa sin liquidez",
    "gestión tesorería pequeña empresa",
    "por qué no tengo dinero si facturo",
    "cash flow pyme España",
  ],
  openGraph: {
    title:
      "Problemas de liquidez en pymes: por qué facturas pero nunca hay dinero en la cuenta",
    description:
      "Las 7 causas más comunes de falta de tesorería en pymes y un plan de acción con 8 medidas concretas para mejorar la liquidez de tu negocio.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/problemas-de-liquidez-en-pymes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Problemas de liquidez en pymes: por qué facturas pero nunca hay dinero en la cuenta",
  description:
    "Descubre por qué tu pyme factura pero no tiene liquidez. Las 7 causas más comunes de falta de tesorería, señales de alerta y un plan de acción con 8 medidas prácticas para mejorar el cash flow de tu negocio.",
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
  datePublished: "2025-03-15",
  dateModified: "2025-03-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/problemas-de-liquidez-en-pymes",
  },
};

export default function ArticuloLiquidez() {
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
            Problemas de liquidez en pymes: por qué facturas pero nunca hay
            dinero en la cuenta
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Emites facturas, tus clientes pagan, el negocio funciona... pero
            cada vez que miras la cuenta bancaria, el saldo no cuadra con el
            esfuerzo. Si esto te suena, tienes un problema de liquidez. Y es
            más común de lo que imaginas.
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
            Hay pocas cosas que generen más ansiedad a un empresario que abrir
            la app del banco y ver que no hay dinero. No porque el negocio vaya
            mal — de hecho, estás facturando. Tienes clientes, tienes pedidos,
            tienes trabajo. Pero el dinero no está.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La sensación es agotadora. Cada final de mes se convierte en un
            ejercicio de malabarismo: ¿a quién pago primero? ¿Puedo retrasar
            esta factura de proveedor unos días? ¿Llego a las nóminas? Y
            mientras tanto, tus clientes te deben dinero, tú le debes dinero a
            otros y la rueda no para de girar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este es uno de los dolores más comunes de las pymes en España. No
            es un problema de ventas — es un problema de{" "}
            <strong className="text-gray-900">flujo de caja</strong>. Y la
            diferencia entre entenderlo y no entenderlo puede ser la diferencia
            entre un negocio que sobrevive y uno que cierra con facturas
            pendientes de cobro en el cajón.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Vamos a desmontar este problema pieza a pieza. Porque tiene
            solución — pero primero hay que entender qué lo causa.
          </p>

          {/* H2 — Facturar no es cobrar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Facturar no es lo mismo que cobrar (y cobrar no es lo mismo que
            tener liquidez)
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Parece una obviedad, pero es la raíz de casi todos los problemas
            de tesorería en pequeñas empresas. Hay tres conceptos que muchos
            empresarios mezclan sin darse cuenta:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-accent-500">1.</span>
              <span>
                <strong className="text-gray-900">Facturar</strong> — emites
                una factura. Tienes un derecho de cobro. Pero el dinero aún no
                ha entrado en tu cuenta.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-accent-500">2.</span>
              <span>
                <strong className="text-gray-900">Cobrar</strong> — el cliente
                paga. El dinero entra. Pero puede que ya tengas compromisos de
                pago que se comen ese ingreso antes de que lo veas.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-accent-500">3.</span>
              <span>
                <strong className="text-gray-900">Tener liquidez</strong> —
                disponer de dinero efectivo en el momento en que lo necesitas
                para pagar tus obligaciones. Esto depende del{" "}
                <em>timing</em>: de cuándo cobras y cuándo pagas.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un negocio puede ser{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-primary-700 underline hover:text-primary-900"
            >
              perfectamente rentable sobre el papel
            </a>{" "}
            y, aun así, tener problemas graves de liquidez. Imagina que
            facturas 30.000 euros en enero, pero tus clientes pagan a 60
            días. Ese dinero llega en marzo. Pero tú tienes que pagar
            nóminas, alquiler, proveedores y Seguridad Social en enero y
            febrero. ¿Con qué dinero?
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Ese desfase temporal entre cobros y pagos es lo que mata a las
            pymes. No la falta de ventas, no la falta de clientes — el
            <em> timing</em>. Y si no lo gestionas activamente, acabas
            financiando a tus clientes con tu propio bolsillo.
          </p>

          {/* H2 — 7 causas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Las 7 causas más comunes de falta de liquidez en pymes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Después de más de 25 años trabajando con pequeñas y medianas
            empresas, estos son los patrones que veo una y otra vez. La
            mayoría de negocios con problemas de tesorería tienen al menos
            tres de estos siete problemas actuando a la vez.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Clientes que pagan tarde (o que no pagan)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es la causa número uno. Facturas a 30 días pero cobras a 60 o a
            90. O peor: tienes clientes que se retrasan sistemáticamente y tú
            no haces nada porque «es un buen cliente» o «no quiero perderlo».
            Mientras tanto, tú estás financiando su negocio gratis. Cada día
            que un cliente tarda en pagarte es un día que tú tienes que cubrir
            ese agujero con tu propia caja.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Malas condiciones de pago con proveedores
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si pagas a tus proveedores a 15 días pero cobras de tus clientes
            a 60, tienes un problema estructural. El dinero sale antes de que
            entre. Y cuanto más creces, más grande es el agujero. Este
            desajuste es especialmente peligroso en negocios que están
            creciendo rápido: más ventas significan más compras a proveedores
            y más dinero que necesitas adelantar antes de cobrar.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Exceso de stock o inventario
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El stock es dinero parado. Cada producto que tienes en el almacén
            es dinero que ya has pagado pero que aún no has recuperado.
            Comprar «por si acaso», aprovecharse de ofertas de volumen o
            simplemente no controlar las existencias puede convertir tu
            almacén en un cementerio de liquidez. He visto pymes con 40.000
            o 50.000 euros inmovilizados en stock que no van a vender en
            meses.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            4. Gastar por delante de los ingresos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Contratar antes de tener los ingresos asegurados. Invertir en
            maquinaria o reforma antes de que el negocio lo sostenga. Ampliar
            el local porque «vamos a crecer». Es la trampa del optimismo
            empresarial: tomas decisiones de gasto basándote en la facturación
            que esperas tener, no en la que tienes. Y si esa facturación no
            llega — o llega más lenta — te quedas sin caja.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            5. Gastos fijos descontrolados
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Alquiler alto, nóminas que se han ido acumulando, seguros que
            nadie revisa, suscripciones que ya no se usan, cuotas de
            asociaciones, renting de vehículos. Los gastos fijos son
            compromisos que tienes que pagar sí o sí, vendas mucho o vendas
            poco. Cuanto más altos, más presión sobre tu tesorería y menos
            margen para absorber un mal mes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            6. No tener un colchón de seguridad
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La mayoría de pymes viven al día. No tienen un fondo de reserva
            para imprevistos. Una avería, una devolución inesperada, un
            cliente que no paga, una liquidación de impuestos más alta de lo
            previsto — cualquier golpe imprevisto desestabiliza toda la
            tesorería. Sin colchón, cada mes es una partida de ruleta rusa
            financiera.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            7. Mezclar cuentas personales y del negocio
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Es más habitual de lo que parece, especialmente en autónomos y
            microempresas. El dinero del negocio y el dinero personal van por
            la misma cuenta. Se pagan gastos personales desde la cuenta de la
            empresa, se mete dinero personal cuando falta. El resultado: nadie
            sabe cuánto gana realmente el negocio ni cuánta liquidez tiene.
            Es como intentar navegar sin brújula.
          </p>

          {/* H2 — Señales de alerta */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cómo saber si tu empresa tiene un problema de liquidez
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            A veces el problema es evidente. Otras veces es más sutil: no
            estás en crisis, pero sientes una tensión constante que no se va.
            Estas son las señales de alerta que indican que tu negocio tiene
            un problema de tesorería — aunque la facturación vaya bien.
          </p>

          {/* Warning box / checklist */}
          <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 md:p-8">
            <p className="text-lg font-bold text-amber-900">
              Autodiagnóstico rápido: ¿reconoces estas situaciones?
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Pagas a proveedores tarde con frecuencia, no por descuido sino porque no hay dinero en la cuenta.",
                "Tiras de línea de crédito o póliza de forma habitual, no puntual.",
                "Cada final de mes es un ejercicio de malabarismo para cuadrar los pagos.",
                "Cuando surge una oportunidad (compra ventajosa, nuevo proyecto), no puedes aprovecharla porque no tienes caja.",
                "Retrases inversiones necesarias porque «ahora no es el momento» — pero nunca es el momento.",
                "Sientes ansiedad cada vez que abres la app del banco.",
                "Has tenido que meter dinero personal en el negocio más de una vez este año.",
                "No sabes con exactitud cuánto dinero va a entrar y salir de la cuenta en las próximas 4 semanas.",
                "Dependes de uno o dos clientes grandes para cubrir los gastos del mes.",
                "No recuerdas la última vez que el negocio tuvo un saldo holgado durante más de dos semanas seguidas.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-amber-900 md:text-lg"
                >
                  <span className="mt-0.5 text-amber-600">&#9744;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-amber-800">
              Si has marcado 3 o más, tu negocio tiene un problema de liquidez
              que necesita atención. Si has marcado 5 o más, es urgente.
            </p>
          </div>

          <p className="mt-6 text-gray-600 md:text-lg">
            Lo peligroso de los problemas de liquidez es que son progresivos.
            No explotan de un día para otro — se van acumulando poco a poco
            hasta que un día no puedes pagar una nómina o un proveedor
            imprescindible te corta el suministro. Y para entonces las
            opciones son mucho más limitadas y caras.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Por eso es fundamental llevar un control de los{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-primary-700 underline hover:text-primary-900"
            >
              indicadores clave de tu negocio
            </a>
            , incluidos los de tesorería. No basta con mirar el saldo de la
            cuenta — necesitas entender hacia dónde se mueve.
          </p>

          {/* H2 — Plan de acción */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Plan de acción: 8 medidas para mejorar la tesorería de tu negocio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La liquidez no se arregla con una sola medida. Se arregla con un
            conjunto de cambios que, aplicados de forma sistemática, van
            reduciendo la presión sobre la caja hasta que respiras. Estas son
            las ocho medidas que mejor funcionan en las pymes con las que
            trabajo.
          </p>

          {/* Medida 1 */}
          <div className="mt-8 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              1. Negocia (o renegocia) los plazos de pago y cobro
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Intenta cobrar antes y pagar después. Negocia con tus clientes
              plazos de cobro más cortos — 15 días en vez de 30, 30 en vez de
              60. Ofrece un pequeño descuento por pronto pago si es necesario
              (un 2% de descuento es mucho más barato que una póliza de
              crédito). Y con los proveedores, pide alargar los plazos. El
              objetivo es que el dinero entre antes de que tenga que salir.
            </p>
          </div>

          {/* Medida 2 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              2. Factura inmediatamente — no dejes pasar ni un día
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Parece increíble, pero muchos empresarios tardan días o semanas
              en emitir la factura después de entregar el producto o servicio.
              Cada día que tardas en facturar es un día más que tardas en
              cobrar. Factura el mismo día que entregas. Si puedes facturar
              por anticipado o pedir un adelanto, mejor aún.
            </p>
          </div>

          {/* Medida 3 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              3. Reduce el stock al mínimo necesario
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Analiza qué productos rotan y cuáles no. Liquida el stock
              muerto — aunque sea con descuento, ese dinero parado te vale
              más en la cuenta que en el almacén. Ajusta las compras a la
              demanda real, no a la que esperas tener. Comprar en grandes
              cantidades para «ahorrar» es una trampa si ese ahorro se
              convierte en stock que no vendes en meses.
            </p>
          </div>

          {/* Medida 4 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              4. Construye un colchón de tesorería
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              El objetivo mínimo: tener en la cuenta el equivalente a 2 meses
              de gastos fijos. No se construye de un día para otro, pero sí
              puedes empezar reservando un porcentaje fijo de cada cobro — un
              5% o un 10% — en una cuenta separada que no tocas. Es como un
              seguro contra imprevistos que te permite dormir tranquilo.
            </p>
          </div>

          {/* Medida 5 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              5. Revisa y recorta los gastos fijos
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Haz una auditoría completa de todos tus gastos fijos. Siéntate
              con los extractos bancarios de los últimos 3 meses y apunta
              cada cargo recurrente. ¿Esa suscripción la usas? ¿Ese seguro
              lo has comparado en los últimos 2 años? ¿Ese renting te sale
              realmente a cuenta? Cada euro que recortas en gastos fijos es
              un euro que se queda en la caja todos los meses, para siempre.
            </p>
          </div>

          {/* Medida 6 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              6. Diversifica tu base de clientes
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Si un solo cliente representa más del 25% de tu facturación,
              tienes un problema de dependencia que es también un problema de
              liquidez. Si ese cliente se retrasa en el pago — o desaparece —
              tu tesorería se desploma. Trabaja activamente en ampliar tu
              cartera de clientes para que ninguno tenga poder de vida o
              muerte sobre tu caja.
            </p>
          </div>

          {/* Medida 7 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              7. Implementa una previsión de tesorería
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              No puedes gestionar lo que no previenes. Crea una previsión
              semanal de cobros y pagos para las próximas 4-8 semanas. No
              necesitas un software caro — una hoja de cálculo sirve
              perfectamente. Lo importante es que cada lunes sepas cuánto
              dinero va a entrar, cuánto va a salir y si vas a tener algún
              bache. Anticipar es la clave para no apagar fuegos.
            </p>
          </div>

          {/* Medida 8 */}
          <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50/50 p-6">
            <h3 className="text-xl font-semibold text-primary-900">
              8. Separa las cuentas del negocio y las personales
            </h3>
            <p className="mt-3 text-gray-700 md:text-lg">
              Dos cuentas. Una para el negocio, otra personal. El negocio te
              paga un sueldo fijo cada mes — como si fueras un empleado más.
              Lo que queda en la cuenta del negocio es del negocio. Esto te
              da claridad absoluta sobre la liquidez real de la empresa y
              evita que, sin darte cuenta, estés descapitalizando el negocio
              para pagar gastos personales.
            </p>
          </div>

          <p className="mt-8 text-gray-600 md:text-lg">
            Estas ocho medidas no son teoría. Son las que aplico con los
            empresarios que llegan a mi consultoría con problemas de
            tesorería. Y funcionan. Pero requieren{" "}
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="text-primary-700 underline hover:text-primary-900"
            >
              organización y disciplina
            </a>
            . Si quieres implementarlas con acompañamiento,{" "}
            <a
              href="/diagnostico-negocio"
              className="text-primary-700 underline hover:text-primary-900"
            >
              solicita un diagnóstico
            </a>{" "}
            y empezamos por donde más impacto tenga en tu caso.
          </p>

          {/* H2 — Cuadro de tesorería */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Herramienta simple: el cuadro de tesorería semanal
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas un ERP ni un software de gestión financiera para
            controlar tu liquidez. Lo que necesitas es un cuadro de tesorería
            semanal que te diga, de un vistazo, cómo se mueve el dinero en
            tu negocio. Es una tabla sencilla que puedes hacer en Excel,
            Google Sheets o incluso en un cuaderno.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La idea es simple: cada semana registras el saldo inicial, los
            cobros previstos, los pagos previstos y el saldo final. Así
            detectas con antelación las semanas en las que vas a tener
            problemas y puedes actuar antes de que sea tarde.
          </p>

          {/* Tabla ejemplo */}
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-primary-200 px-4 py-3 text-left font-semibold text-primary-900">
                    Concepto
                  </th>
                  <th className="border border-primary-200 px-4 py-3 text-right font-semibold text-primary-900">
                    Semana 1
                  </th>
                  <th className="border border-primary-200 px-4 py-3 text-right font-semibold text-primary-900">
                    Semana 2
                  </th>
                  <th className="border border-primary-200 px-4 py-3 text-right font-semibold text-primary-900">
                    Semana 3
                  </th>
                  <th className="border border-primary-200 px-4 py-3 text-right font-semibold text-primary-900">
                    Semana 4
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-primary-100 px-4 py-2 font-medium text-gray-900">
                    Saldo inicial
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-gray-700">
                    5.200 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-gray-700">
                    3.700 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-red-600 font-semibold">
                    -800 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-gray-700">
                    6.200 &euro;
                  </td>
                </tr>
                <tr className="bg-green-50/50">
                  <td className="border border-primary-100 px-4 py-2 font-medium text-gray-900">
                    (+) Cobros previstos
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-green-700">
                    2.500 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-green-700">
                    1.000 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-green-700">
                    12.000 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-green-700">
                    3.800 &euro;
                  </td>
                </tr>
                <tr className="bg-red-50/50">
                  <td className="border border-primary-100 px-4 py-2 font-medium text-gray-900">
                    (-) Pagos previstos
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-red-600">
                    4.000 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-red-600">
                    5.500 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-red-600">
                    5.000 &euro;
                  </td>
                  <td className="border border-primary-100 px-4 py-2 text-right text-red-600">
                    3.200 &euro;
                  </td>
                </tr>
                <tr className="bg-primary-50 font-semibold">
                  <td className="border border-primary-200 px-4 py-3 text-gray-900">
                    Saldo final
                  </td>
                  <td className="border border-primary-200 px-4 py-3 text-right text-gray-900">
                    3.700 &euro;
                  </td>
                  <td className="border border-primary-200 px-4 py-3 text-right text-red-600">
                    -800 &euro;
                  </td>
                  <td className="border border-primary-200 px-4 py-3 text-right text-gray-900">
                    6.200 &euro;
                  </td>
                  <td className="border border-primary-200 px-4 py-3 text-right text-gray-900">
                    6.800 &euro;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="mt-6 border-l-4 border-accent-400 bg-accent-50 py-4 pl-6 pr-4 italic text-gray-700 md:text-lg">
            &laquo;En este ejemplo, la semana 3 empieza con saldo negativo.
            Sin previsión, el empresario se entera el lunes cuando intenta
            pagar una factura y no puede. Con previsión, lo ve con dos
            semanas de antelación y tiene tiempo para adelantar un cobro,
            retrasar un pago o buscar una solución.&raquo;
          </blockquote>

          <p className="mt-6 text-gray-600 md:text-lg">
            El cuadro de tesorería semanal es una de las{" "}
            <a
              href="/metodo-herramientas"
              className="text-primary-700 underline hover:text-primary-900"
            >
              herramientas del Método Rentabilismo
            </a>{" "}
            que más impacto tiene en los negocios con los que trabajo. No
            porque sea sofisticada — sino porque es práctica, rápida y te
            obliga a mirar los números cada semana.
          </p>

          {/* H2 — Caso real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Caso real: empresa de servicios que dejó de vivir al día
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hace unos meses llegó a mi consultoría el propietario de una
            empresa de servicios técnicos en Galicia. Facturaba alrededor de
            280.000 euros al año con un equipo de 4 personas. El negocio
            funcionaba bien — tenía clientes, tenía trabajo, tenía buena
            reputación. Pero vivía en un estado de tensión financiera
            permanente.
          </p>

          <blockquote className="mt-6 border-l-4 border-primary-300 bg-primary-50/50 py-4 pl-6 pr-4 text-gray-700 md:text-lg">
            &laquo;Pablo, yo facturo bien. Pero cada mes es una angustia.
            Nunca sé si voy a llegar a las nóminas. No entiendo por qué no
            tengo dinero si estoy trabajando más que nunca.&raquo;
          </blockquote>

          <p className="mt-6 text-gray-600 md:text-lg">
            Cuando analizamos los números, encontramos tres problemas
            principales:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 text-accent-500">&#10003;</span>
              <span>
                <strong>Plazo medio de cobro de 72 días</strong> — sus
                clientes principales (empresas) pagaban tarde
                sistemáticamente y él nunca reclamaba.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 text-accent-500">&#10003;</span>
              <span>
                <strong>Facturación retrasada</strong> — tardaba una media de
                12 días en emitir la factura después de terminar el trabajo.
                Eso solo ya le costaba casi dos semanas extra de espera por
                cada cobro.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 text-accent-500">&#10003;</span>
              <span>
                <strong>Cero previsión</strong> — no tenía ningún sistema de
                control de tesorería. Miraba el saldo de la cuenta y
                decidía sobre la marcha.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-gray-600 md:text-lg">
            Lo que hicimos:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-primary-600">1.</span>
              <span>
                Implementamos facturación el mismo día de la entrega del
                servicio. El plazo de emisión pasó de 12 días a 0.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-primary-600">2.</span>
              <span>
                Renegociamos condiciones con sus 5 clientes principales:
                pago a 30 días con un 2% de descuento por pronto pago. Tres
                de ellos aceptaron.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-primary-600">3.</span>
              <span>
                Montamos un cuadro de tesorería semanal que revisaba cada
                lunes en 15 minutos.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-primary-600">4.</span>
              <span>
                Separamos la cuenta personal de la del negocio y fijamos un
                sueldo mensual para el propietario.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 md:text-lg">
              <span className="mt-1 font-bold text-primary-600">5.</span>
              <span>
                Empezamos a reservar un 8% de cada cobro en una cuenta de
                reserva intocable.
              </span>
            </li>
          </ul>

          {/* Highlight box resultado */}
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <p className="text-lg font-bold text-green-900">
              Resultado a los 4 meses:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3 text-green-800 md:text-lg">
                <span className="mt-1">&#9679;</span>
                <span>
                  Plazo medio de cobro: de 72 días a 34 días.
                </span>
              </li>
              <li className="flex items-start gap-3 text-green-800 md:text-lg">
                <span className="mt-1">&#9679;</span>
                <span>
                  Fondo de reserva acumulado: 9.400 euros.
                </span>
              </li>
              <li className="flex items-start gap-3 text-green-800 md:text-lg">
                <span className="mt-1">&#9679;</span>
                <span>
                  Meses sin tener que recurrir a la póliza de crédito: 3
                  consecutivos (antes la usaba todos los meses).
                </span>
              </li>
              <li className="flex items-start gap-3 text-green-800 md:text-lg">
                <span className="mt-1">&#9679;</span>
                <span>
                  El propietario dejó de sentir la angustia del final de mes.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-600 md:text-lg">
            No cambiamos su facturación. No le conseguimos clientes nuevos.
            No hicimos nada espectacular. Solo pusimos orden en el flujo de
            dinero. Eso fue suficiente para transformar su experiencia como
            empresario.
          </p>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: los problemas de liquidez son síntomas, no la
            enfermedad
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si tu empresa factura pero no tiene dinero, no tienes un problema
            de ventas — tienes un problema de estructura. De plazos, de
            organización, de control, de hábitos financieros. Y la buena
            noticia es que todo eso se puede cambiar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La falta de liquidez es un síntoma. Detrás hay causas concretas:
            cobras tarde, pagas pronto, no previenes, no controlas, no
            separas, no reservas. Cuando identificas esas causas y actúas
            sobre ellas de forma ordenada, la tesorería mejora. No de un día
            para otro, pero sí de forma constante y sostenible.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No necesitas facturar más para tener más liquidez. Necesitas
            gestionar mejor el dinero que ya entra. Y eso requiere tres
            cosas: información clara, decisiones firmes y un sistema de
            control que te avise antes de que los problemas lleguen.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te reconoces en este artículo, no lo dejes para mañana. Cada
            mes que pasa sin poner orden en tu tesorería es un mes más de
            ansiedad, de decisiones improvisadas y de oportunidades perdidas.
            Y tu negocio — y tú — merecéis algo mejor que eso.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="problemas-de-liquidez-en-pymes" />
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
            Analizamos la estructura financiera de tu empresa para encontrar
            las fugas de liquidez y diseñar un plan que te dé tranquilidad.
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

      <BlogNav currentSlug="problemas-de-liquidez-en-pymes" />

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
