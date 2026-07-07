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

/** Cabeçalho padrão das seções: eyebrow em azul, título serifado e descrição. */
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
          "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em]",
          dark ? "text-navy-300" : "text-navy-800 dark:text-navy-300",
          align === "center" && "justify-center"
        )}
      >
        <span
          className={cn(
            "h-px w-8",
            dark ? "bg-navy-300/60" : "bg-navy-800/50 dark:bg-navy-300/60"
          )}
          aria-hidden="true"
        />
        {eyebrow}
        {align === "center" && (
          <span
            className={cn(
              "h-px w-8",
              dark ? "bg-navy-300/60" : "bg-navy-800/50 dark:bg-navy-300/60"
            )}
            aria-hidden="true"
          />
        )}
      </p>
      <Tag
        className={cn(
          "font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]",
          dark ? "text-white" : "text-ink-900 dark:text-white"
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
