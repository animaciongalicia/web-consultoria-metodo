import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Consultoría para comercio y retail | Mejorar rentabilidad tienda — Consultoría Método",
  description:
    "Consultoría para comercios y retail: tiendas físicas, comercio de barrio, e-commerce, franquicias, mayoristas, distribuidores, agroalimentario y farmacias. Rentabilidad, precios, diferenciación y captación. +25 años.",
  keywords: [
    "consultoría comercio",
    "consultoría retail",
    "mejorar rentabilidad tienda",
    "consultor para tiendas",
    "consultoría comercio de barrio",
    "mejorar mi tienda",
    "consultoría e-commerce",
    "rentabilidad comercio minorista",
    "consultoría farmacias",
    "consultor mayoristas distribuidores",
    "consultoría agroalimentario",
  ],
  openGraph: {
    title: "Consultoría para comercio y retail — Consultoría Método",
    description:
      "Mejora la rentabilidad de tu tienda, comercio o e-commerce. Precios, márgenes, diferenciación y captación. +25 años de experiencia.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/consultoria-comercio-retail",
  },
};

const negocios = [
  "Tiendas de moda y complementos",
  "Tiendas de alimentación y ultramarinos",
  "Ferreterías y suministros",
  "Papelerías y librerías",
  "Comercio de barrio y proximidad",
  "Franquicias retail",
  "Tiendas online y e-commerce",
  "Comercio mixto (físico + online)",
  "Mayoristas y distribuidores",
  "Agroalimentario (producción y venta)",
  "Farmacias",
  "Otros comercios especializados",
];

const problemas = [
  {
    text: "Compites contra grandes superficies y tiendas online con precios más bajos.",
    detail:
      "Si compites solo por precio, siempre pierdes. La diferenciación se construye de otra manera.",
  },
  {
    text: "No sabes qué productos te dejan margen y cuáles te hacen perder dinero.",
    detail:
      "Sin un análisis de márgenes por categoría, estás ocupando estantería con productos que no rinden.",
  },
  {
    text: "Las ventas dependen del tráfico de paso y no tienes forma de atraer clientes activamente.",
    detail:
      "Esperar a que la gente entre no es una estrategia de captación.",
  },
  {
    text: "Tienes stock acumulado que no se mueve y capital inmovilizado.",
    detail:
      "Rotación de inventario baja significa dinero parado que no trabaja para ti.",
  },
  {
    text: "El comercio online te genera ventas pero no sabes si es rentable.",
    detail:
      "Costes de envío, devoluciones, publicidad y mantenimiento de tienda. Hay que hacer números.",
  },
  {
    text: "Los márgenes se han ido estrechando y cada vez cuesta más llegar a fin de mes.",
    detail:
      "Cuando los márgenes bajan, la solución no es vender más de lo mismo. Es revisar estructura, precios y mix de producto.",
  },
  {
    text: "Tu negocio depende de ti para todo: compras, ventas, caja, redes, almacén.",
    detail:
      "Si no puedes faltar un día sin que todo se pare, tienes un problema de organización.",
  },
];

const conocemos = [
  {
    title: "Márgenes por categoría y producto",
    description:
      "Analizamos qué categorías y productos aportan margen real y cuáles solo ocupan espacio. La rentabilidad se trabaja producto a producto.",
  },
  {
    title: "Rotación de inventario y stock",
    description:
      "Productos que no rotan son capital muerto. Revisamos rotación, puntos de reposición y obsolescencia.",
  },
  {
    title: "Diferenciación frente a grandes superficies",
    description:
      "Un comercio no puede competir por precio con Amazon o Mercadona. Pero puede competir — y ganar — con servicio, especialización y experiencia de compra.",
  },
  {
    title: "Captación local y visibilidad",
    description:
      "Google Maps, ficha de Google, redes sociales con sentido, alianzas con otros comercios. Lo que realmente trae clientes a una tienda.",
  },
  {
    title: "Canal online como complemento",
    description:
      "Tienda online, marketplace, venta por WhatsApp o redes. Sabemos cuándo tiene sentido, cuándo no y cómo hacerlo sin quemar dinero.",
  },
  {
    title: "Fidelización y ticket medio",
    description:
      "Conseguir que un cliente vuelva y que gaste más cada vez. Programas de fidelización prácticos que funcionan en comercio real.",
  },
];

