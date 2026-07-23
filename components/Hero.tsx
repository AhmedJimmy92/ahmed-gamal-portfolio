"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/videos/showreel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-500/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col-reverse items-center justify-center gap-10 px-5 sm:px-8 lg:flex-row lg:justify-between">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-3 uppercase tracking-[6px] text-green-400 text-xs sm:text-sm">
            Portfolio
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight text-white whitespace-nowrap">
            Ahmed <span className="text-green-400">Gamal</span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg leading-7 sm:leading-9 text-gray-300 max-w-xl">
            Professional Video Editor & Graphic Designer creating cinematic
            visuals, social media content, commercials, motion graphics,
            AI videos and premium visual storytelling.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

            <a
              href="#portfolio"
              className="rounded-full bg-green-400 px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base font-semibold text-black transition hover:scale-105"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -inset-3 rounded-[35px] bg-green-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-2 backdrop-blur-2xl">
            <Image
  src="/images/ahmed.jpg"
  alt="Ahmed Gamal"
  width={450}
  height={600}
  priority
  className="
    w-[240px]
    sm:w-[300px]
    lg:w-[420px]
    h-auto
    rounded-[24px]
    object-cover
  "
/>
          </div>
        </motion.div>

      </div>
    </section>
  );
}