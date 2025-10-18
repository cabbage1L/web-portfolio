import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollingTextTwo = ({ title, duration, size}) => {
    const [fontSize, setFontSize] = useState(size.desktop);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setFontSize(size.mobile);
      else if (width < 1024) setFontSize(size.tablet);
      else setFontSize(size.desktop);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [size]);
  
  const repeatedText = `${title} ${title}`;
  const dt = duration
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex whitespace-nowrap "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: dt, 
          ease: "linear",
        }}
      >
        <span className="text-center font-pixelify" style={{ fontSize: `${fontSize}px` }}>
          {repeatedText}
        </span>
        <span className="text-center font-pixelify" style={{ fontSize: `${fontSize}px` }}>
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollingTextTwo;
