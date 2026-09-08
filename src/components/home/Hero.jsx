import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers,
  PhoneCall,
  CheckCircle2
} from "lucide-react";
import companyConfig from "../../config/company";
import forgedFittingsImg from "../../assets/Product images/fordege industrial.png";
import corrosionMetalsImg from "../../assets/Product images/CORROSION-RESISTANT METALS FOR CRITICAL INDUSTRIES.png";
import heavyPlatesCoilsBarsImg from "../../assets/Product images/HEAVY ENGINEERING PLATES, COILS & ROUND BARS.png";
import precisionPipesTubesImg from "../../assets/Product images/PRECISION PIPES, TUBES & HIGH-PERFORMANCE ALLOYS.png";

// High-resolution clear industrial metal & metallurgy backdrops tailored to Supreme's catalogue
const heroSlides = [
  {
    id: 1,
    title: "PRECISION PIPES, TUBES & HIGH-PERFORMANCE ALLOYS",
    subtitle:
      "ISO 9001:2015 certified stockist & global supplier of Stainless Steel, Duplex, Nickel Alloys, Titanium, and heavy industrial piping infrastructure.",
    badgeTag: "ISO 9001:2015 CERTIFIED | STOCKIST & DEALER",
    categoryLabel: "PIPING & HIGH ALLOY SOLUTIONS",
    image: precisionPipesTubesImg,
    overlayOpacity: "bg-[#0E2A3A]/38",
    highlightStats: [
      { label: "Quality Standard", value: "ISO 9001:2015" },
      { label: "Primary Materials", value: "SS, Duplex, Nickel, Titanium" },
      { label: "Piping Range", value: "Seamless & Welded" }
    ],
    categories: ["SEAMLESS & WELDED PIPES", "HEAVY TUBES", "LINE PIPES"],
    keyGrades: [
      { material: "Stainless Steel", spec: "304/304L, 316/316L, 321, 310S, 904L" },
      { material: "Duplex Steel", spec: "UNS S31803 (2205), S32750 (2507)" },
      { material: "Titanium Alloys", spec: "Grade 2, Grade 5 (Ti-6Al-4V), Gr 7" }
    ]
  },
  {
    id: 2,
    title: "FORGED INDUSTRIAL FLANGES & PIPELINE FITTINGS",
    subtitle:
      "ANSI / ASME / DIN forged flanges including Weld Neck, Slip-On, Blind, and Socketweld fittings engineered for critical high-pressure oil, gas, and power systems.",
    badgeTag: "PIPING COMPONENTS & FORGED FITTINGS",
    categoryLabel: "CRITICAL INFRASTRUCTURE",
    image: forgedFittingsImg,
    overlayOpacity: "bg-[#0E2A3A]/42",
    highlightStats: [
      { label: "Flange Types", value: "Weld Neck, Slip-On, Blind" },
      { label: "Standards", value: "ANSI, ASME, DIN, BS" },
      { label: "Testing", value: "100% Hydro & PMI Tested" }
    ],
    categories: ["INDUSTRIAL FLANGES", "BUTTWELD FITTINGS", "FORGED FITTINGS"],
    keyGrades: [
      { material: "High Nickel Alloys", spec: "Inconel 600/625, Monel 400/K500" },
      { material: "Hastelloy", spec: "C276, C22 High Corrosion Resistant" },
      { material: "Carbon & Alloy Steel", spec: "ASTM A106 B, A335 P11/P22/P91" }
    ]
  },
  {
    id: 3,
    title: "HEAVY ENGINEERING PLATES, COILS & ROUND BARS",
    subtitle:
      "Cold & hot rolled sheets, heavy boiler plates, precision ground hex/round bars, and high tensile fasteners built for high-stress manufacturing and marine environments.",
    badgeTag: "FLAT & LONG PRODUCTS SPECIALISTS",
    categoryLabel: "PRECISION METALLURGY",
    image: heavyPlatesCoilsBarsImg,
    overlayOpacity: "bg-[#0E2A3A]/38",
    highlightStats: [
      { label: "Flat Products", value: "Plates, Sheets, Coils, Shims" },
      { label: "Long Products", value: "Round, Hex & Square Bars" },
      { label: "Bolting Hardware", value: "High Tensile Studs & Hex Bolts" }
    ],
    categories: ["SHEETS & PLATES", "PRECISION BARS", "HIGH TENSILE FASTENERS"],
    keyGrades: [
      { material: "Specialty Stainless", spec: "SMO 254, 904L, 17-4PH" },
      { material: "High Temp Alloys", spec: "Incoloy 800 / 825, Inconel 718" },
      { material: "Ferrous & Non Ferrous", spec: "Full Range Mill Certified" }
    ]
  },
  {
    id: 4,
    title: "CORROSION-RESISTANT METALS FOR CRITICAL INDUSTRIES",
    subtitle:
      "Trusted metal supplier to Oil & Gas Refineries, Petrochemical Plants, Marine & Shipbuilding, Thermal Power, and Hygienic Dairy/Pharma Processing.",
    badgeTag: "GLOBAL SUPPLY & CUSTOM FABRICATION",
    categoryLabel: "SECTOR-SPECIFIC SOLUTIONS",
    image: corrosionMetalsImg,
    overlayOpacity: "bg-[#0E2A3A]/35",
    highlightStats: [
      { label: "Target Sectors", value: "Oil & Gas, Marine, Power, Pharma" },
      { label: "Verification", value: "MTC to EN 10204 3.1 Certified" },
      { label: "Dispatch", value: "Mumbai Ready Stock & Fast Freight" }
    ],
    categories: ["OIL & GAS REFINERIES", "PETROCHEMICAL & POWER", "SANITARY FITTINGS"],
    keyGrades: [
      { material: "Super Duplex", spec: "UNS S32750 / 2507, S32760" },
      { material: "Sanitary Fittings", spec: "Tri-Clover, Electro-polished 316L" },
      { material: "Non-Ferrous Metals", spec: "Copper-Nickel 90/10, 70/30" }
    ]
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[current];

  // Smooth image transition variants (NO OVERLAY FLASH)
  const imageVariants = {
    initial: (dir) => ({
      opacity: 0,
      scale: 1.03,
      x: dir > 0 ? 30 : -30
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? -30 : 30,
      transition: {
        duration: 0.45,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.07,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full h-[52vh] min-h-[380px] max-h-[460px] sm:min-h-[calc(100vh-80px)] sm:max-h-none sm:h-auto lg:h-[calc(100vh-128px)] overflow-hidden bg-[#0E2A3A] text-white select-none"
    >
      {/* Background Image Slider with FULL CLEAR SHARP METALLIC IMAGE EDGE-TO-EDGE */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.img
            key={slide.id}
            custom={direction}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04]"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* SUBTLE UNIFORM TINT: Exactly equal opacity across the full hero (No left-to-right gradient, no half-dark effect) */}
      <div className="absolute inset-0 bg-[#0E2A3A]/25 pointer-events-none" />

      {/* Main Content Container - Balanced Responsive Hierarchy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 flex flex-col justify-center sm:justify-between h-full space-y-3 sm:space-y-4 lg:space-y-0">
        
        {/* Top Section - Headline, Description Directly Over Image & Clean CTAs */}
        <div className="max-w-4xl pt-0 sm:pt-2 space-y-2 sm:space-y-3.5 lg:space-y-4">
          
          {/* ISO & Brand Tag Badge (Hidden on mobile for clean half-screen hierarchy) */}
          <motion.div
            key={`badge-${slide.id}`}
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-xl bg-[#0E2A3A]/70 border border-white/15 shadow-lg backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#D94A1F]" />
            <span className="text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider text-white">
              {slide.badgeTag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D94A1F]" />
            <span className="hidden sm:inline text-[10px] lg:text-[11px] font-semibold text-slate-300 tracking-wide uppercase">
              {companyConfig.udyamNo}
            </span>
          </motion.div>

          {/* Subtle Premium Glass Panel behind Main Heading & Subtitle */}
          <motion.div
            key={`heading-panel-${slide.id}`}
            custom={1}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-3xl bg-[#0E2A3A]/60 sm:bg-[#0E2A3A]/55 border border-white/15 shadow-xl backdrop-blur-md max-w-4xl space-y-1.5 sm:space-y-3"
          >
            {/* Main Industrial Headline */}
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15] lg:leading-[1.12]">
              {slide.title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1.5 sm:mr-2.5 lg:mr-3">
                  {word === "HIGH-PERFORMANCE" || word === "FLANGES" || word === "HEAVY" || word === "CORROSION-RESISTANT" ? (
                    <span className="text-[#D94A1F]">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Description Text */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 max-w-3xl leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
              {slide.subtitle}
            </p>
          </motion.div>

          {/* Primary & Secondary Action CTAs */}
          <motion.div
            key={`cta-${slide.id}`}
            custom={3}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3.5 lg:gap-4"
          >
            {/* Primary CTA: Get a Quote */}
            <a
              href="#contact#quote"
              className="group relative inline-flex items-center gap-2 sm:gap-2.5 bg-[#D94A1F] hover:bg-[#c23e17] text-white font-bold text-xs sm:text-sm px-4.5 sm:px-7 py-2 sm:py-3 lg:py-3.5 rounded-xl border border-white/20 shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-wider">Get a Quote</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Secondary CTA: Explore Products (Hidden on mobile for clean compact hero) */}
            <a
              href="#products"
              className="hidden sm:inline-flex group items-center gap-2 bg-[#0E2A3A]/70 hover:bg-[#0E2A3A]/90 text-white font-semibold text-xs sm:text-sm px-4.5 sm:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-xl border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-[#D94A1F] transition-colors" />
              <span className="uppercase tracking-wider">Explore Products</span>
            </a>

            {/* Quick Contact Hotline Indicator */}
            <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#0E2A3A]/70 border border-white/15 backdrop-blur-md shadow-md text-white">
              <div className="w-7 h-7 rounded-full bg-[#0E2A3A] border border-white/20 flex items-center justify-center text-[#D94A1F]">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Sales Hotline</div>
                <a href={`tel:${companyConfig.phone1.replace(/\s+/g, '')}`} className="text-xs font-bold text-white hover:text-[#D94A1F] transition-colors">
                  {companyConfig.phone1}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Clean & Minimal Stat Cards (Hidden on mobile for compact hero) */}
          <motion.div
            key={`stats-${slide.id}`}
            custom={4}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="hidden sm:grid pt-1 grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl"
          >
            {slide.highlightStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0E2A3A]/65 border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 backdrop-blur-md shadow-lg transition-all duration-200 hover:border-[#D94A1F]/50 hover:bg-[#0E2A3A]/80 hover:shadow-xl group"
              >
                <div className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-slate-300 uppercase tracking-wider group-hover:text-[#D94A1F] transition-colors">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-white mt-0.5 truncate">
                  {stat.value}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Section - Integrated Cohesive Spec Strip & Controls (Desktop/Tablet only) */}
        <div className="hidden sm:block mt-3 sm:mt-4 lg:mt-6 pt-2.5 sm:pt-3 lg:pt-3.5 border-t border-slate-700/40 space-y-2 sm:space-y-2.5">
          
          {/* Category Labels Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 font-semibold uppercase tracking-wider text-slate-200">
              <span className="text-[#D94A1F] font-bold flex items-center gap-1.5 bg-[#0E2A3A]/70 px-3 py-1 rounded-xl border border-white/15 shadow-md backdrop-blur-md text-[10px] sm:text-xs">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                CATALOGUE SPECS:
              </span>
              {slide.categories.map((cat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0E2A3A]/65 border border-white/15 shadow-md backdrop-blur-md text-[10px] sm:text-xs text-slate-100 font-medium hover:border-white/30 hover:text-white transition-all"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#D94A1F]" />
                  {cat}
                </span>
              ))}
            </div>

            {/* Carousel Slide Controls & Counter */}
            <div className="flex items-center gap-2.5 sm:gap-3 bg-[#0E2A3A]/70 px-3 py-1.5 rounded-xl border border-white/15 shadow-md backdrop-blur-md">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-slate-200">
                <span className="text-[#D94A1F]">0{current + 1}</span> / 0{heroSlides.length}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0E2A3A]/90 hover:bg-[#D94A1F] border border-white/20 hover:border-[#D94A1F] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0E2A3A]/90 hover:bg-[#D94A1F] border border-white/20 hover:border-[#D94A1F] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Material Grade Ticker / Spec Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {slide.keyGrades.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#0E2A3A]/65 border border-white/15 shadow-md backdrop-blur-md text-[10px] sm:text-xs font-mono transition-all hover:border-white/30"
              >
                <span className="text-slate-300 font-sans font-medium">{item.material}:</span>
                <span className="text-white font-bold truncate pl-2">{item.spec}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Slide Indicators Bar at the bottom edge */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {heroSlides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-7 sm:w-8 bg-[#D94A1F]"
                : "w-2 sm:w-2.5 bg-slate-500/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
