import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>CONTACT</h2>
      <p className="subtitle">Let’s build something great together 🚀</p>

      <div className="contact-container">

        {/* LEFT SIDE - CONTACT */}
        <div className="contact-grid">

          <motion.a href="mailto:yourmail@gmail.com" className="contact-card" whileHover={{ scale: 1.05 }}>
            <h3>Email</h3>
            <p>nitinga2005@gmail.com</p>
          </motion.a>

          <motion.a href="https://github.com/Nitin-G-A" target="_blank" className="contact-card" whileHover={{ scale: 1.05 }}>
            <h3>GitHub</h3>
            <p>View Projects</p>
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/nitin-g-a-728011280" target="_blank" className="contact-card" whileHover={{ scale: 1.05 }}>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </motion.a>

        </div>

        {/* RIGHT SIDE - GOALS */}
        <div className="goals-box" style={{ alignSelf: "flex-end" }}>
          <h3>Next Goals</h3>
          <p>
            Pushing past 500+ problems while targeting Specialist on Codeforces on LeetCode.
            Focused on mastering Advanced DP, Graph algorithms, and Segment Trees.
          </p>

          <div className="goals-tags">
            <span>500+ Problems</span>
            <span>LeetCode 1000+</span>
            <span>Advanced DP</span>
            <span>Graph Mastery</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;