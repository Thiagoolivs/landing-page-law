import { Star } from "lucide-react";

/** Avaliação 5 estrelas (decorativa, com rótulo acessível). */
export function Stars() {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label="Avaliação: 5 de 5 estrelas"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-navy-700 text-navy-700 dark:fill-navy-300 dark:text-navy-300"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
