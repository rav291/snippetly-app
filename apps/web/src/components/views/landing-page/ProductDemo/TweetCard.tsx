import React from "react";
import { motion } from "framer-motion";

type TweetCardProps = {
  tweet: { id: number; content: string; chars: number };
  index: number;
  copiedIndex: number | null;
  onCopy: (content: string, index: number) => void;
};

const TweetCard = ({ tweet, index, copiedIndex, onCopy }: TweetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="card-topline relative flex-[0_0_calc((100%-3rem)/1.5)] min-w-[600px] max-w-[700px] bg-[rgba(15,23,42,0.85)] border border-emerald-500/15 rounded-3xl p-10 backdrop-blur-[24px] transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(16,185,129,0.1)] scroll-snap-start flex flex-col hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2),0_8px_16px_-4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(16,185,129,0.15),inset_0_1px_0_rgba(16,185,129,0.2)] max-lg:min-w-[400px] max-lg:max-w-[480px] max-lg:p-8 max-md:min-w-[320px] max-md:max-w-[380px] max-md:p-6 max-md:rounded-2xl max-sm:min-w-[280px] max-sm:max-w-[340px] max-sm:p-5 tweetCard"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Tweet Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/10">
        <svg className="w-6 h-6 text-emerald-500/80 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="text-xs font-semibold text-emerald-500/90 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 uppercase tracking-[0.05em]">
          Tweet
        </span>
      </div>

      {/* Tweet Text */}
      <motion.p
        className="text-base leading-[1.7] text-white/95 mb-6 font-normal flex-grow max-md:text-[0.95rem] max-md:mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 * index + 0.3 }}
      >
        {tweet.content}
      </motion.p>

      {/* Tweet Footer */}
      <div className="flex justify-between items-center mt-auto">
        <motion.div
          className="text-[0.85rem] text-gray-500/80 font-medium bg-gray-500/10 px-3.5 py-1.5 rounded-lg border border-gray-500/15 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 * index + 0.4 }}
        >
          {tweet.chars} characters
        </motion.div>
        <motion.button
          className="btn-sweep relative overflow-hidden px-6 py-3 bg-emerald-500/[0.08] border border-emerald-500/20 rounded-xl text-emerald-500/90 text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-2 hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:text-white hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(16,185,129,0.2)] active:translate-y-0 active:scale-[0.98] max-md:px-5 max-md:py-2.5 max-md:text-[0.85rem]"
          onClick={() => onCopy(tweet.content, index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 * index + 0.5 }}
        >
          {copiedIndex === index ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.6667 2H13.3333C14.2538 2 15 2.74619 15 3.66667V13.3333C15 14.2538 14.2538 15 13.3333 15H3.66667C2.74619 15 2 14.2538 2 13.3333V3.66667C2 2.74619 2.74619 2 3.66667 2H6.33333M10.6667 2C10.6667 1.44772 10.219 1 9.66667 1H6.33333C5.78105 1 5.33333 1.44772 5.33333 2M10.6667 2C10.6667 2.55228 10.219 3 9.66667 3H6.33333C5.78105 3 5.33333 2.55228 5.33333 2M5.33333 2H2.66667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
              </svg>
              Copy
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TweetCard;
