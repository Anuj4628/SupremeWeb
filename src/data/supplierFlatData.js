// Isolated Supplier Data Layer — Flat (Flat Bars)
// Source of truth: src/assets/All Products/Supplier division/flat/
// Category: Flat (division: "SUPPLIER")

import ssFlatImg from "../assets/All Products/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg";
import carbonFlatImg from "../assets/All Products/Supplier division/flat/carbon.avif";
import alloySteelFlatImg from "../assets/All Products/Supplier division/flat/alloy steel.jpg";
import nickelFlatImg from "../assets/All Products/Supplier division/flat/nikle.png";
import highAlloyFlatImg from "../assets/All Products/Supplier division/flat/high alloy.jpg";
import duplexFlatImg from "../assets/All Products/Supplier division/flat/duplex.jpg";
import superDuplexFlatImg from "../assets/All Products/Supplier division/flat/super duplex.jpg";
import titaniumFlatImg from "../assets/All Products/Supplier division/flat/titanium-flat-bar.jpg";
import exoticAlloyFlatImg from "../assets/All Products/Supplier division/flat/exotic.webp";

export {
  ssFlatImg,
  carbonFlatImg,
  alloySteelFlatImg,
  nickelFlatImg,
  highAlloyFlatImg,
  duplexFlatImg,
  superDuplexFlatImg,
  titaniumFlatImg,
  exoticAlloyFlatImg
};

