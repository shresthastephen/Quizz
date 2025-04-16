import React, { useState, useEffect } from 'react';
import {
  createQuestion,
  updateQuestion,
  fetchCategories,
  fetchSets,
  fetchQuestionById,
} from '../../services/api';

const courses = [
  'BCA', 'BCE', 'BDS', 'BIM', 'BIT', 'CSIT',
  'BBA', 'BBS', 'BPH', 'BSc', 'MBBS', 'BE'
];

const QuestionForm = ({ questionId, setEditingQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [category, setCategory] = useState(null);
  const [set, setSet] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [categories, setCategories] = useState([]);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    const loadSets = async () => {
      try {
        const response = await fetchSets();
        setSets(response.data);
      } catch (error) {
        console.error('Error loading sets:', error);
      }
    };

    loadCategories();
    loadSets();
  }, []);

  useEffect(() => {
    if (questionId) {
      const loadQuestion = async () => {
        try {
          const response = await fetchQuestionById(questionId);
          setQuestionText(response.data.question);
          setOptions([
            response.data.option1 || '',
            response.data.option2 || '',
            response.data.option3 || '',
            response.data.option4 || '',
          ]);
          setCorrectAnswer(response.data.answer || '');
          setCategory(response.data.category);
          setSet(response.data.set);
          setRemarks(response.data.remarks || '');
        } catch (error) {
          console.error('Error fetching question:', error);
        }
      };
      loadQuestion();
    }
  }, [questionId]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = {
      question: questionText,
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      answer: correctAnswer,
      category: { ctgId: category?.ctgId },
      set: { setId: set?.setId },
      remarks: remarks
    };

    try {
      if (questionId) {
        await updateQuestion(questionId, questionData);
      } else {
        await createQuestion(questionData);
      }
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      setCategory(null);
      setSet(null);
      setRemarks('');
      setEditingQuestion(null);
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {questionId ? 'Edit Question' : 'Create Question'}
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
              <option key={index} value={option}>
                {option || `Option ${index + 1}`}
              </option>
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

        {/* Set */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Set:</label>
          <select
            value={set?.setId || ''}
            onChange={(e) => {
              const selectedSet = sets.find((s) => s.setId === parseInt(e.target.value));
              setSet(selectedSet);
            }}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a set</option>
            {sets.map((s) => (
              <option key={s.setId} value={s.setId}>
                {s.setName}
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
          {questionId ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
