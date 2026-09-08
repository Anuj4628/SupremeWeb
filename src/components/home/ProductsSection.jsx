import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useGsapReveal } from "../../utils/useGsapReveal";

// ─── 4 Manufacturer Division Dedicated Assets (Single Source of Truth) ───
import ssButtWeldImg from "../../assets/All Products/Butt weld fit/Stainless Steel Butt Weld Fittings.png";
import flangeSsImg from "../../assets/All Products/Flanges/flange_ss.png";
import forgedSsImg from "../../assets/All Products/Forged Fittings/forged_ss.png";
import ferruleFittingsImg from "../../assets/All Products/ferrule fittings.png";

// ─── 4 Supplier Division Dedicated Assets (Single Source of Truth) ────────
import ssPipesImg from "../../assets/All Products/Supplier division/Pipes and Tubes/stainless steel.png";
import ssSheetsImg from "../../assets/All Products/Supplier division/Sheet and plates/stainless steel.png";
import ssRodsImg from "../../assets/All Products/Supplier division/Rods and BArs/stainless steel.png";
import ssCoilImg from "../../assets/All Products/Supplier division/Coil/stainless steel.jpg";

// Exactly 8 Featured Products: 4 Manufacturer Division + 4 Supplier Division
// Using exact existing product names, images, descriptions, and detail routes
const featuredProducts = [
  // ─── MANUFACTURER DIVISION (4) ──────────────────────────────────────────
  {
    id: "mfg-buttweld-elbow",
    division: "MANUFACTURER",
    divisionLabel: "Manufacturer Division",
    category: "Butt Weld Fittings",
    title: "Butt Weld Fittings",
    desc: "Seamless & welded elbows, tees, reducers & caps",
    image: ssButtWeldImg,
    href: "#products/category/butt-weld-fittings-manufactured-in-mumbai"
  },
  {
    id: "mfg-weldneck-flange",
    division: "MANUFACTURER",
    divisionLabel: "Manufacturer Division",
    category: "Flanges",
    title: "Flanges",
    desc: "ANSI, DIN & BS forged industrial flanges",
    image: flangeSsImg,
    href: "#products/category/flanges-manufactured-in-mumbai"
  },
  {
    id: "mfg-forged-elbow",
    division: "MANUFACTURER",
    divisionLabel: "Manufacturer Division",
    category: "Forged Fittings",
    title: "Forged Fittings",
    desc: "Socketweld & threaded fittings (2000# to 9000#)",
    image: forgedSsImg,
    href: "#products/category/forged-fittings-manufactured-in-mumbai"
  },
  {
    id: "mfg-ferrule-fittings",
    division: "MANUFACTURER",
    divisionLabel: "Manufacturer Division",
    category: "Ferrule Fittings",
    title: "Ferrule Fittings",
    desc: "Single & double ferrule tube fittings (up to 10,000 PSI)",
    image: ferruleFittingsImg,
    href: "#products/category/ferrule-fittings-manufactured-in-mumbai"
  },

  // ─── SUPPLIER DIVISION (4) ──────────────────────────────────────────────
  {
    id: "sup-pipes-tubes",
    division: "SUPPLIER",
    divisionLabel: "Supplier Division",
    category: "Pipes & Tubes",
    title: "Pipes & Tubes",
    desc: "High-pressure seamless & welded pipes & tubes",
    image: ssPipesImg,
    href: "#products/category/pipes-tubes"
  },
  {
    id: "sup-sheets-plates",
    division: "SUPPLIER",
    divisionLabel: "Supplier Division",
    category: "Sheets & Plates",
    title: "Sheets & Plates",
    desc: "Heavy engineering plates & cold rolled sheets",
    image: ssSheetsImg,
    href: "#products/category/sheets-plates"
  },
  {
    id: "sup-rods-bars",
    division: "SUPPLIER",
    divisionLabel: "Supplier Division",
    category: "Rods & Bars",
    title: "Rods & Bars",
    desc: "Precision ground round, hex & square bars",
    image: ssRodsImg,
    href: "#products/category/rods-bars"
  },
  {
    id: "sup-coils",
    division: "SUPPLIER",
    divisionLabel: "Supplier Division",
    category: "Coil",
    title: "Coil",
    desc: "2B, BA & Mirror finish precision slit coils",
    image: ssCoilImg,
    href: "#products/category/coil"
  }
];

