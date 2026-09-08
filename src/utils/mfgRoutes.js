// Manufacturing Division URL & Route Utilities
// Appends -manufactured-in-mumbai strictly to Manufacturing Division routes

export const MFG_SUFFIX = "-manufactured-in-mumbai";

// All Manufacturing category slugs and recognized aliases
export const MFG_CATEGORY_SLUGS = [
  "buttweld-fittings",
  "butt-weld-fittings",
  "forged-fittings",
  "flanges",
  "fasteners",
  "dairy-sanitary-fittings",
  "dairy-pharma-fittings",
  "hose-pipes",
  "wire-mesh",
  "perforated-sheets"
];

// Clean suffix from slug (handles single or duplicate suffix without issues)
export const cleanMfgSlug = (slug = "") => {
  if (!slug || typeof slug !== "string") return "";
  let clean = slug.trim();
  while (clean.toLowerCase().endsWith(MFG_SUFFIX)) {
    clean = clean.slice(0, -MFG_SUFFIX.length);
  }
  return clean;
};

// Append suffix to slug safely without duplication
export const appendMfgSuffix = (slug = "") => {
  const clean = cleanMfgSlug(slug);
  return clean ? `${clean}${MFG_SUFFIX}` : "";
};

// Check if a category belongs to the Manufacturing Division
export const isMfgCategory = (catSlug = "") => {
  const clean = cleanMfgSlug(catSlug).toLowerCase();
  return MFG_CATEGORY_SLUGS.includes(clean);
};

// Normalize category slug for internal catalog lookup
export const normalizeCategorySlug = (catSlug = "") => {
  const clean = cleanMfgSlug(catSlug).toLowerCase();
  if (clean === "butt-weld-fittings" || clean === "buttweld-fittings") return "buttweld-fittings";
  if (clean === "dairy-pharma-fittings" || clean === "dairy-sanitary-fittings") return "dairy-sanitary-fittings";
  if (clean === "wire" || clean === "wires") return "wires";
  if (clean === "circle" || clean === "circles") return "circle";
  if (clean === "flat" || clean === "flats" || clean === "flat-bar" || clean === "flat-bars") return "flat";
  if (clean === "patapatti" || clean === "patta-patti" || clean === "patti") return "patapatti";
  if (clean === "coil" || clean === "coils" || clean === "quile" || clean === "quiles") return "coil";
  if (clean === "ring" || clean === "rings") return "ring";
  return clean;
};

// Check if a product slug pattern indicates manufacturing product (fallback if division object not passed)
export const isMfgProductSlugPattern = (slug = "") => {
  const s = cleanMfgSlug(slug).toLowerCase();
  if (!s) return false;
  
  // Specific known supplier prefixes/terms to exclude
  if (
    s.includes("seamless-pipe") ||
    s.includes("welded-pipe") ||
    s.includes("heavy-plate") ||
    s.includes("round-bar") ||
    s.includes("slitted-coil") ||
    s.includes("patta-patti") ||
    s.includes("chequered-plate") ||
    s.startsWith("pipes-tubes-") ||
    s.startsWith("sheets-plates-") ||
    s.startsWith("rods-bars-") ||
    s.startsWith("wires-") ||
    (s.startsWith("wire-") && !s.startsWith("wire-mesh")) ||
    s.startsWith("circle-") ||
    s.startsWith("circles-") ||
    s.startsWith("flat-") ||
    s.startsWith("flats-") ||
    s.startsWith("patapatti-") ||
    s.startsWith("coil-") ||
    s.startsWith("coils-") ||
    s.startsWith("ring-") ||
    s.startsWith("rings-")
  ) {
    return false;
  }

  // Manufacturing indicators
  return (
    s.includes("buttweld") ||
    s.includes("forged") ||
    s.includes("flange") ||
    s.includes("fastener") ||
    s.includes("stud-bolt") ||
    s.includes("hex-nut") ||
    s.includes("sanitary") ||
    s.includes("ferrule") ||
    s.includes("tri-clover") ||
    s.includes("sms-union") ||
    s.startsWith("wire-mesh-") ||
    s.startsWith("hose-pipes-") ||
    s.includes("perforated")
  );
};

// Generate category URL with suffix for Manufacturing categories
export const getCategoryUrl = (catSlug = "") => {
  const clean = cleanMfgSlug(catSlug).toLowerCase();
  if (isMfgCategory(clean)) {
    let slugToUse = clean;
    if (clean === "buttweld-fittings" || clean === "butt-weld-fittings") {
      slugToUse = "butt-weld-fittings";
    } else if (clean === "dairy-pharma-fittings" || clean === "dairy-sanitary-fittings") {
      slugToUse = "dairy-sanitary-fittings";
    }
    return `#products/category/${slugToUse}${MFG_SUFFIX}`;
  }
  return `#products/category/${clean}`;
};

// Generate product URL with suffix for Manufacturing products
export const getProductUrl = (productOrSlug, division) => {
  let slug = "";
  let isMfg = false;

  if (typeof productOrSlug === "object" && productOrSlug !== null) {
    slug = productOrSlug.slug || productOrSlug.id || "";
    isMfg = productOrSlug.division === "MANUFACTURER";
  } else {
    slug = String(productOrSlug || "");
    if (division) {
      isMfg = division.toUpperCase() === "MANUFACTURER";
    } else {
      isMfg = isMfgProductSlugPattern(slug);
    }
  }

  const clean = cleanMfgSlug(slug);
  if (isMfg) {
    return `#products/detail/${clean}${MFG_SUFFIX}`;
  }
  return `#products/detail/${clean}`;
};
