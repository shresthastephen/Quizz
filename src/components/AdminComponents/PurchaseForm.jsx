import React, { useState } from 'react';
import { createPurchase } from '../../services/api'; // Adjust the import according to your project structure

const PurchaseForm = () => {
  const [purchaseDetails, setPurchaseDetails] = useState({
    userId: '',
    purchaseType: '', // Changed from productId to purchaseType
    amount: '',
  });

  const handleChange = (e) => {
    setPurchaseDetails({
      ...purchaseDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPurchase(purchaseDetails);
      setPurchaseDetails({
        userId: '',
        purchaseType: '',
        amount: '',
      });
    } catch (error) {
      console.error("Error creating purchase:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Purchase</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User ID:</label>
          <input
            type="text"
            name="userId"
            value={purchaseDetails.userId}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Purchase Type:</label>
          <select
            name="purchaseType"
            value={purchaseDetails.purchaseType}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select a type</option>
            <option value="SetA">SetA</option>
            <option value="SetB">SetB</option>
            <option value="Real-Time">Real-Time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Amount:</label>
          <input
            type="number"
            name="amount"
            value={purchaseDetails.amount}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Create Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;

