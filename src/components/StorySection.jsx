import { motion } from "framer-motion";
import weddingData from "../data/weddingData";

const StorySection = () => {
  return (
    <section className="py-28 px-6 bg-[#f5eee4]">

      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.4em] text-sm text-gray-500">
            Our Story
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif text-gray-900">
            {weddingData.story.title}
          </h2>

          <div className="w-16 h-px bg-gray-400 mx-auto my-8" />

          <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            {weddingData.story.description}
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default StorySection;