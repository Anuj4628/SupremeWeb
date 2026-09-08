// Isolated Data Layer — Dairy & Pharma Fittings (Manufacturing Division)
// Source of Truth: src/assets/All Products/Manufacture Division/Dairy & Pharma Fittings/

import ssDairyImg from "../assets/All Products/Dairy & Pharma Fittings/stainless steel.jpg";
import csDairyImg from "../assets/All Products/Dairy & Pharma Fittings/carbon.webp";
import asDairyImg from "../assets/All Products/Dairy & Pharma Fittings/alloy steel.jpeg";
import nickelDairyImg from "../assets/All Products/Dairy & Pharma Fittings/nikle.webp";
import highAlloyDairyImg from "../assets/All Products/Dairy & Pharma Fittings/high alloy.jpeg";
import duplexDairyImg from "../assets/All Products/Dairy & Pharma Fittings/duplex.jpeg";
import superDuplexDairyImg from "../assets/All Products/Dairy & Pharma Fittings/super duplex.webp";
import titaniumDairyImg from "../assets/All Products/Dairy & Pharma Fittings/titainium.jpg";
import exoticDairyImg from "../assets/All Products/Dairy & Pharma Fittings/exotic.jpeg";

// Collateral assets for gallery
import dairyCollageImg from "../assets/All Products/dairy and sanitary tube fittings.png";
import tcFittingsImg from "../assets/All Products/TC fittings.png";
import ferruleFittingsImg from "../assets/All Products/ferrule fittings.png";

export {
  ssDairyImg,
  csDairyImg,
  asDairyImg,
  nickelDairyImg,
  highAlloyDairyImg,
  duplexDairyImg,
  superDuplexDairyImg,
  titaniumDairyImg,
  exoticDairyImg
};

// Exact 9 Materials verified in the Manufacturing Dairy & Pharma Fittings folder
export const DAIRY_PHARMA_MATERIALS = [
  { id: "stainless-steel", name: "Stainless Steel", slug: "stainless-steel", shortName: "Stainless Steel", image: ssDairyImg },
  { id: "carbon-steel", name: "Carbon Steel", slug: "carbon-steel", shortName: "Carbon Steel", image: csDairyImg },
  { id: "alloy-steel", name: "Alloy Steel", slug: "alloy-steel", shortName: "Alloy Steel", image: asDairyImg },
  { id: "nickel-alloys", name: "Nickel Alloys", slug: "nickel-alloys", shortName: "Nickel Alloys", image: nickelDairyImg },
  { id: "high-alloys", name: "High Alloys", slug: "high-alloys", shortName: "High Alloys", image: highAlloyDairyImg },
  { id: "duplex", name: "Duplex Steel", slug: "duplex", shortName: "Duplex", image: duplexDairyImg },
  { id: "super-duplex", name: "Super Duplex Steel", slug: "super-duplex", shortName: "Super Duplex", image: superDuplexDairyImg },
  { id: "titanium", name: "Titanium Alloys", slug: "titanium", shortName: "Titanium", image: titaniumDairyImg },
  { id: "exotic-alloys", name: "Exotic Alloys", slug: "exotic-alloys", shortName: "Exotic Alloys", image: exoticDairyImg }
];

