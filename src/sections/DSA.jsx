import React from "react";
import "../styles/DSA.css";

const DSA = () => {
  return (
    <section id="dsa" className="dsa">
      <h2>PROBLEM SOLVING</h2>

      {/* STATS */}
      <div className="dsa-stats">
        <div className="stat-card">
          <h3>150+</h3>
          <p>Problems Solved</p>
        </div>

        <div className="stat-card">
          <h3>1600+</h3>
          <p>LeetCode Rating</p>
        </div>

        <div className="stat-card">
          <h3>50+</h3>
          <p>Days Streak</p>
        </div>
      </div>

      {/* PLATFORMS */}
      <div className="platforms">
        <a href="https://leetcode.com/u/0iu72bB0fI/" target="_blank" rel="noopener noreferrer">LeetCode</a>
      </div>

      {/* TOPICS */}
      <div className="topics">
        <span>Arrays</span>
        <span>Strings</span>
        <span>Linked List</span>
        <span>Heaps</span>
        <span>Stack and Queue</span>
        <span>Tree</span>
        <span>Graph</span>
      </div>
    </section>
  );
};

export default DSA;