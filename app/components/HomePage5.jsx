"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiMusic, FiHeart } from "react-icons/fi";

export default function CharactersPage() {
  const characters = [
    {
      name: "Kousei Arima",
      role: "Piano Prodigy",
      description:
        "A former child prodigy who lost his ability to hear piano sounds after his mother's death. His journey back to music forms the heart of the story.",
      image: "/images/kousei.jpg",
      color: "#fda4af",
      theme: "bg-rose-50",
      quote:
        "The pain of not being able to play was more intense than any other.",
    },
    {
      name: "Kaori Miyazono",
      role: "Free-spirited Violinist",
      description:
        "A vibrant violinist whose passionate performances shake Kousei's world. Her unconventional style hides deep musical brilliance.",
      image: "/images/kaori.jpg",
      color: "#a5b4fc",
      theme: "bg-indigo-50",
      quote: "I want to leave a mark on my audience's hearts!",
    },
    {
      name: "Tsubaki Sawabe",
      role: "Childhood Friend",
      description:
        "Kousei's loyal friend since childhood. A softball player struggling with her changing feelings as Kousei grows closer to Kaori.",
      image: "/images/tsubaki.jpg",
      color: "#fcd34d",
      theme: "bg-amber-50",
      quote: "I just want to see you smile like you used to.",
    },
    {
      name: "Ryouta Watari",
      role: "Popular Athlete",
      description:
        "The school's star soccer player with a playboy reputation. Despite his carefree attitude, he shows surprising emotional depth.",
      image: "/images/watari.jpg",
      color: "#6ee7b7",
      theme: "bg-emerald-50",
      quote: "You never know what someone's really going through.",
    },
  ];

  const [selectedChar, setSelectedChar] = useState(null);
  const [isHovering, setIsHovering] = useState(
    Array(characters.length).fill(false)
  );

  const handleHover = (index, isHover) => {
    const newHoverState = [...isHovering];
    newHoverState[index] = isHover;
    setIsHovering(newHoverState);
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden"
      id="story"
    >
      {/* Main Content */}
      <div className="relative z-10">
        {/* Page Content */}
        <div className="container mx-auto px-6 py-12">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-pink-500 mb-3">
              Meet the Characters
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Discover the souls whose lives intertwine through music and
              emotion
            </p>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {characters.map((character, index) => (
              <motion.div
                key={character.name}
                whileHover={{ y: -5 }}
                onHoverStart={() => handleHover(index, true)}
                onHoverEnd={() => handleHover(index, false)}
                className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${character.theme} cursor-pointer`}
                onClick={() => setSelectedChar(character)}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovering[index] ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">
                      {character.name}
                    </h3>
                    <p className="text-white/90">{character.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 line-clamp-3">
                    {character.description}
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering[index] ? 1 : 0 }}
                    className="mt-4 flex justify-end"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/90 text-rose-600">
                      Read more →
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Character Details Modal */}
          <AnimatePresence>
            {selectedChar && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedChar(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  className={`relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl ${selectedChar.theme}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedChar(null)}
                    className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white transition-colors"
                  >
                    ✕
                  </button>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-96 md:h-auto">
                      <img
                        src={selectedChar.image}
                        alt={selectedChar.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-1">
                          {selectedChar.name}
                        </h2>
                        <p
                          className="text-lg"
                          style={{ color: selectedChar.color }}
                        >
                          {selectedChar.role}
                        </p>
                      </div>
                      <p className="text-gray-700 mb-6">
                        {selectedChar.description}
                      </p>
                      <div className="bg-white/80 p-4 rounded-lg mb-6">
                        <FiHeart
                          className="inline-block mr-2"
                          style={{ color: selectedChar.color }}
                        />
                        <span className="italic">"{selectedChar.quote}"</span>
                      </div>
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors">
                          Learn More
                        </button>
                        <button
                          className="px-4 py-2 rounded-full text-white hover:opacity-90 transition-colors"
                          style={{ backgroundColor: selectedChar.color }}
                        >
                          View Gallery
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <footer className="text-center mt-24">
            <div className="w-24 h-1 bg-gradient-to-r from-rose-200 to-indigo-200 mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 mb-2">Your Lie in April</p>
            <p className="text-sm text-gray-500">
              A story of music, love, and the colors of life
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