export default function ProductsSection() {
  const [filter, setFilter] = useState("all");
  const containerRef = useGsapReveal();
  const gridContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const tweensRef = useRef([]);

  const filteredProducts =
    filter === "all"
      ? featuredProducts
      : featuredProducts.filter((item) => item.division === filter);

  // Setup subtle GSAP floating micro-animations for compact cards
  useEffect(() => {
    tweensRef.current.forEach((item) => {
      if (item && item.tween) item.tween.kill();
    });
    tweensRef.current = [];

    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((cardEl, idx) => {
      const duration = 3.5 + (idx % 4) * 0.6;
      const delay = (idx % 3) * 0.3;
      const yDist = 6 + (idx % 3) * 2;
      const xDist = 3 + (idx % 2) * 2;
      const rot = 0.5 + (idx % 3) * 0.3;

      const tween = gsap.fromTo(
        cardEl,
        { y: 0, x: 0, rotation: 0 },
        {
          y: idx % 2 === 0 ? -yDist : yDist,
          x: idx % 3 === 0 ? xDist : -xDist,
          rotation: idx % 2 === 0 ? rot : -rot,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.easeInOut"
        }
      );

      tweensRef.current[idx] = { el: cardEl, tween };
    });

    return () => {
      tweensRef.current.forEach((item) => {
        if (item && item.tween) item.tween.kill();
      });
    };
  }, [filter]);

  // Card Mouse Enter & Leave interactions
  const handleCardMouseEnter = (index, cardEl) => {
    const item = tweensRef.current[index];
    if (item && item.tween) {
      item.tween.pause();
    }
    gsap.to(cardEl, {
      scale: 1.03,
      zIndex: 20,
      boxShadow: "0 20px 40px -10px rgba(14, 42, 58, 0.2), 0 0 20px 2px rgba(217, 74, 31, 0.15)",
      borderColor: "rgba(217, 74, 31, 0.6)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCardMouseLeave = (index, cardEl) => {
    gsap.to(cardEl, {
      scale: 1,
      zIndex: 1,
      boxShadow: "0 4px 16px rgba(14, 42, 58, 0.06)",
      borderColor: "rgba(226, 232, 240, 0.9)",
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        const item = tweensRef.current[index];
        if (item && item.tween) {
          item.tween.resume();
        }
      }
    });
  };

  // Subtle 3D Parallax Tilt across section on mouse move
  const handleGridMouseMove = (e) => {
    if (!gridContainerRef.current) return;
    const rect = gridContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    gsap.to(gridContainerRef.current, {
      rotationY: x * 1.2,
      rotationX: -y * 1.2,
      duration: 0.6,
      ease: "power1.out",
      transformPerspective: 1200
    });
  };

  const handleGridMouseLeave = () => {
    if (!gridContainerRef.current) return;
    gsap.to(gridContainerRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#F1F5F9] via-[#FAFBFD] to-white text-slate-800 py-10 sm:py-14 lg:py-16 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Background Engineering Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-gsap="fade-up">
          <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 inline-block mb-2.5 font-mono shadow-2xs">
            [FEATURED PRODUCT RANGE]
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-2.5">
            Manufacturer & Supplier <span className="text-[#D94A1F]">Product Range</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Featuring 4 essential products from our Manufacturer Division and 4 from our Supplier Division, engineered to international ASTM, ASME, DIN, and EN standards.
          </p>

          {/* Division Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {[
              { label: "All Featured (8)", key: "all" },
              { label: "Manufacturer Division (4)", key: "MANUFACTURER" },
              { label: "Supplier Division (4)", key: "SUPPLIER" }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 font-mono uppercase cursor-pointer ${
                  filter === tab.key
                    ? "bg-[#0E2A3A] text-white shadow-sm border border-[#0E2A3A]"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#D94A1F]/40 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 8 COMPACT FEATURED PRODUCT CARDS GRID */}
        {/* ========================================================================= */}
        <div
          ref={gridContainerRef}
          onMouseMove={handleGridMouseMove}
          onMouseLeave={handleGridMouseLeave}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 transition-transform duration-300 ease-out py-2"
        >
          {filteredProducts.map((product, index) => (
            <a
              key={product.id}
              href={product.href}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={(e) => handleCardMouseEnter(index, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(index, e.currentTarget)}
              className="relative bg-white rounded-xl border border-slate-200/90 hover:border-[#D94A1F]/60 shadow-[0_4px_16px_rgba(14,42,58,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(14,42,58,0.18),0_0_18px_2px_rgba(217,74,31,0.14)] overflow-hidden transition-all duration-300 flex flex-col justify-between group p-3 sm:p-3.5 will-change-transform cursor-pointer no-underline block"
            >
              {/* Top Accent Gradient Border Strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E2A3A]/40 to-transparent group-hover:via-[#D94A1F] transition-all duration-500 rounded-t-xl z-10" />

              {/* Image Showcase Header Container */}
              <div className="relative h-44 sm:h-52 rounded-lg overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/50 border border-slate-200/60 mb-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card Body Content */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  {/* Division Badge & Category */}
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded border ${
                        product.division === "MANUFACTURER"
                          ? "bg-amber-50 text-[#D94A1F] border-amber-200/80"
                          : "bg-sky-50 text-[#0E2A3A] border-sky-200/80"
                      }`}
                    >
                      {product.division}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 font-mono truncate max-w-[130px]">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0E2A3A] mb-1.5 leading-snug group-hover:text-[#D94A1F] transition-colors line-clamp-2 min-h-[2.5rem]">
                    {product.category}
                  </h3>

                  {/* Minimal Short Description (No Grades & Standards) */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3 line-clamp-2 min-h-[2rem]">
                    {product.desc}
                  </p>
                </div>

                {/* Bottom Link Action */}
                <div className="flex items-center gap-1.5 text-[#D94A1F] font-bold text-xs group-hover:gap-2 transition-all font-mono pt-2 border-t border-slate-100">
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
