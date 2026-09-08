import React, { useState, useMemo, useEffect } from "react";
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
  AlertCircle,
  FileSpreadsheet
} from "lucide-react";
import { productsData } from "../../data/products";

// Clean Industrial SVG Placeholder for products without verified stock photos
const IndustrialSvgPlaceholder = ({ title, category }) => (
  <div className="w-full h-full bg-gradient-to-br from-[#0E2A3A] via-[#1b3a4e] to-[#0E2A3A] rounded-xl flex flex-col items-center justify-center p-4 text-white text-center relative overflow-hidden group">
    {/* Engineering Grid Accent Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-10 pointer-events-none" />
    <div className="w-12 h-12 rounded-xl bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] mb-2.5 z-10">
      <Package className="w-6 h-6" />
    </div>
    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest z-10 mb-1">
      [{category}]
    </span>
    <span className="text-xs font-bold text-slate-200 line-clamp-1 max-w-[90%] z-10">
      {title}
    </span>
    <span className="text-[9px] font-mono text-slate-400 mt-1 z-10">
      SPECIFICATION PLACEHOLDER
    </span>
  </div>
);

export default function ProductListingPage({ onSelectProduct, activeCategoryFilter }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(activeCategoryFilter || "all");
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Sync category filter if passed via props or navigation
  useEffect(() => {
    if (activeCategoryFilter) {
      setSelectedCategory(activeCategoryFilter);
    }
  }, [activeCategoryFilter]);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update SEO Title & Meta on mount
  useEffect(() => {
    document.title = "Industrial Product Catalogue | Supreme Metal & Alloys";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore high-performance piping, stainless steel plates, industrial flanges, butt weld fittings, wire mesh, and sanitary tube fittings certified EN 10204 3.1/3.2."
      );
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Categories list from verified data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(productsData.map((p) => p.category)));
    return ["all", ...unique];
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.materialsGrades.some((g) => g.toLowerCase().includes(query)) ||
        product.standards.some((s) => s.toLowerCase().includes(query)) ||
        product.types.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-20">
      
      {/* ========================================================================= */}
      {/* HERO BANNER - Visual alignment with Home page (#0E2A3A + Accent Orange) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0E2A3A] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-700/60">
        {/* Engineering Background Grid & Radial Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a4c_1px,transparent_1px),linear-gradient(to_bottom,#1e3a4c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F36F21]/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 font-mono mb-6">
            <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F36F21] font-semibold">Products</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F36F21]/10 border border-[#F36F21]/30 text-[#F36F21] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Package className="w-3.5 h-3.5" />
              <span>[ OFFICIAL CATALOGUE & INDUSTRIAL INVENTORY ]</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              High-Yield Metals & <span className="text-[#F36F21]">Piping Infrastructure</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Explore 16 product families of certified stainless steel, duplex, superalloys, titanium, and carbon steel. All products supplied with 100% EN 10204 3.1/3.2 Mill Test Certificates.
            </p>

            {/* Search Input Bar */}
            <div className="relative max-w-2xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by grade (e.g. 316L, 2205, Inconel 625), standard (ASTM A312, ANSI B16.5), or product name..."
                  className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base text-slate-900 bg-white rounded-xl border border-slate-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F36F21] focus:border-transparent transition-all placeholder:text-slate-400 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    aria-label="Clear search query"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FILTER BAR & PRODUCT LISTING MAIN GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
        
        {/* Category Filter Chips Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200/90 mb-10">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-[#F36F21]" />
            <span>Filter By Product Category ({productsData.length} Total Families):</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "all"
                  ? productsData.length
                  : productsData.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A] scale-[1.02]"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60"
                  }`}
                >
                  <span className={isSelected ? "text-[#F36F21]" : "text-slate-500"}>
                    {cat === "all" ? "All Products" : cat}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                      isSelected
                        ? "bg-[#F36F21] text-white font-bold"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Search / Filter Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0E2A3A]">
              {selectedCategory === "all" ? "All Product Families" : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Showing {filteredProducts.length} of {productsData.length} product ranges
              {searchQuery && <span> matching "<span className="text-[#F36F21] font-bold">{searchQuery}</span>"</span>}
            </p>
          </div>

          {(selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F36F21] hover:text-[#d94a1f] underline transition-colors"
            >
              Reset Filters & Search
            </button>
          )}
        </div>

        {/* ========================================================================= */}
        {/* LARGE FORMAT PRODUCT CARDS GRID (2-3 Cols Desktop, 1 Col Mobile) */}
        {/* ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-sm my-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Matching Products Found</h3>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              We couldn't find any catalogue product matching your query. Try searching for standard grades like 316L, 2205, ASTM A312, or reset filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[#1e3a4c] transition-colors"
            >
              Reset Search & Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className={`bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 ${
                  isReducedMotion
                    ? ""
                    : "hover:-translate-y-1.5 transform"
                }`}
              >
                {/* Top Accent Strip */}
                <div className="h-1 bg-slate-200 group-hover:bg-[#F36F21] transition-colors duration-300" />

                {/* Card Header Container with Image */}
                <div className="p-5 flex flex-col flex-1">
                  
                  {/* Hero Image Box */}
                  <div className="relative h-64 rounded-xl bg-slate-50 border border-slate-100 mb-5 overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                    {product.heroImage ? (
                      <img
                        src={product.heroImage}
                        alt={`${product.name} - Supreme Metal & Alloys Catalogue`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover filter contrast-[1.02] transition-transform duration-500 ${
                          isReducedMotion ? "" : "group-hover:scale-105"
                        }`}
                      />
                    ) : (
                      <IndustrialSvgPlaceholder title={product.name} category={product.category} />
                    )}

                    {/* Badge Category Tag */}
                    <span className="absolute top-3 left-3 bg-[#0E2A3A]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-20">
                      {product.category}
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

                  {/* 1-2 Sentence Catalogue Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4 line-clamp-3">
                    {product.shortDescription}
                  </p>

                  {/* Key Grade & Specification Chips */}
                  <div className="mt-auto pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key Standard Grades:
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.materialsGrades.slice(0, 4).map((grade, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium border border-slate-200/70"
                        >
                          {grade}
                        </span>
                      ))}
                      {product.materialsGrades.length > 4 && (
                        <span className="px-2 py-0.5 bg-amber-50 text-[#F36F21] rounded text-[11px] font-mono font-bold border border-amber-200">
                          +{product.materialsGrades.length - 4} More
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Button */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                  <span className="text-xs font-mono font-extrabold uppercase text-[#0E2A3A] group-hover:text-white transition-colors">
                    VIEW DETAILS & SPECS
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

      {/* Technical Mill Certificate Quality Footer Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#0E2A3A] via-[#1e3a4c] to-[#0E2A3A] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">100% Quality Audited & Certified Materials</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Every product family supplied by Supreme Metal & Alloys is backed by EN 10204 3.1/3.2 Mill Test Certificates and third-party inspections (TUV, DNV, Bureau Veritas, Lloyd's).
              </p>
            </div>
          </div>
          <a
            href="#contact#quote"
            className="px-6 py-3 bg-[#F36F21] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[#d94a1f] transition-colors shrink-0 shadow-md"
          >
            Request Custom Quotation
          </a>
        </div>
      </section>

    </div>
  );
}
