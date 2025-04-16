import React, { useState, useEffect } from 'react';
import { fetchCategories, deleteCategory, updateCategory } from '../../services/api';

const CategoryList = ({ setCategories }) => {
  const [categories, setCategoriesState] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');
  const [editedRemark, setEditedRemark] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategoriesState(response.data);
        if (setCategories) setCategories(response.data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    loadCategories();
  }, [setCategories]);

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      const updatedCategories = categories.filter((category) => category.ctgId !== id);
      setCategoriesState(updatedCategories);
      if (setCategories) setCategories(updatedCategories);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setEditedCategoryName(category.ctgName);
    setEditedRemark(category.remark);
  };

  const handleSaveEdit = async (id) => {
    try {
      const updatedCategory = {
        ctgName: editedCategoryName,
        remark: editedRemark,
      };
      await updateCategory(id, updatedCategory);

      const updatedCategories = categories.map((category) =>
        category.ctgId === id ? { ...category, ...updatedCategory } : category
      );
      setCategoriesState(updatedCategories);
      if (setCategories) setCategories(updatedCategories);

      setEditingCategory(null);
      setEditedCategoryName('');
      setEditedRemark('');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setEditedCategoryName('');
    setEditedRemark('');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories List</h3>
      {categories.length === 0 ? (
        <p className="text-red-600">No categories found. Create a new category!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Remark</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.ctgId}>
                  <td className="px-4 py-2 text-sm text-gray-700">{category.ctgId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingCategory && editingCategory.ctgId === category.ctgId ? (
                      <input
                        type="text"
                        value={editedCategoryName}
                        onChange={(e) => setEditedCategoryName(e.target.value)}
                        className="p-1 border border-gray-300 rounded"
                      />
                    ) : (
                      category.ctgName
                    )}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingCategory && editingCategory.ctgId === category.ctgId ? (
                      <input
                        type="text"
                        value={editedRemark}
                        onChange={(e) => setEditedRemark(e.target.value)}
                        className="p-1 border border-gray-300 rounded"
                      />
                    ) : (
                      category.remark
                    )}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    {editingCategory && editingCategory.ctgId === category.ctgId ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(category.ctgId)}
                          className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.ctgId)}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
