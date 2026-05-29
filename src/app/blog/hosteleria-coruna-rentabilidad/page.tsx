import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Hostelería en A Coruña: cómo ser rentable en un mercado cada vez más difícil | Consultoría Método",
  description:
    "Análisis práctico de la rentabilidad en la hostelería de A Coruña: costes reales, estacionalidad, escandallos, cartas y competencia. Consultor de hostelería en Galicia con experiencia en restaurantes, bares y cafeterías.",
  keywords: [
    "hostelería A Coruña",
    "rentabilidad restaurante Coruña",
    "consultor hostelería Galicia",
    "consultor restaurantes A Coruña",
    "escandallos hostelería",
    "estacionalidad hostelería Galicia",
    "cómo ganar dinero bar Coruña",
    "consultoría hostelería provincia Coruña",
  ],
  openGraph: {
    title: "Hostelería en A Coruña: cómo ser rentable en un mercado cada vez más difícil",
    description:
      "Guía práctica para bares, restaurantes y cafeterías en la provincia de A Coruña: costes, estacionalidad, cartas, escandallos y palancas reales de rentabilidad.",
    locale: "es_ES",
    type: "article",
  },
  alternates: { canonical: "https://consultoriametodo.es/blog/hosteleria-coruna-rentabilidad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hostelería en A Coruña: cómo ser rentable en un mercado cada vez más difícil",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-04-22",
};

