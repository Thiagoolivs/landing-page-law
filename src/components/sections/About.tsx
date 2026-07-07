import { Gem, Scale, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

const VALUES = [
  {
    icon: Scale,
    title: "Ética inegociável",
    description:
      "Atuamos com absoluto respeito ao Código de Ética da OAB e à confiança que cada cliente deposita em nós.",
  },
  {
    icon: Gem,
    title: "Excelência técnica",
    description:
      "Estudo contínuo, teses atualizadas e atenção obsessiva aos detalhes que decidem um processo.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso real",
    description:
      "Assumimos cada causa como se fosse nossa. O seu resultado é a medida do nosso trabalho.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="bg-white py-24 dark:bg-ink-900 lg:py-32"
      aria-labelledby="sobre-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Composição visual */}
          <Reveal direction="right" className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-md border border-gold-500/40"
                aria-hidden="true"
              />
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-md bg-ink-950">
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(196,154,71,0.16),transparent_65%)]"
                  aria-hidden="true"
                />
                <Scale
                  className="h-40 w-40 text-gold-500/80 sm:h-52 sm:w-52"
                  strokeWidth={0.75}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink-950/80 p-6 backdrop-blur">
                  <p className="font-serif text-lg text-white">
                    “A justiça é a constante e perpétua vontade de dar a cada um
                    o que é seu.”
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold-400">
                    Ulpiano — Digesto
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-md border border-ink-100 bg-white px-6 py-4 shadow-xl dark:border-ink-700 dark:bg-ink-800 sm:-right-8">
                <p className="font-serif text-3xl font-semibold text-gold-600 dark:text-gold-400">
                  15+
                </p>
                <p className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300">
                  anos de atuação
                </p>
              </div>
            </div>
          </Reveal>

          {/* Narrativa */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="O Escritório"
              title="Tradição jurídica com olhar contemporâneo"
              align="left"
            />
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600 dark:text-ink-300">
                <p>
                  {SITE.name} iniciou sua trajetória em {SITE.foundingYear} com
                  uma convicção simples: por trás de cada processo existe uma
                  pessoa, uma família ou uma empresa que precisa de respostas —
                  não de juridiquês.
                </p>
                <p>
                  Ao longo de mais de uma década e meia, conduzimos milhares de
                  causas em todas as instâncias, sempre com o mesmo método:
                  ouvir com atenção, estudar a fundo e agir com estratégia.
                  Nossa missão é proteger o que é seu com a seriedade de um
                  grande escritório e a proximidade de quem conhece o seu caso
                  pelo nome.
                </p>
              </div>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {VALUES.map((value, index) => (
                <Reveal key={value.title} delay={0.2 + index * 0.1}>
                  <li className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/10">
                      <value.icon
                        className="h-5 w-5 text-gold-600 dark:text-gold-400"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-ink-950 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        {value.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
