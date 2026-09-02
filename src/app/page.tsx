import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problems from "@/components/Problems";
import Method from "@/components/Method";
import HowIWork from "@/components/HowIWork";
import Testimonial from "@/components/Testimonial";
import Benefits from "@/components/Benefits";
import ForWho from "@/components/ForWho";
import FreeCall from "@/components/FreeCall";
import About from "@/components/About";
import SeoLocal from "@/components/SeoLocal";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title:
    "Consultoría Empresarial en A Coruña y Galicia | Consultor de Negocios Online — Consultoría Método",
  description:
    "Consultoría empresarial para empresas en A Coruña, Galicia y por videollamada en el resto de España. Mejora empresarial, gestión de procesos, rentabilidad y decisiones estratégicas. Pablo García Dacosta — Método Rentabilismo. +25 años de experiencia.",
  keywords: [
    "consultoría empresarial A Coruña",
    "consultor de negocios Galicia",
    "mejora empresarial pymes",
    "consultor gestión de procesos",
    "consultoría estratégica para empresas",
    "mejorar rentabilidad empresa",
    "consultoría pymes España",
    "consultoría online empresas",
    "asesoría estratégica empresarial",
    "consultoría metodológica",
    "Método Rentabilismo",
    "Pablo García Dacosta",
  ],
  openGraph: {
    title:
      "Consultoría Empresarial en A Coruña y Galicia | Consultoría Método",
    description:
      "Consultoría de negocios para empresas. Mejora empresarial, gestión de procesos y rentabilidad. Presencial en A Coruña y Galicia, por videollamada en el resto de España.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problems />
      <Method />
      <HowIWork />
      <Testimonial />
      <Benefits />

      {/* Cross-link to servicios */}
      <section className="bg-accent-50 border-y border-accent-200 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            ¿Quieres conocer en detalle nuestros{" "}
            <strong className="text-primary-800">servicios de consultoría empresarial</strong>?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Rentabilidad, captación de clientes, organización, procesos y acompañamiento estratégico.
          </p>
          <a
            href="/servicios"
            className="btn-primary mt-6 inline-block"
          >
            Ver servicios
          </a>
        </div>
      </section>

      <ForWho />
      <FreeCall />
      <About />
      <SeoLocal />

      {/* Cross-link to colaboradores */}
      <section className="border-y border-gray-200 bg-gray-50 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            <strong className="text-primary-800">¿Eres gestoría, asesoría o profesional</strong>{" "}
            que trabaja con empresas?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Consultoría Método complementa tu trabajo con mejora de rentabilidad,
            captación y organización. Sin pisar tu terreno.
          </p>
          <a
            href="/colaboradores"
            className="btn-outline mt-6 inline-block"
          >
            Conoce cómo colaborar
          </a>
        </div>
      </section>

      <Faqs />
      <Contact />
    </>
  );
}
