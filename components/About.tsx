import Image from "next/image";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div className="relative">
          <Image
            src="/images/ahmed.jpg"
            alt="Ahmed Gamal"
            width={550}
            height={700}
            className="rounded-3xl object-cover border border-white/10 shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>

          <p className="mb-4 uppercase tracking-[8px] text-green-400">
            About Me
          </p>

          <h2 className="mb-8 text-5xl font-black text-white">
            Ahmed Gamal
          </h2>

          <p className="text-xl leading-9 text-gray-400">
            I'm a professional <span className="text-white font-semibold">Video Editor</span>,
            <span className="text-white font-semibold"> Motion Graphics Designer</span>,
            and <span className="text-white font-semibold"> Graphic Designer</span>
            with more than <span className="text-white font-semibold">8 years of experience</span>.
            I specialize in creating cinematic commercials, social media content,
            travel films, AI videos, and premium promotional videos that help brands stand out.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-5xl font-black text-green-400">
                8+
              </h3>

              <p className="mt-3 text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-5xl font-black text-green-400">
                100+
              </h3>

              <p className="mt-3 text-gray-400">
                Completed Projects
              </p>
            </div>

          </div>

          {/* Skills */}
          <div className="mt-12 flex flex-wrap gap-4">

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400">
              Wondershare Filmora
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400">
              Premiere Pro
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400">
              After Effects
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400">
              Photoshop
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400">
              Illustrator
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400">
              AI Tools
            </span>

          </div>

          {/* Button */}
          <div className="mt-12">

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-green-400"
            >
              <Mail size={20} />
              Contact Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}