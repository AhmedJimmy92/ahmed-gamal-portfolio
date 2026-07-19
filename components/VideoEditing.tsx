"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { projects } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectModal from "./ProjectModal";

export default function VideoEditing() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const videoProjects = projects.filter(
    (project) => project.category === "video-editing"
  );

  return (
    <>
      <section className="py-28 px-6 bg-[#050505]">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            title="Video"
            highlight="Editing"
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {videoProjects.map((project) => (

              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-green-400/40"
              >

                <div className="relative aspect-video overflow-hidden">

                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-black opacity-0 transition duration-300 group-hover:opacity-100">

                      <Play fill="black" size={24} />

                    </div>

                  </div>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {project.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          open={true}
          title={selectedProject.title}
          video={selectedProject.video}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}