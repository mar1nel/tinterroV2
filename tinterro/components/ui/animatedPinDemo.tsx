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
        title="Ababii Vicu-Marin"
        href="https://www.linkedin.com/in/ababii-vicu-b7a08a237/"
        className="w-[15rem] h-[20rem] p-4"
        containerClassName="flex items-center justify-center rounded-lg"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-zinc-800">
            LinkedIn
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-zinc-500">
              Young Development <br />
              Ui/UX Web Designer <br />
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
