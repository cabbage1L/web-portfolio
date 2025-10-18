import { useState } from "react";

export default function HoverImage() {
  const [transformFront, setTransformFront] = useState("rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)");
  const [transformBack, setTransformBack] = useState("rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    setTransformFront(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px) scale(1.05)`);
    setTransformBack(`rotateX(${rotateX / 2}deg) rotateY(${rotateY / 2}deg) translateZ(-10px) scale(1.05)`);
  };

  const reset = () => {
    setTransformFront("rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)");
    setTransformBack("rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)");
  };

  return (
    <div
      className="relative mt-8 md:mt-0 w-full md:w-1/2 flex justify-center"
      style={{ perspective: "500px " }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {/* ภาพหลัง */}
      <img
        src="./cokeWithbook.png"
        alt="Background"
        className="relative w-40 transition-transform duration-200 ease-out"
        style={{
          transform: transformBack,
          transformStyle: "preserve-3d",
        }}
      />

      {/* ภาพหน้า */}
      <img
        src="./assetbook.png"
        alt="Foreground"
        className="absolute w-55 transition-transform duration-200 ease-out pt-11"
        style={{
          transform: transformFront,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
