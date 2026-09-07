// Isolated Supplier Data Layer — Rods & Bars
// Source of truth: src/assets/All Products/Supplier division/Rods and BArs/

import ssRodsImg from "../assets/All Products/Supplier division/Rods and BArs/stainless steel.png";
import carbonRodsImg from "../assets/All Products/Supplier division/Rods and BArs/carbon.png";
import alloySteelRodsImg from "../assets/All Products/Supplier division/Rods and BArs/Alloy steel.png";
import nickelRodsImg from "../assets/All Products/Supplier division/Rods and BArs/Nikle.png";
import highAlloyRodsImg from "../assets/All Products/Supplier division/Rods and BArs/high alloys.png";
import duplexRodsImg from "../assets/All Products/Supplier division/Rods and BArs/duplex.png";
import superDuplexRodsImg from "../assets/All Products/Supplier division/Rods and BArs/Super duplex.png";
import titaniumRodsImg from "../assets/All Products/Supplier division/Rods and BArs/titainium.png";
import exoticRodsImg from "../assets/All Products/Supplier division/Rods and BArs/Exotic.png";

export {
  ssRodsImg,
  carbonRodsImg,
  alloySteelRodsImg,
  nickelRodsImg,
  highAlloyRodsImg,
  duplexRodsImg,
  superDuplexRodsImg,
  titaniumRodsImg,
  exoticRodsImg
};

