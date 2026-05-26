import { CONTACT, SITE, URGENCY } from "@/lib/content";

export default function Contact() {
  const subject = encodeURIComponent("Consulta desde consultoriametodo.es");
  const body = encodeURIComponent(
    "Hola,\n\nMe gustaría mejorar mi negocio y me interesa vuestra consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
  );
  const mailtoLink = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return (
    <section id="contacto" className="section-padding bg-primary-900">
      <div className="container-narrow text-center">
        <h2 className="section-heading text-white">
          {CONTACT.heading}
        </h2>
        <p className="section-subtitle text-primary-200">{CONTACT.text}</p>

        <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-accent-300">
          {URGENCY.text}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={mailtoLink} className="btn-primary">
            Enviar email
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Hablar por WhatsApp
          </a>
          <a href={SITE.phoneLink} className="btn-outline-light">
            Llamar ahora
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white/10 p-6">
          <p className="text-primary-200">
            Al pulsar <strong className="text-white">&ldquo;Enviar email&rdquo;</strong> se abrirá
            tu aplicación de correo (Outlook, Gmail, etc.) con un mensaje preparado. Solo tendrás
            que rellenar tus datos y enviarlo.
          </p>
        </div>
      </div>
    </section>
  );
}
