"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";

export default function DiagnosticoContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", business: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Hablar por WhatsApp
          </a>
          <a href={SITE.phoneLink} className="btn-outline-light">
            Llamar ahora
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-8 text-left shadow-xl">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            Solicitar diagnóstico
          </h3>

          {status === "sent" ? (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6">
              <p className="font-medium text-green-800">
                Mensaje enviado correctamente. Me pondré en contacto contigo lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="diag-name" className="block text-sm font-medium text-gray-700">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="diag-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="diag-business" className="block text-sm font-medium text-gray-700">
                  Nombre de tu negocio
                </label>
                <input
                  type="text"
                  id="diag-business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="diag-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="diag-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="diag-phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="diag-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="diag-message" className="block text-sm font-medium text-gray-700">
                  ¿Qué te gustaría mejorar en tu negocio?
                </label>
                <textarea
                  id="diag-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Solicitar diagnóstico"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Ha ocurrido un error. Inténtalo de nuevo o contacta directamente por WhatsApp o teléfono.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
