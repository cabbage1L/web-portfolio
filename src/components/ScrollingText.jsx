import { motion } from "framer-motion";

const ScrollingText = ({ title, duration}) => {
  // สร้างข้อความซ้ำ 2 ครั้งให้ต่อกันยาว ๆ
  const repeatedText = `${title} • ${title} • ${title} • ${title} • ${title}`;
  const dt = duration
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-black py-4 ">
      {/* Gradient ซ้าย */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
      {/* Gradient ขวา */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: dt, // ปรับความเร็วที่นี่
          ease: "linear",
        }}
      >
        {/* ซ้ำ 2 ชุดต่อเนื่อง */}
        <span className="text-center font-pixelify text-6xl px-8">
          {repeatedText}
        </span>
        <span className="text-center font-pixelify text-6xl px-8">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollingText;
