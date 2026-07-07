import { FAQ_ITEMS, PRACTICE_AREAS, SITE, STATS } from "./constants";

/**
 * Structured data completa (JSON-LD @graph):
 * Organization, LegalService/LocalBusiness, Attorney, FAQPage, BreadcrumbList e WebSite.
 */
export function buildJsonLd(): Record<string, unknown> {
  const orgId = `${SITE.url}/#organization`;
  const websiteId = `${SITE.url}/#website`;
  const legalServiceId = `${SITE.url}/#legalservice`;

  const address = {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: `${SITE.url}/icon.svg`,
        email: SITE.email,
        telephone: SITE.phoneRaw,
        foundingDate: String(SITE.foundingYear),
        address,
        sameAs: [SITE.social.instagram, SITE.social.linkedin, SITE.social.facebook],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": orgId },
        inLanguage: "pt-BR",
      },
      {
        "@type": ["LegalService", "LocalBusiness"],
        "@id": legalServiceId,
        name: SITE.name,
        description: SITE.description,
        url: SITE.url,
        image: `${SITE.url}/og-image.svg`,
        telephone: SITE.phoneRaw,
        email: SITE.email,
        priceRange: "$$",
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        parentOrganization: { "@id": orgId },
        areaServed: { "@type": "Country", name: "Brasil" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Áreas de Atuação",
          itemListElement: PRACTICE_AREAS.map((area) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: area.title,
              description: area.description,
            },
          })),
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: String(STATS[0].value),
          bestRating: "5",
        },
      },
      {
        "@type": "Attorney",
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phoneRaw,
        address,
        parentOrganization: { "@id": orgId },
        knowsAbout: PRACTICE_AREAS.map((area) => area.title),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE.url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Áreas de Atuação",
            item: `${SITE.url}/#areas-de-atuacao`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contato",
            item: `${SITE.url}/#contato`,
          },
        ],
      },
    ],
  };
}
