import React from "react";
import "./style/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your ultimate destination for interactive and engaging quizzes!</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>QuizzPro</strong>, where learning meets fun! We provide interactive quizzes to help you 
            test your knowledge, prepare for exams, and engage with a community of learners.
          </p>
        </div>
        <hr/>
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            We aim to make learning accessible, engaging, and effective for everyone. Our quizzes help users 
            boost their skills while having fun!
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>
          <ul>
            <li> Diverse Quiz Categories</li>
            <li> Personalized Learning & Progress Tracking</li>
            <li> Real-time Mock Tests (LokSewa, IELTS, TSC, etc.)</li>
            <li> Competitive Challenges & Leaderboards</li>
          </ul>
        </div>
        <hr/>
        <div className="about-card">
          <h2>Meet the Team</h2>
          <p>
            We are a passionate group of educators, developers, and quiz enthusiasts dedicated to making learning
            an exciting journey.
          </p>
        </div>
      </section>

      <section className="about-footer">
        <h3>Join Us Today!</h3>
        <p>Start your journey with <strong>QuizzPro</strong> now.</p>
        <a href="/signup" className="about-btn">Sign Up</a>
      </section>
    </div>
  );
};

export default AboutUs;
