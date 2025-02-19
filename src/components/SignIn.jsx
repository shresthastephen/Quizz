import React, { useState } from "react";
import { loginUser } from "../services/api"; // Import the login API function
import { useNavigate } from "react-router-dom"; // For redirecting after login

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await loginUser({ email, password });

      console.log("Login successful:", response.data);

      // Redirect user to dashboard or home page
      navigate("/"); // Change the path as needed

    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        {/* Image Container */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-4">
          <img
            src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
            alt="Sign In Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Form Container */}
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Sign In
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
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-lg text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="mt-4 text-center text-l text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-black hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
