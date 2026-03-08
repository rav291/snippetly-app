"use client";

import React from "react";
import HeroHeadline from "./HeroHeadline";
import StatsBar from "./StatsBar";
import HeroCTA from "./HeroCTA";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_#6ee7b7_0%,_#34d399_8%,_#10b981_20%,_#065f46_38%,_#011a0e_52%,_#020a06_66%)]">
      <div className="max-w-[88rem] mx-auto my-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <HeroHeadline />
          <StatsBar />
          <HeroCTA />
        </div>

        {/* Right Visual */}
        <div className="mt-8 lg:mt-16">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
