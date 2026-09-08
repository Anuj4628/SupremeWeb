import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Flame,
  Globe2,
  Factory,
  Building2,
  Anchor,
  Zap,
  Cpu,
  Scissors,
  Wrench,
  Layers,
  FileCheck2,
  Check,
  Compass,
  Users
} from "lucide-react";

import companyConfig from "../../config/company";

// REAL PRODUCT & CATEGORY ASSETS FROM PROJECT FOLDERS
import precisionPipesImg from "../../assets/Product images/PRECISION PIPES, TUBES & HIGH-PERFORMANCE ALLOYS.png";
import heavyPlatesImg from "../../assets/Product images/HEAVY ENGINEERING PLATES, COILS & ROUND BARS.png";
import corrosionMetalsImg from "../../assets/Product images/CORROSION-RESISTANT METALS FOR CRITICAL INDUSTRIES.png";
import forgedFlangesImg from "../../assets/FORGED INDUSTRIAL FLANGES & PIPELINE FITTINGS.png";

import angleChannelFlatImg from "../../assets/All Products/Angle,Channel,flat bar.png";
import buttWeldFitImg from "../../assets/All Products/Butt weld fit/stainless steel.jpg";
import fastenersImg from "../../assets/All Products/Fasteners/stainless-steel.webp";
import tcFittingsImg from "../../assets/All Products/TC fittings.png";
import dairySanitaryImg from "../../assets/All Products/dairy and sanitary tube fittings.png";

// REAL SECTOR IMAGES FROM SERVING GLOBAL MISSION-CRITICAL SECTORS
import aerospaceDefenseImg from "../../assets/Serving Global Mission-Critical Sectors/aerospace and defence.png";
import heavyEngineeringImg from "../../assets/Serving Global Mission-Critical Sectors/heavt engineering.png";
import marineImg from "../../assets/Serving Global Mission-Critical Sectors/marine.png";
import nuclearPowerImg from "../../assets/Serving Global Mission-Critical Sectors/nuclear and thermal power.png";
import petrochemicalImg from "../../assets/Serving Global Mission-Critical Sectors/petrochemical.png";
import precisionIndustrialPipingImg from "../../assets/Serving Global Mission-Critical Sectors/precision industrial piping.png";

// Partner & TPI Logos
import ltLogo from "../../assets/ThirdParty/L&T logo.png";
import ielLogo from "../../assets/ThirdParty/IEL logo.png";
import tataSteelLogo from "../../assets/partners/tata_steel.svg";
import ioclLogo from "../../assets/partners/indian_oil.svg";
import hpclLogo from "../../assets/partners/hindustan_petroleum.svg";
import jsplLogo from "../../assets/partners/jindal_steel.svg";

gsap.registerPlugin(ScrollTrigger);

// 1. JOURNEY TIMELINE DATA
const journeyMilestones = [
  {
    year: "2014",
    title: "FOUNDED IN MUMBAI",
    desc: "Established as a specialized metal trading outfit in Parekh House, Khetwadi, supplying certified ferrous and non-ferrous raw materials.",
    status: "MILESTONE 01"
  },
  {
    year: "2017",
    title: "MSME REGISTRATION & WAREHOUSE EXPANSION",
    desc: "Registered under MSME (UDYAM-MH-19-0110593) and expanded ready-stock warehouse capacity for heavy plates and seamless pipes.",
    status: "MILESTONE 02"
  },
  {
    year: "2019",
    title: "ISO 9001:2015 CERTIFICATION",
    desc: "Achieved international ISO 9001:2015 Quality Management System accreditation certified by EGAC (CAB #118005) & IAF.",
    status: "MILESTONE 03"
  },
  {
    year: "2022",
    title: "TPI & MAJOR INFRASTRUCTURE APPROVALS",
    desc: "Passed third-party quality audits by L&T, TÜV India, DNV, Bureau Veritas, and Lloyd's Register for high-pressure energy projects.",
    status: "MILESTONE 04"
  },
  {
    year: "PRESENT",
    title: "SERVING 15+ CRITICAL INDUSTRIES NATIONWIDE",
    desc: "Exporting & supplying high-performance nickel superalloys, duplex, titanium, and stainless steel to 15+ industries pan-India and globally.",
    status: "CURRENT LEADER"
  }
];

