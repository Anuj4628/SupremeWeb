import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  FileText,
  ShieldCheck,
  Award,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Printer
} from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../common/SocialIcons";
import companyConfig from "../../config/company";
import { useGsapReveal } from "../../utils/useGsapReveal";

export default function RfqFooterSection() {
  const containerRef = useGsapReveal();

  const rawPhone1 = companyConfig.phone1.replace(/\s+/g, "");
  const rawPhone2 = companyConfig.phone2.replace(/\s+/g, "");
  const rawLandline = companyConfig.landline.replace(/\s+/g, "");

  return (
    <footer
      id="site-footer"
      ref={containerRef}
      className="relative bg-[#0E2A3A] text-white pt-6 sm:pt-8 pb-3 border-t border-slate-800 overflow-hidden font-sans"
    >
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#173F55]/30 via-[#0E2A3A] to-[#081720] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* COMPACT RFQ CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <div
          className="relative bg-gradient-to-r from-[#0B202D] via-[#12364B] to-[#0B202D] rounded-xl p-4 sm:p-5 lg:p-6 border border-slate-700/80 shadow-lg mb-6 sm:mb-8 overflow-hidden"
          data-gsap="scale"
        >
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute -right-16 -bottom-16 w-60 h-60 bg-[#D94A1F]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D94A1F]/20 text-amber-300 border border-[#D94A1F]/40 uppercase tracking-wider">
                <FileText className="w-3 h-3 text-[#D94A1F]" />
                <span>Instant RFQ Desk</span>
              </div>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-tight">
                Request a Quick Quote for High-Performance Metals &amp; Alloys
              </h2>

              <p className="text-slate-300 text-xs leading-relaxed max-w-2xl font-normal">
                Contact our metallurgical technical team for immediate material availability, mill test certificates, custom plate cutting, and competitive bulk pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 pt-0.5 text-[11px] text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Same-Day Quote Dispatch</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>EN 10204 3.1 / 3.2 MTC Included</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pan-India &amp; Global Shipping</span>
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2 justify-center lg:justify-end">
              <a
                href="#contact#quote"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#D94A1F] hover:bg-[#E0481D] text-white transition-all shadow-md hover:shadow-amber-950/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Quote (RFQ)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${rawPhone1}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Sales: {companyConfig.phone1}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN FOOTER: BALANCED 4-COLUMN SYSTEM */}
        {/* Desktop: 4 Columns (4-2-3-3) | Tablet: 2x2 Grid | Mobile: Stacked */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7 sm:gap-8 pb-6 border-b border-slate-800/90 text-left">
          
          {/* ------------------------------------------------------------- */}
          {/* SECTION 1: Company Profile & Accreditations (Col Span 4) */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-3">
            <div>
              <h3 className="text-base font-extrabold text-white tracking-tight">
                {companyConfig.name}
              </h3>
              <p className="text-[11px] text-amber-400 font-medium tracking-wide mt-0.5">
                {companyConfig.tagline}
              </p>
            </div>

            <p className="text-slate-300/90 text-xs leading-relaxed font-normal">
              ISO 9001:2015 certified stockist, dealer, manufacturer, and supplier of Ferrous and Non-Ferrous Metals. Over a decade of excellence supplying Stainless Steel, Nickel Alloys, Titanium, Carbon &amp; Alloy Steel to critical industries.
            </p>

            {/* Certifications & MSME Tags */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>{companyConfig.certification}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>MSME REG: {companyConfig.udyamNo}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-1">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-2 tracking-wider">
                Connect With Us
              </span>
              <div className="flex items-center gap-2 text-slate-300">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-md bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#D94A1F] hover:border-[#D94A1F] transition-all shadow-xs"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-md bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#D94A1F] hover:border-[#D94A1F] transition-all shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-7 h-7 rounded-md bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#D94A1F] hover:border-[#D94A1F] transition-all shadow-xs"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SECTION 2: Navigation Links (Col Span 2) */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1.5 inline-block sm:block">
              Navigation
            </h4>

            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a href="#about-us" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>About Company</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Product Catalogue</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a href="#tpi-approvals" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>TPI &amp; Quality Audits</span>
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Industries Served</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Contact &amp; RFQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SECTION 3: Alloy Range Capabilities (Col Span 3) */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1.5 inline-block sm:block">
              Alloy Range
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-300/90 leading-relaxed font-normal">
              <li className="flex items-start gap-1.5">
                <span className="text-[#D94A1F] font-bold mt-0.5">•</span>
                <span>Stainless Steel 304/304L, 316/316L, 321, 310S, 904L</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D94A1F] font-bold mt-0.5">•</span>
                <span>Duplex 2205 (S31803) &amp; Super Duplex 2507 (S32750)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D94A1F] font-bold mt-0.5">•</span>
                <span>Inconel 600/601/625/800/825 &amp; Monel 400/K500</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D94A1F] font-bold mt-0.5">•</span>
                <span>Hastelloy C22/C276 &amp; Titanium Grade 1/2/5/7</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D94A1F] font-bold mt-0.5">•</span>
                <span>Alloy Steel P5/P9/P11/P22/P91 &amp; ASTM A516 Gr 60/70</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D94A1F] font-bold mt-0.5">•</span>
                <span>Cupro-Nickel 90/10 &amp; 70/30, Capillary Tubing</span>
              </li>
            </ul>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SECTION 4: Head Office & Contact Details (Col Span 3) */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1.5 inline-block sm:block">
              Head Office &amp; Contact
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  {companyConfig.address.lines}, {companyConfig.address.city} - {companyConfig.address.pincode}, {companyConfig.address.state}, India.
                </span>
              </div>

              {/* Phone Numbers (Clickable) */}
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <span className="text-slate-400">Phone: </span>
                  <a href={`tel:${rawPhone1}`} className="hover:text-amber-400 transition-colors font-medium">
                    {companyConfig.phone1}
                  </a>
                  <span className="text-slate-500 mx-1">/</span>
                  <a href={`tel:${rawPhone2}`} className="hover:text-amber-400 transition-colors font-medium">
                    {companyConfig.phone2}
                  </a>
                </div>
              </div>

              {/* Landline (Clickable) */}
              <div className="flex items-center gap-2.5">
                <Printer className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <div className="leading-snug">
                  <span className="text-slate-400">Landline: </span>
                  <a href={`tel:${rawLandline}`} className="hover:text-amber-400 transition-colors font-medium">
                    {companyConfig.landline}
                  </a>
                </div>
              </div>

              {/* Email (Clickable) */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${companyConfig.email1}`}
                  className="hover:text-amber-400 transition-colors font-medium text-slate-200"
                >
                  {companyConfig.email1}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        {/* ========================================================================= */}
        <div className="py-3.5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-3 text-xs text-slate-400">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left">
            <span>© 2026 <strong className="text-slate-200">{companyConfig.name}</strong>. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Design &amp; SEO by <span className="text-slate-300">Sunmarg India</span>.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-slate-400 font-mono text-[10.5px]">
            <span>ISO 9001:2015 CERTIFIED</span>
            <span className="text-slate-600">•</span>
            <span>MSME REGISTERED</span>
            <span className="text-slate-600">•</span>
            <span>EN 10204 3.1 TRACEABLE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
