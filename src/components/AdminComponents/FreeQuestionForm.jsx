import React, { useState } from 'react';
import { createFreeQuestion, updateFreeQuestion } from '../../services/api'; // Import the correct functions

const FreeQuestionForm = ({ questionId, existingText = '', existingOptions = [] }) => {
  const [questionText, setQuestionText] = useState(existingText);
  const [options, setOptions] = useState(existingOptions.length === 4 ? existingOptions : ['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = { text: questionText, options, correctAnswer };

    try {
      if (questionId) {
        await updateFreeQuestion(questionId, question);
      } else {
        await createFreeQuestion(question);
      }
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {questionId ? "Edit Free Question" : "Create Free Question"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Question Text:</label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        </div>
        {options.map((option, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">Option {index + 1}:</label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Correct Answer:</label>
          <select
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Correct Answer</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option || `Option ${index + 1}`}</option>
            ))}
          </select>
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

export default FreeQuestionForm;





