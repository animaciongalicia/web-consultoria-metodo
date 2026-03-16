import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo organizar una empresa para que crezca — Guía completa de organización empresarial para pymes | Consultoría Método",
  description:
    "Guía práctica para organizar tu empresa pequeña: caos operativo, procesos, delegación, sistemas simples, cómo liberar tiempo y preparar el crecimiento. Con ejemplos reales y plan de acción.",
  keywords: [
    "organización empresarial",
    "empresa desorganizada",
    "delegar en empresa pequeña",
    "sistemas de empresa",
    "cómo organizar una empresa pequeña",
    "salir del autoempleo",
    "procesos en pymes",
    "cómo delegar tareas",
    "empresa depende de mí",
    "organizar negocio para crecer",
    "caos operativo empresa",
    "liberar tiempo empresario",
  ],
  openGraph: {
    title:
      "Cómo organizar una empresa para que crezca — Guía completa para pymes",
    description:
      "Caos operativo, procesos, delegación, sistemas simples, cómo liberar tiempo y preparar el crecimiento. Todo lo que una pyme necesita para dejar de depender del dueño.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-organizar-empresa-pequena-salir-autoempleo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cómo organizar una empresa para que crezca — Guía completa de organización empresarial para pymes",
  description:
    "Guía práctica para organizar tu empresa pequeña: caos operativo, procesos, delegación, sistemas simples, cómo liberar tiempo y preparar el crecimiento.",
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
  datePublished: "2025-03-13",
  dateModified: "2025-04-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-organizar-empresa-pequena-salir-autoempleo",
  },
};

