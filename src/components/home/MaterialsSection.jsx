import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers } from "lucide-react";
import { scrollingMaterialRows } from "../../data/materials";

gsap.registerPlugin(ScrollTrigger);

// Helper separator icon
const Separator = ({ symbol = "✦" }) => (
  <span className="inline-flex items-center justify-center px-4 text-[#D94A1F] opacity-70 text-sm select-none">
    {symbol}
  </span>
);

export default function MaterialsSection() {
  const sectionRef = useRef(null);
  const rowsContainerRef = useRef(null);

  // GSAP Viewport Entrance & Scroll Velocity Dynamics
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(
        ".mat-reveal-eyebrow",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".mat-reveal-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".mat-reveal-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".mat-reveal-row",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.3"
        );

      // 2. Scroll Velocity Interaction - accelerate marquee speed on scroll
      let lastScrollY = window.scrollY;
      let scrollVelTimeout = null;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const delta = Math.abs(currentScrollY - lastScrollY);
        lastScrollY = currentScrollY;

        const velFactor = Math.min(1.8, 1 + delta * 0.015);

        if (rowsContainerRef.current) {
          const marqueeTracks = rowsContainerRef.current.querySelectorAll(".marquee-track");
          marqueeTracks.forEach((track) => {
            track.style.animationRate = velFactor;
          });
        }

        clearTimeout(scrollVelTimeout);
        scrollVelTimeout = setTimeout(() => {
          if (rowsContainerRef.current) {
            const marqueeTracks = rowsContainerRef.current.querySelectorAll(".marquee-track");
            marqueeTracks.forEach((track) => {
              track.style.animationRate = 1;
            });
          }
        }, 150);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Triple-duplicate arrays for true infinite mathematical seamless looping
  const row1Items = [...scrollingMaterialRows.row1, ...scrollingMaterialRows.row1, ...scrollingMaterialRows.row1];
  const row2Items = [...scrollingMaterialRows.row2, ...scrollingMaterialRows.row2, ...scrollingMaterialRows.row2];

  return (
    <section
      ref={sectionRef}
      id="materials-we-work-with"
      className="relative bg-gradient-to-b from-white via-[#FAFBFD] to-[#F1F5F9] text-slate-800 py-14 sm:py-18 lg:py-24 border-b border-slate-200/90 overflow-hidden select-none"
    >
      {/* Subtle Background Engineering Grid Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.9)_0%,rgba(241,245,249,0.4)_100%)]" />
      </div>

      {/* SECTION HEADER CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
        {/* Eyebrow Badge */}
        <div className="mat-reveal-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/80 text-[#D94A1F] font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
          <Layers className="w-3.5 h-3.5 text-[#D94A1F] animate-pulse" />
          <span>MATERIALS WE WORK WITH</span>
        </div>

        {/* Primary Headline */}
        <h2 className="mat-reveal-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-3">
          ENGINEERED FOR THE MOST DEMANDING APPLICATIONS
        </h2>

        {/* Supporting Subtitle */}
        <p className="mat-reveal-sub text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
          Working with a wide range of premium metals, high-performance alloys, stainless steels, nickel alloys, and specialty materials.
        </p>
      </div>

      {/* MULTI-ROW KINETIC SCROLLING MATERIAL SHOWCASE */}
      <div ref={rowsContainerRef} className="relative z-10 space-y-4 sm:space-y-6">

        {/* ==========================================
            ROW 1: RIGHT TO LEFT (PROMINENT BOLD MATERIAL CARDS)
            ========================================== */}
        <div className="mat-reveal-row overflow-hidden group py-1.5">
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] marquee-track">
            {row1Items.map((item, idx) => (
              <div key={`r1-${idx}`} className="flex items-center">
                <div className="px-6 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#D94A1F] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0E2A3A] tracking-tight whitespace-nowrap">
                    {item.name} <span className="text-[#D94A1F] font-black ml-1">{item.grade}</span>
                  </div>
                </div>
                <Separator symbol="✦" />
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            ROW 2: LEFT TO RIGHT (SLEEK NAVY ACCENT CARDS)
            ========================================== */}
        <div className="mat-reveal-row overflow-hidden group py-1.5">
          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused] marquee-track">
            {row2Items.map((item, idx) => (
              <div key={`r2-${idx}`} className="flex items-center">
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0E2A3A] text-white border border-slate-700/80 shadow-md hover:border-amber-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 cursor-pointer">
                  <span className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap text-slate-100">
                    {item.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#D94A1F] text-white text-sm font-extrabold font-mono uppercase tracking-wider">
                    {item.grade}
                  </span>
                </div>
                <Separator symbol="+" />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
