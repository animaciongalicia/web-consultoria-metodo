import { FREE_CALL, SITE } from "@/lib/content";

export default function FreeCall() {
  return (
    <section className="section-padding bg-accent-50 border-y border-accent-200">
      <div className="container-narrow text-center">
        <h2 className="section-heading text-gray-900">
          {FREE_CALL.heading}
        </h2>
        <p className="section-subtitle text-gray-600">
          {FREE_CALL.text}
        </p>

        <ul className="mx-auto mt-8 max-w-xl space-y-3 text-left">
          {FREE_CALL.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
              {bullet}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-xl text-sm text-gray-500 italic">
          {FREE_CALL.note}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contacto" className="btn-primary">
            {FREE_CALL.cta}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
