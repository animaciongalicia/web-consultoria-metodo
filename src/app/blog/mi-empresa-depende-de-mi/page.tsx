import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Mi empresa depende de mí: cómo salir de la trampa | Consultoría Método",
  description:
    "Si tu empresa no funciona sin ti, no tienes una empresa — tienes un empleo que tú mismo te has creado. Plan de 5 pasos para dejar de ser el cuello de botella de tu negocio.",
  keywords: [
    "mi empresa depende de mí",
    "empresa depende del dueño",
    "cómo delegar en mi negocio",
    "empresario cuello de botella",
    "salir del autoempleo",
    "organizar empresa pequeña",
    "consultor empresarial Coruña",
    "consultoría empresas Galicia",
  ],
  openGraph: {
    title: "Mi empresa depende de mí: cómo salir de la trampa",
    description:
      "Síntomas, costes reales y un plan de 5 pasos para que tu negocio funcione sin que tú estés encima de cada decisión.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/blog/mi-empresa-depende-de-mi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mi empresa depende de mí: cómo salir de la trampa",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-06-08",
};

export default function ArticuloEmpresaDependeDeMi() {
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
            Mi empresa depende de mí: cómo salir de la trampa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Si no puedes irte de vacaciones diez días sin que el negocio se
            resienta, no eres empresario. Eres el empleado más caro y más
            sobrecargado de tu propia empresa. Y eso tiene solución.
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
            Es la situación más frecuente que me encuentro cuando empiezo a
            trabajar con una pyme: un dueño que trabaja 60 horas semanales,
            que contesta llamadas de proveedores a las nueve de la noche, que
            aprueba cada factura, cada presupuesto y cada decisión de
            compra. Todo pasa por él. Y cuando no está, el negocio se
            paraliza.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Eso no es una empresa. Es un autoempleo disfrazado con
            empleados alrededor. Y lo peor es que el propio empresario se
            siente atrapado: sabe que no puede seguir así, pero no ve cómo
            soltar sin que todo se venga abajo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            En más de 25 años de consultoría he acompañado a decenas de
            empresarios a salir de esta trampa. Es un proceso que lleva
            meses, no días, pero que tiene pasos claros y resultados
            medibles. Este artículo te los explica.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;Si eres imprescindible en tu empresa, tienes un
            problema. Porque lo que no puede funcionar sin una sola
            persona no es un negocio — es una dependencia.&rdquo;
          </blockquote>

          {/* Síntomas */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 7 síntomas de que tu empresa depende de ti
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No hace falta un diagnóstico complejo. Si reconoces tres o más
            de estos síntomas, estás en la trampa de la dependencia del
            dueño.
          </p>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; Señales de alerta:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "No puedes irte de vacaciones más de una semana sin que algo falle.",
                "Tu móvil no para: empleados, clientes y proveedores te llaman para todo.",
                "Cada gasto por encima de 100 euros requiere tu aprobación.",
                "Tú eres quien cierra todas las ventas importantes.",
                "Si un empleado tiene un problema con un cliente, acude a ti.",
                "No hay nadie en la empresa que pueda sustituirte ni un día.",
                "Llevas años queriendo crecer pero no puedes porque ya no te da el tiempo.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-amber-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si te has reconocido en cuatro o más, no te preocupes — es más
            común de lo que crees. Pero cuanto antes lo abordes, antes
            recuperarás tu tiempo, tu salud y el potencial de crecimiento
            de tu negocio. El artículo sobre{" "}
            <a
              href="/blog/como-organizar-empresa-pequena-salir-autoempleo"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo organizar tu empresa para salir del autoempleo
            </a>{" "}
            complementa muy bien lo que vas a leer a continuación.
          </p>

          {/* Coste real */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El coste real de ser imprescindible
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La dependencia del dueño parece gratis porque no aparece en
            ninguna factura. Pero tiene un coste enorme que se puede
            cuantificar.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Impacto</th>
                  <th className="px-4 py-3 font-semibold">Ejemplo real</th>
                  <th className="px-4 py-3 font-semibold">Coste estimado/año</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Horas del dueño en tareas operativas</td>
                  <td className="px-4 py-3">20 h/semana a 60 €/h de coste de oportunidad</td>
                  <td className="px-4 py-3 text-red-700 font-medium">62.400 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Ventas no atendidas por falta de tiempo</td>
                  <td className="px-4 py-3">2 oportunidades/mes no seguidas</td>
                  <td className="px-4 py-3 text-red-700 font-medium">48.000 €</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Rotación de empleados desmotivados</td>
                  <td className="px-4 py-3">1 baja/año por falta de autonomía</td>
                  <td className="px-4 py-3 text-red-700 font-medium">8.000–15.000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Empresa no vendible</td>
                  <td className="px-4 py-3">Valor de traspaso cae un 40–60 %</td>
                  <td className="px-4 py-3 text-red-700 font-medium">Incalculable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            Suma las tres primeras líneas y verás que la dependencia del
            dueño puede costar más de 120.000 euros anuales en una pyme
            de entre 5 y 15 empleados. No es un número teórico — es lo
            que veo repetidamente cuando hago diagnósticos de negocio.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              La paradoja del crecimiento:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              Las empresas que más dependen de su dueño son las que más
              potencial de mejora tienen. Porque cuando por fin se libera
              ese cuello de botella, el crecimiento que estaba retenido se
              desbloquea de golpe. He visto empresas que crecen un 30 % en
              los 18 meses siguientes a estructurar la delegación.
            </p>
          </div>

          {/* Plan de 5 pasos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Plan de 5 pasos para dejar de ser imprescindible
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No se trata de soltar todo de golpe. Se trata de construir, paso
            a paso, una estructura que funcione sin tu intervención constante.
            Este es el plan que aplico con mis clientes, adaptado a cada
            empresa pero siempre con la misma secuencia lógica.
          </p>

          {/* Paso 1 */}
          <div className="not-prose my-8 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">1</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Documenta los procesos clave
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Haz una lista de las 10 tareas que haces cada semana y
                    que solo tú sabes hacer. Para cada una, escribe un
                    documento sencillo: qué se hace, en qué orden, con qué
                    herramientas y qué resultado se espera. No hace falta un
                    manual de 50 páginas — un folio con los pasos clave y un
                    vídeo de 5 minutos grabado con el móvil mientras haces la
                    tarea es suficiente. Sin documentación no hay delegación
                    posible.
                  </p>
                  <div className="mt-4 rounded-lg bg-primary-50/60 border-l-4 border-primary-500 px-4 py-3">
                    <p className="text-sm font-semibold text-primary-800">
                      Tiempo estimado: 2–3 semanas dedicando 30 minutos al día.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">2</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Identifica quién puede asumir cada rol
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Para cada proceso documentado, señala a la persona de tu
                    equipo con más capacidad para asumirlo. No busques a
                    alguien que lo haga igual que tú — busca a alguien que
                    pueda hacerlo al 70 % con formación. Si no hay nadie
                    interno, plantéate si esa función se puede externalizar
                    (contabilidad, marketing, gestión administrativa). En una
                    empresa de 6 personas encontré que el dueño hacía 14
                    tareas distintas, y 11 de ellas podían asumirlas personas
                    que ya estaban en plantilla.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">3</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Delega por etapas, no de golpe
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    Empieza por una sola tarea — la más fácil de traspasar.
                    Forma a la persona, supervisa la primera semana con
                    revisiones diarias, la segunda con revisiones cada dos
                    días, la tercera con una revisión semanal. Cuando esa
                    tarea funcione sin ti, pasa a la siguiente. El error más
                    común es intentar delegar cinco cosas a la vez: el equipo
                    se satura, los errores se multiplican y el empresario
                    concluye que &ldquo;nadie lo hace como yo&rdquo;. Lee
                    más sobre este proceso en el artículo sobre{" "}
                    <a
                      href="/blog/como-delegar-tareas-sin-perder-control"
                      className="text-accent-600 underline hover:text-accent-700"
                    >
                      cómo delegar tareas sin perder el control
                    </a>.
                  </p>
                  <div className="mt-4 rounded-lg bg-primary-50/60 border-l-4 border-primary-500 px-4 py-3">
                    <p className="text-sm font-semibold text-primary-800">
                      Ritmo recomendado: una tarea nueva cada 2–3 semanas. En 3 meses habrás delegado 5–6 funciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">4</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Crea marcos de decisión claros
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    La mitad de las interrupciones que recibe un dueño son
                    preguntas de su equipo: &ldquo;¿Puedo hacerle un
                    descuento a este cliente?&rdquo;, &ldquo;¿Autorizo esta
                    devolución?&rdquo;, &ldquo;¿Qué hago si el proveedor no
                    entrega a tiempo?&rdquo;. Para cada situación recurrente,
                    define una regla simple. Por ejemplo:
                    &ldquo;Descuentos de hasta el 5 % los autoriza el
                    responsable comercial. Del 5 al 10 %, me consultas. Más
                    del 10 %, no se hace.&rdquo; Pon las reglas por escrito
                    y cuélgalas donde todo el mundo las vea. Cada regla que
                    creas es una interrupción menos en tu día.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-extrabold text-white">5</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Construye una capa de gestión intermedia
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">
                    No necesitas contratar un director general. En una pyme
                    de 8–15 personas basta con designar a 1 o 2 personas de
                    confianza como responsables de área, darles autoridad
                    real y reunirte con ellos una vez por semana para revisar
                    resultados. Tú pasas de ejecutar a supervisar. Ellos
                    pasan de obedecer a decidir. El negocio pasa de depender
                    de una persona a depender de un sistema. Ese es el
                    objetivo final.
                  </p>
                  <div className="mt-4 rounded-lg bg-primary-50/60 border-l-4 border-primary-500 px-4 py-3">
                    <p className="text-sm font-semibold text-primary-800">
                      Un buen caso práctico de esta transición:{" "}
                      <a
                        href="/blog/caso-exito-despacho-profesional-independiente"
                        className="text-accent-600 underline hover:text-accent-700"
                      >
                        el despacho profesional que dejó de depender de su fundador
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cronograma */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Cronograma realista: de 6 a 12 meses
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No voy a decirte que en un mes estará resuelto. Pero si
            trabajas con método, en 6 meses notarás un cambio radical y en
            12 meses tendrás una empresa que puede funcionar sin ti durante
            semanas.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Período</th>
                  <th className="px-4 py-3 font-semibold">Acción principal</th>
                  <th className="px-4 py-3 font-semibold">Resultado esperado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Mes 1–2</td>
                  <td className="px-4 py-3">Documentar procesos y crear marcos de decisión</td>
                  <td className="px-4 py-3">Mapa completo de dependencias</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Mes 3–4</td>
                  <td className="px-4 py-3">Delegar las primeras 4–5 funciones</td>
                  <td className="px-4 py-3">10–15 h/semana liberadas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Mes 5–6</td>
                  <td className="px-4 py-3">Designar responsables de área y establecer reuniones</td>
                  <td className="px-4 py-3">El dueño solo decide lo estratégico</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Mes 7–12</td>
                  <td className="px-4 py-3">Afinar, corregir, ampliar la autonomía del equipo</td>
                  <td className="px-4 py-3">Empresa funcional sin el dueño presente</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Lo que no debes hacer */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Lo que no debes hacer: errores que lo empeoran
          </h2>

          <div className="my-8 rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="font-bold text-red-900 md:text-lg">
              Errores frecuentes que veo en empresarios que intentan soltar:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Delegar sin documentar: el empleado no tiene instrucciones claras, comete errores y el dueño recupera la tarea.",
                "Delegar todo a la vez: el equipo se desborda y el caos confirma la creencia de que «solo yo puedo».",
                "Delegar pero seguir controlando cada detalle: microgestión disfrazada de delegación. El empleado se desmotiva.",
                "No tolerar errores iniciales: toda delegación tiene una curva de aprendizaje. Si castigas el primer fallo, nadie querrá asumir responsabilidad.",
                "Esperar al candidato perfecto: no existe. Forma al que tienes.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                  <span className="mt-1 text-red-600">&#10007;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: tu empresa no debería necesitarte cada día
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            El objetivo no es desentenderte de tu negocio. Es pasar de
            trabajar <em>en</em> la empresa a trabajar <em>sobre</em> la
            empresa. Que tu función sea definir el rumbo, tomar las
            decisiones estratégicas y desarrollar las relaciones clave — no
            aprobar facturas, resolver incidencias ni contestar cada
            llamada.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando consigas eso, descubrirás tres cosas: que tu equipo es
            más capaz de lo que creías, que el negocio tiene más potencial
            del que pensabas y que tú llevas años desperdiciando tu
            talento en tareas que no lo merecían.
          </p>

          <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
            &ldquo;El mejor indicador de que una empresa está bien
            gestionada no es cuánto factura. Es si el dueño puede irse
            dos semanas sin que nadie lo note.&rdquo;
          </blockquote>

          <p className="mt-4 text-gray-600 md:text-lg">
            Si quieres ver cómo lo han conseguido otros empresarios en
            situaciones similares, lee el{" "}
            <a
              href="/blog/caso-exito-despacho-profesional-independiente"
              className="text-accent-600 underline hover:text-accent-700"
            >
              caso del despacho profesional que dejó de depender de su
              fundador
            </a>
            . Y si necesitas ayuda para diseñar este proceso en tu empresa,
            empieza por el diagnóstico.
          </p>

          {/* CTA inline */}
          <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              ¿Tu empresa se para cuando tú paras?
            </p>
            <p className="mt-2 text-gray-600">
              Analizamos tu nivel de dependencia, identificamos los cuellos de
              botella y diseñamos un plan de delegación a tu medida. Sin teoría
              — acción concreta desde la primera sesión.
            </p>
            <a
              href="/diagnostico-negocio"
              className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-600"
            >
              Solicita tu diagnóstico gratuito
            </a>
          </div>

          </article>

          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="mi-empresa-depende-de-mi" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Preparado para dejar de ser el cuello de botella de tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            30 minutos de conversación gratuita para entender tu situación y
            darte un primer plan de acción. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
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

      <BlogNav currentSlug="mi-empresa-depende-de-mi" />
    </>
  );
}
