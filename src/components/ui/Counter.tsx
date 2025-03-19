"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Counter = ({ value }: { value: any }) => {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (!startCounting) return; 

    const duration = 2; 
    const frameRate = 30; 
    const totalFrames = duration * frameRate;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.round(progress * value));

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [startCounting, value]);

  return (
    <motion.div
      onViewportEnter={() => setStartCounting(true)} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: startCounting ? 1 : 0, y: startCounting ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center"
    >
      {count}
    </motion.div>
  );
};


