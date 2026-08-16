import { motion } from "framer-motion";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import weddingData from "../data/weddingData";

const eventImages = [
  "/images/img8.jpeg",
  "/images/img9.jpeg",
  "/images/img7.jpeg",
];

const EventsSection = () => {
  return (
    <section className="bg-[#f7f2ea] py-32 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#b8955a]">
            Save the dates
          </p>

          <h2 className="font-serif text-5xl md:text-7xl mt-5">
            Wedding Celebrations
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-gray-500 leading-7">
            Three beautiful moments, surrounded by the people we love.
          </p>
        </motion.div>

        {/* Events */}
        <div className="space-y-20">

          {weddingData.events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
              }}
              className={`
                grid
                grid-cols-1
                md:grid-cols-2
                gap-8
                md:gap-16
                items-center
                ${
                  index % 2 === 1
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >

              {/* Image */}
              <div className="overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={eventImages[index]}
                  alt={event.title}
                  className="
                    w-full
                    h-[350px]
                    md:h-[480px]
                    object-cover
                  "
                />

              </div>

              {/* Information */}
              <div
                className={`
                  ${
                    index % 2 === 0
                      ? "md:text-left"
                      : "md:text-right"
                  }
                `}
              >

                <p className="text-[#b8955a] text-xs tracking-[0.4em] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="font-serif text-4xl md:text-6xl mt-4">
                  {event.title}
                </h3>

                <div className="mt-8 space-y-3 text-gray-600">

                  <p className="text-lg">
                    {event.date}
                  </p>

                  <p className="text-sm tracking-[0.2em] uppercase">
                    {event.time}
                  </p>

                </div>

                <div className="mt-8 flex items-start gap-3 text-gray-500">

                  <FaLocationDot className="mt-1 text-[#b8955a]" />

                  <div>
                    <p className="font-medium text-gray-700">
                      {event.venue}
                    </p>

                    <p className="text-sm mt-1">
                      {event.address}
                    </p>
                  </div>

                </div>

                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    mt-8
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-gray-800
                    border-b
                    border-[#b8955a]
                    pb-2
                    hover:text-[#b8955a]
                    transition
                  "
                >
                  View Location
                  <FaArrowRight className="text-[10px]" />
                </a>

              </div>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EventsSection;