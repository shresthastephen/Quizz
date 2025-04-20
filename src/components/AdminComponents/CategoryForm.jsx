import React, { useState, useEffect } from 'react';
import { 
  createCategory, 
  updateCategory, 
  fetchCategoryById 
} from '../../services/api';

const courses = [
  'BCA', 'BCE', 'BDS', 'BIM', 'BIT', 'CSIT',
  'BBA', 'BBS', 'BPH', 'BSc', 'MBBS', 'BE'
];

const CategoryForm = ({ categoryId }) => {
  const [categoryName, setCategoryName] = useState('');
  const [remark, setRemark] = useState('');
  const [errors, setErrors] = useState({});
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    if (categoryId) {
      const loadCategory = async () => {
        try {
          const response = await fetchCategoryById(categoryId);
          setCategoryName(response.data.ctgName);
          setRemark(response.data.remark);
        } catch (error) {
          console.error('Error fetching category:', error);
        }
      };
      loadCategory();
    }
  }, [categoryId]);

  const validateForm = () => {
    const newErrors = {};
    if (!categoryName.trim()) {
      newErrors.ctgName = 'Category name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const categoryData = {
      ctgName: categoryName,
      remark: remark,
    };

    try {
      if (categoryId) {
        await updateCategory(categoryId, categoryData);
      } else {
        await createCategory(categoryData);
      }
      // Reset form after successful submission
      setCategoryName('');
      setRemark('');
      setErrors({});
      setEditingCategory(null);
    } catch (error) {
      console.error('Error submitting category:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{categoryId ? 'Edit Category' : 'Create Category'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.ctgName && (
            <p className="text-red-500 text-sm mt-1">{errors.ctgName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Remark:</label>
          <select
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          {categoryId ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