// Exact 9 Materials verified in the flat folder (guaranteeing strict isolation)
export const SUPPLIER_FLAT_MATERIALS = [
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

export const SUPPLIER_FLAT_PRODUCTS = [
  {
    id: "flat-stainless-steel",
    slug: "flat-stainless-steel",
    name: "Stainless Steel Precision Flat Bars",
    title: "Stainless Steel Precision Flat Bars",
    material: "Stainless Steel",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: ssFlatImg,
    heroImage: ssFlatImg,
    grades: ["AISI 304", "AISI 304L", "AISI 316", "AISI 316L", "AISI 321", "AISI 310S", "AISI 316Ti", "AISI 904L"],
    forms: ["Cold Drawn Flat Bars", "Hot Rolled Annealed & Pickled (HRAP)", "Slit & Edged Flat Bars", "Centerless Ground Flasts"],
    sizeRange: "10 mm to 300 mm Width (0.39\" to 12.0\")",
    wallThickness: "2.0 mm to 50.0 mm Thickness (0.08\" to 2.0\")",
    length: "3 to 6 Meters Random, Custom Cut-to-Length up to 12 Meters",
    endConnections: "Square Clean Cut / Deburred / Chamfered",
    shortDescription: "Precision cold drawn and hot rolled annealed & pickled (HRAP) stainless steel flat bars for architectural framing, structural brackets, marine hardware, and machinery bases.",
    overview: "Supreme Metal & Alloys stocks and distributes high-precision stainless steel flat bars conforming to ASTM A276, ASTM A479, and DIN 1017. Sourced from premier domestic and global mills, our flat bars are produced with tight corner radii, uniform rectangular cross-sections, and exceptional surface finishes ranging from industrial HRAP to mirror-bright cold drawn. Ideal for sanitary food equipment, architectural trims, marine fabrications, and chemical machinery.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / ASME SA276, ASTM A479 / ASME SA479, EN 10058, DIN 1017" },
      { label: "Width Range", value: "10 mm to 300 mm (0.39\" to 12.0\")" },
      { label: "Thickness Range", value: "2.0 mm to 50.0 mm (0.08\" to 2.0\")" },
      { label: "Production Finish Options", value: "Cold Drawn (Bright h11), HRAP (Hot Rolled Annealed & Pickled), Polished #4 Satin" },
      { label: "Edge Conditions", value: "Sharp 90° Square Edge, Slit & Deburred, Round Edge (Full Radius available)" },
      { label: "Dimensional Tolerances", value: "Per EN 10058 / ASTM A484 precision bar drawing standards" },
      { label: "Straightness Guarantee", value: "Max 1.0 mm per meter straightness tolerance" },
      { label: "Quality Testing & MTC", value: "100% PMI, Tensile Test, Hardness, Microstructure, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A276 / A276M - Stainless Steel Bars and Shapes",
      "ASTM A479 / A479M - Stainless Steel Bars and Shapes for Use in Boilers and Other Pressure Vessels",
      "EN 10058 - Hot Rolled Flat Steel Bars for General Purposes",
      "DIN 1017 - Steel Flat Bars for General Applications",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Architectural facade framing, glass balustrades, and interior stainless trim",
      "Heavy industrial machinery base plates, guide rails, and linear wear strips",
      "Marine boat hardware, engine mounting brackets, and rudder supports",
      "Chemical storage tank stiffening rings, ladder rungs, and catwalk supports",
      "Food and beverage packaging machinery and sanitary conveyor side rails"
    ],
    technicalDetails: {
      manufacturingType: "Cold Drawn with Diamond Dies & Hot Rolled Annealed/Pickled (HRAP)",
      pressureRating: "Tensile Strength 515 - 750 N/mm² | Yield Strength ≥ 205 N/mm²",
      tolerance: "ISO h11 on Cold Drawn; ASTM A484 Table 17 on Hot Rolled",
      certifications: "EN 10204 3.1 Mill Test Certificate, 100% PMI Verification, NACE MR0175"
    }
  },
  {
    id: "flat-carbon-steel",
    slug: "flat-carbon-steel",
    name: "Carbon Steel Structural & Engineering Flat Bars",
    title: "Carbon Steel Structural & Engineering Flat Bars",
    material: "Carbon Steel",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: carbonFlatImg,
    heroImage: carbonFlatImg,
    grades: ["IS 2062 E250 / E350", "ASTM A36", "SAE 1018", "SAE 1045", "S275JR", "S355JR / S355J2"],
    forms: ["Hot Rolled Structural Flats", "Bright Cold Drawn Flats", "Flame Cut Heavy Flat Bars", "Machining Strip Bars"],
    sizeRange: "12 mm to 400 mm Width (0.5\" to 16.0\")",
    wallThickness: "3.0 mm to 60.0 mm Thickness",
    length: "6.0 Meters Standard, Cut-to-Length up to 12.0 Meters",
    endConnections: "Square Saw Cut / Deburred",
    shortDescription: "High-yield structural and bright engineering carbon steel flat bars conforming to IS 2062, ASTM A36, and S355JR for construction framing, base plates, and fabrication.",
    overview: "Supreme Metal & Alloys stocks high-strength carbon steel flat bars in hot-rolled structural grades (IS 2062 / ASTM A36 / S355JR) and cold-drawn engineering grades (SAE 1018 / 1045). Engineered for excellent weldability, high tensile yield strength, and dimensional uniformity across heavy construction, earthmoving equipment, and industrial fabrication.",
    specifications: [
      { label: "Standard Specifications", value: "IS 2062:2011, ASTM A36 / A36M, EN 10025-2 (S275JR, S355JR), SAE 1018" },
      { label: "Width Range", value: "12 mm to 400 mm" },
      { label: "Thickness Range", value: "3.0 mm to 60.0 mm" },
      { label: "Delivery Condition", value: "As-Rolled, Normalized, Cold Drawn, Stress Relieved" },
      { label: "Surface Finish", value: "Hot Rolled Mill Scale Cleaned / Shot Blasted / Bright Cold Drawn" },
      { label: "Yield Strength", value: "≥ 250 N/mm² (E250) up to ≥ 355 N/mm² (E350 / S355JR)" },
      { label: "Straightness", value: "1.5 mm per meter max deviation" },
      { label: "Quality Testing & MTC", value: "Tensile, Yield, Elongation, Bend Test, EN 10204 3.1 MTC" }
    ],
    standards: [
      "IS 2062 - Hot Rolled Medium and High Tensile Structural Steel",
      "ASTM A36 / A36M - Carbon Structural Steel Bars and Shapes",
      "EN 10025-2 - Non-Alloy Structural Steels",
      "ASTM A108 - Steel Bar, Carbon and Alloy, Cold-Finished"
    ],
    applications: [
      "Heavy industrial building structural columns, base plates, and gussets",
      "Earthmoving and agricultural machinery chassis frames and plow blades",
      "Railway wagon bogies, brackets, and freight car framing",
      "General mechanical engineering fixtures, jigs, and machine bases"
    ],
    technicalDetails: {
      manufacturingType: "Continuous Hot Rolling & Cold Finish Sizing",
      pressureRating: "Yield Strength ≥ 355 N/mm² | Tensile Strength 470 - 630 N/mm²",
      tolerance: "Per IS 1852 / EN 10058 standard tolerances",
      certifications: "EN 10204 3.1 Inspection Certificate, Tensile & Chemical Analysis"
    }
  },
  {
    id: "flat-alloy-steel",
    slug: "flat-alloy-steel",
    name: "Alloy Steel High-Tensile & Tool Steel Flat Bars",
    title: "Alloy Steel High-Tensile & Tool Steel Flat Bars",
    material: "Alloy Steel",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: alloySteelFlatImg,
    heroImage: alloySteelFlatImg,
    grades: ["AISI 4140 (EN19)", "AISI 4340 (EN24)", "AISI 8620", "DIN 1.7225", "ASTM A29 / A322", "EN 10083-3"],
    forms: ["Quenched & Tempered (Q+T) Flats", "Bright Drawn Alloy Flats", "Annealed Machinable Flat Bars", "Wear Resistant Strips"],
    sizeRange: "15 mm to 300 mm Width",
    wallThickness: "5.0 mm to 80.0 mm Thickness",
    length: "3 to 6 Meters, Cut to Required Lengths",
    endConnections: "Square Saw Cut / Machine Deburred",
    shortDescription: "Chromium-molybdenum high-tensile alloy steel flat bars (AISI 4140 / EN19) in quenched & tempered condition for gears, dies, shafts, and heavy-wear components.",
    overview: "Supreme Metal & Alloys supplies pre-hardened and annealed alloy steel flat bars in AISI 4140 (EN19) and AISI 4340 (EN24) conforming to ASTM A29 and EN 10083-3. Combining high fatigue strength, torsional toughness, and exceptional wear resistance, our alloy flat bars are ideal for high-stress gears, guide rails, die blocks, and mechanical shafts.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A29 / A29M, ASTM A322, EN 10083-3 (42CrMo4), BS 970 (EN19 / EN24)" },
      { label: "Width Range", value: "15 mm to 300 mm" },
      { label: "Thickness Range", value: "5.0 mm to 80.0 mm" },
      { label: "Supply Conditions", value: "Annealed (Soft Machinable) / Quenched & Tempered (28-34 HRC pre-hardened)" },
      { label: "Tensile Strength (Q+T)", value: "850 N/mm² to 1100 N/mm²" },
      { label: "Core Hardness", value: "240 to 320 HB (Hardened & Tempered condition)" },
      { label: "Ultrasonic Inspection", value: "100% UT Tested per SEP 1921 / ASTM A388 Level C/c" },
      { label: "Certifications", value: "EN 10204 3.1 MTC with Charpy V-Notch & Hardness Verification" }
    ],
    standards: [
      "ASTM A29 / A29M - General Requirements for Steel Bars, Carbon and Alloy",
      "ASTM A322 - Specification for Steel Bars, Alloy, Standard Grades",
      "EN 10083-3 - Steels for Quenching and Tempering (Alloy Steels)",
      "DIN 17200 / DIN EN ISO 683-2"
    ],
    applications: [
      "High-stress transmission gears, rack gears, and heavy industrial splines",
      "Hydraulic press platens, clamp blocks, and injection mold base bars",
      "Mining shovel wear tracks, scraper blades, and shredder cutter bars",
      "Heavy automotive suspension linkage brackets and forged steering arms"
    ],
    technicalDetails: {
      manufacturingType: "Electric Arc Furnace (EAF) / LF-VD Hot Rolled & Stress-Relieved",
      pressureRating: "Tensile Strength 900 - 1100 N/mm² | Yield Strength ≥ 650 N/mm²",
      tolerance: "DIN 1017 Class B / EN 10058",
      certifications: "EN 10204 3.1 MTC, Full Hardness Survey & Ultrasonic Flaw Test"
    }
  },
  {
    id: "flat-nickel-alloy",
    slug: "flat-nickel-alloy",
    name: "Nickel Alloy & Superalloy Engineered Flat Bars",
    title: "Nickel Alloy & Superalloy Engineered Flat Bars",
    material: "Nickel Alloy",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: nickelFlatImg,
    heroImage: nickelFlatImg,
    grades: ["Inconel 625", "Inconel 600", "Inconel 718", "Monel 400", "Monel K500", "Hastelloy C276", "Incoloy 825"],
    forms: ["Hot Rolled Solution Annealed Flats", "Cold Drawn Nickel Flats", "Precision Slit & Milled Bars", "Ground Superalloy Flats"],
    sizeRange: "12 mm to 200 mm Width",
    wallThickness: "3.0 mm to 40.0 mm Thickness",
    length: "1 to 4 Meters Random, Exact Cut Lengths",
    endConnections: "Square Cut / Machine Beveled / Deburred",
    shortDescription: "Corrosion-resistant nickel superalloy flat bars in Inconel 625, Hastelloy C276, and Monel 400 for offshore marine risers, chemical scrubbers, and nuclear reactors.",
    overview: "Supreme Metal & Alloys stocks high-performance nickel alloy flat bars conforming to ASTM B446, ASTM B574, and ASTM B166. Engineered to resist extreme oxidizing and reducing acids, chloride pitting, and stress corrosion cracking at temperatures ranging from cryogenic to over 980°C. Sourced strictly from aerospace- and defense-qualified producers.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B446 (Inconel 625), ASTM B574 (Hastelloy C276), ASTM B166 (Inconel 600), ASTM B164 (Monel 400)" },
      { label: "Width Range", value: "12 mm to 200 mm" },
      { label: "Thickness Range", value: "3.0 mm to 40.0 mm" },
      { label: "Condition of Supply", value: "Solution Annealed / Precipitation Hardened (Monel K500 / Inconel 718)" },
      { label: "Corrosion Resistance", value: "Zero pitting in marine salt spray; immune to boiling HCl and dry chlorine" },
      { label: "Surface Finish", value: "Hot Rolled Annealed & Pickled (HRAP) / Cold Drawn Bright Finish" },
      { label: "Edge Condition", value: "Square Machine Edge / Deburred", },
      { label: "Testing & Documentation", value: "100% PMI, UT per ASTM A578, Tensile, Microstructure, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B446 / ASME SB446 - Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "ASTM B574 / ASME SB574 - Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod",
      "ASTM B164 - Nickel-Copper Alloy Rod, Bar, and Wire (Monel 400)",
      "NACE MR0175 / ISO 15156 Qualified for Critical H2S Sour Service"
    ],
    applications: [
      "Offshore oil & gas subsea riser clamps, guide tracks, and splash zone stiffeners",
      "Chemical plant acid wash tanks, reactor baffle supports, and agitator arms",
      "Nuclear reactor fuel bundle spacer bars and core containment frames",
      "Marine naval propulsion rudder shafts, propeller shaft keys, and seawater intake frames"
    ],
    technicalDetails: {
      manufacturingType: "VIM-VAR Melted, Hot Rolled & Solution Treated per ASTM Standards",
      pressureRating: "Tensile Strength ≥ 825 N/mm² | Yield Strength ≥ 415 N/mm² (Inconel 625)",
      tolerance: "High Precision ASTM B446 Class 1 tolerances",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with Full Spectro Chemistry"
    }
  },
  {
    id: "flat-high-alloy",
    slug: "flat-high-alloy",
    name: "High Alloy & Super-Austenitic Specialized Flat Bars",
    title: "High Alloy & Super-Austenitic Specialized Flat Bars",
    material: "High Alloy",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: highAlloyFlatImg,
    heroImage: highAlloyFlatImg,
    grades: ["Alloy 20 (UNS N08020)", "254 SMO (UNS S31254)", "904L (UNS N08904)", "Sanicro 28 (UNS N08028)", "AL-6XN (UNS N08367)"],
    forms: ["Cold Drawn Flat Bars", "Hot Rolled Annealed & Pickled", "Precision Slit Plate Flats", "Machined Strips"],
    sizeRange: "10 mm to 250 mm Width",
    wallThickness: "3.0 mm to 40.0 mm Thickness",
    length: "3 to 6 Meters Random or Cut to Length",
    endConnections: "Square Cut / Machine Beveled",
    shortDescription: "Specialized 6% molybdenum super-austenitic and Alloy 20 flat bars engineered for hot sulfuric acid, seawater desalination, and flue gas scrubbers.",
    overview: "Supreme Metal & Alloys stocks high-alloy and super-austenitic stainless flat bars in Alloy 20, 254 SMO, and 904L conforming to ASTM B473 and ASTM A276. Engineered with elevated nickel (up to 35%) and molybdenum (up to 6.5%) contents, providing critical defense against chloride pitting (PREN ≥ 43) and sulfuric acid stress cracking.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B473 (Alloy 20 Bar), ASTM A276 / A479 (254 SMO / 904L), EN 10088-3" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 43 (254 SMO), PREN ≥ 36 (904L)" },
      { label: "Width Range", value: "10 mm to 250 mm" },
      { label: "Thickness Range", value: "3.0 mm to 40.0 mm" },
      { label: "Corrosion Immunity", value: "Resistant to hot sulfuric acid, brackish water, and high chloride brines" },
      { label: "Surface Finish", value: "Cold Drawn Bright / HRAP (Hot Rolled Annealed & Pickled)" },
      { label: "Testing & Documentation", value: "ASTM G48 Pitting Corrosion Test, 100% PMI, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B473 / ASME SB473 - UNS N08020, N08026, and N08024 Alloy Bar and Wire",
      "ASTM A276 / A479 - Stainless Steel Bars (UNS S31254 / N08904)",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Phosphoric acid fertilizer reactor agitator frames and internal supports",
      "Flue gas desulfurization (FGD) scrubber baffle bars and spray header clamps",
      "Seawater reverse osmosis (SWRO) high-pressure rack frames and membrane restraints",
      "Pharmaceutical batch reactor structural members and solvent handling skids"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled & Cold Sized with In-Line Solution Annealing",
      pressureRating: "Tensile Strength ≥ 650 N/mm² | Yield Strength ≥ 300 N/mm²",
      tolerance: "ISO h11 on Cold Drawn; DIN 1017 on Hot Rolled",
      certifications: "EN 10204 3.1 Inspection Certificate, ASTM G48 Method A Tested"
    }
  },
  {
    id: "flat-duplex",
    slug: "flat-duplex",
    name: "Duplex 2205 High-Strength Flat Bars",
    title: "Duplex 2205 High-Strength Flat Bars",
    material: "Duplex",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: duplexFlatImg,
    heroImage: duplexFlatImg,
    grades: ["UNS S31803", "UNS S32205 (Duplex 2205)", "DIN 1.4462", "ASTM A276 Gr 2205", "ASTM A479 Gr 2205"],
    forms: ["Cold Drawn Flat Bars", "Hot Rolled Solution Annealed Flats", "Precision Slit & Milled Flats", "Ground Flat Bars"],
    sizeRange: "12 mm to 250 mm Width",
    wallThickness: "3.0 mm to 50.0 mm Thickness",
    length: "3 to 6 Meters Random, Cut Lengths up to 10 Meters",
    endConnections: "Square Saw Cut / Machine Deburred",
    shortDescription: "High-yield-strength Duplex 2205 flat bars (PREN 34-36) offering double the mechanical load capacity of 316L with excellent resistance to stress corrosion cracking.",
    overview: "Supreme Metal & Alloys stocks and processes Duplex 2205 (UNS S31803 / S32205) flat bars conforming to ASTM A276 and ASTM A479. The balanced 50/50 austenitic-ferritic microstructure delivers twice the yield strength of standard austenitic stainless steels, making these flat bars the premier choice for weight-saving offshore structural frames, chemical cargo ship stiffeners, and high-load marine hardware.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / A276M, ASTM A479 / A479M, EN 10088-3, DIN 1.4462" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 34.0 - 36.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 450 N/mm² (Twice standard 316L capacity)" },
      { label: "Width Range", value: "12 mm to 250 mm" },
      { label: "Thickness Range", value: "3.0 mm to 50.0 mm" },
      { label: "Ferrite Balance", value: "40% to 60% Ferrite phase verified per ASTM E562" },
      { label: "Straightness", value: "≤ 1.0 mm per meter straightness tolerance" },
      { label: "Quality Testing & MTC", value: "ASTM A923 Method C, 100% PMI, UT per ASTM A388, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A276 / A276M - Stainless Steel Bars (UNS S31803 / S32205)",
      "ASTM A479 / A479M - Stainless Steel Bars for Boilers and Pressure Vessels",
      "ASTM A923 - Detection of Detrimental Intermetallic Phases in Duplex Steels",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Offshore oil & gas module structural supports, cable tray channels, and deck framing",
      "Chemical tanker cargo tank stiffener ribs and bulkhead reinforcing bars",
      "Biofuel and ethanol distillation column tray supports and downcomer bars",
      "Marine propeller shaft struts, rudder frame bars, and bow thruster brackets"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled & Solution Annealed (1040-1080°C Rapid Water Quenched)",
      pressureRating: "Yield Strength ≥ 450 N/mm² | Tensile Strength 655 - 880 N/mm²",
      tolerance: "Cold Drawn h11; Hot Rolled EN 10058",
      certifications: "EN 10204 3.1 Inspection Certificate, Ferrite Survey & Intermetallic Phase Reports"
    }
  },
  {
    id: "flat-super-duplex",
    slug: "flat-super-duplex",
    name: "Super Duplex 2507 Offshore-Grade Flat Bars",
    title: "Super Duplex 2507 Offshore-Grade Flat Bars",
    material: "Super Duplex",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: superDuplexFlatImg,
    heroImage: superDuplexFlatImg,
    grades: ["UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "DIN 1.4410", "DIN 1.4501", "ASTM A276 Gr 2507", "ASTM A479 Gr 2507"],
    forms: ["Hot Rolled Solution Annealed Flats", "Cold Drawn Super Duplex Bars", "Precision Milled Bars", "Ground Slit Strips"],
    sizeRange: "15 mm to 250 mm Width",
    wallThickness: "4.0 mm to 50.0 mm Thickness",
    length: "3 to 6 Meters Random, Custom Cut Lengths",
    endConnections: "Square Saw Cut / Machine Deburred",
    shortDescription: "Extreme-service Super Duplex 2507 and Zeron 100 flat bars (PREN ≥ 42) for subsea umbilical clamps, offshore risers, and seawater desalination plants.",
    overview: "Supreme Metal & Alloys stocks certified Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) flat bars conforming to ASTM A276, ASTM A479, and NORSOK M-630 MDS D57. Engineered with 25% chromium, 4% molybdenum, and 0.28% nitrogen, delivering immense yield strength (≥ 550 N/mm²) and near-total immunity to crevice corrosion in marine spray and subsea environments.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 (Bar), ASTM A479 (Pressure Vessel Bar), NORSOK M-630 MDS D57, EN 10088-3" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 42.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 550 N/mm² (Extremely high mechanical capacity)" },
      { label: "Width Range", value: "15 mm to 250 mm" },
      { label: "Thickness Range", value: "4.0 mm to 50.0 mm" },
      { label: "Corrosion Resistance", value: "ASTM G48 Method A test passing with zero pitting at 50°C" },
      { label: "Impact Toughness", value: "Charpy V-Notch impact tested at -46°C (≥ 80 Joules average)" },
      { label: "Testing & Documentation", value: "NORSOK Approved MTC, 100% PMI, Ferrite Count (35-55%), EN 10204 3.2 Available" }
    ],
    standards: [
      "ASTM A276 / A276M - UNS S32750 / S32760 Super Duplex Stainless Steel Bars",
      "ASTM A479 / A479M - Super Duplex Bars for Boilers and Pressure Vessels",
      "NORSOK M-630 MDS D57 Qualified for Critical Offshore Use",
      "NACE MR0175 / ISO 15156 Level IV Sour Service Certified"
    ],
    applications: [
      "Subsea production manifold clamps, umbilical protective saddles, and tie-back bars",
      "Offshore topside deluge system pipe supports and flare boom structural bracing",
      "Seawater intake trash racks, traveling water screen guide bars, and pump brackets",
      "Geothermal power high-pressure brine turbine casing stiffeners and rotor bars"
    ],
    technicalDetails: {
      manufacturingType: "Hot Rolled & Rapid Solution Water Quenched from NORSOK Qualified Mills",
      pressureRating: "Yield Strength ≥ 550 N/mm² | Tensile Strength 750 - 1000 N/mm²",
      tolerance: "Precision Cold Finished h11 / Hot Rolled EN 10058",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with ASTM G48 Pitting & Ferrite Survey"
    }
  },
  {
    id: "flat-titanium",
    slug: "flat-titanium",
    name: "Titanium Commercial & Aerospace Grade Flat Bars",
    title: "Titanium Commercial & Aerospace Grade Flat Bars",
    material: "Titanium",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: titaniumFlatImg,
    heroImage: titaniumFlatImg,
    grades: ["Titanium Grade 1", "Titanium Grade 2", "Titanium Grade 5 (Ti-6Al-4V)", "Titanium Grade 7 (Ti-0.2Pd)", "Titanium Grade 12"],
    forms: ["Hot Rolled Annealed Flats", "Cold Rolled / Drawn Bright Flats", "Precision Slit Titanium Plate Bars", "Ground Aerospace Flats"],
    sizeRange: "10 mm to 200 mm Width (0.39\" to 8.0\")",
    wallThickness: "2.0 mm to 40.0 mm Thickness (0.08\" to 1.6\")",
    length: "1 to 4 Meters Random, Exact Cut-to-Length",
    endConnections: "Square Saw Cut / Burr-Free / Machined",
    shortDescription: "Ultra-lightweight, high-strength commercially pure Grade 2 and alpha-beta Grade 5 (Ti-6Al-4V) titanium flat bars for aerospace structural members, chlor-alkali skids, and medical devices.",
    overview: "Supreme Metal & Alloys stocks high-purity commercially pure (Grade 1/2) and structural alpha-beta alloy (Grade 5 Ti-6Al-4V) titanium flat bars conforming to ASTM B348 and AMS 4928. Weighing approximately 45% less than stainless steel yet matching high-strength alloy steels in tensile performance, titanium flat bars provide complete immunity to seawater, wet chlorine, and marine atmospheric corrosion.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B348 / ASME SB348, AMS 4928 (Ti-6Al-4V), AMS 4921, ISO 5832-2" },
      { label: "Grades Stocked", value: "Grade 2 (Commercially Pure Standard), Grade 5 (Ti-6Al-4V High Strength), Grade 7 (Pd Alloyed)" },
      { label: "Density", value: "4.51 g/cm³ (Approx. 45% lighter than stainless steel)" },
      { label: "Width Range", value: "10 mm to 200 mm" },
      { label: "Thickness Range", value: "2.0 mm to 40.0 mm" },
      { label: "Condition of Supply", value: "Vacuum Annealed / Mill Descaled / Centerless Ground" },
      { label: "Corrosion Immunity", value: "Complete immunity to ambient seawater, wet chlorine, hypochlorites, and nitric acid" },
      { label: "Testing & Documentation", value: "100% PMI, Ultrasonic per AMS 2631, Full Interstitial Gas Analysis, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B348 / ASME SB348 - Titanium and Titanium Alloy Bars and Billets",
      "AMS 4928 - Titanium Alloy Bars, Wire, Forgings 6Al-4V Annealed",
      "ISO 5832-3 - Implants for Surgery (Wrought Ti-6Al-4V)",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Aerospace aircraft seat tracks, bulkhead stiffener bars, and landing gear linkages",
      "Chlor-alkali electrolysis cell bus bars, anode conductor bars, and rack mounts",
      "Marine racing yacht rudder stocks, keel bolts, and hydrofoil structural bars",
      "Orthopedic medical external fixator rods, surgical instruments, and implant plates"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Arc Remelted (VAR), Hot Rolled & Vacuum Stress-Relief Annealed",
      pressureRating: "Grade 2 Tensile ≥ 345 N/mm² | Grade 5 Tensile ≥ 895 N/mm²",
      tolerance: "High Precision ASTM B348 Table 3 tolerances",
      certifications: "EN 10204 3.1 Mill Test Certificate with Complete Interstitial Elements (O, N, H, C)"
    }
  },
  {
    id: "flat-exotic-alloy",
    slug: "flat-exotic-alloy",
    name: "Exotic Specialty Refractory & Superalloy Flat Bars",
    title: "Exotic Specialty Refractory & Superalloy Flat Bars",
    material: "Exotic Alloy",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Flat",
    categorySlug: "flat",
    division: "SUPPLIER",
    image: exoticAlloyFlatImg,
    heroImage: exoticAlloyFlatImg,
    grades: ["Tantalum (UNS R05200)", "Zirconium 702 (UNS R60702)", "Niobium / Columbium", "MP35N", "Hastelloy B-2 / B-3"],
    forms: ["Cold Rolled & Drawn Flats", "Vacuum Sintered Precision Bars", "Hot Rolled Pickled Strips", "Machined Guide Bars"],
    sizeRange: "8 mm to 150 mm Width",
    wallThickness: "1.5 mm to 25.0 mm Thickness",
    length: "1 to 3 Meters, Custom Vacuum Sealed Cut Lengths",
    endConnections: "Square Cut / Burr-Free / Precision Ground",
    shortDescription: "Specialized exotic refractory metal flat bars in Tantalum, Zirconium 702, and Niobium for extreme chemical synthesizers, boiling mineral acids, and nuclear components.",
    overview: "Supreme Metal & Alloys stocks exotic refractory and specialized cobalt superalloy flat bars in Tantalum, Zirconium 702, Niobium, and MP35N conforming to ASTM B365, ASTM B550, and AMS 5844. Designed for environments exceeding the thermal and chemical stability of nickel alloys, including boiling hydrochloric acid, wet chlorine gas, and high-vacuum thermal shields.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B365 (Tantalum Bar), ASTM B550 (Zirconium Bar), ASTM B392 (Niobium), AMS 5844 (MP35N)" },
      { label: "Width Range", value: "8 mm to 150 mm" },
      { label: "Thickness Range", value: "1.5 mm to 25.0 mm" },
      { label: "Melting Point Threshold", value: "Tantalum: 3017°C, Niobium: 2477°C, Zirconium: 1855°C" },
      { label: "Chemical Immunity", value: "Immune to boiling concentrated HCl, wet chlorine, sulfuric acid, and nitric acid" },
      { label: "Manufacturing Purity", value: "Electron Beam Melted (EBM) / High Vacuum Annealed" },
      { label: "Surface Finish", value: "Bright Cold Finished / Precision Ground / Vacuum Cleaned" },
      { label: "Testing & Documentation", value: "100% PMI, Gas Interstitial Analysis (H, O, N), EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B365 - Tantalum and Tantalum Alloy Rod and Wire",
      "ASTM B550 / B550M - Zirconium and Zirconium Alloy Bar and Wire",
      "ASTM B392 - Niobium and Niobium Alloy Bar, Rod, and Wire",
      "AMS 5844 - Cobalt-Nickel-Chromium-Molybdenum Alloy Bars (MP35N)"
    ],
    applications: [
      "Hot concentrated hydrochloric acid reactor baffle bars and bayonet support ribs",
      "Nuclear reactor control mechanism guide bars and core fuel channel spacers",
      "High-vacuum electric furnace heating element supports and radiation shielding brackets",
      "Biomedical ultra-high-strength fracture fixation bars and pacemaker structural members"
    ],
    technicalDetails: {
      manufacturingType: "Cold Worked & Vacuum Annealed from Pure Refractory Ingot",
      pressureRating: "Severe Service Thermal & Chemical Withstand | MP35N Tensile up to 2050 N/mm²",
      tolerance: "High Precision ±0.2 mm across width and thickness",
      certifications: "EN 10204 3.1 Inspection Certificate with Vacuum Purity & Interstitial Gas Reports"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Flat
export const getFlatProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  return (
    SUPPLIER_FLAT_PRODUCTS.find(
      (p) =>
        p.slug === clean ||
        p.id === clean ||
        p.slug === `flat-${clean}` ||
        clean === `flat-${p.materialSlug}` ||
        clean === `flats-${p.materialSlug}` ||
        clean === `flat-bar-${p.materialSlug}` ||
        clean === p.materialSlug
    ) || null
  );
};

export const getFlatProductsByMaterial = (matSlug = "") => {
  const clean = String(matSlug).toLowerCase().trim();
  if (clean === "all") return SUPPLIER_FLAT_PRODUCTS;
  return SUPPLIER_FLAT_PRODUCTS.filter((p) => p.materialSlug === clean);
};

export const getRelatedFlatProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim();
  return SUPPLIER_FLAT_PRODUCTS.filter(
    (p) => p.slug !== clean && p.id !== clean && !clean.includes(p.materialSlug)
  ).slice(0, 4);
};
