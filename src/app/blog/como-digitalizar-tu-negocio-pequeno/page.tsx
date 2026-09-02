import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title:
    "Cómo digitalizar tu negocio pequeño sin complicarte | Consultoría Método",
  description:
    "Guía práctica de digitalización para pymes y negocios pequeños. Descubre los 4 niveles de transformación digital, herramientas asequibles y por dónde empezar sin gastar una fortuna.",
  keywords: [
    "digitalizar negocio pequeño",
    "transformación digital pymes",
    "herramientas digitales empresa",
    "digitalización empresa España",
    "consultor empresarial Coruña",
    "consultoría empresas Coruña",
    "digitalización pyme",
  ],
  openGraph: {
    title: "Cómo digitalizar tu negocio pequeño sin complicarte",
    description:
      "Los 4 niveles de digitalización para pymes y por dónde empezar. Guía práctica sin tecnicismos ni inversiones desorbitadas.",
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical:
      "https://consultoriametodo.es/blog/como-digitalizar-tu-negocio-pequeno",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo digitalizar tu negocio pequeño sin complicarte",
  description:
    "Guía práctica de digitalización para pymes y negocios pequeños. Descubre los 4 niveles de transformación digital, herramientas asequibles y por dónde empezar sin gastar una fortuna.",
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
  datePublished: "2025-05-26",
  dateModified: "2025-05-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://consultoriametodo.es/blog/como-digitalizar-tu-negocio-pequeno",
  },
};

