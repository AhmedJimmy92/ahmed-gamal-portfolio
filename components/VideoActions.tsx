"use client";

import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Eye, Heart } from "lucide-react";

interface Props {
  projectId: number;
}

export default function VideoActions({ projectId }: Props) {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const load = async () => {
      const ref = doc(db, "videos", String(projectId));
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          views: 1,
          likes: 0,
        });

        setViews(1);
        setLikes(0);
      } else {
        if (!sessionStorage.getItem("viewed-" + projectId)) {
          await updateDoc(ref, {
            views: increment(1),
          });

          sessionStorage.setItem(
            "viewed-" + projectId,
            "true"
          );
        }

        const newSnap = await getDoc(ref);
        const data = newSnap.data();

        setViews(data?.views || 0);
        setLikes(data?.likes || 0);
      }

      if (localStorage.getItem("liked-" + projectId) === "true") {
        setLiked(true);
      }
    };

    load();
  }, [projectId]);

  const likeVideo = async () => {
    if (liked) return;

    const ref = doc(db, "videos", String(projectId));

    await updateDoc(ref, {
      likes: increment(1),
    });

    setLikes((prev) => prev + 1);
    setLiked(true);

    localStorage.setItem("liked-" + projectId, "true");
  };

  return (
    <div className="mt-5 flex items-center justify-center gap-4">

      <button
        onClick={likeVideo}
        className={`flex items-center gap-2 rounded-full px-5 py-3 transition ${
          liked
            ? "bg-red-500 text-white"
            : "bg-white/10 text-white hover:bg-red-500"
        }`}
      >
        <Heart
          size={20}
          fill={liked ? "white" : "none"}
        />
      </button>

      <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white">
        <Eye size={20} />
      </div>

    </div>
  );
}