import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Network, ShieldCheck, Globe2, Building2 } from "lucide-react";

// Official Partner Logos
import godrejLogo from "../../assets/partners/godrej.svg";
import haldiaLogo from "../../assets/partners/haldia_petrochemicals.svg";
import hpclLogo from "../../assets/partners/hindustan_petroleum.svg";
import ioclLogo from "../../assets/partners/indian_oil.svg";
import jsplLogo from "../../assets/partners/jindal_steel.svg";
import tataSteelLogo from "../../assets/partners/tata_steel.svg";
import adaniLogo from "../../assets/partners/adani.svg";
import relianceLogo from "../../assets/partners/reliance.svg";
import adityaBirlaLogo from "../../assets/partners/aditya_birla.svg";
import bhushanPowerLogo from "../../assets/partners/bhushan_power.svg";
import ltLogo from "../../assets/ThirdParty/L&T logo.png";
import ielLogo from "../../assets/ThirdParty/IEL logo.png";

gsap.registerPlugin(ScrollTrigger);

// Complete List of Trusted Industrial Partners & Strategic Supply Relationships
const partnerLogosRow1 = [
  { id: "GODREJ", name: "Godrej Group", logo: godrejLogo, category: "Industrial Engineering" },
  { id: "IOCL", name: "Indian Oil Corporation Limited", logo: ioclLogo, category: "Refineries & Energy" },
  { id: "TATA", name: "Tata Steel", logo: tataSteelLogo, category: "Primary Metallurgy" },
  { id: "RELIANCE", name: "Reliance Industries Limited", logo: relianceLogo, category: "Petrochemicals & Gas" },
  { id: "JSPL", name: "Jindal Steel & Power", logo: jsplLogo, category: "Heavy Steel & Infrastructure" },
  { id: "HPCL", name: "Hindustan Petroleum", logo: hpclLogo, category: "Energy & Infrastructure" },
];

const partnerLogosRow2 = [
  { id: "ADANI", name: "Adani Group", logo: adaniLogo, category: "Ports & Thermal Power" },
  { id: "HALDIA", name: "Haldia Petrochemicals", logo: haldiaLogo, category: "Polymer & Chemicals" },
  { id: "BIRLA", name: "Aditya Birla Chemicals", logo: adityaBirlaLogo, category: "Specialty Chemicals" },
  { id: "BPSL", name: "Bhushan Power & Steel", logo: bhushanPowerLogo, category: "Heavy Manufacturing" },
  { id: "LT", name: "Larsen & Toubro", logo: ltLogo, category: "EPC & Engineering" },
  { id: "IEL", name: "IEL Quality Assurance", logo: ielLogo, category: "Inspection & Audit" },
];

export default function PartnershipsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(
        ".partner-reveal-eyebrow",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".partner-reveal-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".partner-reveal-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".partner-reveal-marquee",
          { opacity: 0, scale: 0.96, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Triple-duplicate arrays for true infinite mathematical seamless looping
  const row1Triple = [...partnerLogosRow1, ...partnerLogosRow1, ...partnerLogosRow1];
  const row2Triple = [...partnerLogosRow2, ...partnerLogosRow2, ...partnerLogosRow2];

  return (
    <section
      ref={sectionRef}
      id="strategic-partnerships"
      className="relative bg-[#0B1E2B] text-white py-16 sm:py-20 lg:py-24 overflow-hidden select-none border-b border-slate-800"
    >
      {/* ========================================================================= */}
      {/* GLOBAL SUPPLY NETWORK BACKGROUND ATMOSPHERE */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,42,58,0.85)_0%,rgba(11,30,43,1)_100%)]" />

        {/* Faint Engineering Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        {/* Subtle Latitude/Longitude Globe Contour Rays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-700/20 opacity-30 pointer-events-none animate-spin" style={{ animationDuration: "90s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-dashed border-[#D94A1F]/20 opacity-25 pointer-events-none" />

        {/* Subtle Glowing Network Node Dots */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#D94A1F] animate-ping opacity-40" />
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-400 opacity-60" />
      </div>

      {/* SECTION CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="partner-reveal-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0E2A3A] border border-slate-700 text-[#D94A1F] font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
            <Network className="w-3.5 h-3.5 text-[#D94A1F] animate-pulse" />
            <span>TRUSTED SUPPLY NETWORK</span>
          </div>

          {/* Main Title */}
          <h2 className="partner-reveal-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 uppercase">
            CLIENT <span className="text-[#D94A1F]">NETWORK</span>
          </h2>

          {/* Short Supporting Line */}
          <p className="partner-reveal-sub text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Trusted supply relationships supporting critical industries across India and global markets.
          </p>

          {/* Trust Highlights */}
          <div className="partner-reveal-sub flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-5 text-xs font-mono text-slate-400 uppercase">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#D94A1F]" /> MAJOR INDUSTRIAL CONGLOMERATES
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> REFINERY & POWER SECTORS
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-amber-400" /> B2B SUPPLY CREDIBILITY
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DUAL-ROW CONTINUOUS INFINITE LOGO MARQUEE */}
        {/* ========================================================================= */}
        <div className="partner-reveal-marquee relative space-y-6 sm:space-y-8">
          
          {/* Left & Right Gradient Masked Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-[#0B1E2B] via-[#0B1E2B]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-[#0B1E2B] via-[#0B1E2B]/80 to-transparent z-20 pointer-events-none" />

          {/* ROW 1: RIGHT TO LEFT */}
          <div className="overflow-hidden group py-2">
            <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] marquee-track">
              {row1Triple.map((item, idx) => (
                <div key={`p1-${idx}`} className="px-3 sm:px-4">
                  <div className="w-[180px] sm:w-[220px] h-[90px] sm:h-[105px] rounded-2xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#D94A1F]/70 flex items-center justify-center p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer group/card">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain filter brightness-[1.02] contrast-[1.05] transition-transform duration-300 group-hover/card:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: RIGHT TO LEFT (OFFSET SPEED & SEQUENCE) */}
          <div className="overflow-hidden group py-2">
            <div className="flex w-max animate-marquee-left-slow group-hover:[animation-play-state:paused] marquee-track">
              {row2Triple.map((item, idx) => (
                <div key={`p2-${idx}`} className="px-3 sm:px-4">
                  <div className="w-[180px] sm:w-[220px] h-[90px] sm:h-[105px] rounded-2xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#D94A1F]/70 flex items-center justify-center p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer group/card">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain filter brightness-[1.02] contrast-[1.05] transition-transform duration-300 group-hover/card:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
