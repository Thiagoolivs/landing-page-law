"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Scale, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useTheme } from "@/hooks/useTheme";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
          ? "border-b border-white/10 bg-ink-950/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        aria-label="Navegação principal"
      >
        <Link
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
          aria-label={`${SITE.name} — voltar ao início`}
        >
          <Scale
            className="h-7 w-7 text-gold-500 transition-transform duration-500 group-hover:rotate-[8deg]"
            aria-hidden="true"
          />
          <span className="font-serif text-lg font-semibold tracking-wide text-white sm:text-xl">
            Gabriella <span className="text-gold-500">Coelho</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-ink-200 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-200 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
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
            className="hidden items-center rounded-sm border border-gold-500/60 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-ink-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 md:inline-flex"
          >
            Falar com a advogada
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 lg:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
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
                    className="block rounded-sm px-3 py-3 font-serif text-lg text-ink-100 transition-colors duration-300 hover:bg-white/5 hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm bg-gold-500 px-5 py-3.5 text-center text-sm font-semibold text-ink-950 transition-colors duration-300 hover:bg-gold-400"
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
