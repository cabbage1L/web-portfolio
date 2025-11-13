import { motion } from "framer-motion";
import { Mail, Sparkles, Phone } from "lucide-react";
import SectionTitle from "./Title";

export default function AboutSection() {
    return (
        <section id="About" className="min-h-screen scroll-mt-[2.3rem] bg-black text-white flex flex-col justify-center items-center">

            <SectionTitle title={"About"} />
            <div className="flex flex-col md:flex-row items-center sm:gap-12 max-w-6xl w-full">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center select-none"
                >
                    <img
                        src="./me.png"
                        alt="Profile framed photo"
                        className="w-64 md:w-[420px] rounded-lg shadow-xl object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex-1 max-w-xl"
                >
                    <div className="">
                        <h1 className="text-5xl sm:text-9xl font-extrabold leading-tight">Hi!!</h1>
                        <div className="w-[80%]">
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-lg ps-2">
                                My name is <span className="font-semibold text-white">Athit Disdam</span>.
                                I love creating new ideas and developing my skills as a full-stack developer.
                            </p>
                        </div>

                        <p className="text-gray-400 mt-2 text-sm sm:text-lg ps-12 sm:ps-22">
                            I'm committed to learning and growing every day.
                            Here, you'll find my work, projects, and stories about the things I'm passionate about.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="hidden sm:flex items-center justify-center gap-10 sm:gap-38 text-sm text-gray-400 mt-12 flex-wrap">
                {/* <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span></span>
                </div> */}
                <Sparkles size={16} className="text-yellow-400" />
                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>0839285788</span>
                </div>
                <Sparkles size={16} className="text-yellow-400" />
                <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>athit.disdam@gmail.com</span>
                </div>
                <Sparkles size={16} className="text-yellow-400" />
            </div>
        </section>

    );
}
