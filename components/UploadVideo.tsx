"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function UploadVideo() {
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState("reels");
  const [order, setOrder] = useState(1);

  const saveVideo = async (result: any) => {
    if (!result?.info?.secure_url) return;

    setLoading(true);

    const q = query(
      collection(db, "portfolioVideos"),
      where("category", "==", category),
      where("order", "==", order)
    );

    const snap = await getDocs(q);

    if (!snap.empty) {
      const ref = snap.docs[0].ref;

      await updateDoc(ref, {
        video: result.info.secure_url,
        thumbnail: result.info.thumbnail_url,
      });
    } else {
      await addDoc(collection(db, "portfolioVideos"), {
        title: `Video ${order}`,
        category,
        order,
        video: result.info.secure_url,
        thumbnail: result.info.thumbnail_url,
        createdAt: Date.now(),
      });
    }

    setLoading(false);

    alert("Video Saved Successfully");
  };
    return (
    <div className="flex items-center gap-4">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl bg-white/10 px-4 py-3 text-white"
      >
        <option value="reels">Reels</option>
        <option value="travel">Travel</option>
        <option value="motion-graphics">Motion Graphics</option>
        <option value="commercial-ads">Commercial Ads</option>
      </select>

      <select
        value={order}
        onChange={(e) => setOrder(Number(e.target.value))}
        className="rounded-xl bg-white/10 px-4 py-3 text-white"
      >
        <option value={1}>Video 1</option>
        <option value={2}>Video 2</option>
        <option value={3}>Video 3</option>
        <option value={4}>Video 4</option>
        <option value={5}>Video 5</option>
        <option value={6}>Video 6</option>
      </select>

      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
        options={{
          resourceType: "video",
          folder: "portfolio",
        }}
        onSuccess={(result) => saveVideo(result)}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            disabled={loading}
            className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black hover:bg-green-400 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Replace Video"}
          </button>
        )}
      </CldUploadWidget>

    </div>
  );
}