import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Ruler,
  Layers,
  Building2,
  Download,
  Send,
  Sparkles,
  Info,
  Package,
  AlertCircle,
  Maximize2,
  X,
  Factory,
  Globe,
  Mail,
  User,
  Building,
  Phone,
  MessageSquare
} from "lucide-react";
import gsap from "gsap";
import { PRODUCTS, getProductBySlug } from "../../data/productCatalog";

const DetailIndustrialSvgPlaceholder = ({ title, category, division }) => (
  <div className="w-full h-full bg-gradient-to-br from-[#0E2A3A] via-[#1b3a4e] to-[#0E2A3A] rounded-xl flex flex-col items-center justify-center p-6 text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />
    <div className="w-16 h-16 rounded-2xl bg-[#F36F21]/20 border border-[#F36F21]/40 flex items-center justify-center text-[#F36F21] mb-4 z-10">
      {division === "MANUFACTURER" ? <Factory className="w-8 h-8" /> : <Globe className="w-8 h-8 text-blue-400" />}
    </div>
    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest z-10 mb-1">
      [{category}]
    </span>
    <h3 className="text-base font-extrabold text-white z-10 max-w-[85%]">
      {title}
    </h3>
    <p className="text-[11px] font-mono text-slate-300 mt-2 z-10">
      SUPREME INDUSTRIAL SPECIFICATION & TECHNICAL DRAWING
    </p>
  </div>
);

