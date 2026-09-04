import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || "info@consultoriametodo.es";
// Sender validado en Resend. Fallback al onboarding@resend.dev si no se define
// (permite testing sin dominio verificado, pero solo enviaría al email del propietario de la API).
const CONTACT_FROM =
  process.env.CONTACT_FROM || "Consultoría Método <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      business,
      email,
      phone,
      message,
      source = "web",
    }: {
      name?: string;
      business?: string;
      email?: string;
      phone?: string;
      message?: string;
      source?: string;
    } = body;

    // Validación mínima
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios (nombre, email, mensaje)" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "El email no es válido" },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nuevo contacto desde consultoriametodo.es</h2>
      <p><strong>Origen:</strong> ${escapeHtml(source)}</p>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      ${business ? `<p><strong>Negocio:</strong> ${escapeHtml(business)}</p>` : ""}
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ""}
      <hr />
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `;

    if (!RESEND_API_KEY) {
      // Sin API key configurada — no se envía email pero no queremos devolver
      // error al usuario. Registramos en el servidor para no perder el lead.
      console.warn("[contact] RESEND_API_KEY no configurada. Lead recibido:", {
        name,
        business,
        email,
        phone,
        message,
        source,
      });
      return NextResponse.json({
        success: true,
        warning: "email_service_not_configured",
      });
    }

    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `Nuevo contacto web · ${name}${business ? ` (${business})` : ""}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unhandled error:", err);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
