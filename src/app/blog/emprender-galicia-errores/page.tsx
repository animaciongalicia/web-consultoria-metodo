import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Emprender en Galicia: los 8 errores que hacen que el 50 % de los negocios cierre antes de 5 años | Consultoría Método",
  description:
    "Guía práctica sobre los errores más frecuentes al emprender un negocio en Galicia. Estudio de viabilidad, financiación, localización, precios y estructura. Consultor de negocios para emprendedores en A Coruña y Galicia.",
  keywords: [
    "emprender en Galicia",
    "errores al emprender",
    "consultor emprendedores Galicia",
    "emprender A Coruña",
    "viabilidad negocio Galicia",
    "abrir negocio Galicia",
    "fracaso pymes Galicia",
    "plan de negocio Galicia",
  ],
  openGraph: {
    title: "Emprender en Galicia: los 8 errores que hacen que el 50 % de los negocios cierre antes de 5 años",
    description:
      "Los errores más frecuentes al emprender en Galicia y cómo evitarlos. Guía práctica de un consultor con experiencia en pymes gallegas.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/emprender-galicia-errores" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Emprender en Galicia: los 8 errores que hacen que el 50 % de los negocios cierre antes de 5 años",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-22",
};

const errores = [
  {
    n: 1,
    t: "Montar el negocio sin hacer números",
    d: "Abrir sin saber cuál es el punto de equilibrio mensual, cuánto hay que vender para cubrir gastos ni cuánto queda de beneficio por cada venta. Este es el error más extendido y el más caro.",
    fix: "Antes de abrir: calcular todos los costes fijos (alquiler, suministros, seguros, cotización, amortizaciones) y todos los costes variables. Saber exactamente cuánto debes facturar para no perder dinero.",
    link: { href: "/blog/indicadores-clave-de-una-empresa", label: "Qué números debe controlar cualquier empresa" },
  },
  {
    n: 2,
    t: "Copiar al vecino sin entender por qué funciona",
    d: "\"Al lado de casa hay uno que va lleno, voy a montar uno igual\". Imitar sin analizar ignora factores clave — ubicación exacta, experiencia del dueño, red de clientes, años de rodaje — que el imitador no tiene.",
    fix: "Si quieres montar algo parecido a un negocio que funciona, estudia por qué funciona. No copies el producto: copia el método.",
    link: { href: "/blog/como-analizar-tu-competencia", label: "Cómo analizar a tu competencia" },
  },
  {
    n: 3,
    t: "Sobredimensionar la inversión inicial",
    d: "Reformas caras, maquinaria top, mobiliario premium, local grande. Muchos emprendedores gallegos empiezan endeudados hasta las cejas por exceso de inversión en activos que no generan ventas.",
    fix: "Empieza con la inversión mínima viable. Lo que no sea imprescindible para operar desde el día 1, se pospone.",
    link: { href: "/blog/como-mejorar-el-flujo-de-caja", label: "Cómo mejorar el flujo de caja" },
  },
  {
    n: 4,
    t: "Fijar precios sin escandallar",
    d: "Poner precios mirando a la competencia o \"a ojo\", sin saber cuánto cuesta realmente producir y vender cada cosa. Resultado: el negocio factura pero no gana.",
    fix: "Cada producto o servicio debe tener su coste real calculado y un margen objetivo definido. Sin eso, estás compitiendo con dinero propio.",
    link: { href: "/blog/como-fijar-precios-en-tu-negocio", label: "Cómo fijar precios sin perder clientes ni margen" },
  },
  {
    n: 5,
    t: "Ignorar la estacionalidad del mercado gallego",
    d: "Muchos sectores en Galicia tienen una estacionalidad marcada — hostelería, turismo, comercio costero, formación, construcción. Ignorarlo significa sobrevivir en temporada alta y perder dinero en temporada baja.",
    fix: "Diseñar el modelo para que la temporada alta cubra la baja. Y si es posible, crear líneas de negocio complementarias para los meses flojos.",
    link: { href: "/blog/retos-pymes-galicia-2026", label: "Retos de las pymes en Galicia en 2026" },
  },
  {
    n: 6,
    t: "Pensar solo en producto, no en cliente",
    d: "\"Mi producto es excelente, se venderá solo\". Nunca es cierto. Un producto excelente sin una propuesta clara para un cliente concreto no se vende — o se vende al precio que no te deja margen.",
    fix: "Definir desde el principio quién es tu cliente ideal, qué problema le resuelves y por qué debería elegirte a ti.",
    link: { href: "/blog/como-definir-estrategia-negocio", label: "Cómo definir la estrategia de tu negocio" },
  },
  {
    n: 7,
    t: "No separar lo personal de lo empresarial",
    d: "Mezclar la caja del negocio con la cuenta personal es un clásico gallego — y un veneno silencioso. No sabes lo que gana el negocio, no sabes lo que ganas tú y el empresario acaba pensando que &quot;va bien&quot; cuando en realidad el negocio pierde dinero.",
    fix: "Cuentas separadas, sueldo fijo del dueño desde el primer mes y cuentas trimestrales mínimas. Es innegociable.",
    link: { href: "/blog/cuanto-debe-ganar-el-dueno-de-un-negocio", label: "Cuánto debe ganar el dueño de un negocio" },
  },
  {
    n: 8,
    t: "Trabajar solo en el negocio, nunca sobre él",
    d: "El emprendedor gallego tiende a arremangarse y hacer todo él — atender, cocinar, facturar, limpiar, reparar. Resultado: un autoempleado encubierto que no tiene tiempo de dirigir su propio negocio.",
    fix: "Reservar cada semana un bloque de tiempo — aunque sean 3 horas — dedicado a pensar en el negocio: números, decisiones, planificación. Sin eso, no hay crecimiento posible.",
    link: { href: "/blog/como-organizar-empresa-pequena-salir-autoempleo", label: "Cómo salir del autoempleo y organizar tu empresa" },
  },
];

