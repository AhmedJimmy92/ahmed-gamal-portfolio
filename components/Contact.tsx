"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `Hello Ahmed,

Name: ${name}

Email: ${email}

Message:
${message}`;

    const url = `https://wa.me/201004737338?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-green-400 mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-black text-white">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-6">
            Have a project? Let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=A.gamalfarahat92@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-green-400 hover:bg-white/10"
            >
              <div className="text-3xl">📧</div>

              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">
                  A.gamalfarahat92@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="https://wa.me/201004737338"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-green-400 hover:bg-white/10"
            >
              <div className="text-3xl">📞</div>

              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +20 100 473 7338
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-green-400 hover:bg-white/10"
            >
              <div className="text-3xl">📍</div>

              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">
                  Egypt
                </p>
              </div>
            </a>

          </div>

          {/* Contact Form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsApp();
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-green-400"
            />

            <textarea
              rows={6}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-green-400"
            />

            <button
              type="submit"
              className="rounded-full bg-green-500 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}