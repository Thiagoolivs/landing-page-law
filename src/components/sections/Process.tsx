import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section
      id="como-funciona"
      className="bg-bone-100 py-24 dark:bg-ink-900 lg:py-32"
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
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-navy-800/50 via-navy-800/25 to-transparent dark:from-navy-300/50 dark:via-navy-300/25 sm:left-1/2"
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
                      "absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-navy-800/40 bg-bone-100 font-serif text-xl font-semibold text-navy-800 shadow-md dark:border-navy-300/40 dark:bg-ink-950 dark:text-navy-300",
                      isEven
                        ? "sm:left-auto sm:-right-6"
                        : "sm:-left-6"
                    )}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <div className="rounded-md border border-ink-200/60 bg-bone-200/60 p-6 transition-colors duration-300 hover:border-navy-800/30 dark:border-ink-700 dark:bg-ink-800/60 dark:hover:border-navy-300/30">
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
