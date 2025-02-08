"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" w-full max-w-2xl mx-auto mt-2 group ">
      <div className="h-60 md:h-80 lg:h-85 overflow-hidden relative">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          fill
          className="object-cover object-top transition-transform duration-300 rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={currentIndex === 0}
        />

        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePrevClick}
            className="hidden sm:flex bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ❮
          </button>

          <button
            onClick={handleNextClick}
            className="hidden sm:flex bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>

      <div className="flex justify-center -translate-y-4 space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex
                ? "bg-white opacity-1"
                : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
