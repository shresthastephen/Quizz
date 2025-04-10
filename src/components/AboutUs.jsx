import React, { useState } from "react";
import "./style/AboutUs.css";
import { Facebook, Twitter, Instagram } from "lucide-react";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I start using QuizzPro?",
      answer:
        "Simply sign up on our platform and start exploring the quiz categories.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Yes, QuizzPro allows you to track your performance and improvement over time.",
    },
    {
      question: "Is QuizzPro free?",
      answer:
        "We offer both free and premium plans. Premium plans offer additional features and access to exclusive content.",
    },
    {
      question: "What types of quizzes are available?",
      answer:
        "We provide quizzes across multiple categories including education, general knowledge, and competitive exams.",
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
          <p className="text-justify">
            Welcome to <strong>QuizzPro</strong>, where learning meets fun! We
            provide interactive quizzes to help you test your knowledge, prepare
            for exams, and engage with a community of learners. Welcome to{" "}
            <strong>QuizzPro</strong>, where learning meets fun! We provide
            interactive quizzes to help you test your knowledge, prepare for
            exams, and engage with a community of learners.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 p-4 justify-center">
          {/* mission */}
          <div className="w-full md:max-w-md bg-white px-6 py-16 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
            <h1 className="text-2xl font-bold mb-6 text-[#ffac10]">
              Our Mission
            </h1>
            <p className="text-gray-700">
              We aim to make learning accessible, engaging, and effective for
              everyone. Our quizzes help users boost their skills while having
              fun!
            </p>
          </div>

          {/* offer */}
          <div className="w-full md:max-w-md bg-white px-6 py-16 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 ">
            <h1 className="text-2xl font-bold mb-6 text-[#ffac10]">
              What We Offer
            </h1>
            <p className="text-gray-700">
              - Diverse Quiz Categories <br />
              - Personalized Learning & Progress Tracking <br />
              - Real-time Mock Tests (LokSewa, IELTS, TSC, etc.) <br />-
              Competitive Challenges & Leaderboards
            </p>
          </div>
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
                  <span className="faq-toggle">
                    {activeIndex === index ? "-" : "+"}
                  </span>
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
          <p>
            Start your journey with <strong>QuizzPro</strong> now.
          </p>
          <a href="/signup" className="about-btn">
            Sign Up
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
