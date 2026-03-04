"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export type LoadingState = {
  text: string;
  tip?: string;
};

const LoaderCore = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  return (
    <div className="relative flex max-w-xl flex-col items-start justify-start px-4">
      {loadingStates.map((loadingState, index) => {
        const distance = Math.abs(index - value);
        const opacity = Math.max(1 - distance * 0.25, 0);

        return (
          <motion.div
            key={index}
            className={cn("flex gap-3 items-center mb-6 last:mb-0")}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: opacity,
              y: -(value * 48), // Adjusted for better vertical movement
              scale: value === index ? 1.05 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex-shrink-0">
              {index > value && (
                <CheckIcon className="text-zinc-500 dark:text-zinc-400" />
              )}
              {index <= value && (
                <CheckFilled
                  className={cn(
                    "text-zinc-400 dark:text-zinc-200",
                    value === index &&
                    "text-primary dark:text-lime-400 opacity-100 drop-shadow-[0_0_8px_rgba(132,204,22,0.4)]"
                  )}
                />
              )}
            </div>
            <span
              className={cn(
                "text-lg font-medium transition-colors duration-300",
                index < value ? "text-zinc-400 dark:text-zinc-500 line-through decoration-zinc-400/30" : "text-zinc-900 dark:text-zinc-100",
                value === index && "text-primary dark:text-lime-400 scale-105 origin-left"
              )}
            >
              {loadingState.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = false,
  showTips = false,
  currentTip = "",
  onComplete,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
  showTips?: boolean;
  currentTip?: string;
  onComplete?: () => void;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) => {
        const isLast = prevState === loadingStates.length - 1;
        const nextState = isLast
          ? (loop ? 0 : prevState)
          : prevState + 1;

        if (!loop && isLast && onComplete) {
          setTimeout(onComplete, 1000); // Trigger when final state is settled
        }

        return nextState;
      });
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background/80 backdrop-blur-2xl"
        >
          {/* Subtle animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
            <div className="absolute left-[20%] top-[40%] h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute right-[20%] bottom-[40%] h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-[120px]" />
          </div>

          <div className="relative flex w-full max-w-4xl flex-col items-center justify-center px-6">
            <div className="mb-12 flex h-80 flex-col items-center justify-center overflow-hidden">
              <LoaderCore
                value={currentState}
                loadingStates={loadingStates}
              />
            </div>

            {/* Tips section with enhanced aesthetic */}
            {showTips && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex w-full max-w-xl flex-col items-center"
              >
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-1 backdrop-blur-md transition-all hover:bg-zinc-900/60 dark:bg-black/40">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="flex flex-col items-center p-8">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mb-4 text-3xl filter drop-shadow-lg"
                    >
                      💡
                    </motion.div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentTip}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="text-center text-lg font-medium text-white/90 leading-relaxed max-w-md"
                      >
                        {currentTip}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Progress indicator with premium styling */}
            <div className="mt-12 w-full max-w-md">
              <div className="flex items-end justify-between px-1 mb-3">
                <span className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Status Progress</span>
                <span className="text-xs font-mono font-bold text-zinc-400 bg-zinc-400/10 px-2 py-0.5 rounded-full">
                  {Math.round(((currentState + 1) / loadingStates.length) * 100)}%
                </span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-800/40 backdrop-blur-sm border border-white/5">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.3)]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${((currentState + 1) / loadingStates.length) * 100
                      }%`,
                  }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                />
              </div>
              <p className="mt-3 text-center text-xs text-zinc-500/60 italic">
                Step {currentState + 1} of {loadingStates.length}
              </p>
            </div>
          </div>

          {/* Masked overlay for depth */}
          <div className="absolute inset-x-0 bottom-0 z-20 h-full bg-gradient-to-t from-black/60 to-transparent pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
