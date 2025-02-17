import React, { useState, useEffect } from 'react';
import { createSubscription, updateSubscription } from '../../services/api';

const SubscriptionForm = ({ subscriptionToEdit = null, onSave }) => {
  const [subscription, setSubscription] = useState({
    userId: '',
    startDate: '',
    endDate: '',
    status: 'active',
  });

  useEffect(() => {
    if (subscriptionToEdit) {
      setSubscription(subscriptionToEdit);
    }
  }, [subscriptionToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscription({
      ...subscription,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (subscriptionToEdit) {
        await updateSubscription(subscriptionToEdit.id, subscription);
      } else {
        await createSubscription(subscription);
      }
      onSave();
    } catch (error) {
      console.error('Error saving subscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700 font-semibold">User ID:</label>
        <input
          type="number"
          name="userId"
          value={subscription.userId}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={subscription.startDate}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={subscription.endDate}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Status:</label>
        <select
          name="status"
          value={subscription.status}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="active">Active</option>
          <option value="expired">Expired</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {subscriptionToEdit ? 'Update' : 'Create'} Subscription
      </button>
    </form>
  );
};

export default SubscriptionForm;
