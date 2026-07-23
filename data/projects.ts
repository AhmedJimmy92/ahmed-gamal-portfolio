export interface Project {
  id: number;
  order?: number;
  title: string;
  description: string;
  category:
    | "reels"
    | "travel"
    | "motion-graphics"
    | "commercial-ads"
    | "ai-videos";
  thumbnail: string;
  video: string;
  featured: boolean;
}

export const projects: Project[] = [

  // =========================
  // REELS
  // =========================

  {
    id: 1,
    title: "",
    description: "",
    category: "reels",
    thumbnail: "/images/project1.jpg",
    video: "/videos/project1.mp4",
    featured: true,
  },
  {
    id: 2,
    title: "",
    description: "",
    category: "reels",
    thumbnail: "/images/project2.jpg",
    video: "/videos/project2.mp4",
    featured: false,
  },
  {
    id: 3,
    title: "",
    description: "",
    category: "reels",
    thumbnail: "/images/project3.jpg",
    video: "/videos/project3.mp4",
    featured: false,
  },
  {
    id: 4,
    title: "",
    description: "",
    category: "reels",
    thumbnail: "/images/project4.jpg",
    video: "/videos/project4.mp4",
    featured: false,
  },
  {
    id: 5,
    title: "",
    description: "",
    category: "reels",
    thumbnail: "/images/project5.jpg",
    video: "/videos/project5.mp4",
    featured: false,
  },
  {
    id: 6,
    title: "",
    description: "",
    category: "reels",
    thumbnail: "/images/project6.jpg",
    video: "/videos/project6.mp4",
    featured: false,
  },

  // =========================
  // TRAVEL
  // =========================

  {
    id: 7,
    title: "",
    description: "",
    category: "travel",
    thumbnail: "/images/project7.jpg",
    video: "/videos/project7.mp4",
    featured: false,
  },
  {
    id: 8,
    title: "",
    description: "",
    category: "travel",
    thumbnail: "/images/project8.jpg",
    video: "/videos/project8.mp4",
    featured: false,
  },
  {
    id: 9,
    title: "",
    description: "",
    category: "travel",
    thumbnail: "/images/project9.jpg",
    video: "/videos/project9.mp4",
    featured: false,
  },
  {
    id: 10,
    title: "",
    description: "",
    category: "travel",
    thumbnail: "/images/project10.jpg",
    video: "/videos/project10.mp4",
    featured: false,
  },
  {
    id: 11,
    title: "",
    description: "",
    category: "travel",
    thumbnail: "/images/project11.jpg",
    video: "/videos/project11.mp4",
    featured: false,
  },
  {
    id: 12,
    title: "",
    description: "",
    category: "travel",
    thumbnail: "/images/project12.jpg",
    video: "/videos/project12.mp4",
    featured: false,
  },

  // =========================
  // MOTION GRAPHICS
  // =========================

  {
    id: 13,
    title: "",
    description: "",
    category: "motion-graphics",
    thumbnail: "/images/project13.jpg",
    video: "/videos/project13.mp4",
    featured: false,
  },
  {
    id: 14,
    title: "",
    description: "",
    category: "motion-graphics",
    thumbnail: "/images/project14.jpg",
    video: "/videos/project14.mp4",
    featured: false,
  },
  {
    id: 15,
    title: "",
    description: "",
    category: "motion-graphics",
    thumbnail: "/images/project15.jpg",
    video: "/videos/project15.mp4",
    featured: false,
  },
  {
    id: 16,
    title: "",
    description: "",
    category: "motion-graphics",
    thumbnail: "/images/project16.jpg",
    video: "/videos/project16.mp4",
    featured: false,
  },
  {
    id: 17,
    title: "",
    description: "",
    category: "motion-graphics",
    thumbnail: "/images/project17.jpg",
    video: "/videos/project17.mp4",
    featured: false,
  },
  {
    id: 18,
    title: "",
    description: "",
    category: "motion-graphics",
    thumbnail: "/images/project18.jpg",
    video: "/videos/project18.mp4",
    featured: false,
  },

  // =========================
  // COMMERCIAL ADS
  // =========================

  {
    id: 19,
    title: "",
    description: "",
    category: "commercial-ads",
    thumbnail: "/images/project19.jpg",
    video: "/videos/project19.mp4",
    featured: false,
  },
  {
    id: 20,
    title: "",
    description: "",
    category: "commercial-ads",
    thumbnail: "/images/project20.jpg",
    video: "/videos/project20.mp4",
    featured: false,
  },
  {
    id: 21,
    title: "",
    description: "",
    category: "commercial-ads",
    thumbnail: "/images/project21.jpg",
    video: "/videos/project21.mp4",
    featured: false,
  },
  {
    id: 22,
    title: "",
    description: "",
    category: "commercial-ads",
    thumbnail: "/images/project22.jpg",
    video: "/videos/project22.mp4",
    featured: false,
  },
  {
    id: 23,
    title: "",
    description: "",
    category: "commercial-ads",
    thumbnail: "/images/project23.jpg",
    video: "/videos/project23.mp4",
    featured: false,
  },
  {
    id: 24,
    title: "",
    description: "",
    category: "commercial-ads",
    thumbnail: "/images/project24.jpg",
    video: "/videos/project24.mp4",
    featured: false,
  },
  // ================= AI Videos =================

{
  id: 25,
  title: "",
  description: "",
  category: "ai-videos",
  thumbnail: "/images/project25.jpg",
  video: "/videos/project25.mp4",
  featured: false,
},

{
  id: 26,
  title: "",
  description: "",
  category: "ai-videos",
  thumbnail: "/images/project26.jpg",
  video: "/videos/project26.mp4",
  featured: false,
},

{
  id: 27,
  title: "",
  description: "",
  category: "ai-videos",
  thumbnail: "/images/project27.jpg",
  video: "/videos/project27.mp4",
  featured: false,
},

{
  id: 28,
  title: "",
  description: "",
  category: "ai-videos",
  thumbnail: "/images/project28.jpg",
  video: "/videos/project28.mp4",
  featured: false,
},

{
  id: 29,
  title: "",
  description: "",
  category: "ai-videos",
  thumbnail: "/images/project29.jpg",
  video: "/videos/project29.mp4",
  featured: false,
},

{
  id: 30,
  title: "",
  description: "",
  category: "ai-videos",
  thumbnail: "/images/project30.jpg",
  video: "/videos/project30.mp4",
  featured: false,
},
];