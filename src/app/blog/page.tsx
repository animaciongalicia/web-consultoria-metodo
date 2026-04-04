import type { Metadata } from "next";
import { SITE } from "@/lib/content";

// Revalidar cada 24h para que los artículos programados aparezcan en su fecha
export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Blog — Consultoría Método | Artículos sobre rentabilidad y gestión empresarial",
  description:
    "Artículos prácticos sobre rentabilidad, gestión empresarial y consultoría de negocios para pymes en España.",
  alternates: {
    canonical: "https://consultoriametodo.es/blog",
  },
};

const categoryColors: Record<
  string,
  { bg: string; text: string; border: string; shadow: string }
> = {
  Rentabilidad: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    shadow: "hover:shadow-emerald-100",
  },
  Clientes: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    shadow: "hover:shadow-blue-100",
  },
  Organización: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    shadow: "hover:shadow-violet-100",
  },
  Estrategia: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    shadow: "hover:shadow-amber-100",
  },
  "Control y gestión": {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
    shadow: "hover:shadow-cyan-100",
  },
  Crecimiento: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    shadow: "hover:shadow-rose-100",
  },
  Marketing: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    shadow: "hover:shadow-orange-100",
  },
  "Caso de éxito": {
    bg: "bg-teal-50",
    text: "text-teal-700",
    border: "border-teal-200",
    shadow: "hover:shadow-teal-100",
  },
};

