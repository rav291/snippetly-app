import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp } from "lucide-react";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative flex items-center justify-center"
    >
      <div className="relative w-full max-w-[500px]">
        {/* Card 1 - Input */}
        <div className="bg-[rgba(15,15,20,0.8)] border border-white/10 rounded-3xl px-8 py-4 backdrop-blur-[20px] relative -rotate-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400 mb-6">
            Your content
          </div>
          <div className="p-6 bg-black/30 rounded-2xl">
            <div className="flex flex-col gap-3">
              {[95, 88, 92, 78].map((width, i) => (
                <div
                  key={i}
                  className="h-3 bg-gradient-to-r from-white/10 to-white/5 rounded-lg"
                  style={{ width: `${width}%`, animation: "shimmer 2s ease-in-out infinite" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Processing Indicator */}
        <div className="flex justify-center gap-2 py-6">
          {[0, 0.2, 0.4].map((delay, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-500 rounded-full"
              style={{ animation: `bounce 1.4s ease-in-out infinite`, animationDelay: `${delay}s` }}
            />
          ))}
        </div>

        {/* Card 2 - Output */}
        <div className="bg-[rgba(15,15,20,0.8)] border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-[20px] relative rotate-1 shadow-[0_20px_60px_rgba(16,185,129,0.2)]">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400 mb-6">
            Generated tweets
          </div>
          <div className="flex flex-col gap-4">
            {[
              { lines: [100, 85], chars: "280 chars" },
              { lines: [95, 78], chars: "265 chars" },
            ].map((tweet, i) => (
              <div
                key={i}
                className="p-5 bg-black/30 border border-emerald-500/20 rounded-2xl transition-all duration-300 hover:border-emerald-500/40 hover:translate-x-1"
              >
                <div className="flex flex-col gap-2 mb-4">
                  {tweet.lines.map((w, j) => (
                    <div
                      key={j}
                      className="h-3 bg-gradient-to-r from-emerald-500/30 to-emerald-500/10 rounded-lg"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
                <div className="text-xs text-emerald-500 font-semibold">
                  {tweet.chars}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="absolute top-[10%] right-[-5%] flex items-center gap-2 px-5 py-3 bg-[rgba(15,15,20,0.9)] border border-white/15 rounded-full text-[0.85rem] font-bold text-white backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-md:hidden"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <Zap className="w-4 h-4 text-emerald-500" />
        <span>AI-Powered</span>
      </div>
      <div
        className="absolute bottom-[15%] left-[-5%] flex items-center gap-2 px-5 py-3 bg-[rgba(15,15,20,0.9)] border border-white/15 rounded-full text-[0.85rem] font-bold text-white backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-md:hidden"
        style={{ animation: "float 3s ease-in-out infinite", animationDelay: "1.5s" }}
      >
        <TrendingUp className="w-4 h-4 text-emerald-500" />
        <span>High Engagement</span>
      </div>
    </motion.div>
  );
};

export default HeroVisual;
