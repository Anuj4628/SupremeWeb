import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  SlidersHorizontal,
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
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import gsap from "gsap";
import { DIVISIONS, CATEGORIES, MATERIALS, PRODUCTS } from "../../data/productCatalog";
import { normalizeCategorySlug } from "../../utils/mfgRoutes";
import heroBgImage from "../../assets/All Products/Product BG/Industrial Metals, Engineered Products & Critical Components.png";

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

export default function ProductLandingPage({ onSelectProduct, filterState }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState(filterState?.division || "all");
  const [selectedCategory, setSelectedCategory] = useState(filterState?.category || "all");
  const [selectedMaterial, setSelectedMaterial] = useState(filterState?.material || "all");
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const heroRef = useRef(null);
  const cardsGridRef = useRef(null);

  // Sync incoming filter props
  useEffect(() => {
    if (filterState) {
      if (filterState.division) setSelectedDivision(filterState.division);
      if (filterState.category) setSelectedCategory(filterState.category);
      if (filterState.material) setSelectedMaterial(filterState.material);
    }
  }, [filterState]);

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-hero-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".gsap-card-item",
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out"
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [selectedDivision, selectedCategory, selectedMaterial, searchQuery, isReducedMotion]);

  // Update SEO Document Title
  useEffect(() => {
    document.title = "Industrial Product Catalogue | Supreme Metal & Alloys";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesDivision =
        selectedDivision === "all" || product.division.toLowerCase() === selectedDivision.toLowerCase();

      const normCat = normalizeCategorySlug(selectedCategory);
      const matchesCategory =
        selectedCategory === "all" ||
        product.categorySlug === selectedCategory ||
        product.categorySlug === normCat ||
        product.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === selectedCategory ||
        product.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === normCat;

      const pMat = (product.material || product.materialName || "").toLowerCase();
      const matchesMaterial =
        selectedMaterial === "all" ||
        product.materialSlug === selectedMaterial ||
        (selectedMaterial === "duplex"
          ? product.materialSlug === "duplex"
          : product.materialSlug === selectedMaterial ||
            (pMat && pMat === selectedMaterial.toLowerCase()) ||
            (pMat && pMat.replace(/[^a-z0-9]+/g, "-") === selectedMaterial));

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesDivision && matchesCategory && matchesMaterial;

      const pGrade = (product.grade || (product.grades ? product.grades.join(" ") : "") || "").toLowerCase();
      const pShort = (product.shortDescription || product.description || "").toLowerCase();
      const pCat = (product.category || "").toLowerCase();
      const matchesSearch =
        (product.name && product.name.toLowerCase().includes(query)) ||
        (pCat && pCat.includes(query)) ||
        (pMat && pMat.includes(query)) ||
        (pGrade && pGrade.includes(query)) ||
        (pShort && pShort.includes(query)) ||
        (Array.isArray(product.standards) && product.standards.some((s) => typeof s === "string" && s.toLowerCase().includes(query)));

      return matchesDivision && matchesCategory && matchesMaterial && matchesSearch;
    });
  }, [selectedDivision, selectedCategory, selectedMaterial, searchQuery]);

  return (
    <div ref={heroRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — PURE CRISP BACKGROUND & BLUR BORDER ON DETAILS */}
      {/* ========================================================================= */}
      <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center bg-[#071722] text-white py-8 sm:py-12 lg:py-16 overflow-hidden border-b border-slate-700/80">
        {/* HERO BACKGROUND IMAGE — PURE, CRISP & CLEAR */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={heroBgImage}
            alt="Industrial Metals, Engineered Products & Critical Components"
            className="w-full h-full object-cover object-center lg:object-right filter brightness-100 contrast-100 scale-100 transition-transform duration-700 ease-out"
          />
          {/* Clean, subtle top & bottom edge transition to blend naturally into page borders */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071722]/85 via-transparent to-[#071722]/30 pointer-events-none" />
          {/* Soft directional gradient on small screens to maintain contrast */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#071722]/70 via-[#071722]/30 to-transparent pointer-events-none lg:hidden" />
        </div>

        {/* BLUR BORDER ONLY ON THE DETAILS CONTAINER */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#0E2A3A]/75 backdrop-blur-md border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-5 sm:p-7 lg:p-8 overflow-hidden">
              {/* Subtle top edge highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 font-mono mb-3.5 gsap-hero-item">
                <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#F36F21] font-semibold">Products System</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F36F21]/20 border border-[#F36F21]/40 text-[#F36F21] text-xs font-mono font-bold tracking-widest uppercase mb-3 gsap-hero-item">
                <Package className="w-3.5 h-3.5" />
                <span>[ MANUFACTURER & SUPPLIER DIVISIONS ]</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 gsap-hero-item">
                Industrial Metals, Engineered Products & <span className="text-[#F36F21]">Critical Components</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-5 font-normal gsap-hero-item drop-shadow-sm">
                Supplied globally for mission-critical infrastructure. Select a division below to browse Manufacturer (in-house forged fittings & flanges) or Supplier (mill stockist pipes, plates & bars).
              </p>

              {/* Search Bar Input */}
              <div className="pt-2 gsap-hero-item">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products by grade (316L, Nickel 200, 2205), standard (ASTM A312), or name..."
                    className="w-full pl-11 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white bg-slate-900/90 rounded-xl border border-white/20 focus:outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition-all placeholder:text-slate-400 font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIVISION SELECTOR & FILTER SYSTEM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        
        {/* Clear & Sleek Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {/* ALL PRODUCTS */}
          <button
            onClick={() => setSelectedDivision("all")}
            className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm ${
              selectedDivision === "all"
                ? "bg-[#0E2A3A] text-white border-[#F36F21] ring-2 ring-[#F36F21]/30 scale-[1.01]"
                : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
            }`}
          >
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider block text-slate-400 mb-0.5">
                COMPLETE CATALOGUE
              </span>
              <h3 className="text-base font-extrabold">All Divisions</h3>
              <p className="text-[11px] text-slate-400 font-normal">All {PRODUCTS.length} products</p>
            </div>
            <Package className={`w-6 h-6 ${selectedDivision === "all" ? "text-[#F36F21]" : "text-slate-400"}`} />
          </button>

          {/* MANUFACTURER DIVISION */}
          <button
            onClick={() => setSelectedDivision("MANUFACTURER")}
            className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm ${
              selectedDivision === "MANUFACTURER"
                ? "bg-[#0E2A3A] text-white border-[#F36F21] ring-2 ring-[#F36F21]/30 scale-[1.01]"
                : "bg-white text-slate-800 border-slate-200 hover:border-amber-400"
            }`}
          >
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider block text-[#F36F21] mb-0.5">
                A. IN-HOUSE FABRICATION
              </span>
              <h3 className="text-base font-extrabold flex items-center gap-1.5">
                <span>Manufacturer</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-normal">Fittings, Flanges & Fasteners</p>
            </div>
            <Factory className={`w-6 h-6 ${selectedDivision === "MANUFACTURER" ? "text-[#F36F21]" : "text-slate-400"}`} />
          </button>

          {/* SUPPLIER DIVISION */}
          <button
            onClick={() => setSelectedDivision("SUPPLIER")}
            className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm ${
              selectedDivision === "SUPPLIER"
                ? "bg-[#0E2A3A] text-white border-blue-400 ring-2 ring-blue-400/30 scale-[1.01]"
                : "bg-white text-slate-800 border-slate-200 hover:border-blue-400"
            }`}
          >
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider block text-blue-400 mb-0.5">
                B. GLOBAL MILL STOCKIST
              </span>
              <h3 className="text-base font-extrabold flex items-center gap-1.5">
                <span>Supplier</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-normal">Pipes, Plates, Bars & Coils</p>
            </div>
            <Globe className={`w-6 h-6 ${selectedDivision === "SUPPLIER" ? "text-blue-400" : "text-slate-400"}`} />
          </button>
        </div>

        {/* Material Filter Chips */}
        <div className="bg-white rounded-xl p-3.5 shadow-md border border-slate-200/90 mb-6">
          <div className="flex items-center gap-1.5 mb-2.5 text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#F36F21]" />
            <span>Filter By Material Category:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedMaterial("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedMaterial === "all"
                  ? "bg-[#0E2A3A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Materials
            </button>
            {MATERIALS.map((mat) => {
              const isSelected = selectedMaterial === mat.slug;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#0E2A3A] text-white shadow-xs border border-[#0E2A3A]"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span className={isSelected ? "text-[#F36F21]" : "text-slate-700"}>{mat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#0E2A3A]">
              {selectedDivision === "all"
                ? "All Product Offerings"
                : `${selectedDivision.toUpperCase()} DIVISION PRODUCTS`}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Showing {filteredProducts.length} of {PRODUCTS.length} catalogue products
              {searchQuery && <span> matching "<span className="text-[#F36F21] font-bold">{searchQuery}</span>"</span>}
            </p>
          </div>

          {(selectedDivision !== "all" || selectedCategory !== "all" || selectedMaterial !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedDivision("all");
                setSelectedCategory("all");
                setSelectedMaterial("all");
                setSearchQuery("");
              }}
              className="text-xs font-mono font-bold text-[#F36F21] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. PRODUCT CARDS GRID */}
        {/* ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center max-w-md mx-auto shadow-sm my-6">
            <Package className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No Products Found</h3>
            <p className="text-xs text-slate-600 mb-4 font-medium">
              Try adjusting your search query or reset division filters.
            </p>
            <button
              onClick={() => {
                setSelectedDivision("all");
                setSelectedCategory("all");
                setSelectedMaterial("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-lg hover:bg-[#1e3a4c]"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => onSelectProduct(product.slug || product.id)}
                className={`bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 gsap-card-item ${
                  isReducedMotion ? "" : "transform hover:-translate-y-1"
                }`}
              >
                {/* Top Division Accent Strip */}
                <div
                  className={`h-1 transition-colors duration-300 ${
                    product.division === "MANUFACTURER"
                      ? "bg-[#F36F21]"
                      : "bg-blue-600"
                  }`}
                />

                <div className="p-4 flex flex-col flex-1">
                  {/* Hero Image Box */}
                  <div className="relative h-48 rounded-lg bg-slate-50 border border-slate-100 p-3 mb-4 flex items-center justify-center overflow-hidden group-hover:bg-slate-100/60 transition-colors">
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
                      className={`absolute top-2.5 left-2.5 text-[9px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs z-20 ${
                        product.division === "MANUFACTURER"
                          ? "bg-[#F36F21] text-white"
                          : "bg-[#0E2A3A] text-white border border-slate-700"
                      }`}
                    >
                      {product.division}
                    </span>

                    {/* Researched Draft Tag */}
                    {product.isResearchedDraft && (
                      <span className="absolute bottom-2.5 right-2.5 bg-amber-500 text-slate-950 text-[8px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded shadow-xs z-20 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        <span>RESEARCHED SPEC</span>
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-lg font-extrabold text-[#0E2A3A] mb-1.5 leading-snug group-hover:text-[#F36F21] transition-colors">
                    {product.name}
                  </h3>

                  {/* Material & Grade Badges */}
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[11px] font-bold border border-slate-200">
                      {product.material}
                    </span>
                    <span className="px-2 py-0.5 bg-amber-50 text-[#F36F21] rounded text-[11px] font-mono font-extrabold border border-amber-200">
                      {product.grade}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Specification Quick Line */}
                  {product.specifications && (
                    <div className="mt-auto pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                      <span className="font-bold text-slate-700">Scope: </span>
                      {product.specifications.size || product.specifications.thickness || "Standard Specs"}
                    </div>
                  )}
                </div>

                {/* Card Footer CTA Button */}
                <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                  <span className="text-[11px] font-mono font-extrabold uppercase text-[#0E2A3A] group-hover:text-white transition-colors">
                    EXPLORE DETAILS
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-[#F36F21] border border-slate-200 group-hover:border-transparent flex items-center justify-center text-[#0E2A3A] group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Quality Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gradient-to-r from-[#0E2A3A] via-[#1e3a4c] to-[#0E2A3A] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md border border-slate-700">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold mb-0.5">100% Quality Audited & Certified Materials</h4>
              <p className="text-xs text-slate-300 font-medium">
                Every product line from Manufacturer and Supplier divisions is backed by EN 10204 3.1/3.2 Mill Test Certificates.
              </p>
            </div>
          </div>
          <a
            href="#contact#quote"
            className="px-5 py-2.5 bg-[#F36F21] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-[#d94a1f] transition-colors shrink-0 shadow-sm"
          >
            Request Quotation
          </a>
        </div>
      </section>

    </div>
  );
}
