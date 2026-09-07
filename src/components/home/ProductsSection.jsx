import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight
} from "lucide-react";

// Product Images from "All Products" folder
import angleChannelFlatImg from "../../assets/All Products/Angle,Channel,flat bar.png";
import buttWeldFitImg from "../../assets/All Products/Butt Weld fit.png";
import coilImg from "../../assets/All Products/Coil.png";
import fastenersImg from "../../assets/All Products/Fasteners.png";
import sheetImg from "../../assets/All Products/Sheet.png";
import tcFittingsImg from "../../assets/All Products/TC fittings.png";
import dairySanitaryImg from "../../assets/All Products/dairy and sanitary tube fittings.png";
import ferruleFittingsImg from "../../assets/All Products/ferrule fittings.png";
import forgedFittingsImg from "../../assets/All Products/fordege fitting.png";

// Product Image from "Product images" folder
import precisionPipesImg from "../../assets/Product images/PRECISION PIPES, TUBES & HIGH-PERFORMANCE ALLOYS.png";
import { useGsapReveal } from "../../utils/useGsapReveal";

// Comprehensive Individual Product Cards mapped 1-to-1 with actual uploaded assets
const allProductItems = [
  {
    id: "PROD-01",
    tag: "Piping & Tubes",
    title: "Seamless & Welded Pipes & Tubes",
    specs: "1/2\" NB to 36\" NB (Sch 5S to XXS)",
    standards: "ASTM A312, A335 (P5/P9/P11/P22/P91), A106 B, A333 Gr 6",
    desc: "High-performance seamless and welded steel pipes for high-temperature, cryogenic, and extreme pressure applications.",
    image: precisionPipesImg,
    category: "pipes"
  },
  {
    id: "PROD-02",
    tag: "Plates & Heavy Metallurgy",
    title: "Sheets & Heavy Engineering Plates",
    specs: "0.5mm to 200mm Thickness",
    standards: "ASTM A240, A387, A516 Gr 60/70, IS 2062, DIN 17175",
    desc: "Heavy engineering plates, pressure vessel plates, and cold rolled sheets in stainless steel, duplex, and superalloys.",
    image: sheetImg,
    category: "plates"
  },
  {
    id: "PROD-03",
    tag: "Flat Coils & Strip",
    title: "Stainless Steel & Alloy Coils",
    specs: "0.3mm to 16mm Thickness | Custom Slit Widths",
    standards: "ASTM A240, EN 10088-2, JIS G4305",
    desc: "Precision hot rolled and cold rolled coils available in 2B, BA, No.4, and mirror finish in high-yield alloys.",
    image: coilImg,
    category: "plates"
  },
  {
    id: "PROD-04",
    tag: "Structural & Long Products",
    title: "Angles, Channels & Flat Bars",
    specs: "Equal / Unequal Angles, Channels, Flat & Hex Bars",
    standards: "ASTM A276, A479, EN 10058, DIN 1017",
    desc: "Cold drawn and hot rolled structural angles, channels, and flat bars for heavy fabrication and marine structures.",
    image: angleChannelFlatImg,
    category: "fasteners"
  },
  {
    id: "PROD-05",
    tag: "Forged Components",
    title: "Forged Pipe Fittings & Industrial Flanges",
    specs: "Socketweld & Threaded 2000# to 9000# | Flanges 150# to 2500#",
    standards: "ASME B16.11, ANSI B16.5, B16.47, MSS SP-83",
    desc: "Precision forged elbows, tees, couplings, unions, and ANSI/ASME forged flanges for high-pressure systems.",
    image: forgedFittingsImg,
    category: "fittings"
  },
  {
    id: "PROD-06",
    tag: "Buttweld Fittings",
    title: "Buttweld Pipe Fittings",
    specs: "1/2\" to 36\" NB (Sch 5S to XXS)",
    standards: "ASME B16.9, MSS SP-75, DIN 2605, BS 1640",
    desc: "Precision seamless and welded elbows, tees, reducers, caps, and stub ends for critical pipeline infrastructure.",
    image: buttWeldFitImg,
    category: "fittings"
  },
  {
    id: "PROD-07",
    tag: "Fasteners & Bolting",
    title: "High Tensile Fasteners & Stud Bolts",
    specs: "Metric & Imperial Sizes (M6 to M100)",
    standards: "ASTM A193 B7/B8, A194 2H/8, DIN 931, DIN 933",
    desc: "High-tensile stud bolts, heavy hex nuts, washers, and threaded rods engineered for extreme pressure assemblies.",
    image: fastenersImg,
    category: "fasteners"
  },
  {
    id: "PROD-08",
    tag: "Precision Instrumentation",
    title: "Instrumentation Ferrule Fittings",
    specs: "1/16\" to 2\" OD | Metric 2mm to 38mm",
    standards: "ASTM A276 / A479, Swagelok Compatible",
    desc: "Single and double ferrule compression tube fittings, unions, and valves for high-pressure gas and fluid lines.",
    image: ferruleFittingsImg,
    category: "sanitary"
  },
  {
    id: "PROD-09",
    tag: "Hygienic Process",
    title: "Tri-Clover (TC) Sanitary Fittings",
    specs: "1/2\" to 4\" OD (SMS, DIN, ASME BPE)",
    standards: "3A, SMS, DIN 11851, ISO 2852, ASME BPE",
    desc: "Mirror electro-polished Tri-Clamp TC ferrules, heavy duty clamps, and sanitary process fittings (Ra < 0.4µm).",
    image: tcFittingsImg,
    category: "sanitary"
  },
  {
    id: "PROD-10",
    tag: "Sanitary Tubing",
    title: "Dairy & Sanitary Tube Fittings",
    specs: "1/2\" to 4\" OD Sanitary Tubing Assemblies",
    standards: "ASME BPE, DIN 11850, SMS 1145, 3A Sanitary",
    desc: "High-purity stainless steel sanitary tubing, bends, tees, and union fittings for dairy, food, and pharmaceutical processing.",
    image: dairySanitaryImg,
    category: "sanitary"
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
      ? allProductItems
      : allProductItems.filter((item) => item.category === filter);

  // Setup GSAP floating bubble animations for product cards
  useEffect(() => {
    // Cleanup previous tweens
    tweensRef.current.forEach((item) => {
      if (item && item.tween) item.tween.kill();
    });
    tweensRef.current = [];

    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((cardEl, idx) => {
      const duration = 3.5 + (idx % 4) * 0.7;
      const delay = (idx % 3) * 0.4;
      const yDist = 10 + (idx % 3) * 5;
      const xDist = 4 + (idx % 2) * 3;
      const rot = 0.8 + (idx % 3) * 0.4;

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
      scale: 1.04,
      zIndex: 20,
      boxShadow: "0 28px 55px -12px rgba(14, 42, 58, 0.24), 0 0 24px 2px rgba(217, 74, 31, 0.18)",
      borderColor: "rgba(217, 74, 31, 0.6)",
      duration: 0.35,
      ease: "power2.out"
    });
  };

  const handleCardMouseLeave = (index, cardEl) => {
    gsap.to(cardEl, {
      scale: 1,
      zIndex: 1,
      boxShadow: "0 12px 30px -8px rgba(14, 42, 58, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03)",
      borderColor: "rgba(203, 213, 225, 0.85)",
      duration: 0.35,
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
      rotationY: x * 1.5,
      rotationX: -y * 1.5,
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
      className="relative bg-gradient-to-b from-[#F1F5F9] via-[#FAFBFD] to-white text-slate-800 py-12 sm:py-16 lg:py-20 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Background Engineering Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12" data-gsap="fade-up">
          <span className="text-[#D94A1F] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-md border border-amber-200 inline-block mb-2.5 font-mono shadow-2xs">
            [CATALOGUE PRODUCT RANGE]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-3">
            High-Performance Metal Products & <span className="text-[#D94A1F]">Piping Infrastructure</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            All materials are stocked and supplied in strict accordance with international ASTM, ASME, DIN, and IS standards backed by 100% EN 10204 3.1/3.2 Mill Test Certificates.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { label: "All Products", key: "all" },
              { label: "Pipes & Tubes", key: "pipes" },
              { label: "Plates, Sheets & Coils", key: "plates" },
              { label: "Fittings & Flanges", key: "fittings" },
              { label: "Fasteners & Structural", key: "fasteners" },
              { label: "Sanitary & Instrumentation", key: "sanitary" }
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 font-mono uppercase ${
                  filter === f.key
                    ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A]"
                    : "bg-white text-slate-700 border border-slate-200/90 hover:border-[#D94A1F]/40 hover:bg-white shadow-2xs"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* GSAP FLOATING BUBBLE PRODUCT CARDS GRID */}
        {/* ========================================================================= */}
        <div
          ref={gridContainerRef}
          onMouseMove={handleGridMouseMove}
          onMouseLeave={handleGridMouseLeave}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-transform duration-300 ease-out py-4"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={(e) => handleCardMouseEnter(index, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(index, e.currentTarget)}
              className="relative bg-gradient-to-b from-white via-white to-slate-50/60 rounded-2xl border border-slate-300/80 shadow-[0_12px_30px_-8px_rgba(14,42,58,0.12),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_28px_55px_-12px_rgba(14,42,58,0.24),0_0_24px_2px_rgba(217,74,31,0.18)] hover:border-[#D94A1F]/60 overflow-hidden transition-all duration-300 flex flex-col justify-between group p-4 will-change-transform cursor-pointer"
            >
              {/* Top Accent Gradient Border Strip */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0E2A3A]/40 to-transparent group-hover:via-[#D94A1F] transition-all duration-500 rounded-t-2xl z-10" />

              {/* Image Showcase Header Container - Optimized Adaptive Product Presentation */}
              <div className="relative h-52 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/50 border border-slate-200/60 mb-4 flex items-center justify-center p-2.5 sm:p-3.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain filter brightness-[1.03] contrast-[1.05] drop-shadow-md transition-all duration-500 group-hover:scale-[1.06] group-hover:drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Card Body Content */}
              <div className="px-2 pb-2 flex flex-col justify-between flex-1">
                <div>
                  {/* Category Tagline */}
                  <span className="text-[#D94A1F] font-extrabold text-xs uppercase tracking-widest font-mono block mb-1.5">
                    {product.tag}
                  </span>

                  {/* Product Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E2A3A] mb-2 leading-snug group-hover:text-[#D94A1F] transition-colors">
                    {product.title}
                  </h3>

                  {/* Specifications / Standards */}
                  <p className="text-xs text-slate-500 font-medium mb-3 leading-relaxed">
                    <span className="text-slate-700 font-bold">Grades / Standards:</span> {product.standards}
                  </p>

                  {/* Minimal Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {product.desc}
                  </p>
                </div>

                {/* Bottom Red Link Action */}
                <div className="flex items-center gap-1.5 text-[#D94A1F] font-extrabold text-sm group-hover:gap-2.5 transition-all font-mono">
                  <span>View Product Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
