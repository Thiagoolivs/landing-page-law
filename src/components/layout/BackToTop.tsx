"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";

/** Botão "voltar ao topo", visível após rolagem. */
export function BackToTop() {
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[5.5rem] right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-300 bg-bone-100/90 text-ink-700 shadow-lg backdrop-blur transition-colors duration-300 hover:border-navy-800 hover:text-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 dark:border-ink-700 dark:bg-ink-900/90 dark:text-ink-200 dark:hover:border-navy-300 dark:hover:text-navy-300 dark:focus-visible:outline-navy-300 sm:bottom-24 sm:right-6"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
