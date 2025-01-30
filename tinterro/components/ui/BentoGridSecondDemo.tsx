import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { IconClipboardCopy, IconFileBroken, IconShoppingCart, IconSignature, IconTableColumn } from "@tabler/icons-react";

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

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-neutral-100"></div>
);

const items = [
    {
        title: "Web Design & UI/UX",
        description: "Create stunning and user-friendly websites with a focus on responsive design and seamless user experience.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Content Management (CMS)",
        description: "We build powerful, flexible, and easy-to-use CMS platforms to manage your website’s content.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Social Media Marketing (SMM)",
        description: "Enhance your brand’s presence across various social media platforms with targeted strategies and campaigns.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web Development (Frontend & Backend)",
        description: "Develop scalable, secure, and high-performance web applications, from user interface to server-side functionality.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Prototypes & MVPs",
        description: "Turn your ideas into functional prototypes or MVPs (Minimum Viable Products) to test, validate, and refine your concepts.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "E-commerce Solutions",
        description: "Develop and optimize online stores with secure payment gateways, inventory management, and a seamless shopping experience.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconShoppingCart className="h-4 w-4 text-neutral-500" />,
    },
];
