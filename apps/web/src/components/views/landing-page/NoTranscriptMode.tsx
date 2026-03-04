"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const NoTranscriptMode = () => {
  const [temperature, setTemperature] = useState([0.7]);
  const [genre, setGenre] = useState("witty");
  const [tone, setTone] = useState("casual");
  const [length, setLength] = useState("short");

  return (
    <section
      className="scanline-overlay relative overflow-hidden min-h-screen py-32 px-4 flex items-center justify-center flex-col text-[#f8fafc] font-sans isolate max-md:py-20 max-md:min-h-auto"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(37,99,235,0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(124,58,237,0.15) 0%, transparent 50%), linear-gradient(180deg, #0a0a0f 0%, #0f172a 50%, #1e1b4b 100%)",
      }}
    >
      <div className="max-w-[85rem] w-full mx-auto relative z-20 px-8 max-md:px-4">
        {/* Intro */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            className="inline-flex items-center bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)] text-[#60a5fa] px-4 py-1.5 rounded-full text-[0.8rem] font-semibold mb-6 backdrop-blur-xl tracking-[0.03em] uppercase"
            style={{ animation: "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite" }}
          >
            <Zap className="w-4 h-4 mr-2 text-blue-500" style={{ animation: "sparkle 2s ease-in-out infinite" }} />
            Parameter Mode
          </Badge>
          <h2 className="text-[4.5rem] font-black mb-8 leading-[1.05] tracking-[-0.03em] max-xl:text-[3.5rem] max-md:text-[2.75rem] max-sm:text-[2.25rem]" style={{ textShadow: "0 0 40px rgba(59,130,246,0.3)" }}>
            No transcript?{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradientFlow 5s ease infinite",
              }}
            >
              No problem
            </span>
          </h2>
          <p className="text-[1.375rem] text-[#94a3b8] max-w-3xl mx-auto leading-[1.7] font-normal max-xl:text-xl max-md:text-lg max-sm:text-base">
            Use our smart parameter system to generate tweets that match your
            exact style and goals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* Controls Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-[15]"
          >
            <Card className="p-8 rounded-[2rem] bg-gradient-to-br from-[rgba(15,23,42,0.7)] to-[rgba(15,23,42,0.5)] border border-white/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden backdrop-blur-[24px] backdrop-saturate-[180%] hover:border-white/[0.12] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:-translate-y-1 max-md:p-8 max-md:rounded-3xl">
              <div className="[&>div]:mb-6 [&>div:last-child]:mb-0">
                {/* Temperature */}
                <div>
                  <label className="text-[0.9rem] font-semibold mb-4 block text-[#f8fafc] tracking-[0.02em]">
                    Temperature: {temperature[0]}
                    <span className="text-[#94a3b8] ml-2 font-medium text-[0.85rem]">
                      {temperature[0] < 0.3 ? "(Safe)" : temperature[0] > 0.7 ? "(Creative)" : "(Balanced)"}
                    </span>
                  </label>
                  <Slider value={temperature} onValueChange={setTemperature} max={1} min={0} step={0.1} />
                </div>

                {/* Genre */}
                <div>
                  <label className="text-[0.9rem] font-semibold mb-4 block text-[#f8fafc] tracking-[0.02em]">Genre</label>
                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    {["Educational", "Witty", "Storytelling", "Motivational"].map((item) => (
                      <Button
                        key={item}
                        onClick={() => setGenre(item.toLowerCase())}
                        className={`relative overflow-hidden py-3 px-5 rounded-xl text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${genre === item.toLowerCase()
                          ? "bg-gradient-to-br from-[rgba(59,130,246,0.95)] to-[rgba(124,58,237,0.95)] border-[rgba(59,130,246,0.5)] text-white shadow-[0_0_30px_rgba(59,130,246,0.4),0_8px_24px_rgba(0,0,0,0.3)] -translate-y-0.5"
                          : "bg-white/[0.03] border border-white/[0.08] text-[#f8fafc] hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                          }`}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Tone */}
                <div>
                  <label className="text-[0.9rem] font-semibold mb-4 block text-[#f8fafc] tracking-[0.02em]">Tone</label>
                  <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                    {["Casual", "Professional", "Sarcastic"].map((item) => (
                      <Button
                        key={item}
                        onClick={() => setTone(item.toLowerCase())}
                        className={`relative overflow-hidden py-3 px-5 rounded-xl text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${tone === item.toLowerCase()
                          ? "bg-gradient-to-br from-[rgba(59,130,246,0.95)] to-[rgba(124,58,237,0.95)] border-[rgba(59,130,246,0.5)] text-white shadow-[0_0_30px_rgba(59,130,246,0.4),0_8px_24px_rgba(0,0,0,0.3)] -translate-y-0.5"
                          : "bg-white/[0.03] border border-white/[0.08] text-[#f8fafc] hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                          }`}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Length */}
                <div>
                  <label className="text-[0.9rem] font-semibold mb-4 block text-[#f8fafc] tracking-[0.02em]">Length</label>
                  <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                    {["Short", "Starter", "Thread"].map((item) => (
                      <Button
                        key={item}
                        onClick={() => setLength(item.toLowerCase())}
                        className={`relative overflow-hidden py-3 px-5 rounded-xl text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${length === item.toLowerCase()
                          ? "bg-gradient-to-br from-[rgba(59,130,246,0.95)] to-[rgba(124,58,237,0.95)] border-[rgba(59,130,246,0.5)] text-white shadow-[0_0_30px_rgba(59,130,246,0.4),0_8px_24px_rgba(0,0,0,0.3)] -translate-y-0.5"
                          : "bg-white/[0.03] border border-white/[0.08] text-[#f8fafc] hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                          }`}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <Button className="btn-glow w-full py-5 px-8 rounded-2xl text-lg font-bold text-white bg-gradient-to-br from-[#2563eb] to-[#7c3aed] border-none cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.4),0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center relative overflow-hidden mt-6 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_16px_48px_rgba(0,0,0,0.5)] active:-translate-y-0.5 active:scale-100 max-sm:text-base max-sm:py-4 max-sm:px-6">
                  <Sparkles className="w-[1.375rem] h-[1.375rem] mr-3" style={{ animation: "spinSlow 3s linear infinite" }} />
                  Generate Random Tweet
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Preview Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-[15]"
          >
            <Card className="conic-border relative overflow-hidden z-[1] p-8 rounded-[2rem] bg-gradient-to-br from-[rgba(15,23,42,0.7)] to-[rgba(15,23,42,0.5)] border border-white/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-[24px] backdrop-saturate-[180%] max-md:p-8 max-md:rounded-3xl">
              <Badge
                className="inline-flex bg-[rgba(6,182,212,0.15)] text-[#22d3ee] px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-[rgba(6,182,212,0.3)] tracking-[0.05em] uppercase"
                style={{ animation: "livePulse 2s ease-in-out infinite" }}
              >
                Live Preview
              </Badge>
              <div className="relative">
                <motion.div
                  className="p-4 bg-gradient-to-br from-[rgba(15,23,42,0.6)] to-[rgba(30,27,75,0.4)] rounded-2xl border border-white/[0.06] shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5"
                  key={`${genre}-${tone}-${length}-${temperature[0]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-[1.7] text-[#f8fafc] font-normal">
                    {genre === "witty" && tone === "casual"
                      ? "🤔 Hot take: Everyone's talking about AI replacing jobs, but what if it just made us better at the human stuff? Like actually connecting with people instead of drowning in busywork."
                      : "💡 The future belongs to creators who understand that AI isn't about replacement—it's about amplification. Here's how to stay ahead of the curve."}
                  </p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/[0.06] text-[0.85rem] text-[#94a3b8]">
                    <div className="[&>span]:mr-5 [&>span]:cursor-pointer [&>span]:transition-all [&>span]:duration-200 [&>span]:font-medium [&>span:hover]:text-blue-500 [&>span:hover]:-translate-y-px">
                      <span>Like</span>
                      <span>Reply</span>
                      <span>Repost</span>
                    </div>
                    <Badge className="bg-white/[0.04] border border-white/[0.08] text-[#94a3b8] px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-[0.03em]">
                      {length === "short" ? "140 chars" : length === "starter" ? "220 chars" : "Thread ready"}
                    </Badge>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Animated Blobs */}
      <div
        className="blob w-[500px] h-[500px] top-[5%] left-[-15%] opacity-30 max-md:w-[350px] max-md:h-[350px] max-md:blur-[80px] max-sm:w-[250px] max-sm:h-[250px] max-sm:blur-[60px] max-sm:opacity-20"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          animation: "floatOne 25s cubic-bezier(0.45,0.05,0.55,0.95) infinite alternate",
        }}
      />
      <div
        className="blob w-[550px] h-[550px] bottom-[-10%] right-[-15%] opacity-30 max-md:w-[350px] max-md:h-[350px] max-sm:w-[250px] max-sm:h-[250px] max-sm:opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          animation: "floatTwo 28s cubic-bezier(0.45,0.05,0.55,0.95) infinite alternate-reverse",
        }}
      />
      <div
        className="blob w-[400px] h-[400px] top-[35%] right-[15%] opacity-30 max-md:w-[350px] max-md:h-[350px] max-sm:w-[250px] max-sm:h-[250px] max-sm:opacity-20"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          animation: "floatThree 22s cubic-bezier(0.45,0.05,0.55,0.95) infinite alternate",
        }}
      />
      <div
        className="blob w-[600px] h-[600px] top-1/2 left-[-25%] opacity-30 max-md:w-[350px] max-md:h-[350px] max-sm:w-[250px] max-sm:h-[250px] max-sm:opacity-20"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animation: "floatFour 30s cubic-bezier(0.45,0.05,0.55,0.95) infinite alternate",
        }}
      />
    </section>
  );
};

export default NoTranscriptMode;
