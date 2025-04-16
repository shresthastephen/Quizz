import React, { useState, useEffect } from 'react';
import { createSet, updateSet, fetchSetById } from '../../services/api';

const SetForm = ({ setId }) => {
  const [setName, setSetName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (setId) {
      const loadSet = async () => {
        try {
          const response = await fetchSetById(setId);
          setSetName(response.data.setName);
        } catch (error) {
          console.error('Error fetching set:', error);
        }
      };
      loadSet();
    }
  }, [setId]);

  const validateForm = () => {
    const newErrors = {};
    if (!setName.trim()) {
      newErrors.setName = 'Set name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const setData = {
      setName: setName,
    };

    try {
      if (setId) {
        await updateSet(setId, setData);
      } else {
        await createSet(setData);
      }
      setSetName('');
      setErrors({});
    } catch (error) {
      console.error('Error submitting set:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {setId ? 'Edit Set' : 'Create Set'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Set Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={setName}
            onChange={(e) => setSetName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.setName && (
            <p className="text-red-500 text-sm mt-1">{errors.setName}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          {setId ? 'Update Set' : 'Create Set'}
        </button>
      </form>
    </div>
  );
};

export default SetForm;