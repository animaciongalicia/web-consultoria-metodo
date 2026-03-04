import { SITE } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50 px-6 py-10">
      <div className="container-narrow text-center">
        <p className="text-sm text-gray-500">
          © {year} {SITE.name} — {SITE.consultant}
        </p>
        <p className="mt-1 text-sm text-gray-400">
          Consultoría de negocios y empresas en A Coruña y Galicia
        </p>
        <p className="mt-2 text-sm text-gray-400">
          <a
            href={`mailto:${SITE.email}`}
            className="hover:text-primary-600 transition-colors"
          >
            {SITE.email}
          </a>
          {" · "}
          <a
            href={SITE.phoneLink}
            className="hover:text-primary-600 transition-colors"
          >
            {SITE.phoneFormatted}
          </a>
        </p>
      </div>
    </footer>
  );
}
