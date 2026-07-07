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
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950"
      aria-label="Apresentação do escritório"
    >
      {/* Fundo: gradientes e grid discretos com parallax leve */}
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(196,154,71,0.13),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_85%,rgba(196,154,71,0.07),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Balança monumental em traço fino */}
        <Scale
          className="absolute -right-24 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 text-white/[0.03] lg:block"
          strokeWidth={0.5}
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-container px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
          >
            <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
            Advocacia estratégica desde {SITE.foundingYear}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Defendemos seus direitos com{" "}
            <span className="text-gold-400">estratégia</span>, experiência e
            compromisso.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            Há mais de 15 anos, unimos rigor técnico e atendimento próximo para
            transformar problemas jurídicos em soluções concretas. Seu caso
            analisado por um advogado especializado — com sigilo absoluto e
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
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 active:scale-[0.98]"
            >
              Falar com um advogado
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-sm border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold-500/70 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 active:scale-[0.98]"
            >
              Solicitar atendimento
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-14 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 pt-8 min-[480px]:grid-cols-2 lg:flex lg:flex-wrap"
            aria-label="Compromissos do escritório"
          >
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2.5 text-sm text-ink-200"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-gold-500"
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
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-gold-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
