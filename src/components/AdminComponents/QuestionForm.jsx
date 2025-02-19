import React, { useState, useEffect } from 'react';
import { createQuestion, updateQuestion, fetchCategories } from '../../services/api';

const QuestionForm = ({ questionToEdit = null, onSave }) => {
  const [question, setQuestion] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    remark: '',
    categoryId: '',
    status: 'draft',
    createdBy: '',
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories on component mount
    const fetchCategoryData = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data); // Assuming response.data contains the categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoryData();

    // Populate form with the existing question data if editing
    if (questionToEdit) {
      setQuestion(questionToEdit);
    }
  }, [questionToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (questionToEdit) {
        await updateQuestion(questionToEdit.id, question);
      } else {
        await createQuestion(question);
      }
      onSave();
    } catch (error) {
      console.error('Error saving question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700 font-semibold">Question:</label>
        <input
          type="text"
          name="question"
          value={question.question}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Option 1:</label>
        <input
          type="text"
          name="option1"
          value={question.option1}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Option 2:</label>
        <input
          type="text"
          name="option2"
          value={question.option2}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Option 3:</label>
        <input
          type="text"
          name="option3"
          value={question.option3}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Option 4:</label>
        <input
          type="text"
          name="option4"
          value={question.option4}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Answer:</label>
        <input
          type="text"
          name="answer"
          value={question.answer}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Remark:</label>
        <input
          type="text"
          name="remark"
          value={question.remark}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Category:</label>
        <select
          name="categoryId"
          value={question.categoryId}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Status:</label>
        <select
          name="status"
          value={question.status}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Created By:</label>
        <input
          type="number"
          name="createdBy"
          value={question.createdBy}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {questionToEdit ? 'Update' : 'Create'} Question
      </button>
    </form>
  );
};

export default QuestionForm;


