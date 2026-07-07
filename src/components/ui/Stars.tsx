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
          className="h-4 w-4 fill-gold-500 text-gold-500"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
