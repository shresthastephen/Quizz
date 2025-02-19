import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../services/api"; // Import the sign-up API function

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await signUpUser(formData);
      console.log("Sign-Up successful:", response.data);
      setSubmitted(true);

      // Redirect to homepage after a short delay
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || "Sign-Up failed. Please try again.");
      console.error("Sign-Up error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        {/* Left Container */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              Welcome to Our Platform
            </h1>
            <p className="text-md lg:text-lg text-gray-600 leading-relaxed">
              Join us today and take the first step toward simplifying your journey.
              We’re here to help you every step of the way!
            </p>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

            {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

            {submitted ? (
              <p className="text-green-500 font-semibold">Thank you for signing up!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full p-3 rounded-lg text-white transition ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>

                <div className="mt-4 text-center text-l text-gray-500">
                  Already have an account?{" "}
                  <a href="/signin" className="text-black hover:underline">
                    Sign in
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
