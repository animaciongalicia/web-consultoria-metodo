import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — Consultoría Método",
  description:
    "Política de privacidad y protección de datos de Consultoría Método. Información sobre el tratamiento de datos personales conforme al RGPD.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://consultoriametodo.es/politica-privacidad",
  },
};

export default function PoliticaPrivacidad() {
  return (
    <section className="section-padding bg-white pt-32 lg:pt-40">
      <div className="container-narrow prose prose-gray mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
          Política de privacidad y protección de datos
        </h1>

        <h2>Responsable del tratamiento</h2>
        <ul>
          <li>
            <strong>Responsable:</strong> Inversiones SHISO SL
          </li>
          <li>
            <strong>CIF:</strong> B70319223
          </li>
          <li>
            <strong>Domicilio:</strong> Ronda de Montealto 4, 5A — 15002 A
            Coruña
          </li>
          <li>
            <strong>Email de contacto:</strong>{" "}
            <a href="mailto:info@consultoriametodo.es">
              info@consultoriametodo.es
            </a>
          </li>
        </ul>

        <h2>Finalidad del tratamiento de datos</h2>
        <p>
          En Consultoría Método tratamos los datos personales que nos facilitas
          con las siguientes finalidades:
        </p>
        <ul>
          <li>
            Responder a consultas o solicitudes de información realizadas a
            través del email, teléfono o WhatsApp.
          </li>
          <li>
            Gestionar la relación comercial y la prestación de servicios de
            consultoría contratados.
          </li>
          <li>
            Enviar comunicaciones comerciales únicamente cuando exista
            consentimiento expreso del interesado.
          </li>
        </ul>

        <h2>Legitimación</h2>
        <p>
          La base legal para el tratamiento de tus datos es el consentimiento del
          interesado y, en su caso, la ejecución de un contrato de prestación de
          servicios. Cuando nos contactas por email, teléfono o WhatsApp,
          entendemos que consientes el tratamiento de tus datos para responder a
          tu consulta.
        </p>

        <h2>Destinatarios</h2>
        <p>
          Tus datos no serán cedidos a terceros, salvo obligación legal o cuando
          sea necesario para la prestación del servicio contratado (por ejemplo,
          plataformas de videollamada para reuniones online).
        </p>

        <h2>Conservación de datos</h2>
        <p>
          Los datos personales se conservarán mientras se mantenga la relación
          comercial o durante el tiempo necesario para cumplir con las
          obligaciones legales aplicables. Una vez finalizada la relación, los
          datos se conservarán bloqueados durante los plazos de prescripción
          legal.
        </p>

        <h2>Derechos del interesado</h2>
        <p>
          Puedes ejercer los siguientes derechos en cualquier momento enviando un
          email a{" "}
          <a href="mailto:info@consultoriametodo.es">
            info@consultoriametodo.es
          </a>
          :
        </p>
        <ul>
          <li>
            <strong>Acceso:</strong> conocer qué datos personales tuyos
            tratamos.
          </li>
          <li>
            <strong>Rectificación:</strong> modificar datos inexactos o
            incompletos.
          </li>
          <li>
            <strong>Supresión:</strong> solicitar la eliminación de tus datos
            cuando ya no sean necesarios.
          </li>
          <li>
            <strong>Oposición:</strong> oponerte al tratamiento de tus datos en
            determinadas circunstancias.
          </li>
          <li>
            <strong>Limitación:</strong> solicitar que se limite el tratamiento
            de tus datos.
          </li>
          <li>
            <strong>Portabilidad:</strong> recibir tus datos en un formato
            estructurado.
          </li>
        </ul>
        <p>
          Asimismo, tienes derecho a presentar una reclamación ante la Agencia
          Española de Protección de Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ) si consideras que tus derechos no han sido debidamente atendidos.
        </p>

        <h2>Seguridad</h2>
        <p>
          Inversiones SHISO SL adopta las medidas técnicas y organizativas
          necesarias para garantizar la seguridad de los datos personales y
          evitar su alteración, pérdida, tratamiento o acceso no autorizado.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Última actualización: mayo 2026
        </p>
      </div>
    </section>
  );
}
