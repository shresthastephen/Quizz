import React, { useState } from "react";
import { loginUser, initiateOAuth2Login } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

// Hardcoded admin credentials
const ADMIN_EMAIL = "adminquizz025@gmail.com";
const ADMIN_PASSWORD = "admin123";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ⬅️ get redirect info from router
  const redirectPath = location.state?.from || "/"; // ⬅️ fallback to homepage

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // Check hardcoded admin credentials
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const adminData = {
          email: ADMIN_EMAIL,
          role: "admin",
          name: "Admin",
        };
        localStorage.setItem("user", JSON.stringify(adminData));
        navigate("/admin");
        return;
      }

      // Regular user login via backend
      const res = await loginUser({
        email,
        rawPassword: password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate(redirectPath);
    } catch (err) {
      console.error("Login error:", err.response);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-4">
          <img
            src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
            alt="Login Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>

        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Log In
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
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.password}
                onChange={handleChange}
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
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          {/* Google Login Button */}
          <div className="mt-6 text-center">
            <button
              onClick={initiateOAuth2Login}
              className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Login with Google
            </button>
          </div>

          <div className="mt-4 text-center text-l text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-black hover:underline">
              Sign up
            </a>
            <br />
            <a href="/forgot-password" className="text-black hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


 