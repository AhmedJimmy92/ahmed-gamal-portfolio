import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVSKBoFRZHRYXBDlNsuvu5r24tbCS4nK8",
  authDomain: "ahmed-gamal-portfolio-fe07a.firebaseapp.com",
  projectId: "ahmed-gamal-portfolio-fe07a",
  storageBucket: "ahmed-gamal-portfolio-fe07a.firebasestorage.app",
  messagingSenderId: "749245085072",
  appId: "1:749245085072:web:0ae6912e2320fac0fb6f15",
  measurementId: "G-X44LWDJ2L2",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      getAnalytics(app);
    }
  });
}