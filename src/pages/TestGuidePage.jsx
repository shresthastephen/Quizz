import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const testGuideData = {
  ielts: "IELTS - International English Language Testing System",
  sat: "SAT - Scholastic Assessment Test",
  pte: "PTE - Pearson Test of English",
  toefl: "TOEFL - Test of English as a Foreign Language",
  gre: "GRE - Graduate Record Examination",
  gmat: "GMAT - Graduate Management Admission Test",
};

const TestGuidePage = () => {
  const { test } = useParams();
  const testName = testGuideData[test] || "Unknown Test Guide";
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");
  const isSubscribed = localStorage.getItem("subscribed") === "true";

  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState(""); // 'login' or 'subscribe'

  const handleProtectedClick = (path) => {
    // if (!isLoggedIn || !isSubscribed) {
    //  setMessageType(!isLoggedIn ? "login" : "subscribe");
    //  setShowMessage(true);
    //} else 
    {
      navigate(path);
    }
  };

  const goToLogin = () => navigate("/SignIn", { state: { from: `/test-guides/${test}` } });
  const goToSubscribe = () => navigate("/PlanSub");

  return (
    <div className="bg-white min-h-screen px-10 py-5 relative">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        {testName} - Test Guide
      </h1>

      <div className="flex flex-wrap justify-center gap-8 overflow-x-auto">
        <Card
          title="Free Trial"
          description="Try sample test questions for free."
          link={`/test-guides/${test}/free`}
          isProtected={false}
        />
        <Card
          title="Model Set"
          description="Practice with model sets."
          onClick={() => handleProtectedClick(`/test-guides/${test}/model`)}
          isProtected={true}
        />
        <Card
          title="Old Set"
          description="Solve past test questions."
          onClick={() => handleProtectedClick(`/test-guides/${test}/old`)}
          isProtected={true}
        />
        <Card
          title="Real Time"
          description="Attempt real-time test quizzes."
          onClick={() => handleProtectedClick(`/test-guides/${test}/real-time`)}
          isProtected={true}
        />
      </div>

      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {messageType === "login"
                ? "Sign in required"
                : "Subscription required"}
            </h2>
            <p className="mb-6 text-gray-600">
              {messageType === "login"
                ? "Please sign in to continue."
                : "You need an active subscription to access this content."}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowMessage(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-2 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={messageType === "login" ? goToLogin : goToSubscribe}
                className="bg-[#FFAC10] hover:bg-[#e69900] text-white px-5 py-2 rounded-full"
              >
                {messageType === "login" ? "Sign In" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ title, description, link, onClick, isProtected }) => (
  <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 text-center w-96 h-80 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-extrabold text-[#FFAC10]">{title}</h2>
    <p className="text-lg text-gray-700 mt-4">{description}</p>
    {isProtected ? (
      <button
        onClick={onClick}
        className="mt-6 bg-[#FFAC10] text-white py-3 px-6 rounded-full text-lg"
      >
        Learn More
      </button>
    ) : (
      <Link
        to={link}
        className="inline-block mt-6 bg-[#FFAC10] text-white py-3 px-6 rounded-full text-lg"
      >
        Learn More
      </Link>
    )}
  </div>
);

export default TestGuidePage;




