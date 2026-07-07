"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS, WHATSAPP_LINK } from "@/lib/constants";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-24 dark:bg-ink-900 lg:py-32"
      aria-labelledby="faq-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perguntas Frequentes"
          title="Dúvidas comuns antes de contratar um advogado"
          description="Se a sua pergunta não estiver aqui, fale diretamente com a nossa equipe — respondemos em até 24 horas úteis."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink-100 border-y border-ink-100 dark:divide-ink-800 dark:border-ink-800">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={Math.min(index * 0.04, 0.3)}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-resposta-${index}`}
                    id={`faq-pergunta-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 dark:hover:text-gold-400"
                  >
                    <span className="font-serif text-lg font-medium text-ink-950 dark:text-white">
                      {item.question}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all duration-300 dark:border-ink-700 dark:text-ink-300"
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-resposta-${index}`}
                      role="region"
                      aria-labelledby={`faq-pergunta-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-ink-600 dark:text-ink-300">
            Não encontrou a sua dúvida?{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-600 underline-offset-4 transition-colors duration-300 hover:underline dark:text-gold-400"
            >
              Pergunte a um advogado agora
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
