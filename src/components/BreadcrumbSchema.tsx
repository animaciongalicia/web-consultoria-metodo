/**
 * Emite JSON-LD BreadcrumbList según spec de Google:
 * https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 *
 * NO renderiza migas visibles — solo el schema. Google acepta el JSON-LD sin
 * migas visibles y las mostrará como ruta en las SERPs.
 *
 * Uso:
 *   <BreadcrumbSchema items={[
 *     { name: "Inicio", url: "https://consultoriametodo.es" },
 *     { name: "Blog",   url: "https://consultoriametodo.es/blog" },
 *     { name: "Título del post",  url: "https://consultoriametodo.es/blog/slug" },
 *   ]} />
 *
 * El último elemento debe ser la página actual y su URL debe ser absoluta.
 */

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export default function BreadcrumbSchema({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
