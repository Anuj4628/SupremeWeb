import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Thermometer,
  Gauge,
  CheckCircle2,
  FileText,
  Layers,
  Sparkles,
  AlertTriangle,
  Send,
  Building2,
  Home
} from "lucide-react";
import {
  getIndustryBySlug,
  getAllIndustries,
  getRelevantProductsForIndustry
} from "../../data/industryData";
import { getMaterialBySlug } from "../../data/productCatalog";

export default function IndustryDetailPage({
  industrySlug,
  onSelectIndustry,
  onSelectProduct,
  onSelectMaterial,
  onBackToIndustries
}) {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);

  // Authoritative deterministic industry record
  const industry = getIndustryBySlug(industrySlug);
  const allIndustries = getAllIndustries();

  // Scroll to top and set document title on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (industry) {
      document.title = `${industry.title} | Supreme Metal & Alloys`;
    } else {
      document.title = "Industry Not Found | Supreme Metal & Alloys";
    }
  }, [industry, industrySlug]);

  // High-End GSAP Entrance Animations with Guaranteed Cleanup
  useEffect(() => {
    if (!industry || !containerRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Cinematic Hero Image Reveal (Clip-path + Scale)
      gsap.fromTo(
        ".gsap-hero-image-box",
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", scale: 1.08 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.1,
          ease: "power3.out"
        }
      );

      // 2. Hero Typography & Badge Stagger
      gsap.fromTo(
        ".gsap-hero-text",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.2
        }
      );

      // 3. Technical Highlight Metric Cards
      gsap.fromTo(
        ".gsap-spec-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.4
        }
      );

      // 4. Section Reveals
      gsap.fromTo(
        ".gsap-section-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [industrySlug, industry]);

  // STRICT RULE 29: NEVER SILENTLY FALL BACK
  if (!industry) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center bg-[#FAFBFD] font-sans px-4 py-24">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#D94A1F] border border-amber-200 flex items-center justify-center mx-auto mb-5">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-mono font-bold text-[#D94A1F] uppercase tracking-widest block mb-2">
            [404: SECTOR DOMAIN NOT RECOGNIZED]
          </span>
          <h2 className="text-2xl font-extrabold text-[#0E2A3A] mb-3">
            Industry Sector Not Found
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
            The requested industrial domain <span className="font-mono text-slate-800 font-bold">"{industrySlug}"</span> is not one of our 6 verified mission-critical application domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                if (onBackToIndustries) onBackToIndustries();
                else window.location.hash = "#industries";
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#0E2A3A] hover:bg-[#F36F21] text-white px-5 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>EXPLORE ALL 6 INDUSTRIES</span>
            </button>
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all"
            >
              <Home className="w-4 h-4" />
              <span>RETURN HOME</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Adjacent Industries for Quick Navigation
  const currentIndex = allIndustries.findIndex((ind) => ind.slug === industry.slug);
  const prevIndustry = allIndustries[(currentIndex - 1 + allIndustries.length) % allIndustries.length];
  const nextIndustry = allIndustries[(currentIndex + 1) % allIndustries.length];

  // Dynamic Relevant Products Matching Industry Profile
  const relevantProducts = getRelevantProductsForIndustry(industry.slug, 6);

  const handleNavigateIndustry = (slug) => {
    if (onSelectIndustry) {
      onSelectIndustry(slug);
    } else {
      window.location.hash = `#industries/${slug}`;
    }
  };

  const handleProductClick = (slug) => {
    if (onSelectProduct) {
      onSelectProduct(slug);
    } else {
      window.location.hash = `#products/detail/${slug}`;
    }
  };

  const handleMaterialClick = (matSlug) => {
    if (onSelectMaterial) {
      onSelectMaterial(matSlug);
    } else {
      window.location.hash = `#materials/${matSlug}`;
    }
  };

  const IconComp = industry.icon;

  return (
    <div ref={containerRef} className="w-full bg-[#FAFBFD] font-sans text-slate-800 pt-24 sm:pt-28 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* BREADCRUMBS */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6 sm:mb-8">
          <a href="#home" className="hover:text-[#F36F21] transition-colors">
            HOME
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => {
              if (onBackToIndustries) onBackToIndustries();
              else window.location.hash = "#industries";
            }}
            className="hover:text-[#F36F21] transition-colors"
          >
            INDUSTRIES
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#F36F21] font-bold uppercase">{industry.title}</span>
        </div>

        {/* ========================================================================= */}
        {/* CINEMATIC HERO SECTION */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0E2A3A] border border-slate-800 shadow-2xl mb-12 sm:mb-16">
          {/* Top Decorative Gradient Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#F36F21] via-amber-400 to-cyan-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Side: Editorial Typography & Metadata */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10">
              <div>
                <div className="gsap-hero-text flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-extrabold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-md">
                    SECTOR {industry.number} OF 06
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    [MISSION-CRITICAL APPLICATION]
                  </span>
                </div>

                <h1 className="gsap-hero-text text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                  {industry.title}
                </h1>

                <p className="gsap-hero-text text-sm sm:text-base font-mono font-bold text-[#F36F21] uppercase tracking-wide mb-5">
                  {industry.tagline}
                </p>

                <p className="gsap-hero-text text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-2xl">
                  {industry.overview}
                </p>
              </div>

              {/* Bottom Quick Spec Strip */}
              <div className="gsap-hero-text pt-6 border-t border-slate-700/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">TEMPERATURE</span>
                  <span className="text-amber-300 font-bold text-xs">{industry.technicalHighlights?.temperatureRange}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">PRESSURE</span>
                  <span className="text-white font-bold text-xs">{industry.technicalHighlights?.pressureRating}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">INSPECTION</span>
                  <span className="text-emerald-400 font-bold text-xs">EN 10204 3.1 & 3.2</span>
                </div>
              </div>
            </div>

            {/* Right Side: Exact Authoritative Image with Mask Reveal */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-900">
              <div className="gsap-hero-image-box w-full h-full relative">
                <img
                  ref={heroImageRef}
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A3A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0E2A3A] lg:via-transparent lg:to-transparent opacity-80" />
              </div>

              {/* Floating Sector Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-[#0E2A3A]/90 backdrop-blur-xs border border-amber-400/40 px-3 py-1.5 rounded-lg flex items-center gap-2">
                <IconComp className="w-4 h-4 text-[#F36F21]" />
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                  CERTIFIED SECTOR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TECHNICAL SPECIFICATIONS & OPERATING ENVIRONMENT */}
        {/* ========================================================================= */}
        <div className="gsap-section-reveal mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200 font-mono">
              [METALLURGICAL RIGOR]
            </span>
            <span className="text-xs font-mono text-slate-400">• Severe Operating Environment & Engineering Challenges</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Operating Conditions Demands */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0E2A3A] tracking-tight mb-4 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#F36F21]" />
                <span>Operating Stress & Environmental Demands</span>
              </h3>
              <div className="space-y-3.5">
                {industry.operatingConditions.map((cond, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-md bg-amber-50 text-[#F36F21] border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[11px] font-bold">
                      {idx + 1}
                    </div>
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Highlights & Certified Compliance */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0E2A3A] tracking-tight mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Quality Protocols & Testing Clearance</span>
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-slate-400 block font-bold mb-1">GOVERNING DESIGN STANDARDS:</span>
                    <span className="text-[#0E2A3A] font-bold text-sm">{industry.technicalHighlights?.standards}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-slate-400 block font-bold mb-1">NON-DESTRUCTIVE TESTING (NDT):</span>
                    <span className="text-slate-700 font-bold text-sm leading-snug">{industry.technicalHighlights?.qualityTesting}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-slate-400 block font-bold mb-1">MATERIAL TRACEABILITY:</span>
                    <span className="text-emerald-700 font-bold text-sm">EN 10204 3.1 & 3.2 3rd Party Inspection Clearance</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>FULL HEAT TRACEABILITY GUARANTEED</span>
                <span className="text-emerald-600 font-bold">100% PMI SPECTRO</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RECOMMENDED MATERIALS & ALLOY GRADES (INTERACTIVE) */}
        {/* ========================================================================= */}
        <div className="gsap-section-reveal mb-14 sm:mb-16">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200 font-mono">
                [RECOMMENDED ALLOY MATRICES]
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0E2A3A] tracking-tight mt-1">
                Engineered Metallurgy for {industry.shortTitle}
              </h3>
            </div>
            <a
              href="#materials"
              className="text-xs font-mono font-bold text-[#F36F21] hover:text-[#0E2A3A] transition-colors hidden sm:flex items-center gap-1"
            >
              <span>All 9 Materials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.applicableMaterials.map((matSlug) => {
              const mat = getMaterialBySlug(matSlug);
              if (!mat) return null;

              return (
                <div
                  key={mat.slug}
                  onClick={() => handleMaterialClick(mat.slug)}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-5 hover:border-[#F36F21] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#F36F21]">
                        [{mat.number}]
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#F36F21] transition-colors flex items-center gap-1 font-bold">
                        EXPLORE →
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-[#0E2A3A] group-hover:text-[#F36F21] transition-colors mb-1">
                      {mat.name}
                    </h4>

                    <p className="text-xs text-slate-500 leading-snug line-clamp-2 mb-3">
                      {mat.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {mat.grades?.slice(0, 3).map((g, gIdx) => (
                        <span key={gIdx} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Density: {mat.density}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* KEY COMPONENT APPLICATIONS */}
        {/* ========================================================================= */}
        <div className="gsap-section-reveal mb-14 sm:mb-16">
          <div className="bg-[#0E2A3A] rounded-2xl border border-slate-800 p-6 sm:p-10 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md border border-white/15 font-mono">
                [COMPONENT FABRICATION SCOPE]
              </span>
              <span className="text-xs font-mono text-slate-400">• Certified Finished Assemblies</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">
              Critical Components Supplied for {industry.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.keyApplications.map((app, aIdx) => (
                <div
                  key={aIdx}
                  className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-[#F36F21]/60 transition-all flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[#F36F21] text-white flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RELEVANT APPLICABLE PRODUCTS (DYNAMIC CATALOG LINKAGE) */}
        {/* ========================================================================= */}
        {relevantProducts.length > 0 && (
          <div className="gsap-section-reveal mb-14 sm:mb-16">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200 font-mono">
                  [APPLICABLE INVENTORY]
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0E2A3A] tracking-tight mt-1">
                  Applicable Products & Flanges / Fittings
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                {relevantProducts.length} Verified Solutions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantProducts.map((prod) => (
                <div
                  key={prod.slug}
                  onClick={() => handleProductClick(prod.slug)}
                  className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-[#F36F21] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={prod.heroImage}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0E2A3A]/90 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-slate-700">
                      {prod.division}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-[#0E2A3A] group-hover:text-[#F36F21] transition-colors mb-1 line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                        {prod.shortDescription || prod.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {prod.standards?.[0] || "ASME / ASTM"}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#F36F21] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CLOSING RFQ / CONSULTATION CALL-TO-ACTION */}
        {/* ========================================================================= */}
        <div className="gsap-section-reveal bg-gradient-to-br from-[#0E2A3A] via-[#0F2942] to-[#0E2A3A] rounded-2xl border border-slate-800 p-8 sm:p-12 text-white mb-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F36F21]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-xs font-mono font-bold text-[#F36F21] uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-md border border-white/15">
              [TECHNICAL ENQUIRY & PROCUREMENT]
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Request Project Tender Pricing for {industry.shortTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Submit your engineering bill of materials (BOM), required alloy specs, wall thickness, and MTC clearance requirements. Our technical sales desk responds within 24 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`#contact?requirement=${encodeURIComponent(industry.title + " Supply")}&industry=${encodeURIComponent(industry.shortTitle)}#quote`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F36F21] to-[#D92B20] hover:from-[#D92B20] hover:to-[#B91F17] text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold font-mono tracking-wider transition-all duration-300 shadow-md shadow-[#F36F21]/20 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT RFQ FOR {industry.shortTitle.toUpperCase()}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ADJACENT INDUSTRY QUICK SWITCH NAVIGATION */}
        {/* ========================================================================= */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <button
            onClick={() => handleNavigateIndustry(prevIndustry.slug)}
            className="w-full sm:w-auto p-4 rounded-xl bg-white hover:bg-[#0E2A3A] text-slate-800 hover:text-white border border-slate-200 transition-all duration-300 flex items-center gap-3 shadow-xs group"
          >
            <ChevronLeft className="w-5 h-5 text-[#F36F21] group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 block uppercase">PREVIOUS SECTOR [{prevIndustry.number}]</span>
              <span className="font-extrabold text-sm">{prevIndustry.title}</span>
            </div>
          </button>

          <button
            onClick={() => {
              if (onBackToIndustries) onBackToIndustries();
              else window.location.hash = "#industries";
            }}
            className="p-3 text-slate-600 hover:text-[#F36F21] font-bold uppercase transition-colors"
          >
            All 6 Strategic Sectors
          </button>

          <button
            onClick={() => handleNavigateIndustry(nextIndustry.slug)}
            className="w-full sm:w-auto p-4 rounded-xl bg-white hover:bg-[#0E2A3A] text-slate-800 hover:text-white border border-slate-200 transition-all duration-300 flex items-center justify-between sm:justify-start gap-3 shadow-xs group"
          >
            <div className="text-right sm:text-left">
              <span className="text-[10px] text-slate-400 block uppercase">NEXT SECTOR [{nextIndustry.number}]</span>
              <span className="font-extrabold text-sm">{nextIndustry.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#F36F21] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
