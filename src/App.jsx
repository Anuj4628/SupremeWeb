import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/AboutSection";
import MaterialsSection from "./components/home/MaterialsSection";
import ProductsSection from "./components/home/ProductsSection";
import WhyChooseSection from "./components/home/WhyChooseSection";
import TpiMarqueeSection from "./components/home/TpiMarqueeSection";
import IndustriesServicesSection from "./components/home/IndustriesServicesSection";
import PartnershipsSection from "./components/home/PartnershipsSection";
import GlobalPresenceSection from "./components/home/GlobalPresenceSection";
import RfqFooterSection from "./components/home/RfqFooterSection";
import FloatingContactWidget from "./components/common/FloatingContactWidget";
import AboutUsPage from "./components/about/AboutUsPage";

// Product & Material Section Components (Hierarchical Ecosystem)
import ProductLandingPage from "./components/products/ProductLandingPage";
import CategoryPage from "./components/products/CategoryPage";
import MaterialPage from "./components/products/MaterialPage";
import MaterialsLandingPage from "./components/materials/MaterialsLandingPage";
import MaterialDetailPage from "./components/materials/MaterialDetailPage";
import IndustriesLandingPage from "./components/industries/IndustriesLandingPage";
import IndustryDetailPage from "./components/industries/IndustryDetailPage";
import ContactPage from "./components/contact/ContactPage";
import GradePage from "./components/products/GradePage";
import ProductDetailPage from "./components/products/ProductDetailPage";
import HosePipesSection from "./components/products/HosePipesSection";
import HosePipesDetailPage from "./components/products/HosePipesDetailPage";
import WireMeshSection from "./components/products/WireMeshSection";
import WireMeshDetailPage from "./components/products/WireMeshDetailPage";
import SupplierDetailPage from "./components/supplier/SupplierDetailPage";
import { getSupplierProductBySlug } from "./data/supplierCatalog";
import {
  MFG_SUFFIX,
  cleanMfgSlug,
  appendMfgSuffix,
  isMfgCategory,
  normalizeCategorySlug,
  isMfgProductSlugPattern,
  getCategoryUrl,
  getProductUrl
} from "./utils/mfgRoutes";
import { getProductBySlug } from "./data/productCatalog";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentHash(window.location.hash);
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // Determine current active page/route state
  const getRouteState = () => {
    const hash = currentHash.toLowerCase();
    const path = currentPath.toLowerCase();

    // 1. About Us Page
    if (hash === "#about" || hash === "#about-us" || path === "/about") {
      return { route: "about" };
    }

    // 1.5 Hose Pipes Dedicated Routes (Strict Material Isolation)
    if (
      hash.startsWith("#hose-pipes/") ||
      hash.startsWith("#products/category/hose-pipes/") ||
      hash.startsWith("#products/hose-pipes/") ||
      path.startsWith("/hose-pipes/")
    ) {
      let rawMat = "";
      if (hash.startsWith("#hose-pipes/")) {
        rawMat = hash.replace("#hose-pipes/", "").trim();
      } else if (hash.startsWith("#products/category/hose-pipes/")) {
        rawMat = hash.replace("#products/category/hose-pipes/", "").trim();
      } else if (hash.startsWith("#products/hose-pipes/")) {
        rawMat = hash.replace("#products/hose-pipes/", "").trim();
      } else if (path.startsWith("/hose-pipes/")) {
        rawMat = path.replace("/hose-pipes/", "").trim();
      }
      if (rawMat) {
        const cleanMat = cleanMfgSlug(rawMat);
        return { route: "hose-pipes-detail", materialSlug: cleanMat };
      }
    }

    if (
      hash === "#hose-pipes" ||
      hash === `#hose-pipes${MFG_SUFFIX}` ||
      hash === "#products/category/hose-pipes" ||
      hash === `#products/category/hose-pipes${MFG_SUFFIX}` ||
      hash === "#products/hose-pipes" ||
      hash === `#products/hose-pipes${MFG_SUFFIX}` ||
      path === "/hose-pipes"
    ) {
      const expectedUrl = `#products/category/hose-pipes${MFG_SUFFIX}`;
      if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
        window.history.replaceState(null, "", expectedUrl);
      }
      return { route: "hose-pipes-landing" };
    }

    // 1.6 Wire Mesh Dedicated Routes (Strict Material Isolation)
    if (
      hash.startsWith("#wire-mesh/") ||
      hash.startsWith("#products/category/wire-mesh/") ||
      hash.startsWith("#products/wire-mesh/") ||
      path.startsWith("/wire-mesh/")
    ) {
      let rawMat = "";
      if (hash.startsWith("#wire-mesh/")) {
        rawMat = hash.replace("#wire-mesh/", "").trim();
      } else if (hash.startsWith("#products/category/wire-mesh/")) {
        rawMat = hash.replace("#products/category/wire-mesh/", "").trim();
      } else if (hash.startsWith("#products/wire-mesh/")) {
        rawMat = hash.replace("#products/wire-mesh/", "").trim();
      } else if (path.startsWith("/wire-mesh/")) {
        rawMat = path.replace("/wire-mesh/", "").trim();
      }
      if (rawMat) {
        const cleanMat = cleanMfgSlug(rawMat);
        return { route: "wire-mesh-detail", materialSlug: cleanMat };
      }
    }

    if (
      hash === "#wire-mesh" ||
      hash === `#wire-mesh${MFG_SUFFIX}` ||
      hash === "#products/category/wire-mesh" ||
      hash === `#products/category/wire-mesh${MFG_SUFFIX}` ||
      hash === "#products/wire-mesh" ||
      hash === `#products/wire-mesh${MFG_SUFFIX}` ||
      path === "/wire-mesh"
    ) {
      const expectedUrl = `#products/category/wire-mesh${MFG_SUFFIX}`;
      if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
        window.history.replaceState(null, "", expectedUrl);
      }
      return { route: "wire-mesh-landing" };
    }

    // 1.7 Perforated Sheets Alias Routes
    if (
      hash === "#perforated-sheets" ||
      hash === `#perforated-sheets${MFG_SUFFIX}` ||
      hash === "#products/perforated-sheets" ||
      hash === `#products/perforated-sheets${MFG_SUFFIX}` ||
      path === "/perforated-sheets"
    ) {
      const expectedUrl = `#products/category/perforated-sheets${MFG_SUFFIX}`;
      if (window.location.hash !== expectedUrl) {
        window.history.replaceState(null, "", expectedUrl);
      }
      return { route: "category-page", categorySlug: "perforated-sheets" };
    }

    // 2. Division Views (#products/manufacturer, #products/supplier)
    if (hash === "#products/manufacturer" || path === "/products/manufacturer") {
      return { route: "product-landing", filterState: { division: "MANUFACTURER" } };
    }
    if (hash === "#products/supplier" || path === "/products/supplier") {
      return { route: "product-landing", filterState: { division: "SUPPLIER" } };
    }

    // 2.5. Supplier Division Dedicated Routes (#supplier/product/*, #supplier/*, #products/supplier/*)
    if (hash.startsWith("#supplier/product/")) {
      const rawSlug = hash.replace("#supplier/product/", "").trim();
      const cleanSlug = cleanMfgSlug(rawSlug);
      return { route: "supplier-detail", productSlug: cleanSlug };
    }

    if (hash.startsWith("#supplier/")) {
      const raw = hash.replace("#supplier/", "").trim();
      const parts = raw.split("/");
      const family = parts[0];
      const material = parts[1] || "all";
      return { route: "category-page", categorySlug: family, initialMaterialSlug: material };
    }

    if (
      hash.startsWith("#products/supplier/") ||
      path.startsWith("/products/supplier/") ||
      path.startsWith("/supplier/")
    ) {
      let raw = "";
      if (hash.startsWith("#products/supplier/")) {
        raw = hash.replace("#products/supplier/", "").trim();
      } else if (path.startsWith("/products/supplier/")) {
        raw = path.replace("/products/supplier/", "").trim();
      } else if (path.startsWith("/supplier/")) {
        raw = path.replace("/supplier/", "").trim();
      }
      const parts = raw.split("/");
      const family = parts[0];
      const material = parts[1] || "all";
      if (family && family !== "manufacturer" && family !== "supplier") {
        return { route: "category-page", categorySlug: family, initialMaterialSlug: material };
      }
    }

    // 3. Category Landing Page (#products/category/*)
    if (hash.startsWith("#products/category/")) {
      const rawCat = hash.replace("#products/category/", "").trim();
      const cleanCat = cleanMfgSlug(rawCat);
      const normalizedCat = normalizeCategorySlug(cleanCat);

      if (normalizedCat === "hose-pipes") {
        const expectedUrl = `#products/category/hose-pipes${MFG_SUFFIX}`;
        if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
          window.history.replaceState(null, "", expectedUrl);
        }
        return { route: "hose-pipes-landing" };
      }
      if (normalizedCat === "wire-mesh") {
        const expectedUrl = `#products/category/wire-mesh${MFG_SUFFIX}`;
        if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
          window.history.replaceState(null, "", expectedUrl);
        }
        return { route: "wire-mesh-landing" };
      }

      // If Manufacturing category, ensure URL has -manufactured-in-mumbai
      if (isMfgCategory(cleanCat)) {
        const expectedUrl = getCategoryUrl(cleanCat);
        if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
          window.history.replaceState(null, "", expectedUrl);
        }
      }

      return { route: "category-page", categorySlug: cleanCat };
    }

    // 4. Materials Main Landing Page (#materials or #products/material or /materials)
    if (
      hash === "#materials" ||
      hash === "#products/material" ||
      path === "/materials" ||
      path === "/products/material"
    ) {
      return { route: "materials-landing" };
    }

    // 4.1 Individual Material Page (#materials/:slug or #products/material/:slug)
    if (hash.startsWith("#materials/")) {
      const mat = hash.replace("#materials/", "").trim();
      return { route: "material-page", materialSlug: mat };
    }
    if (path.startsWith("/materials/")) {
      const mat = path.replace("/materials/", "").trim();
      return { route: "material-page", materialSlug: mat };
    }
    if (hash.startsWith("#products/material/")) {
      const mat = hash.replace("#products/material/", "").trim();
      return { route: "material-page", materialSlug: mat };
    }
    if (path.startsWith("/products/material/")) {
      const mat = path.replace("/products/material/", "").trim();
      return { route: "material-page", materialSlug: mat };
    }

    // 4.5. Industries Main Landing Page (#industries or /industries)
    if (
      hash === "#industries" ||
      path === "/industries"
    ) {
      return { route: "industries-landing" };
    }

    // 4.6. Individual Industry Detail Page (#industries/:slug or /industries/:slug)
    if (hash.startsWith("#industries/")) {
      const rawInd = hash.replace("#industries/", "").trim();
      const cleanInd = cleanMfgSlug(rawInd);
      return { route: "industry-detail", industrySlug: cleanInd };
    }
    if (path.startsWith("/industries/")) {
      const rawInd = path.replace("/industries/", "").trim();
      const cleanInd = cleanMfgSlug(rawInd);
      return { route: "industry-detail", industrySlug: cleanInd };
    }

    // 4.7. Contact & Get Quote Page (#contact, /contact, #quote)
    if (
      hash === "#contact" ||
      hash.startsWith("#contact?") ||
      hash.startsWith("#contact#") ||
      hash === "#quote" ||
      hash.startsWith("#quote?") ||
      path === "/contact" ||
      path.startsWith("/contact/")
    ) {
      let prefill = "";
      if (hash.includes("?")) {
        const queryStr = hash.split("?")[1];
        const params = new URLSearchParams(queryStr);
        prefill = params.get("product") || params.get("requirement") || params.get("material") || params.get("industry") || "";
      } else if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        prefill = params.get("product") || params.get("requirement") || params.get("material") || params.get("industry") || "";
      }
      return { route: "contact-page", prefillProduct: prefill };
    }

    // 5. Grade Landing Page (#products/grade/316l)
    if (hash.startsWith("#products/grade/")) {
      const grade = hash.replace("#products/grade/", "").trim();
      return { route: "grade-page", gradeSlug: grade };
    }

    // 6. Product Detail Page (via explicit slug hash e.g. #products/detail/...)
    if (hash.startsWith("#products/detail/")) {
      const rawSlug = hash.replace("#products/detail/", "").trim();
      const cleanSlug = cleanMfgSlug(rawSlug);

      if (cleanSlug.startsWith("wire-mesh-")) {
        const mat = cleanSlug.replace(/^wire-mesh-/, "");
        return { route: "wire-mesh-detail", materialSlug: mat };
      }
      if (cleanSlug.startsWith("hose-pipes-")) {
        const mat = cleanSlug.replace(/^hose-pipes-/, "");
        return { route: "hose-pipes-detail", materialSlug: mat };
      }
      if (
        cleanSlug.startsWith("pipes-tubes-") ||
        cleanSlug.startsWith("sheets-plates-") ||
        cleanSlug.startsWith("rods-bars-") ||
        cleanSlug.startsWith("wires-") ||
        (cleanSlug.startsWith("wire-") && !cleanSlug.startsWith("wire-mesh")) ||
        cleanSlug.startsWith("circle-") ||
        cleanSlug.startsWith("circles-") ||
        cleanSlug.startsWith("flat-") ||
        cleanSlug.startsWith("flats-") ||
        cleanSlug.startsWith("patapatti-") ||
        cleanSlug.startsWith("coil-") ||
        cleanSlug.startsWith("coils-") ||
        cleanSlug.startsWith("ring-") ||
        cleanSlug.startsWith("rings-") ||
        getSupplierProductBySlug(cleanSlug)
      ) {
        return { route: "supplier-detail", productSlug: cleanSlug };
      }

      const prod = getProductBySlug(cleanSlug);
      const isMfg = prod ? prod.division === "MANUFACTURER" : isMfgProductSlugPattern(cleanSlug);

      if (isMfg) {
        const expectedUrl = `#products/detail/${cleanSlug}${MFG_SUFFIX}`;
        if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
          window.history.replaceState(null, "", expectedUrl);
        }
      }

      return { route: "product-detail", slug: cleanSlug };
    }

    if (hash.startsWith("#products/") && hash.length > 10) {
      const rawSlug = hash.replace("#products/", "").trim();
      if (
        rawSlug !== "manufacturer" &&
        rawSlug !== "supplier" &&
        !rawSlug.startsWith("category/") &&
        !rawSlug.startsWith("material/") &&
        !rawSlug.startsWith("grade/")
      ) {
        const cleanSlug = cleanMfgSlug(rawSlug);
        if (cleanSlug.startsWith("wire-mesh-")) {
          const mat = cleanSlug.replace(/^wire-mesh-/, "");
          return { route: "wire-mesh-detail", materialSlug: mat };
        }
        if (cleanSlug.startsWith("hose-pipes-")) {
          const mat = cleanSlug.replace(/^hose-pipes-/, "");
          return { route: "hose-pipes-detail", materialSlug: mat };
        }
        if (
          cleanSlug.startsWith("pipes-tubes-") ||
          cleanSlug.startsWith("sheets-plates-") ||
          cleanSlug.startsWith("rods-bars-") ||
          cleanSlug.startsWith("wires-") ||
          (cleanSlug.startsWith("wire-") && !cleanSlug.startsWith("wire-mesh")) ||
          cleanSlug.startsWith("circle-") ||
          cleanSlug.startsWith("circles-") ||
          cleanSlug.startsWith("flat-") ||
          cleanSlug.startsWith("flats-") ||
          cleanSlug.startsWith("patapatti-") ||
          cleanSlug.startsWith("coil-") ||
          cleanSlug.startsWith("coils-") ||
          cleanSlug.startsWith("ring-") ||
          cleanSlug.startsWith("rings-") ||
          getSupplierProductBySlug(cleanSlug)
        ) {
          return { route: "supplier-detail", productSlug: cleanSlug };
        }

        const prod = getProductBySlug(cleanSlug);
        const isMfg = prod ? prod.division === "MANUFACTURER" : isMfgProductSlugPattern(cleanSlug);

        if (isMfg) {
          const expectedUrl = `#products/detail/${cleanSlug}${MFG_SUFFIX}`;
          if (window.location.hash !== expectedUrl && !window.location.hash.endsWith(MFG_SUFFIX)) {
            window.history.replaceState(null, "", expectedUrl);
          }
        }

        return { route: "product-detail", slug: cleanSlug };
      }
    }

    if (path.startsWith("/products/") && path.length > 10) {
      const rawSlug = path.replace("/products/", "").trim();
      const cleanSlug = cleanMfgSlug(rawSlug);
      if (cleanSlug.startsWith("wire-mesh-")) {
        const mat = cleanSlug.replace(/^wire-mesh-/, "");
        return { route: "wire-mesh-detail", materialSlug: mat };
      }
      if (cleanSlug.startsWith("hose-pipes-")) {
        const mat = cleanSlug.replace(/^hose-pipes-/, "");
        return { route: "hose-pipes-detail", materialSlug: mat };
      }
      if (
        cleanSlug.startsWith("pipes-tubes-") ||
        cleanSlug.startsWith("sheets-plates-") ||
        cleanSlug.startsWith("rods-bars-") ||
        cleanSlug.startsWith("wires-") ||
        (cleanSlug.startsWith("wire-") && !cleanSlug.startsWith("wire-mesh")) ||
        cleanSlug.startsWith("circle-") ||
        cleanSlug.startsWith("circles-") ||
        cleanSlug.startsWith("flat-") ||
        cleanSlug.startsWith("flats-") ||
        cleanSlug.startsWith("patapatti-") ||
        cleanSlug.startsWith("coil-") ||
        cleanSlug.startsWith("coils-") ||
        cleanSlug.startsWith("ring-") ||
        cleanSlug.startsWith("rings-") ||
        getSupplierProductBySlug(cleanSlug)
      ) {
        return { route: "supplier-detail", productSlug: cleanSlug };
      }
      return { route: "product-detail", slug: cleanSlug };
    }

    // Quick map for Material shortcuts
    const quickMaterialMap = {
      "#ss": "stainless-steel",
      "#nickel": "nickel",
      "#high-alloys": "high-alloys",
      "#duplex": "duplex",
      "#super-duplex": "super-duplex",
      "#titanium": "titanium",
      "#alloys": "alloys",
      "#carbon": "carbon",
      "#carbon-steel": "carbon",
      "#carbon-alloy": "carbon",
      "#alloy-steel": "alloy-steel"
    };

    if (quickMaterialMap[hash]) {
      return { route: "material-page", materialSlug: quickMaterialMap[hash] };
    }

    // Quick map for Industry shortcuts
    const quickIndustryMap = {
      "#defense-aerospace": "defense-aerospace",
      "#defense": "defense-aerospace",
      "#aerospace": "defense-aerospace",
      "#precision-industrial-piping-biopharma": "precision-industrial-piping-biopharma",
      "#precision-piping": "precision-industrial-piping-biopharma",
      "#biopharma": "precision-industrial-piping-biopharma",
      "#heavy-engineering-infrastructures": "heavy-engineering-infrastructures",
      "#heavy-engineering": "heavy-engineering-infrastructures",
      "#nuclear-thermal-power": "nuclear-thermal-power",
      "#nuclear": "nuclear-thermal-power",
      "#petrochemicals-chemicals": "petrochemicals-chemicals",
      "#petrochemical": "petrochemicals-chemicals",
      "#marine-offshore-rigs": "marine-offshore-rigs",
      "#marine": "marine-offshore-rigs"
    };

    if (quickIndustryMap[hash]) {
      return { route: "industry-detail", industrySlug: quickIndustryMap[hash] };
    }

    // Quick map for Navbar dropdown items
    const quickSlugMap = {
      "#pipes": "pipes-tubes-stainless-steel",
      "#sheets": "sheets-plates-stainless-steel",
      "#bars": "rods-bars-stainless-steel",
      "#wires": "wires-stainless-steel",
      "#wire": "wires-stainless-steel",
      "#circles": "circle-stainless-steel",
      "#circle": "circle-stainless-steel",
      "#flats": "flat-stainless-steel",
      "#flat": "flat-stainless-steel",
      "#patapatti": "patapatti-stainless-steel",
      "#coils": "coil-stainless-steel",
      "#coil": "coil-stainless-steel",
      "#rings": "ring-stainless-steel",
      "#ring": "ring-stainless-steel",
      "#pipes-tubes": "pipes-tubes-stainless-steel",
      "#sheets-plates": "sheets-plates-stainless-steel",
      "#rods-bars": "rods-bars-stainless-steel",
      "#flanges": "ss-316l-weldneck-flange",
      "#fasteners": "astm-a193-b7-stud-bolt",
      "#fittings": "ss-316l-buttweld-elbow",
      "#sanitary": "tri-clover-sanitary-ferrule-316l"
    };

    if (quickSlugMap[hash]) {
      const targetSlug = quickSlugMap[hash];
      const prod = getProductBySlug(targetSlug);
      const isMfg = prod ? prod.division === "MANUFACTURER" : isMfgProductSlugPattern(targetSlug);
      if (isMfg) {
        const expectedUrl = `#products/detail/${targetSlug}${MFG_SUFFIX}`;
        if (window.location.hash !== expectedUrl) {
          window.history.replaceState(null, "", expectedUrl);
        }
      }
      if (
        targetSlug.startsWith("pipes-tubes-") ||
        targetSlug.startsWith("sheets-plates-") ||
        targetSlug.startsWith("rods-bars-") ||
        targetSlug.startsWith("wires-") ||
        targetSlug.startsWith("circle-") ||
        targetSlug.startsWith("flat-") ||
        targetSlug.startsWith("patapatti-") ||
        targetSlug.startsWith("coil-") ||
        targetSlug.startsWith("ring-") ||
        getSupplierProductBySlug(targetSlug)
      ) {
        return { route: "supplier-detail", productSlug: targetSlug };
      }
      return { route: "product-detail", slug: targetSlug };
    }

    // 7. Main Product Landing Page (via #products or /products)
    if (hash === "#products" || hash === "#all-products" || path === "/products") {
      return { route: "product-landing" };
    }

    // 8. Default: Home Page
    return { route: "home" };
  };

  const routeState = getRouteState();

  const handleSelectProduct = (slug) => {
    const clean = cleanMfgSlug(slug);
    if (
      clean.startsWith("pipes-tubes-") ||
      clean.startsWith("sheets-plates-") ||
      clean.startsWith("rods-bars-") ||
      clean.startsWith("wires-") ||
      (clean.startsWith("wire-") && !clean.startsWith("wire-mesh")) ||
      clean.startsWith("circle-") ||
      clean.startsWith("circles-") ||
      clean.startsWith("flat-") ||
      clean.startsWith("flats-") ||
      clean.startsWith("patapatti-") ||
      clean.startsWith("coil-") ||
      clean.startsWith("coils-") ||
      clean.startsWith("ring-") ||
      clean.startsWith("rings-") ||
      getSupplierProductBySlug(clean)
    ) {
      window.location.hash = `#products/detail/${clean}`;
      return;
    }
    const prod = getProductBySlug(clean);
    const isMfg = prod ? prod.division === "MANUFACTURER" : isMfgProductSlugPattern(clean);
    window.location.hash = getProductUrl(clean, isMfg ? "MANUFACTURER" : "SUPPLIER");
  };

  const handleSelectCategory = (catSlug) => {
    const clean = cleanMfgSlug(catSlug);
    const normalized = normalizeCategorySlug(clean);
    if (normalized === "hose-pipes") {
      window.location.hash = `#products/category/hose-pipes${MFG_SUFFIX}`;
    } else if (normalized === "wire-mesh") {
      window.location.hash = `#products/category/wire-mesh${MFG_SUFFIX}`;
    } else if (
      normalized === "pipes-tubes" ||
      normalized === "sheets-plates" ||
      normalized === "rods-bars" ||
      normalized === "wires" ||
      normalized === "wire" ||
      normalized === "circle" ||
      normalized === "circles" ||
      normalized === "flat" ||
      normalized === "flats" ||
      normalized === "patapatti" ||
      normalized === "coil" ||
      normalized === "coils" ||
      normalized === "ring" ||
      normalized === "rings"
    ) {
      let resolved = normalized;
      if (normalized === "wire") resolved = "wires";
      else if (normalized === "circles") resolved = "circle";
      else if (normalized === "flats") resolved = "flat";
      else if (normalized === "coils") resolved = "coil";
      else if (normalized === "rings") resolved = "ring";
      window.location.hash = `#products/category/${resolved}`;
    } else {
      window.location.hash = getCategoryUrl(clean);
    }
  };

  const handleSelectMaterial = (catSlug, matSlug) => {
    const cleanCat = cleanMfgSlug(catSlug);
    const normalizedCat = normalizeCategorySlug(cleanCat);
    const cleanMat = cleanMfgSlug(matSlug);
    if (normalizedCat === "hose-pipes") {
      if (cleanMat) {
        window.location.hash = `#hose-pipes/${cleanMat}${MFG_SUFFIX}`;
      } else {
        window.location.hash = `#products/category/hose-pipes${MFG_SUFFIX}`;
      }
    } else if (normalizedCat === "wire-mesh") {
      if (cleanMat) {
        window.location.hash = `#wire-mesh/${cleanMat}${MFG_SUFFIX}`;
      } else {
        window.location.hash = `#products/category/wire-mesh${MFG_SUFFIX}`;
      }
    } else if (
      normalizedCat === "pipes-tubes" ||
      normalizedCat === "sheets-plates" ||
      normalizedCat === "rods-bars" ||
      normalizedCat === "wires" ||
      normalizedCat === "wire" ||
      normalizedCat === "circle" ||
      normalizedCat === "circles" ||
      normalizedCat === "flat" ||
      normalizedCat === "flats" ||
      normalizedCat === "patapatti" ||
      normalizedCat === "coil" ||
      normalizedCat === "coils" ||
      normalizedCat === "ring" ||
      normalizedCat === "rings"
    ) {
      let catKey = normalizedCat;
      if (normalizedCat === "wire") catKey = "wires";
      else if (normalizedCat === "circles") catKey = "circle";
      else if (normalizedCat === "flats") catKey = "flat";
      else if (normalizedCat === "coils") catKey = "coil";
      else if (normalizedCat === "rings") catKey = "ring";

      if (cleanMat && cleanMat !== "all") {
        window.location.hash = `#supplier/${catKey}/${cleanMat}`;
      } else {
        window.location.hash = `#products/category/${catKey}`;
      }
    } else if (cleanMat) {
      window.location.hash = `#materials/${cleanMat}`;
    } else {
      window.location.hash = getCategoryUrl(cleanCat);
    }
  };

  const handleSelectHoseMaterial = (catSlug, matSlug) => {
    const cleanMat = cleanMfgSlug(matSlug);
    if (cleanMat) {
      window.location.hash = `#hose-pipes/${cleanMat}${MFG_SUFFIX}`;
    } else {
      window.location.hash = `#products/category/hose-pipes${MFG_SUFFIX}`;
    }
  };

  const handleBackToHosePipesCategory = () => {
    window.location.hash = `#products/category/hose-pipes${MFG_SUFFIX}`;
  };

  const handleSelectWireMeshMaterial = (catSlug, matSlug) => {
    const cleanMat = cleanMfgSlug(matSlug);
    if (cleanMat) {
      window.location.hash = `#wire-mesh/${cleanMat}${MFG_SUFFIX}`;
    } else {
      window.location.hash = `#products/category/wire-mesh${MFG_SUFFIX}`;
    }
  };

  const handleBackToWireMeshCategory = () => {
    window.location.hash = `#products/category/wire-mesh${MFG_SUFFIX}`;
  };

  const handleSelectGrade = (gradeSlug) => {
    window.location.hash = `#products/grade/${gradeSlug}`;
  };

  const handleBackToProducts = () => {
    window.location.hash = "#products";
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Supreme Navbar Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-[64px] sm:pt-[80px] lg:pt-[128px]">
        {routeState.route === "about" && <AboutUsPage />}

        {routeState.route === "hose-pipes-landing" && (
          <HosePipesSection
            onSelectMaterial={handleSelectHoseMaterial}
            onBackToProducts={handleBackToProducts}
          />
        )}

        {routeState.route === "hose-pipes-detail" && (
          <HosePipesDetailPage
            materialSlug={routeState.materialSlug}
            onBackToCategory={handleBackToHosePipesCategory}
            onSelectMaterial={handleSelectHoseMaterial}
          />
        )}

        {routeState.route === "wire-mesh-landing" && (
          <WireMeshSection
            onSelectMaterial={handleSelectWireMeshMaterial}
            onBackToProducts={handleBackToProducts}
          />
        )}

        {routeState.route === "wire-mesh-detail" && (
          <WireMeshDetailPage
            materialSlug={routeState.materialSlug}
            onBackToCategory={handleBackToWireMeshCategory}
            onSelectMaterial={handleSelectWireMeshMaterial}
          />
        )}

        {routeState.route === "product-landing" && (
          <ProductLandingPage
            onSelectProduct={handleSelectProduct}
            filterState={routeState.filterState}
          />
        )}

        {routeState.route === "category-page" && (
          <CategoryPage
            key={`${routeState.categorySlug}-${routeState.initialMaterialSlug || "all"}`}
            categorySlug={routeState.categorySlug}
            initialMaterialSlug={routeState.initialMaterialSlug || "all"}
            onSelectProduct={handleSelectProduct}
            onSelectMaterial={handleSelectMaterial}
            onBackToProducts={handleBackToProducts}
          />
        )}

        {routeState.route === "materials-landing" && (
          <MaterialsLandingPage
            onSelectMaterial={(matSlug) => {
              window.location.hash = `#materials/${matSlug}`;
            }}
            onBackToHome={() => {
              window.location.hash = "#home";
            }}
          />
        )}

        {routeState.route === "material-page" && (
          <MaterialDetailPage
            key={routeState.materialSlug}
            materialSlug={routeState.materialSlug}
            onSelectProduct={handleSelectProduct}
            onBackToMaterials={() => {
              window.location.hash = "#materials";
            }}
          />
        )}

        {routeState.route === "industries-landing" && (
          <IndustriesLandingPage
            onSelectIndustry={(slug) => {
              window.location.hash = `#industries/${slug}`;
            }}
            onBackToHome={() => {
              window.location.hash = "#home";
            }}
          />
        )}

        {routeState.route === "industry-detail" && (
          <IndustryDetailPage
            key={routeState.industrySlug}
            industrySlug={routeState.industrySlug}
            onSelectIndustry={(slug) => {
              window.location.hash = `#industries/${slug}`;
            }}
            onSelectProduct={handleSelectProduct}
            onSelectMaterial={(matSlug) => {
              window.location.hash = `#materials/${matSlug}`;
            }}
            onBackToIndustries={() => {
              window.location.hash = "#industries";
            }}
          />
        )}

        {routeState.route === "contact-page" && (
          <ContactPage
            initialRequirement={routeState.prefillProduct}
            onBackToHome={() => {
              window.location.hash = "#home";
            }}
          />
        )}

        {routeState.route === "grade-page" && (
          <GradePage
            key={routeState.gradeSlug}
            gradeSlug={routeState.gradeSlug}
            onSelectProduct={handleSelectProduct}
            onBackToProducts={handleBackToProducts}
          />
        )}

        {routeState.route === "product-detail" && (
          <ProductDetailPage
            key={routeState.slug}
            slug={routeState.slug}
            onBackToProducts={handleBackToProducts}
            onNavigateToProduct={handleSelectProduct}
          />
        )}

        {routeState.route === "supplier-detail" && (
          <SupplierDetailPage
            key={routeState.productSlug}
            productSlug={routeState.productSlug}
            onBackToCategory={() => {
              const prod = getSupplierProductBySlug(routeState.productSlug);
              if (prod && prod.categorySlug) {
                window.location.hash = `#products/category/${prod.categorySlug}`;
              } else {
                const pSlug = routeState.productSlug || "";
                let fallbackCat = "products";
                if (pSlug.startsWith("circle")) fallbackCat = "products/category/circle";
                else if (pSlug.startsWith("flat")) fallbackCat = "products/category/flat";
                else if (pSlug.startsWith("patapatti")) fallbackCat = "products/category/patapatti";
                else if (pSlug.startsWith("coil")) fallbackCat = "products/category/coil";
                else if (pSlug.startsWith("ring")) fallbackCat = "products/category/ring";
                else if (pSlug.startsWith("wires") || pSlug.startsWith("wire-")) fallbackCat = "products/category/wires";
                else if (pSlug.startsWith("rods-bars")) fallbackCat = "products/category/rods-bars";
                else if (pSlug.startsWith("sheets-plates")) fallbackCat = "products/category/sheets-plates";
                else if (pSlug.startsWith("pipes-tubes")) fallbackCat = "products/category/pipes-tubes";
                window.location.hash = `#${fallbackCat}`;
              }
            }}
            onSelectProduct={(slug) => {
              window.location.hash = `#products/detail/${slug}`;
            }}
          />
        )}

        {routeState.route === "home" && (
          <>
            {/* Supreme Metal & Alloys Official Hero Section */}
            <Hero />

            {/* Section 1: Company Introduction & Key Facts (WHITE BG) */}
            <AboutSection />

            {/* Section 1.5: Materials We Work With Kinetic Catalogue */}
            <MaterialsSection />

            {/* Section 2: Products & Catalogue Specifications (LIGHT BG #F8FAFC) */}
            <ProductsSection />

            {/* Section 3: Why Choose Supreme - 4 Pillars (WHITE BG) */}
            <WhyChooseSection />

            {/* Section 4: Approved TPI Agencies & Quality Audits (LIGHT BG #F8FAFC) */}
            <TpiMarqueeSection />

            {/* Section 5: Target Industries & Value-Added Services (WHITE BG) */}
            <IndustriesServicesSection />

            {/* Section 5.5: Trusted Supply Network & Strategic Partnerships */}
            <PartnershipsSection />

            {/* Section 6: Global Export Network & 3D Interactive World Globe */}
            <GlobalPresenceSection />
          </>
        )}
      </main>

      {/* Section 7: RFQ Banner & Industrial Footer (DARK NAVY BG #0E2A3A) */}
      <RfqFooterSection />

      {/* Fixed Floating Phone & WhatsApp Contact Widget */}
      <FloatingContactWidget />
    </div>
  );
}

export default App;
