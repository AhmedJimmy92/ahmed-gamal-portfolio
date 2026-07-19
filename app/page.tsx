import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <FeaturedProject />

<ProjectGrid
  category="reels"
  title="Reels"
  highlight="Videos"
/>

<ProjectGrid
  category="travel"
  title="Travel"
  highlight="Films"
/>

<ProjectGrid
  category="motion-graphics"
  title="Motion"
  highlight="Graphics"
/>

<ProjectGrid
  category="ai-videos"
  title="AI"
  highlight="Videos"
/>

<ProjectGrid
  category="commercial-ads"
  title="Commercial"
  highlight="Ads"
/>

<About />

<Contact />

</main>
  );
}