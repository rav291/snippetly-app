import React from "react";
import { motion } from "framer-motion";

type DemoInputProps = {
  inputText: string;
  setInputText: (text: string) => void;
  isLoading: boolean;
  error: string | null;
  onGenerate: () => void;
  onUseDemo: () => void;
};

const DemoInput = ({
  inputText,
  setInputText,
  isLoading,
  error,
  onGenerate,
  onUseDemo,
}: DemoInputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="bg-[rgba(15,23,42,0.7)] border border-emerald-500/15 rounded-3xl p-6 backdrop-blur-[24px] relative w-3/4 transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(16,185,129,0.1)] hover:border-emerald-500/30 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(16,185,129,0.1),inset_0_1px_0_rgba(16,185,129,0.2)] max-lg:w-full max-lg:p-8 max-md:p-6 max-md:rounded-2xl max-sm:p-5"
      whileHover={{ y: -2 }}
    >
      {/* Label */}
      <motion.div
        className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-300 mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        See it work
      </motion.div>

      {/* Textarea */}
      <div className="relative">
        <motion.textarea
          className="w-full min-h-[14rem] resize-y bg-[rgba(2,6,23,0.4)] border border-emerald-500/15 rounded-2xl text-white p-6 text-base leading-[1.7] outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-[inherit] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:border-emerald-500/50 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1),inset_0_2px_4px_rgba(0,0,0,0.1),0_0_20px_rgba(16,185,129,0.1)] focus:bg-[rgba(2,6,23,0.6)] focus:-translate-y-px placeholder:text-gray-400/60 focus:placeholder:text-gray-400/40 max-md:min-h-[12rem] max-md:p-5 max-md:text-[0.95rem] max-sm:p-4 max-sm:min-h-[10rem]"
          placeholder="Paste transcript or write a paragraph..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={10}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        {!inputText && (
          <motion.div
            className="absolute left-4 bottom-3 text-[0.85rem] text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            💡 Tip: You can start with our demo to see how it works.
          </motion.div>
        )}
      </div>

      {/* Actions */}
      <motion.div
        className="flex gap-4 mt-4 justify-end max-lg:justify-center max-lg:flex-wrap max-sm:flex-col max-sm:items-stretch"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.button
          type="button"
          className="btn-sweep h-12 relative overflow-hidden px-4 rounded-[0.875rem] font-semibold text-[0.95rem] cursor-pointer border border-white/15 bg-white/[0.03] text-gray-400/90 backdrop-blur-[10px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] tracking-[0.025em] hover:text-white hover:bg-white/[0.08] hover:border-white/25 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-md:px-4 max-md:py-2.5 max-md:text-[0.9rem] max-sm:w-full max-sm:justify-center"
          onClick={onUseDemo}
          // whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Use demo text
        </motion.button>
        <motion.button
          type="button"
          className="btn-sweep h-12 relative overflow-hidden px-8 rounded-[0.875rem] font-semibold text-[0.95rem] cursor-pointer border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 to-green-500/15 text-white shadow-[0_4px_14px_0_rgba(16,185,129,0.2),inset_0_1px_0_rgba(16,185,129,0.3)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] tracking-[0.025em] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none hover:not-disabled:bg-gradient-to-br hover:not-disabled:from-emerald-500/30 hover:not-disabled:to-green-500/25 hover:not-disabled:border-emerald-500/60 hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_8px_25px_0_rgba(16,185,129,0.3),inset_0_1px_0_rgba(16,185,129,0.4)] active:not-disabled:translate-y-0 max-md:px-6 max-md:py-3.5 max-md:text-[0.9rem] max-sm:w-full max-sm:justify-center"
          onClick={onGenerate}
          disabled={isLoading || !inputText.trim()}
          // whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{ scale: isLoading ? [1, 1.05, 1] : 1 }}
          transition={{
            scale: { duration: 0.6, repeat: isLoading ? Infinity : 0 },
          }}
        >
          {isLoading ? (
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Generating...
            </motion.span>
          ) : (
            "Generate tweets"
          )}
        </motion.button>
      </motion.div>

      {error && (
        <motion.div
          className="mt-3 text-red-300 bg-red-500/[0.08] border border-red-500/25 rounded-lg px-3 py-2 text-[0.9rem]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}
    </motion.div>
  );
};

export default DemoInput;
