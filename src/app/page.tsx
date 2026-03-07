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

      {/* Cross-link to diagnostico */}
      <section className="bg-accent-50 border-y border-accent-200 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            ¿Quieres conocer en detalle nuestros{" "}
            <strong className="text-primary-800">programas de consultoría empresarial</strong> y{" "}
            <strong className="text-primary-800">diagnóstico de negocio</strong>?
          </p>
          <a
            href="/diagnostico-negocio"
            className="btn-primary mt-6 inline-block"
          >
            Ver programas de consultoría
          </a>
        </div>
      </section>

      <ForWho />
      <FreeCall />
      <About />
      <SeoLocal />
      <Faqs />
      <Contact />
    </>
  );
}
