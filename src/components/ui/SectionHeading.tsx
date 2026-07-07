import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  as?: "h2" | "h3";
}

/** Cabeçalho padrão das seções: eyebrow dourado, título serifado e descrição. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p
        className={cn(
          "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-500",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-gold-500/70" aria-hidden="true" />
        {eyebrow}
        {align === "center" && (
          <span className="h-px w-8 bg-gold-500/70" aria-hidden="true" />
        )}
      </p>
      <Tag
        className={cn(
          "font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink-950 dark:text-white"
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-ink-300" : "text-ink-600 dark:text-ink-300"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
