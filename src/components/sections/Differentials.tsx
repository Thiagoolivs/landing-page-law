import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIALS } from "@/lib/constants";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-bone-100 py-24 dark:bg-ink-950 lg:py-32"
      aria-labelledby="diferenciais-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(30,42,68,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(144,163,193,0.09),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por que nos escolher"
          title="O padrão de atendimento que o seu caso merece"
          description="Mais do que conhecer a lei, é preciso saber cuidar de quem confia em nós. Estes são os pilares do nosso trabalho."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-ink-200 bg-ink-200/70 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.08} className="h-full">
              <article className="group h-full bg-bone-100 p-8 transition-colors duration-500 hover:bg-bone-200 dark:bg-ink-950 dark:hover:bg-ink-900">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-navy-800/20 bg-navy-800/[0.06] transition-all duration-500 group-hover:border-navy-800/40 group-hover:bg-navy-800/10 dark:border-navy-300/25 dark:bg-navy-300/10 dark:group-hover:border-navy-300/60 dark:group-hover:bg-navy-300/20">
                  <item.icon className="h-5 w-5 text-navy-800 dark:text-navy-300" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium text-ink-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
