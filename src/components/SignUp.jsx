import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser, initiateOAuth2Login } from "../services/api"; // Import the sign-up API function

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', 
    gender: '',
    contact: '',
    address: '',
    dob: '',
    interested: '',
    latestQualification: '',
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    // Field-level validation
    const validateForm = () => {
      const errors = {};
      if (!formData.fullname) errors.fullname = "Full Name is required";
      if (!formData.email) errors.email = "Email is required";
      if (!formData.password) errors.password = "Password is required";
      if (!formData.confirmPassword) errors.confirmPassword = "Please confirm your password";
      else if (formData.password !== formData.confirmPassword)
        errors.confirmPassword = "Passwords do not match!";
      if (!formData.gender) errors.gender = "Gender is required";
      if (!formData.contact) errors.contact = "Contact number is required";
      else if (!/^\d{10}$/.test(formData.contact))
        errors.contact = "Contact number must be 10 digits";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Reset error state
    setLoading(true);

    // Validate form fields
    if (!validateForm()) {
      setLoading(false);
      return; // Stop the form submission if validation fails
    }

    try {
      await signUpUser(formData);
      alert('Signed up! Check your email for the verification code.');
      navigate('/verify-email');
    } catch (err) {
      // Handle different error responses
      if (err.response) {
        if (err.response.status === 400) {
          setError('Invalid input data. Please check the form and try again.');
        } else if (err.response.status === 409) {
          setError('Email already exists. Please use a different email.');
        } else {
          setError('Something went wrong. Please try again later.');
        }
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth2Login = () => {
    initiateOAuth2Login(); // Initiates Google OAuth2 login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        {/* Left Panel */}
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

        {/* Right Panel - Sign Up Form */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

            {error && <p className="text-red-500 font-medium mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formErrors.fullname ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.fullname && <p className="text-red-500 text-sm">{formErrors.fullname}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.confirmPassword && <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>}
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formErrors.gender ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
              </div>

              {/* Contact Number */}
              <div className="mb-4">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="Enter your contact number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formErrors.contact ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.contact && <p className="text-red-500 text-sm">{formErrors.contact}</p>}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address (Optional)</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
                />
              </div>

              {/* Interested In */}
              <div className="mb-4">
                <label htmlFor="interested" className="block text-sm font-medium text-gray-700 mb-1">Interested In (Optional)</label>
                <input
                  id="interested"
                  name="interested"
                  type="text"
                  placeholder="What are you interested in?"
                  value={formData.interested}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
                />
              </div>

              {/* Latest Qualification */}
              <div className="mb-4">
                <label htmlFor="latestQualific ation" className="block text-sm font-medium text-gray-700 mb-1">Latest Qualification (Optional)</label>
                <input
                  id="latestQualification"
                  name="latestQualification"
                  type="text"
                  placeholder="Enter your latest qualification"
                  value={formData.latestQualification}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>

              {/* Google Login Button (Custom OAuth2 Flow) */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleOAuth2Login} // Triggers OAuth2 login
                  className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                >
                  Sign Up with Google
                </button>
              </div>

              {/* Sign In link */}
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