// 2. STEEL LEGACY CATEGORIES (Using Exact Real Assets from Folder)
const steelLegacyCategories = [
  {
    title: "Seamless & Welded Pipes & Tubes",
    grades: "Seamless & Welded 304/316L, P11/P22/P91, LTCS, Duplex 2205",
    specs: "1/2\" NB to 36\" NB | Sch 5S to XXS",
    desc: "High-pressure piping engineered for thermal stress & aggressive fluid handling.",
    image: precisionPipesImg
  },
  {
    title: "Forged Industrial Flanges",
    grades: "Weldneck, Slip-On, Blind, Socketweld in SS, Inconel & Hastelloy",
    specs: "Class 150# to 2500# | ANSI B16.5 / B16.47",
    desc: "Heavy precision forged flanges built to match stringent pressure vessel codes.",
    image: forgedFlangesImg
  },
  {
    title: "Heavy Plates, Sheets & Coils",
    grades: "ASTM A240 304/316/904L, Boiler Quality A516 Gr 70, SMO 254",
    specs: "0.5mm to 200mm Thickness",
    desc: "Cold rolled & hot rolled plates cut to custom dimensions with edge beveling.",
    image: heavyPlatesImg
  },
  {
    title: "Angles, Channels & Flat Bars",
    grades: "Equal & Unequal Angles, Channels, Flat & Hex Bars in SS & Carbon",
    specs: "Metric & Imperial Size Profiles",
    desc: "Cold drawn and hot rolled structural profiles engineered for heavy fabrication and marine structures.",
    image: angleChannelFlatImg
  },
  {
    title: "High Tensile Fasteners",
    grades: "Stud Bolts, Heavy Hex Nuts, Threaded Rods in A193 B7/B8, A194 2H",
    specs: "Metric M6-M100 | Imperial Sizes",
    desc: "Corrosion-resistant bolting systems engineered for zero-failure joints.",
    image: fastenersImg
  },
  {
    title: "Buttweld & Forged Fittings",
    grades: "Elbows, Tees, Reducers, Caps in SS 321/347, Super Duplex 2507",
    specs: "BW 1/2\"-36\" | Socketweld 2000#-9000#",
    desc: "High-integrity pressure fittings for chemical refineries and power boilers.",
    image: buttWeldFitImg
  },
  {
    title: "Sanitary & Tri-Clover TC Fittings",
    grades: "Tri-Clamp TC Ferrules, Clamps, Dairy Unions in 316L Electro-Polished",
    specs: "1/2\" to 4\" OD (Ra < 0.4µm)",
    desc: "Hygienic mirror electro-polished process fittings for dairy, food, and pharmaceutical cleanrooms.",
    image: tcFittingsImg
  },
  {
    title: "Corrosion-Resistant Alloys",
    grades: "Inconel 600/625, Monel 400, Hastelloy C276, Titanium Gr 2/5",
    specs: "Plates, Sheets, Bars & Custom Forgings",
    desc: "Exotic high-performance superalloys designed for aggressive chemical and marine environments.",
    image: corrosionMetalsImg
  }
];

// 3. QUALITY CHECKLIST ITEMS
const qualityChecklist = [
  { step: "01", label: "Raw Material Verification", desc: "100% Heat batch traceability check upon warehouse entry." },
  { step: "02", label: "Chemical & Mechanical PMI Testing", desc: "Positive Material Identification using XRF analyzers & spectro meters." },
  { step: "03", label: "Government Certified Lab Inspection", desc: "Ultrasonic, Hydrostatic, Microstructure & Impact testing to EN 10204 3.1." },
  { step: "04", label: "Third-Party Inspector Approval", desc: "Audited & stamped by L&T, TÜV, DNV, Lloyd's, Bureau Veritas, or IBR." },
  { step: "05", label: "Protective Packaging & Dispatch", desc: "End-cap protected, waterproof sea-worthy wooden crate dispatch." }
];

