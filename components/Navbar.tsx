"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 flex w-full justify-center pt-6"
    >
      <nav className="w-[92%] max-w-7xl rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,255,128,0.08)]">

        <div className="flex items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-black tracking-wide text-white"
          >
            Ahmed <span className="text-green-400">Gamal</span>
          </a>

          <ul className="hidden items-center gap-10 text-sm font-medium text-gray-300 lg:flex">

  <li>
    <a href="#home" className="transition hover:text-green-400">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="transition hover:text-green-400">
      About
    </a>
  </li>

  <li>
    <a href="#portfolio" className="transition hover:text-green-400">
      Portfolio
    </a>
  </li>

  <li>
    <a href="#contact" className="transition hover:text-green-400">
      Contact
    </a>
  </li>

</ul>

          <a
            href="https://wa.me/201004737338"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            WhatsApp
          </a>

        </div>

      </nav>
    </motion.header>
  );
}