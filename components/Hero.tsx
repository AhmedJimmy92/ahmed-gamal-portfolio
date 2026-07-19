"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32"
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

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-16 px-8 lg:flex-row">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-4 uppercase tracking-[8px] text-green-400">
            Portfolio
          </p>

          <h1 className="text-6xl font-black leading-tight text-white">
            Ahmed
            <br />
            <span className="text-green-400">Gamal</span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            Professional Video Editor & Graphic Designer creating cinematic
            visuals, social media content, commercials, motion graphics,
            AI videos and premium visual storytelling.
          </p>

          <div className="mt-10 flex gap-5">

            {/* Portfolio Button */}
            <a
              href="#portfolio"
              className="rounded-full bg-green-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              View Portfolio
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white/10"
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
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[40px] bg-green-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl">
            <Image
              src="/images/ahmed.jpg"
              alt="Ahmed Gamal"
              width={430}
              height={550}
              className="rounded-[28px] object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}