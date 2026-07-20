"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24"
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

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between gap-8 px-5 sm:px-8">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[58%]"
        >
          <p className="mb-3 text-xs uppercase tracking-[6px] text-green-400 sm:text-sm sm:tracking-[8px]">
            Portfolio
          </p>

          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl">
            Ahmed
            <br />
            <span className="text-green-400">Gamal</span>
          </h1>

          <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-lg sm:leading-9">
            Professional Video Editor & Graphic Designer creating cinematic
            visuals, social media content, commercials, motion graphics,
            AI videos and premium visual storytelling.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:scale-105 sm:px-8 sm:py-4"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10 sm:px-8 sm:py-4"
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
          className="flex w-[38%] justify-end"
        >
          <div className="absolute -inset-5 rounded-[40px] bg-green-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-2 backdrop-blur-2xl">
            <Image
              src="/images/ahmed.jpg"
              alt="Ahmed Gamal"
              width={320}
              height={420}
              className="h-auto w-full rounded-[24px] object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}