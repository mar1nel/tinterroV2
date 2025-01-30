"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
                                           text,
                                           duration = 0.5,
                                           delayMultiple = 0.04,
                                           framerProps = {
                                               hidden: { opacity: 0, x: -20 },
                                               visible: { opacity: 1, x: 0 },
                                           },
                                           className,
                                       }: GradualSpacingProps) {
    const [inView, setInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setInView(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <div
            className={cn(
                "flex flex-row justify-center whitespace-nowrap", // Prevents vertical stacking
                className
            )}
            ref={containerRef}
        >
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: i * delayMultiple }}
                        className="inline-flex drop-shadow-sm"
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
}
