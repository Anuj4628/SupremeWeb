import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Ship,
  Plane,
  Anchor,
  ShieldCheck,
  PackageCheck,
  FileCheck2,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Boxes
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Complete List of 15 Active Global Export Destinations
const exportCountries = [
  {
    id: "UAE",
    name: "United Arab Emirates",
    code: "ae",
    region: "Middle East",
    hub: "Jebel Ali / Dubai Port",
    transit: "Sea & Air Freight",
    keySupply: "High-Pressure Piping & Forged Flanges",
    terms: "FOB / CIF / CFR"
  },
  {
    id: "SAU",
    name: "Saudi Arabia",
    code: "sa",
    region: "Middle East",
    hub: "Dammam / Jeddah Port",
    transit: "Ocean Container & Breakbulk",
    keySupply: "Refinery & Petrochemical Alloys",
    terms: "FOB / CIF / CFR"
  },
  {
    id: "QAT",
    name: "Qatar",
    code: "qa",
    region: "Middle East",
    hub: "Hamad Port / Doha",
    transit: "Direct Port Dispatch",
    keySupply: "LNG & Gas Pipeline Materials",
    terms: "CIF / CFR"
  },
  {
    id: "OMN",
    name: "Oman",
    code: "om",
    region: "Middle East",
    hub: "Sohar / Muscat Port",
    transit: "Sea Freight Transit",
    keySupply: "Desalination & Energy Piping",
    terms: "FOB / CIF"
  },
  {
    id: "KWT",
    name: "Kuwait",
    code: "kw",
    region: "Middle East",
    hub: "Shuwaikh / Shuaiba Port",
    transit: "Container Line Supply",
    keySupply: "Heavy Process Industry Flanges",
    terms: "CIF / CFR"
  },
  {
    id: "USA",
    name: "United States",
    code: "us",
    region: "Americas",
    hub: "Houston / New York Port",
    transit: "Ocean Freight & Express Air",
    keySupply: "Nickel Alloys & High-Nickel Piping",
    terms: "FOB / CIF / DDP"
  },
  {
    id: "GBR",
    name: "United Kingdom",
    code: "gb",
    region: "Europe",
    hub: "Felixstowe / Southampton",
    transit: "Scheduled Vessel Cargo",
    keySupply: "Offshore Marine & Chemical Alloys",
    terms: "CIF / CFR"
  },
  {
    id: "DEU",
    name: "Germany",
    code: "de",
    region: "Europe",
    hub: "Hamburg / Bremen Port",
    transit: "Intermodal European Cargo",
    keySupply: "Precision Tubes & Forged Components",
    terms: "FOB / CIF / DAP"
  },
  {
    id: "NLD",
    name: "Netherlands",
    code: "nl",
    region: "Europe",
    hub: "Port of Rotterdam",
    transit: "Gateway Distribution",
    keySupply: "Duplex / Super Duplex Piping",
    terms: "CIF / CFR / Ex-Works"
  },
  {
    id: "ITA",
    name: "Italy",
    code: "it",
    region: "Europe",
    hub: "Genoa / Trieste Port",
    transit: "Mediterranean Freight",
    keySupply: "Boiler Quality Plates & Fittings",
    terms: "FOB / CIF"
  },
  {
    id: "SGP",
    name: "Singapore",
    code: "sg",
    region: "Asia Pacific",
    hub: "Port of Singapore",
    transit: "Express Maritime Corridor",
    keySupply: "Shipbuilding & Marine Fasteners",
    terms: "FOB / CIF / CFR"
  },
  {
    id: "AUS",
    name: "Australia",
    code: "au",
    region: "Asia Pacific",
    hub: "Sydney / Melbourne / Fremantle",
    transit: "Direct Ocean Line",
    keySupply: "Mining & Heavy Processing Piping",
    terms: "CIF / CFR / DDP"
  },
  {
    id: "KOR",
    name: "South Korea",
    code: "kr",
    region: "Asia Pacific",
    hub: "Busan / Incheon Port",
    transit: "Direct Sea Cargo",
    keySupply: "Shipyard & Cryogenic Grade Steels",
    terms: "FOB / CIF"
  },
  {
    id: "JPN",
    name: "Japan",
    code: "jp",
    region: "Asia Pacific",
    hub: "Yokohama / Kobe Port",
    transit: "Dedicated Freight Line",
    keySupply: "Aerospace & Thermal Power Alloys",
    terms: "CIF / CFR"
  },
  {
    id: "ZAF",
    name: "South Africa",
    code: "za",
    region: "Africa",
    hub: "Durban / Cape Town Port",
    transit: "Direct Maritime Dispatch",
    keySupply: "Heavy Industry & Mining Alloys",
    terms: "FOB / CIF"
  }
];

const regions = [
  { id: "all", label: "All Destinations", count: 15 },
  { id: "Middle East", label: "Middle East", count: 5 },
  { id: "Europe", label: "Europe", count: 4 },
  { id: "Asia Pacific", label: "Asia Pacific", count: 4 },
  { id: "Americas", label: "Americas", count: 1 },
  { id: "Africa", label: "Africa", count: 1 }
];

