// src/components/QuizAttemptList.jsx
import React, { useEffect, useState } from 'react';
import { getQuizAttempts, deleteQuizAttempt } from '../../services/api';

const QuizAttemptList = ({ onEdit }) => {
  const [quizAttempts, setQuizAttempts] = useState([]);

  useEffect(() => {
    const fetchQuizAttempts = async () => {
      try {
        const response = await getQuizAttempts();
        setQuizAttempts(response.data);
      } catch (error) {
        console.error('Error fetching quiz attempts:', error);
      }
    };

    fetchQuizAttempts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteQuizAttempt(id);
      setQuizAttempts(quizAttempts.filter(attempt => attempt.id !== id));
    } catch (error) {
      console.error('Error deleting quiz attempt:', error);
    }
  };

  return (
    <div>
      <h2>Quiz Attempt List</h2>
      <ul>
        {quizAttempts.map((attempt) => (
          <li key={attempt.id}>
            User ID: {attempt.userId}, Question ID: {attempt.questionId}, Correct: {attempt.isCorrect ? 'Yes' : 'No'}
            <button onClick={() => onEdit(attempt)}>Edit</button>
            <button onClick={() => handleDelete(attempt.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizAttemptList;
