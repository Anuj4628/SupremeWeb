import React, { useState, useMemo, useEffect } from "react";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  X,
  Factory,
  Globe,
  Filter,
  CheckCircle2,
  Building2,
  FileSpreadsheet
} from "lucide-react";
import {
  MATERIALS,
  PRODUCTS,
  getMaterialBySlug,
  getProductsByMaterial
} from "../../data/productCatalog";

export default function MaterialPage({ materialSlug, categorySlug, onSelectProduct, onBackToProducts }) {
  const [selectedGrade, setSelectedGrade] = useState("all");
  const material = getMaterialBySlug(materialSlug) || MATERIALS[0];

  const materialProducts = useMemo(() => {
    let prods = getProductsByMaterial(material.slug);
    if (categorySlug) {
      prods = prods.filter((p) => p.categorySlug === categorySlug);
    }
    return prods;
  }, [material, categorySlug]);

  useEffect(() => {
    document.title = `${material.name} Products | Supreme Metal & Alloys`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [material]);

  const filteredProducts = useMemo(() => {
    if (selectedGrade === "all") return materialProducts;
    const cleanGrade = selectedGrade.toLowerCase();
    return materialProducts.filter((p) => {
      const pGrade = (p.grade || (Array.isArray(p.grades) ? p.grades.join(" ") : "") || "").toLowerCase();
      return pGrade.includes(cleanGrade);
    });
  }, [materialProducts, selectedGrade]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* Hero Header */}
      <section className="bg-[#0E2A3A] text-white py-5 sm:py-16 border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs (Desktop/Tablet) */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono mb-4">
            <a href="#home" className="hover:text-[#F36F21]">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={onBackToProducts} className="hover:text-[#F36F21]">Products</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F36F21] font-semibold">{material.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="hidden sm:inline-block text-[#F36F21] font-mono text-xs font-bold uppercase tracking-widest bg-[#F36F21]/15 px-3 py-1 rounded border border-[#F36F21]/30 mb-3">
              [ METALLURGICAL MATERIAL SPECIFICATION ]
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3">
              {material.name} Products &amp; Components
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
              {material.description}
            </p>

            {/* Available Grades Pill Chips (Desktop/Tablet only) */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-400 font-bold uppercase">Supported Grades:</span>
              {material.grades.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGrade(g === selectedGrade ? "all" : g)}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    selectedGrade === g
                      ? "bg-[#F36F21] text-white font-bold"
                      : "bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Grade Selector Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#F36F21]" />
            <span className="text-xs font-mono font-bold text-slate-700 uppercase">
              Filter By Grade:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGrade("all")}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                selectedGrade === "all" ? "bg-[#0E2A3A] text-white" : "bg-white text-slate-700 border"
              }`}
            >
              All Grades ({materialProducts.length})
            </button>
            {material.grades.map((g, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGrade(g)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  selectedGrade === g ? "bg-[#F36F21] text-white" : "bg-white text-slate-700 border"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl border text-center max-w-md mx-auto my-8">
            <Package className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold mb-1">No Specific Grade Match</h3>
            <p className="text-xs text-slate-600 mb-4 font-medium">
              Try clicking "All Grades" to view all {material.name} products.
            </p>
            <button
              onClick={() => setSelectedGrade("all")}
              className="px-4 py-2 bg-[#0E2A3A] text-white text-xs font-mono font-bold uppercase rounded-lg"
            >
              Show All {material.name} Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => onSelectProduct(product.slug || product.id)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="h-1 bg-[#F36F21]" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="relative h-60 sm:h-64 rounded-xl bg-slate-50 border border-slate-100 mb-4 overflow-hidden">
                    {product.heroImage ? (
                      <img
                        src={product.heroImage}
                        alt={product.name}
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <Package className="w-12 h-12 text-slate-300" />
                    )}
                    <span className="absolute top-3 left-3 bg-[#0E2A3A] text-white text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0E2A3A] mb-2 group-hover:text-[#F36F21] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-1 bg-amber-50 text-[#F36F21] rounded text-xs font-mono font-bold border border-amber-200">
                      Grade: {product.grade}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="px-5 py-3.5 bg-slate-50 border-t flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors">
                  <span className="text-xs font-mono font-bold text-[#0E2A3A] group-hover:text-white">
                    VIEW PRODUCT DETAILS
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
