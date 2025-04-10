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
        "A former child prodigy who lost his ability to hear piano sounds after his mother's death.",
      image: "/images/233573438c6b7ebf19e51e96e5a84510.jpg",
      color: "#fda4af",
      theme: "bg-rose-50",
      quote:
        "The pain of not being able to play was more intense than any other.",
    },
    {
      name: "Kaori Miyazono",
      role: "Free-spirited Violinist",
      description:
        "A vibrant violinist whose passionate performances shake Kousei's world.",
      image: "/images/f4601aa255db72adfcf098ad4fb35eba.jpg",
      color: "#a5b4fc",
      theme: "bg-indigo-50",
      quote: "I want to leave a mark on my audience's hearts!",
    },
    {
      name: "Tsubaki Sawabe",
      role: "Childhood Friend",
      description:
        "Kousei's loyal friend since childhood. A softball player struggling with her feelings.",
      image: "/images/0edc6991db88f755b4e863151aee63d8.jpg",
      color: "#fcd34d",
      theme: "bg-amber-50",
      quote: "I just want to see you smile like you used to.",
    },
    {
      name: "Ryouta Watari",
      role: "Popular Athlete",
      description: "The school's star soccer player with a playboy reputation.",
      image: "/images/3a530081071da8be1eb164e5423bcd80.jpg",
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
      className="min-h-[50vh] pt-10 bg-white text-gray-800 font-sans overflow-x-hidden"
      id="story"
    >
      {/* Main Content */}
      <div className="relative z-10">
        {/* Page Content */}
        <div className="container mx-auto px-2 py-6">
          <header className="text-center w-full mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-light text-pink-500 mb-2">
              Meet the Characters
            </h1>
            <p className="text-xs md:text-sm text-gray-700 ">
              Discover the souls whose lives intertwine through music
            </p>
          </header>

          {/* Character Grid - Always 4 columns */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-3 mb-8 px-1">
            {characters.map((character, index) => (
              <motion.div
                key={character.name}
                whileHover={{ y: -2 }}
                onHoverStart={() => handleHover(index, true)}
                onHoverEnd={() => handleHover(index, false)}
                className={`relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 ${character.theme} cursor-pointer`}
                onClick={() => setSelectedChar(character)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovering[index] ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <h3 className="text-xs font-bold text-white truncate">
                      {character.name}
                    </h3>
                    <p className="text-[10px] text-white/90 truncate">
                      {character.role}
                    </p>
                  </div>
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
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2"
                onClick={() => setSelectedChar(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className={`relative w-sm max-w-[90%] rounded-xl overflow-hidden shadow-lg ${selectedChar.theme}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedChar(null)}
                    className="absolute top-2 right-2 z-10 bg-white/90 p-1 rounded-full shadow-sm hover:bg-white transition-colors text-xs"
                  >
                    ✕
                  </button>
                  <div className="flex flex-col">
                    <div className="h-48">
                      <img
                        src={selectedChar.image}
                        alt={selectedChar.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">
                          {selectedChar.name}
                        </h2>
                        <p
                          className="text-sm"
                          style={{ color: selectedChar.color }}
                        >
                          {selectedChar.role}
                        </p>
                      </div>
                      <p className="text-xs text-gray-700 mb-4">
                        {selectedChar.description}
                      </p>
                      <div className="bg-white/80 p-2 rounded mb-4">
                        <FiHeart
                          className="inline-block mr-1 text-xs"
                          style={{ color: selectedChar.color }}
                        />
                        <span className="italic text-xs">
                          "{selectedChar.quote}"
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
        </div>
      </div>
    </div>
  );
}
