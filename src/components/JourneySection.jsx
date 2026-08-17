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
        <section className="relative bg-[#24211e] text-white py-28 md:py-36 px-5 sm:px-8 overflow-hidden">

            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">

                <div
                    className="
                        absolute
                        -top-40
                        left-1/2
                        -translate-x-1/2
                        w-[500px]
                        md:w-[900px]
                        h-[500px]
                        md:h-[900px]
                        rounded-full
                        bg-[#b8955a]/[0.035]
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-[300px]
                        h-[300px]
                        rounded-full
                        bg-[#b8955a]/[0.025]
                        blur-3xl
                    "
                />

            </div>


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
                        A story in chapters
                    </p>


                    <h2 className="
                        font-serif
                        text-5xl
                        sm:text-6xl
                        md:text-8xl
                        mt-5
                        tracking-tight
                    ">
                        Our Journey
                    </h2>


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
                        text-white/45
                        max-w-lg
                        mx-auto
                        mt-6
                        text-sm
                        md:text-base
                        leading-7
                    ">
                        From the first moment to the moment we say forever.
                    </p>

                </motion.div>



                {/* ================================================= */}
                {/* TIMELINE */}
                {/* ================================================= */}

                <div className="relative">


                    {/* Central timeline — desktop */}
                    <div
                        className="
                            hidden
                            md:block
                            absolute
                            left-1/2
                            top-0
                            bottom-0
                            w-px
                            -translate-x-1/2
                            bg-gradient-to-b
                            from-transparent
                            via-[#b8955a]/40
                            to-transparent
                        "
                    />


                    {/* Mobile timeline */}
                    <div
                        className="
                            md:hidden
                            absolute
                            left-[15px]
                            top-0
                            bottom-0
                            w-px
                            bg-gradient-to-b
                            from-transparent
                            via-[#b8955a]/40
                            to-transparent
                        "
                    />


                    <div className="space-y-24 md:space-y-36">

                        {journey.map((item, index) => (

                            <motion.article
                                key={item.year}
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
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative"
                            >


                                {/* ================================================= */}
                                {/* DESKTOP */}
                                {/* ================================================= */}

                                <div
                                    className={`
                                        hidden
                                        md:grid
                                        grid-cols-2
                                        gap-20
                                        items-center
                                        ${
                                            index % 2 === 0
                                                ? ""
                                                : "[&>*:first-child]:order-2"
                                        }
                                    `}
                                >

                                    {/* Content */}
                                    <div
                                        className={`
                                            relative
                                            ${
                                                index % 2 === 0
                                                    ? "text-right pr-8"
                                                    : "text-left pl-8"
                                            }
                                        `}
                                    >

                                        {/* Huge chapter number */}
                                        <span
                                            className="
                                                absolute
                                                -top-16
                                                text-[120px]
                                                leading-none
                                                font-serif
                                                text-white/[0.025]
                                                select-none
                                                pointer-events-none
                                            "
                                            style={{
                                                [index % 2 === 0
                                                    ? "right"
                                                    : "left"]: "20px",
                                            }}
                                        >
                                            {item.year}
                                        </span>


                                        <p className="
                                            relative
                                            text-[10px]
                                            uppercase
                                            tracking-[0.45em]
                                            text-[#b8955a]
                                        ">
                                            Chapter {item.year}
                                        </p>


                                        <h3 className="
                                            relative
                                            font-serif
                                            text-4xl
                                            lg:text-5xl
                                            mt-4
                                        ">
                                            {item.title}
                                        </h3>


                                        <div
                                            className={`
                                                flex
                                                items-center
                                                gap-3
                                                mt-6
                                                ${
                                                    index % 2 === 0
                                                        ? "justify-end"
                                                        : "justify-start"
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


                                        <p className="
                                            relative
                                            text-white/45
                                            mt-5
                                            leading-7
                                            max-w-md
                                            ml-auto
                                        "
                                        >
                                            {item.text}
                                        </p>

                                    </div>


                                    {/* Image */}
                                    <div
                                        className={`
                                            ${
                                                index % 2 === 0
                                                    ? "pl-8"
                                                    : "pr-8"
                                            }
                                        `}
                                    >

                                        <motion.div
                                            whileHover={{
                                                y: -8,
                                                scale: 1.015,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut",
                                            }}
                                            className="
                                                group
                                                relative
                                                overflow-hidden
                                                bg-[#302c28]
                                                p-2
                                                shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                                            "
                                        >

                                            {/* Gold border */}
                                            <div
                                                className="
                                                    absolute
                                                    inset-3
                                                    border
                                                    border-[#b8955a]/30
                                                    pointer-events-none
                                                    z-20
                                                "
                                            />


                                            <motion.img
                                                src={item.image}
                                                alt={item.title}
                                                initial={{
                                                    scale: 1.08,
                                                    opacity: 0,
                                                }}
                                                whileInView={{
                                                    scale: 1,
                                                    opacity: 1,
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
                                                    h-[420px]
                                                    object-cover
                                                    transition-transform
                                                    duration-1000
                                                    group-hover:scale-105
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
                                                    pointer-events-none
                                                "
                                            />

                                        </motion.div>

                                    </div>

                                </div>



                                {/* ================================================= */}
                                {/* MOBILE */}
                                {/* ================================================= */}

                                <div className="
                                    md:hidden
                                    relative
                                    pl-10
                                ">


                                    {/* Timeline dot */}
                                    <div
                                        className="
                                            absolute
                                            left-[15px]
                                            top-7
                                            -translate-x-1/2
                                            w-3
                                            h-3
                                            rounded-full
                                            bg-[#b8955a]
                                            ring-[6px]
                                            ring-[#24211e]
                                            z-20
                                        "
                                    />


                                    {/* Mobile content */}
                                    <div>

                                        <p className="
                                            text-[9px]
                                            uppercase
                                            tracking-[0.4em]
                                            text-[#b8955a]
                                        ">
                                            Chapter {item.year}
                                        </p>


                                        <h3 className="
                                            font-serif
                                            text-3xl
                                            sm:text-4xl
                                            mt-3
                                        ">
                                            {item.title}
                                        </h3>


                                        <div className="
                                            flex
                                            items-center
                                            gap-3
                                            mt-5
                                        ">

                                            <div className="w-8 h-px bg-[#b8955a]/50" />

                                            <div className="
                                                w-1.5
                                                h-1.5
                                                rotate-45
                                                bg-[#b8955a]
                                            " />

                                        </div>


                                        <p className="
                                            text-sm
                                            text-white/45
                                            leading-7
                                            mt-4
                                            max-w-md
                                        ">
                                            {item.text}
                                        </p>


                                        {/* Image */}
                                        <motion.div
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            className="
                                                group
                                                relative
                                                mt-7
                                                overflow-hidden
                                                bg-[#302c28]
                                                p-2
                                                shadow-[0_20px_45px_rgba(0,0,0,0.3)]
                                            "
                                        >

                                            {/* Gold border */}
                                            <div
                                                className="
                                                    absolute
                                                    inset-3
                                                    border
                                                    border-[#b8955a]/30
                                                    pointer-events-none
                                                    z-20
                                                "
                                            />


                                            <motion.img
                                                src={item.image}
                                                alt={item.title}
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
                                                    duration: 1,
                                                    ease: "easeOut",
                                                }}
                                                className="
                                                    w-full
                                                    h-[340px]
                                                    sm:h-[420px]
                                                    object-cover
                                                    transition-transform
                                                    duration-1000
                                                    group-hover:scale-105
                                                "
                                            />

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-gradient-to-t
                                                    from-black/40
                                                    via-transparent
                                                    to-transparent
                                                    pointer-events-none
                                                "
                                            />

                                        </motion.div>

                                    </div>

                                </div>

                            </motion.article>

                        ))}

                    </div>

                </div>



                {/* ================================================= */}
                {/* ENDING */}
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


                    <div className="
                        w-14
                        h-14
                        rounded-full
                        border
                        border-[#b8955a]/40
                        flex
                        items-center
                        justify-center
                        bg-[#24211e]
                    ">

                        <FaHeart className="
                            text-[#b8955a]
                            text-sm
                        " />

                    </div>


                    <p className="
                        mt-6
                        text-[9px]
                        uppercase
                        tracking-[0.4em]
                        text-white/30
                    ">
                        And the story continues
                    </p>

                </motion.div>

            </div>

        </section>
    );
};

export default JourneySection;