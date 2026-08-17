import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import weddingData from "../data/weddingData";

const StorySection = () => {
  const [hearts, setHearts] = useState([]);

  const createHeart = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now() + Math.random();

    setHearts((prev) => [
      ...prev,
      {
        id,
        x,
        y,
        size: Math.random() * 8 + 14,
        drift: Math.random() * 70 - 35,
        duration: Math.random() * 0.6 + 1.8,
      },
    ]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 2600);
  };

  return (
    <section
      onClick={createHeart}
      className="
        relative
        py-28
        md:py-36
        px-6
        bg-[#f5eee4]
        overflow-hidden
        cursor-pointer
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
              x: heart.x - heart.size / 2,
              y: heart.y - heart.size / 2,
              rotate: -15,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.2, 1.1, 0.9, 0.65],
              x: [
                heart.x - heart.size / 2,
                heart.x - heart.size / 2 + heart.drift * 0.4,
                heart.x - heart.size / 2 - heart.drift * 0.2,
                heart.x - heart.size / 2 + heart.drift,
              ],
              y: [
                heart.y - heart.size / 2,
                heart.y - 55,
                heart.y - 120,
                heart.y - 185,
              ],
              rotate: [-15, 8, -5, 12],
            }}
            transition={{
              duration: heart.duration,
              ease: "easeOut",
            }}
            className="
              absolute
              z-50
              pointer-events-none
              text-[#b8955a]
            "
            style={{
              left: 0,
              top: 0,
              fontSize: `${heart.size}px`,
              filter:
                "drop-shadow(0 4px 8px rgba(184,149,90,0.25))",
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </AnimatePresence>


      {/* ================================================= */}
      {/* SOFT BACKGROUND GLOW */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[350px]
          md:w-[550px]
          h-[350px]
          md:h-[550px]
          rounded-full
          bg-[#b8955a]/[0.06]
          blur-3xl
          pointer-events-none
        "
      />


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative max-w-4xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.4,
          }}
          className="text-center"
        >

          {/* Label */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
              letterSpacing: "0.15em",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              letterSpacing: "0.45em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              uppercase
              text-[9px]
              sm:text-[10px]
              md:text-xs
              text-[#b8955a]
            "
          >
            Our Story
          </motion.p>


          {/* Title */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-serif
              text-[#24211e]
            "
          >
            {weddingData.story.title}
          </motion.h2>


          {/* Divider */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              gap-3
              my-9
              overflow-hidden
            "
          >

            <motion.div
              initial={{
                scaleX: 0,
                transformOrigin: "right",
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.7,
              }}
              className="
                w-16
                md:w-24
                h-px
                bg-[#b8955a]/40
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                rotate: 45,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                ease: "backOut",
              }}
              className="
                w-2
                h-2
                bg-[#b8955a]
              "
            />

            <motion.div
              initial={{
                scaleX: 0,
                transformOrigin: "left",
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.7,
              }}
              className="
                w-16
                md:w-24
                h-px
                bg-[#b8955a]/40
              "
            />

            {/* Golden shimmer */}

            <motion.div
              initial={{
                x: "-120%",
                opacity: 0,
              }}
              whileInView={{
                x: "120%",
                opacity: [0, 1, 1, 0],
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
                delay: 1.1,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-1/2
                -translate-y-1/2
                w-20
                md:w-28
                h-2
                bg-gradient-to-r
                from-transparent
                via-[#d8b875]
                to-transparent
                blur-sm
                pointer-events-none
              "
            />

          </div>


          {/* Story */}

          <motion.p
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.4,
              delay: 1.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              leading-8
              text-gray-600
            "
          >
            {weddingData.story.description}
          </motion.p>


          {/* Bottom decoration */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 1.8,
              ease: "backOut",
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
              mt-12
            "
          >

            <div className="w-8 md:w-12 h-px bg-[#b8955a]/25" />

            <span
              className="
                font-serif
                text-2xl
                text-[#b8955a]/50
              "
            >
              ✦
            </span>

            <div className="w-8 md:w-12 h-px bg-[#b8955a]/25" />

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
              delay: 2,
            }}
            className="
              mt-6
              text-[8px]
              md:text-[9px]
              uppercase
              tracking-[0.4em]
              text-gray-400
            "
          >
            A story written together
          </motion.p>

        </motion.div>

      </div>

    </section>
  );
};

export default StorySection;