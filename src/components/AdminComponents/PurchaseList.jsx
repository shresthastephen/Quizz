import React, { useState } from 'react';
import { markPurchaseAsPaid, markPurchaseAsRefunded } from '../../services/api'; 

const PurchaseList = ({ purchases }) => {  // Expecting purchases as a prop
  const [localPurchases, setLocalPurchases] = useState(purchases || []);

  const handleMarkAsPaid = async (id) => {
    try {
      await markPurchaseAsPaid(id);
      setLocalPurchases(localPurchases.map(purchase => 
        purchase.id === id ? { ...purchase, status: 'Paid' } : purchase
      ));
    } catch (error) {
      console.error("Error marking purchase as paid:", error);
    }
  };

  const handleMarkAsRefunded = async (id) => {
    try {
      await markPurchaseAsRefunded(id);
      setLocalPurchases(localPurchases.map(purchase => 
        purchase.id === id ? { ...purchase, status: 'Refunded' } : purchase
      ));
    } catch (error) {
      console.error("Error marking purchase as refunded:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Purchase List</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Purchase ID</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {localPurchases.map((purchase) => (
            <tr key={purchase.id} className="border border-gray-200">
              <td className="border border-gray-300 px-4 py-2">{purchase.id}</td>
              <td className="border border-gray-300 px-4 py-2">{purchase.status}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {purchase.status !== 'Paid' && (
                  <button
                    onClick={() => handleMarkAsPaid(purchase.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  >
                    Mark as Paid
                  </button>
                )}
                {purchase.status !== 'Refunded' && (
                  <button
                    onClick={() => handleMarkAsRefunded(purchase.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-2"
                  >
                    Mark as Refunded
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseList;
