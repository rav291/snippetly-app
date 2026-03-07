import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroCTA = () => {
  const handleGenerate = () => {
    console.log("Generate clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex gap-6 mt-2 max-md:flex-col"
    >
      <button
        onClick={handleGenerate}
        className="btn-glow px-4 py-2 bg-emerald-500 text-black border-none rounded-lg text-md font-bold inline-flex items-center justify-center gap-3 w-fit cursor-pointer shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(16,185,129,0.7)] max-md:w-full"
      >
        <span className="text-white">Start free, no card required</span>
        <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <div className="flex items-center gap-4">
        <div className="flex ml-2">
          {[
            "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            "linear-gradient(135deg, #10b981, #06b6d4)",
            "linear-gradient(135deg, #f59e0b, #ef4444)",
            "linear-gradient(135deg, #ec4899, #8b5cf6)",
          ].map((bg, i) => (
            <div
              key={i}
              className="avatar-shine w-10 h-10 rounded-full -ml-3 first:ml-0 relative transition-all duration-250 hover:-translate-y-0.5 hover:scale-[1.06] hover:shadow-[0_6px_14px_rgba(0,0,0,0.15)]"
              style={{ background: bg }}
            />
          ))}
        </div>
        <span className="text-[0.95rem] text-gray-400 font-semibold">
          Join 50,000+ creators
        </span>
      </div>
    </motion.div>
  );
};

export default HeroCTA;
