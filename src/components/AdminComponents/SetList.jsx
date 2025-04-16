import React, { useState, useEffect } from 'react';
import { fetchSets, deleteSet, updateSet } from '../../services/api';

const SetList = ({ setSets }) => {
  const [sets, setSetsState] = useState([]);
  const [editingSetId, setEditingSetId] = useState(null);
  const [editedSetName, setEditedSetName] = useState('');

  useEffect(() => {
    const loadSets = async () => {
      try {
        const response = await fetchSets();
        setSetsState(response.data);
        if (setSets) setSets(response.data);
      } catch (error) {
        console.error('Error loading sets:', error);
      }
    };
    loadSets();
  }, [setSets]);

  const handleDeleteSet = async (id) => {
    try {
      await deleteSet(id);
      const updated = sets.filter((set) => set.setId !== id);
      setSetsState(updated);
      if (setSets) setSets(updated);
    } catch (error) {
      console.error('Error deleting set:', error);
    }
  };

  const handleEditSet = (set) => {
    setEditingSetId(set.setId);
    setEditedSetName(set.setName);
  };

  const handleSaveEdit = async (id) => {
    try {
      const updatedSet = { setName: editedSetName };
      await updateSet(id, updatedSet);

      const updatedSets = sets.map((s) =>
        s.setId === id ? { ...s, setName: editedSetName } : s
      );
      setSetsState(updatedSets);
      if (setSets) setSets(updatedSets);

      setEditingSetId(null);
      setEditedSetName('');
    } catch (error) {
      console.error('Error updating set:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingSetId(null);
    setEditedSetName('');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sets List</h3>
      {sets.length === 0 ? (
        <p className="text-red-600">No sets found. Create a new set!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sets.map((set) => (
                <tr key={set.setId} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{set.setId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingSetId === set.setId ? (
                      <input
                        type="text"
                        value={editedSetName}
                        onChange={(e) => setEditedSetName(e.target.value)}
                        className="p-1 border border-gray-300 rounded"
                      />
                    ) : (
                      set.setName
                    )}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    {editingSetId === set.setId ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(set.setId)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditSet(set)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteSet(set.setId)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SetList;
