import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2, Search, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Comprehensive list of 45 major export countries matching user specification
const exportCountries = [
  // North & South America
  { id: "USA", name: "United States", code: "us", region: "Americas" },
  { id: "CAN", name: "Canada", code: "ca", region: "Americas" },
  { id: "MEX", name: "Mexico", code: "mx", region: "Americas" },
  { id: "BRA", name: "Brazil", code: "br", region: "Americas" },
  { id: "ARG", name: "Argentina", code: "ar", region: "Americas" },
  { id: "CHL", name: "Chile", code: "cl", region: "Americas" },

  // Europe
  { id: "GBR", name: "United Kingdom", code: "gb", region: "Europe" },
  { id: "DEU", name: "Germany", code: "de", region: "Europe" },
  { id: "FRA", name: "France", code: "fr", region: "Europe" },
  { id: "ITA", name: "Italy", code: "it", region: "Europe" },
  { id: "ESP", name: "Spain", code: "es", region: "Europe" },
  { id: "PRT", name: "Portugal", code: "pt", region: "Europe" },
  { id: "NLD", name: "Netherlands", code: "nl", region: "Europe" },
  { id: "BEL", name: "Belgium", code: "be", region: "Europe" },
  { id: "CHE", name: "Switzerland", code: "ch", region: "Europe" },
  { id: "AUT", name: "Austria", code: "at", region: "Europe" },
  { id: "SWE", name: "Sweden", code: "se", region: "Europe" },
  { id: "NOR", name: "Norway", code: "no", region: "Europe" },
  { id: "DNK", name: "Denmark", code: "dk", region: "Europe" },
  { id: "FIN", name: "Finland", code: "fi", region: "Europe" },
  { id: "IRL", name: "Ireland", code: "ie", region: "Europe" },
  { id: "POL", name: "Poland", code: "pl", region: "Europe" },
  { id: "CZE", name: "Czech Republic", code: "cz", region: "Europe" },
  { id: "UKR", name: "Ukraine", code: "ua", region: "Europe" },

  // Middle East
  { id: "UAE", name: "UAE", code: "ae", region: "Middle East" },
  { id: "SAU", name: "Saudi Arabia", code: "sa", region: "Middle East" },
  { id: "QAT", name: "Qatar", code: "qa", region: "Middle East" },
  { id: "KWT", name: "Kuwait", code: "kw", region: "Middle East" },
  { id: "OMN", name: "Oman", code: "om", region: "Middle East" },
  { id: "BHR", name: "Bahrain", code: "bh", region: "Middle East" },
  { id: "TUR", name: "Turkey", code: "tr", region: "Middle East" },

  // Asia Pacific
  { id: "SGP", name: "Singapore", code: "sg", region: "Asia Pacific" },
  { id: "JPN", name: "Japan", code: "jp", region: "Asia Pacific" },
  { id: "CHN", name: "China", code: "cn", region: "Asia Pacific" },
  { id: "KOR", name: "South Korea", code: "kr", region: "Asia Pacific" },
  { id: "MYS", name: "Malaysia", code: "my", region: "Asia Pacific" },
  { id: "IDN", name: "Indonesia", code: "id", region: "Asia Pacific" },
  { id: "THA", name: "Thailand", code: "th", region: "Asia Pacific" },
  { id: "VNM", name: "Vietnam", code: "vn", region: "Asia Pacific" },
  { id: "PHL", name: "Philippines", code: "ph", region: "Asia Pacific" },
  { id: "AUS", name: "Australia", code: "au", region: "Asia Pacific" },
  { id: "NZL", name: "New Zealand", code: "nz", region: "Asia Pacific" },

  // Africa
  { id: "ZAF", name: "South Africa", code: "za", region: "Africa" },
  { id: "EGY", name: "Egypt", code: "eg", region: "Africa" },
  { id: "NGA", name: "Nigeria", code: "ng", region: "Africa" }
];

