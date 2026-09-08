import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
  ShieldCheck,
  Award,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  Building2,
  ChevronRight,
  ChevronDown,
  Info,
  Clock,
  Sparkles,
  Loader2,
  Copy,
  Check,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  ArrowUpRight,
  Compass,
  FileText
} from "lucide-react";
import { CATEGORIES, MATERIALS } from "../../data/productCatalog";

// Customer care hero background image provided by user
import heroBgCustomerCare from "../../assets/contact_hero_bg.png";

// Third-party inspection & audit company logos from src/assets/ThirdParty/
import ltLogo from "../../assets/ThirdParty/L&T logo.png";
import eilLogo from "../../assets/ThirdParty/IEL logo.png";
import npcilLogo from "../../assets/ThirdParty/Gemini_Generated_Image_usao52usao52usao.png";
import daeLogo from "../../assets/ThirdParty/Gemini_Generated_Image_xfka6yxfka6yxfka.png";
import ibrLogo from "../../assets/ThirdParty/Gemini_Generated_Image_e65fohe65fohe65f.png";
import tuvLogo from "../../assets/ThirdParty/Gemini_Generated_Image_88xyt488xyt488xy.png";
import dnvLogo from "../../assets/ThirdParty/Gemini_Generated_Image_40wf9r40wf9r40wf.png";
import bvLogo from "../../assets/ThirdParty/Gemini_Generated_Image_jx8sf8jx8sf8jx8s.png";
import lrisLogo from "../../assets/ThirdParty/Gemini_Generated_Image_p04przp04przp04p.png";
import ritesLogo from "../../assets/ThirdParty/Gemini_Generated_Image_el85cdel85cdel85.png";
import tataLogo from "../../assets/ThirdParty/Gemini_Generated_Image_vf7jxyvf7jxyvf7j.png";
import electromechLogo from "../../assets/ThirdParty/Gemini_Generated_Image_hba35ohba35ohba3.png";

// Safe resolve for react-fast-marquee in ESM / React 19 environments
const MarqueeComponent =
  typeof Marquee === "function" || (typeof Marquee === "object" && Marquee?.$$typeof)
    ? Marquee
    : Marquee?.default?.default || Marquee?.default || Marquee;

// Recognized inspection relationships logo catalog
const tpiLogos = [
  { logo: ltLogo, name: "Larsen & Toubro Ltd", short: "L&T" },
  { logo: eilLogo, name: "Engineers India Ltd", short: "EIL / IEL" },
  { logo: npcilLogo, name: "Nuclear Power Corp of India", short: "NPCIL" },
  { logo: daeLogo, name: "Dept. of Atomic Energy", short: "DAE" },
  { logo: ibrLogo, name: "Indian Boiler Regulations", short: "IBR" },
  { logo: tuvLogo, name: "TÜV India", short: "TÜV" },
  { logo: dnvLogo, name: "Det Norske Veritas", short: "DNV" },
  { logo: bvLogo, name: "Bureau Veritas", short: "BV" },
  { logo: lrisLogo, name: "Lloyd's Register", short: "LRIS" },
  { logo: ritesLogo, name: "RITES Limited", short: "RITES" },
  { logo: tataLogo, name: "TATA Projects", short: "TATA" },
  { logo: electromechLogo, name: "Electromech Engg", short: "ELECTROMECH" }
];

