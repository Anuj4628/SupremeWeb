import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Sparkles,
  Scissors,
  Wrench,
  PackageCheck
} from "lucide-react";
import { useGsapReveal } from "../../utils/useGsapReveal";
import { getAllIndustries } from "../../data/industryData";

// Authoritative Sector Cards from Centralized Single Source of Truth
const keyIndustries = getAllIndustries();

// Value-Added Services Data
const valueAddedServices = [
  {
    num: "01",
    id: "SVC-01",
    icon: Scissors,
    title: "Precision Plate Cutting & Beveling",
    tagline: "Custom Plasma & Waterjet Cutting",
    desc: "Custom plasma, waterjet & band-saw plate cutting up to 200mm thickness with edge beveling for weld preparation.",
    badge: "PLASMA & WATERJET"
  },
  {
    num: "02",
    id: "SVC-02",
    icon: Sparkles,
    title: "Electro-Polishing & Surface Finish",
    tagline: "Ra < 0.4µm Mirror Finish Compliance",
    desc: "Mirror & electro-polished finishing for pharmaceutical, food, dairy tubing and TC fittings (Ra < 0.4µm).",
    badge: "RA < 0.4µM FINISH"
  },
  {
    num: "03",
    id: "SVC-03",
    icon: Wrench,
    title: "Custom Forgings & Non-Standard Rings",
    tagline: "Heavy Round Bars & Custom Flanges",
    desc: "Tailored forging of non-standard flanges, rings, blind flanges, and heavy round bars to client drawings.",
    badge: "CUSTOM DRAWINGS"
  },
  {
    num: "04",
    id: "SVC-04",
    icon: PackageCheck,
    title: "Export-Grade Seaworthy Packaging",
    tagline: "Crates, End Caps & Color Coding",
    desc: "Wooden crates, plastic end caps, bundle wrapping, color-coded ends & waterproof export wrapping.",
    badge: "GLOBAL EXPORT PACK"
  }
];

