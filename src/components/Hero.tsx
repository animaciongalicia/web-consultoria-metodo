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
        <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-100/90 md:text-xl">
          {HERO.subtitleLine1}
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-primary-100/90 md:text-xl">
          {HERO.subtitleLine2}
        </p>

        <div className="mx-auto mt-8 max-w-3xl space-y-2 text-center text-primary-100/90">
          <p>
            {HERO.bullets[0]}<span className="mx-3 text-accent-400">—</span>{HERO.bullets[1]}
          </p>
          <p>
            {HERO.bullets[2]}<span className="mx-3 text-accent-400">—</span>{HERO.bullets[3]}
          </p>
        </div>

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
