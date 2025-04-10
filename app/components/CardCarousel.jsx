// CardCarousel.js
import React from "react";

const CardCarousel = ({ cards }) => {
  return (
    <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={card.image}
            alt={card.heading}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{card.date}</span>
              <span className="font-medium text-indigo-600">
                {card.episode}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.heading}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {card.intro}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
