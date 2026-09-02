import { NAV_LINKS, SITE } from "@/lib/content";

const AREA_LINKS = [
  { label: "Hostelería y restauración", href: "/consultoria-hosteleria-restauracion" },
  { label: "Comercio y retail", href: "/consultoria-comercio-retail" },
  { label: "Servicios profesionales", href: "/consultoria-servicios-profesionales" },
  { label: "Salud y bienestar", href: "/consultoria-salud-bienestar" },
  { label: "Formación, turismo y eventos", href: "/consultoria-formacion-turismo-eventos" },
  { label: "Coaching empresarial", href: "/coaching-empresarial-coruna-galicia" },
];

const PROVINCE_LINKS = [
  { label: "A Coruña", href: "/consultor-empresas-coruna" },
  { label: "Lugo", href: "/consultor-empresas-lugo" },
  { label: "Ourense", href: "/consultor-empresas-ourense" },
  { label: "Pontevedra", href: "/consultor-empresas-pontevedra" },
];

const LEGAL_LINKS = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Protección de datos", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-800 bg-primary-950 px-6 py-12">
      <div className="container-narrow">
        {/* Columnas */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Marca */}
          <div>
            <p className="text-lg font-bold text-white">{SITE.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-400">
              Consultoría empresarial presencial en Galicia y por videollamada
              en el resto de España.
            </p>
          </div>

          {/* Col 2 — Navegación */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Navegación
            </p>
            <nav className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Áreas */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Áreas
            </p>
            <nav className="mt-3 flex flex-col gap-2">
              {AREA_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4 — Provincias */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Provincias
            </p>
            <nav className="mt-3 flex flex-col gap-2">
              {PROVINCE_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 border-t border-primary-800/50 pt-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-primary-300">
              © {year} {SITE.name} — {SITE.consultant}
            </p>
            <p className="text-sm text-primary-400">
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
              {" · "}
              <a
                href={SITE.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Ver ficha en Google
              </a>
            </p>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-primary-500 transition-colors hover:text-primary-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