const posts = [
  // --- PILARES SEO (los más importantes, primero) ---
  {
    slug: "como-mejorar-rentabilidad-empresa",
    title:
      "Cómo mejorar la rentabilidad de tu empresa — Guía completa para pymes",
    excerpt:
      "Guía pilar con todo lo que necesitas saber para mejorar la rentabilidad de tu pyme: márgenes, costes, precios, productividad, flujo de caja y un plan de acción paso a paso.",
    date: "10 abril 2025",
    category: "Rentabilidad",
    readTime: "18 min",
    isPillar: true,
  },
  {
    slug: "como-conseguir-clientes-para-tu-negocio",
    title:
      "Cómo conseguir más clientes para tu negocio — Guía completa de captación para pymes",
    excerpt:
      "Por qué falla la captación, canales reales, estrategia local vs digital, cómo crear un sistema estable, errores que tiran dinero y casos reales. Todo lo que una pyme necesita.",
    date: "10 abril 2025",
    category: "Clientes",
    readTime: "18 min",
    isPillar: true,
  },
  {
    slug: "indicadores-clave-de-una-empresa",
    title:
      "Qué números debe controlar cualquier empresa para no ir a ciegas — Guía completa de KPIs",
    excerpt:
      "Los 9 KPIs que toda pyme debe vigilar: margen, punto muerto, ticket medio, CAC, flujo de caja. Cómo interpretar datos, tomar decisiones con números reales y montar tu sistema de control mensual.",
    date: "10 abril 2025",
    category: "Control y gestión",
    readTime: "18 min",
    isPillar: true,
  },
  {
    slug: "como-organizar-empresa-pequena-salir-autoempleo",
    title:
      "Cómo organizar una empresa para que crezca (y dejar de ser esclavo de tu negocio) — Guía completa",
    excerpt:
      "Caos operativo, empresario autoempleado, procesos, delegación, sistemas simples, cómo liberar tiempo y preparar el crecimiento. Todo lo que una pyme necesita para dejar de depender del dueño.",
    date: "10 abril 2025",
    category: "Organización",
    readTime: "18 min",
    isPillar: true,
  },
  {
    slug: "como-hacer-crecer-una-empresa-pequena",
    title:
      "Cómo hacer crecer una empresa paso a paso — Guía completa de estrategia de crecimiento",
    excerpt:
      "Fases de crecimiento, errores al escalar, cuándo invertir, cuándo contratar, nuevas líneas de negocio, mentalidad empresarial y plan real de crecimiento para pymes.",
    date: "10 abril 2025",
    category: "Crecimiento",
    readTime: "18 min",
    isPillar: true,
  },
  {
    slug: "como-definir-estrategia-negocio",
    title:
      "Cómo definir la estrategia de tu negocio para dejar de improvisar — Guía completa",
    excerpt:
      "Modelo de negocio, propuesta de valor, posicionamiento, plan estratégico en una página, errores que cuestan dinero y revisión periódica. Todo lo que una pyme necesita para tener dirección.",
    date: "10 abril 2025",
    category: "Estrategia",
    readTime: "18 min",
    isPillar: true,
  },
  // --- ARTÍCULOS DE APOYO (existentes) ---
  {
    slug: "por-que-no-funciona-la-publicidad-en-mi-negocio",
    title:
      "Por qué muchas empresas tiran el dinero en marketing (y cómo evitarlo)",
    excerpt:
      "Frustración con agencias, publicidad sin estrategia y dinero perdido. Descubre cómo saber si tu marketing funciona y un sistema práctico para evaluar cada euro que inviertes.",
    date: "13 marzo 2025",
    category: "Marketing",
    readTime: "12 min",
  },
  {
    slug: "como-diferenciarte-de-tu-competencia",
    title:
      "Cómo diferenciarte de tu competencia sin competir en precio",
    excerpt:
      "Si tu negocio ofrece lo mismo que los demás, compites por precio y pierdes margen. Descubre cómo encontrar tu ventaja competitiva real y posicionarte como la mejor opción.",
    date: "13 marzo 2025",
    category: "Estrategia",
    readTime: "13 min",
  },
  {
    slug: "como-fijar-precios-en-tu-negocio",
    title:
      "Cómo fijar precios en tu negocio sin perder clientes ni margen",
    excerpt:
      "La mayoría de pymes fijan precios por intuición o copiando a la competencia. Aprende métodos reales para calcular precios que cubran costes, generen beneficio y el cliente acepte.",
    date: "13 marzo 2025",
    category: "Rentabilidad",
    readTime: "14 min",
  },
  {
    slug: "problemas-de-liquidez-en-pymes",
    title:
      "Tu empresa factura pero no tiene dinero: cómo resolver los problemas de liquidez",
    excerpt:
      "Facturas pendientes, pagos que no cuadran y la cuenta siempre al límite. Causas reales de los problemas de liquidez en pymes y un plan práctico para resolverlos.",
    date: "13 marzo 2025",
    category: "Control y gestión",
    readTime: "13 min",
  },
  {
    slug: "como-tomar-decisiones-en-un-negocio",
    title:
      "Las decisiones que están frenando tu negocio (aunque no te des cuenta)",
    excerpt:
      "Soledad, miedo, decisiones emocionales y falta de claridad estratégica. Descubre qué bloquea a los empresarios y cómo aprender a pensar con método para desbloquear tu negocio.",
    date: "13 marzo 2025",
    category: "Estrategia",
    readTime: "13 min",
  },
  {
    slug: "como-mejorar-rentabilidad-restaurante-bar",
    title:
      "Cómo mejorar la rentabilidad de tu restaurante o bar sin subir precios",
    excerpt:
      "Escandallos, costes ocultos, turnos, carta y proveedores. Guía práctica para que tu restaurante o bar gane más dinero optimizando lo que ya tienes.",
    date: "13 marzo 2025",
    category: "Rentabilidad",
    readTime: "14 min",
  },
  {
    slug: "cuando-contratar-un-consultor-de-negocios",
    title:
      "¿Cuándo merece la pena contratar un consultor de negocios?",
    excerpt:
      "Señales claras de que tu negocio necesita una mirada externa, qué esperar de una consultoría, cuánto cuesta y cómo elegir al consultor adecuado sin tirar el dinero.",
    date: "13 marzo 2025",
    category: "Estrategia",
    readTime: "12 min",
  },
  {
    slug: "por-que-tu-empresa-factura-pero-no-gana-dinero",
    title: "Por qué tu empresa factura pero no gana dinero",
    excerpt:
      "Errores habituales que destruyen la rentabilidad de las pymes, cómo calcular si tu negocio realmente gana dinero y decisiones que mejoran los beneficios rápidamente.",
    date: "13 marzo 2025",
    category: "Rentabilidad",
    readTime: "12 min",
  },
  // --- ARTÍCULOS LONG TAIL (publicación programada) ---
  {
    slug: "como-reducir-gastos-empresa-sin-recortar",
    title: "Cómo reducir gastos en tu empresa sin recortar en lo que importa",
    excerpt: "7 áreas donde las pymes malgastan dinero y cómo optimizar gastos sin cargarte la calidad ni el crecimiento.",
    date: "21 abril 2025",
    category: "Rentabilidad",
    readTime: "10 min",
    publishDate: "2025-04-21",
  },
  {
    slug: "mi-negocio-no-crece-que-hago",
    title: "Mi negocio no crece: qué hacer cuando te estancas",
    excerpt: "Señales de estancamiento, causas reales y 5 acciones concretas para salir del bloqueo y volver a crecer.",
    date: "24 abril 2025",
    category: "Crecimiento",
    readTime: "10 min",
    publishDate: "2025-04-24",
  },
  {
    slug: "cuanto-debe-ganar-el-dueno-de-un-negocio",
    title: "Cuánto debe ganar el dueño de un negocio: la pregunta incómoda",
    excerpt: "Muchos empresarios cobran menos que sus empleados. Cómo calcular tu sueldo justo y separar beneficio de compensación.",
    date: "5 mayo 2025",
    category: "Rentabilidad",
    readTime: "10 min",
    publishDate: "2025-05-05",
  },
  {
    slug: "como-delegar-tareas-sin-perder-control",
    title: "Cómo delegar tareas en tu empresa sin perder el control",
    excerpt: "Por qué no delegas, qué te cuesta no hacerlo, qué delegar primero y cómo montar un sistema de delegación real.",
    date: "19 mayo 2025",
    category: "Organización",
    readTime: "10 min",
    publishDate: "2025-05-19",
  },
  {
    slug: "como-calcular-margen-beneficio-producto",
    title: "Cómo calcular el margen de beneficio de un producto o servicio",
    excerpt: "Margen bruto vs neto, fórmulas claras, los costes que nadie incluye y qué hacer cuando un producto tiene margen negativo.",
    date: "2 junio 2025",
    category: "Rentabilidad",
    readTime: "10 min",
    publishDate: "2025-06-02",
  },
  {
    slug: "como-fidelizar-clientes-pyme",
    title: "Cómo fidelizar clientes en una pyme: estrategias que funcionan",
    excerpt: "Retener clientes cuesta 5 veces menos que conseguir nuevos. Estrategias prácticas de fidelización para pymes.",
    date: "16 junio 2025",
    category: "Clientes",
    readTime: "10 min",
    publishDate: "2025-06-16",
  },
  {
    slug: "errores-empresarios-pyme-mas-comunes",
    title: "Los 10 errores más comunes de los empresarios pyme",
    excerpt: "Los fallos de gestión que frenan a la mayoría de pymes. Identificarlos es el primer paso para evitarlos.",
    date: "7 julio 2025",
    category: "Estrategia",
    readTime: "10 min",
    publishDate: "2025-07-07",
  },
  {
    slug: "como-saber-si-mi-negocio-es-rentable",
    title: "Cómo saber si tu negocio es rentable de verdad",
    excerpt: "Facturar no es ganar. Indicadores clave de rentabilidad, punto de equilibrio y qué hacer si descubres que no eres rentable.",
    date: "21 julio 2025",
    category: "Rentabilidad",
    readTime: "10 min",
    publishDate: "2025-07-21",
  },
  {
    slug: "como-subir-precios-sin-perder-clientes",
    title: "Cómo subir precios sin perder clientes: guía para pymes",
    excerpt: "Cuándo es el momento, cómo comunicarlo y estrategias para que la subida de precios refuerce tu negocio.",
    date: "4 agosto 2025",
    category: "Rentabilidad",
    readTime: "10 min",
    publishDate: "2025-08-04",
  },
  {
    slug: "consultor-empresas-galicia-que-esperar",
    title: "Consultor de empresas en Galicia: qué esperar y cómo elegir bien",
    excerpt: "Qué puede hacer un consultor por tu negocio, qué preguntar antes de contratar y cómo sacarle el máximo partido.",
    date: "18 agosto 2025",
    category: "Estrategia",
    readTime: "10 min",
    publishDate: "2025-08-18",
  },
  {
    slug: "como-gestionar-empleados-pyme",
    title: "Cómo gestionar empleados en una pyme sin volverte loco",
    excerpt: "Contratar bien, dar feedback, gestionar conflictos y construir cultura de equipo en una empresa pequeña.",
    date: "1 septiembre 2025",
    category: "Organización",
    readTime: "10 min",
    publishDate: "2025-09-01",
  },
  {
    slug: "como-vender-mas-sin-bajar-precios",
    title: "Cómo vender más sin bajar precios",
    excerpt: "Bajar precios no es una estrategia. Vende más mejorando tu propuesta de valor, tu proceso comercial y tu seguimiento.",
    date: "15 septiembre 2025",
    category: "Clientes",
    readTime: "10 min",
    publishDate: "2025-09-15",
  },
  {
    slug: "plan-negocio-simple-una-pagina",
    title: "Plan de negocio en una página: lo único que necesitas",
    excerpt: "Olvida los planes de 50 páginas. Un plan práctico y actualizable cabe en una página. Te enseñamos cómo.",
    date: "6 octubre 2025",
    category: "Estrategia",
    readTime: "10 min",
    publishDate: "2025-10-06",
  },
  {
    slug: "automatizar-procesos-empresa-pequena",
    title: "Cómo automatizar procesos en una empresa pequeña",
    excerpt: "No necesitas ser grande para automatizar. Qué procesos priorizar, herramientas accesibles y errores a evitar.",
    date: "20 octubre 2025",
    category: "Organización",
    readTime: "10 min",
    publishDate: "2025-10-20",
  },
  {
    slug: "como-preparar-tu-empresa-para-crecer",
    title: "Cómo preparar tu empresa para crecer sin que se rompa por el camino",
    excerpt: "Crecer sin estructura es la receta para el caos. Cómo preparar tu empresa antes de dar el salto.",
    date: "3 noviembre 2025",
    category: "Crecimiento",
    readTime: "10 min",
    publishDate: "2025-11-03",
  },
  {
    slug: "como-analizar-tu-competencia",
    title: "Cómo analizar a tu competencia: guía práctica para pymes",
    excerpt: "Aprende a analizar a tu competencia de forma práctica para tomar mejores decisiones en tu negocio.",
    date: "17 noviembre 2025",
    category: "Estrategia",
    readTime: "10 min",
    publishDate: "2025-11-17",
  },
  {
    slug: "como-digitalizar-tu-negocio-pequeno",
    title: "Cómo digitalizar tu negocio pequeño sin complicarte",
    excerpt: "Digitalizar no es tener redes sociales. Es ordenar tu negocio con herramientas que ahorran tiempo y errores.",
    date: "1 diciembre 2025",
    category: "Organización",
    readTime: "10 min",
    publishDate: "2025-12-01",
  },
  {
    slug: "como-hacer-un-presupuesto-empresarial",
    title: "Cómo hacer un presupuesto empresarial: guía práctica para pymes",
    excerpt: "Un presupuesto no es una hoja de cálculo — es la herramienta que te dice si vas por buen camino o no.",
    date: "15 diciembre 2025",
    category: "Control y gestión",
    readTime: "10 min",
    publishDate: "2025-12-15",
  },
  {
    slug: "como-mejorar-el-flujo-de-caja",
    title: "Cómo mejorar el flujo de caja en tu negocio",
    excerpt: "El flujo de caja mata más empresas que la falta de ventas. Cómo controlarlo y mejorarlo desde hoy.",
    date: "12 enero 2026",
    category: "Control y gestión",
    readTime: "10 min",
    publishDate: "2026-01-12",
  },
  {
    slug: "como-motivar-equipo-trabajo-pyme",
    title: "Cómo motivar a tu equipo de trabajo en una pyme",
    excerpt: "La motivación no va de pizzas ni de futbolines. Va de claridad, autonomía y sentirse parte de algo.",
    date: "26 enero 2026",
    category: "Organización",
    readTime: "10 min",
    publishDate: "2026-01-26",
  },
  {
    slug: "cuando-cerrar-un-negocio",
    title: "Cuándo cerrar un negocio: señales que no debes ignorar",
    excerpt: "A veces la mejor decisión empresarial es cerrar. Cómo saber cuándo ha llegado ese momento.",
    date: "9 febrero 2026",
    category: "Estrategia",
    readTime: "10 min",
    publishDate: "2026-02-09",
  },
  {
    slug: "traspaso-generacional-empresa-familiar",
    title: "Traspaso generacional en la empresa familiar: cómo hacerlo bien",
    excerpt: "El 70 % de las empresas familiares no sobreviven al traspaso generacional. Cómo prepararlo para que la tuya sí.",
    date: "23 febrero 2026",
    category: "Estrategia",
    readTime: "10 min",
    publishDate: "2026-02-23",
  },
  {
    slug: "caso-exito-ferrados-transformacion-modelo-negocio",
    title: "Caso de éxito: cómo transformamos un blog con tráfico en un modelo de negocio rentable",
    excerpt: "Un portal con miles de visitas y cero ingresos. Así reconvertimos un proyecto informativo en un sistema de captación de leads para el sector forestal gallego.",
    date: "31 marzo 2026",
    category: "Caso de éxito",
    readTime: "12 min",
    publishDate: "2026-03-31",
  },
  {
    slug: "caso-exito-restaurante-rentabilidad",
    title: "Un restaurante que llenaba cada fin de semana y perdía dinero: qué encontramos y qué cambiamos",
    excerpt: "Caso real de un restaurante en Galicia que facturaba más de 10.000 € al mes y no conseguía ganar dinero. Escandallos, carta, turnos y proveedores: qué encontramos y qué cambiamos.",
    date: "4 abril 2026",
    category: "Caso de éxito",
    readTime: "12 min",
  },
  {
    slug: "redes-sociales-para-pymes",
    title: "Redes sociales para pymes: cuándo sirven, cuándo no y cuándo son una pérdida de tiempo",
    excerpt: "Análisis honesto sobre redes sociales para negocios pequeños. Cuándo invertir, cuándo no, errores que queman dinero y alternativas más rentables para captar clientes.",
    date: "4 abril 2026",
    category: "Marketing",
    readTime: "14 min",
  },
];

