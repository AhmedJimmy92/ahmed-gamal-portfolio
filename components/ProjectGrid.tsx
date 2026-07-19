"use client";

import { useState } from "react";
import Image from "next/image";
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
        className="py-28 px-6"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={title} highlight={highlight} />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/50"
              >
                {project.category === "social-media" ? (
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[9/16] overflow-hidden bg-black">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition group-hover:opacity-100">
                      <div className="rounded-full bg-green-500 p-4">
                        <Play fill="black" className="text-black" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected &&
        (selected.category === "social-media" ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
            onClick={() => setSelected(null)}
          >
            <Image
              src={selected.thumbnail}
              alt={selected.title}
              width={1400}
              height={1400}
              className="max-h-[90vh] w-auto rounded-2xl"
            />
          </div>
        ) : (
          <ProjectModal
            open={true}
            project={selected}
            projects={filtered}
            onClose={() => setSelected(null)}
            onChange={(project) => setSelected(project)}
          />
        ))}
    </>
  );
}