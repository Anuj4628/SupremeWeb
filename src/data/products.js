// Centralized Product Data Layer - Supreme Metal & Alloys (SMA)
// Official Single Source of Truth for all Product Listing & Product Detail pages

// ----------------------------------------------------------------------
// Image Mapping Protocol & Verified Project Asset Imports
// ----------------------------------------------------------------------
import sheetImg from "../assets/All Products/Sheet.png";
import coilImg from "../assets/All Products/Coil.png";
import heavyPlatesBarsImg from "../assets/heavy_plates_coils_bars.jpg";
import precisionPipesJpg from "../assets/precision_pipes_tubes.jpg";
import precisionPipesPng from "../assets/Product images/PRECISION PIPES, TUBES & HIGH-PERFORMANCE ALLOYS.png";
import angleChannelFlatImg from "../assets/All Products/Angle,Channel,flat bar.png";
import forgedFlangesImg from "../assets/FORGED INDUSTRIAL FLANGES & PIPELINE FITTINGS.png";
import fastenersImg from "../assets/All Products/Fasteners.png";
import buttWeldFitImg from "../assets/All Products/Butt Weld fit.png";
import forgedFittingPng from "../assets/All Products/fordege fitting.png";
import forgedFittingsAsset from "../assets/forged_fittings.png";
import dairySanitaryImg from "../assets/All Products/dairy and sanitary tube fittings.png";
import tcFittingsImg from "../assets/All Products/TC fittings.png";
import ferruleFittingsImg from "../assets/All Products/ferrule fittings.png";

// Shared Industry List
export const SHARED_APPLICATION_INDUSTRIES = [
  "Oil & Gas / Refineries",
  "Petrochemicals & Chemical Processing",
  "Power Generation & Nuclear Power",
  "Offshore & Marine / Shipbuilding",
  "Pharmaceuticals & Food Processing (Dairy / Sanitary)",
  "Aerospace & Defense Engineering",
  "Fertilizers & Desalination Plants",
  "Heavy Industrial Engineering & Infrastructure"
];

// Track missing images in dev mode per protocol section 2d
export const MISSING_IMAGE_MAPPING = [];

/**
 * Verified Product Data Array (16 Total Offerings: 10 Catalogue-Verified + 6 Researched Addendum Items)
 */
