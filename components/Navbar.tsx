"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 flex w-full justify-center pt-4"
    >
      <nav className="w-[96%] max-w-7xl rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,255,128,0.08)]">

        <div className="flex items-center justify-between">

          <ul className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-sm font-medium text-gray-300">

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
            className="rounded-full bg-green-400 px-4 py-2 text-xs sm:text-sm font-semibold text-black transition hover:scale-105"
          >
            WhatsApp
          </a>

        </div>

      </nav>
    </motion.header>
  );
}