import {
  ShieldCheck,
  Pipette,
  Building2,
  Zap,
  Flame,
  Anchor
} from "lucide-react";

// Exact high-resolution sector images from Serving Global Mission-Critical Sectors folder
import aerospaceDefenceImg from "../assets/Serving Global Mission-Critical Sectors/aerospace and defence.png";
import precisionPipingImg from "../assets/Serving Global Mission-Critical Sectors/precision industrial piping.png";
import heavyEngineeringImg from "../assets/Serving Global Mission-Critical Sectors/heavt engineering.png";
import nuclearThermalPowerImg from "../assets/Serving Global Mission-Critical Sectors/nuclear and thermal power.png";
import petrochemicalImg from "../assets/Serving Global Mission-Critical Sectors/petrochemical.png";
import marineImg from "../assets/Serving Global Mission-Critical Sectors/marine.png";

import { PRODUCTS } from "./productCatalog";

/**
 * 6 AUTHORITATIVE INDUSTRIES FROM HOMEPAGE "SERVING GLOBAL MISSIONS"
 * Single Source of Truth for the entire Supreme Metal & Alloys web application.
 */
export const INDUSTRIES = [
  {
    id: "IND-01",
    number: "01",
    slug: "defense-aerospace",
    aliases: ["aerospace-defence", "defense", "aerospace", "defence", "aerospace-defense"],
    title: "Defense & Aerospace",
    shortTitle: "Defense & Aerospace",
    tagline: "Mil-Spec Aerostructures & High-Stress Armor Metallurgy",
    image: aerospaceDefenceImg,
    icon: ShieldCheck,
    accentColor: "#F36F21",
    overview:
      "Supreme supplies mission-critical titanium alloys, precipitation-hardening stainless steels, and nickel superalloys engineered to withstand extreme Mach-speed aerodynamic stress, sudden thermal gradients, and intense shock loads in defense rocketry, aerospace turbine assemblies, and naval armor applications.",
    operatingConditions: [
      "Dynamic aerodynamic stress up to Mach 3+ operational velocities",
      "Extreme thermal cycling from cryogenic conditions to 1,200°C turbine exhaust",
      "Zero-tolerance structural defect limits with mandatory 100% UT/RT NDT verification",
      "High strength-to-weight ratio metallurgy with elite fatigue and fracture toughness"
    ],
    technicalHighlights: {
      temperatureRange: "-196°C to +1,200°C",
      pressureRating: "Up to 20,000 PSI dynamic shock",
      standards: "MIL-DTL, AMS Specs, AS9100 Guidelines, ASTM F136",
      qualityTesting: "100% Ultrasonic, Radiographic & Spectro PMI Clearance"
    },
    keyApplications: [
      "Rocket motor casings & missile structural frames",
      "High-pressure turbine discs & aerospace exhaust forgings",
      "Precipitation-hardened 17-4PH / 15-5PH landing gear actuators",
      "Naval defense radar masts & ordnance handling fasteners",
      "Cryogenic liquid propulsion fuel lines & double-ferrule instrumentation"
    ],
    applicableMaterials: ["titanium", "high-alloys", "nickel", "stainless-steel"],
    applicableCategorySlugs: ["forged-fittings", "flanges", "fasteners", "rods-bars", "pipes-tubes"]
  },
  {
    id: "IND-02",
    number: "02",
    slug: "precision-industrial-piping-biopharma",
    aliases: [
      "precision-industrial-piping",
      "precision-piping",
      "biopharma",
      "pharma-biopharma",
      "industrial-piping-biopharma",
      "precision-industrial-piping-bio-pharma"
    ],
    title: "Precision Industrial Piping & Biopharma",
    shortTitle: "Precision Piping & Biopharma",
    tagline: "Ultra-High Purity Sanitary & ASME BPE Fluid Infrastructure",
    image: precisionPipingImg,
    icon: Pipette,
    accentColor: "#3B82F6",
    overview:
      "Engineered for sterile pharmaceutical environments, biotechnology reactors, and high-purity industrial chemical piping. Supreme delivers mirror-finish electro-polished stainless steel and high-nickel tubing compliant with ASME BPE standards, guaranteeing ultra-low surface roughness (Ra < 0.4µm) to eliminate bacterial entrapment and contamination.",
    operatingConditions: [
      "Continuous exposure to SIP/CIP steam sterilization cycles up to 150°C",
      "Ultra-pure Water-for-Injection (WFI) and pure steam distribution loops",
      "Strict control of ferrite content and inner bore roughness (Ra < 0.4µm / 15 µ-in)",
      "Crevice-free hygienic clamp, tri-clover, and orbital-welded joints"
    ],
    technicalHighlights: {
      temperatureRange: "-80°C to +350°C",
      pressureRating: "Full vacuum to 150 Bar sterile service",
      standards: "ASME BPE, ASTM A270-S2, 3A Sanitary, DIN 11850",
      qualityTesting: "Profilometer Ra Testing, Boroscope Inspection, Passivation Audit"
    },
    keyApplications: [
      "WFI (Water-for-Injection) and ultra-pure distribution manifolds",
      "Bio-fermenter vessel nozzles, tri-clamp ferrules & sanitary gaskets",
      "Chromatography skid piping & sterile diaphragm valve assemblies",
      "Clean-in-Place (CIP) and Steam-in-Place (SIP) process loops",
      "High-purity chemical reagent metering and double-containment lines"
    ],
    applicableMaterials: ["stainless-steel", "high-alloys"],
    applicableCategorySlugs: ["dairy-sanitary-fittings", "pipes-tubes", "ferrule-fittings", "buttweld-fittings"]
  },
  {
    id: "IND-03",
    number: "03",
    slug: "heavy-engineering-infrastructures",
    aliases: [
      "heavy-engineering-infrastructure",
      "heavy-engineering",
      "infrastructure",
      "heavy-infrastructures"
    ],
    title: "Heavy Engineering & Infrastructures",
    shortTitle: "Heavy Engineering",
    tagline: "Structural Plates, Heavy Forgings & High-Load Fastening",
    image: heavyEngineeringImg,
    icon: Building2,
    accentColor: "#10B981",
    overview:
      "Providing high-tensile structural carbon steel, alloy steel, and heavy stainless profiles for megastructures, bridge trusses, heavy machinery fabrications, and hydraulic equipment. We supply custom plasma, waterjet, and band-saw cut plates up to 200mm thickness with beveling for structural weld preparations.",
    operatingConditions: [
      "Extreme static and cyclic tensile loads on structural nodes and crane booms",
      "Heavy abrasion and mechanical wear in material handling earthmovers",
      "Outdoor atmospheric exposure requiring weather-resistant and coated alloys",
      "Severe shear stress on heavy foundation bolting and custom forged rings"
    ],
    technicalHighlights: {
      temperatureRange: "-40°C to +400°C",
      pressureRating: "High-load yield up to 690 MPa",
      standards: "ASTM A36, ASTM A516 Gr 70, EN 10025 S355, IS 2062",
      qualityTesting: "Charpy V-Notch Impact Testing, Through-Thickness Z-Test (ASTM A770)"
    },
    keyApplications: [
      "Heavy pressure vessel shells, boiler drum plates & dished ends",
      "Hydraulic cylinder tie-rods, forged crankshafts & heavy pins",
      "Bridge structural girder plates and seismic damper connections",
      "Crane boom structural bolting and high-tensile foundation anchor studs",
      "Custom forged rings and machined circular blanks for rotary kilns"
    ],
    applicableMaterials: ["carbon", "alloy-steel", "stainless-steel"],
    applicableCategorySlugs: ["sheets-plates", "rods-bars", "circle", "ring", "flat", "fasteners"]
  },
  {
    id: "IND-04",
    number: "04",
    slug: "nuclear-thermal-power",
    aliases: ["nuclear-thermal", "nuclear", "thermal-power", "power-generation"],
    title: "Nuclear & Thermal Power",
    shortTitle: "Nuclear & Thermal Power",
    tagline: "High-Temperature Creep-Resistant & ASME Section III Piping",
    image: nuclearThermalPowerImg,
    icon: Zap,
    accentColor: "#F59E0B",
    overview:
      "Supreme supplies certified boiler quality plates, high-alloy chrome-moly P91/P22 piping, and nuclear-grade Inconel steam generator tubing engineered to endure sustained thermal creep, cyclic thermal shock, and radiation environments in primary reactor and supercritical power utility stations.",
    operatingConditions: [
      "Prolonged superheated steam service at temperatures exceeding 600°C",
      "Subcritical to ultra-supercritical steam pressures reaching 300 Bar+",
      "Radiation resistance and cobalt-free material constraints for primary loops",
      "Resistance to stress-assisted corrosion cracking and hydrogen embrittlement"
    ],
    technicalHighlights: {
      temperatureRange: "Cryogenic up to +650°C creep threshold",
      pressureRating: "Up to 350 Bar superheated steam",
      standards: "ASME Sec III / Sec VIII, ASTM A335 (P11, P22, P91), ASTM A213",
      qualityTesting: "100% Hydrostatic, Ultrasonic, Eddy Current & Creep Rupture Verification"
    },
    keyApplications: [
      "Nuclear reactor cooling lines & auxiliary heat exchanger bundles",
      "Supercritical boiler superheater, reheater & main steam headers",
      "ASME Section III class 1, 2, and 3 forged fittings and flanges",
      "Turbine bypass line piping & high-pressure feedwater heater tubes",
      "Radiation shielding penetrations and containment vessel anchor bolting"
    ],
    applicableMaterials: ["alloy-steel", "nickel", "carbon", "stainless-steel"],
    applicableCategorySlugs: ["pipes-tubes", "forged-fittings", "buttweld-fittings", "flanges", "sheets-plates"]
  },
  {
    id: "IND-05",
    number: "05",
    slug: "petrochemicals-chemicals",
    aliases: ["petrochemical-chemical-process", "petrochemical", "chemicals", "petrochemicals"],
    title: "Petrochemicals & Chemicals",
    shortTitle: "Petrochemicals & Chemicals",
    tagline: "Severe Acid Handling, Sour Gas & Hydrocarbon Processing",
    image: petrochemicalImg,
    icon: Flame,
    accentColor: "#EF4444",
    overview:
      "Tailored for aggressive chemical processing, oil & gas refining, chlor-alkali production, and fertilizer synthesis. Supreme supplies Hastelloy C276/C22, Incoloy, Duplex 2205, and Super Duplex 2507 engineered to resist sulfuric, nitric, and hydrochloric acids, along with sour gas (H2S) stress cracking.",
    operatingConditions: [
      "Severe wet H2S sour gas environments compliant with NACE MR0175 / ISO 15156",
      "Extreme exposure to reducing and oxidizing hot concentrated acids",
      "High pitting and crevice corrosion vulnerability in hot chloride solutions",
      "Elevated hydrocarbon distillation column temperatures and cyclic cracking risks"
    ],
    technicalHighlights: {
      temperatureRange: "-100°C to +950°C",
      pressureRating: "ANSI Class 150 through Class 2500",
      standards: "NACE MR0175/ISO 15156, ASTM B574/B575, ASME B16.5, ASTM A182",
      qualityTesting: "HIC/SSCC Resistance Testing, ASTM G48 Pitting Evaluation, PMI"
    },
    keyApplications: [
      "Amine scrubbers, sour gas stripping columns & sulfur recovery units",
      "Sulfuric and hydrochloric acid synthesis heat exchanger bundles",
      "Hydrocracker furnace piping, transfer lines & quench headers",
      "Chlor-alkali electrolyzer piping, brine headers & titanium cells",
      "High-pressure refinery flanges, butt weld reducers & heavy forged tees"
    ],
    applicableMaterials: ["high-alloys", "duplex", "super-duplex", "nickel", "stainless-steel"],
    applicableCategorySlugs: ["flanges", "forged-fittings", "buttweld-fittings", "pipes-tubes", "fasteners", "perforated-sheets"]
  },
  {
    id: "IND-06",
    number: "06",
    slug: "marine-offshore-rigs",
    aliases: ["marine-offshore", "marine", "offshore", "marine-shipbuilding"],
    title: "Marine & Offshore Rigs",
    shortTitle: "Marine & Offshore Rigs",
    tagline: "Chloride Pitting Resistance, Subsea & Splash Zone Metallurgy",
    image: marineImg,
    icon: Anchor,
    accentColor: "#06B6D4",
    overview:
      "Certified for subsea extraction, offshore drilling platforms, FPSO vessels, and marine shipbuilding. Supreme supplies Super Duplex 2507, Cupro-Nickel 70/30 & 90/10, Monel 400/K500, and Titanium designed to defeat seawater pitting, bio-fouling, and wave-induced cyclic fatigue in splash zones and deepsea lines.",
    operatingConditions: [
      "Perpetual seawater immersion with high chloride concentrations and bio-fouling",
      "Severe localized pitting and crevice attack requiring high PREN (>42) metallurgy",
      "Intense hydrostatic pressure in subsea manifold and risers up to 3,000m depth",
      "Wave dynamic cyclic fatigue, cavitation, and marine splash zone oxidation"
    ],
    technicalHighlights: {
      temperatureRange: "-50°C to +300°C subsea & topside service",
      pressureRating: "Subsea 10,000 - 15,000 PSI Working Pressure",
      standards: "NORSOK M-650 / M-630, ASTM A182 F53/F55, ASTM B171, DNV-GL",
      qualityTesting: "ASTM G48 Method A (Corrosion Rate < 4.0 g/m²), 100% Ferrite Count"
    },
    keyApplications: [
      "Subsea Christmas tree manifolds, jumpers & flowline tie-ins",
      "Seawater cooling, ballast piping & firewater deluge cupro-nickel lines",
      "Offshore FPSO topsides gas lift, separation & flare boom piping",
      "Monel K500 high-strength propeller shafts, rudder stocks & marine fasteners",
      "Splash-zone structural bolting, wire mesh seawater intake screens & deck hardware"
    ],
    applicableMaterials: ["super-duplex", "duplex", "alloys", "nickel", "titanium"],
    applicableCategorySlugs: ["flanges", "pipes-tubes", "fasteners", "rods-bars", "wire-mesh", "circle", "ring"]
  }
];

