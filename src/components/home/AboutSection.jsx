import React from "react";
import {
  ShieldCheck,
  Award,
  FileCheck2,
  Building2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Factory
} from "lucide-react";
import companyConfig from "../../config/company";
import heavyPlatesImg from "../../assets/Product images/HEAVY ENGINEERING PLATES, COILS & ROUND BARS.png";
import { useGsapReveal } from "../../utils/useGsapReveal";

// Enhanced Catalogue Genuine Statistics (Exact content preserved)
const catalogueStats = [
  {
    id: "STAT-01",
    valMain: "10+",
    valSub: "YEARS",
    title: "MARKET LEADERSHIP",
    desc: "Over a decade of dedicated industrial supply to domestic & global markets",
    accentTag: "EST. PAN-INDIA & EXPORT"
  },
  {
    id: "STAT-02",
    valMain: "ISO 9001",
    valSub: "CERTIFIED",
    title: "QUALITY MANAGEMENT",
    desc: "MSME Reg. UDYAM-MH-19-0110593 | Accredited by EGAC (CAB #118005) & IAF",
    accentTag: "AUDITED COMPLIANCE"
  },
  {
    id: "STAT-03",
    valMain: "EN 10204",
    valSub: "3.1 / 3.2",
    title: "100% MTC TRACEABILITY",
    desc: "Every heat batch delivered with complete chemical & mechanical test certificates",
    accentTag: "HEAT LOT VERIFIED"
  },
  {
    id: "STAT-04",
    valMain: "200mm / 40\"",
    valSub: "CAPACITY",
    title: "EXTENSIVE STOCK RANGE",
    desc: "Heavy plates up to 200mm thickness & forged flanges up to 40\" NB Class 2500#",
    accentTag: "HEAVY METALLURGY"
  }
];

