"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRACTICE_AREAS, SITE } from "@/lib/constants";

export function PracticeAreas() {
  return (
    <section
      id="areas-de-atuacao"
      className="bg-bone-300 py-24 dark:bg-ink-950 lg:py-32"
      aria-labelledby="areas-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Áreas de Atuação"
          title="Especialistas em cada frente do Direito"
          description="Atendimento direto e especializado para pessoas e empresas, com profundidade técnica em cada área."
        />

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICE_AREAS.map((area, index) => {
            const whatsappAreaLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              `Olá! Gostaria de falar com a advogada sobre ${area.title}.`
            )}`;
            return (
              <Reveal key={area.title} delay={(index % 4) * 0.08}>
                <motion.a
                  href={whatsappAreaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col border-t border-ink-300 bg-transparent pt-6 transition-colors duration-500 hover:border-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-800 dark:border-ink-700 dark:hover:border-navy-300 dark:focus-visible:outline-navy-300"
                  aria-label={`${area.title}: falar com a advogada sobre esta área`}
                >
                  <div className="mb-5 flex items-baseline justify-between">
                    <span className="font-serif text-3xl font-medium text-ink-300 transition-colors duration-500 group-hover:text-navy-800 dark:text-ink-700 dark:group-hover:text-navy-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 -translate-x-1 translate-y-1 text-navy-800 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-navy-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-ink-950 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {area.description}
                  </p>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
