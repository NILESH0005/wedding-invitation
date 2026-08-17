import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import weddingData from "../data/weddingData";

const frameStyles = [-1.2, 1.2, 1, -1];

const GallerySection = () => {
  const images = weddingData.gallery.slice(0, 4);

  return (
    <section className="relative bg-[#24211e] text-white py-28 sm:py-32 md:py-40 px-5 sm:px-8 overflow-hidden">
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -top-60
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#b8955a]/[0.025]
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#b8955a]/[0.02]
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          -right-40
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#b8955a]/[0.015]
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-20 sm:mb-24 md:mb-28"
        >
          <p
            className="
              text-[9px]
              sm:text-[10px]
              md:text-xs
              uppercase
              tracking-[0.5em]
              text-[#b8955a]
            "
          >
            Little pieces of forever
          </p>

          <h2
            className="
              font-serif
              text-5xl
              sm:text-6xl
              md:text-7xl
              mt-5
            "
          >
            Our Memories
          </h2>

          {/* Divider */}

          <div className="flex items-center justify-center gap-3 mt-7">
            <div className="w-10 sm:w-14 md:w-20 h-px bg-[#b8955a]/40" />

            <div
              className="
                w-1.5
                h-1.5
                rotate-45
                bg-[#b8955a]
              "
            />

            <div className="w-10 sm:w-14 md:w-20 h-px bg-[#b8955a]/40" />
          </div>

          <p
            className="
              max-w-lg
              mx-auto
              mt-6
              text-sm
              md:text-base
              text-white/45
              leading-7
            "
          >
            Four little moments from a story we will carry with us forever.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* FOUR PHOTO EDITORIAL GRID */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-14
            sm:gap-12
            md:gap-20
            lg:gap-x-24
            lg:gap-y-28
            items-start
          "
        >
          {images.map((image, index) => (
            <GalleryFrame
              key={`${image}-${index}`}
              image={image}
              index={index}
            />
          ))}
        </div>

        {/* ================================================= */}
        {/* CLOSING DECORATION */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
            mt-24
            md:mt-32
          "
        >
          <div className="w-12 md:w-20 h-px bg-[#b8955a]/35" />

          <div
            className="
              w-2
              h-2
              rotate-45
              bg-[#b8955a]
            "
          />

          <div className="w-12 md:w-20 h-px bg-[#b8955a]/35" />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          className="
            text-center
            mt-6
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          Tap a memory
        </motion.p>
      </div>
    </section>
  );
};

/* ================================================= */
/* INDIVIDUAL PHOTO FRAME */
/* ================================================= */

const GalleryFrame = ({ image, index }) => {
  const [hearts, setHearts] = useState([]);

  /* ================================================= */
  /* HEART CLICK ANIMATION */
  /* ================================================= */

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newHearts = Array.from({ length: 5 }, (_, heartIndex) => ({
      id: `${Date.now()}-${heartIndex}-${Math.random()}`,

      x: x + Math.random() * 24 - 12,

      y: y + Math.random() * 12 - 6,

      size: Math.random() * 7 + 9,

      drift: Math.random() * 70 - 35,

      delay: heartIndex * 0.07,
    }));

    setHearts((previous) => [...previous, ...newHearts]);

    setTimeout(() => {
      setHearts((previous) =>
        previous.filter(
          (heart) => !newHearts.some((newHeart) => newHeart.id === heart.id),
        ),
      );
    }, 2200);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        rotate: frameStyles[index],
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: frameStyles[index],
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        flex
        justify-center
        ${index % 2 === 0 ? "sm:translate-y-2" : "sm:-translate-y-4"}
      `}
    >
      {/* ================================================= */}
      {/* FRAME */}
      {/* ================================================= */}

      <motion.div
        onClick={handleClick}
        whileHover={{
          scale: 1.025,
          rotate: 0,
          y: -10,
        }}
        whileTap={{
          scale: 0.985,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          group
          relative
          w-full
          max-w-[520px]
          bg-[#f3eadc]
          p-3
          sm:p-4
          md:p-5
          shadow-[0_25px_60px_rgba(0,0,0,0.38)]
          cursor-pointer
          select-none
        "
      >
        {/* ================================================= */}
        {/* FLOATING HEARTS */}
        {/* ================================================= */}

        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{
                opacity: 0,
                scale: 0.2,
                x: heart.x,
                y: heart.y,
              }}
              animate={{
                opacity: [0, 1, 1, 0],

                scale: [0.2, 1.15, 0.9, 0.35],

                x: [
                  heart.x,
                  heart.x + heart.drift * 0.3,
                  heart.x - heart.drift * 0.2,
                  heart.x + heart.drift,
                ],

                y: [heart.y, heart.y - 45, heart.y - 105, heart.y - 175],

                rotate: [-10, 10, -8, 15],
              }}
              transition={{
                duration: 2,
                delay: heart.delay,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                top-0
                z-[100]
                pointer-events-none
                text-[#b8955a]
              "
              style={{
                fontSize: `${heart.size}px`,
                filter: "drop-shadow(0 4px 8px rgba(184,149,90,0.45))",
              }}
            >
              <FaHeart />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* ================================================= */}
        {/* GOLD INNER BORDER */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-2
            sm:inset-3
            md:inset-4
            border
            border-[#b8955a]/45
            pointer-events-none
            z-20
          "
        />

        {/* ================================================= */}
        {/* IMAGE */}
        {/* ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#ddd0be]
          "
        >
          <motion.img
            src={image}
            alt={`Wedding memory ${index + 1}`}
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.12 + 0.15,
              ease: "easeOut",
            }}
            className="
              block
              w-full
              h-auto
              max-h-[650px]
              object-contain
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.035]
            "
          />

          {/* Soft reveal */}

          <motion.div
            initial={{
              opacity: 0.16,
            }}
            whileInView={{
              opacity: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.12 + 0.25,
            }}
            className="
              absolute
              inset-0
              bg-[#f3eadc]
              pointer-events-none
            "
          />

          {/* Golden hover glow */}

          <div
            className="
              absolute
              inset-0
              bg-[#b8955a]/0
              group-hover:bg-[#b8955a]/[0.055]
              transition-all
              duration-700
              pointer-events-none
            "
          />
        </div>

        {/* ================================================= */}
        {/* CAPTION */}
        {/* ================================================= */}

        <div
          className="
            flex
            justify-between
            items-center
            px-1
            pt-3
            sm:pt-4
            text-[#8c7252]
          "
        >
          <span
            className="
              text-[7px]
              sm:text-[8px]
              uppercase
              tracking-[0.3em]
            "
          >
            A memory
          </span>

          <span
            className="
              text-[9px]
              sm:text-[10px]
              tracking-[0.2em]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GallerySection;
