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
import CardNumber from "@/components/ui/card-number";
import {ContainerScroll} from "@/components/ui/container-scroll-animation";
import Image from "next/image";

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
                <CardNumber number="199$" label="Starting Price" top="40%" right="15%" />
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

                <h1 className="text-6xl font-bold flex items-center justify-center mt-72 w-full">Loved by people
                    all <br/> over the Romania</h1>

                <h1 className="text-xl max-w-5xl mt-8 text-zinc-800 flex flex-col items-center justify-center mx-auto text-center">
                    We've helped businesses and individuals across Romania create websites they're proud of.<br/>
                    Whether you're just starting out or looking to upgrade, we make the process easy and
                    stress-free.<br/>
                    Check out what some of our clients think.
                </h1>


                <GridPattern
                    className={cn(
                        "absolute left-[780px] top-[-380px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <GridPattern
                    className={cn(
                        "absolute z-[99] left-[890px] top-[990px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <GridPattern
                    className={cn(
                        "absolute z-[99] left-[-780px] top-[700px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <MiddlePage/>

                <div className="mt-20">
                    <h1 className="text-xl text-zinc-800 flex items-center justify-center w-full">Technologies We Trust
                        to Build the Future</h1>

                    <LogoSection/>
                </div>

                <GridPattern
                    className={cn(
                        "absolute left-[700px] top-[1850px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                />

                <div className="flex flex-col overflow-hidden">
                    <ContainerScroll
                    titleComponent={
                            <>
                                <h1 className="text-4xl font-semibold text-black dark:text-dark">
                                    From Concept to Creation<br/>
                                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                        Explore Our Work
                    </span>
                                </h1>
                            </>
                        }
                    >
                        <Image
                            src="/images/showcase.png"
                            alt="hero"
                            layout="responsive"
                            width={1200}
                            height={780}
                            className="mx-auto rounded-2xl object-cover h-full object-left-top"
                            draggable={false}
                        />
                    </ContainerScroll>

                    <h1 className="text-xl max-w-5xl -mt-44 text-zinc-800 flex flex-col items-center justify-center mx-auto text-center">
                        We've helped businesses and individuals across Romania create websites they're proud of.<br/>
                        Whether you're just starting out or looking to upgrade, we make the process easy and
                        stress-free.<br/>
                        Check out what some of our clients think.
                    </h1>

                </div>
                <div className="h-[1000vh] bg-transparent"/>
            </div>


        </div>
    );
}