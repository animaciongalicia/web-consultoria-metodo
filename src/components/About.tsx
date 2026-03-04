import Image from "next/image";
import { ABOUT } from "@/lib/content";

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {ABOUT.heading}
        </h2>

        <div className="mt-10 flex flex-col items-start gap-10 md:flex-row">
          {/* Photo */}
          <div className="w-full flex-shrink-0 md:w-64">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/pablo-garcia-dacosta.jpg"
                alt="Pablo García Dacosta — Consultor de negocios en A Coruña"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
