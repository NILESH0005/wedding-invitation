import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import weddingData from "../data/weddingData";

const OpeningScreen = ({ onOpen }) => {
    const [isOpening, setIsOpening] = useState(false);

    const handleOpen = () => {
        if (isOpening) return;

        setIsOpening(true);

        setTimeout(() => {
            onOpen();
        }, 1000);
    };

    useEffect(() => {
        const autoOpenTimer = setTimeout(() => {
            handleOpen();
        }, 5000);

        return () => clearTimeout(autoOpenTimer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={
                isOpening
                    ? {
                        opacity: 0,
                        scale: 1.04,
                    }
                    : {
                        opacity: 1,
                        scale: 1,
                    }
            }
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                overflow-hidden
            "
        >

            {/* ================================================= */}
            {/* BACKGROUND */}
            {/* ================================================= */}

            <motion.img
                src="/images/background.png"
                alt=""
                initial={{
                    scale: 1,
                    opacity: 1,
                }}
                animate={{
                    scale: isOpening ? 1.06 : 1,
                    opacity: isOpening ? 0 : 1,
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                "
            />

            {/* Soft overlay */}
            <motion.div
                animate={{
                    opacity: isOpening ? 0 : 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="
                    absolute
                    inset-0
                    bg-[#f5eee4]/20
                "
            />

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div
                className="
                    relative
                    z-10
                    text-center
                    px-6
                    flex
                    flex-col
                    items-center
                "
            >

                {/* Small heading */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: -20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="
                        text-xs
                        md:text-sm
                        uppercase
                        tracking-[0.5em]
                        text-[#5c4632]
                    "
                >
                    Our Wedding
                </motion.p>


                {/* Groom */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                    }}
                    className="
                        mt-5
                        text-6xl
                        md:text-8xl
                        font-serif
                        text-[#2d2118]
                        leading-none
                    "
                >
                    {weddingData.groom.name}
                </motion.h1>


                {/* Weds */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    className="
                        text-xl
                        md:text-2xl
                        my-3
                        text-[#a67c32]
                        font-serif
                        italic
                    "
                >
                    weds
                </motion.div>


                {/* Bride */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.7,
                    }}
                    className="
                        text-6xl
                        md:text-8xl
                        font-serif
                        text-[#2d2118]
                        leading-none
                    "
                >
                    {weddingData.bride.name}
                </motion.h1>


                {/* ================================================= */}
                {/* DOOR */}
                {/* ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1,
                    }}
                    className="mt-8"
                >

                    <div
                        className="
                            relative
                            mx-auto
                            w-44
                            h-60
                            md:w-48
                            md:h-64
                        "
                        style={{
                            perspective: "1000px",
                        }}
                    >

                        {/* Door frame */}
                        <div
                            className="
                                absolute
                                inset-0
                                border-[6px]
                                border-[#6b4b35]
                                rounded-t-[100px]
                                bg-[#3d291c]
                                p-3
                                shadow-2xl
                            "
                        >

                            {/* Door */}
                            <motion.div
                                animate={{
                                    rotateY: isOpening ? -110 : 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    transformOrigin: "left center",
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                }}
                                className="
                                    relative
                                    w-full
                                    h-full
                                    bg-[#8b5e3c]
                                    rounded-t-[85px]
                                    flex
                                    items-center
                                    justify-center
                                    shadow-inner
                                "
                            >

                                {/* Door decoration */}
                                <div
                                    className="
                                        absolute
                                        inset-5
                                        border
                                        border-[#c9a47a]
                                        rounded-t-[70px]
                                    "
                                />

                                {/* Inner decoration */}
                                <div
                                    className="
                                        absolute
                                        inset-9
                                        border
                                        border-[#c9a47a]/40
                                        rounded-t-[55px]
                                    "
                                />

                                {/* Door handle */}
                                <div
                                    className="
                                        absolute
                                        right-5
                                        top-1/2
                                        w-3
                                        h-3
                                        rounded-full
                                        bg-[#e0bd73]
                                        shadow-md
                                    "
                                />

                            </motion.div>

                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* BUTTON */}
                    {/* ================================================= */}

                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 1.4,
                        }}
                        onClick={handleOpen}
                        disabled={isOpening}
                        className="
                            mt-7
                            border
                            border-[#6b4b35]
                            text-[#4a3627]
                            px-8
                            py-3
                            rounded-full
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            bg-[#f7f2ea]/40
                            backdrop-blur-sm
                            hover:bg-[#4a3627]
                            hover:text-white
                            transition-all
                            duration-300
                            disabled:opacity-50
                            disabled:cursor-default
                        "
                    >
                        Knock on the Door
                    </motion.button>

                </motion.div>

            </div>

        </motion.div>
    );
};

export default OpeningScreen;