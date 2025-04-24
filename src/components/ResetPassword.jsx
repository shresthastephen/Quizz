import React, { useState } from "react";
import { resetPassword } from "../services/api"; 
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !code || !newPassword) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword(email, code, newPassword);
      console.log('Password reset response:', response);
      alert('Password reset successful!');
      navigate('/login');
    } catch (err) {
      console.error('Password reset error:', err);
      setError(err.response?.data || 'Password reset failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Reset Password
        </h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="code">
              Verification Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              placeholder="Enter your verification code"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your new password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white transition ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {loading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;