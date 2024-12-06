import GradualSpacing from "@/components/ui/gradual-spacing";
import WordRotate from "@/components/ui/word-rotate";
import {Spotlight} from "@/components/ui/spotlight";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import React from "react";
import {RainbowButton} from "@/components/ui/rainbow-button";
import ShinyButton from "@/components/ui/shiny-button";
import VelocityText from "@/components/ui/velocity-text";

export default function Home() {

    const people = [
        {
            id: 1,
            name: "Ababii Vicu",
            designation: "Software Engineer | Ui/Ux Designer",
            image: "/images/vicu.jpg",
        },
        {
            id: 2,
            name: "Ababii Marius",
            designation: "Product Manager | Graphic Designer",
            image: "/images/marius.jpeg",
        },
        {
            id: 3,
            name: "Opеn Position",
            designation: "SMM Specialist",
            image: "/images/open-position.jpg",
        },
        {
            id: 4,
            name: "Open Position",
            designation: "Front-End Developer",
            image: "/images/open-position.jpg",
        },
    ];
    const isDarkMode = 1;

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <Spotlight className="top-40 left-0 md:left-72 md:-top-20" fill="white"/>

            <div>
                <GradualSpacing
                    className="relative z-10 mt-72 font-display text-center text-4xl font-bold -tracking-widest text-[#CCCCCC] md:text-7xl md:leading-[5rem]"
                    text="Build & Ship your next"
                />

            <div className="justify-center items-center w-full">
                <div className="flex ml-[44rem] items-center space-x-4 md:space-x-8">
                    <div
                        className="relative z-10 font-display text-center text-4xl font-bold -tracking-widest text-[#CCCCCC] md:text-7xl md:leading-[5rem] whitespace-nowrap">
                        <GradualSpacing className="inline-block" text="digital"/>
                    </div>

                    <div className="relative z-10">
                        <WordRotate
                            className="font-bold text-[#CCCCCC] md:text-7xl whitespace-nowrap"
                            words={["product", "presence", "brand", "experience", "design", "interface"]}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-20 pr-5">
                <AnimatedTooltip items={people}/>
            </div>

                <div className="flex flex-col items-center">
                    <ShinyButton className="mt-20 mb-20">ESTIMATE PROJECT</ShinyButton>
                </div>
            </div>

                <VelocityText />


        </div>
    );
}