import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Filter,
  Search,
  CheckCircle2,
  AlertCircle,
  Building2,
  Factory,
  Globe,
  Award
} from "lucide-react";
import gsap from "gsap";
import {
  getMaterialBySlug,
  getProductsByMaterial,
  getMaterialCategories,
  MATERIALS
} from "../../data/productCatalog";

export default function MaterialDetailPage({
  materialSlug,
  onSelectProduct,
  onBackToMaterials
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  // Retrieve material record with strict zero-leakage canonical resolver
  const material = useMemo(() => getMaterialBySlug(materialSlug), [materialSlug]);

  // Retrieve all products matching this exact material
  const allMaterialProducts = useMemo(() => {
    if (!material) return [];
    return getProductsByMaterial(material.slug);
  }, [material]);

  // Distinct categories available within this material
  const availableCategories = useMemo(() => {
    if (!material) return [];
    return getMaterialCategories(material.slug);
  }, [material]);

  // Reset local filters whenever materialSlug changes
  useEffect(() => {
    setSelectedCategory("all");
    setSelectedGrade("all");
    setSearchQuery("");
  }, [materialSlug]);

  // Update SEO Document Title and scroll to top
  useEffect(() => {
    if (material) {
      document.title = `${material.name} Products & Alloys | Supreme Metal & Alloys`;
    } else {
      document.title = "Material Not Found | Supreme Metal & Alloys";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [material]);

  // GSAP Entrance Animations
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current || !material) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-mat-anim",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [material, selectedCategory, selectedGrade]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return allMaterialProducts.filter((product) => {
      // 1. Category Filter
      const pCatSlug = product.categorySlug || product.category?.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const matchesCategory =
        selectedCategory === "all" ||
        pCatSlug === selectedCategory ||
        product.category === selectedCategory;

      // 2. Grade Filter
      let matchesGrade = true;
      if (selectedGrade !== "all") {
        const cleanGrade = selectedGrade.toLowerCase();
        const pGrade = (product.grade || (Array.isArray(product.grades) ? product.grades.join(" ") : "") || "").toLowerCase();
        matchesGrade = pGrade.includes(cleanGrade);
      }

      // 3. Search Query Filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory && matchesGrade;

      const pName = (product.name || product.title || "").toLowerCase();
      const pCat = (product.category || "").toLowerCase();
      const pShort = (product.shortDescription || product.overview || "").toLowerCase();
      const pGrades = (Array.isArray(product.grades) ? product.grades.join(" ") : product.grade || "").toLowerCase();

      const matchesSearch =
        pName.includes(query) ||
        pCat.includes(query) ||
        pShort.includes(query) ||
        pGrades.includes(query);

      return matchesCategory && matchesGrade && matchesSearch;
    });
  }, [allMaterialProducts, selectedCategory, selectedGrade, searchQuery]);

  const handleProductCardClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product.slug || product.id);
    } else {
      window.location.hash = `#products/detail/${product.slug || product.id}`;
    }
  };

  const handleBack = () => {
    if (onBackToMaterials) {
      onBackToMaterials();
    } else {
      window.location.hash = "#materials";
    }
  };

  // =========================================================================
  // NOT FOUND STATE (Rule #12: Strictly no silent fallback to unrelated material)
  // =========================================================================
  if (!material) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800 font-sans antialiased">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-slate-200/90 p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F36F21] bg-orange-50 px-3 py-1 rounded border border-orange-200 inline-block mb-2">
            [ HTTP 404 — INVALID MATERIAL ]
          </span>

          <h2 className="text-2xl font-black text-[#0E2A3A] mb-2">
            Material Not Found
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            The requested metallurgical material <code className="bg-slate-100 text-[#0E2A3A] px-1.5 py-0.5 rounded font-mono font-bold">{materialSlug}</code> does not exist in the Supreme Metal & Alloys inventory or the route is invalid.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleBack}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#0E2A3A] hover:bg-[#16364a] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Materials</span>
            </button>
            <a
              href="#products"
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all border border-slate-200 flex items-center justify-center"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER AREA */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0E2A3A] text-white pt-5 pb-8 sm:pt-12 sm:pb-18 overflow-hidden border-b border-slate-700/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a4c_1px,transparent_1px),linear-gradient(to_bottom,#1e3a4c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: material.accentColor || "#F36F21" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs (Desktop/Tablet) */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono mb-4 gsap-mat-anim">
            <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={handleBack} className="hover:text-[#F36F21] transition-colors">Materials</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white font-semibold">{material.name}</span>
          </nav>

          {/* Back Action & Family Tag */}
          <div className="flex items-center justify-between gap-3 mb-3 sm:mb-6 gsap-mat-anim">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-[#F36F21] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Materials</span>
            </button>

            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#F36F21] bg-[#F36F21]/15 px-2.5 sm:px-3 py-1 rounded border border-[#F36F21]/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>[ FAMILY {material.number} ]</span>
            </span>
          </div>

          {/* Hero Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1 sm:mb-2 gsap-mat-anim">
                <span className="text-xl sm:text-3xl font-mono font-black text-[#F36F21]">
                  {material.number}.
                </span>
                <h1 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
                  {material.name}
                </h1>
              </div>

              <p className="text-amber-400 font-mono text-[11px] sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-4 gsap-mat-anim">
                {material.tagline}
              </p>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal mb-3 sm:mb-6 max-w-2xl gsap-mat-anim line-clamp-2 sm:line-clamp-none">
                {material.description}
              </p>

              {/* Supported Key Grades Quick Filter Bar (Desktop/Tablet only) */}
              <div className="hidden sm:block pt-3 border-t border-slate-700/80 gsap-mat-anim">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Select Grade Specification to Filter:
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setSelectedGrade("all")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedGrade === "all"
                        ? "bg-[#F36F21] text-white shadow-xs"
                        : "bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
                    }`}
                  >
                    All Grades ({allMaterialProducts.length})
                  </button>
                  {material.grades.map((grade, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGrade(grade === selectedGrade ? "all" : grade)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        selectedGrade === grade
                          ? "bg-[#F36F21] text-white font-bold shadow-xs"
                          : "bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Technical Highlights */}
            <div className="lg:col-span-4 gsap-mat-anim">
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 border border-slate-700/80 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/70 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase">
                    METALLURGY PROFILE
                  </span>
                  <span className="text-xs font-mono font-bold text-[#F36F21] bg-orange-500/20 px-2 py-0.5 rounded border border-orange-400/30">
                    {allMaterialProducts.length} Products
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-700/40">
                    <span className="text-slate-400">Material Density:</span>
                    <span className="text-white font-bold">{material.density}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/40">
                    <span className="text-slate-400">Yield Strength (σy):</span>
                    <span className="text-white font-bold">{material.yieldStrength}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/40">
                    <span className="text-slate-400">Primary Standards:</span>
                    <span className="text-white font-bold truncate max-w-[60%] text-right">
                      {material.standards.slice(0, 3).join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Certification:</span>
                    <span className="text-emerald-400 font-bold">EN 10204 3.1 / 3.2</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/70 text-[11px] text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine Certified Stock Guaranteed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SUB-FILTER & CATEGORY SELECTOR TOOLBAR */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-4 sm:p-5">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${material.name} products...`}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F36F21]/40 focus:border-[#F36F21]"
              />
            </div>

            {/* Results Count & Clear Button */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono font-bold text-slate-600">
                Showing <strong className="text-[#0E2A3A]">{filteredProducts.length}</strong> of {allMaterialProducts.length} Products
              </span>

              {(selectedCategory !== "all" || selectedGrade !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedGrade("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-mono font-bold text-[#F36F21] hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs Filter */}
          <div className="pt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Category:
            </span>

            <button
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#0E2A3A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories ({allMaterialProducts.length})
            </button>

            {availableCategories.map((cat) => {
              const catCount = allMaterialProducts.filter(
                (p) => (p.categorySlug || p.category?.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === cat.slug
              ).length;

              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`shrink-0 px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.slug
                      ? "bg-[#0E2A3A] text-white font-bold shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] opacity-75 font-normal">({catCount})</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUCT CARDS GRID (100% Deterministic Image & Route Mapping) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12 shadow-sm">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#0E2A3A] mb-1">
              No Matching Products Found
            </h3>
            <p className="text-xs text-slate-600 mb-5 font-medium">
              No {material.name} products match your current category or search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedGrade("all");
                setSearchQuery("");
              }}
              className="px-4 py-2.5 bg-[#0E2A3A] hover:bg-[#16364a] text-white text-xs font-mono font-bold uppercase rounded-xl transition-all shadow-md"
            >
              Show All {material.name} Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const productImage = product.image || product.heroImage;
              const isSupplier = product.division === "SUPPLIER";

              return (
                <article
                  key={product.id || product.slug}
                  onClick={() => handleProductCardClick(product)}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  {/* Top Division Strip */}
                  <div
                    className={`h-1.5 w-full transition-all duration-300 group-hover:h-2 ${
                      isSupplier ? "bg-blue-600" : "bg-[#F36F21]"
                    }`}
                  />

                  <div className="p-5 flex flex-col flex-1">
                    
                    {/* Header: Category Badge & Division Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0E2A3A] bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                        {product.category}
                      </span>

                      <span
                        className={`text-[9px] font-mono font-extrabold uppercase tracking-widest px-2 py-0.5 rounded border flex items-center gap-1 ${
                          isSupplier
                            ? "text-blue-700 bg-blue-50 border-blue-200"
                            : "text-[#F36F21] bg-orange-50 border-orange-200"
                        }`}
                      >
                        {isSupplier ? <Globe className="w-3 h-3" /> : <Factory className="w-3 h-3" />}
                        <span>{product.division}</span>
                      </span>
                    </div>

                    {/* Exact Product Image Showcase */}
                    <div className="relative h-48 rounded-xl bg-gradient-to-b from-slate-50 via-white to-slate-100/50 border border-slate-200/60 p-3 mb-4 flex items-center justify-center overflow-hidden shadow-inner">
                      {productImage ? (
                        <img
                          src={productImage}
                          alt={product.name || product.title}
                          className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <Package className="w-12 h-12 text-slate-300" />
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base sm:text-lg font-black text-[#0E2A3A] mb-2 group-hover:text-[#F36F21] transition-colors leading-snug">
                      {product.name || product.title}
                    </h3>

                    {/* Grade Chip */}
                    {(product.grade || (Array.isArray(product.grades) && product.grades.length > 0)) && (
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        <span className="text-[11px] font-mono font-medium text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 line-clamp-1">
                          Grade: {product.grade || product.grades.slice(0, 3).join(", ")}
                        </span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4 flex-1">
                      {product.shortDescription || product.overview || product.description}
                    </p>

                    {/* Standards Highlight */}
                    {Array.isArray(product.standards) && product.standards.length > 0 && (
                      <div className="text-[10px] font-mono text-slate-400 line-clamp-1 border-t border-slate-100 pt-2">
                        <span>Standards: {product.standards.slice(0, 2).join(", ")}</span>
                      </div>
                    )}

                  </div>

                  {/* Card Bottom Action */}
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                    <span className="text-xs font-mono font-bold text-[#0E2A3A] group-hover:text-white transition-colors">
                      VIEW SPECIFICATIONS
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#F36F21] group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </section>

      {/* ========================================================================= */}
      {/* 4. OTHER MATERIALS DIRECTORY BAR */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base font-extrabold text-[#0E2A3A]">
              Explore Other Metallurgical Families
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Browse our other 8 independent material inventories
            </p>
          </div>
          <button
            onClick={handleBack}
            className="text-xs font-mono font-bold text-[#F36F21] hover:underline flex items-center gap-1"
          >
            <span>All 9 Materials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {MATERIALS.filter((m) => m.slug !== material.slug).map((m) => (
            <button
              key={m.id}
              onClick={() => {
                window.location.hash = `#materials/${m.slug}`;
              }}
              className="p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#F36F21]/60 hover:shadow-md transition-all text-left group"
            >
              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-0.5">
                {m.number}
              </span>
              <span className="text-xs font-bold text-[#0E2A3A] group-hover:text-[#F36F21] transition-colors line-clamp-1">
                {m.name}
              </span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}
