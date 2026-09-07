import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Radio, Ship, Plane } from "lucide-react";
import { realCountryCoords, worldGeoJsonFeatures } from "../../data/worldGeoJson";

gsap.registerPlugin(ScrollTrigger);

// Export Destination Satellite List
const exportCountries = [
  { id: "UAE", name: "United Arab Emirates", code: "ae", ring: 0, speed: 0.007, phase: 0, orbitTilt: 18, region: "Middle East" },
  { id: "SAU", name: "Saudi Arabia", code: "sa", ring: 0, speed: 0.007, phase: 2.1, orbitTilt: 18, region: "Middle East" },
  { id: "QAT", name: "Qatar", code: "qa", ring: 0, speed: 0.007, phase: 4.2, orbitTilt: 18, region: "Middle East" },
  
  { id: "USA", name: "United States", code: "us", ring: 1, speed: 0.0055, phase: 0.5, orbitTilt: -24, region: "Americas" },
  { id: "GBR", name: "United Kingdom", code: "gb", ring: 1, speed: 0.0055, phase: 2.6, orbitTilt: -24, region: "Europe" },
  { id: "DEU", name: "Germany", code: "de", ring: 1, speed: 0.0055, phase: 4.7, orbitTilt: -24, region: "Europe" },
  
  { id: "SGP", name: "Singapore", code: "sg", ring: 2, speed: 0.004, phase: 1.0, orbitTilt: 32, region: "Asia Pacific" },
  { id: "OMN", name: "Oman", code: "om", ring: 2, speed: 0.004, phase: 3.1, orbitTilt: 32, region: "Middle East" },
  { id: "KWT", name: "Kuwait", code: "kw", ring: 2, speed: 0.004, phase: 5.2, orbitTilt: 32, region: "Middle East" },

  { id: "AUS", name: "Australia", code: "au", ring: 1, speed: 0.005, phase: 1.6, orbitTilt: -24, region: "Asia Pacific" },
  { id: "NLD", name: "Netherlands", code: "nl", ring: 0, speed: 0.0065, phase: 1.1, orbitTilt: 18, region: "Europe" },
  { id: "ITA", name: "Italy", code: "it", ring: 2, speed: 0.0045, phase: 2.2, orbitTilt: 32, region: "Europe" },
  { id: "KOR", name: "South Korea", code: "kr", ring: 1, speed: 0.006, phase: 3.8, orbitTilt: -24, region: "Asia Pacific" },
  { id: "JPN", name: "Japan", code: "jp", ring: 0, speed: 0.0075, phase: 5.5, orbitTilt: 18, region: "Asia Pacific" },
  { id: "ZAF", name: "South Africa", code: "za", ring: 2, speed: 0.0042, phase: 0.2, orbitTilt: 32, region: "Africa" }
];

