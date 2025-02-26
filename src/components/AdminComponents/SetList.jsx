import React, { useEffect, useState } from 'react';
import { fetchSets, deleteSet } from '../../services/api'; // Adjust the import according to your project structure

const SetList = () => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    // Fetch sets when the component mounts
    const loadSets = async () => {
      try {
        const response = await fetchSets();
        setSets(response.data);
      } catch (error) {
        console.error("Error fetching sets:", error);
      }
    };
    loadSets();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSet(id);
      setSets(sets.filter(set => set.id !== id)); // Remove the deleted set from the list
    } catch (error) {
      console.error("Error deleting set:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Set List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-2 text-left">Set Name</th>
            <th className="border-b-2 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sets.length > 0 ? (
            sets.map((set) => (
              <tr key={set.id} className="hover:bg-gray-100">
                <td className="border-b p-2">{set.name}</td>
                <td className="border-b p-2 text-center">
                  <button
                    onClick={() => handleDelete(set.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="p-4 text-center text-gray-500">
                No sets available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SetList;
