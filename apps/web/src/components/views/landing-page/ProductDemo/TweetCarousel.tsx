"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import TweetCard from "./TweetCard";

type GeneratedTweet = { id: number; content: string; chars: number };

type TweetCarouselProps = {
  tweets: GeneratedTweet[];
  copiedIndex: number | null;
  onCopy: (content: string, index: number) => void;
};

const TweetCarousel = ({ tweets, copiedIndex, onCopy }: TweetCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".tweetCard")?.clientWidth || 650;
      const scrollAmount = (cardWidth + 24) * 1.5;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    setShowLeftButton(carouselRef.current.scrollLeft > 10);
    setShowRightButton(
      carouselRef.current.scrollLeft <
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [tweets.length]);

  if (tweets.length === 0) return null;

  return (
    <motion.div
      id="tweets-section"
      className="w-full max-w-[1400px] mx-auto py-12 max-lg:py-6 max-md:py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h3
        className="text-[1.75rem] font-bold text-center mb-8 tracking-[-0.02em] bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-md:text-2xl max-md:mb-6 max-sm:text-xl max-sm:mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Generated Tweets
      </motion.h3>

      <div className="relative w-full max-w-full mx-auto">
        {showLeftButton && (
          <button
            className="absolute top-1/2 -translate-y-1/2 left-[-24px] max-xl:left-1 max-md:left-0 w-12 h-12 max-md:w-10 max-md:h-10 rounded-full bg-[rgba(15,23,42,0.9)] border border-emerald-500/30 text-emerald-500/90 flex items-center justify-center cursor-pointer z-20 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:text-emerald-500 hover:scale-110 active:scale-95"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        <div
          className="hide-scrollbar carousel-mask flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory p-8 px-12 -webkit-overflow-scrolling-touch max-lg:p-3 max-lg:px-4 max-md:p-2 max-md:gap-4"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {tweets.map((tweet, index) => (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              index={index}
              copiedIndex={copiedIndex}
              onCopy={onCopy}
            />
          ))}
        </div>

        {showRightButton && (
          <button
            className="absolute top-1/2 -translate-y-1/2 right-[-24px] max-xl:right-1 max-md:right-0 w-12 h-12 max-md:w-10 max-md:h-10 rounded-full bg-[rgba(15,23,42,0.9)] border border-emerald-500/30 text-emerald-500/90 flex items-center justify-center cursor-pointer z-20 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:text-emerald-500 hover:scale-110 active:scale-95"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TweetCarousel;
