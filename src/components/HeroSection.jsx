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
        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
      text-[10px]
      md:text-xs
      uppercase
      tracking-[0.5em]
      text-white/80
      mb-6
    "
        >
          01 — 03 December 2026
        </motion.p>

        {/* Main statement */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
      font-serif
      text-5xl
      sm:text-6xl
      md:text-8xl
      lg:text-9xl
      leading-[0.9]
      tracking-tight
    "
        >
          A New
          <br />
          Chapter
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="
      flex
      items-center
      gap-3
      my-6
    "
        >
          <div className="w-10 md:w-16 h-px bg-[#d8b875]/70" />

          <div
            className="
      w-1.5
      h-1.5
      rotate-45
      bg-[#d8b875]
    "
          />

          <div className="w-10 md:w-16 h-px bg-[#d8b875]/70" />
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          className="
      max-w-md
      text-sm
      md:text-base
      text-white/75
      leading-7
    "
        >
          With love, laughter and a lifetime ahead,
          <br />
          our beautiful journey continues.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="
      absolute
      bottom-6
      left-1/2
      -translate-x-1/2
      flex
      flex-col
      items-center
      gap-2
    "
        >
          <span
            className="
      text-[9px]
      uppercase
      tracking-[0.4em]
      text-white/60
    "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
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
