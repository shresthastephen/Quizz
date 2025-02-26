import React, { useState } from 'react';
import { recordQuizAttempt } from '../../services/api'; // Adjust the import accordingly

const QuizAttemptForm = () => {
  const [quizAttempt, setQuizAttempt] = useState({
    userId: '',
    quizId: '',
    status: '',
    score: 0,
  });

  const handleChange = (e) => {
    setQuizAttempt({
      ...quizAttempt,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await recordQuizAttempt(quizAttempt);
      // Reset form after successful submission
      setQuizAttempt({
        userId: '',
        quizId: '',
        status: '',
        score: 0,
      });
    } catch (error) {
      console.error("Error recording quiz attempt:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Record Quiz Attempt</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User ID:</label>
          <input
            type="text"
            name="userId"
            value={quizAttempt.userId}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quiz ID:</label>
          <input
            type="text"
            name="quizId"
            value={quizAttempt.quizId}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status:</label>
          <input
            type="text"
            name="status"
            value={quizAttempt.status}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Score:</label>
          <input
            type="number"
            name="score"
            value={quizAttempt.score}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Record Attempt
        </button>
      </form>
    </div>
  );
};

export default QuizAttemptForm;

