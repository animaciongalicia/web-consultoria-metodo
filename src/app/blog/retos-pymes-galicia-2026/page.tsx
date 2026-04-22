import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Retos de las pymes en Galicia en 2026: lo que tienes que mirar este año | Consultoría Método",
  description:
    "Análisis práctico de los principales retos a los que se enfrentan las pymes gallegas en 2026: inflación de costes, relevo generacional, digitalización, talento y competencia. Consultor de negocios en Galicia.",
  keywords: [
    "retos pymes Galicia 2026",
    "situación pymes Galicia",
    "consultoría empresarial Galicia",
    "relevo generacional Galicia",
    "digitalización pymes gallegas",
    "competitividad pyme Galicia",
    "costes empresa Galicia",
    "talento pyme Galicia",
  ],
  openGraph: {
    title: "Retos de las pymes en Galicia en 2026: lo que tienes que mirar este año",
    description:
      "Los 6 retos que marcarán la rentabilidad de las pymes gallegas en 2026 y qué hacer ante cada uno.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/retos-pymes-galicia-2026" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Retos de las pymes en Galicia en 2026: lo que tienes que mirar este año",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-22",
};

const retos = [
  {
    n: "01",
    title: "La subida sostenida de costes estructurales",
    body: "Energía, alquileres, seguros, materias primas y salarios llevan cuatro años subiendo por encima del IPC. Muchas pymes gallegas no han repercutido esas subidas en su precio de venta — y están financiando con margen propio una inflación que no les corresponde.",
    action: "Revisión completa de escandallos y política de precios al menos una vez al año. Sin eso, el margen se evapora en silencio.",
    link: { href: "/blog/como-subir-precios-sin-perder-clientes", label: "Cómo subir precios sin perder clientes" },
  },
  {
    n: "02",
    title: "El relevo generacional que no termina de producirse",
    body: "Galicia tiene una de las estructuras empresariales más envejecidas de España. Muchas pymes familiares viables se enfrentan a un relevo que no está preparado — o que directamente no existe. El dueño quiere jubilarse, pero ni el hijo ni nadie quiere seguir.",
    action: "Empezar a diseñar el relevo con 5–10 años de antelación. Si se deja para el último momento, se pierde valor empresarial o se cierra un negocio que podría continuar.",
    link: { href: "/blog/traspaso-generacional-empresa-familiar", label: "Traspaso generacional en la empresa familiar" },
  },
  {
    n: "03",
    title: "Digitalización lenta e incompleta",
    body: "Entre las pymes de Galicia hay dos mundos: las que han digitalizado procesos básicos (gestión, clientes, facturación) y las que siguen con Excel y libretas. La diferencia en productividad se nota cada mes. Y en 2026, con la obligatoriedad creciente de la factura electrónica y los sistemas de verificación, quedarse atrás ya no es opción.",
    action: "Digitalización mínima viable: facturación, gestión de clientes, control de caja y comunicación interna. No hace falta comprar software caro — hace falta ordenar.",
    link: { href: "/blog/como-digitalizar-tu-negocio-pequeno", label: "Cómo digitalizar tu negocio pequeño sin complicarte" },
  },
  {
    n: "04",
    title: "Dificultad creciente para captar y retener talento",
    body: "El mercado laboral en la provincia de A Coruña y el resto de Galicia está más tensionado de lo que parece. Encontrar personal cualificado para hostelería, comercio, industria o servicios profesionales se ha vuelto complicado — y retenerlo, aún más.",
    action: "Revisar condiciones, claridad de funciones, planes de carrera y liderazgo. El problema casi nunca es solo el sueldo.",
    link: { href: "/blog/como-motivar-equipo-trabajo-pyme", label: "Cómo motivar a tu equipo en una pyme" },
  },
  {
    n: "05",
    title: "Competencia asimétrica de grandes operadores",
    body: "La entrada de cadenas nacionales e internacionales en plazas tradicionalmente locales — comercio, restauración, servicios — ha desnivelado el mercado. Competir en precio o en variedad es imposible. Competir en diferenciación, servicio y producto local es donde la pyme gallega puede ganar.",
    action: "Reposicionar la propuesta de valor. Dejar de imitar al grande para construir algo propio.",
    link: { href: "/blog/como-diferenciarte-de-tu-competencia", label: "Cómo diferenciarte cuando todos venden lo mismo" },
  },
  {
    n: "06",
    title: "Exceso de complejidad interna en pymes pequeñas",
    body: "Catálogos demasiado amplios, carteras de clientes muy dispersas, procesos sin documentar, decisiones que pasan todas por el dueño. Muchas pymes gallegas tienen complejidad de empresa grande con estructura de empresa pequeña — y eso las asfixia.",
    action: "Simplificar: menos referencias, menos clientes de baja rentabilidad, procesos claros y delegación real.",
    link: { href: "/blog/como-organizar-empresa-pequena-salir-autoempleo", label: "Cómo salir del autoempleo y organizar tu empresa" },
  },
];

