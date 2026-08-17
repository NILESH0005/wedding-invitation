import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import weddingData from "../data/weddingData";

const getTimeLeft = () => {
  const target = new Date(weddingData.weddingDate).getTime();
  const now = new Date().getTime();

  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};


/* ================================================= */
/* COUNTDOWN NUMBER */
/* ================================================= */

const CountdownNumber = ({ value }) => {
  return (
    <div className="relative h-[60px] md:h-[72px] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -35,
            filter: "blur(4px)",
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            font-serif
            text-5xl
            md:text-6xl
            text-[#24211e]
          "
        >
          {String(value).padStart(2, "0")}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


/* ================================================= */
/* COUNTDOWN SECTION */
/* ================================================= */

const CountdownSection = () => {

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  /* Click hearts */
  const [hearts, setHearts] = useState([]);


  /* ================================================= */
  /* COUNTDOWN TIMER */
  /* ================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  /* ================================================= */
  /* CREATE HEARTS */
/* ================================================= */

  const createHearts = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHearts = Array.from(
      { length: 7 },
      (_, index) => ({
        id: `${Date.now()}-${index}`,

        x,

        y,

        size: 11 + Math.random() * 10,

        drift:
          (Math.random() - 0.5) * 100,

        rotate:
          Math.random() * 100 - 50,

        delay:
          Math.random() * 0.12,
      })
    );

    setHearts((prev) => [
      ...prev,
      ...newHearts,
    ]);

    /* Remove after animation */

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter(
          (heart) =>
            !newHearts.some(
              (newHeart) =>
                newHeart.id === heart.id
            )
        )
      );
    }, 2300);
  };


  /* ================================================= */
  /* COUNTDOWN ITEMS */
  /* ================================================= */

  const items = [
    {
      value: timeLeft.days,
      label: "Days",
    },

    {
      value: timeLeft.hours,
      label: "Hours",
    },

    {
      value: timeLeft.minutes,
      label: "Minutes",
    },

    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];


  return (
    <section
      onClick={createHearts}
      className="
        relative
        bg-[#f7f2ea]
        py-28
        sm:py-32
        md:py-40
        px-5
        sm:px-6
        overflow-hidden
        cursor-pointer
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 2,
        }}
        className="
          absolute
          -top-60
          left-1/2
          -translate-x-1/2
          w-[550px]
          h-[550px]
          rounded-full
          bg-[#b8955a]/[0.045]
          blur-3xl
          pointer-events-none
        "
      />


      {/* Bottom glow */}

      <div
        className="
          absolute
          -bottom-60
          right-[-100px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#b8955a]/[0.025]
          blur-3xl
          pointer-events-none
        "
      />


      <div className="relative max-w-5xl mx-auto text-center">


        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
        >

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.15em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.5em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              text-[9px]
              sm:text-[10px]
              md:text-xs
              uppercase
              text-[#b8955a]
            "
          >
            The countdown begins
          </motion.p>


          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97,
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
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-serif
              text-4xl
              sm:text-5xl
              md:text-7xl
              mt-5
              text-[#24211e]
            "
          >
            Until We Say I Do
          </motion.h2>


          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="
              text-sm
              md:text-base
              text-gray-500
              mt-6
            "
          >
            Every second brings us closer to forever.
          </motion.p>


          {/* ================================================= */}
          {/* DIVIDER */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mt-8
            "
          >

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.5,
              }}
              className="
                w-10
                md:w-16
                h-px
                bg-[#b8955a]/40
                origin-right
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
                duration: 0.6,
                delay: 0.8,
                ease: "backOut",
              }}
              className="
                w-1.5
                h-1.5
                bg-[#b8955a]
              "
            />


            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.5,
              }}
              className="
                w-10
                md:w-16
                h-px
                bg-[#b8955a]/40
                origin-left
              "
            />

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* COUNTDOWN CARDS */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            sm:gap-5
            md:gap-8
            mt-16
            md:mt-20
          "
        >

          {items.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.92,
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
                duration: 0.8,
                delay: 0.15 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                border
                border-[#b8955a]/30
                bg-white/30
                backdrop-blur-sm
                py-7
                sm:py-8
                md:py-10
                overflow-hidden
                shadow-[0_15px_35px_rgba(0,0,0,0.04)]
              "
            >

              {/* Top gold line */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.12,
                }}
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-px
                  bg-[#b8955a]/60
                  origin-center
                "
              />


              {/* Hover glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[#b8955a]/0
                  group-hover:bg-[#b8955a]/[0.035]
                  transition-all
                  duration-700
                  pointer-events-none
                "
              />


              {/* Number */}

              <CountdownNumber value={item.value} />


              {/* Label */}

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
                  duration: 0.7,
                  delay: 0.6 + index * 0.12,
                }}
                className="
                  relative
                  mt-3
                  text-[8px]
                  sm:text-[9px]
                  md:text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-gray-500
                "
              >
                {item.label}
              </motion.p>


              {/* Bottom ornament */}

              <div
                className="
                  flex
                  justify-center
                  mt-5
                "
              >

                <motion.div
                  animate={{
                    opacity: [0.25, 0.65, 0.25],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="
                    w-1
                    h-1
                    rotate-45
                    bg-[#b8955a]
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>


        {/* ================================================= */}
        {/* DATE */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.8,
          }}
          className="mt-12 md:mt-14"
        >

          <p
            className="
              text-xs
              sm:text-sm
              tracking-[0.35em]
              text-gray-500
            "
          >
            03 • 12 • 2026
          </p>

        </motion.div>

      </div>


      {/* ================================================= */}
      {/* CLICK HEARTS */}
      {/* ================================================= */}

      <AnimatePresence>

        {hearts.map((heart) => (

          <motion.div
            key={heart.id}
            initial={{
              opacity: 0,
              scale: 0,
              x: heart.x,
              y: heart.y,
              rotate: -10,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.2, 1.15, 0.85],
              x: heart.x + heart.drift,
              y: heart.y - 190,
              rotate: heart.rotate,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 2,
              delay: heart.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              pointer-events-none
              z-50
            "
            style={{
              left: 0,
              top: 0,
            }}
          >

            <FaHeart
              style={{
                fontSize: heart.size,
                color: "#b8955a",
                filter:
                  "drop-shadow(0 0 7px rgba(184,149,90,0.45))",
              }}
            />

          </motion.div>

        ))}

      </AnimatePresence>

    </section>
  );
};

export default CountdownSection;