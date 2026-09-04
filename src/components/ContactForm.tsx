"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  source = "contacto",
  submitLabel = "Enviar mensaje",
  compact = false,
}: {
  source?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam
    if (data.get("website")) {
      setState("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (data.get("name") as string)?.trim(),
          business: (data.get("business") as string)?.trim(),
          email: (data.get("email") as string)?.trim(),
          phone: (data.get("phone") as string)?.trim(),
          message: (data.get("message") as string)?.trim(),
          source,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setState("error");
        setErrorMsg(json.error || "No se pudo enviar el mensaje.");
        return;
      }
      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMsg(
        "Ha habido un problema de conexión. Vuelve a intentarlo o escríbenos por WhatsApp."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary-900">
          Mensaje enviado
        </h3>
        <p className="mt-3 text-gray-700">
          Gracias por contactar. Te responderemos en un plazo máximo de 24
          horas laborables, normalmente antes.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Si es urgente, puedes escribirnos por WhatsApp o llamar al 678 288 284.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200";

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto max-w-xl rounded-2xl bg-white p-6 text-left shadow-lg md:p-8 ${
        compact ? "" : ""
      }`}
    >
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-600"
          >
            Nombre <span className="text-accent-600">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className={`mt-1.5 ${inputClass}`}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="cf-business"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-600"
          >
            Negocio o empresa
          </label>
          <input
            id="cf-business"
            type="text"
            name="business"
            autoComplete="organization"
            className={`mt-1.5 ${inputClass}`}
            placeholder="Nombre de tu negocio"
          />
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-600"
          >
            Email <span className="text-accent-600">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className={`mt-1.5 ${inputClass}`}
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="cf-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-600"
          >
            Teléfono
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            className={`mt-1.5 ${inputClass}`}
            placeholder="Tu teléfono"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="cf-message"
          className="block text-xs font-semibold uppercase tracking-wider text-gray-600"
        >
          ¿Qué te gustaría mejorar?{" "}
          <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className={`mt-1.5 ${inputClass}`}
          placeholder="Cuéntanos brevemente qué te está pasando en tu negocio o qué te gustaría mejorar."
        />
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Al enviar aceptas nuestra{" "}
        <a
          href="/politica-privacidad"
          className="underline hover:text-primary-700"
        >
          política de privacidad
        </a>
        . No compartimos tus datos con nadie.
      </p>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-5 w-full rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {state === "submitting" ? "Enviando…" : submitLabel}
      </button>

      {state === "error" && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
