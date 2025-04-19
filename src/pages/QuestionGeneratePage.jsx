import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { generateRealTimeTest, getRealTimeTestDetails } from "../services/api"; // adjust path if needed

const GeneratedPage = () => {
  const { course, test } = useParams(); // Assuming `course` = categoryName
  const userId = localStorage.getItem("userId"); // Update if stored differently
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5-minute timer
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const questionsPerPage = 5;

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        // Step 1: Generate test (only needs to happen once)
        await generateRealTimeTest(userId, course, 20);

        // Step 2: Fetch the questions
        const { data } = await getRealTimeTestDetails(userId, course);
        setQuestions(data.questions); // Assuming data.questions is the array
      } catch (error) {
        console.error("Error fetching test data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, [userId, course]);

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
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

    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
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

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading Real-Time Test...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border-[#ffac10] border-2 mt-2 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">
          {course ? course.toUpperCase() : "Course"} - {test ? test.toUpperCase() : "Test"} - Real-Time
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
            Thank you for participating in the real-time quiz!
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
              {currentPage < Math.ceil(questions.length / questionsPerPage) - 1
                ? "Next Page"
                : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GeneratedPage;
