"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 top-0 z-50 flex w-full justify-center pt-6"
      >
        <nav className="w-[92%] max-w-7xl rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,255,128,0.08)]">

          <div className="flex items-center justify-between">

            <a
              href="#home"
              className="text-2xl font-black tracking-wide text-white"
            >
              Ahmed <span className="text-green-400">Gamal</span>
            </a>

            {/* Desktop Menu */}
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

            <div className="flex items-center gap-3">

              <a
                href="https://wa.me/201004737338"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                WhatsApp
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="text-white lg:hidden"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>

            </div>

          </div>

        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="fixed left-1/2 top-28 z-40 w-[92%] max-w-md -translate-x-1/2 rounded-3xl border border-white/10 bg-[#111]/95 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-lg text-white">

              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>

              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>

              <a href="#portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </a>

              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}