import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaArrowRight,
  FaCalendarDays,
} from "react-icons/fa6";
import weddingData from "../data/weddingData";

const eventImages = [
  "/images/img8.jpeg",
  "/images/img9.jpeg",
];

const EventsSection = () => {
  return (
    <section className="relative bg-[#f7f2ea] py-28 md:py-36 px-5 sm:px-8 overflow-hidden">

      {/* Soft background decoration */}
      <div className="
        absolute
        -top-40
        -right-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#b8955a]/[0.035]
        blur-3xl
        pointer-events-none
      " />

      <div className="
        absolute
        bottom-0
        -left-40
        w-[400px]
        h-[400px]
        rounded-full
        bg-[#b8955a]/[0.025]
        blur-3xl
        pointer-events-none
      " />


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
          className="text-center mb-24 md:mb-32"
        >

          <p className="
            text-[9px]
            sm:text-[10px]
            md:text-xs
            uppercase
            tracking-[0.5em]
            text-[#b8955a]
          ">
            Save the dates
          </p>


          <h2 className="
            font-serif
            text-5xl
            sm:text-6xl
            md:text-8xl
            mt-5
            text-[#24211e]
          ">
            Wedding Celebrations
          </h2>


          {/* Divider */}
          <div className="
            flex
            items-center
            justify-center
            gap-3
            mt-7
          ">

            <div className="w-10 md:w-16 h-px bg-[#b8955a]/40" />

            <div className="
              w-1.5
              h-1.5
              rotate-45
              bg-[#b8955a]
            " />

            <div className="w-10 md:w-16 h-px bg-[#b8955a]/40" />

          </div>


          <p className="
            max-w-xl
            mx-auto
            mt-6
            text-sm
            md:text-base
            text-gray-500
            leading-7
          ">
            Two beautiful celebrations, surrounded by the people
            who make our lives special.
          </p>

        </motion.div>



        {/* ================================================= */}
        {/* EVENTS */}
        {/* ================================================= */}

        <div className="space-y-28 md:space-y-40">

          {weddingData.events.map((event, index) => (

            <motion.article
              key={event.id}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >

              <div
                className={`
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-10
                  md:gap-20
                  items-center

                  ${
                    index % 2 === 1
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >


                {/* ================================================= */}
                {/* IMAGE */}
                {/* ================================================= */}

                <div className="
                  relative
                  group
                ">

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      bg-[#eee5d8]
                      p-2
                      md:p-3
                      shadow-[0_25px_55px_rgba(0,0,0,0.12)]
                    "
                  >

                    {/* Gold frame */}
                    <div className="
                      absolute
                      inset-3
                      md:inset-4
                      border
                      border-[#b8955a]/35
                      pointer-events-none
                      z-20
                    " />


                    <div className="
                      relative
                      overflow-hidden
                    ">

                      <motion.img
                        src={eventImages[index]}
                        alt={event.title}
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
                        }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                        }}
                        className="
                          w-full
                          h-[360px]
                          sm:h-[430px]
                          md:h-[520px]
                          object-cover
                          transition-transform
                          duration-1000
                          group-hover:scale-105
                        "
                      />


                      {/* Image overlay */}
                      <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-transparent
                        to-transparent
                        pointer-events-none
                      " />

                    </div>

                  </motion.div>


                  {/* Floating event number */}
                  <div className="
                    absolute
                    -bottom-5
                    left-5
                    md:left-8
                    w-12
                    h-12
                    md:w-14
                    md:h-14
                    bg-[#f7f2ea]
                    border
                    border-[#b8955a]/40
                    flex
                    items-center
                    justify-center
                    z-30
                  ">

                    <span className="
                      font-serif
                      text-lg
                      md:text-xl
                      text-[#8c7252]
                    ">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                </div>



                {/* ================================================= */}
                {/* INFORMATION */}
                {/* ================================================= */}

                <div
                  className={`
                    ${
                      index % 2 === 0
                        ? "md:text-left"
                        : "md:text-right"
                    }
                  `}
                >

                  {/* Small label */}
                  <p className="
                    text-[9px]
                    md:text-[10px]
                    uppercase
                    tracking-[0.45em]
                    text-[#b8955a]
                  ">
                    Celebration {String(index + 1).padStart(2, "0")}
                  </p>


                  {/* Event title */}
                  <h3 className="
                    font-serif
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    mt-4
                    text-[#24211e]
                  ">
                    {event.title}
                  </h3>


                  {/* Decorative line */}
                  <div
                    className={`
                      flex
                      items-center
                      gap-3
                      mt-6

                      ${
                        index % 2 === 0
                          ? "md:justify-start"
                          : "md:justify-end"
                      }
                    `}
                  >

                    <div className="w-10 h-px bg-[#b8955a]/50" />

                    <div className="
                      w-1.5
                      h-1.5
                      rotate-45
                      bg-[#b8955a]
                    " />

                  </div>


                  {/* Date */}
                  <div className="
                    flex
                    items-center
                    gap-4
                    mt-8
                  "
                  >

                    <FaCalendarDays className="
                      text-[#b8955a]
                      text-lg
                    " />

                    <div
                      className={
                        index % 2 === 0
                          ? ""
                          : "md:text-right"
                      }
                    >

                      <p className="
                        text-lg
                        md:text-xl
                        text-gray-700
                        font-medium
                      ">
                        {event.date}
                      </p>

                      <p className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-gray-500
                        mt-1
                      ">
                        {event.time}
                      </p>

                    </div>

                  </div>


                  {/* Location */}
                  <div className="
                    flex
                    items-start
                    gap-4
                    mt-7
                    text-gray-500
                  ">

                    <FaLocationDot className="
                      mt-1
                      text-[#b8955a]
                      flex-shrink-0
                    " />

                    <div>

                      <p className="
                        text-gray-700
                        font-medium
                      ">
                        {event.venue}
                      </p>

                      <p className="
                        text-sm
                        mt-1
                      ">
                        {event.address}
                      </p>

                    </div>

                  </div>


                  {/* Map button */}
                  <div
                    className={`
                      mt-8
                      ${
                        index % 2 === 1
                          ? "md:flex md:justify-end"
                          : ""
                      }
                    `}
                  >

                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group/button
                        inline-flex
                        items-center
                        gap-3
                        border
                        border-[#b8955a]/50
                        px-6
                        py-3.5
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-[#5f5144]
                        hover:bg-[#24211e]
                        hover:text-white
                        hover:border-[#24211e]
                        transition-all
                        duration-300
                      "
                    >

                      View Location

                      <FaArrowRight
                        className="
                          text-[9px]
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-1
                        "
                      />

                    </a>

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </div>



        {/* ================================================= */}
        {/* CLOSING */}
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
            duration: 0.8,
          }}
          className="
            flex
            flex-col
            items-center
            mt-28
            md:mt-36
          "
        >

          <div className="
            w-px
            h-12
            bg-gradient-to-b
            from-[#b8955a]/50
            to-transparent
          " />

          <p className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.4em]
            text-gray-400
          ">
            We can't wait to celebrate with you
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default EventsSection;