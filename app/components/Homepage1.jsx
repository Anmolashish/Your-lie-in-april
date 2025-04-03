"use client";
import React, { useEffect, useRef } from "react";

export default function Homepage1() {
  const petalIntervalRef = useRef(null);

  // Create petals effect
  const createPetals = () => {
    const petalCount = 15;
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.classList.add("petal");

      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = `-20px`;

      const size = 10 + Math.random() * 10;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.animationDuration = `${7 + Math.random() * 5}s`;

      document.body.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 10000);
    }
  };

  // Set up scroll effect and automatic petals
  useEffect(() => {
    petalIntervalRef.current = setInterval(createPetals, 2000);

    // Cleanup
    return () => {
      if (petalIntervalRef.current) {
        clearInterval(petalIntervalRef.current);
      }
    };
  }, []);

  return (
    <section className="landing" id="landing">
      <div className="absolute w-[500px] max-w-[90%] h-[300px] bottom-0 left-[0px] flex items-end z-10">
        <img src="/Images/pngegg (2).png" alt="" className="w-full" />
      </div>
      <div className="title-container">
        <h1 className="main-title" id="main-title">
          Your Lie in April
        </h1>
        <p className="subtitle">An immersive musical journey</p>
      </div>
      <div className="scroll-prompt">Scroll to begin</div>
    </section>
  );
}
