
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Logo from '../assets/portcoke.svg';
import Headspin from "./Headspin";


const menuItems = ["Home", "Project", "About", "Contact"];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const isScrollingByClick = useRef(false);
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
        isScrollingByClick.current = true;
        const section = document.getElementById(item);
        section?.scrollIntoView({ behavior: "smooth" });

        // เปิด scroll listener กลับมา หลัง animation เสร็จ
        setTimeout(() => {
            isScrollingByClick.current = false;
        }, 600); // 600ms = duration ของ Framer Motion
    };


    const handleHoverStart = () => {
        if (isAnimating) return; // ถ้ายังหมุนอยู่ → ไม่ทำอะไร
        setIsAnimating(true);
        setFlipped(!flipped);
    };


    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-30 pt-6 z-50 select-none">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="text-white text-2xl font-bold">ATHIT</div>
            </div>

            {/* Menu */}
            <div className="flex items-center bg-white/50 backdrop-blur-md rounded-full px-1 py-1 space-x-2">
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

            {/* Cart Button */}
            <motion.button
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-300 rounded-full shadow-md h-15"
            >
                <motion.button
                    onHoverStart={handleHoverStart}
                    animate={{ rotateY: flipped ? 360 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onAnimationComplete={() => setIsAnimating(false)}
                    style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", }}

                >
                    <img src="/head/head.svg" alt="headhead" className="w-15 h-15" />
                </motion.button>
            </motion.button>

        </nav>
    );
}