export default function ProductDetailPage({ slug, onBackToProducts, onNavigateToProduct }) {
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Form State
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  });

  const detailContainerRef = useRef(null);

  // Scoped navigation within the SAME product category (guarantees strict category isolation)
  const categoryProducts = useMemo(() => {
    if (!product?.categorySlug) return PRODUCTS;
    const catList = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug);
    return catList.length > 0 ? catList : PRODUCTS;
  }, [product?.categorySlug]);

  const productIndex = product ? categoryProducts.findIndex((p) => p.id === product.id || p.slug === product.slug) : -1;
  const safeIndex = productIndex >= 0 ? productIndex : 0;

  // Previous & Next navigation controls within the category
  const prevProduct = categoryProducts[(safeIndex - 1 + categoryProducts.length) % categoryProducts.length];
  const nextProduct = categoryProducts[(safeIndex + 1) % categoryProducts.length];

  // Set default selected image when product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(product.heroImage);
      setFormData((prev) => ({
        ...prev,
        product: product.name,
        grade: product.grade
      }));
    }
  }, [product]);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // GSAP Entrance Animations for Detail Page
  useEffect(() => {
    if (isReducedMotion || !detailContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-detail-item",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }
      );
    }, detailContainerRef);

    return () => ctx.revert();
  }, [product, isReducedMotion]);

  // Update SEO Page Title & Meta description
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Supreme Metal & Alloys`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          `${product.name} - ${product.shortDescription} Available in ${product.material} ${product.grade}. Standards: ${product.standards.join(", ")}.`
        );
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
    }, 6000);
  };

  // Find Intelligent Related Products (Scoped STRICTLY to same category to prevent cross-category contamination)
  const relatedProducts = useMemo(() => {
    if (!product) return [];

    // 1. First check explicit relatedProductIds defined in product catalog (scoped to same category)
    if (product.relatedProductIds && product.relatedProductIds.length > 0) {
      const explicitRelated = product.relatedProductIds
        .map((relId) => PRODUCTS.find((p) => (p.id === relId || p.slug === relId) && p.categorySlug === product.categorySlug))
        .filter(Boolean);
      if (explicitRelated.length >= 3) return explicitRelated.slice(0, 3);

      const explicitIds = explicitRelated.map((p) => p.id);

      // Fill with same category & material products
      const sameCatMat = PRODUCTS.filter(
        (p) =>
          p.id !== product.id &&
          !explicitIds.includes(p.id) &&
          p.categorySlug === product.categorySlug &&
          p.materialSlug === product.materialSlug
      );

      // Fill with other products from the same category
      const sameCat = PRODUCTS.filter(
        (p) =>
          p.id !== product.id &&
          !explicitIds.includes(p.id) &&
          !sameCatMat.some((sm) => sm.id === p.id) &&
          p.categorySlug === product.categorySlug
      );

      return [...explicitRelated, ...sameCatMat, ...sameCat].slice(0, 3);
    }

    // 2. Fallback: Prioritize same category & material, then same category
    const sameCatMat = PRODUCTS.filter(
      (p) =>
        p.id !== product.id &&
        p.categorySlug === product.categorySlug &&
        p.materialSlug === product.materialSlug
    );

    const sameCat = PRODUCTS.filter(
      (p) =>
        p.id !== product.id &&
        !sameCatMat.some((sm) => sm.id === p.id) &&
        p.categorySlug === product.categorySlug
    );

    return [...sameCatMat, ...sameCat].slice(0, 3);
  }, [product]);

  // Normalized specifications entries for rendering
  const specEntries = useMemo(() => {
    if (!product?.specifications) return [];
    if (Array.isArray(product.specifications)) {
      return product.specifications.map((item, idx) => ({
        key: item.label || item.key || `Spec ${idx + 1}`,
        val: typeof item.value === "object" ? JSON.stringify(item.value) : String(item.value ?? "")
      }));
    }
    return Object.entries(product.specifications).map(([key, val]) => ({
      key: key.replace(/([A-Z])/g, " $1"),
      val: typeof val === "object" ? JSON.stringify(val) : String(val ?? "")
    }));
  }, [product]);

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
            No metallurgical specification record exists for &quot;{slug}&quot; in the product catalogue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onBackToProducts}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const allImages = [
    product.heroImage,
    ...(product.gallery || [])
  ].filter(Boolean);

  return (
    <div ref={detailContainerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* Top Header Bar with Breadcrumb */}
      <section className="bg-[#0E2A3A] text-white py-6 sm:py-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button onClick={onBackToProducts} className="hover:text-[#F36F21] transition-colors">
                Products
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400 font-semibold">{product.division}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#F36F21] font-semibold truncate max-w-[200px] sm:max-w-none">
                {product.name}
              </span>
            </nav>

            {/* Back Link */}
            <button
              onClick={onBackToProducts}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-[#F36F21] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Products</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">

        {/* Researched Specification Draft Notice Banner */}
        {product.isResearchedDraft && (
          <div className="mb-8 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl border-y border-r border-amber-200 text-amber-900 text-xs sm:text-sm font-medium flex items-start gap-3.5 shadow-sm gsap-detail-item">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-950 text-sm block mb-1">
                Researched Specification — Pending Final Client Verification
              </strong>
              <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
                The technical parameters below represent industry-standard specifications (derived from ASTM/ASME standards and steel stockist data). Contact Supreme Metal & Alloys directly to confirm exact manufacturing capabilities, custom dimensions, and stock availability for this item.
              </p>
            </div>
          </div>
        )}
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & GALLERY & PRIMARY SPECS OVERVIEW */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-start">
          
          {/* Left Column: Image Showcase & Gallery (5 Cols) */}
          <div className="lg:col-span-5 gsap-detail-item">
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-md">
              
              {/* Main Image Box */}
              <div className="relative h-72 sm:h-96 rounded-xl bg-slate-50 border border-slate-100 p-6 flex items-center justify-center overflow-hidden mb-4 group">
                {selectedImage ? (
                  <>
                    <img
                      src={selectedImage}
                      alt={`${product.name} Technical Product Showcase`}
                      className="max-h-full max-w-full w-auto h-auto object-contain filter contrast-[1.03] drop-shadow-md cursor-pointer transition-transform group-hover:scale-105"
                      onClick={() => setLightboxOpen(true)}
                    />
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="absolute bottom-3 right-3 p-2 bg-[#0E2A3A]/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Expand image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <DetailIndustrialSvgPlaceholder
                    title={product.name}
                    category={product.category}
                    division={product.division}
                  />
                )}
                
                <span
                  className={`absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-20 ${
                    product.division === "MANUFACTURER"
                      ? "bg-[#F36F21] text-white"
                      : "bg-[#0E2A3A] text-white border border-slate-700"
                  }`}
                >
                  {product.division} DIVISION
                </span>
              </div>

              {/* Thumbnail Selector Gallery */}
              {allImages.length > 1 && (
                <div>
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Product Image Gallery ({allImages.length}):
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-20 h-20 rounded-lg bg-slate-50 border-2 p-1 overflow-hidden shrink-0 transition-all ${
                          selectedImage === img
                            ? "border-[#F36F21] ring-2 ring-[#F36F21]/20"
                            : "border-slate-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality & Mill Cert Banner */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-600 text-xs font-medium">
                <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
                <span>100% EN 10204 3.1/3.2 Mill Test Certificates Included</span>
              </div>

            </div>
          </div>

          {/* Right Column: Title, Badges, Short Intro, Quick Spec Highlights (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gsap-detail-item">
            <div>
              {/* Category & Material Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-[#F36F21] text-xs font-mono font-bold uppercase">
                  {product.category}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                  {product.material}
                </span>
                <span className="px-3 py-1 rounded-md bg-[#0E2A3A] text-white text-xs font-mono font-bold">
                  {product.grade}
                </span>
              </div>

              {/* Heading 1 Product Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              {/* Short Introduction */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Expanded Catalogue Overview */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs mb-6">
                <h3 className="text-xs font-mono font-bold uppercase text-[#0E2A3A] tracking-wider mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#F36F21]" />
                  Product Overview & Manufacturing Scope
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {product.overview}
                </p>
              </div>

              {/* Quick Specification Highlights Grid */}
              {product.specifications && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Size / OD */}
                  <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200/70">
                    <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#F36F21]" />
                      Size / Outside Diameter:
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      {product.specifications?.size || product.specifications?.outsideDiameter || product.sizeRange || "Standard Catalogue Matrix"}
                    </div>
                  </div>

                  {/* Schedule / Thickness */}
                  <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200/70">
                    <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#F36F21]" />
                      Wall Thickness / Schedule:
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      {product.specifications?.thickness || product.specifications?.schedule || product.wallThickness || "Sch 5S to Sch XXS"}
                    </div>
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
                <span>SEND PRODUCT INQUIRY</span>
              </a>
              <a
                href="#inquiry-form"
                className="px-6 py-4 bg-[#0E2A3A] hover:bg-[#1e3a4c] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>REQUEST MTC</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: SPECIFICATIONS TABLE */}
        {/* ========================================================================= */}
        {product.specifications && (
          <section className="mb-14 gsap-detail-item">
            <div className="flex items-center gap-2.5 mb-6">
              <FileSpreadsheet className="w-6 h-6 text-[#F36F21]" />
              <h2 className="text-2xl font-extrabold text-[#0E2A3A]">
                Technical Product Specifications
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
              <div className="bg-[#0E2A3A] text-white px-6 py-4 flex items-center justify-between">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400">
                  {product.name} — Technical Data Matrix
                </h3>
                <span className="text-[11px] font-mono text-slate-300">
                  ASTM / ASME Standard Specs
                </span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  {specEntries.map(({ key, val }) => (
                    <div key={key} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                      <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {key}
                      </div>
                      <div className="font-bold text-[#0E2A3A] text-xs sm:text-sm">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3: STANDARDS & COMPLIANCE & APPLICATIONS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 gsap-detail-item">
          
          {/* Standards Compliance */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#0E2A3A] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F36F21]" />
              Governing Standards & Compliance
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.standards.map((std, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-amber-50 text-[#F36F21] font-mono font-bold rounded-lg text-xs border border-amber-200"
                >
                  {std}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Supplied with 100% EN 10204 3.1/3.2 Mill Test Certificates and PMI chemical clearance.
            </p>
          </div>

          {/* Target Applications */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#0E2A3A] mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#F36F21]" />
              Industry Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#F36F21] shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: RELATED PRODUCTS ("YOU MAY ALSO NEED") */}
        {/* ========================================================================= */}
        {relatedProducts.length > 0 && (
          <section className="mb-14 gsap-detail-item">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-extrabold text-[#0E2A3A]">
                You May Also Need (Related Products)
              </h3>
              <button
                onClick={onBackToProducts}
                className="text-xs font-mono font-bold text-[#F36F21] hover:underline"
              >
                View Full Catalogue
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigateToProduct(rel.slug || rel.id)}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F36F21]/60 transition-all cursor-pointer group"
                >
                  <div className="h-40 rounded-xl bg-slate-50 border border-slate-100 p-3 mb-3 flex items-center justify-center overflow-hidden">
                    {rel.heroImage ? (
                      <img
                        src={rel.heroImage}
                        alt={rel.name}
                        className="max-h-full max-w-full w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <Package className="w-10 h-10 text-slate-300" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#F36F21] uppercase block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#0E2A3A] group-hover:text-[#F36F21] transition-colors line-clamp-1 mb-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 5: PREVIOUS / NEXT PRODUCT PAGINATION CONTROLS */}
        {/* ========================================================================= */}
        <nav aria-label="Product family pagination" className="pt-6 mb-16 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Product */}
          <button
            onClick={() => onNavigateToProduct(prevProduct.slug || prevProduct.id)}
            className="w-full sm:w-auto p-4 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3 text-left transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 text-[#F36F21] group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Previous Product</div>
              <div className="text-xs sm:text-sm font-bold text-[#0E2A3A]">{prevProduct.name}</div>
            </div>
          </button>

          {/* Back to Listing */}
          <button
            onClick={onBackToProducts}
            className="text-xs font-mono font-bold text-slate-600 hover:text-[#F36F21] uppercase tracking-wider underline transition-colors"
          >
            View All {PRODUCTS.length} Products
          </button>

          {/* Next Product */}
          <button
            onClick={() => onNavigateToProduct(nextProduct.slug || nextProduct.id)}
            className="w-full sm:w-auto p-4 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-end gap-3 text-right transition-colors group"
          >
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Next Product</div>
              <div className="text-xs sm:text-sm font-bold text-[#0E2A3A]">{nextProduct.name}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#F36F21] group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* ========================================================================= */}
        {/* SECTION 6: FINAL PRODUCT INQUIRY / RFQ FORM */}
        {/* ========================================================================= */}
        <section id="inquiry-form" className="bg-[#0E2A3A] text-white rounded-2xl p-6 sm:p-10 shadow-2xl mb-12 border border-slate-700 gsap-detail-item relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F36F21]/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[#F36F21] font-mono font-bold text-xs uppercase tracking-widest bg-[#F36F21]/15 px-3 py-1 rounded border border-[#F36F21]/30 inline-block mb-3">
                [ DIRECT MILL INQUIRY FORM ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Request Quote & Availability for {product.name}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                Fill out the form below to receive immediate pricing, inventory confirmation, and MTC documentation.
              </p>
            </div>

            {inquirySent ? (
              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-2xl p-8 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Inquiry Submitted Successfully!</h3>
                <p className="text-slate-200 text-sm">
                  Thank you. Our technical sales engineering team will review your specs for <strong>{product.name}</strong> and contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Your Full Name *</label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Company Name *</label>
                    <div className="relative flex items-center">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Industrial Engg Pvt Ltd"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Email Address *</label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Target Product */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Target Product</label>
                    <input
                      type="text"
                      readOnly
                      value={product.name}
                      className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-xs font-bold text-amber-400 font-mono"
                    />
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Quantity / Tonnage Required</label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 500 Meters / 2 Tons"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Specific Dimensional / MTC Requirements</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify required Schedule, length, third-party inspection agency (TUV/DNV), or delivery timeline..."
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F36F21] hover:bg-[#d94a1f] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND PRODUCT INQUIRY NOW</span>
                </button>
              </form>
            )}

          </div>
        </section>

      </main>

      {/* Lightbox Image Modal */}
      {lightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-2 bg-slate-800/80 rounded-full hover:bg-[#F36F21] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl drop-shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}
