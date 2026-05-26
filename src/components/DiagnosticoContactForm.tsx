import { SITE } from "@/lib/content";

export default function DiagnosticoContactForm() {
  const subject = encodeURIComponent("Solicitud de diagnóstico de negocio");
  const body = encodeURIComponent(
    "Hola,\n\nMe interesa solicitar un diagnóstico de mi negocio.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
  );
  const mailtoLink = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return (
    <section id="contacto-diagnostico" className="section-padding bg-primary-900">
      <div className="container-narrow text-center">
        <h2 className="section-heading text-white">
          Si quieres mejorar tu negocio, el primer paso es entender qué está pasando
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-primary-200">
          <p className="md:text-lg">
            En muchos casos, en una sola reunión ya aparecen con claridad varios problemas
            del negocio que no se estaban viendo.
          </p>
          <p className="md:text-lg">
            Un diagnóstico claro suele revelar rápidamente dónde están las oportunidades
            de mejora.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={mailtoLink} className="btn-primary">
            Solicitar diagnóstico por email
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Hablar por WhatsApp
          </a>
          <a href={SITE.phoneLink} className="btn-outline-light">
            Llamar ahora
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white/10 p-6">
          <p className="text-primary-200">
            Al pulsar <strong className="text-white">&ldquo;Solicitar diagnóstico por email&rdquo;</strong> se
            abrirá tu aplicación de correo con un mensaje preparado. Solo rellena tus datos y envíalo.
          </p>
        </div>
      </div>
    </section>
  );
}
