// Supplier Division Catalog Facade
// Strictly encapsulates the 4 Supplier Product Families with ZERO cross-contamination

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
  ...SUPPLIER_WIRE_PRODUCTS
].map(normalizeSupplierProduct);

// Strictly get family record
export const getSupplierFamilyBySlug = (familySlug = "") => {
  const clean = String(familySlug).toLowerCase().trim();
  if (clean === "wire" || clean === "wires") {
    return SUPPLIER_FAMILIES.find((f) => f.slug === "wires") || null;
  }
  return SUPPLIER_FAMILIES.find(
    (f) => f.slug === clean || f.id === clean
  ) || null;
};

// Strictly get products by family (GUARANTEED ZERO CROSS-CONTAMINATION)
export const getSupplierProductsByFamily = (familySlug = "") => {
  const clean = String(familySlug).toLowerCase().trim();
  if (clean === "pipes-tubes") return SUPPLIER_PIPES_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "sheets-plates") return SUPPLIER_SHEETS_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "rods-bars") return SUPPLIER_RODS_PRODUCTS.map(normalizeSupplierProduct);
  if (clean === "wires" || clean === "wire") return SUPPLIER_WIRE_PRODUCTS.map(normalizeSupplierProduct);
  return [];
};

// Strictly get materials list by family (GUARANTEED ZERO CROSS-CONTAMINATION)
export const getSupplierMaterialsByFamily = (familySlug = "") => {
  const clean = String(familySlug).toLowerCase().trim();
  if (clean === "pipes-tubes") return SUPPLIER_PIPES_MATERIALS;
  if (clean === "sheets-plates") return SUPPLIER_SHEETS_MATERIALS;
  if (clean === "rods-bars") return SUPPLIER_RODS_MATERIALS;
  if (clean === "wires" || clean === "wire") return SUPPLIER_WIRE_MATERIALS;
  return [];
};

// Strictly get a product by its slug
export const getSupplierProductBySlug = (slug = "") => {
  const clean = String(slug).toLowerCase().trim();
  const raw = (
    getPipesProductBySlug(clean) ||
    getSheetsProductBySlug(clean) ||
    getRodsProductBySlug(clean) ||
    getWireProductBySlug(clean) ||
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
  SUPPLIER_WIRE_PRODUCTS
};
