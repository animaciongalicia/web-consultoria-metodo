import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://consultoriametodo.es";
const PERSON_ID = `${BASE_URL}/#pablo-garcia-dacosta`;

export const metadata: Metadata = {
  title:
    "Libros publicados por Pablo García Dacosta | Consultoría Método",
  description:
    "Tres libros publicados por Pablo García Dacosta sobre rentabilidad empresarial, hábitos profesionales y equilibrio personal-empresa. Disponibles en Amazon.",
  keywords: [
    "libros Pablo García Dacosta",
    "libro rentabilidad negocio",
    "libro hábitos profesionales",
    "libro regala tu tiempo",
    "libros consultoría empresarial",
    "libros pymes España",
  ],
  openGraph: {
    title: "Libros publicados por Pablo García Dacosta",
    description:
      "Tres libros sobre rentabilidad, hábitos profesionales y equilibrio. Disponibles en Amazon.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/libros",
  },
};

type Libro = {
  slug: string;
  titulo: string;
  subtitulo: string;
  sinopsis: string;
  identificador: {
    tipo: "ISBN" | "ASIN";
    valor: string;
  };
  formato: "Paperback" | "Hardcover" | "EBook";
  anio: string;
  idioma: string;
  editorial: string;
  amazon: string;
  imagen?: string;
};

const LIBROS: Libro[] = [
  {
    slug: "como-mejorar-rentabilidad-negocio",
    titulo: "Cómo Mejorar la Rentabilidad de tu Negocio",
    subtitulo: "Estrategias",
    sinopsis:
      "Un manual directo para empresarios que facturan pero no ganan lo que deberían. Pablo García Dacosta reúne en este libro las estrategias que ha aplicado durante más de 25 años como consultor en pymes de sectores muy distintos: revisar márgenes reales, ajustar precios con criterio, controlar costes, diseñar procesos internos y tomar decisiones con números encima de la mesa. Sin humo, sin teoría vacía, sin fórmulas mágicas. Solo palancas concretas que funcionan cuando se aplican con método. Ideal para dueños de negocios pequeños y medianos que sienten que trabajan mucho, tienen clientes y no ven el beneficio reflejado.",
    identificador: { tipo: "ASIN", valor: "B0DKZL6BNM" },
    formato: "Paperback",
    anio: "2024",
    idioma: "es",
    editorial: "Edición independiente",
    amazon:
      "https://www.amazon.es/CÓMO-MEJORAR-RENTABILIDAD-NEGOCIO-Estrategias-ebook/dp/B0DKZL6BNM",
  },
  {
    slug: "habitos-diarios-transformar-prioridades",
    titulo: "Hábitos Diarios",
    subtitulo: "para Transformar tus Prioridades Profesionales",
    sinopsis:
      "Un libro sobre cómo pasar de estar todo el día 'apagando fuegos' a dirigir el negocio de verdad. Pablo García Dacosta comparte los hábitos concretos que separan al empresario que sobrevive del que crece: cómo priorizar cada mañana, qué revisar cada semana, qué decisiones dejar de posponer y cómo dejar de vivir siempre reaccionando. No es un libro de productividad genérico. Es una guía práctica para dueños de negocios que quieren recuperar el control de su tiempo y de sus prioridades — y transformar su empresa en el proceso. Lectura corta, aplicable desde el primer día.",
    identificador: { tipo: "ASIN", valor: "B0FHFCMDT1" },
    formato: "Paperback",
    anio: "2025",
    idioma: "es",
    editorial: "Edición independiente",
    amazon:
      "https://www.amazon.es/Hábitos-Diários-Transformar-Prioridades-Profesional/dp/B0FHFCMDT1",
  },
  {
    slug: "regala-tu-tiempo",
    titulo: "Regala tu Tiempo",
    subtitulo: "Recuperar el Equilibrio y Enfocarte",
    sinopsis:
      "Un libro para empresarios y profesionales que sienten que su negocio les está robando la vida. Pablo García Dacosta plantea una idea contraintuitiva: no se trata de trabajar más ni de 'optimizar horas', sino de aprender a regalar tu tiempo bien — a lo que realmente importa, dentro y fuera del trabajo. Reflexiones y ejercicios prácticos para recuperar el equilibrio, poner foco donde toca y dejar de vivir con la sensación de que nunca hay tiempo suficiente. Un complemento personal a los libros anteriores sobre rentabilidad y hábitos.",
    identificador: { tipo: "ISBN", valor: "8409671883" },
    formato: "Paperback",
    anio: "2024",
    idioma: "es",
    editorial: "Edición independiente",
    amazon:
      "https://www.amazon.es/REGALA-TIEMPO-Recuperar-Equilibrio-Enfocarte/dp/8409671883",
  },
];