export default function AboutSection() {
  const containerRef = useGsapReveal();

  return (
    <section
      id="about-us"
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-[#F1F5F9] text-slate-800 py-10 sm:py-14 lg:py-16 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Subtle Engineering Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER & ACCREDITATION BADGES */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-gsap="fade-up">
          {/* Technical Badge Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[11px] font-bold bg-amber-50/90 text-[#D94A1F] border border-amber-200/90 uppercase tracking-widest shadow-2xs font-mono">
              <Award className="w-3.5 h-3.5 text-[#D94A1F]" />
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[11px] font-bold bg-white text-[#0E2A3A] border border-slate-200/90 uppercase tracking-widest shadow-2xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0E2A3A]" />
              MSME REGISTERED: {companyConfig.udyamNo}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[11px] font-bold bg-emerald-50/90 text-emerald-700 border border-emerald-200/90 uppercase tracking-widest shadow-2xs font-mono">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
              EGAC & IAF ACCREDITED
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-2">
            Supreme Metal and Alloys
          </h2>
          <p className="text-xs sm:text-sm text-[#D94A1F] font-bold tracking-widest uppercase mb-3 font-mono">
            “NO COMPROMISE IN QUALITY” IS OUR MOTTO
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Over a decade of trusted industrial supply leadership as premier stockists, dealers, manufacturers, and exporters of high-performance Ferrous & Non-Ferrous metals across India and worldwide.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* COMPANY INTRODUCTION GRID (TEXT + PRODUCT IMAGE SHOWCASE) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 lg:mb-12">
          
          {/* Left Column: Technical Narrative */}
          <div className="lg:col-span-7 space-y-5" data-gsap="fade-up">
            <div className="inline-flex items-center gap-2 text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 font-mono shadow-2xs">
              <Building2 className="w-4 h-4 text-[#D94A1F]" />
              ESTABLISHED BUSINESS POSITIONING
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E2A3A] leading-snug">
              Complete Industrial Piping & Heavy Alloy Infrastructure Partner
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <strong className="text-[#0E2A3A]">Supreme Metal and Alloys</strong> is a multi-grade stockist and manufacturer specializing in complete industrial piping, pressure vessel plates, forged flanges, high-pressure fittings, and precision sanitary tubing. With over 10 years of market presence, we fulfill mission-critical demands of energy, defense, chemical processing, and sanitary infrastructure.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Our material portfolio spans standard <span className="text-[#0E2A3A] font-semibold">Stainless Steel (304/316/321/310S/904L)</span>, <span className="text-[#0E2A3A] font-semibold">Carbon Steel & Boiler Quality (A516 Gr 60/70, A106 B, LTCS A333)</span>, <span className="text-[#0E2A3A] font-semibold">Alloy Steel (P5/P9/P11/P22/P91, 15Mo3)</span>, and exotic non-ferrous alloys including <span className="text-[#D94A1F] font-semibold">Inconel, Monel, Hastelloy, Titanium, Duplex 2205, and Super Duplex 2507</span>.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#D94A1F]/30 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#D94A1F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                  100% EN 10204 3.1 / 3.2 Mill Test Certificates
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#D94A1F]/30 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#D94A1F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                  IBR Approved Supplier for Boiler Quality Materials
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#D94A1F]/30 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#D94A1F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                  Pre-Approved under Major TPI Agencies (EIL, L&T, NPCIL)
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#D94A1F]/30 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#D94A1F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                  Tri-Clover TC Dairy & Sanitary Electro-Polished Tubing
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5" data-gsap="scale">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-[#0E2A3A] shadow-xl group">
              <img
                src={heavyPlatesImg}
                alt="Supreme Metal and Alloys Heavy Plates & Stock Inventory"
                className="w-full h-[340px] sm:h-[400px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A3A]/90 via-[#0E2A3A]/25 to-transparent" />
              
              {/* Corner Technical Bracket Overlay */}
              <div className="absolute top-4 right-4 text-xs font-mono text-white/90 bg-[#0E2A3A]/85 px-3 py-1 rounded-md border border-white/20 shadow-xs">
                [INVENTORY-STOCK]
              </div>

              {/* Floating Quality Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/90 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-[#D94A1F] border border-amber-200 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#0E2A3A] uppercase tracking-wider">
                      Zero Tolerance Quality Assurance
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Spectro, PMI, Hardness & Cryogenic Impact Tested
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 pt-2.5 border-t border-slate-200/80 font-bold font-mono">
                  <span>Plates up to 200mm</span>
                  <span className="text-[#D94A1F]">Flanges up to 40" Class 2500#</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* HIGH-END STATS / CREDENTIAL CARDS GRID */}
        {/* ========================================================================= */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          data-gsap="stagger-container"
        >
          {catalogueStats.map((item) => (
            <div
              key={item.id}
              data-gsap="stagger-item"
              className="relative bg-white/90 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-[#D94A1F]/50 p-6 transition-all duration-500 group hover:-translate-y-1.5 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Orange Border Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D94A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Technical Indicator Tag */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-4 pb-3 border-b border-slate-200/70">
                <span className="text-[#D94A1F] font-bold">[{item.id}]</span>
                <span className="uppercase tracking-wider font-semibold text-slate-500">{item.accentTag}</span>
              </div>

              {/* Dominant Stat Number */}
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#0E2A3A] group-hover:text-[#D94A1F] transition-colors tracking-tight">
                    {item.valMain}
                  </span>
                  <span className="text-xs font-extrabold text-[#D94A1F] tracking-widest uppercase">
                    {item.valSub}
                  </span>
                </div>

                <h4 className="text-xs font-extrabold text-[#0E2A3A] tracking-wider uppercase mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Corner Bracket Graphic Detail */}
              <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-[#0E2A3A] transition-colors font-mono">
                <span className="text-[10px]">VERIFIED CATALOGUE FACT</span>
                <span className="text-[#D94A1F] transform transition-transform group-hover:translate-x-1.5 font-bold">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

