import {
  Clapperboard,
  Boxes,
  Plane,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Video Editing",
    icon: Clapperboard,
    description:
      "Professional editing for Reels, YouTube videos, and social media content.",
  },
  {
    title: "Motion Graphics",
    icon: Boxes,
    description:
      "Creative motion graphics and animated visuals for brands and businesses.",
  },
  {
    title: "Travel Films",
    icon: Plane,
    description:
      "Cinematic travel videos for tourism companies, hotels, and destinations.",
  },
  {
    title: "Commercial Ads",
    icon: Megaphone,
    description:
      "High-converting promotional videos for products, restaurants, furniture, and brands.",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-[#070707]">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-green-400 mb-3">
            Services
          </p>

          <h2 className="text-5xl font-black text-white">
            What I Do
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:bg-white/10"
              >
                <Icon
                  className="text-green-400 mb-6"
                  size={42}
                />

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}