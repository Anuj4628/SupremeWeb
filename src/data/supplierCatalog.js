// Supplier Division Catalog Facade
// Strictly encapsulates all 9 Supplier Product Families with ZERO cross-contamination

import {
  SUPPLIER_PIPES_MATERIALS,
  SUPPLIER_PIPES_PRODUCTS,
  getPipesProductBySlug,
  getPipesProductsByMaterial,
  getRelatedPipesProducts
} from "./supplierPipesData";

import {
  SUPPLIER_SHEETS_MATERIALS,
  SUPPLIER_SHEETS_PRODUCTS,
  getSheetsProductBySlug,
  getSheetsProductsByMaterial,
  getRelatedSheetsProducts
} from "./supplierSheetsData";

import {
  SUPPLIER_RODS_MATERIALS,
  SUPPLIER_RODS_PRODUCTS,
  getRodsProductBySlug,
  getRodsProductsByMaterial,
  getRelatedRodsProducts
} from "./supplierRodsData";

import {
  SUPPLIER_WIRE_MATERIALS,
  SUPPLIER_WIRE_PRODUCTS,
  getWireProductBySlug,
  getWireProductsByMaterial,
  getRelatedWireProducts
} from "./supplierWireData";

import {
  SUPPLIER_CIRCLE_MATERIALS,
  SUPPLIER_CIRCLE_PRODUCTS,
  getCircleProductBySlug,
  getCircleProductsByMaterial,
  getRelatedCircleProducts
} from "./supplierCircleData";

import {
  SUPPLIER_FLAT_MATERIALS,
  SUPPLIER_FLAT_PRODUCTS,
  getFlatProductBySlug,
  getFlatProductsByMaterial,
  getRelatedFlatProducts
} from "./supplierFlatData";

import {
  SUPPLIER_PATAPATTI_MATERIALS,
  SUPPLIER_PATAPATTI_PRODUCTS,
  getPatapattiProductBySlug,
  getPatapattiProductsByMaterial,
  getRelatedPatapattiProducts
} from "./supplierPatapattiData";

import {
  SUPPLIER_COIL_MATERIALS,
  SUPPLIER_COIL_PRODUCTS,
  getCoilProductBySlug,
  getCoilProductsByMaterial,
  getRelatedCoilProducts
} from "./supplierCoilData";

import {
  SUPPLIER_RING_MATERIALS,
  SUPPLIER_RING_PRODUCTS,
  getRingProductBySlug,
  getRingProductsByMaterial,
  getRelatedRingProducts
} from "./supplierRingData";

