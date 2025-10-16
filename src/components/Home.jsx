
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Home() {
  return (
    <section id="Home" className="scroll-mt-24 min-h-[97dvh] rounded-2xl pt-10 bg-gray-300 flex flex-col items-center relative">
      {/* Left Sidebar */}
      <div className="flex flex-col justify-center items-center text-sm leading-relaxed text-gray-900">
        <p className="absolute left-4 top-1/2 -translate-y-1/2 rotate-[-90deg] font-pixelify whitespace-nowrap z-50">
          Hello i am <br /> programer
        </p>
      </div>
      <div className="flex mt-24 " >
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center" >
          {/* Placeholder สำหรับเกม Godot */}
          <div className="w-[100%] aspect-video bg-black flex items-center justify-center rounded-md shadow-lg">
            <iframe
              src="https://cabbage1l.github.io/cobe-adventure/coke_game1.0.12.html"
              title="Yohan's Adventure"
              className="w-full h-full border-none rounded-md"
              allowFullScreen
            ></iframe>
          </div>
          {/* Text marquee ด้านล่าง */}
          <div className="overflow-hidden w-[100%] bg-black py-2 rounded-md font-pixelify">
            <AnimatedSection />
          </div>
        </div>
      </div>
    </section>
  );
}

