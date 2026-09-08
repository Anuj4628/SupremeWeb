import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Building2,
  FileSpreadsheet,
  Ruler,
  Factory,
  Globe,
  Send,
  AlertCircle
} from "lucide-react";
import gsap from "gsap";
import {
  PRODUCTS,
  MATERIALS,
  CATEGORIES,
  getProductBySlug
} from "../../data/productCatalog";

// Grade Information Registry for rich technical overview
const GRADE_DATA_MAP = {
  "316l": {
    name: "Stainless Steel 316 / 316L",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    uns: "UNS S31603 / EN 1.4404",
    overview: "Grade 316L is a low-carbon molybdenum-bearing austenitic stainless steel providing exceptional pitting and crevice corrosion resistance in chloride and acidic environments. Ideal for high-pressure marine, chemical, and pharmaceutical piping.",
    standards: ["ASTM A312", "ASTM A403", "ASTM A182", "ASTM A240", "ASME B16.9", "ASME B16.5"],
    applications: ["Marine & Offshore Oil/Gas", "Chemical Process Reactors", "Pharma Sterile Tubing", "Desalination Plants"],
    forms: ["Seamless Pipe", "Welded Pipe", "Butt Weld Elbow", "Weld Neck Flange", "Heavy Plate", "Round Bar"]
  },
  "304": {
    name: "Stainless Steel 304 / 304L",
    material: "STAINLESS STEEL",
    materialSlug: "stainless-steel",
    uns: "UNS S30403 / EN 1.4307",
    overview: "Grade 304/304L is the standard 18/8 austenitic stainless steel with excellent formability, weldability, and general atmospheric corrosion resistance across cryogenic and elevated temperatures.",
    standards: ["ASTM A240", "ASTM A312", "ASTM A182", "EN 10088-2"],
    applications: ["Food & Beverage Tanks", "Architectural Structure", "Chemical Storage Vessels"],
    forms: ["Heavy Plate", "Patta Patti", "Slit Strip", "Circle Blank", "Seamless Pipe"]
  },
  "2205": {
    name: "Duplex 2205 (UNS S31803 / S32205)",
    material: "DUPLEX",
    materialSlug: "duplex",
    uns: "UNS S31803 / S32205 / EN 1.4462",
    overview: "Duplex 2205 is a 22% Chromium dual-phase austenitic-ferritic stainless steel combining high mechanical yield strength (twice SS 316) with extreme resistance to stress corrosion cracking in sour gas.",
    standards: ["ASTM A790", "ASTM A815", "ASTM A182 F51", "ASTM A276", "NACE MR0175"],
    applications: ["Sour Gas Extraction", "Offshore Sea-Water Piping", "Chemical Cargo Tanks"],
    forms: ["Seamless Pipe", "Butt Weld Elbow", "Precision Round Bar", "Forged Flange"]
  },
  "duplex-2205": {
    name: "Duplex 2205 (UNS S31803 / S32205)",
    material: "DUPLEX",
    materialSlug: "duplex",
    uns: "UNS S31803 / S32205 / EN 1.4462",
    overview: "Duplex 2205 is a 22% Chromium dual-phase austenitic-ferritic stainless steel combining high mechanical yield strength (twice SS 316) with extreme resistance to stress corrosion cracking in sour gas.",
    standards: ["ASTM A790", "ASTM A815", "ASTM A182 F51", "ASTM A276", "NACE MR0175"],
    applications: ["Sour Gas Extraction", "Offshore Sea-Water Piping", "Chemical Cargo Tanks"],
    forms: ["Seamless Pipe", "Butt Weld Elbow", "Precision Round Bar", "Forged Flange"]
  },
  "2507": {
    name: "Super Duplex 2507 (UNS S32750)",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    uns: "UNS S32750 / EN 1.4410",
    overview: "Super Duplex 2507 has a high Pitting Resistance Equivalent Number (PREN > 42) with 25% Chromium and 4% Molybdenum, built for extreme subsea depths and aggressive halide chemical solutions.",
    standards: ["ASTM A790", "ASTM A815", "ASTM A182 F53", "NACE MR0175 / ISO 15156"],
    applications: ["Subsea Manifolds & Risers", "High-Pressure RO Desalination", "Flue Gas Scrubber Lines"],
    forms: ["Seamless Pipe", "Heavy Flanges", "Forged Fittings", "Round Bar"]
  },
  "super-duplex-2507": {
    name: "Super Duplex 2507 (UNS S32750)",
    material: "SUPER DUPLEX",
    materialSlug: "super-duplex",
    uns: "UNS S32750 / EN 1.4410",
    overview: "Super Duplex 2507 has a high Pitting Resistance Equivalent Number (PREN > 42) with 25% Chromium and 4% Molybdenum, built for extreme subsea depths and aggressive halide chemical solutions.",
    standards: ["ASTM A790", "ASTM A815", "ASTM A182 F53", "NACE MR0175 / ISO 15156"],
    applications: ["Subsea Manifolds & Risers", "High-Pressure RO Desalination", "Flue Gas Scrubber Lines"],
    forms: ["Seamless Pipe", "Heavy Flanges", "Forged Fittings", "Round Bar"]
  },
  "nickel-200": {
    name: "Nickel 200 (UNS N02200)",
    material: "NICKEL ALLOYS",
    materialSlug: "nickel-alloys",
    uns: "UNS N02200 / W.Nr. 2.4066",
    overview: "Commercially pure (99.6%) wrought nickel providing immunity to caustic alkalis and excellent thermal/electrical conductivity across high temperatures.",
    standards: ["ASTM B161", "ASTM B163", "ASTM B366", "ASME SB161"],
    applications: ["Caustic Soda Evaporators", "Synthetic Fiber Production", "Fluorine Processing"],
    forms: ["Seamless Pipe", "Tubing", "Flanges", "Plate", "Round Bar"]
  },
  "a193-b7": {
    name: "ASTM A193 Grade B7 Heavy Bolting",
    material: "CARBON STEEL",
    materialSlug: "carbon-steel",
    uns: "AISI 4140 Chromium-Molybdenum Steel",
    overview: "Heat-treated high-tensile alloy steel stud bolts specified for high-temperature and high-pressure flange and valve assemblies up to 425°C.",
    standards: ["ASTM A193 B7", "ASTM A194 2H", "ASME B18.2.1"],
    applications: ["Refinery Flange Assemblies", "Pressure Vessel Covers", "Boiler Manholes"],
    forms: ["Continuous Thread Studs", "Heavy Hex Nuts", "Cap Screws"]
  }
};

