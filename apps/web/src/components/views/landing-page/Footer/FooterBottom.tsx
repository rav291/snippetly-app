import React from "react";
import { motion } from "framer-motion";

const FooterBottom = () => {
  return (
    <motion.div
      className="flex justify-between items-center py-8 pb-12 border-t border-white/[0.06] text-[0.9rem] max-md:flex-col max-md:gap-6 max-md:text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p className="text-[#a1a1aa]">
        © 2025 Snippetly. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-[#a1a1aa] no-underline transition-colors duration-200 hover:text-[#fafafa]">
          Privacy Policy
        </a>
        <span className="text-white/20">•</span>
        <a href="#" className="text-[#a1a1aa] no-underline transition-colors duration-200 hover:text-[#fafafa]">
          Terms of Service
        </a>
        <span className="text-white/20">•</span>
        <a href="#" className="text-[#a1a1aa] no-underline transition-colors duration-200 hover:text-[#fafafa]">
          Cookie Policy
        </a>
      </div>
    </motion.div>
  );
};

export default FooterBottom;
