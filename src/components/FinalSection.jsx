import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import weddingData from "../data/weddingData";

const FinalSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <motion.img
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        src={weddingData.finalImage}
        alt="Wedding memory"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-black/30
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          text-center
          text-white
          px-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-[#d8b875]">
            And so our next chapter begins
          </p>

          <h2 className="font-serif text-6xl md:text-9xl mt-8 leading-none">
            {weddingData.groom.name}
          </h2>

          <div className="flex items-center justify-center gap-5 my-5">
            <div className="w-12 h-px bg-[#b8955a]/70" />

            <FaHeart className="text-[#d8b875] text-sm" />

            <div className="w-12 h-px bg-[#b8955a]/70" />
          </div>

          <h2 className="font-serif text-6xl md:text-9xl leading-none">
            {weddingData.bride.name}
          </h2>

          <p className="mt-10 text-sm tracking-[0.35em]">03 • 12 • 2026</p>

          <p className="mt-6 text-white/60 text-sm max-w-md mx-auto leading-7">
            Thank you for being a part of our journey, our memories, and the
            beginning of our forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;
