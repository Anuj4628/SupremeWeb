import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  FileText,
  Send,
  Sliders,
  Award,
  Globe,
  ArrowRight,
  Zap,
  Maximize2,
  X,
  User,
  Building,
  Mail,
  Phone,
  Download
} from "lucide-react";
import gsap from "gsap";
import {
  getSupplierProductBySlug,
  getSupplierRelatedProducts,
  getSupplierProductsByFamily,
  getSupplierFamilyBySlug,
  ALL_SUPPLIER_PRODUCTS
} from "../../data/supplierCatalog";

export default function SupplierDetailPage({
  productSlug,
  onBackToCategory,
  onSelectProduct
}) {
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    dimensionOrSize: "",
    scheduleOrThickness: "",
    notes: ""
  });

  const pageRef = useRef(null);

  // Load target product record (Rule #12: No silent fallback to unrelated products)
  const product = getSupplierProductBySlug(productSlug);
  const family = product
    ? (getSupplierFamilyBySlug(product.categorySlug) || {
        id: product.categorySlug,
        slug: product.categorySlug,
        name: product.category
      })
    : null;

  // Products within this exact family for circular previous/next pagination
  const familyProducts = product ? getSupplierProductsByFamily(product.categorySlug) : [];
  const productIndex = product ? familyProducts.findIndex((p) => p.slug === product.slug) : -1;
  
  const prevProduct = product && familyProducts.length > 0
    ? familyProducts[(productIndex - 1 + familyProducts.length) % familyProducts.length]
    : null;
  const nextProduct = product && familyProducts.length > 0
    ? familyProducts[(productIndex + 1) % familyProducts.length]
    : null;

  // Related products strictly within this family
  const relatedProducts = product
    ? getSupplierRelatedProducts(product.categorySlug, product.slug)
    : [];

  // Scroll to top and set document title
  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} | Supplier Division | Supreme Metal & Alloys`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  // Entrance animations
  useEffect(() => {
    if (!pageRef.current || !product) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-detail-anim",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [productSlug, product]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => {
      setRfqSubmitted(false);
    }, 6000);
  };

  // Rule #12: Deterministic Not Found screen for invalid product slugs
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased py-24 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-[#0E2A3A] text-white rounded-2xl p-8 border border-slate-700 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block mb-2">
            [ SPECIFICATION NOT FOUND ]
          </span>
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Product Not Found
          </h2>
          <p className="text-sm text-slate-300 mb-6 font-mono">
            No metallurgical specification record exists for &quot;{productSlug}&quot; in the Supplier Division catalogue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onBackToCategory}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Category</span>
            </button>
            <a
              href="#products/supplier"
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold rounded-xl border border-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Supplier Division</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const handleRelatedClick = (relProd) => {
    if (onSelectProduct) {
      onSelectProduct(relProd.slug);
    } else {
      window.location.hash = `#supplier/product/${relProd.slug}`;
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. HERO & BREADCRUMB HEADER */}
      {/* ========================================================================= */}
      <section className="bg-[#0E2A3A] text-white pt-5 pb-6 sm:pt-10 sm:pb-16 border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation (Desktop/Tablet) */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono mb-6 gsap-detail-anim">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400 font-semibold">Supplier Division</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={onBackToCategory} className="hover:text-blue-400 transition-colors">{family.name}</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-400 font-semibold">{product.materialName}</span>
          </nav>

          {/* Back Button & Division Tag */}
          <div className="flex items-center justify-between gap-3 mb-3 sm:mb-6 gsap-detail-anim">
            <button
              onClick={onBackToCategory}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {family.name}</span>
            </button>

            <span className="text-blue-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-blue-500/15 px-2.5 sm:px-3 py-1 rounded border border-blue-400/30 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>[ SUPPLIER DIVISION ]</span>
            </span>
          </div>

          {/* Title Header */}
          <div className="max-w-4xl gsap-detail-anim">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-4">
              {product.name}
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
              {product.shortDescription}
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & GALLERY & PRIMARY SPECS OVERVIEW (5 cols / 7 cols) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-start">
          
          {/* Left Column: Image Showcase (5 Cols) */}
          <div className="lg:col-span-5 gsap-detail-anim">
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-md">
              <div className="relative h-72 sm:h-96 rounded-xl bg-slate-50 border border-slate-100 p-6 flex items-center justify-center overflow-hidden mb-4 group">
                <img
                  src={product.image}
                  alt={`${product.name} - Supreme Metal & Alloys`}
                  className="max-h-full max-w-full object-contain filter contrast-[1.05] drop-shadow-md cursor-pointer transition-transform group-hover:scale-105"
                  onClick={() => setLightboxOpen(true)}
                />
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-3 right-3 p-2 bg-[#0E2A3A]/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-20 bg-[#0E2A3A] text-blue-400 border border-blue-500/30">
                  SUPPLIER DIVISION
                </span>
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                  {product.materialName} Alloy
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-600 text-xs font-medium">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                <span>100% EN 10204 3.1 & 3.2 Mill Test Certificates & PMI Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Badges, Short Intro, Highlights, CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gsap-detail-anim">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase">
                  {family.name}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                  {product.materialName}
                </span>
                <span className="px-3 py-1 rounded-md bg-[#0E2A3A] text-white text-xs font-mono font-bold">
                  Prime Mill Quality
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-4">
                {product.name}
              </h2>

              <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Product Overview Box */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs mb-5">
                <h3 className="text-xs font-mono font-bold uppercase text-[#0E2A3A] tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Product Overview & Supply Specifications Scope
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {product.overview}
                </p>
              </div>

              {/* Supported Grades */}
              {product.grades && product.grades.length > 0 && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Available Metallurgical Grades:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.grades.map((grade, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-xs font-mono font-semibold text-[#0E2A3A] shadow-2xs"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Supported Forms */}
              {product.forms && product.forms.length > 0 && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Standard Supply Forms & Profiles:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.forms.map((form, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white border border-blue-300 text-xs font-mono font-semibold text-blue-700 shadow-2xs flex items-center gap-1.5"
                      >
                        <Layers className="w-3 h-3 text-blue-500" />
                        {form}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Request A Quote Main CTA Button */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#inquiry-form"
                className="flex-1 px-8 py-4 bg-[#F36F21] hover:bg-[#d94a1f] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-[#F36F21]/20 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST SUPPLIER QUOTATION</span>
              </a>
              <a
                href="#inquiry-form"
                className="px-6 py-4 bg-[#0E2A3A] hover:bg-[#1e3a4c] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>REQUEST MTC & TEST CERTIFICATES</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: SPECIFICATIONS TABLE (Full Width) */}
        {/* ========================================================================= */}
        <section className="mb-14 gsap-detail-anim">
          <div className="flex items-center gap-2.5 mb-6">
            <Sliders className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E2A3A]">
                Technical Specifications Matrix
              </h2>
              <p className="text-xs font-mono text-slate-500">
                Official dimensional ranges, manufacturing tolerances, and international mill delivery standards
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0E2A3A] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-3.5 px-6 font-bold w-1/3 border-r border-slate-700">Specification Parameter</th>
                    <th className="py-3.5 px-6 font-bold">Standard Offering & Dimensional Capabilities</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm">
                  {product.specifications && product.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-100 transition-colors hover:bg-blue-50/40 ${
                        idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                      }`}
                    >
                      <td className="py-3.5 px-6 font-mono font-bold text-slate-800 border-r border-slate-100">
                        {spec.label}
                      </td>
                      <td className="py-3.5 px-6 text-slate-700 font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: STANDARDS & COMPLIANCE (Left 6) + APPLICATIONS (Right 6) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 gsap-detail-anim">
          
          {/* Left Column: Standards & Quality Compliance */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-extrabold text-[#0E2A3A]">
                  Standards & Quality Compliance
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Every lot is delivered with complete mill test certification, heat traceability, and third-party inspection compliance:
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.standards && product.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {product.technicalDetails && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800">
                {Object.entries(product.technicalDetails).map(([key, value], idx) => (
                  <div key={idx}>
                    <span className="text-blue-400 block font-bold mb-1 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Applications */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-extrabold text-[#0E2A3A]">
                Target Industrial Applications
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Engineered to perform in critical pressure containment, thermal transfer, and severe corrosive processes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.applications && product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-tight">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: RELATED PRODUCTS (STRICTLY WITHIN THIS FAMILY ONLY!) */}
        {/* ========================================================================= */}
        <section className="mb-14 gsap-detail-anim">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">
                  [ STRICTLY {family.name.toUpperCase()} ONLY ]
                </span>
                <h3 className="text-xl font-extrabold text-[#0E2A3A]">
                  MATERIALS AVAILABLE IN {family.name.toUpperCase()}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {relatedProducts.length} Alternative Materials in {family.name}
              </span>
            </div>

            {/* Grid of remaining materials within this family */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProd) => (
                <article
                  key={relProd.id}
                  onClick={() => handleRelatedClick(relProd)}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-500/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="h-1.5 bg-blue-600 group-hover:bg-[#F36F21] transition-colors duration-300" />
                  <div className="p-4 flex flex-col flex-1">
                    <div className="relative h-40 bg-slate-50 rounded-xl border border-slate-100 p-3 mb-3 flex items-center justify-center overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                      <img
                        src={relProd.image}
                        alt={relProd.name}
                        className="max-h-full max-w-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-[#0E2A3A] text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded">
                        SUPPLIER
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase block mb-1">
                      {relProd.materialName}
                    </span>
                    <h4 className="text-sm font-extrabold text-[#0E2A3A] group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                      {relProd.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2">
                      {relProd.shortDescription}
                    </p>
                  </div>

                  <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#0E2A3A] group-hover:text-white transition-colors">
                      EXPLORE DETAILS
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#0E2A3A] group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: PREVIOUS / NEXT FAMILY MATERIAL PAGINATION */}
        {/* ========================================================================= */}
        <nav aria-label="Supplier family material pagination" className="pt-6 mb-16 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => handleRelatedClick(prevProduct)}
            className="w-full sm:w-auto p-4 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3 text-left transition-colors group shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Previous {family.name} Material</div>
              <div className="text-xs sm:text-sm font-bold text-[#0E2A3A]">{prevProduct.name}</div>
            </div>
          </button>

          <button
            onClick={onBackToCategory}
            className="text-xs font-mono font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wider underline transition-colors"
          >
            View All {familyProducts.length} {family.name}
          </button>

          <button
            onClick={() => handleRelatedClick(nextProduct)}
            className="w-full sm:w-auto p-4 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-end gap-3 text-right transition-colors group shadow-sm"
          >
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Next {family.name} Material</div>
              <div className="text-xs sm:text-sm font-bold text-[#0E2A3A]">{nextProduct.name}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* ========================================================================= */}
        {/* SECTION 6: FINAL INQUIRY / RFQ FORM AT BOTTOM */}
        {/* ========================================================================= */}
        <section id="inquiry-form" className="bg-[#0E2A3A] text-white rounded-2xl p-6 sm:p-10 shadow-2xl mb-12 border border-slate-700 gsap-detail-anim relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-blue-400 font-mono font-bold text-xs uppercase tracking-widest bg-blue-500/15 px-3 py-1 rounded border border-blue-400/30 inline-block mb-3">
                [ DIRECT SUPPLIER INQUIRY FORM ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Request Stock Quote & Mill Delivery for {product.name}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                Submit your specific dimensions, wall thickness/schedules, quantities, and inspection requirements. Our commercial export desk responds within 2 hours with competitive pricing and mill test certificates.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-2xl p-8 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Quotation Request Received!</h3>
                <p className="text-slate-200 text-sm">
                  Thank you for your inquiry for <strong>{product.name}</strong>. Our global supply desk will contact you shortly with full documentation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Your Full Name *</label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Company Name *</label>
                    <div className="relative flex items-center">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="PetroChem Engineering Ltd"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Corporate Email *</label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="procurement@company.com"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Target Product</label>
                    <input
                      type="text"
                      readOnly
                      value={product.name}
                      className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-xs font-bold text-blue-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Dimension / NPS / Diameter</label>
                    <input
                      type="text"
                      name="dimensionOrSize"
                      value={formData.dimensionOrSize || ""}
                      onChange={handleFormChange}
                      placeholder="e.g. 2 inch NB, 12mm Plate, 50mm Round Bar"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Required Quantity / Weight</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity || ""}
                      onChange={handleFormChange}
                      placeholder="e.g. 250 Meters / 5 Metric Tons"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Schedule / Thickness / Length</label>
                    <input
                      type="text"
                      name="scheduleOrThickness"
                      value={formData.scheduleOrThickness || ""}
                      onChange={handleFormChange}
                      placeholder="e.g. Sch 40S, 1500x3000mm, 6m Length"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Additional Specifications & Inspection Requirements</label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes || ""}
                    onChange={handleFormChange}
                    placeholder="Specify special grade requirements, third-party inspection (TPI), NACE MR0175, or custom packaging..."
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F36F21] hover:bg-[#d94a1f] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT SUPPLIER INQUIRY NOW</span>
                </button>
              </form>
            )}

            {/* Direct Support Contacts */}
            <div className="mt-8 pt-6 border-t border-slate-700/80 text-xs font-mono text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span>Direct Supplier Export Desk:</span>
                <strong className="text-blue-400">+91 98205 13374</strong>
              </div>
              <div className="flex items-center gap-2">
                <span>Corporate Supply Email:</span>
                <strong className="text-white">sales@suprememetal.com</strong>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox Image Modal */}
      {lightboxOpen && product.image && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-2 bg-slate-800/80 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl drop-shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}
