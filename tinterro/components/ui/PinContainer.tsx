import React from "react";
import { motion } from "framer-motion";

type PinContainerProps = {
  className?: string;
  containerClassName?: string;
  title: string;
  href: string;
  children: React.ReactNode;
};

const PinContainer: React.FC<PinContainerProps> = ({
  className,
  containerClassName,
  title,
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${containerClassName} cursor-pointer`}
    >
      <motion.div
        className={`relative ${className} group`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-500 via-gray-300 to-gray-500 opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </a>
  );
};

export { PinContainer };
