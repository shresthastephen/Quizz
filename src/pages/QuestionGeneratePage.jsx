// src/components/GeneratedPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  generateRealTimeTest,
  getRealTimeTestDetails,
} from "../services/api";

const GeneratedPage = () => {
  const { course, test } = useParams();
  // If `test` is defined, use that—otherwise fall back to `course`
  const categoryToAsk = test || course;
  const userId = localStorage.getItem("user");

  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const questionsPerPage = 5;

  useEffect(() => {
    const fetchTestData = async () => {
      setLoading(true);
      setError(null);

      try {
        // generate using whichever “category” your backend reads
        await generateRealTimeTest(userId, categoryToAsk, 20);

        // then fetch the questions
        const { data } = await getRealTimeTestDetails(userId, categoryToAsk);
        if (!Array.isArray(data.questions)) {
          throw new Error("Unexpected response shape");
        }
        setQuestions(data.questions);
      } catch (err) {
        console.error("Error fetching test:", err.response || err);
        setError(
          err.response?.data?.message ||
          err.message ||
          "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

    if (userId && categoryToAsk) {
      fetchTestData();
    } else {
      setError("Missing user ID or category/test parameter.");
      setLoading(false);
    }
  }, [userId, categoryToAsk]);

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60),
          sec = s % 60;
    return `${m}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const handleOptionChange = (qid, opt) =>
    setSelectedAnswers((prev) => ({ ...prev, [qid]: opt }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const sliceStart = currentPage * questionsPerPage;
    const pageQs = questions.slice(sliceStart, sliceStart + questionsPerPage);

    if (!pageQs.every((q) => selectedAnswers[q.id])) {
      return alert("Please answer all questions on this page.");
    }

    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
      setCurrentPage((p) => p + 1);
    } else {
      setSubmitted(true);
    }
  };

  const calculateScore = () =>
    questions.reduce(
      (sum, q) => sum + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0),
      0
    );

  const renderQuestions = () =>
    questions
      .slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage)
      .map((q) => (
        <div key={q.id} className="mb-6">
          <h3 className="text-sm">{q.question}</h3>
          <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
            {q.options.map((opt, i) => (
              <label key={i} className="block cursor-pointer">
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  checked={selectedAnswers[q.id] === opt}
                  onChange={() => handleOptionChange(q.id, opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ));

  if (loading) {
    return (
      <div className="text-center py-10 text-lg">
        {error || "Loading your real-time test..."}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border-2 border-[#ffac10] mt-2 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {course?.toUpperCase()} – {test?.toUpperCase()}
          <span className="italic text-gray-500 ml-2">
            (using “{categoryToAsk}”)
          </span>
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
          <p className="mt-4 text-gray-600">Thanks for completing the quiz!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {renderQuestions()}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#ffac10] hover:text-black text-white py-2 px-4 rounded-md transition"
            >
              {currentPage < Math.ceil(questions.length / questionsPerPage) - 1
                ? "Next"
                : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GeneratedPage;

