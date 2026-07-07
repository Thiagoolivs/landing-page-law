import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
  { label: "Facebook", href: SITE.social.facebook, icon: Facebook },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300" role="contentinfo">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
            >
              <Scale className="h-7 w-7 text-gold-500" aria-hidden="true" />
              <span className="font-serif text-xl font-semibold text-white">
                Castro <span className="text-gold-500">&amp;</span> Almeida
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              Advocacia estratégica e atendimento humano. Defendemos os seus
              direitos com a seriedade que o seu caso exige.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-ink-500">
              {SITE.oab}
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-all duration-300 hover:border-gold-500 hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                    aria-label={`${SITE.shortName} no ${label}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <nav aria-label="Links do rodapé">
            <h3 className="font-serif text-lg font-medium text-white">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors duration-300 hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed text-ink-400">
                  {SITE.address.street}
                  <br />
                  {SITE.address.district}, {SITE.address.city} —{" "}
                  {SITE.address.state}
                  <br />
                  CEP {SITE.address.zip}
                </address>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 text-ink-400 transition-colors duration-300 hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-ink-400 transition-colors duration-300 hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white">
              Horário de Atendimento
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SITE.hours.map((slot) => (
                <li key={slot.days} className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-400">
                    <span className="block font-medium text-ink-200">
                      {slot.days}
                    </span>
                    {slot.time}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-sm border border-gold-500/60 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-ink-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Atendimento imediato
            </a>
          </div>
        </div>

        {/* Mapa (placeholder) */}
        <div className="mt-14 overflow-hidden rounded-md border border-ink-800">
          <iframe
            title={`Localização do escritório ${SITE.name} em ${SITE.address.city}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${SITE.address.street}, ${SITE.address.city} - ${SITE.address.state}`
            )}&output=embed`}
            className="h-64 w-full grayscale transition-all duration-700 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {SITE.legalName}. Todos os direitos reservados.
          </p>
          <p className="max-w-md text-center sm:text-right">
            Este site tem caráter informativo e observa o Código de Ética e o
            Provimento 205/2021 da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
