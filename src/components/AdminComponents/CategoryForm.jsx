import React, { useState, useEffect } from 'react';
import { createCategory, updateCategory, fetchCategoryById } from '../../services/api'; // Adjust the import accordingly

const CategoryForm = ({ categoryId }) => {
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (categoryId) {
      // If we are editing, fetch the category details
      const loadCategory = async () => {
        try {
          const response = await fetchCategoryById(categoryId);
          setCategoryName(response.data.name);
        } catch (error) {
          console.error("Error fetching category:", error);
        }
      };
      loadCategory();
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked!");
    const category = { name: categoryName };

    try {
      if (categoryId) {
        console.log("update");
        await updateCategory(categoryId, category);
        console.log("Category updated successfully.");
      } else {
        console.log("create");
        await createCategory(category);
        console.log("Category created successfully.");
      }
      setCategoryName(''); // Reset input after submission
    } catch (error) {
      console.error("Error submitting category:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{categoryId ? "Edit Category" : "Create Category"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          {categoryId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
