import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FreeTrialPage from "./FreeTrialPage";  // Import your FreeTrialPage component

const questionTypes = {
  free: "Free Trial",
  model: "Model Set",
  old: "Old Questions",
  "real-time": "Real-Time Quiz",
};

const QuestionTypePage = () => {
  const { course, type } = useParams();
  const navigate = useNavigate();
  const typeName = questionTypes[type] || "Unknown Type";

  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        {typeName} - {course.toUpperCase()} Exam
      </h1>

      {/* Render FreeTrialPage for free type */}
      {type === "free" ? (
        <FreeTrialPage title={course} />
      )  : type === "model" ? (
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-700 mb-6">
            Choose a set to start your Model Set exam for {course.toUpperCase()}.
          </p>
          <div className="flex gap-4">
            <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 w-48 h-48 flex flex-col justify-center items-center">
              <button
                onClick={() => navigate(`/entrance/${course}/model/set-a`)}
                className="text-4xl font-bold text-[#FFAC10] hover:text-black transition"
              >
                Set A
              </button>
            </div>
            <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 w-48 h-48 flex flex-col justify-center items-center">
              <button
                onClick={() => navigate(`/entrance/${course}/model/set-b`)}
                className="text-4xl font-bold text-[#FFAC10] hover:text-black transition"
              >
                Set B
              </button>
            </div>
          </div>
        </div>
      ) : type === "old" ? (
        <div className="flex flex-col gap-6 items-center">
          <p className="text-gray-700 mb-6">
            Choose a set to start your Old Questions exam for {course.toUpperCase()}.
          </p>
          <div className="flex gap-4">
            <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 w-48 h-48 flex flex-col justify-center items-center">
              <button
                onClick={() => navigate(`/entrance/${course}/old/set-a`)}
                className="text-4xl font-bold text-[#FFAC10] hover:text-black transition"
              >
                Set A
              </button>
            </div>
            <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 w-48 h-48 flex flex-col justify-center items-center">
              <button
                onClick={() => navigate(`/entrance/${course}/old/set-b`)}
                className="text-4xl font-bold text-[#FFAC10] hover:text-black transition"
              >
                Set B
              </button>
            </div>
          </div>
        </div>
      ) : type === "real-time" ? (
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-700 mb-6">
            Choose a set to start your real-time generated Set exam for {course.toUpperCase()}.
          </p>
          <div className="flex gap-4">
            <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 w-48 h-48 flex flex-col justify-center items-center">
              <button
                onClick={() => navigate(`/entrance/${course}/real-time/set`)}
                className="text-4xl font-bold text-[#FFAC10] hover:text-black transition"
              >
                Generated Set 
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-700 text-center">Invalid question type selected.</p>
      )}
    </div>
  );
};

export default QuestionTypePage;





