// Isolated Wire Mesh Product Data Source
// Exact 9 Wire Mesh Material Categories strictly matching the verified asset files

import ssWireMeshImg from "../assets/All Products/Wire Mesh/Stainless steel.png";
import carbonWireMeshImg from "../assets/All Products/Wire Mesh/Carbon.png";
import alloySteelWireMeshImg from "../assets/All Products/Wire Mesh/alloy steel.png";
import nickelWireMeshImg from "../assets/All Products/Wire Mesh/Nikle Alloys.png";
import highAlloyWireMeshImg from "../assets/All Products/Wire Mesh/High Alloy.png";
import duplexWireMeshImg from "../assets/All Products/Wire Mesh/Duplex.png";
import superDuplexWireMeshImg from "../assets/All Products/Wire Mesh/Super Duplex.png";
import titaniumWireMeshImg from "../assets/All Products/Wire Mesh/titanium.png";
import exoticWireMeshImg from "../assets/All Products/Wire Mesh/Exotic.png";

export {
  ssWireMeshImg,
  carbonWireMeshImg,
  alloySteelWireMeshImg,
  nickelWireMeshImg,
  highAlloyWireMeshImg,
  duplexWireMeshImg,
  superDuplexWireMeshImg,
  titaniumWireMeshImg,
  exoticWireMeshImg
};

