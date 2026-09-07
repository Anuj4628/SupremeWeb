// Isolated Supplier Data Layer — Pipes & Tubes
// Source of truth: src/assets/All Products/Supplier division/Pipes and Tubes/

import ssPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/stainless steel.png";
import carbonPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/carbon.png";
import alloySteelPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/alloy steel.png";
import nickelPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/nikle.png";
import highAlloyPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/high alloy.png";
import duplexPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/duplex.png";
import superDuplexPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/super Duplex (2).png";
import titaniumPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/titanium.png";
import exoticAlloyPipesImg from "../assets/All Products/Supplier division/Pipes and Tubes/exotic alloy.png";

export {
  ssPipesImg,
  carbonPipesImg,
  alloySteelPipesImg,
  nickelPipesImg,
  highAlloyPipesImg,
  duplexPipesImg,
  superDuplexPipesImg,
  titaniumPipesImg,
  exoticAlloyPipesImg
};

// Exact 9 Materials verified in the Pipes & Tubes folder
export const SUPPLIER_PIPES_MATERIALS = [
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

export const SUPPLIER_PIPES_PRODUCTS = [
  {
    id: "pipe-stainless-steel",
    slug: "pipes-tubes-stainless-steel",
    name: "Stainless Steel Pipes & Tubes",
    title: "Stainless Steel Pipes & Tubes",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: ssPipesImg,
    heroImage: ssPipesImg,
    grades: ["ASTM A312 TP304 / 304L", "TP316 / 316L", "TP321 / 321H", "TP310S", "TP347 / 347H", "904L"],
    forms: ["Seamless Pipe", "ERW / Welded Pipe", "Instrumentation Tube", "Heat Exchanger Tube", "Capillary Tube"],
    sizeRange: "1/8\" NB to 36\" NB (OD: 6.0mm to 914.4mm)",
    wallThickness: "Sch 5S, Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS (0.5mm to 45mm)",
    length: "Single Random (5-7m), Double Random (10-12m), Cut to Length up to 18 Meters",
    endConnections: "Plain End (PE), Beveled End (BE), Threaded / Screwed (NPT/BSP)",
    shortDescription: "High-integrity austenitic and heat-resistant stainless steel seamless and welded pipes for high-temperature and aggressive corrosive applications.",
    overview: "Supreme Metal & Alloys stocks and supplies an extensive inventory of stainless steel seamless and welded pipes and tubes conforming to ASTM A312, ASTM A213, and ASTM A269. Sourced from premier global mills and fully tested with eddy current, hydrostatic, and ultrasonic non-destructive examinations, our SS pipes provide superior pitting and crevice corrosion resistance across chemical processing, power generation, and offshore oil and gas facilities.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A312, ASTM A213, ASTM A269, ASTM A358, ASME B36.19M, ASME B36.10M" },
      { label: "Nominal Pipe Size (NPS)", value: "1/8\" NB to 36\" NB (Seamless up to 24\" NB, Welded up to 36\" NB)" },
      { label: "Outside Diameter (OD)", value: "6.0 mm to 914.4 mm" },
      { label: "Wall Thickness Schedules", value: "Sch 5S, Sch 10S, Sch 20, Sch 40S, Sch 80S, Sch 120, Sch 160, Sch XXS" },
      { label: "Manufacturing Methods", value: "Hot Extruded, Cold Drawn Seamless, Continuous TIG / Plasma Welded" },
      { label: "Surface Finish & Treatment", value: "Solution Annealed & Pickled, Bright Annealed (BA), 320 Grit Polished, Mirror Polished" },
      { label: "Pipe End Conditions", value: "Plain End (Square Cut), Beveled End (37.5° ANSI B16.25), Threaded NPT / BSPT" },
      { label: "Quality Testing & MTC", value: "100% Radiography / Eddy Current, Hydrostatic Tested up to 300 Bar, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A312 / A312M - Seamless, Welded, and Heavily Cold Worked Austenitic Stainless Steel Pipes",
      "ASTM A213 / A213M - Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes",
      "ASTM A269 - Seamless and Welded Austenitic Stainless Steel Tubing for General Service",
      "ASME B36.19M / B36.10M - Stainless Steel and Welded/Seamless Wrought Steel Pipe Dimensions",
      "EN 10216-5 / DIN 17456 - Seamless Stainless Steel Tubes for Pressure Purposes"
    ],
    applications: [
      "Chemical, petrochemical, and pharmaceutical process fluid transfer",
      "Offshore oil and gas platforms, subsea flowlines, and refinery piping networks",
      "High-pressure boiler, condenser, and shell-and-tube heat exchanger tubing",
      "Food, beverage, and dairy sanitary fluid transport systems",
      "Nuclear power generation and desalination plant piping",
      "High-purity semiconductor and cryogenic gas delivery lines"
    ],
    technicalDetails: {
      manufacturingType: "Seamless Cold Drawn / Welded Automatic TIG",
      pressureRating: "Tested up to 350 Bar per ASTM A530",
      tolerance: "Per ASTM A530 / ASTM A999 Standard Permissible Variations",
      certifications: "EN 10204 Type 3.1 & 3.2 Mill Test Certificates, NACE MR0175 / ISO 15156"
    }
  },
  {
    id: "pipe-carbon-steel",
    slug: "pipes-tubes-carbon-steel",
    name: "Carbon Steel Pipes & Tubes",
    title: "Carbon Steel Pipes & Tubes",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: carbonPipesImg,
    heroImage: carbonPipesImg,
    grades: ["ASTM A106 Gr. B / C", "ASTM A53 Gr. B", "API 5L Gr. B / X42 / X52 / X60 / X65 / X70", "ASTM A333 Gr. 6 (Low Temp)"],
    forms: ["Heavy-Wall Seamless Pipe", "ERW High-Frequency Welded", "LSAW Longitudinal Submerged Arc", "HSAW / Spiral Welded"],
    sizeRange: "1/4\" NB to 48\" NB (OD: 13.7mm to 1219.2mm)",
    wallThickness: "Sch 20, Sch 30, Sch 40, Sch STD, Sch 80, Sch XS, Sch 120, Sch 160, Sch XXS (up to 65mm)",
    length: "Single Random (5-7m), Double Random (10-12.5m), Custom Spool Lengths",
    endConnections: "Beveled End for Welding, Plain Square Cut, Threaded & Coupled",
    shortDescription: "High-yield heavy-duty seamless and ERW/LSAW carbon steel line pipes engineered for high-pressure hydrocarbons, steam generation, and industrial infrastructure.",
    overview: "Supreme Metal & Alloys is a premier supplier and stockist of heavy-wall seamless and welded carbon steel pipes conforming to ASTM A106 Grade B, ASTM A53, and API 5L line pipe standards. Engineered for severe steam, hydrocarbon, and structural loading, our carbon steel pipes undergo rigorous hydrostatic, Charpy V-notch impact, and ultrasonic testing to ensure uncompromising reliability in high-pressure and low-temperature services.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A106 Gr. B/C, ASTM A53 Gr. B, API 5L PSL1/PSL2, ASTM A333 Gr. 6, ASME B36.10M" },
      { label: "Nominal Pipe Size (NPS)", value: "1/4\" NB to 48\" NB (Seamless 1/4\"-24\", ERW/LSAW 16\"-48\")" },
      { label: "Outside Diameter (OD)", value: "13.7 mm to 1219.2 mm" },
      { label: "Wall Thickness Schedules", value: "Sch 10, Sch 20, Sch 40, Sch STD, Sch 80, Sch XS, Sch 120, Sch 160, Sch XXS" },
      { label: "Manufacturing Processes", value: "Hot Rolled Seamless, Cold Drawn Seamless, High-Frequency ERW, LSAW Double Submerged Arc" },
      { label: "Surface Protection & Coating", value: "Black Varnish, Anti-Rust Oil, 3LPE (Three Layer Polyethylene), Fusion Bonded Epoxy (FBE), Hot Dip Galvanized" },
      { label: "End Finishes", value: "Beveled End (30°-35° with root face), Plain End, Threaded with API Thread Protectors" },
      { label: "Quality Testing & MTC", value: "100% Hydrostatic, Ultrasonic / Eddy Current, Tensile & Impact Tested, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A106 / A106M - Seamless Carbon Steel Pipe for High-Temperature Service",
      "ASTM A53 / A53M - Pipe, Steel, Black and Hot-Dipped, Zinc-Coated, Welded and Seamless",
      "API Specification 5L - Line Pipe for Oil and Natural Gas Transport (PSL 1 and PSL 2)",
      "ASTM A333 / A333M - Seamless and Welded Steel Pipe for Low-Temperature Service",
      "ASME B36.10M - Welded and Seamless Wrought Steel Pipe Dimensions"
    ],
    applications: [
      "High-pressure crude oil, refined petroleum, and natural gas transmission lines",
      "Thermal power plant steam piping, feed-water loops, and superheater manifolds",
      "Refinery cracking units, hydrotreaters, and petrochemical transfer piping",
      "Heavy industrial hydraulic systems, pressure vessels, and structural columns",
      "District heating, high-temperature water circulation, and fire protection networks",
      "Low-temperature cryogenic piping down to -45°C (ASTM A333 Gr. 6)"
    ],
    technicalDetails: {
      manufacturingType: "Hot Finished Seamless / Electric Resistance Welded",
      pressureRating: "High-pressure ratings up to 400 Bar compliant with ASME B31.3",
      tolerance: "Permissible OD variations: ±0.79mm to ±1.59% per API 5L / ASTM A530",
      certifications: "EN 10204 3.1 Mill Test Certificate, HIC & SSCC Tested, NACE MR0175 Compliant"
    }
  },
  {
    id: "pipe-alloy-steel",
    slug: "pipes-tubes-alloy-steel",
    name: "Alloy Steel Pipes & Tubes",
    title: "Alloy Steel Pipes & Tubes",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: alloySteelPipesImg,
    heroImage: alloySteelPipesImg,
    grades: ["ASTM A335 P11", "ASTM A335 P22", "ASTM A335 P91 (Type 1 & 2)", "ASTM A335 P5", "ASTM A335 P9", "ASTM A213 T11 / T22 / T91"],
    forms: ["Heavy-Wall Seamless Pipe", "Superheater & Boiler Tube", "Reheater Tube", "Main Steam Header Pipe"],
    sizeRange: "1/2\" NB to 24\" NB (OD: 21.3mm to 610.0mm)",
    wallThickness: "Sch 40 to Sch XXS, Custom Heavy-Wall up to 75mm",
    length: "Single Random, Double Random, Cut to Length up to 14.5 Meters",
    endConnections: "Beveled Ends with Machined J-Bevel / Compound Bevel, Plain Ends",
    shortDescription: "Chromium-Molybdenum creep-resistant seamless alloy steel pipes engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines.",
    overview: "Supreme Metal & Alloys specializes in stocking and supplying ASTM A335 high-pressure Chromium-Molybdenum alloy steel pipes, specifically grades P11, P22, and P91. Formulated with precise chromium, molybdenum, vanadium, and niobium alloying additions, our alloy steel pipes deliver elevated yield strength, outstanding creep-rupture resistance, and microstructural stability at temperatures exceeding 600°C in thermal power stations and petrochemical cracking plants.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A335 / ASME SA335 (P11, P22, P5, P9, P91), ASTM A213 (T11, T22, T91), ASME B36.10M" },
      { label: "Nominal Pipe Size (NPS)", value: "1/2\" NB to 24\" NB Seamless" },
      { label: "Outside Diameter (OD)", value: "21.3 mm to 610.0 mm" },
      { label: "Wall Thickness Range", value: "Sch 40, Sch 80, Sch 120, Sch 160, Sch XXS (2.77mm to 75.0mm)" },
      { label: "Heat Treatment Conditions", value: "Full Annealed, Isothermally Annealed, Normalized & Tempered (N+T per ASTM A335)" },
      { label: "Surface Finish & Protection", value: "Shot Blasted, Bare & Oiled, Black Primer Rust Preventative" },
      { label: "End Preparations", value: "Beveled Ends per ASME B16.25, Compound Narrow-Gap Bevel for heavy walls" },
      { label: "Non-Destructive Testing", value: "100% Ultrasonic Testing (UT), Magnetic Particle Examination, Hardness Testing (HBW)" }
    ],
    standards: [
      "ASTM A335 / ASME SA335 - Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A213 / ASME SA213 - Seamless Ferritic and Austenitic Alloy Boiler, Superheater Tubes",
      "ASME Boiler and Pressure Vessel Code (BPVC) Section I & Section VIII",
      "EN 10216-2 - Seamless Steel Tubes for Pressure Purposes (16Mo3, 13CrMo4-5, 10CrMo9-10)"
    ],
    applications: [
      "Supercritical and ultra-supercritical coal and gas thermal power generation",
      "Main steam lines, hot reheat piping, and boiler economizer banks",
      "Heat Recovery Steam Generators (HRSG) and combined-cycle plants",
      "Petroleum refinery catalytic reforming and hydrocracking reaction loops",
      "High-temperature hydrogen service and synthesis gas piping",
      "Industrial fired heaters, furnaces, and reformer tubing"
    ],
    technicalDetails: {
      manufacturingType: "Hot Extruded & Cold Finished Seamless",
      creepResistance: "Creep-rupture strength verified per ASTM E139 at 550°C-650°C",
      hardnessLimits: "P91: 196 to 265 HBW (20 to 28 HRC) strict compliance",
      certifications: "IBR (Indian Boiler Regulations) Form III-A / III-C Certified, EN 10204 3.1 & 3.2"
    }
  },
  {
    id: "pipe-nickel-alloy",
    slug: "pipes-tubes-nickel-alloy",
    name: "Nickel Alloy Pipes & Tubes",
    title: "Nickel Alloy Pipes & Tubes",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: nickelPipesImg,
    heroImage: nickelPipesImg,
    grades: ["Inconel 625 (UNS N06625)", "Inconel 600 (UNS N06600)", "Incoloy 825 (UNS N08825)", "Monel 400 (UNS N04400)", "Hastelloy C276 (UNS N10276)", "Nickel 200 / 201 (UNS N02200 / N02201)"],
    forms: ["Seamless High-Pressure Pipe", "Welded Heavy-Wall Pipe", "Heat Exchanger & Instrumentation Tubing"],
    sizeRange: "1/4\" NB to 16\" NB (OD: 6.35mm to 406.4mm)",
    wallThickness: "Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS (0.89mm to 28.0mm)",
    length: "Standard Random Lengths (5-7m) and Custom Precision Spools",
    endConnections: "Plain Ends, Beveled Ends, Threaded NPT",
    shortDescription: "Ultra-corrosion-resistant nickel-chromium-molybdenum seamless pipes engineered for extreme chemical, acid-handling, and sour oilfield environments.",
    overview: "Supreme Metal & Alloys stocks high-performance Nickel Alloy seamless and welded pipes manufactured from Inconel, Monel, Hastelloy, and commercially pure Nickel. Formulated to resist pitting, crevice corrosion, and stress corrosion cracking in severe media including hot wet chlorine gas, hydrochloric acid, hydrofluoric acid, and boiling sulfuric acid, these alloys maintain mechanical integrity under cryogenic and extreme thermodynamic service.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B161 (Nickel 200), ASTM B167 (Inconel 600/625), ASTM B423 (Incoloy 825), ASTM B622 (Hastelloy), ASTM B165 (Monel 400)" },
      { label: "Nominal Pipe Size (NPS)", value: "1/4\" NB to 16\" NB Seamless and Welded" },
      { label: "Outside Diameter (OD)", value: "6.35 mm to 406.4 mm" },
      { label: "Wall Thickness Range", value: "0.89 mm to 28.0 mm (Sch 5S to Sch XXS)" },
      { label: "Manufacturing Types", value: "Cold Drawn Seamless, Cold Pilgered, Solution Annealed Welded" },
      { label: "Finish Options", value: "Bright Annealed, Solution Annealed & Pickled, Mechanically Polished" },
      { label: "Quality Verifications", value: "100% PMI (Positive Material Identification), Hydrostatic, Ultrasonic, Eddy Current" }
    ],
    standards: [
      "ASTM B622 - Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube (Hastelloy C276/C22)",
      "ASTM B167 - Nickel-Chromium-Iron Alloys (UNS N06600, N06601, N06625) Seamless Pipe and Tube",
      "ASTM B423 - Nickel-Iron-Chromium-Molybdenum-Copper Alloy (UNS N08825) Seamless Pipe and Tube",
      "ASTM B165 - Nickel-Copper Alloy (UNS N04400) Seamless Pipe and Tube",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials for H2S-containing Environments"
    ],
    applications: [
      "Sour gas production wells and deepwater subsea manifold piping containing H2S and CO2",
      "Chemical reactors handling acetic acid, sulfuric acid, and wet chlorine gas",
      "Pollution control flue gas desulfurization (FGD) scrubbers and duct liners",
      "Marine propeller shaft sleeves, seawater piping, and brine distillation systems",
      "Nuclear reactor steam generators, control rod drive housings, and waste vitrification",
      "Aerospace rocket engine fuel lines and high-temperature thrust reversers"
    ],
    technicalDetails: {
      manufacturingType: "Cold Pilgered Seamless / Solution Annealed",
      pittingResistance: "PREN > 45 for Inconel 625 & Hastelloy C276",
      temperatureRange: "Cryogenic (-196°C) up to 1095°C continuous",
      certifications: "EN 10204 3.1 & 3.2 Mill Test Certificates with Complete Chemical & Mechanical Analysis"
    }
  },
  {
    id: "pipe-high-alloy",
    slug: "pipes-tubes-high-alloy",
    name: "High Alloy Pipes & Tubes",
    title: "High Alloy Pipes & Tubes",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: highAlloyPipesImg,
    heroImage: highAlloyPipesImg,
    grades: ["Alloy 20 (UNS N08020)", "Sanicro 28 (UNS N08028)", "904L (UNS N08904)", "AL-6XN (UNS N08367)", "254 SMO (UNS S31254)"],
    forms: ["Seamless High-Pressure Pipe", "Welded Process Pipe", "Heat Exchanger U-Tubes"],
    sizeRange: "1/4\" NB to 20\" NB (OD: 10.3mm to 508.0mm)",
    wallThickness: "Sch 10S, Sch 40S, Sch 80S, Sch 160 (1.24mm to 30.0mm)",
    length: "Single Random, Double Random, Cut to Length up to 12 Meters",
    endConnections: "Plain Ends, Beveled Ends for Orbital Welding",
    shortDescription: "Specialized high-alloy super-austenitic and nickel-iron-chromium pipes engineered for hot sulfuric acid, phosphoric acid, and aggressive halide services.",
    overview: "Supreme Metal & Alloys stocks specialized High Alloy pipes engineered to bridge the performance and cost gap between standard stainless steels and high-nickel alloys. Featuring Carpenter 20 (Alloy 20), Sanicro 28, and 6% Moly alloys (254 SMO / AL-6XN), these materials exhibit exceptional resistance to general corrosion, pitting, and stress-corrosion cracking in hot sulfuric acid, phosphoric acid production, and marine desalination scrubbers.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B729 (Alloy 20), ASTM A312 (904L, 254 SMO), ASTM B677 (Sanicro 28), ASME SB729" },
      { label: "Nominal Pipe Size (NPS)", value: "1/4\" NB to 20\" NB Seamless and Welded" },
      { label: "Outside Diameter (OD)", value: "10.3 mm to 508.0 mm" },
      { label: "Wall Thickness Schedules", value: "Sch 5S, Sch 10S, Sch 40S, Sch 80S, Sch 160 (1.24mm to 30.0mm)" },
      { label: "Manufacturing Processes", value: "Cold Drawn Seamless, Cold Reduced, Continuous Automatic TIG Welded" },
      { label: "Thermal Conditioning", value: "Solution Annealed at 1100°C–1150°C and Rapidly Quenched in Water" },
      { label: "Surface Finishes", value: "Pickled & Passivated, Bright Annealed, Polished Internal Bore (Ra < 0.8µm on request)" },
      { label: "Quality & Testing", value: "Intergranular Corrosion Tested (ASTM A262 Practice B/C), Hydrostatic Tested, EN 10204 3.1" }
    ],
    standards: [
      "ASTM B729 - Seamless UNS N08020, UNS N08026, and UNS N08024 Nickel-Alloy Pipe and Tube",
      "ASTM A312 / A312M - Seamless, Welded Austenitic Stainless Steel Pipes (904L, 254 SMO)",
      "ASTM B677 - UNS N08904, UNS N08925, and UNS N08926 Seamless Pipe and Tube",
      "ASME B36.19M - Stainless Steel Pipe Dimensions"
    ],
    applications: [
      "Sulfuric acid pickling tanks, dilution coolers, and processing piping (Alloy 20)",
      "Wet-process phosphoric acid evaporators and fertilizer production networks",
      "Seawater reverse osmosis (SWRO) desalination high-pressure headers (254 SMO)",
      "Bleaching plants in pulp and paper manufacturing handling chlorine dioxide",
      "Flue gas desulfurization (FGD) absorber towers and mist eliminator piping",
      "Pharmaceutical synthesis reactors and bulk active ingredient transfer lines"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn Seamless / Welded Cold Worked",
      prenRating: "PREN 34 to 45 (high resistance to chloride pitting)",
      acidResistance: "Withstands hot sulfuric acid up to 40% concentration at boiling points",
      certifications: "EN 10204 3.1 Certified, ASTM A262 Practice B Intergranular Corrosion Qualified"
    }
  },
  {
    id: "pipe-duplex",
    slug: "pipes-tubes-duplex",
    name: "Duplex Steel Pipes & Tubes",
    title: "Duplex Steel Pipes & Tubes",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: duplexPipesImg,
    heroImage: duplexPipesImg,
    grades: ["UNS S31803 (F51 / 1.4462)", "UNS S32205 (2205 / F60)"],
    forms: ["Seamless High-Pressure Pipe", "Welded Large-Diameter Pipe", "Subsea Flowline Tube"],
    sizeRange: "1/2\" NB to 24\" NB (OD: 21.3mm to 610.0mm)",
    wallThickness: "Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS (2.11mm to 40.0mm)",
    length: "Single Random (5-7m), Double Random (10-12m), Custom Spool Lengths up to 18m",
    endConnections: "Beveled Ends (ASME B16.25), Plain Ends, Grooved Ends",
    shortDescription: "High-strength dual-phase austenitic-ferritic seamless and welded pipes providing exceptional resistance to chloride stress corrosion cracking.",
    overview: "Supreme Metal & Alloys stocks prime Duplex 2205 (UNS S31803 / UNS S32205) seamless and welded pipes engineered to provide twice the design yield strength of standard austenitic grades such as 316L. Characterized by an optimized 50/50 ferrite-austenite microstructural balance, our duplex pipes offer outstanding resistance to chloride pitting, crevice attack, and stress corrosion cracking in high-salinity and marine environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A790 / ASME SA790, ASTM A928 (Welded with filler), ASTM A789 (Tubes), ASME B36.19M" },
      { label: "Nominal Pipe Size (NPS)", value: "1/2\" NB to 24\" NB (Seamless 1/2\"-16\", Welded 8\"-24\")" },
      { label: "Outside Diameter (OD)", value: "21.3 mm to 610.0 mm" },
      { label: "Wall Thickness Range", value: "Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS (2.11mm to 40.0mm)" },
      { label: "Phase Balance Control", value: "Ferrite Content: 40% to 60% strictly controlled via E562 metallographic examination" },
      { label: "Thermal Processing", value: "Solution Annealed at 1020°C–1080°C followed by rapid water quenching" },
      { label: "Surface Finish", value: "Pickled & Passivated (White Pickled), Machined Bore on request" },
      { label: "Testing Protocols", value: "100% Radiography / UT, Hydrostatic Test, ASTM G48 Method A Pitting Test at 25°C" }
    ],
    standards: [
      "ASTM A790 / ASME SA790 - Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
      "ASTM A789 / ASME SA789 - Seamless and Welded Ferritic/Austenitic Stainless Steel Tubing for General Service",
      "ASTM A928 / A928M - Ferritic/Austenitic (Duplex) Stainless Steel Pipe Electric Fusion Welded with Addition of Filler Metal",
      "NORSOK M-630 / M-650 - Material Data Sheets for Piping (MDS D41 / D45)",
      "NACE MR0175 / ISO 15156-3 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "Offshore oil and gas production platforms, topside manifolds, and subsea tie-backs",
      "Chemical cargo tanks, chemical tankers, and maritime product carriers",
      "Seawater desalination high-pressure reverse osmosis piping systems",
      "Oil and gas sour gas processing facilities and gas sweetening columns",
      "Pulp and paper digesters, blow tanks, and black liquor evaporators",
      "Flue gas cleaning and wastewater treatment injection piping"
    ],
    technicalDetails: {
      manufacturingType: "Hot Extruded Seamless / Automatic Plasma Welded",
      yieldStrength: "Minimum Yield Strength: 450 MPa (over 2x of SS 316L)",
      prenRating: "PREN ≥ 35 (Pitting Resistance Equivalent Number)",
      certifications: "EN 10204 3.1 & 3.2, NORSOK MDS D41/D45 Qualified, NACE MR0175 Compliant"
    }
  },
  {
    id: "pipe-super-duplex",
    slug: "pipes-tubes-super-duplex",
    name: "Super Duplex Steel Pipes & Tubes",
    title: "Super Duplex Steel Pipes & Tubes",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: superDuplexPipesImg,
    heroImage: superDuplexPipesImg,
    grades: ["UNS S32750 (2507 / F53 / 1.4410)", "UNS S32760 (Zeron 100 / F55 / 1.4501)"],
    forms: ["Heavy-Wall Seamless Pipe", "Welded Subsea Line Pipe", "High-Pressure Hydraulic Tubing"],
    sizeRange: "1/2\" NB to 24\" NB (OD: 21.3mm to 610.0mm)",
    wallThickness: "Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS (2.77mm to 45.0mm)",
    length: "Single Random, Double Random, Cut to Length up to 15 Meters",
    endConnections: "Beveled Ends for GTAW / GMAW Welding, Plain Ends",
    shortDescription: "Ultra-high performance 25% chromium super duplex seamless pipes designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service.",
    overview: "Supreme Metal & Alloys stocks high-performance Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) seamless and welded pipes. With 25% chromium, 4% molybdenum, and 0.28% nitrogen, super duplex steels provide a minimum Pitting Resistance Equivalent Number (PREN) of 42. They withstand extreme mechanical loads and prevent stress-corrosion cracking in boiling chloride solutions, sour gas wells, and deepwater marine pipelines.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A790 / ASME SA790, ASTM A928, ASTM A789, NORSOK MDS D51 / D55, ASME B36.19M" },
      { label: "Nominal Pipe Size (NPS)", value: "1/2\" NB to 24\" NB Seamless and Welded" },
      { label: "Outside Diameter (OD)", value: "21.3 mm to 610.0 mm" },
      { label: "Wall Thickness Schedules", value: "Sch 10S, Sch 40S, Sch 80S, Sch 160, Sch XXS (up to 45.0mm)" },
      { label: "Phase Equilibrium", value: "Ferrite Content: 35% to 55% verified by point counting per ASTM E562" },
      { label: "Corrosion Testing", value: "ASTM G48 Method A Ferric Chloride Pitting Test qualified at 50°C (zero weight loss / pitting)" },
      { label: "Impact Properties", value: "Charpy V-Notch impact tested at -46°C (minimum 80 Joules average)" },
      { label: "Quality Verifications", value: "100% PMI, 100% Ultrasonic & Radiographic Inspection, EN 10204 3.1 / 3.2" }
    ],
    standards: [
      "ASTM A790 / ASME SA790 - Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
      "ASTM A928 / A928M - Ferritic/Austenitic (Duplex) Stainless Steel Pipe Electric Fusion Welded",
      "NORSOK M-630 / M-650 - Material Data Sheets MDS D51 (Seamless) and MDS D55 (Welded)",
      "ISO 15156-3 / NACE MR0175 - Materials for use in H2S-containing environments in oil and gas",
      "DNV-GL Offshore Standards for Subsea Pipeline Systems"
    ],
    applications: [
      "Deepwater subsea risers, flowlines, Christmas tree manifolds, and umbilical tubes",
      "Offshore fire-water deluge networks and seawater cooling systems",
      "High-pressure reverse osmosis desalination seawater feed manifolds",
      "High-salinity geothermal power brine reinjection wells and steam lines",
      "Petrochemical plants handling organic acids and chlorinated hydrocarbons",
      "Flue gas scrubbers and sour crude production separator units"
    ],
    technicalDetails: {
      manufacturingType: "Cold Pilgered Seamless / Plasma Keyhole Welded",
      yieldStrength: "Minimum Yield Strength: 550 MPa",
      prenRating: "PREN ≥ 42 (calculated as %Cr + 3.3%Mo + 16%N)",
      certifications: "NORSOK M-650 Rev 4 Qualified, EN 10204 Type 3.2 Third-Party Inspection (Lloyds / DNV)"
    }
  },
  {
    id: "pipe-titanium",
    slug: "pipes-tubes-titanium",
    name: "Titanium Pipes & Tubes",
    title: "Titanium Pipes & Tubes",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: titaniumPipesImg,
    heroImage: titaniumPipesImg,
    grades: ["Grade 1 (UNS R50250)", "Grade 2 (UNS R50400)", "Grade 5 / Ti-6Al-4V (UNS R56400)", "Grade 7 (UNS R52400 / Ti-0.15Pd)", "Grade 12 (UNS R53400)"],
    forms: ["Seamless Precision Pipe", "Condenser & Heat Exchanger Tube", "Welded Large-Diameter Pipe"],
    sizeRange: "1/4\" NB to 12\" NB (OD: 6.0mm to 323.85mm)",
    wallThickness: "Sch 5S, Sch 10S, Sch 40S, Sch 80S (0.5mm to 18.0mm)",
    length: "Standard 6 Meter Lengths and Custom Cut-to-Size Tubes up to 15 Meters",
    endConnections: "Plain Ends for Orbital Welding, Beveled Ends",
    shortDescription: "Ultra-lightweight, high-strength titanium seamless and welded pipes with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides.",
    overview: "Supreme Metal & Alloys is an authorized supplier of commercially pure and alloyed titanium pipes and heat exchanger tubes conforming to ASTM B861, ASTM B862, and ASTM B338. Featuring an extraordinary strength-to-weight ratio and a spontaneously forming, self-healing rutile titanium dioxide (TiO2) passive layer, our titanium pipes are completely immune to seawater crevice attack, pitting, and microbiologically influenced corrosion (MIC).",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B861 (Seamless Pipe), ASTM B862 (Welded Pipe), ASTM B338 (Heat Exchanger Tubes), ASME SB861" },
      { label: "Nominal Pipe Size (NPS)", value: "1/4\" NB to 12\" NB Seamless and Welded" },
      { label: "Outside Diameter (OD)", value: "6.0 mm to 323.85 mm" },
      { label: "Wall Thickness Range", value: "0.5 mm to 18.0 mm (Sch 5S, Sch 10S, Sch 40S, Sch 80S)" },
      { label: "Manufacturing Processes", value: "Vacuum Cold Rolled Seamless, Automatic Inert Gas Shielded TIG Welded" },
      { label: "Surface Conditioning", value: "Vacuum Annealed, Pickled, Mirror Polished External/Internal" },
      { label: "Mechanical & Physical Tests", value: "100% Eddy Current / Ultrasonic, Pneumatic / Hydrostatic Test, Flattening & Flaring" },
      { label: "Quality Documentation", value: "EN 10204 3.1 Mill Test Certificate with Gas Content Analysis (H, O, N, C)" }
    ],
    standards: [
      "ASTM B861 - Standard Specification for Titanium and Titanium Alloy Seamless Pipe",
      "ASTM B862 - Standard Specification for Titanium and Titanium Alloy Welded Pipe",
      "ASTM B338 - Seamless and Welded Titanium and Titanium Alloy Tubes for Condensers",
      "ASME Boiler and Pressure Vessel Code Section II Part B (SB-861 / SB-338)",
      "NACE MR0175 / ISO 15156 Compliant for Sour Service"
    ],
    applications: [
      "Seawater cooling systems on offshore oil production platforms and naval vessels",
      "Chlor-alkali electrolytic cells and wet chlorine gas handling headers",
      "Thermal desalination plants (MSF & MED) condenser and evaporator tubing",
      "Aerospace hydraulic fluid lines, environmental control, and bleed air ducting",
      "Chemical process reactors handling nitric acid, chromic acid, and organic acids",
      "Exhaust gas cleaning marine scrubbers and power plant cooling towers"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled Seamless / Cleanroom TIG Welded",
      density: "4.51 g/cm³ (approx. 45% lighter than steel)",
      corrosionResistance: "Immune to chloride pitting and crevice corrosion up to 130°C",
      certifications: "EN 10204 3.1 Certified, ISO 9001:2015, Aerocert Certified"
    }
  },
  {
    id: "pipe-exotic-alloy",
    slug: "pipes-tubes-exotic-alloy",
    name: "Exotic Alloy Pipes & Tubes",
    title: "Exotic Alloy Pipes & Tubes",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Pipes & Tubes",
    categorySlug: "pipes-tubes",
    division: "SUPPLIER",
    image: exoticAlloyPipesImg,
    heroImage: exoticAlloyPipesImg,
    grades: ["Zirconium 702 (UNS R60702)", "Zirconium 705 (UNS R60705)", "Tantalum (UNS R05200)", "Niobium / Columbo (UNS R04200)", "Inconel 718 (UNS N07718)"],
    forms: ["Seamless Ultra-Precision Pipe", "Nuclear-Grade Cladding Tube", "High-Pressure Reactor Tube"],
    sizeRange: "1/4\" NB to 8\" NB (OD: 6.0mm to 219.1mm)",
    wallThickness: "Sch 10S, Sch 40S, Sch 80S (0.89mm to 15.0mm)",
    length: "Cut to Length up to 6 Meters, Custom Spools",
    endConnections: "Plain Square Ends, Precision Beveled Ends",
    shortDescription: "Specialized refractory and reactive metal seamless pipes engineered for high-temperature nuclear reactors, nitric acid manufacturing, and severe chemical synthesis.",
    overview: "Supreme Metal & Alloys provides critical-service Exotic Alloy pipes and tubes in Zirconium 702/705, Tantalum, and Niobium conforming to ASTM B523, ASTM B658, and ASTM B521. Possessing extraordinarily low thermal neutron absorption cross-sections, exceptional thermal conductivity, and total resistance to highly corrosive oxidizing and reducing acids, our exotic pipes represent the pinnacle of metallurgical reliability in nuclear and chemical engineering.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B523 (Zirconium), ASTM B658 (Seamless Zirconium Pipe), ASTM B521 (Tantalum Tubes), ASME SB658" },
      { label: "Nominal Pipe Size (NPS)", value: "1/4\" NB to 8\" NB Seamless" },
      { label: "Outside Diameter (OD)", value: "6.0 mm to 219.1 mm" },
      { label: "Wall Thickness Range", value: "0.89 mm to 15.0 mm (Sch 10S to Sch 80S)" },
      { label: "Manufacturing Process", value: "Vacuum Cold Pilgered Seamless with Inert Atmosphere Inter-pass Annealing" },
      { label: "Purity & Surface State", value: "High-Purity Inert Gas Annealed, Chemically Etched & Passivated" },
      { label: "Special Testing", value: "Helium Mass Spectrometer Leak Tested, Ultrasonic 100%, Interstitial Element Analysis" }
    ],
    standards: [
      "ASTM B658 / B658M - Standard Specification for Seamless and Welded Zirconium and Zirconium Alloy Pipe",
      "ASTM B523 / B523M - Seamless and Welded Zirconium and Zirconium Alloy Tubes",
      "ASTM B521 - Tantalum and Tantalum Alloy Seamless and Welded Tubes",
      "ASME Section III (Nuclear Facility Components) Compliant"
    ],
    applications: [
      "Nuclear power reactor core components and nuclear fuel rod cladding tubes",
      "Commercial urea, nitric acid, and acetic acid manufacturing plants",
      "Corrosive hydrochloric acid reboilers, evaporators, and bayonet heaters",
      "Specialty pharmaceuticals and fine chemical continuous synthesis loops",
      "Semiconductor high-temperature furnace gas injection nozzles",
      "Superconducting magnets, aerospace propulsion, and high-energy physics"
    ],
    technicalDetails: {
      manufacturingType: "Cold Pilgered Vacuum Annealed Seamless",
      nuclearGrade: "Ultra-low thermal neutron capture cross section (< 0.18 barns for Zr)",
      acidResistance: "Impervious to boiling hydrochloric acid at all concentrations",
      certifications: "EN 10204 3.1 & 3.2 Mill Test Certificates with Full Radiographic and Ultrasonic Verification"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Pipes & Tubes
export const getPipesProductBySlug = (slug) => {
  return SUPPLIER_PIPES_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
};

export const getPipesProductsByMaterial = (materialSlug) => {
  if (!materialSlug || materialSlug === "all") return SUPPLIER_PIPES_PRODUCTS;
  return SUPPLIER_PIPES_PRODUCTS.filter((p) => p.materialSlug === materialSlug);
};

export const getRelatedPipesProducts = (currentSlug) => {
  return SUPPLIER_PIPES_PRODUCTS.filter((p) => p.slug !== currentSlug && p.id !== currentSlug);
};
