"use client";
import React from "react";

const BluePaper = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full max-w-md h-[500px] ${className}`}>
      {/* Main Paper */}
      <div
        className="absolute w-full h-full bg-blue-50 shadow-lg rounded-md overflow-hidden p-8 box-border border border-blue-100"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(200, 220, 255, 0.3) 0%, transparent 5%),
            repeating-linear-gradient(to bottom, 
              transparent 0%, 
              transparent 24px, 
              rgba(150, 180, 220, 0.1) 24px, 
              rgba(150, 180, 220, 0.1) 25px
            )
          `,
          boxShadow: `
            inset 0 0 20px rgba(200, 220, 255, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.1)
          `,
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(100, 150, 200, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(100, 150, 200, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col text-blue-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BluePaper;
