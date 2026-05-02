import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">

      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>

        <p className="about-text">
         Computer Science student with strong foundations in Data Structures and Algorithms, Full Stack Development and Machine Learning.<br/>
         Built a secure real-time OS dashboard and an AI-powered learning platform using HTML, CSS, JavaScript, React, Node.js and SQL.<br/>
         Seeking a software engineering opportunity to apply problem-solving skills and build scalable systems.
        </p>

        <div className="about-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>

          <div className="card" style={{ flex: '1 1 200px', maxWidth: '250px' }}>
            <h3>EDUCATION</h3><br/>
            <p style={{ fontSize: "0.85rem" }}>B.tech in CSE-IT <br/> @ Reva university</p>
          </div>
          
          <div className="card" style={{ flex: '1 1 200px', maxWidth: '250px' }}>
            <h3>6+</h3><br/>
            <p>Projects</p>
          </div>

          <div className="card" style={{ flex: '1 1 200px', maxWidth: '250px' }}>
            <h3>150+</h3><br/>
            <p>DSA Problems</p>
          </div>

          <div className="card" style={{ flex: '1 1 200px', maxWidth: '250px' }}>
            <h3>5+</h3><br/>
            <p>Technologies</p>
          </div>


        </div>

      </motion.div>

    </section>
  );
};

export default About;