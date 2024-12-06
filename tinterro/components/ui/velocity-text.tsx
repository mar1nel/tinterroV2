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

    const skewXRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <section className="relative bg-neutral-50 text-neutral-950">
            {/* Wrapper for the scrollable content, fixed height */}
            <div className="sticky top-0 h-[150px] overflow-hidden">
                <motion.p
                    style={{ skewX, x }}
                    className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                >
                    Nothing in this world can take the place of persistence. Talent will
                    not; nothing is more common than unsuccessful men with talent. Genius
                    will not;
                </motion.p>
            </div>

            {/* Long scrollable space to simulate scrolling */}
            <div className="h-[1000vh]" />
        </section>
    );
};

export default VelocityText;
