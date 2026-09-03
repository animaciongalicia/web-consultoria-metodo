import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo aumentar la rentabilidad de una asesoría, despacho o gestoría — Guía práctica | Consultoría Método",
  description:
    "El sector asesoría-gestoría pierde clientes hacia plataformas online. Guía práctica con 6 palancas para aumentar la rentabilidad de tu asesoría o despacho: paquetes, especialización, valor añadido y plan de acción.",
  keywords: [
    "aumentar rentabilidad asesoria",
    "mejorar rentabilidad despacho profesional",
    "rentabilidad gestoría",
    "asesoría fiscal aumentar margen",
    "consultoría para asesorías",
    "modelo negocio gestoría",
    "diferenciar asesoría online",
    "paquetes servicios asesoría",
  ],
  openGraph: {
    title:
      "Cómo aumentar la rentabilidad de una asesoría, despacho o gestoría — Guía práctica",
    description:
      "Facturar lo mismo cada mes con más clientes y más trabajo no es rentabilidad. Cómo aportar (y cobrar) más valor en asesorías, despachos y gestorías.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/aumentar-rentabilidad-asesoria-despacho-gestoria",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo aumentar la rentabilidad de una asesoría, despacho o gestoría — Guía práctica",
  description:
    "Guía práctica con 6 palancas concretas para aumentar la rentabilidad de una asesoría, despacho o gestoría en un mercado presionado por plataformas online.",
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
  datePublished: "2026-09-03",
  dateModified: "2026-09-03",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/aumentar-rentabilidad-asesoria-despacho-gestoria",
  },
};

