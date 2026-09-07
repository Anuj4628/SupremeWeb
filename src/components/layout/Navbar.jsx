import React, { useState, useEffect, useRef } from "react";
import companyConfig from "../../config/company";
import navItems from "../../data/navigation";
import logoImage from "../../assets/logo2.png";
import ProductMegaMenu from "../products/ProductMegaMenu";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  ArrowRight,
  Send,
  Award,
  Factory,
  Globe
} from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../common/SocialIcons";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const hoverTimeoutRef = useRef(null);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250); // 250ms grace period to allow smooth cursor movement into mega menu
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white font-sans transition-all duration-300">
      {/* ========================================== */}
      {/* TOP CONTACT & CERTIFICATION BAR (DESKTOP) */}
      {/* ========================================== */}
      <div className="hidden lg:block bg-[#0F2942] text-white border-b border-slate-800 text-xs py-2 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Certifications & MSME */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-[#F36F21]/20 text-[#F36F21] px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase text-[11px] border border-[#F36F21]/30">
              <Award className="w-3.5 h-3.5" />
              {companyConfig.certification}
            </span>
            <span className="h-3 w-px bg-slate-700"></span>
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              MSME: <strong className="text-white ml-1">{companyConfig.udyamNo}</strong>
            </span>
          </div>

          {/* Right: Direct Contact & Info */}
          <div className="flex items-center gap-6 font-medium">
            <a
              href={`tel:${companyConfig.phone1.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#F36F21] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F36F21]" />
              <span>{companyConfig.phone1}</span>
            </a>
            <span className="h-3 w-px bg-slate-700"></span>
            <a
              href={`mailto:${companyConfig.email1}`}
              className="flex items-center gap-1.5 hover:text-[#F36F21] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F36F21]" />
              <span>{companyConfig.email1}</span>
            </a>
            <span className="h-3 w-px bg-slate-700"></span>
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#F36F21] transition-colors p-0.5"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#F36F21] transition-colors p-0.5"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="hover:text-[#F36F21] transition-colors p-0.5"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* MAIN NAVIGATION BAR */}
      {/* ========================================== */}
      <div
        className={`w-full bg-white border-b border-slate-200/80 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-slate-900/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 lg:h-24 flex items-center justify-between py-1.5">
          {/* Logo Section */}
          <a href="#home" className="flex items-center shrink-0 group h-full py-0.5">
            <img
              src={logoImage}
              alt="Supreme Metal and Alloys"
              className="h-14 sm:h-18 lg:h-[88px] w-auto max-w-[320px] sm:max-w-[480px] lg:max-w-[620px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.label === "Products") {
                      // Toggle mega menu state on click
                      setActiveDropdown(activeDropdown === "Products" ? null : "Products");
                    }
                  }}
                  className={`flex items-center gap-1 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:text-[#F36F21] hover:bg-slate-50 transition-all duration-200 relative ${
                    activeDropdown === item.label ? "text-[#F36F21] bg-slate-50" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {(item.dropdown || item.label === "Products") && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180 text-[#F36F21]" : "text-slate-400"
                      }`}
                    />
                  )}
                </a>

                {/* PRODUCT MEGA MENU OVERLAY (COMPACT & BRIDGED) */}
                {item.label === "Products" && activeDropdown === "Products" && (
                  <div
                    onMouseEnter={() => handleMouseEnter("Products")}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <ProductMegaMenu onClose={() => setActiveDropdown(null)} />
                  </div>
                )}

                {/* Standard Dropdown Menu (For Materials / Industries) */}
                {item.label !== "Products" && item.dropdown && activeDropdown === item.label && (
                  <div
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-0 pt-2 w-[340px] xl:w-[380px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 overflow-hidden">
                      <div className="h-1 w-full bg-gradient-to-r from-[#F36F21] via-[#D92B20] to-[#0F2942] rounded-full mb-2"></div>
                      <div className="flex flex-col gap-1">
                        {item.dropdown.map((subItem) => {
                          const IconComponent = subItem.icon;
                          return (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="group/sub flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200"
                            >
                              <div className="p-2 rounded-lg bg-[#0F2942]/5 text-[#0F2942] group-hover/sub:bg-[#F36F21] group-hover/sub:text-white transition-colors shrink-0">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-bold text-slate-800 group-hover/sub:text-[#F36F21] transition-colors">
                                    {subItem.title}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 text-[#F36F21] group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                                </div>
                                <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                                  {subItem.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action: Enquire Now CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#F36F21] to-[#D92B20] hover:from-[#D92B20] hover:to-[#B91F17] text-white px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold tracking-wide transition-all duration-300 shadow-md shadow-[#F36F21]/20 hover:shadow-lg hover:shadow-[#D92B20]/30 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Get a Quote</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#F36F21] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* MOBILE DRAWER MENU */}
      {/* ========================================== */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto z-50 animate-in slide-in-from-top duration-300">
          {/* Top Mobile Bar Info */}
          <div className="bg-[#0F2942] text-white p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#F36F21] uppercase text-[10px] tracking-wider">
                {companyConfig.certification}
              </span>
              <span className="text-slate-300 text-[10px]">
                MSME: {companyConfig.udyamNo}
              </span>
            </div>
          </div>

          <div className="p-4 space-y-2">
            {/* Quick Product Divisions Shortcut for Mobile */}
            <div className="p-3 bg-[#0E2A3A] text-white rounded-xl mb-3 space-y-2">
              <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">Product Divisions</div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#products/manufacturer"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 bg-slate-800 rounded-lg text-xs font-bold text-white hover:text-[#F36F21] flex items-center gap-1.5 border border-amber-500/30"
                >
                  <Factory className="w-3.5 h-3.5 text-[#F36F21]" />
                  <span>Manufacturer</span>
                </a>
                <a
                  href="#products/supplier"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 bg-slate-800 rounded-lg text-xs font-bold text-white hover:text-blue-400 flex items-center gap-1.5 border border-blue-500/30"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Supplier</span>
                </a>
              </div>
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex items-center justify-between py-2 text-left font-bold text-slate-800 hover:text-[#F36F21]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileDropdown === item.label ? "rotate-180 text-[#F36F21]" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2 bg-slate-50 rounded-xl mt-1">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-xs font-semibold text-slate-700 hover:text-[#F36F21]"
                          >
                            • {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-bold text-slate-800 hover:text-[#F36F21]"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F36F21] to-[#D92B20] text-white py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Get a Quote</span>
              </a>

              {/* Mobile Quick Phone & Email */}
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
                <a
                  href={`tel:${companyConfig.phone1.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-[#F36F21]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F36F21]" />
                  <span>{companyConfig.phone1} / {companyConfig.phone2}</span>
                </a>
                <a
                  href={`mailto:${companyConfig.email1}`}
                  className="flex items-center gap-2 hover:text-[#F36F21]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F36F21]" />
                  <span>{companyConfig.email1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
