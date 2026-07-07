"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, MapPin, Menu, Moon, Phone, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useTheme } from "@/hooks/useTheme";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Monograma tipográfico (GC) — marca própria no lugar de um ícone genérico. */
function Monogram() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center border border-navy-700/40 font-serif text-base font-medium leading-none text-navy-700 transition-colors duration-500 group-hover:border-navy-700 dark:border-navy-300/40 dark:text-navy-300 dark:group-hover:border-navy-300"
      aria-hidden="true"
    >
      GC
    </span>
  );
}

export function Navbar() {
  const scrolled = useScrolled(32);
  const { theme, toggleTheme, mounted } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || menuOpen
          ? "border-b border-ink-200 bg-bone/90 shadow-lg shadow-ink-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/90 dark:shadow-black/10"
          : "bg-transparent"
      )}
    >
      {/* Barra utilitária: recolhe ao rolar */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-ink-900/10 transition-all duration-500 dark:border-white/10 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-8 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-navy-700 dark:text-navy-300" aria-hidden="true" />
              {SITE.address.city}, {SITE.address.state}
            </span>
            <span className="text-navy-700/60 dark:text-navy-300/50" aria-hidden="true">
              {SITE.oab}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-1.5 transition-colors duration-300 hover:text-navy-700 dark:hover:text-navy-300"
            >
              <Phone className="h-3 w-3 text-navy-700 dark:text-navy-300" aria-hidden="true" />
              {SITE.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-navy-700 dark:text-navy-300" aria-hidden="true" />
              Seg–Sex · 08h–19h
            </span>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "mx-auto flex max-w-container items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8",
          scrolled ? "h-16 lg:h-[4.5rem]" : "h-16 lg:h-20"
        )}
        aria-label="Navegação principal"
      >
        <Link
          href="#inicio"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-800 dark:focus-visible:outline-navy-300"
          aria-label={`${SITE.name} — voltar ao início`}
        >
          <Monogram />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-medium tracking-wide text-ink-900 dark:text-white">
              Gabriella <span className="italic text-navy-700 dark:text-navy-300">Coelho</span>
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-ink-500 dark:text-ink-400">
              Advocacia
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink-600 transition-colors duration-300 hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-800 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-navy-800 after:transition-all after:duration-300 hover:after:w-full dark:text-ink-300 dark:hover:text-white dark:focus-visible:outline-navy-300 dark:after:bg-navy-300"
              >
                {link.short ?? link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition-colors duration-300 hover:bg-ink-900/5 hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 dark:text-ink-200 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-navy-300"
            aria-label={
              theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
            }
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-sm border border-navy-800/40 px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-navy-800 transition-all duration-300 hover:border-navy-800 hover:bg-navy-800 hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 dark:border-navy-300/50 dark:text-navy-200 dark:hover:border-navy-300 dark:hover:bg-navy-300 dark:hover:text-ink-950 dark:focus-visible:outline-navy-300 md:inline-flex"
          >
            Falar com a advogada
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 transition-colors duration-300 hover:bg-ink-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 dark:text-white dark:hover:bg-white/10 dark:focus-visible:outline-navy-300 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-200 bg-bone/95 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/95 xl:hidden"
          >
            <ul className="space-y-1 px-4 py-6 sm:px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-sm px-3 py-3 font-serif text-xl text-ink-800 transition-colors duration-300 hover:bg-ink-900/5 hover:text-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-800 dark:text-ink-100 dark:hover:bg-white/5 dark:hover:text-navy-300 dark:focus-visible:outline-navy-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4 space-y-3 border-t border-ink-200 pt-5 dark:border-white/10">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2 px-3 text-sm text-ink-600 dark:text-ink-300"
                >
                  <Phone className="h-4 w-4 text-navy-700 dark:text-navy-300" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm bg-navy-800 px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.08em] text-bone transition-colors duration-300 hover:bg-navy-700 dark:bg-navy-300 dark:text-ink-950 dark:hover:bg-navy-200"
                >
                  Falar com a advogada
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
