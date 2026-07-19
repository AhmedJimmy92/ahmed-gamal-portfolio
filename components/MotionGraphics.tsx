"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function MotionGraphics() {
  const motionProjects = projects.filter(
  (project) => project.category === "motion-graphics"
);

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-green-400 mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-black text-white">
            Motion Graphics
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional commercial videos, cinematic edits,
            advertising campaigns and social media content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {motionProjects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{opacity:0,y:60}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:0.6,delay:index*0.15}}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <span className="bg-green-500 text-black px-4 py-1 rounded-full font-semibold text-sm">
                    Video Editing
                  </span>

                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  Premium commercial editing with cinematic color grading,
                  sound design and modern transitions.
                </p>

                <button className="rounded-full bg-green-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
                  Watch Project
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}