export default function HosteleriaCorunaRentabilidad() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Sector hostelería — A Coruña</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Hostelería en A Coruña: cómo ser rentable en un mercado cada vez más difícil
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            La hostelería gallega no atraviesa su mejor momento — pero hay restaurantes, bares
            y cafeterías que siguen siendo rentables en la provincia de A Coruña. ¿Qué hacen
            distinto? Esta guía recoge las palancas reales que marcan la diferencia.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — A Coruña, Galicia
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <h2>Por qué la hostelería en A Coruña está apretada</h2>
            <p>
              Quien tiene un bar, cafetería o restaurante en la provincia de A Coruña sabe lo
              que ha cambiado en los últimos cinco años. Y sabe que no todo se explica por la
              inflación:
            </p>
            <ul>
              <li><strong>Subida sostenida de materia prima</strong> — carne, pescado, lácteos, bebidas y especialmente el pan.</li>
              <li><strong>Luz y gas</strong> que siguen muy por encima de los niveles pre-2022.</li>
              <li><strong>Costes laborales</strong> al alza, con convenios subiendo y dificultad creciente para encontrar personal cualificado.</li>
              <li><strong>Alquileres de local</strong> que se han revisado al alza tras la pandemia.</li>
              <li><strong>Cliente más sensible al precio</strong> que aprieta el ticket medio.</li>
              <li><strong>Competencia creciente</strong> con modelos de franquicia, comida rápida premium y plataformas de reparto que cambian el tablero.</li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                La foto: si hace cinco años ganabas 100 € con un ticket de 30 €, hoy con el mismo
                ticket — y la misma carta — estás ganando 70 € o menos. Si no has reajustado la
                estructura, el margen simplemente se ha esfumado.
              </p>
            </div>

            <h2>Los 3 tipos de hostelería en A Coruña (y por qué importa)</h2>
            <p>
              Cuando analizo negocios de hostelería en la provincia, lo primero es identificar
              de qué tipo de establecimiento estamos hablando — porque las palancas de rentabilidad
              son distintas:
            </p>

            <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Tipo 1</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Bar/cafetería de barrio</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Ticket bajo, alta frecuencia, clientela fija. La clave: eficiencia operativa y
                  control de merma. Si el café ya no deja margen, hay que mirar la carta complementaria.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Tipo 2</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Restaurante de menú</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Menú diario entre semana, carta los fines de semana. La clave: escandallos
                  reales, mix óptimo entre menú y carta, control de tiempo por servicio.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Tipo 3</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Restaurante de producto</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Carta de calidad, ticket alto, clientela ocasional. La clave: marca, cuidado
                  del detalle, fidelización y posicionamiento diferencial.
                </p>
              </div>
            </div>

            <p>
              Cada tipo tiene problemas distintos. Intentar que un bar de barrio funcione con
              reglas de restaurante de producto — o al revés — es uno de los errores más
              habituales que veo.
            </p>

            <h2>Las 5 palancas reales de rentabilidad en hostelería</h2>

            <div className="not-prose my-8 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">1</span>
                  <h3 className="text-lg font-bold text-gray-900">Escandallar cada plato</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Sin escandallos no sabes qué plato gana dinero y cuál lo pierde. Y sin eso,
                  cualquier decisión sobre precios o carta es a ciegas. La mayoría de restaurantes
                  que analizo no los tienen — o los tienen obsoletos.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">2</span>
                  <h3 className="text-lg font-bold text-gray-900">Reducir la carta</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Menos platos significan menos stock, menos merma, menos complejidad de cocina y
                  mayor control. El cliente no quiere 60 opciones — quiere las 20 que le gustan
                  bien hechas.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">3</span>
                  <h3 className="text-lg font-bold text-gray-900">Control de food cost y merma</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  El food cost sano está entre 28 % y 35 %. Por encima del 40 %, el negocio no
                  cuadra — por muy lleno que esté. La merma es el coste silencioso que nadie
                  mide y que drena beneficio cada semana.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">4</span>
                  <h3 className="text-lg font-bold text-gray-900">Renegociación de proveedores</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Comprar por inercia a los de siempre, sin comparar y sin negociar, cuesta dinero.
                  Consolidar pedidos, negociar volúmenes y evitar compras de urgencia puede
                  ahorrar entre un 5 % y un 10 % del coste de materia prima.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">5</span>
                  <h3 className="text-lg font-bold text-gray-900">Gestión de turnos y productividad</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  En hostelería, la mano de obra es el segundo coste más alto. Mal dimensionada,
                  funde el margen. Bien dimensionada, no se nota ni en servicio ni en beneficio.
                  Ajustar turnos al volumen real es un arte — y se aprende.
                </p>
              </div>
            </div>

            <h2>La estacionalidad gallega: un reto específico</h2>
            <p>
              A diferencia de la hostelería en zonas de turismo constante, la hostelería en
              A Coruña tiene una estacionalidad marcada. Verano y festivos concentran buena
              parte del margen anual. Hay establecimientos en la costa — Rías Altas, Costa da
              Morte, Rías Baixas — que hacen el 70 % de su facturación entre junio y septiembre.
              En A Coruña ciudad, Santiago o Ferrol, la estacionalidad es menos extrema pero
              igualmente presente.
            </p>
            <p>
              Esto obliga a dos cosas: aprovechar al máximo la temporada alta (con precios
              adecuados, no con descuentos) y diseñar propuestas para la temporada baja que
              cubran al menos los costes fijos. No resolver la estacionalidad es aceptar perder
              dinero 4 o 5 meses al año como si fuera algo inevitable.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Para ver un caso concreto aplicado a un restaurante gallego:{" "}
                <a href="/blog/caso-exito-restaurante-rentabilidad" className="text-accent-600 underline hover:text-accent-700">
                  Un restaurante que llenaba cada fin de semana y perdía dinero — qué encontramos y qué cambiamos
                </a>.
              </p>
            </div>

            <h2>Los errores que más veo en hostelería de la provincia</h2>
            <ul>
              <li>Subir precios &quot;de golpe&quot; cada 2-3 años en vez de ajustarlos progresivamente cada año.</li>
              <li>Mantener platos deficitarios porque &quot;a los clientes de siempre les gustan&quot;.</li>
              <li>Menús del día planteados como gancho que acaban perdiendo dinero sin que nadie lo mida.</li>
              <li>Ofertas y descuentos permanentes que destruyen el margen sin aportar volumen real.</li>
              <li>Dueño atrapado en cocina o sala sin tiempo para dirigir el negocio.</li>
              <li>Dependencia total de un par de proveedores &quot;porque siempre se compró ahí&quot;.</li>
            </ul>
            <p>
              La buena noticia: ninguno de estos errores es irreversible. Todos tienen solución.
              Normalmente en semanas, no en años.
            </p>

            <h2>Por qué funciona la consultoría en hostelería</h2>
            <p>
              Porque es un sector con palancas de mejora muy claras y medibles. Cuando ajustas
              escandallos, carta, turnos y proveedores, los resultados aparecen en la cuenta de
              resultados en 6–12 semanas — no en años. No hay muchos sectores donde eso sea
              posible.
            </p>
            <p>
              Si tienes un bar, cafetería o restaurante en la provincia de A Coruña — o en otro
              punto de{" "}
              <a href="/consultoria-empresarial-galicia" className="text-accent-600 underline hover:text-accent-700">
                Galicia
              </a>{" "}
              — y sientes que el margen se te va sin saber por qué, el primer paso es un
              diagnóstico honesto. Desde ahí se sabe qué toca cambiar.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Lecturas recomendadas:{" "}
                <a href="/blog/como-mejorar-rentabilidad-restaurante-bar" className="text-accent-600 underline hover:text-accent-700">
                  cómo mejorar la rentabilidad de un restaurante o bar
                </a>{" "}
                y{" "}
                <a href="/blog/como-reducir-gastos-empresa-sin-recortar" className="text-accent-600 underline hover:text-accent-700">
                  cómo reducir gastos sin recortar en lo que importa
                </a>.
              </p>
            </div>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="hosteleria-coruna-rentabilidad" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu hostelería en A Coruña trabaja mucho y gana poco?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La mayoría de bares y restaurantes pierden entre un 10 % y un 20 % de margen por
            cosas que se pueden corregir en semanas. El diagnóstico inicial es gratuito y sin
            compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Consultoría sectorial */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            ¿Tienes un restaurante, bar o negocio de hostelería?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en hostelería y restauración: diagnóstico de rentabilidad, escandallos, captación y organización.
          </p>
          <a
            href="/consultoria-hosteleria-restauracion"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para hostelería y restauración →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="hosteleria-coruna-rentabilidad" />
    </>
  );
}
