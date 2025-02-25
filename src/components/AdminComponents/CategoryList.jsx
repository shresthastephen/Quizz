import React, { useEffect, useState } from 'react';
import { fetchCategories, deleteCategory } from '../../services/api';

const CategoryList = ({ onEdit }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        setError('Failed to fetch categories. Please try again.');
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  const handleDelete = async (cId) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    try {
      await deleteCategory(cId);
      setCategories(categories.filter(category => category.cId !== cId));
    } catch (error) {
      console.error('Error deleting category:', error);
      setError('Failed to delete category. Please try again.');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Category List</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.cId} className="flex justify-between items-center p-2 border rounded-md">
              <span>{category.name}</span>
              <div>
                <button 
                  onClick={() => onEdit(category)} 
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(category.cId)} 
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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

export default CategoryList;
