// Isolated Hose Pipes Product Data Source
// Exact 9 Hose Pipes Material Categories matching the reference image grid

import hoseSsImg from "../assets/All Products/Hose Pipes/hose_stainless_steel.png";
import hoseCsImg from "../assets/All Products/Hose Pipes/hose_carbon_steel.png";
import hoseAsImg from "../assets/All Products/Hose Pipes/hose_alloy_steel.png";
import hoseNickelImg from "../assets/All Products/Hose Pipes/hose_nickel_alloy.png";
import hoseHighAlloyImg from "../assets/All Products/Hose Pipes/hose_high_alloy.png";
import hoseDuplexImg from "../assets/All Products/Hose Pipes/hose_duplex.png";
import hoseSuperDuplexImg from "../assets/All Products/Hose Pipes/hose_super_duplex.png";
import hoseTitaniumImg from "../assets/All Products/Hose Pipes/hose_titanium.png";
import hoseExoticImg from "../assets/All Products/Hose Pipes/hose_exotic_alloy.png";
import hoseCollageImg from "../assets/All Products/Hose Pipes/hose_pipes_collage.png";

export { hoseCollageImg };

export const HOSE_PIPES_MATERIALS = [
  {
    id: "hose-pipes-stainless-steel",
    slug: "stainless-steel",
    routeSlug: "hose-pipes/stainless-steel",
    materialId: "stainless-steel",
    name: "Stainless Steel Hose Pipes",
    materialName: "Stainless Steel",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseSsImg,
    heroImage: hoseSsImg,
    gridPosition: "Row 1, Column 1",
    grades: ["SS 304", "SS 304L", "SS 316", "SS 316L", "SS 321", "SS 347", "SS 316Ti", "SS 904L"],
    shortDescription: "Flexible corrugated stainless steel hoses with single or double layer SS 304/316 wire braiding for thermal expansion and vibration isolation.",
    overview: "Supreme Metal & Alloys manufactures high-flexibility annular and helical corrugated stainless steel hose pipes wrapped in high-tensile wire braid. Engineered to absorb extreme mechanical vibration, thermal expansion, piping axial misalignment, and pressure pulsations in high-temperature chemical and fluid networks.",
    applications: [
      "Petrochemical plants & refinery chemical loops",
      "Steam & condensate drain lines",
      "Cryogenic liquid nitrogen & oxygen transfer",
      "Industrial gas headers & furnace fuel lines",
      "Turbine exhaust expansion joints",
      "Boiler feed water lines & hydraulic press connections"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/4\" NB (DN6) to 12\" NB (DN300)" },
      { label: "Pressure Rating", value: "Vacuum to 250 Bar (PN10 - PN250 / Class 150# - 1500#)" },
      { label: "Operating Temperature", value: "-200°C to +600°C (-328°F to +1112°F)" },
      { label: "Corrugation Profile", value: "Close Pitch Annular Corrugation (Standard & Ultra-Flex)" },
      { label: "Wire Braiding", value: "Single Layer (1B) / Double Layer (2B) SS 304 / SS 316 Wire" },
      { label: "End Fittings", value: "Flanged (ANSI B16.5, DIN, BS), Threaded NPT/BSP, Weld Stubs, Camlock, Tri-Clover" }
    ],
    standards: [
      "BS 6501 Part 1",
      "ISO 10380 Type A/B/C",
      "ASME B31.3 Process Piping",
      "DIN EN 14585-1",
      "PED 2014/68/EU Compliant"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Hydrostatic @ 1.5x WP & Helium Mass Spectrometer Tested",
      bendRadius: "Dynamic Flexing Radius engineered per ISO 10380 standards",
      qualityCertificates: "EN 10204 3.1 / 3.2 TPI Certified"
    }
  },
  {
    id: "hose-pipes-carbon-steel",
    slug: "carbon-steel",
    routeSlug: "hose-pipes/carbon-steel",
    materialId: "carbon-steel",
    name: "Carbon Steel Hose Pipes",
    materialName: "Carbon Steel",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseCsImg,
    heroImage: hoseCsImg,
    gridPosition: "Row 1, Column 2",
    grades: ["ASTM A106 Gr B", "ASTM A105", "ASTM A333 Gr 6 (Low Temp)", "IS 2062", "ST 52.3"],
    shortDescription: "Heavy-duty flexible carbon steel hose assemblies with protective outer wire braiding for high-pressure oil, hydraulic, and fuel transfer.",
    overview: "Engineered for rugged industrial environments, Supreme Carbon Steel Hose Pipes feature heavy-wall inner corrugated cores with high-strength carbon steel end fittings. They provide superior pressure containment and mechanical durability for non-corrosive hydrocarbons, hydraulic fluids, and high-pressure steam.",
    applications: [
      "Heavy hydraulic machinery & power packs",
      "Oil & gas drilling rig fluid manifold connections",
      "Refinery heavy oil & fuel oil transfer lines",
      "Steel mill cooling water & furnace hydraulic lines",
      "Compressor discharge vibration dampening"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/2\" NB (DN15) to 14\" NB (DN350)" },
      { label: "Pressure Rating", value: "50 Bar to 350 Bar Working Pressure" },
      { label: "Operating Temperature", value: "-40°C to +400°C (-40°F to +752°F)" },
      { label: "Corrugation Profile", value: "Heavy Wall Pitch Annular Corrugation" },
      { label: "Wire Braiding", value: "High-Tensile Galvanized Carbon Steel Wire Braid" },
      { label: "End Fittings", value: "Carbon Steel A105 Flanged, Male/Female NPT Union, Socketweld" }
    ],
    standards: [
      "ASME B31.1 Power Piping",
      "ISO 10380",
      "EN 853 / EN 856 Hydraulic Standards",
      "API 7K / API 16D"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Pneumatic & Hydrostatic Tested",
      bendRadius: "Heavy-duty rigid-flex dynamic radius",
      qualityCertificates: "EN 10204 3.1 Hydro-Tested Certification"
    }
  },
  {
    id: "hose-pipes-alloy-steel",
    slug: "alloy-steel",
    routeSlug: "hose-pipes/alloy-steel",
    materialId: "alloy-steel",
    name: "Alloy Steel Hose Pipes",
    materialName: "Alloy Steel",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseAsImg,
    heroImage: hoseAsImg,
    gridPosition: "Row 1, Column 3",
    grades: ["ASTM A335 P11", "ASTM A335 P22", "ASTM A335 P91", "ASTM A182 F11", "ASTM A182 F22", "ASTM A182 F91"],
    shortDescription: "High-temp chromium-molybdenum alloy flexible hoses engineered for power generation steam headers and elevated temperature service.",
    overview: "Supreme Alloy Steel Hose Pipes are engineered specifically for thermal power plants, superheaters, and high-pressure cracking units where elevated temperatures, creep strength, and thermal fatigue resistance are paramount.",
    applications: [
      "Thermal power station main steam headers",
      "Boiler superheater & reheater piping bypasses",
      "Refinery hydrocracker & coker units",
      "High-pressure steam turbine expansion connections",
      "High-temperature furnace gas exhaust lines"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/2\" NB (DN15) to 10\" NB (DN250)" },
      { label: "Pressure Rating", value: "Up to 280 Bar Working Pressure" },
      { label: "Operating Temperature", value: "Up to +650°C (+1202°F)" },
      { label: "Corrugation Profile", value: "Thermally Stress-Relieved Close Pitch Corrugation" },
      { label: "Wire Braiding", value: "Alloy Steel / Stainless High-Heat Braiding" },
      { label: "End Fittings", value: "ASTM A182 F11/F22/F91 Weld Stubs & RTJ Flanges" }
    ],
    standards: [
      "ASTM A335 / A182",
      "ASME Section I & VIII Power Boilers",
      "ISO 10380",
      "EN 13480 Industrial Piping"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "Radiographic Weld Inspection & 100% Hydrostatic Test",
      bendRadius: "Precision calculated elevated-temperature flex radius",
      qualityCertificates: "EN 10204 3.1 / 3.2 TPI Witnessed"
    }
  },
  {
    id: "hose-pipes-nickel-alloy",
    slug: "nickel-alloy",
    routeSlug: "hose-pipes/nickel-alloy",
    materialId: "nickel-alloys",
    name: "Nickel Alloy Hose Pipes",
    materialName: "Nickel Alloy",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseNickelImg,
    heroImage: hoseNickelImg,
    gridPosition: "Row 2, Column 1",
    grades: ["Inconel 600", "Inconel 625", "Incoloy 800/825", "Hastelloy C276", "Monel 400", "Monel K500", "Nickel 200/201"],
    shortDescription: "Extreme corrosion-resistant flexible nickel alloy hoses for aggressive chemical processing, hot acids, and marine seawater lines.",
    overview: "Supreme Nickel Alloy Hose Pipes utilize high-nickel alloy corrugated inner cores (Inconel, Hastelloy, Monel) to deliver complete immunity against pitting, crevice corrosion, and stress corrosion cracking in aggressive acids, caustic soda, and chlorine gas.",
    applications: [
      "Chlor-alkali cell feed lines & chlorine gas transfer",
      "Marine seawater desalination & subsea chemical injection",
      "Sulfuric acid, hydrochloric acid & phosphoric acid transfer",
      "Nuclear power plant primary coolant fluid loops",
      "Offshore oil & gas sour gas (H2S) flare lines"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/4\" NB (DN6) to 8\" NB (DN200)" },
      { label: "Pressure Rating", value: "Full Vacuum to 300 Bar" },
      { label: "Operating Temperature", value: "-200°C to +815°C (-328°F to +1500°F)" },
      { label: "Corrugation Profile", value: "Close Pitch Inconel 625 / Hastelloy C276 Micro-Corrugation" },
      { label: "Wire Braiding", value: "High-Density Inconel 625 / Monel 400 Wire Braid" },
      { label: "End Fittings", value: "Monel 400 / Inconel 625 Weld Necks, ANSI Flanges, Lap Joints" }
    ],
    standards: [
      "ASTM B575 / B443 / B127",
      "ASME B31.3 Chemical Process Piping",
      "NACE MR0175 / ISO 15156 Sour Service",
      "ISO 10380"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Helium Mass Spectrometer & Mass Spec Vacuum Leak Tested",
      bendRadius: "High-flex dynamic radius",
      qualityCertificates: "EN 10204 3.1 / 3.2 TPI Certified"
    }
  },
  {
    id: "hose-pipes-high-alloy",
    slug: "high-alloy",
    routeSlug: "hose-pipes/high-alloy",
    materialId: "high-alloys",
    name: "High Alloy Hose Pipes",
    materialName: "High Alloy",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseHighAlloyImg,
    heroImage: hoseHighAlloyImg,
    gridPosition: "Row 2, Column 2",
    grades: ["904L (UNS N08904)", "SMO 254 (UNS S31254)", "Alloy 20 (UNS N08020)", "Hastelloy C22", "Sanicro 28"],
    shortDescription: "Specialized high-alloy flexible hose assemblies designed for concentrated sulfuric acid, severe pitting, and flue gas desulfurization.",
    overview: "Supreme High Alloy Hose Pipes are designed for harsh chemical processing environments where conventional stainless steels fail due to aggressive acid attack or severe chloride pitting. They combine extreme pitting resistance (PREN > 43) with high mechanical flexibility.",
    applications: [
      "Fertilizer manufacturing & wet process phosphoric acid",
      "Sulfuric acid production & heat exchanger cooling loops",
      "Pulp & paper chlorine dioxide bleaching stages",
      "Flue gas desulfurization (FGD) scrubber manifolds",
      "Specialty pharmaceutical acid reactor feeds"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/2\" NB (DN15) to 8\" NB (DN200)" },
      { label: "Pressure Rating", value: "Up to 200 Bar Working Pressure" },
      { label: "Operating Temperature", value: "-100°C to +500°C (-148°F to +932°F)" },
      { label: "Corrugation Profile", value: "High-Flexibility Heavy Wall Annular Corrugation" },
      { label: "Wire Braiding", value: "SMO 254 / 904L Wire Braid" },
      { label: "End Fittings", value: "Alloy 20 / SMO 254 Weld Necks, ANSI 150#/300# Flanges" }
    ],
    standards: [
      "ASTM A240 / B625",
      "ASME B31.3 Process Piping",
      "NACE MR0103 / MR0175",
      "ISO 10380"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Hydrostatic & Nitrox Leak Tested",
      bendRadius: "Smooth continuous flexing radius",
      qualityCertificates: "EN 10204 3.1 Mill Test Certified"
    }
  },
  {
    id: "hose-pipes-duplex",
    slug: "duplex",
    routeSlug: "hose-pipes/duplex",
    materialId: "duplex",
    name: "Duplex Hose Pipes",
    materialName: "Duplex",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseDuplexImg,
    heroImage: hoseDuplexImg,
    gridPosition: "Row 2, Column 3",
    grades: ["Duplex 2205 (UNS S31803 / S32205)", "EN 1.4462", "LDX 2101 (UNS S32101)", "F51"],
    shortDescription: "High mechanical yield strength dual-phase flexible duplex hose pipes combining high tensile strength with stress-corrosion cracking immunity.",
    overview: "Supreme Duplex 2205 Hose Pipes feature a 50/50 austenitic-ferritic microstructure that doubles the yield strength of standard 316L, making them ideal for high-pressure marine, offshore, and chemical tanker piping systems.",
    applications: [
      "Offshore oil platform topsides & riser connections",
      "FPSO vessel chemical injection lines",
      "Seawater Reverse Osmosis (SWRO) desalination high-pressure pumps",
      "Chemical tanker cargo loading & unloading lines",
      "Subsea fluid transfer umbilical jumpers"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/2\" NB (DN15) to 10\" NB (DN250)" },
      { label: "Pressure Rating", value: "Up to 300 Bar (High Yield Pressure Rating)" },
      { label: "Operating Temperature", value: "-50°C to +300°C (-58°F to +572°F)" },
      { label: "Corrugation Profile", value: "Precision Formed Dual-Phase Corrugation" },
      { label: "Wire Braiding", value: "Duplex 2205 Wire Braid" },
      { label: "End Fittings", value: "UNS S31803 Flanges, Weld Stubs, Threaded NPT" }
    ],
    standards: [
      "ASTM A240 / A182 F51",
      "ISO 10380",
      "NORSOK M-630",
      "NACE MR0175"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Ultrasonic & Hydrostatic Tested @ 1.5x Working Pressure",
      bendRadius: "Dynamic high-tensile flex radius",
      qualityCertificates: "EN 10204 3.1 / 3.2 TPI Certified"
    }
  },
  {
    id: "hose-pipes-super-duplex",
    slug: "super-duplex",
    routeSlug: "hose-pipes/super-duplex",
    materialId: "super-duplex",
    name: "Super Duplex Hose Pipes",
    materialName: "Super Duplex",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseSuperDuplexImg,
    heroImage: hoseSuperDuplexImg,
    gridPosition: "Row 3, Column 1",
    grades: ["Super Duplex 2507 (UNS S32750)", "Zeron 100 (UNS S32760)", "EN 1.4410", "F53 / F55"],
    shortDescription: "Ultra-high strength super duplex flexible metal hoses engineered for harsh offshore oilfields, subsea risers, and extreme chloride exposure.",
    overview: "Supreme Super Duplex Hose Pipes deliver PREN > 42 and exceptional mechanical properties to withstand extreme subsea pressures, sour gas (H2S), and concentrated chloride fluids without pitting or cracking in deepwater applications.",
    applications: [
      "Subsea umbilical jumpers & Christmas tree connections",
      "High-pressure sour gas (H2S) re-injection lines",
      "Offshore deepwater drilling platform piping",
      "High-pressure SWRO brine recovery manifolds",
      "Severe chloride chemical processing plant lines"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/2\" NB (DN15) to 8\" NB (DN200)" },
      { label: "Pressure Rating", value: "Up to 400 Bar Working Pressure" },
      { label: "Operating Temperature", value: "-50°C to +280°C (-58°F to +536°F)" },
      { label: "Corrugation Profile", value: "Heavy-Duty Reinforced Super Duplex Corrugation" },
      { label: "Wire Braiding", value: "Double Layer Super Duplex 2507 Wire Braid" },
      { label: "End Fittings", value: "Super Duplex 2507 RTJ Flanges, Compact Swivel Joints" }
    ],
    standards: [
      "ASTM A240 / A182 F53/F55",
      "NORSOK M-650 / M-630",
      "NACE MR0175 / ISO 15156",
      "ISO 10380"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Radiographic Weld Seam & High Pressure Helium Tested",
      bendRadius: "Heavy reinforced subsea flex radius",
      qualityCertificates: "EN 10204 3.2 DNV / ABS Witnessed Certification"
    }
  },
  {
    id: "hose-pipes-titanium",
    slug: "titanium",
    routeSlug: "hose-pipes/titanium",
    materialId: "titanium",
    name: "Titanium Hose Pipes",
    materialName: "Titanium",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseTitaniumImg,
    heroImage: hoseTitaniumImg,
    gridPosition: "Row 3, Column 2",
    grades: ["Titanium Grade 1", "Titanium Grade 2 (CP)", "Titanium Grade 5 (Ti-6Al-4V)", "Titanium Grade 7 (Palladium)"],
    shortDescription: "Lightweight, high strength-to-weight ratio titanium flexible hoses completely immune to seawater, wet chlorine, and nitric acid.",
    overview: "Supreme Titanium Hose Pipes offer total immunity to marine environments and aggressive oxidizing acids while being 45% lighter than steel. Essential for aerospace fluid systems, chlor-alkali electrolysis, and naval vessels.",
    applications: [
      "Aerospace & defense hydraulic & fuel lines",
      "Naval submarine cooling & seawater piping",
      "Chlor-alkali electrolysis cell connections",
      "Nitric acid & oxidizing chemical feed lines",
      "Offshore titanium heat exchanger connections"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/4\" NB (DN6) to 6\" NB (DN150)" },
      { label: "Pressure Rating", value: "Full Vacuum to 200 Bar" },
      { label: "Operating Temperature", value: "-100°C to +400°C (-148°F to +752°F)" },
      { label: "Corrugation Profile", value: "Precision Argon-Shielded Formed Titanium Corrugation" },
      { label: "Wire Braiding", value: "Titanium Grade 2 Wire Braid" },
      { label: "End Fittings", value: "Titanium Grade 2 / Grade 5 Flanges, Stub Ends, Threaded Unions" }
    ],
    standards: [
      "ASTM B265 / B348",
      "ASME B31.3 Process Piping",
      "AMS 4928 Aerospace Spec",
      "ISO 10380"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% Mass Spectrometer Vacuum Leak Tested",
      bendRadius: "Ultra-lightweight dynamic flex radius",
      qualityCertificates: "EN 10204 3.1 Mill Test Certified"
    }
  },
  {
    id: "hose-pipes-exotic-alloy",
    slug: "exotic-alloy",
    routeSlug: "hose-pipes/exotic-alloy",
    materialId: "exotic-alloys",
    name: "Exotic Alloy Hose Pipes",
    materialName: "Exotic Alloy",
    category: "Hose Pipes",
    categorySlug: "hose-pipes",
    division: "MANUFACTURER",
    image: hoseExoticImg,
    heroImage: hoseExoticImg,
    gridPosition: "Row 3, Column 3",
    grades: ["Zirconium 702 (UNS R60702)", "Tantalum R05200", "Cupro Nickel 70/30 (UNS C71500)", "Hastelloy B2/B3"],
    shortDescription: "Custom-engineered exotic metal flexible hoses for specialized nuclear reactors, hot hydrochloric acid, and military marine applications.",
    overview: "Supreme Exotic Alloy Hose Pipes are ultra-specialized flexible fluid transfer assemblies fabricated from rare nuclear and chemical metals (Zirconium, Tantalum, Hastelloy B3) for applications where no standard alloy can survive severe acid or nuclear radiation exposure.",
    applications: [
      "Nuclear fuel reprocessing & radioactive fluid loops",
      "Hot concentrated hydrochloric acid synthesis",
      "Acetic acid & formic acid production reactors",
      "Military submarine sonar cooling lines (CuNi 70/30)",
      "Specialty chemical batch synthesis loops"
    ],
    specifications: [
      { label: "Bore Size Range", value: "1/4\" NB (DN6) to 6\" NB (DN150)" },
      { label: "Pressure Rating", value: "Full Vacuum to 220 Bar" },
      { label: "Operating Temperature", value: "-150°C to +500°C (-238°F to +932°F)" },
      { label: "Corrugation Profile", value: "Inert Gas Shielded Exotic Alloy Corrugation" },
      { label: "Wire Braiding", value: "High-Purity Exotic Wire Braid / Protective Armor Sleeve" },
      { label: "End Fittings", value: "Custom Zirconium / Tantalum Clad Flanges, Precision Swivel Unions" }
    ],
    standards: [
      "ASTM B550 / B523",
      "ASME Section III Nuclear Components",
      "NACE MR0175",
      "ISO 10380"
    ],
    technicalDetails: {
      burstPressureSafetyFactor: "4:1 Minimum",
      leakTesting: "100% NDT Inspected & Mass Spec Helium Tested",
      bendRadius: "Custom engineered precision flex radius",
      qualityCertificates: "EN 10204 3.1 / 3.2 Full TPI Certified with MTC"
    }
  }
];

// Helper Functions for Hose Pipes
export function getHosePipeBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().replace("hose-pipes/", "").trim();
  return HOSE_PIPES_MATERIALS.find(
    (item) => item.slug === cleanSlug || item.materialId === cleanSlug || item.id === cleanSlug
  ) || null;
}

export function getRelatedHosePipes(currentSlug) {
  const cleanSlug = currentSlug ? currentSlug.toLowerCase().replace("hose-pipes/", "").trim() : "";
  return HOSE_PIPES_MATERIALS.filter((item) => item.slug !== cleanSlug);
}
