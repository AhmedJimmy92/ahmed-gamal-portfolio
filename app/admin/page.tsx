"use client";
import { useRouter } from "next/navigation";
import UploadVideo from "@/components/UploadVideo";
import { useEffect, useState } from "react";
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
  views: number;
  likes: number;
  category?: string;
  order?: number;
}

export default function AdminPage() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const router = useRouter();

const [password, setPassword] = useState("");
const [logged, setLogged] = useState(false);

  const loadVideos = async () => {
    const snap = await getDocs(collection(db, "videos"));

    const data: VideoData[] = [];

    snap.forEach((item) => {
      const d = item.data();

data.push({
  id: item.id,
  views: d.views || 0,
  likes: d.likes || 0,
  category: d.category || "",
  order: d.order || Number(item.id),
});
    });

    data.sort((a, b) => Number(a.id) - Number(b.id));

    setVideos(data);
  };

  useEffect(() => {
    loadVideos();
  }, []);
  useEffect(() => {
  if (sessionStorage.getItem("admin-login") === "true") {
    setLogged(true);
  }
}, []);

  const resetLikes = async (id: string) => {
    await updateDoc(doc(db, "videos", id), {
      likes: 0,
    });

    loadVideos();
  };

  const resetViews = async (id: string) => {
    await updateDoc(doc(db, "videos", id), {
      views: 0,
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
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="mb-8 text-center text-3xl font-black text-white">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none focus:border-green-400"
        />

        <button
          onClick={() => {
            if (password === "Ahmed2026") {
              sessionStorage.setItem("admin-login", "true");
              setLogged(true);
            } else {
              alert("Wrong Password");
            }
          }}
          className="w-full rounded-xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400"
        >
          Login
        </button>

      </div>
    </main>
  );
}

return (
    <main className="min-h-screen bg-[#050505] p-10 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-4xl font-black">
  Portfolio Dashboard
</h1>

<div className="mb-8 flex justify-end">
  <UploadVideo />
</div>

        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-white/10">

              <tr>

                <th className="p-5 text-left">
                  Video
                </th>

                <th className="p-5">
                  Views
                </th>

                <th className="p-5">
                  Likes
                </th>

                <th className="p-5">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {videos.map((video) => (

                <tr
                  key={video.id}
                  className="border-t border-white/10"
                >

                  <td className="p-5">
                    <div className="font-bold">
  {video.category || "Reels"}
</div>

<div className="text-sm text-gray-400">
  Video {video.order || video.id}
</div>
                  </td>

                  <td className="p-5 text-center font-bold text-green-400">
                    {video.views}
                  </td>

                  <td className="p-5 text-center font-bold text-red-400">
                    {video.likes}
                  </td>

                  <td className="p-5">

                    <div className="flex flex-wrap justify-center gap-2">

                      <button
                        onClick={() => resetViews(video.id)}
                        className="rounded-xl bg-yellow-500 px-4 py-2 font-semibold text-black"
                      >
                        Reset Views
                      </button>

                      <button
                        onClick={() => resetLikes(video.id)}
                        className="rounded-xl bg-red-500 px-4 py-2 font-semibold"
                      >
                        Reset Likes
                        <button
  onClick={() => deleteVideo(video.id)}
  className="rounded-xl bg-red-700 px-4 py-2 font-semibold hover:bg-red-600"
>
  Delete
</button>
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}