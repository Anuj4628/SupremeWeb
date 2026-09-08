// Isolated Supplier Data Layer — Ring (Seamless Rolled Rings & Forged Backing Rings)
// Source of truth: src/assets/All Products/Supplier division/Ring/
// Category: Ring (division: "SUPPLIER")

import ssRingImg from "../assets/All Products/Supplier division/Ring/stainless steel.jpg";
import carbonRingImg from "../assets/All Products/Supplier division/Ring/carbon.jpeg";
import alloySteelRingImg from "../assets/All Products/Supplier division/Ring/alloy steel.jpg";
import nickelRingImg from "../assets/All Products/Supplier division/Ring/nikle.jpeg";
import duplexRingImg from "../assets/All Products/Supplier division/Ring/duplex.jpg";
import superDuplexRingImg from "../assets/All Products/Supplier division/Ring/super duplex.jpg";
import titaniumRingImg from "../assets/All Products/Supplier division/Ring/titainium.webp";
import exoticAlloyRingImg from "../assets/All Products/Supplier division/Ring/exotic.jpg";

export {
  ssRingImg,
  carbonRingImg,
  alloySteelRingImg,
  nickelRingImg,
  duplexRingImg,
  superDuplexRingImg,
  titaniumRingImg,
  exoticAlloyRingImg
};

// Exact 8 Materials verified in the Ring folder (guaranteeing strict isolation)
export const SUPPLIER_RING_MATERIALS = [
  { id: "stainless-steel", name: "Stainless Steel", slug: "stainless-steel" },
  { id: "carbon-steel", name: "Carbon Steel", slug: "carbon-steel" },
  { id: "alloy-steel", name: "Alloy Steel", slug: "alloy-steel" },
  { id: "nickel-alloy", name: "Nickel Alloy", slug: "nickel-alloy" },
  { id: "duplex", name: "Duplex", slug: "duplex" },
  { id: "super-duplex", name: "Super Duplex", slug: "super-duplex" },
  { id: "titanium", name: "Titanium", slug: "titanium" },
  { id: "exotic-alloy", name: "Exotic Alloy", slug: "exotic-alloy" }
];

