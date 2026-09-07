// Isolated Supplier Data Layer — Sheets & Plates
// Source of truth: src/assets/All Products/Supplier division/Sheet and plates/

import ssSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/stainless steel.png";
import carbonSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/Carbon.png";
import alloySteelSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/alloy steel.png";
import nickelSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/Nikle.png";
import duplexSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/Duplex.png";
import superDuplexSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/super duplex.png";
import titaniumSheetsImg from "../assets/All Products/Supplier division/Sheet and plates/Titainium.png";

export {
  ssSheetsImg,
  carbonSheetsImg,
  alloySteelSheetsImg,
  nickelSheetsImg,
  duplexSheetsImg,
  superDuplexSheetsImg,
  titaniumSheetsImg
};

// Exact 7 Materials strictly verified in the Sheet and plates folder (Rule #9)
export const SUPPLIER_SHEETS_MATERIALS = [
  { id: "stainless-steel", name: "Stainless Steel", slug: "stainless-steel" },
  { id: "carbon-steel", name: "Carbon Steel", slug: "carbon-steel" },
  { id: "alloy-steel", name: "Alloy Steel", slug: "alloy-steel" },
  { id: "nickel-alloy", name: "Nickel Alloy", slug: "nickel-alloy" },
  { id: "duplex", name: "Duplex", slug: "duplex" },
  { id: "super-duplex", name: "Super Duplex", slug: "super-duplex" },
  { id: "titanium", name: "Titanium", slug: "titanium" }
];

