import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronRight,
  Globe,
  ArrowLeft,
  ArrowRight,
  Search,
  SlidersHorizontal,
  Package,
  ShieldCheck,
  Zap,
  Layers,
  Award,
  Maximize2
} from "lucide-react";
import gsap from "gsap";
import {
  getSupplierFamilyBySlug,
  getSupplierProductsByFamily,
  getSupplierMaterialsByFamily,
  SUPPLIER_FAMILIES
} from "../../data/supplierCatalog";

export default function SupplierFamilySection({
  familySlug = "pipes-tubes",
  initialMaterialSlug = "all",
  onSelectProduct,
  onBackToProducts
}) {
  const [selectedMaterialTab, setSelectedMaterialTab] = useState(initialMaterialSlug || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  // Load family metadata, products, and materials with strict isolation
  const family = getSupplierFamilyBySlug(familySlug) || {
    id: familySlug,
    slug: familySlug,
    name: familySlug.charAt(0).toUpperCase() + familySlug.slice(1).replace("-", " "),
    division: "SUPPLIER",
    shortDesc: "High-performance industrial alloys sourced from premier global mills."
  };

  const familyProducts = useMemo(() => {
    return getSupplierProductsByFamily(familySlug);
  }, [familySlug]);

  const familyMaterials = useMemo(() => {
    return getSupplierMaterialsByFamily(familySlug);
  }, [familySlug]);

  // Sync selected tab if initialMaterialSlug prop changes
  useEffect(() => {
    if (initialMaterialSlug) {
      setSelectedMaterialTab(initialMaterialSlug);
    }
  }, [initialMaterialSlug]);

  // Scroll to top on mount / family change
  useEffect(() => {
    document.title = `${family.name} | Supplier Division | Supreme Metal & Alloys`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [family]);

  // Entrance animations
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-sup-anim",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [familySlug, selectedMaterialTab]);

  // Filter products strictly within this family
  const filteredProducts = useMemo(() => {
    return familyProducts.filter((product) => {
      const matchesMaterial =
        selectedMaterialTab === "all" ||
        product.materialSlug === selectedMaterialTab;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesMaterial;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.materialName.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        (product.grades && product.grades.some((g) => g.toLowerCase().includes(query)));

      return matchesMaterial && matchesSearch;
    });
  }, [familyProducts, selectedMaterialTab, searchQuery]);

  const handleCardClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product.slug);
    } else {
      window.location.hash = `#supplier/product/${product.slug}`;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. HERO & BREADCRUMB HEADER */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0E2A3A] text-white pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden border-b border-slate-700/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a4c_1px,transparent_1px),linear-gradient(to_bottom,#1e3a4c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 font-mono mb-4 gsap-sup-anim">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={onBackToProducts} className="hover:text-blue-400 transition-colors">Products</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-400 font-semibold">Supplier Division</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white font-semibold">{family.name}</span>
          </nav>

          {/* Back Button & Division Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 gsap-sup-anim">
            <button
              onClick={onBackToProducts}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Products</span>
            </button>

            <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-widest bg-blue-500/15 px-3 py-1 rounded border border-blue-400/30 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>[ GLOBAL SUPPLIER & STOCKIST DIVISION ]</span>
            </span>
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 gsap-sup-anim">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase mb-3">
                <span>{family.name}</span>
                <span>•</span>
                <span>{familyProducts.length} METALLURGICAL ALLOY CATEGORIES</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {family.name}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal mb-6">
                Supreme Metal & Alloys is a global supplier and stockist of high-integrity {family.name.toLowerCase()} in Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys, Duplex, Super Duplex, and Titanium. Sourced from world-class ISO 9001 certified mills with complete EN 10204 3.1 & 3.2 mill test certifications.
              </p>

              {/* Key Capabilities Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>100% PMI & Mill Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-400" />
                  <span>Ready Stock & Custom Cut-to-Size</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Global Export & Fast Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Metallurgical Summary */}
            <div className="lg:col-span-4 hidden lg:block gsap-sup-anim">
              <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 shadow-xl backdrop-blur-sm">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2 font-bold">
                  SUPPLY SPECIFICATIONS SCOPE
                </span>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Materials Stocked:</span>
                    <strong className="text-white">{familyMaterials.length} Isolated Materials</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Total Products:</span>
                    <strong className="text-blue-400">{familyProducts.length} Standard Grades</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Testing Protocols:</span>
                    <strong className="text-white">Hydrostatic / UT / PMI</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Export Packing:</span>
                    <strong className="text-white">Wooden Crates / End Caps</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEARCH & MATERIAL FILTER BAR */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 gsap-sup-anim">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Material Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedMaterialTab("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all shrink-0 ${
                  selectedMaterialTab === "all"
                    ? "bg-[#0E2A3A] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                ALL ({familyProducts.length})
              </button>

              {familyMaterials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterialTab(mat.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                    selectedMaterialTab === mat.slug
                      ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A]"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent"
                  }`}
                >
                  <span className={selectedMaterialTab === mat.slug ? "text-blue-400 font-bold" : "text-slate-700"}>
                    {mat.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[240px] shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${family.name}...`}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ×
                </button>
              )}
            </div>

          </div>

          {(selectedMaterialTab !== "all" || searchQuery) && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">
                Filtered: Showing <strong>{filteredProducts.length}</strong> of {familyProducts.length} {family.name}
              </span>
              <button
                onClick={() => {
                  setSelectedMaterialTab("all");
                  setSearchQuery("");
                }}
                className="text-[#F36F21] hover:underline font-bold"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUCT CARDS GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-sm my-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No Matching Products</h3>
            <p className="text-xs text-slate-600 mb-5 font-medium">
              No products found under {family.name} matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedMaterialTab("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[#1e3a4c]"
            >
              Show All {family.name}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => handleCardClick(product)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-500/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 gsap-sup-anim"
              >
                {/* Top Blue Accent Strip */}
                <div className="h-1.5 bg-blue-600 group-hover:bg-[#F36F21] transition-colors duration-300" />

                <div className="p-5 flex flex-col flex-1">
                  {/* Hero Image Showcase */}
                  <div className="relative h-56 rounded-xl bg-slate-50 border border-slate-100 p-4 mb-4 flex items-center justify-center overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                    <img
                      src={product.image}
                      alt={`${product.name} - Supreme Metal & Alloys`}
                      loading="lazy"
                      className="max-h-full max-w-full w-auto h-auto object-contain filter contrast-[1.03] drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Division Tag */}
                    <span className="absolute top-3 left-3 text-[9px] font-mono font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs z-20 bg-[#0E2A3A] text-blue-400 border border-blue-500/30">
                      SUPPLIER DIVISION
                    </span>

                    {/* Material Tag */}
                    <span className="absolute bottom-3 right-3 text-[9px] font-mono font-bold uppercase bg-slate-900/90 text-white px-2.5 py-1 rounded border border-slate-700">
                      {product.materialName}
                    </span>
                  </div>

                  {/* Material & Title */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                      {product.materialName}
                    </span>
                    <h3 className="text-base font-extrabold text-[#0E2A3A] group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 font-normal line-clamp-2 mb-4 leading-relaxed flex-1">
                    {product.shortDescription}
                  </p>

                  {/* Key Grades Preview Badges */}
                  {product.grades && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.grades.slice(0, 3).map((grade, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-semibold"
                        >
                          {grade}
                        </span>
                      ))}
                      {product.grades.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-mono">
                          +{product.grades.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Explore Action */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                  <span className="text-xs font-mono font-extrabold uppercase text-[#0E2A3A] group-hover:text-white transition-colors">
                    EXPLORE PRODUCT DETAILS
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0E2A3A] group-hover:text-blue-400 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 4. SUPPLIER DIVISION OTHER FAMILIES NAVIGATION BAR */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#0E2A3A] text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl gsap-sup-anim">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700/80">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                SUPPLIER DIVISION DIRECTORY
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Explore Other Supplier Product Families
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {SUPPLIER_FAMILIES.length} Authorized Product Lines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPLIER_FAMILIES.map((fam, idx) => {
              const isCurrent = family.slug === fam.slug || familySlug === fam.slug;
              return (
                <a
                  key={fam.id}
                  href={`#products/category/${fam.slug}`}
                  className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isCurrent
                      ? "bg-blue-600/20 border-blue-500 shadow-md"
                      : "bg-slate-800/60 border-slate-700 hover:border-blue-400 hover:bg-slate-800"
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Supplier Line {idx + 1}</div>
                    <div className="text-sm font-bold text-white">{fam.name} ({fam.materialCount} Materials)</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
