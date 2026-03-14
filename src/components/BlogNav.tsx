import { getAdjacentPosts } from "@/lib/blog";

export default function BlogNav({ currentSlug }: { currentSlug: string }) {
  const { prev, next } = getAdjacentPosts(currentSlug);

  if (!prev && !next) return null;

  return (
    <section className="border-t border-gray-200 bg-white py-10 px-6 md:px-8">
      <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
        {prev ? (
          <a
            href={`/blog/${prev.slug}`}
            className="group flex flex-col rounded-xl border border-gray-200 p-5 transition-all hover:border-primary-300 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              &larr; Artículo anterior
            </span>
            <span className="mt-2 text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug">
              {prev.title}
            </span>
          </a>
        ) : (
          <div />
        )}
        {next ? (
          <a
            href={`/blog/${next.slug}`}
            className="group flex flex-col rounded-xl border border-gray-200 p-5 text-right transition-all hover:border-primary-300 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Artículo siguiente &rarr;
            </span>
            <span className="mt-2 text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug">
              {next.title}
            </span>
          </a>
        ) : (
          <div />
        )}
      </div>
      <div className="mx-auto mt-6 max-w-3xl text-center">
        <a
          href="/blog"
          className="text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
        >
          Ver todos los artículos
        </a>
      </div>
    </section>
  );
}
