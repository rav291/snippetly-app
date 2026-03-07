"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Zap } from "lucide-react";

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <div className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{
          maxWidth: "1240px",
          width: "100%",
          borderRadius: "24px",
          paddingLeft: "24",
          paddingRight: "24",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "rgba(2, 4, 8, 0)",
        }}
        animate={{
          maxWidth: isScrolled ? "500px" : "880px",
          borderRadius: isScrolled ? "100px" : "24px",
          paddingLeft: isScrolled ? "24px" : "24px",
          paddingRight: isScrolled ? "24px" : "24px",
          paddingTop: isScrolled ? "10px" : "10px",
          paddingBottom: isScrolled ? "10px" : "10px",
          backgroundColor: isScrolled ? "rgba(2, 4, 8, 0.85)" : "rgba(2, 4, 8, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between transition-shadow duration-500",
          "backdrop-blur-[16px] border border-white/10 saturate-[180%]",
          isScrolled ? "shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)_inset,0_0_20px_rgba(0,216,255,0.1)] border-[#00D8FF]/20" : "shadow-none",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#05BD80] to-[#04BD7F] ✅ flex items-center justify-center shadow-[0_0_15px_rgba(0,216,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,216,255,0.5)] transition-all duration-300">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>
          <AnimatePresence>
            {!isScrolled && (
              <motion.span
                initial={{ opacity: 0, x: -10, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: -10, width: 0 }}
                transition={{ duration: 0.2 }}
                className="font-black tracking-tighter text-[#F8FAFC] hidden sm:inline-block overflow-hidden whitespace-nowrap"
              >
                SNIPPETLY
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 sm:gap-6">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-[#94A3B8] flex items-center px-3 py-1.5 rounded-full hover:text-[#05BD80] transition-colors duration-200 group"
                )}
              >
                <span className="text-xs font-bold uppercase tracking-[0.1em] z-10 relative">{navItem.name}</span>
                <span className="absolute inset-x-0 -bottom-[1px] w-full h-[2px] bg-gradient-to-r from-transparent via-[#05BD80] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: "auto" }}
                exit={{ opacity: 0, scale: 0.8, width: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex overflow-hidden"
              >
                <button className="bg-[#00D8FF] hover:bg-white text-black text-[10px] whitespace-nowrap font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,216,255,0.2)] hover:-translate-y-0.5 active:translate-y-0">
                  Launch
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

