import { SITE } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function DiagnosticoContactForm() {
  return (
    <section
      id="contacto-diagnostico"
      className="section-padding bg-primary-900"
    >
      <div className="container-narrow text-center">
        <h2 className="section-heading text-white">
          Si quieres mejorar tu negocio, el primer paso es entender qué está
          pasando
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-primary-200">
          <p className="md:text-lg">
            En muchos casos, en una sola reunión ya aparecen con claridad varios
            problemas del negocio que no se estaban viendo.
          </p>
          <p className="md:text-lg">
            Rellena el formulario y te llamamos para agendar tu primera
            conversación gratuita — 30 minutos, sin compromiso.
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            source="diagnostico-negocio"
            submitLabel="Solicitar diagnóstico gratuito"
          />
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
