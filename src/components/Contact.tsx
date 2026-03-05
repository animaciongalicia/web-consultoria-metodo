"use client";

import { useState } from "react";
import { CONTACT, SITE } from "@/lib/content";

export default function Contact() {
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
    <section id="contacto" className="section-padding bg-primary-900">
      <div className="container-narrow">
        <h2 className="section-heading text-white">
          {CONTACT.heading}
        </h2>
        <p className="section-subtitle text-primary-200">{CONTACT.text}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
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

        <div className="mx-auto mt-14 max-w-xl rounded-xl bg-white p-8 shadow-xl">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            {CONTACT.formTitle}
          </h3>

          {status === "sent" ? (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6">
              <p className="font-medium text-green-800">
                {CONTACT.successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {CONTACT.formFields.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700">
                  {CONTACT.formFields.business}
                </label>
                <input
                  type="text"
                  id="business"
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {CONTACT.formFields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {CONTACT.formFields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {CONTACT.formFields.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : CONTACT.submitButton}
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
