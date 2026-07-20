"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./SectionTitle";

interface Props {
  category: Project["category"];
  title: string;
  highlight: string;
}

export default function ProjectGrid({
  category,
  title,
  highlight,
}: Props) {
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter(
    (project) => project.category === category
  );

  return (
    <>
      <section
        id={category === "reels" ? "portfolio" : undefined}
        className="py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title={title}
            highlight={highlight}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">

            {filtered.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/50"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black">

                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition duration-300 group-hover:opacity-100">

                    <div className="rounded-full bg-green-500 p-3">
                      <Play
                        size={20}
                        fill="black"
                        className="text-black"
                      />
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {selected && (
        <ProjectModal
          open={true}
          project={selected}
          projects={filtered}
          onClose={() => setSelected(null)}
          onChange={(project) => setSelected(project)}
        />
      )}
    </>
  );
}