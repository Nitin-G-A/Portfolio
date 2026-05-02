import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "2px solid #2dd4bf",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", mass: 3, stiffness: 400, damping: 28 }}
      />
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#c084fc",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", mass: 1, stiffness: 800, damping: 28 }}
      />
      {/* Background glow attached to cursor */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,191,0.15) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
