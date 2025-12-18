import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/CardSlider.css";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";

const QuizCards = () => {
  const navigate = useNavigate(); // Initialize navigation

  const initialCards = [
    {
      title: "ENTRANCE",
      description:
        "Prepare for entrance exams with expert guidance tailored to help you achieve your desired score.",
      route: "/entrance", 
    },
    {
      title: "IELTS/PTE",
      description:
        "Prepare for IELTS and PTE with expert guidance tailored to help you achieve your desired score.",
      route: "/testguides",
    },
    {
      title: "QUIZ",
      description:
        "Prepare for quizzes with expert guidance tailored to help you achieve your desired score.",
      route: "/random",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
      setIsAnimating(false);
    }, 200);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCards((prevCards) => [
        prevCards[prevCards.length - 1],
        ...prevCards.slice(0, -1),
      ]);
      setIsAnimating(false);
    }, 200);
  };

  const handleCardClick = (route) => {
    navigate(route); // Navigate to the clicked card's route
  };

  return (
    <div className="quiz-cards-container">
      <button className="control-btn previous" onClick={handlePrevious}>
        <img src={Vector1} alt="Previous" />
      </button>
      <div className="quiz-cards">
        <div className={`cards-wrapper ${isAnimating ? "animating" : ""}`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`quiz-card ${index === 1 ? "active" : ""}`}
              onClick={() => handleCardClick(card.route)} // clickable
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="control-btn next" onClick={handleNext}>
        <img src={Vector2} alt="Next" />
      </button>
    </div>
  );
};

export default QuizCards;
