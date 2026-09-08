import React, { useEffect, useRef } from "react";
import {
  ChevronRight,
  Factory,
  Package,
  Layers,
  Search,
  X
} from "lucide-react";
import gsap from "gsap";
import { getProductHeroBg } from "../../data/productHeroBgs";

/**
 * Standardized Product Hero Section for all Manufacturer Division Categories
 * Design updates based on client instruction:
 * 1. Background image is pure, vibrant, sharp and crystal clear (no heavy dark overlays)
 * 2. Glassmorphism blur border is placed ONLY on the details panel
 * 3. Separate image card box completely removed
 */
export default function ProductHeroSection({
  category,
  totalProducts = 0,
  materialsCount = 9,
  searchQuery = "",
  onSearchChange,
  onBackToProducts
}) {
  const heroRef = useRef(null);

  // Retrieve the dedicated Product BG image using strict category isolation mapping
  const bgImage = getProductHeroBg(category?.slug || category?.id);

  // GSAP Entrance Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero container fade
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Background image subtle reveal
      gsap.fromTo(
        ".gsap-hero-bg",
        { scale: 1.04, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 1.0, ease: "power2.out" }
      );

      // Glass details card slide and fade in
      gsap.fromTo(
        ".gsap-hero-details-card",
        { x: -25, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );

      // Staggered text items inside the details card
      gsap.fromTo(
        ".gsap-cat-text",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power2.out", delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [category?.slug]);

  if (!category) return null;

  return (
    <section
      ref={heroRef}
      className="relative min-h-[280px] sm:min-h-[440px] lg:min-h-[560px] flex items-center bg-[#071722] text-white py-6 sm:py-12 lg:py-16 overflow-hidden border-b border-slate-700/80 gsap-category-hero"
    >
      {/* ========================================================================= */}
      {/* 1. HERO BACKGROUND IMAGE — PURE, CRISP & CLEAR */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={bgImage}
          alt={`${category.name} Background`}
          className="w-full h-full object-cover object-center lg:object-right filter brightness-100 contrast-100 gsap-hero-bg scale-100 transition-transform duration-700 ease-out"
        />
        {/* Clean, subtle top & bottom edge transition to blend naturally into page borders */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071722]/85 via-transparent to-[#071722]/30 pointer-events-none" />
        {/* Soft directional gradient on small screens to maintain contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#071722]/70 via-[#071722]/30 to-transparent pointer-events-none lg:hidden" />
      </div>

      {/* ========================================================================= */}
      {/* 2. BLUR BORDER ONLY ON THE DETAILS CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-xl lg:max-w-2xl gsap-hero-details-card">
          <div className="relative rounded-xl sm:rounded-3xl bg-[#0E2A3A]/75 backdrop-blur-md border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-4 sm:p-7 lg:p-8 overflow-hidden">
            {/* Subtle top edge highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Breadcrumb Navigation (Desktop/Tablet) */}
            <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono mb-3.5 gsap-cat-text">
              <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={onBackToProducts}
                className="hover:text-[#F36F21] transition-colors focus:outline-none focus:underline"
              >
                Products
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400 font-semibold">{category.division || "MANUFACTURER"}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#F36F21] font-semibold">{category.name}</span>
            </nav>

            {/* Division Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F36F21]/20 border border-[#F36F21]/40 text-[#F36F21] text-xs font-mono font-bold tracking-widest uppercase mb-3 gsap-cat-text">
              <Factory className="w-3.5 h-3.5" />
              <span>[{category.division || "MANUFACTURER"} DIVISION — CATEGORY LANDING]</span>
            </div>

            {/* Category Title */}
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 gsap-cat-text">
              {category.name}
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-xs sm:text-base leading-relaxed mb-3 sm:mb-5 font-normal gsap-cat-text drop-shadow-sm line-clamp-2 sm:line-clamp-none">
              {category.fullDesc || category.shortDesc}
            </p>

            {/* Stats Highlights (Hidden on mobile for compact hero) */}
            <div className="hidden sm:flex flex-wrap gap-3 text-xs font-mono mb-5 gsap-cat-text">
              <div className="px-3.5 py-2 bg-slate-900/80 rounded-xl border border-white/10 flex items-center gap-2 shadow-sm">
                <Package className="w-4 h-4 text-[#F36F21]" />
                <span>Total Products: <strong className="text-white">{totalProducts} Items</strong></span>
              </div>
              <div className="px-3.5 py-2 bg-slate-900/80 rounded-xl border border-white/10 flex items-center gap-2 shadow-sm">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Materials Supported: <strong className="text-white">{materialsCount} Alloys</strong></span>
              </div>
            </div>

            {/* Search Box inside the Details Glass Panel */}
            <div className="pt-2 sm:pt-4 border-t border-white/15 gsap-cat-text">
              <label className="hidden sm:block text-[11px] font-mono font-bold text-amber-400 uppercase mb-2">
                Search Within {category.name}
              </label>
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                  placeholder="Search by grade (316L, 2205, Inconel)..."
                  className="w-full pl-10 pr-8 py-2 sm:py-2.5 bg-slate-900/90 text-xs sm:text-sm text-white rounded-xl border border-white/20 focus:outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition-all placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange && onSearchChange("")}
                    className="absolute right-2.5 p-1 text-slate-400 hover:text-white transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
