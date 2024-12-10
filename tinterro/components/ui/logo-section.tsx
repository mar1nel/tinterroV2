"use client";

export default function LogoSection() {
    return (
        <div className="flex justify-center items-center space-x-2">
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/html5-original.svg" alt="HTML5 Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/nestjs-original.svg" alt="NestJS Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/nodejs-original.svg" alt="NodeJS Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/postgresql-original.svg" alt="PostgreSQL Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/react-original-wordmark.svg" alt="React Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/sass-original.svg" alt="Sass Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="group w-40 h-40 bg-white flex items-center justify-center transition-all duration-300 ease-in-out">
                <img src="./logos/javascript-original.svg" alt="JavaScript Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
        </div>
    );
}
