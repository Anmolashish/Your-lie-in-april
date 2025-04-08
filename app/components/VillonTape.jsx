"use client";
import React, { useRef } from "react";

export default function ViolinTape() {
  const audioContextRef = useRef(null);

  // Standard violin string frequencies (G3, D4, A4, E5)
  const stringFrequencies = [196.0, 293.66, 440.0, 659.25];
  const stringNames = ["G", "D", "A", "E"];

  const playStringSound = (frequency) => {
    // Initialize audio context on first interaction
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
    }

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    gainNode.gain.value = 0.3;
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 1.5
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1.5);
  };

  return (
    <div className="w-full max-w-full mx-auto my-8">
      <div className="flex flex-col gap-6 py-4 bg-white bg-opacity-10 rounded ">
        {stringFrequencies.map((freq, index) => (
          <div
            key={index}
            className="relative h-1 mx-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-y-200 hover:shadow-gold"
            style={{
              background:
                "linear-gradient(to right, rgba(218, 165, 32, 0.7), rgba(255, 215, 0, 0.9), rgba(218, 165, 32, 0.7))",
              boxShadow: "0 0 8px rgba(218, 165, 32, 0.3)",
            }}
            onClick={() => playStringSound(freq)}
            onTouchStart={() => playStringSound(freq)}
          >
            {/* String bridges */}
            <div className="absolute top-[-5px] left-[-5px] w-2.5 h-3.5 bg-gray-800 rounded-sm"></div>
            <div className="absolute top-[-5px] right-[-5px] w-2.5 h-3.5 bg-gray-800 rounded-sm"></div>

            {/* String label */}
          </div>
        ))}
      </div>
      <div className="text-center mt-4 text-gray-600 text-sm">
        Click on the strings to play
      </div>
    </div>
  );
}