const regions = [
  { id: "all", label: "All Countries", count: exportCountries.length },
  { id: "Europe", label: "Europe", count: exportCountries.filter(c => c.region === "Europe").length },
  { id: "Middle East", label: "Middle East", count: exportCountries.filter(c => c.region === "Middle East").length },
  { id: "Asia Pacific", label: "Asia Pacific", count: exportCountries.filter(c => c.region === "Asia Pacific").length },
  { id: "Americas", label: "Americas", count: exportCountries.filter(c => c.region === "Americas").length },
  { id: "Africa", label: "Africa", count: exportCountries.filter(c => c.region === "Africa").length }
];

export default function GlobalPresenceSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeRegion, setActiveRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Filter countries based on region & search
  const filteredCountries = exportCountries.filter((c) => {
    const matchesRegion = activeRegion === "all" || c.region === activeRegion;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Mouse spotlight coordinates tracking for high-end glow effect
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // GSAP ScrollTrigger Entrance Animation Sequence
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header elements reveal
      gsap.fromTo(
        ".export-anim-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none"
          }
        }
      );

      // Country cards staggered wave reveal
      if (gridRef.current) {
        gsap.fromTo(
          ".country-card-item",
          { opacity: 0, scale: 0.9, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.45,
            stagger: {
              amount: 0.8,
              grid: "auto",
              from: "start"
            },
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeRegion]);

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      onMouseMove={handleMouseMove}
      className="relative bg-gradient-to-b from-[#F4F7FB] via-[#F8FAFD] to-[#EDF2F7] text-slate-800 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-b border-slate-200/90"
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 74, 31, 0.09), transparent 60%)`
        }}
      />

      {/* Modern Engineering Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      </div>

      {/* Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="export-anim-header inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#D94A1F] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Globe2 className="w-4 h-4 text-[#D94A1F] animate-spin" style={{ animationDuration: "20s" }} />
            <span>GLOBAL EXPORT NETWORK</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>

          <h2 className="export-anim-header text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-3">
            <span>COUNTRIES WE </span>
            <span className="text-[#D94A1F]">EXPORT TO</span>
          </h2>

          <p className="export-anim-header text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            Supplying premium industrial piping, forged flanges, and high-nickel alloys across 45+ international export destinations.
          </p>

          {/* CONTROLS: REGION TABS & SEARCH BAR */}
          <div className="export-anim-header mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {regions.map((region) => {
                const isActive = activeRegion === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A] scale-105"
                        : "bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 hover:shadow-2xs"
                    }`}
                  >
                    <span>{region.label}</span>
                    <span
                      className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isActive
                          ? "bg-[#D94A1F] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {region.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Country Search Bar */}
            <div className="relative w-full sm:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 sm:py-2 text-xs rounded-xl bg-white border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D94A1F] focus:ring-2 focus:ring-[#D94A1F]/15 transition-all shadow-2xs font-medium"
              />
            </div>
          </div>
        </div>

        {/* 5-COLUMN COUNTRY CARDS GRID (EXACT LAYOUT FROM USER REFERENCE IMAGES) */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
        >
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="country-card-item group relative bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgba(14,42,58,0.22)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out cursor-pointer overflow-hidden select-none"
            >
              {/* Dynamic Corporate Glowing Gradient on Hover (Matching User Netherlands Reference) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A] via-[#241738] to-[#0E2A3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              {/* Shimmer Border Light Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/40 transition-colors duration-300 z-10 pointer-events-none" />

              {/* Card Content Container */}
              <div className="relative z-20 flex flex-col items-center justify-center w-full">
                {/* Official Circular Flag Logo */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md border-2 border-slate-100 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0 mb-3 bg-slate-100 flex items-center justify-center">
                  <img
                    src={`https://flagcdn.com/w160/${country.code}.png`}
                    srcSet={`https://flagcdn.com/w160/${country.code}.png 1x, https://flagcdn.com/w320/${country.code}.png 2x`}
                    alt={country.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="56"
                    height="56"
                  />
                </div>

                {/* Country Name */}
                <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-slate-800 uppercase group-hover:text-white transition-colors duration-300 leading-snug line-clamp-1">
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-sm font-semibold">No countries found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveRegion("all");
              }}
              className="mt-3 px-4 py-1.5 text-xs font-bold text-[#D94A1F] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
