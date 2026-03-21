import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Los 10 errores más comunes de los empresarios pyme | Consultoría Método",
  description:
    "Descubre los errores que frenan a la mayoría de pymes y cómo evitarlos. Consultoría empresarial en Coruña, Galicia y online.",
  keywords: [
    "errores empresarios pyme",
    "errores comunes dueños negocio",
    "fallos gestión pyme",
    "por qué fracasan las pymes",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "mejora de empresas",
  ],
  openGraph: {
    title:
      "Los 10 errores más comunes de los empresarios pyme",
    description:
      "Estos fallos frenan a la mayoría de pequeños negocios. Descubre cuáles son y cómo corregirlos antes de que sea tarde.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/errores-empresarios-pyme-mas-comunes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Los 10 errores más comunes de los empresarios pyme",
  description:
    "Estos fallos frenan a la mayoría de pequeños negocios. Descubre cuáles son y cómo corregirlos antes de que sea tarde.",
  author: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  publisher: {
    "@type": "Organization",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  datePublished: "2025-07-07",
  dateModified: "2025-07-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/errores-empresarios-pyme-mas-comunes",
  },
};

export default function ArticuloErroresEmpresarios() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Blog — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Los 10 errores más comunes de los empresarios pyme
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Después de años trabajando con dueños de pequeños negocios, he
            identificado un patrón que se repite una y otra vez. Los mismos
            errores, en sectores completamente diferentes. Y lo peor: la
            mayoría son evitables.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            online en toda España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Si tienes una pyme, probablemente estés cometiendo al menos tres
            de estos errores ahora mismo. No es un reproche — es una
            realidad que veo cada semana en mis sesiones de consultoría
            empresarial en Coruña y con clientes de toda España. La buena
            noticia es que reconocerlos es el primer paso para corregirlos.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;El empresario pyme no fracasa por falta de esfuerzo.
            Fracasa por repetir patrones que parecen lógicos pero que le
            alejan de los resultados.&rdquo;
          </blockquote>

          {/* Error 1 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 1: No conocer tus números
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es el error más extendido y el más peligroso. Muchos dueños de
            negocio saben cuánto facturan, pero no cuánto ganan. No conocen
            su margen real por producto o servicio. No saben cuánto les
            cuesta cada cliente. No tienen ni idea de su punto de equilibrio.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Gestionar una empresa sin números es como conducir de noche con
            los faros apagados. Puedes tener suerte un tiempo, pero tarde o
            temprano te sales de la carretera. Si quieres profundizar en
            qué indicadores deberías controlar, te recomiendo leer{" "}
            <a
              href="/blog/indicadores-clave-de-una-empresa"
              className="text-accent-600 underline hover:text-accent-700"
            >
              los indicadores clave que todo empresario debería vigilar
            </a>.
          </p>

          {/* Error 2 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 2: Hacerlo todo tú solo
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El dueño que atiende clientes, hace facturas, gestiona
            proveedores, lleva las redes sociales, resuelve incidencias y
            además intenta pensar en estrategia. ¿Te suena? Es la trampa
            del autoempleo disfrazado de empresa. Mientras tú seas el
            cuello de botella de todo, tu negocio no puede crecer.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te ves reflejado en esto, probablemente necesites{" "}
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="text-accent-600 underline hover:text-accent-700"
            >
              organizar tu empresa para salir del autoempleo
            </a>.
          </p>

          {/* Error 3 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 3: No tener una estrategia clara
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            &ldquo;Mi estrategia es vender más.&rdquo; Eso no es una
            estrategia — es un deseo. Una estrategia de verdad responde a
            preguntas concretas: ¿a quién le vendo? ¿Qué problema resuelvo?
            ¿Cómo me diferencio? ¿Dónde concentro mis recursos?
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Sin estrategia, cada decisión se toma sobre la marcha, reaccionando
            a lo que viene. Y eso genera un negocio a la deriva, que crece un
            mes y retrocede al siguiente. Puedes empezar por{" "}
            <a
              href="/blog/como-definir-estrategia-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              definir la estrategia de tu negocio paso a paso
            </a>.
          </p>

          {/* Error 4 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 4: Competir siempre por precio
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando un cliente te pide descuento y tú cedes, estás diciendo
            algo muy claro: &ldquo;Mi servicio no vale lo que cobro.&rdquo;
            Competir en precio es una carrera hacia abajo donde siempre hay
            alguien dispuesto a cobrar menos. Y mientras tanto, tus márgenes
            se estrechan hasta que el negocio deja de ser sostenible.
          </p>

          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              La trampa del precio bajo
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg">
              Bajar precios atrae a los peores clientes: los que solo buscan
              lo más barato, los que más exigen, los que menos fidelidad
              tienen y los que se irán en cuanto encuentren algo un euro más
              barato. El cliente que te elige por precio te abandonará por
              precio.
            </p>
          </div>

          {/* Error 5 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 5: Ignorar el marketing
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            &ldquo;Yo vivo del boca a boca.&rdquo; Es una frase que escucho
            constantemente. Y el boca a boca está genial, pero tiene un
            problema: no lo controlas. No puedes decidir cuándo llegan
            clientes nuevos ni cuántos. Si tu único canal de captación es la
            recomendación espontánea, tu crecimiento depende del azar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El marketing no es un gasto — es una inversión. Y no hace falta
            tener un gran presupuesto. Hace falta tener un plan: saber a
            quién te diriges, qué mensaje transmites y en qué canales estás
            presente de forma consistente.
          </p>

          {/* Error 6 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 6: No delegar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            &ldquo;Nadie lo hace tan bien como yo.&rdquo; Puede que sea
            cierto, pero eso no significa que debas hacerlo todo tú. Si
            dedicas tu tiempo a tareas de 10 euros la hora, estás dejando
            de hacer las de 100 euros la hora. El coste real de no delegar
            no es el sueldo que te ahorras — es todo lo que dejas de ganar
            mientras estás atrapado en lo operativo.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 md:text-lg">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Delegar no es perder el control — es multiplicar tu capacidad.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Empieza por lo repetitivo y lo que consume más tiempo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent-600 font-bold shrink-0">&#10003;</span>
              <span>Documenta procesos antes de delegar para que funcione.</span>
            </li>
          </ul>

          {/* Error 7 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 7: Tener miedo a invertir
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hay una diferencia enorme entre gastar y invertir. Gastar es
            comprar algo que no te devuelve nada. Invertir es poner dinero
            en algo que genera un retorno. Muchos empresarios pyme viven
            con el freno de mano echado, intentando que el negocio crezca
            sin poner recursos: sin contratar, sin formarse, sin mejorar
            sus herramientas, sin pedir ayuda profesional.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            El miedo a invertir es comprensible — especialmente si has
            tenido malas experiencias — pero el coste de no invertir es
            invisible: es todo el crecimiento que no ocurre, todos los
            clientes que no llegas a captar, toda la rentabilidad que no
            consigues.
          </p>

          {/* Error 8 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 8: No tener sistemas ni procesos
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si cada vez que haces algo lo haces de forma diferente, no
            tienes un negocio — tienes un improvisación continua. Los
            sistemas y procesos son lo que permite que un negocio funcione
            de forma predecible, escalable y con calidad constante.
          </p>

          <div className="my-10 rounded-xl border-2 border-primary-300 bg-primary-50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-primary-900">
              Señales de que te faltan procesos
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 md:text-lg">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500 font-bold shrink-0">&#10007;</span>
                <span>Cuando tú no estás, todo se para o se hace mal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500 font-bold shrink-0">&#10007;</span>
                <span>Cada empleado hace las cosas &ldquo;a su manera&rdquo;.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500 font-bold shrink-0">&#10007;</span>
                <span>Los errores se repiten porque no hay un estándar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500 font-bold shrink-0">&#10007;</span>
                <span>Formar a alguien nuevo lleva semanas de &ldquo;ir enseñándole&rdquo;.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500 font-bold shrink-0">&#10007;</span>
                <span>No puedes irte de vacaciones tranquilo.</span>
              </li>
            </ul>
          </div>

          {/* Error 9 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 9: No escuchar al cliente
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Muchos empresarios asumen que saben lo que el cliente quiere.
            Y basan sus decisiones en esa suposición sin haberla validado
            nunca. No preguntan, no miden la satisfacción, no analizan
            por qué se van los que se van. Y cuando pierden clientes, lo
            atribuyen al precio o a la competencia, sin plantearse que
            quizá el problema está dentro.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Escuchar al cliente no es solo ser amable. Es tener mecanismos
            para recoger feedback, analizarlo y actuar en consecuencia.
            Los negocios que mejor funcionan son los que convierten la voz
            del cliente en decisiones concretas de mejora.
          </p>

          {/* Error 10 */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Error 10: No pedir ayuda
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Este es quizá el más difícil de reconocer. El empresario pyme
            tiende a pensar que tiene que poder con todo solo. Que pedir
            ayuda es una señal de debilidad o un gasto innecesario. Y se
            pasa años dando vueltas a los mismos problemas, cometiendo los
            mismos errores, sin avanzar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Los mejores empresarios que conozco no son los que más saben —
            son los que mejor se rodean. Los que buscan un consultor
            empresarial en Coruña o donde sea cuando lo necesitan, los que
            se forman, los que tienen un mentor o un grupo de apoyo. Nadie
            llega lejos completamente solo.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No necesitas ser perfecto para tener un gran negocio.
            Necesitas ser honesto contigo mismo sobre lo que no funciona y
            tener el valor de cambiarlo.&rdquo;
          </blockquote>

          {/* Tabla resumen */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Resumen: los 10 errores y su solución
          </h2>
          <div className="my-10 overflow-x-auto">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Error</th>
                  <th className="px-4 py-3 font-semibold">Solución</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["No conocer tus números", "Implanta un cuadro de mando con los KPIs clave de tu negocio"],
                  ["Hacerlo todo tú solo", "Estructura tu empresa y libera tu tiempo para lo estratégico"],
                  ["No tener estrategia", "Define tu rumbo: a quién vendes, cómo te diferencias, dónde creces"],
                  ["Competir por precio", "Construye una propuesta de valor que justifique tus tarifas"],
                  ["Ignorar el marketing", "Crea un plan de captación con al menos dos canales activos"],
                  ["No delegar", "Documenta procesos y empieza a soltar lo operativo"],
                  ["Miedo a invertir", "Calcula el retorno esperado antes de decidir, no después"],
                  ["Sin sistemas ni procesos", "Estandariza las tareas clave de tu negocio"],
                  ["No escuchar al cliente", "Mide satisfacción y analiza por qué se van los que se van"],
                  ["No pedir ayuda", "Busca un consultor, mentor o grupo de apoyo empresarial"],
                ].map(([error, solucion], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-gray-500">{error}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {solucion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Estos 10 errores no son exclusivos de ningún sector ni de
            ningún tamaño de empresa. Los veo en talleres, en clínicas,
            en tiendas, en asesorías, en negocios de hostelería y en
            empresas de servicios. Son patrones que se repiten porque
            nadie nos enseña a ser empresarios — aprendemos a base de
            golpes.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Pero la buena noticia es que cada uno de estos errores tiene
            solución. Y no hace falta resolverlos todos a la vez. Empieza
            por el que más te duela, por el que más te esté frenando.
            Porque cada error que corriges es un paso hacia una empresa
            más sana, más rentable y más libre para ti como empresario.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te has reconocido en varios de estos puntos y no sabes por
            dónde empezar, eso es exactamente lo que hacemos en consultoría
            de empresas en Coruña y online: analizar tu situación, priorizar
            y trazar un plan de mejora de empresas realista. A veces, una
            mirada externa es lo que marca la diferencia.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="errores-empresarios-pyme-mas-comunes" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres dejar de repetir estos errores?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos tu negocio, detectamos los fallos que te están
            frenando y diseñamos un plan para corregirlos uno a uno.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
              Solicitar diagnóstico de mi negocio
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-300">
            Primera conversación gratuita — 30 minutos, sin compromiso.
          </p>
        </div>
      </section>

      <BlogNav currentSlug="errores-empresarios-pyme-mas-comunes" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y online en toda España
            </strong>{" "}
            y el{" "}
            <strong className="text-primary-800">Método Rentabilismo</strong>.
          </p>
          <a href="/" className="btn-primary mt-6 inline-block">
            Volver a la página principal
          </a>
        </div>
      </section>
    </>
  );
}
