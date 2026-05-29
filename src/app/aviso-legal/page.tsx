import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal — Consultoría Método",
  description:
    "Aviso legal de Consultoría Método. Datos identificativos, condiciones generales de uso y propiedad intelectual.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://consultoriametodo.es/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <section className="section-padding bg-white pt-32 lg:pt-40">
      <div className="container-narrow prose prose-gray mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
          Aviso legal
        </h1>

        <h2>Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se informa al usuario de los siguientes datos:
        </p>
        <ul>
          <li>
            <strong>Titular:</strong> Inversiones SHISO SL
          </li>
          <li>
            <strong>CIF:</strong> B70319223
          </li>
          <li>
            <strong>Domicilio social:</strong> Ronda de Montealto 4, 5A — 15002
            A Coruña
          </li>
          <li>
            <strong>Nombre comercial:</strong> Consultoría Método
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@consultoriametodo.es">
              info@consultoriametodo.es
            </a>
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+34678288284">678 288 284</a>
          </li>
        </ul>

        <h2>Objeto y ámbito de aplicación</h2>
        <p>
          El presente aviso legal regula el uso del sitio web
          consultoriametodo.es, del que es titular Inversiones SHISO SL. La
          navegación por el sitio web atribuye la condición de usuario e implica
          la aceptación plena y sin reservas de todas y cada una de las
          disposiciones incluidas en este aviso legal.
        </p>

        <h2>Propiedad intelectual e industrial</h2>
        <p>
          El sitio web, incluyendo a título enunciativo pero no limitativo su
          programación, diseño, textos, gráficos, logotipos, iconos y demás
          contenidos, es propiedad de Inversiones SHISO SL o, en su caso, de
          terceros que han autorizado su uso. Todos los contenidos del sitio web
          se encuentran protegidos por las normas de propiedad intelectual e
          industrial vigentes.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, comunicación pública,
          transformación o cualquier otra actividad que se pueda realizar con los
          contenidos de esta web sin la autorización previa y por escrito de
          Inversiones SHISO SL.
        </p>

        <h2>Condiciones de uso</h2>
        <p>
          El usuario se compromete a hacer un uso adecuado de los contenidos y
          servicios que ofrece este sitio web y a no emplearlos para actividades
          ilícitas o contrarias a la buena fe y al ordenamiento legal vigente.
        </p>

        <h2>Exclusión de responsabilidad</h2>
        <p>
          Inversiones SHISO SL no se hace responsable de los daños y perjuicios
          de cualquier naturaleza que pudieran derivarse de la falta de
          disponibilidad o continuidad del funcionamiento del sitio web, ni de
          los contenidos de otros sitios web a los que se pueda acceder a través
          de enlaces desde este sitio.
        </p>

        <h2>Legislación aplicable y jurisdicción</h2>
        <p>
          Para la resolución de cualquier controversia que pudiera surgir en
          relación con el uso de este sitio web, se aplicará la legislación
          española, siendo competentes los Juzgados y Tribunales de A Coruña.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Última actualización: mayo 2026
        </p>
      </div>
    </section>
  );
}
