// Isolated Data Layer — Dairy & Pharma Fittings (Manufacturing Division)
// Source of Truth: src/assets/All Products/Manufacture Division/Dairy & Pharma Fittings/

import ssDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/stainless steel.png";
import csDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/carbon.png";
import asDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/alloy steel.png";
import nickelDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/nikle.png";
import highAlloyDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/High Alloy.png";
import duplexDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/duplex.png";
import superDuplexDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/Super Duplex.png";
import titaniumDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/titanium.png";
import exoticDairyImg from "../assets/All Products/Manufacture Division/Dairy & Pharma Fittings/Exotic.png";

// Collateral assets for gallery
import dairyCollageImg from "../assets/All Products/Dairy & Pharma Fittings/dairy_pharma_collage.png";
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
  // =========================================================================
  // 1. STAINLESS STEEL DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-ss-304-sanitary-bend", "dairy-ss-sms-1145-union", "dairy-nickel-hastelloy-ferrule"]
  },
  {
    id: "dairy-ss-304-sanitary-bend",
    slug: "ss-304-316l-90-hygienic-sanitary-bend",
    name: "Stainless Steel 304/316L 90° Hygienic Sanitary Process Bend",
    title: "Stainless Steel 304/316L 90° Hygienic Sanitary Process Bend",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "STAINLESS STEEL",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    grade: "304L / 316L",
    gradeSlug: "ss-316l",
    grades: ["AISI 316L", "AISI 304L", "DIN 1.4404", "DIN 1.4307"],
    productType: "90° Long Radius Sanitary Bend",
    image: ssDairyImg,
    heroImage: ssDairyImg,
    gallery: [ssDairyImg, dairyCollageImg],
    shortDescription: "Full radius mandrel-bent 90° sanitary elbows with uniform wall thickness, extended orbital tangents, and electro-polished bore.",
    overview: "Formed using automated orbital mandrel tube bending techniques ensuring internal ovality < 1%. Engineered with extended tangent straight lengths to accommodate automatic orbital weld heads in sterile pharmaceutical cleanrooms.",
    forms: ["90° Elbow", "45° Elbow", "180° Return Bend", "Short & Long Radius"],
    sizeRange: "1/2\" O.D. to 4\" O.D.",
    wallThickness: "1.65 mm to 2.11 mm (16-14 Gauge)",
    length: "Standard ASME BPE Tangents (38.1mm to 76.2mm straight ends)",
    endConnections: "Butt Weld Orbital Tangents / Tri-Clamp Ends",
    specifications: {
      governingStandard: "ASME BPE Table DT-4.1.1-1, 3-A Sanitary, DIN 11852",
      size: "1/2\" O.D. to 4\" O.D.",
      thickness: "1.65 mm to 2.11 mm (16-14 Gauge)",
      surfaceFinish: "Internal Ra ≤ 0.38 µm Mechanical / Electro-Polished, External 320 Grit (Ra ≤ 0.8 µm)",
      bendRadius: "1.5D Centerline Radius (Uniform wall thinning < 10%)",
      cleaningCompatibility: "Full Clean-In-Place (CIP) & Steam-In-Place (SIP) at 145°C"
    },
    standards: [
      "ASME BPE - BioProcessing Equipment Standards",
      "3-A Sanitary Standard #63-04",
      "DIN 11852 - Stainless Steel Fittings for the Food Industry (Bends)",
      "SMS 1145 - Swedish Sanitary Tube Bends"
    ],
    applications: [
      "Dairy Milk Receiving & Pasteurization skids",
      "Beverage Bottling and Craft Brewery transfer loops",
      "Pharmaceutical cleanroom purified fluid manifolds",
      "Sterile API ingredient transfer lines"
    ],
    technicalDetails: {
      manufacturingType: "Mandrel Bent from ASTM A270 Sanitary Welded/Seamless Tube",
      pressureRating: "150 PSI @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC, 3-A Compliance"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-ss-sms-1145-union", "dairy-high-alloy-al6xn-clamp"]
  },
  {
    id: "dairy-ss-sms-1145-union",
    slug: "ss-sms-1145-sanitary-hygienic-union",
    name: "Stainless Steel SMS 1145 Sanitary Hygienic Union Assembly",
    title: "Stainless Steel SMS 1145 Sanitary Hygienic Union Assembly",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "STAINLESS STEEL",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    grade: "304 / 316L",
    gradeSlug: "ss-316l",
    grades: ["AISI 316L (Contact Parts)", "AISI 304 (Round Nut)"],
    productType: "SMS 1145 Hygienic Union Assembly",
    image: ssDairyImg,
    heroImage: ssDairyImg,
    gallery: [ssDairyImg, dairyCollageImg],
    shortDescription: "Complete Swedish standard SMS 1145 union assembly including weld liner, male part, round slotted nut & food-grade EPDM/PTFE seal.",
    overview: "Provides rapid dismountable connections in dairy and food processing equipment. Features flat face sealing with zero dead-leg crevices, ensuring total drainability and complete CIP/SIP cleanability under continuous thermal cycling.",
    forms: ["Complete Union Set", "Welding Liner", "Threaded Male Part", "Round Slotted Nut", "L-Profile Gasket"],
    sizeRange: "SMS 25 (1\") to SMS 104 (4\")",
    wallThickness: "1.25 mm to 2.0 mm",
    length: "Compact Coupler Dimensions per SMS 1145",
    endConnections: "Butt Weld to Sanitary Tube",
    specifications: {
      governingStandard: "SMS 1145, DIN 11851, ISO 2853, BS 4825 Part 4",
      unionComponents: "Weld Liner (316L) + Male Threaded Part (316L) + Slotted Nut (304) + Gasket",
      size: "SMS 25 (1\") to SMS 104 (4\")",
      thickness: "1.25 mm to 2.0 mm",
      gasketSealMaterial: "FDA Compliant EPDM (Black/White), Silicone, PTFE, Viton / FKM",
      pressureRating: "PN16 (16 Bar for SMS 25-51) / PN10 (10 Bar for SMS 63.5-104)"
    },
    standards: [
      "SMS 1145 - Swedish Standard for Sanitary Unions",
      "ISO 2853 - Stainless Steel Screwed Couplings for the Food Industry",
      "DIN 11851 - Hygienic Screwed Pipe Connections",
      "FDA 21 CFR 177.2600 Food Contact Compliance"
    ],
    applications: [
      "Dairy Pasteurizer Inlet & Outlet Headers",
      "Food & Beverage Tank Dismountable Connections",
      "Sanitary Centrifugal Pump Connections",
      "Mobile Cleanroom Transfer Skid Manifolds"
    ],
    technicalDetails: {
      manufacturingType: "Forged Bar Stock Precision CNC Turned",
      pressureRating: "Up to 16 Bar (232 PSI)",
      tolerance: "SMS 1145 Precision Class",
      certifications: "EN 10204 3.1 MTC, FDA Certificate for Elastomers"
    },
    relatedProductIds: ["dairy-ss-316l-tc-ferrule", "dairy-ss-304-sanitary-bend"]
  },

  // =========================================================================
  // 2. CARBON STEEL DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-cs-sanitary-reducer", "dairy-as-sanitary-tee", "dairy-ss-316l-tc-ferrule"]
  },
  {
    id: "dairy-cs-sanitary-reducer",
    slug: "carbon-steel-sanitary-concentric-reducer",
    name: "Carbon Steel Heavy-Duty Sanitary Process Concentric Reducer",
    title: "Carbon Steel Heavy-Duty Sanitary Process Concentric Reducer",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "CARBON STEEL",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    grade: "ASTM A234 WPB",
    gradeSlug: "a234-wpb",
    grades: ["ASTM A234 WPB", "ASTM A106 Gr. B"],
    productType: "Sanitary Process Reducer",
    image: csDairyImg,
    heroImage: csDairyImg,
    gallery: [csDairyImg, dairyCollageImg],
    shortDescription: "Concentric transition reducers engineered for utility fluid flow stabilization in pharmaceutical support facilities.",
    overview: "Hot formed carbon steel process reducers designed with gradual taper slopes preventing turbulence and cavitation in pump suction manifolds feeding pharmaceutical HVAC and clean steam utilities.",
    forms: ["Concentric Reducer", "Eccentric Reducer"],
    sizeRange: "1.5\" x 1\" to 6\" x 4\"",
    wallThickness: "Sch 40 STD / Sch 80 XS",
    length: "76 mm to 140 mm",
    endConnections: "Butt Weld Beveled Ends / Clamp Adapters",
    specifications: {
      governingStandard: "ASME B16.9, ASTM A234 WPB, DIN 11850 Custom Taper",
      size: "1.5\" x 1\" to 6\" x 4\"",
      thickness: "Sch 40 STD / Sch 80 XS",
      taperAngle: "Gradual 15°–20° Slope for Laminar Flow",
      surfaceFinish: "Shot Blasted Smooth + Rust Preventative Varnish"
    },
    standards: [
      "ASME B16.9 - Factory-Made Wrought Buttwelding Fittings",
      "ASTM A234 / A234M - Piping Fittings of Wrought Carbon Steel"
    ],
    applications: [
      "HVAC Chilled Water Distribution Skids",
      "High-Pressure Boiler Feedwater Pumps",
      "Secondary Utility Manifolds in Pharma Complexes"
    ],
    technicalDetails: {
      manufacturingType: "Seamless Hot Pressed & Sized",
      pressureRating: "Matched to Connecting Pipe Schedule",
      tolerance: "ASME B16.9",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-cs-sanitary-adapter", "dairy-as-sanitary-tee"]
  },

  // =========================================================================
  // 3. ALLOY STEEL DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-cs-sanitary-adapter", "dairy-nickel-hastelloy-ferrule"]
  },

  // =========================================================================
  // 4. NICKEL ALLOY DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-nickel-monel-sanitary-bend", "dairy-high-alloy-al6xn-clamp", "dairy-ss-316l-tc-ferrule"]
  },
  {
    id: "dairy-nickel-monel-sanitary-bend",
    slug: "monel-400-electro-polished-sanitary-bend",
    name: "Monel 400 Electro-Polished Sanitary 90° Process Bend",
    title: "Monel 400 Electro-Polished Sanitary 90° Process Bend",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "NICKEL ALLOYS",
    materialName: "Nickel Alloys",
    materialSlug: "nickel-alloys",
    grade: "Monel 400 (UNS N04400)",
    gradeSlug: "monel-400",
    grades: ["Monel 400 (UNS N04400)", "Nickel 200 / 201"],
    productType: "90° Electro-Polished Bend",
    image: nickelDairyImg,
    heroImage: nickelDairyImg,
    gallery: [nickelDairyImg, dairyCollageImg],
    shortDescription: "Monel 400 hygienic 90° elbows for saline pharma processing, marine biotech & halogenated media.",
    overview: "Nickel-Copper Monel 400 sanitary bends providing exceptional resistance to hydrofluoric acid, salt spray, and concentrated saline solutions in marine biotech facilities and pharmaceutical salt formulation skids.",
    forms: ["90° Elbow", "45° Elbow"],
    sizeRange: "1\" O.D. to 4\" O.D.",
    wallThickness: "1.65 mm to 2.11 mm",
    length: "1.5D Centerline Radius",
    endConnections: "Orbital Butt Weld Ends / Sanitary Clamp Ends",
    specifications: {
      governingStandard: "ASTM B164, ASTM B366, ASME BPE Custom Specifications",
      size: "1\" to 4\" O.D.",
      thickness: "Sch 40 / Sch 80 / Sch 160",
      surfaceFinish: "Internal Ra ≤ 0.38 µm Electro-Polished",
      corrosionImmunity: "Immune to Deaerated Hydrofluoric Acid and Brackish Seawater"
    },
    standards: [
      "ASTM B164 - Nickel-Copper Alloy Rod, Bar, and Wire",
      "ASTM B366 - Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "3-A Sanitary Guidelines"
    ],
    applications: [
      "Saline Pharmaceutical Formulations and IV Fluid Mixing",
      "Marine Biotechnology & Algae Culture Laboratories",
      "Fluorinated Chemical Processing Loops"
    ],
    technicalDetails: {
      manufacturingType: "Mandrel Bent Seamless Nickel-Copper Tube",
      pressureRating: "150 PSI @ 150°C",
      tolerance: "ASME BPE",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-nickel-hastelloy-ferrule", "dairy-ss-316l-tc-ferrule"]
  },

  // =========================================================================
  // 5. HIGH ALLOY DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-high-alloy-sanitary-tee", "dairy-duplex-2205-ferrule", "dairy-ss-316l-tc-ferrule"]
  },
  {
    id: "dairy-high-alloy-sanitary-tee",
    slug: "al6xn-high-alloy-sanitary-equal-tee",
    name: "AL-6XN High Alloy Sanitary Equal & Reducing Tee",
    title: "AL-6XN High Alloy Sanitary Equal & Reducing Tee",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "HIGH ALLOYS",
    materialName: "High Alloys",
    materialSlug: "high-alloys",
    grade: "AL-6XN (UNS N08367)",
    gradeSlug: "al-6xn",
    grades: ["AL-6XN (UNS N08367)", "254 SMO (UNS S31254)"],
    productType: "Sanitary Equal & Reducing Tee",
    image: highAlloyDairyImg,
    heroImage: highAlloyDairyImg,
    gallery: [highAlloyDairyImg, dairyCollageImg],
    shortDescription: "High alloy 6% Moly sanitary tees with orbital weld tangents for sterile biopharmaceutical manufacturing.",
    overview: "Seamless formed AL-6XN sanitary tees with extended tangent ends allowing automated orbital welding in cleanroom piping installations exposed to acidic SIP steam.",
    forms: ["Equal Tee", "Reducing Tee", "Short Outlet Tee"],
    sizeRange: "1\" to 4\" O.D.",
    wallThickness: "1.65 mm to 2.11 mm",
    length: "Standard ASME BPE Tangents",
    endConnections: "Butt Weld Orbital Tangents / Tri-Clamp Ends",
    specifications: {
      governingStandard: "ASME BPE Table DT-4.1.2-1, 3-A Sanitary, ASTM B688",
      surfaceFinish: "Internal Ra ≤ 0.38 µm Electro-Polished, External Ra ≤ 0.8 µm",
      size: "1\\"
    },
    standards: [
      "ASME BPE - BioProcessing Equipment Standards",
      "3-A Sanitary Standards",
      "ASTM B688 / ASTM A182"
    ],
    applications: [
      "Oncology Injectable Drug Manufacturing",
      "Biotech Cleanroom Sterile Utility Loops",
      "Concentrated Acidic Buffer Media Lines"
    ],
    technicalDetails: {
      manufacturingType: "Hydraulic Pressed Seamless Body & Orbital Welded Tangents",
      pressureRating: "150 PSI @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-high-alloy-al6xn-clamp", "dairy-super-duplex-2507-ferrule"]
  },

  // =========================================================================
  // 6. DUPLEX DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-duplex-2205-sanitary-bend", "dairy-super-duplex-2507-ferrule", "dairy-ss-316l-tc-ferrule"]
  },
  {
    id: "dairy-duplex-2205-sanitary-bend",
    slug: "duplex-2205-hygienic-sanitary-90-bend",
    name: "Duplex 2205 Hygienic Sanitary 90° Electro-Polished Bend",
    title: "Duplex 2205 Hygienic Sanitary 90° Electro-Polished Bend",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "DUPLEX",
    materialName: "Duplex Steel",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    grades: ["UNS S31803 / S32205", "EN 1.4462"],
    productType: "90° Hygienic Process Bend",
    image: duplexDairyImg,
    heroImage: duplexDairyImg,
    gallery: [duplexDairyImg, dairyCollageImg],
    shortDescription: "Duplex 2205 electro-polished sanitary 90° bends engineered for high pressure beverage carbonation and dairy skids.",
    overview: "Mandrel-bent Duplex 2205 elbows tested under pulsating pressure loads. Prevents fatigue cracking and chloride pitting in high-vibration dairy separator and homogenization pumps.",
    forms: ["90° Elbow", "45° Elbow"],
    sizeRange: "1\" to 4\" O.D.",
    wallThickness: "1.65 mm to 2.77 mm",
    length: "1.5D Centerline Radius",
    endConnections: "Orbital Butt Weld Tangents",
    specifications: {
      governingStandard: "ASTM A182 F51, ASTM A789/A790, 3-A Sanitary, DIN 11852",
      surfaceFinish: "Internal Ra ≤ 0.38 µm Electro-Polished",
      fatigueResistance: "Exceeds 10 Million Pressure Cycles without Crack Initiation"
    },
    standards: [
      "ASTM A182 F51 - Duplex Steel Piping Fittings",
      "3-A Sanitary Standards #63-04",
      "DIN 11852 - Food Industry Bends"
    ],
    applications: [
      "Carbonated Soft Drink & Beer Canning Manifolds",
      "High-Pressure Dairy Separator Discharge Loops",
      "Food Grade Acid & CIP Neutralization Lines"
    ],
    technicalDetails: {
      manufacturingType: "Mandrel Bent Seamless Duplex Tube & Solution Annealed",
      pressureRating: "250 PSI @ 150°C",
      tolerance: "ASME BPE",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-duplex-2205-ferrule", "dairy-ss-316l-tc-ferrule"]
  },

  // =========================================================================
  // 7. SUPER DUPLEX DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-super-duplex-2507-tee", "dairy-duplex-2205-ferrule", "dairy-titanium-gr2-ferrule"]
  },
  {
    id: "dairy-super-duplex-2507-tee",
    slug: "super-duplex-2507-sanitary-concentric-reducer-tee",
    name: "Super Duplex 2507 Sanitary Concentric Reducer & Process Tee",
    title: "Super Duplex 2507 Sanitary Concentric Reducer & Process Tee",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "SUPER DUPLEX",
    materialName: "Super Duplex Steel",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    grades: ["UNS S32750", "EN 1.4410"],
    productType: "Sanitary Concentric Reducer & Tee",
    image: superDuplexDairyImg,
    heroImage: superDuplexDairyImg,
    gallery: [superDuplexDairyImg, dairyCollageImg],
    shortDescription: "High-strength Super Duplex 2507 sanitary tees and concentric reducers for severe bioprocess conditions.",
    overview: "Precision cold-formed Super Duplex tees and reducers with electro-polished internal surfaces to prevent biofilm adherence under high flow velocities in hyper-saline cleanrooms.",
    forms: ["Equal Tee", "Concentric Reducer", "Reducing Tee"],
    sizeRange: "1\" to 4\" O.D.",
    wallThickness: "1.65 mm to 3.0 mm",
    length: "Standard ASME BPE Tangents",
    endConnections: "Butt Weld Orbital Tangents / Tri-Clamp Ends",
    specifications: {
      governingStandard: "ASTM A182 F53, ASTM A815, ASME BPE, 3-A",
      surfaceFinish: "Internal Ra ≤ 0.38 µm Electro-Polished",
      prenRating: "PREN ≥ 42"
    },
    standards: [
      "ASTM A182 F53 - Super Duplex Stainless Steel Fittings",
      "ASME BPE BioProcessing Standards",
      "3-A Sanitary Guidelines"
    ],
    applications: [
      "Biotech Sterile Filtration Manifolds",
      "High-Chloride Buffer Preparation Skids",
      "Desalinated Water for Injection (WFI) Plants"
    ],
    technicalDetails: {
      manufacturingType: "Formed Seamless Body with Ultrasonic Testing",
      pressureRating: "300 PSI @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-super-duplex-2507-ferrule", "dairy-duplex-2205-ferrule"]
  },

  // =========================================================================
  // 8. TITANIUM DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-titanium-gr2-bend", "dairy-exotic-c276-ferrule", "dairy-ss-316l-tc-ferrule"]
  },
  {
    id: "dairy-titanium-gr2-bend",
    slug: "titanium-grade-2-high-purity-sanitary-90-bend",
    name: "Titanium Grade 2 High-Purity Sanitary 90° Process Bend",
    title: "Titanium Grade 2 High-Purity Sanitary 90° Process Bend",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "TITANIUM",
    materialName: "Titanium Alloys",
    materialSlug: "titanium",
    grade: "Titanium Grade 2 (UNS R50400)",
    gradeSlug: "titanium-gr2",
    grades: ["Titanium Grade 2 (UNS R50400)", "Titanium Grade 7 (Ti-0.2Pd)"],
    productType: "90° Titanium Process Bend",
    image: titaniumDairyImg,
    heroImage: titaniumDairyImg,
    gallery: [titaniumDairyImg, dairyCollageImg],
    shortDescription: "Titanium Grade 2 seamless sanitary 90° elbows engineered for weight-sensitive sterile bioprocess skids.",
    overview: "Ultra-lightweight Titanium Gr2 sanitary bends offering 45% weight reduction compared to stainless steel while delivering immune resistance to bio-corrosion, chlorine dioxide sanitization, and physiological saline.",
    forms: ["90° Long Radius Bend", "45° Bend"],
    sizeRange: "1\" to 4\" O.D.",
    wallThickness: "1.25 mm to 1.65 mm",
    length: "1.5D Centerline Radius",
    endConnections: "Orbital Butt Weld Tangents",
    specifications: {
      governingStandard: "ASTM B363, ASTM B348, ASME BPE, 3-A",
      surfaceFinish: "Internal Ra ≤ 0.25 µm Electro-Polished",
      densityAdvantage: "4.51 g/cm³ (High Strength-to-Weight Ratio)"
    },
    standards: [
      "ASTM B363 - Titanium Piping Fittings",
      "ASTM B338 - Titanium Tubes for Condensers and Heat Exchangers",
      "3-A Sanitary Guidelines"
    ],
    applications: [
      "Vaccine Production Facilities & Cleanroom Skids",
      "Mobile Sterile Bioreactor Transfer Assemblies",
      "Ultra-Pure Saline and Halide Chemical Processing Loops"
    ],
    technicalDetails: {
      manufacturingType: "Cold Mandrel Bent Seamless Titanium Tube in Inert Gas Atmosphere",
      pressureRating: "150 PSI @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC"
    },
    relatedProductIds: ["dairy-titanium-gr2-ferrule", "dairy-ss-316l-tc-ferrule"]
  },

  // =========================================================================
  // 9. EXOTIC ALLOY DAIRY & PHARMA FITTINGS
  // =========================================================================
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
    relatedProductIds: ["dairy-exotic-sanitary-valve-body", "dairy-titanium-gr2-ferrule", "dairy-nickel-hastelloy-ferrule"]
  },
  {
    id: "dairy-exotic-sanitary-valve-body",
    slug: "exotic-alloy-c276-sanitary-diaphragm-valve-body",
    name: "Exotic Alloy C276 Sanitary Process Diaphragm Valve Body",
    title: "Exotic Alloy C276 Sanitary Process Diaphragm Valve Body",
    division: "MANUFACTURER",
    category: "Dairy & Pharma Fittings",
    categorySlug: "dairy-sanitary-fittings",
    material: "EXOTIC ALLOYS",
    materialName: "Exotic Alloys",
    materialSlug: "exotic-alloys",
    grade: "Hastelloy C276 / Inconel 686",
    gradeSlug: "c276",
    grades: ["Hastelloy C276", "Inconel 686", "Alloy 59"],
    productType: "Sanitary Diaphragm Valve Body",
    image: exoticDairyImg,
    heroImage: exoticDairyImg,
    gallery: [exoticDairyImg, dairyCollageImg],
    shortDescription: "Precision forged Hastelloy C276 sanitary two-way weir diaphragm valve bodies for sterile aggressive acid shut-off.",
    overview: "Two-way weir-type sanitary diaphragm valve bodies forged from solid Hastelloy C276 with self-draining cavity design. Guarantees zero hold-up volume and complete sterility in severe pharmaceutical synthesis loops.",
    forms: ["Two-Way Weir Body", "T-Pattern Zero Static Valve Body"],
    sizeRange: "1/2\" to 3\" O.D. ASME BPE",
    wallThickness: "Heavy Forged Body",
    length: "Standard ASME BPE Port-to-Port",
    endConnections: "Orbital Weld Tangents / Tri-Clamp Ends",
    specifications: {
      governingStandard: "ASME BPE Part SG, 3-A Sanitary, ASTM B574",
      internalCavityFinish: "Ra ≤ 0.20 µm Electro-Polished (Zero Dead Leg / Fully Drainable)",
      diaphragmCompatibility: "PTFE / EPDM Two-Piece Backed Diaphragms",
      pressureRating: "10 Bar (150 PSI) Maximum Working Pressure"
    },
    standards: [
      "ASME BPE Part SG - Sealing Components and Valve Bodies",
      "3-A Sanitary Standards for Valves",
      "ASTM B574 - Low-Carbon Nickel Alloys"
    ],
    applications: [
      "Sterile API Acid Dosing & Metering",
      "Radioactive Tracer Sterile Sampling Lines",
      "Ultra-Pure Specialty Pharmaceutical Reaction Tanks"
    ],
    technicalDetails: {
      manufacturingType: "Forged Billet CNC Machined with Micro-Profilometer Verification",
      pressureRating: "150 PSI @ 150°C",
      tolerance: "ASME BPE Table DT-3",
      certifications: "EN 10204 3.1 MTC, Hydrostatic & Dye Penetrant Test"
    },
    relatedProductIds: ["dairy-exotic-c276-ferrule", "dairy-titanium-gr2-ferrule"]
  }
];

// Strictly get product by slug (with or without mfg suffix)
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