export default function ArticuloDigitalizarNegocio() {
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
            Cómo digitalizar tu negocio pequeño sin complicarte
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Digitalizar no es tener una web bonita ni estar en Instagram.
            Es usar la tecnología para que tu negocio funcione mejor, venda
            más y dependa menos de ti. Y no hace falta gastarse una
            fortuna para empezar.
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
            «Digitalización» es una de esas palabras que suenan
            intimidantes para muchos dueños de pymes. Parece algo de
            grandes empresas, de consultoras de Silicon Valley, de
            presupuestos de seis cifras. Pero la realidad es mucho más
            sencilla: digitalizar tu negocio es simplemente usar
            herramientas tecnológicas para hacer mejor lo que ya haces.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Hoy puedes facturar automáticamente, gestionar tu agenda
            desde el móvil, atender clientes por WhatsApp Business,
            controlar tu stock en tiempo real y analizar tus ventas con
            un par de clics. Todo eso con herramientas gratuitas o que
            cuestan menos de 50 euros al mes. No necesitas un
            departamento de informática ni un MBA en transformación
            digital.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Lo que sí necesitas es un orden de prioridades claro. Porque
            el error más común no es no digitalizar — es digitalizar mal:
            comprar herramientas que no usas, automatizar procesos que
            están rotos o montar una tienda online sin haber resuelto
            primero la logística. Vamos a ver cómo hacerlo bien.
          </p>

          {/* H2 — Los 4 niveles */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Los 4 niveles de digitalización para una pyme
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            No todas las empresas necesitan el mismo grado de
            digitalización. Piénsalo como una escalera: cada nivel añade
            valor sobre el anterior. No tiene sentido saltar al nivel 4
            si no tienes resuelto el 1.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary-50 text-primary-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Nivel</th>
                  <th className="px-4 py-3 font-semibold">Qué implica</th>
                  <th className="px-4 py-3 font-semibold">Herramientas</th>
                  <th className="px-4 py-3 font-semibold">Coste aprox.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">1. Presencia</td>
                  <td className="px-4 py-3">Que te encuentren online: web, Google Business, redes básicas</td>
                  <td className="px-4 py-3">Google Business Profile, web sencilla, WhatsApp Business</td>
                  <td className="px-4 py-3 text-green-700">0-50 €/mes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">2. Operaciones</td>
                  <td className="px-4 py-3">Gestionar el día a día digital: facturación, agenda, comunicación</td>
                  <td className="px-4 py-3">Software de facturación, calendario compartido, almacenamiento cloud</td>
                  <td className="px-4 py-3 text-green-700">20-100 €/mes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">3. Ventas</td>
                  <td className="px-4 py-3">Vender y captar clientes online: e-commerce, CRM, marketing digital</td>
                  <td className="px-4 py-3">Tienda online, CRM básico, email marketing, redes sociales gestionadas</td>
                  <td className="px-4 py-3 text-amber-700">50-300 €/mes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">4. Datos</td>
                  <td className="px-4 py-3">Tomar decisiones basadas en datos: analítica, dashboards, automatización avanzada</td>
                  <td className="px-4 py-3">Google Analytics, Power BI/Looker Studio, automatizaciones</td>
                  <td className="px-4 py-3 text-amber-700">50-200 €/mes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            La mayoría de las pymes que atiendo están entre el nivel 0
            (nada digital) y el nivel 1 (tienen web pero poco más). El
            salto del nivel 1 al 2 es donde se consigue el mayor impacto
            con la menor inversión. Automatizar la facturación, tener un
            calendario compartido con tu equipo y usar almacenamiento en
            la nube en lugar de USB y papeles ya transforma el día a día.
          </p>

          {/* H2 — El error de digitalizar el caos */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El error más caro: digitalizar el caos
          </h2>

          <div className="my-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900 md:text-lg">
              &#9888; No digitalices un proceso que no funciona:
            </p>
            <p className="mt-3 text-gray-700 md:text-lg">
              Si tu proceso de facturación es un desastre con papel, será
              un desastre digital más rápido. Si tu atención al cliente es
              caótica, un CRM solo organizará el caos bonito en una
              pantalla. <strong>Primero ordena el proceso, después
              digitalízalo.</strong> Digitalizar basura produce basura
              digital — más rápida y más difícil de arreglar.
            </p>
          </div>

          <p className="mt-4 text-gray-600 md:text-lg">
            He visto empresas gastar 10.000 euros en un software de
            gestión que nadie usa porque los procesos de base eran
            incoherentes. He visto tiendas online con cientos de productos
            subidos que no venden porque detrás no hay un proceso de
            logística ni de atención postventa. La tecnología amplifica
            lo que ya tienes: si tienes un buen proceso, lo hace mejor.
            Si tienes un mal proceso, lo hace peor.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Antes de comprar ninguna herramienta, dibuja en un papel cómo
            funciona tu proceso actual y cómo debería funcionar. Simplifica
            primero, digitaliza después. Para profundizar en automatización
            de procesos, revisa este artículo sobre{" "}
            <a
              href="/blog/automatizar-procesos-empresa-pequena"
              className="text-accent-600 underline hover:text-accent-700"
            >
              automatizar procesos en tu empresa pequeña
            </a>
            .
          </p>

          {/* H2 — Por dónde empezar */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Por dónde empezar: la lista de prioridades
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Si empiezas desde cero o casi cero, este es el orden que
            recomiendo a mis clientes. Cada paso se puede implementar
            en una o dos semanas.
          </p>

          <ol className="mt-6 space-y-4">
            {[
              { title: "Google Business Profile", desc: "Gratis, te posiciona en búsquedas locales, permite que te encuentren y te valoren. Si no lo tienes, créalo hoy — literalmente tarda 15 minutos." },
              { title: "WhatsApp Business", desc: "Gratis, separa el móvil personal del profesional, permite mensajes automáticos y catálogo de productos. Tus clientes ya usan WhatsApp — facilítales la vida." },
              { title: "Software de facturación", desc: "Desde 10 €/mes. Automatiza facturas, controla cobros, genera informes. Deja de hacer facturas en Word o Excel — es lento, propenso a errores y poco profesional." },
              { title: "Almacenamiento en la nube", desc: "Google Drive o OneDrive. Gratis hasta 15 GB. Todos tus documentos accesibles desde cualquier dispositivo, sin USB perdidos ni archivos que no encuentras." },
              { title: "Web profesional sencilla", desc: "No necesitas 20 páginas. Necesitas una web clara que explique qué haces, para quién y cómo contactarte. Mejor una buena web de 5 páginas que una mala de 50." },
              { title: "Presencia básica en redes", desc: "Elige UNA red donde esté tu cliente y hazlo bien. Mejor un perfil de Instagram actualizado que tener Facebook, Instagram, LinkedIn, TikTok y Twitter todos abandonados." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 md:text-lg">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">
                  {i + 1}
                </span>
                <span>
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ol>

          <blockquote className="my-8 border-l-4 border-accent-500 bg-accent-50 p-6 text-gray-800 italic md:text-lg">
            &ldquo;La mejor herramienta digital es la que usas todos los
            días. No la más cara, no la más completa, no la que más
            funcionalidades tiene. La que realmente usas. Empieza simple
            y crece cuando lo necesites.&rdquo;
          </blockquote>

          {/* H2 — El factor humano */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            El factor humano: formar a tu equipo
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La herramienta más potente del mundo no sirve de nada si tu
            equipo no la usa. Y no la va a usar si no entiende por qué,
            si nadie le ha enseñado cómo, o si siente que es «un capricho
            del jefe» que les complica la vida.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            Cuando implementes una nueva herramienta, dedica tiempo a
            explicar el porqué (qué problema resuelve), el cómo (formación
            práctica, no teórica) y el cuándo (un periodo de adaptación
            razonable). Involucra al equipo en la elección cuando sea
            posible — si participan en la decisión, la adoptarán mucho
            más fácilmente.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="font-semibold text-primary-900 md:text-lg">
              El ROI real de la digitalización:
            </p>
            <p className="mt-2 text-gray-700 md:text-lg">
              Una empresa de fontanería con 5 empleados que implementó
              agenda digital + facturación automática + WhatsApp Business
              ahorró 12 horas semanales en administración y redujo los
              «olvidos» de citas un 80%. Inversión total: 45 €/mes.
              Retorno: incalculable en tiempo, imagen y satisfacción del
              cliente. No necesitas más para empezar.
            </p>
          </div>

          {/* H2 — Conclusión */}
          <h2 className="mt-14 text-2xl font-bold text-gray-900 md:text-3xl">
            Conclusión: digitaliza para vivir mejor, no para complicarte
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            La digitalización no es un fin en sí misma. Es un medio para
            que tu negocio funcione mejor, para que tú trabajes menos en
            lo operativo y más en lo estratégico, para que tus clientes
            tengan mejor experiencia y para que tu equipo sea más
            productivo.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            No intentes hacerlo todo a la vez. Elige un nivel, implementa
            una o dos herramientas, consolida el hábito y pasa al
            siguiente. En seis meses tendrás un negocio más organizado,
            más profesional y más preparado para{" "}
            <a
              href="/blog/como-hacer-crecer-una-empresa-pequena"
              className="text-accent-600 underline hover:text-accent-700"
            >
              crecer de verdad
            </a>
            . Y habrás gastado menos de lo que imaginas.
          </p>
          <p className="mt-4 text-gray-600 md:text-lg">
            La transformación digital de una pyme no empieza con tecnología.
            Empieza con la decisión de dejar de hacer las cosas como se
            hacían hace 20 años. El mundo ha cambiado. Tu negocio también
            puede — y debe — cambiar con él. Para ver cómo preparar tu
            empresa para ese crecimiento, lee sobre{" "}
            <a
              href="/blog/como-preparar-tu-empresa-para-crecer"
              className="text-accent-600 underline hover:text-accent-700"
            >
              cómo preparar tu empresa para crecer
            </a>
            .
          </p>
          </article>
          <div className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar currentSlug="como-digitalizar-tu-negocio-pequeno" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres digitalizar tu negocio pero no sabes por dónde empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Te ayudamos a identificar las herramientas que realmente
            necesitas, en qué orden implementarlas y cómo sacarles el
            máximo partido sin complicarte.
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

      <BlogNav currentSlug="como-digitalizar-tu-negocio-pequeno" />

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