export const SUPPLIER_SHEETS_PRODUCTS = [
  {
    id: "sheet-stainless-steel",
    slug: "sheets-plates-stainless-steel",
    name: "Stainless Steel Sheets & Heavy Plates",
    title: "Stainless Steel Sheets & Heavy Plates",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: ssSheetsImg,
    heroImage: ssSheetsImg,
    grades: ["AISI 304 / 304L", "AISI 316 / 316L", "AISI 310S", "AISI 321", "AISI 317L", "904L", "AISI 410 / 430"],
    forms: ["Cold Rolled Sheet (CR)", "Hot Rolled Plate (HR)", "Heavy Industrial Plate", "Chequered Plate", "Precision Shim Sheet"],
    sizeRange: "Thickness: 0.3mm to 120.0mm | Width: 1000mm, 1250mm, 1500mm, 2000mm, 2500mm | Length: 2000mm to 12000mm",
    finishOptions: ["2B Cold Rolled", "No.1 Hot Rolled Annealed & Pickled (HRAP)", "No.4 Hairline Satin", "BA (Bright Annealed)", "Mirror 8K"],
    shortDescription: "ASTM A240 certified stainless steel cold rolled sheets and hot rolled heavy engineering plates for pressure vessels, chemical storage tanks, and sanitary architecture.",
    overview: "Supreme Metal & Alloys stocks and processes prime mill stainless steel sheets and heavy plates in austenitic, ferritic, and heat-resistant grades conforming to ASTM A240 and ASME SA240. Available in standard mill sheet sizes as well as custom plasma, waterjet, and laser cut-to-size plate blanks, our stainless steel plates deliver superior surface flatness, certified chemical purity, and exceptional resistance to general and localized pitting corrosion.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, ASTM A480, EN 10088-2, JIS G4305, ISO 9445" },
      { label: "Thickness Range", value: "0.3 mm to 120.0 mm (Sheets: 0.3-6.0mm, Heavy Plates: 6.0-120.0mm)" },
      { label: "Standard Widths", value: "1000mm (1.0m), 1220mm (4ft), 1250mm, 1500mm (5ft), 2000mm (2.0m), 2500mm (2.5m)" },
      { label: "Standard Lengths", value: "2000mm, 2440mm (8ft), 2500mm, 3000mm (10ft), 6000mm (20ft), up to 12000mm" },
      { label: "Surface Finishes", value: "2B (Smooth Cold Rolled), No.1 (HRAP), BA, No.4 (Satin Polish with PVC), 8K Mirror" },
      { label: "Processing & Cutting Capabilities", value: "High-Definition CNC Plasma Cutting, Waterjet Cutting, Fiber Laser Cutting, Shearing" },
      { label: "Testing & Documentation", value: "100% PMI Verified, Ultrasonic Tested per ASTM A578 Level A/B, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / ASME SA240 - Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip for Pressure Vessels",
      "ASTM A480 / A480M - General Requirements for Flat-Rolled Stainless and Heat-Resisting Steel Plate, Sheet, and Strip",
      "EN 10088-2 - Stainless steels - Technical delivery conditions for sheet/plate and strip for general purposes",
      "ISO 9445 - Continuously cold-rolled stainless steel - Tolerances on dimensions and form"
    ],
    applications: [
      "Chemical, petrochemical, and pharmaceutical storage tanks and reactor vessels",
      "Food and dairy processing silos, brewery vats, and sanitary industrial machinery",
      "Architectural facades, elevator interior cladding, and decorative metal panels",
      "Flue gas desulfurization (FGD) scrubbers and marine exhaust gas scrubbers",
      "Water treatment clarifiers, reverse osmosis filter housings, and desalination vessels",
      "Cryogenic storage tanks for liquid nitrogen, argon, and natural gas"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled / Hot Rolled Annealed & Pickled",
      flatnessTolerance: "Per ASTM A480 Table A1.15 Strict Precision Flatness",
      protectiveFilm: "Available with Novacel / Laser Fiber Protective Film (80µm to 120µm)",
      certifications: "EN 10204 Type 3.1 Mill Test Certificate, IBR Certified on request"
    }
  },
  {
    id: "sheet-carbon-steel",
    slug: "sheets-plates-carbon-steel",
    name: "Carbon Steel Heavy Boiler Plates",
    title: "Carbon Steel Heavy Boiler Plates",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: carbonSheetsImg,
    heroImage: carbonSheetsImg,
    grades: ["ASTM A516 Gr. 60 / 65 / 70 (HIC & NACE)", "IS 2062 E250 / E350 / E450", "EN 10025 S275JR / S355J2+N", "ASTM A36", "ASTM A283 Gr. C"],
    forms: ["Boiler Quality Heavy Plate", "Pressure Vessel Steel Plate", "High-Tensile Structural Plate", "Chequered Floor Plate"],
    sizeRange: "Thickness: 5.0mm to 200.0mm | Width: 1500mm to 3500mm | Length: 6000mm to 14000mm",
    finishOptions: ["Normalized & Vacuum Degassed", "As Rolled", "Thermo-Mechanically Controlled Rolled (TMCP)"],
    shortDescription: "Heavy-gauge boiler quality and structural carbon steel plates manufactured per ASTM A516 Gr. 70 for critical steam boilers, pressure vessels, and heavy engineering.",
    overview: "Supreme Metal & Alloys stocks high-grade Carbon Steel Boiler Quality and Pressure Vessel plates conforming to ASTM A516 Grade 60 and Grade 70 (including HIC Tested and NACE MR0175 compliant specifications). Produced via vacuum degassing and normalizing heat treatment, our carbon steel heavy plates possess superior notch toughness, notch ductility, and resistance to hydrogen-induced cracking (HIC) and stress corrosion cracking in severe oil and gas refining and steam generation.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A516 / ASME SA516 (Gr. 60, 65, 70), ASTM A20 / A20M, EN 10025, IS 2062" },
      { label: "Thickness Range", value: "5.0 mm to 200.0 mm prime heavy gauge" },
      { label: "Standard Widths", value: "1500 mm, 2000 mm, 2500 mm, 3000 mm, 3500 mm" },
      { label: "Standard Lengths", value: "6000 mm, 8000 mm, 10000 mm, 12000 mm, up to 14000 mm" },
      { label: "Heat Treatment States", value: "Normalized (N), Vacuum Degassed (VD), Simulated Post-Weld Heat Treated (SPWHT)" },
      { label: "Special Testing Options", value: "HIC Testing (NACE TM0284), SSCC Testing (NACE TM0177), Charpy V-Notch Impact at -46°C" },
      { label: "Ultrasonic Inspection", value: "100% Ultrasonic Examination per ASTM A435 / ASTM A578 Level II / S1" }
    ],
    standards: [
      "ASTM A516 / ASME SA516 - Pressure Vessel Plates, Carbon Steel, for Moderate- and Lower-Temperature Service",
      "ASTM A20 / A20M - General Requirements for Steel Plates for Pressure Vessels",
      "EN 10025-2 / EN 10028-2 - Hot rolled products of structural steels / Pressure steels",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials for Sour Service"
    ],
    applications: [
      "High-pressure steam boiler drums, shells, headers, and dished ends",
      "Petroleum refinery fractionators, hydrocracker reactors, and distillation columns",
      "Liquid petroleum gas (LPG) and compressed natural gas (CNG) storage spherical tanks",
      "Heavy engineering machinery frames, excavator chassis, and bridge structural girders",
      "Blast furnace gas ducts, hot air mains, and preheater casings",
      "Offshore wind turbine transition pieces and foundation monopile plates"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled Normalized / TMCP Clean Steel Practice",
      yieldStrength: "Minimum Yield Strength: 260 to 355 MPa (per grade specification)",
      tensileStrength: "485 to 620 MPa (ASTM A516 Gr. 70)",
      certifications: "EN 10204 Type 3.1 & 3.2 Certified, IBR Form IV Approved"
    }
  },
  {
    id: "sheet-alloy-steel",
    slug: "sheets-plates-alloy-steel",
    name: "Alloy Steel Chrome-Moly Heavy Plates",
    title: "Alloy Steel Chrome-Moly Heavy Plates",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: alloySteelSheetsImg,
    heroImage: alloySteelSheetsImg,
    grades: ["ASTM A387 Gr. 11 Class 2", "ASTM A387 Gr. 22 Class 2", "ASTM A387 Gr. 91 Class 2", "16Mo3 (EN 10028-2)", "ASTM A387 Gr. 5 Class 2"],
    forms: ["Heavy Chrome-Moly Boiler Plate", "High-Temperature Vessel Plate", "Abrasion-Resistant Alloy Plate"],
    sizeRange: "Thickness: 6.0mm to 150.0mm | Width: 1500mm to 3000mm | Length: 6000mm to 12000mm",
    finishOptions: ["Normalized & Tempered (N+T)", "Quenched & Tempered (Q+T)"],
    shortDescription: "Chromium-Molybdenum creep-resistant alloy steel heavy plates engineered for elevated-temperature pressure vessels, power boilers, and refinery hydrotreaters.",
    overview: "Supreme Metal & Alloys is an established stockist of Chromium-Molybdenum Alloy Steel plates conforming to ASTM A387 / ASME SA387 Grades 11, 22, and 91. Specifically alloyed with chromium for oxidation resistance and molybdenum for enhanced elevated-temperature tensile and creep-rupture strength, our alloy steel plates are the trusted choice for fabricators constructing high-pressure hydrocrackers, reactors, and thermal boiler shells operating up to 600°C.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A387 / ASME SA387 (Gr. 11, 22, 5, 9, 91), EN 10028-2 (16Mo3, 10CrMo9-10), ASTM A20" },
      { label: "Thickness Range", value: "6.0 mm to 150.0 mm prime heavy gauge" },
      { label: "Standard Dimensions", value: "1500x6000mm, 2000x8000mm, 2500x10000mm, 3000x12000mm" },
      { label: "Heat Treatment", value: "Normalized and Tempered (N+T per ASTM A387), Accelerated Water Quenched & Tempered (Q+T)" },
      { label: "Creep & Rupture Testing", value: "Elevated temperature tensile testing verified per ASTM E21 and ASTM E139" },
      { label: "Impact & Toughness", value: "Charpy V-Notch impact testing at -20°C and -30°C compliant with ASME Sec VIII Div 1" },
      { label: "Quality Verifications", value: "100% Ultrasonic Inspected per ASTM A578 Level B, Full Traceability, EN 10204 3.1" }
    ],
    standards: [
      "ASTM A387 / ASME SA387 - Pressure Vessel Plates, Alloy Steel, Chromium-Molybdenum",
      "EN 10028-2 - Flat products made of steels for pressure purposes - Non-alloy and alloy steels with specified elevated temperature properties",
      "ASME Boiler and Pressure Vessel Code Section II Part A (SA-387)",
      "API 934 - Materials and Fabrication of 2-1/4Cr-1Mo and 3Cr-1Mo Steel Heavy Wall Pressure Vessels"
    ],
    applications: [
      "Petroleum refinery hydrodesulfurization (HDS) and catalytic cracking reactors",
      "Superheated steam boiler drums, header shells, and heat recovery vessels",
      "High-temperature hydrogen storage and pressure vessel containment",
      "Chemical synthesis autoclaves operating under elevated temperatures and pressures",
      "Coke drums, vacuum distillation columns, and flare stack support plates",
      "Power generation heat exchangers and supercritical steam turbine casings"
    ],
    technicalDetails: {
      manufacturingType: "Electric Arc Furnace / Vacuum Degassed Hot Rolled",
      creepResistance: "Withstands operating temperatures between 450°C and 625°C",
      temperEmbrittlement: "Low X-bar (J-factor < 100) to prevent temper embrittlement in hydrogen service",
      certifications: "EN 10204 3.1 & 3.2 Mill Test Certificates, IBR Certified"
    }
  },
  {
    id: "sheet-nickel-alloy",
    slug: "sheets-plates-nickel-alloy",
    name: "Nickel Alloy Corrosion-Resistant Sheets & Plates",
    title: "Nickel Alloy Corrosion-Resistant Sheets & Plates",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: nickelSheetsImg,
    heroImage: nickelSheetsImg,
    grades: ["Inconel 625 (UNS N06625)", "Inconel 718 (UNS N07718)", "Hastelloy C276 (UNS N10276)", "Monel 400 (UNS N04400)", "Incoloy 825 (UNS N08825)", "Nickel 200 / 201"],
    forms: ["Cold Rolled Sheet (2B)", "Hot Rolled Plate (Annealed & Pickled)", "Custom Laser Cut Blanks"],
    sizeRange: "Thickness: 0.5mm to 50.0mm | Width: 1000mm to 2000mm | Length: 2000mm to 6000mm",
    finishOptions: ["Mill Annealed & Pickled", "Cold Rolled Bright Finish", "Precision Ground & Polished"],
    shortDescription: "Premium nickel-chromium-molybdenum alloy sheets and plates delivering extreme resistance to boiling acids, wet chlorine, and pitting in severe chemical processes.",
    overview: "Supreme Metal & Alloys stocks and custom shears prime Nickel Alloy sheets and heavy plates in Inconel, Monel, Hastelloy, and Nickel 200/201. Conforming to ASTM B168, B127, and B575, these high-nickel alloys provide exceptional mechanical stability from cryogenic temperatures up to 1000°C, combined with unparalleled immunity to chloride stress-corrosion cracking, severe pitting, and aggressive chemical attack by reducing and oxidizing acids.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B168 (Inconel 600/625), ASTM B575 (Hastelloy C276), ASTM B127 (Monel 400), ASTM B424 (Incoloy 825), ASTM B162 (Nickel 200)" },
      { label: "Thickness Range", value: "0.5 mm to 50.0 mm (Custom thicker forged plates available up to 100mm)" },
      { label: "Standard Dimensions", value: "1000x2000mm, 1220x2440mm, 1500x3000mm, 2000x6000mm" },
      { label: "Cutting Services", value: "Submerged Waterjet Cutting (zero heat-affected zone), High-Definition Plasma, Shearing" },
      { label: "Heat Treatment", value: "Solution Annealed per ASTM specification followed by rapid water quenching" },
      { label: "Surface Conditioning", value: "Pickled & Passivated (White Clean), Descaled, Bright Annealed" },
      { label: "Testing & Quality Verification", value: "100% PMI Spectro-Analysis, Ultrasonic Inspection per ASTM A578 Level C, EN 10204 3.1" }
    ],
    standards: [
      "ASTM B575 - Low-Carbon Nickel-Chromium-Molybdenum (Hastelloy C276) Plate, Sheet, and Strip",
      "ASTM B168 - Nickel-Chromium-Iron Alloys (UNS N06600, N06625) Plate, Sheet, and Strip",
      "ASTM B127 - Nickel-Copper Alloy (UNS N04400) Plate, Sheet, and Strip",
      "ASTM B424 - Ni-Fe-Cr-Mo-Cu Alloy (UNS N08825) Plate, Sheet, and Strip",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "Flue gas desulfurization (FGD) scrubber liners, dampers, and ducting (Hastelloy C276)",
      "Chemical reactors, column liners, and heat exchanger tube sheets handling sulfuric acid",
      "Marine propeller shaft cladding, seawater valves, and splash zone protection (Monel 400)",
      "Offshore oil and gas topside process vessels, flare tips, and piping headers (Inconel 625)",
      "Aerospace turbine exhaust ducts, combustion casings, and thrust reversers (Inconel 718)",
      "Nuclear reactor control rod mechanism components and waste vitrification vessels"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled / Hot Rolled Solution Annealed",
      pittingResistance: "PREN > 45 (Hastelloy C276 & Inconel 625)",
      acidResistance: "Resists boiling hydrochloric acid, hydrofluoric acid, and chlorine dioxide",
      certifications: "EN 10204 Type 3.1 & 3.2 Mill Test Certificates with Complete Melt Heat Analysis"
    }
  },
  {
    id: "sheet-duplex",
    slug: "sheets-plates-duplex",
    name: "Duplex 2205 Stainless Steel Heavy Plates",
    title: "Duplex 2205 Stainless Steel Heavy Plates",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: duplexSheetsImg,
    heroImage: duplexSheetsImg,
    grades: ["UNS S31803 (F51 / 1.4462)", "UNS S32205 (2205 / F60)"],
    forms: ["Hot Rolled Heavy Plate", "Cold Rolled Precision Sheet", "Custom Laser / Waterjet Cut Profiles"],
    sizeRange: "Thickness: 1.0mm to 80.0mm | Width: 1000mm to 2500mm | Length: 2000mm to 12000mm",
    finishOptions: ["No.1 HRAP (Hot Rolled Annealed & Pickled)", "2B Cold Rolled", "Machined Surface"],
    shortDescription: "High-yield dual-phase austenitic-ferritic stainless steel heavy plates engineered for chemical cargo tankers, desalination vessels, and offshore oilfield structures.",
    overview: "Supreme Metal & Alloys stocks prime Duplex 2205 (UNS S31803 / S32205) plates conforming to ASTM A240 and ASME SA240. Offering twice the design yield strength of standard austenitic 316L plates alongside outstanding resistance to chloride stress corrosion cracking, our duplex plates enable significant wall-thickness reductions and weight savings in structural chemical storage tanks, pressure vessels, and marine cargo holds.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, EN 10028-7, NORSOK M-630 MDS D45, ISO 15156" },
      { label: "Thickness Range", value: "1.0 mm to 80.0 mm prime inventory" },
      { label: "Standard Plate Dimensions", value: "1500x3000mm, 2000x6000mm, 2000x12000mm, 2500x8000mm" },
      { label: "Phase Balance Control", value: "Ferrite Content: 40% to 60% verified per ASTM E562 microstructural point counting" },
      { label: "Thermal Processing", value: "Solution Annealed at 1040°C–1080°C and Rapidly Water Quenched" },
      { label: "Corrosion Testing", value: "ASTM G48 Method A Ferric Chloride Pitting Test qualified at 25°C" },
      { label: "Quality Documentation", value: "100% Ultrasonic Tested per ASTM A578 Level A/B, EN 10204 3.1 & 3.2 MTC" }
    ],
    standards: [
      "ASTM A240 / ASME SA240 - Chromium and Chromium-Nickel Stainless Steel Plate for Pressure Vessels",
      "EN 10028-7 - Flat products made of steels for pressure purposes - Stainless steels",
      "NORSOK M-630 / M-650 - Material Data Sheet MDS D45 for Duplex Plate",
      "NACE MR0175 / ISO 15156-3 - Materials for H2S-containing environments in oil and gas production"
    ],
    applications: [
      "Maritime chemical cargo holds and chemical product tanker bulkheads",
      "Seawater reverse osmosis (SWRO) desalination high-pressure vessel shells",
      "Offshore oil and gas separator vessels, scrubbers, and topside process modules",
      "Pulp and paper digestors, bleach washers, and liquor handling tanks",
      "Biofuel production distillation columns and fermentation vessels",
      "Flue gas cleaning and municipal wastewater treatment aerator tanks"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled Solution Annealed & Pickled",
      yieldStrength: "Minimum Yield Strength: 450 MPa (approx. 2.2x of SS 316L)",
      prenRating: "PREN ≥ 35 (%Cr + 3.3%Mo + 16%N)",
      certifications: "EN 10204 Type 3.1 & 3.2 Certified, NORSOK MDS D45 Qualified"
    }
  },
  {
    id: "sheet-super-duplex",
    slug: "sheets-plates-super-duplex",
    name: "Super Duplex 2507 Stainless Steel Heavy Plates",
    title: "Super Duplex 2507 Stainless Steel Heavy Plates",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: superDuplexSheetsImg,
    heroImage: superDuplexSheetsImg,
    grades: ["UNS S32750 (2507 / 1.4410)", "UNS S32760 (Zeron 100 / 1.4501)"],
    forms: ["Heavy Engineered Plate", "Forged & Rolled Plate Blank", "Waterjet Cut Flange Discs"],
    sizeRange: "Thickness: 3.0mm to 90.0mm | Width: 1500mm to 2500mm | Length: 3000mm to 12000mm",
    finishOptions: ["No.1 HRAP (Annealed & Pickled)", "Machined Precision Ground"],
    shortDescription: "Ultra-high performance 25% chromium super duplex heavy plates engineered for deepwater subsea equipment, high-salinity seawater systems, and harsh chemical vessels.",
    overview: "Supreme Metal & Alloys supplies certified Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) heavy plates conforming to ASTM A240 and NORSOK M-630 MDS D55. Designed for the most demanding marine and chemical environments, super duplex heavy plates feature an exceptional Pitting Resistance Equivalent Number (PREN) ≥ 42, elevated mechanical tensile strength (> 750 MPa), and verified impact toughness down to -46°C.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, NORSOK M-630 MDS D55, EN 10028-7, ISO 15156" },
      { label: "Thickness Range", value: "3.0 mm to 90.0 mm prime heavy plate" },
      { label: "Standard Dimensions", value: "1500x3000mm, 2000x6000mm, 2500x8000mm, 2000x12000mm" },
      { label: "Phase Balance Ratio", value: "Ferrite Content: 35% to 55% verified per ASTM E562" },
      { label: "Critical Pitting Temperature", value: "ASTM G48 Method A Ferric Chloride Pitting Test qualified at 50°C (zero pitting)" },
      { label: "Charpy Impact Testing", value: "Tested at -46°C, minimum 80 Joules single / 100 Joules average" },
      { label: "Ultrasonic Integrity", value: "100% Ultrasonic Testing per ASTM A578 Level A/B, Zero Laminations" }
    ],
    standards: [
      "ASTM A240 / ASME SA240 - Chromium and Chromium-Nickel Stainless Steel Plate for Pressure Vessels",
      "NORSOK M-630 / M-650 - Material Data Sheet MDS D55 for Super Duplex Plate",
      "EN 10028-7 - Stainless steels for pressure purposes",
      "ISO 15156-3 / NACE MR0175 - Materials for use in H2S-containing environments"
    ],
    applications: [
      "Deepsea subsea manifold plates, pipeline end manifolds (PLEM), and riser clamps",
      "Seawater reverse osmosis (SWRO) desalination high-pressure pump casings and headers",
      "Offshore oil platform deluge skid structural plates and blast walls",
      "Geothermal power plant brine separators and high-salinity heat exchangers",
      "Severe chemical reactors handling organic acids, bromides, and chlorinated hydrocarbons",
      "Flue gas scrubbing towers and marine scrubber mist eliminator plates"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled Solution Annealed & Water Quenched",
      yieldStrength: "Minimum Yield Strength: 550 MPa",
      prenRating: "PREN ≥ 42 (Pitting Resistance Equivalent Number)",
      certifications: "NORSOK M-650 Qualified Mill, EN 10204 Type 3.2 Third Party Inspection Available"
    }
  },
  {
    id: "sheet-titanium",
    slug: "sheets-plates-titanium",
    name: "Titanium Sheets & Engineered Plates",
    title: "Titanium Sheets & Engineered Plates",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Sheets & Plates",
    categorySlug: "sheets-plates",
    division: "SUPPLIER",
    image: titaniumSheetsImg,
    heroImage: titaniumSheetsImg,
    grades: ["Grade 1 (UNS R50250)", "Grade 2 (UNS R50400)", "Grade 5 / Ti-6Al-4V (UNS R56400)", "Grade 7 (UNS R52400 / Ti-0.15Pd)", "Grade 12 (UNS R53400)"],
    forms: ["Cold Rolled Thin Sheet", "Hot Rolled Heavy Plate", "Precision Waterjet Cut Blanks"],
    sizeRange: "Thickness: 0.5mm to 65.0mm | Width: 1000mm to 2000mm | Length: 2000mm to 6000mm",
    finishOptions: ["Mill Annealed & Pickled", "Bright Annealed", "Mirror Surface"],
    shortDescription: "Ultra-corrosion-resistant, high-strength-to-weight titanium sheets and plates engineered for chlor-alkali cells, aerospace structures, and seawater heat exchangers.",
    overview: "Supreme Metal & Alloys stocks certified commercially pure Grade 1, Grade 2, and high-strength Grade 5 (Ti-6Al-4V) titanium sheets and plates conforming to ASTM B265 and ASME SB265. Completely immune to ambient and high-temperature seawater, moist chlorine, chlorite solutions, and nitric acid, our titanium plates provide unmatched service longevity in electrochemical chlor-alkali processing, aerospace airframe structures, and naval marine defense.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B265 / ASME SB265, AMS 4911 (Grade 5 Aerospace), ISO 5832-2 (Medical)" },
      { label: "Thickness Range", value: "0.5 mm to 65.0 mm (Sheets: 0.5-4.0mm, Plates: 5.0-65.0mm)" },
      { label: "Standard Dimensions", value: "1000x2000mm, 1220x2440mm, 1500x3000mm, 2000x6000mm" },
      { label: "Cutting Methods", value: "Cold Abrasive Waterjet Cutting (zero thermal alteration), Shearing, Laser" },
      { label: "Heat Treatment", value: "Vacuum Annealed with Inert Atmosphere Cooling" },
      { label: "Surface Inspection", value: "100% Visual and Fluorescent Penetrant Inspection (DPI)" },
      { label: "Chemical & Gas Analysis", value: "Strict limits on interstitial gases: O, H, N, C per ASTM B265, EN 10204 3.1" }
    ],
    standards: [
      "ASTM B265 / ASME SB265 - Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "AMS 4911 - Titanium Alloy, Sheet, Strip, and Plate 6Al-4V Annealed (Aerospace)",
      "ASME Boiler and Pressure Vessel Code Section II Part B (SB-265)",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "Chlor-alkali membrane cell electrolyzers, anode/cathode baskets, and chlorine coolers",
      "Plate-and-frame heat exchangers for seawater cooling and geothermal power",
      "Aerospace airframe skins, engine firewall bulkheads, and hydraulic reservoir brackets",
      "Thermal and vacuum desalination plant evaporator chamber liners",
      "Chemical reactors handling nitric acid, chromic acid, and wet chlorine gas",
      "Marine naval hull fittings, sonar equipment enclosures, and deep-sea pressure housings"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled / Hot Rolled Vacuum Annealed",
      density: "4.51 g/cm³ (approx. 45% lighter than steel)",
      corrosionResistance: "Impervious to seawater crevice corrosion and pitting up to 130°C",
      certifications: "EN 10204 3.1 Mill Test Certificate, ISO 9001:2015, Aerospace Quality Traceability"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Sheets & Plates
export const getSheetsProductBySlug = (slug) => {
  return SUPPLIER_SHEETS_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
};

export const getSheetsProductsByMaterial = (materialSlug) => {
  if (!materialSlug || materialSlug === "all") return SUPPLIER_SHEETS_PRODUCTS;
  return SUPPLIER_SHEETS_PRODUCTS.filter((p) => p.materialSlug === materialSlug);
};

export const getRelatedSheetsProducts = (currentSlug) => {
  return SUPPLIER_SHEETS_PRODUCTS.filter((p) => p.slug !== currentSlug && p.id !== currentSlug);
};