export default function GlobalPresenceSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [activeRegion, setActiveRegion] = useState("all");
  
  // Drag / Inertia state
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  // Parallax tilt state
  const mouseTilt = useRef({ x: 0, y: 0 });
  
  // Country positions state for DOM positioning
  const [countryPositions, setCountryPositions] = useState([]);

  // Handle Mouse Tilt Parallax
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    mouseTilt.current = {
      x: x * 14,
      y: -y * 14
    };

    if (isDragging.current) {
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      velocity.current = { x: deltaX * 0.4, y: deltaY * 0.4 };
      dragRotation.current.y += deltaX * 0.008;
      dragRotation.current.x += deltaY * 0.008;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging.current && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - lastMousePos.current.x;
      const deltaY = e.touches[0].clientY - lastMousePos.current.y;
      velocity.current = { x: deltaX * 0.4, y: deltaY * 0.4 };
      dragRotation.current.y += deltaX * 0.008;
      dragRotation.current.x += deltaY * 0.008;
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Convert (lat, lon) to 3D Sphere Point
  const latLonTo3D = (lat, lon) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return {
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.cos(phi),
      z: Math.sin(phi) * Math.sin(theta)
    };
  };

  // Pre-project accurate GeoJSON 3D boundary features
  const geoFeatures3D = useRef(
    worldGeoJsonFeatures.map((feat) => ({
      name: feat.name,
      polygons: feat.polygons.map((poly) => poly.map(([lat, lon]) => latLonTo3D(lat, lon)))
    }))
  );

  // Pre-project real export pin locations
  const realPins3D = useRef(
    Object.keys(realCountryCoords).reduce((acc, id) => {
      const c = realCountryCoords[id];
      acc[id] = { ...c, ...latLonTo3D(c.lat, c.lon) };
      return acc;
    }, {})
  );

  // Main 3D Canvas + Orbit Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let time = 0;

    const render = () => {
      time += 0.005;

      // Handle inertia momentum deceleration
      if (!isDragging.current) {
        dragRotation.current.y += velocity.current.x * 0.005;
        dragRotation.current.x += velocity.current.y * 0.005;
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
      }

      // Responsive sizing
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const centerX = width / 2;
      const centerY = height / 2;
      const globeRadius = Math.min(width, height) * (width < 640 ? 0.22 : 0.26);

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Globe Atmosphere Outer Glow
      const glowGrad = ctx.createRadialGradient(
        centerX, centerY, globeRadius * 0.7,
        centerX, centerY, globeRadius * 1.45
      );
      glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.20)");
      glowGrad.addColorStop(0.5, "rgba(14, 42, 58, 0.35)");
      glowGrad.addColorStop(1, "rgba(14, 42, 58, 0)");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.45, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Sphere Solid Metallic Base
      const sphereGrad = ctx.createRadialGradient(
        centerX - globeRadius * 0.3, centerY - globeRadius * 0.3, globeRadius * 0.1,
        centerX, centerY, globeRadius
      );
      sphereGrad.addColorStop(0, "#1E4258");
      sphereGrad.addColorStop(0.5, "#0E2A3A");
      sphereGrad.addColorStop(1, "#05131C");

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Sphere border outline
      ctx.strokeStyle = "rgba(56, 189, 248, 0.40)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Rotation angles (axial auto-rotation + user drag + parallax tilt)
      const rotY = time * 0.35 + dragRotation.current.y + (mouseTilt.current.x * 0.008);
      const rotX = dragRotation.current.x + (mouseTilt.current.y * 0.008);

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Transform 3D point helper
      const project3D = (pt) => {
        // Rotate Y
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.x * sinY + pt.z * cosY;
        // Rotate X
        let y1 = pt.y * cosX - z1 * sinX;
        let z2 = pt.y * sinX + z1 * cosX;

        return {
          px: centerX + x1 * globeRadius,
          py: centerY + y1 * globeRadius,
          z: z2
        };
      };

      // 3. Draw Latitude & Longitude Grid Rings
      ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
      ctx.lineWidth = 0.8;

      for (let lat = -60; lat <= 60; lat += 30) {
        const rad = Math.cos((lat * Math.PI) / 180) * globeRadius;
        const yOff = Math.sin((lat * Math.PI) / 180) * globeRadius * sinX;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - yOff, rad, rad * Math.abs(cosX) * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Draw Geographically Accurate 3D World Map Continents
      geoFeatures3D.current.forEach((feat) => {
        feat.polygons.forEach((poly) => {
          const projected = poly.map(project3D);
          const avgZ = projected.reduce((acc, p) => acc + p.z, 0) / projected.length;

          if (avgZ > -0.2) { // Render visible front hemisphere polygons
            ctx.beginPath();
            projected.forEach((p, idx) => {
              if (idx === 0) ctx.moveTo(p.px, p.py);
              else ctx.lineTo(p.px, p.py);
            });
            ctx.closePath();

            // Continent metallic fill & cyan border
            ctx.fillStyle = `rgba(56, 189, 248, ${0.30 + avgZ * 0.35})`;
            ctx.fill();

            ctx.strokeStyle = `rgba(186, 230, 253, ${0.55 + avgZ * 0.40})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        });
      });

      // 5. Render Real Geographical Pins for Export Countries
      const realPinProjections = {};
      Object.keys(realPins3D.current).forEach((id) => {
        const pin = realPins3D.current[id];
        const proj = project3D(pin);
        realPinProjections[id] = proj;

        if (proj.z > 0.05) {
          // Draw Real Location Glowing Pulse Pin on the Earth
          ctx.fillStyle = "#D94A1F";
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, 3.5, 0, Math.PI * 2);
          ctx.fill();

          const pulseR = 3 + ((time * 35) % 9);
          ctx.strokeStyle = `rgba(217, 74, 31, ${1 - pulseR / 12})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, pulseR, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // 6. Draw Orbital Wireframe Rings
      const ringRadii = [globeRadius * 1.55, globeRadius * 2.05, globeRadius * 2.55];
      ringRadii.forEach((r, idx) => {
        ctx.strokeStyle = idx === 0 ? "rgba(217, 74, 31, 0.25)" : "rgba(14, 42, 58, 0.30)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, r, r * 0.45, (idx - 1) * 0.3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 7. Compute 3D Satellite Positions for Orbiting Country Flag Cards
      const nextPositions = exportCountries.map((c) => {
        const ringRadius = ringRadii[c.ring];
        const angle = time * (c.speed * 100) + c.phase + dragRotation.current.y;
        const tiltRad = (c.orbitTilt * Math.PI) / 180;

        // Raw 3D coordinates in orbit plane
        const rawX = Math.cos(angle) * ringRadius;
        const rawZ = Math.sin(angle) * ringRadius;
        const rawY = Math.sin(angle) * ringRadius * Math.sin(tiltRad);

        // Apply Mouse Tilt Parallax
        const screenX = centerX + rawX + (mouseTilt.current.x * (c.ring + 1) * 1.5);
        const screenY = centerY + rawY + (mouseTilt.current.y * (c.ring + 1) * 1.5);

        // Z depth normalized (-1 to 1)
        const normalizedZ = rawZ / ringRadius;
        
        // Depth projection calculations
        const scale = 0.72 + (normalizedZ + 1) * 0.22; // 0.72 (back) to 1.16 (front)
        const opacity = 0.40 + (normalizedZ + 1) * 0.30; // 0.40 (back) to 1.0 (front)
        const isFront = normalizedZ > -0.15;
        const zIndex = isFront ? Math.floor(20 + normalizedZ * 20) : Math.floor(5 + normalizedZ * 5);

        // Draw active trade route arc line leading from real country pin on Earth to satellite flag
        const realPin = realPinProjections[c.id];
        const startX = (realPin && realPin.z > 0.05) ? realPin.px : centerX;
        const startY = (realPin && realPin.z > 0.05) ? realPin.py : centerY;

        if (isFront && (c.ring === 0 || c.id === "USA" || c.id === "DEU" || c.id === "SGP")) {
          ctx.strokeStyle = c.ring === 0 ? "rgba(217, 74, 31, 0.50)" : "rgba(56, 189, 248, 0.38)";
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.quadraticCurveTo(
            (startX + screenX) / 2,
            (startY + screenY) / 2 - 25,
            screenX,
            screenY
          );
          ctx.stroke();

          // Pulse Dot traveling along export arc route
          const pulseProgress = ((time * 1.5 + c.phase) % 1);
          const pulseX = (1 - pulseProgress) * (1 - pulseProgress) * startX +
                         2 * (1 - pulseProgress) * pulseProgress * ((startX + screenX) / 2) +
                         pulseProgress * pulseProgress * screenX;
          const pulseY = (1 - pulseProgress) * (1 - pulseProgress) * startY +
                         2 * (1 - pulseProgress) * pulseProgress * ((startY + screenY) / 2 - 25) +
                         pulseProgress * pulseProgress * screenY;

          ctx.fillStyle = c.ring === 0 ? "#D94A1F" : "#38BDF8";
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        return {
          ...c,
          x: screenX,
          y: screenY,
          scale,
          opacity,
          zIndex,
          isFront
        };
      });

      setCountryPositions(nextPositions);

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // GSAP ScrollTrigger Entrance Animation Sequence
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        }
      });

      // 1. Tag & Headline reveal
      tl.fromTo(
        ".reveal-tag",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
      .fromTo(
        ".reveal-title-1",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ".reveal-title-2",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".reveal-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      // 2. Dark Global Visualization Card reveal
      .fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.94, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter countries by active region
  const displayedPositions = countryPositions.filter((item) => {
    if (activeRegion === "all") return true;
    return item.region === activeRegion;
  });

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      className="relative bg-gradient-to-b from-white via-[#FAFBFD] to-[#F1F5F9] text-slate-800 py-12 sm:py-16 lg:py-20 overflow-hidden select-none border-b border-slate-200/90"
    >
      {/* Subtle Background Engineering Grid Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER - CLEAN PREMIUM TYPOGRAPHY */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="reveal-tag inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-[#D94A1F] font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#D94A1F]" />
            <span>[GLOBAL EXPORT NETWORK]</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2A3A] tracking-tight leading-tight mb-2">
            <span className="reveal-title-1 block">GLOBAL PRESENCE</span>
            <span className="reveal-title-2 block text-[#D94A1F] mt-1">COUNTRIES WE EXPORT TO</span>
          </h2>
          
          <p className="reveal-subtitle text-slate-600 text-base sm:text-lg leading-relaxed font-medium mt-3">
            Delivering high-performance metals and piping solutions across global markets.
          </p>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {["all", "Middle East", "Europe", "Asia Pacific", "Americas", "Africa"].map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-300 font-mono uppercase ${
                  activeRegion === reg
                    ? "bg-[#0E2A3A] text-white shadow-md border border-[#0E2A3A]"
                    : "bg-white text-slate-700 border border-slate-200/90 hover:border-[#D94A1F]/40 hover:bg-white shadow-2xs"
                }`}
              >
                {reg === "all" ? "All Global Destinations" : reg}
              </button>
            ))}
          </div>
        </div>

        {/* 3D GLOBE + SATELLITE ORBIT CONTAINER (DARK VISUALIZATION CARD) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-3xl bg-[#0B1E2B]/95 border border-slate-700/60 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing backdrop-blur-md"
        >
          {/* HTML5 Canvas for Geographically Accurate 3D World Earth Globe */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          />

          {/* Floating Satellites: Country Flag Pill Badges */}
          {displayedPositions.map((c) => {
            const isHovered = hoveredCountry?.id === c.id;

            return (
              <div
                key={c.id}
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  transform: `translate3d(${c.x}px, ${c.y}px, 0px) translate(-50%, -50%) scale(${isHovered ? 1.3 : c.scale})`,
                  opacity: isHovered ? 1.0 : c.opacity,
                  zIndex: isHovered ? 100 : c.zIndex,
                  transition: isHovered ? "transform 0.25s ease-out, opacity 0.25s ease-out" : "none"
                }}
                className="absolute top-0 left-0 cursor-pointer will-change-transform group"
              >
                {/* Flag Pill Badge */}
                <div
                  className={`flex items-center gap-2 px-2.5 py-1 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 ${
                    isHovered
                      ? "bg-[#0E2A3A] border-[#D94A1F] shadow-[0_0_25px_rgba(217,74,31,0.6)] text-white"
                      : c.isFront
                      ? "bg-[#0E2A3A]/90 border-slate-600/70 text-slate-100 hover:border-slate-300"
                      : "bg-[#091722]/80 border-slate-800 text-slate-400"
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/w40/${c.code}.png`}
                    alt={c.name}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-white/20 shrink-0"
                    loading="lazy"
                  />
                  <span className="text-[10px] sm:text-xs font-extrabold tracking-wide uppercase truncate max-w-[80px] sm:max-w-[110px]">
                    {c.name}
                  </span>
                </div>

                {/* Hover Tooltip Popup */}
                {isHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-3 rounded-2xl bg-[#0E2A3A] border border-[#D94A1F]/60 shadow-2xl text-left pointer-events-none z-50 space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                      <span>EXPORT DESTINATION</span>
                      <Radio className="w-3 h-3 text-[#D94A1F] animate-ping" />
                    </div>
                    <div className="text-xs font-extrabold text-white leading-tight">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium flex items-center gap-1 pt-1 border-t border-slate-700/60">
                      <Ship className="w-3 h-3 text-[#D94A1F]" />
                      <span>{c.region} Port Delivery</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Interactive Hint Indicator Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex items-center justify-between sm:justify-start gap-4 px-4 py-2 rounded-2xl bg-[#0E2A3A]/70 border border-slate-700/60 backdrop-blur-md text-slate-300 text-xs font-mono z-30">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D94A1F] animate-spin" style={{ animationDuration: "12s" }} />
              <span>DRAG TO ROTATE GLOBE</span>
            </div>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-cyan-400" />
              <span>HOVER COUNTRY TO FOCUS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
