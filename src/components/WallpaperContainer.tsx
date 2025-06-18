"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const waveVariants = {
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
    <div className="relative bg-white overflow-scroll min-h-screen">
      {/* Conteúdo principal */}
      <div className="relative z-10 items-center justify-center min-h-screen max-h-screen overflow-scroll ">
        {children}
      </div>

      {/* Ondas animadas com framer-motion */}
      <svg
        className="absolute bottom-0 w-full h-1/3 z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,160 C480,240 960,80 1440,160 L1440,320 L0,320 Z"
          className="fill-[#ff6016] opacity-70"
          animate="animate"
          variants={waveVariants}
        />
        <motion.path
          d="M0,180 C480,260 960,100 1440,180 L1440,320 L0,320 Z"
          className="fill-[#ff7f16] opacity-40"
          animate="animate"
          variants={waveVariants}
          transition={{ ...waveVariants.animate.transition, delay: 3 }}
        />
      </svg>
    </div>
  );
}