export default function ArticuloOrganizarEmpresa() {
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
            Cómo organizar una empresa para que crezca (y dejar de ser esclavo
            de tu propio negocio)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Eres el comercial, el técnico, el administrativo, el que apaga
            fuegos y el que cierra la puerta por la noche. Tu negocio funciona
            porque tú estás. Y ese es exactamente el problema.
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

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 not-prose">
            <ol className="flex items-center gap-1">
              <li>
                <a href="/" className="hover:text-accent-600 transition-colors">Inicio</a>
              </li>
              <li className="before:content-['>'] before:mx-2 before:text-gray-400">
                <a href="/blog" className="hover:text-accent-600 transition-colors">Blog</a>
              </li>
              <li className="before:content-['>'] before:mx-2 before:text-gray-400">
                <span className="text-gray-700 font-medium">Cómo organizar una empresa para que crezca</span>
              </li>
            </ol>
          </nav>

          {/* Introducción */}
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Conozco a muchos empresarios que montaron su negocio para tener más
            libertad y han acabado con menos libertad que cualquiera de sus
            empleados. Trabajan más horas que nadie, no pueden desconectar ni
            un fin de semana y si se ponen enfermos, el negocio se para. No
            tienen una empresa: tienen un empleo que les ha comprado la vida
            entera.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo paradójico es que muchos de estos negocios facturan bien. No es
            un problema de ingresos. Es un problema de organización empresarial.
            El negocio depende al cien por cien de una sola persona — el
            dueño — y eso impide que crezca, que sea rentable de verdad y que
            permita al empresario vivir como debería.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Esta guía es para ti si tu empresa está desorganizada, si sientes
            que no puedes delegar, si trabajas más que nadie y tu negocio
            sigue sin crecer. Sin teoría de MBA, sin soluciones mágicas. Solo
            lo que funciona en pymes reales, con ejemplos concretos y un plan
            de acción que puedes empezar esta semana.
          </p>

          {/* Índice de contenidos */}
          <div className="my-10 rounded-xl border border-primary-200 bg-primary-50/60 p-6 not-prose">
            <h2 className="text-lg font-bold text-primary-900 mb-4">Índice de contenidos</h2>
            <ol className="space-y-2 text-sm md:text-base text-primary-800">
              <li><a href="#caos-operativo" className="hover:text-accent-600 transition-colors">1. El caos operativo: cómo se desorganiza una empresa sin darse cuenta</a></li>
              <li><a href="#empresario-autoempleado" className="hover:text-accent-600 transition-colors">2. El empresario autoempleado: cuando tú eres el negocio</a></li>
              <li><a href="#procesos" className="hover:text-accent-600 transition-colors">3. Procesos: la base de cualquier empresa organizada</a></li>
              <li><a href="#delegacion" className="hover:text-accent-600 transition-colors">4. Cómo delegar en una empresa pequeña sin que todo salga mal</a></li>
              <li><a href="#sistemas" className="hover:text-accent-600 transition-colors">5. Sistemas simples que hacen funcionar un negocio</a></li>
              <li><a href="#liberar-tiempo" className="hover:text-accent-600 transition-colors">6. Cómo liberar tu tiempo en 4 semanas</a></li>
              <li><a href="#caso-real" className="hover:text-accent-600 transition-colors">7. Caso real: la empresa de eventos que pasó del caos al control</a></li>
              <li><a href="#preparar-crecimiento" className="hover:text-accent-600 transition-colors">8. Cómo preparar tu empresa para el crecimiento</a></li>
              <li><a href="#conclusion" className="hover:text-accent-600 transition-colors">9. Conclusión: un negocio que depende de ti no es un negocio</a></li>
            </ol>
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «Si tu empresa no puede funcionar sin ti durante un mes, no tienes
            una empresa. Tienes un empleo disfrazado de negocio.»
          </blockquote>

          {/* ====================== SECCIÓN 1 ====================== */}
          <h2 id="caos-operativo" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            1. El caos operativo: cómo se desorganiza una empresa sin darse cuenta
          </h2>
          <p className="text-gray-600 md:text-lg">
            La desorganización empresarial no llega de golpe. No hay un día en
            que todo funciona bien y al siguiente reina el caos. Es un proceso
            lento, casi imperceptible, que se alimenta de decisiones que en su
            momento parecían lógicas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Montas el negocio y, como es pequeño, haces de todo. Normal.
            Contratas al primer empleado y, como es más rápido hacerlo tú,
            sigues haciendo de todo. Normal. Crecen los clientes y, como nadie
            lo hace como tú, sigues controlando cada detalle. Normal. Hasta
            que dejas de dormir bien, tu familia se queja de que nunca estás y
            tu negocio no puede crecer porque tú eres el techo.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Señales de que tu empresa está desorganizada
          </h3>
          <div className="my-6 rounded-xl border border-red-200 bg-red-50 p-6 md:p-8 not-prose">
            <ul className="space-y-3">
              {[
                "Tu equipo te consulta varias veces al día para cosas que debería resolver solo.",
                "Si tú no estás, los problemas se acumulan hasta que vuelves.",
                "Cada persona hace las cosas a su manera, con resultados desiguales.",
                "No hay un sitio donde estén escritas las formas de hacer las cosas.",
                "Cuando un empleado se va, se lleva el conocimiento en la cabeza.",
                "Tú eres quien más trabaja pero quien menos avanza en lo estratégico.",
                "Los errores se repiten porque nadie documenta cómo evitarlos.",
                "No puedes irte de vacaciones sin que te llamen cada día.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 md:text-lg"
                >
                  <span className="mt-1 text-red-500 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic">
              Si te reconoces en tres o más de estas situaciones, tu empresa
              tiene un problema de organización. No de personas, no de
              mercado — de estructura.
            </p>
          </div>

          <p className="text-gray-600 md:text-lg">
            Lo peor del caos operativo es que se normaliza. Llevas años
            funcionando así y crees que «es lo que hay», que «así son las
            pymes», que «cuando facture más podré organizarme». Pero la
            realidad es la contraria: primero te organizas, y después creces.
            Porque sin organización, cada euro de facturación extra genera más
            caos, más horas y más estrés.
          </p>

          {/* ====================== SECCIÓN 2 ====================== */}
          <h2 id="empresario-autoempleado" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            2. El empresario autoempleado: cuando tú eres el negocio
          </h2>
          <p className="text-gray-600 md:text-lg">
            Hay una diferencia enorme entre ser empresario y ser autoempleado.
            El empresario dirige un negocio que funciona con o sin él. El
            autoempleado es el negocio: si él no está, no hay empresa. La
            mayoría de los dueños de pymes están en el segundo grupo aunque
            tengan empleados, local y facturación.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            La prueba del mes
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Imagina que mañana tienes que desaparecer durante un mes. No un mes
            de vacaciones mirando el móvil cada hora. Un mes completo sin
            intervenir en nada. ¿Qué pasaría con tu negocio? Si la respuesta
            es «se hundiría», tienes un problema de dependencia. Y ese
            problema tiene consecuencias concretas:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Tu negocio no puede crecer más allá de tu capacidad personal. Hay un techo y ese techo eres tú.",
              "Tu equipo no se desarrolla porque no le dejas tomar decisiones. Se acostumbra a esperar tus instrucciones.",
              "Vives con estrés permanente porque sientes que si sueltas la cuerda, todo se cae.",
              "Si algún día quieres vender tu empresa o jubilarte, nadie la comprará porque sin ti no vale nada.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 md:text-lg"
              >
                <span className="mt-1 text-accent-500">&#10005;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Por qué el empresario no suelta el control
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No es por incompetencia. Las razones son profundamente humanas.
            Has construido tu negocio con tus manos, lo conoces mejor que
            nadie y soltar el control da miedo. Piensas que nadie lo hará como
            tú (probablemente tengas razón). Piensas que si dejas de
            supervisar todo, las cosas saldrán mal (probablemente también
            tengas razón al principio). Pero mientras sigas siendo
            imprescindible en cada operación, tu empresa no podrá crecer más
            allá de lo que aguanten tus horas y tu energía.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La dependencia del dueño no es un defecto del equipo. Es un defecto
            de la estructura del negocio. Y se puede corregir, pero requiere{" "}
            <a href="/blog/como-tomar-decisiones-en-un-negocio" className="text-accent-600 underline hover:text-accent-700">
              decisiones que cuestan
            </a>: soltar control, aceptar que al principio las
            cosas no se harán exactamente como tú las harías y confiar en un
            sistema en vez de en tu propia capacidad para estar en todo.
          </p>

          {/* ====================== SECCIÓN 3 ====================== */}
          <h2 id="procesos" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            3. Procesos: la base de cualquier empresa organizada
          </h2>
          <p className="text-gray-600 md:text-lg">
            Cuando pregunto a un empresario «¿tienes documentados los procesos
            clave de tu negocio?», la respuesta casi siempre es la misma: «No,
            pero todo el mundo sabe lo que tiene que hacer.» Y ahí está el
            problema. Si el conocimiento está en cabezas, no en sistemas, la
            empresa es frágil. Cualquier baja, cualquier rotación, cualquier
            día malo de alguien rompe la cadena.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Qué es un proceso (y qué no es)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Un proceso no es un manual de 200 páginas que nadie va a leer. Un
            proceso es simplemente una forma clara y repetible de hacer algo.
            Cómo se atiende a un cliente nuevo. Cómo se prepara un pedido.
            Cómo se gestiona una reclamación. Cómo se hace el cierre de caja.
            Cómo se incorpora un empleado nuevo. Un checklist de 10 pasos
            en un folio es un proceso. Y es infinitamente mejor que nada.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Los 6 procesos que toda pyme necesita tener claros
          </h3>
          <div className="my-6 space-y-4 not-prose">
            {[
              {
                num: "1",
                title: "Captación y venta",
                desc: "Cómo llega un cliente, cómo se le atiende, cómo se hace el presupuesto, cómo se cierra la venta. Si cada comercial hace esto de forma diferente, los resultados serán imprevisibles.",
              },
              {
                num: "2",
                title: "Entrega del servicio o producto",
                desc: "Cómo se ejecuta lo que has vendido. Los pasos, los plazos, los estándares de calidad, quién revisa qué. Es donde se juega la satisfacción del cliente.",
              },
              {
                num: "3",
                title: "Atención postventa y reclamaciones",
                desc: "Cómo se gestiona cuando algo sale mal. Quién responde, en qué plazo, qué soluciones puede ofrecer sin consultar al dueño. Un mal proceso aquí destruye la reputación.",
              },
              {
                num: "4",
                title: "Facturación y cobros",
                desc: "Cuándo se factura, cómo se cobra, qué pasa cuando no pagan a tiempo. Si no controlas esto, tendrás problemas de liquidez aunque vendas mucho.",
              },
              {
                num: "5",
                title: "Incorporación de empleados",
                desc: "Cómo se forma a alguien nuevo: qué tiene que aprender, en qué orden, quién le enseña, cuándo se le evalúa. Sin esto, cada incorporación es un caos de semanas.",
              },
              {
                num: "6",
                title: "Compras y proveedores",
                desc: "Quién compra qué, a qué precios, con qué proveedor, cuándo se renegocia. Si cada persona compra a su criterio, se pierde dinero y control.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 md:text-lg">
            No tienes que documentar los seis a la vez. Empieza por el que
            más errores genera o el que más depende de ti. Escribe los pasos,
            pruébalo con tu equipo, ajústalo y pasa al siguiente.
          </p>

          {/* ====================== SECCIÓN 4 ====================== */}
          <h2 id="delegacion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            4. Cómo delegar en una empresa pequeña sin que todo salga mal
          </h2>
          <p className="text-gray-600 md:text-lg">
            Delegar es la palabra que más repiten los libros de management y la
            que peor ejecutan los empresarios. Tiene sentido: soltar el
            control da miedo. Pero delegar no es «que otro haga mi trabajo y
            yo desaparezco». Es un proceso con reglas claras.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Regla 1: Clasifica tus tareas antes de delegar
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Divide todo lo que haces en tres columnas. Primera: lo que solo
            puedes hacer tú (negociación con clientes grandes, decisiones
            estratégicas, relaciones clave). Segunda: lo que puede hacer tu
            equipo con formación (coordinación, presupuestos estándar,
            atención al cliente, compras rutinarias). Tercera: lo que se
            puede eliminar o externalizar (contabilidad, diseño, tareas
            administrativas repetitivas). Sé honesto. Si algo puede hacerlo
            otra persona al 80% de tu nivel, va a la segunda columna.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Regla 2: Empieza por lo que menos riesgo tiene
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            No delegues lo más importante el primer día. Empieza por tareas
            operativas, repetitivas, que consumen tu tiempo pero no requieren
            tu criterio estratégico. Gestión de pedidos, atención de consultas
            básicas, control de stock, envíos, facturación rutinaria. Cuando
            veas que funcionan sin ti, avanza hacia tareas más complejas.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Regla 3: Explica el resultado, no solo la tarea
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El error más común al delegar es decir «haz esto» sin explicar por
            qué ni qué resultado se espera. Si le dices a alguien «llama a
            estos clientes», puede hacerlo de muchas formas. Si le dices
            «llama a estos clientes, preséntales la oferta nueva y apunta
            cuántos dicen que sí para revisarlo juntos el viernes», la persona
            sabe exactamente qué se espera de ella. Y tú puedes evaluar el
            resultado sin necesidad de supervisar cada paso.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Regla 4: Acepta el 80% (y gana el 100% de tu tiempo)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            La persona que recibe la tarea no la hará exactamente como tú la
            harías. Y en la mayoría de casos, eso está bien. Si el resultado
            es un 80% de lo que tú habrías logrado pero te libera 10 horas a
            la semana, has ganado. Esas 10 horas puedes dedicarlas a lo que
            realmente mueve la aguja:{" "}
            <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">
              definir la estrategia
            </a>, clientes clave, nuevas
            oportunidades,{" "}
            <a href="/blog/como-hacer-crecer-una-empresa-pequena" className="text-accent-600 underline hover:text-accent-700">
              hacer crecer tu empresa
            </a>. Perseguir la perfección en cada tarea operativa es lo que
            te mantiene atrapado.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Regla 5: Supervisa resultados, no procesos
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            El objetivo es que tú controles si las cosas se han hecho bien,
            no que estés encima mientras se hacen. Establece puntos de control
            semanales: «cada viernes revisamos juntos los números de la
            semana». Eso sustituye a las 50 interrupciones diarias de «oye,
            ¿qué hago con esto?» y te da la tranquilidad de que las cosas
            avanzan sin tu intervención constante.
          </p>

          {/* CTA intermedio */}
          <div className="my-10 rounded-xl border-2 border-accent-300 bg-accent-50 p-6 not-prose">
            <p className="font-semibold text-primary-900 text-lg">
              ¿Tu negocio depende demasiado de ti?
            </p>
            <p className="mt-2 text-gray-700">
              En un{" "}
              <a
                href="/diagnostico-negocio"
                className="text-accent-600 underline hover:text-accent-700 font-medium"
              >
                diagnóstico gratuito
              </a>{" "}
              analizamos juntos la estructura de tu empresa, identificamos qué
              puedes delegar y diseñamos los primeros pasos para que dejes de
              ser el cuello de botella. 30 minutos sin compromiso.
            </p>
          </div>

          {/* ====================== SECCIÓN 5 ====================== */}
          <h2 id="sistemas" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            5. Sistemas simples que hacen funcionar un negocio
          </h2>
          <p className="text-gray-600 md:text-lg">
            Un sistema de empresa no es un software caro ni un diagrama
            complicado. Es un conjunto de reglas simples que permiten que las
            cosas funcionen de forma predecible sin que tú tengas que
            intervenir en cada decisión. Los mejores sistemas son tan sencillos
            que parecen obvios — pero la diferencia entre tenerlos y no
            tenerlos es enorme.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Sistema de reuniones (adiós a las interrupciones)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Una reunión semanal de 30 minutos con tu equipo para revisar qué se
            ha hecho, qué problemas hay y qué se va a hacer la semana siguiente.
            Con agenda fija, horario fijo y duración fija. El equipo sabe que
            tiene un espacio para resolver dudas y tú dejas de ser el buzón
            permanente de consultas. Una reunión semanal bien hecha sustituye
            a decenas de interrupciones diarias.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Sistema de indicadores (saber sin estar encima)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Define 4 o 5{" "}
            <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
              indicadores clave de tu empresa
            </a>{" "}
            que revises cada semana: facturación, número de clientes nuevos,
            incidencias, margen bruto, satisfacción del cliente. Con esos datos,
            sabes si el negocio va bien sin necesidad de estar encima de cada
            operación. Y si algo se desvía, lo ves antes de que se convierta en
            un problema.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Sistema de decisiones (quién decide qué)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Define qué decisiones puede tomar cada persona sin consultarte.
            Por ejemplo: «cualquier gasto de menos de 200 euros lo puede
            aprobar el encargado», «las reclamaciones de menos de 100 euros
            se resuelven directamente con el cliente», «los presupuestos
            estándar los puede enviar el comercial sin mi visto bueno». Cada
            regla de estas elimina decenas de interrupciones al mes y hace que
            tu equipo se sienta responsable y capaz.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Sistema de checklists (eliminar errores repetitivos)
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Los errores que se repiten no son un problema de personas — son un
            problema de sistema. Si un envío sale mal porque alguien olvida
            revisar la dirección, no necesitas echar una bronca: necesitas un
            checklist de 5 puntos antes de cada envío. Los pilotos de avión
            usan checklists. Los cirujanos usan checklists. Tu empresa también
            debería.
          </p>

          {/* Cuadro de herramientas */}
          <div className="my-10 rounded-xl border-2 border-accent-400 bg-white p-6 md:p-8 shadow-sm not-prose">
            <h3 className="text-lg font-bold text-gray-900">
              Herramientas sencillas para implementar sistemas
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                ["Google Sheets o Excel", "Gratis, para llevar indicadores, checklists y control de procesos."],
                ["Trello o Asana (versión gratuita)", "Para asignar tareas y ver en qué estado está cada cosa sin preguntar."],
                ["WhatsApp Business o un grupo interno", "Para comunicaciones operativas del día a día (no para decisiones importantes)."],
                ["Una pizarra en la oficina", "A veces lo más sencillo funciona mejor. Tareas de la semana, responsables, estado."],
              ].map(([titulo, desc], i) => (
                <li key={i} className="flex items-start gap-3 md:text-lg">
                  <span className="mt-1 text-accent-500">&#10003;</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-900">{titulo}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ====================== SECCIÓN 6 ====================== */}
          <h2 id="liberar-tiempo" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            6. Cómo liberar tu tiempo en 4 semanas
          </h2>
          <p className="text-gray-600 md:text-lg">
            No vas a reorganizar tu empresa de un día para otro. Pero puedes
            empezar a soltar lastre en cuatro semanas con este método:
          </p>

          <div className="mt-8 space-y-6 not-prose">
            {[
              {
                week: "Semana 1",
                title: "Registra tu tiempo",
                text: "Durante una semana, apunta en qué gastas cada hora. Sin filtros, sin juzgar. Solo registra. Al final de la semana tendrás una foto real de en qué se va tu día. La mayoría de empresarios se sorprende al ver cuánto tiempo dedican a tareas que no deberían ser suyas.",
              },
              {
                week: "Semana 2",
                title: "Clasifica y decide",
                text: "Divide todas esas tareas en tres columnas: solo yo, mi equipo puede hacerlo y se puede eliminar o externalizar. Sé honesto. Si algo puede hacerlo otra persona al 80% de tu nivel, va a la segunda columna. Si no aporta valor directo, va a la tercera.",
              },
              {
                week: "Semana 3",
                title: "Documenta y transfiere",
                text: "Elige las 2 o 3 tareas más fáciles de transferir de la segunda columna. Documenta cómo se hacen (un checklist sencillo sirve), explica el resultado esperado a la persona que lo va a asumir y deja que lo haga. Supervisa el resultado, no el proceso.",
              },
              {
                week: "Semana 4",
                title: "Evalúa y amplía",
                text: "Revisa cómo han ido esas primeras delegaciones. Corrige lo que no ha funcionado, ajusta los procesos y elige las siguientes 2 o 3 tareas para transferir. Repite el ciclo cada mes hasta que tu día esté ocupado solo con lo que realmente requiere tu atención.",
              },
            ].map((item) => (
              <div
                key={item.week}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                  {item.week}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            «No se trata de trabajar menos. Se trata de trabajar en lo
            correcto. El empresario que dedica su tiempo a tareas operativas
            le está robando futuro a su propia empresa.»
          </blockquote>

          {/* ====================== SECCIÓN 7 ====================== */}
          <h2 id="caso-real" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            7. Caso real: la empresa de eventos que pasó del caos al control
          </h2>
          <p className="text-gray-600 md:text-lg">
            Una empresa de eventos en Galicia tenía tres empleados y el dueño
            trabajaba más que los tres juntos. Hacía los presupuestos,
            coordinaba a los proveedores, atendía a los clientes, supervisaba
            cada montaje y se encargaba de la contabilidad. Facturaban bien
            pero el{" "}
            <a href="/blog/como-mejorar-rentabilidad-empresa" className="text-accent-600 underline hover:text-accent-700">
              margen era pequeño
            </a>, el dueño estaba quemado y el negocio no podía aceptar
            más clientes porque no daba abasto.
          </p>

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-amber-900">
              Lo que hicimos: tres cambios en tres meses
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">1.</span>
                <span>
                  <strong>Clasificamos sus tareas.</strong> Identificamos
                  todo lo que hacía el dueño y lo separamos en tres columnas.
                  Resultado: el 60% de su tiempo se iba en tareas que podía
                  hacer su equipo con formación y procesos claros.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">2.</span>
                <span>
                  <strong>Documentamos procesos.</strong> Creamos checklists
                  para presupuestación, coordinación de proveedores y montaje
                  de eventos. Definimos responsables para cada fase y criterios
                  claros para que el equipo tomara decisiones sin esperar al
                  dueño.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-1 text-amber-600 font-bold">3.</span>
                <span>
                  <strong>Implantamos sistemas.</strong> Reunión semanal de
                  30 minutos, cuadro de indicadores básico, reglas de decisión
                  (quién puede aprobar qué). Externalizamos la contabilidad.
                </span>
              </li>
            </ul>
          </div>

          <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 md:p-8 not-prose">
            <h3 className="text-lg font-bold text-green-900">
              Resultado a los tres meses
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "El dueño pasó de trabajar 14 horas al día a 8.",
                "El equipo empezó a resolver situaciones que antes esperaban.",
                "Pudieron aceptar un 40% más de eventos sin contratar a nadie.",
                "El dueño tuvo tiempo para pensar en cómo hacer crecer el negocio.",
                "Las reclamaciones de clientes bajaron porque los procesos eran más consistentes.",
                "Por primera vez en 4 años, el dueño se fue una semana de vacaciones sin que le llamaran.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-green-800 md:text-lg"
                >
                  <span className="mt-1 font-bold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 md:text-lg">
            No contrataron a nadie nuevo. No compraron ningún software. No
            hicieron una «transformación digital». Simplemente pusieron orden:
            procesos claros, responsabilidades definidas y sistemas simples que
            funcionan sin depender de una sola persona.
          </p>

          {/* ====================== SECCIÓN 8 ====================== */}
          <h2 id="preparar-crecimiento" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            8. Cómo preparar tu empresa para el crecimiento
          </h2>
          <p className="text-gray-600 md:text-lg">
            Organizar tu empresa no es solo para dejar de sufrir. Es la
            condición previa para poder crecer. Una empresa desorganizada que
            intenta crecer es como un coche con los frenos puestos al que le
            metes más gasolina: más ruido, más humo, pero no avanza.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            El crecimiento necesita estructura previa
          </h3>
          <p className="mt-3 text-gray-600 md:text-lg">
            Si hoy no puedes irte un día sin que todo se descontrole, ¿qué
            pasará cuando dupliques clientes? Si hoy no tienes procesos de
            venta documentados, ¿cómo vas a{" "}
            <a href="/blog/como-conseguir-clientes-para-tu-negocio" className="text-accent-600 underline hover:text-accent-700">
              captar más clientes
            </a>{" "}
            de forma sistemática? Si hoy tu equipo no puede tomar decisiones
            sin ti, ¿cómo vas a abrir una segunda sede o un nuevo mercado?
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La secuencia correcta es: primero organizas, después creces. No al
            revés. «Cuando crezca me organizaré» es la frase que mantiene a
            miles de empresarios atrapados en negocios que facturan pero no
            avanzan.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary-800">
            Los cinco pilares para preparar el crecimiento
          </h3>
          <div className="my-6 overflow-x-auto not-prose">
            <table className="w-full rounded-lg border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-4 py-3 font-semibold">Pilar</th>
                  <th className="px-4 py-3 font-semibold">Qué implica</th>
                  <th className="px-4 py-3 font-semibold">Si no lo tienes...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Procesos documentados", "Las tareas clave están escritas y cualquiera puede seguirlas", "Cada nueva persona tarda meses en ser productiva"],
                  ["Equipo autónomo", "Tu equipo toma decisiones operativas sin consultarte", "Tú eres el cuello de botella y el techo del crecimiento"],
                  ["Control financiero", "Conoces tus márgenes, tu punto de equilibrio y tu flujo de caja", "Creces a ciegas y descubres los problemas cuando ya es tarde"],
                  ["Captación predecible", "Tienes un sistema para conseguir clientes de forma estable", "Dependes de la suerte, del boca a boca o de tu red personal"],
                  ["Tiempo del dueño liberado", "Dedicas al menos el 40% de tu tiempo a estrategia y desarrollo", "No tienes capacidad mental ni horaria para planificar el futuro"],
                ].map(([pilar, implica, sinEl], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{pilar}</td>
                    <td className="px-4 py-3 text-gray-600">{implica}</td>
                    <td className="px-4 py-3 text-gray-600">{sinEl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 md:text-lg">
            No necesitas tener los cinco pilares perfectos para empezar a
            crecer. Pero necesitas tener los cinco al menos en un nivel
            básico. Si te falta uno, ese será el que te frene cuando intentes
            dar el salto. Y normalmente, el que más falta hace es el quinto:
            liberar el tiempo del dueño. Porque sin tiempo, no puedes pensar.
            Y sin pensar, no puedes dirigir.
          </p>

          {/* ====================== SECCIÓN 9 ====================== */}
          <h2 id="conclusion" className="text-2xl font-bold text-primary-900 mt-14 mb-6 scroll-mt-28">
            9. Conclusión: un negocio que depende de ti no es un negocio, es una trampa
          </h2>
          <p className="text-gray-600 md:text-lg">
            Si trabajas todo el día y tu negocio no crece, el problema no es
            que trabajes poco. El problema es que trabajas en lo que no debes.
            Has construido un negocio que te necesita en cada esquina y eso
            tiene un techo muy claro: tu propia energía y tu propio tiempo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La organización empresarial no es un lujo de grandes
            corporaciones. Es una necesidad de supervivencia para cualquier
            pyme que quiera crecer — o simplemente que quiera que su dueño
            pueda vivir con tranquilidad. Procesos claros, responsabilidades
            definidas, delegación progresiva y sistemas simples que funcionen
            con o sin ti presente.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No vas a cambiar tu empresa en un día. Pero si empiezas hoy,
            dentro de un mes ya habrás recuperado horas que ahora pierdes en
            tareas que no son tuyas. Dentro de tres meses, tendrás un
            negocio que funciona mejor, un equipo que rinde más y tú podrás
            dedicar tu tiempo a lo que de verdad importa:{" "}
            <a href="/blog/como-hacer-crecer-una-empresa-pequena" className="text-accent-600 underline hover:text-accent-700">
              hacer crecer tu empresa
            </a>.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Y si necesitas a alguien que te ayude a dar el primer paso — a
            ver tu empresa desde fuera, a identificar qué puedes soltar y a
            montar los sistemas que necesitas —{" "}
            <a href="/diagnostico-negocio" className="text-accent-600 underline hover:text-accent-700">
              hablamos
            </a>.
          </p>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-organizar-empresa-pequena-salir-autoempleo" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Tu negocio depende demasiado de ti?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Analizamos juntos la estructura de tu empresa, identificamos qué
            puedes delegar y diseñamos un plan para que dejes de ser el cuello
            de botella de tu propio negocio. Sin teoría, sin informes
            decorativos — solo orden y soluciones.
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

      <BlogNav currentSlug="como-organizar-empresa-pequena-salir-autoempleo" />

      {/* Cross-link */}
      <section className="border-y border-accent-200 bg-accent-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce nuestro{" "}
            <a href="/metodo-herramientas" className="font-semibold text-primary-800 underline hover:text-primary-900">
              método de trabajo y herramientas de diagnóstico
            </a>{" "}
            o descubre{" "}
            <a href="/experiencia-sectores-casos" className="font-semibold text-primary-800 underline hover:text-primary-900">
              cómo hemos ayudado a empresas a organizarse y crecer
            </a>.
          </p>
          <a href="/diagnostico-negocio" className="btn-primary mt-6 inline-block">
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
