"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f13] to-[#0a0a0f] text-[#fafafa] font-sans overflow-hidden isolate">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute w-full h-full pointer-events-none z-[1] top-0"
        style={{ y: y1, background: "radial-gradient(ellipse at 20% 30%, rgba(99,102,241,0.15) 0%, transparent 50%)" }}
      />
      <motion.div
        className="absolute w-full h-full pointer-events-none z-[1] top-[10%]"
        style={{ y: y2, background: "radial-gradient(ellipse at 80% 60%, rgba(168,85,247,0.12) 0%, transparent 50%)" }}
      />
      <motion.div
        className="absolute w-full h-full pointer-events-none z-[1] top-[20%]"
        style={{ y: y3, background: "radial-gradient(ellipse at 40% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)" }}
      />

      {/* Mouse follower gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.08), transparent 40%)`,
        }}
      />

      <div className="max-w-[85rem] w-full mx-auto px-6 relative z-10">
        <FooterCTA />
        <FooterLinks />
        <FooterBottom />
      </div>

      {/* Animated blobs */}
      <div
        className="blob w-[600px] h-[600px] bottom-[-20%] left-[-15%]"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          animation: "blobFloat1 30s ease-in-out infinite",
        }}
      />
      <div
        className="blob w-[550px] h-[550px] top-[20%] right-[-15%]"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          animation: "blobFloat2 35s ease-in-out infinite reverse",
        }}
      />
    </footer>
  );
};

export default Footer;
