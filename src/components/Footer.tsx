import { NAV_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-800 bg-primary-950 px-6 py-10">
      <div className="container-narrow">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/diagnostico-negocio"
            className="text-sm text-primary-400 transition-colors hover:text-white"
          >
            Diagnóstico
          </a>
        </nav>

        <div className="mt-6 text-center">
          <p className="text-sm text-primary-300">
            © {year} {SITE.name} — {SITE.consultant}
          </p>
          <p className="mt-1 text-sm text-primary-400">{SITE.address}</p>
          <p className="mt-1 text-sm text-primary-400">
            Consultoría de negocios y empresas en A Coruña y Galicia
          </p>
          <p className="mt-2 text-sm text-primary-400">
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-white"
            >
              {SITE.email}
            </a>
            {" · "}
            <a
              href={SITE.phoneLink}
              className="transition-colors hover:text-white"
            >
              {SITE.phoneFormatted}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
