// src/components/QuestionList.jsx
import React, { useEffect, useState } from 'react';
import { getQuestions, deleteQuestion } from '../../services/api';

const QuestionList = ({ onEdit }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter(question => question.id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question}
            <button onClick={() => onEdit(question)}>Edit</button>
            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
