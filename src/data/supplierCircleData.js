// Isolated Supplier Data Layer — Circle
// Source of truth: src/assets/All Products/Supplier division/Circle/
// Category: Circle (division: "SUPPLIER")

import ssCircleImg from "../assets/All Products/Supplier division/Circle/Stainless steel.png";
import carbonCircleImg from "../assets/All Products/Supplier division/Circle/carbon.jpg";
import alloySteelCircleImg from "../assets/All Products/Supplier division/Circle/alloy steel.jpg";
import nickelCircleImg from "../assets/All Products/Supplier division/Circle/nikle.webp";
import highAlloyCircleImg from "../assets/All Products/Supplier division/Circle/high alloy.webp";
import duplexCircleImg from "../assets/All Products/Supplier division/Circle/duplex.jpg";
import superDuplexCircleImg from "../assets/All Products/Supplier division/Circle/super duplex.webp";
import titaniumCircleImg from "../assets/All Products/Supplier division/Circle/Titanium.png";
import exoticAlloyCircleImg from "../assets/All Products/Supplier division/Circle/exotic.jpg";

export {
  ssCircleImg,
  carbonCircleImg,
  alloySteelCircleImg,
  nickelCircleImg,
  highAlloyCircleImg,
  duplexCircleImg,
  superDuplexCircleImg,
  titaniumCircleImg,
  exoticAlloyCircleImg
};