const servicios = [
  {
    number: "01",
    title: "Diagnóstico de rentabilidad del comercio",
    description:
      "Analizamos márgenes por categoría, rotación de stock, costes fijos y variables, y estructura de ingresos. Te decimos exactamente dónde ganas y dónde pierdes.",
  },
  {
    number: "02",
    title: "Revisión de precios y mix de producto",
    description:
      "Ajustamos precios con criterio, eliminamos productos que no rinden y potenciamos los que sí. El objetivo es que cada metro de estantería trabaje para ti.",
  },
  {
    number: "03",
    title: "Sistema de captación de clientes",
    description:
      "Diseñamos un plan de captación adaptado a tu zona y tu tipo de comercio. Google Maps, reseñas, alianzas locales, canal online y fidelización.",
  },
  {
    number: "04",
    title: "Organización y procesos",
    description:
      "Compras, almacén, caja, atención al cliente, tareas diarias. Procesos claros para que el negocio funcione sin que todo pase por ti.",
  },
];

const pasos = [
  {
    number: "1",
    title: "Conversación inicial gratuita",
    description:
      "30 minutos para entender tu situación: tipo de comercio, facturación, márgenes, problemas principales. Sin compromiso.",
  },
  {
    number: "2",
    title: "Diagnóstico y propuesta cerrada",
    description:
      "Analizamos tu negocio, identificamos los problemas reales y te presentamos una propuesta con alcance, plazo y precio cerrado.",
  },
  {
    number: "3",
    title: "Trabajo, seguimiento y resultados",
    description:
      "Ejecutamos el plan con reuniones periódicas. Medimos resultados en euros, no en sensaciones. Sin letra pequeña.",
  },
];

