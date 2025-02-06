"use client";

import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconShoppingCart,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => <div></div>;

const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: "0",
    },
    animate: {
      x: "100%",
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className="relative flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 overflow-hidden">
      <img
        src="/images/logo_black.svg"
        alt="background"
        className="z-0 absolute inset-6 w-[60%] h-[60%] left-1/2 transform -translate-x-1/2 translate-y-[-10%]"
      />

      <motion.div
        className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-white to-transparent"
        variants={variants}
        initial="initial"
        whileHover="animate"
        style={{ width: "170%" }}
      />
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-300  p-2  items-start space-x-2 bg-white"
      >
        <img
          src="/images/vicu.jpg"
          alt="avatar"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          Your SMM is all set and running smoothly! The data pack will be sent
          in 24 hours by our team!
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-300 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white"
      >
        <p className="text-xs text-neutral-500">Thank you!</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Web Design & UI/UX & Prototypes",
    description:
      "Create stunning and user-friendly websites with a focus on responsive design and seamless user experience.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Content Management (CMS)",
    description:
      "We build powerful, flexible, and easy-to-use CMS platforms to manage your website’s content.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Enhance your brand’s presence across various social media platforms with targeted strategies and campaigns.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web Development (Frontend & Backend)",
    description:
      "Develop scalable, secure, and high-performance web applications, from user interface to server-side functionality.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Develop and optimize online stores with secure payment gateways, inventory management, and a seamless shopping experience.",
    header: <Skeleton />,
    className: "md:col-span-3",
    icon: <IconShoppingCart className="h-4 w-4 text-neutral-500" />,
  },
];
