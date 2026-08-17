import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import weddingData from "../data/weddingData";

const CoupleSection = () => {
  return (
    <section className="relative bg-[#f7f2ea] py-24 md:py-28 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.45em] text-[#b8955a]">
            Two hearts
          </p>

          <h2 className="mt-4 md:mt-5 font-serif text-4xl sm:text-5xl md:text-7xl">
            The Couple
          </h2>

          <p className="max-w-xl mx-auto mt-5 md:mt-6 text-sm md:text-base text-gray-500 leading-7">
            Two people, two stories, one beautiful journey.
          </p>
        </motion.div>


        {/* ================================================= */}
        {/* COUPLE */}
        {/* ================================================= */}

        <div className="
          relative
          grid
          grid-cols-2
          gap-3
          sm:gap-6
          md:gap-24
          mt-14
          sm:mt-16
          md:mt-20
          items-start
        ">


          {/* ================================================= */}
          {/* GROOM */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >

            {/* Photo */}
            <div className="
              relative
              mx-auto
              w-full
              max-w-[150px]
              sm:max-w-[190px]
              md:max-w-[290px]
            ">

              {/* Outer frame */}
              <div className="
                absolute
                -inset-1.5
                sm:-inset-2
                md:-inset-3
                border
                border-[#b8955a]/40
                rounded-t-full
              " />

              {/* Inner gold line */}
              <div className="
                absolute
                -inset-[3px]
                sm:-inset-1
                md:-inset-1.5
                border
                border-[#b8955a]/15
                rounded-t-full
                pointer-events-none
              " />

              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={weddingData.groom.image}
                alt={weddingData.groom.name}
                className="
                  relative
                  w-full
                  aspect-[3/4]
                  object-cover
                  object-center
                  rounded-t-full
                  shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                "
              />

            </div>


            {/* Label */}
            <p className="
              mt-6
              sm:mt-7
              md:mt-8
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              uppercase
              tracking-[0.3em]
              md:tracking-[0.4em]
              text-[#b8955a]
            ">
              The Groom
            </p>


            {/* Name */}
            <h3 className="
              mt-2
              md:mt-3
              font-serif
              text-2xl
              sm:text-3xl
              md:text-5xl
              text-[#24211e]
            ">
              {weddingData.groom.name}
            </h3>

          </motion.div>



          {/* ================================================= */}
          {/* BRIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >

            {/* Photo */}
            <div className="
              relative
              mx-auto
              w-full
              max-w-[150px]
              sm:max-w-[190px]
              md:max-w-[290px]
            ">

              {/* Outer frame */}
              <div className="
                absolute
                -inset-1.5
                sm:-inset-2
                md:-inset-3
                border
                border-[#b8955a]/40
                rounded-t-full
              " />

              {/* Inner gold line */}
              <div className="
                absolute
                -inset-[3px]
                sm:-inset-1
                md:-inset-1.5
                border
                border-[#b8955a]/15
                rounded-t-full
                pointer-events-none
              " />

              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={weddingData.bride.image}
                alt={weddingData.bride.name}
                className="
                  relative
                  w-full
                  aspect-[3/4]
                  object-cover
                  object-center
                  rounded-t-full
                  shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                "
              />

            </div>


            {/* Label */}
            <p className="
              mt-6
              sm:mt-7
              md:mt-8
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              uppercase
              tracking-[0.3em]
              md:tracking-[0.4em]
              text-[#b8955a]
            ">
              The Bride
            </p>


            {/* Name */}
            <h3 className="
              mt-2
              md:mt-3
              font-serif
              text-2xl
              sm:text-3xl
              md:text-5xl
              text-[#24211e]
            ">
              {weddingData.bride.name}
            </h3>

          </motion.div>



          {/* ================================================= */}
          {/* CENTER HEART */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -15,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "backOut",
            }}
            className="
              absolute
              left-1/2
              top-[125px]
              sm:top-[155px]
              md:top-[45%]
              -translate-x-1/2
              -translate-y-1/2

              w-9
              h-9
              sm:w-11
              sm:h-11
              md:w-24
              md:h-24

              rounded-full
              bg-[#f7f2ea]
              border
              border-[#b8955a]/50

              flex
              items-center
              justify-center

              shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              z-10
            "
          >

            <FaHeart
              className="
                text-[#b8955a]
                text-[10px]
                sm:text-xs
                md:text-xl
              "
            />

          </motion.div>

        </div>


        {/* Bottom decoration */}
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
            gap-3
            mt-16
            md:mt-20
          "
        >

          <div className="w-10 md:w-16 h-px bg-[#b8955a]/30" />

          <div className="
            w-1.5
            h-1.5
            rotate-45
            bg-[#b8955a]
          " />

          <div className="w-10 md:w-16 h-px bg-[#b8955a]/30" />

        </motion.div>

      </div>

    </section>
  );
};

export default CoupleSection;