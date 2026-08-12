export type Service = {
  slug: string;
  title: string;
  short: string;
  problem: string;
  benefits: string[];
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Full roof replacements for homes and businesses when repair is no longer the right fit.",
    problem: "Your roof is aging, leaking in multiple places, or has reached the point where patch repairs no longer make sense.",
    benefits: [
      "A full assessment before any work begins",
      "Clear explanation of the materials and process",
      "A tidy, organized job site from start to finish",
    ],
    icon: "replace",
    image: "roof-replacement",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Targeted repairs for leaks, damaged shingles, and localized wear before they spread.",
    problem: "A leak, missing shingles, or storm damage that needs to be fixed before it turns into a bigger problem.",
    benefits: [
      "Prompt assessment of the affected area",
      "Repairs matched to your existing roofing",
      "Straightforward explanation of what's needed",
    ],
    icon: "repair",
    image: "roof-repair",
  },
  {
    slug: "shingle-roofing",
    title: "Shingle Roofing",
    short: "Shingle installation and replacement for residential roofs across the GTA.",
    problem: "Worn, curling, or missing shingles that are letting moisture into your roof deck.",
    benefits: [
      "Clean installation with attention to detail",
      "Options discussed based on your property",
      "Work suited to Ontario's weather conditions",
    ],
    icon: "shingle",
    image: "shingle-roofing",
  },
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    short: "Flat roof installation and repair for residential additions and commercial buildings.",
    problem: "Ponding water, membrane wear, or leaks common to flat and low-slope roofing.",
    benefits: [
      "Solutions suited to flat and low-slope systems",
      "Attention to drainage and membrane condition",
      "Residential and commercial applications",
    ],
    icon: "flat",
    image: "flat-roofing",
  },
  {
    slug: "emergency-roof-repair",
    title: "Emergency Roof Repair",
    short: "Fast response for sudden leaks and storm damage that can't wait.",
    problem: "A sudden leak, storm damage, or fallen debris that's actively letting water into your property.",
    benefits: [
      "Fast response when time matters",
      "Temporary protection when needed",
      "Follow-up repair plan once the property is secure",
    ],
    icon: "emergency",
    image: "emergency-repair",
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    short: "A clear, honest look at your roof's condition before you buy, sell, or plan repairs.",
    problem: "Uncertainty about your roof's condition — before a purchase, after a storm, or as routine maintenance.",
    benefits: [
      "A straightforward look at your roof's condition",
      "Plain-language explanation of any findings",
      "No pressure — just information you can use",
    ],
    icon: "inspection",
    image: "roof-inspection",
  },
  {
    slug: "skylights",
    title: "Skylight Services",
    short: "Skylight installation, replacement, and leak repair.",
    problem: "An aging, leaking, or fogged skylight, or interest in adding natural light to a room.",
    benefits: [
      "Proper flashing and sealing around the unit",
      "Repair or replacement, depending on condition",
      "Coordinated with the surrounding roofing work",
    ],
    icon: "skylight",
    image: "skylights",
  },
  {
    slug: "soffit-fascia",
    title: "Soffit & Fascia",
    short: "Soffit and fascia repair and replacement to protect your roofline and support proper ventilation.",
    problem: "Damaged, rotting, or poorly ventilated soffit and fascia along the edge of your roof.",
    benefits: [
      "Protects the roofline from moisture and pests",
      "Supports proper attic airflow",
      "Finished appearance along the roof edge",
    ],
    icon: "soffit",
    image: "soffit-fascia",
  },
  {
    slug: "eavestrough-gutters",
    title: "Eavestrough / Gutters",
    short: "Gutter installation, repair, and cleanup to keep water moving away from your property.",
    problem: "Clogged, sagging, or leaking eavestroughs that are directing water where it shouldn't go.",
    benefits: [
      "Proper slope and drainage away from your foundation",
      "Repair or full replacement, as needed",
      "Reduces water damage risk around your property",
    ],
    icon: "gutter",
    image: "eavestrough-gutters",
  },
  {
    slug: "attic-insulation",
    title: "Attic Insulation",
    short: "Attic insulation to improve energy efficiency and reduce ice damming.",
    problem: "Uneven indoor temperatures, high energy bills, or ice damming caused by poor attic insulation.",
    benefits: [
      "Helps regulate indoor temperature",
      "Can reduce heating and cooling costs",
      "Addresses a common cause of ice damming",
    ],
    icon: "insulation",
    image: "attic-insulation",
  },
  {
    slug: "attic-ventilation",
    title: "Attic Ventilation",
    short: "Proper attic ventilation to protect your roof deck and extend the life of your roofing.",
    problem: "A hot, humid, or poorly ventilated attic that can shorten the life of your roof from the inside.",
    benefits: [
      "Helps prevent moisture buildup in the attic",
      "Supports the lifespan of your roofing materials",
      "Balanced airflow suited to your roof design",
    ],
    icon: "ventilation",
    image: "attic-ventilation",
  },
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    short: "Roofing solutions for homes across the Greater Toronto Area.",
    problem: "Homeowners looking for dependable roofing work, from a single repair to a full replacement.",
    benefits: [
      "Solutions sized to your home and budget",
      "Clear communication throughout the project",
      "Work suited to your property's roofline",
    ],
    icon: "residential",
    image: "residential-roofing",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    short: "Roofing solutions for commercial and multi-unit properties.",
    problem: "Property managers and business owners needing roofing work with minimal disruption.",
    benefits: [
      "Scheduling that accounts for your operations",
      "Solutions suited to commercial roof systems",
      "A single point of contact throughout the project",
    ],
    icon: "commercial",
    image: "commercial-roofing",
  },
];

export const cities = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Aurora",
  "Newmarket",
  "Pickering",
  "Ajax",
  "Whitby",
  "Oshawa",
  "Scarborough",
  "North York",
  "Etobicoke",
  "East York",
  "York",
  "Oakville",
  "Burlington",
  "Milton",
];
