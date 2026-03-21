import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Plan de negocio en una página: lo único que necesitas | Consultoría Método",
  description: "Olvida los planes de 50 páginas. Un plan de negocio simple y práctico cabe en una página. Te enseñamos cómo. Consultoría en Coruña, Galicia y online.",
  keywords: ["plan de negocio simple", "plan negocio una página", "business model canvas pyme", "plan estratégico simple", "consultor empresarial Coruña", "consultoría empresas Coruña", "mejora de empresas"],
  openGraph: { title: "Plan de negocio en una página: lo único que necesitas", description: "Olvida los planes de 50 páginas. Un plan de negocio simple y práctico cabe en una página.", locale: "es_ES", type: "article" },
  alternates: { canonical: "https://consultoriametodo.es/blog/plan-negocio-simple-una-pagina" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Plan de negocio en una página: lo único que necesitas", author: { "@type": "Person", name: "Pablo García Dacosta" }, publisher: { "@type": "Organization", name: "Consultoría Método" }, datePublished: "2025-10-06" };

export default function ArticuloPlanNegocio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Blog — Consultoría Método</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">Plan de negocio en una página: lo único que necesitas</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">Los planes de negocio de 50 páginas no los lee nadie (ni siquiera quien los escribe). Un buen plan cabe en una página y se revisa cada trimestre. Aquí te enseño cómo hacerlo.</p>
          <p className="mt-4 text-sm text-primary-300">Por {SITE.consultant} · Consultoría de negocios — Galicia y online en toda España</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-14">
          <article className="prose prose-lg mx-auto w-full max-w-3xl">

            <p>
              He visto planes de negocio de 80 páginas, con gráficos espectaculares y proyecciones a cinco años, acumular polvo en un cajón. Y he visto empresas que crecen de forma sólida con un plan que cabe en un folio. La diferencia no está en la extensión del documento, sino en la claridad de las ideas y la disciplina de revisarlas.
            </p>

            <p>
              Si tu plan de negocio no cabe en una página, probablemente no lo tienes claro. Y si no lo tienes claro tú, imagina tu equipo.
            </p>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;Un plan de negocio perfecto que nadie consulta vale menos que un plan imperfecto que se revisa cada mes.&rdquo;
            </blockquote>

            <h2>Por qué los planes de negocio tradicionales no funcionan</h2>

            <p>
              El plan de negocio tradicional nació en un mundo donde pedir un crédito bancario requería un documento grueso que impresionara al director de la sucursal. Tenía sentido en ese contexto. Pero como herramienta de gestión real, falla por varias razones:
            </p>

            <ul>
              <li><strong>Son demasiado largos.</strong> Si necesitas 50 páginas para explicar tu negocio, algo no está claro.</li>
              <li><strong>Se quedan obsoletos enseguida.</strong> El mercado cambia cada trimestre. Un plan estático es ficción a los seis meses.</li>
              <li><strong>Nadie los consulta.</strong> Se escriben para un momento concreto (pedir financiación, abrir un negocio) y después se archivan para siempre.</li>
              <li><strong>Generan una falsa sensación de seguridad.</strong> Tener un documento bonito no significa tener una estrategia clara.</li>
              <li><strong>Paralizan.</strong> Muchos empresarios retrasan decisiones porque «todavía no tengo el plan terminado». El plan perfecto no existe.</li>
            </ul>

            <p>
              Lo que necesita una pyme no es un documento para impresionar, sino una herramienta práctica que te ayude a tomar decisiones cada día. Para profundizar en cómo definir tu dirección estratégica, lee{" "}
              <a href="/blog/como-definir-estrategia-negocio" className="text-accent-600 underline hover:text-accent-700">
                cómo definir la estrategia de tu negocio
              </a>.
            </p>

            <h2>El plan de una página: las 6 casillas que lo cambian todo</h2>

            <p>
              Un plan de negocio eficaz responde a seis preguntas fundamentales. Si puedes responderlas con claridad en una página, tienes más estrategia que el 90 % de las pymes.
            </p>

            <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-blue-900">Las 6 casillas de tu plan de una página</h3>
              <div className="space-y-4 text-blue-800">
                <div>
                  <p className="font-bold">1. Misión (¿Para qué existe tu empresa?)</p>
                  <p className="text-sm">En una o dos frases. No una declaración corporativa vacía, sino la razón real por la que haces lo que haces y el valor que aportas al mundo.</p>
                </div>
                <div>
                  <p className="font-bold">2. Cliente objetivo (¿A quién sirves?)</p>
                  <p className="text-sm">Describe a tu cliente ideal con detalle: quién es, qué problema tiene, dónde está, cuánto puede pagar. Si dices «todo el mundo», no tienes cliente.</p>
                </div>
                <div>
                  <p className="font-bold">3. Propuesta de valor (¿Por qué te eligen a ti?)</p>
                  <p className="text-sm">Qué ofreces que sea diferente, mejor o más relevante que tu competencia. La respuesta «hacemos lo mismo pero mejor» no vale.</p>
                </div>
                <div>
                  <p className="font-bold">4. Modelo de ingresos (¿Cómo ganas dinero?)</p>
                  <p className="text-sm">Qué vendes, a qué precio, con qué margen y con qué frecuencia compran tus clientes. Los números básicos de tu negocio.</p>
                </div>
                <div>
                  <p className="font-bold">5. Métricas clave (¿Cómo sabes si vas bien?)</p>
                  <p className="text-sm">3-5 indicadores que revisas cada semana o cada mes y que te dicen si el negocio va en la dirección correcta.</p>
                </div>
                <div>
                  <p className="font-bold">6. Prioridades a 90 días (¿Qué vas a hacer ahora?)</p>
                  <p className="text-sm">Las 3-5 acciones concretas que vas a ejecutar en los próximos tres meses. No más de cinco. Si todo es prioridad, nada lo es.</p>
                </div>
              </div>
            </div>

            <h2>Cómo rellenar cada casilla (con ejemplos)</h2>

            <h3>Misión: sé brutalmente honesto</h3>

            <p>
              Olvida las frases grandilocuentes. Tu misión debería poder explicarse en una cena con amigos. Ejemplo malo: «Ser líderes en soluciones integrales de valor añadido para el sector». Ejemplo bueno: «Ayudamos a talleres mecánicos de Galicia a llenar su agenda con clientes que pagan bien, sin depender de las aseguradoras».
            </p>

            <h3>Cliente objetivo: cuanto más concreto, mejor</h3>

            <p>
              No puedes vender a todo el mundo. Define a tu cliente ideal con el mismo detalle con el que describirías a un amigo. Cuanto más concreto seas, mejor podrás comunicarte con él y diseñar tu oferta a su medida.
            </p>

            <h3>Propuesta de valor: responde a «¿Y por qué tú?»</h3>

            <p>
              Tu cliente tiene alternativas. ¿Por qué debería elegirte a ti? Si no puedes responder a eso en dos frases, tienes un problema de diferenciación. No se trata de ser el más barato, sino de ser el más relevante para tu cliente ideal.
            </p>

            <h3>Modelo de ingresos: los números que importan</h3>

            <p>
              Aquí van las cifras básicas: qué productos o servicios vendes, a qué precio medio, con qué margen y cuántas ventas necesitas al mes para cubrir gastos y ganar dinero. Si estos números no están claros, consulta nuestro artículo sobre{" "}
              <a href="/blog/indicadores-clave-de-una-empresa" className="text-accent-600 underline hover:text-accent-700">
                indicadores clave de una empresa
              </a>.
            </p>

            <h3>Métricas clave: lo que mides, mejora</h3>

            <p>
              Elige entre tres y cinco números que revisas religiosamente cada semana o cada mes. Pueden ser: facturación, margen neto, número de clientes nuevos, tasa de repetición, ticket medio. Lo importante es que sean pocos, relevantes y que los mires de verdad.
            </p>

            <h3>Prioridades a 90 días: donde ocurre la magia</h3>

            <p>
              Esta es la casilla más importante. De nada sirve tener claras las otras cinco si luego no haces nada. Define las 3-5 acciones concretas que vas a ejecutar en los próximos 90 días. Que sean específicas, medibles y con un responsable claro.
            </p>

            <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-900">Ejemplo de prioridades a 90 días</h3>
              <ul className="ml-4 list-disc space-y-2 text-amber-800">
                <li>Subir precios un 10 % en la línea de servicios premium (responsable: gerente, plazo: 15 días).</li>
                <li>Contactar a los 20 mejores clientes del último año para ofrecer un servicio complementario (responsable: comercial, plazo: 30 días).</li>
                <li>Eliminar el servicio de reparaciones express que nos da pérdidas (responsable: gerente, plazo: 45 días).</li>
                <li>Implantar una reunión semanal de equipo de 30 minutos (responsable: gerente, plazo: inmediato).</li>
              </ul>
            </div>

            <h2>Cómo usar tu plan como documento vivo</h2>

            <p>
              Un plan de una página solo funciona si lo revisas con regularidad. Esta es la rutina que recomiendo a mis clientes:
            </p>

            <ol>
              <li><strong>Cada semana:</strong> revisa tus métricas clave. ¿Vas en la dirección correcta? ¿Necesitas ajustar algo?</li>
              <li><strong>Cada mes:</strong> revisa el avance de tus prioridades a 90 días. ¿Estás ejecutando lo que dijiste? ¿Qué te está frenando?</li>
              <li><strong>Cada trimestre:</strong> renueva tus prioridades a 90 días. Evalúa qué funcionó, qué no, y define las nuevas acciones para el siguiente trimestre.</li>
              <li><strong>Cada año:</strong> revisa las seis casillas completas. ¿Ha cambiado tu cliente ideal? ¿Tu propuesta de valor sigue siendo relevante? ¿Tu modelo de ingresos necesita evolucionar?</li>
            </ol>

            <blockquote className="my-10 border-l-4 border-accent-500 bg-accent-50 py-6 px-6 italic text-gray-800 md:text-xl rounded-r-lg">
              &ldquo;La estrategia no es un documento que escribes una vez. Es una conversación que tienes contigo mismo (y con tu equipo) cada semana.&rdquo;
            </blockquote>

            <h2>Errores al hacer tu plan de una página</h2>

            <p>
              Aunque el formato es simple, hay trampas comunes que debes evitar:
            </p>

            <ul>
              <li><strong>Ser vago.</strong> «Crecer más» no es una prioridad. «Conseguir 15 clientes nuevos en el sector hostelería en los próximos 90 días» sí lo es.</li>
              <li><strong>Poner demasiadas prioridades.</strong> Si tienes 10 prioridades, no tienes ninguna. Máximo cinco.</li>
              <li><strong>No revisarlo.</strong> Un plan que no se consulta es papel mojado. Ponlo en un sitio visible y revísalo con disciplina.</li>
              <li><strong>Hacerlo solo.</strong> Si tienes equipo, involúcralo. Las prioridades que el equipo no conoce no se ejecutan.</li>
              <li><strong>Confundir deseos con planes.</strong> «Quiero facturar más» es un deseo. «Voy a lanzar un servicio de mantenimiento mensual a mis 50 mejores clientes antes del 30 de junio» es un plan.</li>
            </ul>

            <p>
              Si quieres entender cómo esta herramienta encaja en una estrategia de crecimiento más amplia, lee nuestro artículo sobre{" "}
              <a href="/blog/como-hacer-crecer-una-empresa-pequena" className="text-accent-600 underline hover:text-accent-700">
                cómo hacer crecer una empresa pequeña
              </a>.
            </p>

            <div className="not-prose my-8 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-900">Tu siguiente paso</h3>
              <p className="text-green-800">
                Coge un folio en blanco (o abre un documento nuevo) y rellena las seis casillas. No te preocupes por hacerlo perfecto: la primera versión siempre es mejorable. Lo importante es que exista, que sea honesta y que la revises cada mes. En 30 minutos puedes tener más claridad estratégica que la mayoría de empresarios que conozco.
              </p>
            </div>

            <h2>Simplicidad es estrategia</h2>

            <p>
              El mejor plan de negocio es el que usas. Y para usarlo, tiene que ser simple, claro y práctico. No necesitas consultores que te escriban documentos de 100 páginas. Necesitas claridad sobre seis preguntas fundamentales y la disciplina de revisarlas con regularidad.
            </p>

            <p>
              Como consultor empresarial en Coruña, ayudo a empresarios a pasar del caos a la claridad. Y casi siempre, el primer paso es este: sentarnos juntos, rellenar una página y definir qué vamos a hacer en los próximos 90 días. Sin más. Sin menos.
            </p>

          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="plan-negocio-simple-una-pagina" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">¿Necesitas ayuda para definir la estrategia de tu negocio?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">Te ayudo a crear tu plan de una página, definir tus prioridades y poner en marcha las acciones que van a mover tu negocio de verdad. Sin documentos interminables, con foco y claridad.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">Solicitar diagnóstico gratuito</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <BlogNav currentSlug="plan-negocio-simple-una-pagina" />
    </>
  );
}
