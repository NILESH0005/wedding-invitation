import { motion } from "framer-motion";
import weddingData from "../data/weddingData";

const frameStyles = [
  -1,
  1,
  -0.5,
  1.5,
  -1.2,
  0.7,
  -0.8,
  1.2,
  -0.5,
];

const GallerySection = () => {
  const images = weddingData.gallery;

  return (
    <section className="bg-[#24211e] text-white py-32 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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
          className="text-center mb-20"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#b8955a]">
            Little pieces of forever
          </p>

          <h2 className="font-serif text-5xl md:text-7xl mt-5">
            Our Memories
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-white/50 leading-7">
            A collection of moments we want to remember forever.
          </p>
        </motion.div>


        {/* Gallery */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-12
          md:gap-16
          items-start
        ">

          {images.map((image, index) => (

            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: 80,
                rotate: frameStyles[index % frameStyles.length],
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: frameStyles[index % frameStyles.length],
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: Math.min(index * 0.12, 0.7),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center items-start"
            >

              {/* Frame */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  inline-block
                  bg-[#f3eadc]
                  p-3
                  md:p-4
                  shadow-[0_20px_45px_rgba(0,0,0,0.35)]
                  cursor-pointer
                "
              >

                {/* Outer gold border */}
                <div
                  className="
                    absolute
                    inset-1
                    border
                    border-[#b8955a]/50
                    pointer-events-none
                    z-10
                  "
                />

                {/* Photo */}
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
                      scale: 1.08,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: Math.min(
                        index * 0.12 + 0.15,
                        0.85
                      ),
                      ease: "easeOut",
                    }}
                    className="
                      block
                      w-auto
                      max-w-full
                      h-auto
                      max-h-[620px]
                      object-contain
                      transition-transform
                      duration-1000
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Soft image reveal */}
                  <motion.div
                    initial={{
                      opacity: 0.15,
                    }}
                    whileInView={{
                      opacity: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: Math.min(
                        index * 0.12 + 0.2,
                        0.9
                      ),
                    }}
                    className="
                      absolute
                      inset-0
                      bg-[#f3eadc]
                      pointer-events-none
                    "
                  />

                </div>


                {/* Frame caption */}
                <div
                  className="
                    flex
                    justify-between
                    items-center
                    px-1
                    pt-3
                    text-[#8c7252]
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                    "
                  >
                    Memory
                  </span>

                  <span
                    className="
                      text-[10px]
                      tracking-[0.2em]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>


        {/* Ending decoration */}
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
            delay: 0.3,
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
            mt-24
          "
        >

          <div className="w-16 h-px bg-[#b8955a]/40" />

          <div
            className="
              w-2
              h-2
              rotate-45
              bg-[#b8955a]
            "
          />

          <div className="w-16 h-px bg-[#b8955a]/40" />

        </motion.div>

      </div>

    </section>
  );
};

export default GallerySection;