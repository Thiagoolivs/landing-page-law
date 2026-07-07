import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — Advocacia estratégica e atendimento humano`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0C0D12",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 75% 20%, rgba(144,163,193,0.20), transparent 60%)",
          color: "#FFFFFF",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#90A3C1",
            fontSize: "26px",
            letterSpacing: "8px",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "56px", height: "2px", backgroundColor: "#90A3C1" }} />
          Advocacia Estratégica
        </div>
        <div
          style={{
            marginTop: "36px",
            fontSize: "76px",
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Gabriella Coelho
        </div>
        <div
          style={{
            marginTop: "8px",
            fontSize: "40px",
            color: "#90A3C1",
          }}
        >
          Advogada
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "28px",
            color: "#B3B3BA",
            maxWidth: "820px",
            lineHeight: 1.4,
          }}
        >
          Defendemos seus direitos com estratégia, experiência e compromisso.
        </div>
      </div>
    ),
    size
  );
}
