export const BLOG_POSTS = [
  {
    slug: "por-que-no-funciona-la-publicidad-en-mi-negocio",
    title: "Por qué muchas empresas tiran el dinero en marketing",
    category: "Marketing",
  },
  {
    slug: "como-hacer-crecer-una-empresa-pequena",
    title: "Tu empresa está estancada: cómo volver a crecer",
    category: "Crecimiento",
  },
  {
    slug: "indicadores-clave-de-una-empresa",
    title: "Qué números debe controlar cualquier empresa",
    category: "Control y gestión",
  },
  {
    slug: "como-tomar-decisiones-en-un-negocio",
    title: "Las decisiones que están frenando tu negocio",
    category: "Estrategia",
  },
  {
    slug: "como-organizar-empresa-pequena-salir-autoempleo",
    title: "Cómo salir del autoempleo y organizar tu empresa",
    category: "Organización",
  },
  {
    slug: "como-conseguir-clientes-para-tu-negocio",
    title: "Cómo conseguir más clientes para tu negocio",
    category: "Clientes",
  },
  {
    slug: "por-que-tu-empresa-factura-pero-no-gana-dinero",
    title: "Por qué tu empresa factura pero no gana dinero",
    category: "Rentabilidad",
  },
  {
    slug: "como-fijar-precios-en-tu-negocio",
    title: "Cómo fijar precios en tu negocio sin perder clientes ni margen",
    category: "Estrategia",
  },
  {
    slug: "como-mejorar-rentabilidad-restaurante-bar",
    title: "Cómo mejorar la rentabilidad de un restaurante o bar",
    category: "Rentabilidad",
  },
  {
    slug: "como-diferenciarte-de-tu-competencia",
    title: "Cómo diferenciarte de tu competencia cuando todos venden lo mismo",
    category: "Estrategia",
  },
  {
    slug: "problemas-de-liquidez-en-pymes",
    title: "Problemas de liquidez en pymes: por qué facturas pero nunca hay dinero",
    category: "Control y gestión",
  },
  {
    slug: "cuando-contratar-un-consultor-de-negocios",
    title: "Cuándo contratar un consultor de negocios (y cuándo no)",
    category: "Estrategia",
  },
];

export function getAdjacentPosts(currentSlug: string) {
  const index = BLOG_POSTS.findIndex((p) => p.slug === currentSlug);
  return {
    prev: index > 0 ? BLOG_POSTS[index - 1] : null,
    next: index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null,
  };
}
