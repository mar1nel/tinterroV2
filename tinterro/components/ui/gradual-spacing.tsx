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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger the animation when 10% of the component is visible
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
      <div className="flex justify-center space-x-1" ref={containerRef}>
        <AnimatePresence>
          {text.split("").map((char, i) => (
              <motion.h1
                  key={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"} // Trigger animation based on visibility
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: i * delayMultiple }}
                  className={cn("drop-shadow-sm", className)}
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.h1>
          ))}
        </AnimatePresence>
      </div>
  );
}
