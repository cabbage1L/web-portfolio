import React from "react";

export default function SectionTitle({ title }) {
  return (
    <div className="relative w-full h-20 sm:h-20 flex justify-center bg-gray-300 items-center rounded-xl select-none">
      <div className="w-full text-black font-pixelify text-3xl sm:text-6xl text-center">
        {title}
      </div>
    </div>
  );
}
