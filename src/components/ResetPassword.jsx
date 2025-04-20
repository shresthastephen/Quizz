import React, { useState, useEffect } from "react";
import { resetPassword } from "../services/api";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get('email');
  const code = searchParams.get('code');

  useEffect(() => {
    if (!email || !code) {
      setError('Invalid or missing reset link.');
    }
  }, [email, code]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!newPassword) {
      setError('Password cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email, code, newPassword); 
      alert('Password reset successful!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed');
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
            <label className="block text-gray-600 mb-2" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your new password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || !email || !code}
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
