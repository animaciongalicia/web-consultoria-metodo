import { getLatestPosts, getVisiblePosts } from "@/lib/posts";
import { SITE } from "@/lib/content";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Marketing: { bg: "bg-orange-50", text: "text-orange-700" },
  Crecimiento: { bg: "bg-rose-50", text: "text-rose-700" },
  "Control y gestión": { bg: "bg-cyan-50", text: "text-cyan-700" },
  Estrategia: { bg: "bg-amber-50", text: "text-amber-700" },
  Organización: { bg: "bg-violet-50", text: "text-violet-700" },
  Clientes: { bg: "bg-blue-50", text: "text-blue-700" },
  Rentabilidad: { bg: "bg-emerald-50", text: "text-emerald-700" },
  "Caso de éxito": { bg: "bg-teal-50", text: "text-teal-700" },
  Ventas: { bg: "bg-indigo-50", text: "text-indigo-700" },
};

export default function BlogSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  // Últimos 8 publicados, excluyendo el actual
  const latestPosts = getLatestPosts(9).filter((p) => p.slug !== currentSlug).slice(0, 8);

  // Categorías del listado completo actual con conteo
  const visiblePosts = getVisiblePosts();
  const categories = Array.from(new Set(visiblePosts.map((p) => p.category)));

  return (
    <aside className="space-y-8">
      {/* Temas */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
          Temas
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const colors = categoryColors[cat] || {
              bg: "bg-gray-50",
              text: "text-gray-600",
            };
            const count = visiblePosts.filter((p) => p.category === cat).length;
            return (
              <a
                key={cat}
                href="/blog"
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${colors.bg} ${colors.text}`}
              >
                {cat}
                <span className="opacity-60">({count})</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Últimos publicados */}
      <div className="rounded-xl border-2 border-accent-200 bg-gradient-to-br from-accent-50/60 to-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-accent-700">
          Últimos publicados
        </h3>
        <nav className="mt-4 space-y-3">
          {latestPosts.map((post) => {
            const colors = categoryColors[post.category] || {
              bg: "bg-gray-50",
              text: "text-gray-600",
            };
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-lg border border-accent-100 bg-white p-3 transition-all hover:border-accent-300 hover:bg-accent-50/40"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-gray-800 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </p>
              </a>
            );
          })}
          <a
            href="/blog"
            className="inline-block text-xs font-semibold text-accent-700 hover:text-accent-800 transition-colors"
          >
            Ver todos los artículos →
          </a>
        </nav>
      </div>

      {/* Páginas destacadas */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
          Páginas destacadas
        </h3>
        <nav className="mt-4 space-y-2">
          <a
            href="/consultor-empresas-coruna"
            className="group flex items-center gap-2 rounded-lg border border-gray-100 p-3 transition-all hover:border-primary-200 hover:bg-primary-50/30"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">📍</span>
            <span className="text-sm font-semibold leading-snug text-gray-800 group-hover:text-primary-700 transition-colors">
              Consultor de empresas en A Coruña
            </span>
          </a>
          <a
            href="/consultoria-empresarial-galicia"
            className="group flex items-center gap-2 rounded-lg border border-gray-100 p-3 transition-all hover:border-primary-200 hover:bg-primary-50/30"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">🗺️</span>
            <span className="text-sm font-semibold leading-snug text-gray-800 group-hover:text-primary-700 transition-colors">
              Consultoría empresarial en Galicia
            </span>
          </a>
          <a
            href="/diagnostico-negocio"
            className="group flex items-center gap-2 rounded-lg border border-gray-100 p-3 transition-all hover:border-accent-200 hover:bg-accent-50/30"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-700">🔍</span>
            <span className="text-sm font-semibold leading-snug text-gray-800 group-hover:text-accent-700 transition-colors">
              Diagnóstico gratuito de tu negocio
            </span>
          </a>
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
          tomar mejores decisiones. Presencial y por videollamada.
        </p>
        <a
          href="/experiencia-sectores-casos"
          className="mt-3 inline-block text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
        >
          Ver experiencia y casos reales &rarr;
        </a>
      </div>
    </aside>
  );
}