export const SUPPLIER_RING_PRODUCTS = [
  {
    id: "ring-stainless-steel",
    slug: "ring-stainless-steel",
    name: "Stainless Steel Seamless Rolled & Forged Rings",
    title: "Stainless Steel Seamless Rolled & Forged Rings",
    material: "Stainless Steel",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: ssRingImg,
    heroImage: ssRingImg,
    grades: ["AISI 304L", "AISI 316L", "AISI 321", "AISI 310S", "AISI 347", "AISI 904L", "ASTM A182 F304L", "ASTM A182 F316L"],
    forms: ["Seamless Rolled Rings", "Hydraulic Press Forged Rings", "Rough Turned Flange Blanks", "Lap Joint Loose Backing Rings"],
    sizeRange: "100 mm to 2500 mm Outer Diameter (4\" to 100\" OD)",
    wallThickness: "20 mm to 400 mm Radial Thickness / Height",
    length: "Continuous Forged Ring (Single Piece Seamless Construction)",
    endConnections: "Rough Machined (Ra 3.2 - 6.3µm) / Finish Turned to Drawing",
    shortDescription: "Seamless rolled and press forged stainless steel rings (up to 2500mm OD) conforming to ASTM A182 for flange machining, lap joint backing rings, and pressure vessel seals.",
    overview: "Supreme Metal & Alloys stocks and manufactures seamless ring-rolled and hot forged stainless steel rings conforming to ASTM A182 and ASME SA182. Sourced in solution-annealed condition with ultrasonic inspection (ASTM A388). Designed with continuous circumferential grain flow for maximum hoop stress resistance in pressure vessel nozzles, large slewing bearings, and custom industrial flanges.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A182 / ASME SA182, EN 10222-5, DIN 17440, ASME B16.5 / B16.47" },
      { label: "Outer Diameter (OD) Range", value: "100 mm to 2500 mm (Up to 3500 mm on custom ring mill rolling)" },
      { label: "Radial Wall Thickness / Height", value: "20 mm to 400 mm" },
      { label: "Manufacturing Process", value: "Radial-Axial CNC Ring Rolling & Open/Closed Die Hydraulic Press Forging" },
      { label: "Heat Treatment", value: "Solution Annealed at 1050°C and Rapidly Water Quenched" },
      { label: "Surface Finish Condition", value: "Rough Machined (3.2µm - 6.3µm Ra) with 3-5mm Machining Allowance" },
      { label: "Ultrasonic Testing", value: "100% Volumetric Ultrasonic Inspection per ASTM A388 / EN 10228-4" },
      { label: "Testing & Documentation", value: "100% PMI, Tensile, Hardness, Liquid Penetrant, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A182 / A182M - Forged or Rolled Alloy and Stainless Steel Pipe Flanges, Forged Fittings, and Valves",
      "ASME SA182 - Boiler and Pressure Vessel Code Section II Part A",
      "EN 10222-5 - Steel Forgings for Pressure Purposes (Stainless Steels)",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Industrial pipe flange manufacturing, weld neck flanges, and large-diameter ring blanks",
      "Lap joint loose backing rings for stainless steel and plastic lined piping",
      "Pressure vessel manway reinforcement rings, body flanges, and nozzle necks",
      "Heavy slewing bearing rings, crane turntable rings, and gearbox ring gears"
    ],
    technicalDetails: {
      manufacturingType: "Hot Radial-Axial Seamless Ring Rolling with Seamless Circumferential Grain Flow",
      pressureRating: "Tensile Strength 515 - 750 N/mm² | Yield Strength ≥ 205 N/mm²",
      tolerance: "Rough Machined ±1.5 mm; Finish Turned to Drawing ±0.1 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, 100% Ultrasonic Testing (ASTM A388)"
    }
  },
  {
    id: "ring-carbon-steel",
    slug: "ring-carbon-steel",
    name: "Carbon Steel High-Pressure Forged Rings & Flange Blanks",
    title: "Carbon Steel High-Pressure Forged Rings & Flange Blanks",
    material: "Carbon Steel",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: carbonRingImg,
    heroImage: carbonRingImg,
    grades: ["ASTM A105", "ASTM A350 LF2 Class 1", "IS 2062", "C45 / EN8", "ASTM A694 F52 / F60 / F65"],
    forms: ["Seamless Rolled Carbon Rings", "Heavy Hydraulic Press Forged Rings", "Machined Girth Flanges", "Spacer Rings"],
    sizeRange: "150 mm to 3000 mm Outer Diameter (6\" to 120\" OD)",
    wallThickness: "25 mm to 500 mm Thickness / Height",
    length: "Continuous Forged Ring (Solid Seamless Core)",
    endConnections: "Rough Machined / Finish Turned to Drawing",
    shortDescription: "Heavy-duty carbon steel seamless rolled and forged rings conforming to ASTM A105 and ASTM A350 LF2 for high-pressure girth flanges, slewing rings, and pipeline seals.",
    overview: "Supreme Metal & Alloys supplies heavy-gauge carbon steel forged rings conforming to ASTM A105, ASTM A350 LF2 (low-temperature notch toughness tested at -46°C), and high-yield pipeline grades (ASTM A694 F52-F65). Seamlessly rolled to deliver immense radial burst resistance in refinery pressure vessel shells, heavy crane turntables, and submarine pipeline connections.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A105 / A105M, ASTM A350 / A350M LF2, ASTM A694, ASME SA105, EN 10222-2" },
      { label: "Outer Diameter (OD) Range", value: "150 mm to 3000 mm" },
      { label: "Wall Thickness / Height", value: "25 mm to 500 mm" },
      { label: "Heat Treatment Condition", value: "Normalized (N), Quenched & Tempered (Q&T), Stress Relieved" },
      { label: "Low Temperature Impact", value: "Charpy V-Notch tested at -46°C (A350 LF2 ≥ 27J minimum)" },
      { label: "Machining Condition", value: "Rough Turned with 3-5mm cleaning allowance or Finish Machined per Blueprint" },
      { label: "Testing & NDT", value: "100% Ultrasonic Testing (ASTM A388), Magnetic Particle (MPI), EN 10204 3.1 MTC" },
      { label: "Yield Strength Range", value: "≥ 250 N/mm² (A105) up to ≥ 450 N/mm² (A694 F65)" }
    ],
    standards: [
      "ASTM A105 / A105M - Carbon Steel Forgings for Piping Applications",
      "ASTM A350 / A350M - Carbon and Low-Alloy Steel Forgings for Low-Temperature Service",
      "ASTM A694 / A694M - Carbon and Alloy Steel Forgings for Pipe Flanges and High-Pressure Transmission",
      "ASME Section VIII Div 1 & Div 2 Pressure Vessel Code"
    ],
    applications: [
      "Refinery pressure vessel shell girth flanges, channel covers, and nozzle reinforcement rings",
      "High-pressure transmission pipeline ball valve body rings and bonnet seals",
      "Heavy crane slewing rings, wind turbine yaw bearing rings, and excavator turntables",
      "Thermal power boiler feed pump casing rings and high-pressure steam closures"
    ],
    technicalDetails: {
      manufacturingType: "Ingot Piercing & CNC Radial-Axial Seamless Ring Rolling",
      pressureRating: "Yield Strength ≥ 350 N/mm² | Tensile Strength 485 - 655 N/mm²",
      tolerance: "Rough Machined ±2.0 mm; Precision Turned ±0.1 mm",
      certifications: "EN 10204 3.1 MTC with Charpy V-Notch Impact & NACE MR0175 Compliance"
    }
  },
  {
    id: "ring-alloy-steel",
    slug: "ring-alloy-steel",
    name: "Alloy Steel High-Temperature & High-Yield Forged Rings",
    title: "Alloy Steel High-Temperature & High-Yield Forged Rings",
    material: "Alloy Steel",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: alloySteelRingImg,
    heroImage: alloySteelRingImg,
    grades: ["ASTM A182 F11 Cl 2", "ASTM A182 F22 Cl 2", "ASTM A182 F91", "AISI 4140", "AISI 4340 (EN24)", "DIN 1.7225 (42CrMo4)"],
    forms: ["Seamless Rolled Alloy Rings", "Quenched & Tempered Bearing Rings", "Hydrocracker Girth Rings", "Pinion Rings"],
    sizeRange: "150 mm to 2400 mm Outer Diameter (6\" to 96\" OD)",
    wallThickness: "25 mm to 400 mm Height / Wall",
    length: "Continuous Seamless Forged Ring",
    endConnections: "Rough Turned / Finish Machined to Spec",
    shortDescription: "Chromium-molybdenum high-temperature alloy steel forged rings (ASTM A182 F11, F22, F91) for hydrocrackers, steam turbine casings, and heavy gear rings.",
    overview: "Supreme Metal & Alloys stocks and manufactures high-strength chromium-molybdenum alloy steel rings conforming to ASTM A182 and EN 10083-3. Engineered for creep resistance up to 600°C and immense fatigue strength under cyclical mechanical loading in steam turbines, refinery hydroprocessing reactors, and heavy reduction gearboxes.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A182 / ASME SA182, ASTM A336 / A336M, EN 10083-3, DIN 17200" },
      { label: "Available Grades", value: "F11 (1.25Cr-0.5Mo), F22 (2.25Cr-1Mo), F91 (9Cr-1Mo-V), AISI 4140, AISI 4340" },
      { label: "Outer Diameter (OD) Range", value: "150 mm to 2400 mm" },
      { label: "Wall Thickness / Height", value: "25 mm to 400 mm" },
      { label: "Heat Treatment Condition", value: "Normalized & Tempered (N+T) / Quenched & Tempered (Q&T 28-34 HRC)" },
      { label: "Creep Rupture Strength", value: "Certified for sustained elevated-temperature service up to 600°C" },
      { label: "NDT Inspection", value: "100% Ultrasonic Testing (ASTM A388), Wet Magnetic Particle Testing (MPI)" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 (IBR Form III-A Available on Request)" }
    ],
    standards: [
      "ASTM A182 / A182M - Forged Alloy Steel Flanges, Fittings, and Parts for High-Temperature Service",
      "ASTM A336 / A336M - Alloy Steel Forgings for Pressure and High-Temperature Parts",
      "EN 10083-3 - Steels for Quenching and Tempering",
      "Indian Boiler Regulations (IBR) Certified"
    ],
    applications: [
      "Supercritical and ultra-supercritical steam turbine outer casing rings and diaphragms",
      "Refinery hydrocracker reactor high-pressure girth flanges and nozzle necks",
      "Heavy industrial bull gear ring blanks, reduction gearbox rings, and mill pinion rings",
      "High-temperature gas turbine transition piece support rings and valve bonnets"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Degassed EAF-LF-VD Forging & Hot Seamless Radial Ring Rolling",
      pressureRating: "Tensile Strength 585 - 850 N/mm² | Creep Resistant up to 600°C",
      tolerance: "Rough Machined ±2.0 mm; Precision Machined to Drawing ±0.05 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, IBR Form III-A, Full Ultrasonic Report"
    }
  },
  {
    id: "ring-nickel-alloy",
    slug: "ring-nickel-alloy",
    name: "Nickel Alloy & Superalloy Heavy Forged Rings",
    title: "Nickel Alloy & Superalloy Heavy Forged Rings",
    material: "Nickel Alloy",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: nickelRingImg,
    heroImage: nickelRingImg,
    grades: ["Inconel 625", "Inconel 600", "Inconel 718", "Monel 400", "Monel K500", "Hastelloy C276", "Incoloy 825"],
    forms: ["Seamless Rolled Superalloy Rings", "Open Die Forged Nickel Rings", "Precision Turned Seal Rings", "Gas Turbine Shroud Rings"],
    sizeRange: "100 mm to 2000 mm Outer Diameter (4\" to 80\" OD)",
    wallThickness: "20 mm to 300 mm Wall / Height",
    length: "Seamless Ring Construction",
    endConnections: "Rough Machined / Finish Turned to Print",
    shortDescription: "High-integrity nickel superalloy seamless rolled rings in Inconel 625, Hastelloy C276, and Monel 400 for subsea risers, gas turbine shrouds, and nuclear vessels.",
    overview: "Supreme Metal & Alloys stocks and manufactures prime nickel superalloy seamless rolled rings conforming to ASTM B564, ASTM B446, and AMS 5666. Engineered from vacuum induction melted (VIM-VAR) ingots to deliver exceptional resistance to aggressive mineral acids, chloride pitting, and extreme thermal-mechanical stress up to 1000°C.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B564 / ASME SB564 (Nickel Alloy Forgings), AMS 5666, AMS 5662 (Inconel 718)" },
      { label: "Outer Diameter (OD) Range", value: "100 mm to 2000 mm" },
      { label: "Wall Thickness / Height", value: "20 mm to 300 mm" },
      { label: "Heat Treatment", value: "Solution Annealed / Precipitation Age-Hardened (Inconel 718 / Monel K500)" },
      { label: "Corrosion Resistance", value: "Immune to chloride SCC, boiling HCl, wet chlorine, and ambient seawater" },
      { label: "Non-Destructive Testing", value: "100% PMI, Ultrasonic per ASTM A388, Liquid Penetrant Testing (PT)" },
      { label: "Machining Condition", value: "Rough Turned (Ra 3.2µm) or CNC Finish Turned to Exact Blueprint" },
      { label: "Quality Assurance", value: "EN 10204 3.1 / 3.2 MTC, NACE MR0175 / ISO 15156 Qualified" }
    ],
    standards: [
      "ASTM B564 / ASME SB564 - Nickel Alloy Forgings (UNS N06625, N10276, N04400, N08825)",
      "AMS 5666 - Nickel Alloy Bars, Forgings, and Rings 625",
      "AMS 5662 / 5663 - Nickel Alloy Forgings 718 Precipitation Heat Treated",
      "NACE MR0175 / ISO 15156 Level IV Sour Service Certified"
    ],
    applications: [
      "Subsea wellhead connection clamps, riser swivel rings, and subsea manifold flanges",
      "Aerospace gas turbine combustion casing rings, shroud rings, and seal supports",
      "Nuclear reactor coolant pump casing wear rings and pressure vessel nozzles",
      "Chemical plant hot hydrochloric and sulfuric acid reactor body girth flanges"
    ],
    technicalDetails: {
      manufacturingType: "VIM-VAR Ingot Piercing & CNC Hot Seamless Ring Rolling",
      pressureRating: "Yield Strength ≥ 415 N/mm² | Tensile Strength ≥ 825 N/mm² (Inconel 625)",
      tolerance: "Rough Machined ±1.5 mm; Finish Turned to Drawing ±0.05 mm",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with Full Ultrasonic & Chemical Reports"
    }
  },
  {
    id: "ring-duplex",
    slug: "ring-duplex",
    name: "Duplex 2205 High-Yield Forged & Rolled Rings",
    title: "Duplex 2205 High-Yield Forged & Rolled Rings",
    material: "Duplex",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: duplexRingImg,
    heroImage: duplexRingImg,
    grades: ["UNS S31803", "UNS S32205 (Duplex 2205)", "DIN 1.4462", "ASTM A182 F51", "ASTM A182 F60"],
    forms: ["Seamless Rolled Duplex Rings", "Hydraulic Press Forged Rings", "Machined Girth Flange Blanks", "Lap Joint Backing Rings"],
    sizeRange: "150 mm to 2200 mm Outer Diameter (6\" to 88\" OD)",
    wallThickness: "25 mm to 350 mm Height / Wall",
    length: "Continuous Seamless Rolled Ring",
    endConnections: "Rough Machined / Finish Turned to Blueprint",
    shortDescription: "High-yield Duplex 2205 seamless rolled rings (PREN 34-36) offering double the mechanical load capacity of 316L with high resistance to chloride stress cracking.",
    overview: "Supreme Metal & Alloys stocks and manufactures Duplex 2205 (UNS S31803 / S32205) seamless rolled rings conforming to ASTM A182 Grade F51/F60. Featuring a balanced 50/50 austenitic-ferritic microstructure, our Duplex rings deliver double the yield strength of standard austenitic grades, enabling significant weight and wall-thickness reductions in offshore flanges and subsea housings.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A182 / ASME SA182 (Grade F51 / F60), EN 10222-5, DIN 1.4462" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 34.0 - 36.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 450 N/mm² (Twice the mechanical load of 316L)" },
      { label: "Outer Diameter (OD) Range", value: "150 mm to 2200 mm" },
      { label: "Wall Thickness / Height", value: "25 mm to 350 mm" },
      { label: "Ferrite Balance", value: "40% to 60% Ferrite phase verified per ASTM E562" },
      { label: "Corrosion Testing", value: "ASTM A923 Method C verified free of detrimental intermetallic phases" },
      { label: "Quality Testing & MTC", value: "100% PMI, UT per ASTM A388, Charpy V-Notch at -46°C, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A182 / A182M - Forged Alloy and Stainless Steel Pipe Flanges (Grade F51 / F60)",
      "ASTM A923 - Detecting Detrimental Intermetallic Phases in Duplex Steels",
      "EN 10222-5 - Steel Forgings for Pressure Purposes",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Offshore topside separation vessel girth flanges and subsea tie-in rings",
      "Chemical tanker cargo tank body flanges and hatch reinforcement rings",
      "Biofuel distillation column body flanges and high-pressure steam separator rings",
      "Marine propeller shaft housing rings and high-load rudder bearing rings"
    ],
    technicalDetails: {
      manufacturingType: "Ingot Piercing & Hot Radial-Axial Seamless Ring Rolling with Rapid Water Quench",
      pressureRating: "Yield Strength ≥ 450 N/mm² | Tensile Strength 655 - 880 N/mm²",
      tolerance: "Rough Machined ±1.5 mm; CNC Turned to Blueprint ±0.05 mm",
      certifications: "EN 10204 3.1 Inspection Certificate with Ferrite Survey & Intermetallic Reports"
    }
  },
  {
    id: "ring-super-duplex",
    slug: "ring-super-duplex",
    name: "Super Duplex 2507 Extreme-Service Forged Rings",
    title: "Super Duplex 2507 Extreme-Service Forged Rings",
    material: "Super Duplex",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: superDuplexRingImg,
    heroImage: superDuplexRingImg,
    grades: ["UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "DIN 1.4410", "DIN 1.4501", "ASTM A182 F53", "ASTM A182 F55"],
    forms: ["Seamless Rolled Super Duplex Rings", "Hydraulic Press Forged Rings", "Subsea Swivel Rings", "Desalination End Flanges"],
    sizeRange: "150 mm to 2200 mm Outer Diameter (6\" to 88\" OD)",
    wallThickness: "25 mm to 350 mm Height / Wall",
    length: "Continuous Seamless Ring Construction",
    endConnections: "Rough Machined / Finish Turned to Blueprint",
    shortDescription: "Ultra-high-strength Super Duplex 2507 and Zeron 100 seamless rolled rings (PREN ≥ 42) for subsea manifolds, swivel flanges, and reverse osmosis pressure vessels.",
    overview: "Supreme Metal & Alloys stocks and manufactures certified Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) seamless rolled rings conforming to ASTM A182 Grade F53/F55 and NORSOK M-630 MDS D54. Delivering immense tensile yield strength (≥ 550 N/mm²) combined with PREN ≥ 42, providing total immunity to crevice corrosion in hot chlorinated seawater and high-pressure sour gas environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A182 / ASME SA182 (Grade F53 / F55), NORSOK M-630 MDS D54, EN 10222-5" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 42.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 550 N/mm² (Extremely high mechanical load capacity)" },
      { label: "Outer Diameter (OD) Range", value: "150 mm to 2200 mm" },
      { label: "Wall Thickness / Height", value: "25 mm to 350 mm" },
      { label: "Pitting Corrosion Testing", value: "ASTM G48 Method A tested with zero pitting at 50°C" },
      { label: "Intermetallic Phase Check", value: "Verified free of sigma phase per ASTM A923 Method C" },
      { label: "Impact Toughness", value: "Charpy V-Notch impact tested at -46°C (≥ 80 Joules average)" }
    ],
    standards: [
      "ASTM A182 / A182M - Forged Flanges and Parts in Super Duplex (Grade F53 / F55)",
      "NORSOK M-630 MDS D54 Qualified for Critical Subsea Applications",
      "ASTM A923 - Testing for Intermetallic Phases",
      "NACE MR0175 / ISO 15156 Level IV Sour Service Certified"
    ],
    applications: [
      "Subsea production pipeline swivel ring flanges, tie-in spools, and manifold rings",
      "Seawater reverse osmosis (SWRO) high-pressure membrane vessel head rings and closures",
      "Offshore topside firewater deluge valve trim rings and high-pressure pumps",
      "Geothermal brine extraction wellhead casing rings and sour gas separator closures"
    ],
    technicalDetails: {
      manufacturingType: "Radial-Axial Seamless Ring Rolling & Rapid Water Quenched from NORSOK Qualified Mills",
      pressureRating: "Yield Strength ≥ 550 N/mm² | Tensile Strength 750 - 1000 N/mm²",
      tolerance: "Rough Turned ±1.5 mm; CNC Machined to Blueprint ±0.05 mm",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with ASTM G48 Pitting & Ferrite Reports"
    }
  },
  {
    id: "ring-titanium",
    slug: "ring-titanium",
    name: "Titanium Precision Seamless Rolled & Forged Rings",
    title: "Titanium Precision Seamless Rolled & Forged Rings",
    material: "Titanium",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: titaniumRingImg,
    heroImage: titaniumRingImg,
    grades: ["Titanium Grade 1", "Titanium Grade 2", "Titanium Grade 5 (Ti-6Al-4V)", "Titanium Grade 7 (Ti-Pd)", "Titanium Grade 12"],
    forms: ["Seamless Rolled Titanium Rings", "Vacuum Forged Titanium Rings", "Aerospace Turbine Shroud Rings", "Electrochemical Vessel Rings"],
    sizeRange: "100 mm to 1800 mm Outer Diameter (4\" to 72\" OD)",
    wallThickness: "15 mm to 250 mm Wall / Height",
    length: "Seamless Ring Construction",
    endConnections: "Rough Machined / Finish Turned to Blueprint",
    shortDescription: "Ultra-lightweight, bio-compatible, high-purity commercially pure Grade 2 and alpha-beta Grade 5 (Ti-6Al-4V) seamless rolled rings for aerospace engines, chlor-alkali cells, and marine hulls.",
    overview: "Supreme Metal & Alloys stocks high-purity commercially pure (Grade 1/2) and structural alpha-beta alloy (Grade 5 Ti-6Al-4V) titanium seamless rolled rings conforming to ASTM B381 and AMS 4928. Sourced from vacuum arc remelted (VAR) ingots, titanium rings provide unmatched strength-to-weight ratio, high fracture toughness, and complete immunity to marine immersion and wet chlorine.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B381 / ASME SB381 (Titanium Forgings), AMS 4928 (Ti-6Al-4V), AMS 4921, ISO 5832-3" },
      { label: "Grades Stocked", value: "Grade 1 (CP4), Grade 2 (CP3 Standard), Grade 5 (Ti-6Al-4V Structural), Grade 7 (0.2% Pd)" },
      { label: "Density", value: "4.51 g/cm³ (Approx. 45% lighter than stainless steel)" },
      { label: "Outer Diameter (OD) Range", value: "100 mm to 1800 mm" },
      { label: "Wall Thickness / Height", value: "15 mm to 250 mm" },
      { label: "Heat Treatment", value: "Vacuum Annealed / Solution Treated & Aged (STA for Grade 5)" },
      { label: "Corrosion Immunity", value: "Complete immunity to ambient seawater, wet chlorine, chlorites, and nitric acid" },
      { label: "Quality Testing & MTC", value: "100% PMI, Ultrasonic per AMS 2631 Class AA/A, Gas Interstitials (O, N, H, C), EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B381 - Titanium and Titanium Alloy Forgings",
      "AMS 4928 - Titanium Alloy Bars, Wire, Forgings, Rings 6Al-4V Annealed",
      "ASME SB381 - Boiler and Pressure Vessel Code Section II Part B",
      "ISO 5832-3 - Implants for Surgery (Wrought Ti-6Al-4V)"
    ],
    applications: [
      "Aerospace jet engine compressor stator rings, shroud rings, and rotating casing rings",
      "Chlor-alkali electrolysis cell body flanges, chlorination tower rings, and riser rings",
      "Naval submarine hull penetration rings, sonar housing rings, and seawater valve bodies",
      "Deepwater oceanographic exploration pressure hull rings and instrumentation housings"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Arc Remelted (VAR) Ingot & CNC Radial Ring Rolling with Vacuum Heat Treatment",
      pressureRating: "Grade 2 Tensile ≥ 345 N/mm² | Grade 5 Tensile ≥ 895 N/mm²",
      tolerance: "Rough Machined ±1.0 mm; Aerospace Finish Machined ±0.03 mm",
      certifications: "EN 10204 3.1 Inspection Certificate with Full Gas Interstitial Chemical Analysis"
    }
  },
  {
    id: "ring-exotic-alloy",
    slug: "ring-exotic-alloy",
    name: "Exotic Specialty Refractory & Superalloy Forged Rings",
    title: "Exotic Specialty Refractory & Superalloy Forged Rings",
    material: "Exotic Alloy",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Ring",
    categorySlug: "ring",
    division: "SUPPLIER",
    image: exoticAlloyRingImg,
    heroImage: exoticAlloyRingImg,
    grades: ["Zirconium 702 (UNS R60702)", "Tantalum (UNS R05200)", "MP35N", "Incoloy 825", "Hastelloy B-3", "Hastelloy C-22"],
    forms: ["Seamless Rolled Exotic Rings", "Vacuum Sintered & Forged Rings", "Severe Acid Reactor Flanges", "Nuclear Vessel Rings"],
    sizeRange: "80 mm to 1500 mm Outer Diameter (3\" to 60\" OD)",
    wallThickness: "15 mm to 200 mm Wall / Height",
    length: "Seamless Ring Construction",
    endConnections: "Rough Machined / Precision Turned to Print",
    shortDescription: "Specialized exotic refractory metal seamless rolled rings in Zirconium 702, Tantalum, and MP35N for boiling hydrochloric acid, nuclear reactors, and deep-well logging.",
    overview: "Supreme Metal & Alloys stocks high-purity exotic metal and cobalt superalloy seamless rolled rings in Zirconium 702, Tantalum, MP35N, and Hastelloy B-3 conforming to ASTM B493 and ASTM B564. Engineered for extreme operating environments exceeding the chemical and mechanical thresholds of nickel and titanium alloys.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B493 (Zirconium Forgings), ASTM B564 (Incoloy 825 / Hastelloy B-3), AMS 5844 (MP35N)" },
      { label: "Outer Diameter (OD) Range", value: "80 mm to 1500 mm" },
      { label: "Wall Thickness / Height", value: "15 mm to 200 mm" },
      { label: "Chemical Immunity", value: "Immune to boiling concentrated HCl, aqua regia, wet chlorine gas, and hot nitric acid" },
      { label: "Manufacturing Purity", value: "Electron Beam Melted (EBM) / Vacuum Arc Remelted (VAR)" },
      { label: "Non-Destructive Testing", value: "100% PMI Spectro, Ultrasonic per ASTM A388, Liquid Penetrant" },
      { label: "Packaging", value: "Vacuum Sealed Wooden Crated with Desiccant & Inert Atmosphere Cushion" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 with Interstitial Gas Purity Analysis" }
    ],
    standards: [
      "ASTM B493 / B493M - Zirconium and Zirconium Alloy Forgings",
      "ASTM B564 - Nickel Alloy Forgings",
      "AMS 5844 - Cobalt-Nickel-Chromium-Molybdenum Alloy Forgings (MP35N)",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Hot concentrated hydrochloric acid reactor body girth flanges and bayonet seals",
      "Nuclear reactor fuel bundle grid support rings and control rod shroud rings",
      "Deepwater oilwell downhole logging tool housings and high-pressure packer rings",
      "Chemical plant urea stripper body flanges and corrosive fertilizer synthesis rings"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Arc Remelted Ingot & Hot Seamless Ring Rolling in Controlled Atmosphere",
      pressureRating: "Severe Thermal & Chemical Withstand | MP35N Tensile up to 2050 N/mm²",
      tolerance: "Rough Machined ±1.0 mm; Precision Turned ±0.05 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, 100% PMI, Vacuum Purity Analysis"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Ring
export const getRingProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  return (
    SUPPLIER_RING_PRODUCTS.find(
      (p) =>
        p.slug === clean ||
        p.id === clean ||
        p.slug === `ring-${clean}` ||
        clean === `ring-${p.materialSlug}` ||
        clean === `rings-${p.materialSlug}` ||
        clean === p.materialSlug
    ) || null
  );
};

export const getRingProductsByMaterial = (matSlug = "") => {
  const clean = String(matSlug).toLowerCase().trim();
  if (clean === "all") return SUPPLIER_RING_PRODUCTS;
  return SUPPLIER_RING_PRODUCTS.filter((p) => p.materialSlug === clean);
};

export const getRelatedRingProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim();
  return SUPPLIER_RING_PRODUCTS.filter(
    (p) => p.slug !== clean && p.id !== clean && !clean.includes(p.materialSlug)
  ).slice(0, 4);
};
