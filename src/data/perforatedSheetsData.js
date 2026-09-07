// Perforated Sheets Isolated Dataset - Supreme Metal & Alloys (SMA)
// Strictly isolated to the 9 verified client image assets in "All Products/Perforated sheet"

import ssPerforatedImg from "../assets/All Products/Perforated sheet/stainless steel.png";
import csPerforatedImg from "../assets/All Products/Perforated sheet/carbon.png";
import asPerforatedImg from "../assets/All Products/Perforated sheet/Alloy steel.png";
import nickelPerforatedImg from "../assets/All Products/Perforated sheet/nikle alloy.png";
import highAlloyPerforatedImg from "../assets/All Products/Perforated sheet/high alloy.png";
import duplexPerforatedImg from "../assets/All Products/Perforated sheet/Duplex.png";
import superDuplexPerforatedImg from "../assets/All Products/Perforated sheet/Super duplex.png";
import titaniumPerforatedImg from "../assets/All Products/Perforated sheet/titanium.png";
import exoticPerforatedImg from "../assets/All Products/Perforated sheet/Exotic alloy.png";

export const PERFORATED_SHEETS_CATEGORY_HERO = ssPerforatedImg;

export const PERFORATED_SHEETS_PRODUCTS = [
  // 1. Stainless Steel Perforated Sheets
  {
    id: "perforated-sheets-stainless-steel",
    slug: "perforated-sheets-stainless-steel",
    name: "Stainless Steel Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    grade: "SS 304 / 304L / 316 / 316L / 321 / 310S",
    heroImage: ssPerforatedImg,
    gallery: [ssPerforatedImg],
    shortDescription: "High-precision CNC punched and laser-cut stainless steel perforated sheets featuring uniform aperture geometry, burr-free edges, and superior corrosion resistance in sanitary and chemical environments.",
    overview: "Supreme Metal & Alloys manufactures industrial and sanitary grade stainless steel perforated sheets engineered for high-performance filtration, acoustic dampening, and architectural aesthetics. Fabricated from premium austenitic grades (AISI 304/304L, 316/316L, 310S, and 321), our sheets undergo precision roller leveling to guarantee sheet flatness with tight hole pitch tolerances and custom margin borders.",
    specifications: {
      holePatterns: "Round (60° Staggered / Straight), Square In-Line, Rectangular Slotted, Hexagonal",
      holeDiameter: "0.5 mm to 25.0 mm",
      pitchCenters: "1.0 mm to 50.0 mm",
      openAreaPercentage: "15% to 65% Open Area",
      sheetThickness: "0.4 mm to 12.0 mm",
      standardSheetSizes: "1000 x 2000 mm, 1250 x 2500 mm, 1500 x 3000 mm, 4ft x 8ft",
      marginsBorders: "Finished Safe Margins (5 mm to 25 mm) or Trimmed-through Edges",
      surfaceFinishes: "2B Mill Finish, No.4 Satin Brushed, Electro-Polished (Pharma Grade)"
    },
    standards: ["ASTM E454", "ISO 7806", "DIN 24041", "ASTM A240", "BS 4492", "EN 10088-2"],
    applications: [
      "Dairy & Food Processing Centrifuge Baskets",
      "Pharmaceutical Sterile Room Acoustic Liners",
      "Chemical Fluid Strainers & Dewatering Sieves",
      "High-End Architectural Exterior Cladding & Sunscreens"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-duplex",
      "perforated-sheets-super-duplex",
      "perforated-sheets-nickel-alloy"
    ]
  },

  // 2. Carbon Steel Perforated Sheets
  {
    id: "perforated-sheets-carbon-steel",
    slug: "perforated-sheets-carbon-steel",
    name: "Carbon Steel Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    grade: "IS 2062 Gr. A/B, ASTM A36, SAE 1008 / 1018, S235JR",
    heroImage: csPerforatedImg,
    gallery: [csPerforatedImg],
    shortDescription: "Heavy-duty structural carbon steel perforated plates punched with precision dies, offering rugged impact resistance, high tensile structural rigidity, and optimal open area.",
    overview: "Manufactured from hot-rolled and cold-rolled structural carbon steel, our carbon steel perforated sheets are tailored for high-abrasion sorting, aggregate grading, and heavy protective machinery enclosures. Available with bare mill finish, red oxide primer, hot-dip galvanized coating, or powder coating to prevent oxidation in harsh environments.",
    specifications: {
      holePatterns: "Staggered Round, Square In-Line, Long Round Slotted (Trommel Pattern)",
      holeDiameter: "1.0 mm to 30.0 mm",
      pitchCenters: "2.0 mm to 60.0 mm",
      openAreaPercentage: "20% to 60% Open Area",
      sheetThickness: "0.8 mm to 16.0 mm (Heavy Plate Punching)",
      standardSheetSizes: "1250 x 2500 mm, 1500 x 3000 mm, 2000 x 6000 mm Heavy Plates",
      marginsBorders: "Plain Margins as per Customer Machine Drawing",
      surfaceFinishes: "Mill Scaled, Pickled & Oiled, Hot Dip Galvanized, Epoxy Coated"
    },
    standards: ["ASTM A36", "ASTM A568", "DIN 24041", "IS 2062", "ISO 7806"],
    applications: [
      "Mining & Quarry Aggregate Trommel Screens",
      "Agricultural Grain Separation & Seed Sorting Sieves",
      "Industrial Heavy Machinery Safety Guards & Covers",
      "Ventilation Louvers & Transformer Enclosures"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-alloy-steel",
      "perforated-sheets-stainless-steel",
      "perforated-sheets-duplex"
    ]
  },

  // 3. Alloy Steel Perforated Sheets
  {
    id: "perforated-sheets-alloy-steel",
    slug: "perforated-sheets-alloy-steel",
    name: "Alloy Steel Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "ALLOY STEEL",
    materialSlug: "alloy-steel",
    grade: "ASTM A387 Gr. 11 / 22 / 91, 16Mo3, 4140, Hardox 400/500",
    heroImage: asPerforatedImg,
    gallery: [asPerforatedImg],
    shortDescription: "Wear-resistant and elevated-temperature chromium-molybdenum alloy steel perforated panels engineered for severe mechanical abrasion and thermal impact.",
    overview: "Supreme Metal & Alloys supplies heat-treated Cr-Mo alloy steel and wear-resistant perforated sheets developed specifically for heavy mechanical impact, thermal stress, and particulate abrasion. Our heavy-gauge punching preserves metallurgical microstructure without micro-cracking around aperture perimeters.",
    specifications: {
      holePatterns: "Heavy Duty Staggered Round, Oblong Slotted, Wear-Resistant Square",
      holeDiameter: "2.0 mm to 40.0 mm",
      pitchCenters: "4.0 mm to 75.0 mm",
      openAreaPercentage: "18% to 55% Open Area",
      sheetThickness: "1.5 mm to 20.0 mm",
      standardSheetSizes: "1250 x 2500 mm, 1500 x 3000 mm, Custom CNC Cut Panels",
      marginsBorders: "Continuous or Bolt-Hole Edge Margins",
      surfaceFinishes: "Quenched & Tempered, Stress Relieved, Shot Blasted"
    },
    standards: ["ASTM A387", "EN 10028-2", "DIN 24041", "ISO 7806", "DIN 17155"],
    applications: [
      "Thermal Power Ash Handling & Coal Pulverizer Liners",
      "Cement Plant Classifier Separators & Clinker Sieves",
      "Foundry Sand Reclaiming & Vibrating Shake-Out Screens",
      "High-Temperature Boiler Flue Gas Deflector Baffles"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-carbon-steel",
      "perforated-sheets-high-alloy",
      "perforated-sheets-super-duplex"
    ]
  },

  // 4. Nickel Alloy Perforated Sheets
  {
    id: "perforated-sheets-nickel-alloy",
    slug: "perforated-sheets-nickel-alloy",
    name: "Nickel Alloy Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    grade: "Inconel 625 / 600, Hastelloy C276 / C22, Monel 400 / K500, Nickel 200",
    heroImage: nickelPerforatedImg,
    gallery: [nickelPerforatedImg],
    shortDescription: "Ultra-corrosion-resistant nickel alloy perforated sheets manufactured from Inconel, Hastelloy, and Monel for aggressive acids, chlorinated organics, and marine environments.",
    overview: "Formed from vacuum-melted high nickel alloys, these perforated sheets provide complete immunity to chloride-induced stress corrosion cracking, pitting in boiling mineral acids, and marine bio-fouling. Each sheet is precision punched with dedicated carbide tooling under lubrication to prevent alloy contamination.",
    specifications: {
      holePatterns: "Precision Micro-Hole Round, Staggered 60°, Chemical Slotted",
      holeDiameter: "0.4 mm to 15.0 mm",
      pitchCenters: "0.8 mm to 30.0 mm",
      openAreaPercentage: "20% to 50% Open Area",
      sheetThickness: "0.5 mm to 8.0 mm",
      standardSheetSizes: "1000 x 2000 mm, 1219 x 2438 mm, Precision Slit Strips",
      marginsBorders: "Zero-Burr Precision Margins",
      surfaceFinishes: "Solution Annealed, Chemically Descaled, Bright Annealed"
    },
    standards: ["ASTM B168", "ASTM B443", "ASTM B424", "ASTM B575", "NACE MR0175", "ISO 7806"],
    applications: [
      "Chemical Acid Distillation Packing Support Trays",
      "Offshore Sour Gas Stripper Demister Support Plates",
      "Marine Scrubber Internals & Seawater Chlorination Cells",
      "Nuclear Waste Vitrification & Catalyst Recovery Baskets"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-high-alloy",
      "perforated-sheets-super-duplex",
      "perforated-sheets-exotic-alloy"
    ]
  },

  // 5. High Alloy Perforated Sheets
  {
    id: "perforated-sheets-high-alloy",
    slug: "perforated-sheets-high-alloy",
    name: "High Alloy Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "HIGH ALLOY",
    materialSlug: "high-alloy",
    grade: "Alloy 20 (Carpenter 20), Sanicro 28, 254 SMO (6Mo / UNS S31254), AL-6XN",
    heroImage: highAlloyPerforatedImg,
    gallery: [highAlloyPerforatedImg],
    shortDescription: "Specialized high-molybdenum and copper-bearing austenitic alloy perforated sheets built for hot sulfuric acid, wet halide bleaching, and flue gas desulfurization.",
    overview: "Our high alloy perforated sheets utilize advanced superaustenitic chemistries (including 254 SMO 6% Moly and Alloy 20) to deliver extreme localized corrosion resistance where standard stainless steels fail. Engineered for pulp bleaching, wet flue gas scrubbers, and sulfuric acid pickling operations.",
    specifications: {
      holePatterns: "High-Precision Staggered Round, Acid-Resistant Slotted, Hexagonal",
      holeDiameter: "0.6 mm to 20.0 mm",
      pitchCenters: "1.2 mm to 40.0 mm",
      openAreaPercentage: "22% to 58% Open Area",
      sheetThickness: "0.8 mm to 10.0 mm",
      standardSheetSizes: "1000 x 2000 mm, 1250 x 2500 mm",
      marginsBorders: "Custom Machine Margins to Spec",
      surfaceFinishes: "Pickled & Passivated, Descaled Mill Finish"
    },
    standards: ["ASTM B463", "ASTM A240 (UNS S31254)", "ISO 7806", "DIN 24041", "NACE MR0175"],
    applications: [
      "Sulfuric Acid Pickling Line Immersion Baskets",
      "Pulp & Paper Bleach Plant Drum Washer Screens",
      "Flue Gas Desulfurization (FGD) Mist Eliminator Plates",
      "Phosphoric Acid Evaporator Sieve Plates"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-nickel-alloy",
      "perforated-sheets-super-duplex",
      "perforated-sheets-stainless-steel"
    ]
  },

  // 6. Duplex Stainless Steel Perforated Sheets
  {
    id: "perforated-sheets-duplex",
    slug: "perforated-sheets-duplex",
    name: "Duplex Stainless Steel Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "DUPLEX",
    materialSlug: "duplex",
    grade: "Duplex 2205 (UNS S31803 / S32205 / EN 1.4462)",
    heroImage: duplexPerforatedImg,
    gallery: [duplexPerforatedImg],
    shortDescription: "High-strength dual-phase austenitic-ferritic perforated sheets combining twice the mechanical yield strength of standard austenitic steel with exceptional chloride resistance.",
    overview: "Manufactured from certified Duplex 2205 plate, these perforated sheets offer high mechanical load-bearing capacity allowing thickness reduction and weight savings of up to 40% compared to SS 316. Unmatched resistance to stress corrosion cracking in brackish water, marine atmospheres, and sour gas.",
    specifications: {
      holePatterns: "Staggered Round 60°, Square Perforations, Longitudinal Slotted",
      holeDiameter: "1.0 mm to 25.0 mm",
      pitchCenters: "2.0 mm to 50.0 mm",
      openAreaPercentage: "20% to 62% Open Area",
      sheetThickness: "0.8 mm to 12.0 mm",
      standardSheetSizes: "1000 x 2000 mm, 1250 x 2500 mm, 1500 x 3000 mm",
      marginsBorders: "Safe Handling Margins with Custom Bolt Holes",
      surfaceFinishes: "No.1 Descaled, Roller Leveled Flat"
    },
    standards: ["ASTM A240", "EN 10088-2", "ISO 7806", "NACE MR0175 / ISO 15156", "DIN 24041"],
    applications: [
      "Seawater Intake Strainers & Desalination Pre-Filters",
      "Offshore Marine Platform Drainage Gratings",
      "Chemical Process Centrifuge Separation Drums",
      "Oilfield Produced Water Filtration Cartridges"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-super-duplex",
      "perforated-sheets-stainless-steel",
      "perforated-sheets-nickel-alloy"
    ]
  },

  // 7. Super Duplex Stainless Steel Perforated Sheets
  {
    id: "perforated-sheets-super-duplex",
    slug: "perforated-sheets-super-duplex",
    name: "Super Duplex Stainless Steel Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    grade: "Super Duplex 2507 (UNS S32750 / EN 1.4410), Zeron 100 (UNS S32760)",
    heroImage: superDuplexPerforatedImg,
    gallery: [superDuplexPerforatedImg],
    shortDescription: "Ultra-heavy-duty super duplex perforated plates with PREN > 42, engineered for deep subsea extraction, aggressive halides, and extreme hydraulic pressures.",
    overview: "Formed from 25% Chromium alloyed Super Duplex 2507, these perforated sheets provide the ultimate defense against pitting and crevice corrosion in hot chlorinated seawater and high-pressure chemical reactions. Heavy hydraulic CNC punching guarantees aperture concentricity under strict NACE MR0175 compliance.",
    specifications: {
      holePatterns: "Heavy Staggered Round, High-Strength Slotted, Hexagonal Mesh",
      holeDiameter: "1.2 mm to 30.0 mm",
      pitchCenters: "2.5 mm to 60.0 mm",
      openAreaPercentage: "18% to 55% Open Area",
      sheetThickness: "1.0 mm to 15.0 mm",
      standardSheetSizes: "1000 x 2000 mm, 1250 x 2500 mm, 1500 x 3000 mm",
      marginsBorders: "Unpunched Perimeter Margins for Structural Welding",
      surfaceFinishes: "Solution Annealed 1050°C+, Water Quenched, Pickled"
    },
    standards: ["ASTM A240", "EN 10088-2", "NACE MR0175 / ISO 15156", "ISO 7806", "DIN 24041"],
    applications: [
      "Deepwater Subsea Wellhead Sand Control Screens",
      "High-Pressure Seawater Reverse Osmosis (SWRO) Strainers",
      "Naval Defense Hull Sonar Baffle Plates & Hydrophone Covers",
      "Offshore Firewater Deluge System Filtration Screens"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-duplex",
      "perforated-sheets-titanium",
      "perforated-sheets-nickel-alloy"
    ]
  },

  // 8. Titanium Perforated Sheets
  {
    id: "perforated-sheets-titanium",
    slug: "perforated-sheets-titanium",
    name: "Titanium Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "TITANIUM",
    materialSlug: "titanium",
    grade: "Titanium Grade 1 / 2 (Pure), Grade 5 (Ti-6Al-4V), Grade 7 (Pd Enhanced)",
    heroImage: titaniumPerforatedImg,
    gallery: [titaniumPerforatedImg],
    shortDescription: "Ultra-lightweight and biologically inert titanium perforated sheets with impervious natural oxide film, built for chlor-alkali electrolysis, aerospace acoustics, and medical applications.",
    overview: "Manufactured from pure and alloyed titanium plate (Gr.2 and Gr.5), our titanium perforated sheets offer the highest strength-to-weight ratio among structural metals alongside total immunity to wet chlorine gas, chlorites, and marine bio-corrosion. Punched with precision CNC tooling under inert conditions to prevent work hardening.",
    specifications: {
      holePatterns: "Fine Micro-Hole Round, Precision Chemically Etched / Laser Cut",
      holeDiameter: "0.5 mm to 15.0 mm",
      pitchCenters: "1.0 mm to 25.0 mm",
      openAreaPercentage: "20% to 50% Open Area",
      sheetThickness: "0.4 mm to 6.0 mm",
      standardSheetSizes: "1000 x 2000 mm, 1219 x 2438 mm, Precision Custom Stampings",
      marginsBorders: "Micro-Toleranced Safe Borders",
      surfaceFinishes: "Vacuum Annealed, Acid Pickled, Medical Cleaned"
    },
    standards: ["ASTM B265", "ASME SB265", "ISO 7806", "DIN 17860", "AMS 4911"],
    applications: [
      "Chlor-Alkali Membrane Cell Anode / Cathode Mesh Substrates",
      "Electro-Chlorination Generating Cells for Marine Ballast",
      "Aerospace Engine Nacelle Lightweight Acoustic Baffles",
      "Biomedical Autoclave Sterilization Trays & Implant Cages"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-exotic-alloy",
      "perforated-sheets-super-duplex",
      "perforated-sheets-nickel-alloy"
    ]
  },

  // 9. Exotic Alloy Perforated Sheets
  {
    id: "perforated-sheets-exotic-alloy",
    slug: "perforated-sheets-exotic-alloy",
    name: "Exotic Alloy Perforated Sheets",
    division: "MANUFACTURER",
    category: "Perforated Sheets",
    categorySlug: "perforated-sheets",
    material: "EXOTIC ALLOYS",
    materialSlug: "exotic-alloys",
    grade: "Tantalum, Zirconium 702, Niobium, Haynes 25, Hastelloy B-3, Alloy 59",
    heroImage: exoticPerforatedImg,
    gallery: [exoticPerforatedImg],
    shortDescription: "Specialized refractory and reactive metal perforated sheets manufactured from Tantalum, Zirconium, and Niobium for the most destructive boiling mineral acid environments.",
    overview: "Engineered for mission-critical processes where even high-nickel alloys degrade, our exotic refractory alloy perforated sheets utilize Zirconium 702 and pure Tantalum. These reactive metals form an impenetrable ceramic-like oxide boundary capable of withstanding boiling concentrated hydrochloric acid and hot nitric acid.",
    specifications: {
      holePatterns: "CNC Micro-Drilled, Laser Cut Precision Round, Fine Slotted",
      holeDiameter: "0.3 mm to 12.0 mm",
      pitchCenters: "0.7 mm to 20.0 mm",
      openAreaPercentage: "15% to 45% Open Area",
      sheetThickness: "0.3 mm to 5.0 mm",
      standardSheetSizes: "500 x 1000 mm, 1000 x 2000 mm Custom Vacuum-Annealed Sheets",
      marginsBorders: "Engineered Perimeter Margins",
      surfaceFinishes: "Vacuum Degassed, Chemically Cleaned, Mirror Smooth"
    },
    standards: ["ASTM B365", "ASTM B551", "ASTM B574", "ISO 7806", "DIN 24041"],
    applications: [
      "Hydrochloric Acid Stripper Reboiler Internal Distribution Plates",
      "Nuclear Fuel Reprocessing Dissolver Sieve Trays",
      "Precious Metal Homogeneous Catalyst Recovery Strainers",
      "Aerospace Hypersonic Thermal Expansion Barrier Shields"
    ],
    isResearchedDraft: false,
    relatedProductIds: [
      "perforated-sheets-titanium",
      "perforated-sheets-nickel-alloy",
      "perforated-sheets-super-duplex"
    ]
  }
];

export const getPerforatedSheetBySlug = (slug) => {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().replace("-manufactured-in-mumbai", "").trim();
  return PERFORATED_SHEETS_PRODUCTS.find(
    (p) => p.slug === clean || p.id === clean || p.materialSlug === clean
  );
};

export const getRelatedPerforatedSheets = (currentSlug) => {
  const current = getPerforatedSheetBySlug(currentSlug);
  if (!current) return PERFORATED_SHEETS_PRODUCTS.slice(0, 3);
  return PERFORATED_SHEETS_PRODUCTS.filter((p) => p.id !== current.id).slice(0, 3);
};