export default function GradePage({ gradeSlug, onSelectProduct, onBackToProducts }) {
  const containerRef = useRef(null);

  // Normalize grade slug
  const normalizedSlug = (gradeSlug || "").toLowerCase().trim();
  const gradeInfo = GRADE_DATA_MAP[normalizedSlug] || {
    name: `Grade ${gradeSlug.toUpperCase()}`,
    material: "HIGH PERFORMANCE ALLOY",
    materialSlug: "stainless-steel",
    uns: `UNS Grade Specs (${gradeSlug})`,
    overview: `Official industrial catalogue specification for Grade ${gradeSlug.toUpperCase()}. Tested per applicable ASTM/ASME standards with complete mill certificates.`,
    standards: ["ASTM Standard Specs", "ASME Dimensional Standards"],
    applications: ["Industrial Piping", "Chemical Processing", "Heavy Engineering"],
    forms: ["Pipes & Tubes", "Fittings", "Flanges", "Plates", "Bars"]
  };

  // Find products matching this grade
  const matchingProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const g = (p.grade || (Array.isArray(p.grades) ? p.grades.join(" ") : "") || "").toLowerCase();
      const pSlug = p.gradeSlug ? p.gradeSlug.toLowerCase() : "";
      return g.includes(normalizedSlug) || pSlug.includes(normalizedSlug);
    });
  }, [normalizedSlug]);

  useEffect(() => {
    document.title = `${gradeInfo.name} Products | Supreme Metal & Alloys`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [gradeInfo]);

  // GSAP Entrance
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-grade-fade",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [normalizedSlug]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* Grade Hero Header */}
      <section className="bg-[#0E2A3A] text-white pt-5 pb-6 sm:pt-12 sm:pb-16 border-b border-slate-700/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a4c_1px,transparent_1px),linear-gradient(to_bottom,#1e3a4c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb (Desktop/Tablet) */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono mb-4 gsap-grade-fade">
            <a href="#home" className="hover:text-[#F36F21]">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={onBackToProducts} className="hover:text-[#F36F21]">Products</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <a href={`#products/material/${gradeInfo.materialSlug}`} className="hover:text-[#F36F21]">
              {gradeInfo.material}
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F36F21] font-semibold">{gradeInfo.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 gsap-grade-fade">
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F36F21]/15 border border-[#F36F21]/30 text-[#F36F21] text-xs font-mono font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>[{gradeInfo.uns}]</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3">
                {gradeInfo.name}
              </h1>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal mb-3 sm:mb-6 max-w-2xl line-clamp-2 sm:line-clamp-none">
                {gradeInfo.overview}
              </p>

              {/* Supported Forms Chips (Desktop/Tablet only) */}
              <div className="hidden sm:flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-400 font-bold uppercase">Available Product Forms:</span>
                {gradeInfo.forms.map((f, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-800 text-amber-400 rounded-md border border-slate-700 font-bold">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Specification Box (Desktop/Tablet only) */}
            <div className="hidden sm:block lg:col-span-4 gsap-grade-fade">
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/90 shadow-xl space-y-3">
                <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
                  Governing Standards
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {gradeInfo.standards.map((std, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-800 text-slate-200 text-xs font-mono rounded border border-slate-700">
                      {std}
                    </span>
                  ))}
                </div>

                <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider pt-2 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  Primary Industries
                </h3>
                <div className="text-xs text-slate-300 leading-relaxed font-medium">
                  {gradeInfo.applications.join(" • ")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Available Products Grid for Grade */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#F36F21] uppercase tracking-wider block">
              [ GRADE CATALOGUE MATRIX ]
            </span>
            <h2 className="text-2xl font-extrabold text-[#0E2A3A]">
              Available {gradeInfo.name} Products ({matchingProducts.length})
            </h2>
          </div>

          <button
            onClick={onBackToProducts}
            className="text-xs font-mono font-bold text-[#F36F21] hover:underline"
          >
            View All Products Catalogue
          </button>
        </div>

        {matchingProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-sm my-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">Custom Mill Fabrication Available</h3>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              We stock and manufacture custom forms in <strong>{gradeInfo.name}</strong> upon request. Submit your requirements for immediate quote.
            </p>
            <button
              onClick={onBackToProducts}
              className="px-5 py-2.5 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-xl"
            >
              Browse Full Products List
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {matchingProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => onSelectProduct(product.slug || product.id)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className={`h-1.5 ${product.division === "MANUFACTURER" ? "bg-[#F36F21]" : "bg-blue-600"}`} />

                <div className="p-5 flex flex-col flex-1">
                  <div className="relative h-56 rounded-xl bg-slate-50 border border-slate-100 p-4 mb-5 flex items-center justify-center overflow-hidden">
                    {product.heroImage ? (
                      <img
                        src={product.heroImage}
                        alt={product.name}
                        className="max-h-full max-w-full w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <Package className="w-12 h-12 text-slate-300" />
                    )}
                    <span className="absolute top-3 left-3 bg-[#0E2A3A] text-white text-[9px] font-mono font-extrabold uppercase px-2.5 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0E2A3A] mb-2 group-hover:text-[#F36F21] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded text-xs font-bold border border-slate-200">
                      {product.material}
                    </span>
                    <span className="px-2.5 py-1 bg-amber-50 text-[#F36F21] rounded text-xs font-mono font-bold border border-amber-200">
                      Grade: {product.grade}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="px-5 py-3.5 bg-slate-50 border-t flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors">
                  <span className="text-xs font-mono font-bold text-[#0E2A3A] group-hover:text-white">
                    EXPLORE PRODUCT DATASHEET
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#F36F21]" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
