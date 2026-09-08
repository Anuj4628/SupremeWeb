// Isolated Supplier Data Layer — Patapatti (Slit Strips & Narrow Coiled Stock)
// Source of truth: src/assets/All Products/Supplier division/Patapatti/
// Category: Patapatti (division: "SUPPLIER")

import ssPatapattiImg from "../assets/All Products/Supplier division/Patapatti/stainless steel.jpeg";
import carbonPatapattiImg from "../assets/All Products/Supplier division/Patapatti/carbon.jpg";
import alloySteelPatapattiImg from "../assets/All Products/Supplier division/Patapatti/alloy steel.jpg";
import nickelPatapattiImg from "../assets/All Products/Supplier division/Patapatti/nikle.webp";
import highAlloyPatapattiImg from "../assets/All Products/Supplier division/Patapatti/high alloy.jpg";
import duplexPatapattiImg from "../assets/All Products/Supplier division/Patapatti/duplex.webp";
import superDuplexPatapattiImg from "../assets/All Products/Supplier division/Patapatti/super duplex.webp";
import titaniumPatapattiImg from "../assets/All Products/Supplier division/Patapatti/titainium.jpg";
import exoticAlloyPatapattiImg from "../assets/All Products/Supplier division/Patapatti/exotic.jpg";

export {
  ssPatapattiImg,
  carbonPatapattiImg,
  alloySteelPatapattiImg,
  nickelPatapattiImg,
  highAlloyPatapattiImg,
  duplexPatapattiImg,
  superDuplexPatapattiImg,
  titaniumPatapattiImg,
  exoticAlloyPatapattiImg
};

// Exact 9 Materials verified in the Patapatti folder (guaranteeing strict isolation)
export const SUPPLIER_PATAPATTI_MATERIALS = [
  { id: "stainless-steel", name: "Stainless Steel", slug: "stainless-steel" },
  { id: "carbon-steel", name: "Carbon Steel", slug: "carbon-steel" },
  { id: "alloy-steel", name: "Alloy Steel", slug: "alloy-steel" },
  { id: "nickel-alloy", name: "Nickel Alloy", slug: "nickel-alloy" },
  { id: "high-alloy", name: "High Alloy", slug: "high-alloy" },
  { id: "duplex", name: "Duplex", slug: "duplex" },
  { id: "super-duplex", name: "Super Duplex", slug: "super-duplex" },
  { id: "titanium", name: "Titanium", slug: "titanium" },
  { id: "exotic-alloy", name: "Exotic Alloy", slug: "exotic-alloy" }
];

