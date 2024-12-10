import GradualSpacing from "@/components/ui/gradual-spacing";
import WordRotate from "@/components/ui/word-rotate";
import {Spotlight} from "@/components/ui/spotlight";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import React from "react";
import ShinyButton from "@/components/ui/shiny-button";
import VelocityText from "@/components/ui/velocity-text";
import GridPattern from "@/components/ui/grid-pattern";
import {cn} from "@/lib/utils";
import MiddlePage from "@/components/pages/middle";
import LogoSection from "@/components/ui/logo-section";

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
            <div className="bg-black text-white">
                <Spotlight className="top-40 left-0 md:left-60 md:-top-5" fill="white"/>

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

                    <div className="flex items-center justify-center w-full mt-24">
                        <AnimatedTooltip items={people}/>
                    </div>

                    <div className="flex ml-5 flex-col items-center">
                        <ShinyButton className="mt-16 mb-28">ESTIMATE PROJECT</ShinyButton>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <VelocityText/>

                <h1 className="text-6xl font-bold flex items-center justify-center mt-72 w-full">Loved by people all <br/> over the Romania</h1>

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "absolute left-[780px] top-[-380px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "absolute z-[99] left-[890px] top-[990px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "absolute z-[99] left-[-780px] top-[700px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <MiddlePage/>

                <div className="mt-20">
                    <h1 className="text-xl flex items-center justify-center w-full">Technologies We Trust to Build the Future</h1>

                    <LogoSection/>
                </div>

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "absolute z-[99] left-[700px] top-[1850px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <div className="h-[1000vh] bg-transparent"/>
            </div>


        </div>
    );
}