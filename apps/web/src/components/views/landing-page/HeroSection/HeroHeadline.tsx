"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroHeadline = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Transcripts", "Articles", "Captions", "Notes"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[clamp(2.5rem,6vw,4.2rem)] font-black leading-[1.2] tracking-[-0.03em] text-white m-0"
      >
        Turn your{" "}
        <span className="word-cycle">
          {words.map((word, index) => (
            <span
              key={word}
              className={`word ${index === currentWord ? "word-active" : ""}`}
            >
              {word}
            </span>
          ))}
        </span>
        <br />
        into viral tweets.
        <br />
        <span
          className="block gradient-text"
          style={{
            background:
              "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% auto",
          }}
        >
          In seconds.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.7] max-w-[38rem] m-0"
      >
        Stop manually repurposing content. Snippetly analyzes your long-form
        content and generates authentic, engagement-ready tweets that sound
        like you.
      </motion.p>
    </>
  );
};

export default HeroHeadline;
