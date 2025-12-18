import { absoluteUrl, SITE_NAME, SOCIAL } from "@/lib/seo";

type Props = {
  type?: "organization" | "person" | "localBusiness";
};

export default function SeoJsonLd({ type = "organization" }: Props) {
  const base = absoluteUrl("/");
  const logo = absoluteUrl("/assets/alosa-logo.png");

  const common = {
    "@context": "https://schema.org",
    name: SITE_NAME,
    url: base,
    logo,
    sameAs: [
      SOCIAL.instagram,
      SOCIAL.x,
      SOCIAL.tiktok,
      SOCIAL.youtube,
      SOCIAL.facebook,
    ],
  };

  const org = {
    ...common,
    "@type": "Organization",
  };

  const person = {
    ...common,
    "@type": "Person",
    name: "Louis Alosa",
    jobTitle: "Caricature Artist",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  };

  const local = {
    ...common,
    "@type": "LocalBusiness",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    telephone: SOCIAL.phone,
    areaServed: "Nairobi, Kenya",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: base,
    potentialAction: {
      "@type": "SearchAction",
      target: `${base}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const json = [type === "person" ? person : type === "localBusiness" ? local : org, website];

  return <script id="json-ld-primary" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
