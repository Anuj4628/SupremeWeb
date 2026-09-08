import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Layers,
  Thermometer,
  Gauge,
  CheckCircle2
} from "lucide-react";
import { getAllIndustries } from "../../data/industryData";

export default function IndustriesLandingPage({ onSelectIndustry, onBackToHome }) {
  const containerRef = useRef(null);
  const industries = getAllIndustries();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Industries & Critical Sectors | Supreme Metal & Alloys";
  }, []);

  // GSAP Cinematic Entrance Animations with Cleanup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Header Fade & Slide
      gsap.fromTo(
        ".gsap-ind-header",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Industry Cards Staggered Reveal
      gsap.fromTo(
        ".gsap-ind-card",
        { opacity: 0, y: 45, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        }
      );

      // Capability Badges Entrance
      gsap.fromTo(
        ".gsap-ind-badge",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.5)",
          delay: 0.4
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (slug) => {
    if (onSelectIndustry) {
      onSelectIndustry(slug);
    } else {
      window.location.hash = `#industries/${slug}`;
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-[#FAFBFD] font-sans text-slate-800 pt-24 sm:pt-28 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* BREADCRUMBS & SECTION IDENTIFIER */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6 sm:mb-8">
          <button
            onClick={() => (onBackToHome ? onBackToHome() : (window.location.hash = "#home"))}
            className="hover:text-[#F36F21] transition-colors"
          >
            HOME
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#F36F21] font-bold">INDUSTRIES</span>
        </div>

        {/* ========================================================================= */}
        {/* HERO HEADER */}
        {/* ========================================================================= */}
        <div className="gsap-ind-header text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 mb-3 font-mono">
            [MISSION-CRITICAL APPLICATION DOMAINS]
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E2A3A] tracking-tight leading-[1.1] mb-5">
            Serving Global <span className="text-[#D94A1F]">Mission-Critical Sectors</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
            High-integrity metallurgical supplies engineered to endure extreme thermal cycling, severe cryogenic stresses, aggressive sour gas environments, and deepsea chloride pitting.
          </p>

          {/* Technical Credentials Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-slate-200/90 max-w-4xl mx-auto text-left">
            <div className="gsap-ind-badge p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-[#F36F21] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  DOMAINS
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#0E2A3A]">6 Sectors</div>
              <div className="text-[11px] text-slate-500 font-medium">Authoritative Industry Focus</div>
            </div>

            <div className="gsap-ind-badge p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  MTC AUDIT
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#0E2A3A]">EN 10204</div>
              <div className="text-[11px] text-slate-500 font-medium">3.1 & 3.2 Certified Mill Heats</div>
            </div>

            <div className="gsap-ind-badge p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <Thermometer className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  TEMPERATURE
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#0E2A3A]">-196° to 1,200°C</div>
              <div className="text-[11px] text-slate-500 font-medium">Cryogenic to Creep Service</div>
            </div>

            <div className="gsap-ind-badge p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-cyan-600 mb-1">
                <Gauge className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  PRESSURE
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#0E2A3A]">Class 2500+</div>
              <div className="text-[11px] text-slate-500 font-medium">Subsea & Boiler Hydro Testing</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6 INDUSTRY EDITORIAL SHOWCASE CARDS (EXACT HOMEPAGE ASSETS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {industries.map((ind) => {
            const IconComp = ind.icon;

            return (
              <div
                key={ind.slug}
                onClick={() => handleCardClick(ind.slug)}
                className="gsap-ind-card group relative bg-[#0E2A3A] rounded-2xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Showcase Container */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Cinematic Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A3A] via-[#0E2A3A]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                  
                  {/* Top Sector Number & Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-xs font-mono font-bold text-amber-300 bg-[#0E2A3A]/90 px-2.5 py-1 rounded-md border border-amber-400/40 backdrop-blur-xs">
                      SECTOR {ind.number} OF 06
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#0E2A3A]/90 border border-slate-700 flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Operational Temperature Badge */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-black/50 px-2 py-0.5 rounded border border-amber-500/30">
                      {ind.technicalHighlights?.temperatureRange}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs font-mono text-slate-300 font-bold tracking-wide uppercase mb-3 text-[#F36F21]">
                      {ind.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                      {ind.overview}
                    </p>

                    {/* Operational Demands Bullet Highlights */}
                    <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                        KEY ENVIRONMENT DEMANDS:
                      </span>
                      {ind.operatingConditions.slice(0, 2).map((demand, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F36F21] shrink-0 mt-1.5" />
                          <span className="line-clamp-1">{demand}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 group-hover:text-white transition-colors">
                      EXPLORE SPECIFICATIONS
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:bg-[#F36F21] group-hover:border-[#F36F21] transition-all transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* QUALITY & COMPLIANCE VERIFICATION BANNER */}
        {/* ========================================================================= */}
        <div className="bg-[#0E2A3A] rounded-2xl border border-slate-800 p-6 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md border border-white/15 inline-block mb-3 font-mono">
                [RIGOROUS METALLURGY PROTOCOL]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight mb-2">
                Need Tailored Metallurgy for a Mission-Critical Tender?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Supreme provides custom cutting, non-destructive NDT verification (PMI, Ultrasonic, Hydrostatic, Dye Penetrant), and certified EN 10204 3.1 & 3.2 documentation for defense, nuclear, and offshore project contractors.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="#contact#quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F36F21] to-[#D92B20] hover:from-[#D92B20] hover:to-[#B91F17] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md shadow-[#F36F21]/20 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Request Sector RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
