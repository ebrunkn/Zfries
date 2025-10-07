'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PopcornBurst from './PopcornBurst'; // Import the new component

const originalImages = [
  '/carousel/BLACK.png',
  '/carousel/CHILLI.png',
  '/carousel/KETCHUP.png',
  '/carousel/SALT.png',
];

const images = [...originalImages, ...originalImages, ...originalImages];

const Carousel = ({
  className = ""
}, props) => {
  const [currentIndex, setCurrentIndex] = useState(originalImages.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showPopcorn, setShowPopcorn] = useState(false); // New state for the animation

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        // Trigger the popcorn animation just before the index changes
        if (prevIndex < originalImages.length * 2) {
          setShowPopcorn(true);
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= originalImages.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(originalImages.length);
      }, 1000);
    }
    
    // Hide the popcorn animation after a short delay
    if (showPopcorn) {
      setTimeout(() => {
        setShowPopcorn(false);
      }, 500); // Hide it after it's done animating
    }
  }, [currentIndex, showPopcorn]);

  return (
    <div {...props} className={`overflow-hidden flex justify-center items-center ${className}`}>
      {/* Conditionally render the popcorn burst animation */}
      {showPopcorn && <PopcornBurst />}

      <div 
        className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : 'transition-none'}`}
        style={{ transform: `translateX(calc(-${currentIndex * 33.33}% + 33.33%))` }}
      >
        {images.map((src, index) => {
          const isCenter = (index % originalImages.length) === (currentIndex % originalImages.length);
          
          return (
            <div 
              key={index}
              className="flex-shrink-0 w-1/3 h-60 sm:h-80 md:h-130 flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Popcorn flavor ${index + 1}`}
                width={isCenter ? 400 : 300}
                height={isCenter ? 500 : 400}
                className="transition-all duration-700 h-30 w-25 sm:h-30 md:h-70 md:w-55 ease-in-out"
                style={{
                  opacity: isCenter ? 1 : 0,
                  transform: isCenter ? 'scale(1.5)' : 'scale(1)',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;