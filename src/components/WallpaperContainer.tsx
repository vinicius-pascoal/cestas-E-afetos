// components/WallpaperContainer.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const waveAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

export default function WallpaperContainer({ children }: Props) {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      {/* Conteúdo central */}
      <div className="relative z-10 items-center justify-center min-h-screen max-h-screen overflow-scroll">
        {children}
      </div>

      {/* Ondas animadas com framer-motion */}
      <svg
        className="absolute bottom-0 w-full h-1/3 z-[1]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          variants={waveAnimation}
          initial="initial"
          animate="animate"
          className="fill-[#ff6016] opacity-70"
          d="M0,160 C480,240 960,80 1440,160 L1440,320 L0,320 Z"
        />
        <motion.path
          variants={waveAnimation}
          initial="initial"
          animate="animate"
          transition={{ ...waveAnimation.animate.transition, delay: 3 }}
          className="fill-[#ff7f16] opacity-40"
          d="M0,180 C480,260 960,100 1440,180 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}