// The Authorized Supplier Product Families (Strict Data Isolation)
export const SUPPLIER_FAMILIES = [
  {
    id: "pipes-tubes",
    slug: "pipes-tubes",
    name: "Pipes & Tubes",
    division: "SUPPLIER",
    iconName: "Pipette",
    shortDesc: "High-pressure seamless & welded pipes & tubes",
    fullDesc: "ASTM A312, A335, A106 seamless pipes, heat exchanger tubes, and line pipes up to 48\" NB.",
    materialCount: SUPPLIER_PIPES_MATERIALS.length,
    productCount: SUPPLIER_PIPES_PRODUCTS.length,
    heroImage: SUPPLIER_PIPES_PRODUCTS[0]?.image
  },
  {
    id: "sheets-plates",
    slug: "sheets-plates",
    name: "Sheets & Plates",
    division: "SUPPLIER",
    iconName: "FileText",
    shortDesc: "Heavy engineering plates & cold rolled sheets",
    fullDesc: "ASTM A240 HR/CR sheets, pressure vessel boiler plates, and high-yield alloy plates up to 200mm thick.",
    materialCount: SUPPLIER_SHEETS_MATERIALS.length,
    productCount: SUPPLIER_SHEETS_PRODUCTS.length,
    heroImage: SUPPLIER_SHEETS_PRODUCTS[0]?.image
  },
  {
    id: "rods-bars",
    slug: "rods-bars",
    name: "Rods & Bars",
    division: "SUPPLIER",
    iconName: "Disc",
    shortDesc: "Precision ground round, hex & square bars",
    fullDesc: "Centerless ground bright round bars, hex bars, and forged shafts conforming to ASTM A276 & A479.",
    materialCount: SUPPLIER_RODS_MATERIALS.length,
    productCount: SUPPLIER_RODS_PRODUCTS.length,
    heroImage: SUPPLIER_RODS_PRODUCTS[0]?.image
  },
  {
    id: "wires",
    slug: "wires",
    name: "Wires",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "High-tensile industrial, spring & welding wires",
    fullDesc: "Precision drawn stainless steel, nickel alloy, carbon steel, and titanium wires conforming to ASTM A313, A580, and AWS A5.9.",
    materialCount: SUPPLIER_WIRE_MATERIALS.length,
    productCount: SUPPLIER_WIRE_PRODUCTS.length,
    heroImage: SUPPLIER_WIRE_PRODUCTS[0]?.image
  },
  {
    id: "circle",
    slug: "circle",
    name: "Circle",
    division: "SUPPLIER",
    iconName: "Disc",
    shortDesc: "Rolled plate circles & forged heavy discs",
    fullDesc: "Precision CNC laser, waterjet, plasma cut circles and forged disc blanks conforming to ASTM A240, ASTM A182, and ASME SB348.",
    materialCount: SUPPLIER_CIRCLE_MATERIALS.length,
    productCount: SUPPLIER_CIRCLE_PRODUCTS.length,
    heroImage: SUPPLIER_CIRCLE_PRODUCTS[0]?.image
  },
  {
    id: "flat",
    slug: "flat",
    name: "Flat",
    division: "SUPPLIER",
    iconName: "FileText",
    shortDesc: "Precision cold drawn & hot rolled flat bars",
    fullDesc: "High-precision hot rolled annealed & pickled (HRAP) and centerless cold drawn flat bars conforming to ASTM A276, ASTM A479, and DIN 1017.",
    materialCount: SUPPLIER_FLAT_MATERIALS.length,
    productCount: SUPPLIER_FLAT_PRODUCTS.length,
    heroImage: SUPPLIER_FLAT_PRODUCTS[0]?.image
  },
  {
    id: "patapatti",
    slug: "patapatti",
    name: "Patapatti",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "Precision slit strips & narrow coiled strip stock",
    fullDesc: "Cold rolled and hot rolled precision slit strips (Patta Patti) with deburred or rounded edges conforming to ASTM A240 and EN 10088-2.",
    materialCount: SUPPLIER_PATAPATTI_MATERIALS.length,
    productCount: SUPPLIER_PATAPATTI_PRODUCTS.length,
    heroImage: SUPPLIER_PATAPATTI_PRODUCTS[0]?.image
  },
  {
    id: "coil",
    slug: "coil",
    name: "Coil",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "Hot rolled & cold rolled precision slit coils",
    fullDesc: "Prime mill hot rolled and cold rolled industrial coils in 2B, BA, No.4 hairline, and 8K mirror finishes conforming to ASTM A240 and ASME SA240.",
    materialCount: SUPPLIER_COIL_MATERIALS.length,
    productCount: SUPPLIER_COIL_PRODUCTS.length,
    heroImage: SUPPLIER_COIL_PRODUCTS[0]?.image
  },
  {
    id: "ring",
    slug: "ring",
    name: "Ring",
    division: "SUPPLIER",
    iconName: "Layers",
    shortDesc: "Seamless rolled rings & forged backing rings",
    fullDesc: "Seamless ring-rolled and hydraulic press-forged industrial rings conforming to ASTM A182, ASTM A105, and ASME B16.5.",
    materialCount: SUPPLIER_RING_MATERIALS.length,
    productCount: SUPPLIER_RING_PRODUCTS.length,
    heroImage: SUPPLIER_RING_PRODUCTS[0]?.image
  }
];

// Normalization helper ensuring standard catalog fields exist on every supplier product
const normalizeSupplierProduct = (prod) => {
  if (!prod) return null;
  return {
    ...prod,
    material: prod.material || prod.materialName || "",
    materialName: prod.materialName || prod.material || "",
    grade: prod.grade || (Array.isArray(prod.grades) && prod.grades.length > 0 ? prod.grades[0] : ""),
    standards: Array.isArray(prod.standards) ? prod.standards : [],
    division: prod.division || "SUPPLIER"
  };
};

// All Verified Supplier Products (Strictly isolated from Manufacturer division)
export const ALL_SUPPLIER_PRODUCTS = [
  ...SUPPLIER_PIPES_PRODUCTS,
  ...SUPPLIER_SHEETS_PRODUCTS,
  ...SUPPLIER_RODS_PRODUCTS,
  ...SUPPLIER_WIRE_PRODUCTS,
  ...SUPPLIER_CIRCLE_PRODUCTS,
  ...SUPPLIER_FLAT_PRODUCTS,
  ...SUPPLIER_PATAPATTI_PRODUCTS,
  ...SUPPLIER_COIL_PRODUCTS,
  ...SUPPLIER_RING_PRODUCTS
].map(normalizeSupplierProduct);

// Strictly get family record with alias normalization
export const getSupplierFamilyBySlug = (familySlug = "") => {
  const clean = String(familySlug).toLowerCase().trim();
  if (clean === "wire" || clean === "wires") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "wires") || null;
  }
  if (clean === "circle" || clean === "circles") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "circle") || null;
  }
  if (clean === "flat" || clean === "flats" || clean === "flat-bar" || clean === "flat-bars") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "flat") || null;
  }
  if (clean === "patapatti" || clean === "patta-patti" || clean === "patti") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "patapatti") || null;
  }
  if (clean === "coil" || clean === "coils" || clean === "quile" || clean === "quiles") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "coil") || null;
  }
  if (clean === "ring" || clean === "rings") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "ring") || null;
  }
  return (
    SUPPLIER_FAMILIES.find(
      (f) => f.slug === clean || f.id === clean
    ) || null
  );
};

