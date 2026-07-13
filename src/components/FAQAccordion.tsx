"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-white/6 shadow-lg shadow-black/15 backdrop-blur">
          <button
            aria-expanded={openIndex === index}
            className="w-full text-left px-6 py-5 flex justify-between items-center gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-foreground">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-brand shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-muted-foreground text-sm leading-6">
              <div className="pt-4 border-t border-white/10">
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
