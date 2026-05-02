import React from "react";
import { motion } from "framer-motion";
import "../styles/home.css";
import myPhoto from "../assets/myphoto.jpg";
import { useState } from "react";

const Home = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.target;
    const { offsetX, offsetY } = e.nativeEvent;

    const x = (offsetY / offsetHeight - 0.5) * 20;
    const y = (offsetX / offsetWidth - 0.5) * 20;

    setRotate({ x: -x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="home">

      {/* LEFT SIDE */}
      <motion.div 
        className="home-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="welcome-text" style={{ color: "var(--accent-color)" }}>Welcome to my portfolio</p>
        <h1 style={{ whiteSpace: "nowrap" }}>Nitin G A</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", whiteSpace: "nowrap" }}>AI-Driven Web Developer | Turning Ideas into Reality with DSA</h2>
        <p>
          150+ Problems Solved In LeetCode
        </p>
        <div className="buttons">
          <button className="btn primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
          <button className="btn secondary" onClick={() => window.open("https://github.com/Nitin-G-A", "_blank")}>GitHub Profile</button>
        </div>
      </motion.div>

      {/* RIGHT SIDE (Glow Circle for now) */}
      <motion.div 
        className="home-right"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
>
       <img src={myPhoto} alt="Nitin" className="profile-img" />
    </motion.div>
    </section>
  );
};

export default Home;