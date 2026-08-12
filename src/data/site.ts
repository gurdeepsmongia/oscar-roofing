// Single source of truth for verified business facts.
// Do not hardcode any of these values elsewhere — import from here.
// Anything not listed here (address, reviews, certifications, years in business, etc.)
// is an unresolved PLACEHOLDER per docs/client-information.md and must not be invented.

export const site = {
  name: "Oscar Roofing",
  domain: "oscarroofingcanada.ca",
  url: "https://oscarroofingcanada.ca",
  phoneDisplay: "+1 (416) 710-9798",
  phoneHref: "tel:+14167109798",
  email: "oscarroofing520@gmail.com",
  emailHref: "mailto:oscarroofing520@gmail.com",
  hours: "9:00 AM – 7:00 PM",
  hoursShort: "9 AM – 7 PM",
  serviceArea: "Greater Toronto Area, Ontario, Canada",
  // Address intentionally omitted — client has not yet provided one (see docs/client-information.md).
  primaryCta: "Get a Quote",
  secondaryCta: "Call Now",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Get a Quote", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Disclaimer", href: "/terms" },
] as const;
