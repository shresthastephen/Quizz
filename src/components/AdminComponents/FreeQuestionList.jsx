import React, { useEffect, useState } from 'react';
import { fetchFreeQuestions, deleteFreeQuestion } from '../../services/api'; // Adjust the import according to your project structure

const FreeQuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions when the component mounts
    const loadQuestions = async () => {
      try {
        const response = await fetchFreeQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    loadQuestions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFreeQuestion(id);
      setQuestions(questions.filter(question => question.id !== id)); // Remove the deleted question from the list
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Free Question List</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Question</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id} className="border border-gray-200">
              <td className="border border-gray-300 px-4 py-2">{question.text}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(question.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeQuestionList;

