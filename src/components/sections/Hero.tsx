"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { useRef } from "react";
import { SITE, TRUST_BADGES, WHATSAPP_LINK } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "18%"]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-bone dark:bg-ink-950"
      aria-label="Apresentação do escritório"
    >
      {/* Fundo: um único brilho azul e uma balança em traço fino (parallax leve) */}
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_72%_18%,rgba(30,42,68,0.08),transparent_62%)] dark:bg-[radial-gradient(ellipse_75%_55%_at_72%_18%,rgba(144,163,193,0.12),transparent_62%)]" />
        {/* Balança monumental em traço fino */}
        <Scale
          className="absolute -right-28 top-1/2 hidden h-[38rem] w-[38rem] -translate-y-1/2 text-ink-900/[0.04] dark:text-white/[0.02] lg:block"
          strokeWidth={0.4}
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-container px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-navy-800 dark:text-navy-300"
          >
            <span className="h-px w-10 bg-navy-800/70 dark:bg-navy-300/80" aria-hidden="true" />
            Advocacia estratégica desde {SITE.foundingYear}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink-900 dark:text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Defendemos seus direitos com{" "}
            <span className="italic text-navy-700 dark:text-navy-200">
              estratégia
            </span>
            , experiência e compromisso.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
          >
            Há mais de 15 anos, unimos rigor técnico e atendimento próximo para
            transformar problemas jurídicos em soluções concretas. Seu caso
            analisado pessoalmente pela advogada — com sigilo absoluto e
            resposta em até 24 horas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-navy-800 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bone transition-all duration-300 hover:bg-navy-700 hover:shadow-xl hover:shadow-navy-800/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-800 active:scale-[0.98] dark:bg-navy-300 dark:text-ink-950 dark:hover:bg-navy-200 dark:hover:shadow-navy-300/20 dark:focus-visible:outline-navy-300"
            >
              Falar com a advogada
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-sm border border-ink-300 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink-800 transition-all duration-300 hover:border-navy-800/60 hover:bg-ink-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-800 active:scale-[0.98] dark:border-white/25 dark:text-white dark:hover:border-navy-300/70 dark:hover:bg-white/5 dark:focus-visible:outline-navy-300"
            >
              Solicitar atendimento
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-14 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-ink-200 pt-8 dark:border-white/10 min-[480px]:grid-cols-2 lg:flex lg:flex-wrap"
            aria-label="Compromissos do escritório"
          >
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2.5 text-sm text-ink-700 dark:text-ink-200"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-navy-800 dark:text-navy-300"
                  aria-hidden="true"
                />
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink-300 p-1.5 dark:border-white/25">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-navy-800 dark:bg-navy-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
