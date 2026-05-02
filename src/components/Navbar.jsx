import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      style={styles.nav}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={styles.logo}>
        N.
      </h2>

      <ul style={styles.links}>
        {['Home', 'About', 'Skills', 'Projects', 'DSA', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              style={styles.linkItem}
              onMouseEnter={(e) => {
                e.target.style.color = "#2dd4bf"; // teal-400
                e.target.style.textShadow = "0 0 10px rgba(45,212,191,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#d1d5db"; // gray-300
                e.target.style.textShadow = "none";
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    position: "fixed",
    width: "100%",
    top: 0,
    background: "rgba(17, 24, 39, 0.8)", // gray-900 with opacity
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(31, 41, 55, 0.8)", // gray-800
    zIndex: 1000,
    boxSizing: "border-box",
    height: "100px"
  },
  logo: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    margin: 0,
    // Emulating bg-gradient-to-r from-purple-400 to-teal-400
    background: "linear-gradient(to right, #c084fc, #2dd4bf)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  links: {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  },
  linkItem: {
    textDecoration: "none",
    color: "#d1d5db", // gray-300
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  }
};

export default Navbar;