import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-ink-950 py-24 lg:py-32"
      aria-labelledby="cta-final-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_100%,rgba(196,154,71,0.15),transparent_60%)]" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-container px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Prazos jurídicos não esperam
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="cta-final-titulo"
            className="mx-auto max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Cada dia sem orientação jurídica pode custar um direito seu.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Muitas ações têm prazo para serem propostas — e provas se perdem
            com o tempo. Converse agora com a advogada, entenda
            os seus direitos e decida com segurança. A análise do seu caso não
            custa nada.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 px-10 py-5 text-base font-semibold uppercase tracking-wider text-ink-950 shadow-2xl shadow-gold-500/20 transition-all duration-300 hover:bg-gold-400 hover:shadow-gold-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 active:scale-[0.98]"
            >
              Falar com a advogada agora
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-sm border border-white/25 px-10 py-5 text-base font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold-500/70 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
            >
              Enviar meu caso
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 text-sm text-ink-400">
            Atendimento com sigilo absoluto · Resposta em até 24 horas úteis
          </p>
        </Reveal>
      </div>
    </section>
  );
}
