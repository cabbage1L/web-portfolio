
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
// import Logo from '../assets/portcoke.svg';
// import Headspin from "./Headspin";

const menuItems = ["Home", "Project", "About", "Contact"];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const isScrollingByClick = useRef(false);
    const [expanded, setExpanded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const handleScroll = () => {
        if (isScrollingByClick.current) return;
        const scrollPos = window.scrollY + window.innerHeight / 2;
        for (const item of menuItems) {
            const section = document.getElementById(item);
            if (section) {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                if (scrollPos >= top && scrollPos < bottom) {
                    setActive(item);
                    setExpanded(false);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (item) => {
        setActive(item);
        setExpanded(false);
        isScrollingByClick.current = true;
        const section = document.getElementById(item);
        section?.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            isScrollingByClick.current = false;
        }, 600); 
    };


    const handleHoverStart = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setFlipped(!flipped);
    };


    return (
        <nav className="fixed top-0 left-0 w-full flex flex-col px-4 sm:px-10 md:px-20 pt-4 sm:pt-6 z-50 select-none items-center">
            <motion.div
                className={`${expanded ? "h-58 rounded-[28px] bg-white/50 backdrop-blur-md py-1" : "h-14 rounded-full bg-white/50 backdrop-blur-md py-1 items-center"
                    } flex justify-between w-full sm:h-auto px-1 sm:px-0 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none`}
            >
                {/* name */}
                <div className={`${expanded ? "py-3" : "" } `}>
                    <div className="flex ps-4 sm:ps-0 top-10">
                        <div className={`${expanded ? "text-black" : "text-black"
                            } text-md sm:text-xl md:text-2xl font-bold`}>ATHIT</div>
                    </div>
                </div>

                {/* Menu */}
                <div className="hidden sm:flex h-12 items-center bg-white/50 backdrop-blur-md rounded-full px-1 py-1 space-x-2">
                    {menuItems.map((item) => (
                        <motion.button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`relative px-6 py-2 rounded-full font-medium text-m transition-all ${active === item ? "text-black" : "text-gray-900 hover:text-black"
                                }`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {active === item && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-yellow-300 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                />
                            )}
                            {item}
                        </motion.button>
                    ))}
                </div>
                {/* Menu+logo */}
                <div className={`${expanded ? "flex" : " flex"}`}>
                    
                    {/* mobile Menu */}
                    <div className="flex sm:hidden h-12">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="p-1 text-black"
                            aria-label="Toggle Menu"
                        >
                            {/* Burger icon */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                     {/* head */}
                    <div className={`${expanded ? "flex" : " flex"}`}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-300 rounded-full shadow-md h-12 sm:h-15"
                        >
                            <motion.div
                                onHoverStart={handleHoverStart}
                                onClick={handleHoverStart}
                                animate={{ rotateY: flipped ? 360 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                onAnimationComplete={() => setIsAnimating(false)}
                                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", }}
                            >
                                <img src="./head/head.svg" alt="headhead" className="w-12 h-12 sm:w-15 sm:h-15" />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.1 }}
                            className="absolute mt-15  flex flex-col gap-3 "
                        >
                            {menuItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`text-lg font-medium ${active === item ? "text-yellow-600" : "text-gray-800"
                                        }`}
                                >
                                    
                                    {item}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
        </nav>
    );
}

