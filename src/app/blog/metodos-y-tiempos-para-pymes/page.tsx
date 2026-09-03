import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Métodos y tiempos para pymes: cómo aplicar principios de eficiencia operativa sin ser una fábrica | Consultoría Método",
  description:
    "Los principios de métodos y tiempos aplicados a pymes de servicios, comercio y hostelería. Cómo medir, estandarizar y mejorar procesos para ganar tiempo y margen. Consultoría empresarial en Galicia y por videollamada en el resto de España.",
  keywords: [
    "métodos y tiempos pymes",
    "consultoría de métodos y tiempos",
    "eficiencia operativa pyme",
    "estudio de métodos y tiempos",
    "métodos y tiempos servicios",
    "mejora de procesos pyme",
    "optimizar tiempos negocio",
    "productividad pyme",
    "consultor métodos y tiempos Galicia",
  ],
  openGraph: {
    title:
      "Métodos y tiempos para pymes: cómo aplicar principios de eficiencia operativa sin ser una fábrica",
    description:
      "El estudio de métodos y tiempos no es solo cosa de fábricas. Los mismos principios sirven para despachos, restaurantes o tiendas — y son una de las palancas más rentables cuando se aplican bien.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/metodos-y-tiempos-para-pymes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Métodos y tiempos para pymes: cómo aplicar principios de eficiencia operativa sin ser una fábrica",
  description:
    "Los principios de métodos y tiempos aplicados a pymes de servicios, comercio y hostelería. Cómo medir, estandarizar y mejorar procesos para ganar tiempo y margen.",
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
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/metodos-y-tiempos-para-pymes",
  },
};

