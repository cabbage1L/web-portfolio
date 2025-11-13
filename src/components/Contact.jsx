import { motion } from "framer-motion";
import { FaDiscord, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import ScrollingText from "./ScrollingText";

export default function Contact() {
    return (
        <section id="Contact" className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10 font-pixelify">
            <ScrollingText title={"Ba Bye Earthling 😎 Farewell, Human 🫡"} duration={105} />
            <div className="mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-8 md:p-12 text-center max-w-6xl w-full bg-[#121212]"
                >
                    <h2 className="text-blue-300 text-3xl sm:text-6xl mb-6 tracking-widest">CONTACT</h2>

                    <p className="text-sm sm:text-2xl leading-relaxed font-sans mb-2">
                        Thank you for visiting! ✨
                    </p>
                    <p className="text-sm sm:text-2xl leading-relaxed font-sans mb-2">
                        If you're interested or have any questions, please don’t hesitate to get in touch.
                    </p>
                    <p className="text-sm sm:text-2xl leading-relaxed font-sans mb-2">
                        You can also follow my other work at [].
                    </p>
                    <p className="text-md sm:text-2xl leading-relaxed font-sans mb-6">
                        athit.disdam@gmail.com
                    </p>

                    {/* Avatar */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                            <img src="./idel_coke.webp" alt="Pixel" className="w-16 h-16" />

                        </div>
                        <h3 className="text-md sm:text-xl text-white mb-4">ATHIT</h3>

                        {/* โซเชียล */}
                        <div className="flex items-center justify-center gap-6 text-2xl">
                            <FaXTwitter className="hover:text-gray-400 transition-colors duration-300" />
                            <a
                                href="https://instagram.com/coke_peele"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400 transition-colors duration-300"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
