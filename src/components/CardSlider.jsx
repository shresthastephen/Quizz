import React, { useState } from "react";
import "./style/CardSlider.css";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";

const QuizCards = () => {
  const initialCards = [
    {
      title: "ENTRANCE",
      description:
        "Prepare for entrance exams with expert guidance tailored to help you achieve your desired score.",
    },
    {
      title: "IELTS/PTE",
      description:
        "Prepare for IELTS and PTE with expert guidance tailored to help you achieve your desired score.",
    },
    {
      title: "QUIZ",
      description:
        "Prepare for quizzes with expert guidance tailored to help you achieve your desired score.",
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
              className={`quiz-card 
             ${index === 1 ? "active" : ""}`}
            >
              {/* <div className="card-icon"><img src ={image}></img></div> */}
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