// Exact 9 Materials verified in the Circle folder (guaranteeing strict isolation)
export const SUPPLIER_CIRCLE_MATERIALS = [
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

export const SUPPLIER_CIRCLE_PRODUCTS = [
  {
    id: "circle-stainless-steel",
    slug: "circle-stainless-steel",
    name: "Stainless Steel Cut Circles & Forged Discs",
    title: "Stainless Steel Cut Circles & Forged Discs",
    material: "Stainless Steel",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: ssCircleImg,
    heroImage: ssCircleImg,
    grades: ["AISI 304", "AISI 304L", "AISI 316", "AISI 316L", "AISI 321", "AISI 310S", "AISI 347", "AISI 904L"],
    forms: ["CNC Laser Cut Circles", "High-Def Plasma Cut Discs", "Waterjet Precision Discs", "Forged Heavy Discs", "Deep Drawing Blanks"],
    sizeRange: "50 mm to 1500 mm Outer Diameter (2\" to 60\" OD)",
    wallThickness: "1.0 mm to 150.0 mm Thickness",
    length: "Cut to Exact Diameter / Machine Turned Blanks",
    endConnections: "Square Deburred Cut Edge / Beveled / Rough Machined",
    shortDescription: "Precision CNC laser, waterjet, and plasma cut stainless steel circles and forged heavy disc blanks for flange stock, tank ends, pressure vessel heads, and sanitary equipment.",
    overview: "Supreme Metal & Alloys stocks and processes prime stainless steel circles conforming to ASTM A240 and forged discs per ASTM A182. Sourced from premier global mills and cut on state-of-the-art multi-axis CNC laser, waterjet, and plasma cutting beds. Engineered with tight diametrical tolerances, smooth perimeter edges, and total grain structural integrity ready for deep drawing, dished head spinning, or precision flange machining.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, ASTM A182 / ASME SA182, EN 10088-2, DIN 17440" },
      { label: "Outer Diameter (OD) Range", value: "50 mm to 1500 mm (Up to 2500 mm on specialized plate cutting)" },
      { label: "Thickness Range", value: "1.0 mm to 150.0 mm (Thin gauge deep drawing to heavy forged discs)" },
      { label: "Cutting Technology", value: "CNC Fiber Laser, High-Definition CNC Plasma, Pure Waterjet, Cold Saw Cut" },
      { label: "Edge Condition & Finish", value: "Clean Deburred, Square Cut, Mill Finish 1D / 2B, or Face-Turned Machined" },
      { label: "Dimensional Tolerances", value: "ISO 2768-m or ASTM A480 plate cutting precision (±0.5mm to ±1.5mm)" },
      { label: "Surface Protection", value: "Laser Protective Film / PVC Coating / Kraft Paper Interleaving" },
      { label: "Quality Testing & MTC", value: "100% PMI, Ultrasonic Flaw Detection (UT per ASTM A578), EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip for Pressure Vessels",
      "ASTM A182 / A182M - Forged or Rolled Alloy and Stainless Steel Pipe Flanges, Forged Fittings, and Valves",
      "ASME SA240 - Boiler and Pressure Vessel Code Section II Part A",
      "EN 10088-2 - Stainless Steels for General Purposes",
      "ISO 9001:2015 & PED 2014/68/EU Certified Processing"
    ],
    applications: [
      "Pressure vessel dished ends, torispherical heads, and ellipsoidal tank caps",
      "Industrial pipe flange manufacturing, blind flanges, and spectacle blinds",
      "Pharmaceutical autoclaves, mixing agitator plates, and CIP tank bottom cones",
      "Chemical reactor baffles, tube sheets, and heat exchanger circular partitions",
      "Food and beverage commercial kitchenware and deep-drawn vessels"
    ],
    technicalDetails: {
      manufacturingType: "CNC Fiber Laser / Waterjet Cut from Mill Plate & Forged Disc Blanking",
      pressureRating: "Tensile Strength 515 - 750 N/mm² | Yield Strength ≥ 205 N/mm²",
      tolerance: "Outer Diameter ±0.5 mm on precision laser; ±1.0 mm on heavy plasma",
      certifications: "EN 10204 3.1 Inspection Certificate, 100% UT Tested, NACE MR0175 Compliance"
    }
  },
  {
    id: "circle-carbon-steel",
    slug: "circle-carbon-steel",
    name: "Carbon Steel Boiler Quality Circles & Forged Blanks",
    title: "Carbon Steel Boiler Quality Circles & Forged Blanks",
    material: "Carbon Steel",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: carbonCircleImg,
    heroImage: carbonCircleImg,
    grades: ["ASTM A516 Gr 60", "ASTM A516 Gr 70", "ASTM A105", "IS 2062 E250 / E350", "ASTM A36", "ASTM A350 LF2"],
    forms: ["Oxy-Fuel Flame Cut Circles", "Plasma Cut Boiler Discs", "Forged Heavy Carbon Discs", "Machined Blind Blanks"],
    sizeRange: "75 mm to 2000 mm Outer Diameter (3\" to 80\" OD)",
    wallThickness: "5.0 mm to 250.0 mm Thickness",
    length: "Cut to Diameter / CNC Profiled",
    endConnections: "Square Flame Cut / Descaled / Beveled for Weld Prep",
    shortDescription: "Heavy-duty carbon steel pressure vessel plate circles and forged disc blanks conforming to ASTM A516 Gr 70 and ASTM A105 for boiler heads, autoclaves, and heavy machining.",
    overview: "Supreme Metal & Alloys supplies heavy-gauge carbon steel circles flame cut and CNC profiled from normalized boiler quality plates (ASTM A516 Gr 70 / IS 2062) as well as forged round discs per ASTM A105 and A350 LF2. Designed for high pressure, elevated temperature, and low-temperature notch toughness service in petrochemical vessels and thermal power equipment.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A516 / A516M, ASTM A105 / A105M, ASTM A350 LF2, ASME SA516, IS 2062" },
      { label: "Outer Diameter (OD) Range", value: "75 mm to 2000 mm (Custom flame cuts up to 3000 mm available)" },
      { label: "Thickness Range", value: "5.0 mm to 250.0 mm" },
      { label: "Heat Treatment Condition", value: "As-Rolled, Normalized (N), Stress Relieved (SR), Quenched & Tempered (Q&T)" },
      { label: "Edge Condition", value: "CNC Oxy-Fuel Clean Cut, Ground Flush, Weld Bevel Prepared" },
      { label: "Charpy V-Notch Impact", value: "Impact tested at -46°C for ASTM A516 Gr 70 / A350 LF2 low-temp duty" },
      { label: "Ultrasonic Inspection", value: "100% Ultrasonic Testing per ASTM A435 / A578 Level I/II" },
      { label: "Testing & Documentation", value: "PMI, Tensile, Bend, Charpy Impact, EN 10204 3.1 Mill Test Certificate" }
    ],
    standards: [
      "ASTM A516 / A516M - Pressure Vessel Plates, Carbon Steel, for Moderate- and Lower-Temperature Service",
      "ASTM A105 / A105M - Carbon Steel Forgings for Piping Applications",
      "ASTM A350 / A350M - Carbon and Low-Alloy Steel Forgings for Low-Temperature Service",
      "IS 2062 - Hot Rolled Medium and High Tensile Structural Steel",
      "ASME Section VIII Div 1 Boiler & Pressure Vessel Code"
    ],
    applications: [
      "Boiler drum end heads, storage tank covers, and spherical vessel caps",
      "Heavy industrial blind flanges and sacrificial spacer discs",
      "Structural machine base mounting rings and press bed discs",
      "Refinery heat exchanger shell covers and floating head backing rings"
    ],
    technicalDetails: {
      manufacturingType: "CNC Oxy-Fuel Flame Cutting & Hydraulic Closed-Die / Open-Die Forging",
      pressureRating: "Yield Strength ≥ 260 N/mm² | Tensile Strength 485 - 620 N/mm²",
      tolerance: "Per ASTM A20 / A6 plate standards (±1.5mm to ±3.0mm)",
      certifications: "EN 10204 3.1 MTC with Charpy V-Notch Impact & NACE MR0175/ISO 15156"
    }
  },
  {
    id: "circle-alloy-steel",
    slug: "circle-alloy-steel",
    name: "Alloy Steel High-Temperature Boiler Circles & Discs",
    title: "Alloy Steel High-Temperature Boiler Circles & Discs",
    material: "Alloy Steel",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: alloySteelCircleImg,
    heroImage: alloySteelCircleImg,
    grades: ["ASTM A387 Gr 11 Cl 2", "ASTM A387 Gr 22 Cl 2", "ASTM A387 Gr 91", "ASTM A182 F11", "ASTM A182 F22", "AISI 4140"],
    forms: ["CNC Heavy Plasma Cut Circles", "High-Temp Forged Disc Blanks", "Machined Reactor Tube Sheets", "Profiled End Covers"],
    sizeRange: "100 mm to 1600 mm Outer Diameter (4\" to 64\" OD)",
    wallThickness: "8.0 mm to 180.0 mm Thickness",
    length: "Cut to Spec / Rough Turned",
    endConnections: "Square Cut / Machine Beveled / Face Turned",
    shortDescription: "Chromium-molybdenum alloy steel plate circles and forged discs conforming to ASTM A387 and ASTM A182 for superheaters, hydrogen reactors, and power plant boilers.",
    overview: "Supreme Metal & Alloys stocks and profiles chromium-molybdenum alloy steel circles cut from high-integrity ASTM A387 Gr 11/22/91 plates and forged per ASTM A182 F11/F22. Engineered for elevated-temperature tensile stability, creep resistance, and high-pressure hydrogen service in power stations and refinery hydrocrackers.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A387 / ASME SA387, ASTM A182 / ASME SA182, EN 10028-2, DIN 17155" },
      { label: "Available Grades", value: "Grade 11 Class 2 (1.25Cr-0.5Mo), Grade 22 Class 2 (2.25Cr-1Mo), Grade 91 (9Cr-1Mo-V)" },
      { label: "Outer Diameter (OD) Range", value: "100 mm to 1600 mm" },
      { label: "Thickness Range", value: "8.0 mm to 180.0 mm" },
      { label: "Heat Treatment", value: "Normalized and Tempered (N+T) / Post-Weld Heat Treatment (PWHT) Simulated" },
      { label: "Creep Rupture Strength", value: "Rated for sustained service from 450°C to 650°C" },
      { label: "Non-Destructive Testing", value: "100% Ultrasonic Testing (ASTM A578), Magnetic Particle (MPI), Liquid Penetrant" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 (IBR Form IV Available on Request)" }
    ],
    standards: [
      "ASTM A387 / A387M - Pressure Vessel Plates, Alloy Steel, Chromium-Molybdenum",
      "ASTM A182 / A182M - Forged Alloy Steel Flanges, Fittings, and Parts for High-Temperature Service",
      "ASME Section II Part A - SA387 / SA182",
      "Indian Boiler Regulations (IBR) 1950 Certified Stock"
    ],
    applications: [
      "Thermal and nuclear power superheater and reheater header end covers",
      "Refinery hydroprocessing reactors and high-pressure desulfurizers",
      "Coal gasification vessels and steam turbine casing blank plates",
      "Heavy forged valve bonnet blanks and high-temperature pipe closures"
    ],
    technicalDetails: {
      manufacturingType: "CNC Heavy Plasma Profiled from Normalized Plate & Open-Die Forging",
      pressureRating: "Tensile Strength 515 - 690 N/mm² | Creep Resistant up to 600°C",
      tolerance: "OD ±1.0 mm; Thickness per ASTM A387 plate tolerance",
      certifications: "EN 10204 3.1 Inspection Certificate, IBR Approved, Simulated PWHT Data"
    }
  },
  {
    id: "circle-nickel-alloy",
    slug: "circle-nickel-alloy",
    name: "Nickel Alloy & Superalloy Precision Circles",
    title: "Nickel Alloy & Superalloy Precision Circles",
    material: "Nickel Alloy",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: nickelCircleImg,
    heroImage: nickelCircleImg,
    grades: ["Inconel 600", "Inconel 625", "Incoloy 800H", "Incoloy 825", "Monel 400", "Hastelloy C276", "Hastelloy C22", "Nickel 200/201"],
    forms: ["Waterjet Cold Cut Circles", "High-Definition Laser Discs", "Forged Nickel Disc Blanks", "Precision Tube Sheet Blanks"],
    sizeRange: "50 mm to 1200 mm Outer Diameter (2\" to 48\" OD)",
    wallThickness: "1.5 mm to 100.0 mm Thickness",
    length: "Cut to Spec / Machine Turned",
    endConnections: "Square Waterjet Cut / Burr-Free / Machined Radius",
    shortDescription: "Ultra-corrosion-resistant nickel alloy plate circles and forged discs in Inconel 625, Hastelloy C276, and Monel 400 for aggressive chemical, marine, and nuclear processing.",
    overview: "Supreme Metal & Alloys supplies prime nickel superalloy circles cut from certified ASTM B168, B443, B575, and B127 plate stock using cold abrasive waterjet cutting to completely eliminate heat-affected zones (HAZ). Unrivaled resistance to boiling mineral acids, wet chlorine, chloride stress cracking, and sour gas well environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B168 (Inconel 600), ASTM B443 (Inconel 625), ASTM B575 (Hastelloy C276), ASTM B127 (Monel 400)" },
      { label: "Outer Diameter (OD) Range", value: "50 mm to 1200 mm" },
      { label: "Thickness Range", value: "1.5 mm to 100.0 mm" },
      { label: "Cutting Method", value: "Cold Abrasive Waterjet (No thermal HAZ, zero metallurgical alteration)" },
      { label: "Corrosion Resistance", value: "Immune to chloride SCC, boiling HCl, sulfuric acid, and wet chlorine gas" },
      { label: "Surface Finish", value: "Mill Finish / Ground / Turned Faces Ra < 1.6µm" },
      { label: "Non-Destructive Testing", value: "100% PMI Spectro, Ultrasonic per ASTM A578 Level B, Liquid Penetrant" },
      { label: "Quality Assurance", value: "EN 10204 3.1 MTC, NACE MR0175 / ISO 15156 Compliance" }
    ],
    standards: [
      "ASTM B168 / ASME SB168 - Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "ASTM B443 / ASME SB443 - Nickel-Chromium-Molybdenum-Columbium Alloy Plate, Sheet",
      "ASTM B575 / ASME SB575 - Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate",
      "ASTM B127 / ASME SB127 - Nickel-Copper Alloy (Monel 400) Plate, Sheet, and Strip",
      "NACE MR0175 / ISO 15156 for Sour Oil & Gas Applications"
    ],
    applications: [
      "Sour gas extraction separator vessels and subsea wellhead blinds",
      "Nuclear fuel reprocessing dissolver vessel heads and flanged closures",
      "Pharmaceutical chemical synthesizers and sulfuric/hydrochloric acid tanks",
      "Offshore desalination plant high-pressure pump discs and brine heaters"
    ],
    technicalDetails: {
      manufacturingType: "Cold Abrasive Waterjet Profiled & VIM-VAR Hot Forged Disc Blanks",
      pressureRating: "Yield Strength ≥ 415 N/mm² | Tensile Strength ≥ 825 N/mm² (Inconel 625)",
      tolerance: "Waterjet Precision ±0.3 mm to ±0.8 mm across diameters",
      certifications: "EN 10204 3.1 / 3.2 Mill Test Certificate, 100% PMI Chemical Verification"
    }
  },
  {
    id: "circle-high-alloy",
    slug: "circle-high-alloy",
    name: "High Alloy & Super-Austenitic Specialized Circles",
    title: "High Alloy & Super-Austenitic Specialized Circles",
    material: "High Alloy",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: highAlloyCircleImg,
    heroImage: highAlloyCircleImg,
    grades: ["Alloy 20 (UNS N08020)", "254 SMO (UNS S31254)", "Sanicro 28 (UNS N08028)", "904L (UNS N08904)", "AL-6XN (UNS N08367)"],
    forms: ["CNC Laser Profiled Discs", "Waterjet Precision Circles", "Tube Sheet Flange Blanks", "Vessel Baffles"],
    sizeRange: "50 mm to 1200 mm Outer Diameter (2\" to 48\" OD)",
    wallThickness: "2.0 mm to 80.0 mm Thickness",
    length: "Cut to Spec / Finish Machined",
    endConnections: "Square Cut / Machine Beveled / Clean Deburred",
    shortDescription: "Specialized high-alloy and 6% molybdenum super-austenitic circles for hot sulfuric acid, seawater scrubbing, and fertilizer reactor heads.",
    overview: "Supreme Metal & Alloys stocks and cuts specialized high-alloy plate circles in 254 SMO, Alloy 20, AL-6XN, and 904L per ASTM B463 and A240. Developed specifically to bridge the gap between conventional austenitic stainless steels and high-cost nickel alloys, offering PREN ≥ 43 pitting resistance in high-chloride, acidic environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B463 (Alloy 20), ASTM A240 (254 SMO / 904L), ASTM B688, EN 10088-2" },
      { label: "Pitting Resistance (PREN)", value: "PREN ≥ 43 (254 SMO), PREN ≥ 36 (904L)" },
      { label: "Outer Diameter (OD) Range", value: "50 mm to 1200 mm" },
      { label: "Thickness Range", value: "2.0 mm to 80.0 mm" },
      { label: "Corrosion Resistance", value: "Immune to hot sulfuric acid (Alloy 20) and brackish seawater pitting (254 SMO)" },
      { label: "Cutting Method", value: "CNC Fiber Laser & Pure Abrasive Waterjet" },
      { label: "Surface Finish", value: "No. 1 HRAP / Pickled / Satin Finish / Face Turned" },
      { label: "Testing & Documentation", value: "ASTM G48 Pitting Test, 100% PMI, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B463 / ASME SB463 - UNS N08020, N08026, and N08024 Alloy Plate, Sheet",
      "ASTM A240 / A240M - UNS S31254 (254 SMO) Plate, Sheet, and Strip",
      "ASTM B688 - UNS N08367 (AL-6XN) Plate, Sheet, and Strip",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Phosphoric and sulfuric acid fertilizer production vessel heads",
      "Flue gas desulfurization (FGD) absorber tower end discs and agitator blades",
      "Seawater reverse osmosis (SWRO) high-pressure membrane vessel blinds",
      "Pulp and paper chlorine dioxide bleaching washer drums and covers"
    ],
    technicalDetails: {
      manufacturingType: "CNC Laser & Cold Waterjet Profiled from Certified Master Mill Plates",
      pressureRating: "Tensile Strength ≥ 650 N/mm² | Yield Strength ≥ 300 N/mm²",
      tolerance: "High Precision ±0.5 mm on laser profiling",
      certifications: "EN 10204 3.1 MTC with ASTM G48 Method A Ferric Chloride Pitting Certification"
    }
  },
  {
    id: "circle-duplex",
    slug: "circle-duplex",
    name: "Duplex 2205 High-Strength Plate Circles & Discs",
    title: "Duplex 2205 High-Strength Plate Circles & Discs",
    material: "Duplex",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: duplexCircleImg,
    heroImage: duplexCircleImg,
    grades: ["UNS S31803", "UNS S32205 (Duplex 2205)", "DIN 1.4462", "ASTM A240 Gr 2205", "ASTM A182 F51"],
    forms: ["CNC Laser Cut Circles", "High-Definition Plasma Discs", "Waterjet Profiled Blanks", "Forged Duplex Blind Discs"],
    sizeRange: "50 mm to 1500 mm Outer Diameter (2\" to 60\" OD)",
    wallThickness: "2.0 mm to 120.0 mm Thickness",
    length: "Cut to Diameter / CNC Turned",
    endConnections: "Square Cut / Machine Beveled / Deburred",
    shortDescription: "High-yield-strength Duplex 2205 plate circles and forged disc blanks (PREN 34-36) offering double the mechanical strength of 316L with superior chloride SCC resistance.",
    overview: "Supreme Metal & Alloys stocks and cuts Duplex 2205 (UNS S31803 / S32205) circles conforming to ASTM A240 and ASTM A182 F51. Characterized by an optimized 50/50 austenitic-ferritic microstructure, offering double the yield strength of standard austenitic grades and exceptional resistance to chloride stress corrosion cracking in marine and chemical plant equipment.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240 (Plate), ASTM A182 F51 (Forgings), EN 10088-2, DIN 1.4462" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 34.0 - 36.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 450 N/mm² (Double that of standard 316L)" },
      { label: "Outer Diameter (OD) Range", value: "50 mm to 1500 mm" },
      { label: "Thickness Range", value: "2.0 mm to 120.0 mm" },
      { label: "Cutting Process", value: "CNC Fiber Laser / Cold Abrasive Waterjet / HD Plasma" },
      { label: "Microstructure Balance", value: "40% - 60% Ferrite Balance verified per ASTM E562" },
      { label: "Quality Testing & MTC", value: "ASTM A923 Method C, 100% PMI, UT per ASTM A578, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S31803 / S32205 Chromium and Chromium-Nickel Stainless Steel Plate",
      "ASTM A182 / A182M - Forged Alloy and Stainless Steel Pipe Flanges (Grade F51 / F60)",
      "ASTM A923 - Standard Test Methods for Detecting Detrimental Intermetallic Phases in Duplex",
      "NACE MR0175 / ISO 15156 Compliant for Sour Oilfield Service"
    ],
    applications: [
      "Offshore oil & gas separation vessel heads, hydrocyclones, and blind flanges",
      "Chemical tanker cargo tank bottom sumps, heating coil plates, and hatch covers",
      "Biofuel distillation columns, pulp digesters, and chlorine dioxide stage baffles",
      "Marine scrubbers, ballast water treatment filters, and high-pressure pumps"
    ],
    technicalDetails: {
      manufacturingType: "CNC Laser & Waterjet Cut from Mill Solution Annealed Plate (1050°C Quenched)",
      pressureRating: "Yield Strength ≥ 450 N/mm² | Tensile Strength 655 - 880 N/mm²",
      tolerance: "High Precision ±0.5 mm to ±1.0 mm depending on thickness",
      certifications: "EN 10204 3.1 Inspection Certificate with Ferrite Count & ASTM A923 Test Data"
    }
  },
  {
    id: "circle-super-duplex",
    slug: "circle-super-duplex",
    name: "Super Duplex 2507 Extreme-Service Plate Circles & Discs",
    title: "Super Duplex 2507 Extreme-Service Plate Circles & Discs",
    material: "Super Duplex",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: superDuplexCircleImg,
    heroImage: superDuplexCircleImg,
    grades: ["UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "DIN 1.4410", "DIN 1.4501", "ASTM A182 F53", "ASTM A182 F55"],
    forms: ["CNC Waterjet Profiled Circles", "High-Definition Laser Discs", "Heavy Forged Super Duplex Blanks", "Desalination End Plates"],
    sizeRange: "50 mm to 1500 mm Outer Diameter (2\" to 60\" OD)",
    wallThickness: "3.0 mm to 120.0 mm Thickness",
    length: "Cut to Spec / Turned Blanks",
    endConnections: "Square Cut / Machine Beveled / Deburred",
    shortDescription: "Ultra-high-strength Super Duplex 2507 and Zeron 100 plate circles (PREN ≥ 42) for high-pressure reverse osmosis, subsea manifolds, and hot seawater applications.",
    overview: "Supreme Metal & Alloys stocks prime Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) plate circles and forged discs conforming to ASTM A240 and ASTM A182 F53/F55. Engineered with 25% chromium and 4% molybdenum, delivering an exceptional PREN ≥ 42 for immunity to crevice corrosion in warm ambient seawater and high-pressure sour gas environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 (Plate), ASTM A182 F53/F55 (Forgings), NORSOK M-650 / M-630 MDS D55" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 42.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 550 N/mm² (Extremely high mechanical load capacity)" },
      { label: "Outer Diameter (OD) Range", value: "50 mm to 1500 mm" },
      { label: "Thickness Range", value: "3.0 mm to 120.0 mm" },
      { label: "Cutting Method", value: "Cold Abrasive Waterjet (Prevents sigma phase formation)" },
      { label: "Intermetallic Phase Testing", value: "100% Verified Free of Sigma/Chi Phase per ASTM A923 Method C" },
      { label: "Impact Toughness", value: "Charpy V-Notch Tested at -46°C (≥ 80 Joules average)" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S32750 / S32760 Super Duplex Stainless Steel Plate",
      "ASTM A182 / A182M - Forged Flanges and Parts in Super Duplex (Grade F53 / F55)",
      "NORSOK M-630 MDS D55 (Plate) & MDS D54 (Forgings)",
      "NACE MR0175 / ISO 15156 Certified for Critical Subsea Applications"
    ],
    applications: [
      "Seawater reverse osmosis (SWRO) high-pressure membrane vessel head plates",
      "Subsea production manifolds, umbilical connection discs, and riser closures",
      "Offshore topside firewater deluge system flanges and blinded tees",
      "Geothermal brine extraction wellheads and sour gas scrubber bottom cones"
    ],
    technicalDetails: {
      manufacturingType: "Cold Abrasive Waterjet Profiled from NORSOK Qualified Master Plates",
      pressureRating: "Yield Strength ≥ 550 N/mm² | Tensile Strength 750 - 1000 N/mm²",
      tolerance: "Waterjet Precision ±0.5 mm on diameter",
      certifications: "EN 10204 3.2 / 3.1 with ASTM G48 Method A Corrosion Test & Ferrite Count (NORSOK)"
    }
  },
  {
    id: "circle-titanium",
    slug: "circle-titanium",
    name: "Titanium Precision Rolled Circles & Forged Discs",
    title: "Titanium Precision Rolled Circles & Forged Discs",
    material: "Titanium",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: titaniumCircleImg,
    heroImage: titaniumCircleImg,
    grades: ["Titanium Grade 1", "Titanium Grade 2", "Titanium Grade 5 (Ti-6Al-4V)", "Titanium Grade 7 (Ti-Pd)", "Titanium Grade 12"],
    forms: ["CNC Waterjet Cut Circles", "High-Vacuum Precision Laser Discs", "Forged Titanium Discs", "Electrochemical Anode Plates"],
    sizeRange: "50 mm to 1200 mm Outer Diameter (2\" to 48\" OD)",
    wallThickness: "1.0 mm to 80.0 mm Thickness",
    length: "Cut to Spec / Finish Turned",
    endConnections: "Cold Waterjet Cut / Burr-Free / Precision Ground",
    shortDescription: "Ultra-lightweight, bio-compatible, high-purity Titanium Grade 2 and Grade 5 (Ti-6Al-4V) circles for chlor-alkali cells, aerospace turbines, and medical autoclaves.",
    overview: "Supreme Metal & Alloys stocks high-purity commercially pure (Gr 1/2) and alpha-beta alloy (Gr 5 Ti-6Al-4V) titanium circles conforming to ASTM B265 and ASTM B381. Cut strictly via cold abrasive waterjet to maintain vacuum-annealed metallurgical properties. Offers outstanding strength-to-weight ratio, complete immunity to seawater and wet chlorine, and total biological compatibility.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B265 / ASME SB265 (Plate), ASTM B381 (Forgings), AMS 4911, AMS 4928" },
      { label: "Grades Stocked", value: "Grade 1 (CP4), Grade 2 (CP3 Standard), Grade 5 (Ti-6Al-4V High Strength), Grade 7 (0.2% Pd)" },
      { label: "Density", value: "4.51 g/cm³ (Approx. 45% lighter than steel)" },
      { label: "Outer Diameter (OD) Range", value: "50 mm to 1200 mm" },
      { label: "Thickness Range", value: "1.0 mm to 80.0 mm" },
      { label: "Cutting Method", value: "Cold Abrasive Waterjet (Zero oxygen pick-up, zero HAZ)" },
      { label: "Corrosion Immunity", value: "Total immunity to wet chlorine gas, sodium hypochlorite, and marine immersion" },
      { label: "Quality Testing & MTC", value: "100% PMI, Ultrasonic Testing per AMS 2631, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B265 / ASME SB265 - Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "ASTM B381 - Titanium and Titanium Alloy Forgings",
      "AMS 4911 - Titanium Alloy Sheet, Strip, and Plate 6Al-4V Annealed",
      "ISO 5832-2 / ASTM F67 for Surgical Implant Applications"
    ],
    applications: [
      "Chlor-alkali electrolysis membrane cells and dimensionally stable anodes (DSA)",
      "Aerospace turbine compressor shroud covers and jet engine casing discs",
      "Chemical plant chlorine dioxide bleaching and brine chlorination baffles",
      "Medical titanium autoclave autoclaves and prosthetic surgical blanking"
    ],
    technicalDetails: {
      manufacturingType: "Cold Abrasive Waterjet Cut & Vacuum Arc Remelted (VAR) Forged Discs",
      pressureRating: "Grade 2 Tensile ≥ 345 N/mm² | Grade 5 Tensile ≥ 895 N/mm²",
      tolerance: "Waterjet Precision ±0.3 mm to ±0.6 mm",
      certifications: "EN 10204 3.1 Inspection Certificate with Full Chemical & Gas Interstitial Analysis"
    }
  },
  {
    id: "circle-exotic-alloy",
    slug: "circle-exotic-alloy",
    name: "Exotic Refractory Metal & Cobalt Superalloy Discs",
    title: "Exotic Refractory Metal & Cobalt Superalloy Discs",
    material: "Exotic Alloy",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Circle",
    categorySlug: "circle",
    division: "SUPPLIER",
    image: exoticAlloyCircleImg,
    heroImage: exoticAlloyCircleImg,
    grades: ["Tantalum (UNS R05200)", "Zirconium 702 (UNS R60702)", "Niobium / Columbium", "MP35N", "Hastelloy B-3", "Inconel 718"],
    forms: ["Precision Waterjet Discs", "Vacuum Annealed Foil Circles", "Heavy Forged Reactor Discs", "Specialty Clad Blanks"],
    sizeRange: "25 mm to 800 mm Outer Diameter (1\" to 32\" OD)",
    wallThickness: "0.5 mm to 50.0 mm Thickness",
    length: "Cut to Spec / Vacuum Sealed",
    endConnections: "Clean Cut / Burr-Free / Machined Radius",
    shortDescription: "Specialized exotic refractory metal discs in Tantalum, Zirconium 702, and Niobium for boiling hydrochloric acid, nuclear reactors, and high-vacuum equipment.",
    overview: "Supreme Metal & Alloys stocks high-purity exotic metal circles and forged disc blanks in Tantalum, Zirconium, Niobium, and MP35N conforming to ASTM B708 and ASTM B551. Engineered for environments that surpass the chemical limitations of stainless steel and nickel alloys, such as hot concentrated mineral acids and nuclear reactor components.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B708 (Tantalum Plate), ASTM B551 (Zirconium Plate), ASTM B393 (Niobium), AMS 5844" },
      { label: "Melting Point Threshold", value: "Tantalum: 3017°C, Niobium: 2477°C, Zirconium: 1855°C" },
      { label: "Outer Diameter (OD) Range", value: "25 mm to 800 mm" },
      { label: "Thickness Range", value: "0.5 mm to 50.0 mm" },
      { label: "Chemical Immunity", value: "Immune to boiling concentrated HCl, aqua regia, wet chlorine, and organic acids" },
      { label: "Cutting Technology", value: "High-Precision Micro Abrasive Waterjet (Kerf width < 0.8 mm)" },
      { label: "Vacuum Purity", value: "Electron Beam Melted (EBM) / Vacuum Arc Remelted (VAR)" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 with Interstitial Gas Purity Analysis" }
    ],
    standards: [
      "ASTM B708 - Tantalum and Tantalum Alloy Plate, Sheet, and Strip",
      "ASTM B551 / B551M - Zirconium and Zirconium Alloy Strip, Sheet, and Plate",
      "ASTM B393 - Niobium and Niobium Alloy Strip, Sheet, and Plate",
      "AMS 5844 / AMS 5845 for Aerospace Cobalt-Nickel Alloys"
    ],
    applications: [
      "Hot concentrated hydrochloric acid reboilers, bayonet heaters, and vessel heads",
      "Nuclear reactor control rod shroud plates and fuel bundle assembly discs",
      "High-vacuum electronic sputtering targets and thermal evaporation sources",
      "Specialty biomedical implant closures and long-term pacemaker battery cans"
    ],
    technicalDetails: {
      manufacturingType: "Cold Abrasive Micro-Waterjet from Vacuum Annealed Refractory Sheet/Plate",
      pressureRating: "Severe Service Thermal & Chemical Withstand",
      tolerance: "High Precision ±0.2 mm to ±0.5 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, 100% PMI, Vacuum Purity Analysis"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Circle
export const getCircleProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  return (
    SUPPLIER_CIRCLE_PRODUCTS.find(
      (p) =>
        p.slug === clean ||
        p.id === clean ||
        p.slug === `circle-${clean}` ||
        clean === `circle-${p.materialSlug}` ||
        clean === `circles-${p.materialSlug}` ||
        clean === p.materialSlug
    ) || null
  );
};

export const getCircleProductsByMaterial = (matSlug = "") => {
  const clean = String(matSlug).toLowerCase().trim();
  if (clean === "all") return SUPPLIER_CIRCLE_PRODUCTS;
  return SUPPLIER_CIRCLE_PRODUCTS.filter((p) => p.materialSlug === clean);
};

export const getRelatedCircleProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim();
  return SUPPLIER_CIRCLE_PRODUCTS.filter(
    (p) => p.slug !== clean && p.id !== clean && !clean.includes(p.materialSlug)
  ).slice(0, 4);
};
