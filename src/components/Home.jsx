import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Typewriter from "./Typewriter";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <section id="Home" className="scroll-mt-24 min-h-[97dvh] rounded-4xl sm:rounded-2xl pt-5 sm:pt-10 bg-gray-300 flex flex-col items-center relative">
      {/* Left Sidebar */}
      <div className="flex flex-col justify-center items-center text-sm leading-relaxed text-gray-900">
        <p className="hidden xl:inline absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 rotate-[-90deg] font-pixelify whitespace-nowrap z-50">
          Hello i am <br /> programer
        </p>
      </div>
      <div className="flex mt-24" >
        {/* Content */}
        <div className="flex-1 flex flex-col items-center">
          {/* Preload */}
          {!isLoaded ? (
            <div className="w-[40%] sm:w-[100%] aspect-video bg-black flex flex-col items-center justify-center rounded-t-md shadow-lg text-white">
              <div className="text-xl sm:text-3xl mb-4 animate-pulse font-pixelify">cobe Adventure</div>
              <button
                onClick={() => setIsLoaded(true)}
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-md shadow-md transition-all"
              >
                START GAME
              </button>
            </div>
          ) : (
            // iframe
            <div className="w-[40%] sm:w-[100%] aspect-video bg-black flex items-center justify-center rounded-t-md shadow-lg overflow-hidden">
              <iframe
                src="https://cabbage1l.github.io/cobe-adventure/coke_game1.0.12.html"
                title="Adventure"
                className="w-full h-full border-none rounded-md"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="overflow-hidden w-[40%] sm:w-[100%] bg-black py-2 rounded-b-md font-pixelify">
            <AnimatedSection />
          </div>
        </div>
      </div>
      <div className="pt-20 sm:hidden flex flex-col w-50">
        <p className="text-black font-bebas font-normal">BUILD</p>
        <Typewriter
          texts={[
            "WEBSITES",
            "GAMES",
            "APPS"
          ]}
          speed={80}
          pause={1200}
          className="text-xl font-bold sm:text-2xl "
        />
      </div>

    </section>
  );
}

