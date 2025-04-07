"use client";
import React, { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);
  const sections = [
    "landing",
    "story",
    "music",
    "polaroid",
    "letter",
    "memorial",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          const dot = document.querySelector(
            `.nav-dot[data-section="${sectionId}"]`
          );
          if (dot) {
            document
              .querySelectorAll(".nav-dot")
              .forEach((d) => d.classList.remove("active"));
            dot.classList.add("active");
          }
        }
      });
    };

    const handleDotClick = (e) => {
      if (e.target.classList.contains("nav-dot")) {
        const sectionId = e.target.dataset.section;
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    if (navRef.current) {
      navRef.current.addEventListener("click", handleDotClick);
    }

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (navRef.current) {
        navRef.current.removeEventListener("click", handleDotClick);
      }
    };
  }, [sections]);

  return (
    <div className="nav" ref={navRef}>
      {sections.map((section, index) => (
        <div
          key={section}
          className={`nav-dot max-sm:hidden ${index === 0 ? "active" : ""}`}
          data-section={section}
        />
      ))}
    </div>
  );
}
