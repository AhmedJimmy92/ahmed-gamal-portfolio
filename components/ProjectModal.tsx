"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoActions from "./VideoActions";

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
  open: boolean;
  onClose: () => void;
  project: VideoItem;
  projects: VideoItem[];
  onChange: (project: VideoItem) => void;
}

export default function ProjectModal({
  open,
  onClose,
  project,
  projects,
  onChange,
}: Props) {

  const currentIndex = projects.findIndex(
    (p) => p.id === project.id
  );

  const nextProject = () => {
    const next = (currentIndex + 1) % projects.length;
    onChange(projects[next]);
  };

  const prevProject = () => {
    const prev =
      (currentIndex - 1 + projects.length) %
      projects.length;

    onChange(projects[prev]);
  };
    return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: .95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .95, opacity: 0 }}
            transition={{ duration: .25 }}
            className="relative w-full max-w-5xl"
          >

            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 hover:bg-white/20"
            >
              <X className="text-white" size={22} />
            </button>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 hover:bg-green-500"
            >
              <ChevronLeft className="text-white" size={30} />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 hover:bg-green-500"
            >
              <ChevronRight className="text-white" size={30} />
            </button>

            <video
              key={project.id}
              controls
              autoPlay
              className="mx-auto max-h-[85vh] rounded-3xl"
            >
              <source src={project.video} type="video/mp4" />
            </video>

            <VideoActions projectId={Number(project.order)} />
                        <div className="mt-5 text-center">

              <h2 className="text-2xl font-bold text-white">
                {project.title || `Video ${project.order}`}
              </h2>

              <p className="mt-2 text-gray-400">
                {currentIndex + 1} / {projects.length}
              </p>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}