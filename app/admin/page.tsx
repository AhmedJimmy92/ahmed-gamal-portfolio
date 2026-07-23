"use client";
import { writeBatch } from "firebase/firestore";
import { useEffect, useState } from "react";
import UploadVideo from "@/components/UploadVideo";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface VideoData {
  id: string;
  category: string;
  order: number;
  views: number;
  likes: number;
}

export default function AdminPage() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin-login") === "true") {
      setLogged(true);
      loadVideos();
    }
  }, []);

  const loadVideos = async () => {
    const snap = await getDocs(collection(db, "portfolioVideos"));

    const arr: VideoData[] = [];

    snap.forEach((item) => {
      const d: any = item.data();

      arr.push({
        id: item.id,
        category: d.category,
        order: d.order,
        views: d.views || 0,
        likes: d.likes || 0,
      });
    });

    arr.sort((a, b) => {
      if (a.category === b.category) return a.order - b.order;
      return a.category.localeCompare(b.category);
    });

    setVideos(arr);
  };

  const resetViews = async (id: string) => {
    await updateDoc(doc(db, "portfolioVideos", id), {
      views: 0,
    });

    loadVideos();
  };

  const resetLikes = async (id: string) => {
    await updateDoc(doc(db, "portfolioVideos", id), {
      likes: 0,
    });

    loadVideos();
  };

  const deleteVideo = async (id: string) => {
    if (!confirm("Delete this video?")) return;

    await deleteDoc(doc(db, "portfolioVideos", id));

    loadVideos();
  };

  if (!logged) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505]">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">

          <h1 className="mb-6 text-center text-3xl font-black text-white">
            Admin Login
          </h1>

          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="mb-5 w-full rounded-xl bg-black/30 p-4 text-white"
          />

          <button
            onClick={()=>{
              if(password==="Ahmed2026"){
                sessionStorage.setItem("admin-login","true");
                setLogged(true);
                loadVideos();
              }
            }}
            className="w-full rounded-xl bg-green-500 py-4 font-bold text-black"
          >
            Login
          </button>

        </div>
      </main>
    );
  }
const optimizeAllVideos = async () => {
  const snap = await getDocs(collection(db, "portfolioVideos"));

  const batch = writeBatch(db);

  snap.forEach((item) => {
    const data: any = item.data();

    if (data.video.includes("/upload/f_auto")) return;

    const optimized = data.video.replace(
      "/upload/",
      "/upload/f_auto,q_auto:good,vc_auto/"
    );

    batch.update(item.ref, {
      video: optimized,
    });
  });

  await batch.commit();

  alert("All Videos Optimized ✅");
};
  return (
    <main className="min-h-screen bg-[#050505] p-10 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-4xl font-black">
            Portfolio Dashboard
          </h1>
<button
  onClick={optimizeAllVideos}
  className="mr-4 rounded-xl bg-blue-600 px-6 py-3 font-bold"
>
  Optimize Videos
</button>
          <UploadVideo />

        </div>

        <table className="w-full overflow-hidden rounded-3xl border border-white/10">

          <thead className="bg-white/10">

            <tr>

              <th className="p-5 text-left">Category</th>

              <th>Video</th>

              <th>Views</th>

              <th>Likes</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>
                      {videos.map((video) => (

            <tr
              key={video.id}
              className="border-t border-white/10"
            >

              <td className="p-5 font-bold">
                {video.category}
              </td>

              <td className="text-center">
                {video.order}
              </td>

              <td className="text-center text-green-400 font-bold">
                {video.views}
              </td>

              <td className="text-center text-red-400 font-bold">
                {video.likes}
              </td>

              <td className="p-5">

                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => resetViews(video.id)}
                    className="rounded-xl bg-yellow-500 px-4 py-2 font-bold text-black"
                  >
                    Reset Views
                  </button>

                  <button
                    onClick={() => resetLikes(video.id)}
                    className="rounded-xl bg-red-500 px-4 py-2 font-bold"
                  >
                    Reset Likes
                  </button>

                  <button
                    onClick={() => deleteVideo(video.id)}
                    className="rounded-xl bg-red-700 px-4 py-2 font-bold"
                  >
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}