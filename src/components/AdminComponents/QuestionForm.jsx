import React, { useState, useEffect } from 'react';
import { createQuestion, updateQuestion, fetchQuestionById } from '../../services/api'; // Adjust the import accordingly

const QuestionForm = ({ questionId }) => {
  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
    if (questionId) {
      // If we are editing, fetch the question details
      const loadQuestion = async () => {
        try {
          const response = await fetchQuestionById(questionId);
          setQuestionText(response.data.text);
        } catch (error) {
          console.error("Error fetching question:", error);
        }
      };
      loadQuestion();
    }
  }, [questionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = { text: questionText };

    try {
      if (questionId) {
        await updateQuestion(questionId, question);
      } else {
        await createQuestion(question);
      }
      // Reset form after successful submission
      setQuestionText('');
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{questionId ? "Edit Question" : "Create Question"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Question Text:</label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          {questionId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;

