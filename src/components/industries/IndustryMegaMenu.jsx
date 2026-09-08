import React, { useState } from "react";
import { ArrowRight, Globe, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import { getAllIndustries } from "../../data/industryData";

export default function IndustryMegaMenu({ onClose, onItemClick }) {
  const industries = getAllIndustries();
  const [hoveredIndustry, setHoveredIndustry] = useState(industries[0]);

  const handleLinkClick = (slug) => {
    if (onItemClick) onItemClick(slug);
    if (onClose) onClose();
  };

  return (
    <div
      className="w-[800px] max-w-[calc(100vw-2rem)] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden font-sans p-4 sm:p-5 animate-in fade-in slide-in-from-top-2 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Accent Strip matching Materials */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F36F21] via-[#D92B20] to-[#0F2942] rounded-full mb-3" />

      {/* Header Bar - Light & Clean */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[#F36F21] font-mono text-[10px] font-bold uppercase tracking-widest bg-[#F36F21]/10 px-2 py-0.5 rounded border border-[#F36F21]/20">
            STRATEGIC SECTORS
          </span>
          <span className="text-slate-500 text-xs font-medium hidden sm:inline">
            • Mission-Critical Application Domains
          </span>
        </div>

        <span className="text-[11px] font-mono text-slate-700 font-bold bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          6 Dedicated Sectors
        </span>
      </div>

      {/* Main Content Area: Left 6-Industry Grid, Right Interactive Sector Preview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Left Column (7 cols): 6 Industries in 2x3 Grid */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {industries.map((ind) => {
            const IconComp = ind.icon;
            const isHovered = hoveredIndustry?.slug === ind.slug;

            return (
              <a
                key={ind.slug}
                href={`#industries/${ind.slug}`}
                onClick={() => handleLinkClick(ind.slug)}
                onMouseEnter={() => setHoveredIndustry(ind)}
                className={`group flex items-start gap-2.5 p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isHovered
                    ? "bg-amber-50/70 border-[#F36F21]/50 shadow-xs translate-x-0.5"
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors shrink-0 ${
                    isHovered
                      ? "bg-[#F36F21] text-white"
                      : "bg-[#0F2942]/5 text-[#0F2942] group-hover:bg-[#F36F21] group-hover:text-white"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#F36F21]">
                      [{ind.number}]
                    </span>
                    <ArrowRight
                      className={`w-3 h-3 text-[#F36F21] transition-transform ${
                        isHovered ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#F36F21] transition-colors line-clamp-1 mt-0.5">
                    {ind.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                    {ind.tagline}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Column (5 cols): Live Interactive Sector Preview Card */}
        <div className="hidden md:flex md:col-span-5 flex-col justify-between bg-slate-50 rounded-xl border border-slate-200/90 p-3 relative overflow-hidden">
          {hoveredIndustry ? (
            <>
              <div className="relative h-28 rounded-lg overflow-hidden border border-slate-200 mb-2.5 shadow-inner">
                <img
                  src={hoveredIndustry.image}
                  alt={hoveredIndustry.title}
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-white bg-[#0E2A3A]/90 px-1.5 py-0.5 rounded border border-white/20">
                  SECTOR {hoveredIndustry.number} OF 06
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-bold text-[#0E2A3A] uppercase tracking-wider font-mono">
                  {hoveredIndustry.title}
                </div>
                <p className="text-[11px] text-slate-600 leading-snug line-clamp-2">
                  {hoveredIndustry.overview}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-mono">
                  Temp: {hoveredIndustry.technicalHighlights?.temperatureRange}
                </span>
                <a
                  href={`#industries/${hoveredIndustry.slug}`}
                  onClick={() => handleLinkClick(hoveredIndustry.slug)}
                  className="text-[#F36F21] hover:text-[#d94a1f] font-bold inline-flex items-center gap-1 group/btn"
                >
                  <span>Explore Sector</span>
                  <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 text-xs font-mono">
              Hover an industry to inspect capabilities
            </div>
          )}
        </div>
      </div>

      {/* Footer Bar matching Materials */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>EN 10204 3.1 & 3.2 Certified Mill Test Certificates</span>
        </div>

        <a
          href="#industries"
          onClick={() => handleLinkClick("landing")}
          className="text-xs font-mono font-bold text-[#F36F21] hover:underline transition-colors inline-flex items-center gap-1.5"
        >
          <span>View Complete Industries Showcase</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
