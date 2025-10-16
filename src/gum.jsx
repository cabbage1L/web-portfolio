import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxExample() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]); // scroll จาก 0 → 500 px ให้ y เคลื่อน 0 → -100 px

  return (
    <motion.div style={{ y }} className="h-96 bg-gradient-to-r from-purple-500 to-pink-500">
      Scroll Me
    </motion.div>
  );
}
