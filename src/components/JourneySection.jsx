import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";

const journey = [
    {
        year: "01",
        title: "The Beginning",
        text: "Every beautiful story starts with a simple moment.",
        image: "/images/img12.jpeg",
    },
    {
        year: "02",
        title: "A Little Closer",
        text: "Somewhere along the way, two lives became one story.",
        image: "/images/img14.jpeg",
    },
    {
        year: "03",
        title: "The Promise",
        text: "With every moment, the promise of forever grew stronger.",
        image: "/images/img4.jpeg",
    },
    {
        year: "04",
        title: "Forever Starts Here",
        text: "And now, we are ready to begin our next chapter together.",
        image: "/images/img3.jpeg",
    },
];

const JourneySection = () => {
    return (
        <section className="bg-[#24211e] text-white py-32 px-6 overflow-hidden">

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center mb-24"
                >
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#b8955a]">
                        A story in chapters
                    </p>

                    <h2 className="font-serif text-5xl md:text-7xl mt-5">
                        Our Journey
                    </h2>

                    <p className="text-white/50 max-w-xl mx-auto mt-6 leading-7">
                        From the first moment to the moment we say forever.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">

                    {/* Center line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15 md:-translate-x-1/2" />

                    <div className="space-y-20">

                        {journey.map((item, index) => (
                            <motion.div
                                key={item.year}
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
                                    delay: index * 0.1,
                                }}
                                className="relative"
                            >

                                {/* Timeline dot */}
                                <div
                                    className="
                absolute
                left-4
                md:left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-3
                h-3
                rounded-full
                bg-[#b8955a]
                ring-8
                ring-[#24211e]
                z-20
            "
                                />

                                {/* Desktop / Mobile content */}
                                <div
                                    className={`
                grid
                grid-cols-1
                md:grid-cols-2
                gap-8
                md:gap-20
                items-center
                ${index % 2 === 0
                                            ? ""
                                            : "md:[&>*:first-child]:order-2"
                                        }
            `}
                                >

                                    {/* Text */}
                                    <div
                                        className={`
                    ml-12
                    md:ml-0
                    ${index % 2 === 0
                                                ? "md:text-right"
                                                : "md:text-left"
                                            }
                `}
                                    >

                                        <span className="text-[#b8955a] text-xs tracking-[0.3em]">
                                            CHAPTER {item.year}
                                        </span>

                                        <h3 className="font-serif text-3xl md:text-5xl mt-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-white/50 mt-5 leading-7 max-w-md md:ml-auto">
                                            {item.text}
                                        </p>

                                    </div>

                                    {/* Image */}
                                    <div className="ml-12 md:ml-0">

                                        <motion.div
                                            whileHover={{
                                                scale: 1.03,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                            }}
                                            className="
                        relative
                        overflow-hidden
                        rounded-sm
                        h-72
                        md:h-[420px]
                        shadow-2xl
                    "
                                        >

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            hover:scale-105
                        "
                                            />

                                            {/* Image overlay */}
                                            <div
                                                className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/40
                            via-transparent
                            to-transparent
                        "
                                            />

                                        </motion.div>

                                    </div>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

                {/* Ending heart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mt-24"
                >
                    <div className="w-12 h-12 rounded-full border border-[#b8955a]/50 flex items-center justify-center">
                        <FaHeart className="text-[#b8955a] text-sm" />
                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default JourneySection;