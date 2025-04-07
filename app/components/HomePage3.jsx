"use client";
import React, { useState, useEffect } from "react";

export default function HomePage3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Music clips data
  const musicClips = [
    {
      title: "Hikaru Nara",
      description: "Opening theme - Goose house",
      youtubeId: "",
      scene: "Kousei's awakening",
    },
    {
      title: "Kirameki",
      description: "Ending theme - wacci",
      youtubeId: "iZJ7o2bmC5E",
      scene: "Springtime memories",
    },
    {
      title: "Watashi no Uso",
      description: "Piano piece - Kousei's performance",
      youtubeId: "8MUSKB4BJhA",
      scene: "Competition performance",
    },
    {
      title: "Orange",
      description: "Insert song - 7!!",
      youtubeId: "9J5Qa2Xl1xE",
      scene: "Emotional climax",
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % musicClips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, isHovering, musicClips.length]);

  const goToPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + musicClips.length) % musicClips.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % musicClips.length);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  // SVG Icons
  const ChevronLeft = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );

  const ChevronRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const PlayIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );

  const PauseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 font-sans overflow-x-hidden">
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center">
        <header className="text-center w-full mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-light text-gray-700 mb-2">
            Your Lie in April
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-600">
            An Immersive Musical Journey
          </h2>
        </header>

        <div className="max-w-3xl w-full text-center mb-8 md:mb-16">
          <p className="text-base md:text-lg text-gray-700">
            Experience the soul-stirring music that made "Your Lie in April"
            unforgettable. These pieces carry the emotions of Kousei, Kaori, and
            their friends.
          </p>
        </div>

        {/* Carousel Container - Centered with max-width */}
        <div className="w-full max-w-4xl mb-8 md:mb-12">
          <div
            className="relative rounded-xl overflow-hidden shadow-xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Main Carousel Item */}
            <div className="relative aspect-w-16 aspect-h-9 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${musicClips[activeIndex].youtubeId}?autoplay=1&mute=1`}
                className="w-full h-64 md:h-96"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={musicClips[activeIndex].title}
              />

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
              >
                <ChevronRight />
              </button>

              {/* Play/Pause Auto-rotate */}
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
              >
                {autoPlay ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Current Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl md:text-2xl font-medium">
                  {musicClips[activeIndex].title}
                </h3>
                <p className="text-sm md:text-base">
                  {musicClips[activeIndex].description}
                </p>
                <p className="text-xs md:text-sm italic">
                  Featured scene: {musicClips[activeIndex].scene}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation - Centered */}
        <div className="w-full max-w-2xl flex justify-center flex-wrap gap-2 md:gap-4 mb-8">
          {musicClips.map((clip, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-16 h-16 md:w-24 md:h-20 rounded-md overflow-hidden transition-all ${
                index === activeIndex
                  ? "ring-4 ring-purple-500 scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src="/Images/your lie.mp4"
                alt={clip.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* All Music Tracks Grid - Centered */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mb-12">
          {musicClips.map((clip, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ${
                index === activeIndex ? "border-2 border-purple-500" : ""
              }`}
              onClick={() => goToIndex(index)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`https://img.youtube.com/vi/${clip.youtubeId}/mqdefault.jpg`}
                  alt={clip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  {clip.title}
                </h3>
                <p className="text-sm text-gray-600">{clip.description}</p>
                <p className="text-xs text-gray-500 italic mt-1">
                  Scene: {clip.scene}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center w-full mt-8 md:mt-16 text-gray-600">
          <p>Relive the musical magic of Shigatsu wa Kimi no Uso</p>
        </footer>
      </div>
    </div>
  );
}
