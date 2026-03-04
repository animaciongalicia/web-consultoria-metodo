import { HERO, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section-padding bg-gradient-to-b from-primary-50/50 to-white pt-32 lg:pt-40"
    >
      <div className="container-narrow">
        <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          {HERO.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          {HERO.subtitle}
        </p>

        <ul className="mt-8 space-y-3">
          {HERO.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contacto" className="btn-primary">
            {HERO.ctaPrimary}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            {HERO.ctaWhatsapp}
          </a>
          <a href={SITE.phoneLink} className="btn-outline">
            {HERO.ctaPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