/**
 * Deterministic Industry Resolver
 * Returns the matching industry object or null if not found (Rule 29: never silent fallback).
 */
export function getIndustryBySlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  const cleanSlug = slug.toLowerCase().trim().replace(/^#/, "").replace(/^\//, "");
  
  return (
    INDUSTRIES.find((ind) => {
      if (ind.slug === cleanSlug) return true;
      if (ind.id.toLowerCase() === cleanSlug) return true;
      if (ind.aliases && ind.aliases.includes(cleanSlug)) return true;
      return false;
    }) || null
  );
}

/**
 * Returns all 6 industries in canonical order
 */
export function getAllIndustries() {
  return INDUSTRIES;
}

/**
 * Dynamically queries real products from PRODUCTS applicable to the industry.
 * Guarantees zero duplicate databases and authentic catalog linkage.
 */
export function getRelevantProductsForIndustry(industrySlug, maxCount = 8) {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];

  const matched = PRODUCTS.filter((product) => {
    const pMat = product.materialSlug;
    const pCat = product.categorySlug;

    // Check if product's material is in industry's recommended materials
    const matMatch = industry.applicableMaterials.includes(pMat);
    // Check if product's category is in industry's recommended categories
    const catMatch = industry.applicableCategorySlugs.includes(pCat);

    return matMatch && catMatch;
  });

  // Return up to maxCount unique products
  return matched.slice(0, maxCount);
}
