import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const questionTypes = {
  free: "Free Trial",
  model: "Model Set",
  old: "Old Questions",
  "real-time": "Real-Time Quiz",
};

const QuestionTypePage = () => {
  const { course, type } = useParams();
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const typeName = questionTypes[type] || "Unknown Type";

  // Example: Check if the user is logged in (using localStorage for simplicity)
  const isLoggedIn = !!localStorage.getItem("userToken");

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Only show the modal for types other than 'free'
  if (!isLoggedIn && type !== "free") {
    if (!showModal) {
      setShowModal(true);
    }

    // Handle login redirection
    const handleLoginRedirect = () => {
      navigate("/signin"); // Use navigate for redirection
    };

    return (
      <div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h2 className="text-xl font-bold text-gray-800 mb-4">You need to log in</h2>
              <p className="text-gray-700 mb-6">
                You must be logged in to access this page. Click below to log in.
              </p>
              <button
                onClick={handleLoginRedirect}
                className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Go to Login
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-10 py-5 text-center">
      <h1 className="text-3xl font-bold text-black mb-8">
        {typeName} - {course.toUpperCase()} Exam
      </h1>
      <p className="text-gray-700">
        Welcome to the {typeName} section for {course.toUpperCase()}!
      </p>
      {/* Add your question rendering logic here */}
    </div>
  );
};

export default QuestionTypePage;
