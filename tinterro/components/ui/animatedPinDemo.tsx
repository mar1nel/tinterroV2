"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="h-[30rem] w-full flex items-center justify-center">
      <PinContainer
        title="Navigate to Location"
        href="https://maps.app.goo.gl/e7S6eWpQw26X2snj6"
        className="w-[15rem] h-[20rem] p-4"
        containerClassName="flex items-center justify-center rounded-lg"
      >
        <div className="flex basis-full flex-col p-2 ml-4 tracking-tight text-slate-100/50 sm:basis-1/2">
          <h3 className="max-w-xs pb-2 !m-0 font-bold text-base text-zinc-800">
            Oradea
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-zinc-500">
              Strada Universitatii 1 <br />
              +40 748 755 894 <br />
            </span>
          </div>

          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-zinc-500">
              Mon Tue Wed Thu Fri <br />
              10:00 - 20:00 <br />
            </span>
          </div>

          <h3 className="max-w-xs !pt-5 !m-0 font-bold text-base text-zinc-800">
            Timisoara
          </h3>
          <div className="text-base !mt-2 !p-0 font-normal">
            <span className="text-zinc-500">
              Aleea Studentilor <br />
              +40 748 755 894 <br />
            </span>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-zinc-500">
                Mon Tue Wed Thu Fri <br />
                10:00 - 20:00 <br />
              </span>
            </div>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gray-500 via-gray-800 to-gray-500" />
        </div>
      </PinContainer>
    </div>
  );
}
