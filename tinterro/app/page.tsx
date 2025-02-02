import { BentoGridSecondDemo } from "@/components/ui/BentoGridSecondDemo";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import GradualSpacing from "@/components/ui/gradual-spacing";
import VelocityText from "@/components/ui/velocity-text";
import NumberTicker from "@/components/ui/number-ticker";
import ShinyButton from "@/components/ui/shiny-button";
import LogoSection from "@/components/ui/logo-section";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { Spotlight } from "@/components/ui/spotlight";
import MiddlePage from "@/components/pages/middle";
import WordRotate from "@/components/ui/word-rotate";
import CardNumber from "@/components/ui/card-number";
import Image from "next/image";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { AnimatedPinDemo } from "@/components/ui/animatedPinDemo";
// import GridPattern from "@/components/ui/grid-pattern";
// import {cn} from "@/lib/utils";
// import CardNumber from "@/components/ui/card-number";

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
      <div className="bg-black text-white overflow-hidden max-w-screen">
        <div className="absolute inset-x-0 top-14 flex items-center justify-center max-w-full overflow-x-hidden">
          <SlideTabs />
        </div>

        <Spotlight
          className="top-40 left-0 md:left-auto md:translate-x-1/2 md:-top-5"
          fill="white"
        />

        <CardNumber
          size={1}
          number="199$"
          label="Starting Price"
          top="45%"
          right="15%"
        />

        <div>
          <GradualSpacing
            className="relative z-10 mt-64 font-display text-center text-4xl font-bold -tracking-wider text-[#CCCCCC] md:text-7xl md:leading-[5rem]"
            text="Build & Ship your"
          />

          <div className="flex flex-col justify-center items-center w-full px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <div className="relative z-10 font-display text-center text-4xl font-bold -tracking-wide text-[#CCCCCC] sm:text-5xl md:text-7xl md:leading-[5rem] whitespace-nowrap">
                <GradualSpacing className="inline-block" text="digital" />
              </div>

              <div className="relative z-10 mt-0">
                <WordRotate
                  className="font-bold text-[#CCCCCC] -tracking-wider text-4xl sm:text-5xl md:text-7xl whitespace-nowrap"
                  words={[
                    "product",
                    "presence",
                    "brand",
                    "experience",
                    "design",
                    "interface",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-24">
            <AnimatedTooltip items={people} />
          </div>

          <div className="flex ml-5 flex-col items-center">
            <ShinyButton className="mt-16 mb-28">ESTIMATE PROJECT</ShinyButton>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <VelocityText />

        <h1 className="text-center text-4xl md:text-6xl font-bold flex items-center justify-center mt-36 md:mt-72 w-full">
          Loved by people all <br /> over the Romania
        </h1>

        <h1 className="text-center text-lg sm:text-xl max-w-none lg:max-w-4xl 2xl:max-w-5xl mt-4 sm:mt-6 md:mt-8 text-zinc-800 flex flex-col items-center justify-center mx-auto px-4 sm:px-0">
          We&apos;ve helped businesses and people in Romania build websites.
          <br />
          Whether you&apos;re just starting out or looking to upgrade, we make
          the process easy.
          <br />
          Check out what some of our clients think.
        </h1>

        {/*<GridPattern*/}
        {/*    className={cn(*/}
        {/*        "absolute left-[50%] top-[-10%] transform -translate-x-1/2 w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"*/}
        {/*    )}*/}
        {/*/>*/}

        {/*<GridPattern*/}
        {/*    className={cn(*/}
        {/*        "absolute z-[99] left-[70%] top-[80%] transform -translate-x-1/2 w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"*/}
        {/*    )}*/}
        {/*/>*/}

        {/*<GridPattern*/}
        {/*    className={cn(*/}
        {/*        "absolute z-[99] left-[20%] top-[50%] transform -translate-x-1/2 w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"*/}
        {/*    )}*/}
        {/*/>*/}

        <MiddlePage />

        <div className="mt-20">
          <h1 className="text-xl text-zinc-800 flex items-center justify-center w-full">
            Technologies we use to Build the Future
          </h1>

          <LogoSection />
        </div>

        {/*<GridPattern*/}
        {/*    className={cn(*/}
        {/*        "absolute left-[700px] top-[1850px] w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"*/}
        {/*    )}*/}
        {/*/>*/}

        {/*<GridPattern*/}
        {/*    className={cn(*/}
        {/*        "absolute -left-[500px] top-[2250px] w-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"*/}
        {/*    )}*/}
        {/*/>*/}

        {/*<GridPattern*/}
        {/*    className={cn(*/}
        {/*        "absolute left-[500px] top-[2700px] w-full [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"*/}
        {/*    )}*/}
        {/*/>*/}

        <div className="flex flex-col overflow-hidden px-4 md:px-8">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-dark text-center">
                  From Concept to Creation
                  <br />
                  <span className="text-4xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-tight">
                    Explore Our Work
                  </span>
                </h1>
              </>
            }
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/showcase.png"
                alt="hero"
                width={1000}
                height={700}
                className="w-full h-full object-cover rounded-2xl"
                draggable={false}
              />
            </div>
          </ContainerScroll>

          <h1 className="text-xl sm:text-base md:text-lg lg:text-xl max-w-5xl -mt-28 sm:-mt-36 md:-mt-44 text-zinc-800 flex flex-col items-center justify-center mx-auto text-center px-4">
            Whether it&apos;s a complex website redesign or a custom software
            project, our team excels at breaking down problems with effective
            solutions, finding the smartest paths forward, and delivering
            results that exceed expectations. Our process is all about
            creativity and precision, ensuring that every project not only works
            flawlessly but also looks incredible.
          </h1>

          <GradualSpacing
            className="relative z-10 mt-20 sm:mt-28 font-display text-center font-bold text-black
             text-2xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl
             leading-tight"
            text="Achieve Exceptional Results"
          />

          <GradualSpacing
            className="relative z-10 font-display text-center font-bold text-black
             text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl
             leading-tight"
            text="with Our Expertise"
          />

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-32 mt-12 sm:mt-16 font-bold text-3xl sm:text-5xl md:text-7xl tracking-[-2px] sm:tracking-[-5px]">
            {/* Wrapper for each value + label */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <NumberTicker value={500} />
                <span>+</span>
              </div>
              <span className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 tracking-[1px]">
                SAVED HOURS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <NumberTicker value={215} />
                <span>+</span>
              </div>
              <span className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 tracking-[1px]">
                PROTOTYPES
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <NumberTicker value={10} />
                <span>k +</span>
              </div>
              <span className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 tracking-[1px]">
                LINES OF CODE
              </span>
            </div>
          </div>

          <h1 className="text-center text-4xl md:text-6xl font-bold flex items-center justify-center mt-20 md:mt-72 w-full">
            Our Services <br /> and other things we do
          </h1>

          <div
            className={`pt-16 ${isDarkMode ? "" : "dark"}`}
            style={{ minHeight: "100vh" }}
          >
            <BentoGridSecondDemo />
          </div>
        </div>

        <h1 className="text-center text-4xl md:text-6xl font-bold flex items-center justify-center mt-20 md:mt-36 w-full">
          More about <br /> Tinterro
        </h1>

        <AnimatedPinDemo />

        <div className="h-[1000vh] bg-transparent" />
      </div>

      {/*<GridPattern*/}
      {/*    className={cn(*/}
      {/*        "absolute top-[3600px] w-full [mask-image:radial-gradient(_circle_at_center,white,transparent)]"*/}
      {/*    )}*/}
      {/*/>*/}
    </div>
  );
}