export default function IndustriesServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState("SVC-01");
  const servicesScrollRef = useRef(null);
  const containerRef = useGsapReveal();

  const sliderTrackRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  // Seamless GSAP Infinite Horizontal Marquee Loop (GPU Accelerated, Zero Reflows)
  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    // Rock-solid GSAP infinite marquee moving right -> left continuously
    const tween = gsap.fromTo(
      track,
      { xPercent: 0 },
      {
        xPercent: -50, // 2 identical sets allow seamless -50% looping
        ease: "none",
        duration: 24, // Smooth, continuous 60fps movement
        repeat: -1
      }
    );

    marqueeTweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (marqueeTweenRef.current) {
      marqueeTweenRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeTweenRef.current) {
      marqueeTweenRef.current.play();
    }
  };

  const handleNudge = (direction) => {
    if (marqueeTweenRef.current) {
      const currentTime = marqueeTweenRef.current.time();
      const newTime = direction === "left" ? currentTime + 2.5 : currentTime - 2.5;
      gsap.to(marqueeTweenRef.current, {
        time: newTime,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  const handleServicesScroll = (direction) => {
    if (servicesScrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      servicesScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="industries"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-[#FAFBFD] to-[#F8FAFC] text-slate-800 py-10 sm:py-14 lg:py-16 border-b border-slate-200/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER - MISSION CRITICAL SECTORS */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-gsap="fade-up">
          <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 inline-block mb-3 font-mono">
            [CRITICAL APPLICATION DOMAINS]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-3">
            Serving Global <span className="text-[#D94A1F]">Mission-Critical Sectors</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Engineered metal supply solutions compliant with stringent operating pressures, extreme thermal stress, and aggressive corrosive environments.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CONTINUOUS INFINITE GSAP SLIDER (MISSION CRITICAL SECTORS) */}
        {/* ========================================================================= */}
        <div className="relative mb-10 lg:mb-14">
          {/* Marquee Outer Container with Hover Pause */}
          <div
            className="overflow-hidden py-4 -my-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={sliderTrackRef}
              className="flex items-center gap-5 sm:gap-6 w-max will-change-transform"
            >
              {[...keyIndustries, ...keyIndustries].map((ind, index) => (
                <div
                  key={`${ind.id}-${index}`}
                  onClick={() => {
                    window.location.hash = `#industries/${ind.slug}`;
                  }}
                  className="industry-card-item group relative h-[260px] sm:h-[290px] w-[260px] sm:w-[310px] lg:w-[330px] shrink-0 rounded-2xl overflow-hidden border border-slate-200/90 bg-[#0E2A3A] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-end cursor-pointer select-none"
                >
                  {/* High-Resolution Industrial Sector Image */}
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A3A]/95 via-[#0E2A3A]/40 to-transparent transition-opacity duration-500 group-hover:from-[#0E2A3A]/98 group-hover:via-[#0E2A3A]/50" />

                  {/* Minimal Bottom Title & Orange Accent Line */}
                  <div className="relative z-10 p-5 space-y-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-300 font-bold tracking-widest uppercase">
                        [{ind.number || `0${(index % 6) + 1}`}]
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-amber-300 flex items-center gap-1">
                        VIEW SECTOR →
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug tracking-tight group-hover:text-amber-200 transition-colors">
                      {ind.title}
                    </h3>

                    {/* Expanding Orange Underline */}
                    <div className="h-0.5 bg-[#D94A1F] w-8 group-hover:w-16 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls Bar for Manual Navigation & Visual Cue */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 max-w-4xl mx-auto px-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNudge("left")}
                className="p-2 rounded-xl bg-slate-100 hover:bg-[#0E2A3A] text-[#0E2A3A] hover:text-white border border-slate-200/90 shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                CONTINUOUS SHOWCASE • HOVER TO PAUSE
              </span>
              <button
                onClick={() => handleNudge("right")}
                className="p-2 rounded-xl bg-slate-100 hover:bg-[#0E2A3A] text-[#0E2A3A] hover:text-white border border-slate-200/90 shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href="#industries"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D94A1F] hover:text-[#0E2A3A] transition-colors"
            >
              <span>Explore All 6 Strategic Sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* REDESIGNED VALUE-ADDED SERVICES (MATCHING WHY CHOOSE US CARD DESIGN) */}
        {/* ========================================================================= */}
        <div className="pt-10 sm:pt-12 border-t border-slate-200 relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none rounded-3xl" />

          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10" data-gsap="fade-up">
            <div className="max-w-2xl">
              <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 inline-block mb-3 font-mono">
                [IN-HOUSE PRECISION FABRICATION]
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight">
                Value-Added Services & <span className="text-[#D94A1F]">Custom Metallurgy Processing</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium">
                End-to-end material processing, custom plate cutting, surface polishing, and seaworthy export packaging tailored to client specifications.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto lg:hidden">
              <button
                onClick={() => handleServicesScroll("left")}
                aria-label="Previous Service Card"
                className="p-3 rounded-xl bg-slate-100 hover:bg-[#0E2A3A] text-[#0E2A3A] hover:text-white border border-slate-200 transition-all duration-300 shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleServicesScroll("right")}
                aria-label="Next Service Card"
                className="p-3 rounded-xl bg-slate-100 hover:bg-[#0E2A3A] text-[#0E2A3A] hover:text-white border border-slate-200 transition-all duration-300 shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={servicesScrollRef}
            className="relative flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible"
            data-gsap="stagger-container"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {valueAddedServices.map((svc) => {
              const IconComp = svc.icon;
              const isFeatured = activeServiceId === svc.id;

              return (
                <div
                  key={svc.id}
                  data-gsap="stagger-item"
                  onClick={() => setActiveServiceId(svc.id)}
                  className={`snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-auto rounded-2xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between group relative border ${
                    isFeatured
                      ? "bg-[#0E2A3A] text-white border-[#D94A1F]/60 shadow-2xl scale-[1.02] z-10"
                      : "bg-[#F8FAFC] text-slate-800 border-slate-200/90 hover:bg-white hover:border-[#D94A1F]/40 hover:shadow-xl hover:-translate-y-1.5"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all duration-300 ${
                      isFeatured ? "bg-[#D94A1F]" : "bg-[#D94A1F] opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div
                        className={`p-3.5 rounded-xl border transition-all duration-300 ${
                          isFeatured
                            ? "bg-[#D94A1F] text-white border-[#D94A1F]"
                            : "bg-white text-[#D94A1F] border-slate-200 shadow-xs group-hover:bg-[#D94A1F] group-hover:text-white"
                        }`}
                      >
                        <IconComp className="w-6 h-6 transform transition-transform group-hover:scale-110 duration-300" />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`text-xs font-mono font-extrabold ${
                            isFeatured ? "text-amber-300" : "text-[#D94A1F]"
                          }`}
                        >
                          [{svc.num}]
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                            isFeatured
                              ? "bg-white/10 text-slate-200 border-white/20"
                              : "bg-white text-slate-600 border-slate-200"
                          }`}
                        >
                          {svc.badge}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 mb-3">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider block font-mono ${
                          isFeatured ? "text-amber-400" : "text-slate-500"
                        }`}
                      >
                        {svc.tagline}
                      </span>
                      <h4
                        className={`text-lg sm:text-xl font-extrabold leading-snug tracking-tight ${
                          isFeatured ? "text-white" : "text-[#0E2A3A] group-hover:text-[#D94A1F] transition-colors"
                        }`}
                      >
                        {svc.title}
                      </h4>
                    </div>

                    <p
                      className={`text-xs leading-relaxed font-medium mb-6 ${
                        isFeatured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {svc.desc}
                    </p>
                  </div>

                  <div
                    className={`pt-4 border-t flex items-center justify-between transition-colors ${
                      isFeatured ? "border-white/15" : "border-slate-200/80"
                    }`}
                  >
                    <div
                      className={`h-0.5 rounded-full transition-all duration-500 ${
                        isFeatured ? "w-16 bg-[#D94A1F]" : "w-8 bg-[#D94A1F] group-hover:w-16"
                      }`}
                    />
                    <div
                      className={`flex items-center gap-1 text-xs font-bold ${
                        isFeatured ? "text-amber-300" : "text-[#0E2A3A] group-hover:text-[#D94A1F]"
                      }`}
                    >
                      <span className="font-mono text-[11px] uppercase tracking-wider">
                        {isFeatured ? "FEATURED" : "EXPLORE"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
