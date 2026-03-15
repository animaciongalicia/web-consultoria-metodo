import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/content";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Marketing: { bg: "bg-orange-50", text: "text-orange-700" },
  Crecimiento: { bg: "bg-rose-50", text: "text-rose-700" },
  "Control y gestión": { bg: "bg-cyan-50", text: "text-cyan-700" },
  Estrategia: { bg: "bg-amber-50", text: "text-amber-700" },
  Organización: { bg: "bg-violet-50", text: "text-violet-700" },
  Clientes: { bg: "bg-blue-50", text: "text-blue-700" },
  Rentabilidad: { bg: "bg-emerald-50", text: "text-emerald-700" },
};

export default function BlogSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  return (
    <aside className="space-y-8">
      {/* Otros artículos */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
          Más artículos
        </h3>
        <nav className="mt-4 space-y-3">
          {otherPosts.map((post) => {
            const colors = categoryColors[post.category] || {
              bg: "bg-gray-50",
              text: "text-gray-600",
            };
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-lg border border-gray-100 p-3 transition-all hover:border-primary-200 hover:bg-primary-50/30"
              >
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                >
                  {post.category}
                </span>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-gray-800 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </p>
              </a>
            );
          })}
        </nav>
      </div>

      {/* CTA Sidebar */}
      <div className="rounded-xl bg-gradient-to-br from-primary-900 to-primary-950 p-5 text-center shadow-md">
        <p className="text-sm font-bold text-white">
          ¿Necesitas ayuda con tu negocio?
        </p>
        <p className="mt-2 text-xs text-primary-200 leading-relaxed">
          30 minutos de conversación gratuita. Sin compromiso, sin presión.
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

      {/* Sobre el consultor */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
          Sobre el autor
        </h3>
        <p className="mt-3 text-sm font-semibold text-gray-900">
          {SITE.consultant}
        </p>
        <p className="mt-1 text-xs text-gray-500 leading-relaxed">
          Consultor de negocios con más de 25 años de experiencia ayudando a
          pymes en Galicia y en toda España a mejorar su rentabilidad y
          tomar mejores decisiones. Presencial y online.
        </p>
        <a
          href="/"
          className="mt-3 inline-block text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
        >
          Conocer más &rarr;
        </a>
      </div>
    </aside>
  );
}