export const productsData = [
  // 1. SHEETS, PLATES, COILS & SHIMS
  {
    id: "sheets-plates-coils-shims",
    name: "Sheets, Plates, Coils & Shims",
    category: "Sheets, Plates, Coils & Shims",
    heroImage: sheetImg,
    galleryImages: [coilImg, heavyPlatesBarsImg],
    shortDescription: "Premium hot rolled and cold rolled stainless steel, duplex, nickel alloy, and titanium sheets, plates, coils, and precision shims manufactured for high-stress industrial applications.",
    overview: "Supreme Metal & Alloys supplies an extensive range of heavy engineering plates, pressure vessel plates, cold-rolled sheets, slit coils, and shim sheets. All flat products are processed with precision surface finishes including 2B, BA, No.1, No.4, and Mirror Finish, adhering strictly to ASTM and DIN dimensional tolerances.",
    materialsGrades: [
      "Stainless Steel 304 / 304L",
      "Stainless Steel 316 / 316L",
      "Stainless Steel 321 / 321H",
      "Stainless Steel 310S",
      "Stainless Steel 347 / 347H",
      "Stainless Steel 904L",
      "Duplex UNS S31803 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Inconel 600 / 625",
      "Hastelloy C276",
      "Monel 400",
      "Titanium Grade 2 / Grade 5",
      "Carbon Steel ASTM A516 Gr 60/70",
      "Alloy Steel ASTM A387"
    ],
    types: [
      "Hot Rolled (HR) Plates",
      "Cold Rolled (CR) Sheets",
      "Industrial Coils & Slit Strips",
      "Precision Shim Sheets & Foils",
      "Chequered / Diamond Plates",
      "Perforated & Expanded Sheets"
    ],
    sizeRange: "0.5mm to 200mm Thickness | Widths up to 2500mm | Lengths up to 12000mm",
    standards: [
      "ASTM A240",
      "ASTM A516",
      "ASTM A387",
      "EN 10088-2",
      "JIS G4305",
      "DIN 17175",
      "IS 2062"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Offshore & Marine / Shipbuilding",
      "Aerospace & Defense Engineering",
      "Heavy Industrial Engineering & Infrastructure"
    ],
    specTables: [
      {
        title: "Chemical Composition (% max unless range specified)",
        headers: ["Grade", "UNS Designation", "Carbon (C)", "Chromium (Cr)", "Nickel (Ni)", "Molybdenum (Mo)", "Key Elements"],
        rows: [
          ["SS 304 / 304L", "S30400 / S30403", "0.030 max", "17.5 - 19.5", "8.0 - 10.5", "-", "Mn 2.0 max, Si 0.75 max"],
          ["SS 316 / 316L", "S31600 / S31603", "0.030 max", "16.0 - 18.0", "10.0 - 14.0", "2.0 - 3.0", "Mn 2.0 max, Si 0.75 max"],
          ["Duplex 2205", "S31803 / S32205", "0.030 max", "22.0 - 23.0", "4.5 - 6.5", "3.0 - 3.5", "N 0.14 - 0.20"],
          ["Super Duplex 2507", "S32750", "0.030 max", "24.0 - 26.0", "6.0 - 8.0", "3.0 - 5.0", "N 0.24 - 0.32, Cu 0.5 max"],
          ["Inconel 625", "N06625", "0.10 max", "20.0 - 23.0", "58.0 min", "8.0 - 10.0", "Nb+Ta 3.15 - 4.15"]
        ]
      },
      {
        title: "Plate Weight & Thickness Tolerances (ASTM A480 / A240 Standard)",
        headers: ["Nominal Thickness", "Approx Weight (kg/m² - SS)", "Thickness Tolerance", "Standard Available Widths"],
        rows: [
          ["1.0 mm", "7.93 kg/m²", "± 0.08 mm", "1000 / 1220 / 1500 mm"],
          ["3.0 mm", "23.79 kg/m²", "± 0.15 mm", "1220 / 1500 / 2000 mm"],
          ["6.0 mm", "47.58 kg/m²", "± 0.25 mm", "1500 / 2000 / 2500 mm"],
          ["10.0 mm", "79.30 kg/m²", "± 0.35 mm", "1500 / 2000 / 2500 mm"],
          ["20.0 mm", "158.60 kg/m²", "± 0.55 mm", "1500 / 2000 / 2500 mm"],
          ["50.0 mm", "396.50 kg/m²", "± 0.90 mm", "1500 / 2000 / 2500 mm"]
        ]
      }
    ]
  },

  // 2. ROUND / HEX / SQUARE BARS & WIRE ROPE
  {
    id: "round-hex-square-bars-wire-rope",
    name: "Round / Hex / Square Bars & Wire Rope",
    category: "Round / Hex / Square Bars & Wire Rope",
    heroImage: heavyPlatesBarsImg,
    shortDescription: "Precision-machined ground round bars, bright hex bars, square bars, forged shafts, and stainless steel wire ropes engineered for heavy engineering and marine usage.",
    overview: "Supreme Metal & Alloys manufactures and supplies high-yield round bars, hex bars, square bars, flat bars, and stainless steel wire ropes. Available in peeled, turned, centerless ground, polished, and cold-drawn finishes with tight diameter tolerances (h8, h9, h11).",
    materialsGrades: [
      "Stainless Steel 304 / 304L",
      "Stainless Steel 316 / 316L",
      "Stainless Steel 321",
      "Stainless Steel 410 / 420 / 431",
      "17-4PH (UNS S17400)",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 600 / 625 / 718",
      "Monel 400 / K500",
      "Hastelloy C276",
      "Alloy Steel F11 / F22 / F91",
      "Carbon Steel EN8 / EN9 / EN24"
    ],
    types: [
      "Bright Round Bars",
      "Centerless Ground Bars",
      "Forged Heavy Shafts",
      "Hexagonal & Square Bars",
      "Stainless Steel Wire Ropes",
      "Threaded Rods & Tie Bars"
    ],
    sizeRange: "Diameter: 3mm to 500mm | Length: 1000mm to 6000mm (or cut to length)",
    standards: [
      "ASTM A276",
      "ASTM A479",
      "ASTM A564",
      "EN 10088-3",
      "DIN 1013",
      "DIN 1028"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Offshore & Marine / Shipbuilding",
      "Aerospace & Defense Engineering",
      "Power Generation & Nuclear Power",
      "Heavy Industrial Engineering & Infrastructure"
    ],
    specTables: [
      {
        title: "Bar Mechanical Properties & Tolerance Class (ASTM A276 / A479)",
        headers: ["Grade", "Tensile Strength (MPa)", "Yield Strength (MPa)", "Elongation (%)", "Hardness (HB max)", "Standard Tolerance"],
        rows: [
          ["SS 304L", "485 min", "170 min", "40%", "201 HB", "h9 / h11"],
          ["SS 316L", "485 min", "170 min", "40%", "217 HB", "h8 / h9"],
          ["17-4PH (H1150)", "930 min", "725 min", "16%", "293 HB", "h8"],
          ["Duplex 2205", "655 min", "450 min", "25%", "290 HB", "h9"],
          ["Inconel 625", "827 min", "414 min", "30%", "240 HB", "h8 / h9"]
        ]
      }
    ]
  },

  // 3. PIPES & TUBES
  {
    id: "pipes-tubes",
    name: "Pipes & Tubes",
    category: "Pipes & Tubes",
    heroImage: precisionPipesJpg,
    galleryImages: [precisionPipesPng],
    shortDescription: "Comprehensive selection of seamless and welded pipes, boiler tubes, heat exchanger tubes, and heavy wall line pipes in stainless, alloy, duplex, and nickel grades.",
    overview: "Supreme Metal & Alloys is a premier supplier of seamless and welded piping solutions. Our range covers Schedule 5S through XXS wall thicknesses, tested for hydrostatic, eddy current, ultrasonic, and 100% radiographic integrity for high-pressure oil, gas, and power plants.",
    materialsGrades: [
      "Stainless Steel 304 / 304L / 316 / 316L",
      "Stainless Steel 321 / 321H",
      "Stainless Steel 310S",
      "Duplex UNS S31803 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "ASTM A106 Gr B Carbon Steel",
      "ASTM A335 P5 / P9 / P11 / P22 / P91 Alloy Steel",
      "ASTM A333 Gr 6 Low Temp Steel",
      "Inconel 600 / 625",
      "Hastelloy C276",
      "Monel 400",
      "Titanium Gr 2 / Gr 5"
    ],
    types: [
      "Seamless Pipes & Tubes",
      "ERW / EFW / SAW Welded Pipes",
      "Heat Exchanger U-Tubes",
      "Boiler & Superheater Tubes",
      "Instrument & Hydraulic Tubing"
    ],
    sizeRange: "1/2\" NB to 36\" NB | Wall Thickness: Sch 5S to Sch XXS (0.5mm to 50mm)",
    standards: [
      "ASTM A312",
      "ASTM A358",
      "ASTM A213",
      "ASTM A269",
      "ASTM A335",
      "ASTM A106",
      "ASTM A333",
      "ASME B36.10M",
      "ASME B36.19M"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Fertilizers & Desalination Plants"
    ],
    specTables: [
      {
        title: "ASME B36.10M / B36.19M Standard Pipe Dimensions & Wall Thickness",
        headers: ["NPS (Inches)", "Outside Dia (mm)", "Sch 10S (mm)", "Sch 40 / STD (mm)", "Sch 80 / XS (mm)", "Sch 160 (mm)", "Sch XXS (mm)"],
        rows: [
          ["1/2\"", "21.34 mm", "2.11 mm", "2.77 mm", "3.73 mm", "4.78 mm", "7.47 mm"],
          ["1\"", "33.40 mm", "2.77 mm", "3.38 mm", "4.55 mm", "6.35 mm", "9.09 mm"],
          ["2\"", "60.33 mm", "2.77 mm", "3.91 mm", "5.54 mm", "8.74 mm", "11.07 mm"],
          ["4\"", "114.30 mm", "3.05 mm", "6.02 mm", "8.56 mm", "13.49 mm", "17.12 mm"],
          ["8\"", "219.08 mm", "3.76 mm", "8.18 mm", "12.70 mm", "22.23 mm", "22.23 mm"],
          ["12\"", "323.85 mm", "4.57 mm", "9.52 mm", "12.70 mm", "25.40 mm", "25.40 mm"]
        ]
      }
    ]
  },

  // 4. ANGLE / CHANNEL / FLAT BAR
  {
    id: "angle-channel-flat-bar",
    name: "Angle / Channel / Flat Bar",
    category: "Angle / Channel / Flat Bar",
    heroImage: angleChannelFlatImg,
    shortDescription: "Structural stainless steel and alloy equal/unequal angles, C-channels, I-beams, and precision cold-drawn flat bars for structural engineering.",
    overview: "Supreme Metal & Alloys stocks high-strength structural sections engineered for marine, industrial building, and offshore steelwork. Produced via hot rolling, laser fusion, and precision cold drawing.",
    materialsGrades: [
      "Stainless Steel 304 / 304L",
      "Stainless Steel 316 / 316L",
      "Duplex 2205",
      "Carbon Steel IS 2062 Gr A/B",
      "ASTM A36 Carbon Steel"
    ],
    types: [
      "Equal Angle Bars",
      "Unequal Angle Bars",
      "U & C Structural Channels",
      "Cold Drawn Flat Bars",
      "Hot Rolled Heavy Flat Bars"
    ],
    sizeRange: "Angles: 20x20x3mm to 200x200x20mm | Channels: 75x40mm to 300x90mm | Flat Bars: 12x3mm to 150x25mm",
    standards: [
      "ASTM A276",
      "ASTM A479",
      "EN 10058",
      "EN 10056",
      "DIN 1017",
      "DIN 1026"
    ],
    applications: [
      "Offshore & Marine / Shipbuilding",
      "Heavy Industrial Engineering & Infrastructure",
      "Power Generation & Nuclear Power"
    ],
    specTables: [
      {
        title: "Standard Angle Bar Dimensions & Weights",
        headers: ["Size (mm x mm)", "Thickness (mm)", "Weight per Meter (kg/m)", "Standard Lengths"],
        rows: [
          ["25 x 25 mm", "3.0 mm", "1.12 kg/m", "6.0 Meters"],
          ["40 x 40 mm", "5.0 mm", "2.97 kg/m", "6.0 Meters"],
          ["50 x 50 mm", "6.0 mm", "4.47 kg/m", "6.0 Meters"],
          ["75 x 75 mm", "8.0 mm", "8.99 kg/m", "6.0 Meters"],
          ["100 x 100 mm", "10.0 mm", "15.10 kg/m", "6.0 Meters"]
        ]
      }
    ]
  },

  // 5. FLANGES
  {
    id: "flanges",
    name: "Flanges",
    category: "Flanges",
    heroImage: forgedFlangesImg,
    shortDescription: "Forged industrial flanges including Weld Neck, Slip-On, Blind, Socket Weld, Threaded, and Spectacle Blind in pressure classes 150# through 2500#.",
    overview: "Supreme Metal & Alloys manufactures and supplies heavy-duty ANSI, ASME, BS, DIN, and EN forged flanges. All flanges are precision-machined with serrated or smooth gasket faces and supplied with 100% PMI and NDT clearance.",
    materialsGrades: [
      "Stainless Steel 304 / 304L / 316 / 316L",
      "Stainless Steel 321 / 310S / 347",
      "Duplex UNS S31803 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Carbon Steel ASTM A105",
      "Alloy Steel ASTM A182 F11 / F22 / F91",
      "Low Temp ASTM A350 LF2",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276"
    ],
    types: [
      "Weld Neck (WN)",
      "Slip-On (SO)",
      "Blind (BL)",
      "Socket Weld (SW)",
      "Threaded (TH)",
      "Lap Joint (LJ)",
      "Spectacle Blind & Ring Spacers"
    ],
    sizeRange: "1/2\" NB to 48\" NB | Pressure Classes: 150#, 300#, 600#, 900#, 1500#, 2500# / PN6 to PN100",
    standards: [
      "ANSI / ASME B16.5",
      "ASME B16.47 Series A & B",
      "DIN 2527 / 2573 / 2633",
      "BS 10 Table D / E / F / H",
      "EN 1092-1 Type 01 / 11 / 05"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Offshore & Marine / Shipbuilding",
      "Fertilizers & Desalination Plants"
    ],
    specTables: [
      {
        title: "ASME B16.5 Class 150 & Class 300 Flange Dimensions & Bolt Details",
        headers: ["NPS (Inches)", "Flange OD Class 150", "Bolt Circle Dia", "No. of Bolts", "Bolt Hole Dia", "Flange OD Class 300"],
        rows: [
          ["1/2\"", "89 mm", "60.3 mm", "4", "15.9 mm", "95 mm"],
          ["1\"", "108 mm", "79.4 mm", "4", "15.9 mm", "124 mm"],
          ["2\"", "152 mm", "120.7 mm", "4", "19.0 mm", "165 mm"],
          ["4\"", "229 mm", "190.5 mm", "8", "19.0 mm", "254 mm"],
          ["6\"", "279 mm", "241.3 mm", "8", "22.2 mm", "318 mm"],
          ["8\"", "343 mm", "298.5 mm", "8", "22.2 mm", "381 mm"],
          ["12\"", "483 mm", "431.8 mm", "12", "25.4 mm", "521 mm"]
        ]
      }
    ]
  },

  // 6. FASTENERS
  {
    id: "fasteners",
    name: "Fasteners",
    category: "Fasteners",
    heroImage: fastenersImg,
    shortDescription: "High-tensile industrial fasteners, stud bolts, heavy hex nuts, socket cap screws, washers, and threaded rods for extreme-temperature and pressure applications.",
    overview: "Supreme Metal & Alloys supplies engineered bolting solutions conforming to strict ASTM fastener standards. Our inventory covers high-tensile studs, coated bolts (Xylan/PTFE/Zinc), and custom machined fasteners.",
    materialsGrades: [
      "ASTM A193 B7 / B7M / B8 / B8M / B16",
      "ASTM A194 2H / 2HM / 8 / 8M / 7",
      "Stainless Steel 304 / 316 / 321 / 310S",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 625 / 718",
      "Monel 400 / K500",
      "Hastelloy C276",
      "Titanium Grade 2 / 5"
    ],
    types: [
      "Continuous Thread Stud Bolts",
      "Heavy Hex Head Bolts",
      "Heavy Hex Nuts",
      "Plain & Spring Washers",
      "Socket Head Cap Screws",
      "Threaded Rods & U-Bolts"
    ],
    sizeRange: "Metric: M6 to M100 | Imperial: 1/4\" to 4\" Diameter | Lengths: Up to 3000mm",
    standards: [
      "ASTM A193",
      "ASTM A194",
      "ASTM A320",
      "DIN 931",
      "DIN 933",
      "DIN 934",
      "DIN 125",
      "ASME B18.2.1",
      "ASME B18.2.2"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Offshore & Marine / Shipbuilding",
      "Aerospace & Defense Engineering"
    ],
    specTables: [
      {
        title: "ASTM A193 / A194 Bolting Temperature & Yield Specifications",
        headers: ["Grade (Stud / Nut)", "Material Description", "Min Tensile Strength", "Min Yield Strength", "Service Temp Range"],
        rows: [
          ["A193 B7 / A194 2H", "Chromium-Molybdenum Alloy Steel", "860 MPa", "725 MPa", "-29°C to +425°C"],
          ["A193 B8 / A194 8", "AISI 304 Stainless Steel (Class 1)", "515 MPa", "205 MPa", "-196°C to +538°C"],
          ["A193 B8M / A194 8M", "AISI 316 Stainless Steel (Class 2)", "760 MPa", "655 MPa", "-196°C to +538°C"],
          ["A193 B16 / A194 4/7", "Cr-Mo-V High Temp Steel", "860 MPa", "725 MPa", "-29°C to +593°C"],
          ["A320 L7 / A194 7L", "Alloy Steel (Low Temp Impact)", "860 MPa", "725 MPa", "-101°C to +343°C"]
        ]
      }
    ]
  },

  // 7. BUTT WELD & FORGED FITTINGS
  {
    id: "butt-weld-forged-fittings",
    name: "Butt Weld & Forged Fittings",
    category: "Butt Weld & Forged Fittings",
    heroImage: buttWeldFitImg,
    galleryImages: [forgedFittingPng, forgedFittingsAsset],
    shortDescription: "Seamless and welded butt weld fittings, plus 2000# to 9000# socket weld and threaded forged pipe fittings for critical pressure networks.",
    overview: "Supreme Metal & Alloys delivers high-integrity pipe fittings manufactured via hot forming, cold hydraulic pressing, and precision forging. Every fitting is bevelled or threaded in accordance with ASME standards.",
    materialsGrades: [
      "Stainless Steel 304 / 304L / 316 / 316L / 321 / 347 / 904L",
      "Duplex UNS S31803 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Carbon Steel ASTM A234 WPB / A105",
      "Alloy Steel ASTM A234 WP5 / WP9 / WP11 / WP22 / WP91",
      "Low Temp ASTM A420 WPL6 / LF2",
      "Inconel 625",
      "Hastelloy C276",
      "Monel 400"
    ],
    types: [
      "45° & 90° Long/Short Radius Elbows",
      "Equal & Reducing Tees",
      "Concentric & Eccentric Reducers",
      "Pipe Caps & Stub Ends (Lap Joint)",
      "Forged Socketweld Fittings (Elbows, Tees, Couplings)",
      "Forged Threaded NPT / BSPP Fittings (Unions, Nipples, Plugs)"
    ],
    sizeRange: "Butt Weld: 1/2\" to 36\" NB (Sch 5S to XXS) | Forged: 1/8\" to 4\" NB (2000#, 3000#, 6000#, 9000#)",
    standards: [
      "ASME B16.9",
      "ASME B16.11",
      "MSS SP-75",
      "MSS SP-83",
      "DIN 2605",
      "DIN 2615",
      "BS 1640"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Fertilizers & Desalination Plants"
    ],
    specTables: [
      {
        title: "ASME B16.9 Butt Weld Elbow & Tee Dimensions",
        headers: ["NPS (Inches)", "Outside Dia at Bevel", "90° LR Elbow C-to-E", "90° SR Elbow C-to-E", "Equal Tee C-to-E"],
        rows: [
          ["1/2\"", "21.3 mm", "38 mm", "25 mm", "25 mm"],
          ["1\"", "33.4 mm", "38 mm", "25 mm", "38 mm"],
          ["2\"", "60.3 mm", "76 mm", "51 mm", "64 mm"],
          ["4\"", "114.3 mm", "152 mm", "102 mm", "105 mm"],
          ["6\"", "168.3 mm", "229 mm", "152 mm", "143 mm"],
          ["8\"", "219.1 mm", "305 mm", "203 mm", "178 mm"]
        ]
      }
    ]
  },

  // 8. DAIRY & SANITARY TUBE FITTINGS
  {
    id: "dairy-sanitary-tube-fittings",
    name: "Dairy & Sanitary Tube Fittings",
    category: "Dairy & Sanitary Tube Fittings",
    heroImage: dairySanitaryImg,
    shortDescription: "High-purity stainless steel sanitary tubing, bends, tees, reducers, unions, and valves designed specifically for dairy, food, beverage, and pharmaceutical processing.",
    overview: "Supreme Metal & Alloys manufactures ultra-hygienic stainless steel sanitary fittings with internal surface roughness Ra < 0.4 µm (electro-polished) to ensure zero bacterial retention.",
    materialsGrades: [
      "Stainless Steel AISI 304",
      "Stainless Steel AISI 304L",
      "Stainless Steel AISI 316",
      "Stainless Steel AISI 316L"
    ],
    types: [
      "Sanitary 45° & 90° Bends",
      "Sanitary Equal & Reducing Tees",
      "Concentric & Eccentric Reducers",
      "SMS / DIN / IDF Union Assemblies",
      "Sanitary Butterfly Valves & Sight Glasses"
    ],
    sizeRange: "1/2\" OD to 4\" OD (12.7mm to 101.6mm Outside Diameter)",
    standards: [
      "DIN 11850 / DIN 11851",
      "SMS 1145",
      "IDF / ISO 2037",
      "ASME BPE",
      "3-A Sanitary Standards"
    ],
    applications: [
      "Pharmaceuticals & Food Processing (Dairy / Sanitary)",
      "Petrochemicals & Chemical Processing"
    ],
    specTables: [
      {
        title: "DIN 11850 / SMS 1145 Sanitary Tube Outer Diameters & Wall Thicknesses",
        headers: ["Standard Size", "Outside Diameter", "Wall Thickness", "Internal Roughness (Ra)", "Connection Standard"],
        rows: [
          ["DN 15", "19.0 mm", "1.5 mm", "< 0.4 µm (Electro-polished)", "DIN 11851 / SMS"],
          ["DN 25 (1\")", "25.4 mm", "1.5 mm", "< 0.4 µm (Electro-polished)", "DIN 11851 / SMS"],
          ["DN 40 (1.5\")", "38.1 mm", "1.5 mm", "< 0.4 µm (Electro-polished)", "DIN 11851 / SMS"],
          ["DN 50 (2\")", "50.8 mm", "1.5 mm", "< 0.4 µm (Electro-polished)", "DIN 11851 / SMS"],
          ["DN 80 (3\")", "76.2 mm", "2.0 mm", "< 0.4 µm (Electro-polished)", "DIN 11851 / SMS"],
          ["DN 100 (4\")", "101.6 mm", "2.0 mm", "< 0.4 µm (Electro-polished)", "DIN 11851 / SMS"]
        ]
      }
    ]
  },

  // 9. T.C. (TRI-CLOVER) FITTINGS
  {
    id: "tc-tri-clover-fittings",
    name: "T.C. (Tri-Clover) Fittings",
    category: "T.C. (Tri-Clover) Fittings",
    heroImage: tcFittingsImg,
    shortDescription: "Precision electro-polished Tri-Clamp TC ferrules, heavy-duty quick-release clamps, end caps, and food-grade silicone/EPDM/PTFE gaskets.",
    overview: "Supreme Metal & Alloys supplies ASME BPE and 3-A certified Tri-Clover fittings for leak-proof, quick-disassembly sanitary piping networks in sterile environments.",
    materialsGrades: [
      "Stainless Steel AISI 316L (Primary)",
      "Stainless Steel AISI 304L",
      "Gaskets: Silicone, EPDM, PTFE, Viton"
    ],
    types: [
      "Short & Long Weld Ferrules",
      "Heavy Duty Single Pin & Double Pin Clamps",
      "Sanitary End Caps / Blinds",
      "TC Hose Adapters & Threaded Adapters",
      "Tri-Clamp Gaskets (Flanged & Unflanged)"
    ],
    sizeRange: "1/2\" OD to 6\" OD (12.7mm to 152.4mm Outer Diameter)",
    standards: [
      "ASME BPE",
      "3-A Sanitary Standards",
      "ISO 2852",
      "BS 4825 Part 3",
      "DIN 32676"
    ],
    applications: [
      "Pharmaceuticals & Food Processing (Dairy / Sanitary)",
      "Petrochemicals & Chemical Processing"
    ],
    specTables: [
      {
        title: "ASME BPE Tri-Clamp Ferrule & Flange Dimensions",
        headers: ["Tube OD (Inches)", "Ferrule Flange Dia", "Ferrule Length Long", "Ferrule Length Short", "Matching Clamp Size"],
        rows: [
          ["1/2\" / 3/4\"", "25.4 mm", "28.6 mm", "12.7 mm", "1/2\" - 3/4\" Mini Clamp"],
          ["1\"", "50.5 mm", "28.6 mm", "12.7 mm", "1\" / 1.5\" Heavy Clamp"],
          ["1.5\"", "50.5 mm", "28.6 mm", "12.7 mm", "1\" / 1.5\" Heavy Clamp"],
          ["2\"", "64.0 mm", "28.6 mm", "12.7 mm", "2\" Heavy Clamp"],
          ["2.5\"", "77.5 mm", "28.6 mm", "12.7 mm", "2.5\" Heavy Clamp"],
          ["3\"", "91.0 mm", "28.6 mm", "12.7 mm", "3\" Heavy Clamp"],
          ["4\"", "119.0 mm", "28.6 mm", "15.8 mm", "4\" Heavy Clamp"]
        ]
      }
    ]
  },

  // 10. FERRULE FITTINGS
  {
    id: "ferrule-fittings",
    name: "Ferrule Fittings",
    category: "Ferrule Fittings",
    heroImage: ferruleFittingsImg,
    shortDescription: "High-precision single and double ferrule compression instrumentation tube fittings, male/female studs, unions, and elbows for vibration-resistant sealing.",
    overview: "Supreme Metal & Alloys manufactures double ferrule compression tube fittings engineered to withstand high working pressures, impulse loads, and thermal shock. Inter-changeable and compatible with major international instrumentation brands.",
    materialsGrades: [
      "Stainless Steel 316 / 316L (Standard)",
      "Stainless Steel 316 Ti",
      "Monel 400",
      "Inconel 625",
      "Hastelloy C276",
      "Titanium Grade 2",
      "Brass / Bronze"
    ],
    types: [
      "Male / Female Connectors",
      "Union Elbows & Equal Tees",
      "Bulkhead Connectors",
      "Male / Female Branch Tees",
      "Double Ferrule Sets & Nuts",
      "Instrumentation Needle & Ball Valves"
    ],
    sizeRange: "Fractional: 1/16\" to 2\" OD | Metric: 2mm to 38mm OD | Pressure Ratings: Up to 10,000 PSI (689 bar)",
    standards: [
      "ASTM A276",
      "ASTM A479",
      "ASME B31.3 Instrumentation Code",
      "NACE MR0175 / ISO 15156 Compliant"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Aerospace & Defense Engineering"
    ],
    specTables: [
      {
        title: "Instrumentation Tube Fitting Pressure Ratings & Dimensions",
        headers: ["Tube OD", "Male Thread NPT", "Working Pressure (SS316)", "Hex Nut Size", "Overall Length"],
        rows: [
          ["1/4\" (6.35mm)", "1/4\" NPT", "6,000 PSI", "9/16\"", "37.8 mm"],
          ["3/8\" (9.52mm)", "3/8\" NPT", "5,300 PSI", "11/16\"", "39.9 mm"],
          ["1/2\" (12.7mm)", "1/2\" NPT", "4,700 PSI", "7/8\"", "49.0 mm"],
          ["3/4\" (19.05mm)", "3/4\" NPT", "4,000 PSI", "1-1/8\"", "50.5 mm"],
          ["1\" (25.40mm)", "1\" NPT", "4,000 PSI", "1-1/2\"", "62.2 mm"]
        ]
      }
    ]
  },

  // =========================================================================
  // RESEARCHED ADDENDUM PRODUCTS (Plausible Industry Drafts - Pending Final Client Verification)
  // =========================================================================

  // 11. STAINLESS STEEL CIRCLE (BLANKS / DISCS)
  {
    id: "circle-blanks-discs",
    name: "Stainless Steel Circle (Blanks / Discs)",
    category: "Sheets, Plates, Coils & Shims",
    heroImage: null,
    isResearchedDraft: true,
    shortDescription: "Precision-cut rolled and hot/cold forged stainless steel circles, blanks, and discs for flange stock, tank ends, pressure vessel heads, and heavy machining.",
    overview: "Supreme Metal & Alloys supplies stainless steel circles available in both rolled plate cuts (ASTM A240) and heavy forged discs (ASTM A182 / A276). Offered in thin gauge for deep drawing up to thick forged blank diameters for industrial flange and ring manufacturing.",
    materialsGrades: [
      "SS 201",
      "SS 202",
      "SS 304 / 304L",
      "SS 316 / 316L",
      "SS 310 / 310S",
      "SS 317L",
      "SS 321"
    ],
    types: [
      "Rolled Sheet/Plate Cut Circles",
      "Forged Heavy Discs",
      "Deep Drawing Quality (DDQ) Circles",
      "Tank Head Blanks"
    ],
    sizeRange: "Diameter: 75mm (3\") up to 950mm+ (38\") | Thickness: 1mm to 100mm (Rolled) & Thicker for Forged Discs",
    standards: [
      "ASTM A240 (Rolled Circles)",
      "ASTM A182 (Forged Discs)",
      "ASTM A276"
    ],
    applications: [
      "Flange & Ring Manufacturing Blanks",
      "Pressure Vessel Heads & Tank Ends",
      "Pharmaceuticals & Food Processing (Dairy / Sanitary)",
      "Heavy Industrial Engineering & Infrastructure"
    ],
    dataGaps: ["Client confirmation required for exact stocked thickness/diameter stock matrix"],
    specTables: [
      {
        title: "Stainless Steel Circle Manufacturing & Dimensional Specifications",
        headers: ["Circle Type", "Production Process", "Governing Standard", "Available Diameter Range", "Typical Thickness Range"],
        rows: [
          ["Rolled Plate Circle", "Laser / Plasma / Shear Cut from Sheet", "ASTM A240", "75 mm to 950 mm", "1.0 mm to 50.0 mm"],
          ["Forged Heavy Disc", "Hot / Cold Forged & Rough Machined", "ASTM A182 / A276", "100 mm to 1500 mm+", "25.0 mm to 250.0 mm"],
          ["Deep Drawing Circle", "Cold Rolled & Annealed DDQ Sheet", "ASTM A240", "100 mm to 600 mm", "0.5 mm to 3.0 mm"]
        ]
      }
    ]
  },

  // 12. PATTA PATTI (STAINLESS STEEL STRIP)
  {
    id: "patta-patti-ss-strip",
    name: "Patta Patti (Stainless Steel Strip)",
    category: "Sheets, Plates, Coils & Shims",
    heroImage: null,
    isResearchedDraft: true,
    shortDescription: "Hot rolled, cold rolled, and precision annealed stainless steel slit strips (Patta Patti) in customized widths and thickness gauges for fabrication and trim.",
    overview: "Supreme Metal & Alloys offers stainless steel Patta Patti (narrow strips) available in unpolished, 2B, BA, rough turned, and annealed surface conditions. Used widely across general engineering, shipbuilding, and architectural trim.",
    materialsGrades: [
      "SS 201",
      "SS 202",
      "SS 304 / 304L",
      "SS 316 / 316L",
      "Duplex UNS S31803 (2205)",
      "Super Duplex UNS S32750 (2507)"
    ],
    types: [
      "Hot Rolled Strips",
      "Cold Rolled Slit Strips",
      "Annealed & Pickled Strips",
      "Rough Turned / Forged Strips"
    ],
    sizeRange: "Width: 10mm to 2000mm | Thickness: 1mm to 100mm (Thin gauges standard in practice)",
    standards: [
      "ASTM A240",
      "ASME SA240"
    ],
    applications: [
      "Heavy Industrial Engineering & Infrastructure",
      "Offshore & Marine / Shipbuilding",
      "Pharmaceuticals & Food Processing (Dairy / Sanitary)"
    ],
    dataGaps: ["Client confirmation required for exact width slitting capabilities and stock gauges"],
    specTables: [
      {
        title: "Stainless Steel Patta Patti Strip Specifications",
        headers: ["Product Type", "Manufacturing Method", "Standard Width Range", "Thickness Range", "Surface Finish Options"],
        rows: [
          ["Cold Rolled Strip", "Precision Coil Slitting", "10 mm to 600 mm", "0.5 mm to 3.0 mm", "2B / BA / No.4 Finish"],
          ["Hot Rolled Patta", "Hot Mill Rolling & Pickling", "20 mm to 1000 mm", "3.0 mm to 25.0 mm", "No.1 HR Annealed & Pickled"],
          ["Heavy Strip Stock", "Plate Shearing / Flat Mill", "50 mm to 2000 mm", "25.0 mm to 100.0 mm", "Rough Turned / As Rolled"]
        ]
      }
    ]
  },

  // 13. WIRE MESH
  {
    id: "wire-mesh",
    name: "Wire Mesh & Industrial Filtration Screens",
    category: "Wire Mesh",
    heroImage: null,
    isResearchedDraft: true,
    shortDescription: "High-precision stainless steel woven, welded, and crimped wire mesh screens engineered for industrial filtration, sieving, and architectural screening.",
    overview: "Supreme Metal & Alloys supplies woven stainless steel wire mesh in Plain, Twill, and Dutch weaves, alongside heavy-duty welded and crimped mesh panels. Available from coarse mesh to ultra-fine micron filtration screens.",
    materialsGrades: [
      "SS 201",
      "SS 202",
      "SS 304 / 304L",
      "SS 316 / 316L"
    ],
    types: [
      "Plain Weave Mesh",
      "Twill Weave Mesh",
      "Dutch Weave Filter Mesh",
      "Welded Wire Mesh",
      "Crimped Mesh Screens"
    ],
    sizeRange: "Wire Dia: 0.025mm to 4.0mm | Mesh Count: 3 to 400 Mesh per Inch | Roll Width: 1m to 1.6m Standard",
    standards: [
      "Custom Stated Mesh-Count & Wire-Diameter Specs"
    ],
    applications: [
      "Petrochemicals & Chemical Processing",
      "Pharmaceuticals & Food Processing (Dairy / Sanitary)",
      "Heavy Industrial Engineering & Infrastructure"
    ],
    dataGaps: ["Client confirmation required for exact stocked mesh counts and roll widths"],
    specTables: [
      {
        title: "Industrial Stainless Steel Wire Mesh Weave Specifications",
        headers: ["Weave Type", "Mesh Count Range", "Wire Diameter Range", "Aperture / Opening Size", "Primary Filtration Use"],
        rows: [
          ["Plain Weave", "2 Mesh to 200 Mesh", "0.10 mm to 2.0 mm", "0.075 mm to 11.0 mm", "General Industrial Liquid & Solid Sieving"],
          ["Twill Weave", "150 Mesh to 400 Mesh", "0.03 mm to 0.15 mm", "0.038 mm to 0.10 mm", "Fine Chemical & Gas Micro-Filtration"],
          ["Dutch Weave", "24/110 to 325/2300 Mesh", "0.025 mm to 0.50 mm", "Micron Rating (2µm to 200µm)", "High-Pressure Hydraulic & Polymer Filtration"],
          ["Welded Mesh", "1/2\" x 1/2\" to 2\" x 2\"", "1.0 mm to 4.0 mm", "12.7 mm to 50.8 mm", "Heavy Security Screens & Basket Filters"]
        ]
      }
    ]
  },

  // 14. PERFORATED SHEETS
  {
    id: "perforated-sheets",
    name: "Perforated Sheets",
    category: "Sheets, Plates, Coils & Shims",
    heroImage: null,
    isResearchedDraft: true,
    shortDescription: "Custom perforated stainless steel sheets available with round, square, slotted, and hexagonal holes in straight or staggered arrangements.",
    overview: "Supreme Metal & Alloys supplies precision punched perforated sheets manufactured from high-grade stainless steel plates conforming to ASTM A240. Ideal for acoustic damping, ventilation, food processing, and architectural facades.",
    materialsGrades: [
      "SS 201",
      "SS 304 / 304L",
      "SS 316 / 316L",
      "SS 430"
    ],
    types: [
      "Round Hole Perforated",
      "Square Hole Perforated",
      "Slotted Hole Perforated",
      "Hexagonal / Honeycomb Perforated"
    ],
    sizeRange: "Thickness: 0.4mm to 8.0mm | Hole Dia: 1mm to 30mm | Standard Sheet: 1000x2000mm, 1220x2440mm (4ft x 8ft)",
    standards: [
      "ASTM A240 (Parent Sheet)",
      "Punched to Customer Drawing / Spec"
    ],
    applications: [
      "Pharmaceuticals & Food Processing (Dairy / Sanitary)",
      "Petrochemicals & Chemical Processing",
      "Heavy Industrial Engineering & Infrastructure"
    ],
    dataGaps: ["Client confirmation required for custom punching patterns and maximum panel dimensions"],
    specTables: [
      {
        title: "Standard Perforated Sheet Patterns & Specifications",
        headers: ["Hole Pattern", "Hole Diameter Range", "Pitch / Center Distance", "Sheet Thickness Range", "Open Area Percentage"],
        rows: [
          ["Round Staggered (60°)", "1.0 mm to 25.0 mm", "2.0 mm to 35.0 mm", "0.5 mm to 6.0 mm", "20% to 65% Open Area"],
          ["Square Straight", "3.0 mm to 30.0 mm", "5.0 mm to 40.0 mm", "0.8 mm to 5.0 mm", "30% to 55% Open Area"],
          ["Slotted Staggered", "2.0 x 20 mm to 10 x 50 mm", "5.0 mm to 20.0 mm", "1.0 mm to 4.0 mm", "25% to 50% Open Area"],
          ["Hexagonal Honeycomb", "5.0 mm to 20.0 mm", "7.0 mm to 25.0 mm", "0.8 mm to 3.0 mm", "50% to 75% Open Area"]
        ]
      }
    ]
  },

  // 15. HOSE PIPE (SS FLEXIBLE / BRAIDED HOSE)
  {
    id: "hose-pipe-flexible-braided-hose",
    name: "Hose Pipe (SS Flexible / Braided Hose)",
    category: "Pipes & Tubes",
    heroImage: null,
    isResearchedDraft: true,
    shortDescription: "Flexible corrugated stainless steel hoses with single or double layer SS 304/316 wire braiding for thermal expansion and vibration isolation.",
    overview: "Supreme Metal & Alloys supplies annular and helical corrugated stainless steel flexible hoses designed to absorb vibration, thermal shock, and piping misalignment in high-temperature or cryogenic chemical networks.",
    materialsGrades: [
      "Core Tube: SS 321 / SS 316L / SS 304",
      "Braid: SS 304 (Single/Double) / SS 316 / SS 321"
    ],
    types: [
      "Single Braided Flexible Hose",
      "Double Braided High-Pressure Hose",
      "Unbraided Corrugated Hose Assemblies",
      "Flanged / Threaded / Welded End Hose Assemblies"
    ],
    sizeRange: "DN6 (1/4\") up to DN300–DN600 (12\" to 24\") | Temp Range: Cryogenic (-200°C) up to +550°C",
    standards: [
      "ISO 10380",
      "BS 6501 Part 1",
      "ASME B16.5 (Flanged Ends)",
      "NPT / BSPP (Threaded Ends)"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Offshore & Marine / Shipbuilding"
    ],
    dataGaps: ["Client confirmation required for exact assembly pressure ratings and custom end fitting stock"],
    specTables: [
      {
        title: "Stainless Steel Flexible Hose Technical Ratings (ISO 10380)",
        headers: ["Nominal Bore (NB)", "Corrugation Profile", "Braid Construction", "Working Pressure Rating", "Min Bend Radius (Static)"],
        rows: [
          ["DN 6 (1/4\")", "Annular Corrugated", "Single SS304 Braid", "100 bar (1450 PSI)", "25 mm"],
          ["DN 15 (1/2\")", "Annular Corrugated", "Single SS304 Braid", "64 bar (928 PSI)", "38 mm"],
          ["DN 25 (1\")", "Annular Corrugated", "Single SS304 Braid", "40 bar (580 PSI)", "90 mm"],
          ["DN 50 (2\")", "Annular Corrugated", "Double SS304 Braid", "32 bar (464 PSI)", "160 mm"],
          ["DN 100 (4\")", "Annular Corrugated", "Double SS304 Braid", "20 bar (290 PSI)", "350 mm"]
        ]
      }
    ]
  },

  // 16. RING (FORGED FLANGE RING / BACKING RING)
  {
    id: "forged-flange-ring-backing-ring",
    name: "Ring (Forged Flange Ring / Backing Ring)",
    category: "Flanges",
    heroImage: null,
    isResearchedDraft: true,
    shortDescription: "Precision hot-forged flange rings, backing rings for lap joint connections, spacer rings, and custom machined sealing rings in stainless steel and superalloys.",
    overview: "Supreme Metal & Alloys offers heavy-duty forged rings manufactured via seamless ring rolling and press forging. Conforming to ASTM A182 and A105, these rings serve as raw stock for flange machining, lap joint backing, and pressure vessel seals.",
    materialsGrades: [
      "Stainless Steel 304/304L/316/316L/321/347/310 (ASTM A182)",
      "Carbon Steel ASTM A105",
      "Alloy Steel ASTM A182 F5 / F9 / F11 / F22 / F91",
      "Duplex 2205",
      "Super Duplex 2507"
    ],
    types: [
      "Forged Flange Blanks / Rings",
      "Lap Joint Backing Rings",
      "Spectacle Spacer & Shim Rings",
      "Custom Machined Sealing Rings"
    ],
    sizeRange: "1/2\" NB to 40\" NB (Outside Diameter up to 1500mm+) | Pressure Classes: 150# to 2500#",
    standards: [
      "ASTM A182",
      "ASTM A105",
      "ASME B16.5",
      "ASME B16.47 Series A & B"
    ],
    applications: [
      "Oil & Gas / Refineries",
      "Petrochemicals & Chemical Processing",
      "Power Generation & Nuclear Power",
      "Offshore & Marine / Shipbuilding"
    ],
    dataGaps: ["Client confirmation required for maximum forged ring OD and machining tolerances"],
    specTables: [
      {
        title: "Forged Ring Manufacturing & Pressure Standards",
        headers: ["Ring Classification", "Forging Standard", "Material Grade Options", "Matching Nominal Size", "Pressure Class Compatibility"],
        rows: [
          ["Forged Flange Ring Blank", "ASTM A182 / A105", "SS 304/316, A105, F11/F22", "1/2\" NB to 40\" NB", "150# to 2500# / PN10 to PN400"],
          ["Lap Joint Backing Ring", "ASTM A105 / A182", "Carbon Steel, SS 304/316", "1/2\" NB to 24\" NB", "150# / 300# Standard"],
          ["Spacer & Shim Ring", "ASTM A182", "Duplex 2205, SS 316L", "1\" NB to 36\" NB", "150# to 1500#"]
        ]
      }
    ]
  }
];

// Perform Dev-mode verification of images & distinct paths per Image Mapping Protocol
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  const usedHeroImages = new Set();
  productsData.forEach((product) => {
    if (!product.heroImage) {
      MISSING_IMAGE_MAPPING.push(product.id);
    } else {
      if (usedHeroImages.has(product.heroImage)) {
        console.warn(`[Image Protocol Warning] Image reused across products: ${product.heroImage} in ${product.id}`);
      }
      usedHeroImages.add(product.heroImage);
    }
  });

  if (MISSING_IMAGE_MAPPING.length > 0) {
    console.log("MISSING_IMAGE_MAPPING list (requires client asset resolution):", MISSING_IMAGE_MAPPING);
  }
}

export default productsData;
