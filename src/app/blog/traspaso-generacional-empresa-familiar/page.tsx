import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Traspaso generacional en la empresa familiar: cómo hacerlo bien | Consultoría Método",
  description:
    "Guía práctica para el traspaso generacional en empresas familiares. Las 5 fases de una buena sucesión, errores que destruyen negocios y cómo preparar el relevo con éxito.",
  keywords: [
    "traspaso generacional empresa familiar",
    "sucesión empresa familiar",
    "empresa familiar España",
    "relevo generacional negocio",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "planificación sucesoria empresa",
  ],
  openGraph: {
    title: "Traspaso generacional en la empresa familiar: cómo hacerlo bien",
    description:
      "Las 5 fases de una sucesión exitosa en la empresa familiar. Errores fatales, aspectos legales y emocionales del relevo generacional.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/traspaso-generacional-empresa-familiar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Traspaso generacional en la empresa familiar: cómo hacerlo bien",
  description:
    "Guía práctica para el traspaso generacional en empresas familiares. Las 5 fases de una buena sucesión, errores que destruyen negocios y cómo preparar el relevo con éxito.",
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
  datePublished: "2025-06-02",
  dateModified: "2025-06-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/traspaso-generacional-empresa-familiar",
  },
};

export default function ArticuloTraspasoGeneracional() {
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
            Traspaso generacional en la empresa familiar: cómo hacerlo bien
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            El 70% de las empresas familiares no sobreviven a la segunda
            generación. No por falta de negocio, sino por falta de
            planificación. Este artículo te enseña a hacer el traspaso
            sin destruir ni la empresa ni la familia.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — Galicia y
            por videollamada en el resto de España
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">
          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            En España, más del 85% de las empresas son familiares. Son la
            columna vertebral de nuestra economía: talleres, comercios,
            constructoras, bodegas, empresas de transporte, despachos
            profesionales. Muchas llevan décadas funcionando. Pero llega
            un momento en la vida de toda empresa familiar en que el
            fundador tiene que plantearse el relevo. Y ese momento, si
            no se prepara, puede ser el principio del fin.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Las estadísticas son demoledoras: solo el 30% de las empresas
            familiares llegan a la segunda generación. De esas, apenas el
            15% alcanzan la tercera. No es porque el negocio deje de ser
            viable — es porque el traspaso se hace mal, se hace tarde o
            no se hace en absoluto. El fundador muere o se retira sin
            haber preparado a nadie, los hijos se pelean por el control,
            los roles no están definidos y la empresa se desintegra en
            medio de conflictos familiares.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            He acompañado a decenas de empresas familiares en este proceso.
            Las que lo hacen bien comparten un patrón: empezaron a
            planificarlo años antes de que fuera urgente. Las que fracasan
            también comparten un patrón: lo dejaron para «más adelante»
            hasta que ya fue demasiado tarde.
          </p>

          {/* H2 — Por qué fracasa */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué fracasan la mayoría de las sucesiones familiares
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Los motivos se repiten una y otra vez. No son sorprendentes,
            pero sí son evitables si se abordan a tiempo.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            No hay planificación
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El fundador no quiere pensar en retirarse. «Todavía me quedan
            años», dice. Y un día tiene un infarto, o cumple 70 y ya no
            puede más, y nadie está preparado. No hay sucesor formado, no
            hay protocolo, no hay nada. La improvisación en la sucesión
            es letal.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Se mezclan familia y negocio sin reglas
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Las cenas familiares se convierten en consejos de
            administración. Los conflictos del negocio se trasladan a casa.
            Las parejas opinan, los cuñados se meten, los primos reclaman.
            Sin reglas claras que separen lo familiar de lo empresarial,
            todo se contamina.
          </p>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; La mezcla tóxica familia-negocio:
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              Cuando los problemas familiares se resuelven con decisiones
              empresariales (dar un puesto al hijo que no lo merece) o los
              problemas empresariales se gestionan con lógica familiar
              (no despedir a un sobrino incompetente «porque es familia»),
              el resultado es siempre el mismo: ni la familia ni la
              empresa funcionan bien. Necesitas un protocolo familiar que
              establezca reglas claras para todos.
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            El fundador no suelta
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Este es quizá el problema más difícil. El fundador construyó
            la empresa desde cero, es su identidad, su vida. Soltar el
            control es como soltar una parte de sí mismo. Y muchos no
            pueden. Dicen que van a delegar pero siguen tomando todas las
            decisiones. Nombran sucesor pero le desautorizan públicamente.
            Se retiran oficialmente pero aparecen todos los días en la
            oficina. Para entender la dificultad de soltar, lee sobre{" "}
            <a
              href="/blog/como-tomar-decisiones-en-un-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo tomar decisiones difíciles en un negocio
            </a>
            .
          </p>

          {/* H2 — Las 5 fases */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Las 5 fases de un buen traspaso generacional
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Un traspaso exitoso no es un evento — es un proceso que dura
            entre 3 y 10 años. Sí, años. Por eso hay que empezar pronto.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Fase</th>
                  <th className="px-4 py-3 font-semibold">Duración</th>
                  <th className="px-4 py-3 font-semibold">Acciones clave</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">1. Toma de conciencia</td>
                  <td className="px-4 py-3">3-6 meses</td>
                  <td className="px-4 py-3">Aceptar la necesidad del relevo, abrir la conversación con la familia, identificar posibles sucesores</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">2. Preparación</td>
                  <td className="px-4 py-3">1-3 años</td>
                  <td className="px-4 py-3">Formar al sucesor, crear protocolo familiar, profesionalizar la gestión, documentar procesos</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">3. Coexistencia</td>
                  <td className="px-4 py-3">1-2 años</td>
                  <td className="px-4 py-3">Fundador y sucesor trabajan juntos, traspaso gradual de responsabilidades y decisiones</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">4. Traspaso efectivo</td>
                  <td className="px-4 py-3">3-6 meses</td>
                  <td className="px-4 py-3">El sucesor asume el mando, el fundador pasa a rol consultivo, cambios legales y fiscales</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">5. Retirada</td>
                  <td className="px-4 py-3">6-12 meses</td>
                  <td className="px-4 py-3">El fundador se retira progresivamente, disponible para consultas pero sin interferir</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La fase más crítica es la segunda: la preparación. Es donde
            se forma al sucesor no solo técnicamente, sino en liderazgo,
            en toma de decisiones, en gestión de personas. Y es donde se
            redacta el protocolo familiar: quién puede trabajar en la
            empresa, en qué condiciones, cómo se reparten los beneficios,
            qué pasa si hay conflictos, quién decide qué.
          </p>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;El mejor momento para empezar a planificar la sucesión
            fue hace diez años. El segundo mejor momento es hoy. No
            esperes a que sea urgente — cuando es urgente, ya es tarde
            para hacerlo bien.&rdquo;
          </blockquote>

          {/* H2 — Aspectos legales y fiscales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Aspectos legales y fiscales del traspaso
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El traspaso generacional tiene implicaciones fiscales
            importantes que conviene planificar con tiempo. En España
            existen bonificaciones en el Impuesto de Sucesiones y
            Donaciones para la transmisión de empresas familiares, pero
            tienen requisitos específicos que hay que cumplir.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Algunos puntos clave que debes consultar con tu asesor fiscal:
            la reducción del 95% en el Impuesto de Sucesiones por
            transmisión de empresa familiar (con condiciones de
            mantenimiento de 10 años), las implicaciones de la donación
            en vida frente a la herencia, la estructura societaria más
            conveniente para el traspaso, y los pactos sucesorios que
            permiten algunas comunidades autónomas como Galicia.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No improvises esto. Un mal diseño fiscal puede costar
            cientos de miles de euros. Y un buen diseño puede ahorrar
            una cantidad similar. Es una de las situaciones donde{" "}
            <a
              href="/blog/cuando-contratar-un-consultor-de-negocios"
              className="text-accent-600 underline hover:text-accent-700"
            >
              contratar un consultor externo
            </a>{" "}
            se paga solo.
          </p>

          {/* H2 — Cuando no quieren continuar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cuando la siguiente generación no quiere continuar
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Es una situación más frecuente de lo que parece, y hay que
            respetarla. Obligar a un hijo a dirigir un negocio que no le
            interesa es una receta para el desastre: ni él será feliz ni
            la empresa irá bien. Si la siguiente generación no quiere o
            no puede continuar, las alternativas son claras.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Puedes profesionalizar la gestión contratando a un directivo
            externo mientras la familia mantiene la propiedad. Puedes
            vender la empresa a un tercero — hay fondos y empresarios que
            compran negocios familiares rentables. O puedes cerrar de forma
            ordenada si ninguna opción es viable. Todas son legítimas. Lo
            que no es legítimo es forzar una sucesión que nadie quiere.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              El papel del asesor externo:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              En los traspasos generacionales, un asesor externo no es un
              lujo — es casi una necesidad. Aporta objetividad en un
              proceso cargado de emociones, media en conflictos familiares,
              ayuda a separar lo personal de lo profesional y aporta
              experiencia de otros procesos similares. Es difícil ser juez
              y parte cuando lo que está en juego es tu familia y tu
              empresa al mismo tiempo.
            </p>
          </div>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: el mayor legado es una empresa preparada para
            sobrevivirte
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tu empresa no debería depender de ti para siempre. El mayor
            acto de amor hacia tu negocio — y hacia tu familia — es
            prepararlo para que funcione sin ti. No porque no importes,
            sino porque lo que construiste merece perdurar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Empieza la conversación. No la del traspaso formal — esa
            vendrá después. La conversación sobre qué quieres que pase
            con tu empresa cuando tú no estés. Habla con tu familia, con
            tu asesor, con alguien que haya pasado por esto. Y empieza a{" "}
            <a
              href="/blog/como-preparar-tu-empresa-para-crecer"
              className="text-accent-600 underline hover:text-accent-700"
            >
              preparar tu empresa
            </a>{" "}
            para que sea más que tú: un sistema, un equipo, un legado.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Porque el éxito real de un empresario no se mide por lo que
            construyó, sino por lo que dejó después de irse.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="traspaso-generacional-empresa-familiar" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Estás pensando en el relevo generacional de tu empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a planificar una sucesión que proteja tanto tu
            empresa como tu familia. Experiencia real con empresas
            familiares en Galicia y toda España.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/diagnostico-negocio"
              className="btn-primary"
            >
              Solicitar diagnóstico
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

      <BlogNav currentSlug="traspaso-generacional-empresa-familiar" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">
              consultoría de negocios presencial en Galicia y por videollamada en el resto de España
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
