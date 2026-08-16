import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import weddingData from "../data/weddingData";

const CoupleSection = () => {
  return (
    <section className="relative bg-[#f7f2ea] py-28 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#b8955a]">
            Two hearts
          </p>

          <h2 className="mt-5 font-serif text-5xl md:text-7xl">
            The Couple
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-gray-500 leading-7">
            Two people, two stories, one beautiful journey.
          </p>
        </motion.div>

        {/* Couple */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mt-20">

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="relative mx-auto w-64 md:w-72 ">

              <div className="absolute -inset-3 border border-[#b8955a]/40 rounded-t-full" />

              <img
                src={weddingData.groom.image}
                alt={weddingData.groom.name}
                className="
                  relative
                  w-full
                  h-[360px]
                  object-cover
                  object-center
                  rounded-t-full
                "
              />

            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#b8955a]">
              The Groom
            </p>

            <h3 className="mt-3 font-serif text-4xl md:text-5xl">
              {weddingData.groom.name}
            </h3>

          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="relative mx-auto w-64 md:w-72">

              <div className="absolute -inset-3 border border-[#b8955a]/40 rounded-t-full" />

              <img
                src={weddingData.bride.image}
                alt={weddingData.bride.name}
                className="
                  relative
                  w-full
                  h-[360px]
                  object-cover
                  object-center
                  rounded-t-full
                "
              />

            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#b8955a]">
              The Bride
            </p>

            <h3 className="mt-3 font-serif text-4xl md:text-5xl">
              {weddingData.bride.name}
            </h3>

          </motion.div>

        </div>

        {/* Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            hidden
            md:flex
            absolute
            left-1/2
            top-[55%]
            -translate-x-1/2
            -translate-y-1/2
            w-24
            h-24
            rounded-full
            bg-[#f7f2ea]
            border
            border-[#b8955a]/40
            items-center
            justify-center
          "
        >
          <FaHeart className="text-[#b8955a] text-xl" />
        </motion.div>

      </div>

    </section>
  );
};

export default CoupleSection;