const exportCredentials = [
  {
    icon: PackageCheck,
    title: "Seaworthy Export Packing",
    desc: "ISPM-15 heat-treated wood crates, moisture barrier wrapping & pipe end-caps."
  },
  {
    icon: FileCheck2,
    title: "100% Certified Documentation",
    desc: "EN 10204 3.1 / 3.2 Mill Test Certificates, NABL labs & raw material traceability."
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Inspected (TPI)",
    desc: "Pre-dispatch clearance via TUV, DNV, Lloyd's Register, BV & SGS agencies."
  },
  {
    icon: Ship,
    title: "Multi-Modal Freight Dispatch",
    desc: "Seamless handling across JNPT / Nhava Sheva port, Mumbai Airport, FOB & CIF."
  }
];

export default function GlobalPresenceSection() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeRegion, setActiveRegion] = useState("all");

  const filteredCountries = exportCountries.filter(
    (country) => activeRegion === "all" || country.region === activeRegion
  );

  // Subtle ScrollTrigger Reveal Animation (Header, Cards, and Footer Credentials)
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.fromTo(
        ".export-header-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Country Cards Staggered Reveal
      if (cardsContainerRef.current) {
        gsap.fromTo(
          ".export-country-card",
          { opacity: 0, y: 16, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 82%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // 3. Credentials Bar Reveal
      gsap.fromTo(
        ".export-credential-item",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".export-credentials-grid",
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] text-slate-800 py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200/90"
    >
      {/* Subtle Precision Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9)_0%,transparent_85%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="export-header-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-[#D94A1F] font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-[#D94A1F]" />
            <span>[GLOBAL EXPORT CAPABILITY]</span>
          </div>

          <h2 className="export-header-item text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-3">
            <span>GLOBAL PRESENCE &amp; </span>
            <span className="text-[#D94A1F]">COUNTRIES WE EXPORT TO</span>
          </h2>

          <p className="export-header-item text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Direct mill dispatch, certified high-nickel alloys, stainless steel piping, and forged fittings delivered across major worldwide industrial ports.
          </p>

          {/* REGION FILTER TABS */}
          <div className="export-header-item flex flex-wrap items-center justify-center gap-2 mt-7">
            {regions.map((region) => {
              const isActive = activeRegion === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0E2A3A] text-white shadow-sm border border-[#0E2A3A]"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{region.label}</span>
                  <span
                    className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? "bg-[#D94A1F] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {region.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* COUNTRIES CARDS GRID */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="export-country-card group bg-white border border-slate-200/90 hover:border-[#0E2A3A]/40 rounded-xl p-4 sm:p-4.5 shadow-2xs hover:shadow-md transition-all duration-200 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top corporate accent border indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#D94A1F] transition-colors duration-200" />

              <div>
                {/* Top Row: Official Flag + ISO Code + Active Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* Official Country Flag */}
                    <div className="w-8 h-5.5 rounded-xs overflow-hidden border border-slate-200 shadow-2xs bg-slate-100 shrink-0 flex items-center justify-center">
                      <img
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        srcSet={`https://flagcdn.com/w80/${country.code}.png 1x, https://flagcdn.com/w160/${country.code}.png 2x`}
                        alt={`Flag of ${country.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="32"
                        height="22"
                      />
                    </div>
                    {/* ISO Code Badge */}
                    <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60">
                      {country.id}
                    </span>
                  </div>

                  {/* Active Corridor Indicator */}
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* Country Name */}
                <h3 className="text-[15px] font-bold text-[#0E2A3A] tracking-tight group-hover:text-[#D94A1F] transition-colors leading-snug mb-1">
                  {country.name}
                </h3>

                {/* Region Tag */}
                <span className="inline-block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {country.region}
                </span>

                {/* Logistics & Supply Detail */}
                <div className="space-y-1.5 pt-2.5 border-t border-slate-100 text-xs">
                  <div className="flex items-start gap-1.5 text-slate-600">
                    <Anchor className="w-3.5 h-3.5 text-[#D94A1F] mt-0.5 shrink-0" />
                    <span className="font-medium text-slate-700 leading-tight">
                      {country.hub}
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-500 text-[11px]">
                    <Ship className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span className="leading-tight">{country.transit}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Industrial Supply Tag */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="text-slate-400">INCOTERMS:</span>
                <span className="font-semibold text-slate-700">{country.terms}</span>
              </div>
            </div>
          ))}
        </div>

        {/* EXPORT CREDENTIALS & COMPLIANCE BAR */}
        <div className="export-credentials-grid mt-12 sm:mt-16 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {exportCredentials.map((cred, idx) => {
              const IconComp = cred.icon;
              return (
                <div key={idx} className="export-credential-item flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#0E2A3A]">
                    <IconComp className="w-5 h-5 text-[#D94A1F]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0E2A3A] tracking-tight mb-1">
                      {cred.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Dispatch Summary Notice */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full compliance with International Shipping Regulations, HS Codes &amp; Certificate of Origin.</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-bold text-[#D94A1F] hover:text-[#0E2A3A] transition-colors"
            >
              <span>Request Global Export Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