export default function ArticuloAumentarRentabilidadAsesoria() {
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
            Cómo aumentar la rentabilidad de una asesoría, despacho o gestoría
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Facturas cada mes lo mismo — o menos. Los clientes se comparan con
            plataformas online. Y tú sigues trabajando igual de duro que hace
            10 años. Guía práctica para salir de la trampa del papeleo y
            aportar (y cobrar) más valor.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y por
            videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
            {/* Introducción */}
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Última semana del mes. El titular de la asesoría cierra la
              contabilidad, revisa las cuotas de sus clientes, mira la cuenta
              del despacho y hace la cuenta de siempre: factura casi lo mismo
              que hace cinco años. Con más clientes. Con más obligaciones
              técnicas encima. Con un equipo más caro. Y con un cansancio
              acumulado que ya se nota fuera del trabajo.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Es una escena que veo en asesorías, despachos y gestorías de
              todo tipo. No es una crisis ruidosa, con cierres masivos y
              titulares. Es una crisis silenciosa: cada año, entre un 15% y
              un 20% de las asesorías tradicionales pierde clientes hacia
              plataformas online, aplicaciones de facturación con asesoría
              incluida y despachos «100% digitales» que compiten con precios
              agresivos.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              En este artículo te cuento{" "}
              <strong className="text-gray-900">
                por qué está pasando esto, qué NO pueden hacer las plataformas
                online (y por tanto dónde está tu oportunidad real), y las 6
                palancas concretas para aumentar la rentabilidad
              </strong>{" "}
              de una asesoría, despacho o gestoría sin necesidad de trabajar
              más horas ni bajar tarifas para retener clientes.
            </p>

            {/* H2 — Por qué las asesorías tradicionales están perdiendo margen */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Por qué las asesorías tradicionales están perdiendo margen
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Antes de hablar de soluciones hay que entender bien qué está
              pasando. Y no es una sola cosa: es la suma de varios factores
              que, juntos, se están comiendo el margen del sector.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Precios estancados hace 10 o 15 años
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Es habitual encontrar asesorías que cobran a algunos clientes
              exactamente la misma cuota mensual que hace más de una década.
              La materia prima del despacho ha subido — coste laboral,
              software, alquiler, formación continua, ciberseguridad — pero
              la cuota del cliente no. Cada año que pasa sin ajustar precios
              es un recorte silencioso de tu propio margen.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              El cliente percibe «papeleo automatizable»
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              El cliente medio ya no ve la asesoría como un servicio de
              consultoría, sino como un servicio de tramitación. «Le mando
              las facturas, me presenta el 303 y punto.» Y si lo que ve es
              tramitación, la pregunta lógica es: ¿por qué esto no lo puede
              hacer una aplicación por 39 euros al mes?
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Competencia online agresiva
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Plataformas como Holded, Quipu, TaxDown, gestorías 100% online
              y aplicaciones bancarias que integran asesoría fiscal están
              captando clientes cada mes — sobre todo los perfiles más
              jóvenes, autónomos digitales, freelancers y micropymes. No es
              una amenaza futura: es una amenaza presente que ya está
              moviendo cartera.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Equipo desmotivado por cargas repetitivas
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Cuando el 90% del trabajo del equipo son modelos, presentaciones
              e introducción de datos, la motivación se apaga. Los perfiles
              buenos se van (a empresas privadas, a la administración, a
              proyectos propios) y los que quedan hacen lo justo. Y esa
              rotación tiene un coste enorme en formación, errores y
              relación con el cliente.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              El titular haciendo de todo
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Muchos titulares de despacho hacen de técnico, comercial, jefe
              de personal, atención al cliente, informático y financiero, todo
              a la vez. Con esa carga es imposible sacar tiempo para pensar
              en modelo de negocio, cambiar la propuesta comercial o
              desarrollar servicios de más valor. Se sobrevive, no se decide.
            </p>

            {/* Cita destacada */}
            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;El despacho no está perdiendo por hacer mal el trabajo
              técnico. Está perdiendo porque el mercado ya no quiere pagar
              por lo que el despacho vende. Quiere pagar por otra cosa — y
              esa otra cosa hay que empezar a venderla.&rdquo;
            </blockquote>

            {/* H2 — La competencia online */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              La competencia online: qué ofrecen y qué NO pueden ofrecer
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Para diseñar una estrategia hay que conocer bien al rival.
              Ignorar a las plataformas online o ridiculizarlas («eso es una
              caja de zapatos, no una asesoría») es el error más caro que
              puede cometer un despacho hoy. Vamos a mirarlas de frente.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Sus puntos fuertes
            </h3>
            <ul className="my-6 space-y-3 rounded-xl border border-primary-200 bg-primary-50/30 p-6 text-gray-700">
              <li>
                <strong className="text-primary-900">Precio bajo y transparente</strong> —
                cuotas mensuales cerradas, sin sorpresas, publicadas en su
                web. Para un autónomo que empieza es una barrera de entrada
                muy baja.
              </li>
              <li>
                <strong className="text-primary-900">Inmediatez</strong> — el
                cliente sube una factura y en segundos está contabilizada,
                categorizada y lista. Sin llamar, sin correo, sin esperar
                respuesta.
              </li>
              <li>
                <strong className="text-primary-900">Self-service</strong> —
                el cliente ve en tiempo real su facturación, sus impuestos
                previstos, sus gastos, sus resultados. No depende de nadie
                para saber cómo va.
              </li>
              <li>
                <strong className="text-primary-900">Experiencia de usuario</strong> —
                aplicación móvil, notificaciones, integraciones con banco,
                lectura automática de facturas. La usabilidad no tiene nada
                que ver con la mayoría de portales de asesoría tradicional.
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Sus puntos débiles (donde está tu oportunidad)
            </h3>
            <ul className="my-6 space-y-3 rounded-xl border border-accent-200 bg-accent-50/40 p-6 text-gray-700">
              <li>
                <strong className="text-accent-700">Cero criterio humano ante decisiones</strong> —
                cuando el cliente tiene que decidir si constituye SL o
                sigue como autónomo, si compra el local o alquila, si mete
                al hijo en nómina o le hace socio, la plataforma no puede
                acompañarle. Solo procesa.
              </li>
              <li>
                <strong className="text-accent-700">Desconocimiento del negocio del cliente</strong> —
                no saben si es taller mecánico, clínica dental o empresa
                de eventos. Aplican reglas genéricas. Un buen asesor
                humano piensa desde dentro del sector del cliente.
              </li>
              <li>
                <strong className="text-accent-700">Respuesta genérica ante inspecciones o problemas</strong> —
                cuando llega un requerimiento serio, una inspección o un
                litigio, la plataforma deriva a un profesional externo que
                cobra aparte y que no conoce al cliente. Tú sí.
              </li>
              <li>
                <strong className="text-accent-700">Ausencia de acompañamiento estratégico</strong> —
                nadie llama al cliente para decirle «este trimestre has
                bajado el margen, hablemos». Nadie interpreta sus datos.
                Ese hueco es donde vive el valor real de un asesor.
              </li>
              <li>
                <strong className="text-accent-700">Cero relación humana</strong> —
                en momentos delicados (una herencia, una separación de
                socios, un cierre de negocio), la relación humana con un
                profesional de confianza pesa más que cualquier interfaz.
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              El error de intentar competir en precio con ellas
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Muchas asesorías reaccionan a la aparición de plataformas
              bajando precios o inventándose cuotas planas ridículas para
              «no perder al cliente». Es un error estratégico grave. Con su
              volumen y su tecnología, una plataforma siempre podrá ir por
              debajo. Si intentas competir en precio, entras en una guerra
              que ya has perdido antes de empezar. Y de paso destruyes el
              margen que necesitas para hacer lo único que ellas no pueden:
              acompañar. Si te interesa profundizar en este punto, en el
              artículo{" "}
              <a
                href="/blog/como-diferenciarte-de-tu-competencia"
                className="text-accent-600 underline hover:text-accent-700"
              >
                cómo diferenciarte de tu competencia sin competir en precio
              </a>{" "}
              lo desarrollo para cualquier sector.
            </p>

            {/* H2 — Dejar de ser presentador de impuestos */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Dejar de ser «presentador de impuestos»
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Este es el giro mental clave. Toda estrategia de rentabilidad
              en una asesoría empieza por aquí: dejar de venderte como el
              que presenta impuestos y empezar a venderte como el que
              asesora en decisiones.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              La diferencia parece sutil, pero es enorme. «Hago tu 303» es
              una tarea. «Te asesoro para tomar mejores decisiones fiscales
              y económicas en tu negocio» es un servicio profesional. La
              primera se automatiza. La segunda no.
            </p>

            <p className="mt-4 text-gray-600 md:text-lg">
              Un ejemplo real de conversación antes/después con un cliente
              autónomo que factura 90.000 &euro; al año:
            </p>
            <div className="my-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-red-200 bg-red-50 p-5">
                <p className="text-sm font-semibold text-red-800">Antes</p>
                <p className="mt-2 text-sm italic text-red-900">
                  «Hola Juan, ya te presenté el modelo 130 del trimestre.
                  Este trimestre te sale a pagar 2.180 &euro;. Domiciliado
                  el día 20.»
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <p className="text-sm font-semibold text-green-800">Después</p>
                <p className="mt-2 text-sm italic text-green-900">
                  «Hola Juan, presentado el 130. Te pagan 2.180 &euro;. He
                  visto que este trimestre tus ingresos suben un 18% pero
                  el margen baja tres puntos: los gastos de subcontratación
                  se han comido la mejora. Bloqueamos 30 minutos la semana
                  que viene, te enseño dónde está y decidimos si repercutir
                  precio o cambiar proveedor.»
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              El segundo mensaje justifica una cuota tres veces superior al
              primero. No porque el 303 valga más, sino porque el cliente
              está comprando algo diferente: criterio, análisis y decisiones
              mejor tomadas. Eso es lo que ninguna plataforma puede darle.
            </p>

            {/* H2 — 6 palancas concretas */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              6 palancas concretas para aumentar la rentabilidad de tu
              asesoría
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Con el giro mental hecho, entran en juego las decisiones
              concretas. Estas son las 6 palancas que, en mi experiencia,
              más impacto generan en la rentabilidad de una asesoría,
              despacho profesional o gestoría.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              1. Paquetes de servicios en vez de precio-hora o cuota plana
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              La cuota fija sin definir alcance es la trampa clásica del
              despacho. El cliente entiende que por 90 &euro; al mes tiene
              «todo incluido» y llama por cualquier duda, cualquier
              gestión y cualquier consulta laboral. El coste real de
              servirle se dispara y el margen desaparece.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              La solución es diseñar 3 paquetes claros con alcance
              definido:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Básico", desc: "Cumplimiento de obligaciones fiscales y laborales. Presentación de modelos. Cierre anual. Precio ajustado y alcance cerrado — lo que no está dentro, se factura aparte." },
                { label: "Medio", desc: "Todo lo del Básico + consultoría fiscal proactiva (2-3 revisiones al año), previsión trimestral de impuestos, atención a consultas laborales y fiscales rutinarias." },
                { label: "Premium", desc: "Todo lo del Medio + informes mensuales de resultados, reuniones trimestrales de estrategia, acompañamiento en decisiones de inversión, contratación, sucesión o planificación fiscal." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-accent-500">&#9654;</span>
                  <span>
                    <strong className="text-gray-900">{item.label}:</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 md:text-lg">
              De forma orientativa, un paquete Básico puede estar en 70-120
              &euro;/mes, un Medio en 180-280 &euro;/mes y un Premium desde
              350 &euro; hasta muy por encima según cliente. El objetivo
              no es que todos suban al Premium — es que cada cliente elija
              conscientemente qué nivel de servicio quiere y qué está
              pagando. Los que quieran solo cumplimiento, se quedan
              en Básico (y ya no llaman por cualquier cosa). Los que
              quieran acompañamiento, pagan por él.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              2. Especialización vertical
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Ser generalista en 2026 es difícil. El mercado premia a los
              despachos especializados por sector. Algunos ejemplos reales:
              asesorías especializadas en clínicas dentales, en centros de
              fisioterapia, en hostelería, en empresas de eventos, en
              creadores de contenido, en tiendas online, en agrarios.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              La ventaja de la especialización es doble. Por un lado
              puedes cobrar más porque entiendes el negocio del cliente
              en profundidad y le ahorras dinero de verdad — deducciones
              específicas del sector, contratos correctamente
              estructurados, tributación óptima. Por otro, tu propuesta
              comercial se vuelve mucho más potente: «asesoría para
              dentistas» capta mejor que «asesoría fiscal y laboral».
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              ¿Cómo elegir el nicho? Cruza tres criterios: (a) qué
              sectores ya tienes bien representados en cartera actual, (b)
              cuáles te interesan personalmente y conoces bien, y (c)
              cuáles tienen tamaño de mercado suficiente en tu zona (o a
              nivel nacional si trabajas online).
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              3. Servicios de valor añadido
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Además del cumplimiento clásico, hay una capa de servicios
              que muchos despachos aún no ofrecen — y por los que el
              cliente sí está dispuesto a pagar:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Análisis mensual de rentabilidad del negocio del cliente (no solo cerrar cuentas — interpretarlas).",
                "Previsión de tesorería a 3-6 meses, para anticipar tensiones de liquidez.",
                "Informes trimestrales de resultados con comparativas y recomendaciones.",
                "Consultoría fiscal proactiva: revisar antes de fin de año, no cuando ya no se puede hacer nada.",
                "Mini-formaciones fiscales y laborales para el cliente y su equipo (contratos, nóminas, IVA, obligaciones).",
                "Acompañamiento en decisiones puntuales: contratación, inversión, cambio de forma jurídica, entrada/salida de socios.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-accent-500">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 md:text-lg">
              Estos servicios se pueden vender integrados en los paquetes
              Medio o Premium, o como servicios sueltos con tarifa
              específica. En ambos casos son la diferencia entre facturar
              90 &euro;/mes al cliente o facturar 280 &euro;/mes al mismo
              cliente.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              4. Automatización interna para liberar tiempo
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Sin automatización interna, el resto de palancas no
              funcionan. Si tu equipo pasa el 90% de las horas en tareas
              repetitivas (introducir facturas, teclear datos, generar
              modelos, imprimir y sellar), no tiene tiempo para las
              tareas de valor por las que quieres cobrar más.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Palancas técnicas concretas: software de gestión moderno,
              OCR de facturas (lectura automática), integración con
              bancos, importación automática desde sistemas del cliente,
              portal cliente para intercambio de documentación,
              generación semi-automática de modelos, protocolos internos
              de revisión. Sin entrar en marcas, hoy en el mercado
              existen soluciones asequibles que reducen entre un 30% y
              un 50% las horas repetitivas.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              El objetivo de la automatización no es despedir gente. Es
              liberar horas del titular y del equipo cualificado para
              tareas de mayor valor: consultoría, análisis, atención
              premium, captación de nuevos clientes.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              5. Captación proactiva en vez de boca a boca pasivo
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Las asesorías tradicionales crecen por boca a boca pasivo:
              «alguien me recomendó a este asesor». Ha funcionado durante
              décadas, pero cada vez funciona peor: la nueva generación
              de empresarios busca en Google, compara en LinkedIn y
              contrata online.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Un sistema de captación proactivo, muy simple, combina:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Un programa de referidos con incentivo estructurado — no dependas de que el cliente se acuerde: recuérdaselo y prémialo.",
                "Alianzas estables con otros profesionales que atienden al mismo cliente ideal (abogados, notarios, consultores, agentes de seguros).",
                "Presencia local básica: ficha de Google My Business optimizada, reseñas activas, contenido útil publicado con regularidad.",
                "LinkedIn con criterio si trabajas B2B: publicación regular con temas prácticos, no autopromoción.",
                "Si ya te has especializado, captación específica en tu vertical: presencia en eventos y publicaciones del sector, contenido para ese nicho.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-accent-500">&#9654;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 md:text-lg">
              Si quieres profundizar en cómo montar un sistema de
              captación estable, tengo una guía completa sobre{" "}
              <a
                href="/blog/como-conseguir-clientes-para-tu-negocio"
                className="text-accent-600 underline hover:text-accent-700"
              >
                cómo conseguir más clientes para tu negocio
              </a>{" "}
              que aplica también a asesorías y despachos profesionales.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              6. Reducir clientela poco rentable
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Esta es la palanca menos aplicada y una de las que más
              impacto tiene. En casi todos los despachos que analizo hay
              un grupo de clientes que consume un tiempo desproporcionado
              respecto a lo que factura. Los llamamos «clientes tóxicos»:
              llaman por todo, discuten cada factura, se retrasan en
              pagos, cambian de opinión constantemente y presionan por
              precio.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Hacer un análisis simple de rentabilidad por cliente
              (horas dedicadas &times; coste hora vs facturación) suele
              revelar que entre el 15% y el 25% de los clientes destruye
              margen — es decir, cuestan más de lo que dejan. Y peor
              aún: ocupan el tiempo del titular y del equipo que
              podrían dedicarse a los clientes rentables y a captar
              nuevos del perfil correcto.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              Despedir clientes con elegancia es una habilidad
              empresarial. Se puede hacer subiendo tarifa a nivel real
              (el cliente decide si le compensa o no), reasignándolo a
              un colega menos saturado, o directamente comunicando que
              el despacho está reestructurando su cartera y ya no puede
              seguir atendiéndole. Es incómodo la primera vez. A la
              tercera es liberador — y la rentabilidad sube sola.
            </p>

            {/* Aviso importante */}
            <div className="my-10 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
              <p className="font-semibold text-amber-800">
                Consejo práctico
              </p>
              <p className="mt-2 text-amber-700">
                No intentes activar las 6 palancas a la vez. Es
                inabordable. Empieza por dos: normalmente el análisis de
                rentabilidad por cliente (palanca 6) y el rediseño de
                paquetes (palanca 1). Con eso solo, en 90 días ya notas
                un cambio real en cuenta de resultados y en calidad de
                vida del titular.
              </p>
            </div>

            {/* H2 — Casos reales */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Casos y ejemplos reales
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Tres ejemplos ilustrativos (anonimizados) de despachos que
              han aplicado estas palancas en los últimos años. No son
              «éxitos milagrosos» — son cambios de modelo con resultados
              medibles.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Caso 1: asesoría familiar que subió tarifas comunicando bien
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Situación de partida:</strong> asesoría familiar de
              tercera generación con 180 clientes activos, cuota media
              estancada en 85 &euro;/mes desde hacía años. Coste laboral
              subiendo cada convenio, resultado del despacho cayendo
              trimestre a trimestre.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Qué hicieron:</strong> comunicación cuidada a
              cliente por cliente explicando la situación, presentación
              de 3 paquetes (Básico, Medio, Premium) con alcance claro,
              y mejora simultánea de servicio (portal cliente nuevo,
              informe trimestral incluido en Medio y Premium). Los
              clientes tuvieron un mes para elegir paquete.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Resultado a los 6 meses:</strong> subieron un 25%
              los ingresos medios por cliente. Perdieron el 8% de la
              cartera (los más sensibles al precio, muchos de ellos
              clientes «tóxicos»). El titular pasó de estar
              constantemente apagando fuegos a tener tiempo real para
              atender los clientes Premium con calidad.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Caso 2: despacho que se especializó en clínicas dentales
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Situación de partida:</strong> asesoría generalista
              en una capital de provincia, mucha competencia local,
              dificultad para captar por precio, cartera muy dispersa
              (autónomos, comercios, pequeñas SL de todo tipo).
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Qué hicieron:</strong> detectaron que tenían 12
              clientes en el sector dental, todos contentos y con buen
              ticket. Decidieron especializarse. Rediseñaron web y
              propuesta comercial en torno a «asesoría para clínicas
              dentales», estudiaron a fondo la fiscalidad específica del
              sector (renta profesional vs actividad empresarial,
              tratamiento del IVA exento, contratos de colaboración,
              regularizaciones típicas de inspección), y publicaron
              contenido específico.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Resultado en 18 meses:</strong> pasaron de 12 a 41
              clínicas dentales en cartera, con un ticket medio triple
              respecto al cliente generalista anterior. Los referidos
              empezaron a ser naturales dentro del gremio. Redujeron
              activamente la cartera generalista quedándose solo con los
              rentables. Margen del despacho más que duplicado.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Caso 3: gestoría que digitalizó procesos internos
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Situación de partida:</strong> titular de gestoría
              de barrio, 60 horas de trabajo semanales, todo en su
              cabeza, sin protocolos escritos. Cliente entraba, papeleo
              subía, resultado estancado. Riesgo alto de burnout.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Qué hicieron:</strong> incorporaron software de
              gestión con OCR de facturas y portal cliente,
              documentaron los 10 procesos más repetitivos, dieron
              formación al equipo en atención comercial y consultora
              (no solo técnica), y crearon un protocolo interno de
              revisión periódica de cliente.
            </p>
            <p className="mt-3 text-gray-600 md:text-lg">
              <strong>Resultado en 9 meses:</strong> el titular liberó
              unas 15 horas semanales que dedicó a captación y a
              clientes Premium. El equipo cualificado empezó a poder
              hacer trabajo consultor (antes no tenía tiempo).
              Rentabilidad por hora del despacho subió un 40%.
            </p>

            {/* H2 — Errores típicos */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Errores típicos que aceleran la caída
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              De la misma forma que hay palancas que suben rentabilidad,
              hay decisiones muy habituales que la hunden más rápido:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Bajar precios para retener clientes", desc: "no retiene — solo consolida al despacho como opción barata y destruye margen para siempre." },
                { label: "Aceptar cualquier cliente por miedo a vacíos", desc: "cada cliente tóxico consume el tiempo que podrías dedicar a captar 3 rentables." },
                { label: "No revisar rentabilidad cliente por cliente", desc: "si no sabes qué cliente te deja dinero y cuál te lo cuesta, gestionas a ciegas." },
                { label: "Delegar sin protocolos ni control", desc: "delegar la ejecución sin sistema genera errores, retrabajo y pérdida de reputación." },
                { label: "Ignorar la competencia online", desc: "esperar que «se pasará» es la mejor forma de perder cuota de mercado en silencio cada trimestre." },
                { label: "No formar al equipo en atención comercial y consultora", desc: "un equipo técnicamente bueno pero sin habilidades relacionales frena todo el modelo Medio/Premium." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-red-500">&#10007;</span>
                  <span>
                    <strong className="text-gray-900">{item.label}:</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* H2 — Plan de acción en 90 días */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Plan de acción en 90 días
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              No hace falta un plan estratégico a 5 años para empezar. En
              90 días se puede hacer un cambio de modelo real en un
              despacho. Este es el esqueleto orientativo:
            </p>

            <div className="my-8 space-y-6">
              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-6">
                <p className="font-semibold text-primary-900">
                  Semana 1-2 — Radiografía
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Análisis de rentabilidad cliente por cliente:
                      horas dedicadas por el equipo &times; coste hora
                      real, comparado con facturación.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Cálculo del coste hora real del despacho (nóminas,
                      SS, alquiler, software, gestoría, resto de costes
                      indirectos).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Segmentación de cartera: clientes Premium
                      potenciales, Medios, Básicos y tóxicos.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-6">
                <p className="font-semibold text-primary-900">
                  Semana 3-4 — Diseño
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Rediseño de paquetes (Básico, Medio, Premium) con
                      alcance definido y tarifas coherentes con el
                      coste hora real.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Definición del nicho preferente si tiene sentido
                      especializarse (con qué vertical vas a construir
                      propuesta específica).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Plan de comunicación a clientes actuales: qué se
                      les va a proponer, cuándo y cómo.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-6">
                <p className="font-semibold text-primary-900">
                  Mes 2 — Implementación
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Comunicación gradual a clientes actuales (empezando
                      por los Premium potenciales, después Medios, al
                      final Básicos).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Conversaciones directas con clientes tóxicos:
                      subida de tarifa real o salida ordenada.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Primeros pasos de automatización interna (OCR,
                      portal, protocolos básicos).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-primary-200 bg-primary-50/30 p-6">
                <p className="font-semibold text-primary-900">
                  Mes 3 — Lanzamiento
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Lanzamiento oficial de la nueva propuesta comercial
                      (web, LinkedIn, referidos, alianzas).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Primeros clientes captados con la nueva narrativa
                      (nicho + paquetes + valor añadido).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-500">&#9654;</span>
                    <span>
                      Revisión de resultados: rentabilidad media por
                      cliente, horas liberadas del titular, cartera
                      neta después de bajas y altas.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              A los 90 días no vas a tener un despacho totalmente
              transformado — pero sí vas a tener claridad sobre a
              dónde vas, cuánto cuesta llevar a cada cliente y qué
              cartera quieres construir. Con esa base, el resto es
              cuestión de meses.
            </p>

            {/* H2 — Cuándo pedir ayuda */}
            <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
              Cómo Consultoría Método ayuda a asesorías, despachos y gestorías
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Todo lo anterior se puede hacer solo. He visto titulares
              de despacho aplicarlo por sí mismos con muy buen resultado.
              Pero también he visto los que no arrancan nunca — no por
              falta de capacidad, sino por falta de tiempo, de mirada
              externa o simplemente de alguien que les obligue a
              sentarse una tarde a la semana a mirar los números y
              tomar decisiones.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              Cuando una asesoría o gestoría nos contrata, hacemos dos cosas
              que van de la mano y que resuelven a la vez el problema del
              despacho y el de su cartera de clientes:
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-primary-200 bg-primary-50/40 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-700">
                  1 · Para tus clientes
                </p>
                <p className="mt-2 text-lg font-bold leading-snug text-primary-900">
                  Añadir valor real — que ganen más dinero contigo al lado
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Convertimos tu despacho en un asesor que <strong>aporta
                  criterio empresarial</strong>, no solo obligaciones fiscales.
                  Diagnóstico de rentabilidad, análisis de márgenes,
                  informes trimestrales que sí se leen, decisiones
                  acompañadas. Tus clientes dejan de percibirte como
                  &ldquo;el que hace los papeles&rdquo; y empiezan a verte
                  como <strong>alguien imprescindible que les ayuda a
                  ganar más dinero</strong>. Fidelización real, ticket
                  medio arriba, referidos que llegan solos.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-accent-200 bg-accent-50/50 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-700">
                  2 · Para tu propio despacho
                </p>
                <p className="mt-2 text-lg font-bold leading-snug text-primary-900">
                  Sobrevivir a la transformación del sector — y salir reforzado
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  El sector asesoría-gestoría <strong>pierde clientes cada
                  año</strong> hacia plataformas online. El titular está
                  agotado, el equipo desmotivado y los márgenes se
                  estrechan. Trabajamos contigo el <strong>rediseño del
                  modelo</strong>: paquetes de servicios, especialización
                  vertical, tarifas ajustadas, procesos internos,
                  captación proactiva. No es teoría — es lo que ya está
                  funcionando en los despachos que no solo sobreviven,
                  sino que <strong>ganan más que nunca</strong>.
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-600 md:text-lg">
              Estas dos cosas se refuerzan mutuamente: cuando tu despacho
              aporta más valor a sus clientes, esos clientes pagan más,
              recomiendan más y se quedan más tiempo — lo que asegura la
              rentabilidad y sostenibilidad de tu negocio. Y cuando tu
              despacho está bien estructurado internamente (paquetes,
              procesos, equipo), puedes aportar más valor sin morir en
              el intento.
            </p>
            <p className="mt-4 text-gray-600 md:text-lg">
              La{" "}
              <a
                href="/consultoria-servicios-profesionales"
                className="text-accent-600 underline hover:text-accent-700"
              >
                consultoría para servicios profesionales
              </a>{" "}
              es exactamente eso: alguien externo que se sienta contigo
              a hacer la radiografía, diseñar el nuevo modelo y
              acompañarte en la implementación durante los meses
              críticos. Sin humo, sin promesas mágicas, sin fórmulas
              secretas. Con método, números y decisiones bien tomadas.
            </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="aumentar-rentabilidad-asesoria-despacho-gestoria" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-400">
            Consultoría Método para asesorías, despachos y gestorías
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Ayudamos a tu despacho a hacer dos cosas — y las dos deciden
            si sobrevives los próximos 5 años
          </h2>
          <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-accent-300">Para tus clientes</p>
              <p className="mt-1 text-sm text-primary-100/90">
                Aportarles valor real, más allá del papeleo — para que
                ganen más contigo al lado y no se vayan a una plataforma
                online.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-accent-300">Para tu despacho</p>
              <p className="mt-1 text-sm text-primary-100/90">
                Rediseñar el modelo — paquetes, especialización, procesos,
                captación — para que dejes de trabajar más y ganes más.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            No son dos servicios distintos. Es una misma consultoría — la que
            te permite <strong className="text-white">añadir valor a tus
            clientes y salir reforzado de la crisis silenciosa del sector</strong>.
            La primera conversación es gratis, sin compromiso, y 30 minutos
            que valen la pena hasta si al final no trabajamos juntos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico de mi despacho
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
            30 minutos, sin compromiso · Presencial en A Coruña · Por
            videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* Lecturas relacionadas */}
      <section className="border-t border-gray-200 bg-white py-10">
        <div className="container-narrow">
          <h2 className="text-center text-lg font-bold text-primary-900 md:text-xl">
            Sigue leyendo
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
            <a
              href="/blog/segmentacion-clientes-identificar-rentables"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Rentabilidad
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Segmentación de clientes: cómo identificar a los rentables
              </p>
            </a>
            <a
              href="/blog/consultoria-administrativa-personalizada"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Organización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Consultoría administrativa personalizada: qué es y cuándo la necesitas
              </p>
            </a>
            <a
              href="/blog/como-subir-precios-sin-perder-clientes"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Precios
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Cómo subir precios sin perder clientes
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Consultoría sectorial */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            ¿Tienes un despacho, agencia o empresa de servicios?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en servicios profesionales: tarifas, captación, salida del autoempleo y organización.
          </p>
          <a
            href="/consultoria-servicios-profesionales"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para servicios profesionales →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="aumentar-rentabilidad-asesoria-despacho-gestoria" />
    </>
  );
}