// Filtrar artículos por fecha de publicación (para publicación programada)
const now = new Date().toISOString().slice(0, 10);
const visiblePosts = posts.filter((p) => !("publishDate" in p) || (p as { publishDate: string }).publishDate <= now);

const categories = Object.keys(categoryColors);

export default function Blog() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pb-12 pt-32 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Artículos prácticos sobre rentabilidad, gestión y mejora de
            negocios. Sin teoría vacía — solo ideas que puedes aplicar hoy.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: Grid + Sidebar */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          {/* Columna principal - Posts */}
          <div>
            {/* Guías completas — pilares SEO */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-600 mb-4">
                Guías completas
              </h2>
              <div className="rounded-xl border-2 border-accent-200 bg-gradient-to-br from-accent-50/80 to-white p-4 md:p-5">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {visiblePosts.filter((p) => p.isPillar).map((post) => {
                    const colors = categoryColors[post.category];
                    return (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-lg border border-accent-200/60 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-accent-300"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 flex-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-600 group-hover:gap-1.5 transition-all">
                          Leer guía completa
                          <span aria-hidden="true">&rarr;</span>
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Artículos de apoyo agrupados por categoría */}
            {categories.filter((cat) => visiblePosts.some((p) => !p.isPillar && p.category === cat)).map((cat) => {
              const colors = categoryColors[cat];
              const catSlug = cat.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              const catPosts = visiblePosts.filter((p) => !p.isPillar && p.category === cat);
              return (
                <div key={cat} id={catSlug} className="mb-10 scroll-mt-24">
                  <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}>
                      {cat}
                    </span>
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {catPosts.map((post) => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={`group flex flex-col rounded-xl border bg-white p-5 shadow-sm transition-all hover:shadow-lg ${colors.border} ${colors.shadow}`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 group-hover:text-primary-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                          <span className="text-xs text-gray-400">
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                            Leer
                            <span aria-hidden="true">&rarr;</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <aside className="mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Navegación rápida por categorías */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Temas
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const colors = categoryColors[cat];
                    const postCount = visiblePosts.filter(
                      (p) => p.category === cat
                    ).length;
                    return (
                      <a
                        key={cat}
                        href={`#${cat.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${colors.bg} ${colors.text}`}
                      >
                        {cat}
                        <span className="opacity-60">({postCount})</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Índice de artículos */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Todos los artículos
                </h3>
                <nav className="mt-3 space-y-2">
                  {visiblePosts.map((post) => {
                    const colors = categoryColors[post.category];
                    return (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block rounded-lg border border-gray-100 px-3 py-2.5 transition-all hover:border-primary-200 hover:bg-primary-50/30"
                      >
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                        >
                          {post.category}
                        </span>
                        <p className="mt-1 text-xs font-semibold leading-snug text-gray-700 group-hover:text-primary-700 transition-colors">
                          {post.title}
                        </p>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-primary-900 to-primary-950 p-5 text-center shadow-md">
                <p className="text-sm font-bold text-white">
                  ¿Prefieres que lo analicemos juntos?
                </p>
                <p className="mt-2 text-xs text-primary-200 leading-relaxed">
                  30 minutos de conversación gratuita sobre tu negocio. Sin
                  compromiso.
                </p>
                <a
                  href="/diagnostico-negocio"
                  className="mt-4 inline-block w-full rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-700"
                >
                  WhatsApp directo
                </a>
              </div>

              {/* Sobre el autor */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Sobre el autor
                </h3>
                <p className="mt-3 text-sm font-semibold text-gray-900">
                  {SITE.consultant}
                </p>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  Consultor de negocios con más de 25 años de experiencia
                  ayudando a pymes en Galicia y en toda España a mejorar su
                  rentabilidad. Presencial y online.
                </p>
                <a
                  href="/experiencia-sectores-casos"
                  className="mt-3 inline-block text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  Ver experiencia y casos reales &rarr;
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Prefieres que analicemos tu negocio juntos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Cada negocio es diferente. Solicita un diagnóstico personalizado y
            descubre exactamente qué está frenando tus resultados.
          </p>
          <a
            href="/diagnostico-negocio"
            className="btn-primary mt-8 inline-block"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
