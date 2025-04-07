"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PolaroidWithSlideshow = ({ images, initialRotation, text, date }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`w-full max-w-sm h-fit bg-white bg-opacity-90 p-4 ${initialRotation} shadow-xl rounded-sm border border-gray-300 hover:shadow-2xl transition-all hover:rotate-0 duration-300`}
    >
      <div className="polaroid-frame bg-pink-300 relative overflow-hidden">
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

        <footer className="text-center w-full mt-8 md:mt-16 text-gray-600">
          <p>Relive the musical magic of Shigatsu wa Kimi no Uso</p>
        </footer>
      </div>
    </div>
  );
};

export default function HomePage3() {
  const polaroids = [
    {
      images: [
        { src: "/Images/peakpx.jpg", alt: "Memory 1" },
        {
          src: "/Images/2ed1c0789d5ab20b7c4fccc12b4040f8.jpg",
          alt: "Memory 2",
        },
        {
          src: "/Images/9edfc8241a2fe600d093592e9cdcb155.jpg",
          alt: "Memory 3",
        },
      ],
      rotation: "-rotate-2 md:-rotate-3",
      text: "Our first meeting",
      date: "2023-05-15",
    },
    {
      images: [
        {
          src: "/Images/6c6da3d8af0a8223e0fd6588a5682df5.jpg",
          alt: "Memory 1",
        },
        {
          src: "/Images/0b5876266a21cfd661a59332c2712af7.jpg",
          alt: "Memory 2",
        },
        {
          src: "/Images/31676a9a8342a63d583f267b6a6b2549.jpg",
          alt: "Memory 3",
        },
      ],
      rotation: "",
      text: "Summer adventure",
      date: "2023-08-22",
    },
    {
      images: [
        {
          src: "/Images/6985a5680cf3e583879492b0b9db1394.jpg",
          alt: "Memory 1",
        },
        {
          src: "/Images/93907bd057f194c083daebb87a3b2564.jpg",
          alt: "Memory 2",
        },
        {
          src: "/Images/9208825ed3aac824f452c45ea6e4bd02.jpg",
          alt: "Memory 3",
        },
      ],
      rotation: "rotate-2 md:rotate-3",
      text: "Winter memories",
      date: "2023-12-10",
    },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-80px)] py-10 px-4 md:p-10 gap-6 md:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {polaroids.map((polaroid, index) => (
        <PolaroidWithSlideshow
          key={index}
          images={polaroid.images}
          initialRotation={polaroid.rotation}
          text={polaroid.text}
          date={polaroid.date}
        />
      ))}
      <div className="h-[100px] hidden max-lg:flex w-full"></div>
    </div>
  );
}
