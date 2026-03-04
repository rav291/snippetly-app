import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Zap } from "lucide-react";

const StatsBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center gap-8 p-8 bg-white/[0.03] border border-white/[0.08] rounded-[1.25rem] backdrop-blur-[20px] max-md:flex-col max-md:gap-6 max-md:items-start max-md:p-6"
    >
      <div className="flex items-center gap-4">
        <Clock className="w-8 h-8 text-emerald-500 shrink-0" />
        <div>
          <div className="text-2xl font-black text-white leading-none mb-1">
            3 hours
          </div>
          <div className="text-[0.8rem] text-gray-400 font-medium">
            saved per week
          </div>
        </div>
      </div>

      <div className="w-px h-12 bg-white/10 max-md:hidden" />

      <div className="flex items-center gap-4">
        <TrendingUp className="w-8 h-8 text-emerald-500 shrink-0" />
        <div>
          <div className="text-2xl font-black text-white leading-none mb-1">
            10M+
          </div>
          <div className="text-[0.8rem] text-gray-400 font-medium">
            tweets generated
          </div>
        </div>
      </div>

      <div className="w-px h-12 bg-white/10 max-md:hidden" />

      <div className="flex items-center gap-4">
        <Zap className="w-8 h-8 text-emerald-500 shrink-0" />
        <div>
          <div className="text-2xl font-black text-white leading-none mb-1">
            50K+
          </div>
          <div className="text-[0.8rem] text-gray-400 font-medium">
            active creators
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsBar;
