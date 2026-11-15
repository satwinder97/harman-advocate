// Single source of truth for address + SEO data.
// Change the address here only - Footer, Hero, Contact, e-card, map and Google (JSON-LD) all read from this file.

export const SITE_URL = "https://adv.hssaini.in";
export const ADVOCATE_NAME = "Adv. Harmanjeet Singh Saini";
export const ADVOCATE_IMAGE = "/images/advocate.jpg"; // file: public/images/advocate.jpg
export const PHONE = "+919592921930";
export const EMAIL = "Adv.HSsaini1930@gmail.com";

const mapEmbed = (q: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

export const OFFICES = {
  office1: {
    line1: "SCO 14-D",
    line2: "Sector 85, Wave Estate",
    city: "Mohali",
    pin: "140308",
    mapEmbed: mapEmbed("SCO 14-D, Sector 85, Wave Estate, Mohali, Punjab 140308"),
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("SCO 14-D, Sector 85, Wave Estate, Mohali, Punjab 140308"),
  },
  office2: {
    line1: "#529, Silver Enclave",
    line2: "Sector 125",
    city: "Kharar, Mohali",
    pin: "140301",
    mapEmbed: mapEmbed("#529, Silver Enclave, Sector 125, Kharar, Mohali, Punjab 140301"),
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("#529, Silver Enclave, Sector 125, Kharar, Mohali, Punjab 140301"),
  },
} as const;

export const OFFICE1_FULL = "SCO 14-D, Sector 85, Wave Estate, Mohali, Punjab 140308";
export const OFFICE2_FULL = "#529, Silver Enclave, Sector 125, Kharar, Mohali, Punjab 140301";

// Pre-filled WhatsApp message. Edit it here.
export const WHATSAPP_MESSAGE = `Dear Advocate Harmanjeet Singh Saini,

I would like to seek your legal consultation regarding a matter. Kindly let me know a convenient time to discuss the details.

Thank you.`;
