import React from "react";
import Marquee from "react-fast-marquee";
import { FileCheck2, ShieldCheck } from "lucide-react";
import { useGsapReveal } from "../../utils/useGsapReveal";

// Import all 12 logo images from src/assets/ThirdParty/
import ltLogo from "../../assets/ThirdParty/L&T logo.png";
import eilLogo from "../../assets/ThirdParty/IEL logo.png";
import npcilLogo from "../../assets/ThirdParty/Gemini_Generated_Image_usao52usao52usao.png";
import daeLogo from "../../assets/ThirdParty/Gemini_Generated_Image_xfka6yxfka6yxfka.png";
import ibrLogo from "../../assets/ThirdParty/Gemini_Generated_Image_e65fohe65fohe65f.png";
import tuvLogo from "../../assets/ThirdParty/Gemini_Generated_Image_88xyt488xyt488xy.png";
import dnvLogo from "../../assets/ThirdParty/Gemini_Generated_Image_40wf9r40wf9r40wf.png";
import bvLogo from "../../assets/ThirdParty/Gemini_Generated_Image_jx8sf8jx8sf8jx8s.png";
import lrisLogo from "../../assets/ThirdParty/Gemini_Generated_Image_p04przp04przp04p.png";
import ritesLogo from "../../assets/ThirdParty/Gemini_Generated_Image_el85cdel85cdel85.png";
import tataLogo from "../../assets/ThirdParty/Gemini_Generated_Image_vf7jxyvf7jxyvf7j.png";
import electromechLogo from "../../assets/ThirdParty/Gemini_Generated_Image_hba35ohba35ohba3.png";

// Safe resolve for react-fast-marquee in ESM / React 19 double default wrapper
const MarqueeComponent =
  typeof Marquee === "function" || (typeof Marquee === "object" && Marquee?.$$typeof)
    ? Marquee
    : Marquee?.default?.default || Marquee?.default || Marquee;

const tpiLogosData = [
  { logo: ltLogo, name: "Larsen & Toubro", short: "L&T" },
  { logo: eilLogo, name: "Engineers India Ltd", short: "EIL" },
  { logo: npcilLogo, name: "Nuclear Power Corp", short: "NPCIL" },
  { logo: daeLogo, name: "Dept. of Atomic Energy", short: "DAE" },
  { logo: ibrLogo, name: "Indian Boiler Regulations", short: "IBR" },
  { logo: tuvLogo, name: "TUV India", short: "TUV" },
  { logo: dnvLogo, name: "Det Norske Veritas", short: "DNV" },
  { logo: bvLogo, name: "Bureau Veritas", short: "BV" },
  { logo: lrisLogo, name: "Lloyd's Register", short: "LRIS" },
  { logo: ritesLogo, name: "RITES Limited", short: "RITES" },
  { logo: tataLogo, name: "TATA Projects", short: "TATA" },
  { logo: electromechLogo, name: "Electromech Engg", short: "Electromech" }
];

// Row 2 offset logos array for visual variety
const row2LogosData = [
  ...tpiLogosData.slice(6),
  ...tpiLogosData.slice(0, 6)
];

export default function TpiMarqueeSection() {
  const containerRef = useGsapReveal();

  return (
    <section
      id="tpi-approvals"
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#F1F5F9] via-[#F8FAFC] to-white text-slate-800 py-8 sm:py-12 lg:py-14 border-b border-slate-200/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* COMPACT SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8" data-gsap="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-bold bg-amber-50 text-[#D94A1F] border border-amber-200 uppercase tracking-widest mb-3 shadow-2xs">
            <FileCheck2 className="w-3.5 h-3.5" />
            [THIRD-PARTY INSPECTION & QUALITY AUDITS]
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight">
            Pre-Approved & Tested Under <span className="text-[#D94A1F]">Premier Inspection Bodies</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2 max-w-2xl mx-auto">
            Materials inspected and audited per client specifications under leading international agencies and PSUs.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DUAL-ROW CONTINUOUS LOGO MARQUEE FRAME */}
        {/* ========================================================================= */}
        <div
          className="relative bg-white/90 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-4"
          data-gsap="scale"
        >
          {/* Left & Right Edge Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10 rounded-l-2xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10 rounded-r-2xl" />

          {/* TOP MARQUEE ROW: RIGHT -> LEFT */}
          <MarqueeComponent
            speed={28}
            direction="left"
            gradient={false}
            pauseOnHover
            className="py-1"
          >
            {tpiLogosData.map((item, idx) => (
              <div
                key={`top-${idx}`}
                className="mx-2.5 sm:mx-3 px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#D94A1F]/50 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col items-center justify-center h-22 sm:h-24 min-w-[170px] sm:min-w-[200px] group relative overflow-hidden"
              >
                {/* Subtle Orange Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#D94A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-12 sm:max-h-14 max-w-[150px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="text-[10px] font-extrabold text-[#0E2A3A] group-hover:text-[#D94A1F] transition-colors mt-1 truncate max-w-full font-mono">
                  {item.short}
                </span>
              </div>
            ))}
          </MarqueeComponent>

          {/* BOTTOM MARQUEE ROW: LEFT -> RIGHT */}
          <MarqueeComponent
            speed={24}
            direction="right"
            gradient={false}
            pauseOnHover
            className="py-1"
          >
            {row2LogosData.map((item, idx) => (
              <div
                key={`bottom-${idx}`}
                className="mx-2.5 sm:mx-3 px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#D94A1F]/50 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col items-center justify-center h-22 sm:h-24 min-w-[170px] sm:min-w-[200px] group relative overflow-hidden"
              >
                {/* Subtle Orange Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#D94A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-12 sm:max-h-14 max-w-[150px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="text-[10px] font-extrabold text-[#0E2A3A] group-hover:text-[#D94A1F] transition-colors mt-1 truncate max-w-full font-mono">
                  {item.short}
                </span>
              </div>
            ))}
          </MarqueeComponent>
        </div>

      </div>
    </section>
  );
}


