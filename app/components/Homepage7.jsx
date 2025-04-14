"use client";
import Image from "next/image";
import React, { useEffect } from "react";

// pages/letter.tsx
export default function LoveLetter() {
  useEffect(() => {
    // Create stars on component mount
    const createStars = () => {
      const starsContainer = document.getElementById("stars");
      const starCount = 100;

      // Clear existing stars
      starsContainer.innerHTML = "";

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
    };

    createStars();
  });

  return (
    <div className="min-h-screen font-[--font-serif] bg-gradient-to-b from-white via-[#c6c6fd] to-[#5858e8] flex items-center justify-center px-4 py-12 relative">
      <div className="stars" id="stars"></div>
      <div className="absolute w-[500px] left-0 top-[300px] opacity-50">
        <Image
          src="/Images/8918181.png"
          alt="Decorative element"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute w-[500px] right-0 top-[50px] opacity-50">
        <Image
          src="/Images/8918191.png"
          alt="Decorative element"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="bg-white/90 border-2 border-pink-200 shadow-lg rounded-lg max-w-2xl w-full p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-pink-100/10 pointer-events-none" />
        <div className="font-serif text-gray-800 text-lg leading-relaxed space-y-4 z-10 relative">
          <p className="text-center text-2xl font-semibold text-pink-600 mb-4">
            Dear Kousei,
          </p>

          <p>
            If you're reading this, then I'm no longer by your side — not in the
            way we hoped. I’m sorry for keeping my secret. I wanted to stay in
            the sunlight with you a little longer.
          </p>

          <p>
            You know, the moment I first saw you play, my heart was stolen. You
            didn’t know, but every note you played felt like it reached deep
            into my soul. Even in your silence, your music spoke. You made the
            world bloom for me.
          </p>

          <p>
            I lied — I said I liked Watari. I laughed, I danced, and I
            pretended. Because I was afraid. Afraid that you wouldn't look at me
            the same way. But every smile, every moment I shared with you, it
            was real. So very real.
          </p>

          <p>
            You brought color back into my life, Kousei. When I couldn’t run
            anymore, I still dreamed of hearing your music. If there's another
            life, I hope I can meet you again — and this time, I’ll be honest.
          </p>

          <p className="text-right mt-8 text-pink-600">
            With all my love,
            <br />
            Kaori
          </p>
        </div>
      </div>
    </div>
  );
}
