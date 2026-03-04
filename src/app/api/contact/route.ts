import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, business, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // TODO: Integrar con un servicio de email real (SendGrid, Resend, Nodemailer, etc.)
    // Por ahora, se registra en la consola del servidor.
    // Para producción, enviar a info@consultoriametodo.com
    console.log("--- Nuevo contacto desde la web ---");
    console.log("Nombre:", name);
    console.log("Negocio:", business);
    console.log("Email:", email);
    console.log("Teléfono:", phone);
    console.log("Mensaje:", message);
    console.log("-----------------------------------");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
