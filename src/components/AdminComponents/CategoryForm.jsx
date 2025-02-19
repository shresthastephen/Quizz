import React, { useState, useEffect } from 'react';
import { createCategory, updateCategory } from '../../services/api';

const CategoryForm = ({ categoryToEdit = null, onSave }) => {
  const [category, setCategory] = useState({ name: '', remark: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categoryToEdit) {
      setCategory(categoryToEdit);
    }
  }, [categoryToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (categoryToEdit) {
        await updateCategory(categoryToEdit.id, category);
      } else {
        await createCategory(category);
      }
      onSave();
    } catch (error) {
      setError('Failed to save category. Please try again.');
      console.error('Error saving category:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label className="block text-gray-700 font-semibold">Name:</label>
        <input
          type="text"
          name="name"
          value={category.name}
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
          value={category.remark}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {loading ? 'Saving...' : categoryToEdit ? 'Update' : 'Create'} Category
      </button>
    </form>
  );
};

export default CategoryForm;
