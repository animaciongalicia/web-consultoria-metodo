"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {FAQS.heading}
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.items.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="pr-4 font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-xl text-gray-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-6 py-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
