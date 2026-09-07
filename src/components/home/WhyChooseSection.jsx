import React, { useState, useRef } from "react";
import {
  ShieldCheck,
  Flame,
  Microscope,
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award
} from "lucide-react";
import { useGsapReveal } from "../../utils/useGsapReveal";

const whyChoosePillars = [
  {
    id: "PIL-01",
    num: "01",
    icon: ShieldCheck,
    title: "Pre-Approved TPI & IBR Standards",
    tagline: "EIL, L&T, NPCIL & IBR Audited",
    description:
      "All products are stocked in strict accordance with ASTM, ASME, DIN, and IS standards with 100% EN 10204 3.1/3.2 Mill Test Certificates and full IBR boiler compliance.",
    badge: "100% TPI VERIFIED"
  },
  {
    id: "PIL-02",
    num: "02",
    icon: Flame,
    title: "Exotic Nickel & Titanium Metallurgy",
    tagline: "Inconel, Monel, Hastelloy & Duplex",
    description:
      "Specialized inventory of extreme temperature and anti-corrosion alloys including Inconel 625/825, Monel 400, Hastelloy C276, Titanium Gr 2/5, and Duplex 2205/2507.",
    badge: "SPECIAL ALLOY STOCK"
  },
  {
    id: "PIL-03",
    num: "03",
    icon: Microscope,
    title: "Advanced In-House Spectro & Lab Testing",
    tagline: "PMI XRF Spectro, IGC & Cryogenic NDT",
    description:
      "Every heat lot undergoes handheld PMI XRF chemical analysis, IGC per ASTM A262, Cryogenic Impact Testing down to -196°C, and Ultrasonic/Radiographic NDT.",
    badge: "SPECTRO & NDT TESTED"
  },
  {
    id: "PIL-04",
    num: "04",
    icon: Layers,
    title: "Heavy Piping to Precision TC Sanitary",
    tagline: "0.5mm–200mm Plates | 40\" Flanges",
    description:
      "Single-source capability spanning heavy pressure vessel plates up to 200mm thick and flanges up to 40\" Class 2500# to mirror electro-polished Tri-Clover TC dairy fittings.",
    badge: "FULL RANGE CAPACITY"
  }
];

export default function WhyChooseSection() {
  const [activeCardId, setActiveCardId] = useState("PIL-01");
  const scrollRef = useRef(null);
  const containerRef = useGsapReveal();

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-choose-us"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-slate-800 py-10 sm:py-14 lg:py-16 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Subtle Engineering Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER & CAROUSEL CONTROLS */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10" data-gsap="fade-up">
          <div className="max-w-2xl">
            <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 inline-block mb-3 font-mono shadow-2xs">
              [SUPREME DIFFERENTIATORS]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight">
              Why Choose <span className="text-[#D94A1F]">Supreme Metal and Alloys?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 font-medium">
              Backed strictly by genuine catalogue facts, technical certifications, third-party inspection approvals, and zero-compromise quality.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous Feature Card"
              className="p-3 rounded-xl bg-white hover:bg-[#0E2A3A] text-[#0E2A3A] hover:text-white border border-slate-200/90 transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next Feature Card"
              className="p-3 rounded-xl bg-white hover:bg-[#0E2A3A] text-[#0E2A3A] hover:text-white border border-slate-200/90 transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL COMPACT FEATURE CAROUSEL / GRID */}
        {/* ========================================================================= */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible"
          data-gsap="stagger-container"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {whyChoosePillars.map((pillar) => {
            const IconComp = pillar.icon;
            const isFeatured = activeCardId === pillar.id;

            return (
              <div
                key={pillar.id}
                data-gsap="stagger-item"
                onClick={() => setActiveCardId(pillar.id)}
                className={`snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-auto rounded-2xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between group relative border ${
                  isFeatured
                    ? "bg-[#0E2A3A] text-white border-[#D94A1F]/60 shadow-2xl scale-[1.02] z-10"
                    : "bg-white text-slate-800 border-slate-200/90 hover:bg-white hover:border-[#D94A1F]/40 hover:shadow-xl hover:-translate-y-1.5"
                }`}
              >
                {/* Top Ambient Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all duration-300 ${
                    isFeatured ? "bg-[#D94A1F]" : "bg-[#D94A1F] opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div>
                  {/* Card Header Tag & Icon */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={`p-3.5 rounded-xl border transition-all duration-300 ${
                        isFeatured
                          ? "bg-[#D94A1F] text-white border-[#D94A1F]"
                          : "bg-slate-50 text-[#D94A1F] border-slate-200/90 shadow-2xs group-hover:bg-[#D94A1F] group-hover:text-white"
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
                        [{pillar.num}]
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border font-mono ${
                          isFeatured
                            ? "bg-white/10 text-slate-200 border-white/20"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block font-mono ${
                        isFeatured ? "text-amber-400" : "text-slate-500"
                      }`}
                    >
                      {pillar.tagline}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-extrabold leading-snug tracking-tight ${
                        isFeatured ? "text-white" : "text-[#0E2A3A] group-hover:text-[#D94A1F] transition-colors"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Concise Simple Description */}
                  <p
                    className={`text-xs leading-relaxed font-medium mb-6 ${
                      isFeatured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Card Action Footer */}
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
    </section>
  );
}

