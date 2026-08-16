import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
};

const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
        <section className="bg-[#f7f2ea] py-32 px-6">

            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#b8955a]">
                        The countdown begins
                    </p>

                    <h2 className="font-serif text-5xl md:text-7xl mt-5">
                        Until We Say I Do
                    </h2>

                    <p className="text-gray-500 mt-6">
                        Every second brings us closer to forever.
                    </p>
                </motion.div>

                {/* Countdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-16">

                    {items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                            }}
                            className="
                border
                border-[#b8955a]/30
                py-8
                md:py-10
                bg-white/30
              "
                        >
                            <div className="font-serif text-5xl md:text-6xl text-[#24211e]">
                                {String(item.value).padStart(2, "0")}
                            </div>

                            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}

                </div>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}
                    className="mt-12"
                >
                    <p className="text-sm tracking-[0.35em] text-gray-500">
                        03 • 12 • 2026
                    </p>
                </motion.div>

            </div>

        </section>
    );
};

export default CountdownSection;