export default function RetosPymesGalicia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Contexto local — Galicia</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Retos de las pymes en Galicia en 2026: lo que tienes que mirar este año
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            No son previsiones macro: son los problemas concretos que veo a diario trabajando
            con pymes en A Coruña, Santiago, Ferrol, Lugo, Ourense y Pontevedra. Seis retos
            reales, seis acciones concretas para cada uno.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — A Coruña, Galicia
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <h2>Un contexto distinto al del resto del país</h2>
            <p>
              Las pymes gallegas operan en un contexto económico con peculiaridades muy marcadas:
              mercado local pequeño y disperso, estacionalidad en muchos sectores, estructura
              empresarial envejecida, fuerte peso del sector primario y agroalimentario, y una
              distribución territorial que combina áreas metropolitanas dinámicas con comarcas
              rurales en retroceso demográfico.
            </p>
            <p>
              Eso significa que las recetas genéricas que funcionan para una pyme de Madrid o
              Barcelona no siempre aplican aquí. Y viceversa: hay palancas de mejora muy claras
              en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>{" "}
              que no se ven en otros mercados. Entender el contexto es el primer paso para
              tomar buenas decisiones.
            </p>

            <h2>Los 6 retos que marcan el año 2026</h2>

            <div className="not-prose my-8 space-y-6">
              {retos.map((r) => (
                <div key={r.n} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 text-2xl font-extrabold text-accent-500">{r.n}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{r.title}</h3>
                      <p className="mt-2 text-base text-gray-700 leading-relaxed">{r.body}</p>
                      <div className="mt-4 rounded-lg bg-primary-50/60 border-l-4 border-primary-500 px-4 py-3">
                        <p className="text-sm font-semibold text-primary-800">Qué hacer: {r.action}</p>
                      </div>
                      <p className="mt-3 text-sm">
                        <a href={r.link.href} className="text-accent-600 underline hover:text-accent-700 font-semibold">
                          {r.link.label} →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Cómo convertir los retos en un plan de acción</h2>
            <p>
              Ninguno de estos seis retos se resuelve de un día para otro. Pero ninguno se
              resuelve tampoco sin empezar. El error más común es esperar a que la situación
              apriete tanto que ya no quede margen de maniobra — y actuar entonces. Eso casi
              nunca sale bien.
            </p>
            <p>
              La alternativa es tomar distancia una vez al año, mirar el negocio con calma y
              decidir qué dos o tres retos vas a atacar en los próximos doce meses. No todos a
              la vez: prioriza los que más impacto tengan sobre tu margen y tu estructura.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                El patrón que veo en las pymes gallegas que mejor están capeando este contexto es
                siempre el mismo: números al día, catálogo simplificado, clientes segmentados y
                dueño que dedica tiempo a dirigir el negocio — no solo a trabajar en él.
              </p>
            </div>

            <h2>Qué aporta aquí un consultor local</h2>
            <p>
              Un{" "}
              <a href="/consultor-empresas-coruna" className="text-accent-600 underline hover:text-accent-700">
                consultor de empresas en la provincia de A Coruña
              </a>{" "}
              que conoce el tejido gallego aporta algo que las grandes consultoras no pueden
              ofrecer: contexto. Entiende la estacionalidad real de cada sector, las redes de
              proveedores locales, los circuitos comerciales de Galicia, los comportamientos de
              consumo de las distintas comarcas y las particularidades culturales de gestionar
              equipos en empresas familiares gallegas.
            </p>
            <p>
              Eso se traduce en decisiones más rápidas, más aterrizadas y con menos riesgo. No
              hay que explicarle al consultor qué es un rexistro, un ferrado, un escaparate de
              barrio en Ourense o cómo se comporta la clientela en una localidad turística
              gallega en invierno.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="retos-pymes-galicia-2026" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu pyme gallega está preparada para los retos de 2026?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            30 minutos de conversación gratuita para entender dónde está tu mayor vulnerabilidad
            este año y qué dos o tres cambios marcarían la diferencia.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="retos-pymes-galicia-2026" />
    </>
  );
}