// Verified Catalogue FAQs
const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What categories and product forms does Supreme Metal & Alloys supply?",
    answer:
      "We are specialized stockists, dealers, and suppliers of Ferrous & Non-Ferrous Metals including Stainless Steel, Carbon Steel, Alloy Steel, Duplex, Super Duplex, High Nickel Alloys, and Titanium. Product forms include Seamless & Welded Pipes, Tubes, Forged & Buttweld Pipe Fittings, Industrial Flanges, Fasteners, Round Bars, Plates, Sheets, Coils, Circles, Flats, Patapatti, and Wire Mesh."
  },
  {
    id: "faq-2",
    question: "What quality certifications and compliance standards back your supplies?",
    answer:
      "Supreme Metal and Alloys is an ISO 9001:2015 Certified Company, registered under MSME (UDYAM-MH-19-0110593), and accredited by EGAC (CAB #118005) & IAF. All materials are tested to ASTM, ASME, DIN, BS, and IS standards with complete metallurgical heat traceability."
  },
  {
    id: "faq-3",
    question: "Can third-party inspection (TPI) be arranged prior to dispatch?",
    answer:
      "Yes. Materials can be inspected and witnessed under premier international agencies and government bodies including Larsen & Toubro, NPCIL, IBR Approved, Dept. of Atomic Energy, TÜV India, DNV, Bureau Veritas, Lloyd's Register, RITES, and TATA Projects."
  },
  {
    id: "faq-4",
    question: "Are Mill Test Certificates (MTC) provided with every order?",
    answer:
      "Yes. We supply authentic Mill Test Certificates (MTC) in accordance with EN 10204 3.1 / 3.2, including heat numbers, chemical composition analysis, mechanical tensile and hardness testing, hydro testing, and PMI inspection records."
  },
  {
    id: "faq-5",
    question: "Where is Supreme Metal and Alloys located and what is your supply reach?",
    answer:
      "Our registered office and principal hub is located at RG-1, Ground Floor, Parekh House, Building No. 32, 7th Khetwadi Lane, S.V.P. Road, Mumbai - 400004, Maharashtra, India. We fulfill mission-critical demands pan-India and manage global export shipments with complete export-grade wooden packaging."
  },
  {
    id: "faq-6",
    question: "What is the typical turnaround time for an official RFQ price quotation?",
    answer:
      "Our metallurgical estimating desk reviews specifications and provides formal commercial quotations within 24 business hours. For urgent stock inquiries, you can reach our direct sales mobile desk at +91 98696 10976 or +91 98206 10976 for same-day pricing."
  }
];

