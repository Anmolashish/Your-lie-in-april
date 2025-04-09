"use client";
import React, { useState, useEffect, useCallback } from "react";

export default function HomePage3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showMuteText, setShowMuteText] = useState(true);

  // Music clips data
  const musicClips = [
    {
      title: "Hikaru Nara",
      description: "Opening theme - Goose house",
      youtubeId: "fWRPihlt2ho",
      scene: "Kousei's awakening",
      thumbnail: "/Images/2ed1c0789d5ab20b7c4fccc12b4040f8.jpg",
    },
    {
      title: "Kirameki",
      description: "Ending theme - wacci",
      youtubeId: "TTfPLg5Xqxg",
      scene: "Springtime memories",
      thumbnail: "/Images/0b5876266a21cfd661a59332c2712af7.jpg",
    },
    {
      title: "Watashi no Uso",
      description: "Piano piece - Kousei's performance",
      youtubeId: "t-eusIvlTzU",
      scene: "Competition performance",
      thumbnail: "/Images/c024ff7d843179740aa0d30e79202f14.jpg",
    },
    {
      title: "Friend A",
      description: "Unspoken bonds, gentle echoes",
      youtubeId: "00Bki1-MnEY",
      scene: "Moments of deep reflection and unspoken bonds",
      thumbnail: "/Images/couple1.jpg",
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

  const goToPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + musicClips.length) % musicClips.length
    );
  }, [musicClips.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % musicClips.length);
  }, [musicClips.length]);

  const goToIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    const newAutoPlay = !autoPlay;
    setAutoPlay(newAutoPlay);
    setIsMuted(newAutoPlay);
    setShowMuteText(newAutoPlay);
  }, [autoPlay]);

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
    <div
      className="min-h-screen bg-gradient-to-br text-gray-800 font-sans overflow-x-hidden"
      id="music"
    >
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center">
        <header className="text-center w-full mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-light text-pink-500 mb-2">
            Your Lie in April
          </h1>
          <p className="text-base md:text-sm text-gray-700 ">
            Experience the soul-stirring music that made "Your Lie in April"
            unforgettable.
          </p>
        </header>

        {/* Carousel Container - Centered with max-width */}
        <div className="w-full max-w-4xl mb-8 md:mb-12">
          <div
            className="relative rounded-xl overflow-hidden shadow-xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Main Carousel Item */}
            <div className="relative bg-black">
              {musicClips[activeIndex].youtubeId ? (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      musicClips[activeIndex].youtubeId
                    }?autoplay=1&mute=${isMuted ? 1 : 0}`}
                    className="w-full h-64 md:h-96 aspect-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={musicClips[activeIndex].title}
                  />
                  {isMuted && showMuteText && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                      <p className="text-white text-lg font-medium">
                        Click play to unmute
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-64 md:h-96 aspect-video flex items-center justify-center bg-gray-900 text-white">
                  <p>Video not available</p>
                </div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                aria-label="Previous video"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                aria-label="Next video"
              >
                <ChevronRight />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                aria-label={autoPlay ? "Pause" : "Play"}
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
        {/* <div className="w-full max-w-2xl flex justify-center flex-wrap gap-2 md:gap-4 mb-8">
          {musicClips.map((clip, index) => (
            <button
              key={clip.title}
              onClick={() => goToIndex(index)}
              className={`w-16 h-16 md:w-24 md:h-20 rounded-md overflow-hidden transition-all ${
                index === activeIndex
                  ? "ring-4 ring-purple-500 scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`View ${clip.title}`}
            >
              <img
                src={clip.thumbnail}
                alt={clip.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/Images/default-thumbnail.jpg";
                }}
              />
            </button>
          ))}
        </div> */}

        {/* All Music Tracks Grid - Centered */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mb-12">
          {musicClips.map((clip, index) => (
            <div
              key={clip.title}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl cursor-pointer ${
                index === activeIndex
                  ? "border-2 border-pink-500 shadow-2xl shadow-pink-100"
                  : ""
              }`}
              onClick={() => goToIndex(index)}
            >
              <div className="aspect-video">
                {clip.youtubeId ? (
                  <img
                    src={`https://img.youtube.com/vi/${clip.youtubeId}/mqdefault.jpg`}
                    alt={clip.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/Images/default-thumbnail.jpg";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No thumbnail available</p>
                  </div>
                )}
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

        <footer className="text-center mt-8 md:mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-rose-200 to-indigo-200 mx-auto mb-6 rounded-full" />
          <p className="text-sm text-gray-500">
            Relive the musical magic of Shigatsu wa Kimi no Uso
          </p>
        </footer>
      </div>
    </div>
  );
}