// Strictly get products by family (GUARANTEED ZERO CROSS-CONTAMINATION)
export const getSupplierProductsByFamily = (familySlug = "") => {
  const clean = String(familySlug).toLowerCase().trim();
  if (clean === "pipes-tubes") return SUPPLIER_PIPES_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "sheets-plates") return SUPPLIER_SHEETS_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "rods-bars") return SUPPLIER_RODS_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "wires" || clean === "wire") return SUPPLIER_WIRE_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "circle" || clean === "circles") return SUPPLIER_CIRCLE_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "flat" || clean === "flats" || clean === "flat-bar") return SUPPLIER_FLAT_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "patapatti" || clean === "patta-patti") return SUPPLIER_PATAPATTI_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "coil" || clean === "coils" || clean === "quile") return SUPPLIER_COIL_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "ring" || clean === "rings") return SUPPLIER_RING_PRODUCTS.map(normalizeSupplierProduct);
  return [];
};

// Strictly get materials list by family (GUARANTEED ZERO CROSS-CONTAMINATION)
export const getSupplierMaterialsByFamily = (familySlug = "") => {
  const clean = String(familySlug).toLowerCase().trim();
  if (clean === "pipes-tubes") return SUPPLIER_PIPES_MATERIALS;
  if (clean === "sheets-plates") return SUPPLIER_SHEETS_MATERIALS;
  if (clean === "rods-bars") return SUPPLIER_RODS_MATERIALS;
  if (clean === "wires" || clean === "wire") return SUPPLIER_WIRE_MATERIALS;
  if (clean === "circle" || clean === "circles") return SUPPLIER_CIRCLE_MATERIALS;
  if (clean === "flat" || clean === "flats" || clean === "flat-bar") return SUPPLIER_FLAT_MATERIALS;
  if (clean === "patapatti" || clean === "patta-patti") return SUPPLIER_PATAPATTI_MATERIALS;
  if (clean === "coil" || clean === "coils" || clean === "quile") return SUPPLIER_COIL_MATERIALS;
  if (clean === "ring" || clean === "rings") return SUPPLIER_RING_MATERIALS;
  return [];
};

// Strictly get a product by its slug (checks each isolated family parser)
export const getSupplierProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  const raw = (
    getPipesProductBySlug(clean) ||
    getSheetsProductBySlug(clean) ||
    getRodsProductBySlug(clean) ||
    getWireProductBySlug(clean) ||
    getCircleProductBySlug(clean) ||
    getFlatProductBySlug(clean) ||
    getPatapattiProductBySlug(clean) ||
    getCoilProductBySlug(clean) ||
    getRingProductBySlug(clean) ||
    null
  );
  return normalizeSupplierProduct(raw);
};

// Strictly get related products within the SAME family
export const getSupplierRelatedProducts = (familySlug = "", currentSlug = "") => {
  const cleanFamily = String(familySlug).toLowerCase().trim();
  let list = [];
  if (cleanFamily === "pipes-tubes") list = getRelatedPipesProducts(currentSlug);
  else if (cleanFamily === "sheets-plates") list = getRelatedSheetsProducts(currentSlug);
  else if (cleanFamily === "rods-bars") list = getRelatedRodsProducts(currentSlug);
  else if (cleanFamily === "wires" || cleanFamily === "wire") list = getRelatedWireProducts(currentSlug);
  else if (cleanFamily === "circle" || cleanFamily === "circles") list = getRelatedCircleProducts(currentSlug);
  else if (cleanFamily === "flat" || cleanFamily === "flats" || cleanFamily === "flat-bar") list = getRelatedFlatProducts(currentSlug);
  else if (cleanFamily === "patapatti" || cleanFamily === "patta-patti") list = getRelatedPatapattiProducts(currentSlug);
  else if (cleanFamily === "coil" || cleanFamily === "coils" || cleanFamily === "quile") list = getRelatedCoilProducts(currentSlug);
  else if (cleanFamily === "ring" || cleanFamily === "rings") list = getRelatedRingProducts(currentSlug);
  else {
    // Fallback: look up product to find its family
    const prod = getSupplierProductBySlug(currentSlug);
    if (prod) {
      return getSupplierRelatedProducts(prod.categorySlug, currentSlug);
    }
  }
  return list.map(normalizeSupplierProduct);
};

export {
  SUPPLIER_PIPES_MATERIALS,
  SUPPLIER_PIPES_PRODUCTS,
  SUPPLIER_SHEETS_MATERIALS,
  SUPPLIER_SHEETS_PRODUCTS,
  SUPPLIER_RODS_MATERIALS,
  SUPPLIER_RODS_PRODUCTS,
  SUPPLIER_WIRE_MATERIALS,
  SUPPLIER_WIRE_PRODUCTS,
  SUPPLIER_CIRCLE_MATERIALS,
  SUPPLIER_CIRCLE_PRODUCTS,
  SUPPLIER_FLAT_MATERIALS,
  SUPPLIER_FLAT_PRODUCTS,
  SUPPLIER_PATAPATTI_MATERIALS,
  SUPPLIER_PATAPATTI_PRODUCTS,
  SUPPLIER_COIL_MATERIALS,
  SUPPLIER_COIL_PRODUCTS,
  SUPPLIER_RING_MATERIALS,
  SUPPLIER_RING_PRODUCTS
};
