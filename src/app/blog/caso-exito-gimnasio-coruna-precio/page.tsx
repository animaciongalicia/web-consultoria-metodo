import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Caso de éxito: un gimnasio en Coruña que dejó de competir por precio | Consultoría Método",
  description:
    "Caso real de un gimnasio en A Coruña que competía con cadenas low-cost a 9,99 €. Cómo se reposicionó en entrenamiento especializado, subió precios de 29 a 59 € y triplicó su ingreso por socio.",
  keywords: [
    "caso éxito gimnasio",
    "gimnasio competir precio",
    "diferenciación gimnasio",
    "consultor gimnasios Galicia",
    "dejar de competir por precio",
    "reposicionar negocio fitness",
    "subir precios gimnasio",
    "consultor empresas A Coruña",
    "rentabilidad gimnasio",
    "especialización negocio local",
  ],
  openGraph: {
    title: "Caso de éxito: un gimnasio en Coruña que dejó de competir por precio",
    description:
      "De 380 socios a 29 €/mes a 220 socios a 59 €/mes. Perdió el 40 % de socios pero triplicó el ingreso por miembro y redujo la rotación del 60 % al 15 %.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/caso-exito-gimnasio-coruna-precio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Caso de éxito: un gimnasio en Coruña que dejó de competir por precio",
  author: { "@type": "Person", name: "Pablo García Dacosta" },
  publisher: { "@type": "Organization", name: "Consultoría Método" },
  datePublished: "2026-06-18",
};