// Genera un Book schema por cada libro
const booksJsonLd = LIBROS.map((l) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${BASE_URL}/libros#${l.slug}`,
  name: l.titulo,
  alternateName: l.subtitulo,
  author: { "@id": PERSON_ID },
  ...(l.identificador.tipo === "ISBN"
    ? { isbn: l.identificador.valor }
    : { identifier: `ASIN:${l.identificador.valor}` }),
  bookFormat: `https://schema.org/${l.formato}`,
  datePublished: l.anio,
  inLanguage: l.idioma,
  publisher: { "@type": "Organization", name: l.editorial },
  description: l.sinopsis,
  url: `${BASE_URL}/libros#${l.slug}`,
  sameAs: [l.amazon],
  ...(l.imagen ? { image: l.imagen } : {}),
}));

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Libros publicados por Pablo García Dacosta",
  numberOfItems: LIBROS.length,
  itemListElement: LIBROS.map((l, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@id": `${BASE_URL}/libros#${l.slug}` },
  })),
};

export default function Libros() {
  return (
    <>
      {booksJsonLd.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: `${BASE_URL}/` },
          {
            name: "Sobre Consultoría Método",
            url: `${BASE_URL}/sobre-consultoria-metodo`,
          },
          { name: "Libros y publicaciones", url: `${BASE_URL}/libros` },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Publicaciones
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Libros publicados por Pablo García Dacosta
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Tres libros propios que complementan el trabajo de consultoría —
            rentabilidad, hábitos profesionales y equilibrio personal-empresa.
            Todos disponibles en Amazon.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700 md:text-lg">
            <p>
              Los libros no son un producto aparte — son la parte que sí se
              puede compartir por escrito de todo lo que aprendo en cada
              proyecto de consultoría. Escritos con el mismo estilo que
              usamos en Consultoría Método: directo, sin humo, con
              ejemplos concretos y aplicable desde el primer día.
            </p>
            <p>
              Cada libro aborda un ángulo distinto de lo que veo cada
              semana con empresarios reales: cómo mejorar la rentabilidad
              del negocio, cómo cambiar los hábitos diarios que marcan la
              diferencia entre sobrevivir y crecer, y cómo recuperar el
              equilibrio cuando el negocio te está absorbiendo la vida.
            </p>
          </div>
        </div>
      </section>

      {/* LIBROS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-1">
            {LIBROS.map((libro) => (
              <article
                key={libro.slug}
                id={libro.slug}
                className="rounded-2xl border border-primary-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                  {/* Espacio para portada */}
                  <div className="mx-auto flex h-64 w-44 items-center justify-center rounded-lg border-2 border-dashed border-primary-200 bg-primary-50/40 text-center text-xs text-primary-700 md:mx-0">
                    Portada
                    <br />
                    {libro.titulo}
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                      Libro · {libro.anio}
                    </p>
                    <h2 className="mt-2 text-xl font-extrabold leading-tight text-primary-900 md:text-2xl">
                      {libro.titulo}
                    </h2>
                    {libro.subtitulo && (
                      <p className="mt-1 text-base font-semibold text-gray-700">
                        {libro.subtitulo}
                      </p>
                    )}
                    <p className="mt-4 leading-relaxed text-gray-700">
                      {libro.sinopsis}
                    </p>

                    <dl className="mt-5 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                      <div>
                        <dt className="inline font-semibold text-primary-900">
                          Formato:{" "}
                        </dt>
                        <dd className="inline">
                          Tapa blanda · {libro.idioma === "es" ? "Español" : libro.idioma}
                        </dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold text-primary-900">
                          {libro.identificador.tipo}:{" "}
                        </dt>
                        <dd className="inline">{libro.identificador.valor}</dd>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={libro.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-600"
                      >
                        Comprar en Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE EL AUTOR */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary-200 bg-primary-50/30 p-6 shadow-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
              Sobre el autor
            </p>
            <p className="mt-3 text-lg font-bold text-primary-900">
              Pablo García Dacosta
            </p>
            <p className="mt-3 text-gray-700">
              Consultor de negocios con más de 25 años de experiencia.
              Fundador de Consultoría Método y creador del Método
              Rentabilismo. Trabaja con pymes de toda España desde su
              base en A Coruña.
            </p>
            <a
              href="/pablo-garcia-dacosta"
              className="mt-4 inline-block text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              Ver perfil completo →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres aplicar lo que leas a tu propio negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            Los libros son el punto de partida. La consultoría es el paso
            para aplicarlo con tus números reales encima de la mesa. 30
            minutos de conversación gratis para empezar.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/diagnostico-negocio" className="btn-primary">
              Reservar 30 min gratis
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
    </>
  );
}