export const WIRE_MESH_MATERIALS = [
  {
    id: "wire-mesh-stainless-steel",
    slug: "stainless-steel",
    routeSlug: "wire-mesh/stainless-steel",
    materialId: "stainless-steel",
    name: "Stainless Steel Wire Mesh",
    materialName: "Stainless Steel",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: ssWireMeshImg,
    heroImage: ssWireMeshImg,
    grades: ["SS 304", "SS 304L", "SS 316", "SS 316L", "SS 310S", "SS 321", "SS 904L"],
    weaveTypes: ["Plain Weave", "Twill Weave", "Plain Dutch Weave", "Reverse Dutch Weave", "Welded Mesh"],
    meshRange: "1 Mesh to 500 Mesh (Aperture: 0.025mm to 25.0mm)",
    wireDiameters: "0.025 mm to 3.0 mm (SWG 10 to SWG 48)",
    rollDimensions: "Width: 1000mm, 1220mm, 1500mm, 2000mm | Length: 30m standard rolls or custom pre-cut slit discs",
    shortDescription: "High-precision austenitic stainless steel woven and welded wire mesh engineered for critical chemical filtration, liquid-solid separation, and sanitary screening.",
    overview: "Supreme Metal & Alloys manufactures industrial-grade Stainless Steel Wire Mesh in AISI 304, 304L, 316, and 316L. Produced on state-of-the-art rapier looms with tight aperture tolerances, our SS wire mesh exhibits superior tensile strength, exceptional resistance to atmospheric and chemical corrosion, and clean hygienic surface finishes conforming to international sanitary and industrial standards.",
    applications: [
      "Chemical and petrochemical process filtration & catalyst bed support",
      "Pharmaceutical fluid bed dryer (FBD) screens and sifter sieves",
      "Food and beverage sanitary sieving, juice clarification, and milk straining",
      "Water desalination and intake strainer baskets",
      "Oil & gas mud screens and shale shaker panels",
      "Architectural facade infill and security mesh panels"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "1 Mesh up to 500 Mesh per linear inch" },
      { label: "Aperture (Opening) Size", value: "25.0 mm down to 25 Microns (0.025 mm)" },
      { label: "Standard Wire Diameter", value: "0.025 mm (0.0010\") to 3.0 mm (0.118\")" },
      { label: "Weave Patterns", value: "Square Plain Weave, Twill Weave, Dutch Filter Weave, Welded Wire Mesh" },
      { label: "Standard Roll Widths", value: "1000mm (1.0m), 1220mm (4ft), 1500mm (5ft), 2000mm (2.0m)" },
      { label: "Roll Length", value: "30 Meters (100 ft) standard; custom cut-to-length sheets available" },
      { label: "Edge Finish", value: "Closed Selvedge Edge / Clean Sheared Cut Edge" }
    ],
    standards: [
      "ASTM E2016 - Standard Specification for Industrial Woven Wire Cloth",
      "ISO 9044 - Industrial Woven Wire Cloth - Technical Requirements and Tests",
      "DIN 4189 / DIN ISO 4783",
      "ASTM A580 / A580M - Stainless Steel Wire",
      "FDA / 3-A Sanitary Standards Compliant for Food Contact"
    ],
    technicalDetails: {
      openAreaPercentage: "28% to 76% depending on mesh count & wire gauge",
      wireDiameterTolerance: "± 0.005mm to ± 0.02mm per ISO 9044 Grade 1",
      apertureTolerance: "High-precision aperture uniformity tested per ASTM E2016",
      qualityCertificates: "EN 10204 Type 3.1 Mill Test Certificate, PMI Verified"
    }
  },
  {
    id: "wire-mesh-carbon-steel",
    slug: "carbon-steel",
    routeSlug: "wire-mesh/carbon-steel",
    materialId: "carbon-steel",
    name: "Carbon Steel Wire Mesh",
    materialName: "Carbon Steel",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: carbonWireMeshImg,
    heroImage: carbonWireMeshImg,
    grades: ["High Carbon Spring Steel (65Mn / C70)", "Medium Carbon Steel", "Low Carbon Mild Steel (MS)", "Galvanized Carbon Steel"],
    weaveTypes: ["Double Crimped", "Lock Crimped", "Flat Top Crimped", "Heavy Duty Welded Wire Screen"],
    meshRange: "2 Mesh to 40 Mesh (Aperture: 1.0mm to 100mm)",
    wireDiameters: "1.0 mm to 8.0 mm heavy gauge wire",
    rollDimensions: "Rolls: 1.0m to 2.0m width; Pre-formed vibrating screen panels with metal clamping hooks",
    shortDescription: "Heavy-duty abrasion-resistant high-carbon steel woven crimped wire mesh screens engineered for aggregate quarry screening, mining ore classification, and heavy structural sieving.",
    overview: "Supreme Metal & Alloys delivers high-tensile carbon steel vibrating screen cloths and crimped mesh panels. Engineered specifically to withstand severe impact, extreme abrasive wear, and continuous high-frequency vibration in mining, coal preparation, quarry aggregate grading, and heavy infrastructure earthworks.",
    applications: [
      "Quarry aggregate crushing, grading, and screening plants",
      "Mining mineral ore processing and vibrating shaker decks",
      "Coal preparation plants and sizing screens",
      "Heavy industrial machine safety guards and perimeter fencing",
      "Construction foundation reinforcement and gabion structures",
      "Asphalt mix and road construction material grading"
    ],
    specifications: [
      { label: "Mesh Opening Range", value: "1.0 mm up to 100.0 mm square / rectangular slots" },
      { label: "Wire Gauge", value: "1.0 mm up to 8.0 mm (SWG 19 to SWG 0)" },
      { label: "Crimp Style", value: "Intermediate Crimped, Lock Crimped, Flat Top Crimped" },
      { label: "Tensile Strength", value: "High Carbon Spring Steel 800 - 1200 N/mm²" },
      { label: "Screen Edge Types", value: "Plain Sheared, 45°/60° Formed Metal Clamping Hooks (Shroud / Hemmed)" },
      { label: "Screen Sizes", value: "Standard Deck Sizes (e.g., 4ft x 8ft, 5ft x 10ft) & Rolls up to 2m wide" }
    ],
    standards: [
      "ISO 4783-1 / ISO 4783-2 - Industrial Wire Screens and Woven Wire Cloth",
      "DIN 4192 - Woven Wire Cloth for Screening Surfaces",
      "IS 2405 - Specification for Industrial Wire Cloth",
      "ASTM A510 / A510M - General Requirements for Wire Rods and Coarse Round Wire"
    ],
    technicalDetails: {
      openAreaPercentage: "45% to 80% optimized for maximum screening throughput",
      wireDiameterTolerance: "± 0.03mm to ± 0.08mm",
      wearResistance: "Exceptional fatigue life under dynamic cyclic vibration",
      qualityCertificates: "Hardness & Tensile Test Certification, EN 10204 3.1"
    }
  },
  {
    id: "wire-mesh-alloy-steel",
    slug: "alloy-steel",
    routeSlug: "wire-mesh/alloy-steel",
    materialId: "alloy-steel",
    name: "Alloy Steel Wire Mesh",
    materialName: "Alloy Steel",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: alloySteelWireMeshImg,
    heroImage: alloySteelWireMeshImg,
    grades: ["Chrome-Moly Alloy Steel", "42CrMo4", "ASTM A387 Gr 11 / Gr 22", "SAE 4140 / 4340 Alloy Wire"],
    weaveTypes: ["Heavy Duty Plain Weave", "Twill Weave", "Intermediate Crimp Mesh"],
    meshRange: "4 Mesh to 120 Mesh (Aperture: 0.125mm to 10.0mm)",
    wireDiameters: "0.5 mm to 5.0 mm",
    rollDimensions: "Width: 1000mm, 1200mm, 1500mm | Length: 15m - 30m rolls or cut-to-size panels",
    shortDescription: "Heat-treated wear-resistant alloy steel wire mesh engineered for elevated-temperature processing, heavy impact resistance, and specialized thermal industrial screening.",
    overview: "Manufactured from chromium-molybdenum and specialized alloy steels, this wire mesh delivers higher yield strength and elevated-temperature creep resistance than conventional carbon steels. Specially annealed or heat treated to withstand cyclic thermal shocks and aggressive mechanical abrasion.",
    applications: [
      "Thermal power plant flue gas and preheater screening systems",
      "Heat treatment furnace quenching trays and annealing baskets",
      "High-stress mining ball mill discharge screening",
      "Foundry shakeout screens and hot casting debris separators",
      "Refinery particulate cyclones and high-temp filter baffles"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "4 Mesh to 120 Mesh per linear inch" },
      { label: "Operating Temperature", value: "Up to 550°C (1022°F) continuous" },
      { label: "Wire Diameter", value: "0.5 mm to 5.0 mm" },
      { label: "Heat Treatment", value: "Quenched & Tempered / Normalized & Annealed" },
      { label: "Tensile Strength", value: "950 - 1350 MPa" },
      { label: "Roll Dimensions", value: "1.0m to 1.5m Width x 15m to 30m Length" }
    ],
    standards: [
      "ASTM A877 / A877M - Alloy Steel Spring Wire",
      "ISO 9044 Industrial Wire Cloth",
      "DIN EN 10083-3 - Steels for Quenching and Tempering",
      "EN 10204 3.1 Certified"
    ],
    technicalDetails: {
      openAreaPercentage: "35% to 68%",
      thermalStability: "Minimal thermal sag and grain coarsening at elevated temperatures",
      qualityCertificates: "Chemical Spectro Analysis, Tensile & Elongation Test Report, EN 10204 3.1"
    }
  },
  {
    id: "wire-mesh-nickel-alloy",
    slug: "nickel-alloy",
    routeSlug: "wire-mesh/nickel-alloy",
    materialId: "nickel-alloy",
    name: "Nickel Alloy Wire Mesh",
    materialName: "Nickel Alloy",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: nickelWireMeshImg,
    heroImage: nickelWireMeshImg,
    grades: ["Nickel 200 (UNS N02200)", "Nickel 201 (UNS N02201)", "Monel 400 (UNS N04400)", "Inconel 600 (UNS N06600)", "Inconel 625 (UNS N06625)", "Hastelloy C276 (UNS N10276)"],
    weaveTypes: ["Plain Square Weave", "Twill Weave", "Plain Dutch Weave", "Dutch Twill Filter Weave"],
    meshRange: "10 Mesh to 400 Mesh (Aperture: 0.038mm to 2.0mm)",
    wireDiameters: "0.03 mm to 1.5 mm ultra-fine to medium wire",
    rollDimensions: "Width: 1000mm, 1220mm | Length: 30m standard rolls or custom precision discs",
    shortDescription: "Ultra-corrosion-resistant pure Nickel 200, Monel 400, and Inconel wire mesh engineered for caustic alkali handling, marine seawater filtration, and chlorinated gas environments.",
    overview: "Supreme Metal & Alloys weaves premium high-nickel alloy wire meshes from certified melt heats of Nickel 200, Monel 400, and Inconel 600/625. Nickel wire mesh offers virtually complete resistance to caustic alkalis (sodium hydroxide, potassium hydroxide) up to boiling points, and resists dry fluorine and chlorine gas.",
    applications: [
      "Caustic soda (NaOH) evaporation, production, and chlor-alkali cell screening",
      "Marine seawater intake strainers, desalination filters, and offshore fuel demisters",
      "Synthetic fiber (viscose/rayon) spinneret filtration packs",
      "Hydrofluoric acid (HF) alkylation unit catalyst filters (Monel 400)",
      "Aerospace battery grids, fuel cell electrodes, and hydrogen electrolyzers",
      "Nuclear fuel processing and corrosive chemical vapor recovery"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "10 Mesh to 400 Mesh per linear inch" },
      { label: "Filter Rating", value: "Nominal filtration down to 5 Microns (in Dutch Twill)" },
      { label: "Wire Diameters", value: "0.030 mm to 1.50 mm" },
      { label: "Weave Patterns", value: "Square Plain Weave, Twill Weave, Dutch Twill Weave (DTW)" },
      { label: "Corrosion Resistance", value: "Outstanding in caustic alkalis, non-oxidizing acids, and seawater" },
      { label: "Max Operating Temp", value: "Nickel 200: up to 315°C (600°F); Inconel 600: up to 1100°C (2012°F)" }
    ],
    standards: [
      "ASTM B162 / B160 - Nickel Plate, Sheet, and Wire Specifications",
      "ASTM B164 - Monel Rod, Bar, and Wire Specifications",
      "ASTM B166 - Inconel Alloy Wire",
      "ISO 9044 / ASTM E2016",
      "NACE MR0175 / ISO 15156 Sour Service Compliant"
    ],
    technicalDetails: {
      openAreaPercentage: "30% to 62%",
      magneticProperties: "Ferromagnetic at room temperature (pure nickel grades)",
      qualityCertificates: "100% PMI Spectro Verified, EN 10204 3.1 & 3.2 TPI Certified"
    }
  },
  {
    id: "wire-mesh-high-alloy",
    slug: "high-alloy",
    routeSlug: "wire-mesh/high-alloy",
    materialId: "high-alloy",
    name: "High Alloy Wire Mesh",
    materialName: "High Alloy",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: highAlloyWireMeshImg,
    heroImage: highAlloyWireMeshImg,
    grades: ["Alloy 20 (UNS N08020 / 2.4660)", "254 SMO (UNS S31254 / 1.4547)", "AL-6XN (UNS N08367)", "Sanicro 28 (UNS N08928)"],
    weaveTypes: ["Plain Weave", "Twill Weave", "Plain Dutch Weave", "High-Flow Dutch Twill"],
    meshRange: "15 Mesh to 350 Mesh (Aperture: 0.045mm to 1.5mm)",
    wireDiameters: "0.04 mm to 1.2 mm",
    rollDimensions: "Width: 1000mm, 1220mm, 1500mm | Length: 30m rolls and custom laser-cut circular filter discs",
    shortDescription: "Super-austenitic 6-Moly and Alloy 20 wire mesh engineered specifically for hot sulfuric acid, phosphoric acid, and aggressive chloride pitting environments.",
    overview: "Supreme High Alloy Wire Mesh is woven from super-austenitic stainless steels containing elevated nickel, chromium, and molybdenum contents plus copper additions (Alloy 20 / 20Cb-3). These alloys resist boiling sulfuric acid up to 40% concentration and chloride-induced stress corrosion cracking far superior to standard SS 316L.",
    applications: [
      "Hot sulfuric acid pickling tanks, dilution coolers, and acid scrubbers",
      "Phosphoric acid concentration evaporators in fertilizer manufacturing",
      "Flue Gas Desulfurization (FGD) absorber mist eliminators and wash screens",
      "Bleaching plant washers and chlorine dioxide filtration in paper pulp mills",
      "Pharmaceutical organic acid synthesis reactors"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "15 Mesh to 350 Mesh per linear inch" },
      { label: "PREN (Pitting Resistance)", value: "PREN ≥ 42 (254 SMO / AL-6XN)" },
      { label: "Acid Resistance", value: "Immune to boiling H2SO4 up to 40%, resistant to hot chlorides" },
      { label: "Wire Diameters", value: "0.040 mm to 1.20 mm" },
      { label: "Weave Style", value: "Plain Weave, Twill Weave, Dutch Twill Weave" },
      { label: "Roll Dimensions", value: "1000mm & 1220mm Width x 30m Length" }
    ],
    standards: [
      "ASTM B472 / B473 - UNS N08020 Wire and Bar",
      "ASTM A580 - High Alloy Stainless Steel Wire",
      "ISO 9044 / ASTM E2016",
      "NACE MR0103 / MR0175 Compliant"
    ],
    technicalDetails: {
      openAreaPercentage: "32% to 65%",
      corrosionRate: "< 0.1 mm/year in aggressive chemical environments",
      qualityCertificates: "EN 10204 Type 3.1 MTC, Intergranular Corrosion Test per ASTM A262 Practice B"
    }
  },
  {
    id: "wire-mesh-duplex",
    slug: "duplex",
    routeSlug: "wire-mesh/duplex",
    materialId: "duplex",
    name: "Duplex Stainless Steel Wire Mesh",
    materialName: "Duplex",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: duplexWireMeshImg,
    heroImage: duplexWireMeshImg,
    grades: ["Duplex 2205 (UNS S31803 / S32205)", "DIN 1.4462", "SAF 2205"],
    weaveTypes: ["Plain Weave", "Twill Weave", "Dutch Weave", "Vibrating Screen Cloth"],
    meshRange: "8 Mesh to 300 Mesh (Aperture: 0.050mm to 2.5mm)",
    wireDiameters: "0.05 mm to 2.5 mm",
    rollDimensions: "Width: 1000mm, 1220mm, 1500mm | Length: 30m rolls or tailored tensioned shaker screens",
    shortDescription: "High-yield-strength 22% Cr Duplex 2205 wire mesh combining superior resistance to chloride stress corrosion cracking with twice the mechanical strength of SS 316L.",
    overview: "Supreme Duplex 2205 Wire Mesh features a balanced 50/50 austenitic-ferritic microstructure. It provides approximately double the yield strength of conventional 300-series stainless steels, enabling lighter-weight screen designs with enhanced fatigue life and high resistance to chloride pitting, crevice corrosion, and erosion-corrosion.",
    applications: [
      "Offshore oil platform seawater intake, filtration, and ballast water treatment",
      "Marine oil and gas shale shakers and drilling fluid mud recycling",
      "Desalination RO plant sand filter beds and cartridge screen supports",
      "Pulp & paper digester liquor screens and bleach washing drums",
      "Chemical tanker cargo tank vent flame arrestors and vacuum relief screens"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "8 Mesh to 300 Mesh per linear inch" },
      { label: "Yield Strength", value: "≥ 450 MPa (approx. double SS 316L)" },
      { label: "PREN Rating", value: "PREN 34 - 36 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Wire Diameters", value: "0.05 mm to 2.5 mm" },
      { label: "Operating Temperature", value: "-50°C to +300°C (-58°F to +572°F)" },
      { label: "Roll Dimensions", value: "1000mm, 1220mm, 1500mm Width x 30m Length" }
    ],
    standards: [
      "ASTM A276 / A479 - Duplex Stainless Steel Bars and Shapes (Wire Wire Rod)",
      "ASTM E2016 / ISO 9044",
      "EN 10088-3 Grade 1.4462",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    technicalDetails: {
      openAreaPercentage: "30% to 70%",
      ferriteContent: "40% - 60% balanced dual-phase microstructure",
      pittingCorrosionTest: "ASTM G48 Method A tested at 25°C",
      qualityCertificates: "EN 10204 3.1 MTC, Microstructure & Impact Certified"
    }
  },
  {
    id: "wire-mesh-super-duplex",
    slug: "super-duplex",
    routeSlug: "wire-mesh/super-duplex",
    materialId: "super-duplex",
    name: "Super Duplex Stainless Steel Wire Mesh",
    materialName: "Super Duplex",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: superDuplexWireMeshImg,
    heroImage: superDuplexWireMeshImg,
    grades: ["Super Duplex 2507 (UNS S32750 / 1.4410)", "Zeron 100 (UNS S32760 / 1.4501)"],
    weaveTypes: ["Square Plain Weave", "Twill Weave", "High-Flow Dutch Filter Weave"],
    meshRange: "10 Mesh to 325 Mesh (Aperture: 0.040mm to 2.0mm)",
    wireDiameters: "0.06 mm to 2.0 mm",
    rollDimensions: "Width: 1000mm, 1220mm | Length: 30m rolls and precision laser-cut filter segments",
    shortDescription: "Ultra-high performance 25% Cr Super Duplex 2507 wire mesh engineered for extreme offshore saline environments, subsea strainers, and severe sour service with PREN ≥ 43.",
    overview: "Supreme Super Duplex 2507 Wire Mesh offers the ultimate combination of high mechanical tensile strength and exceptional resistance to localized chloride pitting, crevice corrosion, and stress corrosion cracking in high-temperature brine, chlorinated seawater, and sour hydrocarbons.",
    applications: [
      "Subsea oil wellhead debris caps and deepwater intake strainers",
      "High-recovery Seawater Reverse Osmosis (SWRO) desalination high-pressure filters",
      "Marine exhaust gas scrubber particulate filter packs (IMO Tier III)",
      "Aggressive sour oil & gas separator vessels and demister pads",
      "Chemical process plants handling concentrated chlorinated solutions"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "10 Mesh to 325 Mesh per linear inch" },
      { label: "PREN Rating", value: "PREN ≥ 43 (Extreme Pitting Resistance in Seawater)" },
      { label: "Tensile Strength", value: "850 - 1100 MPa" },
      { label: "Wire Diameters", value: "0.060 mm to 2.0 mm" },
      { label: "Critical Pitting Temp (CPT)", value: "> 50°C (122°F) in 6% FeCl3" },
      { label: "Roll Dimensions", value: "1.0m and 1.22m Width x 30m Standard Length" }
    ],
    standards: [
      "ASTM A276 / A479 - Super Duplex Stainless Steel Wire",
      "EN 10088-3 Grade 1.4410",
      "ISO 9044 / ASTM E2016",
      "NORSOK M-630 / M-650 MDS D54 Compliant",
      "NACE MR0175 / ISO 15156"
    ],
    technicalDetails: {
      openAreaPercentage: "30% to 65%",
      criticalPittingTest: "ASTM G48 Method A tested @ 50°C with zero pitting",
      ferriteContent: "40% - 55% balanced phase ratio verified by Ferritescope",
      qualityCertificates: "EN 10204 Type 3.1 / 3.2 Dual Certified with TPI"
    }
  },
  {
    id: "wire-mesh-titanium",
    slug: "titanium",
    routeSlug: "wire-mesh/titanium",
    materialId: "titanium",
    name: "Titanium Wire Mesh",
    materialName: "Titanium",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: titaniumWireMeshImg,
    heroImage: titaniumWireMeshImg,
    grades: ["Titanium Grade 1 (Commercial Purity)", "Titanium Grade 2 (UNS R50400 / 3.7035)", "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)"],
    weaveTypes: ["Plain Square Weave", "Twill Weave"],
    meshRange: "10 Mesh to 200 Mesh (Aperture: 0.075mm to 2.0mm)",
    wireDiameters: "0.08 mm to 1.6 mm",
    rollDimensions: "Width: 1000mm, 1200mm | Length: 15m to 30m rolls and stamped circular anode discs",
    shortDescription: "Ultra-lightweight, bio-compatible, high-purity Titanium Grade 2 wire mesh offering complete immunity to wet chlorine gas, chlorites, hypochlorites, and ambient seawater.",
    overview: "Supreme Titanium Wire Mesh is woven from vacuum-annealed high-purity commercial titanium wire. Renowned for its exceptional strength-to-weight ratio, low density (4.51 g/cm³), and instantaneous self-healing titanium oxide passive film, it is completely immune to crevice corrosion in wet chlorine, seawater, and harsh oxidizing acids.",
    applications: [
      "Chlor-alkali electrolysis cells, membrane anode substrates, and cathode screens",
      "Electrochemical water treatment and sodium hypochlorite generators",
      "Seawater desalination multi-stage flash (MSF) evaporation demisters",
      "Aerospace lightweight fuel screening and acoustic suppression mesh",
      "Medical implants, titanium bone mesh, and pharmaceutical bio-reactors",
      "Marine oceanographic instruments and deep-sea sensor protective cages"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "10 Mesh to 200 Mesh per linear inch" },
      { label: "Purity", value: "≥ 99.2% Pure Titanium (Grade 2)" },
      { label: "Density", value: "4.51 g/cm³ (approx. 45% lighter than steel)" },
      { label: "Wire Diameters", value: "0.080 mm to 1.60 mm" },
      { label: "Wet Chlorine Resistance", value: "100% immune to wet chlorine and chlorine dioxide" },
      { label: "Roll Dimensions", value: "1000mm Width x 15m / 30m Length" }
    ],
    standards: [
      "ASTM B348 / B863 - Titanium and Titanium Alloy Wire",
      "ISO 9044 / ASTM E2016",
      "AMS 4951 / AMS 4954 Aerospace Specifications",
      "EN 10204 3.1 Inspection Certificate"
    ],
    technicalDetails: {
      openAreaPercentage: "34% to 70%",
      surfaceOxideFilm: "Passivated TiO2 layer providing permanent atmospheric & seawater immunity",
      qualityCertificates: "100% Titanium Chemical Melt Certificate, Tensile Test Report"
    }
  },
  {
    id: "wire-mesh-exotic-alloy",
    slug: "exotic-alloy",
    routeSlug: "wire-mesh/exotic-alloy",
    materialId: "exotic-alloy",
    name: "Exotic Alloy Wire Mesh",
    materialName: "Exotic Alloy",
    category: "Wire Mesh",
    categorySlug: "wire-mesh",
    division: "MANUFACTURER",
    image: exoticWireMeshImg,
    heroImage: exoticWireMeshImg,
    grades: ["Hastelloy C-22 (UNS N06022)", "Hastelloy C-276 (UNS N10276)", "Incoloy 825 (UNS N08825)", "Tantalum (UNS R05200)", "Zirconium 702 (UNS R60702)", "Inconel 718"],
    weaveTypes: ["Plain Weave", "Twill Weave", "Dutch Filter Weave", "Reverse Dutch Weave"],
    meshRange: "15 Mesh to 400 Mesh (Aperture: 0.030mm to 1.5mm)",
    wireDiameters: "0.04 mm to 1.2 mm",
    rollDimensions: "Width: 1000mm, 1200mm | Length: 10m to 30m rolls and precision laser-cut disc packs",
    shortDescription: "Ultra-high specialty Hastelloy C-22, Incoloy 825, Tantalum, and Zirconium wire mesh engineered for extreme mixed acid media, nuclear re-processing, and severe halide chemistry.",
    overview: "Supreme Exotic Alloy Wire Mesh represents the pinnacle of metallurgical screen engineering. Woven from elite nickel-chromium-molybdenum alloys (Hastelloy C-22/C-276) and reactive metals (Tantalum, Zirconium), these screens provide extraordinary resistance to mixed reducing and oxidizing acids, wet chlorine, formic and acetic acids, and severe pitting.",
    applications: [
      "Pharmaceutical batch reactors handling hydrochloric acid (HCl) and organic chlorides",
      "Precious metal catalyst recovery baskets in high-temperature reactors",
      "Nuclear waste vitrification, off-gas filtration, and radioactive fuel processing",
      "Specialty chemical plants handling wet chlorine, hypochlorite, and chlorine dioxide",
      "Geothermal steam turbine protection screens and high-temperature baffle seals",
      "Tantalum/Zirconium ultra-corrosive chemical filtration units"
    ],
    specifications: [
      { label: "Mesh Count Range", value: "15 Mesh to 400 Mesh per linear inch" },
      { label: "Available Alloys", value: "Hastelloy C-22 / C-276, Incoloy 825, Tantalum, Zirconium 702" },
      { label: "Max Operating Temp", value: "Up to 1000°C (1832°F) depending on alloy choice" },
      { label: "Wire Diameters", value: "0.040 mm to 1.20 mm" },
      { label: "Weave Patterns", value: "Plain Weave, Twill Weave, Dutch Twill Weave" },
      { label: "Roll Dimensions", value: "1000mm Width x 10m - 30m Length" }
    ],
    standards: [
      "ASTM B574 - Low-Carbon Nickel-Chromium-Molybdenum Alloy Wire",
      "ASTM B425 - Ni-Fe-Cr-Mo-Cu Alloy (Incoloy 825) Wire",
      "ASTM B365 - Tantalum and Tantalum Alloy Wire",
      "ASTM B550 - Zirconium and Zirconium Alloy Wire",
      "ISO 9044 / ASTM E2016",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    technicalDetails: {
      openAreaPercentage: "30% to 64%",
      acidImmunity: "Exceptional resistance to localized pitting, crevice corrosion, and stress cracking",
      qualityCertificates: "100% Positive Material Identification (PMI), EN 10204 Type 3.1 & 3.2 TPI Verified"
    }
  }
];

// Lookup helpers
export const getWireMeshBySlug = (slug) => {
  if (!slug) return WIRE_MESH_MATERIALS[0];
  const clean = slug.toLowerCase().replace(/^wire-mesh-/, "");
  return WIRE_MESH_MATERIALS.find(
    (m) => m.slug === clean || m.id === slug || m.slug === slug || m.materialId === clean
  ) || WIRE_MESH_MATERIALS[0];
};

// Strict Related Products within Wire Mesh only (No cross-category items)
export const getRelatedWireMesh = (currentSlug) => {
  const current = getWireMeshBySlug(currentSlug);
  return WIRE_MESH_MATERIALS.filter((m) => m.slug !== current.slug).slice(0, 3);
};
