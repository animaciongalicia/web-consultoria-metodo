import { HERO, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40"
    >
      <div className="container-narrow text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
          {HERO.h1}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90 md:text-xl">
          {HERO.subtitle}
        </p>

        <ul className="mx-auto mt-8 max-w-xl space-y-3 text-left">
          {HERO.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-primary-100">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
          <a href={SITE.phoneLink} className="btn-outline-light">
            {HERO.ctaPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
