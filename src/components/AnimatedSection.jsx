import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollingTextTwo from "./ScrollingTextTwo";

export default function AnimatedSection() {
    const animations = [
        { src: "./cokewithbikeW.webp", duration: 2000 },
        { src: "./bikeTomoto.webp", duration: 600 }, 
        { src: "./cokewithmoto.webp", duration: 3000 },
    ];

    const [currentAnim, setCurrentAnim] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentAnim((prev) => (prev + 1) % animations.length);
        }, animations[currentAnim].duration);

        return () => clearTimeout(timeout);
    }, [currentAnim]);


    return (
        <div className="w-full h-20 sm:h-40 bg-black text-white flex flex-col justify-center relative select-none">
            <div className="absolute inset-x-0 -top-2 sm:top-0">
                <ScrollingTextTwo title={" A coder chasing riches --- A coder chasing riches --- A coder chasing riches ---"} duration={105} size={{ mobile: 10, tablet: 14, desktop: 18 }}/>
            </div>
            <div className="px-5">
                <div className="w-full max-w-6xl flex">
                    {/* ช่องซ้าย */}
                    <div className=" flex-1 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={animations[currentAnim].src}
                                src={animations[currentAnim].src}
                                alt="Animated Sprite"
                                className="w-16 h-16 sm:w-32 sm:h-32 object-contain absolute mt-5"
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0 }}
                            />
                        </AnimatePresence>
                    </div>
                    {/* ช่องกลาง */}
                    <div className="flex-[2] w-100 flex items-center justify-center">
                        <p className="text-center text-sm sm:text-2xl text-gray-300">
                           "Not our game yet."
                        </p>
                    </div>

                    {/* ช่องขวา */}
                    <div className="flex-[1] w-80 flex items-center justify-center">
                        <dir>
                            <img src="./cokewithwork.webp" alt="Pixel" className="w-16 h-16 sm:w-32 sm:h-32 mt-7" />
                        </dir>
                    </div>

                </div>
            </div>
             <div className="absolute inset-x-0 -bottom-2 sm:bottom-0">
                <ScrollingTextTwo title={" A coder chasing riches --- A coder chasing riches --- A coder chasing riches ---"} duration={105} size={{ mobile: 12, tablet: 14, desktop: 18 }} />
            </div>
        </div>
    );
}
