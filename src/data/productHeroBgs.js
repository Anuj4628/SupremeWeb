// Dedicated Product Hero Background Images Database
// Source of Truth: src/assets/All Products/Product BG/

import buttWeldBg from "../assets/All Products/Product BG/Butt Weld Fittings.png";
import forgedBg from "../assets/All Products/Product BG/Forged Fittings.png";
import flangesBg from "../assets/All Products/Product BG/flanges.png";
import fastenersBg from "../assets/All Products/Product BG/fasteners.png";
import dairyPharmaBg from "../assets/All Products/Product BG/dairy and pharma.png";
import ferruleBg from "../assets/All Products/Product BG/Ferrule Fittings.png";
import hosePipesBg from "../assets/All Products/Product BG/Hose Pipes.png";
import wireMeshBg from "../assets/All Products/Product BG/Wire Mesh.png";
import perforatedSheetsBg from "../assets/All Products/Product BG/Perforated Sheets.png";

import { cleanMfgSlug, normalizeCategorySlug } from "../utils/mfgRoutes";

// Strict 1-to-1 Mapping between Category Slug and Dedicated Product BG Asset
export const PRODUCT_HERO_BGS = {
  "buttweld-fittings": buttWeldBg,
  "butt-weld-fittings": buttWeldBg,
  "forged-fittings": forgedBg,
  "flanges": flangesBg,
  "fasteners": fastenersBg,
  "dairy-sanitary-fittings": dairyPharmaBg,
  "dairy-pharma-fittings": dairyPharmaBg,
  "ferrule-fittings": ferruleBg,
  "hose-pipes": hosePipesBg,
  "wire-mesh": wireMeshBg,
  "perforated-sheets": perforatedSheetsBg
};

/**
 * Retrieve the dedicated Product BG image for a Manufacturer category
 * @param {string} categorySlug - The category slug (with or without -manufactured-in-mumbai)
 * @returns {string} The imported high-resolution background asset
 */
export const getProductHeroBg = (categorySlug = "") => {
  const clean = cleanMfgSlug(categorySlug).toLowerCase();
  const normalized = normalizeCategorySlug(clean);
  return PRODUCT_HERO_BGS[normalized] || PRODUCT_HERO_BGS[clean] || buttWeldBg;
};
