import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section
      id="como-funciona"
      className="bg-white py-24 dark:bg-ink-900 lg:py-32"
      aria-labelledby="processo-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como Funciona"
          title="Do primeiro contato à solução do seu caso"
          description="Um processo claro e transparente, para que você saiba exatamente o que esperar em cada etapa."
        />

        <ol className="relative mx-auto mt-16 max-w-3xl">
          {/* Linha vertical da timeline */}
          <span
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-transparent sm:left-1/2"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal
                key={step.step}
                direction={isEven ? "right" : "left"}
                delay={0.05 * index}
              >
                <li
                  className={cn(
                    "relative mb-10 flex gap-6 pl-16 last:mb-0 sm:w-1/2 sm:pl-0",
                    isEven
                      ? "sm:mr-auto sm:pr-14 sm:text-right"
                      : "sm:ml-auto sm:pl-14"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/50 bg-white font-serif text-lg font-semibold text-gold-600 shadow-md dark:bg-ink-950 dark:text-gold-400",
                      isEven
                        ? "sm:left-auto sm:-right-6"
                        : "sm:-left-6"
                    )}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <div className="rounded-md border border-ink-100 bg-ink-50/60 p-6 transition-colors duration-300 hover:border-gold-500/40 dark:border-ink-700 dark:bg-ink-800/60">
                    <h3 className="font-serif text-xl font-medium text-ink-950 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
