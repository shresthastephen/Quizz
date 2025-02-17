import React, { useState, useEffect } from 'react';
import { createQuizAttempt, updateQuizAttempt } from '../../services/api';

const QuizAttemptForm = ({ quizAttemptToEdit = null, onSave }) => {
  const [quizAttempt, setQuizAttempt] = useState({
    userId: '',
    questionId: '',
    selectedOption: '',
    isCorrect: false,
    attemptDate: '',
  });

  useEffect(() => {
    if (quizAttemptToEdit) {
      setQuizAttempt(quizAttemptToEdit);
    }
  }, [quizAttemptToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuizAttempt({
      ...quizAttempt,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (quizAttemptToEdit) {
        await updateQuizAttempt(quizAttemptToEdit.id, quizAttempt);
      } else {
        await createQuizAttempt(quizAttempt);
      }
      onSave();
    } catch (error) {
      console.error('Error saving quiz attempt:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700 font-semibold">User ID:</label>
        <input
          type="number"
          name="userId"
          value={quizAttempt.userId}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Question ID:</label>
        <input
          type="number"
          name="questionId"
          value={quizAttempt.questionId}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Selected Option:</label>
        <input
          type="text"
          name="selectedOption"
          value={quizAttempt.selectedOption}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Correct:</label>
        <input
          type="checkbox"
          name="isCorrect"
          checked={quizAttempt.isCorrect}
          onChange={handleChange}
          className="mt-1 mr-2 leading-tight"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Attempt Date:</label>
        <input
          type="datetime-local"
          name="attemptDate"
          value={quizAttempt.attemptDate}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {quizAttemptToEdit ? 'Update' : 'Create'} Quiz Attempt
      </button>
    </form>
  );
};

export default QuizAttemptForm;

