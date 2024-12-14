"use client";

export default function LogoSection() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 px-2 sm:px-4">
            {[
                { src: "./logos/html5-original.svg", alt: "HTML5 Logo" },
                { src: "./logos/nestjs-original.svg", alt: "NestJS Logo" },
                { src: "./logos/nodejs-original.svg", alt: "NodeJS Logo" },
                { src: "./logos/postgresql-original.svg", alt: "PostgreSQL Logo" },
                { src: "./logos/css3-plain-wordmark.svg", alt: "CSS3 Logo" },
                { src: "./logos/figma-original.svg", alt: "Figma Logo" },
                { src: "./logos/git-original.svg", alt: "GIT Logo" },
                { src: "./logos/react-original-wordmark.svg", alt: "React Logo" },
                { src: "./logos/sass-original.svg", alt: "Sass Logo" },
                { src: "./logos/javascript-original.svg", alt: "JavaScript Logo" },
            ].map((logo, index) => (
                <div
                    key={index}
                    className="group w-16 h-24 sm:w-24 sm:h-32 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                </div>
            ))}
        </div>
    );
}
