"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PolaroidWithSlideshow({
  images,
  initialRotation,
  text,
  date,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`w-full max-w-sm h-fit bg-white bg-opacity-90 p-1 ${initialRotation} shadow-xl rounded-sm border border-gray-300 hover:shadow-2xl transition-all hover:rotate-0 duration-300 mx-auto my-4`}
    >
      <div className="relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 absolute top-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover border-4 border-white"
            />
          </div>
        ))}
        <div className="text-center py-2 px-4 bg-white">
          <p className="text-gray-700 font-mono">{date}</p>
          <p className="text-pink-600 font-serif italic animate-fadeIn">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
