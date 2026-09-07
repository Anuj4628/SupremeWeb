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
      className="w-[840px] max-w-[94vw] bg-[#0E2A3A] text-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-700/90 overflow-hidden font-sans p-4 sm:p-5 animate-in fade-in slide-in-from-top-2 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Accent Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F36F21] via-amber-400 to-blue-500 rounded-full mb-3" />

      {/* Header Bar - Minimal & Compact */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-700/70 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[#F36F21] font-mono text-[10px] font-bold uppercase tracking-widest bg-[#F36F21]/15 px-2 py-0.5 rounded border border-[#F36F21]/30">
            CATALOGUE DISCOVERY
          </span>
          <span className="text-slate-400 text-xs font-medium hidden sm:inline">• Select a division or category</span>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setActiveDivisionTab("all")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase transition-all ${
              activeDivisionTab === "all"
                ? "bg-[#F36F21] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Both
          </button>
          <button
            onClick={() => setActiveDivisionTab("MANUFACTURER")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase transition-all ${
              activeDivisionTab === "MANUFACTURER"
                ? "bg-[#F36F21] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Manufacturer
          </button>
          <button
            onClick={() => setActiveDivisionTab("SUPPLIER")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase transition-all ${
              activeDivisionTab === "SUPPLIER"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Supplier
          </button>
        </div>
      </div>

      {/* Side-by-Side Division Columns (Compact & Sleek Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[72vh] overflow-y-auto pr-1">
        
        {/* ========================================================================= */}
        {/* MANUFACTURER DIVISION */}
        {/* ========================================================================= */}
        {(activeDivisionTab === "all" || activeDivisionTab === "MANUFACTURER") && (
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2 py-1.5 bg-slate-900/60 rounded-lg border border-amber-500/20">
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#F36F21]" />
                <span className="text-xs font-mono font-extrabold uppercase text-amber-400 tracking-wider">
                  MANUFACTURER DIVISION
                </span>
              </div>
              <a
                href="#products/manufacturer"
                onClick={() => handleLinkClick("#products/manufacturer")}
                className="text-[10px] font-mono font-bold text-[#F36F21] hover:underline flex items-center"
              >
                All Mfg <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {mfgCategories.map((cat) => {
                const IconComponent = iconMap[cat.iconName] || Factory;
                const catUrl = getCategoryUrl(cat.slug);
                return (
                  <a
                    key={cat.id}
                    href={catUrl}
                    onClick={() => handleLinkClick(catUrl)}
                    className="group flex items-center justify-between p-2 rounded-lg bg-slate-800/50 hover:bg-[#F36F21]/20 border border-slate-700/50 hover:border-[#F36F21]/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded bg-[#0E2A3A] text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-100 group-hover:text-[#F36F21] transition-colors truncate">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-normal truncate">
                          {cat.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F36F21] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-2" />
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
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2 py-1.5 bg-slate-900/60 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-extrabold uppercase text-blue-400 tracking-wider">
                  SUPPLIER DIVISION
                </span>
              </div>
              <a
                href="#products/supplier"
                onClick={() => handleLinkClick("#products/supplier")}
                className="text-[10px] font-mono font-bold text-blue-400 hover:underline flex items-center"
              >
                All Sup <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {supCategories.map((cat) => {
                const IconComponent = iconMap[cat.iconName] || Globe;
                return (
                  <a
                    key={cat.id}
                    href={`#products/category/${cat.slug}`}
                    onClick={() => handleLinkClick(`#products/category/${cat.slug}`)}
                    className="group flex items-center justify-between p-2 rounded-lg bg-slate-800/50 hover:bg-blue-500/20 border border-slate-700/50 hover:border-blue-400/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded bg-[#0E2A3A] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-normal truncate">
                          {cat.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Sleek Minimal Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-700/70 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="font-bold text-white uppercase">Popular:</span>
          {MATERIALS.slice(0, 3).map((m) => (
            <a
              key={m.id}
              href={`#products/material/${m.slug}`}
              onClick={() => handleLinkClick(`#products/material/${m.slug}`)}
              className="text-slate-300 hover:text-[#F36F21] underline"
            >
              {m.name}
            </a>
          ))}
        </div>

        <a
          href="#products"
          onClick={() => handleLinkClick("#products")}
          className="px-3 py-1 bg-[#F36F21] hover:bg-[#d94a1f] text-white rounded font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
        >
          <span>All Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
