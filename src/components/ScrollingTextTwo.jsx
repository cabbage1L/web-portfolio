import { motion } from "framer-motion";

const ScrollingTextTwo = ({ title, duration, size}) => {
  // สร้างข้อความซ้ำ 2 ครั้งให้ต่อกันยาว ๆ
  const repeatedText = `${title} ${title}`;
  const dt = duration
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex whitespace-nowrap "
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: dt, // ปรับความเร็วที่นี่
          ease: "linear",
        }}
      >
        {/* ซ้ำ 2 ชุดต่อเนื่อง */}
        <span className="text-center font-pixelify" style={{ fontSize: size }}>
          {repeatedText}
        </span>
        <span className="text-center font-pixelify" style={{ fontSize: size }}>
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollingTextTwo;
