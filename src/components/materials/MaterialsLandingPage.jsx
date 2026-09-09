import React, { useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Layers,
  CheckCircle2
} from "lucide-react";
import gsap from "gsap";
import {
  MATERIALS
} from "../../data/productCatalog";

export default function MaterialsLandingPage({ onSelectMaterial }) {
  const containerRef = useRef(null);

  // Update SEO Document Title and scroll to top
  useEffect(() => {
    document.title = "Metallurgical Materials Catalogue | Supreme Metal & Alloys";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero items stagger
      gsap.fromTo(
        ".gsap-mat-hero",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }
      );

      // Stat cards reveal
      gsap.fromTo(
        ".gsap-stat-pill",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.2 }
      );

      // Material cards reveal stagger
      gsap.fromTo(
        ".gsap-material-card",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.3
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (slug) => {
    if (onSelectMaterial) {
      onSelectMaterial(slug);
    } else {
      window.location.hash = `#materials/${slug}`;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. HERO & BREADCRUMB HEADER */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0E2A3A] text-white pt-6 pb-8 sm:pt-14 sm:pb-20 overflow-hidden border-b border-slate-700/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a4c_1px,transparent_1px),linear-gradient(to_bottom,#1e3a4c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F36F21]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs (Desktop/Tablet) */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono mb-4 gsap-mat-hero">
            <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F36F21] font-semibold">Materials</span>
          </nav>

          <div className="max-w-4xl">
            <span className="hidden sm:inline-flex text-[#F36F21] font-mono text-xs font-bold uppercase tracking-widest bg-[#F36F21]/15 px-3 py-1 rounded border border-[#F36F21]/30 items-center gap-2 mb-4 gsap-mat-hero">
              <Layers className="w-3.5 h-3.5" />
              <span>METALLURGICAL ALLOY SPECIFICATIONS</span>
            </span>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-2 sm:mb-4 gsap-mat-hero">
              Advanced Alloys &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#F36F21] to-orange-500">
                Engineered Metallurgy
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed font-normal mb-3 sm:mb-8 max-w-3xl gsap-mat-hero line-clamp-2 sm:line-clamp-none">
              Explore Supreme Metal &amp; Alloys' comprehensive metallurgical inventory spanning 9 independent alloy families across international ASTM, ASME, EN, and NORSOC specifications.
            </p>

            {/* Live Certified Metrics Bar (Desktop/Tablet only) */}
            <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-slate-700/70">
              <div className="bg-slate-800/60 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60 gsap-stat-pill">
                <span className="block text-2xl font-black text-white font-mono">09</span>
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">Independent Materials</span>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60 gsap-stat-pill">
                <span className="block text-2xl font-black text-[#F36F21] font-mono">184</span>
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">Certified Products</span>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60 gsap-stat-pill">
                <span className="block text-2xl font-black text-emerald-400 font-mono">100%</span>
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">Mill Test Certified</span>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60 gsap-stat-pill">
                <span className="block text-2xl font-black text-amber-400 font-mono">3.1 / 3.2</span>
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">EN 10204 Traceable</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 9 INDEPENDENT MATERIAL SECTIONS GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        
        {/* Section Header Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200/90 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0E2A3A] text-[#F36F21] flex items-center justify-center font-mono font-bold text-sm">
              09
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0E2A3A]">
                Metallurgical Families Catalogue
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Click any material to view all genuine matching products and engineering specifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Strict 1:1 Material-Product Boundary Isolation</span>
          </div>
        </div>

        {/* 7 Material Cards (3-column Grid) - Compact with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {MATERIALS.filter((material) =>
            ["stainless-steel", "nickel", "high-alloys", "duplex", "super-duplex", "titanium", "carbon"].includes(material.slug)
          ).map((material) => (
            <div
              key={material.id}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(material.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(material.slug);
                }
              }}
              className="gsap-material-card group bg-white rounded-2xl border border-slate-200/90 hover:border-[#F36F21] shadow-xs hover:shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative text-left"
            >
              {/* Top Accent Strip with Material Color */}
              <div
                className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: material.accentColor || "#F36F21" }}
              />

              {/* Compact Material Image Preview */}
              <div className="relative h-40 sm:h-44 w-full bg-slate-100 overflow-hidden">
                {material.image ? (
                  <img
                    src={material.image}
                    alt={`${material.name} Alloy Showcase`}
                    className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                )}
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold text-white bg-[#0E2A3A]/85 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 shadow-xs">
                  [{material.number}]
                </span>
              </div>

              {/* Card Content: Title & Short Clean Description */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0E2A3A] group-hover:text-[#F36F21] transition-colors leading-tight">
                      {material.name}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#F36F21] flex items-center justify-center text-slate-400 group-hover:text-white transition-all shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 group-hover:text-slate-600 leading-relaxed line-clamp-2">
                    {material.tagline || material.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. QUALITY & TESTING ASSURANCE BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-[#0E2A3A] via-[#16364a] to-[#0E2A3A] rounded-2xl p-6 sm:p-8 text-white border border-slate-700/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
                <span>100% Traceability & Testing Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
                Need Customized Metallurgy or Mill Test Certificates?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                All raw materials and finished products supplied across the 9 material families are dispatched with EN 10204 3.1 / 3.2 inspection certificates, Positive Material Identification (PMI), ultrasonic testing, and third-party inspection approvals (Lloyds, TUV, DNV, Bureau Veritas).
              </p>
            </div>

            <a
              href="#contact#quote"
              className="shrink-0 px-6 py-3.5 bg-[#F36F21] hover:bg-[#d85d15] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center gap-2"
            >
              <span>Request MTC / RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
