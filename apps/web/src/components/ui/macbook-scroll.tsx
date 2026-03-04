"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 0.3], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh]  flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.35] sm:scale-50"
    >
      <motion.h2
        style={{
          translateY: textX,
          opacity: textOpacity,
        }}
        className="text-neutral-800 dark:text-neutral-200 text-3xl font-bold mb-20 text-center"
      >
        {title || (
          <span>
            This Macbook is built with Tailwind CSS. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {/* Container for Macbook */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
        }}
        className="relative  pad  flex flex-col items-center justify-start h-[30rem] w-[60rem] bg-[#272729] border-2 border-[#1a1a1c] rounded-[48px] shadow-2xl overflow-hidden"
      >
        {/* Screen */}
        <div className="h-full w-full p-4 overflow-hidden bg-[#171717]">
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
            {showGradient && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#272729] via-transparent to-transparent z-50"></div>
            )}
            {src ? (
              <img
                src={src}
                className="object-cover object-left-top absolute inset-0 h-full w-full"
                alt="Macbook Screen"
              />
            ) : (
              <div className="h-full w-full bg-[#171717] flex items-center justify-center">
                <span className="text-white text-3xl font-bold">Aceternity</span>
              </div>
            )}
          </div>
        </div>

        {/* Keyboard and trackpad section */}
        <div className="h-full w-full bg-transparent relative z-10">
          <div className="h-full w-full bg-[#272729] p-4 flex flex-col items-center justify-start">
            {/* Keyboard */}
            <div className="w-full flex-shrink-0">
              <Keboard />
            </div>
            {/* Trackpad */}
            <div className="h-32 w-64 bg-[#1a1a1c] rounded-2xl mt-8 shadow-inner"></div>
          </div>
        </div>
      </motion.div>
      {badge && <div className="mt-20">{badge}</div>}
    </div>
  );
};

export const Keboard = () => {
  return (
    <div className="mx-auto mt-4 w-full max-w-[90%] rounded-xl bg-[#050505] p-4 shadow-2xl">
      {/* Row 1 */}
      <div className="mb-2 flex w-full justify-center gap-[2px]">
        <Key className="w-10 items-end justify-start !p-1 text-[8px]">esc</Key>
        <Key>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F1</span>
        </Key>
        <Key>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F2</span>
        </Key>
        <Key>
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F3</span>
        </Key>
        <Key>
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F4</span>
        </Key>
        <Key>
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F5</span>
        </Key>
        <Key>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F6</span>
        </Key>
        <Key>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F7</span>
        </Key>
        <Key>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F8</span>
        </Key>
        <Key>
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F9</span>
        </Key>
        <Key>
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F10</span>
        </Key>
        <Key>
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F11</span>
        </Key>
        <Key>
          <IconSpeaker className="h-[6px] w-[6px]" />
          <span className="inline-block pt-1 text-[5px]">F12</span>
        </Key>
        <Key className="w-10 items-end justify-end !p-1" children={<div className="h-1 w-1 rounded-full bg-neutral-700" />} />
      </div>

      {/* Row 2 */}
      <div className="mb-2 flex w-full justify-center gap-[2px]">
        <Key children="~" />
        <Key children="1" />
        <Key children="2" />
        <Key children="3" />
        <Key children="4" />
        <Key children="5" />
        <Key children="6" />
        <Key children="7" />
        <Key children="8" />
        <Key children="9" />
        <Key children="0" />
        <Key children="-" />
        <Key children="+" />
        <Key className="w-10 items-end justify-end !p-1 text-[8px]" children="delete" />
      </div>

      {/* Row 3 */}
      <div className="mb-2 flex w-full justify-center gap-[2px]">
        <Key className="w-10 items-end justify-start !p-1 text-[8px]" children="tab" />
        <Key children="Q" />
        <Key children="W" />
        <Key children="E" />
        <Key children="R" />
        <Key children="T" />
        <Key children="Y" />
        <Key children="U" />
        <Key children="I" />
        <Key children="O" />
        <Key children="P" />
        <Key children="[" />
        <Key children="]" />
        <Key children="\" />
      </div>

      {/* Row 4 */}
      <div className="mb-2 flex w-full justify-center gap-[2px]">
        <Key className="w-12 items-end justify-start !p-1 text-[8px]" children="caps lock" />
        <Key children="A" />
        <Key children="S" />
        <Key children="D" />
        <Key children="F" />
        <Key children="G" />
        <Key children="H" />
        <Key children="J" />
        <Key children="K" />
        <Key children="L" />
        <Key children=";" />
        <Key children="'" />
        <Key className="w-12 items-end justify-end !p-1 text-[8px]" children="return" />
      </div>

      {/* Row 5 */}
      <div className="mb-2 flex w-full justify-center gap-[2px]">
        <Key className="w-[3.6rem] items-end justify-start !p-1 text-[8px]" children="shift" />
        <Key children="Z" />
        <Key children="X" />
        <Key children="C" />
        <Key children="V" />
        <Key children="B" />
        <Key children="N" />
        <Key children="M" />
        <Key children="," />
        <Key children="." />
        <Key children="/" />
        <Key className="w-[3.6rem] items-end justify-end !p-1 text-[8px]" children="shift" />
      </div>

      {/* Row 6 */}
      <div className="flex w-full justify-center gap-[2px]">
        <Key className="items-end justify-start !p-1 text-[8px]" children="control" />
        <Key className="items-end justify-start !p-1 text-[8px]" children="option" />
        <Key className="w-10 items-end justify-start !p-1 text-[8px]" children="command" />
        <Key className="w-[12.5rem]" />
        <Key className="w-10 items-end justify-end !p-1 text-[8px]" children="command" />
        <Key className="items-end justify-end !p-1 text-[8px]" children="option" />
        <div className="flex flex-col gap-[2px]">
          <Key className="h-2 w-6 !p-0">
            <IconCaretUpFilled className="h-[6px] w-[6px]" />
          </Key>
          <div className="flex gap-[2px]">
            <Key className="h-2 w-6 !p-0">
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </Key>
            <Key className="h-2 w-6 !p-0">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </Key>
            <Key className="h-2 w-6 !p-0">
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </Key>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Key = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-[1.5px] h-6 w-7 bg-gradient-to-b from-[#2b2b2b] to-[#121212] rounded-[3px]",
        className
      )}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center rounded-[2.5px] bg-[#050505] text-[6px] text-[#dadada] shadow-[inset_0px_0.5px_1px_rgba(255,255,255,0.1)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const IconSpeaker = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
    >
      <path d="M11 5L6 9H2V15H6L11 19V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
};

export const IconCaretLeftFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
    >
      <path d="M15 6l-6 6 6 6z" />
    </svg>
  );
};

export const IconCaretDownFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
    >
      <path d="M6 9l6 6 6-6z" />
    </svg>
  );
};