export const DAIRY_PHARMA_PRODUCTS = [
  {
    id: "dairy-ss-316l-tc-ferrule",
    slug: "ss-316l-electro-polished-tc-ferrule",
    name: "Stainless Steel 316L Electro-Polished Tri-Clover TC Ferrule",
    title: "Stainless Steel 316L Electro-Polished Tri-Clover TC Ferrule",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "STAINLESS STEEL",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    grade: "AISI 316L (UNS S31603)",
    gradeSlug: "ss-316l",
    grades: ["AISI 316L", "AISI 304L", "1.4404", "1.4435 (BN2 High Purity)"],
    productType: "Tri-Clover (TC) Ferrule",
    image: ssDairyImg,
    heroImage: ssDairyImg,
    gallery: [ssDairyImg, dairyCollageImg, tcFittingsImg, ferruleFittingsImg],
    shortDescription: "Ultra-pure ASME BPE & 3-A electro-polished TC ferrules for pharmaceutical process lines, purified water loops (WFI), and sterile bioreactors.",
    overview: "Manufactured from low carbon 316L stainless steel with controlled sulfur content (0.005%–0.017%) per ASME BPE specifications. Features internal surface roughness Ra ≤ 0.38 µm (15 µin) achieved via advanced electro-polishing for zero bacterial entrapment and complete SIP/CIP compliance.",
    forms: ["Short Ferrule (12.7mm)", "Long Ferrule (28.6mm)", "Heavy Wall Ferrule", "Expandable Ferrule"],
    sizeRange: "1/2\" O.D. to 4\" O.D. (ASME BPE / DIN 11850 / ISO 2852)",
    wallThickness: "1.65 mm (16 Gauge) standard sanitary wall",
    length: "12.7 mm to 50.8 mm Overall Length",
    endConnections: "Sanitary Clamp End x Orbital Butt Weld End",
    specifications: {
      governingStandard: "ASME BPE Table DT-4.1.4-1, 3-A Sanitary #63-04, DIN 11851, ISO 2852",
      size: "1/2\" O.D. to 4\" O.D. (ASME BPE / DIN 11850 / ISO 2852)",
      thickness: "1.65 mm (16 Gauge) standard sanitary wall",
      surfaceFinish: "SF4 Electro-Polished Ra ≤ 0.38 µm (15 µin), External Ra ≤ 0.8 µm",
      materialChemistry: "ASTM A270 TP316L, Controlled Sulfur 0.005% - 0.017% for Orbital Welding",
      pressureRating: "150 PSI (10 Bar) @ 150°C with Heavy-Duty Tri-Clamp",
      gasketCompatibility: "USP Class VI Food-Grade EPDM, Platinum-Cured Silicone, PTFE, FKM",
      qualityTestingMtc: "100% Boroscopic Bore Inspection, Surface Profilometer Log, EN 10204 3.1 MTC"
    },
    standards: [
      "ASME BPE - BioProcessing Equipment Standard (Table DT-4.1.4-1)",
      "3-A Sanitary Standards #63-04 for Sanitary Fittings",
      "DIN 11851 - Stainless Steel Fittings for the Food and Chemical Industry",
      "ISO 2852 - Stainless Steel Clamp Pipe Couplings for the Food Industry",
      "FDA 21 CFR 177.2600 & USP Class VI Compliance"
    ],
    applications: [
      "Bio-Pharmaceutical Bioreactors and Fermentation Vessels",
      "Purified Water for Injection (WFI) loops and Clean Steam lines",
      "Aseptic Food, Dairy pasteurization, and Infant Formula processing",
      "Injectable vaccine manufacturing and sterile drug formulation",
      "Cosmetic and high-purity chemical processing skids"
    ],
    technicalDetails: {
      manufacturingType: "Cold Forged Bar Stock CNC Machined & Electro-Polished",
      pressureRating: "150 PSI (10 Bar) @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC, 3-A Certificate, Surface Roughness Report"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-cs-sanitary-adapter",
    slug: "carbon-steel-sanitary-process-adapter",
    name: "Carbon Steel Heavy-Duty Sanitary Process Adapter & Flange Clamp",
    title: "Carbon Steel Heavy-Duty Sanitary Process Adapter & Flange Clamp",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "CARBON STEEL",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    grade: "ASTM A105 / WPB Sanitary Grade",
    gradeSlug: "a105",
    grades: ["ASTM A105", "ASTM A234 WPB", "AISI 1020"],
    productType: "Sanitary Process Adapter",
    image: csDairyImg,
    heroImage: csDairyImg,
    gallery: [csDairyImg, dairyCollageImg],
    shortDescription: "Heavy-duty carbon steel transition adapters connecting industrial plant utility headers to cleanroom Tri-Clamp skids.",
    overview: "Precision-machined forged carbon steel adapter hubs designed for high mechanical and structural loads in utility transfer skids feeding pharmaceutical & chemical manufacturing plants.",
    forms: ["Flanged Adapter", "Weld Neck Transition Hub", "Threaded-to-Clamp Adapter"],
    sizeRange: "1\" NB to 4\" NB (OD: 25.4mm to 101.6mm)",
    wallThickness: "Sch 40 / Sch 80 Heavy Wall",
    length: "75 mm to 150 mm",
    endConnections: "ASME B16.5 Flange x Tri-Clover Sanitary Clamp End",
    specifications: {
      governingStandard: "ASME B16.11, ASTM A105, DIN 11850 Utility Adaptations",
      materialComposition: "Forged Carbon Steel ASTM A105 (Fully Normalized)",
      size: "1\" NB to 4\" NB (OD: 25.4mm to 101.6mm)",
      thickness: "Sch 40 / Sch 80 Heavy Wall",
      pressureRating: "Class 150 / Class 300 (PN20 / PN50)",
      surfaceFinish: "Rust Inhibitive Black Oxide, Zinc Plated or Epoxy Primed"
    },
    standards: [
      "ASME B16.11 - Forged Fittings, Socket-Welding and Threaded",
      "ASTM A105 / A105M - Carbon Steel Forgings for Piping Applications",
      "DIN 11850 - Stainless and Carbon Steel Tubes for Food Applications"
    ],
    applications: [
      "Pharmaceutical clean utility steam boiler headers",
      "Industrial cooling water loops feeding bioreactor jackets",
      "Plant effluent treatment and heavy washdown manifolds"
    ],
    technicalDetails: {
      manufacturingType: "Hot Forged & CNC Machined",
      pressureRating: "Class 300 (50 Bar)",
      tolerance: "ASME B16.11 Standard Tolerances",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-as-sanitary-tee",
    slug: "alloy-steel-sanitary-process-equal-tee",
    name: "Alloy Steel High-Pressure Sanitary Process Equal Tee",
    title: "Alloy Steel High-Pressure Sanitary Process Equal Tee",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "ALLOY STEEL",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    grade: "ASTM A182 F11 / F22",
    gradeSlug: "f11",
    grades: ["ASTM A182 F11 Class 2", "ASTM A182 F22 Class 3", "ASTM A234 WP11 / WP22"],
    productType: "Sanitary Process Equal Tee",
    image: asDairyImg,
    heroImage: asDairyImg,
    gallery: [asDairyImg, dairyCollageImg],
    shortDescription: "High-strength alloy steel sanitary equal tee fittings for elevated temperature utility loops and steam sterilization skids.",
    overview: "Forged and normalized Chromium-Molybdenum alloy steel tee fittings constructed for elevated temperature steam sterilization skids and sterile heat exchanger utility loops operating up to 540°C.",
    forms: ["Equal Tee", "Reducing Tee", "Cross Tee"],
    sizeRange: "1\" to 4\" O.D.",
    wallThickness: "Sch 40 / Sch 80 / Sch 160",
    length: "Standard Center-to-Face Dimensions",
    endConnections: "Butt Weld Beveled / Socket Weld Ends",
    specifications: {
      governingStandard: "ASTM A182, ASTM A234 WP11/WP22, ASME B16.9, ASME B16.11",
      materialMetallurgy: "1.25% Cr - 0.5% Mo (F11) / 2.25% Cr - 1% Mo (F22)",
      temperatureLimit: "Rated for Continuous Utility Steam at 540°C",
      pressureRating: "Class 600 / Class 900 Heavy Duty"
    },
    standards: [
      "ASTM A182 / A182M - Forged or Rolled Alloy-Steel Pipe Flanges, Forged Fittings",
      "ASME B16.9 - Wrought High Temperature Fittings"
    ],
    applications: [
      "Clean-In-Place (CIP) Superheated Steam Lines",
      "High-Pressure Heat Exchanger Skid Headers",
      "Thermal Sterilization loops in Pharma & Food Plants"
    ],
    technicalDetails: {
      manufacturingType: "Hydraulic Extruded & Heat Treated (Normalized & Tempered)",
      pressureRating: "Class 600 (100 Bar)",
      tolerance: "ASME B16.9 Tolerances",
      certifications: "EN 10204 3.1 MTC with High Temp Tensile Data"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-nickel-hastelloy-ferrule",
    slug: "hastelloy-c22-sanitary-tc-ferrule",
    name: "Hastelloy C22 / Inconel 625 High-Purity Sanitary TC Ferrule",
    title: "Hastelloy C22 / Inconel 625 High-Purity Sanitary TC Ferrule",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "NICKEL ALLOYS",
    materialName: "Nickel Alloys",
    materialSlug: "nickel-alloys",
    grade: "Hastelloy C22 (UNS N06022) / Inconel 625",
    gradeSlug: "hastelloy-c22",
    grades: ["Hastelloy C22 (UNS N06022)", "Inconel 625 (UNS N06625)", "Hastelloy C276 (UNS N10276)"],
    productType: "High-Purity TC Ferrule",
    image: nickelDairyImg,
    heroImage: nickelDairyImg,
    gallery: [nickelDairyImg, dairyCollageImg, tcFittingsImg],
    shortDescription: "Hastelloy C22 electro-polished sanitary ferrules for highly corrosive active pharmaceutical ingredient (API) synthesis.",
    overview: "Engineered specifically for active pharmaceutical ingredient (API) chemical reactor vessels exposed to aggressive hot acids, chlorides, and oxidizing reagents. Provides total immunity to pitting, crevice corrosion, and stress corrosion cracking.",
    forms: ["Short Ferrule", "Long Ferrule", "Tank Weld In Ferrule"],
    sizeRange: "1/2\" to 3\" O.D. ASME BPE",
    wallThickness: "1.65 mm standard sanitary wall",
    length: "28.6 mm Overall Length",
    endConnections: "Tri-Clover Sanitary Clamp End x Orbital Butt Weld",
    specifications: {
      governingStandard: "ASME BPE Material Group 3, ASTM B574, ASTM B622",
      alloyGrade: "Hastelloy C22 / UNS N06022 (Ni-Cr-Mo-W Alloy)",
      surfaceFinish: "Ultra-Pure Electro-Polished Ra ≤ 0.25 µm (10 µin)",
      corrosionResistance: "Immune to Hot Hydrochloric Acid, Wet Chlorine & Acidic Halides",
      pressureRating: "150 PSI (10 Bar) @ 200°C"
    },
    standards: [
      "ASME BPE - BioProcessing Equipment Standard (Non-Ferrous Group)",
      "ASTM B574 - Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod",
      "3-A Sanitary Standards",
      "FDA 21 CFR 177.2600 Compliant"
    ],
    applications: [
      "Active Pharmaceutical Ingredient (API) Synthesis",
      "Corrosive Halogenated Organic Chemical Reactors",
      "Oncology Drug Synthesis & Acid Neutralization Skids"
    ],
    technicalDetails: {
      manufacturingType: "Forged Bar Stock Precision CNC Machined & Electro-Polished",
      pressureRating: "150 PSI @ 200°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 & 3.2 Inspection Certificate with Chemical Lot Traceability"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-high-alloy-al6xn-clamp",
    slug: "al6xn-high-alloy-tri-clamp-assembly",
    name: "AL-6XN High Alloy Electro-Polished Tri-Clamp Assembly",
    title: "AL-6XN High Alloy Electro-Polished Tri-Clamp Assembly",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "HIGH ALLOYS",
    materialName: "High Alloys",
    materialSlug: "high-alloys",
    grade: "AL-6XN (UNS N08367)",
    gradeSlug: "al-6xn",
    grades: ["AL-6XN (UNS N08367)", "Sanicro 28", "254 SMO (UNS S31254)"],
    productType: "Tri-Clamp Ferrule Assembly",
    image: highAlloyDairyImg,
    heroImage: highAlloyDairyImg,
    gallery: [highAlloyDairyImg, dairyCollageImg, tcFittingsImg],
    shortDescription: "6% Moly AL-6XN super-austenitic sanitary clamp ferrules built for high-chloride buffer solutions.",
    overview: "AL-6XN (6% Molybdenum super-austenitic stainless steel) sanitary fittings eliminate chloride pitting in aggressive chromatography buffer solutions, hot saline WFI distribution loops, and protein purification columns.",
    forms: ["Short Ferrule", "Long Ferrule", "Heavy Wall Tri-Clamp"],
    sizeRange: "1/2\" to 4\" O.D. ASME BPE",
    wallThickness: "1.65 mm (16 Gauge)",
    length: "28.6 mm Overall Length",
    endConnections: "Tri-Clover Sanitary Clamp End x Orbital Butt Weld",
    specifications: {
      governingStandard: "ASME BPE Table DT-3, ASTM B688, ASTM A276",
      pittingResistancePren: "PREN ≥ 45 (Extreme resistance to chloride crevice corrosion)",
      surfaceFinish: "SF4 Electro-Polished Ra ≤ 0.38 µm (15 µin)",
      size: "1/2\\"
    },
    standards: [
      "ASME BPE - BioProcessing Equipment Standard (Table DT-3)",
      "ASTM B688 - Chromium-Nickel-Molybdenum-Iron (UNS N08367) Plate, Sheet, and Strip",
      "3-A Sanitary Standard #63-04"
    ],
    applications: [
      "Chromatography Buffer Prep Skids with High NaCl Concentration",
      "Protein Purification and Dialysis Separation Columns",
      "Saline Injection Drug Formulation Loops"
    ],
    technicalDetails: {
      manufacturingType: "Forged Bar Stock Precision CNC Machined & Electro-Polished",
      pressureRating: "150 PSI (10 Bar) @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC with PREN & Microstructure Certification"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-duplex-2205-ferrule",
    slug: "duplex-2205-sanitary-tc-ferrule",
    name: "Duplex 2205 (UNS S31803) Sanitary TC Ferrule & Heavy Clamp",
    title: "Duplex 2205 (UNS S31803) Sanitary TC Ferrule & Heavy Clamp",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "DUPLEX",
    materialName: "Duplex Steel",
    materialSlug: "duplex",
    grade: "UNS S31803 / S32205 (Duplex 2205)",
    gradeSlug: "duplex-2205",
    grades: ["UNS S31803", "UNS S32205 (F51 / F60)", "EN 1.4462"],
    productType: "Duplex TC Ferrule & Clamp",
    image: duplexDairyImg,
    heroImage: duplexDairyImg,
    gallery: [duplexDairyImg, dairyCollageImg, tcFittingsImg],
    shortDescription: "High yield strength Duplex 2205 hygienic TC ferrules built for high-pressure homogenization & food processing.",
    overview: "Duplex 2205 provides double the mechanical yield strength of 316L combined with superior resistance to stress corrosion cracking under thermal cycling and CIP caustic washes in dairy processing.",
    forms: ["Short Ferrule", "Long Ferrule", "Heavy Wall TC Clamp"],
    sizeRange: "1\" to 4\" O.D.",
    wallThickness: "1.65 mm to 2.77 mm",
    length: "28.6 mm Overall Length",
    endConnections: "Tri-Clover Clamp End x Butt Weld",
    specifications: {
      governingStandard: "ASTM A182 F51/F60, ASME BPE Custom Adaptations, 3-A Sanitary",
      mechanicalYieldStrength: "≥ 450 MPa (More than double 316L stainless steel)",
      surfaceFinish: "Internal Ra ≤ 0.38 µm Electro-Polished, External Ra ≤ 0.8 µm",
      pittingIndexPren: "PREN 34 - 36"
    },
    standards: [
      "ASTM A182 / A182M - Forged Duplex Stainless Steel Piping Components",
      "3-A Sanitary Standards for Processing Equipment",
      "DIN 11851 / ISO 2852 Adaptations"
    ],
    applications: [
      "High-Pressure Milk Homogenizers (up to 300 Bar impulses)",
      "Thermal Milk Evaporation & Whey Processing Skids",
      "Brewery Wort Kettles & Carbonated Beverage Tanks"
    ],
    technicalDetails: {
      manufacturingType: "Forged Bar Stock Precision Machined & Electro-Polished",
      pressureRating: "250 PSI (17 Bar) with High-Pressure Clamp",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC, Ferrite Phase Count (40-60%)"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-super-duplex-2507-ferrule",
    slug: "super-duplex-2507-electro-polished-sanitary-ferrule",
    name: "Super Duplex 2507 (UNS S32750) Electro-Polished Sanitary Ferrule",
    title: "Super Duplex 2507 (UNS S32750) Electro-Polished Sanitary Ferrule",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "SUPER DUPLEX",
    materialName: "Super Duplex Steel",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (Super Duplex 2507)",
    gradeSlug: "super-duplex-2507",
    grades: ["UNS S32750 (2507 / F53)", "UNS S32760 (Zeron 100 / F55)", "EN 1.4410"],
    productType: "Super Duplex TC Ferrule",
    image: superDuplexDairyImg,
    heroImage: superDuplexDairyImg,
    gallery: [superDuplexDairyImg, dairyCollageImg, tcFittingsImg],
    shortDescription: "PREN > 42 Super Duplex 2507 sanitary ferrules built for hyper-saline pharmaceutical & marine bioprocess.",
    overview: "Super Duplex 2507 hygienic ferrules offer extreme pitting resistance (PREN > 42) and high mechanical strength for hyper-saline bioprocessing and aggressive cleanroom CIP chemicals.",
    forms: ["Short Ferrule", "Long Ferrule", "Tank Ferrule"],
    sizeRange: "1\" to 4\" O.D. ASME BPE",
    wallThickness: "1.65 mm to 3.0 mm",
    length: "28.6 mm Overall Length",
    endConnections: "Sanitary Clamp End x Orbital Butt Weld",
    specifications: {
      governingStandard: "ASTM A182 F53, ASME BPE Custom Adaptations, 3-A Sanitary",
      pittingResistancePren: "PREN ≥ 42.5 (25% Cr, 4% Mo, 0.28% N)",
      surfaceFinish: "Internal Ra ≤ 0.25 µm Electro-Polished, External Ra ≤ 0.8 µm",
      mechanicalStrength: "Yield Strength ≥ 550 MPa, Tensile ≥ 750 MPa"
    },
    standards: [
      "ASTM A182 / A182M Grade F53 - Super Duplex Forgings",
      "ASME BPE - BioProcessing Equipment Standards",
      "3-A Sanitary Standards",
      "NORSOK M-650 / M-630 Verified Metallurgy"
    ],
    applications: [
      "Hyper-Saline Injectable Drug Formulations",
      "Marine Biotechnology & Deep Sea Algae Extraction Skids",
      "Concentrated High-Temperature CIP Caustic & Acid Lines"
    ],
    technicalDetails: {
      manufacturingType: "Forged Bar Stock Precision CNC Machined & Electro-Polished",
      pressureRating: "300 PSI (20 Bar) with High-Pressure Clamp",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 & 3.2 MTC, ASTM A923 Method C Corrosion Test"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-titanium-gr2-ferrule",
    slug: "titanium-grade-2-ultra-pure-sanitary-tc-ferrule",
    name: "Titanium Grade 2 Ultra-Pure Sanitary Tri-Clover Ferrule",
    title: "Titanium Grade 2 Ultra-Pure Sanitary Tri-Clover Ferrule",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "TITANIUM",
    materialName: "Titanium Alloys",
    materialSlug: "titanium",
    grade: "Titanium Grade 2 (UNS R50400)",
    gradeSlug: "titanium-gr2",
    grades: ["Titanium Grade 2 (UNS R50400)", "Titanium Grade 5 (Ti-6Al-4V)", "Grade 7 (Ti-Pd)"],
    productType: "Titanium TC Ferrule",
    image: titaniumDairyImg,
    heroImage: titaniumDairyImg,
    gallery: [titaniumDairyImg, dairyCollageImg, tcFittingsImg],
    shortDescription: "Commercially pure Titanium Gr2 bio-compatible sanitary ferrules for implantable drug & live-culture bioprocess.",
    overview: "Commercially pure Titanium Grade 2 TC ferrules feature complete bio-compatibility, zero metallic ion leaching, and total immunity to physiological saline and active live-culture media.",
    forms: ["Short Ferrule", "Long Ferrule"],
    sizeRange: "1/2\" to 3\" O.D.",
    wallThickness: "1.25 mm to 1.65 mm",
    length: "28.6 mm Overall Length",
    endConnections: "Sanitary Clamp End x Orbital Butt Weld",
    specifications: {
      governingStandard: "ASTM B348 Grade 2, ASTM B363, ASME BPE Custom Adaptations",
      biocompatibility: "ISO 10993 / USP Class VI Certified, Zero Ion Leaching",
      surfaceFinish: "Ultra-Pure Electro-Polished Ra ≤ 0.20 µm (8 µin)",
      weightAdvantage: "45% Lighter than Stainless Steel 316L"
    },
    standards: [
      "ASTM B348 Grade 2 - Titanium and Titanium Alloy Bars",
      "ASTM B363 - Seamless and Welded Unalloyed Titanium Fittings",
      "USP Class VI Biocompatibility Protocol",
      "3-A Sanitary Guidelines"
    ],
    applications: [
      "Live Culture Cell Therapy & Gene Therapy Bioreactors",
      "Implantable Liquid Drug Formulations",
      "Ultra-Pure Physiological Saline Bio-Processing Loops"
    ],
    technicalDetails: {
      manufacturingType: "Precision Turned from ASTM B348 Gr. 2 Bar Stock & Vacuum Annealed",
      pressureRating: "150 PSI @ 150°C",
      tolerance: "ASME BPE Precision Class",
      certifications: "EN 10204 3.1 MTC, USP Class VI Certificate"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  },
  {
    id: "dairy-exotic-c276-ferrule",
    slug: "hastelloy-c276-exotic-sanitary-ferrule-union",
    name: "Hastelloy C276 / Titanium Gr5 Exotic Sanitary Ferrule & Union",
    title: "Hastelloy C276 / Titanium Gr5 Exotic Sanitary Ferrule & Union",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "EXOTIC ALLOYS",
    materialName: "Exotic Alloys",
    materialSlug: "exotic-alloys",
    grade: "Hastelloy C276 (UNS N10276) / Titanium Gr5",
    gradeSlug: "hastelloy-c276",
    grades: ["Hastelloy C276 (UNS N10276)", "Titanium Grade 5 (Ti-6Al-4V)", "Zirconium 702", "Tantalum Clad"],
    productType: "Exotic Sanitary Ferrule & Union",
    image: exoticDairyImg,
    heroImage: exoticDairyImg,
    gallery: [exoticDairyImg, dairyCollageImg, tcFittingsImg],
    shortDescription: "Hastelloy C276 exotic alloy hygienic TC ferrules engineered for severe chemical synthesis & radio-pharma.",
    overview: "Designed for nuclear medicine, radio-pharmaceuticals, and extreme chemical synthesis reactors. Operates reliably under high temperatures, strong wet chlorine gas, and aggressive organic synthesis reagents without pitting.",
    forms: ["Sanitary Ferrule", "SMS Coupler", "Blind End Cap"],
    sizeRange: "1/2\" to 3\" O.D.",
    wallThickness: "1.65 mm to 2.77 mm",
    length: "28.6 mm Overall Length",
    endConnections: "Tri-Clover Sanitary Clamp End x Orbital Butt Weld",
    specifications: {
      governingStandard: "ASME BPE Group 3, ASTM B574, ASTM B575, USP Class VI",
      alloyMetallurgy: "Ni-Mo-Cr with Tungsten (Hastelloy C276 / UNS N10276)",
      surfaceFinish: "Ultra-Mirror Electro-Polished Ra ≤ 0.15 µm (6 µin)",
      corrosionImmunity: "Immune to Ferric & Cupric Chlorides, Wet Chlorine, Formic & Acetic Acids"
    },
    standards: [
      "ASME BPE Group 3 - Metallic Materials for BioProcessing",
      "ASTM B574 - Low-Carbon Nickel-Molybdenum-Chromium Alloy Rod",
      "USP Class VI Certification",
      "3-A Sanitary Guidelines"
    ],
    applications: [
      "Nuclear Radio-Pharmaceutical Synthesis & Radiotracers",
      "Severe Organic Acid Reaction Loops in API Synthesis",
      "Specialty Biotech Chemotherapy Manufacturing Skids"
    ],
    technicalDetails: {
      manufacturingType: "Forged Bar Stock Precision CNC Machined & Electro-Polished",
      pressureRating: "200 PSI @ 200°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 & 3.2 Inspection Certificate with Radiographic Test"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-duplex-2205-ferrule", "dairy-super-duplex-2507-ferrule"]
  }
];

export const getDairyPharmaProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim().replace(/-manufactured-in-mumbai$/, "");
  return DAIRY_PHARMA_PRODUCTS.find((p) => p.slug === clean || p.id === clean) || null;
};

// Strictly get products by material (GUARANTEED ZERO CROSS-CONTAMINATION)
export const getDairyPharmaProductsByMaterial = (materialSlug = "") => {
  const clean = String(materialSlug).toLowerCase().trim();
  if (clean === "all") return DAIRY_PHARMA_PRODUCTS;

  // Normalized matching supporting singular/plural aliases
  const targetSlug =
    clean === "nickel-alloy" ? "nickel-alloys" :
    clean === "high-alloy" ? "high-alloys" :
    clean === "exotic-alloy" ? "exotic-alloys" :
    clean;

  return DAIRY_PHARMA_PRODUCTS.filter((p) => {
    return (
      p.materialSlug === targetSlug ||
      p.materialSlug === clean ||
      p.material.toLowerCase().replace(/[^a-z0-9]+/g, "-") === targetSlug ||
      p.material.toLowerCase().replace(/[^a-z0-9]+/g, "-") === clean
    );
  });
};

// Strictly get related products within Dairy & Pharma Fittings ONLY
export const getRelatedDairyPharmaProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim().replace(/-manufactured-in-mumbai$/, "");
  const current = getDairyPharmaProductBySlug(clean);
  if (!current) return DAIRY_PHARMA_PRODUCTS.slice(0, 4);

  // 1. Same material products
  const sameMat = DAIRY_PHARMA_PRODUCTS.filter(
    (p) => p.id !== current.id && p.materialSlug === current.materialSlug
  );

  // 2. Alternative Dairy & Pharma products
  const otherDairy = DAIRY_PHARMA_PRODUCTS.filter(
    (p) => p.id !== current.id && p.materialSlug !== current.materialSlug
  );

  return [...sameMat, ...otherDairy].slice(0, 4);
};
