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
  Factory,
  ArrowRight,
  Zap,
  Globe,
  Maximize2,
  X,
  Grid,
  User,
  Building,
  Mail,
  Phone,
  Download
} from "lucide-react";
import gsap from "gsap";
import { getWireMeshBySlug, getRelatedWireMesh, WIRE_MESH_MATERIALS } from "../../data/wireMeshData";

export default function WireMeshDetailPage({ materialSlug, onBackToCategory, onSelectMaterial }) {
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    meshCount: "",
    wireDiameter: "",
    rollDimensions: "",
    notes: ""
  });

  const pageRef = useRef(null);

  // Load target material record
  const material = getWireMeshBySlug(materialSlug) || WIRE_MESH_MATERIALS[0];
  const materialIndex = WIRE_MESH_MATERIALS.findIndex((m) => m.slug === material.slug);
  
  // Previous & Next navigation within Wire Mesh ONLY
  const prevMaterial = WIRE_MESH_MATERIALS[(materialIndex - 1 + WIRE_MESH_MATERIALS.length) % WIRE_MESH_MATERIALS.length];
  const nextMaterial = WIRE_MESH_MATERIALS[(materialIndex + 1) % WIRE_MESH_MATERIALS.length];

  // Strictly Wire Mesh alternative materials (no cross-category products)
  const relatedMaterials = WIRE_MESH_MATERIALS.filter((m) => m.slug !== material.slug);

  // Set document title & scroll to top smoothly
  useEffect(() => {
    document.title = `${material.name} | Supreme Metal & Alloys`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [material]);

  // GSAP entrance animation matching ProductDetailPage & HosePipesDetailPage
  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-detail-anim",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [materialSlug]);

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

  const handleRelatedClick = (relMat) => {
    if (onSelectMaterial) {
      onSelectMaterial("wire-mesh", relMat.slug);
    } else {
      window.location.hash = `#wire-mesh/${relMat.slug}-manufactured-in-mumbai`;
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-24">
      
      {/* ========================================================================= */}
      {/* 1. HERO & BREADCRUMB HEADER */}
      {/* ========================================================================= */}
      <section className="bg-[#0E2A3A] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 font-mono mb-6 gsap-detail-anim">
            <a href="#home" className="hover:text-[#F36F21] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <a href="#products" className="hover:text-[#F36F21] transition-colors">Products</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={onBackToCategory} className="hover:text-[#F36F21] transition-colors">Wire Mesh</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F36F21] font-semibold">{material.materialName}</span>
          </nav>

          {/* Back Button & Division Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 gsap-detail-anim">
            <button
              onClick={onBackToCategory}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-[#F36F21] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Wire Mesh Materials</span>
            </button>

            <span className="text-[#F36F21] font-mono text-xs font-bold uppercase tracking-widest bg-[#F36F21]/15 px-3 py-1 rounded border border-[#F36F21]/30">
              [ MANUFACTURING DIVISION — ISOLATED MATERIAL SPECIFICATION ]
            </span>
          </div>

          {/* Title Header */}
          <div className="max-w-4xl gsap-detail-anim">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {material.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {material.shortDescription}
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
                  src={material.image}
                  alt={`${material.name} - Supreme Metal & Alloys`}
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
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-20 bg-[#F36F21] text-white">
                  MANUFACTURER DIVISION
                </span>
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                  {material.materialName} Mesh
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-600 text-xs font-medium">
                <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
                <span>100% EN 10204 3.1/3.2 Mill Test Certificates & Optical Aperture Inspection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Badges, Short Intro, Highlights, CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gsap-detail-anim">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-[#F36F21] text-xs font-mono font-bold uppercase">
                  Wire Mesh
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                  {material.materialName}
                </span>
                <span className="px-3 py-1 rounded-md bg-[#0E2A3A] text-white text-xs font-mono font-bold">
                  Precision Woven & Welded Screen
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-4">
                {material.name}
              </h2>

              <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">
                {material.shortDescription}
              </p>

              {/* Product Overview Box */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs mb-5">
                <h3 className="text-xs font-mono font-bold uppercase text-[#0E2A3A] tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#F36F21]" />
                  Product Overview & Manufacturing Scope
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {material.overview}
                </p>
              </div>

              {/* Supported Grades */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Supported Metallurgical Grades:
                </span>
                <div className="flex flex-wrap gap-2">
                  {material.grades.map((grade, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-xs font-mono font-semibold text-[#0E2A3A] shadow-2xs"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weave Styles Available */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Weave & Screen Fabrication Styles:
                </span>
                <div className="flex flex-wrap gap-2">
                  {material.weaveTypes.map((weave, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-amber-300/80 text-xs font-mono font-semibold text-[#F36F21] shadow-2xs flex items-center gap-1.5"
                    >
                      <Grid className="w-3 h-3 text-[#F36F21]" />
                      {weave}
                    </span>
                  ))}
                </div>
              </div>
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
                <span>REQUEST MTC & APERTURE CHART</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: SPECIFICATIONS TABLE (Full Width) */}
        {/* ========================================================================= */}
        <section className="mb-14 gsap-detail-anim">
          <div className="flex items-center gap-2.5 mb-6">
            <Sliders className="w-6 h-6 text-[#F36F21]" />
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E2A3A]">
                Technical Specifications Matrix
              </h2>
              <p className="text-xs font-mono text-slate-500">
                Standard mill manufacturing tolerances, aperture dimensions, and open-area ratios
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0E2A3A] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-3.5 px-6 font-bold w-1/3 border-r border-slate-700">Specification Parameter</th>
                    <th className="py-3.5 px-6 font-bold">Standard Mill Offering & Manufacturing Limits</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm">
                  {material.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-100 transition-colors hover:bg-amber-50/40 ${
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
          
          {/* Left Column: Standards & Technical Quality */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-[#F36F21]" />
                <h3 className="text-lg font-extrabold text-[#0E2A3A]">
                  Standards & Quality Compliance
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Every wire mesh roll is inspected for aperture consistency, warp/weft wire tension, and burr-free edges.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {material.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-amber-400 block font-bold mb-1">Open Area %:</span>
                <span>{material.technicalDetails.openAreaPercentage}</span>
              </div>
              <div>
                <span className="text-amber-400 block font-bold mb-1">Wire Tolerance:</span>
                <span>{material.technicalDetails.wireDiameterTolerance || "Standard Precision Tolerance"}</span>
              </div>
              <div>
                <span className="text-amber-400 block font-bold mb-1">Aperture / Testing:</span>
                <span>{material.technicalDetails.apertureTolerance || material.technicalDetails.wearResistance || "High Uniformity Verified"}</span>
              </div>
              <div>
                <span className="text-amber-400 block font-bold mb-1">Quality Certificate:</span>
                <span>{material.technicalDetails.qualityCertificates}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Applications */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#F36F21]" />
              <h3 className="text-lg font-extrabold text-[#0E2A3A]">
                Target Industrial Applications
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Engineered to perform in severe filtration, sieving, chemical catalysis, and sanitary separation duties:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {material.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-tight">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: RELATED WIRE MESH MATERIALS (STRICTLY WITHIN WIRE MESH ONLY!) */}
        {/* ========================================================================= */}
        <section className="mb-14 gsap-detail-anim">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#F36F21] uppercase tracking-wider block">
                  [ STRICTLY WIRE MESH CATEGORY ONLY ]
                </span>
                <h3 className="text-xl font-extrabold text-[#0E2A3A]">
                  MATERIALS AVAILABLE IN WIRE MESH
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {relatedMaterials.length} Alternative Wire Mesh Materials Available
              </span>
            </div>

            {/* Grid of remaining Wire Mesh materials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedMaterials.map((relMat) => (
                <article
                  key={relMat.id}
                  onClick={() => handleRelatedClick(relMat)}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F36F21]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="h-1.5 bg-[#F36F21]" />
                  <div className="p-4 flex flex-col flex-1">
                    <div className="relative h-40 bg-slate-50 rounded-xl border border-slate-100 p-3 mb-3 flex items-center justify-center overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                      <img
                        src={relMat.image}
                        alt={relMat.name}
                        className="max-h-full max-w-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-[#F36F21] text-white px-2 py-0.5 rounded">
                        MANUFACTURER
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#F36F21] uppercase block mb-1">
                      {relMat.materialName}
                    </span>
                    <h4 className="text-sm font-extrabold text-[#0E2A3A] group-hover:text-[#F36F21] transition-colors line-clamp-1 mb-1">
                      {relMat.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2">
                      {relMat.shortDescription}
                    </p>
                  </div>

                  <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0E2A3A] transition-colors duration-300">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#0E2A3A] group-hover:text-white transition-colors">
                      EXPLORE DETAILS
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#0E2A3A] group-hover:text-[#F36F21] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: PREVIOUS / NEXT WIRE MESH MATERIAL PAGINATION */}
        {/* ========================================================================= */}
        <nav aria-label="Wire Mesh material family pagination" className="pt-6 mb-16 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => handleRelatedClick(prevMaterial)}
            className="w-full sm:w-auto p-4 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3 text-left transition-colors group shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-[#F36F21] group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Previous Wire Mesh Material</div>
              <div className="text-xs sm:text-sm font-bold text-[#0E2A3A]">{prevMaterial.name}</div>
            </div>
          </button>

          <button
            onClick={onBackToCategory}
            className="text-xs font-mono font-bold text-slate-600 hover:text-[#F36F21] uppercase tracking-wider underline transition-colors"
          >
            View All 9 Wire Mesh Materials
          </button>

          <button
            onClick={() => handleRelatedClick(nextMaterial)}
            className="w-full sm:w-auto p-4 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-end gap-3 text-right transition-colors group shadow-sm"
          >
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Next Wire Mesh Material</div>
              <div className="text-xs sm:text-sm font-bold text-[#0E2A3A]">{nextMaterial.name}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#F36F21] group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* ========================================================================= */}
        {/* SECTION 6: FINAL INQUIRY / RFQ FORM AT BOTTOM */}
        {/* ========================================================================= */}
        <section id="inquiry-form" className="bg-[#0E2A3A] text-white rounded-2xl p-6 sm:p-10 shadow-2xl mb-12 border border-slate-700 gsap-detail-anim relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F36F21]/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[#F36F21] font-mono font-bold text-xs uppercase tracking-widest bg-[#F36F21]/15 px-3 py-1 rounded border border-[#F36F21]/30 inline-block mb-3">
                [ DIRECT MILL INQUIRY FORM ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Request Quote & Custom Assembly for {material.name}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                Submit your specific mesh count, wire diameter, roll width, or pre-cut disc requirements. Our technical team responds within 2 hours with pricing and mill certificate availability.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-2xl p-8 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
                <p className="text-slate-200 text-sm">
                  Thank you for your interest in <strong>{material.name}</strong>. Our engineering export desk will contact you shortly.
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
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
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
                        placeholder="Industrial Engg Pvt Ltd"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Email Address *</label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@company.com"
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
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
                        className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
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
                      value={material.name}
                      className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-xs font-bold text-amber-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Mesh Count / Aperture</label>
                    <input
                      type="text"
                      name="meshCount"
                      value={formData.meshCount || ""}
                      onChange={handleFormChange}
                      placeholder="e.g. 100 Mesh / 150 Micron"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Required Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity || ""}
                      onChange={handleFormChange}
                      placeholder="e.g. 5 Rolls (1m x 30m)"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Wire Diameter & Tolerance</label>
                    <input
                      type="text"
                      name="wireDiameter"
                      value={formData.wireDiameter || ""}
                      onChange={handleFormChange}
                      placeholder="e.g. 0.10 mm (SWG 42)"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Roll Width & Custom Slitting / Disc Stamping Notes</label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes || ""}
                    onChange={handleFormChange}
                    placeholder="Specify roll width (1000mm, 1220mm, 1500mm), circular filter disc diameter, or grade requirement..."
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F36F21]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F36F21] hover:bg-[#d94a1f] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND WIRE MESH INQUIRY NOW</span>
                </button>
              </form>
            )}

            {/* Direct Support Contacts */}
            <div className="mt-8 pt-6 border-t border-slate-700/80 text-xs font-mono text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span>Fast Export Desk:</span>
                <strong className="text-amber-400">+91 98205 13374</strong>
              </div>
              <div className="flex items-center gap-2">
                <span>Email Technical Team:</span>
                <strong className="text-white">sales@suprememetal.com</strong>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox Image Modal */}
      {lightboxOpen && material.image && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-2 bg-slate-800/80 rounded-full hover:bg-[#F36F21] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={material.image}
            alt={material.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl drop-shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}
