import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section
      className="relative overflow-hidden border-y border-navy-300/15 bg-ink-950 py-20 lg:py-24"
      aria-label="Resultados do escritório em números"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(144,163,193,0.08),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="text-center">
                <dt className="order-2 mt-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-400 sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="tabular-nums"
                  />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