export default function CasoExitoGimnasioCoruna() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Caso de éxito — Consultoría Método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Un gimnasio en Coruña que dejó de competir por precio — y empezó a ganar dinero de verdad
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Competía con cadenas low-cost que cobraban 9,99 € al mes. Tenía
            380 socios, cuotas de 29 € y una rotación anual del 60 %. Cada
            año perdía más de la mitad de sus clientes y los reponía a
            golpe de descuentos y promociones. Este es el caso real de un
            gimnasio en la zona de A Coruña que decidió cambiar de juego.
          </p>
          <p className="mt-4 text-sm text-primary-300">
            Por {SITE.consultant} · Consultoría de negocios — A Coruña, Galicia
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            {/* ── Situación de partida ── */}
            <h2>La situación de partida: muchos socios, poco futuro</h2>
            <p>
              El gimnasio llevaba más de ocho años abierto. Sala de musculación,
              zona cardiovascular, dos salas de clases colectivas y un pequeño
              espacio de entrenamiento funcional. Tres empleados a jornada completa
              más el dueño, que hacía de todo: entrenaba clientes, daba clases,
              gestionaba la administración y se encargaba del mantenimiento.
            </p>
            <p>
              Sobre el papel, 380 socios parece un número sólido. Pero cuando
              el dueño me contactó, su sensación era la contraria: &quot;Estoy
              atrapado en una rueda de hámster. Cada mes que entra uno, se van
              dos. Bajo precios para retener y aun así se marchan. Las cadenas
              low-cost me están matando&quot;.
            </p>
            <p>
              Cuando nos sentamos a mirar los números, la situación era peor de
              lo que parecía.
            </p>

            {/* ── Diagnóstico visual: 4 cards ── */}
            <div className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900">
                Radiografía del negocio — Antes de la consultoría
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Socios activos
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">380</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Cifra alta, pero con rotación del 60 % anual
                  </p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Cuota media
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">29 €/mes</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Muchos con descuento permanente de 25 €
                  </p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Facturación mensual
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">~11.000 €</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Con picos de 12.500 € en enero y valles de 9.000 € en verano
                  </p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Rotación anual
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-red-600">60 %</p>
                  <p className="mt-1 text-sm text-gray-500">
                    228 bajas al año — había que reponer la mitad del negocio cada 12 meses
                  </p>
                </div>
              </div>
            </div>

            <h2>Lo que encontramos al poner los números encima de la mesa</h2>
            <p>
              Cuando analizamos los datos con calma, aparecieron los problemas
              reales — y ninguno de ellos era &quot;faltan socios&quot;.
            </p>
            <ul>
              <li>
                <strong>Cero diferenciación.</strong> El gimnasio ofrecía exactamente
                lo mismo que las cadenas low-cost: sala de máquinas y clases colectivas.
                Pero a 29 € en vez de 9,99 €. Desde el punto de vista del cliente,
                no había razón objetiva para pagar tres veces más. Para entender por
                qué esto es un problema tan grave, te recomiendo leer{" "}
                <a
                  href="/blog/como-diferenciarte-de-tu-competencia"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  cómo diferenciarte de tu competencia
                </a>.
              </li>
              <li>
                <strong>Rotación insostenible.</strong> El 60 % de los socios no
                renovaba al año. Eso significaba captar más de 200 socios nuevos cada
                año solo para mantenerse. Un esfuerzo comercial agotador y carísimo.
              </li>
              <li>
                <strong>Ingreso por socio bajísimo.</strong> 29 € de cuota media, sin
                servicios adicionales de pago. Ni entrenamiento personal, ni programas
                especializados, ni nutrición. Solo la cuota. Y muchos socios con
                descuentos heredados del tipo &quot;te hago precio de amigo&quot; que
                bajaban la media a 25-26 €.
              </li>
              <li>
                <strong>Coste de adquisición altísimo.</strong> Para captar nuevos
                socios, se hacían campañas de promoción agresivas: primer mes gratis,
                matrícula gratuita, 3 meses al precio de 2. Atraían gente que venía
                por la oferta y se iba cuando terminaba. El coste real de captar un
                socio estaba por encima de 80 € — para un cliente que generaba 29 €
                al mes y se quedaba una media de 7 meses.
              </li>
            </ul>

            <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-accent-800">
                Dato clave: el gimnasio gastaba más de 15.000 € al año en captación
                de socios que, de media, se marchaban antes de cumplir el año.
                Estaba alimentando un modelo de negocio diseñado para perder.
              </p>
            </div>

            {/* ── Las acciones: numbered steps ── */}
            <h2>Qué cambiamos: el plan de reposicionamiento paso a paso</h2>
            <p>
              La decisión fue radical pero necesaria: dejar de competir en el
              mercado generalista y reposicionar el gimnasio como centro de
              entrenamiento especializado. No fue fácil. Supuso renunciar a
              una parte importante de la base de socios. Pero era eso o seguir
              en una guerra de precios que solo podía terminar en el cierre.
            </p>

            {/* Paso 1 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  1
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Definir el nuevo posicionamiento
                </h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Identificamos tres nichos donde el gimnasio podía aportar algo
                que las cadenas low-cost jamás ofrecerán: <strong>entrenamiento
                para mayores de 40</strong> (salud articular, movilidad,
                prevención de lesiones), <strong>rehabilitación deportiva</strong>{" "}
                (recuperación post-lesión con seguimiento profesional) y{" "}
                <strong>preparación física específica</strong> (deportistas que
                necesitan un plan a medida, no una sala de máquinas).
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Estos tres nichos tenían algo en común: clientes dispuestos a
                pagar más porque valoran la atención personalizada, la
                cualificación del profesional y los resultados. No compran
                precio. Compran solución.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  2
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Reestructurar la oferta de servicios
                </h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Eliminamos las clases colectivas masivas que solo generaban
                desgaste y competían directamente con el modelo low-cost.
                En su lugar diseñamos tres líneas de servicio:
              </p>
              <ul className="mt-2 space-y-1 text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                  <span><strong>Cuota Premium (59 €/mes):</strong> acceso completo + valoración
                  inicial personalizada + plan de entrenamiento trimestral + seguimiento mensual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                  <span><strong>Entrenamiento personal (desde 45 €/sesión):</strong> sesiones
                  individuales de 50 minutos con programación específica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                  <span><strong>Small group (4-6 personas, 89 €/mes):</strong> grupos reducidos
                  por objetivo (movilidad +40, rehabilitación, rendimiento deportivo).</span>
                </li>
              </ul>
            </div>

            {/* Paso 3 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  3
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Subir precios y comunicar el cambio
                </h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                La cuota pasó de 29 € a 59 €. No fue una subida a pelo: se
                comunicó con antelación, se explicó lo que incluía la nueva
                cuota (valoración, plan personalizado, seguimiento) y se dio
                un período de transición de 3 meses.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Sabíamos que perderíamos socios. Y así fue: de 380 se quedaron
                220. Pero eran los 220 correctos — personas que valoraban el
                servicio, venían con regularidad y tenían un perfil de
                permanencia alto. Los que se fueron eran, en su mayoría,
                socios fantasma o cazadores de ofertas que habrían durado
                unos meses más como mucho. Si te planteas una subida así, lee{" "}
                <a
                  href="/blog/como-subir-precios-sin-perder-clientes"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  cómo subir precios sin perder a tus mejores clientes
                </a>.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  4
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Crear fuentes de ingreso adicionales
                </h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Los paquetes de entrenamiento personal y los grupos reducidos
                generaron un ingreso adicional que antes no existía. Un 30 %
                de los socios Premium contrató sesiones de entrenamiento
                personal. Y los grupos de small group se llenaron en 6
                semanas porque ofrecían algo que nadie más ofrecía en la zona:
                atención real en un grupo pequeño con un programa diseñado
                para su situación concreta.
              </p>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Ingreso medio por socio: pasó de 29 € a más de 72 €/mes
                contando servicios adicionales. Eso es casi 2,5 veces más
                por cada persona que entra por la puerta.
              </p>
            </div>

            {/* Paso 5 */}
            <div className="not-prose my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  5
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Cambiar la captación: de descuentos a valor
                </h3>
              </div>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Se eliminaron todas las promociones de precio: nada de primer
                mes gratis, nada de matrícula gratuita. En su lugar, la
                captación se basó en el valor: una sesión de valoración física
                gratuita de 30 minutos donde el entrenador evaluaba al
                potencial socio, le mostraba el enfoque personalizado y le
                explicaba su plan. El ratio de conversión de esa sesión fue
                del 65 %. Antes, con las promos de precio, era del 40 % — y
                con una permanencia media mucho menor.
              </p>
            </div>

            {/* ── Before/After table ── */}
            <h2>Los resultados: menos socios, más negocio</h2>

            <div className="not-prose my-10">
              <div className="grid gap-4 md:grid-cols-2">
                {/* ANTES */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500">
                    Antes
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Socios activos</span>
                      <span className="text-sm font-bold text-gray-900">380</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Cuota media</span>
                      <span className="text-sm font-bold text-red-600">29 €/mes</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación mensual</span>
                      <span className="text-sm font-bold text-gray-900">~11.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Ingreso por socio</span>
                      <span className="text-sm font-bold text-red-600">29 €</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-2">
                      <span className="text-sm text-gray-700">Rotación anual</span>
                      <span className="text-sm font-bold text-red-600">60 %</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Servicios adicionales</span>
                      <span className="text-sm font-bold text-red-600">0 €</span>
                    </div>
                  </div>
                </div>

                {/* DESPUÉS */}
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    Después (6 meses)
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Socios activos</span>
                      <span className="text-sm font-bold text-gray-900">220</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Cuota media</span>
                      <span className="text-sm font-bold text-emerald-700">59 €/mes</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Facturación mensual</span>
                      <span className="text-sm font-bold text-emerald-700">~13.000 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Ingreso por socio</span>
                      <span className="text-sm font-bold text-emerald-700">72 €</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                      <span className="text-sm text-gray-700">Rotación anual</span>
                      <span className="text-sm font-bold text-emerald-700">15 %</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Servicios adicionales</span>
                      <span className="text-sm font-bold text-emerald-700">+2.800 €/mes</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                42 % menos de socios, 18 % más de facturación, 148 % más de
                ingreso por socio y una rotación que pasó del 60 % al 15 %.
                El negocio dejó de ser una rueda de hámster.
              </p>
            </div>

            <p>
              Pero los números solo cuentan parte de la historia. Lo que
              cambió de verdad fue la dinámica del negocio. El dueño dejó
              de dedicar su energía a captar socios que se iban a los 4
              meses. Dejó de competir con ofertas que destruían su margen.
              Y por primera vez en años, tenía un gimnasio con gente que
              quería estar ahí — no que estaba ahí porque era barato.
            </p>

            <blockquote className="border-l-4 border-accent-400 bg-accent-50 py-4 px-6 my-8 rounded-r-lg">
              <p className="text-gray-700 italic md:text-lg">
                &laquo;Cuando compites por precio contra alguien que puede
                permitirse cobrar 9,99 €, no estás compitiendo. Estás
                perdiendo despacio. La única salida es dejar de jugar a
                ese juego y crear uno nuevo.&raquo;
              </p>
            </blockquote>

            {/* ── Lecciones ── */}
            <h2>Las lecciones que aplican a cualquier negocio que compite por precio</h2>
            <p>
              Este caso no es exclusivo del fitness. El mismo patrón lo veo
              en restaurantes que compiten con menús a 10 €, en talleres que
              bajan tarifas para igualar al taller de al lado, en tiendas
              que hacen rebajas permanentes y en profesionales que cobran
              menos de lo que vale su trabajo por miedo a perder clientes.
            </p>

            <div className="not-prose my-8 space-y-3">
              {[
                "Si ofreces lo mismo que todos, solo puedes competir por precio. Y el más barato siempre será alguien que puede permitirse perder dinero más tiempo que tú.",
                "Perder clientes que no valoran lo que haces no es un problema. Es una limpieza necesaria. Los que se quedan son los que construyen tu negocio.",
                "La rotación baja es más valiosa que un número alto de clientes. Un socio que se queda 3 años vale más que 5 que se van en 4 meses.",
                "Los servicios adicionales son la verdadera palanca de rentabilidad. La cuota es la puerta de entrada, no el negocio completo.",
                "La captación basada en valor (demostrar lo que haces) convierte mejor y retiene más que la captación basada en descuentos.",
              ].map((lesson, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 border border-gray-100"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>

            <h2>¿Cómo saber si tu negocio necesita este cambio?</h2>
            <p>
              Si te reconoces en alguna de estas señales, probablemente
              estés en la misma situación que este gimnasio:
            </p>
            <ul>
              <li>Pierdes clientes constantemente y tienes que reponerlos con promociones.</li>
              <li>Tus precios son bajos pero no consigues ganar dinero.</li>
              <li>Tus clientes se van por cualquier oferta de la competencia.</li>
              <li>No puedes explicar en una frase por qué alguien debería elegirte a ti y no al más barato.</li>
              <li>Trabajas más horas cada año pero el beneficio no crece.</li>
            </ul>
            <p>
              Esto no es un problema de esfuerzo. Es un problema de
              posicionamiento. Y tiene solución. Normalmente más rápida de lo
              que imaginas, aunque requiere tomar decisiones valientes.
            </p>

            <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-6 not-prose my-8">
              <p className="text-sm font-semibold text-primary-800">
                Para entender las bases de este enfoque, lee{" "}
                <a
                  href="/blog/como-diferenciarte-de-tu-competencia"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  cómo diferenciarte de tu competencia
                </a>. Y si quieres ver más casos reales de negocios que han
                cambiado su modelo, consulta la página de{" "}
                <a
                  href="/experiencia-sectores-casos"
                  className="text-accent-600 underline hover:text-accent-700"
                >
                  experiencia y casos
                </a>.
              </p>
            </div>

            <h2>¿Por qué funciona la consultoría en negocios que compiten por precio?</h2>
            <p>
              Porque el problema no es técnico — es estratégico. No necesitas
              mejores máquinas, una instalación más grande o más publicidad.
              Necesitas responder una pregunta fundamental: ¿por qué debería
              alguien pagar más por lo que ofreces? Y si no tienes una
              respuesta clara, necesitas construirla.
            </p>
            <p>
              Como{" "}
              <a
                href="/consultor-empresas-coruna"
                className="text-accent-600 underline hover:text-accent-700"
              >
                consultor de empresas en A Coruña
              </a>, he trabajado con gimnasios, clínicas, comercios y empresas
              de servicios que estaban atrapados en la trampa del precio. El
              proceso siempre empieza en el mismo sitio: sentarnos, mirar los
              números reales, entender qué valora el cliente que sí paga y
              construir una propuesta alrededor de eso.
            </p>
            <p>
              Eso es lo que hago en{" "}
              <a
                href="/metodo-herramientas"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Consultoría Método
              </a>: analizar la realidad de tu negocio y ayudarte a tomar
              las decisiones que cambian las reglas del juego. Sin humo.
              Sin teoría bonita. Acciones concretas y resultados medibles.
            </p>

            {/* ── CTA en artículo ── */}
            <div className="not-prose mt-16 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center">
              <p className="text-lg font-semibold text-primary-900">
                ¿Tu negocio compite por precio y cada año es más difícil?
              </p>
              <p className="mt-2 text-gray-600">
                Analizamos juntos tu situación, tu mercado y tus clientes para
                encontrar la diferenciación que te saque de la guerra de precios.
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
              <BlogSidebar currentSlug="caso-exito-gimnasio-coruna-precio" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Estás atrapado compitiendo por precio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La guerra de precios no tiene ganadores. Solo supervivientes
            cada vez más agotados. Si quieres salir de esa dinámica y
            construir un negocio que compita por valor, hablemos. El
            diagnóstico es gratuito y sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico gratuito
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
        </div>
      </section>

      {/* Consultoría sectorial */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="container-narrow text-center">
          <p className="font-semibold text-primary-900 md:text-lg">
            ¿Tienes una clínica, gimnasio o centro de bienestar?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Conoce nuestra consultoría especializada en salud y bienestar: rentabilidad por servicio, captación de pacientes, recall y organización.
          </p>
          <a
            href="/consultoria-salud-bienestar"
            className="mt-4 inline-block text-sm font-bold text-accent-600 hover:text-accent-700"
          >
            Consultoría para salud y bienestar →
          </a>
        </div>
      </section>

      <BlogNav currentSlug="caso-exito-gimnasio-coruna-precio" />
    </>
  );
}
