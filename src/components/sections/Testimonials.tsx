import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-bone-300 py-24 dark:bg-ink-950 lg:py-32"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="A confiança de quem já passou por aqui"
          description="Histórias reais de clientes que encontraram no escritório a solução que procuravam."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 3) * 0.08}>
              <figure className="group relative flex h-full flex-col rounded-md border border-ink-200/60 bg-bone-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-800/30 hover:shadow-xl hover:shadow-ink-950/5 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-navy-300/30">
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-navy-800/15 transition-colors duration-300 group-hover:text-navy-800/30 dark:text-navy-300/15 dark:group-hover:text-navy-300/30"
                  aria-hidden="true"
                />
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  “{testimonial.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5 dark:border-ink-800">
                  {/* Foto ilustrativa: avatar com iniciais */}
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800 font-serif text-base font-semibold text-navy-200 dark:bg-ink-800 dark:text-navy-300"
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-950 dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-ink-500 dark:text-ink-400">
                      {testimonial.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
