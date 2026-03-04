"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, Send } from "lucide-react";
import { motion } from "framer-motion";

const WorkflowSection = () => {
  interface WorkflowItem {
    text: string;
    status?: string;
    time?: string;
    stats?: string;
  }

  interface Workflow {
    icon: any;
    title: string;
    count: number;
    items: WorkflowItem[];
  }

  const workflows: Workflow[] = [
    {
      icon: Sparkles,
      title: "Generated",
      count: 3,
      items: [
        { text: "Just discovered this game-changing productivity hack...", status: "Draft" },
        { text: "Here's what nobody tells you about AI tools:", status: "Draft" },
        { text: "Why simple tech stacks are 10x better this week:", status: "Draft" },
      ],
    },
    {
      icon: Calendar,
      title: "Scheduled",
      count: 2,
      items: [
        { text: "Content written to build your web biz...", time: "2:45 PM" },
        { text: "The biggest tech startup myths you need...", time: "4:30 PM" },
      ],
    },
    {
      icon: Send,
      title: "Posted",
      count: 1,
      items: [{ text: "Why automated AI-powered workflows...", stats: "2.3k views" }],
    },
  ];

  return (
    <section
      className="scanline-overlay relative min-h-screen py-32 px-6 text-[#e8eef7] font-sans overflow-hidden isolate max-md:py-20 max-md:px-4"
      style={{
        background:
          "radial-gradient(ellipse at top left, rgba(123,97,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(0,212,255,0.1) 0%, transparent 50%), linear-gradient(180deg, #060911 0%, #0a0e1a 50%, #0d1222 100%)",
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
          <Badge className="inline-flex items-center gap-2 bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.25)] text-[#00d4ff] px-5 py-2 rounded-full text-[0.8rem] font-bold tracking-[0.08em] uppercase mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(0,212,255,0.15)]">
            <Sparkles className="w-4 h-4" style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
            Workflow System
          </Badge>
          <h2 className="text-[4rem] font-black leading-[1.1] tracking-[-0.04em] mb-6 text-[#e8eef7] max-lg:text-5xl max-md:text-[2.5rem]">
            More than just generation
            <br />
            <span
              className="gradient-text"
              style={{
                background: "linear-gradient(120deg, #00d4ff 0%, #7b61ff 50%, #ff3366 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
              }}
            >
              it&apos;s a complete workflow
            </span>
          </h2>
          <p className="text-xl text-[#8b95a8] max-w-[42rem] mx-auto leading-[1.7] font-normal max-md:text-lg">
            This is what makes Slippidly different. Organize, refine, and schedule your
            content like a pro.
          </p>
        </motion.div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 relative z-10 max-lg:grid-cols-1">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <motion.div
                key={workflow.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="wf-card-topline glass-card relative overflow-hidden p-8 border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.3)] hover:-translate-y-2 hover:shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5),0_0_40px_rgba(0,212,255,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] max-md:p-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-8 pb-5 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[#00d4ff]" style={{ filter: "drop-shadow(0 0 8px rgba(0,212,255,0.4))" }} />
                      <h3 className="text-xl font-bold text-[#e8eef7] tracking-[-0.02em]">
                        {workflow.title}
                      </h3>
                    </div>
                    <Badge className="bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff] px-3 py-1 rounded-full text-[0.85rem] font-bold min-w-[2rem] text-center">
                      {workflow.count}
                    </Badge>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-5">
                    {workflow.items.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div
                          className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                          style={{ animation: "bulletPulse 2s ease-in-out infinite" }}
                        />
                        <div className="flex-1">
                          <p className="text-[0.95rem] leading-[1.6] text-[#e8eef7] mb-2 font-medium">
                            {item.text}
                          </p>
                          <div className="flex items-center gap-3 text-[0.8rem] text-[#8b95a8]">
                            {item.status && (
                              <span className="bg-[rgba(123,97,255,0.15)] border border-[rgba(123,97,255,0.3)] text-[#7b61ff] px-2.5 py-0.5 rounded-md font-semibold">
                                {item.status}
                              </span>
                            )}
                            {item.time && <span className="font-medium">{item.time}</span>}
                            {item.stats && <span className="font-medium">{item.stats}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Generate More button (first card only) */}
                  {index === 0 && (
                    <button className="btn-sweep relative overflow-hidden w-full mt-6 py-3.5 px-6 bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] rounded-xl text-[#00d4ff] text-[0.9rem] font-bold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(0,212,255,0.15)] hover:border-[rgba(0,212,255,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.2)]">
                      + Generate More
                    </button>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Blobs */}
      <div
        className="blob w-[600px] h-[600px] top-[-10%] left-[-15%] opacity-25"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          animation: "wfFloat1 30s ease-in-out infinite",
        }}
      />
      <div
        className="blob w-[500px] h-[500px] bottom-[-10%] right-[-15%] opacity-25"
        style={{
          background: "radial-gradient(circle, #7b61ff 0%, transparent 70%)",
          animation: "wfFloat2 25s ease-in-out infinite reverse",
        }}
      />
    </section>
  );
};

export default WorkflowSection;