import React, { useState } from "react";
import {
  Sparkles,
  Wrench,
  Layers,
  ShieldCheck,
  Pipette,
  FileText,
  FileSpreadsheet,
  Disc,
  Building2,
  ArrowRight,
  Factory,
  Globe,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { CATEGORIES, MATERIALS } from "../../data/productCatalog";
import { getCategoryUrl } from "../../utils/mfgRoutes";

const iconMap = {
  Sparkles,
  Wrench,
  Layers,
  ShieldCheck,
  Pipette,
  FileText,
  FileSpreadsheet,
  Disc,
  Building2,
  Factory,
  Globe
};

export default function ProductMegaMenu({ onClose, onItemClick }) {
  const [activeDivisionTab, setActiveDivisionTab] = useState("all");

  const mfgCategories = CATEGORIES.filter((c) => c.division === "MANUFACTURER");
  const supCategories = CATEGORIES.filter((c) => c.division === "SUPPLIER");

  const handleLinkClick = (hash) => {
    if (onItemClick) onItemClick(hash);
    if (onClose) onClose();
  };

  return (
    <div
      className="w-[800px] max-w-[calc(100vw-2rem)] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden font-sans p-3 sm:p-4 animate-in fade-in slide-in-from-top-2 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Accent Strip matching Materials & Industries */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F36F21] via-[#D92B20] to-[#0F2942] rounded-full mb-2.5" />

      {/* Header Bar - Light & Clean */}
      <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[#F36F21] font-mono text-[10px] font-bold uppercase tracking-widest bg-[#F36F21]/10 px-2 py-0.5 rounded border border-[#F36F21]/20">
            CATALOGUE DISCOVERY
          </span>
          <span className="text-slate-500 text-xs font-medium hidden sm:inline">
            • Select a division or category
          </span>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
          <button
            onClick={() => setActiveDivisionTab("all")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
              activeDivisionTab === "all"
                ? "bg-[#F36F21] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Both
          </button>
          <button
            onClick={() => setActiveDivisionTab("MANUFACTURER")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
              activeDivisionTab === "MANUFACTURER"
                ? "bg-[#F36F21] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Manufacturer
          </button>
          <button
            onClick={() => setActiveDivisionTab("SUPPLIER")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
              activeDivisionTab === "SUPPLIER"
                ? "bg-[#0F2942] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Supplier
          </button>
        </div>
      </div>

      {/* Side-by-Side Division Columns (Compact & Sleek Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
        
        {/* ========================================================================= */}
        {/* MANUFACTURER DIVISION */}
        {/* ========================================================================= */}
        {(activeDivisionTab === "all" || activeDivisionTab === "MANUFACTURER") && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-2 py-1 bg-amber-50/80 rounded-lg border border-amber-200/80">
              <div className="flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-[#F36F21]" />
                <span className="text-[11px] font-mono font-extrabold uppercase text-[#D94A1F] tracking-wider">
                  MANUFACTURER DIVISION
                </span>
              </div>
              <a
                href="#products/manufacturer"
                onClick={() => handleLinkClick("#products/manufacturer")}
                className="text-[9.5px] font-mono font-bold text-[#F36F21] hover:underline flex items-center"
              >
                All Mfg <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {mfgCategories.map((cat) => {
                const IconComponent = iconMap[cat.iconName] || Factory;
                const catUrl = getCategoryUrl(cat.slug);
                return (
                  <a
                    key={cat.id}
                    href={catUrl}
                    onClick={() => handleLinkClick(catUrl)}
                    className="group flex items-center justify-between px-2 py-1 rounded-lg bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200/80 transition-all duration-150 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1 rounded bg-[#0F2942]/5 text-[#0F2942] group-hover:bg-[#F36F21] group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="w-3 h-3" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11.5px] font-bold text-slate-800 group-hover:text-[#F36F21] transition-colors truncate leading-tight">
                          {cat.name}
                        </div>
                        <div className="text-[9.5px] text-slate-500 font-normal truncate mt-0.5 leading-none">
                          {cat.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#F36F21] opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-1.5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUPPLIER DIVISION */}
        {/* ========================================================================= */}
        {(activeDivisionTab === "all" || activeDivisionTab === "SUPPLIER") && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-2 py-1 bg-slate-100 rounded-lg border border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#0F2942]" />
                <span className="text-[11px] font-mono font-extrabold uppercase text-[#0F2942] tracking-wider">
                  SUPPLIER DIVISION
                </span>
              </div>
              <a
                href="#products/supplier"
                onClick={() => handleLinkClick("#products/supplier")}
                className="text-[9.5px] font-mono font-bold text-[#0F2942] hover:underline flex items-center"
              >
                All Sup <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {supCategories.map((cat) => {
                const IconComponent = iconMap[cat.iconName] || Globe;
                return (
                  <a
                    key={cat.id}
                    href={`#products/category/${cat.slug}`}
                    onClick={() => handleLinkClick(`#products/category/${cat.slug}`)}
                    className="group flex items-center justify-between px-2 py-1 rounded-lg bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200/80 transition-all duration-150 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1 rounded bg-[#0F2942]/5 text-[#0F2942] group-hover:bg-[#0F2942] group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="w-3 h-3" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11.5px] font-bold text-slate-800 group-hover:text-[#0F2942] transition-colors truncate leading-tight">
                          {cat.name}
                        </div>
                        <div className="text-[9.5px] text-slate-500 font-normal truncate mt-0.5 leading-none">
                          {cat.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#0F2942] opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-1.5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Sleek Minimal Footer matching Materials & Industries */}
      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-slate-500">
          <span className="font-bold text-slate-800 uppercase">Popular:</span>
          {MATERIALS.slice(0, 3).map((m) => (
            <a
              key={m.id}
              href={`#products/material/${m.slug}`}
              onClick={() => handleLinkClick(`#products/material/${m.slug}`)}
              className="text-slate-600 hover:text-[#F36F21] underline transition-colors"
            >
              {m.name}
            </a>
          ))}
        </div>

        <a
          href="#products"
          onClick={() => handleLinkClick("#products")}
          className="px-2.5 py-1 bg-[#F36F21] hover:bg-[#d94a1f] text-white rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shadow-xs"
        >
          <span>All Products</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}
