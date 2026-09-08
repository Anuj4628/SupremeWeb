// Comprehensive Product Catalog Database - Supreme Metal & Alloys (SMA)
// Single Source of Truth for Manufacturer & Supplier Divisions, Categories, Materials, Grades, and Products
import { cleanMfgSlug, normalizeCategorySlug } from "../utils/mfgRoutes";
import { PERFORATED_SHEETS_PRODUCTS, PERFORATED_SHEETS_CATEGORY_HERO } from "./perforatedSheetsData";
import { DAIRY_PHARMA_PRODUCTS } from "./dairyPharmaData";

// ----------------------------------------------------------------------
// Image Imports (Verified Project Assets)
// ----------------------------------------------------------------------
import sheetImg from "../assets/All Products/Sheet.png";
import coilImg from "../assets/All Products/Coil.png";
import heavyPlatesBarsImg from "../assets/heavy_plates_coils_bars.jpg";
import precisionPipesJpg from "../assets/precision_pipes_tubes.jpg";
import precisionPipesPng from "../assets/Product images/PRECISION PIPES, TUBES & HIGH-PERFORMANCE ALLOYS.png";
import angleChannelFlatImg from "../assets/All Products/Angle,Channel,flat bar.png";
import forgedFlangesImg from "../assets/FORGED INDUSTRIAL FLANGES & PIPELINE FITTINGS.png";
import fastenersImg from "../assets/All Products/Fasteners.png";
import buttWeldFitImg from "../assets/All Products/Butt Weld fit.png";
import forgedFittingPng from "../assets/All Products/fordege fitting.png";
import forgedFittingsAsset from "../assets/forged_fittings.png";
import dairySanitaryImg from "../assets/All Products/dairy and sanitary tube fittings.png";
import tcFittingsImg from "../assets/All Products/TC fittings.png";
import ferruleFittingsImg from "../assets/All Products/ferrule fittings.png";

// Butt Weld Fittings Dedicated Assets
import ssButtWeldImg from "../assets/All Products/Butt weld fit/Stainless Steel Butt Weld Fittings.png";
import nickelExoticButtWeldImg from "../assets/All Products/Butt weld fit/High Nickel & Exotic Metal Butt Weld Fittings.png";
import duplexSuperDuplexButtWeldImg from "../assets/All Products/Butt weld fit/Duplex & Super Duplex Steel Butt Weld Fittings.png";
import carbonSteelButtWeldImg from "../assets/All Products/Butt weld fit/Carbon Steel Butt Weld Fittings.png";
import alloySteelButtWeldImg from "../assets/All Products/Butt weld fit/Alloy Steel Butt Weld Fittings.png";
import buttWeldShowcaseImg from "../assets/All Products/Butt weld fit/Gemini_Generated_Image_ahig4tahig4tahig (4).png";

// Forged Fittings Dedicated Assets (Extracted from Collage)
import forgedCollageImg from "../assets/All Products/Forged Fittings/forged_fittings_collage.png";
import forgedSsImg from "../assets/All Products/Forged Fittings/forged_ss.png";
import forgedCsImg from "../assets/All Products/Forged Fittings/forged_cs.png";
import forgedAsImg from "../assets/All Products/Forged Fittings/forged_as.png";
import forgedNickelImg from "../assets/All Products/Forged Fittings/forged_nickel.png";
import forgedHighAlloyImg from "../assets/All Products/Forged Fittings/forged_high_alloy.png";
import forgedDuplexImg from "../assets/All Products/Forged Fittings/forged_duplex.png";
import forgedSuperDuplexImg from "../assets/All Products/Forged Fittings/forged_super_duplex.png";
import forgedTitaniumImg from "../assets/All Products/Forged Fittings/forged_titanium.png";
import forgedExoticImg from "../assets/All Products/Forged Fittings/forged_exotic.png";

// Flanges Dedicated Assets (Extracted from Collage - Visual Only, No Embedded Text)
import flangesCollageImg from "../assets/All Products/Flanges/flanges_collage.png";
import flangeSsImg from "../assets/All Products/Flanges/flange_ss.png";
import flangeCsImg from "../assets/All Products/Flanges/flange_cs.png";
import flangeAsImg from "../assets/All Products/Flanges/flange_as.png";
import flangeNickelImg from "../assets/All Products/Flanges/flange_nickel.png";
import flangeHighAlloyImg from "../assets/All Products/Flanges/flange_high_alloy.png";
import flangeDuplexImg from "../assets/All Products/Flanges/flange_duplex.png";
import flangeSuperDuplexImg from "../assets/All Products/Flanges/flange_super_duplex.png";
import flangeTitaniumImg from "../assets/All Products/Flanges/flange_titanium.png";
import flangeExoticImg from "../assets/All Products/Flanges/flange_exotic.png";

// Fasteners Dedicated Assets (Extracted from Collage - Visual Only, No Embedded Text)
import fastenersCollageImg from "../assets/All Products/Fasteners/fasteners_collage.png";
import fastenerSsImg from "../assets/All Products/Fasteners/fastener_ss.png";
import fastenerAlloySteelImg from "../assets/All Products/Fasteners/fastener_alloy_steel.png";
import fastenerGalvanizedImg from "../assets/All Products/Fasteners/fastener_galvanized.png";
import fastenerTitaniumImg from "../assets/All Products/Fasteners/fastener_titanium.png";
import fastenerOxidizedImg from "../assets/All Products/Fasteners/fastener_oxidized.png";
import fastenerPlatedImg from "../assets/All Products/Fasteners/fastener_plated.png";
import fastenerBrassImg from "../assets/All Products/Fasteners/fastener_brass.png";
import fastenerBronzeImg from "../assets/All Products/Fasteners/fastener_bronze.png";
import fastenerAluminumImg from "../assets/All Products/Fasteners/fastener_aluminum.png";

// Dairy & Pharma Fittings Dedicated Assets (Source of Truth: Manufacture Division/Dairy & Pharma Fittings)
import {
  ssDairyImg,
  csDairyImg,
  asDairyImg,
  nickelDairyImg,
  highAlloyDairyImg,
  duplexDairyImg,
  superDuplexDairyImg,
  titaniumDairyImg,
  exoticDairyImg
} from "./dairyPharmaData";

// Wire Mesh Dedicated Assets (Verified Project Assets)
import wireMeshSsImg from "../assets/All Products/Wire Mesh/Stainless steel.png";
import wireMeshCsImg from "../assets/All Products/Wire Mesh/Carbon.png";
import wireMeshAsImg from "../assets/All Products/Wire Mesh/alloy steel.png";
import wireMeshNickelImg from "../assets/All Products/Wire Mesh/Nikle Alloys.png";
import wireMeshHighAlloyImg from "../assets/All Products/Wire Mesh/High Alloy.png";
import wireMeshDuplexImg from "../assets/All Products/Wire Mesh/Duplex.png";
import wireMeshSuperDuplexImg from "../assets/All Products/Wire Mesh/Super Duplex.png";
import wireMeshTitaniumImg from "../assets/All Products/Wire Mesh/titanium.png";
import wireMeshExoticImg from "../assets/All Products/Wire Mesh/Exotic.png";
import { ALL_SUPPLIER_PRODUCTS } from "./supplierCatalog";

// ----------------------------------------------------------------------
// 1. PRODUCT DIVISIONS
// ----------------------------------------------------------------------
export const DIVISIONS = {
  MANUFACTURER: {
    id: "manufacturer",
    name: "MANUFACTURER",
    tagline: "In-House Engineered & Forged Piping Components",
    description: "Precision-manufactured butt weld fittings, forged fittings, industrial flanges, high-tensile fasteners, sanitary process fittings, hose pipes, wire mesh, and perforated sheets.",
    badgeColor: "bg-[#F36F21] text-white"
  },
  SUPPLIER: {
    id: "supplier",
    name: "SUPPLIER",
    tagline: "Global Stockist & Mill Representative",
    description: "Stockist and distributor of seamless & welded pipes, heavy engineering plates, precision round bars, coils, circles, Patta Patti, wire, and structural profiles in exotic alloys.",
    badgeColor: "bg-[#0E2A3A] text-white border border-slate-700"
  }
};

// ----------------------------------------------------------------------
// 2. PRODUCT CATEGORIES (Organized by Division)
// ----------------------------------------------------------------------
export const CATEGORIES = [
  // MANUFACTURER DIVISION
  {
    id: "buttweld-fittings",
    slug: "buttweld-fittings",
    name: "Butt Weld Fittings",
    division: "MANUFACTURER",
    iconName: "Sparkles",
    shortDesc: "Seamless & welded elbows, tees, reducers & caps",
    fullDesc: "Hot formed and cold pressed butt weld pipe fittings in stainless steel, duplex, super duplex, nickel alloys, and carbon steel."
  },
  {
    id: "forged-fittings",
    slug: "forged-fittings",
    name: "Forged Fittings",
    division: "MANUFACTURER",
    iconName: "Wrench",
    shortDesc: "Socketweld & threaded fittings (2000# to 9000#)",
    fullDesc: "High-pressure forged elbows, tees, unions, couplings, and nipples engineered per ASME B16.11."
  },
  {
    id: "flanges",
    slug: "flanges",
    name: "Flanges",
    division: "MANUFACTURER",
    iconName: "Layers",
    shortDesc: "ANSI, DIN & BS forged industrial flanges",
    fullDesc: "Weld Neck, Slip-On, Blind, Socket Weld, Threaded, and Spectacle Blind flanges (150# to 2500#)."
  },
  {
    id: "fasteners",
    slug: "fasteners",
    name: "Fasteners",
    division: "MANUFACTURER",
    iconName: "ShieldCheck",
    shortDesc: "High-tensile stud bolts, nuts & heavy bolting",
    fullDesc: "ASTM A193 B7/B8/B16 stud bolts, A194 heavy hex nuts, socket cap screws, and custom studs."
  },
  {
    id: "dairy-sanitary-fittings",
    slug: "dairy-sanitary-fittings",
    name: "Dairy & Pharma Fittings",
    division: "MANUFACTURER",
    iconName: "ShieldCheck",
    shortDesc: "Hygienic electro-polished TC ferrules & sanitary bends",
    fullDesc: "3-A & ASME BPE electro-polished sanitary tubing, Tri-Clover clamps, valves, and SMS unions."
  },
  {
    id: "ferrule-fittings",
    slug: "ferrule-fittings",
    name: "Ferrule Fittings",
    division: "MANUFACTURER",
    iconName: "Wrench",
    shortDesc: "Single & double ferrule tube fittings (up to 10,000 PSI)",
    fullDesc: "Double ferrule compression instrumentation tube fittings, male/female connectors, unions, and tees."
  },
  {
    id: "hose-pipes",
    slug: "hose-pipes",
    name: "Hose Pipes",
    division: "MANUFACTURER",
    iconName: "Pipette",
    shortDesc: "SS corrugated flexible & wire braided hoses",
    fullDesc: "Flexible corrugated metal hoses with single/double layer braiding for vibration and thermal expansion."
  },
  {
    id: "wire-mesh",
    slug: "wire-mesh",
    name: "Wire Mesh",
    division: "MANUFACTURER",
    iconName: "FileText",
    shortDesc: "Woven, welded & crimped filtration screens",
    fullDesc: "Precision stainless steel woven wire mesh in plain, twill, and dutch weaves for micro-filtration."
  },
  {
    id: "perforated-sheets",
    slug: "perforated-sheets",
    name: "Perforated Sheets",
    division: "MANUFACTURER",
    iconName: "FileSpreadsheet",
    shortDesc: "Custom punched round, square & slotted sheets",
    fullDesc: "High-precision perforated metal sheets for acoustic, ventilation, and food-grade sieving."
  },

  // SUPPLIER DIVISION (9 Families matching master blueprint)
  {
    id: "pipes-tubes",
    slug: "pipes-tubes",
    name: "Pipes & Tubes",
    division: "SUPPLIER",
    iconName: "Pipette",
    shortDesc: "High-pressure seamless & welded pipes & tubes",
    fullDesc: "ASTM A312, A335, A106 seamless pipes, heat exchanger tubes, and line pipes up to 36\" NB."
  },
  {
    id: "sheets-plates",
    slug: "sheets-plates",
    name: "Sheets & Plates",
    division: "SUPPLIER",
    iconName: "FileText",
    shortDesc: "Heavy engineering plates & cold rolled sheets",
    fullDesc: "ASTM A240 HR/CR sheets, pressure vessel plates, and high-yield alloy plates up to 200mm thick."
  },
  {
    id: "rods-bars",
    slug: "rods-bars",
    name: "Rods & Bars",
    division: "SUPPLIER",
    iconName: "Disc",
    shortDesc: "Precision ground round, hex & square bars",
    fullDesc: "Centerless ground round bars, bright hex bars, forged shafts, and tie rods in high-stress alloys."
  },
  {
    id: "wires",
    slug: "wires",
    name: "Wires",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "High-tensile industrial, spring & welding wires",
    fullDesc: "Precision drawn stainless steel, nickel alloy, carbon steel, and titanium wires conforming to ASTM A313, A580, and AWS A5.9."
  },
  {
    id: "circle",
    slug: "circle",
    name: "Circle",
    division: "SUPPLIER",
    iconName: "Disc",
    shortDesc: "Rolled plate circles & forged heavy discs",
    fullDesc: "Precision laser/plasma cut rolled circles and forged disc blanks for flanges and tank heads."
  },
  {
    id: "flat",
    slug: "flat",
    name: "Flat",
    division: "SUPPLIER",
    iconName: "FileText",
    shortDesc: "Hot rolled & cold drawn flat bars",
    fullDesc: "Precision stainless steel and alloy flat bars for structural engineering and framing."
  },
  {
    id: "patapatti",
    slug: "patapatti",
    name: "Patapatti",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "Slit strips & narrow coiled strip stock",
    fullDesc: "Hot rolled and cold rolled stainless steel Patta Patti in customized widths and thickness gauges."
  },
  {
    id: "coil",
    slug: "coil",
    name: "Quile / Coil",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "2B, BA & Mirror finish precision slit coils",
    fullDesc: "Hot rolled and cold rolled coils in 2B, BA, No.4, and mirror finish with custom width slitting."
  },
  {
    id: "ring",
    slug: "ring",
    name: "Ring",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "Forged flange rings & lap-joint backing rings",
    fullDesc: "Seamless rolled and press forged rings conforming to ASTM A182 and A105 for flange fabrication."
  }
];

