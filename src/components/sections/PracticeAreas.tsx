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
      className="bg-ink-50 py-24 dark:bg-ink-950 lg:py-32"
      aria-labelledby="areas-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Áreas de Atuação"
          title="Especialistas em cada frente do Direito"
          description="Uma equipe multidisciplinar para atender pessoas e empresas com profundidade técnica em cada área."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICE_AREAS.map((area, index) => {
            const whatsappAreaLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              `Olá! Gostaria de falar com um advogado sobre ${area.title}.`
            )}`;
            return (
              <Reveal key={area.title} delay={(index % 4) * 0.08}>
                <motion.a
                  href={whatsappAreaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col rounded-md border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-gold-500/50 hover:shadow-xl hover:shadow-ink-950/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-gold-500/40"
                  aria-label={`${area.title}: falar com um advogado desta área`}
                >
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-ink-950 transition-colors duration-300 group-hover:bg-gold-500 dark:bg-ink-800">
                    <area.icon
                      className="h-5 w-5 text-gold-400 transition-colors duration-300 group-hover:text-ink-950"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-serif text-xl font-medium text-ink-950 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {area.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-gold-400">
                    Falar com especialista
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