export default function ArticuloMetodosYTiempos() {
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
            Métodos y tiempos para pymes: cómo aplicar principios de eficiencia
            operativa sin ser una fábrica
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            El estudio de métodos y tiempos tiene fama de ser cosa de ingenieros
            industriales con cronómetro en mano. En realidad, sus principios se
            aplican perfectamente a un despacho, un restaurante o una tienda. Y
            son una de las palancas más rentables cuando se aplican bien.
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
            Cada vez que digo &laquo;métodos y tiempos&raquo; en una reunión con
            el dueño de una pyme, veo la misma cara. Una mezcla de escepticismo
            y de &laquo;esto no va conmigo, yo no tengo una fábrica&raquo;. Y
            sin embargo, cuando empezamos a mirar cómo se hacen las cosas en su
            despacho, en su tienda o en su restaurante, aparecen exactamente
            los mismos problemas que hace un siglo llevaron a Taylor y a los
            Gilbreth a inventar esta disciplina: tareas que se hacen dos veces,
            tiempos muertos que nadie mide, procesos que dependen de la memoria
            de una persona.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aquí quiero dejar clara una cosa desde el principio: no soy
            consultoría industrial pura. No voy a tu negocio con un cronómetro
            de acero y una libreta a decirle a tu equipo que aprieta el tornillo
            en dos segundos menos. Lo que hago —y lo que voy a contarte en este
            artículo— es adaptar los principios de métodos y tiempos al mundo
            real de una pyme de servicios, comercio u hostelería. Sin
            deshumanizar. Sin convertir a tu equipo en máquinas. Pero con la
            disciplina suficiente como para que dejes de perder tiempo (y
            margen) cada día.
          </p>

          {/* H2 — Qué es realmente */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Qué es realmente el estudio de métodos y tiempos
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El estudio de métodos y tiempos nació a principios del siglo XX de
            la mano de Frederick Taylor y del matrimonio Gilbreth. Taylor
            observaba a los obreros de las acerías, cronometraba sus movimientos
            y buscaba la forma más eficiente de hacer cada tarea. Los Gilbreth
            fueron más allá y estudiaron cada micromovimiento —lo que llamaron
            &laquo;therbligs&raquo;— para eliminar lo que sobraba y encadenar
            mejor lo que quedaba.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La idea central es muy sencilla y ha envejecido bien:{" "}
            <strong className="text-gray-900">
              antes de intentar mejorar un proceso, hay que entender cómo se
              hace realmente y cuánto tiempo cuesta cada paso.
            </strong>{" "}
            Solo con esa foto puedes eliminar lo innecesario, reordenar lo
            imprescindible y estandarizar la mejor forma conocida de hacerlo. A
            partir de ahí, se mide de nuevo. Y se vuelve a mejorar.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo que ha cambiado en cien años no es el principio —sigue siendo
            perfectamente válido—, sino la aplicación. Ya no hablamos de
            deshumanizar el trabajo ni de reducir a las personas a un gesto
            repetitivo. Hablamos de liberar tiempo, reducir errores y hacer que
            el negocio no dependa de la memoria heroica de tres personas
            imprescindibles.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Un proceso no medido no se puede mejorar. Y un proceso no
            documentado no es un proceso: es una costumbre.&rdquo;
          </blockquote>

          {/* H2 — Por qué aplica a pymes que no son fábricas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por qué aplica a pymes que no son fábricas
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El error de fondo es pensar que métodos y tiempos solo tiene sentido
            en una cadena de montaje. Toda pyme —haga lo que haga— tiene
            procesos. Un despacho de abogados tiene un proceso para dar de alta
            un cliente, otro para redactar un contrato, otro para presentar un
            escrito. Un restaurante tiene el proceso de recibir al cliente,
            tomar la comanda, elaborar el plato, cobrar y limpiar la mesa. Una
            tienda tiene el proceso de recepción de mercancía, reposición,
            cobro y cierre de caja.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Todos esos procesos consumen tiempo. Todos tienen pasos que sobran,
            duplicidades, momentos en los que el cliente espera sin razón y
            errores que hay que corregir después. La diferencia es que en una
            fábrica se ven fácilmente porque hay cinta transportadora y stock
            visible. En una pyme de servicios están escondidos en correos que
            se repiten, en llamadas para aclarar algo que ya estaba dicho, en
            reuniones que no llevan a nada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Aplicar métodos y tiempos a una pyme no consiste en cronometrar al
            equipo. Consiste en{" "}
            <strong className="text-gray-900">
              hacer visible lo invisible
            </strong>
            : ver cuánto tiempo se dedica realmente a cada cosa, dónde se
            atasca el trabajo y qué pasos podrían no existir. Si te interesa el
            enfoque general de qué mirar en un negocio, te recomiendo leer{" "}
            <a
              href="/blog/por-que-tu-empresa-factura-pero-no-gana-dinero"
              className="text-accent-600 underline hover:text-accent-700"
            >
              por qué muchas empresas facturan pero no ganan dinero
            </a>
            . Este artículo se centra específicamente en la parte operativa.
          </p>

          {/* H2 — 3 principios clave */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 3 principios clave que sí funcionan en pymes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            De todo el corpus clásico de métodos y tiempos, hay tres principios
            que en una pyme de servicios, comercio u hostelería funcionan
            siempre. No fallan. Y no necesitan software caro ni un ingeniero a
            jornada completa.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            1. Medir antes de mejorar
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La primera regla es la más incómoda: no se puede mejorar lo que no
            se mide. Y en la mayoría de pymes con las que trabajo, nadie sabe
            realmente cuánto tiempo cuesta hacer las cosas. Se calcula &laquo;a
            ojo&raquo;, se recuerda &laquo;más o menos&raquo;, se estima
            &laquo;una tarde entera&raquo;. Cuando se cronometra en serio,
            aparecen sorpresas: un presupuesto que se creía que tardaba veinte
            minutos en prepararse puede llevar hora y media entre idas y
            venidas. Un cierre de caja que &laquo;se hace en un momento&raquo;
            consume cuarenta minutos cada noche.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            2. Estandarizar procesos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Una vez sabes cuánto tarda algo y cómo se hace, el siguiente paso es
            escribirlo. Un estándar no es una jaula; es una plantilla que
            asegura que el trabajo se hace bien aunque quien lo haga no sea el
            de siempre. En pymes pequeñas esto es aún más crítico: si el único
            que sabe pedir a proveedores es el dueño y ese día está de baja, el
            negocio se para. Estandarizar libera al equipo y —muy importante—
            libera al dueño para que pueda pensar en el negocio en vez de
            apagar fuegos.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            3. Iterar con foco
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Métodos y tiempos no es un proyecto de tres meses que se hace una
            vez y ya. Es una forma de mirar el negocio: cada cierto tiempo,
            eliges un proceso, lo mides, ves qué falla y lo mejoras. Después
            eliges el siguiente. Es lo que en filosofía japonesa se llama
            &laquo;kaizen&raquo;: mejora continua en pasos pequeños. Un 2% de
            mejora al mes en un proceso importante, sostenido durante un año,
            transforma el negocio.
          </p>

          {/* Aviso importante */}
          <div className="my-10 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
            <p className="font-semibold text-red-800">
              Error frecuente al aplicar métodos y tiempos en pymes
            </p>
            <p className="mt-2 text-red-700">
              Muchos dueños intentan rediseñar cinco procesos a la vez, con el
              equipo entero, y el resultado es que no cambia ninguno. Se pierde
              el foco, el equipo se satura y el proyecto acaba en un cajón. La
              regla es sencilla: un proceso cada vez, hasta que quede
              realmente estable, y solo entonces se pasa al siguiente.
            </p>
          </div>

          {/* H2 — 4 ejemplos reales */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            4 ejemplos reales en pymes no industriales
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Vamos a lo concreto. Estos son cuatro ejemplos —anonimizados, pero
            reales— de cómo se aplican los principios de métodos y tiempos en
            pymes que no tienen nada de fábrica.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Despacho de abogados: el alta de nuevo cliente
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En un despacho pequeño de Galicia, el proceso de alta de un cliente
            nuevo tardaba entre dos y tres días, con intercambio de correos,
            llamadas y un montón de documentos escaneados y reenviados. Al
            cronometrarlo salieron 47 minutos de trabajo real repartidos entre
            tres personas. El resto era tiempo de espera. Diseñamos un
            checklist único con toda la documentación necesaria y una plantilla
            de correo estándar. El alta bajó a cuatro horas y liberó dos horas
            semanales al despacho.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Restaurante: la salida del servicio de mediodía
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En un restaurante de menú del día, los platos del segundo tardaban
            demasiado y se acumulaban comandas. Al observar el pase de cocina
            durante tres servicios seguidos vimos que la cocinera hacía cinco
            desplazamientos por plato entre la plancha, la nevera y el pase.
            Reordenando la mise en place —guarniciones ya emplatadas, salsas al
            lado de la plancha— pasamos de cinco desplazamientos a dos. El
            servicio se acortó en 18 minutos de media y la cocina acabó menos
            estresada.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Tienda de barrio: la reposición y el cierre de caja
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En una tienda de alimentación, la reposición se hacía a última hora
            de la mañana, justo cuando entraba más clientela, con lo que las
            dos dependientas se pisaban y atendían tarde. Movimos la reposición
            a primera hora, antes de abrir, y estandarizamos el cierre de caja
            en una hoja de dos páginas. Resultado: 25 minutos menos cada día,
            125 minutos a la semana. Más de 100 horas al año recuperadas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Clínica dental: la agenda y los tiempos por tratamiento
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            En una clínica dental, las agendas se hacían asignando el mismo
            tiempo a todos los tratamientos, y algunos —los más complejos— se
            alargaban hasta media hora provocando retrasos en cadena. Medimos
            durante seis semanas el tiempo real de cada tipo de tratamiento y
            construimos una tabla de duraciones por servicio. La ocupación de
            gabinete mejoró un 12% y los retrasos habituales prácticamente
            desaparecieron.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;No cambiamos a la gente. Cambiamos cómo estaba organizado el
            trabajo. Y de repente teníamos margen y aire para pensar.&rdquo;
          </blockquote>

          {/* H2 — Errores típicos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Errores típicos al aplicar métodos y tiempos en una pyme
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Como con cualquier herramienta potente, la forma de aplicarla marca
            la diferencia entre que funcione o que sea un desastre. Estos son
            los errores que más veo:
          </p>

          <ul className="my-6 space-y-3 rounded-xl border border-primary-200 bg-primary-50/30 p-6 text-gray-700">
            <li>
              <strong className="text-primary-900">
                Convertirlo en control autoritario
              </strong>{" "}
              — usar el cronómetro como amenaza. El equipo se cierra en banda,
              esconde los tiempos reales y el proyecto muere. Métodos y tiempos
              no es vigilancia; es información compartida para mejorar juntos.
            </li>
            <li>
              <strong className="text-primary-900">Medir por medir</strong> —
              generar tablas y hojas Excel que nadie mira. Si no hay decisión
              detrás de la medición, es papel mojado. Antes de medir hay que
              tener claro qué se va a hacer con el dato.
            </li>
            <li>
              <strong className="text-primary-900">
                Copiar plantillas industriales sin adaptar
              </strong>{" "}
              — aplicar sistemas pensados para 300 operarios a un negocio de 6
              personas. Se necesita un enfoque proporcional: la burocracia debe
              ser mínima y siempre al servicio del proceso, nunca al revés.
            </li>
            <li>
              <strong className="text-primary-900">
                No incluir al equipo desde el principio
              </strong>{" "}
              — diseñar el nuevo proceso desde el despacho del dueño y bajarlo
              como orden. Los que mejor saben cómo se hace algo son los que lo
              hacen todos los días. Si no participan, no lo van a defender.
            </li>
            <li>
              <strong className="text-primary-900">
                Cargarse la calidad por optimizar tiempos
              </strong>{" "}
              — ganar cinco minutos por servicio pero empeorar la experiencia
              del cliente. La eficiencia sin calidad es un tiro en el pie.
              Cualquier mejora de tiempo tiene que revisarse comprobando que la
              calidad no se resiente.
            </li>
          </ul>

          {/* H2 — Por dónde empezar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por dónde empezar mañana
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si te has visto reflejado en algo de lo que llevo contado, no
            necesitas contratar una consultora carísima ni comprar software
            para empezar. Necesitas seguir un método muy simple. Estos son los
            seis pasos con los que se puede arrancar en una pyme cualquiera:
          </p>
          <ol className="mt-4 space-y-3">
            {[
              "Elige un solo proceso. El que más te duele: el que más tiempo consume, el que más errores da o el que más depende de una única persona.",
              "Cronometra durante una semana cómo se hace realmente, con quién y con qué pasos. Nada de estimar de memoria: registra tiempos y observaciones concretas.",
              "Documenta lo que has visto en una página. Diagrama simple de pasos, tiempos medios, puntos de atasco y errores más frecuentes.",
              "Rediseña con el equipo. Reunión de máximo una hora: qué pasos sobran, cuáles se pueden agrupar, qué se puede automatizar o preparar antes.",
              "Estandariza. Escribe el nuevo proceso paso a paso, en una hoja o checklist visible, y forma al equipo en él durante dos semanas.",
              "Mide de nuevo. Comprueba si los tiempos han bajado, si los errores se han reducido y si la calidad se mantiene. Ajusta lo que haga falta y pasa al siguiente proceso.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <div className="my-10 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
            <p className="font-semibold text-amber-800">
              Consejo práctico
            </p>
            <p className="mt-2 text-amber-700">
              No arranques por el proceso más grande y complejo. Empieza por
              uno acotado —una reposición, un cobro, un alta— para que en dos
              semanas veas resultado. Un pequeño éxito visible convence al
              equipo mucho más que cualquier presentación.
            </p>
          </div>

          {/* Cierre */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: eficiencia operativa con sentido común
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Métodos y tiempos no es una disciplina fría, ni exclusiva de
            fábricas, ni un capricho de ingenieros. Es sentido común
            estructurado. En una pyme —da igual si es un despacho, una tienda,
            un restaurante o una clínica— aplicar sus principios significa
            recuperar horas cada semana, reducir errores, dejar de depender de
            la memoria de dos personas y liberar al dueño para que pueda pensar
            en lugar de apagar fuegos.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La operativa mal montada no se ve en la cuenta de resultados como
            una línea concreta, pero se come el margen cada día. Cada minuto
            perdido, cada cliente que espera de más, cada error que hay que
            rehacer, cada tarea que se duplica: todo eso es dinero que sale del
            negocio en silencio. Si quieres ver cómo trabajamos este tipo de
            mejoras en la práctica, puedes revisar nuestros{" "}
            <a
              href="/servicios"
              className="text-accent-600 underline hover:text-accent-700"
            >
              servicios de consultoría
            </a>{" "}
            o solicitar directamente un{" "}
            <a
              href="/diagnostico-negocio"
              className="text-accent-600 underline hover:text-accent-700"
            >
              diagnóstico de tu negocio
            </a>
            . Es gratuito, sin compromiso, y en 30 minutos te llevas una
            primera foto clara de dónde se te está escapando el tiempo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No hace falta ser una fábrica para trabajar con método. Solo hace
            falta querer dejar de trabajar &laquo;a ojo&raquo;.
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="metodos-y-tiempos-para-pymes" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres saber qué procesos de tu empresa están perdiendo tiempo
            (y margen)?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            En una primera conversación de 30 minutos revisamos juntos cómo
            está montada la operativa de tu negocio, dónde se acumula el
            trabajo y qué procesos concretos se pueden mejorar en las próximas
            semanas. Sin compromiso y sin humo.
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

      {/* Lecturas relacionadas */}
      <section className="border-t border-gray-200 bg-white py-10">
        <div className="container-narrow">
          <h2 className="text-center text-lg font-bold text-primary-900 md:text-xl">
            Sigue leyendo
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
            <a
              href="/blog/consultoria-administrativa-personalizada"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Organización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Consultoría administrativa personalizada: qué es y cuándo la necesitas
              </p>
            </a>
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Organización
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Cómo organizar tu empresa para salir del autoempleo
              </p>
            </a>
            <a
              href="/blog/segmentacion-clientes-identificar-rentables"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Rentabilidad
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900 group-hover:text-primary-700">
                Segmentación de clientes: cómo identificar a los rentables
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Consultoría por sectores */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            Consultoría especializada por sectores
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Trabajamos con negocios de distintos sectores. Cada uno tiene sus retos — y los conocemos.
          </p>
          <div className="mx-auto mt-4 flex flex-wrap justify-center gap-3">
            <a href="/consultoria-hosteleria-restauracion" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Hostelería</a>
            <a href="/consultoria-comercio-retail" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Comercio y retail</a>
            <a href="/consultoria-servicios-profesionales" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Servicios profesionales</a>
            <a href="/consultoria-salud-bienestar" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Salud y bienestar</a>
            <a href="/consultoria-formacion-turismo-eventos" className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700 transition-colors hover:border-primary-400 hover:text-primary-900">Formación y turismo</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="metodos-y-tiempos-para-pymes" />
    </>
  );
}
