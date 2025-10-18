import { useEffect, useState } from "react";

export default function Typewriter({
  texts = [],
  speed = 100,  
  pause = 1500,    
  className = "",  
}) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[index % texts.length];

    if (!deleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, speed);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, speed / 2);
    } else if (!deleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayText.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, index, texts, speed, pause]);

  return (
    <span className={`font-Bebas text-black ${className}`}>
      {displayText}
      <span className="animate-pulse text-yellow-400">|</span>
    </span>
  );
}
