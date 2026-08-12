// Central image registry. Components import from here — never hardcode an
// image path in a component or page. To replace a placeholder with a real
// Oscar Roofing photo, drop the new file in src/assets/ and update the
// corresponding entry below; every place that image is used updates at once.
import heroHome from "../assets/images/hero-home.jpg";
import roofReplacement from "../assets/images/roof-replacement.jpg";
import roofRepair from "../assets/images/roof-repair.jpg";
import shingleRoofing from "../assets/images/shingle-roofing.jpg";
import flatRoofing from "../assets/images/flat-roofing.jpg";
import emergencyRepair from "../assets/images/emergency-repair.jpg";
import roofInspection from "../assets/images/roof-inspection.jpg";
import skylights from "../assets/images/skylights.jpg";
import soffitFascia from "../assets/images/soffit-fascia.jpg";
import eavestroughGutters from "../assets/images/eavestrough-gutters.jpg";
import atticInsulation from "../assets/images/attic-insulation.jpg";
import atticVentilation from "../assets/images/attic-ventilation.jpg";
import residentialRoofing from "../assets/images/residential-roofing.jpg";
import commercialRoofing from "../assets/images/commercial-roofing.jpg";
import aboutTeam from "../assets/images/about-team.jpg";

import gallery01 from "../assets/gallery/gallery-01.jpg";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";
import gallery05 from "../assets/gallery/gallery-05.jpg";
import gallery06 from "../assets/gallery/gallery-06.jpg";
import gallery07 from "../assets/gallery/gallery-07.jpg";
import gallery08 from "../assets/gallery/gallery-08.jpg";

import logoSource from "../assets/brand/logo-source.jpg";

// Service card / detail images, keyed to match `image` in src/data/services.ts.
// All source photography is royalty-free stock (Unsplash License) — placeholder
// until real Oscar Roofing project photos are supplied, per docs/client-information.md.
export const serviceImages: Record<string, ImageMetadata> = {
  "roof-replacement": roofReplacement,
  "roof-repair": roofRepair,
  "shingle-roofing": shingleRoofing,
  "flat-roofing": flatRoofing,
  "emergency-repair": emergencyRepair,
  "roof-inspection": roofInspection,
  skylights: skylights,
  "soffit-fascia": soffitFascia,
  "eavestrough-gutters": eavestroughGutters,
  "attic-insulation": atticInsulation,
  "attic-ventilation": atticVentilation,
  "residential-roofing": residentialRoofing,
  "commercial-roofing": commercialRoofing,
};

export const hero = heroHome;
export const aboutTeamImage = aboutTeam;
export const logo = logoSource;

export type GalleryCategory =
  | "Roof Replacement"
  | "Roof Repair"
  | "Shingles"
  | "Flat Roofing"
  | "Exterior";

export const galleryItems: { image: ImageMetadata; category: GalleryCategory; alt: string }[] = [
  { image: gallery01, category: "Exterior", alt: "Placeholder project photo — completed residential roof, GTA-style home" },
  { image: gallery02, category: "Roof Replacement", alt: "Placeholder project photo — roof replacement in progress" },
  { image: gallery03, category: "Shingles", alt: "Placeholder project photo — close-up of asphalt shingle roofing" },
  { image: gallery04, category: "Roof Repair", alt: "Placeholder project photo — roof access for repair and inspection" },
  { image: gallery05, category: "Exterior", alt: "Placeholder project photo — eavestrough and gutter detail" },
  { image: gallery06, category: "Flat Roofing", alt: "Placeholder project photo — flat roofing on a low-slope building" },
  { image: gallery07, category: "Exterior", alt: "Placeholder project photo — roofline in winter conditions" },
  { image: gallery08, category: "Exterior", alt: "Placeholder project photo — attic insulation during a roofing project" },
];
