import React from "react";
import {
  ShieldCheck,
  Flame,
  Sparkles,
  Zap,
  Anchor,
  Globe,
  Layers,
  Factory,
  Wrench,
  ArrowRight,
  ChevronRight
} from "lucide-react";

// The 9 Verified Primary Metallurgical Materials (Source of Truth: navItems & productCatalog)
const MATERIALS_DATA = [
  {
    title: "Stainless Steel",
    desc: "304, 316L, 321, 310S, 347, 904L, 17-4PH",
    icon: ShieldCheck,
    href: "#materials/stainless-steel",
    number: "01"
  },
  {
    title: "Nickel",
    desc: "Nickel 200/201, Inconel 600/625, Monel 400",
    icon: Flame,
    href: "#materials/nickel",
    number: "02"
  },
  {
    title: "High Alloys",
    desc: "Hastelloy C22, Alloy 20, SMO 254, AL-6XN",
    icon: Sparkles,
    href: "#materials/high-alloys",
    number: "03"
  },
  {
    title: "Duplex",
    desc: "UNS S31803 (2205), UNS S32205, LDX 2101",
    icon: Zap,
    href: "#materials/duplex",
    number: "04"
  },
  {
    title: "Super Duplex",
    desc: "UNS S32750 (2507), UNS S32760 (Zeron 100)",
    icon: Anchor,
    href: "#materials/super-duplex",
    number: "05"
  },
  {
    title: "Titanium",
    desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Grade 7",
    icon: Globe,
    href: "#materials/titanium",
    number: "06"
  },
  {
    title: "Alloys",
    desc: "Zirconium 702, Tantalum, Cu-Ni 70/30, Hastelloy B2",
    icon: Layers,
    href: "#materials/alloys",
    number: "07"
  },
  {
    title: "Carbon",
    desc: "ASTM A106 Gr B, A105, A333 Gr 6, A516 Gr 70",
    icon: Factory,
    href: "#materials/carbon",
    number: "08"
  },
  {
    title: "Alloy Steel",
    desc: "ASTM A335 P5, P9, P11, P22, P91, F11, F22",
    icon: Wrench,
    href: "#materials/alloy-steel",
    number: "09"
  }
];

export default function MaterialMegaMenu({ onClose, onItemClick }) {
  const handleLinkClick = (href) => {
    if (onItemClick) onItemClick(href);
    if (onClose) onClose();
  };

  return (
    <div
      className="w-[800px] max-w-[calc(100vw-2rem)] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden font-sans p-4 sm:p-5 animate-in fade-in slide-in-from-top-2 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Accent Strip matching Industries and Products */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F36F21] via-[#D92B20] to-[#0F2942] rounded-full mb-3" />

      {/* Header Bar - Light & Clean */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[#F36F21] font-mono text-[10px] font-bold uppercase tracking-widest bg-[#F36F21]/10 px-2 py-0.5 rounded border border-[#F36F21]/20">
            METALLURGICAL GRADES
          </span>
          <span className="text-slate-500 text-xs font-medium hidden sm:inline">
            • Certified Aerospace & Industrial Metallurgy
          </span>
        </div>

        <span className="text-[11px] font-mono text-slate-700 font-bold bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          9 Primary Material Groups
        </span>
      </div>

      {/* Main Content Area: 3 Columns × 3 Rows Compact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        {MATERIALS_DATA.map((mat) => {
          const IconComp = mat.icon;

          return (
            <a
              key={mat.title}
              href={mat.href}
              onClick={() => handleLinkClick(mat.href)}
              className="group flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 bg-white hover:border-[#F36F21]/40 hover:bg-slate-50/80 transition-all duration-200 shadow-2xs hover:shadow-xs hover:translate-x-0.5"
            >
              <div className="p-2 rounded-lg bg-[#0F2942]/5 text-[#0F2942] group-hover:bg-[#F36F21] group-hover:text-white transition-colors shrink-0">
                <IconComp className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#F36F21]">
                    [{mat.number}]
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#F36F21] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#F36F21] transition-colors truncate mt-0.5">
                  {mat.title}
                </h4>
                <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                  {mat.desc}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Footer Bar matching Industries and Products */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>EN 10204 3.1 & 3.2 Certified Mill Test Certificates</span>
        </div>

        <a
          href="#materials"
          onClick={() => handleLinkClick("#materials")}
          className="text-xs font-mono font-bold text-[#F36F21] hover:underline transition-colors inline-flex items-center gap-1.5"
        >
          <span>View Complete Materials Showcase</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
