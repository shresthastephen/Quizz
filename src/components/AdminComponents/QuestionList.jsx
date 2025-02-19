import React, { useEffect, useState } from 'react';
import { fetchQuestions, deleteQuestion } from '../../services/api';

const QuestionList = ({ onEdit }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const response = await fetchQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllQuestions();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this question?');
    if (!confirmDelete) return;

    try {
      await deleteQuestion(id);
      setQuestions(questions.filter(question => question.id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading questions...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Question List</h2>
      {questions.length === 0 ? (
        <p className="text-gray-500">No questions available.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((question) => (
            <li key={question.id} className="p-4 bg-gray-100 rounded-md shadow-sm flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{question.question}</p>
                <p className="text-sm text-gray-600">Category ID: {question.categoryId}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => onEdit(question)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(question.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionList;

