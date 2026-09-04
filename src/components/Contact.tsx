import { CONTACT, SITE, URGENCY } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary-900">
      <div className="container-narrow text-center">
        <h2 className="section-heading text-white">{CONTACT.heading}</h2>
        <p className="section-subtitle text-primary-200">{CONTACT.text}</p>

        <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-accent-300">
          {URGENCY.text}
        </p>

        <div className="mt-10">
          <ContactForm source="contacto-home" submitLabel="Enviar mensaje" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-primary-200 sm:flex-row sm:justify-center sm:gap-6">
          <span className="text-sm">¿Prefieres directo?</span>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            💬 WhatsApp
          </a>
          <a
            href={SITE.phoneLink}
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            📞 {SITE.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
