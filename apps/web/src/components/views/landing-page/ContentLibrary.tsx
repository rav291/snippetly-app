"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, Star, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ContentLibrary = () => {
  const projects = [
    { name: "YouTube Series #12", tweets: 45 },
    { name: "Newsletter Campaign", tweets: 28 },
    { name: "Product Launch", tweets: 67 },
    { name: "Personal Brand", tweets: 124 },
  ];

  const favorites = [
    { text: "The counter-intuitive secret nobody talks about when...", starred: true },
    { text: "I increased traffic by 400% in 3 months. Here's what...", starred: true },
    { text: "Why most creators fail at consistency (and how to...", starred: true },
  ];

  const insights = [
    { label: "Analyzing your writing patterns...", progress: 75, color: "#00d4ff" },
    { label: "Peak posting", progress: 90, color: "#7b61ff" },
    { label: "Voice identity", progress: 65, color: "#ff3366" },
  ];

  return (
    <section
      className="relative min-h-screen py-32 px-6 text-[#e8eef7] font-sans overflow-hidden isolate max-md:py-20 max-md:px-4"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(255,51,102,0.12) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(0,212,255,0.08) 0%, transparent 50%), linear-gradient(180deg, #0a0e1a 0%, #060911 50%, #0d1222 100%)",
      }}
    >
      <div className="max-w-[85rem] w-full mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="inline-flex items-center gap-2 bg-[rgba(123,97,255,0.08)] border border-[rgba(123,97,255,0.25)] text-[#7b61ff] px-5 py-2 rounded-full text-[0.8rem] font-bold tracking-[0.08em] uppercase mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(123,97,255,0.15)]">
            <FolderOpen className="w-4 h-4" style={{ animation: "glow 2s ease-in-out infinite" }} />
            Organization
          </Badge>
          <h2 className="text-[4rem] font-black leading-[1.1] tracking-[-0.04em] mb-6 text-[#e8eef7] max-lg:text-5xl max-md:text-[2.5rem]">
            Build your{" "}
            <span
              className="gradient-text"
              style={{
                background: "linear-gradient(120deg, #7b61ff 0%, #ff3366 50%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
              }}
            >
              content library
            </span>
          </h2>
          <p className="text-xl text-[#8b95a8] max-w-[42rem] mx-auto leading-[1.7] font-normal max-md:text-lg">
            Save tweets, create projects, and let AI learn your style for better
            future generations.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 mb-12 max-lg:grid-cols-1">
          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Card className="glass-card p-8 border-[rgba(123,97,255,0.12)] hover:border-[rgba(123,97,255,0.25)] max-md:p-6">
              <div className="flex items-center gap-3 mb-8 pb-5 border-b border-white/5">
                <FolderOpen className="w-6 h-6 text-[#7b61ff]" style={{ filter: "drop-shadow(0 0 8px rgba(123,97,255,0.4))" }} />
                <h3 className="text-xl font-bold text-[#e8eef7] tracking-[-0.02em]">My Projects</h3>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-black/20 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:bg-black/30 hover:border-[rgba(0,212,255,0.2)] hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[rgba(0,212,255,0.2)] to-[rgba(123,97,255,0.2)] border border-[rgba(0,212,255,0.3)] rounded-lg shrink-0" />
                      <span className="text-[0.95rem] font-semibold text-[#e8eef7]">{project.name}</span>
                    </div>
                    <Badge className="bg-[rgba(123,97,255,0.12)] border border-[rgba(123,97,255,0.25)] text-[#7b61ff] px-3 py-1 rounded-full text-[0.8rem] font-semibold">
                      {project.tweets} tweets
                    </Badge>
                  </div>
                ))}
              </div>

              <Button className="btn-glow w-full py-4 px-6 bg-gradient-to-br from-[rgba(0,212,255,0.15)] to-[rgba(123,97,255,0.15)] border border-[rgba(0,212,255,0.3)] rounded-[0.875rem] text-[#00d4ff] text-[0.95rem] font-bold cursor-pointer flex items-center justify-center gap-2 hover:from-[rgba(0,212,255,0.25)] hover:to-[rgba(123,97,255,0.25)] hover:border-[rgba(0,212,255,0.5)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,212,255,0.2)]">
                <Zap className="w-[1.125rem] h-[1.125rem]" />
                All teams your style
              </Button>
            </Card>
          </motion.div>

          {/* Favorites Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Card className="glass-card p-8 border-[rgba(123,97,255,0.12)] hover:border-[rgba(123,97,255,0.25)] max-md:p-6">
              <div className="flex items-center gap-3 mb-8 pb-5 border-b border-white/5">
                <Star className="w-6 h-6 text-[#7b61ff]" style={{ filter: "drop-shadow(0 0 8px rgba(123,97,255,0.4))" }} />
                <h3 className="text-xl font-bold text-[#e8eef7] tracking-[-0.02em]">Favorites</h3>
              </div>

              <div className="flex flex-col gap-5">
                {favorites.map((fav, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 bg-[rgba(255,51,102,0.05)] border border-[rgba(255,51,102,0.15)] rounded-xl transition-all duration-300 cursor-pointer hover:bg-[rgba(255,51,102,0.08)] hover:border-[rgba(255,51,102,0.25)] hover:scale-[1.02]"
                  >
                    <Star
                      className="w-[1.125rem] h-[1.125rem] text-[#ff3366] fill-[#ff3366] shrink-0 mt-[0.2rem]"
                      style={{ filter: "drop-shadow(0 0 6px rgba(255,51,102,0.5))" }}
                    />
                    <p className="text-[0.95rem] leading-[1.6] text-[#e8eef7] font-medium">{fav.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Contextual Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="glass-card max-w-[50rem] mx-auto text-center p-12 border-[rgba(0,212,255,0.2)] max-md:p-8">
            <Badge className="inline-flex items-center gap-2 bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(123,97,255,0.1)] border border-[rgba(123,97,255,0.3)] text-[#7b61ff] px-5 py-2 rounded-full text-[0.8rem] font-bold tracking-[0.08em] uppercase mb-6">
              <Lightbulb className="w-4 h-4" style={{ animation: "glow 2s ease-in-out infinite" }} />
              AI learns your style
            </Badge>
            <h3 className="text-[2rem] font-extrabold text-[#e8eef7] mb-4 tracking-[-0.03em] max-md:text-[1.75rem]">
              Contextual Intelligence
            </h3>
            <p className="text-lg text-[#8b95a8] leading-[1.7] mb-10 max-w-[40rem] mx-auto">
              The more you save and favorite, the better our AI understands your
              voice, tone, and what resonates with your audience.
            </p>

            <div className="flex flex-col gap-6 text-left">
              {insights.map((insight, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[0.9rem] font-semibold text-[#e8eef7]">{insight.label}</span>
                    <span className="text-[0.9rem] font-bold text-[#00d4ff]">{insight.progress}%</span>
                  </div>
                  <div className="h-3 bg-black/40 border border-white/[0.08] rounded-full overflow-hidden relative">
                    <motion.div
                      className="progress-shimmer h-full rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${insight.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      style={{ backgroundColor: insight.color, boxShadow: `0 0 20px ${insight.color}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Blobs */}
      <div
        className="blob w-[550px] h-[550px] top-[10%] left-[-10%]"
        style={{
          background: "radial-gradient(circle, #7b61ff 0%, transparent 70%)",
          animation: "drift1 28s ease-in-out infinite",
        }}
      />
      <div
        className="blob w-[450px] h-[450px] bottom-[20%] right-[-5%]"
        style={{
          background: "radial-gradient(circle, #ff3366 0%, transparent 70%)",
          animation: "drift2 32s ease-in-out infinite reverse",
        }}
      />
      <div
        className="blob w-[500px] h-[500px] top-1/2 left-1/2"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          animation: "drift3 25s ease-in-out infinite",
        }}
      />
    </section>
  );
};

export default ContentLibrary;
