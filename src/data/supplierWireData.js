// Isolated Supplier Data Layer — Wires
// Source of truth: src/assets/All Products/Supplier division/Wires/
// Category: Wires (division: "SUPPLIER")

import ssWireImg from "../assets/All Products/Supplier division/Wires/stainless steel.png";
import carbonWireImg from "../assets/All Products/Supplier division/Wires/carbon.png";
import alloySteelWireImg from "../assets/All Products/Supplier division/Wires/alloy steel.png";
import nickelWireImg from "../assets/All Products/Supplier division/Wires/Nikle.png";
import highAlloyWireImg from "../assets/All Products/Supplier division/Wires/high alloy.png";
import duplexWireImg from "../assets/All Products/Supplier division/Wires/duplex.png";
import superDuplexWireImg from "../assets/All Products/Supplier division/Wires/super duplex.png";
import titaniumWireImg from "../assets/All Products/Supplier division/Wires/titainium.png";
import exoticAlloyWireImg from "../assets/All Products/Supplier division/Wires/Alloys.png";

export {
  ssWireImg,
  carbonWireImg,
  alloySteelWireImg,
  nickelWireImg,
  highAlloyWireImg,
  duplexWireImg,
  superDuplexWireImg,
  titaniumWireImg,
  exoticAlloyWireImg
};

