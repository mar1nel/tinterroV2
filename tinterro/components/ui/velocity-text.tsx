"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

export const VelocityText: React.FC = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["65deg", "-65deg"]);
    const skewX = useSpring(skewXRaw, { mass: 5, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -7000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <section className="relative bg-white text-neutral-950 h-[65px]">
            <div className="sticky top-0 h-[150px] overflow-hidden">
                <motion.p
                    style={{ skewX, x }}
                    className="-mt-2 origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                >
                    WE ARE IN ORADEA WE ARE IN CLUJ WE ARE IN TIMISOARA WE ARE IN ORADEA
                </motion.p>
            </div>
        </section>
    );
};

export default VelocityText;
