import React, { useState, useEffect } from 'react';
import { createSubscription, updateSubscription } from '../../services/api';

const SubscriptionForm = ({ subscriptionToEdit = null, onSave }) => {
  const [subscription, setSubscription] = useState({
    userId: '',
    startDate: '',
    endDate: '',
    status: 'active',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (subscriptionToEdit) {
      setSubscription(subscriptionToEdit);
    }
  }, [subscriptionToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that endDate is not before startDate
    if (subscription.endDate < subscription.startDate) {
      alert('End Date cannot be before Start Date.');
      return;
    }

    setLoading(true);
    try {
      if (subscriptionToEdit) {
        await updateSubscription(subscriptionToEdit.id, subscription);
      } else {
        await createSubscription(subscription);
      }
      onSave();
    } catch (error) {
      console.error('Error saving subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {subscriptionToEdit ? 'Edit' : 'Create'} Subscription
      </h2>

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
        disabled={loading}
        className={`w-full py-2 mt-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }`}
      >
        {loading ? 'Saving...' : subscriptionToEdit ? 'Update' : 'Create'} Subscription
      </button>
    </form>
  );
};

export default SubscriptionForm;

