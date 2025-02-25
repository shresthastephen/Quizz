import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../../services/api';

const UserForm = ({ userToEdit = null, onSave }) => {
  const [user, setUser] = useState({
    email: '',
    userName: '',
    gender: 'Male',
    userType: 'guest',
    isActive: true,
    passwordHash: '',
  });

  useEffect(() => {
    if (userToEdit) {
      setUser({ ...userToEdit, passwordHash: '' }); // Prevent displaying password
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { ...user };
      if (!userData.passwordHash) delete userData.passwordHash; // Avoid sending empty passwords

      if (userToEdit) {
        await updateUser(userToEdit.id, userData);
      } else {
        await createUser(userData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        {userToEdit ? 'Update' : 'Create'} User
      </h2>

      <div>
        <label className="block text-gray-700 font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">User Name:</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">Gender:</label>
        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">User Type:</label>
        <select
          name="userType"
          value={user.userType}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="admin">Admin</option>
          <option value="subscription_user">Subscription User</option>
          <option value="unsubscribed_user">Unsubscribed User</option>
          <option value="guest">Guest</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold">Password:</label>
        <input
          type="password"
          name="passwordHash"
          value={user.passwordHash}
          onChange={handleChange}
          placeholder={userToEdit ? 'Leave blank to keep current password' : ''}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center">
        <label className="text-gray-700 font-semibold mr-2">Active:</label>
        <input
          type="checkbox"
          name="isActive"
          checked={user.isActive}
          onChange={handleChange}
          className="rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {userToEdit ? 'Update' : 'Create'} User
      </button>
    </form>
  );
};

export default UserForm;


