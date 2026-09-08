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
  Building2,
  CheckCircle2,
  Globe,
  Printer
} from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../common/SocialIcons";
import companyConfig from "../../config/company";
import { useGsapReveal } from "../../utils/useGsapReveal";

export default function RfqFooterSection() {
  const containerRef = useGsapReveal();

  return (
    <footer
      id="site-footer"
      ref={containerRef}
      className="relative bg-[#0E2A3A] text-white pt-6 sm:pt-8 lg:pt-10 border-t border-slate-800 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#173F55]/40 via-[#0E2A3A] to-[#081720] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* RFQ CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <div
          className="relative bg-gradient-to-r from-[#0B202D] via-[#12364B] to-[#0B202D] rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-700/80 shadow-xl mb-6 sm:mb-8 overflow-hidden text-center md:text-left"
          data-gsap="scale"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D94A1F]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#D94A1F]/20 text-amber-300 border border-[#D94A1F]/40 uppercase tracking-wider">
                <FileText className="w-3 h-3" />
                [INSTANT-RFQ-DESK]
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Request a Quick Quote for High-Performance Metals & Alloys
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-medium">
                Contact our metallurgical technical team for immediate material availability, mill test certificates, custom plate cutting, and competitive bulk pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-1 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Same-Day Quote Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  EN 10204 3.1 / 3.2 MTC Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Pan-India & Global Shipping
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center lg:justify-end">
              <a
                href="#contact#quote"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-extrabold bg-[#D94A1F] hover:bg-[#E0481D] text-white transition-all shadow-md hover:shadow-amber-950/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${companyConfig.phone1.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-extrabold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Sales: {companyConfig.phone1}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN FOOTER NAVIGATION & CONTACT INFORMATION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 sm:pb-8 border-b border-slate-800">
          
          {/* Column 1: Branding & Accreditations */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              Supreme Metal and Alloys
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              ISO 9001:2015 certified stockist, dealer, manufacturer, and supplier of Ferrous and Non-Ferrous Metals. Over a decade of excellence supplying Stainless Steel, Nickel Alloys, Titanium, Carbon & Alloy Steel to critical industries.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-300 font-semibold">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>{companyConfig.certification}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>MSME REG: {companyConfig.udyamNo}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-1">
              <div className="text-[10px] font-mono font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
                CONNECT WITH US
              </div>
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

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D94A1F] font-mono">
              [NAVIGATION]
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
              <li>
                <a href="#about-us" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F]" />
                  About Company
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F]" />
                  Product Catalogue
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F]" />
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#tpi-approvals" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F]" />
                  TPI & Quality Audits
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F]" />
                  Industries Served
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#D94A1F]" />
                  Contact & RFQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Material Capabilities */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D94A1F] font-mono">
              [ALLOY-RANGE]
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
              <li>Stainless Steel 304/304L, 316/316L, 321, 310S, 904L</li>
              <li>Duplex 2205 (S31803) & Super Duplex 2507 (S32750)</li>
              <li>Inconel 600/601/625/800/825 & Monel 400/K500</li>
              <li>Hastelloy C22/C276 & Titanium Grade 1/2/5/7</li>
              <li>Alloy Steel P5/P9/P11/P22/P91 & ASTM A516 Gr 60/70</li>
              <li>Cupro-Nickel 90/10 & 70/30, Capillary Tubing</li>
            </ul>
          </div>

          {/* Column 4: Office & Sales Contact */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D94A1F] font-mono">
              [HEAD-OFFICE]
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {companyConfig.address.lines}, {companyConfig.address.city} - {companyConfig.address.pincode}, {companyConfig.address.state}, India.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Phone: {companyConfig.phone1} / {companyConfig.phone2}</span>
              </div>

              <div className="flex items-center gap-2">
                <Printer className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Landline: {companyConfig.landline}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{companyConfig.email1}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        {/* ========================================================================= */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 <strong className="text-slate-200">Supreme Metal and Alloys</strong>. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 font-mono text-[11px]">
            <span>ISO 9001:2015 CERTIFIED</span>
            <span>•</span>
            <span>MSME REGISTERED</span>
            <span>•</span>
            <span>EN 10204 3.1 TRACEABLE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
