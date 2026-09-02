import type { Metadata } from "next";
import Script from "next/script";
import { SITE } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import "./globals.css";

export const metadata: Metadata = {
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
    images: [
      {
        url: "https://consultoriametodo.es/pablo-garcia-dacosta.jpg",
        width: 800,
        height: 600,
        alt: "Pablo García Dacosta — Consultor de negocios en Galicia y por videollamada en el resto de España",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://consultoriametodo.es",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría Método",
  description: SITE.description,
  url: "https://consultoriametodo.es",
  telephone: "+34678288284",
  email: "info@consultoriametodo.es",
  image: "https://consultoriametodo.es/pablo-garcia-dacosta.jpg",
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
    { "@type": "AdministrativeArea", name: "Provincia de A Coruña" },
    { "@type": "State", name: "Galicia" },
    { "@type": "Country", name: "España" },
  ],
  founder: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