// 4. APPROVED AGENCIES LOGOS
const approvedAgencies = [
  { name: "Larsen & Toubro", logo: ltLogo },
  { name: "IEL Quality Assurance", logo: ielLogo },
  { name: "Tata Steel Projects", logo: tataSteelLogo },
  { name: "Indian Oil Corporation", logo: ioclLogo },
  { name: "Hindustan Petroleum", logo: hpclLogo },
  { name: "Jindal Steel & Power", logo: jsplLogo }
];

// 5. INDUSTRIES POWERED (Deleted the two requested items: Pharma & Bio-Cleanrooms, Chemical & Fertilizer Plants)
const industriesPowered = [
  { title: "Oil & Gas Refineries", desc: "High pressure pipeline infrastructure & offshore rigs.", icon: Flame, img: petrochemicalImg },
  { title: "Nuclear & Thermal Power", desc: "Boiler quality plates, P91 alloy pipes & heat exchangers.", icon: Zap, img: nuclearPowerImg },
  { title: "Marine & Shipbuilding", desc: "Cupro-nickel sea water piping & Monel shafts.", icon: Anchor, img: marineImg },
  { title: "Defense & Aerospace", desc: "Titanium Grade 5 & 17-4PH precision forgings.", icon: ShieldCheck, img: aerospaceDefenseImg },
  { title: "Heavy Engineering", desc: "Structural angles, channels, and 200mm thick plates.", icon: Building2, img: heavyEngineeringImg },
  { title: "Precision Piping Infrastructure", desc: "Seamless ASTM A312 / A335 high-stress piping lines.", icon: Factory, img: precisionIndustrialPipingImg }
];

// 6. LEADERSHIP TEAM
const leadershipTeam = [
  {
    name: "Metallurgical Sourcing Desk",
    role: "Global Procurement & Raw Material Audit",
    experience: "15+ Years Industry Experience",
    bio: "Direct mill relationships with tier-1 steel plants in India, Europe, and Asia ensuring authentic certified heat lots."
  },
  {
    name: "Quality Assurance & Inspection",
    role: "EN 10204 3.1 / 3.2 Compliance",
    experience: "NDT Level II Certified Team",
    bio: "Rigorous testing protocol oversight including PMI spectro analysis, hydrostatic testing, and TPI clearance."
  },
  {
    name: "Client Logistics & Sales Desk",
    role: "Pan-India & Global Dispatch",
    experience: "24/7 Technical Support",
    bio: "Dedicated technical consultants providing instant quotes, custom length cutting, and emergency site dispatches."
  }
];

