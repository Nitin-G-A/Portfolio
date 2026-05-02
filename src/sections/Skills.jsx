import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";
import "../styles/skills.css";

const skillsData = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: ["C++", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: ["React 18", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: ["Node.js", "MySQL", "FastAPI", "Render/Streamlit"]
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    skills: ["Git and GitHub", "VS Code", "Google Colab", "LeetCode", "Jupyter Notebook"]
  },
  {
    title: "Core",
    icon: <FaDatabase />,
    skills: ["Data Structures", "Algorithms"]
  }
];

const Skills = () => {
return (
  <section id="skills" className="skills">
    <h2>SKILLS</h2>

    <div className="skills-grid">

      {/* ROW 1 */}
      <div className="skills-row">
        {skillsData.slice(0, 3).map((item, index) => (
          <motion.div className="skill-card" key={index}>
            <div className="skill-header">
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>

            <div className="skill-tags">
              {item.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROW 2 (CENTERED) */}
      <div className="skills-row">
        {skillsData.slice(3, 5).map((item, index) => (
          <motion.div className="skill-card" key={index}>
            <div className="skill-header">
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>

            <div className="skill-tags">
              {item.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
};

export default Skills;