// Exact 9 Materials verified in the Rods and BArs folder
export const SUPPLIER_RODS_MATERIALS = [
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

export const SUPPLIER_RODS_PRODUCTS = [
  {
    id: "rod-stainless-steel",
    slug: "rods-bars-stainless-steel",
    name: "Stainless Steel Round, Hex & Square Bars",
    title: "Stainless Steel Round, Hex & Square Bars",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: ssRodsImg,
    heroImage: ssRodsImg,
    grades: ["AISI 304 / 304L", "AISI 316 / 316L", "AISI 316Ti", "AISI 321", "AISI 310S", "AISI 410 / 420 / 431", "17-4PH (UNS S17400)"],
    forms: ["Centerless Ground Bright Bar (h8/h9)", "Peeled & Polished Round Bar", "Hot Rolled Black Bar", "Bright Hexagonal Bar", "Square Bar", "Forged Shaft"],
    sizeRange: "Diameter: 3.0mm to 350.0mm | Hex Size: 6mm to 75mm A/F | Square: 6mm to 100mm | Length: 3m to 6.5m or Cut Pieces",
    tolerances: "h8, h9, h10, h11, DIN 1013, ASTM A484",
    shortDescription: "Precision centerless ground, peeled, and forged stainless steel bars in austenitic, martensitic, and precipitation hardening grades for precision CNC machining.",
    overview: "Supreme Metal & Alloys stocks prime stainless steel round, hexagonal, and square bars conforming to ASTM A276 and ASTM A479. Sourced with stringent dimensional tolerance controls (h8/h9) and pristine metallurgical cleanliness, our stainless steel bars deliver superior machinability, surface finish, and mechanical toughness for precision pump shafts, valve spindles, fasteners, and aerospace components.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / ASME SA276, ASTM A479 / ASME SA479, ASTM A582, EN 10088-3, DIN 1013" },
      { label: "Diameter & Size Range", value: "3.0 mm to 350.0 mm (Bright: 3-100mm, Forged/Peeled: 50-350mm)" },
      { label: "Bar Forms Available", value: "Round Bar, Hexagonal Bar (A/F), Square Bar, Flat Bar, Precision Forged Shaft" },
      { label: "Dimensional Tolerances", value: "ISO h8, h9, h10, h11, ASTM A484 Class A/B" },
      { label: "Surface Finishes", value: "Centerless Ground (Ra < 0.4µm), Peeled & Smooth Turned, Polished, Black As-Forged" },
      { label: "Thermal Conditions", value: "Annealed, Quenched & Tempered (Q+T), Solution Treated, Double Aged (H1150, H900 for 17-4PH)" },
      { label: "Inspection & Testing", value: "100% Ultrasonic Tested per ASTM A388, Eddy Current Tested, Surface Crack Detection, EN 10204 3.1" }
    ],
    standards: [
      "ASTM A276 / A276M - Standard Specification for Stainless Steel Bars and Shapes",
      "ASTM A479 / A479M - Stainless Steel Bars and Shapes for Use in Boilers and Other Pressure Vessels",
      "ASTM A582 / A582M - Free-Machining Stainless Steel Bars",
      "EN 10088-3 - Stainless steels - Technical delivery conditions for semi-finished products, bars, rods, wire",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "High-pressure valve stems, gate spindles, and ball valve trunnions",
      "Centrifugal pump shafts, marine boat propeller shafts, and agitator drive rods",
      "Precision CNC turned components, threaded studs, fasteners, and dowel pins",
      "Aerospace hydraulic actuators, landing gear pins, and engine mounting brackets",
      "Food and pharmaceutical processing machinery drive shafts and slicing blades",
      "Chemical injection quills, thermowells, and high-pressure instrument fittings"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn & Centerless Ground / Forged & Rough Turned",
      straightnessTolerance: "≤ 0.5 mm per meter strict straightness for high-speed CNC turning",
      surfaceRoughness: "Ra ≤ 0.4 µm (centerless ground)",
      certifications: "EN 10204 Type 3.1 & 3.2 Mill Test Certificates, NDT Ultrasonic Verified"
    }
  },
  {
    id: "rod-carbon-steel",
    slug: "rods-bars-carbon-steel",
    name: "Carbon & Engineering Steel Round Bars",
    title: "Carbon & Engineering Steel Round Bars",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: carbonRodsImg,
    heroImage: carbonRodsImg,
    grades: ["AISI 1018 / 1020", "AISI 1045", "EN8 (080M40)", "EN9 (070M55)", "C45 (1.1191)", "A105 Forged"],
    forms: ["Bright Drawn Round Bar", "Peeled & Turned Shafting", "Hot Rolled Black Bar", "Forged Heavy Round"],
    sizeRange: "Diameter: 6.0mm to 500.0mm | Length: 3m to 6m, Custom Cut Discs & Billets",
    tolerances: "h9, h11, IS 3739, ASTM A29",
    shortDescription: "High-integrity carbon and medium-carbon engineering steel round bars for high-torque shafts, gears, automotive axles, and heavy hydraulic cylinders.",
    overview: "Supreme Metal & Alloys stocks prime Carbon Steel and Engineering Steel bright round bars and forged shafts conforming to AISI 1018, 1045, EN8, and C45. Characterized by uniform core microstructure, excellent weldability, and balanced response to induction hardening, our carbon steel bars are extensively utilized in automotive drivetrains, hydraulic piston rods, precision machine tool shafts, and general industrial engineering.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A29 / A29M, ASTM A108, BS 970 (EN8, EN9), DIN 17200 (C45), IS 1570" },
      { label: "Diameter Range", value: "6.0 mm to 500.0 mm (Bright: 6-120mm, Forged: 100-500mm)" },
      { label: "Supply Conditions", value: "Cold Drawn Bright, Peeled & Polished, Hot Rolled Normalized, Quenched & Tempered" },
      { label: "Machinability Index", value: "Excellent machinability, high chip breakability (AISI 1018 / 1045)" },
      { label: "Hardness Profile", value: "Annealed: 160–210 HBW | Induction hardened surface achievable up to 55–60 HRC" },
      { label: "Surface Finish & Protection", value: "Bright Clean, Anti-Rust Oil Coated, End Protected with Plastic Caps" },
      { label: "Quality Checks", value: "100% Spark & Spectro Verified, Ultrasonic Testing per ASTM A388, EN 10204 3.1" }
    ],
    standards: [
      "ASTM A108 - Standard Specification for Steel Bar, Carbon and Alloy, Cold-Finished",
      "ASTM A29 / A29M - General Requirements for Steel Bars, Carbon and Alloy, Hot-Wrought",
      "BS 970 Part 1 - Wrought steels for mechanical and allied engineering purposes",
      "EN 10083-2 - Steels for quenching and tempering - Non alloy quality steels"
    ],
    applications: [
      "High-torque transmission shafts, keyed drives, and automotive drive axles",
      "Hydraulic and pneumatic cylinder piston rods (induction hard chrome plated stock)",
      "Heavy industrial machine spindles, gears, pinions, and conveyor rollers",
      "High-tensile bolts, foundation anchor studs, and tie-rod assemblies",
      "Excavator hinge pins, crane hoist pins, and structural pivot bushings",
      "Forged blanks for flanges, rings, and heavy mechanical couplings"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn / Hot Rolled Normalized / Vacuum Degassed Forged",
      tensileStrength: "550 to 750 MPa (EN8 / C45 conditioned)",
      yieldStrength: "Minimum 350 to 450 MPa",
      certifications: "EN 10204 3.1 Mill Test Certificate, Chemical & Mechanical Verified"
    }
  },
  {
    id: "rod-alloy-steel",
    slug: "rods-bars-alloy-steel",
    name: "Alloy Steel High-Tensile Round & Forged Bars",
    title: "Alloy Steel High-Tensile Round & Forged Bars",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: alloySteelRodsImg,
    heroImage: alloySteelRodsImg,
    grades: ["AISI 4140 / 42CrMo4", "AISI 4340 / 34CrNiMo6", "EN19 (708M40)", "EN24 (817M40)", "EN36C", "AISI 8620", "ASTM A182 F11 / F22"],
    forms: ["Bright Peeled & Turned Bar", "Quenched & Tempered Round", "Forged Heavy Shaft", "Hexagonal Bar"],
    sizeRange: "Diameter: 10.0mm to 450.0mm | Length: 3m to 7m or Pre-Cut Shaft Blanks",
    tolerances: "h9, h11, DIN 1013, ASTM A29",
    shortDescription: "High-strength chromium-molybdenum and nickel-chromium-moly alloy steel bars heat treated for high fatigue strength, torsional toughness, and impact resistance.",
    overview: "Supreme Metal & Alloys stocks premium Alloy Steel round bars and heavy forged shafts in AISI 4140, 4340, EN19, and EN24 in normalized, annealed, and quenched & tempered (hardened & tempered 'T' condition) states. Engineered to endure severe torsional stress, shock loading, and fatigue in high-stress machinery, these alloy steel bars undergo 100% ultrasonic testing to ensure zero internal voids or center-line segregation.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A29, ASTM A322, ASTM A108, BS 970 (EN19, EN24), EN 10083-3 (42CrMo4, 34CrNiMo6)" },
      { label: "Diameter Range", value: "10.0 mm to 450.0 mm (Rolled 10-150mm, Forged 150-450mm)" },
      { label: "Heat Treatment States", value: "Quenched & Tempered (Condition T / U), Annealed, Normalized, Hardened & Tempered" },
      { label: "Tensile Strength Range", value: "850 to 1100 MPa (Condition T per BS 970 / EN 10083)" },
      { label: "Yield Strength Range", value: "Minimum 650 to 900 MPa" },
      { label: "Impact Toughness", value: "Charpy V-Notch impact testing > 50 Joules at -20°C and room temperature" },
      { label: "Ultrasonic Verification", value: "100% Ultrasonic Testing per ASTM A388 / EN 10228-3 Class 3/4" }
    ],
    standards: [
      "ASTM A322 - Standard Specification for Steel Bars, Alloy, Standard Grades",
      "EN 10083-3 - Steels for quenching and tempering - Technical delivery conditions for alloy steels",
      "BS 970 Part 1 - Wrought Steels for Mechanical and Allied Engineering Purposes (EN19, EN24)",
      "API Specification 6A - Wellhead and Tree Equipment (Materials class for high-strength bolting/shafts)"
    ],
    applications: [
      "High-stress oilfield drilling equipment, mud pump shafts, and drill collars",
      "Aircraft landing gear retraction cylinders, drive shafts, and rotor components",
      "Automotive crankshafts, connecting rods, steering knuckles, and axle shafts",
      "Heavy industrial gearbox shafts, high-torque pinions, and planetary gears",
      "High-pressure hydraulic cylinder tie rods and extrusion press tie bars",
      "Wind turbine main drive shafts and industrial crane hoist pins"
    ],
    technicalDetails: {
      manufacturingType: "Electric Arc Furnace Clean Melt / Vacuum Degassed Forged",
      hardenability: "Through-hardening alloy with deep hardenability for large cross-sections",
      temperEmbrittlement: "Carefully controlled P and Sn residuals to eliminate temper embrittlement",
      certifications: "EN 10204 3.1 & 3.2 Mill Test Certificates with Full Hardness and Toughness Verification"
    }
  },
  {
    id: "rod-nickel-alloy",
    slug: "rods-bars-nickel-alloy",
    name: "Nickel Alloy High-Performance Round & Hex Bars",
    title: "Nickel Alloy High-Performance Round & Hex Bars",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: nickelRodsImg,
    heroImage: nickelRodsImg,
    grades: ["Inconel 625 (UNS N06625)", "Inconel 718 (UNS N07718)", "Monel 400 (UNS N04400)", "Monel K500 (UNS N05500)", "Hastelloy C276 (UNS N10276)", "Incoloy 825 (UNS N08825)", "Nickel 200 / 201"],
    forms: ["Centerless Ground Precision Bar", "Peeled & Polished Round", "Cold Drawn Hex Bar", "Forged Heavy Billet"],
    sizeRange: "Diameter: 3.0mm to 300.0mm | Hex: 8mm to 65mm A/F | Length: 2m to 6m or Cut Discs",
    tolerances: "h8, h9, h10, ASTM B166, ASTM B473",
    shortDescription: "Extreme-temperature and ultra-corrosion-resistant nickel alloy bars for aerospace turbine shafts, marine propeller shafts, and sour gas wellhead components.",
    overview: "Supreme Metal & Alloys stocks high-performance Nickel Alloy round and hexagonal bars in Inconel, Monel, Hastelloy, and Incoloy conforming to ASTM B166, B164, and B574. Offering high tensile strength, high creep-rupture endurance up to 1000°C, and complete immunity to chloride stress corrosion cracking, our nickel alloy bars are the gold standard for severe oilfield subsea equipment, chemical pumps, and aerospace turbo-machinery.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B166 (Inconel 600/625), ASTM B637 (Inconel 718), ASTM B164 (Monel 400), ASTM B865 (Monel K500), ASTM B574 (Hastelloy C276)" },
      { label: "Diameter Range", value: "3.0 mm to 300.0 mm (Precision ground up to 80mm, Forged 80-300mm)" },
      { label: "Forms & Profiles", value: "Round Bar, Hexagonal Bar, Square Bar, Forged Shaft, Ring Blank" },
      { label: "Thermal Conditions", value: "Solution Annealed, Age Hardened / Precipitation Hardened (Inconel 718 per AMS 5662/5663), Hot Finished" },
      { label: "Machining Tolerances", value: "ISO h8, h9, h11 precision diameter tolerances" },
      { label: "Non-Destructive Testing", value: "100% Ultrasonic Testing per AMS 2630 / ASTM E214, 100% PMI Spectro-Analysis" },
      { label: "Certifications", value: "EN 10204 Type 3.1 & 3.2, NACE MR0175 / ISO 15156, AMS Aerospace Certified" }
    ],
    standards: [
      "ASTM B637 - Precipitation-Hardening and Cold Worked Nickel Alloy Bars, Forgings, and Forging Stock (Inconel 718)",
      "ASTM B166 - Nickel-Chromium-Iron Alloys (UNS N06600, N06625) and Nickel-Chromium-Cobalt-Molybdenum Alloy Rod, Bar, and Wire",
      "ASTM B574 - Low-Carbon Nickel-Chromium-Molybdenum (Hastelloy C276) Rod",
      "ASTM B865 - Precipitation-Hardening Nickel-Copper-Aluminum Alloy (Monel K-500) Bar, Rod, and Wire",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "Offshore oil and gas downhole tools, subsea wellhead valve stems, and logging equipment",
      "Aerospace jet engine turbine discs, compressor blades, and high-strength fasteners (Inconel 718)",
      "Marine boat propeller shafts, rudder stocks, and pump impellers (Monel K500)",
      "Chemical process pump shafts, agitator shafts, and mechanical seal faces handling wet chlorine and sulfuric acid",
      "Nuclear reactor control rod drive mechanisms and springs",
      "Sour gas extraction choke valves and blowout preventer (BOP) components"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn & Precision Ground / Hot Forged & Solution Treated",
      yieldStrength: "Up to 1150 MPa (Inconel 718 Precipitation Hardened)",
      temperatureRange: "Cryogenic (-196°C) up to 980°C continuous service",
      certifications: "EN 10204 3.1 & 3.2 Mill Test Certificates with Full Stress-Rupture Verification"
    }
  },
  {
    id: "rod-high-alloy",
    slug: "rods-bars-high-alloy",
    name: "High Alloy Super-Austenitic Round Bars",
    title: "High Alloy Super-Austenitic Round Bars",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: highAlloyRodsImg,
    heroImage: highAlloyRodsImg,
    grades: ["Alloy 20 (UNS N08020 / Carpenter 20)", "904L (UNS N08904)", "254 SMO (UNS S31254)", "Nitronic 50 (UNS S20910)", "Nitronic 60 (UNS S21800)"],
    forms: ["Centerless Ground Bright Bar", "Peeled & Polished Round", "Cold Drawn Hex Bar", "Forged Shaft"],
    sizeRange: "Diameter: 6.0mm to 250.0mm | Length: 3m to 6m, Custom Cut Spindles",
    tolerances: "h9, h10, ASTM B473, ASTM A276",
    shortDescription: "Specialized high-alloy super-austenitic round bars engineered to resist boiling sulfuric acid, phosphoric acid, and galling wear in high-stress valve stems.",
    overview: "Supreme Metal & Alloys stocks high-performance High Alloy round bars in Carpenter Alloy 20 (UNS N08020), 904L, and 6% Moly alloys (254 SMO) conforming to ASTM B473 and ASTM A276. Developed specifically to handle severe inorganic acids and aggressive halide-bearing environments, our high alloy bars offer superior resistance to pitting, intergranular corrosion, and wear/galling (Nitronic 60) for chemical valve shafts, agitators, and sanitary marine equipment.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B473 (Alloy 20), ASTM A276 / A479 (904L, 254 SMO, Nitronic), ASME SB473" },
      { label: "Diameter Range", value: "6.0 mm to 250.0 mm (Precision ground 6-80mm, Forged 80-250mm)" },
      { label: "Profiles", value: "Round Bar, Hexagonal Bar, Square Bar, Custom Turned Billets" },
      { label: "Heat Treatment", value: "Solution Annealed at 1100°C–1150°C and Quenched in Water" },
      { label: "Galling Resistance", value: "Nitronic 60 provides industry-leading anti-galling and metal-to-metal wear resistance" },
      { label: "Acid Corrosion Qualification", value: "ASTM A262 Practice B/C Intergranular Corrosion Tested with zero sensitization" },
      { label: "NDT Verification", value: "100% Ultrasonic Tested, Eddy Current Tested, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B473 - UNS N08020, UNS N08026, and UNS N08024 Nickel-Alloy Bar and Wire",
      "ASTM A276 / ASTM A479 - Stainless Steel Bars and Shapes for Pressure Vessels",
      "ASTM A580 - Stainless Steel Wire and Rod",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Sulfuric acid mixing agitator shafts, pickling tank hooks, and valve trim",
      "High-pressure reverse osmosis (SWRO) high-pressure pump shafts (254 SMO)",
      "Pulp and paper bleaching equipment valve stems handling chlorine dioxide",
      "Marine steering gear pins, anti-galling fasteners, and wear rings (Nitronic 50/60)",
      "Fertilizer plant phosphoric acid slurry pumps and centrifuge shafts",
      "Pharmaceutical batch reactor drive shafts and sanitary impeller stems"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn Centerless Ground / Solution Annealed",
      prenRating: "PREN 35 to 45 (high localized pitting resistance)",
      sulfuricAcidService: "Impervious to sulfuric acid corrosion up to 40% concentration at elevated temps",
      certifications: "EN 10204 3.1 Mill Test Certificate, Full Traceability & Material Test Reports"
    }
  },
  {
    id: "rod-duplex",
    slug: "rods-bars-duplex",
    name: "Duplex 2205 Stainless Steel Round Bars",
    title: "Duplex 2205 Stainless Steel Round Bars",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: duplexRodsImg,
    heroImage: duplexRodsImg,
    grades: ["UNS S31803 (F51 / 1.4462)", "UNS S32205 (2205 / F60)"],
    forms: ["Centerless Ground Bright Bar (h9)", "Peeled & Polished Round Bar", "Heavy Forged Shaft", "Hexagonal Bar"],
    sizeRange: "Diameter: 5.0mm to 350.0mm | Length: 3m to 6m, Custom Cut Discs & Spindles",
    tolerances: "h9, h10, ASTM A484, DIN 1013",
    shortDescription: "High-yield dual-phase austenitic-ferritic stainless steel bars offering twice the mechanical strength of SS 316 and superior resistance to chloride stress corrosion cracking.",
    overview: "Supreme Metal & Alloys stocks certified Duplex 2205 (UNS S31803 / S32205) round and hexagonal bars conforming to ASTM A276 and ASTM A479. Engineered with an optimal 50/50 austenitic-ferritic dual-phase microstructure, Duplex 2205 provides a minimum yield strength of 450 MPa alongside outstanding resistance to chloride pitting, erosion corrosion, and stress corrosion cracking in marine propeller shafts, valve stems, and subsea fasteners.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / ASME SA276, ASTM A479 / ASME SA479, EN 10088-3, NORSOK MDS D47, ISO 15156" },
      { label: "Diameter Range", value: "5.0 mm to 350.0 mm (Bright: 5-80mm, Peeled/Forged: 50-350mm)" },
      { label: "Phase Balance Ratio", value: "Ferrite Content: 40% to 60% verified per ASTM E562" },
      { label: "Yield Strength Minimum", value: "450 MPa (over 2x of austenitic SS 316L)" },
      { label: "Tensile Strength Range", value: "650 to 880 MPa" },
      { label: "Corrosion Testing", value: "ASTM G48 Method A Ferric Chloride Pitting Test qualified at 25°C" },
      { label: "Ultrasonic Integrity", value: "100% Ultrasonic Testing per ASTM A388 / EN 10228-4 Class 3/4, EN 10204 3.1" }
    ],
    standards: [
      "ASTM A276 / A276M - Stainless Steel Bars and Shapes",
      "ASTM A479 / A479M - Stainless Steel Bars and Shapes for Boilers and Pressure Vessels",
      "NORSOK M-630 / M-650 - Material Data Sheet MDS D47 for Duplex Round Bar",
      "NACE MR0175 / ISO 15156-3 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "Offshore oil and gas topside choke valve stems, manifolds, and subsea studs",
      "Marine boat propeller shafts, stern tube bearings, and naval rudder stocks",
      "Seawater reverse osmosis (SWRO) high-pressure pump shafts and impellers",
      "Chemical tanker cargo pump shafts, butterfly valve pins, and agitator drive rods",
      "Pulp and paper digestor blow tank shafts and liquor extraction spindles",
      "High-strength subsea bolting, mooring pins, and offshore structural fasteners"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled Peeled & Polished / Cold Drawn Centerless Ground",
      prenRating: "PREN ≥ 35 (%Cr + 3.3%Mo + 16%N)",
      charpyImpact: "Charpy V-Notch impact tested at -46°C (minimum 80 Joules)",
      certifications: "EN 10204 Type 3.1 & 3.2 Certified, NORSOK MDS D47 Qualified"
    }
  },
  {
    id: "rod-super-duplex",
    slug: "rods-bars-super-duplex",
    name: "Super Duplex 2507 Stainless Steel Round Bars",
    title: "Super Duplex 2507 Stainless Steel Round Bars",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: superDuplexRodsImg,
    heroImage: superDuplexRodsImg,
    grades: ["UNS S32750 (2507 / F53 / 1.4410)", "UNS S32760 (Zeron 100 / F55 / 1.4501)"],
    forms: ["Precision Ground Bright Bar (h9)", "Peeled Round Bar", "Heavy Forged Marine Shaft", "Hexagonal Fastener Stock"],
    sizeRange: "Diameter: 6.0mm to 350.0mm | Length: 3m to 6.5m or Precision Cut Lengths",
    tolerances: "h9, h10, ASTM A484, NORSOK MDS D57",
    shortDescription: "Ultra-high strength 25% chromium super duplex round bars engineered for critical deepwater subsea tools, offshore valve stems, and marine pump shafts.",
    overview: "Supreme Metal & Alloys stocks certified Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) round and hexagonal bars conforming to ASTM A276, ASTM A479, and NORSOK M-630 MDS D57. With a verified Pitting Resistance Equivalent Number (PREN) ≥ 42 and exceptional yield strength (> 550 MPa), our super duplex bars deliver maximum resistance against crevice corrosion, erosion-corrosion, and fatigue in high-salinity seawater and sour oilfields.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / ASME SA276, ASTM A479 / ASME SA479, NORSOK MDS D57, EN 10088-3, ISO 15156" },
      { label: "Diameter Range", value: "6.0 mm to 350.0 mm (Ground 6-80mm, Heavy Forged 80-350mm)" },
      { label: "Phase Equilibrium", value: "Ferrite Content: 35% to 55% verified per ASTM E562" },
      { label: "Yield Strength Minimum", value: "550 MPa (extreme load-bearing capability)" },
      { label: "Tensile Strength Range", value: "750 to 1000 MPa" },
      { label: "Critical Pitting Temperature", value: "ASTM G48 Method A Ferric Chloride Pitting Test qualified at 50°C (zero pitting)" },
      { label: "Impact Properties", value: "Charpy V-Notch impact tested at -46°C (minimum 80 Joules single / 100 Joules avg)" }
    ],
    standards: [
      "ASTM A276 / A276M - Stainless Steel Bars and Shapes",
      "ASTM A479 / A479M - Stainless Steel Bars and Shapes for Boilers and Pressure Vessels",
      "NORSOK M-630 / M-650 - Material Data Sheet MDS D57 for Super Duplex Bar",
      "ISO 15156-3 / NACE MR0175 - Materials for use in H2S-containing environments"
    ],
    applications: [
      "Subsea Christmas tree valve stems, actuator shafts, and hydraulic control rods",
      "Offshore fire-water deluge pump shafts and high-pressure seawater lift shafts",
      "Seawater reverse osmosis (SWRO) high-pressure booster pump shafts",
      "High-tensile subsea bolting, stud bolts, and tie-down tensioner rods",
      "Chemical plant centrifuge spindles and heavy mixer agitator shafts",
      "Geothermal brine reinjection pump shafts and deep-well exploration tools"
    ],
    technicalDetails: {
      manufacturingType: "Forged & Solution Treated / Precision Centerless Ground",
      prenRating: "PREN ≥ 42 (Pitting Resistance Equivalent Number)",
      microstructure: "Free from intermetallic phases (sigma phase σ, chi phase χ)",
      certifications: "NORSOK M-650 Rev 4 Qualified, EN 10204 Type 3.2 Third-Party Witnessed Inspection Available"
    }
  },
  {
    id: "rod-titanium",
    slug: "rods-bars-titanium",
    name: "Titanium Precision Round & Hex Bars",
    title: "Titanium Precision Round & Hex Bars",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: titaniumRodsImg,
    heroImage: titaniumRodsImg,
    grades: ["Grade 1 (UNS R50250)", "Grade 2 (UNS R50400)", "Grade 5 / Ti-6Al-4V (UNS R56400)", "Grade 7 (UNS R52400 / Ti-Pd)", "Grade 12 (UNS R53400)"],
    forms: ["Centerless Ground Precision Bar (h8/h9)", "Peeled Round Bar", "Forged Titanium Shaft", "Cold Drawn Hex Bar"],
    sizeRange: "Diameter: 3.0mm to 300.0mm | Hex: 6mm to 50mm A/F | Length: 2m to 6m or Precision Cut Billets",
    tolerances: "h8, h9, ASTM B348, AMS 4928",
    shortDescription: "High strength-to-weight ratio titanium round bars delivering complete immunity to seawater corrosion, wet chlorine, and physiological environments.",
    overview: "Supreme Metal & Alloys stocks certified commercially pure Grade 2 and high-strength alpha-beta Grade 5 (Ti-6Al-4V) titanium round bars conforming to ASTM B348 and AMS 4928. Possessing half the weight of steel, high fatigue strength, and complete immunity to seawater pitting and crevice corrosion, our titanium bars are ideal for marine propeller shafts, aerospace structural fasteners, and high-performance surgical and chemical machinery.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B348 / ASME SB348, AMS 4928 (Grade 5 Aerospace), ASTM F67 / F136 (Biomedical), ISO 5832" },
      { label: "Diameter Range", value: "3.0 mm to 300.0 mm (Precision ground 3-60mm, Forged 60-300mm)" },
      { label: "Machining Tolerance", value: "ISO h8, h9 precision ground tolerance for Swiss-type CNC automatic lathes" },
      { label: "Density & Weight", value: "4.51 g/cm³ (approx. 45% lighter than stainless steel)" },
      { label: "Tensile Strength", value: "Grade 2: ≥ 345 MPa | Grade 5 (Ti-6Al-4V): ≥ 895 to 1000 MPa" },
      { label: "Surface Finish", value: "Centerless Ground (Ra < 0.4µm), Bright Turned, Polished" },
      { label: "Quality Checks", value: "100% Ultrasonic Tested per AMS 2631 Class A/AA, Gas Analysis (H, O, N, C), EN 10204 3.1" }
    ],
    standards: [
      "ASTM B348 / ASME SB348 - Titanium and Titanium Alloy Bars and Billets",
      "AMS 4928 - Titanium Alloy Bars, Wire, Forgings, and Rings 6Al-4V Annealed",
      "ASTM F136 - Wrought Titanium-6Aluminum-4Vanadium ELI for Surgical Implant Applications",
      "NACE MR0175 / ISO 15156 - Petroleum and Natural Gas Industries Materials"
    ],
    applications: [
      "Aerospace aircraft landing gear pins, wing spar bolts, and engine rotating fasteners",
      "Marine high-speed boat propeller shafts, underwater sonar mounts, and naval hydrofoils",
      "Chemical chlor-alkali pump shafts, titanium valve trim, and centrifuge shafts",
      "Biomedical orthopedic implant stems, bone screws, and dental fixture bars",
      "High-performance motorsport racing connecting rods, wheel hubs, and suspension links",
      "Seawater intake valve stems, subsea robotics frames, and desalination drive shafts"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Arc Remelted (VAR) / Precision Ground Annealed",
      fatigueStrength: "High fatigue endurance limit exceeding 500 MPa (Grade 5)",
      corrosionResistance: "Impervious to ambient and boiling seawater and chlorides up to 130°C",
      certifications: "EN 10204 3.1 Mill Test Certificate, Aerospace AMS 4928 Traceable"
    }
  },
  {
    id: "rod-exotic-alloy",
    slug: "rods-bars-exotic-alloy",
    name: "Exotic Alloy Refractory & Specialty Metal Bars",
    title: "Exotic Alloy Refractory & Specialty Metal Bars",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Rods & Bars",
    categorySlug: "rods-bars",
    division: "SUPPLIER",
    image: exoticRodsImg,
    heroImage: exoticRodsImg,
    grades: ["Zirconium 702 (UNS R60702)", "Zirconium 705 (UNS R60705)", "Tantalum (UNS R05200)", "Niobium / Columbo (UNS R04200)", "Incoloy 800H / 800HT"],
    forms: ["Centerless Ground Precision Rod", "Peeled Round Bar", "Vacuum Forged Shaft", "Precision Cut Billets"],
    sizeRange: "Diameter: 3.0mm to 150.0mm | Length: 1m to 4m, Custom Cut Discs",
    tolerances: "h8, h9, ASTM B550, ASTM B365",
    shortDescription: "Ultra-pure refractory and reactive metal round bars engineered for nuclear reactor cores, high-purity chemical synthesis, and aggressive acid reboiler shafts.",
    overview: "Supreme Metal & Alloys supplies certified Exotic Alloy round bars in Zirconium 702/705, Tantalum, and Niobium conforming to ASTM B550, ASTM B365, and ASTM B392. Exhibiting extraordinary resistance to boiling hydrochloric acid, wet chlorine, and nitric acid along with high melting points and ultra-low thermal neutron absorption cross sections, our exotic alloy bars are vital for critical nuclear reactor core control components, semiconductor manufacturing, and severe chemical valves.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B550 (Zirconium Bar), ASTM B365 (Tantalum Bar), ASTM B392 (Niobium Bar), ASME SB550" },
      { label: "Diameter Range", value: "3.0 mm to 150.0 mm (Precision ground 3-50mm, Forged 50-150mm)" },
      { label: "Melting Point", value: "Zirconium: 1855°C | Tantalum: 2996°C | Niobium: 2468°C" },
      { label: "Purity & Vacuum Annealing", value: "Vacuum Arc Remelted (VAR), 99.9% Purity, Vacuum Degassed & Annealed" },
      { label: "Acid Resistance", value: "Impervious to boiling hydrochloric acid, hot nitric acid, and wet chlorine" },
      { label: "Special Testing", value: "Helium Mass Spectrometer Leak Tested, 100% Ultrasonic Inspected, Interstitial Gas Analysis" }
    ],
    standards: [
      "ASTM B550 / B550M - Standard Specification for Zirconium and Zirconium Alloy Bar and Wire",
      "ASTM B365 - Standard Specification for Tantalum and Tantalum Alloy Rod and Wire",
      "ASTM B392 - Standard Specification for Niobium and Niobium Alloy Bar, Rod, and Wire",
      "ASME Boiler and Pressure Vessel Code Section III (Nuclear Grade)"
    ],
    applications: [
      "Nuclear reactor core control rod drive shafts, tie rods, and grid spacer components",
      "Boiling hydrochloric acid reboiler pump shafts, mixer impellers, and valve spindles",
      "Commercial urea, nitric acid, and organic synthesis reactor internal shafts",
      "Semiconductor high-temperature vacuum furnace heating elements and supports",
      "Superconducting radio frequency (SRF) cavity components and particle physics bars",
      "Specialized medical neurosurgical implant electrodes and radiographic marker pins"
    ],
    technicalDetails: {
      manufacturingType: "Cold Worked Vacuum Annealed & Precision Ground",
      nuclearCrossSection: "Ultra-low thermal neutron capture cross section (< 0.18 barns for Zr)",
      surfaceFinish: "Centerless Ground Ra < 0.4 µm, Vacuum Packed",
      certifications: "EN 10204 3.1 & 3.2 Certified, Full Chemical Spectrographic Certificate"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Rods & Bars
export const getRodsProductBySlug = (slug) => {
  return SUPPLIER_RODS_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
};

export const getRodsProductsByMaterial = (materialSlug) => {
  if (!materialSlug || materialSlug === "all") return SUPPLIER_RODS_PRODUCTS;
  return SUPPLIER_RODS_PRODUCTS.filter((p) => p.materialSlug === materialSlug);
};

export const getRelatedRodsProducts = (currentSlug) => {
  return SUPPLIER_RODS_PRODUCTS.filter((p) => p.slug !== currentSlug && p.id !== currentSlug);
};