// ----------------------------------------------------------------------
// 3. SEPARATE METALLURGICAL MATERIALS (STRICT SEPARATION: DUPLEX & SUPER DUPLEX ARE SEPARATE)
// ----------------------------------------------------------------------
export const MATERIALS = [
  {
    id: "stainless-steel",
    slug: "stainless-steel",
    aliases: ["ss", "stainless"],
    number: "01",
    name: "Stainless Steel",
    shortName: "Stainless Steel",
    tagline: "Austenitic, Ferritic & Martensitic Corrosion Alloys",
    description: "Superior corrosion-resistant austenitic, ferritic, and martensitic stainless steels engineered for cryogenic to elevated thermal service.",
    grades: ["304 / 304L", "316 / 316L", "321 / 321H", "310S", "347 / 347H", "904L", "316Ti", "17-4PH"],
    standards: ["ASTM A312", "ASTM A240", "ASTM A276", "ASTM A182", "ASTM A403", "ASME B16.5"],
    applications: ["Chemical Processing", "Oil & Gas Refineries", "Food & Dairy Processing", "Pharmaceutical Piping", "Marine Equipment"],
    density: "7.93 g/cm³",
    yieldStrength: "205 - 310 MPa",
    image: ssButtWeldImg,
    accentColor: "#F36F21"
  },
  {
    id: "nickel",
    slug: "nickel",
    aliases: ["nickel-alloys", "nickel-alloy"],
    number: "02",
    name: "Nickel",
    shortName: "Nickel",
    tagline: "High-Nickel Severe Corrosion & Thermal Superalloys",
    description: "Prime commercially pure nickel and nickel-chromium-molybdenum superalloys engineered for extreme reducing acids and high-stress thermal service.",
    grades: ["Nickel 200 / 201", "Inconel 600", "Inconel 625", "Inconel 718", "Incoloy 800 / 800H", "Incoloy 825", "Monel 400", "Monel K500", "Hastelloy C276"],
    standards: ["ASTM B160", "ASTM B162", "ASTM B166", "ASTM B444", "ASTM B564", "ASME SB160"],
    applications: ["Caustic Evaporators", "Chlorination Systems", "Nuclear Steam Generators", "Offshore Flare Stacks", "Acid Scrubbers"],
    density: "8.44 - 8.89 g/cm³",
    yieldStrength: "240 - 550 MPa",
    image: wireMeshNickelImg,
    accentColor: "#3B82F6"
  },
  {
    id: "high-alloys",
    slug: "high-alloys",
    aliases: ["high-alloy"],
    number: "03",
    name: "High Alloys",
    shortName: "High Alloys",
    tagline: "Specialized Pitting & Severe Mixed Acid Metallurgy",
    description: "Highly specialized super-austenitic and advanced nickel-iron-chromium alloys delivering elite resistance to chloride pitting, crevice corrosion, and stress cracking.",
    grades: ["Hastelloy C22", "Alloy 20 (Carpenter 20)", "SMO 254 (1.4547)", "AL-6XN", "Sanicro 28"],
    standards: ["ASTM B574", "ASTM B575", "ASTM B462", "ASTM B688", "ASTM B622", "ASME SB574"],
    applications: ["Sulfuric Acid Handling", "Flue Gas Desulfurization (FGD)", "Phosphoric Acid Evaporators", "Bleach Plant Scrubbers", "Seawater Heat Exchangers"],
    density: "8.00 - 8.69 g/cm³",
    yieldStrength: "300 - 450 MPa",
    image: wireMeshHighAlloyImg,
    accentColor: "#8B5CF6"
  },
  {
    id: "duplex",
    slug: "duplex",
    aliases: ["duplex-steel"],
    number: "04",
    name: "Duplex",
    shortName: "Duplex",
    tagline: "Dual-Phase High Tensile & Chloride SCC Resistant",
    description: "50/50 dual-phase austenitic-ferritic microstructure delivering twice the mechanical yield strength of standard austenitic grades with exceptional chloride SCC resistance.",
    grades: ["UNS S31803 (2205)", "UNS S32205", "LDX 2101", "DIN 1.4462", "EN 10088-3 1.4462"],
    standards: ["ASTM A790", "ASTM A240", "ASTM A276", "ASTM A182 F51", "ASTM A815", "NORSOK M-630"],
    applications: ["Cargo Tanks & Chemical Tankers", "Pulp & Paper Digesters", "Desalination Piping", "Flue Gas Scrubber Ducts", "Offshore Process Piping"],
    density: "7.80 g/cm³",
    yieldStrength: "≥ 450 MPa",
    image: wireMeshDuplexImg,
    accentColor: "#0EA5E9"
  },
  {
    id: "super-duplex",
    slug: "super-duplex",
    aliases: ["super-duplex-steel"],
    number: "05",
    name: "Super Duplex",
    shortName: "Super Duplex",
    tagline: "PREN ≥ 42 Marine & Subsea Extreme Duty Metallurgy",
    description: "Elite 25% chromium super duplex alloys with PREN ≥ 42 engineered specifically for warm chlorinated seawater, sour hydrocarbon service, and extreme subsea depths.",
    grades: ["UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "DIN 1.4410", "DIN 1.4501", "ASTM A182 F53 / F55"],
    standards: ["ASTM A790", "ASTM A240", "ASTM A276", "ASTM A182 F53", "ASTM A815", "NORSOK M-630 MDS D55"],
    applications: ["Subsea Umbilicals & Flowlines", "Seawater Reverse Osmosis (SWRO)", "Offshore Firewater Deluge", "Subsea Manifolds", "Sour Gas Scrubbers"],
    density: "7.80 g/cm³",
    yieldStrength: "≥ 550 MPa",
    image: wireMeshSuperDuplexImg,
    accentColor: "#06B6D4"
  },
  {
    id: "titanium",
    slug: "titanium",
    aliases: ["titanium-alloys"],
    number: "06",
    name: "Titanium",
    shortName: "Titanium",
    tagline: "Commercial Purity & Aerospace Strength-to-Weight",
    description: "Commercially pure and alpha-beta titanium alloys delivering complete immunity to seawater and wet chlorine with an extraordinary 45% weight advantage over steel.",
    grades: ["Grade 1 (CP4)", "Grade 2 (CP3)", "Grade 5 (Ti-6Al-4V)", "Grade 7 (Ti-0.15Pd)", "Grade 9 (Ti-3Al-2.5V)", "Grade 12"],
    standards: ["ASTM B338", "ASTM B265", "ASTM B348", "ASTM B381", "ASTM B363", "ASME SB338"],
    applications: ["Chlor-Alkali Electrolyzers", "Plate Heat Exchangers", "Aerospace Structural Airframes", "Marine Propeller Shafts", "Medical & Surgical Implants"],
    density: "4.51 g/cm³",
    yieldStrength: "275 - 880 MPa",
    image: wireMeshTitaniumImg,
    accentColor: "#10B981"
  },
  {
    id: "alloys",
    slug: "alloys",
    aliases: ["exotic-alloys", "exotic-alloy"],
    number: "07",
    name: "Alloys",
    shortName: "Alloys",
    tagline: "Reactive & Severe Mineral Acid Reactor Metallurgy",
    description: "Reactive and rare specialty metals including Zirconium, Tantalum, Hastelloy B2, and Copper-Nickel engineered for boiling mineral acids and nuclear reprocessing.",
    grades: ["Zirconium 702 (R60702)", "Tantalum R05200", "Cupro Nickel 70/30 (C71500)", "Cupro Nickel 90/10 (C70600)", "Hastelloy B2 / B3"],
    standards: ["ASTM B523", "ASTM B551", "ASTM B550", "ASTM B466", "ASTM B365", "ASME SB523"],
    applications: ["Hydrochloric Acid Reboilers", "Nitric Acid Concentrators", "Nuclear Waste Vitrification", "Naval Seawater Condensers", "Pharmaceutical Reactors"],
    density: "6.51 - 16.65 g/cm³",
    yieldStrength: "205 - 380 MPa",
    image: wireMeshExoticImg,
    accentColor: "#EC4899"
  },
  {
    id: "carbon",
    slug: "carbon",
    aliases: ["carbon-steel"],
    number: "08",
    name: "Carbon",
    shortName: "Carbon",
    tagline: "High-Yield Pressure Vessel & Structural Carbon Steel",
    description: "High-integrity, fine-grain killed carbon steel and low-temperature carbon steel (LTCS) engineered for critical high-pressure steam, oil, and gas line service.",
    grades: ["ASTM A106 Gr B / C", "ASTM A105", "ASTM A333 Gr 6 (LTCS)", "ASTM A234 WPB / WPC", "ASTM A516 Gr 60 / 70", "IS 2062"],
    standards: ["ASTM A106", "ASTM A105", "ASTM A333", "ASTM A234", "ASTM A516", "ASME B16.5"],
    applications: ["Cross-Country Hydrocarbon Transmission", "High-Pressure Steam Pipelines", "Boiler Mud Drums & Shells", "Heavy Industrial Framing", "Cryogenic Storage"],
    density: "7.85 g/cm³",
    yieldStrength: "240 - 415 MPa",
    image: wireMeshCsImg,
    accentColor: "#F59E0B"
  },
  {
    id: "alloy-steel",
    slug: "alloy-steel",
    aliases: ["chrome-moly"],
    number: "09",
    name: "Alloy Steel",
    shortName: "Alloy Steel",
    tagline: "Cr-Mo Superheater & Power Boiler High-Temp Steel",
    description: "High-performance chromium-molybdenum heat-resistant alloy steel engineered to maintain high tensile strength and resist hydrogen attack at temperatures up to 650°C.",
    grades: ["ASTM A335 P5", "ASTM A335 P9", "ASTM A335 P11", "ASTM A335 P22", "ASTM A335 P91 (Cr-Mo-V)", "ASTM A182 F11 / F22 / F91"],
    standards: ["ASTM A335", "ASTM A182", "ASTM A234 WP11 / WP22 / WP91", "ASME SA335", "ASME SA182", "DIN 17175"],
    applications: ["Thermal & Nuclear Superheater Piping", "Reheater & Main Steam Headers", "Petrochemical Hydrocrackers", "Coking Units", "High-Temperature Heat Exchangers"],
    density: "7.85 g/cm³",
    yieldStrength: "205 - 415 MPa",
    image: wireMeshAsImg,
    accentColor: "#EF4444"
  }
];

// ----------------------------------------------------------------------
// 4. DETAILED PRODUCT DATABASE (Hierarchical Flow)
// ----------------------------------------------------------------------
export const PRODUCTS = [
  // ----------------------------------------------------------------------
  // SUPPLIER DIVISION — ALL 9 METALLURGICAL PRODUCT FAMILIES
  // ----------------------------------------------------------------------
  ...ALL_SUPPLIER_PRODUCTS,

  // ----------------------------------------------------------------------
  // FERRULE FITTINGS (MANUFACTURER DIVISION)
  // ----------------------------------------------------------------------
  {
    id: "fitting-ferrule-ss-compression",
    slug: "ferrule-ss-compression-tube-fitting",
    name: "Stainless Steel Double Ferrule Tube Fittings",
    division: "MANUFACTURER",
    category: "Ferrule Fittings",
    categorySlug: "ferrule-fittings",
    material: "STAINLESS STEEL",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "Double Ferrule Compression Fitting",
    heroImage: ferruleFittingsImg,
    gallery: [tcFittingsImg, dairySanitaryImg],
    shortDescription: "High-pressure double ferrule instrumentation compression tube fittings (up to 10,000 PSI) for leak-proof impulse lines and gas networks.",
    overview: "Supreme Metal & Alloys manufactures double ferrule compression tube fittings conforming to ASME B31.3. Featuring burnished tube bore entry, silver-plated nut threads to prevent galling, and 100% helium leak test compliance.",
    specifications: {
      standard: "ASME B31.3 / ASTM A276 / ASTM A479",
      tubeOD: "1/16\" to 2\" (2mm to 38mm Metric)",
      pressureRating: "Up to 10,000 PSI (689 Bar)",
      threadTypes: "NPT, BSPT, BSPP, SAE / ISO",
      endConfigurations: "Male/Female Connectors, Union Elbows, Equal Tees, Bulkheads"
    },
    standards: ["ASME B31.3", "ASTM A276", "ASTM A479", "NACE MR0175"],
    applications: ["Instrumentation & Control Lines", "Oil & Gas Offshore Platforms", "Chemical Process Sampling Lines", "High-Pressure Gas Distribution"]
  },

  // ----------------------------------------------------------------------
  // BUTT WELD FITTINGS - COMPLETE MATERIAL SUITE (MANUFACTURER DIVISION)
  // ----------------------------------------------------------------------
  
  // 1. STAINLESS STEEL BUTT WELD FITTINGS
  {
    id: "fitting-ss-316l-elbow",
    slug: "ss-316l-buttweld-elbow",
    name: "Stainless Steel 316L 90° Long Radius Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "90° Long Radius Elbow",
    heroImage: ssButtWeldImg,
    gallery: [buttWeldFitImg, buttWeldShowcaseImg],
    shortDescription: "ASME B16.9 seamless and welded 90-degree long radius butt weld elbows in stainless steel 316L for refinery and chemical piping.",
    overview: "Supreme Metal & Alloys manufactures ASME B16.9 hot formed and cold pressed SS 316L long radius elbows with uniform wall thickness and 37.5° bevelled welding ends.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A403 WP316 / WP316L (UNS S31603)",
      productType: "90° Long Radius Elbow",
      size: "1/2\" NB to 36\" NB",
      thickness: "Sch 5S, Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS",
      manufacturingType: "Seamless Hot Formed / Cold Pressed",
      finish: "Pickled & Passivated / Sand Blasted",
      form: "37.5° Bevelled Ends",
      designStandard: "ASME B16.9 / MSS SP-43"
    },
    standards: ["ASME B16.9", "ASTM A403 WP316L", "MSS SP-43", "EN 10253-4"],
    applications: ["Cross-Country Refineries", "Chemical Process Lines", "Offshore Sea-Water Piping"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-ss-304-tee", "fitting-ss-316l-reducer", "fitting-ss-316l-cap"]
  },
  {
    id: "fitting-ss-304-tee",
    slug: "ss-304-buttweld-tee",
    name: "Stainless Steel 304 / 304L Equal & Reducing Tee",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "304 / 304L",
    gradeSlug: "304",
    productType: "Equal Tee / Reducing Tee",
    heroImage: ssButtWeldImg,
    gallery: [buttWeldFitImg, buttWeldShowcaseImg],
    shortDescription: "Seamless and welded equal & reducing tees manufactured per ASME B16.9 for high-volume liquid and gas distribution headers.",
    overview: "Hydraulically bulged and hot-formed SS 304/304L tees with precision machined branch openings ensuring smooth internal fluid dynamics.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A403 WP304 / WP304L",
      productType: "Equal & Reducing Tee",
      size: "1/2\" NB to 36\" NB",
      thickness: "Sch 10S to Sch 160",
      manufacturingType: "Hydraulic Cold Formed / Hot Forged",
      finish: "Clean Pickled & Passivated",
      form: "3-Way Bevelled Branch Connection",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A403 WP304L", "DIN 2615"],
    applications: ["Water Treatment Networks", "Beverage Process Headers", "HVAC Industrial Cooling"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-ss-316l-elbow", "fitting-ss-316l-reducer", "fitting-ss-316l-cap"]
  },
  {
    id: "fitting-ss-316l-reducer",
    slug: "ss-316l-buttweld-reducer",
    name: "Stainless Steel 316L Concentric & Eccentric Reducer",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "Concentric / Eccentric Reducer",
    heroImage: ssButtWeldImg,
    gallery: [buttWeldFitImg],
    shortDescription: "ASME B16.9 smooth transition concentric and eccentric reducers for line size changes without cavitation.",
    overview: "Engineered to connect unequal diameter pipes; concentric reducers maintain centerline alignment while eccentric reducers prevent air pockets in horizontal suction lines.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A403 WP316L",
      productType: "Concentric & Eccentric Reducer",
      size: "3/4\" x 1/2\" NB to 36\" x 24\" NB",
      thickness: "Sch 10S to Sch 80S",
      manufacturingType: "Cold Formed / Hot Swaged",
      finish: "Solution Annealed & Pickled",
      form: "Conical / Offset Bevelled Fitting",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A403 WP316L", "MSS SP-43"],
    applications: ["Pump Suction / Discharge Lines", "Refinery Hydrocrackers", "Chemical Evaporators"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-ss-316l-elbow", "fitting-ss-304-tee", "fitting-ss-316l-cap"]
  },
  {
    id: "fitting-ss-321-stubend",
    slug: "ss-321-buttweld-stubend",
    name: "Stainless Steel 321 Lap Joint Stub End (Long & Short Pattern)",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "321 / 321H",
    gradeSlug: "321",
    productType: "Lap Joint Stub End",
    heroImage: ssButtWeldImg,
    gallery: [buttWeldFitImg],
    shortDescription: "Titanium-stabilized SS 321 lap joint stub ends for quick bolt alignment with backing lap joint flanges in high-temperature lines.",
    overview: "High-temperature SS 321 stub ends manufactured per ASME B16.9 and MSS SP-43, featuring smooth radius laps for rotating backing flanges.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A403 WP321 (UNS S32100)",
      productType: "Lap Joint Stub End (Type A / B)",
      size: "1/2\" NB to 24\" NB",
      thickness: "Sch 10S, Sch 40S, Sch 80S",
      manufacturingType: "Hot Flanged & Machined Lap",
      finish: "Annealed & Descaled",
      form: "Stub End with Machined Lap Radius",
      designStandard: "ASME B16.9 / MSS SP-43"
    },
    standards: ["ASME B16.9", "MSS SP-43", "ASTM A403 WP321"],
    applications: ["Thermal Power Plant Piping", "Exhaust Header Ducts", "Petrochemical Cracking Units"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-ss-316l-elbow", "fitting-ss-304-tee"]
  },
  {
    id: "fitting-ss-316l-cap",
    slug: "ss-316l-buttweld-cap",
    name: "Stainless Steel 316L Seamless Pipe End Cap",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "Pipe End Cap",
    heroImage: ssButtWeldImg,
    gallery: [buttWeldFitImg],
    shortDescription: "Dished ellipsoidal ASME B16.9 pipe end caps in SS 316L for sealing pipe terminals and pressure vessels.",
    overview: "Hot deep-drawn seamless caps designed with uniform dome wall thickness to withstand full line pressure at pipe dead-ends.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A403 WP316L",
      productType: "Seamless Ellipsoidal Cap",
      size: "1/2\" NB to 36\" NB",
      thickness: "Sch 5S to Sch XXS",
      manufacturingType: "Deep Drawn Seamless Plate",
      finish: "Passivated & Pickled",
      form: "Bevelled Dome Cap",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A403 WP316L"],
    applications: ["Pipeline Terminations", "Pressure Vessel Headers", "Chemical Injection Skids"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-ss-316l-elbow", "fitting-ss-316l-reducer"]
  },

  // 2. NICKEL ALLOYS BUTT WELD FITTINGS
  {
    id: "fitting-nickel-200-elbow",
    slug: "nickel-200-buttweld-elbow",
    name: "Nickel 200 (UNS N02200) 90° Long Radius Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Nickel 200",
    gradeSlug: "nickel-200",
    productType: "90° Long Radius Elbow",
    heroImage: nickelExoticButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Commercially pure Nickel 200 seamless butt weld elbows for caustic soda evaporators and severe alkaline chemical handling.",
    overview: "Precision hot formed Nickel 200 elbows offering total immunity to caustic alkalis up to molten temperatures.",
    specifications: {
      material: "Nickel Alloy",
      grade: "Nickel 200 (UNS N02200 / W.Nr. 2.4066)",
      productType: "90° Long Radius Elbow",
      size: "1/2\" NB to 16\" NB",
      thickness: "Sch 10S to Sch 80S",
      manufacturingType: "Cold Formed & Solution Annealed",
      finish: "Bright Annealed / Descaled",
      form: "Bevelled Elbow",
      designStandard: "ASME B16.9 / ASTM B366"
    },
    standards: ["ASME B16.9", "ASTM B366 WP200", "ASME SB366"],
    applications: ["Caustic Soda Evaporators", "Synthetic Fiber Processing", "Fluorine Handling"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-inconel-625-tee", "fitting-hastelloy-c276-reducer"]
  },
  {
    id: "fitting-inconel-625-tee",
    slug: "inconel-625-buttweld-tee",
    name: "Inconel 625 (UNS N06625) Equal Tee",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Inconel 625",
    gradeSlug: "inconel-625",
    productType: "Equal Tee",
    heroImage: nickelExoticButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "High-strength Inconel 625 nickel-chromium-molybdenum equal tees for extreme heat and sour offshore environments.",
    overview: "Resistant to pitting, crevice corrosion, and high-temperature oxidation up to 980°C (1800°F).",
    specifications: {
      material: "Nickel Superalloy",
      grade: "Inconel 625 (UNS N06625 / W.Nr. 2.4856)",
      productType: "Equal Tee",
      size: "1/2\" NB to 12\" NB",
      thickness: "Sch 10S to Sch 160",
      manufacturingType: "Seamless Press Formed",
      finish: "Solution Annealed",
      form: "Bevelled Branch Tee",
      designStandard: "ASME B16.9 / ASTM B366"
    },
    standards: ["ASME B16.9", "ASTM B366 WPNIC06625", "NACE MR0175"],
    applications: ["Subsea Sour Gas Risers", "Aerospace Exhaust Ducts", "Nuclear Waste Treatment"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-nickel-200-elbow", "fitting-hastelloy-c276-reducer"]
  },
  {
    id: "fitting-hastelloy-c276-reducer",
    slug: "hastelloy-c276-buttweld-reducer",
    name: "Hastelloy C276 (UNS N10276) Concentric Reducer",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Hastelloy C276",
    gradeSlug: "hastelloy-c276",
    productType: "Concentric Reducer",
    heroImage: nickelExoticButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Hastelloy C276 concentric reducers engineered for chemical reactors handling wet chlorine gas and ferric chloride.",
    overview: "Offers unparalleled chemical resistance to strong oxidizing salts, mineral acids, and hot contaminated media.",
    specifications: {
      material: "Nickel-Moly-Chromium Alloy",
      grade: "Hastelloy C276 (UNS N10276 / W.Nr. 2.4819)",
      productType: "Concentric Reducer",
      size: "1\" x 1/2\" NB to 12\" x 8\" NB",
      thickness: "Sch 10S to Sch 80S",
      manufacturingType: "Cold Swaged & Annealed",
      finish: "Pickled Finish",
      form: "Conical Bevelled Fitting",
      designStandard: "ASME B16.9 / ASTM B366"
    },
    standards: ["ASME B16.9", "ASTM B366 WPHC276"],
    applications: ["Flue Gas Desulfurization (FGD)", "Pulp & Paper Bleach Plant", "Sour Gas Scrubbers"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-nickel-200-elbow", "fitting-inconel-625-tee"]
  },

  // 3. HIGH ALLOYS BUTT WELD FITTINGS
  {
    id: "fitting-hastelloy-c22-elbow",
    slug: "hastelloy-c22-buttweld-elbow",
    name: "Hastelloy C22 (UNS N06022) 90° LR Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "HIGH ALLOYS",
    materialSlug: "high-alloys",
    grade: "Hastelloy C22",
    gradeSlug: "hastelloy-c22",
    productType: "90° Long Radius Elbow",
    heroImage: nickelExoticButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Superior resistance to pitting, crevice corrosion, and stress corrosion cracking in aggressive acidic media.",
    overview: "Hastelloy C22 fittings provide better overall corrosion resistance than C276 in oxidizing acid environments.",
    specifications: {
      material: "High Performance Nickel-Chromium Alloy",
      grade: "Hastelloy C22 (UNS N06022)",
      productType: "90° LR Elbow",
      size: "1/2\" NB to 12\" NB",
      thickness: "Sch 10S, Sch 40S, Sch 80S",
      manufacturingType: "Hot Formed Seamless",
      finish: "Annealed & Descaled",
      form: "Bevelled Elbow",
      designStandard: "ASME B16.9 / ASTM B366"
    },
    standards: ["ASME B16.9", "ASTM B366 WPHC22"],
    applications: ["Agrochemical Production", "Chlorination Systems", "Toxic Chemical Waste Incineration"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-hastelloy-c276-reducer", "fitting-inconel-625-tee"]
  },

  // 4. DUPLEX BUTT WELD FITTINGS
  {
    id: "fitting-duplex-2205-elbow",
    slug: "duplex-2205-buttweld-elbow",
    name: "Duplex 2205 (UNS S31803 / S32205) 90° LR Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    productType: "90° Long Radius Elbow",
    heroImage: duplexSuperDuplexButtWeldImg,
    gallery: [buttWeldFitImg, buttWeldShowcaseImg],
    shortDescription: "High-yield dual-phase Duplex 2205 elbows offering twice the strength of SS 316 with immunity to chloride stress cracking.",
    overview: "Forged and hydraulically pressed Duplex 2205 pipe fittings providing superior mechanical yield strength and chloride corrosion resistance.",
    specifications: {
      material: "Duplex Stainless Steel",
      grade: "UNS S31803 / UNS S32205 (2205)",
      productType: "90° LR Elbow",
      size: "1/2\" NB to 24\" NB",
      thickness: "Sch 10S, Sch 40S, Sch 80S, Sch 160",
      manufacturingType: "Seamless Press Formed",
      finish: "Solution Annealed & Pickled",
      form: "37.5° Bevelled End Fitting",
      designStandard: "ASME B16.9 / ASTM A815"
    },
    standards: ["ASME B16.9", "ASTM A815 WPS31803", "NACE MR0175"],
    applications: ["Offshore Platform Flowlines", "Reverse Osmosis Sea-Water Lines", "Chemical Tankers"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-duplex-2205-tee", "fitting-super-duplex-2507-elbow"]
  },
  {
    id: "fitting-duplex-2205-tee",
    slug: "duplex-2205-buttweld-tee",
    name: "Duplex 2205 (UNS S31803) Equal & Reducing Tee",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    productType: "Equal & Reducing Tee",
    heroImage: duplexSuperDuplexButtWeldImg,
    gallery: [buttWeldFitImg],
    shortDescription: "High pressure Duplex 2205 tees designed for subsea manifolds and sour gas production platforms.",
    overview: "Hydraulically extruded branches with uniform structural strength to sustain extreme pressure surges.",
    specifications: {
      material: "Duplex Stainless Steel",
      grade: "UNS S31803 / S32205",
      productType: "Equal & Reducing Tee",
      size: "1/2\" NB to 24\" NB",
      thickness: "Sch 10S to Sch 80S",
      manufacturingType: "Extruded Seamless Cold Formed",
      finish: "Annealed & Pickled",
      form: "Bevelled Branch Tee",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A815 WPS31803"],
    applications: ["Subsea Manifolds", "Sour Gas Separator Units", "Desalination High Pressure Piping"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-duplex-2205-elbow", "fitting-super-duplex-2507-elbow"]
  },

  // 5. SUPER DUPLEX BUTT WELD FITTINGS (STRICTLY SEPARATE FROM DUPLEX!)
  {
    id: "fitting-super-duplex-2507-elbow",
    slug: "super-duplex-2507-buttweld-elbow",
    name: "Super Duplex 2507 (UNS S32750) 90° LR Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    productType: "90° Long Radius Elbow",
    heroImage: duplexSuperDuplexButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Extreme performance PREN > 42 Super Duplex 2507 elbows for deep subsea risers, sour gas wells, and aggressive marine environments.",
    overview: "Super Duplex 2507 offers exceptional mechanical yield strength and resistance to pitting and crevice corrosion in high chloride sea water.",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (2507 / EN 1.4410)",
      productType: "90° LR Elbow",
      size: "1/2\" NB to 20\" NB",
      thickness: "Sch 10S to Sch 160",
      manufacturingType: "Hot Formed & Solution Annealed",
      finish: "Descaled & Pickled",
      form: "Bevelled Ends",
      designStandard: "ASME B16.9 / ASTM A815"
    },
    standards: ["ASME B16.9", "ASTM A815 WPS32750", "NACE MR0175 / ISO 15156"],
    applications: ["Deepwater Subsea Risers", "Chlor-Alkali Processing", "Desalination RO High Pressure Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-super-duplex-2507-tee", "fitting-duplex-2205-elbow"]
  },
  {
    id: "fitting-super-duplex-2507-tee",
    slug: "super-duplex-2507-buttweld-tee",
    name: "Super Duplex 2507 (UNS S32750) High-Yield Equal Tee",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    productType: "High-Yield Equal Tee",
    heroImage: duplexSuperDuplexButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Heavy wall Super Duplex 2507 equal tees built for extreme pressure offshore oil extraction manifolds.",
    overview: "Manufactured with controlled ferrite content (35-55%) ensuring optimum pitting corrosion resistance (PREN >= 42).",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (2507)",
      productType: "Equal & Reducing Tee",
      size: "1/2\" NB to 20\" NB",
      thickness: "Sch 10S to Sch 160",
      manufacturingType: "Hydraulic Extruded Cold Formed",
      finish: "Solution Annealed & Passivated",
      form: "Bevelled Branch Connection",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A815 WPS32750"],
    applications: ["Offshore HPHT Oil Wells", "Flue Gas Scrubbers", "Chemical Reactor Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-super-duplex-2507-elbow", "fitting-duplex-2205-elbow"]
  },

  // 6. TITANIUM BUTT WELD FITTINGS
  {
    id: "fitting-titanium-gr2-elbow",
    slug: "titanium-gr2-buttweld-elbow",
    name: "Titanium Grade 2 (UNS R50400) 90° LR Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Grade 2 (UNS R50400)",
    gradeSlug: "grade-2",
    productType: "90° Long Radius Elbow",
    heroImage: nickelExoticButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Ultra lightweight, high strength-to-weight ratio Titanium Grade 2 seamless elbows for chlor-alkali and marine defense.",
    overview: "Immune to sea-water corrosion, wet chlorine gas, and organic acids across temperatures up to 300°C.",
    specifications: {
      material: "Commercially Pure Titanium",
      grade: "Titanium Grade 2 (UNS R50400 / 3.7035)",
      productType: "90° LR Elbow",
      size: "1/2\" NB to 12\" NB",
      thickness: "Sch 10S, Sch 40S",
      manufacturingType: "Seamless Cold Formed Vacuum Annealed",
      finish: "Acid Pickled / Bright",
      form: "Bevelled Elbow",
      designStandard: "ASME B16.9 / ASTM B363"
    },
    standards: ["ASME B16.9", "ASTM B363 WPT2", "ASME SB363"],
    applications: ["Chlor-Alkali Anode Lines", "Aerospace & Submarine Piping", "Seawater Heat Exchangers"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-zirconium-702-elbow", "fitting-nickel-200-elbow"]
  },

  // 7. EXOTIC ALLOYS BUTT WELD FITTINGS
  {
    id: "fitting-zirconium-702-elbow",
    slug: "zirconium-702-buttweld-elbow",
    name: "Zirconium 702 (UNS R60702) Corrosion Resistant Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "EXOTIC ALLOYS",
    materialSlug: "exotic-alloys",
    grade: "Zirconium 702",
    gradeSlug: "zirconium-702",
    productType: "90° Long Radius Elbow",
    heroImage: nickelExoticButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Reactor-grade Zirconium 702 elbows offering total immunity to hydrochloric, sulfuric, and nitric mineral acids.",
    overview: "Designed for severe chemical process equipment where stainless steel and nickel alloys fail due to mineral acid corrosion.",
    specifications: {
      material: "Reactor Grade Zirconium",
      grade: "Zirconium 702 (UNS R60702)",
      productType: "90° LR Elbow",
      size: "1/2\" NB to 8\" NB",
      thickness: "Sch 10S, Sch 40S",
      manufacturingType: "Precision Vacuum Formed",
      finish: "Polished & Cleaned",
      form: "Bevelled Fitting",
      designStandard: "ASME B16.9 / ASTM B366"
    },
    standards: ["ASME B16.9", "ASTM B366 WPZr702"],
    applications: ["Hydrochloric Acid Reboilers", "Acetic Acid Units", "Nuclear Fuel Reprocessing"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-titanium-gr2-elbow", "fitting-hastelloy-c22-elbow"]
  },

  // 8. CARBON STEEL BUTT WELD FITTINGS
  {
    id: "fitting-cs-wpb-elbow",
    slug: "cs-wpb-buttweld-elbow",
    name: "Carbon Steel ASTM A234 WPB 90° LR Seamless Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A234 WPB",
    gradeSlug: "a234-wpb",
    productType: "90° LR Seamless Elbow",
    heroImage: carbonSteelButtWeldImg,
    gallery: [buttWeldFitImg],
    shortDescription: "High-pressure carbon steel ASTM A234 WPB seamless 90° LR elbows for steam lines, oil refineries, and gas pipelines.",
    overview: "Manufactured from ASTM A106 Grade B seamless pipes per ASME B16.9 with black rust-preventive varnish coating.",
    specifications: {
      material: "Wrought Carbon Steel",
      grade: "ASTM A234 Grade WPB",
      productType: "90° LR Seamless Elbow",
      size: "1/2\" NB to 36\" NB",
      thickness: "Sch 20, Sch 40 (STD), Sch 80 (XS), Sch 160, Sch XXS",
      manufacturingType: "Mandrel Hot Formed Seamless",
      finish: "Black Rust-Preventive Varnish / Shot Blasted",
      form: "37.5° Bevelled Welding Ends",
      designStandard: "ASME B16.9 / NACE MR0175"
    },
    standards: ["ASME B16.9", "ASTM A234 WPB", "MSS SP-75"],
    applications: ["Steam Power Piping", "Cross-Country Oil Pipelines", "Refinery Hydrocarbon Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-cs-wpb-tee", "fitting-as-wp11-elbow"]
  },
  {
    id: "fitting-cs-wpb-tee",
    slug: "cs-wpb-buttweld-tee",
    name: "Carbon Steel ASTM A234 WPB Equal & Reducing Tee",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A234 WPB",
    gradeSlug: "a234-wpb",
    productType: "Equal & Reducing Tee",
    heroImage: carbonSteelButtWeldImg,
    gallery: [buttWeldFitImg],
    shortDescription: "Heavy duty carbon steel equal and reducing tees for pressure vessel and boiler header branch lines.",
    overview: "Hot forged carbon steel tees with smooth internal radius minimizing pressure drop across branch connections.",
    specifications: {
      material: "Carbon Steel",
      grade: "ASTM A234 WPB",
      productType: "Equal & Reducing Tee",
      size: "1/2\" NB to 36\" NB",
      thickness: "Sch 40 (STD) to Sch XXS",
      manufacturingType: "Hot Extruded Seamless",
      finish: "Black Primer Oil Coated",
      form: "3-Way Bevelled End Connection",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A234 WPB"],
    applications: ["Boiler Feed Headers", "High Pressure Steam Distribution", "Natural Gas Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-cs-wpb-elbow", "fitting-ss-316l-elbow"]
  },

  // ----------------------------------------------------------------------
  // FORGED FITTINGS - COMPLETE MATERIAL SUITE (MANUFACTURER DIVISION)
  // ----------------------------------------------------------------------
  
  // 1. STAINLESS STEEL FORGED FITTINGS
  {
    id: "forged-ss-316l-elbow",
    slug: "ss-316l-forged-elbow",
    name: "Stainless Steel 316L 3000# Socketweld & Threaded 90° Elbow",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "3000# Forged Elbow",
    heroImage: forgedSsImg,
    gallery: [forgedCollageImg, forgedFittingPng],
    shortDescription: "High-pressure ASME B16.11 forged 90-degree elbows in SS 316L rated for 3000# and 6000# hydraulic and chemical lines.",
    overview: "Forged in-house at Supreme Metal & Alloys using drop hammers and precision CNC machining per ASME B16.11 and BS 3799 specifications.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F316 / F316L (UNS S31603)",
      productType: "3000# / 6000# Forged 90° Elbow",
      size: "1/8\" NB to 4\" NB (DN6 to DN100)",
      pressureClass: "Class 2000#, 3000#, 6000#, 9000#",
      connectionType: "Socket Weld (SW) / Threaded (NPT, BSPT)",
      manufacturingType: "Closed Die Forged & CNC Machined",
      finish: "Bright Machined / Passivated",
      designStandard: "ASME B16.11 / BS 3799 / MSS SP-83"
    },
    standards: ["ASME B16.11", "ASTM A182 F316L", "BS 3799", "MSS SP-79"],
    applications: ["High Pressure Hydraulic Headers", "Offshore Injection Manifolds", "Chemical Process Skids"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-ss-304l-tee", "forged-ss-316l-coupling", "forged-ss-316l-union"]
  },
  {
    id: "forged-ss-304l-tee",
    slug: "ss-304l-forged-tee",
    name: "Stainless Steel 304 / 304L 3000# Socketweld & Threaded Tee",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "304 / 304L",
    gradeSlug: "304",
    productType: "3000# Forged Tee",
    heroImage: forgedSsImg,
    gallery: [forgedCollageImg],
    shortDescription: "ASME B16.11 high-pressure forged equal and reducing tees in stainless steel 304/304L.",
    overview: "Heavy wall forged tees manufactured with smooth internal branch bores to sustain extreme fluid pressure and thermal shock.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F304 / F304L",
      productType: "3000# Equal & Reducing Tee",
      size: "1/8\" NB to 4\" NB",
      pressureClass: "Class 3000# / 6000#",
      connectionType: "Socketweld / NPT Screwed",
      manufacturingType: "Closed Die Forged",
      finish: "Pickled & Passivated",
      designStandard: "ASME B16.11"
    },
    standards: ["ASME B16.9", "ASME B16.11", "ASTM A182 F304L"],
    applications: ["Refinery Branch Lines", "High Pressure Gas Distribution", "Industrial Boilers"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-ss-316l-elbow", "forged-ss-316l-coupling"]
  },
  {
    id: "forged-ss-316l-coupling",
    slug: "ss-316l-forged-coupling",
    name: "Stainless Steel 316L 3000# Full & Half Coupling",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "Full / Half Coupling",
    heroImage: forgedSsImg,
    gallery: [forgedCollageImg],
    shortDescription: "Precision machined 3000# full couplings, half couplings, and reducing couplings in SS 316L.",
    overview: "Engineered to join two high-pressure pipes or vessel nozzles with zero leakage under vibration.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F316L",
      productType: "3000# Full / Half Coupling",
      size: "1/8\" NB to 4\" NB",
      pressureClass: "3000 LBS / 6000 LBS",
      connectionType: "Socketweld / NPT Female Threaded",
      manufacturingType: "Precision Machined Forged Bar",
      finish: "Bright Finished",
      designStandard: "ASME B16.11 / MSS SP-83"
    },
    standards: ["ASME B16.11", "MSS SP-83", "ASTM A182 F316L"],
    applications: ["Vessel Nozzle Connections", "Instrument Take-off Points", "Hydraulic Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-ss-316l-elbow", "forged-ss-316l-union"]
  },
  {
    id: "forged-ss-316l-union",
    slug: "ss-316l-forged-union",
    name: "Stainless Steel 316L 3000# Ground Joint Pipe Union",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "3000# Pipe Union",
    heroImage: forgedSsImg,
    gallery: [forgedCollageImg],
    shortDescription: "3-piece ground metal-to-metal seat forged pipe unions per MSS SP-83 for easy piping disassembly.",
    overview: "Forged SS 316L unions featuring precision spherical seats ensuring bubble-tight sealing without gaskets.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F316L",
      productType: "3000# Screwed / SW Pipe Union",
      size: "1/4\" NB to 3\" NB",
      pressureClass: "Class 3000#",
      connectionType: "Socketweld / NPT Female",
      seatType: "Stainless-to-Stainless Steel Ground Joint",
      designStandard: "MSS SP-83 / ASME B16.11"
    },
    standards: ["MSS SP-83", "ASME B16.11", "ASTM A182 F316L"],
    applications: ["Process Line Disassembly Points", "High Pressure Skids", "Refinery Samplers"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-ss-316l-elbow", "forged-ss-316l-coupling"]
  },

  // 2. CARBON STEEL FORGED FITTINGS
  {
    id: "forged-cs-a105-elbow",
    slug: "cs-a105-forged-elbow",
    name: "Carbon Steel ASTM A105 3000# Socketweld & Threaded Elbow",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A105 / A350 LF2",
    gradeSlug: "a105",
    productType: "3000# Forged Elbow",
    heroImage: forgedCsImg,
    gallery: [forgedCollageImg],
    shortDescription: "Heavy duty ASTM A105 carbon steel forged elbows rated for 3000# and 6000# steam and oil pipelines.",
    overview: "Manufactured from normalized ASTM A105 drop forgings with black rust-preventive oil coating.",
    specifications: {
      material: "Wrought Carbon Steel",
      grade: "ASTM A105 / A350 LF2 (Low Temp)",
      productType: "3000# / 6000# Forged 90° & 45° Elbow",
      size: "1/8\" NB to 4\" NB",
      pressureClass: "Class 3000# / 6000#",
      connectionType: "Socket Weld / NPT Threaded",
      finish: "Black Rust-Preventive Oil / Zinc Plated",
      designStandard: "ASME B16.11"
    },
    standards: ["ASME B16.11", "ASTM A105", "ASTM A350 LF2", "NACE MR0175"],
    applications: ["High Pressure Steam Piping", "Oilfield Headers", "Gas Compression Plants"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-cs-a105-nipple", "forged-ss-316l-elbow"]
  },
  {
    id: "forged-cs-a105-nipple",
    slug: "cs-a105-forged-nipple",
    name: "Carbon Steel ASTM A105 3000# Hex Nipple & Pipe Cap",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A105",
    gradeSlug: "a105",
    productType: "3000# Hex Nipple & Cap",
    heroImage: forgedCsImg,
    gallery: [forgedCollageImg],
    shortDescription: "Heavy hex nipples, swage nipples, and pipe caps manufactured per ASME B16.11 and MSS SP-95.",
    overview: "Forged carbon steel hex nipples with precision cut NPT threads for high-torque instrument connections.",
    specifications: {
      material: "Carbon Steel",
      grade: "ASTM A105",
      productType: "Hex Nipple / Swage Nipple / Pipe Cap",
      size: "1/4\" NB to 4\" NB",
      pressureClass: "3000 LBS / 6000 LBS",
      connectionType: "NPT Male / Socketweld",
      designStandard: "ASME B16.11 / MSS SP-95"
    },
    standards: ["ASME B16.11", "MSS SP-95", "ASTM A105"],
    applications: ["Instrument Gauge Manifolds", "Boiler Drain Lines", "Pipeline Vent Points"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-cs-a105-elbow", "forged-ss-316l-elbow"]
  },

  // 3. ALLOY STEEL FORGED FITTINGS
  {
    id: "forged-as-f11-elbow",
    slug: "as-f11-forged-elbow",
    name: "Alloy Steel ASTM A182 F11 / F22 / F91 3000# Forged Elbow & Cross",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A182 F11 / F22 / F91",
    gradeSlug: "a182-f11",
    productType: "3000# Forged Elbow & Cross",
    heroImage: forgedAsImg,
    gallery: [forgedCollageImg],
    shortDescription: "Chrome-moly alloy steel high-temperature forged fittings rated for superheater steam headers up to 600°C.",
    overview: "Normalized and tempered alloy steel forgings offering high creep-rupture strength under extreme heat.",
    specifications: {
      material: "Chromium-Molybdenum Alloy Steel",
      grade: "ASTM A182 Grade F11 / F22 / F91",
      productType: "3000# / 6000# Forged Elbow & Cross",
      size: "1/2\" NB to 4\" NB",
      pressureClass: "Class 3000# / 6000#",
      connectionType: "Socket Weld / NPT Screwed",
      finish: "Black Anti-Corrosion Varnish",
      designStandard: "ASME B16.11"
    },
    standards: ["ASME B16.11", "ASTM A182 F11/F22/F91"],
    applications: ["Power Plant Boiler Headers", "Refinery Thermal Crackers", "High Temp Steam Piping"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-cs-a105-elbow", "forged-ss-316l-elbow"]
  },

  // 4. NICKEL ALLOYS FORGED FITTINGS
  {
    id: "forged-nickel-200-elbow",
    slug: "nickel-200-forged-elbow",
    name: "Nickel 200 (UNS N02200) 3000# Forged Elbow & Equal Tee",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Nickel 200",
    gradeSlug: "nickel-200",
    productType: "3000# Forged Fitting",
    heroImage: forgedNickelImg,
    gallery: [forgedCollageImg],
    shortDescription: "Commercially pure Nickel 200 high-pressure forged fittings for caustic soda handling and chemical reactors.",
    overview: "Offers total resistance to caustic alkalis and halogen gases across high temperatures.",
    specifications: {
      material: "Nickel Alloy",
      grade: "Nickel 200 (UNS N02200 / W.Nr. 2.4066)",
      productType: "3000# Forged Elbow / Tee / Union",
      size: "1/2\" NB to 3\" NB",
      pressureClass: "Class 3000# / 6000#",
      connectionType: "Socketweld / Threaded NPT",
      designStandard: "ASME B16.11 / ASTM B564"
    },
    standards: ["ASME B16.11", "ASTM B564", "ASME SB564"],
    applications: ["Caustic Soda Evaporators", "Synthetic Fiber Lines", "Fluorine Systems"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-hastelloy-c276-coupling", "forged-ss-316l-elbow"]
  },
  {
    id: "forged-hastelloy-c276-coupling",
    slug: "hastelloy-c276-forged-coupling",
    name: "Hastelloy C276 (UNS N10276) 3000# Forged Coupling & Union",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Hastelloy C276",
    gradeSlug: "hastelloy-c276",
    productType: "3000# Forged Coupling & Union",
    heroImage: forgedNickelImg,
    gallery: [forgedCollageImg],
    shortDescription: "Hastelloy C276 forged couplings engineered for harsh chemical processing handling wet chlorine gas.",
    overview: "Extreme pitting and crevice corrosion resistance in strong mineral acids and hot contaminated solutions.",
    specifications: {
      material: "Nickel-Moly-Chromium Superalloy",
      grade: "Hastelloy C276 (UNS N10276)",
      productType: "3000# Coupling / Union / Nipple",
      size: "1/2\" NB to 3\" NB",
      pressureClass: "Class 3000#",
      connectionType: "Socketweld / Screwed",
      designStandard: "ASME B16.11 / ASTM B564"
    },
    standards: ["ASME B16.11", "ASTM B564 WPHC276"],
    applications: ["FGD Scrubbers", "Bleach Plant Piping", "Chlorination Skids"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-nickel-200-elbow", "forged-hastelloy-c22-cross"]
  },

  // 5. HIGH ALLOYS FORGED FITTINGS
  {
    id: "forged-hastelloy-c22-cross",
    slug: "hastelloy-c22-forged-cross",
    name: "Hastelloy C22 (UNS N06022) 3000# Forged Cross & Elbow",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "HIGH ALLOYS",
    materialSlug: "high-alloys",
    grade: "Hastelloy C22",
    gradeSlug: "hastelloy-c22",
    productType: "3000# Forged Cross",
    heroImage: forgedHighAlloyImg,
    gallery: [forgedCollageImg],
    shortDescription: "Hastelloy C22 forged fittings providing maximum corrosion resistance in oxidizing acid media.",
    overview: "Resists pitting, crevice corrosion, and stress corrosion cracking in severe chemical synthesis.",
    specifications: {
      material: "High Performance Nickel Alloy",
      grade: "Hastelloy C22 (UNS N06022)",
      productType: "3000# Forged Cross / Elbow / Tee",
      size: "1/2\" NB to 3\" NB",
      pressureClass: "Class 3000# / 6000#",
      connectionType: "Socketweld / Threaded",
      designStandard: "ASME B16.11 / ASTM B564"
    },
    standards: ["ASME B16.11", "ASTM B564"],
    applications: ["Agrochemical Synthesis", "Toxic Waste Incineration", "Acid Pickling Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-hastelloy-c276-coupling", "forged-nickel-200-elbow"]
  },

  // 6. DUPLEX FORGED FITTINGS
  {
    id: "forged-duplex-2205-elbow",
    slug: "duplex-2205-forged-elbow",
    name: "Duplex 2205 (UNS S31803 / S32205) 3000# Forged Elbow & Cross",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    productType: "3000# Forged Elbow",
    heroImage: forgedDuplexImg,
    gallery: [forgedCollageImg],
    shortDescription: "Duplex 2205 high-yield forged fittings offering twice the strength of SS 316 with superior chloride resistance.",
    overview: "Forged and CNC machined Duplex 2205 fittings engineered for offshore oilfield headers and sour gas manifolds.",
    specifications: {
      material: "Duplex Stainless Steel",
      grade: "UNS S31803 / UNS S32205 (F51 / F60)",
      productType: "3000# / 6000# Forged Elbow & Cross",
      size: "1/2\" NB to 3\" NB",
      pressureClass: "Class 3000# / 6000#",
      connectionType: "Socket Weld / NPT Threaded",
      designStandard: "ASME B16.11 / ASTM A182 F51"
    },
    standards: ["ASME B16.11", "ASTM A182 F51/F60", "NACE MR0175"],
    applications: ["Offshore HP Piping", "Desalination High Pressure Lines", "Subsea Manifolds"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-duplex-2205-union", "forged-super-duplex-2507-elbow"]
  },
  {
    id: "forged-duplex-2205-union",
    slug: "duplex-2205-forged-union",
    name: "Duplex 2205 3000# Forged Pipe Union & Cap",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    productType: "3000# Pipe Union & Cap",
    heroImage: forgedDuplexImg,
    gallery: [forgedCollageImg],
    shortDescription: "High pressure Duplex 2205 forged pipe unions per MSS SP-83 for marine sea-water lines.",
    overview: "Features precision ground seating surfaces providing leak-proof joints under intense vibration.",
    specifications: {
      material: "Duplex Stainless Steel",
      grade: "UNS S31803 / S32205",
      productType: "3000# Union & End Cap",
      size: "1/2\" NB to 3\" NB",
      pressureClass: "Class 3000#",
      connectionType: "Socketweld / Screwed NPT",
      designStandard: "MSS SP-83 / ASME B16.11"
    },
    standards: ["MSS SP-83", "ASME B16.11", "ASTM A182 F51"],
    applications: ["Subsea Tie-ins", "Desalination RO Skids", "Chemical Tankers"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-duplex-2205-elbow", "forged-super-duplex-2507-elbow"]
  },

  // 7. SUPER DUPLEX FORGED FITTINGS (STRICTLY SEPARATE FROM DUPLEX!)
  {
    id: "forged-super-duplex-2507-elbow",
    slug: "super-duplex-2507-forged-elbow",
    name: "Super Duplex 2507 (UNS S32750) 6000# High-Pressure Forged Elbow",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    productType: "6000# High-Pressure Forged Elbow",
    heroImage: forgedSuperDuplexImg,
    gallery: [forgedCollageImg],
    shortDescription: "PREN > 42 Super Duplex 2507 forged elbows built for extreme subsea depths and sour gas extraction risers.",
    overview: "Offers supreme pitting and crevice corrosion resistance in high halide marine media with yield strength twice that of standard stainless steel.",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (F53 / EN 1.4410)",
      productType: "6000# / 9000# Forged Elbow",
      size: "1/2\" NB to 2\" NB",
      pressureClass: "Class 6000# / 9000#",
      connectionType: "Socket Weld / NPT Screwed",
      designStandard: "ASME B16.11 / ASTM A182 F53"
    },
    standards: ["ASME B16.11", "ASTM A182 F53", "NACE MR0175 / ISO 15156"],
    applications: ["Deepwater Subsea Risers", "HPHT Sour Gas Extraction", "RO Desalination Plants"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-super-duplex-2507-cross", "forged-duplex-2205-elbow"]
  },
  {
    id: "forged-super-duplex-2507-cross",
    slug: "super-duplex-2507-forged-cross",
    name: "Super Duplex 2507 6000# Forged Cross & Union",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    productType: "6000# Forged Cross & Union",
    heroImage: forgedSuperDuplexImg,
    gallery: [forgedCollageImg],
    shortDescription: "Ultra heavy wall Super Duplex 2507 forged cross fittings rated for 6000# subsea manifold manifolds.",
    overview: "100% PMI chemical verified and ultrasonic tested ensuring defect-free grain structure for extreme pressure duty.",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (2507)",
      productType: "6000# Forged Cross / Union / Coupling",
      size: "1/2\" NB to 2\" NB",
      pressureClass: "Class 6000#",
      connectionType: "Socketweld / NPT Female",
      designStandard: "ASME B16.11"
    },
    standards: ["ASME B16.11", "ASTM A182 F53"],
    applications: ["Subsea Wellhead Christmas Trees", "Flue Gas Scrubbers", "Chemical Injection Skids"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-super-duplex-2507-elbow", "forged-duplex-2205-elbow"]
  },

  // 8. TITANIUM FORGED FITTINGS
  {
    id: "forged-titanium-gr2-elbow",
    slug: "titanium-gr2-forged-elbow",
    name: "Titanium Grade 2 (UNS R50400) 3000# Forged Elbow & Cross",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Grade 2 (UNS R50400)",
    gradeSlug: "grade-2",
    productType: "3000# Forged Elbow",
    heroImage: forgedTitaniumImg,
    gallery: [forgedCollageImg],
    shortDescription: "Ultra lightweight Titanium Grade 2 forged fittings for chlor-alkali reactors and aerospace fuel lines.",
    overview: "Immune to seawater corrosion, wet chlorine gas, and mineral acids up to 300°C.",
    specifications: {
      material: "Commercially Pure Titanium",
      grade: "Titanium Grade 2 (UNS R50400)",
      productType: "3000# Forged Elbow / Cross / Nipple",
      size: "1/2\" NB to 2\" NB",
      pressureClass: "Class 3000#",
      connectionType: "Socketweld / Screwed NPT",
      designStandard: "ASME B16.11 / ASTM B381"
    },
    standards: ["ASME B16.11", "ASTM B381 F2", "ASME SB381"],
    applications: ["Chlor-Alkali Piping", "Aerospace Systems", "Seawater Desalination"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-zirconium-702-elbow", "forged-ss-316l-elbow"]
  },

  // 9. EXOTIC ALLOYS FORGED FITTINGS
  {
    id: "forged-zirconium-702-elbow",
    slug: "zirconium-702-forged-elbow",
    name: "Zirconium 702 (UNS R60702) 3000# Forged Fitting",
    division: "MANUFACTURER",
    category: "Forged Fittings",
    categorySlug: "forged-fittings",
    material: "EXOTIC ALLOYS",
    materialSlug: "exotic-alloys",
    grade: "Zirconium 702",
    gradeSlug: "zirconium-702",
    productType: "3000# Forged Fitting",
    heroImage: forgedExoticImg,
    gallery: [forgedCollageImg],
    shortDescription: "Nuclear reactor grade Zirconium 702 forged fittings offering complete immunity to hydrochloric and nitric acids.",
    overview: "Engineered for harsh mineral acid reboilers where standard stainless steel and nickel alloys suffer severe corrosion.",
    specifications: {
      material: "Reactor Grade Zirconium",
      grade: "Zirconium 702 (UNS R60702)",
      productType: "3000# Forged Elbow / Tee / Union",
      size: "1/2\" NB to 2\" NB",
      pressureClass: "Class 3000#",
      connectionType: "Socketweld / Threaded NPT",
      designStandard: "ASME B16.11 / ASTM B564"
    },
    standards: ["ASME B16.11", "ASTM B564"],
    applications: ["Hydrochloric Acid Units", "Acetic Acid Recovery", "Nuclear Fuel Reprocessing"],
    isResearchedDraft: false,
    relatedProductIds: ["forged-titanium-gr2-elbow", "forged-hastelloy-c22-cross"]
  },

  // ----------------------------------------------------------------------
  // FLANGES - COMPLETE MATERIAL SUITE (MANUFACTURER DIVISION)
  // ----------------------------------------------------------------------
  
  // 1. STAINLESS STEEL FLANGES
  {
    id: "flange-ss-316l-weldneck",
    slug: "ss-316l-weldneck-flange",
    name: "Stainless Steel 316L Class 150# to 2500# Weld Neck Flange (WN RF / RTJ)",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "Weld Neck Flange (WN)",
    heroImage: flangeSsImg,
    gallery: [flangesCollageImg, forgedFlangesImg],
    shortDescription: "ASME B16.5 Class 150 to 2500 forged SS 316L Weld Neck flanges with raised face (RF) or ring type joint (RTJ).",
    overview: "Forged in-house at Supreme Metal & Alloys using closed die drop hammers and CNC lathes. Supplied with 100% PMI and EN 10204 3.1 certification.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F316 / F316L (UNS S31603)",
      productType: "Weld Neck Flange (WN)",
      size: "1/2\" NB to 48\" NB",
      pressureClass: "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
      facingType: "Serrated RF (125-250 AARH) / Smooth RTJ",
      manufacturingType: "Closed Die Forged & CNC Machined",
      finish: "Bright Machined & Passivated",
      designStandard: "ASME B16.5 / ASME B16.47 Series A & B"
    },
    standards: ["ASME B16.5", "ASME B16.47", "ASTM A182 F316L", "EN 1092-1"],
    applications: ["High Pressure Refinery Headers", "Subsea Oil Pipelines", "Steam Power Plants"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-ss-304l-slipon", "flange-ss-316l-blind", "fitting-ss-316l-elbow"]
  },
  {
    id: "flange-ss-304l-slipon",
    slug: "ss-304l-slipon-flange",
    name: "Stainless Steel 304 / 304L 150# to 600# Slip-On Flange (SO RF)",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "304 / 304L",
    gradeSlug: "304",
    productType: "Slip-On Flange (SO)",
    heroImage: flangeSsImg,
    gallery: [flangesCollageImg],
    shortDescription: "ASME B16.5 forged SS 304/304L slip-on flanges for low-pressure cooling water and process piping.",
    overview: "Easy alignment and welding; slips over pipe end prior to fillet welding inside and outside.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F304 / F304L",
      productType: "Slip-On Flange (SO)",
      size: "1/2\" NB to 36\" NB",
      pressureClass: "Class 150#, 300#, 600#",
      facingType: "Raised Face (RF) Serrated",
      manufacturingType: "Forged Bar & CNC Machined",
      finish: "Clean Machined",
      designStandard: "ASME B16.5"
    },
    standards: ["ASME B16.5", "ASTM A182 F304L", "DIN 2576"],
    applications: ["Water Treatment Lines", "HVAC Chilled Water", "Industrial Storage Tank Headers"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-ss-316l-weldneck", "flange-ss-316l-blind"]
  },
  {
    id: "flange-ss-316l-blind",
    slug: "ss-316l-blind-flange",
    name: "Stainless Steel 316L Class 150# to 2500# Blind Flange (BL RF / RTJ)",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "316 / 316L",
    gradeSlug: "316l",
    productType: "Blind Flange (BL)",
    heroImage: flangeSsImg,
    gallery: [flangesCollageImg],
    shortDescription: "ASME B16.5 heavy forged SS 316L blind flanges for sealing pressure vessel nozzles and pipe ends.",
    overview: "Heavy section forged disks engineered to sustain maximum line pressure and temperature without deflection.",
    specifications: {
      material: "Stainless Steel",
      grade: "ASTM A182 F316L",
      productType: "Blind Flange (BL)",
      size: "1/2\" NB to 48\" NB",
      pressureClass: "Class 150# to 2500#",
      facingType: "Raised Face (RF) / Ring Type Joint (RTJ)",
      manufacturingType: "Drop Forged Plate",
      finish: "Passivated Finish",
      designStandard: "ASME B16.5 / ASME B16.47"
    },
    standards: ["ASME B16.5", "ASTM A182 F316L"],
    applications: ["Pressure Vessel Inspection Covers", "Pipeline Dead-Ends", "Refinery Hydrotreaters"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-ss-316l-weldneck", "flange-ss-304l-slipon"]
  },

  // 2. CARBON STEEL FLANGES
  {
    id: "flange-cs-a105-weldneck",
    slug: "cs-a105-weldneck-flange",
    name: "Carbon Steel ASTM A105 Class 150# to 600# Weld Neck & Blind Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A105 / A350 LF2",
    gradeSlug: "a105",
    productType: "Forged Carbon Steel Flange",
    heroImage: flangeCsImg,
    gallery: [flangesCollageImg],
    shortDescription: "Normalized ASTM A105 drop forged carbon steel weld neck and blind flanges for steam and oil pipelines.",
    overview: "Manufactured per ASME B16.5 with black anti-corrosion varnish coating or yellow rust-preventive oil.",
    specifications: {
      material: "Wrought Carbon Steel",
      grade: "ASTM A105 / A350 LF2 (Low Temp)",
      productType: "Weld Neck / Blind / Slip-On Flange",
      size: "1/2\" NB to 48\" NB",
      pressureClass: "Class 150#, 300#, 600#, 900#",
      facingType: "Raised Face (RF) Serrated",
      finish: "Black Anti-Corrosion Paint",
      designStandard: "ASME B16.5 / MSS SP-44"
    },
    standards: ["ASME B16.5", "ASTM A105", "ASTM A350 LF2", "NACE MR0175"],
    applications: ["Steam Boiler Headers", "Cross-Country Gas Lines", "Refinery Crude Units"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-ss-316l-weldneck", "forged-cs-a105-elbow"]
  },

  // 3. ALLOY STEEL FLANGES
  {
    id: "flange-as-f11-weldneck",
    slug: "as-f11-weldneck-flange",
    name: "Alloy Steel ASTM A182 F11 / F22 / F91 High-Temp Weld Neck Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A182 F11 / F22 / F91",
    gradeSlug: "a182-f11",
    productType: "High-Temp Power Plant Flange",
    heroImage: flangeAsImg,
    gallery: [flangesCollageImg],
    shortDescription: "Chromium-moly alloy steel forged flanges engineered for high-pressure superheater steam lines up to 600°C.",
    overview: "Normalized and tempered alloy steel forgings offering exceptional resistance to thermal creep.",
    specifications: {
      material: "Chromium-Molybdenum Alloy Steel",
      grade: "ASTM A182 Grade F11 / F22 / F91",
      productType: "Weld Neck / Blind Flange",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 300#, 600#, 1500#, 2500#",
      facingType: "RTJ / RF",
      finish: "Black Varnish Coated",
      designStandard: "ASME B16.5"
    },
    standards: ["ASME B16.5", "ASTM A182 F11/F22/F91"],
    applications: ["Superheater Steam Pipelines", "Thermal Power Stations", "Petrochemical Heaters"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-cs-a105-weldneck", "flange-ss-316l-weldneck"]
  },

  // 4. NICKEL ALLOYS FLANGES
  {
    id: "flange-nickel-200-weldneck",
    slug: "nickel-200-weldneck-flange",
    name: "Nickel 200 (UNS N02200) Class 150# to 600# Weld Neck & Blind Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Nickel 200",
    gradeSlug: "nickel-200",
    productType: "Nickel Alloy Forged Flange",
    heroImage: flangeNickelImg,
    gallery: [flangesCollageImg],
    shortDescription: "Commercially pure Nickel 200 forged flanges for caustic soda processing evaporators and halogen reactors.",
    overview: "Immune to caustic alkalis and anhydrous halogens across high temperatures.",
    specifications: {
      material: "Nickel Alloy",
      grade: "Nickel 200 (UNS N02200 / W.Nr. 2.4066)",
      productType: "Weld Neck / Slip-On / Blind Flange",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 150#, 300#, 600#",
      facingType: "Raised Face (RF)",
      designStandard: "ASME B16.5 / ASTM B564"
    },
    standards: ["ASME B16.5", "ASTM B564", "ASME SB564"],
    applications: ["Caustic Soda Evaporators", "Synthetic Fiber Lines", "Fluorine Handling"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-hastelloy-c276-blind", "flange-ss-316l-weldneck"]
  },
  {
    id: "flange-hastelloy-c276-blind",
    slug: "hastelloy-c276-blind-flange",
    name: "Hastelloy C276 (UNS N10276) Class 150# to 600# Blind Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Hastelloy C276",
    gradeSlug: "hastelloy-c276",
    productType: "Chemical Reactor Blind Flange",
    heroImage: flangeNickelImg,
    gallery: [flangesCollageImg],
    shortDescription: "Hastelloy C276 heavy forged blind flanges for chemical process vessels handling wet chlorine gas.",
    overview: "Unrivalled pitting and crevice corrosion resistance in strong mineral acids and hot organic chemicals.",
    specifications: {
      material: "Nickel-Moly-Chromium Superalloy",
      grade: "Hastelloy C276 (UNS N10276)",
      productType: "Blind Flange / Weld Neck",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 150#, 300#, 600#",
      facingType: "Serrated RF",
      designStandard: "ASME B16.5 / ASTM B564"
    },
    standards: ["ASME B16.5", "ASTM B564 WPHC276"],
    applications: ["FGD Scrubbers", "Pulp & Paper Bleaching", "Chemical Reactors"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-nickel-200-weldneck", "flange-hastelloy-c22-weldneck"]
  },

  // 5. HIGH ALLOYS FLANGES
  {
    id: "flange-hastelloy-c22-weldneck",
    slug: "hastelloy-c22-weldneck-flange",
    name: "Hastelloy C22 (UNS N06022) Class 150# to 600# Weld Neck Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "HIGH ALLOYS",
    materialSlug: "high-alloys",
    grade: "Hastelloy C22",
    gradeSlug: "hastelloy-c22",
    productType: "High Performance Alloy Flange",
    heroImage: flangeHighAlloyImg,
    gallery: [flangesCollageImg],
    shortDescription: "Hastelloy C22 forged flanges providing maximum corrosion protection in aggressive oxidizing acid media.",
    overview: "Superior pitting and crevice corrosion resistance compared to C276 in oxidizing acid environments.",
    specifications: {
      material: "High Performance Nickel-Chromium Alloy",
      grade: "Hastelloy C22 (UNS N06022)",
      productType: "Weld Neck / Blind Flange",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 150#, 300#, 600#",
      facingType: "Raised Face (RF)",
      designStandard: "ASME B16.5 / ASTM B564"
    },
    standards: ["ASME B16.5", "ASTM B564"],
    applications: ["Agrochemical Processing", "Toxic Waste Destruction", "Acid Pickling Header Lines"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-hastelloy-c276-blind", "flange-nickel-200-weldneck"]
  },

  // 6. DUPLEX FLANGES
  {
    id: "flange-duplex-2205-weldneck",
    slug: "duplex-2205-weldneck-flange",
    name: "Duplex 2205 (UNS S31803 / S32205) Class 150# to 900# Weld Neck Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    productType: "Duplex Forged Flange",
    heroImage: flangeDuplexImg,
    gallery: [flangesCollageImg],
    shortDescription: "High-yield strength Duplex 2205 forged flanges offering twice the yield strength of SS 316 for sour gas lines.",
    overview: "Drop forged and CNC machined Duplex 2205 flanges engineered for subsea manifolds and seawater lines.",
    specifications: {
      material: "Duplex Stainless Steel",
      grade: "UNS S31803 / UNS S32205 (F51 / F60)",
      productType: "Weld Neck / Blind / Slip-On Flange",
      size: "1/2\" NB to 36\" NB",
      pressureClass: "Class 150#, 300#, 600#, 900#",
      facingType: "RF / RTJ",
      designStandard: "ASME B16.5 / ASTM A182 F51"
    },
    standards: ["ASME B16.5", "ASTM A182 F51/F60", "NACE MR0175"],
    applications: ["Offshore Platform Risers", "Desalination RO Skids", "Chemical Tankers"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-super-duplex-2507-weldneck", "flange-ss-316l-weldneck"]
  },
  {
    id: "flange-duplex-2205-blind",
    slug: "duplex-2205-blind-flange",
    name: "Duplex 2205 Class 150# to 900# Blind & Slip-On Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "UNS S31803 (2205)",
    gradeSlug: "duplex-2205",
    productType: "Duplex Blind Flange",
    heroImage: flangeDuplexImg,
    gallery: [flangesCollageImg],
    shortDescription: "Duplex 2205 blind flanges for seawater line blanking and offshore vessel nozzle closure.",
    overview: "Resists chloride stress corrosion cracking with high yield strength under subsea pressure.",
    specifications: {
      material: "Duplex Stainless Steel",
      grade: "UNS S31803 / S32205",
      productType: "Blind & Slip-On Flange",
      size: "1/2\" NB to 36\" NB",
      pressureClass: "Class 150# to 900#",
      facingType: "RF / RTJ",
      designStandard: "ASME B16.5"
    },
    standards: ["ASME B16.5", "ASTM A182 F51"],
    applications: ["Subsea Manifolds", "RO Desalination Headers", "Chemical Cargo Tanks"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-duplex-2205-weldneck", "flange-super-duplex-2507-weldneck"]
  },

  // 7. SUPER DUPLEX FLANGES (STRICTLY SEPARATE FROM DUPLEX!)
  {
    id: "flange-super-duplex-2507-weldneck",
    slug: "super-duplex-2507-weldneck-flange",
    name: "Super Duplex 2507 (UNS S32750) Class 600# to 2500# RTJ Subsea Weld Neck Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    productType: "Super Duplex Subsea Flange",
    heroImage: flangeSuperDuplexImg,
    gallery: [flangesCollageImg],
    shortDescription: "PREN > 42 Super Duplex 2507 forged RTJ weld neck flanges built for extreme deepwater oilfield manifolds.",
    overview: "Super Duplex 2507 offers supreme pitting and crevice corrosion resistance in high chloride subsea environments.",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (F53 / EN 1.4410)",
      productType: "Subsea Weld Neck Flange (RTJ)",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 600#, 900#, 1500#, 2500#",
      facingType: "Ring Type Joint (RTJ) / Smooth RF",
      designStandard: "ASME B16.5 / ASTM A182 F53"
    },
    standards: ["ASME B16.5", "ASTM A182 F53", "NACE MR0175 / ISO 15156"],
    applications: ["Deepwater Subsea Risers", "HPHT Sour Gas Extraction", "RO Desalination High Pressure Headers"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-super-duplex-2507-blind", "flange-duplex-2205-weldneck"]
  },
  {
    id: "flange-super-duplex-2507-blind",
    slug: "super-duplex-2507-blind-flange",
    name: "Super Duplex 2507 Class 600# to 2500# Spectacle & Line Blind Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "UNS S32750 (2507)",
    gradeSlug: "super-duplex-2507",
    productType: "Super Duplex Spectacle Blind",
    heroImage: flangeSuperDuplexImg,
    gallery: [flangesCollageImg],
    shortDescription: "Ultra heavy section Super Duplex 2507 spectacle blinds for positive offshore pipeline isolation.",
    overview: "Drop forged and CNC machined for zero leak rate under high pressure subsea conditions.",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (2507)",
      productType: "Spectacle Blind / Line Blind / Spade",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 600# to 2500#",
      facingType: "RTJ / RF",
      designStandard: "ASME B16.48 / ASME B16.5"
    },
    standards: ["ASME B16.48", "ASME B16.5", "ASTM A182 F53"],
    applications: ["Subsea Manifold Isolation", "Flue Gas Scrubbers", "Chemical Injection Skids"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-super-duplex-2507-weldneck", "flange-duplex-2205-weldneck"]
  },

  // 8. TITANIUM FLANGES
  {
    id: "flange-titanium-gr2-weldneck",
    slug: "titanium-gr2-weldneck-flange",
    name: "Titanium Grade 2 (UNS R50400) Class 150# Weld Neck & Blind Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Grade 2 (UNS R50400)",
    gradeSlug: "grade-2",
    productType: "Titanium Forged Flange",
    heroImage: flangeTitaniumImg,
    gallery: [flangesCollageImg],
    shortDescription: "Ultra lightweight Titanium Grade 2 forged flanges for chlor-alkali reactors and marine defense.",
    overview: "Immune to seawater corrosion, wet chlorine gas, and organic acids across temperatures up to 300°C.",
    specifications: {
      material: "Commercially Pure Titanium",
      grade: "Titanium Grade 2 (UNS R50400)",
      productType: "Weld Neck / Blind / Slip-On Flange",
      size: "1/2\" NB to 24\" NB",
      pressureClass: "Class 150#, 300#",
      facingType: "Raised Face (RF)",
      designStandard: "ASME B16.5 / ASTM B381"
    },
    standards: ["ASME B16.5", "ASTM B381 F2", "ASME SB381"],
    applications: ["Chlor-Alkali Piping", "Aerospace Systems", "Seawater Desalination"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-zirconium-702-weldneck", "flange-ss-316l-weldneck"]
  },

  // 9. EXOTIC ALLOYS FLANGES
  {
    id: "flange-zirconium-702-weldneck",
    slug: "zirconium-702-weldneck-flange",
    name: "Zirconium 702 (UNS R60702) Class 150# Exotic Metal Reactor Flange",
    division: "MANUFACTURER",
    category: "Flanges",
    categorySlug: "flanges",
    material: "EXOTIC ALLOYS",
    materialSlug: "exotic-alloys",
    grade: "Zirconium 702",
    gradeSlug: "zirconium-702",
    productType: "Exotic Metal Reactor Flange",
    heroImage: flangeExoticImg,
    gallery: [flangesCollageImg],
    shortDescription: "Nuclear reactor grade Zirconium 702 forged flanges offering complete immunity to hydrochloric and nitric acids.",
    overview: "Engineered for harsh mineral acid reboilers where standard stainless steel and nickel alloys suffer severe corrosion.",
    specifications: {
      material: "Reactor Grade Zirconium",
      grade: "Zirconium 702 (UNS R60702)",
      productType: "Weld Neck / Blind Flange",
      size: "1/2\" NB to 12\" NB",
      pressureClass: "Class 150#, 300#",
      facingType: "Raised Face (RF)",
      designStandard: "ASME B16.5 / ASTM B564"
    },
    standards: ["ASME B16.5", "ASTM B564"],
    applications: ["Hydrochloric Acid Units", "Acetic Acid Recovery", "Nuclear Fuel Reprocessing"],
    isResearchedDraft: false,
    relatedProductIds: ["flange-titanium-gr2-weldneck", "flange-hastelloy-c22-weldneck"]
  },

  // 9. ALLOY STEEL BUTT WELD FITTINGS
  {
    id: "fitting-as-wp11-elbow",
    slug: "as-wp11-buttweld-elbow",
    name: "Alloy Steel ASTM A234 WP11 / WP22 90° LR Power Plant Elbow",
    division: "MANUFACTURER",
    category: "Butt Weld Fittings",
    categorySlug: "buttweld-fittings",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A234 WP11 / WP22 / WP91",
    gradeSlug: "a234-wp11",
    productType: "90° LR Power Plant Elbow",
    heroImage: alloySteelButtWeldImg,
    gallery: [buttWeldShowcaseImg],
    shortDescription: "Chromium-moly alloy steel ASTM A234 WP11/WP22/WP91 elbows for high-temperature superheater steam lines up to 600°C.",
    overview: "Normalized and tempered alloy steel fittings engineered to resist creep deformation under severe thermal stress.",
    specifications: {
      material: "Chromium-Molybdenum Alloy Steel",
      grade: "ASTM A234 Grade WP11 / WP22 / WP91",
      productType: "90° LR Seamless Elbow",
      size: "1/2\" NB to 24\" NB",
      thickness: "Sch 40, Sch 80, Sch 160, Sch XXS",
      manufacturingType: "Hot Formed Normalized & Tempered",
      finish: "Black Anti-Corrosion Paint",
      form: "Bevelled Ends",
      designStandard: "ASME B16.9"
    },
    standards: ["ASME B16.9", "ASTM A234 WP11 / WP22 / WP91"],
    applications: ["Superheater Steam Headers", "Thermal Power Generation", "Petrochemical Cracking Heaters"],
    isResearchedDraft: false,
    relatedProductIds: ["fitting-cs-wpb-elbow", "fitting-ss-316l-elbow"]
  },

  // ----------------------------------------------------------------------
  // FASTENERS - APPROVED METALLURGICAL RANGE
  // ----------------------------------------------------------------------
  // FASTENERS - COMPLETE METALLURGICAL CATALOGUE (STRICTLY ISOLATED)
  // ----------------------------------------------------------------------
  
  // 1. STAINLESS STEEL FASTENERS
  {
    id: "fastener-ss-316l-hex-bolt",
    slug: "ss-316l-heavy-hex-bolts-nuts",
    name: "Stainless Steel 316L Heavy Hex Head Bolts & Heavy Hex Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "SS 316 / 316L (ASTM A193 Gr B8M)",
    gradeSlug: "316l",
    productType: "Hex Head Bolts & Nut Assembly",
    heroImage: fastenerSsImg,
    gallery: [fastenerSsImg, fastenersCollageImg, fastenersImg],
    shortDescription: "Corrosion-resistant SS 316L hex head bolts, heavy hex nuts, flat washers & lock washers per ASME B18.2.1.",
    overview: "Supreme Metal & Alloys manufactures precision thread-rolled stainless steel 304/316 fasteners for marine, chemical processing, and sanitary piping assembly.",
    specifications: {
      material: "Austenitic Stainless Steel",
      grade: "ASTM A193 Gr B8/B8M | A194 Gr 8/8M",
      productType: "Hex Head Bolts, Nuts & Flat Washers",
      size: "M4 to M64 | 1/4\" to 2-1/2\"",
      length: "12mm to 600mm",
      manufacturingType: "Cold Formed & Precision Thread Rolled",
      finish: "Passivated / Bright Clean Finish",
      form: "Hex Bolt, Heavy Nut, Flat & Lock Washer Set"
    },
    standards: ["ASME B18.2.1", "ASME B18.2.2", "DIN 933 / DIN 934", "ASTM A193 / A194"],
    applications: ["Chemical Plant Flange Bolting", "Sanitary Process Lines", "Marine Fastening"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-ss-304-stud-bolt", "fastener-ss-321-socket-screw"]
  },
  {
    id: "fastener-ss-304-stud-bolt",
    slug: "ss-304-threaded-stud-bolts",
    name: "Stainless Steel 304 Threaded Stud Bolts & Hex Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "SS 304 / 304L (ASTM A193 Gr B8)",
    gradeSlug: "304",
    productType: "Continuous Thread Stud Bolt",
    heroImage: fastenerSsImg,
    gallery: [fastenerSsImg, fastenersCollageImg],
    shortDescription: "Continuous thread SS 304 stud bolts with heavy hex nuts for general chemical and food processing flange bolting.",
    overview: "High-grade 304 stainless steel studs engineered for non-magnetic, corrosion-resistant joint connections under medium pressure.",
    specifications: {
      material: "Stainless Steel AISI 304",
      grade: "ASTM A193 Grade B8 Class 1 & Class 2",
      productType: "Fully Threaded Stud Rod",
      size: "1/4\" to 2\" | M6 to M52",
      length: "50mm to 2000mm",
      manufacturingType: "Thread Rolled CNC Machined",
      finish: "Clean Pickled & Passivated",
      form: "Stud Bolt + 2 Heavy Nuts"
    },
    standards: ["ASTM A193 B8", "ASTM A194 8", "ASME B18.31.2"],
    applications: ["Food & Beverage Piping", "Water Treatment Flanges", "HVAC Ductwork"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-ss-316l-hex-bolt", "fastener-ss-321-socket-screw"]
  },
  {
    id: "fastener-ss-321-socket-screw",
    slug: "ss-321-socket-head-cap-screws",
    name: "Stainless Steel 321 High-Temperature Socket Head Cap Screws",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "SS 321 / 321H Titanium-Stabilized",
    gradeSlug: "321",
    productType: "Socket Head Cap Screws",
    heroImage: fastenerSsImg,
    gallery: [fastenerSsImg, fastenersCollageImg],
    shortDescription: "Titanium-stabilized SS 321 Allen socket head cap screws for high-temperature exhaust and heat exchanger applications.",
    overview: "High-temperature SS 321 socket cap screws resisting intergranular corrosion in service up to 870°C.",
    specifications: {
      material: "SS 321 Titanium Stabilized",
      grade: "ASTM A193 Grade B8T",
      productType: "Socket Head Cap Screw (Allen Bolt)",
      size: "M4 to M36 | 1/4\" to 1-1/2\"",
      manufacturingType: "Cold Forged Socket Head",
      finish: "Bright Passivated",
      form: "Hex Socket Screws"
    },
    standards: ["DIN 912", "ISO 4762", "ASME B18.3"],
    applications: ["High-Temp Exhaust Lines", "Furnace Fasteners", "Petrochemical Boilers"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-ss-316l-hex-bolt", "fastener-ss-304-stud-bolt"]
  },

  // 2. CARBON STEEL FASTENERS
  {
    id: "fastener-galvanized-carbon-steel",
    slug: "galvanized-carbon-steel-fasteners",
    name: "Galvanized Carbon Steel Heavy Structural Bolts & Heavy Hex Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A307 Gr A/B | ASTM A325 Structural",
    gradeSlug: "a307-galvanized",
    productType: "Galvanized Structural Bolting",
    heroImage: fastenerGalvanizedImg,
    gallery: [fastenerGalvanizedImg, fastenersCollageImg],
    shortDescription: "Hot-dip galvanized & electro-zinc plated carbon steel hex bolts and heavy hex nuts for structural steel construction.",
    overview: "Heavy-duty corrosion protected galvanized carbon steel bolting designed for outdoor structural frames, transmission towers, and infrastructure projects.",
    specifications: {
      material: "Low / Medium Carbon Steel",
      grade: "ASTM A307 Grade A/B | ASTM A325",
      productType: "Galvanized Hex Bolts & Nuts",
      size: "M6 to M48 | 1/4\" to 2\"",
      finish: "Hot-Dip Galvanized (HDG) / Zinc Plated",
      manufacturingType: "Forged Head & Rolled Thread",
      form: "Hex Bolt & Heavy Nut Assembly"
    },
    standards: ["ASTM A307", "ASTM A325", "ISO 4014", "ASTM A153"],
    applications: ["Structural Steel Frames", "Transmission Towers", "Outdoor Bridge Bolting"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-cs-a194-2h-nut", "fastener-cs-zinc-cap-screw"]
  },
  {
    id: "fastener-cs-a194-2h-nut",
    slug: "astm-a194-2h-heavy-hex-nuts",
    name: "ASTM A194 Grade 2H Heavy Carbon Steel Hex Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "ASTM A194 Grade 2H / 2HM",
    gradeSlug: "a194-2h",
    productType: "Heavy Hex Nut",
    heroImage: fastenerGalvanizedImg,
    gallery: [fastenerGalvanizedImg, fastenersCollageImg],
    shortDescription: "High-strength heat treated carbon steel heavy hex nuts for high-pressure high-temperature service.",
    overview: "Quenched and tempered ASTM A194 2H heavy hex nuts matching B7 stud bolts for refinery pressure vessel and flange connections.",
    specifications: {
      material: "Quenched & Tempered Carbon Steel",
      grade: "ASTM A194 Grade 2H / 2HM",
      productType: "Heavy Hex Nut",
      size: "1/2\" to 3-1/2\" | M12 to M90",
      finish: "Plain, Black Oxide, Hot Dip Galvanized",
      form: "Heavy Hex Nut"
    },
    standards: ["ASTM A194 2H", "ASME B18.2.2"],
    applications: ["Pressure Vessel Flanges", "Oil & Gas Pipeline Connections"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-galvanized-carbon-steel", "fastener-a193-b7-stud"]
  },
  {
    id: "fastener-cs-zinc-cap-screw",
    slug: "grade-8-8-zinc-plated-cap-screws",
    name: "Grade 8.8 High-Tensile Zinc Plated Hex Cap Screws",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "Carbon Steel Grade 8.8 / 10.9",
    gradeSlug: "grade-8-8",
    productType: "Hex Cap Screws",
    heroImage: fastenerGalvanizedImg,
    gallery: [fastenerGalvanizedImg, fastenersCollageImg],
    shortDescription: "Precision thread electro-zinc plated high-tensile carbon steel hex cap screws and flange nuts.",
    overview: "High tensile structural carbon steel screws providing high clamp load for general mechanical engineering.",
    specifications: {
      material: "Medium Carbon Alloyed Steel",
      grade: "Property Class 8.8 / 10.9",
      productType: "Hex Cap Screws & Nuts",
      size: "M5 to M36",
      finish: "Bright Yellow / Clear Zinc Plated",
      form: "Hex Bolt & Washer Set"
    },
    standards: ["DIN 933", "ISO 4017", "DIN 934"],
    applications: ["Automotive Chassis", "Industrial Motors", "Pump Housings"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-galvanized-carbon-steel", "fastener-cs-a194-2h-nut"]
  },

  // 3. ALLOY STEEL FASTENERS
  {
    id: "fastener-a193-b7-stud",
    slug: "astm-a193-b7-stud-bolt",
    name: "ASTM A193 B7 Alloy Steel Heavy Stud Bolts with 2H Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A193 B7 / A194 2H",
    gradeSlug: "a193-b7",
    productType: "Stud Bolt Assembly",
    heroImage: fastenerAlloySteelImg,
    gallery: [fastenerAlloySteelImg, fastenersCollageImg],
    shortDescription: "High-tensile chromium-molybdenum alloy steel stud bolts for high-temperature pressure vessel and flange assembly.",
    overview: "Continuous thread stud bolts with heavy hex nuts coated with Xylan, PTFE, or Black Oxide for extreme torque and heat up to 425°C.",
    specifications: {
      material: "Alloy Steel AISI 4140",
      grade: "ASTM A193 Grade B7 / A194 2H",
      productType: "Continuous Stud Bolt",
      size: "1/2\" to 3-1/2\" Dia | M12 to M90",
      length: "50mm to 1000mm",
      manufacturingType: "Cold Formed & Thread Rolled",
      finish: "Plain, Black Oxide, Cadmium, PTFE Coated",
      form: "Stud Bolt + 2 Heavy Hex Nuts"
    },
    standards: ["ASTM A193 B7", "ASTM A194 2H", "ASME B18.2.1"],
    applications: ["Refinery Flange Bolting", "High Pressure Valves", "Heat Exchangers"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-a193-b16-high-temp-stud", "fastener-a320-l7-low-temp-bolt"]
  },
  {
    id: "fastener-a193-b16-high-temp-stud",
    slug: "astm-a193-b16-high-temp-stud-bolts",
    name: "ASTM A193 B16 Cr-Mo-V High-Temperature Stud Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A193 Grade B16 / A194 Gr 7",
    gradeSlug: "a193-b16",
    productType: "High Temperature Stud Bolts",
    heroImage: fastenerAlloySteelImg,
    gallery: [fastenerAlloySteelImg, fastenersCollageImg],
    shortDescription: "Chromium-molybdenum-vanadium alloy steel stud bolts engineered for thermal power plant steam lines up to 593°C.",
    overview: "Specialized heat treated Cr-Mo-V alloy steel studs retaining high creep strength and relaxation resistance under extreme boiler temperatures.",
    specifications: {
      material: "Cr-Mo-V Heat Treated Alloy Steel",
      grade: "ASTM A193 Grade B16 / A194 Grade 7",
      productType: "Boiler Stud Bolt Assembly",
      size: "1/2\" to 3\" Diameter",
      finish: "Phosphate & Oiled / Black Oxide",
      form: "Stud Bolt + Heavy Hex Nuts"
    },
    standards: ["ASTM A193 B16", "ASTM A194 Gr 7", "ASME B18.2.1"],
    applications: ["Superheater Steam Lines", "Thermal Power Boilers", "Turbine Casing Bolting"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-a193-b7-stud", "fastener-a320-l7-low-temp-bolt"]
  },
  {
    id: "fastener-a320-l7-low-temp-bolt",
    slug: "astm-a320-l7-cryogenic-stud-bolts",
    name: "ASTM A320 L7 Low-Temperature Cryogenic Stud Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A320 Grade L7 / L7M / A194 Gr 7L",
    gradeSlug: "a320-l7",
    productType: "Cryogenic Alloy Stud Bolts",
    heroImage: fastenerAlloySteelImg,
    gallery: [fastenerAlloySteelImg, fastenersCollageImg],
    shortDescription: "Charpy V-notch impact tested alloy steel stud bolts for sub-zero cryogenic LNG and Arctic offshore installations.",
    overview: "Guaranteed low temperature impact toughness down to -101°C for cryogenic valves and LNG terminal pressure piping.",
    specifications: {
      material: "AISI 4140 Alloy Steel Impact Tested",
      grade: "ASTM A320 Grade L7 / A194 Grade 7",
      productType: "Cryogenic Stud Bolt",
      size: "1/2\" to 2-1/2\" Dia",
      finish: "Xylan / PTFE / Cadmium Coated",
      form: "Impact Tested Studs & Nuts"
    },
    standards: ["ASTM A320 L7", "ASTM A194 7L", "ASME B18.2.1"],
    applications: ["LNG Terminals & Storage Tanks", "Cryogenic Valves", "Arctic Oil Pipelines"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-a193-b7-stud", "fastener-a193-b16-high-temp-stud"]
  },

  // 4. NICKEL ALLOY FASTENERS
  {
    id: "fastener-inconel-625-stud",
    slug: "inconel-625-heavy-stud-bolts",
    name: "Inconel 625 Heavy Stud Bolts & Heavy Hex Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Inconel 625 (UNS N06625 / Alloy 625)",
    gradeSlug: "inconel-625",
    productType: "Nickel Alloy Stud Bolts",
    heroImage: fastenerPlatedImg,
    gallery: [fastenerPlatedImg, fastenersCollageImg],
    shortDescription: "Nickel-chromium-molybdenum alloy 625 stud bolts with exceptional resistance to pitting, crevice corrosion, and extreme sea water stress.",
    overview: "Supreme Metal & Alloys manufactures Inconel 625 studs for offshore marine manifolds, subsea wellheads, and sour gas processing plants.",
    specifications: {
      material: "Inconel 625 (Nickel-Chromium-Moly)",
      grade: "ASTM B446 / UNS N06625",
      productType: "Subsea Stud Bolt Assembly",
      size: "3/8\" to 2-1/2\" | M10 to M64",
      finish: "Solution Annealed / Precision Machined",
      form: "Heavy Stud Bolt + 2 Heavy Hex Nuts"
    },
    standards: ["ASTM B446", "ASME B18.2.1", "NACE MR0175"],
    applications: ["Offshore Subsea Manifolds", "Sour Gas Riser Clamp Fastening", "Chemical Acid Evaporators"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-monel-400-hex-bolt", "fastener-hastelloy-c276-screw"]
  },
  {
    id: "fastener-monel-400-hex-bolt",
    slug: "monel-400-marine-hex-bolts",
    name: "Monel 400 Marine Corrosion-Resistant Hex Head Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Monel 400 (UNS N04400 / Alloy 400)",
    gradeSlug: "monel-400",
    productType: "Monel Hex Head Bolts",
    heroImage: fastenerPlatedImg,
    gallery: [fastenerPlatedImg, fastenersCollageImg],
    shortDescription: "Solid Monel 400 nickel-copper alloy hex bolts and heavy nuts resisting rapid saltwater velocity corrosion.",
    overview: "Immune to brackish water, hydrofluoric acid, and marine bio-fouling in naval and offshore splash zone environments.",
    specifications: {
      material: "Monel 400 (Nickel-Copper Alloy)",
      grade: "ASTM B164 / UNS N04400",
      productType: "Marine Hex Bolts & Nuts",
      size: "1/4\" to 1-1/2\" | M6 to M36",
      finish: "Bright Clean Turned",
      form: "Hex Head Bolt, Nut & Washer"
    },
    standards: ["ASTM B164", "ASME B18.2.1", "DIN 933"],
    applications: ["Naval Marine Hardware", "HF Acid Alkylation Units", "Seawater Pump Casing"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-inconel-625-stud", "fastener-hastelloy-c276-screw"]
  },

  // 5. HIGH ALLOY FASTENERS
  {
    id: "fastener-hastelloy-c276-screw",
    slug: "hastelloy-c276-socket-head-screws",
    name: "Hastelloy C276 Extreme Acid Socket Head Cap Screws",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "HIGH ALLOYS",
    materialSlug: "high-alloys",
    grade: "Hastelloy C276 (UNS N10276 / Alloy C276)",
    gradeSlug: "hastelloy-c276",
    productType: "Socket Head Cap Screws",
    heroImage: fastenerOxidizedImg,
    gallery: [fastenerOxidizedImg, fastenersCollageImg],
    shortDescription: "Ni-Mo-Cr alloy C276 socket head cap screws engineered for wet chlorine gas, ferric chlorides, and severe acidic media.",
    overview: "Ultra corrosion-resistant Hastelloy C276 cap screws maintaining structural integrity in aggressive oxidizing and reducing acid reactors.",
    specifications: {
      material: "Hastelloy C276",
      grade: "ASTM B574 / UNS N10276",
      productType: "Allen Head Socket Cap Screws",
      size: "M4 to M30 | 1/4\" to 1-1/4\"",
      finish: "Precision Lathe Turned",
      form: "Socket Screw & Heavy Nut"
    },
    standards: ["ASTM B574", "DIN 912", "ASME B18.3"],
    applications: ["Flue Gas Desulfurization", "Pulp & Paper Bleach Plant", "Chemical Reactor Vessels"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-alloy-20-stud", "fastener-inconel-625-stud"]
  },
  {
    id: "fastener-alloy-20-stud",
    slug: "alloy-20-sulfuric-acid-stud-bolts",
    name: "Alloy 20 Sulfuric Acid Resistant Threaded Stud Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "HIGH ALLOYS",
    materialSlug: "high-alloys",
    grade: "Alloy 20 (UNS N08020 / Carpenter 20)",
    gradeSlug: "alloy-20",
    productType: "Acid Resistant Stud Bolts",
    heroImage: fastenerOxidizedImg,
    gallery: [fastenerOxidizedImg, fastenersCollageImg],
    shortDescription: "Niobium stabilized Alloy 20 threaded stud bolts engineered specifically to resist hot sulfuric acid corrosion.",
    overview: "Solid Alloy 20 studs featuring high copper content for exceptional resistance to pitting in harsh chemical mixing tanks.",
    specifications: {
      material: "Alloy 20 (Ni-Cr-Fe-Mo-Cu)",
      grade: "ASTM B473 / UNS N08020",
      productType: "Threaded Stud Bolt Set",
      size: "1/2\" to 2\" Diameter",
      finish: "Solution Annealed Passivated",
      form: "Stud Bolt + 2 Nuts"
    },
    standards: ["ASTM B473", "ASME B18.2.1"],
    applications: ["Sulfuric Acid Pickling Lines", "Phosphate Fertilizer Processing", "Synthetic Rubber Manufacture"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-hastelloy-c276-screw", "fastener-inconel-625-stud"]
  },

  // 6. DUPLEX FASTENERS
  {
    id: "fastener-duplex-2205-bolt",
    slug: "duplex-2205-heavy-hex-bolts",
    name: "Duplex 2205 High Yield Strength Heavy Hex Head Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "Duplex 2205 (UNS S31803 / S32205 / F51)",
    gradeSlug: "duplex-2205",
    productType: "Duplex Hex Bolts",
    heroImage: fastenerBronzeImg,
    gallery: [fastenerBronzeImg, fastenersCollageImg],
    shortDescription: "Dual-phase austenitic-ferritic Duplex 2205 hex head bolts offering twice the mechanical yield strength of SS 316.",
    overview: "High strength Duplex 2205 hex bolts designed for subsea offshore oilfield manifolds and chloride stress corrosion cracking resistance.",
    specifications: {
      material: "Duplex Stainless Steel 2205",
      grade: "ASTM A276 / ASTM A479 F51 / F60",
      productType: "Heavy Hex Bolt & Lock Nut",
      size: "M6 to M48 | 1/4\" to 2\"",
      finish: "Pickled & Passivated",
      form: "Hex Head Bolt, Heavy Nut, Lock Washer"
    },
    standards: ["ASTM A276 2205", "ASME B18.2.1", "DIN 933"],
    applications: ["Subsea Oilfield Manifolds", "Offshore Platform Piping", "Reverse Osmosis Desalination"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-duplex-2205-stud", "fastener-super-duplex-2507-stud"]
  },
  {
    id: "fastener-duplex-2205-stud",
    slug: "duplex-2205-subsea-stud-bolts",
    name: "Duplex 2205 Subsea Continuous Thread Stud Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "Duplex 2205 (UNS S32205)",
    gradeSlug: "duplex-2205",
    productType: "Duplex Stud Bolt Set",
    heroImage: fastenerBronzeImg,
    gallery: [fastenerBronzeImg, fastenersCollageImg],
    shortDescription: "Precision thread rolled Duplex 2205 stud bolts with heavy hex nuts for seawater heat exchangers.",
    overview: "Superior chloride pitting resistance (PREN ~34) combined with high tensile load capacity for severe offshore installations.",
    specifications: {
      material: "Duplex 2205 (UNS S32205)",
      grade: "ASTM A479 / UNS S32205",
      productType: "Threaded Stud Bolt Set",
      size: "1/2\" to 2-1/2\" Dia",
      finish: "Passivated / PTFE Coated",
      form: "Continuous Stud Bolt + 2 Heavy Nuts"
    },
    standards: ["ASTM A479", "ASME B18.2.1", "EN 10272"],
    applications: ["Seawater Cooling Systems", "Offshore Riser Clamps"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-duplex-2205-bolt", "fastener-super-duplex-2507-stud"]
  },

  // 7. SUPER DUPLEX FASTENERS
  {
    id: "fastener-super-duplex-2507-stud",
    slug: "super-duplex-2507-heavy-stud-bolts",
    name: "Super Duplex 2507 Extreme Deepwater Stud Bolts & Heavy Nuts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "Super Duplex 2507 (UNS S32750 / F53)",
    gradeSlug: "super-duplex-2507",
    productType: "Super Duplex Heavy Stud Bolts",
    heroImage: fastenerTitaniumImg,
    gallery: [fastenerTitaniumImg, fastenersCollageImg],
    shortDescription: "PREN > 42 Super Duplex 2507 stud bolts engineered for high-pressure deepwater subsea oilfield manifolds.",
    overview: "Maximum pitting and crevice corrosion immunity in aggressive offshore environments up to 10,000 PSI subsea pressure.",
    specifications: {
      material: "Super Duplex 2507 (UNS S32750)",
      grade: "ASTM A276 / A479 Grade S32750 / F53",
      productType: "Deepwater Stud Bolt Assembly",
      size: "1/2\" to 3\" Diameter | M12 to M76",
      finish: "Solution Annealed Passivated",
      form: "Heavy Stud Bolt + 2 Heavy Hex Nuts"
    },
    standards: ["ASTM A276 S32750", "ASTM A479", "ASME B18.2.1", "NORSOK M-630"],
    applications: ["Deepwater Subsea Trees", "Offshore HPHT Oilfields", "Chemical Injection Mandrels"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-super-duplex-zeron100-bolt", "fastener-duplex-2205-bolt"]
  },
  {
    id: "fastener-super-duplex-zeron100-bolt",
    slug: "super-duplex-zeron100-hex-flange-bolts",
    name: "Super Duplex Zeron 100 Heavy Hex Flange Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "Super Duplex Zeron 100 (UNS S32760 / F55)",
    gradeSlug: "zeron-100",
    productType: "Super Duplex Flange Bolts",
    heroImage: fastenerTitaniumImg,
    gallery: [fastenerTitaniumImg, fastenersCollageImg],
    shortDescription: "Tungsten-alloyed Zeron 100 super duplex heavy hex flange bolts resisting high velocity seawater erosion.",
    overview: "High PREN (> 43) alloyed with Copper and Tungsten for severe marine erosion and acidic oilfield wellheads.",
    specifications: {
      material: "Super Duplex Zeron 100 (UNS S32760)",
      grade: "ASTM A479 F55 / UNS S32760",
      productType: "Hex Flange Bolt & Heavy Nut",
      size: "M8 to M42 | 5/16\" to 1-3/4\"",
      finish: "Clean Precision Machined",
      form: "Hex Flange Bolt, Heavy Nut, Lock Washer"
    },
    standards: ["ASTM A479 S32760", "ASME B18.2.1", "NORSOK MDS D57"],
    applications: ["Seawater Firewater Systems", "Sour Oil & Gas Wellheads"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-super-duplex-2507-stud", "fastener-duplex-2205-bolt"]
  },

  // 8. TITANIUM FASTENERS
  {
    id: "fastener-titanium-gr5-bolt",
    slug: "titanium-grade-5-hex-cap-screws",
    name: "Titanium Grade 5 (Ti-6Al-4V) Ultra High Strength Hex Cap Screws",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
    gradeSlug: "grade-5",
    productType: "Titanium Hex Cap Screws",
    heroImage: fastenerTitaniumImg,
    gallery: [fastenerTitaniumImg, fastenersCollageImg],
    shortDescription: "Ultra lightweight high strength-to-weight ratio Titanium Grade 5 hex cap screws for aerospace and marine engineering.",
    overview: "Supreme Metal & Alloys supplies aerospace grade Ti-6Al-4V titanium fasteners offering 45% weight saving over steel with 950 MPa tensile strength.",
    specifications: {
      material: "Titanium Alloy Ti-6Al-4V",
      grade: "ASTM B348 Grade 5 / UNS R56400",
      productType: "Lightweight High Strength Hex Screws",
      size: "M4 to M36 | 3/16\" to 1-1/2\"",
      finish: "Anodized / Clean Natural Metallic",
      form: "Hex Bolt, Flange Nut, Flat Washer"
    },
    standards: ["ASTM B348 Grade 5", "AMS 4928", "ASME B18.2.1", "DIN 933"],
    applications: ["Aerospace Airframes & Engines", "Offshore Racing Hardware", "Medical & Defense Engineering"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-titanium-nitride-bolts", "fastener-ss-316l-hex-bolt"]
  },
  {
    id: "fastener-titanium-nitride-bolts",
    slug: "titanium-nitride-tin-aerospace-fasteners",
    name: "Titanium Nitride (TiN) Gold PVD Coated Aerospace Fasteners",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Titanium Grade 5 + PVD Gold TiN Finish",
    gradeSlug: "tin-coated",
    productType: "TiN Coated Titanium Fasteners",
    heroImage: fastenerTitaniumImg,
    gallery: [fastenerTitaniumImg, fastenersCollageImg],
    shortDescription: "PVD Titanium Nitride (TiN) coated Ti-6Al-4V Grade 5 titanium alloy hex head bolts with extreme surface hardness & anti-galling.",
    overview: "Extreme environment aerospace & chemical processing fasteners featuring gold TiN ceramic coating for zero galling, high temperature wear resistance and corrosion immunity.",
    specifications: {
      material: "Titanium Alloy Ti-6Al-4V",
      grade: "ASTM B348 Grade 5 / UNS R56400",
      productType: "PVD TiN Coated Titanium Bolts & Flange Nuts",
      size: "M4 to M36 | 3/16\" to 1-1/2\"",
      finish: "Physical Vapor Deposition (PVD) TiN Ceramic Gold",
      manufacturingType: "Hot Forged & Thread Rolled + PVD Coated",
      form: "Hex Flange Bolts, Lock Nuts, Flat Washers"
    },
    standards: ["ASTM B348 Grade 5", "AMS 4928", "ASME B18.2.1", "DIN 933"],
    applications: ["Aerospace Jet Engines", "Deep Sea Submersibles", "Chemical Reactor Autoclaves"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-titanium-gr5-bolt", "fastener-ss-316l-hex-bolt"]
  },

  // 9. EXOTIC ALLOY FASTENERS
  {
    id: "fastener-cupro-nickel-70-30-bolt",
    slug: "cupro-nickel-70-30-marine-fasteners",
    name: "Cupro Nickel 70/30 Anti-Fouling Marine Hex Head Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "EXOTIC ALLOYS",
    materialSlug: "exotic-alloys",
    grade: "Cupro Nickel 70/30 (UNS C71500 / CuNi 70/30)",
    gradeSlug: "cuni-70-30",
    productType: "CuNi Marine Hex Bolts",
    heroImage: fastenerBrassImg,
    gallery: [fastenerBrassImg, fastenersCollageImg],
    shortDescription: "Solid Cupro Nickel 70/30 bolts providing natural biofouling immunity in seawater cooling systems.",
    overview: "Exotic copper-nickel alloy fasteners preventing marine macro-fouling without sacrificial coatings in naval heat exchangers.",
    specifications: {
      material: "Copper Nickel 70/30 (UNS C71500)",
      grade: "ASTM B151 / UNS C71500",
      productType: "Marine Hex Head Bolt & Nut",
      size: "1/4\" to 1-1/2\" | M6 to M36",
      finish: "Clean Turned Metallic",
      form: "Hex Bolt & Heavy Nut"
    },
    standards: ["ASTM B151", "MIL-C-15726", "DIN 933"],
    applications: ["Naval Submarine Piping", "Seawater Condensers", "Desalination Evaporators"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-zirconium-702-stud", "fastener-titanium-gr5-bolt"]
  },
  {
    id: "fastener-zirconium-702-stud",
    slug: "zirconium-702-nuclear-threaded-studs",
    name: "Zirconium 702 Nuclear Reactor Grade Threaded Stud Bolts",
    division: "MANUFACTURER",
    category: "Fasteners",
    categorySlug: "fasteners",
    material: "EXOTIC ALLOYS",
    materialSlug: "exotic-alloys",
    grade: "Zirconium 702 (UNS R60702)",
    gradeSlug: "zirconium-702",
    productType: "Zirconium Nuclear Studs",
    heroImage: fastenerAluminumImg,
    gallery: [fastenerAluminumImg, fastenersCollageImg],
    shortDescription: "Corrosion-immune Zirconium 702 threaded stud bolts for hydrochloric acid, nitric acid, and nuclear reactor cores.",
    overview: "Ultra high-purity Zirconium 702 fasteners resisting severe hydrochloric acid corrosion at all concentrations up to boiling temperatures.",
    specifications: {
      material: "Unalloyed Zirconium 702",
      grade: "ASTM B550 / UNS R60702",
      productType: "Nuclear Grade Stud Bolt Assembly",
      size: "3/8\" to 1-1/2\" Diameter",
      finish: "Precision Turned Pickled",
      form: "Stud Bolt & Heavy Nut"
    },
    standards: ["ASTM B550", "ASME B18.2.1"],
    applications: ["Nuclear Fuel Processing", "Hydrochloric Acid Synthesis", "Hydrogen Peroxide Reactors"],
    isResearchedDraft: false,
    relatedProductIds: ["fastener-cupro-nickel-70-30-bolt", "fastener-titanium-gr5-bolt"]
  },

  // ----------------------------------------------------------------------
  // DAIRY & PHARMA FITTINGS (MANUFACTURER DIVISION - STRICT MATERIAL ISOLATION)
  // ----------------------------------------------------------------------
  ...DAIRY_PHARMA_PRODUCTS,

  // WIRE MESH - 9 STRICT MATERIALS (MANUFACTURER DIVISION)
  {
    id: "wire-mesh-stainless-steel",
    slug: "wire-mesh-stainless-steel",
    name: "Stainless Steel Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "SS 304 / SS 316L",
    gradeSlug: "316l",
    productType: "Woven & Welded Wire Mesh",
    heroImage: wireMeshSsImg,
    gallery: [wireMeshSsImg],
    shortDescription: "High-precision austenitic stainless steel woven and welded wire mesh engineered for critical chemical filtration, liquid-solid separation, and sanitary screening.",
    overview: "Supreme Metal & Alloys manufactures industrial-grade Stainless Steel Wire Mesh in AISI 304, 304L, 316, and 316L. Produced on state-of-the-art rapier looms with tight aperture tolerances, our SS wire mesh exhibits superior tensile strength and corrosion resistance.",
    specifications: {
      material: "Stainless Steel",
      grade: "AISI 304 / 304L / 316 / 316L",
      meshRange: "1 Mesh to 500 Mesh",
      wireDiameter: "0.025 mm to 3.0 mm",
      weavePatterns: "Square Plain, Twill, Dutch Weave, Welded",
      rollWidths: "1000mm, 1220mm, 1500mm, 2000mm",
      standards: "ASTM E2016, ISO 9044"
    },
    standards: ["ASTM E2016", "ISO 9044", "DIN 4189", "ASTM A580"],
    applications: ["Chemical & Petrochemical Filtration", "Pharmaceutical Sieving", "Food & Beverage Straining", "Water Desalination"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-carbon-steel", "wire-mesh-nickel-alloy", "wire-mesh-duplex"]
  },
  {
    id: "wire-mesh-carbon-steel",
    slug: "wire-mesh-carbon-steel",
    name: "Carbon Steel Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "High Carbon Spring Steel",
    gradeSlug: "carbon-steel",
    productType: "Vibrating Screen & Crimped Mesh",
    heroImage: wireMeshCsImg,
    gallery: [wireMeshCsImg],
    shortDescription: "Heavy-duty abrasion-resistant high-carbon steel woven crimped wire mesh screens engineered for aggregate quarry screening and mining ore classification.",
    overview: "Engineered specifically to withstand severe impact, extreme abrasive wear, and continuous high-frequency vibration in mining, coal preparation, quarry aggregate grading, and heavy infrastructure earthworks.",
    specifications: {
      material: "Carbon Steel",
      grade: "High Carbon Spring Steel (65Mn / C70)",
      meshRange: "2 Mesh to 40 Mesh",
      wireDiameter: "1.0 mm to 8.0 mm",
      weavePatterns: "Double Crimped, Lock Crimped, Flat Top",
      rollWidths: "1000mm to 2000mm & Pre-Cut Hook Panels",
      standards: "ISO 4783, DIN 4192"
    },
    standards: ["ISO 4783", "DIN 4192", "IS 2405", "ASTM A510"],
    applications: ["Quarry Aggregate Crushing", "Mining Shaker Screens", "Coal Preparation", "Machine Safety Guards"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-stainless-steel", "wire-mesh-alloy-steel", "wire-mesh-nickel-alloy"]
  },
  {
    id: "wire-mesh-alloy-steel",
    slug: "wire-mesh-alloy-steel",
    name: "Alloy Steel Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "Chrome-Moly Alloy Steel",
    gradeSlug: "alloy-steel",
    productType: "Heat-Resistant Wire Mesh",
    heroImage: wireMeshAsImg,
    gallery: [wireMeshAsImg],
    shortDescription: "Heat-treated wear-resistant alloy steel wire mesh engineered for elevated-temperature processing, heavy impact resistance, and specialized thermal industrial screening.",
    overview: "Manufactured from chromium-molybdenum and specialized alloy steels, this wire mesh delivers higher yield strength and elevated-temperature creep resistance than conventional carbon steels.",
    specifications: {
      material: "Alloy Steel",
      grade: "42CrMo4 / ASTM A387 Gr 11 / Gr 22",
      meshRange: "4 Mesh to 120 Mesh",
      wireDiameter: "0.5 mm to 5.0 mm",
      weavePatterns: "Plain Weave, Twill Weave, Intermediate Crimp",
      standards: "ASTM A877, ISO 9044"
    },
    standards: ["ASTM A877", "ISO 9044", "DIN EN 10083-3"],
    applications: ["Thermal Power Plants", "Furnace Quenching Baskets", "Mining Mill Discharge", "Foundry Screens"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-stainless-steel", "wire-mesh-carbon-steel", "wire-mesh-high-alloy"]
  },
  {
    id: "wire-mesh-nickel-alloy",
    slug: "wire-mesh-nickel-alloy",
    name: "Nickel Alloy Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Nickel 200 / Monel 400",
    gradeSlug: "nickel-200",
    productType: "Corrosion-Resistant Filtration Mesh",
    heroImage: wireMeshNickelImg,
    gallery: [wireMeshNickelImg],
    shortDescription: "Ultra-corrosion-resistant pure Nickel 200, Monel 400, and Inconel wire mesh engineered for caustic alkali handling, marine seawater filtration, and chlorinated gas environments.",
    overview: "Supreme Metal & Alloys weaves premium high-nickel alloy wire meshes offering complete resistance to caustic alkalis (sodium hydroxide, potassium hydroxide) up to boiling points.",
    specifications: {
      material: "Nickel Alloy",
      grade: "Nickel 200 (UNS N02200) / Monel 400 (UNS N04400)",
      meshRange: "10 Mesh to 400 Mesh",
      wireDiameter: "0.03 mm to 1.5 mm",
      weavePatterns: "Plain Weave, Twill Weave, Dutch Twill",
      standards: "ASTM B162, ASTM B164, ISO 9044"
    },
    standards: ["ASTM B162", "ASTM B164", "ASTM B166", "ISO 9044", "NACE MR0175"],
    applications: ["Caustic Soda Evaporators", "Marine Seawater Strainers", "Synthetic Fiber Spinnerets", "HF Alkylation Units"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-stainless-steel", "wire-mesh-high-alloy", "wire-mesh-exotic-alloy"]
  },
  {
    id: "wire-mesh-high-alloy",
    slug: "wire-mesh-high-alloy",
    name: "High Alloy Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "HIGH ALLOY",
    materialSlug: "high-alloys",
    grade: "Alloy 20 / 254 SMO",
    gradeSlug: "alloy-20",
    productType: "Super-Austenitic Acid Mesh",
    heroImage: wireMeshHighAlloyImg,
    gallery: [wireMeshHighAlloyImg],
    shortDescription: "Super-austenitic 6-Moly and Alloy 20 wire mesh engineered specifically for hot sulfuric acid, phosphoric acid, and aggressive chloride pitting environments.",
    overview: "Supreme High Alloy Wire Mesh is woven from super-austenitic stainless steels containing elevated nickel, chromium, and molybdenum contents plus copper additions (Alloy 20 / 20Cb-3).",
    specifications: {
      material: "High Alloy",
      grade: "Alloy 20 (UNS N08020) / 254 SMO (UNS S31254)",
      meshRange: "15 Mesh to 350 Mesh",
      wireDiameter: "0.04 mm to 1.2 mm",
      weavePatterns: "Plain Weave, Twill Weave, Dutch Weave",
      standards: "ASTM B472, ASTM A580, ISO 9044"
    },
    standards: ["ASTM B472", "ASTM B473", "ASTM A580", "ISO 9044"],
    applications: ["Hot Sulfuric Acid Pickling", "Phosphoric Acid Evaporators", "Flue Gas Desulfurization (FGD)", "Pulp Bleaching"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-nickel-alloy", "wire-mesh-duplex", "wire-mesh-exotic-alloy"]
  },
  {
    id: "wire-mesh-duplex",
    slug: "wire-mesh-duplex",
    name: "Duplex Stainless Steel Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "Duplex 2205 (UNS S31803 / S32205)",
    gradeSlug: "duplex-2205",
    productType: "Chloride-Resistant Duplex Mesh",
    heroImage: wireMeshDuplexImg,
    gallery: [wireMeshDuplexImg],
    shortDescription: "High-yield-strength 22% Cr Duplex 2205 wire mesh combining superior resistance to chloride stress corrosion cracking with twice the mechanical strength of SS 316L.",
    overview: "Supreme Duplex 2205 Wire Mesh features a balanced 50/50 austenitic-ferritic microstructure. It provides approximately double the yield strength of conventional 300-series stainless steels.",
    specifications: {
      material: "Duplex Steel",
      grade: "UNS S31803 / S32205 (2205)",
      meshRange: "8 Mesh to 300 Mesh",
      wireDiameter: "0.05 mm to 2.5 mm",
      weavePatterns: "Plain Weave, Twill Weave, Dutch Weave",
      standards: "ASTM A276, ASTM E2016, ISO 9044"
    },
    standards: ["ASTM A276", "ASTM A479", "EN 10088-3", "ISO 9044", "NACE MR0175"],
    applications: ["Offshore Seawater Intake", "Drilling Fluid Mud Screens", "Desalination Sand Filters", "Tanker Vent Screens"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-stainless-steel", "wire-mesh-super-duplex", "wire-mesh-high-alloy"]
  },
  {
    id: "wire-mesh-super-duplex",
    slug: "wire-mesh-super-duplex",
    name: "Super Duplex Stainless Steel Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "Super Duplex 2507 (UNS S32750)",
    gradeSlug: "super-duplex-2507",
    productType: "Extreme Saline Service Mesh",
    heroImage: wireMeshSuperDuplexImg,
    gallery: [wireMeshSuperDuplexImg],
    shortDescription: "Ultra-high performance 25% Cr Super Duplex 2507 wire mesh engineered for extreme offshore saline environments, subsea strainers, and severe sour service with PREN ≥ 43.",
    overview: "Supreme Super Duplex 2507 Wire Mesh offers the ultimate combination of high mechanical tensile strength and exceptional resistance to localized chloride pitting and crevice corrosion.",
    specifications: {
      material: "Super Duplex Steel",
      grade: "UNS S32750 (2507) / Zeron 100",
      meshRange: "10 Mesh to 325 Mesh",
      wireDiameter: "0.06 mm to 2.0 mm",
      weavePatterns: "Square Plain, Twill, High-Flow Dutch",
      standards: "ASTM A276, EN 10088-3, ISO 9044"
    },
    standards: ["ASTM A276", "ASTM A479", "EN 10088-3", "ISO 9044", "NORSOK M-650"],
    applications: ["Subsea Wellhead Debris Caps", "SWRO Desalination Filters", "Marine Scrubber Packs", "Sour Gas Separators"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-duplex", "wire-mesh-titanium", "wire-mesh-exotic-alloy"]
  },
  {
    id: "wire-mesh-titanium",
    slug: "wire-mesh-titanium",
    name: "Titanium Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Titanium Grade 2 (UNS R50400)",
    gradeSlug: "titanium-gr2",
    productType: "Pure Titanium Woven Mesh",
    heroImage: wireMeshTitaniumImg,
    gallery: [wireMeshTitaniumImg],
    shortDescription: "Ultra-lightweight, bio-compatible, high-purity Titanium Grade 2 wire mesh offering complete immunity to wet chlorine gas, chlorites, hypochlorites, and ambient seawater.",
    overview: "Supreme Titanium Wire Mesh is woven from vacuum-annealed high-purity commercial titanium wire. Renowned for its exceptional strength-to-weight ratio and low density.",
    specifications: {
      material: "Titanium",
      grade: "Titanium Grade 2 (UNS R50400)",
      meshRange: "10 Mesh to 200 Mesh",
      wireDiameter: "0.08 mm to 1.6 mm",
      weavePatterns: "Plain Square Weave, Twill Weave",
      standards: "ASTM B348, ASTM B863, ISO 9044"
    },
    standards: ["ASTM B348", "ASTM B863", "ISO 9044", "AMS 4951"],
    applications: ["Chlor-Alkali Electrolysis Cells", "Electrochemical Water Treatment", "Aerospace Fuel Screens", "Medical Implants"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-super-duplex", "wire-mesh-nickel-alloy", "wire-mesh-exotic-alloy"]
  },
  {
    id: "wire-mesh-exotic-alloy",
    slug: "wire-mesh-exotic-alloy",
    name: "Exotic Alloy Wire Mesh",
    division: "MANUFACTURER",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    material: "EXOTIC ALLOY",
    materialSlug: "exotic-alloys",
    grade: "Hastelloy C-22 / Incoloy 825",
    gradeSlug: "hastelloy-c22",
    productType: "Ultra-Specialty Alloy Mesh",
    heroImage: wireMeshExoticImg,
    gallery: [wireMeshExoticImg],
    shortDescription: "Ultra-high specialty Hastelloy C-22, Incoloy 825, Tantalum, and Zirconium wire mesh engineered for extreme mixed acid media, nuclear re-processing, and severe halide chemistry.",
    overview: "Supreme Exotic Alloy Wire Mesh represents the pinnacle of metallurgical screen engineering, providing extraordinary resistance to mixed reducing and oxidizing acids and wet chlorine.",
    specifications: {
      material: "Exotic Alloy",
      grade: "Hastelloy C-22 (UNS N06022) / Incoloy 825 / Tantalum",
      meshRange: "15 Mesh to 400 Mesh",
      wireDiameter: "0.04 mm to 1.2 mm",
      weavePatterns: "Plain Weave, Twill Weave, Dutch Twill",
      standards: "ASTM B574, ASTM B425, ISO 9044"
    },
    standards: ["ASTM B574", "ASTM B425", "ASTM B365", "ISO 9044", "NACE MR0175"],
    applications: ["Pharmaceutical Mixed Acid Reactors", "Precious Metal Catalyst Recovery", "Nuclear Waste Vitrification", "Geothermal Turbines"],
    isResearchedDraft: false,
    relatedProductIds: ["wire-mesh-nickel-alloy", "wire-mesh-high-alloy", "wire-mesh-super-duplex"]
  },
  // ----------------------------------------------------------------------
  // PERFORATED SHEETS - MANUFACTURER DIVISION (9 Verified Material Offerings)
  // ----------------------------------------------------------------------
  ...PERFORATED_SHEETS_PRODUCTS
];

// Data Retrieval Helpers
export const getProductBySlug = (slug) => {
  if (!slug) return undefined;
  const clean = cleanMfgSlug(slug);
  return PRODUCTS.find((p) => p.slug === clean || p.id === clean || p.slug === slug || p.id === slug);
};

export const getCategoryBySlug = (slug) => {
  if (!slug) return undefined;
  const clean = cleanMfgSlug(slug);
  const normalized = normalizeCategorySlug(clean);
  if (normalized === "wire" || normalized === "wires" || clean === "wire" || clean === "wires") {
    return CATEGORIES.find((c) => c.slug === "wires" || c.id === "wires");
  }
  if (clean === "circle" || clean === "circles" || normalized === "circle" || normalized === "circles") {
    return CATEGORIES.find((c) => c.slug === "circles" || c.id === "circles" || c.slug === "circle" || c.id === "circle");
  }
  if (clean === "coil" || clean === "coils" || normalized === "coil" || normalized === "coils" || clean === "quile") {
    return CATEGORIES.find((c) => c.slug === "coils" || c.id === "coils" || c.slug === "coil" || c.id === "coil");
  }
  if (clean === "ring" || clean === "rings" || normalized === "ring" || normalized === "rings") {
    return CATEGORIES.find((c) => c.slug === "rings" || c.id === "rings" || c.slug === "ring" || c.id === "ring");
  }
  if (clean === "flat" || clean === "flats" || clean === "flat-bar" || clean === "flat-bars") {
    return CATEGORIES.find((c) => c.slug === "flat" || c.id === "flat");
  }
  if (clean === "patapatti" || clean === "patta-patti") {
    return CATEGORIES.find((c) => c.slug === "patapatti" || c.id === "patapatti");
  }
  return CATEGORIES.find(
    (c) => c.slug === normalized || c.id === normalized || c.slug === clean || c.id === clean || c.slug === slug || c.id === slug
  );
};

// Strictly canonicalize material slug (e.g. nickel-alloys -> nickel, carbon-steel -> carbon)
export const canonicalizeMaterialSlug = (slug = "") => {
  if (!slug || typeof slug !== "string") return null;
  const clean = cleanMfgSlug(slug).toLowerCase().trim();
  for (const m of MATERIALS) {
    if (m.slug === clean || m.id === clean) return m.slug;
    if (Array.isArray(m.aliases) && m.aliases.includes(clean)) return m.slug;
  }
  return null;
};

// Strictly retrieve a Material record by slug or alias (Rule #12: returns null if invalid, NO silent fallback)
export const getMaterialBySlug = (slug = "") => {
  if (!slug) return null;
  const canonical = canonicalizeMaterialSlug(slug);
  if (!canonical) return null;
  return MATERIALS.find((m) => m.slug === canonical) || null;
};

// Strict Metallurgical Product Matcher (Guarantees 100% boundary isolation across all 9 materials)
export const matchProductToCanonicalMaterial = (canonicalSlug = "", product) => {
  if (!canonicalSlug || !product) return false;
  const pSlug = (product.materialSlug || "").toLowerCase().trim();
  const pName = (product.material || product.materialName || "").toLowerCase().trim();

  switch (canonicalSlug) {
    case "stainless-steel":
      return pSlug === "stainless-steel" || pName.includes("stainless");

    case "nickel":
      // Nickel but strictly NOT high-alloy
      if (pSlug === "high-alloy" || pSlug === "high-alloys" || pName.includes("high alloy")) return false;
      return (
        pSlug === "nickel-alloy" ||
        pSlug === "nickel-alloys" ||
        pSlug === "nickel" ||
        pName.includes("nickel") ||
        pName.includes("nikle")
      );

    case "high-alloys":
      return pSlug === "high-alloy" || pSlug === "high-alloys" || pName.includes("high alloy");

    case "duplex":
      // Duplex but strictly NOT super-duplex
      if (pSlug === "super-duplex" || pName.includes("super duplex") || pName.includes("super-duplex")) return false;
      return pSlug === "duplex" || pName === "duplex";

    case "super-duplex":
      return pSlug === "super-duplex" || pName.includes("super duplex") || pName.includes("super-duplex");

    case "titanium":
      return pSlug === "titanium" || pName.includes("titanium") || pName.includes("titainium");

    case "alloys":
      return (
        pSlug === "exotic-alloy" ||
        pSlug === "exotic-alloys" ||
        pSlug === "alloys" ||
        pName.includes("exotic")
      );

    case "carbon":
      return (
        pSlug === "carbon-steel" ||
        pSlug === "carbon" ||
        pName === "carbon" ||
        pName === "carbon steel"
      );

    case "alloy-steel":
      return pSlug === "alloy-steel" || pName === "alloy steel";

    default:
      return false;
  }
};

// Strictly get all products for a specific material with ZERO cross-material leakage
export const getProductsByMaterial = (matSlug = "") => {
  if (!matSlug) return [];
  const canonical = canonicalizeMaterialSlug(matSlug);
  if (!canonical) return [];
  return PRODUCTS.filter((p) => matchProductToCanonicalMaterial(canonical, p));
};

export const getProductsByMaterialSlug = getProductsByMaterial;

// Get live genuine product counts for all 9 materials
export const getMaterialProductCounts = () => {
  const counts = {};
  for (const m of MATERIALS) {
    counts[m.slug] = getProductsByMaterial(m.slug).length;
  }
  return counts;
};

// Get distinct categories available for a material (for category filter chips)
export const getMaterialCategories = (matSlug = "") => {
  const prods = getProductsByMaterial(matSlug);
  const seen = new Set();
  const cats = [];
  for (const p of prods) {
    const slug = p.categorySlug || p.category?.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const name = p.category || "General";
    if (slug && !seen.has(slug)) {
      seen.add(slug);
      cats.push({ slug, name });
    }
  }
  return cats;
};

export const getProductsByCategory = (catSlug) => {
  if (!catSlug) return [];
  const clean = cleanMfgSlug(catSlug);
  const normalized = normalizeCategorySlug(clean);
  return PRODUCTS.filter((p) => {
    return (
      p.categorySlug === normalized ||
      p.categorySlug === clean ||
      p.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === normalized ||
      p.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === clean
    );
  });
};

export const getProductsByCategoryAndMaterial = (catSlug, matSlug) => {
  if (!catSlug || !matSlug) return [];
  const cleanCat = cleanMfgSlug(catSlug);
  const normalizedCat = normalizeCategorySlug(cleanCat);
  const canonicalMat = canonicalizeMaterialSlug(matSlug);
  if (!canonicalMat) return [];

  return PRODUCTS.filter((p) => {
    const pCat = (p.category || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const matchCat =
      p.categorySlug === normalizedCat ||
      p.categorySlug === cleanCat ||
      (pCat && pCat === normalizedCat) ||
      (pCat && pCat === cleanCat);
    return matchCat && matchProductToCanonicalMaterial(canonicalMat, p);
  });
};

export const getProductsByDivision = (divId) =>
  PRODUCTS.filter((p) => (p.division || "").toLowerCase() === String(divId).toLowerCase());

