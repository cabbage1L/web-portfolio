import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Headspin() {
    const animations = [
        { src: "", duration: 3000 }, 
    ];

    const [currentAnim, setCurrentAnim] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentAnim((prev) => (prev + 1) % animations.length);
        }, animations[currentAnim].duration);

        return () => clearTimeout(timeout);
    }, [currentAnim]);


    return (

        <div className="items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.img
                    key={animations[currentAnim].src}
                    src={animations[currentAnim].src}
                    alt="Animated Sprite"
                    className="w-15 h-15 object-contain"
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0 }}
                />
            </AnimatePresence>
        </div>

    );
}
