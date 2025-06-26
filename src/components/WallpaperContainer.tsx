"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

// Animação de deslocamento lateral contínuo
const waveVariants = (delay: number = 0) => ({
  animate: {
    x: [0, -1440],
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear",
      delay,
    },
  },
});

export default function WallpaperContainer({ children }: Props) {
  return (
    <div className="relative bg-amber-100 overflow-hidden min-h-screen">
      {/* Conteúdo principal */}
      <div className="relative z-10 items-center justify-center min-h-screen max-h-screen ">
        {children}
      </div>

      {/* SVG com duas camadas de ondas se movendo */}
      <svg
        className="absolute bottom-0 w-[2880px] h-[15vh] z-0"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        {/* Primeira onda (frente) */}
        <motion.g animate="animate" variants={waveVariants(0)}>
          <path
            d="M0,160 C480,80 960,320 1440,160 L1440,320 L0,320 Z"
            className="fill-[#ff6016] opacity-70"
          />
          <path
            d="M1440,160 C1920,80 2400,320 2880,160 L2880,320 L1440,320 Z"
            className="fill-[#ff6016] opacity-70"
          />
        </motion.g>

        {/* Segunda onda (atrás, mais clara, com delay) */}
        <motion.g animate="animate" variants={waveVariants(4)}>
          <path
            d="M0,180 C480,100 960,340 1440,180 L1440,320 L0,320 Z"
            className="fill-[#a3500b] opacity-40"
          />
          <path
            d="M1440,180 C1920,100 2400,340 2880,180 L2880,320 L1440,320 Z"
            className="fill-[#a3500b] opacity-40"
          />
        </motion.g>
      </svg>
    </div>
  );
}