export default function ContactPage({
  initialRequirement = "",
  heroImage = heroBgCustomerCare,
  onBackToHome
}) {
  const containerRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: initialRequirement || "",
    message: ""
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState(null); // 'not_connected' | 'error' | null

  // Copy feedback states
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(null);

  // FAQ accordion state: active item id (null = closed)
  const [openFaq, setOpenFaq] = useState("faq-1");

  // Pre-fill requirement if initialRequirement changes
  useEffect(() => {
    if (initialRequirement) {
      setFormData((prev) => ({ ...prev, requirement: initialRequirement }));
    }
  }, [initialRequirement]);

  // Set document title & handle smooth scroll
  useEffect(() => {
    document.title = "Contact Us & Request a Quote | Supreme Metal and Alloys";

    if (window.location.hash.includes("quote")) {
      const quoteEl = document.getElementById("quote");
      if (quoteEl) {
        setTimeout(() => {
          quoteEl.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // GSAP Entrance Animations with clean lifecycle teardown
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Load Reveal
      gsap.fromTo(
        ".gsap-hero-el",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out"
        }
      );

      // 2. Marquee entrance
      gsap.fromTo(
        ".gsap-marquee-strip",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.25
        }
      );

      // 3. Staggered contact modules
      gsap.fromTo(
        ".gsap-contact-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.35
        }
      );

      // 4. Location & RFQ section entrance
      gsap.fromTo(
        ".gsap-biz-area",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          delay: 0.45
        }
      );

      // 5. FAQ section entrance
      gsap.fromTo(
        ".gsap-faq-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.55
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Field validation rules
  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.trim().length < 2) error = "Name must be at least 2 characters";
    } else if (name === "email") {
      if (!value.trim()) error = "Email address is required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
        error = "Please enter a valid email address (e.g. name@company.com)";
      }
    } else if (name === "phone") {
      if (!value.trim()) error = "Phone number is required";
      else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/.test(value.trim())) {
        error = "Please enter a valid phone number (min. 8 digits)";
      }
    } else if (name === "requirement") {
      if (!value.trim()) error = "Product / Requirement is required";
      else if (value.trim().length < 2) error = "Please specify product or material requirement";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    setErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, formData[fieldName]) }));
  };

  const submitEnquiry = async (data) => {
    return new Promise((resolve) => setTimeout(resolve, 800));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      requirement: validateField("requirement", formData.requirement)
    };

    setTouched({
      name: true,
      email: true,
      phone: true,
      requirement: true
    });
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      const firstErrorField = Object.keys(newErrors).find((k) => newErrors[k]);
      if (firstErrorField) {
        document.getElementById(`contact-${firstErrorField}`)?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry(formData);
      setSubmissionState("not_connected");
    } catch {
      setSubmissionState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard?.writeText(text);
    if (type === "email") {
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2000);
    } else if (type === "phone") {
      setCopiedPhone(text);
      setTimeout(() => setCopiedPhone(null), 2000);
    }
  };

  // Google Maps verified address constants per Section 1 & 4
  const verifiedAddressText =
    "RG-1, Ground Floor, Parekh House, Building No. 32, 7th Khetwadi Lane, S.V.P. Road, Mumbai - 400004, Maharashtra, India";

  const googleMapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=RG-1%2C%20Ground%20Floor%2C%20Parekh%20House%2C%20Building%20No.%2032%2C%207th%20Khetwadi%20Lane%2C%20S.V.P.%20Road%2C%20Mumbai%20-%20400004";

  const googleMapsEmbedUrl =
    "https://maps.google.com/maps?q=RG-1%2C%20Ground%20Floor%2C%20Parekh%20House%2C%20Building%20No.%2032%2C%207th%20Khetwadi%20Lane%2C%20S.V.P.%20Road%2C%20Mumbai%20-%20400004&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div ref={containerRef} className="w-full bg-[#FAFBFD] font-sans text-slate-800 relative">
      
      {/* ========================================================================= */}
      {/* 01 — HERO SECTION: CLEAR BACKGROUND IMAGE, COMPACT MOBILE, GET IN TOUCH */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0B1B2B] text-white pt-8 pb-10 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 min-h-[300px] sm:min-h-[400px] lg:min-h-auto overflow-hidden border-b border-slate-800">
        
        {/* Crisp Background Image Layer — Clear, Sharp, No Blur */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Supreme Metal and Alloys Customer Support Representative"
            className="w-full h-full object-cover object-[18%_center] sm:object-[left_center] md:object-[25%_center] select-none pointer-events-none filter brightness-100 contrast-100"
          />
          {/* Directional scrim: completely transparent on the left where the specialist is, gently dark on the right for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07131F]/50 to-[#07131F]/90 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/85 via-[#07131F]/40 to-transparent md:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation (Desktop/Tablet) */}
          <div className="hidden sm:flex gsap-hero-el items-center gap-2 text-xs font-mono tracking-widest text-slate-300 mb-6 drop-shadow-sm">
            <a
              href="#home"
              onClick={(e) => {
                if (onBackToHome) {
                  e.preventDefault();
                  onBackToHome();
                }
              }}
              className="hover:text-[#F36F21] transition-colors flex items-center gap-1 uppercase"
            >
              <span>Home</span>
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F36F21] font-bold uppercase tracking-wider">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (5 cols): Left open so the customer support specialist is fully clear and unobstructed */}
            <div className="hidden lg:block lg:col-span-5 min-h-[320px] pointer-events-none" />

            {/* Right Column (7 cols): Heading, Supporting Statement, CTAs & Accreditations */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-5 bg-[#07131F]/60 sm:bg-[#07131F]/80 lg:bg-[#07131F]/65 p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xs sm:backdrop-blur-none">
              
              {/* Technical Indicator Badge (Hidden on mobile for clean hierarchy) */}
              <div className="hidden sm:inline-flex gsap-hero-el items-center gap-2.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-bold bg-[#F36F21]/20 text-[#F36F21] border border-[#F36F21]/40 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
                <span>[OFFICIAL CATALOGUE CONTACT SPECIFICATION]</span>
              </div>

              {/* Main Headline */}
              <h1 className="gsap-hero-el text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Get in <span className="text-[#F36F21]">Touch</span>
              </h1>

              {/* Strong Supporting Statement */}
              <p className="gsap-hero-el text-xs sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed line-clamp-2 sm:line-clamp-none">
                Premier Indian stockist, dealers, and suppliers of Ferrous &amp; Non-Ferrous Metals — Stainless Steel &amp; Carbon Steel, Rods, Sheets, Pipes &amp; Pipe Fittings.
              </p>

              {/* Action Buttons: Primary CTA visible, secondary hidden on mobile */}
              <div className="gsap-hero-el pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 bg-[#F36F21] hover:bg-[#d94a1f] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-[#F36F21]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Instant RFQ</span>
                </a>

                <a
                  href="tel:+919869610976"
                  className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#F36F21]" />
                  <span>Direct Call Desk</span>
                </a>
              </div>

              {/* Accreditation Quick Pill Bar (Hidden on mobile for clean compact hero) */}
              <div className="hidden sm:flex gsap-hero-el pt-3 border-t border-white/10 flex-wrap items-center gap-2 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                  <Award className="w-3.5 h-3.5 text-[#F36F21]" />
                  <span>ISO 9001:2015</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>MSME UDYAM-MH-19-0110593</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>EGAC &amp; IAF (CAB #118005)</span>
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 02 — RECOGNITION: CONTINUOUS RIGHT-TO-LEFT TPI COMPANY LOGO MARQUEE */}
      {/* ========================================================================= */}
      <section className="gsap-marquee-strip relative bg-[#0E2A3A] py-5 sm:py-6 border-b border-slate-800 overflow-hidden shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-300">
            <span className="flex items-center gap-2 font-bold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21]" />
              [RECOGNIZED THIRD-PARTY INSPECTION RELATIONSHIPS & QUALITY AUDITS]
            </span>
            <span className="hidden sm:inline-block text-slate-400 text-[10px]">
              CONTINUOUS VENDOR ACCREDITATION TRACK
            </span>
          </div>
        </div>

        {/* Marquee Track Container with Side Fade Masks */}
        <div className="relative w-full">

          <MarqueeComponent
            speed={30}
            direction="left"
            gradient={false}
            pauseOnHover
            className="py-1"
          >
            {tpiLogos.map((item, idx) => (
              <div
                key={`tpi-${idx}`}
                className="mx-3 sm:mx-4 px-4 py-2.5 rounded-xl bg-white/95 hover:bg-white border border-slate-700/50 hover:border-[#F36F21] transition-all duration-300 shadow-sm flex items-center gap-3.5 h-16 min-w-[200px] sm:min-w-[220px] group cursor-default"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src={item.logo}
                    alt={`${item.name} Approved Logo`}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-900 truncate leading-tight">
                    {item.short}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate leading-tight font-medium">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </MarqueeComponent>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — CONTACT: DIFFERENTIATED ELEVATED INFORMATION MODULES */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#F4F7FB] via-white to-[#F8FAFC]">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[#F36F21] font-mono font-bold text-xs uppercase tracking-widest bg-[#F36F21]/10 px-3.5 py-1.5 rounded-md border border-[#F36F21]/25 inline-block mb-2">
              [COMMERCIAL CONTACT CHANNELS]
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0E2A3A] tracking-tight">
              Connect with Our Technical Desk
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Verified corporate address, direct telephone routing, and specialized commercial inquiry mailboxes.
            </p>
          </div>

          {/* Cards Grid: 3 Differentiated Modules with Breathing Room */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* MODULE 1: REGISTERED OFFICE */}
            <div className="gsap-contact-card relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#F36F21]/60 p-7 sm:p-8 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0E2A3A] group-hover:bg-[#F36F21] transition-colors" />

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-5 pb-3 border-b border-slate-100">
                  <span className="text-[#F36F21] font-bold">[CONTACT-01]</span>
                  <span className="uppercase tracking-wider font-semibold text-slate-500">SINGLE HEADQUARTERS</span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F36F21] border border-amber-200 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0E2A3A] uppercase tracking-wider font-mono">
                      REGISTERED OFFICE
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">Mumbai Central Hub</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 mb-5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    CORPORATE LOCATION:
                  </span>
                  <address className="not-italic text-sm text-slate-800 leading-relaxed font-medium">
                    <strong className="text-[#0E2A3A] block font-bold text-sm mb-1">
                      Supreme Metal and Alloys
                    </strong>
                    RG-1, Ground Floor, Parekh House,<br />
                    Building No. 32, 7th Khetwadi Lane,<br />
                    S.V.P. Road, Mumbai - 400004,<br />
                    Maharashtra, India
                  </address>
                </div>

                <a
                  href="#map-section"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0E2A3A] hover:text-[#F36F21] transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#F36F21]" />
                  <span>View Map & Coordinates ↓</span>
                </a>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-[#0E2A3A] font-mono">
                <span className="text-[10px]">VERIFIED CATALOGUE DETAIL</span>
                <span className="text-[#F36F21] transform transition-transform group-hover:translate-x-1.5 font-bold">→</span>
              </div>
            </div>

            {/* MODULE 2: CALL US */}
            <div className="gsap-contact-card relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#F36F21]/60 p-7 sm:p-8 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0E2A3A] group-hover:bg-[#F36F21] transition-colors" />

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-5 pb-3 border-b border-slate-100">
                  <span className="text-[#F36F21] font-bold">[CONTACT-02]</span>
                  <span className="uppercase tracking-wider font-semibold text-slate-500">DIRECT VOICE DESK</span>
                </div>

                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F36F21] border border-amber-200 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0E2A3A] uppercase tracking-wider font-mono">
                      CALL US
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">Mobiles & Office Line</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-5">
                  {/* Group 1: Mr. M. M. Desai */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/70">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
                      Mr. M. M. Desai
                    </span>
                    <div className="space-y-2">
                      {[
                        { number: "+91 98696 10976" },
                        { number: "+91 98206 10976" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <a
                            href={`tel:${item.number.replace(/\s+/g, "")}`}
                            className="text-sm font-bold text-slate-800 hover:text-[#F36F21] transition-colors flex items-center gap-2"
                          >
                            <PhoneCall className="w-3.5 h-3.5 text-[#F36F21]" />
                            <span>{item.number}</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.number, "phone")}
                            className="text-slate-400 hover:text-[#F36F21] p-1 rounded transition-colors text-[10px] font-mono"
                            title="Copy number"
                          >
                            {copiedPhone === item.number ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Group 2: Mr. Mahesh */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/70">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
                      Mr. Mahesh
                    </span>
                    <div className="flex items-center justify-between">
                      <a
                        href="tel:+919004711792"
                        className="text-sm font-bold text-slate-800 hover:text-[#F36F21] transition-colors flex items-center gap-2"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#F36F21]" />
                        <span>+91 90047 11792</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("+91 90047 11792", "phone")}
                        className="text-slate-400 hover:text-[#F36F21] p-1 rounded transition-colors text-[10px] font-mono"
                        title="Copy number"
                      >
                        {copiedPhone === "+91 90047 11792" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        LANDLINE / OFFICE:
                      </span>
                      <a
                        href="tel:02267496378"
                        className="text-sm font-bold text-slate-800 hover:text-[#F36F21] transition-colors"
                      >
                        022 6749 6378
                      </a>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                      MUMBAI
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-[#0E2A3A] font-mono">
                <span className="text-[10px]">VERIFIED CATALOGUE DETAIL</span>
                <span className="text-[#F36F21] transform transition-transform group-hover:translate-x-1.5 font-bold">→</span>
              </div>
            </div>

            {/* MODULE 3: EMAIL US */}
            <div className="gsap-contact-card relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#F36F21]/60 p-7 sm:p-8 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0E2A3A] group-hover:bg-[#F36F21] transition-colors" />

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-5 pb-3 border-b border-slate-100">
                  <span className="text-[#F36F21] font-bold">[CONTACT-03]</span>
                  <span className="uppercase tracking-wider font-semibold text-slate-500">DIGITAL DISPATCH</span>
                </div>

                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F36F21] border border-amber-200 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0E2A3A] uppercase tracking-wider font-mono">
                      EMAIL US
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">Official Inquiries</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {/* Email 1 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/70">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      PRIMARY SALES & RFQ:
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href="mailto:jayveermetal@gmail.com"
                        className="text-sm font-bold text-slate-900 hover:text-[#F36F21] transition-colors break-all"
                      >
                        jayveermetal@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("jayveermetal@gmail.com", "email")}
                        className="text-slate-400 hover:text-[#F36F21] p-1 rounded transition-colors shrink-0"
                        title="Copy email"
                      >
                        {copiedEmail === "jayveermetal@gmail.com" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Email 2 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/70">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      OFFICIAL CATALOGUE INQUIRY:
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href="mailto:supremmetal2019@gmail.com"
                        className="text-sm font-bold text-slate-900 hover:text-[#F36F21] transition-colors break-all"
                      >
                        supremmetal2019@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("supremmetal2019@gmail.com", "email")}
                        className="text-slate-400 hover:text-[#F36F21] p-1 rounded transition-colors shrink-0"
                        title="Copy email"
                      >
                        {copiedEmail === "supremmetal2019@gmail.com" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-[#0E2A3A] font-mono">
                <span className="text-[10px]">VERIFIED CATALOGUE DETAIL</span>
                <span className="text-[#F36F21] transform transition-transform group-hover:translate-x-1.5 font-bold">→</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — LOCATION + RFQ: INTEGRATED BUSINESS INTERACTION AREA */}
      {/* ========================================================================= */}
      <section id="map-section" className="gsap-biz-area relative py-14 sm:py-18 bg-[#0F2942] text-white overflow-hidden border-y border-slate-800">
        
        {/* Background Radial Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F36F21]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Integrated Area Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-[#F36F21] font-mono font-bold text-xs uppercase tracking-widest bg-[#F36F21]/15 px-3.5 py-1.5 rounded-md border border-[#F36F21]/30 inline-block mb-3">
              [COMMERCIAL & LOGISTICS COMMAND]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Registered Office Location & Technical RFQ Desk
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
              Coordinate facility visits, inspect certified mill stocks at our Mumbai hub, or submit your bill of materials for same-day metallurgical estimations.
            </p>
          </div>

          {/* Unified Two-Column Grid: Map (5 Cols) + RFQ Form (7 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT COLUMN: FIND OUR REGISTERED OFFICE & MAP (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-7 shadow-2xl flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  <span className="text-[#F36F21] font-bold">[LOCATION-01]</span>
                  <span className="text-slate-400">MUMBAI METROPOLITAN HUB</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F36F21]" />
                  <span>Find Our Registered Office</span>
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
                  {verifiedAddressText}
                </p>

                {/* Embedded Interactive Google Map */}
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-700 shadow-inner bg-slate-950 mb-5">
                  <iframe
                    title="Supreme Metal and Alloys Registered Office Map"
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.05]"
                  />
                </div>
              </div>

              {/* Verified CTA Button: Open in Google Maps */}
              <div className="pt-2">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F36F21] hover:bg-[#d94a1f] text-white px-5 py-3.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#F36F21]/20 hover:-translate-y-0.5"
                >
                  <span>Open in Google Maps / Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-[10px] font-mono text-slate-400 text-center block mt-2.5">
                  Verified Destination: Parekh House, S.V.P. Road, Mumbai - 400004
                </span>
              </div>

            </div>

            {/* RIGHT COLUMN: REQUEST A QUICK QUOTE (RFQ) FORM (7 Cols) */}
            <div id="quote" className="lg:col-span-7 bg-white text-slate-800 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-4 pb-3 border-b border-slate-100">
                <span className="text-[#F36F21] font-bold">[ENQUIRY-FORM]</span>
                <span className="uppercase tracking-wider font-semibold text-slate-500">SAME-DAY ESTIMATION GATEWAY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0E2A3A] tracking-tight leading-tight mb-2">
                Request a Quick Quote (RFQ)
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                Specify required material grade, product form, dimensions, wall thickness/schedules, quantities, and MTC requirements.
              </p>

              {/* Form Submission Honest State (per Section 6: no fake success message) */}
              {submissionState === "not_connected" ? (
                <div className="p-6 bg-amber-50/95 rounded-2xl border border-amber-200 text-[#0E2A3A] space-y-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#F36F21] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0E2A3A] font-mono uppercase tracking-wider mb-1">
                        Online Enquiry Gateway Notice
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Online direct form routing is currently in demonstration mode on this server. To receive your immediate official quote, please forward your bill of materials (BOM) directly to our commercial desk:
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2.5 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Direct Sales Mailbox:</span>
                      <a href="mailto:jayveermetal@gmail.com" className="font-bold text-[#F36F21] hover:underline">
                        jayveermetal@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Telephone / WhatsApp:</span>
                      <a href="tel:+919869610976" className="font-bold text-slate-800 hover:underline">
                        +91 98696 10976
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <a
                      href="https://wa.me/919869610976?text=Hello%20Supreme%20Metal%20%26%20Alloys%2C%20I%20would%20like%20to%20request%20a%20formal%20quotation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold font-mono tracking-wider hover:bg-[#20bd5a] transition-all"
                    >
                      <span>Connect on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmissionState(null)}
                      className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold font-mono tracking-wider hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Full Name <span className="text-[#F36F21]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          touched.name && errors.name
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-[#F36F21] focus:ring-[#F36F21]/20"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <span className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Industrial Works Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Email Address <span className="text-[#F36F21]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          touched.email && errors.email
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-[#F36F21] focus:ring-[#F36F21]/20"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <span className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Phone / Mobile <span className="text-[#F36F21]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          touched.phone && errors.phone
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-[#F36F21] focus:ring-[#F36F21]/20"
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <span className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Product / Requirement with Datalist Suggestions */}
                  <div>
                    <label htmlFor="contact-requirement" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Product / Requirement <span className="text-[#F36F21]">*</span>
                    </label>
                    <input
                      id="contact-requirement"
                      type="text"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      onBlur={() => handleBlur("requirement")}
                      placeholder="e.g. SS 316L Weld Neck Flanges Class 150 or Inconel 625 Round Bars"
                      list="taxonomy-suggestions"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        touched.requirement && errors.requirement
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-slate-200 focus:border-[#F36F21] focus:ring-[#F36F21]/20"
                      }`}
                    />
                    <datalist id="taxonomy-suggestions">
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name} />
                      ))}
                      {MATERIALS.map((m) => (
                        <option key={m.id} value={m.name} />
                      ))}
                    </datalist>
                    {touched.requirement && errors.requirement && (
                      <span className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.requirement}
                      </span>
                    )}
                  </div>

                  {/* Row 4: Specifications / Quantities */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Specifications / Quantities <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify sizes, thickness, schedule, standard (ASTM/ASME), quantity, or required delivery timeframe..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F36F21] hover:bg-[#d94a1f] text-white px-8 py-4 rounded-xl text-sm font-bold font-mono uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#F36F21]/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Specifications...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT FORMAL RFQ ENQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 05 — FAQ: FREQUENTLY ASKED QUESTIONS (ACCORDION INTERACTION) */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-[#F36F21] font-mono font-bold text-xs uppercase tracking-widest bg-[#F36F21]/10 px-3.5 py-1.5 rounded-md border border-[#F36F21]/25 inline-block mb-2">
              [TECHNICAL & COMMERCIAL FAQS]
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0E2A3A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Essential answers regarding material certifications, third-party inspection procedures, and dispatch logistics.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className={`gsap-faq-item rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#F36F21]/50 shadow-md ring-2 ring-[#F36F21]/10"
                      : "bg-white/80 border-slate-200/90 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0E2A3A] tracking-tight flex items-center gap-3">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-[#F36F21]" : "text-slate-400"}`} />
                      <span>{item.question}</span>
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-[#F36F21] text-white rotate-180" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <p className="font-normal">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Strip */}
          <div className="mt-10 p-5 rounded-2xl bg-[#0E2A3A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold">Have a specialized metallurgical requirement?</div>
                <div className="text-xs text-slate-300">Speak directly with our technical estimators in Mumbai.</div>
              </div>
            </div>
            <a
              href="tel:+919869610976"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F36F21] hover:bg-[#d94a1f] text-white rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 98696 10976</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