export default function EmprenderGaliciaErrores() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Emprender — Galicia</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Emprender en Galicia: los 8 errores que hacen que el 50 % de los negocios cierre antes de 5 años
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Los datos hablan claro: la mitad de los negocios que abren en Galicia no llegan al
            quinto aniversario. Casi nunca es por mala suerte. Es por los mismos ocho errores,
            repitiéndose una y otra vez. Esta guía te ayuda a identificarlos antes de cometerlos.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — A Coruña, Galicia
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <h2>La realidad que no sale en los cursos de emprendimiento</h2>
            <p>
              Llevo más de 25 años trabajando con pymes y emprendedores en{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>. He visto nacer cientos de negocios — hostelería, comercio, servicios
              profesionales, talleres, clínicas, formación, empresas tecnológicas — y he visto
              cerrar también muchos. El patrón casi siempre es el mismo.
            </p>
            <p>
              Los negocios no suelen cerrar por un error gordo. Cierran por un conjunto de
              pequeños errores que, sumados, hacen imposible que el negocio sea rentable. Y casi
              todos esos errores son previsibles — y evitables — si se conocen antes de empezar.
            </p>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Emprender no es fácil ni seguro — nunca lo será. Pero muchos cierres en Galicia
                no se explican por dificultad de mercado, sino por errores que nadie corrigió a
                tiempo porque nadie los identificó a tiempo.
              </p>
            </div>

            <h2>Los 8 errores que matan más negocios gallegos</h2>

            <div className="not-prose my-8 space-y-6">
              {errores.map((e) => (
                <div key={e.n} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-sm font-extrabold text-red-700">
                      {e.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{e.t}</h3>
                      <p className="mt-2 text-base text-gray-700 leading-relaxed">{e.d}</p>
                      <div className="mt-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-500 px-4 py-3">
                        <p className="text-sm font-semibold text-emerald-800">
                          <span className="uppercase tracking-wider text-xs">Solución</span> — {e.fix}
                        </p>
                      </div>
                      <p className="mt-3 text-sm">
                        <a href={e.link.href} className="text-accent-600 underline hover:text-accent-700 font-semibold">
                          {e.link.label} →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Tres ideas para emprender con más probabilidad de éxito en Galicia</h2>

            <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">1 · Valida antes de invertir</p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Antes de gastar 30.000 € en una reforma, prueba el modelo con una inversión
                  mínima. Test piloto, pop-up, clientes antes de local. Si el mercado responde, se
                  escala. Si no, se corrige sin haber perdido ahorros.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">2 · Conoce tu punto muerto</p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Si no sabes exactamente cuánto necesitas facturar cada mes para cubrir costes,
                  no tienes negocio: tienes una apuesta. Calcula el punto muerto antes de abrir
                  — y revísalo cada trimestre.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">3 · Mirada externa temprana</p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Una conversación con alguien que haya visto muchos negocios parecidos al tuyo,
                  antes o al principio, ahorra meses de errores caros. No es imprescindible.
                  Pero si puedes permitírtelo, es la mejor inversión inicial.
                </p>
              </div>
            </div>

            <h2>Emprender en Galicia tiene ventajas — si las aprovechas</h2>
            <p>
              Frente a la imagen de mercado difícil, Galicia también ofrece ventajas reales para
              emprender: un tejido empresarial cohesionado, una cultura de cliente fiel, redes
              profesionales accesibles, producto local con identidad fuerte, costes
              inmobiliarios más bajos que otras zonas de España y una Administración regional con
              líneas de apoyo específicas.
            </p>
            <p>
              El problema no es Galicia. Es emprender sin método. Si vas a montar un negocio en
              la provincia de A Coruña, Santiago, Vigo, Lugo, Ourense o cualquier comarca gallega,
              los mismos principios aplican: números claros, propuesta diferenciada, estructura
              ligera, foco en el cliente y mirada externa cuando haga falta.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Lecturas útiles antes de emprender:{" "}
                <a href="/blog/plan-negocio-simple-una-pagina" className="text-accent-600 underline hover:text-accent-700">
                  plan de negocio en una página
                </a>
                {", "}
                <a href="/blog/como-tomar-decisiones-en-un-negocio" className="text-accent-600 underline hover:text-accent-700">
                  las decisiones que frenan tu negocio
                </a>{" "}
                y{" "}
                <a href="/blog/cuando-contratar-un-consultor-de-negocios" className="text-accent-600 underline hover:text-accent-700">
                  cuándo contratar un consultor
                </a>.
              </p>
            </div>

            <h2>¿Cuándo tiene sentido hablar con un consultor si emprendes?</h2>
            <p>
              Tres momentos clave:
            </p>
            <ul>
              <li><strong>Antes de abrir</strong>, para validar el modelo de negocio y afinar el plan de costes, precios y punto muerto.</li>
              <li><strong>Entre el mes 6 y el mes 12</strong>, cuando ya tienes datos reales pero aún estás a tiempo de corregir sin consecuencias graves.</li>
              <li><strong>Cuando empiezas a crecer</strong>, para no pasar del autoempleo al caos operativo sin estructura.</li>
            </ul>
            <p>
              Si estás emprendiendo — o a punto de hacerlo — en la provincia de A Coruña o en
              otro punto de Galicia, una conversación inicial gratuita de 30 minutos suele ser
              suficiente para detectar si hay algún error de los ocho anteriores que aún estás
              a tiempo de corregir.
            </p>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="emprender-galicia-errores" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Estás emprendiendo o acabas de arrancar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            30 minutos de conversación gratuita para detectar errores antes de que sean caros y
            afinar lo que necesites afinar antes de perder tiempo y dinero.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="emprender-galicia-errores" />
    </>
  );
}
