import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from '../services/api'; // API call to verify the email

const VerifyEmailPage = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !verificationCode) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      // call API to verify the email
      await verifyEmail(email, verificationCode);
      alert('Email verified successfully!');
      navigate('/signin'); // redirect to the sign-in page after verification
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Verify Your Email
          </h2>
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
          )}
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
              <label className="block text-gray-600 mb-2" htmlFor="verificationCode">
                Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                placeholder="Enter your verification code"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-lg text-white transition ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {loading ? 'Verifying...' : 'Verify Email'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
