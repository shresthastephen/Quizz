import React, { useState, useEffect } from 'react';
import { 
  createFreeQuestion, 
  updateFreeQuestion, 
  fetchCategories } 
  from '../../services/api'; 

const courses = [
  'BCA', 'BCE', 'BDS', 'BIM', 'BIT', 'CSIT',
  'BBA', 'BBS', 'BPH', 'BSc', 'MBBS', 'BE'
];

const FreeQuestionForm = ({ questionId, existingText = '', existingOptions = [], existingCategory = null, existingRemarks = '' }) => {
  const [questionText, setQuestionText] = useState(existingText);
  const [options, setOptions] = useState(existingOptions.length === 4 ? existingOptions : ['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [remarks, setRemarks] = useState(existingRemarks);
  const [category, setCategory] = useState(existingCategory);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    loadCategories();
  }, []);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = {
      question: questionText,
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      answer: correctAnswer,
      remarks,
      category: { ctgId: category?.ctgId },
    };

    try {
      if (questionId) {
        await updateFreeQuestion(questionId, question);
      } else {
        await createFreeQuestion(question);
      }
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      setCategory(null);
      setRemarks('');
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
        {/* Question Text */}
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

        {/* Options */}
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

        {/* Correct Answer */}
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

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category:</label>
          <select
            value={category?.ctgId || ''}
            onChange={(e) => {
              const selectedCategory = categories.find(
                (cat) => cat.ctgId === parseInt(e.target.value)
              );
              setCategory(selectedCategory);
            }}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.ctgId} value={cat.ctgId}>
                {cat.ctgName}
              </option>
            ))}
          </select>
        </div>

        {/* Remarks / Courses Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Remarks (Course):</label>
          <select
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 max-h-40 overflow-y-auto"
            required
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
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