// Exact 9 Materials verified in the Wires folder (guaranteeing strict isolation)
export const SUPPLIER_WIRE_MATERIALS = [
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

export const SUPPLIER_WIRE_PRODUCTS = [
  {
    id: "wire-stainless-steel",
    slug: "wires-stainless-steel",
    name: "Stainless Steel Industrial & Spring Wires",
    title: "Stainless Steel Industrial & Spring Wires",
    material: "Stainless Steel",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: ssWireImg,
    heroImage: ssWireImg,
    grades: ["AISI 304", "AISI 304L", "AISI 316", "AISI 316L", "AISI 302", "AISI 310", "AISI 321", "AISI 430"],
    forms: ["Spring Wire", "Cold Heading Wire", "TIG / MIG Welding Wire", "Tie Wire", "Fine Weaving Wire", "Rope Wire"],
    sizeRange: "0.10 mm to 16.0 mm (0.004\" to 0.625\" Diameter)",
    wallThickness: "Solid Precision Drawn Wire Cross-Section",
    length: "Coils (25kg - 500kg), DIN Spools (DIN 125, 200, 250, 355), Cut Lengths up to 3m",
    endConnections: "Clean Cut / Layer Wound Spooled / Coiled",
    shortDescription: "High-tensile stainless steel spring wire, cold heading wire, and welding filler wire for precision springs, mesh weaving, and automated welding operations.",
    overview: "Supreme Metal & Alloys stocks and supplies precision-drawn stainless steel industrial wire conforming to ASTM A313, ASTM A580, and AWS A5.9. Engineered with uniform tensile strength, tight diameter tolerances (ISO h8/h9), and exceptional surface finish, our SS wire serves high-cycle springs, architectural wire ropes, medical instruments, and automated MIG/TIG welding operations.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A313 (Spring), ASTM A580, ASTM A493 (Cold Heading), AWS A5.9, EN 10270-3" },
      { label: "Diameter Range", value: "0.10 mm to 16.0 mm (Ultra-fine 0.05 mm available upon request)" },
      { label: "Tensile Strength Range", value: "Soft Annealed (550-750 N/mm²) to Spring Hard (1400-2100 N/mm²)" },
      { label: "Surface Finish Options", value: "Bright Annealed (BA), Matte / Dull Finish, Soap Coated, Nickel Coated" },
      { label: "Packaging Types", value: "Plastic Spools (DIN 125, 200, 250, 355), Metal Baskets, Catch Weight Coils" },
      { label: "Diameter Tolerances", value: "Per ISO h8, h9, h11 precision drawing standards" },
      { label: "Temper Conditions", value: "Annealed, 1/4 Hard, 1/2 Hard, Full Hard, Spring Temper" },
      { label: "Quality Testing & MTC", value: "100% PMI, Tensile Test, Wrap Test, Torsion Test, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A313 / A313M - Stainless Steel Spring Wire",
      "ASTM A580 / A580M - Stainless Steel Wire for General Use",
      "ASTM A493 - Stainless and Heat-Resisting Steel for Cold Heading",
      "AWS A5.9 / ASME SFA 5.9 - Bare Stainless Steel Welding Electrodes and Rods",
      "EN 10270-3 - Steel Wire for Mechanical Springs (Stainless)",
      "DIN 17224 - Stainless Spring Wire and Strip"
    ],
    applications: [
      "Precision compression, extension, and torsion spring manufacturing",
      "High-speed cold heading of screws, bolts, and industrial pins",
      "Automated TIG, MIG, and submerged arc welding filler metals",
      "Woven wire mesh screens and conveyor belt manufacturing",
      "Aerospace control cables and marine wire rigging",
      "Food and pharmaceutical kitchenware and surgical instrumentation"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn with Multi-Pass Diamond Dies & In-Line Annealing",
      pressureRating: "Tensile Strength up to 2100 N/mm²",
      tolerance: "ISO h9 (±0.015mm on fine diameters)",
      certifications: "EN 10204 3.1 Mill Test Certificate, Tensile & Wrap Test Reports"
    }
  },
  {
    id: "wire-carbon-steel",
    slug: "wires-carbon-steel",
    name: "Carbon Steel Spring & Binding Wires",
    title: "Carbon Steel Spring & Binding Wires",
    material: "Carbon Steel",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: carbonWireImg,
    heroImage: carbonWireImg,
    grades: ["ASTM A228 (Music Wire)", "ASTM A227", "Grade I / II / III Spring Wire", "High Carbon C60-C80", "Annealed GI"],
    forms: ["High Carbon Spring Wire", "Music / Piano Wire", "Galvanized Core Wire", "Cold Heading Wire", "Black Annealed Binding Wire"],
    sizeRange: "0.20 mm to 14.0 mm (0.008\" to 0.550\" Diameter)",
    wallThickness: "Solid Core",
    length: "Catchweight Coils (50kg - 1000kg), Coreless Coils, Wooden Spools",
    endConnections: "Clean Cut / Coiled / Spooled",
    shortDescription: "High-carbon piano and music spring wire conforming to ASTM A228 with ultra-consistent tensile strength and cyclic fatigue life.",
    overview: "Supreme Metal & Alloys stocks high carbon spring steel wire engineered for extreme cyclic fatigue resistance. Conforming to ASTM A228, ASTM A227, and EN 10270-1, our high tensile carbon wire is manufactured with lead-patented heat treatment for uniform metallurgical structure, zero decarburization, and smooth winding performance.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A228, ASTM A227, EN 10270-1 (Patented), IS 4454 Part 1" },
      { label: "Diameter Range", value: "0.20 mm to 14.0 mm" },
      { label: "Tensile Strength", value: "1400 N/mm² to 2500 N/mm² (Diameter and grade dependent)" },
      { label: "Coating Options", value: "Black Phosphated, Hot Dip Galvanized (HDG), Bright Drawn, Electro-Galvanized" },
      { label: "Packaging", value: "Catchweight Coils (25kg to 500kg), Metal Carriers, Spools" },
      { label: "Torsion & Wrap", value: "Guaranteed minimum 20-30 twists per 100d length without fracture" }
    ],
    standards: [
      "ASTM A228 - High-Carbon Steel Music Spring Quality Wire",
      "ASTM A227 - Steel Wire, Cold-Drawn for Mechanical Springs",
      "EN 10270-1 - Patented Cold Drawn Unalloyed Spring Steel Wire",
      "DIN 17223 - Carbon Steel Wire for Springs",
      "IS 4454 Part 1 - Steel Wires for Mechanical Springs"
    ],
    applications: [
      "Automotive engine valve springs and mechanical suspension components",
      "Mattress and industrial upholstery spring coils",
      "High-tensile wire rope strand cores and cable reinforcement",
      "Concrete reinforcement tie wire and industrial binding",
      "Precision measuring springs and precision wire forms"
    ],
    technicalDetails: {
      manufacturingType: "Lead Patented & Cold Drawn High Carbon Steel",
      pressureRating: "Ultimate Tensile Strength up to 2500 N/mm²",
      tolerance: "ASTM A228 Class A / B Tolerances",
      certifications: "EN 10204 3.1 MTC, Torsion & Reverse Bend Test Reports"
    }
  },
  {
    id: "wire-alloy-steel",
    slug: "wires-alloy-steel",
    name: "Alloy Steel High-Stress Wires",
    title: "Alloy Steel High-Stress Wires",
    material: "Alloy Steel",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: alloySteelWireImg,
    heroImage: alloySteelWireImg,
    grades: ["AISI 4140", "AISI 4340", "51CrV4 (SAE 6150)", "60SiCr7", "ASTM A401", "ASTM A322"],
    forms: ["Oil Tempered Spring Wire", "Cold Drawn Annealed Wire", "Cold Heading Quality (CHQ)", "Straight Cut Bars"],
    sizeRange: "0.50 mm to 16.0 mm Diameter",
    wallThickness: "Solid Cross-Section",
    length: "Continuous Coils (50kg - 500kg), Carrier Bundles",
    endConnections: "Square Cut / Coiled",
    shortDescription: "Silicon-chromium and chrome-vanadium alloy steel wire conforming to ASTM A401 for heavy-duty shock-loaded automotive and industrial springs.",
    overview: "Supreme Metal & Alloys supplies premium alloy steel wire in chrome-vanadium (51CrV4) and silicon-chromium (ASTM A401) chemistry. Specially engineered for dynamic, high-stress cyclic applications where resistance to sag and relaxation at elevated temperatures (up to 200°C) is mandatory.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A401, ASTM A322, EN 10089, DIN 17221, SAE J157" },
      { label: "Diameter Range", value: "0.50 mm to 16.0 mm" },
      { label: "Heat Treatment", value: "Oil Tempered (OT), Spheroidized Annealed (SA), Quenched & Tempered" },
      { label: "Tensile Strength", value: "1600 N/mm² to 2250 N/mm²" },
      { label: "Surface Quality", value: "Eddy-current tested, defect-free shaved / peeled rod base" },
      { label: "Operating Temperature", value: "Retains dynamic spring characteristics up to 200°C" }
    ],
    standards: [
      "ASTM A401 / A401M - Steel Wire, Chromium-Silicon Alloy Spring Quality",
      "ASTM A231 - Chromium-Vanadium Alloy Steel Spring Wire",
      "EN 10089 - Hot-Rolled Steels for Quenched and Tempered Springs",
      "DIN 17221 - Hot Rolled Steels for Springs; Technical Delivery Conditions"
    ],
    applications: [
      "High-performance internal combustion engine valve springs",
      "Automotive clutch damper springs and transmission lock rings",
      "Heavy construction equipment suspension coils and rock drills",
      "High-tensile specialty fasteners and critical aerospace pins"
    ],
    technicalDetails: {
      manufacturingType: "Continuous In-Line Oil Tempered & Induction Quenched",
      pressureRating: "Tensile Strength up to 2250 N/mm²",
      tolerance: "ISO h9 Precision Tolerance",
      certifications: "EN 10204 3.1 MTC, 100% Eddy Current Inspection"
    }
  },
  {
    id: "wire-nickel-alloy",
    slug: "wires-nickel-alloy",
    name: "Nickel Alloy High-Temperature Wires",
    title: "Nickel Alloy High-Temperature Wires",
    material: "Nickel Alloy",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: nickelWireImg,
    heroImage: nickelWireImg,
    grades: ["Inconel 600", "Inconel 625", "Inconel 718", "Monel 400", "Hastelloy C-276", "Nickel 200 / 201"],
    forms: ["High-Temp Spring Wire", "Electronic Resistance Wire", "Welding Filler Wire (ERNiCrMo-3)", "Lock Wire / Safety Wire"],
    sizeRange: "0.15 mm to 12.0 mm Diameter",
    wallThickness: "Solid Nickel Superalloy Core",
    length: "Precision Spools (5kg - 25kg), Catchweight Coils up to 200kg, 1000mm Cut Lengths",
    endConnections: "Clean Spooled / Layer Wound / Coiled",
    shortDescription: "Extreme-temperature, corrosion-resistant nickel superalloy wire for downhole safety springs, aero engine locking wire, and severe chemical welding.",
    overview: "Supreme Metal & Alloys provides specialized nickel alloy wire in Inconel 625, Inconel 718, and Hastelloy C-276 conforming to AMS 5679 and AWS A5.14. Engineered for continuous service at temperatures from cryogenic up to 1000°C without loss of mechanical spring temper, relaxation resistance, or stress-corrosion cracking immunity.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B166, ASTM B446, AMS 5679, AMS 5837, AWS A5.14, NACE MR0175" },
      { label: "Diameter Range", value: "0.15 mm to 12.0 mm" },
      { label: "Heat Resistance", value: "Oxidation and creep resistant up to 1050°C (Inconel 625/718)" },
      { label: "Surface Finish", value: "Bright Pickled, Centerless Ground, Diamond Drawn Shiny, Soap Coated" },
      { label: "Packaging", value: "Precision Layer Wound Spools (MIG) & 1000mm Straight Cut Rods (TIG)" },
      { label: "Corrosion Immunity", value: "Exceptional resistance to sour gas (H2S), chlorides, and severe acids" }
    ],
    standards: [
      "ASTM B166 - Nickel-Chromium-Iron Alloys Rod, Bar, and Wire",
      "ASTM B446 - Nickel-Chromium-Molybdenum-Columbium Alloy Wire",
      "AWS A5.14 / ASME SFA-5.14 - Nickel and Nickel-Alloy Bare Welding Rods",
      "AMS 5837 - Inconel 625 Welding Wire",
      "AMS 5679 - Inconel 600 Wire",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries"
    ],
    applications: [
      "Subsea sour gas valve actuators and downhole safety valve springs",
      "Aerospace turbine engine lockwire, ignition leads, and harness retaining",
      "Severe acid chemical process welding, overlay cladding, and bellows",
      "High-temperature furnace conveyor belts and industrial heating elements"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Induction Melted (VIM) + Vacuum Arc Remelted (VAR) Cold Drawn",
      pressureRating: "Tensile Strength up to 1800 N/mm²",
      tolerance: "AMS Class 1 Precision Tolerance (±0.010mm)",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with Full Chemical Analysis"
    }
  },
  {
    id: "wire-high-alloy",
    slug: "wires-high-alloy",
    name: "High Alloy Corrosion-Resistant Wires",
    title: "High Alloy Corrosion-Resistant Wires",
    material: "High Alloy",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: highAlloyWireImg,
    heroImage: highAlloyWireImg,
    grades: ["Alloy 20 (UNS N08020)", "Incoloy 800 / 800H", "Incoloy 825 (UNS N08825)", "Alloy 904L", "SMO 254 (1.4547)"],
    forms: ["Fine Mesh Weaving Wire", "Spring Temper Wire", "Welding Filler Wire", "Fastener Cold Heading Wire"],
    sizeRange: "0.20 mm to 12.0 mm Diameter",
    wallThickness: "Solid Alloy Core",
    length: "Continuous Spools (5kg - 30kg), Catchweight Coils",
    endConnections: "Clean Cut / Layer Wound / Coiled",
    shortDescription: "Specialized high-nickel and 6-moly alloy wire engineered for sulfuric acid, phosphoric acid, and aggressive marine scrubber environments.",
    overview: "Supreme Metal & Alloys stocks high alloy industrial wires in Alloy 20, Alloy 825, and Alloy 904L. Designed specifically for chemical processing, flue-gas desulfurization (FGD), and fertilizer plants where standard stainless steels suffer severe pitting or stress corrosion cracking in hot sulfuric and halogenated media.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B425, ASTM B691, ASTM A580 (N08904 / N08020), AWS A5.14" },
      { label: "Diameter Range", value: "0.20 mm to 12.0 mm" },
      { label: "Acid Resistance", value: "Superb resistance to sulfuric, phosphoric, and nitric acid mixtures" },
      { label: "Surface Finish", value: "Bright Annealed, Matte Dull, Diamond Die Drawn Smooth" },
      { label: "PREN Value", value: "PREN 32 to 43 (High pitting resistance in marine environments)" }
    ],
    standards: [
      "ASTM B425 - Ni-Fe-Cr-Mo-Cu Alloy Rod, Bar, and Wire",
      "ASTM B691 - Iron-Nickel-Chromium-Molybdenum Alloy Rod, Bar, and Wire",
      "ASTM A580 - Stainless Steel and Special Alloy Wire",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Sulfuric acid and phosphoric acid processing valve springs",
      "Marine exhaust gas cleaning system (scrubber) wire mesh demisters",
      "Nuclear fuel reprocessing equipment tie wire",
      "Flue-gas desulfurization (FGD) plant chemical filter screens"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn with Inert Gas Intermediate Annealing",
      pressureRating: "Tensile Strength up to 1500 N/mm²",
      tolerance: "ISO h9 / h10 Precision Tolerance",
      certifications: "EN 10204 3.1 Mill Test Certificate, Microstructure & PMI Reports"
    }
  },
  {
    id: "wire-duplex",
    slug: "wires-duplex",
    name: "Duplex Steel High-Tensile Wires",
    title: "Duplex Steel High-Tensile Wires",
    material: "Duplex",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: duplexWireImg,
    heroImage: duplexWireImg,
    grades: ["UNS S31803", "UNS S32205 (EN 1.4462)", "F51 Duplex", "2205 Duplex"],
    forms: ["High-Tensile Rigging Wire", "Spring Wire", "Wireline / Slickline", "Welding Filler Wire (ER2209)"],
    sizeRange: "0.50 mm to 14.0 mm Diameter",
    wallThickness: "Solid Core",
    length: "Continuous Coils up to 500kg, Wooden Drums, Welded Wire Spools",
    endConnections: "Square Cut / Coiled / Spooled",
    shortDescription: "2205 austenitic-ferritic duplex wire combining twice the mechanical yield strength of standard austenitic grades with high chloride SCC resistance.",
    overview: "Supreme Metal & Alloys supplies 2205 duplex stainless steel wire featuring a balanced 50/50 austenitic-ferritic microstructure. Delivers twice the mechanical yield strength of 316L wire alongside outstanding resistance to chloride-induced stress corrosion cracking, making it the premier choice for marine rigging and oilfield slicklines.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / A479, ASTM A580 (S31803 / S32205), AWS A5.9 ER2209, EN 10088-3" },
      { label: "Diameter Range", value: "0.50 mm to 14.0 mm" },
      { label: "Yield Strength (0.2%)", value: "≥ 450 MPa (Annealed) to ≥ 1200 MPa (Cold Drawn Spring)" },
      { label: "Tensile Strength", value: "950 N/mm² to 1750 N/mm²" },
      { label: "Phase Balance", value: "40% - 60% Ferrite / Austenite controlled via optical metallography" },
      { label: "PREN Rating", value: "≥ 35 (Resistant to seawater pitting & crevice corrosion)" }
    ],
    standards: [
      "ASTM A580 / A580M - Stainless Steel Wire (UNS S32205)",
      "AWS A5.9 - Bare Stainless Steel Welding Electrodes (ER2209)",
      "EN 10088-3 - Technical Delivery Conditions for Semi-Finished Products and Bars",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries"
    ],
    applications: [
      "Offshore oil & gas downhole logging slicklines and wirelines",
      "Marine sailboat standing rigging and architectural structural cables",
      "High-pressure seawater reverse osmosis (SWRO) desalination mesh",
      "Automated robotic welding filler wire for duplex piping spools"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn with In-Line Ferrite-Scope Verification",
      pressureRating: "Tensile Strength up to 1750 N/mm²",
      tolerance: "ISO h9 Precision Tolerance",
      certifications: "EN 10204 3.1 MTC, Microstructure & Ferrite Content Verification"
    }
  },
  {
    id: "wire-super-duplex",
    slug: "wires-super-duplex",
    name: "Super Duplex Steel Marine & Offshore Wires",
    title: "Super Duplex Steel Marine & Offshore Wires",
    material: "Super Duplex",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: superDuplexWireImg,
    heroImage: superDuplexWireImg,
    grades: ["UNS S32750 (2507, 1.4410)", "UNS S32760 (Zeron 100, 1.4501)", "F53", "F55"],
    forms: ["High-Strength Slickline", "Subsea Armoring Wire", "Spring Wire", "Welding Wire (ER2594)"],
    sizeRange: "0.50 mm to 12.0 mm Diameter",
    wallThickness: "Solid Core",
    length: "Continuous Joint-Free Spools up to 30,000 ft (9,000m) for Wireline Service",
    endConnections: "Continuous Spooled / Layer Wound",
    shortDescription: "Ultra-high strength super duplex wire (PREN ≥ 42) for severe subsea well servicing slicklines, mooring ropes, and sour gas well springs.",
    overview: "Supreme Metal & Alloys stocks 2507 and Zeron 100 super duplex wire conforming to NORSOK M-630. Engineered specifically for harsh marine and subsea environments, this wire exhibits extreme resistance to pitting, crevice corrosion, and erosion-corrosion with PREN ≥ 42.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A580 (S32750 / S32760), AWS A5.9 (ER2594), NORSOK M-630 MDS D57" },
      { label: "Diameter Range", value: "0.50 mm to 12.0 mm" },
      { label: "PREN Value", value: "≥ 42 (%Cr + 3.3%Mo + 16%N)" },
      { label: "Tensile Strength", value: "1200 N/mm² to 2000 N/mm² (Cold drawn spring/slickline condition)" },
      { label: "Continuous Lengths", value: "Joint-free continuous lengths up to 9,000 meters for downhole slickline" }
    ],
    standards: [
      "ASTM A580 - Stainless Steel Wire (UNS S32750 / S32760)",
      "AWS A5.9 / ASME SFA 5.9 - ER2594 Bare Welding Wire",
      "NORSOK M-630 MDS D57 - Super Duplex Stainless Steel Wire",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Deepwater subsea oil well slicklines and measurement wirelines",
      "Offshore mooring lines, umbilical cable armoring, and wire ropes",
      "Severe chlorination plant filters and subsea valve springs",
      "Desalination high-pressure pump internals and strainers"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn with Continuous Laser Diameter Gauging",
      pressureRating: "Tensile Strength up to 2000 N/mm²",
      tolerance: "ISO h9 Precision Tolerance",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate, Corrosion Test ASTM G48 Method A"
    }
  },
  {
    id: "wire-titanium",
    slug: "wires-titanium",
    name: "Titanium Grade 2 & 5 Precision Wires",
    title: "Titanium Grade 2 & 5 Precision Wires",
    material: "Titanium",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: titaniumWireImg,
    heroImage: titaniumWireImg,
    grades: ["Titanium Grade 1 (CP4)", "Titanium Grade 2 (CP3)", "Titanium Grade 5 (Ti-6Al-4V)", "Grade 7 (Ti-Pd)", "Grade 12"],
    forms: ["TIG Welding Rods", "MIG Spool Wire", "Medical Fixation Wire", "Anodizing Rack Wire", "Spring Wire"],
    sizeRange: "0.20 mm to 8.0 mm Diameter",
    wallThickness: "Solid Titanium Core",
    length: "1000mm Straight Cut Lengths (TIG), Plastic Spools (5kg - 15kg), Coils",
    endConnections: "Clean Cut / Layer Wound / Straight Rods",
    shortDescription: "Commercially pure and Ti-6Al-4V titanium wire offering supreme strength-to-weight ratio, total seawater immunity, and biocompatibility.",
    overview: "Supreme Metal & Alloys provides precision-drawn titanium wire in CP Grades (Gr 1, 2) and Alpha-Beta Alloy Grade 5 (Ti-6Al-4V) conforming to ASTM B863 and AWS A5.16. Delivers total immunity to seawater pitting and microbiologically influenced corrosion, ultra-high strength-to-weight ratio, and complete biocompatibility for surgical and chemical processing applications.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B863, AWS A5.16 (ERTi-2, ERTi-5), AMS 4951, AMS 4954, ASTM F136" },
      { label: "Diameter Range", value: "0.20 mm to 8.0 mm" },
      { label: "Density", value: "4.51 g/cm³ (45% lighter than steel with equivalent strength)" },
      { label: "Surface Finish", value: "Chemically Pickled, Centerless Ground, Ultrasonically Cleaned" },
      { label: "Biocompatibility", value: "Fully compliant for surgical implants and biomedical fixation" }
    ],
    standards: [
      "ASTM B863 - Titanium and Titanium Alloy Wire",
      "AWS A5.16 / ASME SFA 5.16 - Titanium and Titanium Alloy Welding Electrodes and Rods",
      "AMS 4951 - Titanium Wire, Commercially Pure",
      "AMS 4954 - Titanium Alloy Wire, 6Al - 4V",
      "ASTM F136 - Wrought Ti-6Al-4V ELI for Surgical Implant Applications"
    ],
    applications: [
      "Aerospace turbine fasteners, locking wires, and structural clips",
      "Medical bone fixation wires, dental arches, and surgical staples",
      "Electrochemical anodizing racks, electroplating jigs, and MMO anode wire",
      "Seawater desalination and marine chlorination plant filter mesh",
      "TIG and MIG robotic welding of titanium pressure vessels"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Arc Remelted (VAR) Cold Drawn & Vacuum Annealed",
      pressureRating: "Tensile Strength: Gr 2 (450 MPa), Gr 5 (1000-1250 MPa)",
      tolerance: "AMS Class 1 Precision Tolerance",
      certifications: "EN 10204 3.1 MTC, Chemical & Mechanical Certification"
    }
  },
  {
    id: "wire-exotic-alloy",
    slug: "wires-exotic-alloy",
    name: "Exotic Alloy Specialized Wires",
    title: "Exotic Alloy Specialized Wires",
    material: "Exotic Alloy",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Wires",
    categorySlug: "wires",
    division: "SUPPLIER",
    image: exoticAlloyWireImg,
    heroImage: exoticAlloyWireImg,
    grades: ["Tantalum", "Zirconium 702", "Niobium", "MP35N (AMS 5844)", "Elgiloy (Co-Cr-Ni)", "Hastelloy B-2 / B-3"],
    forms: ["Spring Wire", "Medical Core Wire", "Electronic Filament Wire", "Vacuum Furnace Wire"],
    sizeRange: "0.10 mm to 8.0 mm Diameter",
    wallThickness: "Solid Core",
    length: "Precision Spools (1kg - 10kg), Vacuum Sealed Coils",
    endConnections: "Clean Spooled / Coiled",
    shortDescription: "Specialized exotic refractory metal and cobalt superalloy wires (MP35N, Tantalum, Zirconium) for extreme chemical and biomedical applications.",
    overview: "Supreme Metal & Alloys stocks high-purity exotic metal wires in Tantalum, Zirconium, MP35N, and Niobium. Engineered for critical environments exceeding the performance thresholds of nickel and titanium alloys, such as boiling hydrochloric acid, ultra-high-vacuum heating filaments, and long-term human implant lead wires.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B365 (Tantalum), ASTM B550 (Zirconium), AMS 5844 (MP35N), AMS 5845" },
      { label: "Diameter Range", value: "0.10 mm to 8.0 mm" },
      { label: "Melting Point", value: "Tantalum: 3017°C, Niobium: 2477°C, Zirconium: 1855°C" },
      { label: "Chemical Resistance", value: "Immune to hot concentrated HCl, aqua regia, and wet chlorine" },
      { label: "Biocompatibility", value: "Non-thrombogenic, non-toxic, total physiological compatibility" }
    ],
    standards: [
      "ASTM B365 - Tantalum and Tantalum Alloy Rod and Wire",
      "ASTM B550 - Zirconium and Zirconium Alloy Bar and Wire",
      "AMS 5844 - Cobalt-Nickel-Chromium-Molybdenum Alloy Wire (MP35N)",
      "ASTM F562 - Wrought MP35N for Surgical Implants"
    ],
    applications: [
      "Cardiac pacemaker leads and deep-brain stimulation wire probes",
      "Severe hot hydrochloric acid processing and tantalum heat exchanger springs",
      "Nuclear reactor fuel bundle spacer grids and control instrumentation",
      "High-vacuum electronic tube filaments and evaporation sources"
    ],
    technicalDetails: {
      manufacturingType: "Electron Beam Melted (EBM) / VIM-VAR Precision Cold Drawn",
      pressureRating: "MP35N Tensile Strength up to 2050 N/mm²",
      tolerance: "Ultra-Precision ±0.005mm Tolerance",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with Vacuum Purity Reports"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Wires
export const getWireProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  return (
    SUPPLIER_WIRE_PRODUCTS.find(
      (p) =>
        p.slug === clean ||
        p.id === clean ||
        p.slug === `wires-${clean}` ||
        clean === `wires-${p.materialSlug}` ||
        clean === `wire-${p.materialSlug}` ||
        clean === p.materialSlug
    ) || null
  );
};

export const getWireProductsByMaterial = (matSlug = "") => {
  const clean = String(matSlug).toLowerCase().trim();
  if (clean === "all") return SUPPLIER_WIRE_PRODUCTS;
  return SUPPLIER_WIRE_PRODUCTS.filter((p) => p.materialSlug === clean);
};

export const getRelatedWireProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim();
  return SUPPLIER_WIRE_PRODUCTS.filter(
    (p) => p.slug !== clean && p.id !== clean && !clean.includes(p.materialSlug)
  ).slice(0, 4);
};
