import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to apply GSAP ScrollTrigger animations to elements with data-gsap attributes:
 * - data-gsap="fade-up"
 * - data-gsap="stagger-container" (with data-gsap="stagger-item")
 * - data-gsap="scale"
 * - data-gsap="counter"
 */
export function useGsapReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Single Fade-Up elements
      const fadeUpElements = containerRef.current.querySelectorAll(
        '[data-gsap="fade-up"]'
      );
      fadeUpElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // 2. Staggered card grids
      const staggerContainers = containerRef.current.querySelectorAll(
        '[data-gsap="stagger-container"]'
      );
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('[data-gsap="stagger-item"]');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });

      // 3. Image reveal / Scale
      const scaleElements = containerRef.current.querySelectorAll(
        '[data-gsap="scale"]'
      );
      scaleElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return containerRef;
}

export default useGsapReveal;
