import { SITE_URL, ADVOCATE_NAME, ADVOCATE_IMAGE, PHONE, EMAIL, OFFICES } from "./site";

const addr = (street: string, locality: string, pin: string) => ({
  "@type": "PostalAddress",
  streetAddress: street,
  addressLocality: locality,
  addressRegion: "Punjab",
  postalCode: pin,
  addressCountry: "IN",
});

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: ADVOCATE_NAME,
      alternateName: ["Harmanjeet Singh Saini Advocate", "Advocate Harmanjeet Singh Saini", "HS Saini Advocate"],
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Harmanjeet Singh Saini",
      honorificPrefix: "Adv.",
      jobTitle: "Advocate",
      image: `${SITE_URL}${ADVOCATE_IMAGE}`,
      url: SITE_URL,
      telephone: PHONE,
      email: EMAIL,
      worksFor: { "@id": `${SITE_URL}/#legalservice` },
      memberOf: { "@type": "Organization", name: "Bar Council of Punjab and Haryana" },
    },
    {
      "@type": ["LegalService", "Attorney"],
      "@id": `${SITE_URL}/#legalservice`,
      name: `${ADVOCATE_NAME} - Advocate`,
      url: SITE_URL,
      image: `${SITE_URL}${ADVOCATE_IMAGE}`,
      telephone: PHONE,
      email: EMAIL,
      priceRange: "$$",
      description:
        "Advocate practicing at Punjab & Haryana High Court and District & Sessions Courts in Mohali and Chandigarh: criminal, civil, divorce, cheque bounce, bail, arbitration and contract drafting.",
      founder: { "@id": `${SITE_URL}/#person` },
      address: addr("SCO 14-D, Sector 85, Wave Estate", "Mohali", OFFICES.office1.pin),
      location: [
        {
          "@type": "Place",
          name: "Chamber Office, Wave Estate, Mohali",
          address: addr("SCO 14-D, Sector 85, Wave Estate", "Mohali", OFFICES.office1.pin),
          hasMap: OFFICES.office1.mapLink,
        },
        {
          "@type": "Place",
          name: "Office-cum-Residence, Silver Enclave, Kharar",
          address: addr("#529, Silver Enclave, Sector 125", "Kharar, Mohali", OFFICES.office2.pin),
          hasMap: OFFICES.office2.mapLink,
        },
      ],
      areaServed: ["Mohali", "Chandigarh", "Kharar", "Panchkula", "Punjab", "Haryana"],
      knowsAbout: [
        "Criminal Law", "Anticipatory Bail", "Cheque Bounce Section 138 NI Act", "Divorce and Family Law",
        "Civil Litigation", "Arbitration", "Contract Drafting", "FIR Quashing",
      ],
    },
  ],
};
