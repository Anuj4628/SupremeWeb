import React, { useState, useEffect, useRef } from "react";
import companyConfig from "../../config/company";
import navItems from "../../data/navigation";
import logoImage from "../../assets/logo2.png";
import logoMark from "../../assets/logo1.png";
import ProductMegaMenu from "../products/ProductMegaMenu";
import IndustryMegaMenu from "../industries/IndustryMegaMenu";
import MaterialMegaMenu from "../materials/MaterialMegaMenu";
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
import { CATEGORIES } from "../../data/productCatalog";
import { getCategoryUrl } from "../../utils/mfgRoutes";

const Navbar = () => {
  const mfgCategories = CATEGORIES.filter((c) => c.division === "MANUFACTURER");
  const supCategories = CATEGORIES.filter((c) => c.division === "SUPPLIER");
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
        className={`w-full bg-white border-b border-slate-200/80 transition-shadow duration-300 relative ${
          scrolled ? "shadow-lg shadow-slate-900/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-20 lg:h-24 flex items-center justify-between py-1.5">
          {/* Logo Section */}
          <a href="#home" className="flex items-center shrink-0 group h-full py-0.5">
            {/* Desktop / Tablet Logo Image */}
            <img
              src={logoImage}
              alt="Supreme Metal and Alloys"
              className="hidden sm:block sm:h-18 lg:h-[88px] w-auto sm:max-w-[480px] lg:max-w-[620px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {/* Mobile Logo: Official SMA brand asset, noticeably larger and clearly readable */}
            <img
              src={logoImage}
              alt="Supreme Metal and Alloys"
              className="block sm:hidden h-16 w-auto max-w-[300px] object-contain"
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
                      setActiveDropdown(activeDropdown === "Products" ? null : "Products");
                    } else if (item.label === "Industries") {
                      setActiveDropdown(activeDropdown === "Industries" ? null : "Industries");
                    } else if (item.label === "Materials") {
                      setActiveDropdown(activeDropdown === "Materials" ? null : "Materials");
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
              </div>
            ))}
          </nav>

          {/* Right Action: Enquire Now CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a
              href="#contact#quote"
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

        {/* ========================================================================= */}
        {/* CENTERED MEGA MENU OVERLAYS (PRODUCTS, MATERIALS & INDUSTRIES) */}
        {/* Horizontally centered relative to the viewport/navigation container */}
        {/* ========================================================================= */}
        {activeDropdown === "Products" && (
          <div
            onMouseEnter={() => handleMouseEnter("Products")}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
          >
            <ProductMegaMenu onClose={() => setActiveDropdown(null)} />
          </div>
        )}

        {activeDropdown === "Materials" && (
          <div
            onMouseEnter={() => handleMouseEnter("Materials")}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
          >
            <MaterialMegaMenu onClose={() => setActiveDropdown(null)} />
          </div>
        )}

        {activeDropdown === "Industries" && (
          <div
            onMouseEnter={() => handleMouseEnter("Industries")}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
          >
            <IndustryMegaMenu onClose={() => setActiveDropdown(null)} />
          </div>
        )}
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
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-2">
                {item.label === "Products" ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown("Products")}
                      className="w-full flex items-center justify-between py-2 text-left font-bold text-slate-800 hover:text-[#F36F21]"
                    >
                      <span className="text-base font-bold text-slate-900">Products</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileDropdown === "Products" ? "rotate-180 text-[#F36F21]" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {mobileDropdown === "Products" && (
                      <div className="pl-2 pr-1 py-3 space-y-4 bg-slate-50 rounded-xl mt-1">
                        {/* Manufacturer Division */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between px-2 py-1.5 bg-amber-50 rounded-lg border border-amber-200/80">
                            <div className="flex items-center gap-1.5">
                              <Factory className="w-4 h-4 text-[#F36F21]" />
                              <span className="text-xs font-mono font-extrabold uppercase text-[#D94A1F] tracking-wider">
                                Manufacturer Division
                              </span>
                            </div>
                            <a
                              href="#products/manufacturer"
                              onClick={() => setMobileOpen(false)}
                              className="text-[11px] font-mono font-bold text-[#F36F21] hover:underline"
                            >
                              View All →
                            </a>
                          </div>
                          <div className="grid grid-cols-1 gap-1 pl-1">
                            {mfgCategories.map((cat) => (
                              <a
                                key={cat.id}
                                href={getCategoryUrl(cat.slug)}
                                onClick={() => setMobileOpen(false)}
                                className="px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#F36F21] hover:bg-white flex items-center justify-between transition-colors"
                              >
                                <span>{cat.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Supplier Division */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between px-2 py-1.5 bg-slate-100 rounded-lg border border-slate-200/80">
                            <div className="flex items-center gap-1.5">
                              <Globe className="w-4 h-4 text-[#0F2942]" />
                              <span className="text-xs font-mono font-extrabold uppercase text-[#0F2942] tracking-wider">
                                Supplier Division
                              </span>
                            </div>
                            <a
                              href="#products/supplier"
                              onClick={() => setMobileOpen(false)}
                              className="text-[11px] font-mono font-bold text-[#0F2942] hover:underline"
                            >
                              View All →
                            </a>
                          </div>
                          <div className="grid grid-cols-1 gap-1 pl-1">
                            {supCategories.map((cat) => (
                              <a
                                key={cat.id}
                                href={`#products/category/${cat.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0F2942] hover:bg-white flex items-center justify-between transition-colors"
                              >
                                <span>{cat.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex items-center justify-between py-2 text-left font-bold text-slate-800 hover:text-[#F36F21]"
                    >
                      <span className="text-base font-bold text-slate-900">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileDropdown === item.label ? "rotate-180 text-[#F36F21]" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2 bg-slate-50 rounded-xl mt-1">
                        {item.label === "Industries" && (
                          <a
                            href="#industries"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs font-bold text-[#F36F21] hover:underline font-mono"
                          >
                            ★ EXPLORE ALL 6 STRATEGIC SECTORS →
                          </a>
                        )}
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
                    className="block py-2 text-base font-bold text-slate-900 hover:text-[#F36F21]"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              <a
                href="#contact#quote"
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
