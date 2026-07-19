"use client";

import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="relative py-32 px-8 bg-[#050505]">

      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-5xl font-black text-white"
        >
          Featured <span className="text-green-400">Project</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="aspect-video bg-neutral-900 flex items-center justify-center text-gray-500 text-xl">
            هنا هيظهر أفضل فيديو من شغلك
          </div>

          <div className="p-8">

            <h3 className="text-3xl font-bold text-white">
              Your Best Project
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              هنضيف هنا اسم المشروع، وصف بسيط، والعميل بعد ما نخلص تصميم الموقع.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}