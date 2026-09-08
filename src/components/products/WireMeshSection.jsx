import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Factory,
  Search,
  X,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
  Info
} from "lucide-react";
import gsap from "gsap";
import { WIRE_MESH_MATERIALS } from "../../data/wireMeshData";
import ProductHeroSection from "./ProductHeroSection";

export default function WireMeshSection({ onSelectMaterial, onBackToProducts }) {
  const [selectedMaterialTab, setSelectedMaterialTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const containerRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update document title & scroll to top
  useEffect(() => {
    document.title = "Wire Mesh | Supreme Metal & Alloys";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // GSAP Entrance Animations matching CategoryPage and HosePipesSection
  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-category-hero",
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".gsap-cat-text",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".gsap-mat-card",
        { y: 35, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".gsap-prod-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.35 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isReducedMotion, selectedMaterialTab]);

  // Strict filtering: Wire Mesh products by selectedMaterialTab & searchQuery
  const filteredProducts = useMemo(() => {
    return WIRE_MESH_MATERIALS.filter((product) => {
      const matchesMaterial =
        selectedMaterialTab === "all" ||
        product.slug === selectedMaterialTab ||
        product.materialId === selectedMaterialTab;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesMaterial;

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.materialName.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.grades.some((g) => g.toLowerCase().includes(q)) ||
        product.weaveTypes.some((w) => w.toLowerCase().includes(q));

      return matchesMaterial && matchesSearch;
    });
  }, [selectedMaterialTab, searchQuery]);

  const handleProductClick = (product) => {
    if (onSelectMaterial) {
      onSelectMaterial("wire-mesh", product.slug);
    } else {
      window.location.hash = `#wire-mesh/${product.slug}-manufactured-in-mumbai`;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. LARGE CATEGORY HERO SECTION (Dedicated Product BG + Glass/Blur Border) */}
      {/* ========================================================================= */}
      <ProductHeroSection
        category={{
          name: "Wire Mesh",
          slug: "wire-mesh",
          division: "MANUFACTURER",
          fullDesc: "Precision-woven, welded, and crimped industrial wire mesh screens manufactured in high-grade stainless steel, high-tensile carbon steel, nickel, duplex, and exotic alloys for high-efficiency filtration, sieving, and solid-liquid separation."
        }}
        totalProducts={WIRE_MESH_MATERIALS.length}
        materialsCount={WIRE_MESH_MATERIALS.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onBackToProducts={onBackToProducts}
      />

      {/* ========================================================================= */}
      {/* 2. MATERIALS AVAILABLE IN WIRE MESH SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 mb-12">
        
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/90">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#F36F21] uppercase tracking-wider block">
                [ METALLURGICAL ALLOY SELECTION ]
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0E2A3A]">
                MATERIALS AVAILABLE IN WIRE MESH
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono font-medium hidden sm:inline">
              Click any material card to filter
            </span>
          </div>

          {/* Grid of Individual Clickable Material Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {WIRE_MESH_MATERIALS.map((mat) => {
              const isSelected = selectedMaterialTab === mat.slug;
              return (
                <button
                  key={mat.id}
                  onClick={() => {
                    setSelectedMaterialTab(mat.slug);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group gsap-mat-card overflow-hidden ${
                    isSelected
                      ? "bg-[#0E2A3A] text-white border-[#F36F21] ring-2 ring-[#F36F21]/40 shadow-xl scale-[1.02]"
                      : "bg-slate-50 hover:bg-slate-100/90 text-slate-800 border-slate-200/90 hover:border-[#F36F21]/50 hover:shadow-md"
                  }`}
                >
                  {/* Thumbnail Box */}
                  <div className="relative h-32 rounded-xl bg-white border border-slate-200/80 mb-3 overflow-hidden group-hover:bg-slate-50 transition-colors">
                    <img
                      src={mat.image}
                      alt={`${mat.materialName} Wire Mesh`}
                      decoding="async"
                      className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-1.5 left-1.5 text-[8px] font-mono font-bold bg-[#0E2A3A] text-white px-1.5 py-0.5 rounded">
                      {mat.materialName}
                    </span>
                  </div>

                  <div>
                    <div className={`font-extrabold text-sm leading-tight mb-1 ${
                      isSelected ? "text-white" : "text-[#0E2A3A] group-hover:text-[#F36F21]"
                    }`}>
                      {mat.materialName}
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>1 Product</span>
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
      {/* 3. PRODUCT TABS BAR (ALL + 9 SEPARATE MATERIAL TABS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedMaterialTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                selectedMaterialTab === "all"
                  ? "bg-[#0E2A3A] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              ALL ({WIRE_MESH_MATERIALS.length})
            </button>
            {WIRE_MESH_MATERIALS.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterialTab(mat.slug)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedMaterialTab === mat.slug
                    ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span className={selectedMaterialTab === mat.slug ? "text-[#F36F21] font-bold uppercase" : "text-slate-700 uppercase"}>
                  {mat.materialName}
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
              No Wire Mesh found for the selected material filter. Switch tab to "ALL" to view all Wire Mesh products.
            </p>
            <button
              onClick={() => {
                setSelectedMaterialTab("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[#1e3a4c]"
            >
              View All Wire Mesh Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => handleProductClick(product)}
                className={`bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 gsap-prod-card ${
                  isReducedMotion ? "" : "transform hover:-translate-y-1.5"
                }`}
              >
                {/* Top Division Accent Strip */}
                <div className="h-1.5 bg-[#F36F21] transition-colors duration-300" />

                <div className="p-5 flex flex-col flex-1">
                  {/* Hero Image Box */}
                  <div className="relative h-64 rounded-xl bg-slate-50 border border-slate-100 mb-5 overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                    <img
                      src={product.image}
                      alt={`${product.name} - Supreme Metal & Alloys`}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover filter contrast-[1.02] transition-transform duration-500 ${
                        isReducedMotion ? "" : "group-hover:scale-105"
                      }`}
                    />

                    {/* Division Badge Tag */}
                    <span className="absolute top-3 left-3 text-[9px] font-mono font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs z-20 bg-[#F36F21] text-white">
                      MANUFACTURER
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-xl font-extrabold text-[#0E2A3A] mb-2 leading-snug group-hover:text-[#F36F21] transition-colors">
                    {product.name}
                  </h3>

                  {/* Material & Grade Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-bold border border-slate-200">
                      {product.materialName}
                    </span>
                    <span className="px-2.5 py-1 bg-amber-50 text-[#F36F21] rounded-md text-xs font-mono font-extrabold border border-amber-200">
                      {product.grades[0]}
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
              <h4 className="text-lg font-bold mb-1">Custom Slitting, Cut-to-Size & Disc Stamping Services</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Need circular wire mesh discs, pleated filter packs, extruder screens, or edge-bound vibrating shaker cloths? We fabricate custom assemblies per your drawing.
              </p>
            </div>
          </div>
          <a
            href="#contact?product=Wire%20Mesh#quote"
            className="px-6 py-3 bg-[#F36F21] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[#d94a1f] transition-colors shrink-0 shadow-md"
          >
            Request Wire Mesh RFQ
          </a>
        </div>
      </section>

    </div>
  );
}
