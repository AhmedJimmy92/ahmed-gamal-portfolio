"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Play } from "lucide-react";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/projects";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  order: number;
  video: string;
  thumbnail: string;
}

interface Props {
  category:
    | "reels"
    | "travel"
    | "motion-graphics"
    | "commercial-ads"
    | "ai-videos";

  title: string;
  highlight: string;
}

export default function ProjectGrid({
  category,
  title,
  highlight,
}: Props) {
  const [videos, setVideos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const loadVideos = async () => {
      const localVideos = projects
        .filter((p) => p.category === category)
        .sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));

      const q = query(
        collection(db, "portfolioVideos"),
        where("category", "==", category),
        orderBy("order", "asc")
      );

      const snap = await getDocs(q);

      const cloudVideos: any[] = [];

      snap.forEach((doc) => {
        cloudVideos.push(doc.data());
      });

      const merged = [...localVideos];

      cloudVideos.forEach((cloud) => {
        const index = merged.findIndex(
          (x) => (x.order ?? x.id) === cloud.order
        );

        if (index !== -1) {
          merged[index] = {
            ...merged[index],
            video: cloud.video,
            thumbnail: cloud.thumbnail,
          };
        }
      });

      setVideos(merged);
    };

    loadVideos();
  }, [category]);

  return (
    <>
      <section
        id={category === "reels" ? "portfolio" : undefined}
        className="py-28 px-6"
      >
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            title={title}
            highlight={highlight}
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

            {videos.map((video) => (

              <div
                key={video.id}
                onClick={() => setSelected(video)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/50"
              >

                <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black">

                  <video
  src={video.video}
  poster={video.thumbnail}
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
/>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition group-hover:opacity-100">

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
          projects={videos}
          onClose={() => setSelected(null)}
          onChange={(video) => setSelected(video)}
        />
      )}
    </>
  );
}