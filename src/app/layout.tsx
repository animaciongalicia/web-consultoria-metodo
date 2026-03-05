import type { Metadata } from "next";
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
  "@type": "LocalBusiness",
  name: "Consultoría Método",
  description: SITE.description,
  url: "https://consultoriametodo.es",
  telephone: "+34678288284",
  email: "info@consultoriametodo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ronda de Montealto, 4",
    postalCode: "15002",
    addressLocality: "A Coruña",
    addressRegion: "Galicia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "A Coruña" },
    { "@type": "State", name: "Galicia" },
  ],
  founder: {
    "@type": "Person",
    name: "Pablo García Dacosta",
    jobTitle: "Consultor de negocios",
  },
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-19:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
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
