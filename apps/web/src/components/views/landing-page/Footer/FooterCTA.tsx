import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FooterCTA = () => {
  return (
    <motion.div
      className="py-32 pb-24 text-center max-md:py-20 max-md:pb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[3.5rem] font-black leading-[1.1] tracking-[-0.04em] mb-6 text-[#fafafa] max-lg:text-5xl max-md:text-[2.5rem] max-sm:text-[2rem]">
          Ready to transform your{" "}
          <span
            className="gradient-text"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #10b981 50%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
            }}
          >
            content workflow
          </span>
          ?
        </h2>
        <p className="text-xl text-[#a1a1aa] leading-[1.7] mb-10 font-normal max-md:text-lg">
          Join thousands of creators who are already using Snippetly to
          scale their content.
        </p>
        <div className="flex gap-4 justify-center flex-wrap max-md:flex-col max-md:items-stretch">
          <Button className="btn-glow px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-500 border-none cursor-pointer shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] inline-flex items-center justify-center gap-3 relative overflow-hidden hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] max-md:w-full max-sm:px-6 max-sm:py-4 max-sm:text-base">
            <Sparkles className="w-5 h-5" />
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button className="px-10 py-5 rounded-2xl text-lg font-bold text-[#fafafa] bg-white/5 border border-white/10 cursor-pointer backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] inline-flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 max-md:w-full max-sm:px-6 max-sm:py-4 max-sm:text-base">
            Schedule Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterCTA;
