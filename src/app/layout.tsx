import type { Metadata } from "next";
import Script from "next/script";
import { SITE } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://consultoriametodo.es"),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "consultoría de negocios",
    "consultoría empresarial",
    "consultoría pymes",
    "consultor de empresas A Coruña",
    "consultoría de negocios Galicia",
    "consultoría para pymes Galicia",
    "consultoría online España",
    "consultoría empresarial online",
    "consultor de negocios online",
    "consultoría pymes online",
    "Método Rentabilismo",
    "Pablo García Dacosta",
    "mejora de rentabilidad",
    "consultoría estratégica",
  ],
  authors: [{ name: SITE.consultant }],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    locale: "es_ES",
    type: "website",
    url: "https://consultoriametodo.es",
    siteName: "Consultoría Método",
    images: [
      {
        url: "/pablo-garcia-dacosta.jpg",
        width: 800,
        height: 600,
        alt: "Pablo García Dacosta — Consultor de negocios en Galicia y por videollamada en el resto de España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/pablo-garcia-dacosta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://consultoriametodo.es",
  },
};

// Identidad canónica de la organización.
// El @id estable permite que las landings sectoriales/provinciales referencien
// esta entidad sin duplicar la ficha (via provider: { "@id": ... }).
const ORG_ID = "https://consultoriametodo.es/#organization";
const WEBSITE_ID = "https://consultoriametodo.es/#website";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Consultoría Método",
  legalName: "Inversiones SHISO S.L.",
  alternateName: ["Consultoría Método — Pablo García Dacosta"],
  description: SITE.description,
  url: "https://consultoriametodo.es",
  telephone: "+34678288284",
  email: "info@consultoriametodo.es",
  image: "https://consultoriametodo.es/pablo-garcia-dacosta.jpg",
  logo: "https://consultoriametodo.es/pablo-garcia-dacosta.jpg",
  sameAs: [SITE.googleBusinessProfile],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressStreet,
    postalCode: SITE.addressPostalCode,
    addressLocality: SITE.addressCity,
    addressRegion: SITE.addressRegion,
    addressCountry: SITE.addressCountry,
  },
  areaServed: [
    { "@type": "City", name: "A Coruña" },
    { "@type": "City", name: "Santiago de Compostela" },
    { "@type": "City", name: "Ferrol" },
    { "@type": "City", name: "Lugo" },
    { "@type": "City", name: "Ourense" },
    { "@type": "City", name: "Pontevedra" },
    { "@type": "City", name: "Vigo" },
    { "@type": "AdministrativeArea", name: "Provincia de A Coruña" },
    { "@type": "AdministrativeArea", name: "Provincia de Lugo" },
    { "@type": "AdministrativeArea", name: "Provincia de Ourense" },
    { "@type": "AdministrativeArea", name: "Provincia de Pontevedra" },
    { "@type": "State", name: "Galicia" },
    { "@type": "Country", name: "España" },
  ],
  founder: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  knowsAbout: [
    "Consultoría empresarial",
    "Consultoría para pymes",
    "Mejora de rentabilidad empresarial",
    "Gestión de procesos",
    "Organización empresarial",
    "Estrategia comercial",
    "Ventas y captación de clientes",
    "Control de gestión y KPIs",
    "Método Rentabilismo",
    "Consultoría para hostelería y restauración",
    "Consultoría para comercio y retail",
    "Consultoría para servicios profesionales",
    "Consultoría para salud y bienestar",
    "Consultoría para formación, turismo y eventos",
    "Coaching empresarial",
  ],
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-19:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de consultoría empresarial",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Diagnóstico Estratégico del Negocio" },
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "500" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Programa de Mejora de Rentabilidad" },
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "1200" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Programa de Transformación del Negocio" },
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "2200" },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: "https://consultoriametodo.es",
  name: "Consultoría Método",
  description: SITE.description,
  inLanguage: "es-ES",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W495S1YC51"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W495S1YC51');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
