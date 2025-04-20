import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../../services/api"; 

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users when the component mounts using the updated fetchUsers API
    const loadUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data); // Assuming response.data contains the list of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id); // Using the deleteUser API
      setUsers(users.filter((user) => user.id !== id)); // Remove the deleted user from the list
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">User List</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-900">{user.id}</td> {/* Displaying user ID */}
              <td className="px-4 py-2 text-sm text-gray-900">{user.name}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{user.email}</td>
              <td className="px-4 py-2 text-sm">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600 hover:text-red-800 focus:outline-none"
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

export default UserList;
