import React, { useEffect, useState } from 'react';
import { fetchSubscriptions, deleteSubscription } from '../../services/api';

const SubscriptionList = ({ onEdit }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        const response = await fetchSubscriptions();
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    loadSubscriptions();
  }, []);

  const handleDelete = async (subId) => {
    try {
      await deleteSubscription(subId);
      setSubscriptions(subscriptions.filter(sub => sub.id !== subId));
    } catch (error) {
      console.error('Error deleting subscription:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Subscription List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">User ID</th>
            <th className="border border-gray-300 p-2">Start Date</th>
            <th className="border border-gray-300 p-2">End Date</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((sub) => (
            <tr key={sub.id} className="text-center">
              <td className="border border-gray-300 p-2">{sub.userId}</td>
              <td className="border border-gray-300 p-2">{sub.startDate}</td>
              <td className="border border-gray-300 p-2">{sub.endDate}</td>
              <td className="border border-gray-300 p-2">{sub.status}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button 
                  onClick={() => onEdit(sub)} 
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(sub.id)} 
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionList;

