// Isolated Supplier Data Layer — Coil (Hot & Cold Rolled Coils)
// Source of truth: src/assets/All Products/Supplier division/Coil/
// Category: Coil (division: "SUPPLIER")

import ssCoilImg from "../assets/All Products/Supplier division/Coil/stainless steel.jpg";
import carbonCoilImg from "../assets/All Products/Supplier division/Coil/carbon.jpeg";
import alloySteelCoilImg from "../assets/All Products/Supplier division/Coil/alloy steel.jpg";
import nickelCoilImg from "../assets/All Products/Supplier division/Coil/nikle.webp";
import highAlloyCoilImg from "../assets/All Products/Supplier division/Coil/high alloy.jpg";
import duplexCoilImg from "../assets/All Products/Supplier division/Coil/duplex.jpg";
import superDuplexCoilImg from "../assets/All Products/Supplier division/Coil/alloy stee.webp";
import titaniumCoilImg from "../assets/All Products/Supplier division/Coil/Titanium-Coils.jpg";
import exoticAlloyCoilImg from "../assets/All Products/Supplier division/Coil/exotic.webp";

export {
  ssCoilImg,
  carbonCoilImg,
  alloySteelCoilImg,
  nickelCoilImg,
  highAlloyCoilImg,
  duplexCoilImg,
  superDuplexCoilImg,
  titaniumCoilImg,
  exoticAlloyCoilImg
};

