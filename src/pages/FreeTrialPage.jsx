import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import originalQuestions from "./../lib/questions"; // Mock questions data
import testQuestions from "./../lib/testquestions";  // Mock test questions

const FreeTrialPage = () => {
  const { course, set, test } = useParams(); // Get course, set, and test type from URL params
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5-minute timer
  const [submitted, setSubmitted] = useState(false);
  const questionsPerPage = 5;

    const filterQuestions = () => {
      if (test) {
        // If test is specified, return test questions regardless of the course
        return testQuestions.filter((question) => question.test === test);
      }
      // If no test is specified, return regular course questions filtered by course and set
      return originalQuestions.filter(
        (question) => question.course === course && question.set === set
      );
    };
  
    // Get the filtered questions based on course, set, and test params
    const questions = filterQuestions();

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentQuestions = questions.slice(
      currentPage * questionsPerPage,
      (currentPage + 1) * questionsPerPage
    );
    const allAnswered = currentQuestions.every((q) => selectedAnswers[q.id]);
    if (!allAnswered) {
      alert("Please answer all the questions before proceeding.");
      return;
    }

    if (currentPage < questions.length / questionsPerPage - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const renderQuestions = () => {
    const currentQuestions = questions.slice(
      currentPage * questionsPerPage,
      (currentPage + 1) * questionsPerPage
    );
    return currentQuestions.map((q) => (
      <div key={q.id} className="mb-6">
        <h3 className="text-sm">{q.question}</h3>
        <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
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
    <div className="max-w-4xl mx-auto p-6 bg-white border-[#ffac10] border-2 mt-2 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">
          {course ? course.toUpperCase() : "Course"} - {test ? test.toUpperCase() : "Test"} - Free Trial
        </h1>
        <div className="text-red-500 font-bold text-lg">
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>
      {submitted ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Your Score: {calculateScore()} / {questions.length}
          </h2>
          <p className="mt-4 text-gray-600">
            Thank you for participating in the free trial quiz!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {renderQuestions()}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#ffac10] text-white py-2 px-4 rounded-md hover:text-black transition"
            >
              {currentPage < questions.length / questionsPerPage - 1
                ? "Next Page"
                : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FreeTrialPage;
