import React, { useEffect, useState } from 'react';
import { fetchAttemptsByUser } from '../../services/api'; // Adjust the import accordingly

const QuizAttemptList = ({ userId }) => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    // Fetch attempts for the specific user when the component mounts
    const loadAttempts = async () => {
      try {
        const response = await fetchAttemptsByUser(userId);
        setAttempts(response.data);
      } catch (error) {
        console.error("Error fetching quiz attempts:", error);
      }
    };
    loadAttempts();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quiz Attempts for User ID: {userId}</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Attempt ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Quiz Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Score</th>
          </tr>
        </thead>
        <tbody>
          {attempts.length > 0 ? (
            attempts.map((attempt) => (
              <tr key={attempt.id} className="border-b">
                <td className="px-4 py-2 text-sm text-gray-600">{attempt.id}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{attempt.quizName}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{attempt.status}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{attempt.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-sm text-center text-gray-500">No attempts found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuizAttemptList;
