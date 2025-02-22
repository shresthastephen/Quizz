import React from "react";
import { useParams } from "react-router-dom";

const questionTypes = {
  free: "Free Trial",
  model: "Model Set",
  old: "Old Questions",
  "real-time": "Real-Time Quiz",
};

const QuestionTypePage = () => {
  const { course, type } = useParams();
  const typeName = questionTypes[type] || "Unknown Type";

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