const FAQS = [
  {
    question:
      "¿Trabajáis con tiendas pequeñas o solo con comercios grandes?",
    answer:
      "Trabajamos con comercios de cualquier tamaño. De hecho, la mayoría de nuestros clientes en retail son tiendas con 1-5 empleados. Son los que más necesitan revisar márgenes y diferenciarse.",
  },
  {
    question: "Tengo una tienda online, ¿también os aplica?",
    answer:
      "Sí. La consultoría para e-commerce se centra en rentabilidad real: coste de adquisición de cliente, márgenes después de envío y devoluciones, y optimización del catálogo. Los problemas de fondo son los mismos que en una tienda física.",
  },
  {
    question: "¿Cuánto cuesta la consultoría para un comercio?",
    answer:
      "Desde 500 € el diagnóstico puntual. Los programas de mejora completos arrancan desde 1.200 € y duran entre 2 y 3 meses. Siempre con propuesta cerrada.",
  },
  {
    question:
      "Mi tienda compite contra el supermercado, ¿tiene solución?",
    answer:
      "Sí, si dejas de competir por precio. El comercio de proximidad gana con servicio, especialización, producto diferencial y relación con el cliente. Hemos trabajado con comercios que compiten directamente con grandes superficies y ganan.",
  },
  {
    question: "¿También ayudáis con el canal online?",
    answer:
      "Ayudamos a decidir si tiene sentido montar canal online, qué plataforma usar y cómo hacerlo rentable. No montamos tiendas ni hacemos diseño web, pero sí definimos la estrategia comercial y de rentabilidad.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "ProfessionalService",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  name: "Consultoría para comercio y retail",
  description:
    "Consultoría empresarial para comercios y retail: tiendas físicas, e-commerce, franquicias, mayoristas, agroalimentario y farmacias.",
  areaServed: { "@type": "Country", name: "España" },
  serviceType: [
    "Consultoría para tiendas físicas",
    "Consultoría para comercio de barrio",
    "Consultoría para e-commerce",
    "Mejora de rentabilidad en retail",
    "Consultoría para mayoristas y distribuidores",
  ],
};

export default function ConsultoriaComercio() {
  const subject = encodeURIComponent(
    "Consulta sobre consultoría para comercio"
  );
  const body = encodeURIComponent(
    "Hola,\n\nTengo un comercio y me interesa conocer más sobre vuestros servicios de consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
  );
  const mailtoLink = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Consultoría especializada — Comercio y retail
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Consultoría para comercio y retail
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Si tienes una tienda, un comercio de barrio, un e-commerce o un
            negocio de distribución y sientes que los márgenes se estrechan, que
            no llegan clientes nuevos o que cada vez es más difícil competir,
            podemos ayudarte. Con un análisis real de tu negocio y un plan para
            mejorarlo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Tipos de negocio */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Si tienes un comercio, esto te interesa
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Trabajamos con tiendas de todo tipo, comercios de barrio, franquicias,
            e-commerce, mayoristas, distribuidores, farmacias y empresas
            agroalimentarias. Los problemas de fondo que frenan la rentabilidad
            son los mismos en todos ellos.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {negocios.map((n) => (
              <div
                key={n}
                className="flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50/30 p-3 text-sm text-primary-900"
              >
                <span className="text-accent-500">&#10003;</span>
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="section-padding bg-gray-800">
        <div className="container-narrow">
          <h2 className="section-heading text-white">
            Los problemas que frenan la rentabilidad en el comercio
          </h2>
          <p className="section-subtitle text-gray-400">
            El comercio está cambiando, pero los problemas de fondo siguen
            siendo los mismos. Si no los detectas, no puedes resolverlos.
          </p>
          <div className="mt-10 space-y-5">
            {problemas.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 text-lg text-accent-400">&#10005;</span>
                <div>
                  <p className="font-medium text-gray-200">{p.text}</p>
                  <p className="mt-1 text-sm text-gray-400">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-white/5 p-6 text-center">
            <p className="text-gray-300">
              Si te reconoces en varios de estos problemas, la solución no es
              vender más de lo mismo.{" "}
              <strong className="text-white">
                Es revisar la estructura de tu negocio
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Qué entendemos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Entendemos cómo funciona un comercio
          </h2>
          <p className="section-subtitle text-gray-600">
            Conocemos las dinámicas del retail, los márgenes por categoría, la
            gestión de stock y la captación local.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conocemos.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-gray-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo ayudamos */}
      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo ayudamos a comercios y tiendas
          </h2>
          <div className="mt-10 space-y-6">
            {servicios.map((s) => (
              <div
                key={s.number}
                className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md md:p-8"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {s.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo empezamos a trabajar
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {pasos.map((p) => (
              <div
                key={p.number}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-xl font-extrabold text-primary-700">
                  {p.number}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso de éxito */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Casos reales en comercio
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/blog/caso-exito-tienda-barrio-rentabilidad"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Una tienda de barrio que competía con el supermercado y ganó
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cómo un comercio de proximidad dejó de competir por precio y
                encontró su propuesta diferencial.
              </p>
            </a>
            <a
              href="/blog/caso-exito-comercio-rural-galicia-nicho-online"
              className="block rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Caso de éxito
              </p>
              <h3 className="mt-2 text-lg font-bold text-primary-900">
                Un comercio rural en Galicia que encontró su nicho online
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                De tienda local con futuro incierto a negocio rentable con canal
                digital.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre consultoría para comercio
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-5 open:border-accent-300 open:bg-accent-50/40"
              >
                <summary className="cursor-pointer list-none font-semibold text-primary-900 md:text-lg">
                  <span className="mr-2 inline-block text-accent-600 transition-transform group-open:rotate-90">
                    &#9656;
                  </span>
                  {faq.question}
                </summary>
                <p className="mt-3 pl-6 leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres que analicemos la rentabilidad de tu comercio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-200 md:text-lg">
            La primera conversación es gratis y sin compromiso. 30 minutos para
            entender tu situación y ver si tiene sentido trabajar juntos.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={mailtoLink} className="btn-primary">
              Enviar email
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
            <a href={SITE.phoneLink} className="btn-outline-light">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Lecturas relacionadas */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-primary-900">
            Lecturas relacionadas para comercios
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/blog/como-fijar-precios-en-tu-negocio"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Precios
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo fijar precios en tu negocio sin perder clientes ni margen
              </p>
            </a>
            <a
              href="/blog/como-captar-clientes-negocio-local"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Captación
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo captar clientes en un negocio local sin tirar dinero
              </p>
            </a>
            <a
              href="/blog/google-my-business-negocios-locales"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Visibilidad
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Google My Business para negocios locales: guía práctica
              </p>
            </a>
            <a
              href="/blog/como-diferenciarte-de-tu-competencia"
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Estrategia
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-primary-900">
                Cómo diferenciarte de tu competencia sin competir en precio
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
