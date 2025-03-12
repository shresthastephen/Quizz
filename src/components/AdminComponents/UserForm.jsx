import React, { useState, useEffect } from 'react';
import { createUser, updateUser, fetchUserById } from '../../services/api'; // Adjust the import accordingly

const UserForm = ({ userId }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userId) {
      // If we are editing, fetch the user details
      const loadUser = async () => {
        try {
          const response = await fetchUserById(userId);
          setUser({
            name: response.data.name,
            email: response.data.email,
            password: '',
          });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      loadUser();
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userId) {
        await updateUser(userId, user);
      } else {
        await createUser(user);
      }
      // Reset form after successful submission
      setUser({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error("Error submitting user:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {userId ? "Edit User" : "Create User"}
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        { !userId && (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {userId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
