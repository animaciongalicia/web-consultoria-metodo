import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies — Consultoría Método",
  description:
    "Política de cookies de Consultoría Método. Información sobre las cookies utilizadas en consultoriametodo.es.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://consultoriametodo.es/politica-cookies",
  },
};

export default function PoliticaCookies() {
  return (
    <section className="section-padding bg-white pt-32 lg:pt-40">
      <div className="container-narrow prose prose-gray mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
          Política de cookies
        </h1>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          navegador cuando visitas un sitio web. Sirven para recordar
          preferencias, analizar el uso del sitio y mejorar la experiencia de
          navegación.
        </p>

        <h2>¿Qué cookies utiliza este sitio web?</h2>
        <p>
          En consultoriametodo.es utilizamos los siguientes tipos de cookies:
        </p>

        <h3>Cookies analíticas (Google Analytics 4)</h3>
        <p>
          Utilizamos Google Analytics 4 (propiedad de Google LLC) para analizar
          el tráfico y el comportamiento de los usuarios en el sitio web. Estas
          cookies nos permiten conocer datos como el número de visitas, las
          páginas más consultadas, la procedencia de los visitantes y el tiempo
          de permanencia.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Proveedor</th>
              <th>Duración</th>
              <th>Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google</td>
              <td>2 años</td>
              <td>Distinguir usuarios únicos</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Google</td>
              <td>2 años</td>
              <td>Mantener el estado de la sesión</td>
            </tr>
          </tbody>
        </table>
        <p>
          Google puede transferir esta información a terceros cuando así lo exija
          la ley o cuando terceros traten la información por cuenta de Google.
          Puedes consultar la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            política de privacidad de Google
          </a>{" "}
          para más información.
        </p>

        <h3>Cookies técnicas</h3>
        <p>
          Este sitio web no utiliza cookies técnicas propias ni cookies de
          personalización. No se utilizan cookies publicitarias ni de
          remarketing.
        </p>

        <h2>¿Cómo desactivar las cookies?</h2>
        <p>
          Puedes configurar tu navegador para rechazar todas las cookies o para
          recibir un aviso cuando se envía una cookie. A continuación, los
          enlaces de configuración de los navegadores más habituales:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Ten en cuenta que si desactivas las cookies, algunas funcionalidades
          del sitio web podrían no estar disponibles.
        </p>

        <h2>Titular del sitio web</h2>
        <ul>
          <li>
            <strong>Titular:</strong> Inversiones SHISO SL
          </li>
          <li>
            <strong>CIF:</strong> B70319223
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@consultoriametodo.es">
              info@consultoriametodo.es
            </a>
          </li>
        </ul>

        <p className="mt-8 text-sm text-gray-500">
          Última actualización: mayo 2026
        </p>
      </div>
    </section>
  );
}
