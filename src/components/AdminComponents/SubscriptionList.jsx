// src/components/SubscriptionList.jsx
import React, { useEffect, useState } from 'react';
import { getSubscriptions, deleteSubscription } from '../../services/api';

const SubscriptionList = ({ onEdit }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await getSubscriptions();
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSubscription(id);
      setSubscriptions(subscriptions.filter(subscription => subscription.id !== id));
    } catch (error) {
      console.error('Error deleting subscription:', error);
    }
  };

  return (
    <div>
      <h2>Subscription List</h2>
      <ul>
        {subscriptions.map((subscription) => (
          <li key={subscription.id}>
            User ID: {subscription.userId}, Status: {subscription.status}
            <button onClick={() => onEdit(subscription)}>Edit</button>
            <button onClick={() => handleDelete(subscription.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
