import type { Metadata, Viewport } from "next";
import { Cormorant, Inter } from "next/font/google";
import Script from "next/script";
import { SITE } from "@/lib/constants";
import { buildJsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Serifada de alto contraste e traço delicado — a "elegância inexplicável"
const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Advocacia Especializada em ${SITE.address.city}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "advogada",
    "escritório de advocacia",
    "advogada trabalhista",
    "advogada previdenciária",
    "advogada cível",
    "advogada empresarial",
    "advogada de família",
    "advogada imobiliária",
    "advogada tributária",
    "direito do consumidor",
    `advogada ${SITE.address.city}`,
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Advocacia estratégica e atendimento humano`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Advocacia Especializada`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Legal Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F3F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0D12" },
  ],
};

/** Aplica o tema salvo antes da hidratação para evitar flash de tema errado. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-sm bg-navy-800 px-6 py-3 text-sm font-semibold text-bone focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
