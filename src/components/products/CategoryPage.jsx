import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  X,
  Factory,
  Globe,
  Filter,
  Search,
  CheckCircle2,
  AlertCircle,
  Building2,
  FileSpreadsheet,
  Ruler
} from "lucide-react";
import gsap from "gsap";
import {
  CATEGORIES,
  MATERIALS,
  PRODUCTS,
  getCategoryBySlug,
  getProductsByCategory,
  matchProductToCanonicalMaterial
} from "../../data/productCatalog";
import buttWeldFitImg from "../../assets/All Products/Butt Weld fit.png";
import forgedCollageImg from "../../assets/All Products/Forged Fittings/forged_fittings_collage.png";
import flangesCollageImg from "../../assets/All Products/Flanges/flanges_collage.png";
import fastenersCollageImg from "../../assets/All Products/Fasteners/fasteners_collage.png";
import { ssDairyImg } from "../../data/dairyPharmaData";

import HosePipesSection from "./HosePipesSection";
import WireMeshSection from "./WireMeshSection";
import SupplierFamilySection from "../supplier/SupplierFamilySection";
import ProductHeroSection from "./ProductHeroSection";
import { cleanMfgSlug } from "../../utils/mfgRoutes";

// Sleek Industrial SVG Placeholder Component for products pending client asset photos
const IndustrialSvgPlaceholder = ({ title, category, division }) => (
  <div className="w-full h-full bg-gradient-to-br from-[#0E2A3A] via-[#1b3a4e] to-[#0E2A3A] rounded-xl flex flex-col items-center justify-center p-4 text-white text-center relative overflow-hidden group">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-10 pointer-events-none" />
    <div className="w-10 h-10 rounded-xl bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] mb-2 z-10">
      {division === "MANUFACTURER" ? <Factory className="w-5 h-5" /> : <Globe className="w-5 h-5 text-blue-400" />}
    </div>
    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest z-10 mb-0.5">
      [{category}]
    </span>
    <span className="text-xs font-bold text-slate-200 line-clamp-1 max-w-[90%] z-10">
      {title}
    </span>
    <span className="text-[9px] font-mono text-slate-400 mt-1 z-10">
      SUPREME INDUSTRIAL SPECIFICATION
    </span>
  </div>
);

