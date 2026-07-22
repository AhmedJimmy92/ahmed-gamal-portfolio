import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "./firebase";

export async function addView(videoId: number) {
  const viewedKey = `viewed_${videoId}`;

  if (localStorage.getItem(viewedKey)) return;

  const ref = doc(db, "videos", String(videoId));

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      views: 1,
      likes: 0,
    });
  } else {
    await updateDoc(ref, {
      views: increment(1),
    });
  }

  localStorage.setItem(viewedKey, "true");
}

export async function addLike(videoId: number) {
  const likeKey = `liked_${videoId}`;

  if (localStorage.getItem(likeKey)) return false;

  const ref = doc(db, "videos", String(videoId));

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      views: 0,
      likes: 1,
    });
  } else {
    await updateDoc(ref, {
      likes: increment(1),
    });
  }

  localStorage.setItem(likeKey, "true");

  return true;
}

export async function getStats(videoId: number) {
  const ref = doc(db, "videos", String(videoId));

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return {
      views: 0,
      likes: 0,
    };
  }

  return snap.data() as {
    views: number;
    likes: number;
  };
}

export function hasLiked(videoId: number) {
  return localStorage.getItem(`liked_${videoId}`) !== null;
}

export function hasViewed(videoId: number) {
  return localStorage.getItem(`viewed_${videoId}`) !== null;
}