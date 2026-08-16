import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import weddingData from "../data/weddingData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background image */}
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        src={weddingData.heroImage}
        alt={`${weddingData.groom.name} and ${weddingData.bride.name}`}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[center_30%]
        "
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
        "
      />

      {/* Hero content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          flex-col
          items-center
          justify-end
          text-center
          text-white
          px-6
          pb-24
          md:pb-28
        "
      >

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
            uppercase
            tracking-[0.5em]
            text-[10px]
            md:text-xs
            mb-6
            text-white/80
          "
        >
          We are getting married
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
          }}
          className="
            font-serif
            text-6xl
            sm:text-7xl
            md:text-9xl
            leading-none
            tracking-tight
          "
        >
          {weddingData.groom.name}
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="
            text-3xl
            md:text-4xl
            my-3
            text-[#d8b875]
            font-serif
          "
        >
          weds
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1,
          }}
          className="
            font-serif
            text-6xl
            sm:text-7xl
            md:text-9xl
            leading-none
            tracking-tight
          "
        >
          {weddingData.bride.name}
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
          className="mt-8"
        >
          <p className="text-sm md:text-base tracking-[0.3em]">
            02 • 12 • 2026
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <FaChevronDown className="text-white/70 text-xs" />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;