export default function AboutUsPage() {
  const pageRef = useRef(null);
  const [activeChecklistStep, setActiveChecklistStep] = useState(0);

  // Desktop 3D Mouse Tilt for Milestone Cards
  const handleMilestoneMouseMove = (e, cardEl) => {
    if (window.innerWidth < 768) return;
    const rect = cardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    gsap.to(cardEl, {
      rotationY: x * 2.2,
      rotationX: -y * 2.2,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power1.out"
    });
  };

  const handleMilestoneMouseLeave = (cardEl) => {
    gsap.to(cardEl, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  // GSAP Animations & ScrollTriggers
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Particle Sparks Drift
      if (!prefersReduced) {
        gsap.to(".particle-spark", {
          y: -120,
          opacity: 0,
          stagger: 0.2,
          duration: 3,
          repeat: -1,
          ease: "power1.out"
        });
      }

      // Section Entrance Animations
      const sections = pageRef.current.querySelectorAll(".about-section-reveal");
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // =========================================================================
      // PREMIUM CINEMATIC GSAP ANIMATION SYSTEM FOR OUR JOURNEY & MILESTONES
      // =========================================================================
      const journeySection = pageRef.current.querySelector(".journey-section");

      if (journeySection) {
        // 1. Heading Split & Dual Reveal
        const headingPart1 = journeySection.querySelector(".journey-title-part1");
        const headingPart2 = journeySection.querySelector(".journey-title-part2");
        const journeyEyebrow = journeySection.querySelector(".journey-eyebrow");
        const journeyDesc = journeySection.querySelector(".journey-desc");

        const headerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: journeySection,
            start: "top 78%",
            toggleActions: "play none none none"
          }
        });

        if (journeyEyebrow) {
          headerTimeline.fromTo(
            journeyEyebrow,
            { opacity: 0, y: -15, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
          );
        }

        if (headingPart1) {
          headerTimeline.fromTo(
            headingPart1,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          );
        }

        if (headingPart2) {
          headerTimeline.fromTo(
            headingPart2,
            { opacity: 0, scale: 0.85, filter: "blur(6px)" },
            { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "back.out(1.4)" },
            "-=0.4"
          );
        }

        if (journeyDesc) {
          headerTimeline.fromTo(
            journeyDesc,
            { opacity: 0, y: 20, filter: "blur(4px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" },
            "-=0.4"
          );
        }

        // 2. Timeline Progress Line Drawing (Scrubbed with Scroll)
        const timelineActiveLine = journeySection.querySelector(".journey-timeline-line-active");
        if (timelineActiveLine) {
          gsap.fromTo(
            timelineActiveLine,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".journey-timeline-container",
                start: "top 70%",
                end: "bottom 75%",
                scrub: 0.5
              }
            }
          );
        }

        // 3. Milestone Items (Node Activation, Ripple, Card Entrance & Float)
        const milestoneItems = journeySection.querySelectorAll(".timeline-milestone-item");
        milestoneItems.forEach((item, idx) => {
          const isEven = idx % 2 === 0;
          const nodeDot = item.querySelector(".milestone-dot");
          const dotInner = item.querySelector(".dot-inner");
          const nodeRipple = item.querySelector(".node-ripple");
          const card = item.querySelector(".milestone-card");
          const yearBadge = item.querySelector(".milestone-year-badge");
          const statusLabel = item.querySelector(".milestone-status-label");
          const connectingLine = item.querySelector(".connecting-line");

          const isMobile = window.innerWidth < 640;
          const xOffset = isMobile ? (isEven ? 18 : -18) : (isEven ? 45 : -45);

          ScrollTrigger.create({
            trigger: item,
            start: "top 75%",
            onEnter: () => {
              // Node Activation & Expanding Ripple
              if (nodeDot) {
                gsap.to(nodeDot, {
                  scale: 1.3,
                  backgroundColor: "#D94A1F",
                  borderColor: "#F36F21",
                  boxShadow: "0 0 24px rgba(243,111,33,0.9)",
                  duration: 0.4
                });
              }

              if (dotInner) {
                gsap.to(dotInner, {
                  backgroundColor: "#FFFFFF",
                  duration: 0.3
                });
              }

              if (nodeRipple && !prefersReduced) {
                gsap.fromTo(
                  nodeRipple,
                  { scale: 1, opacity: 0.9 },
                  { scale: 2.3, opacity: 0, duration: 0.8, ease: "power2.out" }
                );
              }

              // Connecting Line Glow Highlight
              if (connectingLine) {
                gsap.fromTo(
                  connectingLine,
                  { opacity: 0, scaleX: 0 },
                  { opacity: 1, scaleX: 1, duration: 0.5, ease: "power2.out" }
                );
              }

              // Card Floating Entrance
              if (card) {
                gsap.fromTo(
                  card,
                  {
                    opacity: 0,
                    y: prefersReduced ? 0 : 55,
                    x: prefersReduced ? 0 : xOffset,
                    scale: prefersReduced ? 1 : 0.92,
                    filter: prefersReduced ? "none" : "blur(8px)"
                  },
                  {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.85,
                    ease: "back.out(1.2)",
                    onComplete: () => {
                      // Continuous Subtle Floating Effect after reveal
                      if (!prefersReduced) {
                        gsap.to(card, {
                          y: -6,
                          duration: 3.4 + (idx % 3) * 0.5,
                          repeat: -1,
                          yoyo: true,
                          ease: "sine.easeInOut"
                        });
                      }
                    }
                  }
                );
              }

              // Year Badge Micro-Interaction
              if (yearBadge) {
                gsap.fromTo(
                  yearBadge,
                  { scale: 0.8, y: -4 },
                  { scale: 1.12, y: -2, duration: 0.25, yoyo: true, repeat: 1, ease: "power1.out" }
                );
              }

              // Milestone Label Letter-Spacing Reveal
              if (statusLabel) {
                gsap.fromTo(
                  statusLabel,
                  { opacity: 0, letterSpacing: "0.05em", y: 4 },
                  { opacity: 1, letterSpacing: "0.15em", y: 0, duration: 0.6, ease: "power2.out" }
                );
              }
            }
          });
        });
      }

      // Quality Checklist Stamp Effect Ticker
      ScrollTrigger.create({
        trigger: ".checklist-container",
        start: "top 70%",
        onEnter: () => {
          let step = 0;
          const timer = setInterval(() => {
            step++;
            setActiveChecklistStep(step);
            if (step >= qualityChecklist.length) clearInterval(timer);
          }, 600);
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0B1E2B] text-slate-100 font-sans antialiased overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER — CINEMATIC INDUSTRIAL DARK THEME */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[52vh] min-h-[360px] max-h-[460px] sm:min-h-[85vh] sm:max-h-none sm:h-auto lg:min-h-[90vh] flex items-center justify-center bg-[#0E2A3A] overflow-hidden pt-10 pb-8 sm:pt-28 sm:pb-16 border-b border-slate-800">
        
        {/* Background Industrial Image Showcase */}
        <div className="absolute inset-0 z-0">
          <img
            src={heavyPlatesImg}
            alt="Steel Metallurgy Production"
            className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
          {/* Subtle Vignette Overlay for High Clarity & Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E2B]/70 via-[#0B1E2B]/40 to-[#0B1E2B]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,rgba(11,30,43,0.65)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
        </div>

        {/* Floating Particle Sparks Effect (Desktop/Tablet) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle-spark absolute w-1.5 h-1.5 rounded-full bg-[#F36F21] shadow-[0_0_10px_#F36F21]"
              style={{
                left: `${10 + (i * 7)}%`,
                bottom: `${10 + (i % 4) * 20}%`
              }}
            />
          ))}
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-6">
          
          {/* Eyebrow Pill (Desktop/Tablet) */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2A3A]/90 border border-[#F36F21]/50 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
            <Award className="w-4 h-4 text-[#F36F21] animate-pulse" />
            <span>ISO 9001:2015 CERTIFIED • MSME REGISTERED ENTERPRISE</span>
          </div>

          {/* Main Cinematic Headline */}
          <h1 className="text-2xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] uppercase max-w-5xl mx-auto">
            FORGED IN TRUST. <br />
            <span className="bg-gradient-to-r from-white via-amber-200 to-[#F36F21] bg-clip-text text-transparent">
              BUILT TO LAST.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-xs sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
            For over a decade, <strong className="text-white">Supreme Metal and Alloys</strong> has been the backbone of India's heavy industries — supplying the certified ferrous and non-ferrous metals that power refineries, ships, power plants, and pharma lines across the country.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-1 sm:pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#D94A1F] hover:bg-[#c23e17] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>Explore Products</span>
            </a>
          </div>

          {/* Key Stat Highlights (Desktop/Tablet only) */}
          <div className="hidden sm:grid pt-6 grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-[#0E2A3A]/80 border border-slate-700/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-[#F36F21]">10+ YEARS</div>
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mt-1">Market Leadership</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0E2A3A]/80 border border-slate-700/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">100% MTC</div>
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mt-1">EN 10204 3.1 Traceability</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0E2A3A]/80 border border-slate-700/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">15+ SECTORS</div>
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mt-1">Industries Supplied</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0E2A3A]/80 border border-slate-700/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">READY STOCK</div>
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mt-1">Mumbai Warehouse</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR JOURNEY — ANIMATED VERTICAL TIMELINE */}
      {/* ========================================================================= */}
      <section className="journey-section relative py-16 sm:py-24 bg-[#0B1E2B] border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="journey-eyebrow text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-[#0E2A3A] px-3.5 py-1.5 rounded-md border border-slate-700 inline-block mb-3 font-mono shadow-md">
              [OUR DECADE-LONG HERITAGE]
            </span>
            <h2 className="journey-title text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              <span className="inline-block journey-title-part1">OUR JOURNEY &amp;&nbsp;</span>
              <span className="inline-block journey-title-part2 text-[#F36F21]">MILESTONES</span>
            </h2>
            <p className="journey-desc text-slate-300 text-base sm:text-lg leading-relaxed mt-3 font-medium">
              What started as a small metal trading outfit in Mumbai has grown into one of India's most trusted names in ferrous and non-ferrous metal supply. Over ten-plus years, we've built our reputation through consistency, technical know-how, and never cutting corners on quality.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="journey-timeline-container relative max-w-4xl mx-auto">
            {/* Center Background Guide Track Line */}
            <div className="journey-timeline-track absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-slate-800/80 rounded-full" />

            {/* Animated Active Progress Line (Drawn on Scroll) */}
            <div className="journey-timeline-line-active absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#F36F21] via-[#D94A1F] to-[#F36F21] shadow-[0_0_12px_#F36F21] origin-top rounded-full" />

            <div className="space-y-12 sm:space-y-16">
              {journeyMilestones.map((m, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`timeline-milestone-item relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node Wrap */}
                    <div className="milestone-node-wrap absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-20 pointer-events-none">
                      {/* Ripple Pulse Ring */}
                      <div className="node-ripple absolute -inset-2 rounded-full border-2 border-[#F36F21] opacity-0 scale-100" />
                      
                      {/* Main Node Dot */}
                      <div className="milestone-dot w-6 h-6 rounded-full bg-[#0E2A3A] border-2 border-slate-600 shadow-md transition-all duration-300 flex items-center justify-center">
                        <div className="dot-inner w-2 h-2 rounded-full bg-slate-500 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Connecting Line Accent */}
                    <div
                      className={`connecting-line hidden sm:block absolute top-4 h-0.5 bg-gradient-to-r ${
                        isEven
                          ? "right-1/2 w-8 from-[#F36F21]/80 to-transparent origin-right"
                          : "left-1/2 w-8 from-[#F36F21]/80 to-transparent origin-left"
                      } opacity-0`}
                    />

                    {/* Content Card */}
                    <div className="milestone-card-wrap ml-12 sm:ml-0 sm:w-1/2 px-0 sm:px-8">
                      <div
                        className="milestone-card p-6 rounded-2xl bg-[#0E2A3A] border border-slate-700/90 shadow-xl hover:border-[#F36F21]/80 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        onMouseMove={(e) => handleMilestoneMouseMove(e, e.currentTarget)}
                        onMouseLeave={(e) => handleMilestoneMouseLeave(e.currentTarget)}
                      >
                        {/* Shimmer accent line on hover */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F36F21] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold mb-2">
                          <span className="milestone-status-label inline-block tracking-wider">
                            {m.status}
                          </span>
                          <span className="milestone-year-badge px-2.5 py-0.5 rounded bg-[#D94A1F] text-white text-xs font-black shadow-sm transition-transform">
                            {m.year}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                          {m.title}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE STEEL LEGACY OF SUPREME — PRODUCT CATEGORIES (REAL ASSETS) */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 sm:py-24 bg-[#0E2A3A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-[#0B1E2B] px-3.5 py-1.5 rounded-md border border-slate-700 inline-block mb-3 font-mono">
              [COMPLETE METALLURGICAL CAPABILITY]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              THE STEEL LEGACY OF <span className="text-[#F36F21]">SUPREME</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-3 font-medium">
              Steel runs through everything we do. From stainless and carbon steel to duplex, super duplex, titanium, Inconel, Hastelloy, Monel, and true aerospace-grade alloys — we stock and supply metal in every form a modern industry needs.
            </p>
          </div>

          {/* Interactive Grid of Real Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steelLegacyCategories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#0B1E2B] border border-slate-700/80 overflow-hidden shadow-xl hover:border-[#F36F21] transition-all duration-500 flex flex-col justify-between p-4 cursor-pointer"
              >
                {/* Metallic Shimmer Sweep on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Adaptive Product Image Container */}
                <div className="relative h-48 rounded-xl bg-white border border-slate-200/90 mb-4 flex items-center justify-center p-3.5 overflow-hidden shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-full max-w-full w-auto h-auto object-contain filter brightness-[1.03] contrast-[1.05] drop-shadow-md group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Body Details */}
                <div className="p-1 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#F36F21] uppercase tracking-wider block">
                      {cat.specs}
                    </span>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 leading-normal mt-1">
                      <strong className="text-slate-300">Grades:</strong> {cat.grades}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1 font-medium">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-[#F36F21] font-mono group-hover:gap-2.5 transition-all">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR QUALITY PROMISE — ANIMATED CHECKLIST */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 sm:py-24 bg-[#0B1E2B] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Quality Philosophy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-[#0E2A3A] px-3.5 py-1.5 rounded-md border border-slate-700 inline-block font-mono">
                [ZERO-DEFECT POLICY]
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                OUR QUALITY <span className="text-[#F36F21]">PROMISE</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed font-medium">
                <strong className="text-white">"No compromise in quality"</strong> isn't a slogan for us — it's the rule every shipment is held to. Every batch is checked from the moment raw material arrives to the moment it leaves our facility, tested against national and international standards by our in-house quality team using government-certified equipment.
              </p>

              <div className="p-4 rounded-2xl bg-[#0E2A3A] border border-amber-500/30 text-amber-300 text-xs font-mono space-y-1">
                <div className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
                  <span>EN 10204 3.1 &amp; 3.2 TRACEABILITY</span>
                </div>
                <p className="text-slate-300 font-sans">
                  Every order is accompanied by original Mill Test Certificates documenting chemical compositions, mechanical yield/tensile strength, and NDT clearance.
                </p>
              </div>
            </div>

            {/* Right: Animated Quality Checklist Stamps */}
            <div className="checklist-container lg:col-span-7 space-y-4">
              {qualityChecklist.map((item, idx) => {
                const isPassed = activeChecklistStep >= idx + 1;

                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between gap-4 ${
                      isPassed
                        ? "bg-[#0E2A3A] border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                        : "bg-[#081720] border-slate-800 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded bg-slate-800 text-amber-400">
                        STEP {item.step}
                      </span>
                      <div>
                        <h4 className="text-base font-extrabold text-white">
                          {item.label}
                        </h4>
                        <p className="text-xs text-slate-300 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Stamp Checkmark Badge */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 ${
                        isPassed
                          ? "bg-emerald-500 text-white border-emerald-400 scale-110 shadow-lg"
                          : "bg-slate-800 text-slate-600 border-slate-700"
                      }`}
                    >
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TRUSTED & APPROVED BY — ANIMATED LOGO MARQUEE */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 bg-[#0E2A3A] border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h3 className="text-xs font-mono font-bold text-[#F36F21] uppercase tracking-widest mb-2">
            [INSPECTION &amp; TPI APPROVALS]
          </h3>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            TRUSTED &amp; APPROVED BY INDUSTRY LEADERS
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mt-2 font-medium">
            Our material shipments have passed inspection from some of the most demanding names in Indian engineering and infrastructure.
          </p>
        </div>

        {/* Marquee Strip */}
        <div className="relative group overflow-hidden py-4">
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] marquee-track">
            {[...approvedAgencies, ...approvedAgencies, ...approvedAgencies].map((a, idx) => (
              <div key={idx} className="px-4">
                <div className="w-48 sm:w-56 h-24 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center p-4 shadow-lg hover:border-[#F36F21] transition-all transform hover:scale-105">
                  <img src={a.logo} alt={a.name} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LEADERSHIP & VISION */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 sm:py-24 bg-[#0B1E2B] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-[#0E2A3A] px-3.5 py-1.5 rounded-md border border-slate-700 inline-block mb-3 font-mono">
              [METALLURGICAL EXPERTISE]
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
              LEADERSHIP &amp; <span className="text-[#F36F21]">VISION</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mt-3 font-medium">
              Behind every consignment is a team that treats each order like it's for their own project. Our leadership brings hands-on metallurgical trading experience, a hard line on quality control, and a client-first approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((team, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E2A3A] border border-slate-700/80 shadow-xl hover:border-[#F36F21] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#F36F21] mb-4 group-hover:bg-[#F36F21] group-hover:text-white transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {team.name}
                  </h3>
                  <div className="text-xs font-mono text-[#F36F21] font-bold mb-3 uppercase">
                    {team.role}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {team.bio}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  ✓ {team.experience}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRIES WE POWER (6 SECTORS — DELETED THE TWO REQUESTED ITEMS) */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 sm:py-24 bg-[#0E2A3A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-[#0B1E2B] px-3.5 py-1.5 rounded-md border border-slate-700 inline-block mb-3 font-mono">
              [GLOBAL APPLICATION SECTORS]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase">
              INDUSTRIES WE <span className="text-[#F36F21]">POWER</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mt-3 font-medium">
              From offshore rigs to nuclear lines, our metal ends up in some of the toughest environments imaginable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesPowered.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#0B1E2B] border border-slate-700/80 p-4 shadow-xl hover:border-[#F36F21] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div className="relative h-44 rounded-xl bg-white border border-slate-200/90 mb-3 flex items-center justify-center p-3.5 overflow-hidden shadow-sm">
                    <img
                      src={ind.img}
                      alt={ind.title}
                      className="max-h-full max-w-full w-auto h-auto object-contain filter brightness-[1.03] contrast-[1.05] drop-shadow-md group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0E2A3A] border border-slate-700 flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-white group-hover:text-amber-200 transition-colors leading-snug">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHY CHOOSE SUPREME — STAT COUNTERS */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 sm:py-20 bg-[#0B1E2B] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#0E2A3A] border border-slate-700/80">
              <div className="text-4xl lg:text-5xl font-black text-[#F36F21]">10+</div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mt-2">Years Serving Indian Industry</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0E2A3A] border border-slate-700/80">
              <div className="text-4xl lg:text-5xl font-black text-cyan-400">15+</div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mt-2">Industries Supplied Nationwide</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0E2A3A] border border-slate-700/80">
              <div className="text-4xl lg:text-5xl font-black text-amber-400">ISO 9001</div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mt-2">Certified &amp; MSME Registered</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0E2A3A] border border-slate-700/80">
              <div className="text-4xl lg:text-5xl font-black text-emerald-400">EVERY GRADE</div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mt-2">Stainless, Duplex, Nickel, Titanium</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CLOSING CTA */}
      {/* ========================================================================= */}
      <section className="about-section-reveal relative py-16 sm:py-24 bg-gradient-to-b from-[#0E2A3A] to-[#081720]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-[#0B1E2B] px-3.5 py-1.5 rounded-md border border-slate-700 inline-block font-mono">
            [READY TO PARTNER WITH SUPREME?]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            LET'S BUILD SOMETHING THAT <span className="text-[#F36F21]">LASTS.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Talk to our metallurgical sales desk about your next order — stock availability, custom dimensions, mill certificates, and dispatch delivery, sorted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${companyConfig.phone1.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-[#F36F21] to-[#D92B20] hover:from-[#D92B20] hover:to-[#B91F17] text-white shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Sales: {companyConfig.phone1}</span>
            </a>
            <a
              href={`mailto:${companyConfig.email1}?subject=About Us Inquiry - Supreme Metal`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-extrabold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email Sales Desk</span>
            </a>
          </div>

          {/* Footer Contact Details Bar */}
          <div className="pt-8 border-t border-slate-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-[#F36F21] shrink-0" />
              <span>Mumbai – 400004, Maharashtra, India</span>
            </div>
            <div>
              Email: <span className="text-slate-200 font-bold">{companyConfig.email2 || companyConfig.email1}</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