// Exact 9 Materials verified in the Coil folder (guaranteeing strict isolation)
export const SUPPLIER_COIL_MATERIALS = [
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

export const SUPPLIER_COIL_PRODUCTS = [
  {
    id: "coil-stainless-steel",
    slug: "coil-stainless-steel",
    name: "Stainless Steel HR & CR Industrial Coils",
    title: "Stainless Steel HR & CR Industrial Coils",
    material: "Stainless Steel",
    materialName: "Stainless Steel",
    materialSlug: "stainless-steel",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: ssCoilImg,
    heroImage: ssCoilImg,
    grades: ["AISI 304", "AISI 304L", "AISI 316", "AISI 316L", "AISI 321", "AISI 310S", "AISI 430", "AISI 904L"],
    forms: ["Cold Rolled Coils (CR)", "Hot Rolled Annealed & Pickled Coils (HRAP)", "Master Mill Coils", "Custom Width Slit Coils"],
    sizeRange: "1000 mm, 1250 mm, 1500 mm Master Width (Slit down to 20 mm)",
    wallThickness: "0.3 mm to 16.0 mm Thickness (0.012\" to 0.625\")",
    length: "Continuous Coils (1 MT to 25 MT Master Weight, Baby Coils from 500kg)",
    endConnections: "Mill Edge / Slit Edge with Tension Re-wound Coils",
    shortDescription: "Prime quality hot rolled and cold rolled stainless steel coils in 2B, BA, No.4 hairline, and mirror finish with customized width precision slitting.",
    overview: "Supreme Metal & Alloys is an authorized stockist and distributor of prime mill stainless steel coils from world-class global producers conforming to ASTM A240 and ASME SA240. Offered in master coil weights up to 25 MT and customized baby slit coils for continuous stamping lines, spiral pipe mills, automotive exhaust fabrication, and large-diameter tank construction.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, ASTM A480 / A480M, EN 10088-2, JIS G4304 / G4305" },
      { label: "Thickness Range", value: "0.3 mm to 16.0 mm (Cold Rolled 0.3-3.0mm; Hot Rolled 3.0-16.0mm)" },
      { label: "Coil Widths", value: "1000 mm (1m), 1250 mm (1.25m), 1500 mm (1.5m), up to 2000 mm (2m)" },
      { label: "Surface Finishes", value: "2B (Smooth Matte), BA (Bright Annealed), No. 4 Hairline, Scotch Brite, 8K Mirror" },
      { label: "Coil Inner Diameter (ID)", value: "508 mm (20\") / 610 mm (24\") Standard Mill Cores" },
      { label: "Protective Coating", value: "Fiber Laser Film, Blue PE Film, Novacel Deep Draw Film, Paper Interleaved" },
      { label: "Weight Capabilities", value: "Master Coils (5 MT to 25 MT), Slit Baby Coils (500 kg to 5 MT)" },
      { label: "Testing & Documentation", value: "100% PMI, Tensile, Yield, Hardness, Bend Test, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip for Pressure Vessels",
      "ASTM A480 / A480M - General Requirements for Flat-Rolled Stainless Steel",
      "ASME SA240 - Boiler and Pressure Vessel Code Section II Part A",
      "EN 10088-2 - Stainless Steels for General Purposes"
    ],
    applications: [
      "Automated continuous roll forming lines for structural profiles and cable trays",
      "Continuous welded industrial pipe, tube, and exhaust system manufacturing",
      "Large-diameter chemical storage tanks, brewing fermenters, and silo winding",
      "Automotive catalytic converter shells, mufflers, and heat dissipation shields",
      "Commercial kitchenware, refrigeration appliances, and architectural wall paneling"
    ],
    technicalDetails: {
      manufacturingType: "Sendzimir Cold Rolling & Continuous Hot Strip Mill with In-Line Annealing & Pickling",
      pressureRating: "Tensile Strength 515 - 750 N/mm² | High Elongation (≥ 40%)",
      tolerance: "Per ASTM A480 precision thickness and width slitting standards",
      certifications: "EN 10204 3.1 Inspection Certificate with Full Mechanical & Chemical Properties"
    }
  },
  {
    id: "coil-carbon-steel",
    slug: "coil-carbon-steel",
    name: "Carbon Steel Hot Rolled & Cold Rolled Coils",
    title: "Carbon Steel Hot Rolled & Cold Rolled Coils",
    material: "Carbon Steel",
    materialName: "Carbon Steel",
    materialSlug: "carbon-steel",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: carbonCoilImg,
    heroImage: carbonCoilImg,
    grades: ["IS 2062 E250 / E350", "ASTM A1011", "ASTM A1008", "SAE 1006 / 1008", "S275JR", "S355JR", "JIS G3131 SPHC"],
    forms: ["Hot Rolled Coils (HRC)", "Hot Rolled Pickled & Oiled (HRPO)", "Cold Rolled Coils (CRC)", "Chequered Pattern Coils"],
    sizeRange: "900 mm to 2000 mm Width (Slit down to 25 mm)",
    wallThickness: "0.5 mm to 25.0 mm Thickness",
    length: "Continuous Coils (5 MT to 30 MT Master Weight)",
    endConnections: "Mill Edge / Slit Trimmed Edge",
    shortDescription: "Structural hot rolled (HRC), pickled & oiled (HRPO), and cold reduced (CRC) carbon steel coils conforming to IS 2062 and ASTM A1011 for spiral pipes and chassis fabrication.",
    overview: "Supreme Metal & Alloys stocks and distributes prime carbon steel coils sourced directly from Tier-1 integrated steel mills. Available in structural grades (IS 2062 / ASTM A1011 / S355JR) for infrastructure and high-formability drawing grades (CRCA / HRPO) for automotive press lines and spiral pipe manufacturing.",
    specifications: [
      { label: "Standard Specifications", value: "IS 2062:2011, IS 1079, ASTM A1011 / A1011M, ASTM A1008, EN 10025-2" },
      { label: "Thickness Range", value: "0.5 mm to 25.0 mm (CR: 0.5-3.0mm; HR: 1.6-25.0mm)" },
      { label: "Width Range", value: "900 mm to 2000 mm" },
      { label: "Surface Conditions", value: "Hot Rolled Black (As-Rolled), Pickled & Oiled (PO), Cold Rolled Close Annealed (CRCA)" },
      { label: "Coil Inner Diameter (ID)", value: "508 mm / 610 mm / 762 mm" },
      { label: "Yield Strength Range", value: "≥ 250 N/mm² (E250) to ≥ 355 N/mm² (E350 / S355JR)" },
      { label: "Packaging", value: "Eye-to-Sky Steel Strapped with Moisture Barrier Paper and Steel Edge Protectors" },
      { label: "Quality Testing & MTC", value: "Tensile, Yield, Elongation, Bend, Charpy V-Notch (for S355J2), EN 10204 3.1 MTC" }
    ],
    standards: [
      "IS 2062 - Hot Rolled Medium and High Tensile Structural Steel",
      "ASTM A1011 / A1011M - Steel, Sheet and Strip, Hot-Rolled, Carbon, Structural",
      "ASTM A1008 / A1008M - Steel, Sheet, Cold-Rolled, Carbon",
      "EN 10025-2 - Hot Rolled Products of Structural Steels"
    ],
    applications: [
      "Continuous submerged arc welded (SAW) spiral water and gas transmission pipelines",
      "Automobile heavy truck chassis frames, wheel rims, and cross members",
      "Heavy structural building deck sheets, purlins, and cold-formed C/Z channels",
      "Pre-engineered building (PEB) framing, storage racking, and container wall panels"
    ],
    technicalDetails: {
      manufacturingType: "Continuous Hot Strip Mill & Tandem Cold Rolling Mill with Hydrogen Annealing",
      pressureRating: "Yield Strength ≥ 355 N/mm² | Tensile Strength 470 - 630 N/mm²",
      tolerance: "Per ASTM A568 / EN 10051 precision dimensional standards",
      certifications: "EN 10204 3.1 Inspection Certificate, Tensile & Chemical Verification"
    }
  },
  {
    id: "coil-alloy-steel",
    slug: "coil-alloy-steel",
    name: "Alloy Steel Chromium-Molybdenum & High-Strength Coils",
    title: "Alloy Steel Chromium-Molybdenum & High-Strength Coils",
    material: "Alloy Steel",
    materialName: "Alloy Steel",
    materialSlug: "alloy-steel",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: alloySteelCoilImg,
    heroImage: alloySteelCoilImg,
    grades: ["ASTM A387 Gr 11", "ASTM A387 Gr 22", "AISI 4130", "50CrV4 (Spring Steel)", "SAE 8620", "DIN 1.7225 (42CrMo4)"],
    forms: ["Hot Rolled Alloy Coils", "Cold Rolled Annealed Alloy Strip Coils", "Hardened & Tempered Spring Coils", "Slit Master Coils"],
    sizeRange: "600 mm to 1600 mm Width (Slit down to 30 mm)",
    wallThickness: "1.0 mm to 12.0 mm Thickness",
    length: "Continuous Coils (3 MT to 15 MT)",
    endConnections: "Mill Edge / Slit Trimmed Edge",
    shortDescription: "Chromium-molybdenum and high-tensile alloy steel coils (ASTM A387, AISI 4130) for boiler tubing, saw blades, power plant headers, and high-wear components.",
    overview: "Supreme Metal & Alloys stocks high-temperature and high-tensile alloy steel coils conforming to ASTM A387, ASTM A607, and EN 10083-3. Combining elevated temperature creep strength, oxidation resistance, and through-hardening capabilities, these alloy coils serve power generation boiler fabrication, oilfield casing tubing, and industrial clutch manufacture.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A387 / ASME SA387, ASTM A607, EN 10083-3, DIN 17200" },
      { label: "Grades Stocked", value: "Grade 11 (1.25Cr-0.5Mo), Grade 22 (2.25Cr-1Mo), AISI 4130 (Cr-Mo Structural), 50CrV4" },
      { label: "Thickness Range", value: "1.0 mm to 12.0 mm" },
      { label: "Width Range", value: "600 mm to 1600 mm" },
      { label: "Delivery Condition", value: "Annealed / Normalized & Tempered / Spheroidized Annealed (for Stamping)" },
      { label: "Creep Rupture Stability", value: "Rated for continuous high-temperature service from 450°C to 600°C" },
      { label: "Coil ID", value: "508 mm / 610 mm standard" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 (IBR Certified available on request)" }
    ],
    standards: [
      "ASTM A387 / A387M - Pressure Vessel Plates, Alloy Steel, Chromium-Molybdenum",
      "ASTM A607 - Steel, Sheet and Strip, High-Strength, Low-Alloy, Columbium or Vanadium",
      "EN 10083-3 - Steels for Quenching and Tempering (Alloy Steels)",
      "Indian Boiler Regulations (IBR) Certified Stock"
    ],
    applications: [
      "Continuous spiral finned boiler economizer and superheater tube manufacturing",
      "Downhole oilwell perforation gun bodies and high-strength drilling casing sleeves",
      "Automotive automatic transmission clutch drive plates and diaphragm spring discs",
      "Industrial high-speed circular slitting saws and stone cutting blade bodies"
    ],
    technicalDetails: {
      manufacturingType: "Vacuum Degassed Electric Furnace Melted, Hot Rolled & Stress Relieved",
      pressureRating: "Tensile Strength 515 - 690 N/mm² | High Creep Resistance",
      tolerance: "Per ASTM A568 precision alloy dimensional tolerances",
      certifications: "EN 10204 3.1 Inspection Certificate, IBR Approved, Full Spectro Chemistry"
    }
  },
  {
    id: "coil-nickel-alloy",
    slug: "coil-nickel-alloy",
    name: "Nickel Alloy & Superalloy Precision Slit Coils",
    title: "Nickel Alloy & Superalloy Precision Slit Coils",
    material: "Nickel Alloy",
    materialName: "Nickel Alloy",
    materialSlug: "nickel-alloy",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: nickelCoilImg,
    heroImage: nickelCoilImg,
    grades: ["Inconel 600", "Inconel 625", "Inconel 718", "Incoloy 800H", "Incoloy 825", "Monel 400", "Hastelloy C276", "Nickel 200/201"],
    forms: ["Cold Rolled Precision Foil Coils", "Hot Rolled Annealed Coils", "Master Width Coils", "Narrow Slit Baby Coils"],
    sizeRange: "300 mm to 1250 mm Master Width (Slit down to 10 mm)",
    wallThickness: "0.1 mm to 6.0 mm Thickness (0.004\" to 0.236\")",
    length: "Continuous Coils (100 kg to 5000 kg)",
    endConnections: "Precision Slit Edge / Burr-Free Clean Edges",
    shortDescription: "Ultra-corrosion-resistant nickel superalloy coils in Inconel 625, Hastelloy C276, and Monel 400 for chemical reactors, bellows, gaskets, and aerospace heat shields.",
    overview: "Supreme Metal & Alloys stocks prime nickel superalloy coils conforming to ASTM B168, ASTM B443, and ASTM B575. Sourced strictly from world-class vacuum-induction melted (VIM-VAR) producers, our nickel alloy coils deliver outstanding resistance to boiling mineral acids, wet chlorine, stress corrosion cracking, and high-temperature thermal cycling up to 1000°C.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B168 (Inconel 600), ASTM B443 (Inconel 625), ASTM B575 (Hastelloy C276), ASTM B127 (Monel 400)" },
      { label: "Thickness Range", value: "0.1 mm to 6.0 mm (Ultra-fine foil 0.05 mm available)" },
      { label: "Width Range", value: "300 mm to 1250 mm (Precision slit down to 10 mm)" },
      { label: "Delivery Temper", value: "Soft Solution Annealed (for Deep Drawing & Bellows) / Spring Temper" },
      { label: "Corrosion Immunity", value: "Immune to boiling HCl, sulfuric acid, wet chlorine gas, and ambient seawater" },
      { label: "Surface Finish", value: "Bright Annealed (BA) / 2B Cold Rolled / Satin Pickled" },
      { label: "Testing & Documentation", value: "100% PMI, Ultrasonic per ASTM A578, Tensile, Grain Size, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B168 / ASME SB168 - Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "ASTM B443 / ASME SB443 - Nickel-Chromium-Molybdenum-Columbium Alloy Plate, Sheet, and Strip",
      "ASTM B575 / ASME SB575 - Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, and Strip",
      "NACE MR0175 / ISO 15156 Qualified for Sour Gas Service"
    ],
    applications: [
      "Hydroformed flexible metal bellows, expansion joints, and aerospace ducting",
      "Continuous welded welded tube manufacturing for chemical plant heat exchangers",
      "Plate-and-frame heat exchanger stamped corrugated plates in aggressive acids",
      "Metallic spiral wound gasket winding strips and explosion clad vessel liners"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled on 20-High Sendzimir Mills & Vacuum Bright Annealed",
      pressureRating: "Tensile Strength ≥ 825 N/mm² | Yield Strength ≥ 415 N/mm² (Inconel 625)",
      tolerance: "High Precision ASTM B443 / B575 tight thickness tolerances",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with Vacuum Purity Spectro Data"
    }
  },
  {
    id: "coil-high-alloy",
    slug: "coil-high-alloy",
    name: "High Alloy & Super-Austenitic Specialized Coils",
    title: "High Alloy & Super-Austenitic Specialized Coils",
    material: "High Alloy",
    materialName: "High Alloy",
    materialSlug: "high-alloy",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: highAlloyCoilImg,
    heroImage: highAlloyCoilImg,
    grades: ["Alloy 20 (UNS N08020)", "254 SMO (UNS S31254)", "904L (UNS N08904)", "Sanicro 28 (UNS N08028)", "AL-6XN (UNS N08367)"],
    forms: ["Cold Rolled Coils (CR)", "Hot Rolled Pickled Coils (HRAP)", "Master Mill Coils", "Precision Slit Coils"],
    sizeRange: "500 mm to 1500 mm Width (Slit down to 15 mm)",
    wallThickness: "0.4 mm to 8.0 mm Thickness",
    length: "Continuous Coils (500 kg to 10 MT)",
    endConnections: "Mill Edge / Precision Slit Edge",
    shortDescription: "Specialized 6% molybdenum super-austenitic and Alloy 20 coils (PREN ≥ 43) for hot sulfuric acid, seawater desalination, and flue gas scrubbers.",
    overview: "Supreme Metal & Alloys stocks specialized high-alloy and super-austenitic coils in 254 SMO, Alloy 20, AL-6XN, and 904L conforming to ASTM A240 and ASTM B463. Developed to provide cost-effective immunity against severe chloride pitting and hot sulfuric acid stress corrosion where standard 316L stainless steel suffers rapid failure.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / A240M (254 SMO / 904L), ASTM B463 (Alloy 20), EN 10088-2" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 43 (254 SMO / AL-6XN), PREN ≥ 36 (904L)" },
      { label: "Thickness Range", value: "0.4 mm to 8.0 mm" },
      { label: "Width Range", value: "500 mm to 1500 mm" },
      { label: "Corrosion Immunity", value: "Resistant to hot sulfuric acid, wet sulfur dioxide, and brackish seawater pitting" },
      { label: "Surface Finish", value: "2B Cold Rolled Smooth / HRAP / Bright Annealed" },
      { label: "Testing & Documentation", value: "ASTM G48 Pitting Test, 100% PMI Spectro, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S31254 (254 SMO) Plate, Sheet, and Strip",
      "ASTM B463 / ASME SB463 - UNS N08020 Alloy Plate, Sheet, and Strip",
      "EN 10088-2 - Stainless Steels (Specialty Austenitic)",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Continuous welded heat exchanger tubing for coastal power station seawater coolers",
      "Flue gas desulfurization (FGD) scrubber absorber tower liners and mist eliminator blades",
      "Phosphoric acid concentration evaporators and fertilizer reaction vessel bodies",
      "Seawater reverse osmosis (SWRO) high-pressure filter vessels and membrane housings"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Continuously Solution Annealed with Inert Atmosphere",
      pressureRating: "Tensile Strength ≥ 650 N/mm² | Yield Strength ≥ 300 N/mm²",
      tolerance: "ASTM A480 precision thickness and width tolerances",
      certifications: "EN 10204 3.1 Inspection Certificate with ASTM G48 Method A Tested"
    }
  },
  {
    id: "coil-duplex",
    slug: "coil-duplex",
    name: "Duplex 2205 High-Strength Coils",
    title: "Duplex 2205 High-Strength Coils",
    material: "Duplex",
    materialName: "Duplex",
    materialSlug: "duplex",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: duplexCoilImg,
    heroImage: duplexCoilImg,
    grades: ["UNS S31803", "UNS S32205 (Duplex 2205)", "DIN 1.4462", "ASTM A240 Gr 2205"],
    forms: ["Cold Rolled Coils (CR)", "Hot Rolled Annealed Coils (HRAP)", "Master Coils", "Slit Baby Coils"],
    sizeRange: "1000 mm, 1250 mm, 1500 mm Width (Slit down to 25 mm)",
    wallThickness: "0.5 mm to 12.0 mm Thickness",
    length: "Continuous Coils (1 MT to 20 MT)",
    endConnections: "Mill Edge / Slit Edge",
    shortDescription: "High-yield-strength Duplex 2205 coils (PREN 34-36) offering double the mechanical load capacity of 316L with high resistance to chloride stress corrosion cracking.",
    overview: "Supreme Metal & Alloys stocks and slits Duplex 2205 (UNS S31803 / S32205) coils conforming to ASTM A240 and ASME SA240. With twice the yield strength of standard austenitic grades and high fatigue resistance in marine environments, these coils enable substantial wall-thickness reductions in storage tanks, road tankers, and process pipe manufacturing.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, EN 10088-2, DIN 1.4462, NACE MR0175" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 34.0 - 36.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 450 N/mm² (Permits 30-40% weight reduction over 316L)" },
      { label: "Thickness Range", value: "0.5 mm to 12.0 mm" },
      { label: "Width Range", value: "1000 mm, 1250 mm, 1500 mm" },
      { label: "Ferrite Microstructure", value: "40% to 60% Ferrite balance verified per ASTM E562" },
      { label: "Surface Finish", value: "2B Cold Rolled Smooth / No. 1 HRAP (Hot Rolled Annealed & Pickled)" },
      { label: "Quality Testing & MTC", value: "ASTM A923 Method C, 100% PMI, Hardness, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S31803 / S32205 Stainless Steel Plate, Sheet, and Strip",
      "ASTM A923 - Standard Test Methods for Detecting Intermetallic Phases in Duplex",
      "EN 10088-2 - Stainless Steels (Duplex)",
      "NACE MR0175 / ISO 15156 Qualified"
    ],
    applications: [
      "Road tanker chemical transport barrels and liquefied gas containers",
      "Continuous spiral welded subsea flowlines and offshore water injection pipes",
      "Chemical plant storage tanks, absorption columns, and evaporators",
      "Biofuel distillation columns and pulp and paper bleaching equipment"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled on Sendzimir Mills & Continuous Solution Water Quenched (1050°C)",
      pressureRating: "Yield Strength ≥ 450 N/mm² | Tensile Strength 655 - 880 N/mm²",
      tolerance: "Precision Slitting ±0.10 mm Width; Thickness ASTM A480",
      certifications: "EN 10204 3.1 Inspection Certificate with Ferrite Count & Intermetallic Test Reports"
    }
  },
  {
    id: "coil-super-duplex",
    slug: "coil-super-duplex",
    name: "Super Duplex 2507 Extreme-Service Coils",
    title: "Super Duplex 2507 Extreme-Service Coils",
    material: "Super Duplex",
    materialName: "Super Duplex",
    materialSlug: "super-duplex",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: superDuplexCoilImg,
    heroImage: superDuplexCoilImg,
    grades: ["UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "DIN 1.4410", "DIN 1.4501", "ASTM A240 Gr 2507"],
    forms: ["Cold Rolled Coils (CR)", "Hot Rolled Annealed Coils (HRAP)", "Master Coils", "Slit Coiled Strip"],
    sizeRange: "1000 mm, 1250 mm, 1500 mm Width (Slit down to 30 mm)",
    wallThickness: "0.8 mm to 10.0 mm Thickness",
    length: "Continuous Coils (1 MT to 15 MT)",
    endConnections: "Mill Edge / Slit Trimmed Edge",
    shortDescription: "Ultra-high-strength Super Duplex 2507 and Zeron 100 coils (PREN ≥ 42) for offshore pipeline wraps, seawater reverse osmosis, and subsea manifolds.",
    overview: "Supreme Metal & Alloys stocks certified Super Duplex 2507 (UNS S32750) and Zeron 100 (UNS S32760) coils conforming to ASTM A240 and NORSOK M-630 MDS D55. Engineered with 25% chromium, 4% molybdenum, and 0.28% nitrogen, delivering immense yield strength (≥ 550 N/mm²) combined with PREN ≥ 42, providing total immunity to crevice corrosion in hot seawater and sour gas.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / A240M, NORSOK M-630 MDS D55, EN 10088-2, DIN 1.4410" },
      { label: "Pitting Resistance Equivalent (PREN)", value: "PREN ≥ 42.0 (Cr% + 3.3Mo% + 16N%)" },
      { label: "Yield Strength (0.2% Offset)", value: "≥ 550 N/mm² (Extremely high mechanical capacity)" },
      { label: "Thickness Range", value: "0.8 mm to 10.0 mm" },
      { label: "Width Range", value: "1000 mm, 1250 mm, 1500 mm" },
      { label: "Corrosion Testing", value: "ASTM G48 Method A tested with zero pitting at 50°C" },
      { label: "Intermetallic Phase Check", value: "Verified free of sigma phase per ASTM A923 Method C" },
      { label: "Quality Testing & MTC", value: "NORSOK Qualified, 100% PMI, Ferrite Count (35-55%), EN 10204 3.1/3.2" }
    ],
    standards: [
      "ASTM A240 / A240M - UNS S32750 / S32760 Super Duplex Stainless Steel Strip",
      "NORSOK M-630 MDS D55 Qualified for Critical Offshore Use",
      "ASTM A923 - Testing for Intermetallic Phases",
      "NACE MR0175 / ISO 15156 Level IV Sour Service Certified"
    ],
    applications: [
      "Subsea production pipeline and flowline continuous welded pipe manufacturing",
      "Seawater reverse osmosis (SWRO) high-pressure membrane pressure tube wrapping",
      "Offshore firewater deluge piping and marine exhaust scrubber casing fabrication",
      "Chemical tanker cargo tanks and high-pressure chemical dosing skids"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Rapid Water Quenched from NORSOK Qualified Master Mills",
      pressureRating: "Yield Strength ≥ 550 N/mm² | Tensile Strength 750 - 1000 N/mm²",
      tolerance: "High Precision Width ±0.10 mm; Thickness ASTM A480",
      certifications: "EN 10204 3.1 / 3.2 Inspection Certificate with ASTM G48 Pitting & Ferrite Reports"
    }
  },
  {
    id: "coil-titanium",
    slug: "coil-titanium",
    name: "Titanium Commercial & Aerospace Grade Coils",
    title: "Titanium Commercial & Aerospace Grade Coils",
    material: "Titanium",
    materialName: "Titanium",
    materialSlug: "titanium",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: titaniumCoilImg,
    heroImage: titaniumCoilImg,
    grades: ["Titanium Grade 1", "Titanium Grade 2", "Titanium Grade 5 (Ti-6Al-4V)", "Titanium Grade 7 (Ti-Pd)"],
    forms: ["Cold Rolled Coils (CR)", "Vacuum Annealed Coils", "Master Width Coils", "Precision Slit Coiled Strip"],
    sizeRange: "300 mm to 1250 mm Width (Slit down to 15 mm)",
    wallThickness: "0.3 mm to 4.0 mm Thickness (0.012\" to 0.157\")",
    length: "Continuous Coils (100 kg to 3000 kg)",
    endConnections: "Precision Slit / Burr-Free Edges",
    shortDescription: "Ultra-lightweight, high-purity commercially pure Grade 1 and Grade 2 titanium coils for plate heat exchangers, chlor-alkali cells, and aerospace ducting.",
    overview: "Supreme Metal & Alloys stocks high-purity commercially pure titanium coils conforming to ASTM B265 and ASME SB265. Processed with vacuum-annealed metallurgical integrity to prevent interstitial embrittlement. Weighing approximately 45% less than steel and completely immune to ambient seawater and wet chlorine, titanium coils provide permanent corrosion protection.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B265 / ASME SB265, AMS 4902, AMS 4911, ISO 5832-2" },
      { label: "Grades Stocked", value: "Grade 1 (Deep Drawing), Grade 2 (Commercial Standard), Grade 5 (High Strength Ti-6Al-4V)" },
      { label: "Density", value: "4.51 g/cm³ (Approx. 45% lighter than stainless steel)" },
      { label: "Thickness Range", value: "0.3 mm to 4.0 mm" },
      { label: "Width Range", value: "300 mm to 1250 mm (Slit down to 15 mm)" },
      { label: "Surface Finish", value: "Bright Vacuum Annealed / Cold Rolled Pickled" },
      { label: "Corrosion Immunity", value: "Complete immunity to seawater, chlorine dioxide, and human physiological fluids" },
      { label: "Quality Testing & MTC", value: "100% PMI, Gas Interstitials (C, O, N, H), Tensile, EN 10204 3.1 MTC" }
    ],
    standards: [
      "ASTM B265 / ASME SB265 - Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "AMS 4902 - Titanium Sheet, Strip, and Plate, Commercially Pure, Annealed",
      "ISO 5832-2 - Implants for Surgery (Unalloyed Titanium)",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Gasketed plate heat exchanger (PHE) high-speed deep-drawn corrugated plates",
      "Continuous welded titanium heat exchanger and condenser tubing manufacture",
      "Chlor-alkali electrolysis membrane cells and dimensionally stable anode (DSA) screens",
      "Aerospace environmental control system (ECS) lightweight ducting and nacelle blankets"
    ],
    technicalDetails: {
      manufacturingType: "Cold Rolled & Vacuum Annealed with Specialized Zero-Contamination Slitting",
      pressureRating: "Grade 2 Tensile ≥ 345 N/mm² | Grade 5 Tensile ≥ 895 N/mm²",
      tolerance: "High Precision Width ±0.08 mm; Thickness ASTM B265 Table 6",
      certifications: "EN 10204 3.1 Inspection Certificate with Full Interstitial Chemical Analysis"
    }
  },
  {
    id: "coil-exotic-alloy",
    slug: "coil-exotic-alloy",
    name: "Exotic Refractory Metal & Specialized Alloy Coils",
    title: "Exotic Refractory Metal & Specialized Alloy Coils",
    material: "Exotic Alloy",
    materialName: "Exotic Alloy",
    materialSlug: "exotic-alloy",
    category: "Coil",
    categorySlug: "coil",
    division: "SUPPLIER",
    image: exoticAlloyCoilImg,
    heroImage: exoticAlloyCoilImg,
    grades: ["Tantalum (UNS R05200)", "Zirconium 702 (UNS R60702)", "Niobium / Columbium", "MP35N", "Hastelloy B-3", "Incoloy 825"],
    forms: ["Cold Rolled Foil Coils", "Vacuum Sintered Strip Coils", "Master Width Coils", "Precision Slit Coils"],
    sizeRange: "100 mm to 600 mm Width (Slit down to 10 mm)",
    wallThickness: "0.1 mm to 3.0 mm Thickness",
    length: "Continuous Precision Spools (10 kg to 500 kg)",
    endConnections: "Square Slit / Vacuum Cleaned",
    shortDescription: "Specialized exotic refractory metal coils in Tantalum, Zirconium 702, and Niobium for boiling hydrochloric acid reboilers, nuclear reactors, and vacuum electronics.",
    overview: "Supreme Metal & Alloys stocks high-purity exotic metal coils in Tantalum, Zirconium 702, and Niobium conforming to ASTM B708 and ASTM B551. Engineered for environments exceeding the performance thresholds of nickel and titanium alloys, such as hot concentrated hydrochloric acid, aqua regia, and nuclear reactor components.",
    specifications: [
      { label: "Standard Specifications", value: "ASTM B708 (Tantalum Strip/Coil), ASTM B551 (Zirconium Strip/Coil), ASTM B393, AMS 5844" },
      { label: "Width Range", value: "100 mm to 600 mm (Slit down to 10 mm)" },
      { label: "Thickness Range", value: "0.1 mm to 3.0 mm" },
      { label: "Melting Point Threshold", value: "Tantalum: 3017°C, Niobium: 2477°C, Zirconium: 1855°C" },
      { label: "Chemical Immunity", value: "Immune to boiling concentrated HCl, wet chlorine, nitric acid, and organic acids" },
      { label: "Manufacturing Purity", value: "Electron Beam Melted (EBM) / High Vacuum Cold Rolled" },
      { label: "Packaging", value: "Vacuum Sealed Spools with Desiccant & Inert Gas Cushion" },
      { label: "Certifications", value: "EN 10204 3.1 / 3.2 with Vacuum Purity Spectro Data" }
    ],
    standards: [
      "ASTM B708 - Tantalum and Tantalum Alloy Plate, Sheet, and Strip",
      "ASTM B551 / B551M - Zirconium and Zirconium Alloy Strip and Sheet",
      "AMS 5844 - Cobalt-Nickel-Chromium-Molybdenum Alloy Strip (MP35N)",
      "ASTM F562 - Wrought MP35N for Surgical Implants"
    ],
    applications: [
      "Continuous welded tantalum bayonet heater and heat exchanger tube fabrication",
      "Nuclear reactor fuel bundle grid spacer ribbons and core structural cladding",
      "High-vacuum electronic tube filaments, thermal shields, and evaporation boats",
      "Critical chemical synthesizer explosive clad linings and rupture discs"
    ],
    technicalDetails: {
      manufacturingType: "Cold Worked on Multi-Roll Precision Cluster Mills from Pure Vacuum Melt Ingot",
      pressureRating: "Severe Thermal & Chemical Withstand",
      tolerance: "High Precision Width ±0.05 mm; Thickness ±0.008 mm",
      certifications: "EN 10204 3.1 Inspection Certificate, 100% PMI, Vacuum Purity Analysis"
    }
  }
];

// Helper functions guaranteeing strict data isolation for Coil
export const getCoilProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  return (
    SUPPLIER_COIL_PRODUCTS.find(
      (p) =>
        p.slug === clean ||
        p.id === clean ||
        p.slug === `coil-${clean}` ||
        clean === `coil-${p.materialSlug}` ||
        clean === `coils-${p.materialSlug}` ||
        clean === `quile-${p.materialSlug}` ||
        clean === p.materialSlug
    ) || null
  );
};

export const getCoilProductsByMaterial = (matSlug = "") => {
  const clean = String(matSlug).toLowerCase().trim();
  if (clean === "all") return SUPPLIER_COIL_PRODUCTS;
  return SUPPLIER_COIL_PRODUCTS.filter((p) => p.materialSlug === clean);
};

export const getRelatedCoilProducts = (currentSlug = "") => {
  const clean = String(currentSlug).toLowerCase().trim();
  return SUPPLIER_COIL_PRODUCTS.filter(
    (p) => p.slug !== clean && p.id !== clean && !clean.includes(p.materialSlug)
  ).slice(0, 4);
};
