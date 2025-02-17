import React, { useState } from "react";
import "./style/AboutUs.css";
import { Facebook, Twitter, Instagram, } from "lucide-react";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I start using QuizzPro?",
      answer: "Simply sign up on our platform and start exploring the quiz categories.",
    },
    {
      question: "Can I track my progress?",
      answer: "Yes, QuizzPro allows you to track your performance and improvement over time.",
    },
    {
      question: "Is QuizzPro free?",
      answer: "We offer both free and premium plans. Premium plans offer additional features and access to exclusive content.",
    },
    {
      question: "What types of quizzes are available?",
      answer: "We provide quizzes across multiple categories including education, general knowledge, and competitive exams.",
    },
  ];

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
        <hr />
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
        <hr />
        <div className="about-card">
          <h2>Meet the Team</h2>
          <p>
            We are a passionate group of educators, developers, and quiz enthusiasts dedicated to making learning
            an exciting journey.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
      <div className="faq-container">
        <div className="title">
          <h2>
            Frequently <br />
            <span>
              <b>asked questions</b>
            </span>
          </h2>
        </div>
        <div className="faq-boxes">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-box ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <p>{faq.question}</p>
                <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        <div className="about-footer">
            <h3>Join Us Today!</h3>
            <p>Start your journey with <strong>QuizzPro</strong> now.</p>
            <a href="/signup" className="about-btn">Sign Up</a>
        </div>
      </section>
      <hr className="custom-hr"/>
      {/* Social Media Section */}
      <section className="about-social-media">
        <h3>Follow Us on Social Media</h3>
        <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} className="social-icon" />
        </a>
      </div>
      </section>
    </div>
  );
};

export default AboutUs;