export default function CategoryPage({ categorySlug, initialMaterialSlug = "all", onSelectProduct, onSelectMaterial, onBackToProducts }) {
  // ALL hooks must be called unconditionally before any conditional return (React Rules of Hooks)
  const [selectedMaterialTab, setSelectedMaterialTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const containerRef = useRef(null);

  // Retrieve current category record (safe even for hose-pipes since we check below)
  const category = getCategoryBySlug(categorySlug) || CATEGORIES[0];
  const allCategoryProducts = useMemo(() => getProductsByCategory(category.slug), [category]);

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // GSAP Entrance Animations with clip-path & text stagger
  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero clip-path reveal
      gsap.fromTo(
        ".gsap-category-hero",
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // Hero text stagger
      gsap.fromTo(
        ".gsap-cat-text",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );

      // Material cards stagger reveal
      gsap.fromTo(
        ".gsap-mat-card",
        { y: 35, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [categorySlug, isReducedMotion]);

  // Update SEO Document Title
  useEffect(() => {
    if (category) {
      document.title = `${category.name} | Supreme Metal & Alloys`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);

  // Available Materials in this Category
  const availableMaterials = useMemo(() => {
    const categoryDefaultAsset = 
      category.slug === "fasteners" ? fastenersCollageImg :
      category.slug === "flanges" ? flangesCollageImg :
      category.slug === "forged-fittings" ? forgedCollageImg :
      category.slug === "buttweld-fittings" ? buttWeldFitImg :
      category.slug === "dairy-sanitary-fittings" ? (allCategoryProducts[0]?.heroImage || ssDairyImg) :
      category.slug === "perforated-sheets" ? (allCategoryProducts[0]?.heroImage || buttWeldFitImg) :
      buttWeldFitImg;

    return MATERIALS.map((mat) => {
      const matProducts = allCategoryProducts.filter((p) => {
        if (mat.slug === "duplex") return p.materialSlug === "duplex";
        const pMat = (p.material || p.materialName || "").toLowerCase();
        const cleanMatSlug = mat.slug.replace(/-alloys$/, "-alloy");
        const cleanProdSlug = (p.materialSlug || "").replace(/-alloys$/, "-alloy");
        return (
          matchProductToCanonicalMaterial(mat.slug, p) ||
          p.materialSlug === mat.slug ||
          cleanProdSlug === cleanMatSlug ||
          (pMat && mat.name && pMat === mat.name.toLowerCase()) ||
          (pMat && mat.shortName && pMat === mat.shortName.toLowerCase())
        );
      });
      const categoryMatImage = matProducts[0]?.heroImage || categoryDefaultAsset;
      return {
        ...mat,
        productCount: matProducts.length,
        categoryImage: categoryMatImage
      };
    }).filter((mat) => mat.productCount > 0);
  }, [allCategoryProducts, category.slug]);

  // Filtered Products for Grid
  const filteredProducts = useMemo(() => {
    return allCategoryProducts.filter((product) => {
      const pMat = (product.material || product.materialName || "").toLowerCase();
      const tabClean = (selectedMaterialTab || "").toLowerCase().replace(/-alloys$/, "-alloy");
      const prodMatClean = (product.materialSlug || "").toLowerCase().replace(/-alloys$/, "-alloy");
      const matchesMaterial =
        selectedMaterialTab === "all" ||
        product.materialSlug === selectedMaterialTab ||
        prodMatClean === tabClean ||
        (selectedMaterialTab === "duplex"
          ? product.materialSlug === "duplex"
          : (pMat && pMat === (selectedMaterialTab || "").toLowerCase()));

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesMaterial;

      const pGrade = (product.grade || (product.grades ? product.grades.join(" ") : "") || "").toLowerCase();
      const pShort = (product.shortDescription || product.description || "").toLowerCase();
      const matchesSearch =
        (product.name && product.name.toLowerCase().includes(query)) ||
        (pMat && pMat.includes(query)) ||
        (pGrade && pGrade.includes(query)) ||
        (pShort && pShort.includes(query)) ||
        (Array.isArray(product.standards) && product.standards.some((s) => typeof s === "string" && s.toLowerCase().includes(query)));

      return matchesMaterial && matchesSearch;
    });
  }, [allCategoryProducts, selectedMaterialTab, searchQuery]);

  const cleanCategorySlug = cleanMfgSlug(categorySlug);

  // Hose Pipes has its own dedicated section component — render after hooks
  if (cleanCategorySlug === "hose-pipes") {
    return <HosePipesSection onSelectMaterial={onSelectMaterial} onBackToProducts={onBackToProducts} />;
  }

  // Wire Mesh has its own dedicated section component — render after hooks
  if (cleanCategorySlug === "wire-mesh") {
    return <WireMeshSection onSelectMaterial={onSelectMaterial} onBackToProducts={onBackToProducts} />;
  }

  // Supplier Division product families render their dedicated isolated section
  const isSupplierCategory =
    cleanCategorySlug === "pipes-tubes" ||
    cleanCategorySlug === "sheets-plates" ||
    cleanCategorySlug === "rods-bars" ||
    cleanCategorySlug === "wires" ||
    cleanCategorySlug === "wire" ||
    cleanCategorySlug === "circle" ||
    cleanCategorySlug === "circles" ||
    cleanCategorySlug === "flat" ||
    cleanCategorySlug === "flats" ||
    cleanCategorySlug === "flat-bar" ||
    cleanCategorySlug === "patapatti" ||
    cleanCategorySlug === "patta-patti" ||
    cleanCategorySlug === "coil" ||
    cleanCategorySlug === "coils" ||
    cleanCategorySlug === "quile" ||
    cleanCategorySlug === "ring" ||
    cleanCategorySlug === "rings";

  if (isSupplierCategory) {
    let resolvedFamilySlug = cleanCategorySlug;
    if (cleanCategorySlug === "wire") resolvedFamilySlug = "wires";
    else if (cleanCategorySlug === "circles") resolvedFamilySlug = "circle";
    else if (cleanCategorySlug === "flats" || cleanCategorySlug === "flat-bar") resolvedFamilySlug = "flat";
    else if (cleanCategorySlug === "patta-patti") resolvedFamilySlug = "patapatti";
    else if (cleanCategorySlug === "coils" || cleanCategorySlug === "quile") resolvedFamilySlug = "coil";
    else if (cleanCategorySlug === "rings") resolvedFamilySlug = "ring";

    return (
      <SupplierFamilySection
        familySlug={resolvedFamilySlug}
        initialMaterialSlug={initialMaterialSlug || "all"}
        onSelectProduct={onSelectProduct}
        onBackToProducts={onBackToProducts}
      />
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. LARGE CATEGORY HERO SECTION (Dedicated Product BG + Glass/Blur Border) */}
      {/* ========================================================================= */}
      <ProductHeroSection
        category={category}
        totalProducts={allCategoryProducts.length}
        materialsCount={MATERIALS.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onBackToProducts={onBackToProducts}
      />

      {/* ========================================================================= */}
      {/* 2. MATERIALS AVAILABLE SECTION (CRITICAL: DUPLEX & SUPER DUPLEX SEPARATE) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 mb-12">
        
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/90">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#F36F21] uppercase tracking-wider block">
                [ METALLURGICAL ALLOY SELECTION ]
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0E2A3A]">
                Materials Available in {category.name}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono font-medium hidden sm:inline">
              Click any material card to filter
            </span>
          </div>

          {/* Grid of Individual Clickable Material Cards with Asset Image Previews */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {availableMaterials.map((mat) => {
              const isSelected = selectedMaterialTab === mat.slug;
              return (
                <button
                  key={mat.id}
                  onClick={() => {
                    setSelectedMaterialTab(mat.slug);
                    if (onSelectMaterial) onSelectMaterial(category.slug, mat.slug);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group gsap-mat-card overflow-hidden ${
                    isSelected
                      ? "bg-[#0E2A3A] text-white border-[#F36F21] ring-2 ring-[#F36F21]/40 shadow-xl scale-[1.02]"
                      : "bg-slate-50 hover:bg-slate-100/90 text-slate-800 border-slate-200/90 hover:border-[#F36F21]/50 hover:shadow-md"
                  }`}
                >
                  {/* Material Thumbnail Image Box */}
                  <div className="relative h-28 rounded-xl bg-white border border-slate-200/80 p-2 mb-3 flex items-center justify-center overflow-hidden group-hover:bg-slate-50 transition-colors">
                    {(mat.categoryImage || mat.image) ? (
                      <img
                        src={mat.categoryImage || mat.image}
                        alt={`${mat.name} ${category.name}`}
                        className="max-h-full max-w-full object-contain filter contrast-[1.02] group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <Package className="w-8 h-8 text-slate-300" />
                    )}
                    <span className="absolute top-1.5 left-1.5 text-[8px] font-mono font-bold bg-[#0E2A3A] text-white px-1.5 py-0.5 rounded">
                      {mat.shortName}
                    </span>
                  </div>

                  <div>
                    <div className={`font-extrabold text-sm leading-tight mb-1 ${
                      isSelected ? "text-white" : "text-[#0E2A3A] group-hover:text-[#F36F21]"
                    }`}>
                      {mat.name}
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>{mat.productCount > 0 ? `${mat.productCount} Products` : "Available"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                        isSelected ? "text-[#F36F21]" : "text-slate-400 group-hover:text-[#F36F21]"
                      }`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUCT TABS BAR (ALL + SEPARATE MATERIAL TABS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          
          {/* Material Filter Tabs Bar */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedMaterialTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                selectedMaterialTab === "all"
                  ? "bg-[#0E2A3A] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              ALL ({allCategoryProducts.length})
            </button>
            {MATERIALS.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterialTab(mat.slug)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedMaterialTab === mat.slug
                    ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span className={selectedMaterialTab === mat.slug ? "text-[#F36F21] font-bold" : "text-slate-700"}>
                  {mat.name}
                </span>
              </button>
            ))}
          </div>

          {(selectedMaterialTab !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedMaterialTab("all");
                setSearchQuery("");
              }}
              className="text-xs font-mono font-bold text-[#F36F21] hover:underline shrink-0"
            >
              Reset Category Filters
            </button>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRODUCT CARDS GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-sm my-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Products Matching Selection</h3>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              No products found under <strong>{category.name}</strong> for the selected material filter. Switch tab to "ALL" to view all category products.
            </p>
            <button
              onClick={() => {
                setSelectedMaterialTab("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[#1e3a4c]"
            >
              View All {category.name} Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => onSelectProduct(product.slug || product.id)}
                className={`bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 ${
                  isReducedMotion ? "" : "transform hover:-translate-y-1.5"
                }`}
              >
                {/* Top Division Accent Strip */}
                <div
                  className={`h-1.5 transition-colors duration-300 ${
                    product.division === "MANUFACTURER"
                      ? "bg-[#F36F21]"
                      : "bg-blue-600"
                  }`}
                />

                <div className="p-5 flex flex-col flex-1">
                  {/* Hero Image Box */}
                  <div className="relative h-56 rounded-xl bg-slate-50 border border-slate-100 p-4 mb-5 flex items-center justify-center overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                    {product.heroImage ? (
                      <img
                        src={product.heroImage}
                        alt={`${product.name} - Supreme Metal & Alloys`}
                        loading="lazy"
                        className={`max-h-full max-w-full w-auto h-auto object-contain filter contrast-[1.02] drop-shadow-sm transition-transform duration-500 ${
                          isReducedMotion ? "" : "group-hover:scale-105"
                        }`}
                      />
                    ) : (
                      <IndustrialSvgPlaceholder
                        title={product.name}
                        category={product.category}
                        division={product.division}
                      />
                    )}

                    {/* Division Badge Tag */}
                    <span
                      className={`absolute top-3 left-3 text-[9px] font-mono font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs z-20 ${
                        product.division === "MANUFACTURER"
                          ? "bg-[#F36F21] text-white"
                          : "bg-[#0E2A3A] text-white border border-slate-700"
                      }`}
                    >
                      {product.division}
                    </span>

                    {/* Researched Draft Tag if applicable */}
                    {product.isResearchedDraft && (
                      <span className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded shadow-xs z-20 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>RESEARCHED SPEC</span>
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-xl font-extrabold text-[#0E2A3A] mb-2 leading-snug group-hover:text-[#F36F21] transition-colors">
                    {product.name}
                  </h3>

                  {/* Material & Grade Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-bold border border-slate-200">
                      {product.material}
                    </span>
                    <span className="px-2.5 py-1 bg-amber-50 text-[#F36F21] rounded-md text-xs font-mono font-extrabold border border-amber-200">
                      {product.grade}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Card Footer CTA Button */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                  <span className="text-xs font-mono font-extrabold uppercase text-[#0E2A3A] group-hover:text-white transition-colors">
                    EXPLORE PRODUCT DETAILS
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-[#F36F21] border border-slate-200 group-hover:border-transparent flex items-center justify-center text-[#0E2A3A] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Category Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#0E2A3A] via-[#1e3a4c] to-[#0E2A3A] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Custom Fabrication & Cut-to-Length Services</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Need custom sizes or non-standard schedules for {category.name}? Submit your engineering drawing for custom mill processing.
              </p>
            </div>
          </div>
          <a
            href={`#contact?product=${encodeURIComponent(category.name)}#quote`}
            className="px-6 py-3 bg-[#F36F21] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[#d94a1f] transition-colors shrink-0 shadow-md"
          >
            Request Category RFQ
          </a>
        </div>
      </section>

    </div>
  );
}