export const SUPPLIER_PATAPATTI_PRODUCTS = [
  {
    id: "patapatti-stainless-steel",
    slug: "patapatti-stainless-steel",
    name: "Stainless Steel Precision Patta Patti (Slit Strips)",
    title: "Stainless Steel Precision Patta Patti (Slit Strips)",
    material: "Stainless Steel",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: ssPatapattiImg,
    heroImage: ssPatapattiImg,
    grades: ["AISI 304", "AISI 304L", "AISI 316", "AISI 316L", "AISI 321", "AISI 310S", "AISI 430", "AISI 201"],
    forms: ["Precision Slit Coiled Strip", "Cut-to-Length Patti (Flat Strips)", "Deburred Round Edge Patti", "Cold Rolled Bright Strips"],
    sizeRange: "8 mm to 600 mm Width (0.31\" to 24.0\")",
    wallThickness: "0.2 mm to 6.0 mm Thickness (Gauge 10 to 34 SWG)",
    length: "Cut Lengths (1m to 4m) or Continuous Coils (50kg to 2000kg)",
    endConnections: "Clean Sheared / Deburred Rounded Edges",
    shortDescription: "Precision cold rolled and hot rolled stainless steel Patta Patti slit strips (8mm to 600mm width) in 2B and BA surface finishes for continuous stamping, cable trays, and architectural trims.",
    overview: "Supreme Metal & Alloys offers prime stainless steel Patta Patti narrow coiled strip stock and cut flat strips conforming to ASTM A240 and EN 10088-2. Slit with multi-rotary tungsten carbide blades for burr-free precision edges. Sourced in soft annealed, quarter hard, half hard, and full hard tempers for high-speed automated stamping, automobile trim, electrical earthing, and architectural grilles.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, ASTM A480 / A480M, EN 10088-2, JIS G4305" },
      { label: "Width Range", value: "8 mm to 600 mm (Precision slitting down to ±0.05 mm tolerance)" },
      { label: "Thickness Range", value: "0.2 mm to 6.0 mm (0.008\" to 0.236\")" },
      { label: "Edge Finish Options", value: "Slit Edge (Minimal Burr), Deburred Round Edge, Machine Conditioned Full Radius Edge" },
      { label: "Surface Finishes", value: "2B (Cold Rolled Smooth), BA (Bright Annealed Mirror), No. 4 Hairline, Satin" },
      { label: "Temper Conditions", value: "Annealed (Soft), 1/4 Hard, 1/2 Hard, 3/4 Hard, Full Hard (Spring Temper)" },
      { label: "Coil Packaging", value: "Eye-to-Sky / Eye-to-Wall Wooden Pallets with HDPE Wrapping and Silica Desiccant" },
      { label: "Quality Testing & MTC", value: "100% PMI, Tensile & Elongation, Hardness (HRB/HRC), EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASTM A480 / A480M - General Requirements for Flat-Rolled Stainless and Heat-Resisting Steel",
      "EN 10088-2 - Stainless Steels for General Purposes (Sheet, Plate, Strip)",
      "JIS G4305 - Cold-Rolled Stainless Steel Plate, Sheet, and Strip"
    ],
    applications: [
      "Continuous progressive stamping, deep drawn caps, and precision metal brackets",
      "Perforated cable trays, earthing grounding strips, and electrical enclosures",
      "Automotive exhaust clamps, wiper arms, gasket reinforcing rings, and trim mouldings",
      "Architectural mosaic inlays, elevator door architraves, and decorative grilles"
    ],
    technicalDetails: {
      manufacturingType: "High-Speed Rotary Carbide Gang Slitting with In-Line Edge Deburring",
      pressureRating: "Tensile Strength 550 - 1300 N/mm² depending on temper condition",
      tolerance: "Width Tolerance ±0.05 mm to ±0.15 mm; Thickness ±0.02 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, Tensile & Hardness Test Reports"
    }
  },
  {
    id: "patapatti-carbon-steel",
    slug: "patapatti-carbon-steel",
    name: "Carbon Steel CRCA & HR Narrow Patti (Slit Strips)",
    title: "Carbon Steel CRCA & HR Narrow Patti (Slit Strips)",
    material: "Carbon Steel",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: carbonPatapattiImg,
    heroImage: carbonPatapattiImg,
    grades: ["CRCA (IS 513 D / DD / EDD)", "HRPO (IS 1079)", "SAE 1008", "SAE 1010", "ASTM A1008", "ASTM A1011"],
    forms: ["Cold Rolled Close Annealed (CRCA) Strips", "Hot Rolled Pickled & Oiled (HRPO) Patti", "Galvanized Slit Strips", "Cut Length Flat Patti"],
    sizeRange: "10 mm to 600 mm Width",
    wallThickness: "0.3 mm to 8.0 mm Thickness",
    length: "Cut Lengths (1m - 3m) or Spooled Coils (100kg - 3000kg)",
    endConnections: "Square Sheared / Slit Edge / Deburred",
    shortDescription: "High-formability cold rolled (CRCA) and hot rolled pickled (HRPO) carbon steel narrow strips and Patti for automotive stamping, pipe forming, and structural brackets.",
    overview: "Supreme Metal & Alloys supplies prime carbon steel Patta Patti slit from drawing (D), deep drawing (DD), and extra deep drawing (EDD) quality coils conforming to IS 513, IS 1079, and ASTM A1008. Offered with tight width tolerances, excellent flatness, and oiled surfaces ready for roll forming, automated press stamping, and electrical conduit fabrication.",
    specifications: [
      { label: "Standard Specifications", value: "IS 513:2016 (CRCA), IS 1079 (HRPO), ASTM A1008 / A1008M, ASTM A1011 / A1011M" },
      { label: "Width Range", value: "10 mm to 600 mm" },
      { label: "Thickness Range", value: "0.3 mm to 8.0 mm" },
      { label: "Surface Treatment", value: "Lightly Oiled (Rust Preventative), Pickled & Oiled (PO), Dry Matte" },
      { label: "Formability Quality", value: "Commercial Quality (CQ), Drawing (DQ), Deep Drawing (DDQ), Extra Deep Drawing (EDDQ)" },
      { label: "Edge Condition", value: "Clean Slit Edge / Deburred", },
      { label: "Coil ID", value: "508 mm standard" },
      { label: "Testing & Documentation", value: "Tensile, Yield, Elongation, Olsen / Erichsen Cupping Value, EN 10204 3.1 MTC" }
    ],
    standards: [
      "IS 513 - Cold Reduced Low Carbon Steel Sheet and Strip",
      "IS 1079 - Hot Rolled Carbon Steel Sheet and Strip",
      "ASTM A1008 / A1008M - Steel, Sheet, Cold-Rolled, Carbon",
      "JIS G3141 - Cold-Reduced Carbon Steel Sheet and Strip"
    ],
    applications: [
      "High-speed automotive sheet metal press parts, hinges, and seat frames",
      "Electrical cable management channels, earthing strips, and distribution boxes",
      "ERW precision steel tube and furniture pipe continuous roll forming",
      "Industrial packaging steel strapping, corner protectors, and banding clips"
    ],
    technicalDetails: {
      manufacturingType: "Rotary Precision Slitting from Prime CRCA / HRPO Master Coils",
      pressureRating: "Yield Strength 140 - 280 N/mm² | High Ductility (Elongation ≥ 36%)",
      tolerance: "Width ±0.10 mm; Thickness per ASTM A568 / IS 513",
      certifications: "EN 10204 3.1 Inspection Certificate with Full Mechanical & Chemical Results"
    }
  },
  {
    id: "patapatti-alloy-steel",
    slug: "patapatti-alloy-steel",
    name: "Alloy Steel Spring & High-Carbon Hardened Strips",
    title: "Alloy Steel Spring & High-Carbon Hardened Strips",
    material: "Alloy Steel",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: alloySteelPatapattiImg,
    heroImage: alloySteelPatapattiImg,
    grades: ["AISI 1075 (C75S)", "AISI 1095 (C98S)", "50CrV4 (AISI 6150)", "51CrV4", "EN 47", "AISI 4130"],
    forms: ["Hardened & Tempered (H+T) Spring Strips", "Cold Rolled Annealed Strip Stock", "Blue Polished Strips", "White Polished Edge Patti"],
    sizeRange: "10 mm to 350 mm Width",
    wallThickness: "0.3 mm to 5.0 mm Thickness",
    length: "Continuous Coils or Cut Lengths (1m - 3m)",
    endConnections: "Slit / Round Deburred Edge",
    shortDescription: "High-carbon and alloy steel hardened & tempered spring steel strips (C75S, 50CrV4) for clutch plates, circular saws, industrial doctor blades, and leaf springs.",
    overview: "Supreme Metal & Alloys stocks high-performance alloy and high-carbon spring steel strips conforming to EN 10132-4 and DIN 17222. Sourced in both cold rolled annealed condition for intricate stamping and pre-hardened & tempered condition (42-50 HRC) with polished blue or white surfaces. Delivers immense fatigue endurance, elasticity, and wear resistance.",
    specifications: [
      { label: "Standard Specifications", value: "EN 10132-4 (Spring Steels), DIN 17222, ASTM A684 / A684M, BS 5770" },
      { label: "Width Range", value: "10 mm to 350 mm" },
      { label: "Thickness Range", value: "0.3 mm to 5.0 mm" },
      { label: "Surface Finish Options", value: "Blue Tempered, Bright Polished White, Grey Scaleless, Annealed Grey" },
      { label: "Hardness Range (H+T)", value: "40 to 52 HRC (1250 - 1700 N/mm² Tensile Strength)" },
      { label: "Edge Finishing", value: "Round Dressed Edge / Square Slit Edge (Zero Micro-Cracks)" },
      { label: "Decarburization Limit", value: "Max 1.5% of strip thickness per side (Superior fatigue life)" },
      { label: "Certifications", value: "EN 10204 3.1 MTC with Hardness Survey & Bending Fatigue Test Data" }
    ],
    standards: [
      "EN 10132-4 - Cold Rolled Narrow Steel Strip for Heat Treatment (Spring Steels)",
      "DIN 17222 - Cold Rolled Steel Strip for Springs",
      "ASTM A684 / A684M - Steel, Strip, High-Carbon, Cold-Rolled"
    ],
    applications: [
      "Automotive clutch diaphragm springs, transmission discs, and seat belt springs",
      "Industrial doctor blades, band saw blades, and circular slitting knives",
      "Textile loom needles, drop wires, and precision spring clips",
      "Electrical snap-action switch blades and recoil starter clock springs"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Continuous In-Line Hardened/Tempered with Controlled Atmosphere",
      pressureRating: "Tensile Strength up to 1700 N/mm² | High Elastic Recovery",
      tolerance: "Precision Width ±0.08 mm; Thickness ±0.015 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, Hardness & Decarburization Depth Reports"
    }
  },
  {
    id: "patapatti-nickel-alloy",
    slug: "patapatti-nickel-alloy",
    name: "Nickel Alloy & Superalloy Precision Slit Strips",
    title: "Nickel Alloy & Superalloy Precision Slit Strips",
    material: "Nickel Alloy",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: nickelPatapattiImg,
    heroImage: nickelPatapattiImg,
    grades: ["Inconel 600", "Inconel 625", "Inconel 718", "Incoloy 800H", "Monel 400", "Hastelloy C276", "Nickel 200/201"],
    forms: ["Precision Foil & Narrow Slit Strip", "Soft Annealed Coiled Patti", "Spring Temper Superalloy Strips", "Cut Length Flat Patti"],
    sizeRange: "6 mm to 400 mm Width",
    wallThickness: "0.1 mm to 4.0 mm Thickness",
    length: "Continuous Coils (10kg - 500kg) or Cut Flat Strips",
    endConnections: "Precision Slit / Deburred Edges",
    shortDescription: "Corrosion-resistant nickel superalloy narrow slit strips in Inconel 625, Hastelloy C276, and Monel 400 for spiral wound gaskets, expansion bellows, and battery terminals.",
    overview: "Supreme Metal & Alloys supplies precision-slit nickel superalloy Patta Patti strips conforming to ASTM B168, ASTM B443, and ASTM B575. Characterized by unmatched resistance to severe chemical attack, stress corrosion cracking, and oxidation at temperatures exceeding 900°C. Sourced with micro-tolerance thickness accuracy for spiral wound gasket winding and hydroformed bellows.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B168 (Inconel 600), ASTM B443 (Inconel 625), ASTM B575 (Hastelloy C276), ASTM B127 (Monel 400)" },
      { label: "Width Range", value: "6 mm to 400 mm" },
      { label: "Thickness Range", value: "0.1 mm to 4.0 mm (Ultra-thin 0.05 mm available upon request)" },
      { label: "Delivery Temper", value: "Soft Annealed (for Bellows / Deep Draw) to Full Hard (for Springs / Clips)" },
      { label: "Corrosion Resistance", value: "Immune to chloride SCC, wet chlorine gas, hydrofluoric acid, and sour gas" },
      { label: "Surface Finish", value: "Bright Annealed (BA) / Satin Finish / Burr-Free Clean Edge" },
      { label: "Testing & Documentation", value: "100% PMI, Tensile Test, Grain Size per ASTM E112, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B168 / ASME SB168 - Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "ASTM B443 / ASME SB443 - Nickel-Chromium-Molybdenum-Columbium Alloy Strip",
      "ASTM B575 / ASME SB575 - Low-Carbon Nickel-Chromium-Molybdenum Strip",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Spiral wound metallic gasket winding strip and camprofile gasket facings",
      "Flexible metal bellows, expansion joints, and diaphragm seals",
      "High-energy lithium battery cell interconnects and current collector strips",
      "Aerospace heat shielding foils, exhaust clamps, and thermocouple sheathing"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled on Sendzimir Mills & Micro-Carbide Rotary Gang Slit",
      pressureRating: "Tensile Strength ≥ 825 N/mm² | Yield Strength ≥ 415 N/mm² (Inconel 625)",
      tolerance: "High Precision Width ±0.05 mm; Thickness ±0.008 mm",
      certifications: "EN 10204 3.1 Inspection Certificate with Vacuum Melt Chemical Verification"
    }
  },
  {
    id: "patapatti-high-alloy",
    slug: "patapatti-high-alloy",
    name: "High Alloy & Super-Austenitic Specialized Slit Strips",
    title: "High Alloy & Super-Austenitic Specialized Slit Strips",
    material: "High Alloy",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: highAlloyPatapattiImg,
    heroImage: highAlloyPatapattiImg,
    grades: ["Alloy 20 (UNS N08020)", "254 SMO (UNS S31254)", "904L (UNS N08904)", "Sanicro 28 (UNS N08028)", "AL-6XN (UNS N08367)"],
    forms: ["Precision Slit Coiled Strip", "Cut Flat Patti Strips", "Spiral Gasket Winding Strip", "Shims"],
    sizeRange: "8 mm to 500 mm Width",
    wallThickness: "0.2 mm to 5.0 mm Thickness",
    length: "Continuous Coils or Cut Lengths (1m - 3m)",
    endConnections: "Clean Slit / Deburred",
    shortDescription: "Specialized 6% molybdenum super-austenitic and Alloy 20 slit strips for chemical spiral wound gaskets, sulfuric acid handling, and marine heat exchangers.",
    overview: "Supreme Metal & Alloys stocks specialized high-alloy and super-austenitic stainless steel Patta Patti in 254 SMO, Alloy 20, and 904L conforming to ASTM A240 and ASTM B463. Designed for severe chloride and sulfuric acid environments where standard 316L experiences rapid pitting or stress corrosion cracking. Engineered with PREN ≥ 43 for critical sealing and stamping applications.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 (254 SMO / 904L Strip), ASTM B463 (Alloy 20 Strip), EN 10088-2" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 43 (254 SMO), PREN ≥ 36 (904L)" },
      { label: "Width Range", value: "8 mm to 500 mm" },
      { label: "Thickness Range", value: "0.2 mm to 5.0 mm" },
      { label: "Corrosion Immunity", value: "Resistant to hot sulfuric acid, wet sulfur dioxide, and seawater pitting" },
      { label: "Surface Finish", value: "2B Cold Rolled Smooth / Bright Annealed / Slit Deburred" },
      { label: "Testing & Documentation", value: "ASTM G48 Pitting Test, 100% PMI Spectro, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S31254 (254 SMO) Plate, Sheet, and Strip",
      "ASTM B463 / ASME SB463 - UNS N08020 Alloy Plate, Sheet, and Strip",
      "EN 10088-2 - Stainless Steels (Specialty Alloys)",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Extreme-service spiral wound gasket chevron windings for chemical flanges",
      "Plate-and-frame heat exchanger narrow sealing strips and corrugated plates",
      "Flue gas desulfurization (FGD) scrubber sealing strips and mist eliminator blades",
      "Phosphoric acid concentration vessel internal baffles and tie straps"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Multi-Pass Slit with High-Tension Coiling",
      pressureRating: "Tensile Strength ≥ 650 N/mm² | Yield Strength ≥ 300 N/mm²",
      tolerance: "Precision Slitting ±0.05 mm Width",
      certifications: "EN 10204 3.1 Inspection Certificate with ASTM G48 Pitting Results"
    }
  },
  {
    id: "patapatti-duplex",
    slug: "patapatti-duplex",
    name: "Duplex 2205 High-Strength Slit Strips & Patti",
    title: "Duplex 2205 High-Strength Slit Strips & Patti",
    material: "Duplex",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: duplexPatapattiImg,
    heroImage: duplexPatapattiImg,
    grades: ["UNS S31803", "UNS S32205 (Duplex 2205)", "DIN 1.4462", "ASTM A240 Gr 2205"],
    forms: ["Precision Slit Coiled Strip", "Cut Flat Patti Strips", "Spiral Wound Gasket Windings", "Offshore Cable Banding"],
    sizeRange: "10 mm to 500 mm Width",
    wallThickness: "0.3 mm to 5.0 mm Thickness",
    length: "Continuous Coils or Cut Lengths",
    endConnections: "Square Slit / Round Deburred",
    shortDescription: "High-yield-strength Duplex 2205 slit strips (PREN 34-36) offering double the mechanical capacity of 316L with high resistance to chloride stress cracking.",
    overview: "Supreme Metal & Alloys stocks and slits Duplex 2205 (UNS S31803 / S32205) Patta Patti strips conforming to ASTM A240 and EN 10088-2. Offering double the yield strength of conventional austenitic steels and exceptional fatigue resistance in marine environments. Widely utilized for offshore cable banding, chemical tanker heating coil clips, and high-pressure gasket windings.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, EN 10088-2, DIN 1.4462, NACE MR0175" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 34.0 - 36.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 450 N/mm² (High resistance to deformation)" },
      { label: "Width Range", value: "10 mm to 500 mm" },
      { label: "Thickness Range", value: "0.3 mm to 5.0 mm" },
      { label: "Ferrite Microstructure", value: "40% - 60% Ferrite Balance verified per ASTM E562" },
      { label: "Corrosion Resistance", value: "Resistant to chloride stress corrosion cracking and pitting" },
      { label: "Quality Testing & MTC", value: "ASTM A923 Method C, 100% PMI, Hardness, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S31803 / S32205 Stainless Steel Plate, Sheet, and Strip",
      "ASTM A923 - Detection of Detrimental Intermetallic Phases in Duplex",
      "EN 10088-2 - Stainless Steels (Duplex)",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Offshore subsea umbilical and marine cable banding, ties, and strapping",
      "High-pressure spiral wound metallic gasket chevron winding strips",
      "Pulp digester screen strips and chemical washing equipment brackets",
      "Marine heat exchanger plate edge stiffeners and mounting clips"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Precision Gang Slit with Controlled Tension Rewinding",
      pressureRating: "Yield Strength ≥ 450 N/mm² | Tensile Strength 655 - 880 N/mm²",
      tolerance: "Precision Width ±0.08 mm; Thickness ±0.02 mm",
      certifications: "EN 10204 3.1 Inspection Certificate with Ferrite Count & Intermetallic Test"
    }
  },
  {
    id: "patapatti-super-duplex",
    slug: "patapatti-super-duplex",
    name: "Super Duplex 2507 Extreme-Service Slit Strips & Patti",
    title: "Super Duplex 2507 Extreme-Service Slit Strips & Patti",
    material: "Super Duplex",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: superDuplexPatapattiImg,
    heroImage: superDuplexPatapattiImg,
    grades: ["UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "DIN 1.4410", "DIN 1.4501", "ASTM A240 Gr 2507"],
    forms: ["Precision Slit Coiled Strip", "Cut Flat Patti Strips", "Spiral Gasket Windings", "Subsea Clamping Strips"],
    sizeRange: "10 mm to 450 mm Width",
    wallThickness: "0.3 mm to 5.0 mm Thickness",
    length: "Continuous Coils or Cut Lengths",
    endConnections: "Square Slit / Burr-Free Deburred",
    shortDescription: "Ultra-high-strength Super Duplex 2507 and Zeron 100 slit strips (PREN ≥ 42) for subsea riser clamps, seawater reverse osmosis, and offshore gasket windings.",
    overview: "Supreme Metal & Alloys stocks prime Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) Patta Patti strips conforming to ASTM A240 and NORSOK M-630 MDS D55. Delivering extraordinary tensile yield strength (≥ 550 N/mm²) combined with PREN ≥ 42, providing total resistance to crevice corrosion and pitting in warm chlorinated seawater and sour gas environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 (Plate/Strip), NORSOK M-630 MDS D55, EN 10088-2, DIN 1.4410" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 42.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 550 N/mm² (Extremely high mechanical integrity)" },
      { label: "Width Range", value: "10 mm to 450 mm" },
      { label: "Thickness Range", value: "0.3 mm to 5.0 mm" },
      { label: "Pitting Corrosion Test", value: "ASTM G48 Method A tested with zero pitting at 50°C" },
      { label: "Intermetallic Phase Check", value: "Verified free of sigma phase per ASTM A923 Method C" },
      { label: "Quality Testing & MTC", value: "NORSOK Approved, 100% PMI, Ferrite Count (35-55%), EN 10204 3.1/3.2" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S32750 / S32760 Super Duplex Stainless Steel Strip",
      "NORSOK M-630 MDS D55 Qualified for Offshore Use",
      "ASTM A923 - Testing for Intermetallic Phases",
      "NACE MR0175 / ISO 15156 Level IV Sour Service Certified"
    ],
    applications: [
      "Subsea production pipeline identification bands and umbilical strapping clips",
      "Extreme-pressure subsea spiral wound metallic gasket windings and rings",
      "Seawater reverse osmosis (SWRO) membrane element banding and vessel clamps",
      "Offshore firewater deluge valve trim strips and expansion bellows"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Precision Gang Slit from NORSOK Qualified Master Coils",
      pressureRating: "Yield Strength ≥ 550 N/mm² | Tensile Strength 750 - 1000 N/mm²",
      tolerance: "High Precision Width ±0.05 mm; Thickness ±0.02 mm",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with ASTM G48 Pitting & Ferrite Reports"
    }
  },
  {
    id: "patapatti-titanium",
    slug: "patapatti-titanium",
    name: "Titanium Precision Slit Strips & Anode Ribbons",
    title: "Titanium Precision Slit Strips & Anode Ribbons",
    material: "Titanium",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: titaniumPatapattiImg,
    heroImage: titaniumPatapattiImg,
    grades: ["Titanium Grade 1", "Titanium Grade 2", "Titanium Grade 5 (Ti-6Al-4V)", "Titanium Grade 7 (Ti-Pd)"],
    forms: ["Precision Slit Titanium Ribbon", "Cold Rolled Titanium Strips", "Cathodic Protection Anode Strips", "Cut Flat Patti"],
    sizeRange: "6 mm to 300 mm Width (0.24\" to 12.0\")",
    wallThickness: "0.1 mm to 3.5 mm Thickness (0.004\" to 0.138\")",
    length: "Continuous Coils (10kg - 250kg) or Cut Lengths (1m - 3m)",
    endConnections: "Clean Cut / Burr-Free Deburred",
    shortDescription: "Ultra-lightweight, bio-compatible commercially pure Grade 1 and Grade 2 titanium slit strips for cathodic protection ribbons, plate heat exchangers, and medical brackets.",
    overview: "Supreme Metal & Alloys stocks high-purity commercially pure titanium Patta Patti strips conforming to ASTM B265. Slit with specialized zero-contamination carbide cutters to prevent iron contamination. Completely immune to seawater, wet chlorine, and organic chlorides, making these strips the definitive solution for cathodic protection MMO anode substrates, plate heat exchangers, and surgical clips.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B265 / ASME SB265 (Titanium Strip), AMS 4902, AMS 4911, ISO 5832-2" },
      { label: "Grades Stocked", value: "Grade 1 (Deep Drawing), Grade 2 (Commercial Standard), Grade 5 (Ti-6Al-4V), Grade 7 (Pd Alloyed)" },
      { label: "Density", value: "4.51 g/cm³ (Approx. 45% lighter than steel)" },
      { label: "Width Range", value: "6 mm to 300 mm" },
      { label: "Thickness Range", value: "0.1 mm to 3.5 mm" },
      { label: "Condition", value: "Vacuum Annealed / Cold Rolled Smooth Finish" },
      { label: "Corrosion Immunity", value: "Complete immunity to seawater, chlorine dioxide, and human physiological fluids" },
      { label: "Quality Testing & MTC", value: "100% PMI, Gas Interstitials (C, O, N, H), Tensile, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B265 / ASME SB265 - Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "AMS 4902 - Titanium Sheet, Strip, and Plate, Commercially Pure, Annealed",
      "ISO 5832-2 - Implants for Surgery (Unalloyed Titanium)",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Impressed Current Cathodic Protection (ICCP) mixed metal oxide (MMO) coated anode ribbons",
      "Gasketed plate heat exchanger corrugated narrow boundary strips and chevron plates",
      "Chlor-alkali membrane electrolysis cell current feeder ribbons and terminal straps",
      "Medical cranial reconstruction fixation bands and orthopedic surgical staples"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Vacuum Annealed with Precision Contamination-Free Slitting",
      pressureRating: "Grade 2 Tensile ≥ 345 N/mm² | Grade 5 Tensile ≥ 895 N/mm²",
      tolerance: "High Precision Width ±0.05 mm; Thickness ±0.01 mm",
      certifications: "EN 10204 3.1 Inspection Certificate with Full Chemical & Gas Analysis"
    }
  },
  {
    id: "patapatti-exotic-alloy",
    slug: "patapatti-exotic-alloy",
    name: "Exotic Refractory Metal & Specialized Alloy Slit Strips",
    title: "Exotic Refractory Metal & Specialized Alloy Slit Strips",
    material: "Exotic Alloy",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Patapatti",
    categorySlug: "patapatti",
    division: "SUPPLIER",
    image: exoticAlloyPatapattiImg,
    heroImage: exoticAlloyPatapattiImg,
    grades: ["Tantalum (UNS R05200)", "Zirconium 702 (UNS R60702)", "Niobium / Columbium", "MP35N", "Hastelloy B-3", "Incoloy 825"],
    forms: ["Precision Foil & Thin Strip", "Vacuum Sintered Narrow Ribbon", "Soft Annealed Clad Strips", "Cut Length Flat Patti"],
    sizeRange: "5 mm to 250 mm Width",
    wallThickness: "0.05 mm to 3.0 mm Thickness",
    length: "Continuous Precision Spools or Cut Lengths",
    endConnections: "Square Cut / Burr-Free / Vacuum Cleaned",
    shortDescription: "Specialized exotic refractory metal slit strips in Tantalum, Zirconium 702, and Niobium for boiling hydrochloric acid, medical implants, and high-vacuum electronics.",
    overview: "Supreme Metal & Alloys stocks high-purity exotic metal narrow strips and Patta Patti in Tantalum, Zirconium 702, and MP35N conforming to ASTM B708, ASTM B551, and AMS 5844. Designed for environments exceeding the corrosion resistance of nickel and titanium alloys, such as boiling hydrochloric acid, wet chlorine gas, and physiological human implantation.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B708 (Tantalum Strip), ASTM B551 (Zirconium Strip), ASTM B393 (Niobium), AMS 5844" },
      { label: "Width Range", value: "5 mm to 250 mm" },
      { label: "Thickness Range", value: "0.05 mm to 3.0 mm (Foil gauges available)" },
      { label: "Melting Point Threshold", value: "Tantalum: 3017°C, Niobium: 2477°C, Zirconium: 1855°C" },
      { label: "Corrosion Immunity", value: "Immune to boiling concentrated HCl, aqua regia, wet chlorine, and nitric acid" },
      { label: "Manufacturing Purity", value: "Electron Beam Melted (EBM) / High Vacuum Cold Drawn" },
      { label: "Packaging", value: "Vacuum Sealed Plastic Spools with Inert Gas Purge" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 with Gas Interstitial Purity Reports" }
    ],
    standards: [
      "ASTM B708 - Tantalum and Tantalum Alloy Plate, Sheet, and Strip",
      "ASTM B551 / B551M - Zirconium and Zirconium Alloy Strip and Sheet",
      "AMS 5844 - Cobalt-Nickel-Chromium-Molybdenum Alloy Strip (MP35N)",
      "ASTM F562 - Wrought MP35N for Surgical Implants"
    ],
    applications: [
      "Severe hot hydrochloric acid reboiler gasket facings and bayonet heater wrap strips",
      "Nuclear reactor fuel rod spacer spring ribbons and control instrumentation strips",
      "High-vacuum electronic tube filaments, radiation shields, and getter strips",
      "Cardiac pacemaker battery connector ribbons and neurological stimulation lead strips"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Slit in Cleanroom Environment from Vacuum Annealed Ingot",
      pressureRating: "Severe Thermal & Chemical Withstand | MP35N Tensile up to 2050 N/mm²",
      tolerance: "High Precision Width ±0.03 mm; Thickness ±0.005 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, 100% PMI, Vacuum Purity Analysis"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Patapatti
export const getPatapattiProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  return (
    SUPPLIER_PATAPATTI_PRODUCTS.find(
      (p) =>
        p.slug === clean ||
        p.id === clean ||
        p.slug === `patapatti-${clean}` ||
        clean === `patapatti-${p.materialSlug}` ||
        clean === `patta-patti-${p.materialSlug}` ||
        clean === p.materialSlug
    ) || null
  );
};

export const getPatapattiProductsByMaterial = (matSlug = "") => {
  const clean = String(matSlug).toLowerCase().trim();
  if (clean === "all") return SUPPLIER_PATAPATTI_PRODUCTS;
  return SUPPLIER_PATAPATTI_PRODUCTS.filter((p) => p.materialSlug === clean);
};

export const getRelatedPatapattiProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim();
  return SUPPLIER_PATAPATTI_PRODUCTS.filter(
    (p) => p.slug !== clean && p.id !== clean && !clean.includes(p.materialSlug)
  ).slice(0, 4);
};
