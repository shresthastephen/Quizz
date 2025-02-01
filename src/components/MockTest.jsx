import React, { useState, useEffect } from "react";
import originalQuestions from "./../lib/questions";

const MockTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown

  const questionsPerPage = 3;

  // Shuffle questions without changing question number
  const shuffleQuestions = () => {
    const shuffled = [...originalQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled);
  };

  useEffect(() => {
    shuffleQuestions(); // Shuffle questions on page load
  }, []);

  useEffect(() => {
    if (submitted || timeLeft <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  // Format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  // Handle answer selection
  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all questions are answered
    const currentQuestions = shuffledQuestions.slice(
      currentPage * questionsPerPage,
      (currentPage + 1) * questionsPerPage
    );
    const allAnswered = currentQuestions.every((q) => selectedAnswers[q.id]);
    if (!allAnswered) {
      alert("Please answer all the questions before proceeding.");
      return;
    }

    if (currentPage < shuffledQuestions.length / questionsPerPage - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  // Calculate score
  const calculateScore = () => {
    let score = 0;
    shuffledQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const renderQuestions = () => {
    const currentQuestions = shuffledQuestions.slice(
      currentPage * questionsPerPage,
      (currentPage + 1) * questionsPerPage
    );
    return currentQuestions.map((q) => (
      <div key={q.id} className="mb-6">
        <h3 className="text-lg font-medium">{q.question}</h3>
        <div className="mt-2 grid grid-cols-2 gap-4">
          {q.options.map((option, index) => (
            <label key={index} className="block cursor-pointer">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                checked={selectedAnswers[q.id] === option}
                onChange={() => handleOptionChange(q.id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Mock Test Exam</h1>
        <div className="text-red-500 font-bold text-lg">
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>
      {submitted ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Your Score: {calculateScore()} / {shuffledQuestions.length}
          </h2>
          <p className="mt-4 text-gray-600">
            Thank you for participating in the test!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {renderQuestions()}
          <div className="text-right">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {currentPage < shuffledQuestions.length / questionsPerPage - 1
                ? "Next Page"
                : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MockTest;
