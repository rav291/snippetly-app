"use client";

import React from "react";
import HeroHeadline from "./HeroHeadline";
import StatsBar from "./StatsBar";
import HeroCTA from "./HeroCTA";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="max-w-[88rem] mx-auto my-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <HeroHeadline />
          <StatsBar />
          <HeroCTA />
        </div>

        {/* Right Visual */}
        <HeroVisual />
      </div>
    </section>
  );
};

export default HeroSection;
