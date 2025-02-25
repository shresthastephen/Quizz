import React from "react";
import { useParams, Link } from "react-router-dom";

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

  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        {testName} - Test Guide
      </h1>

      <div className="flex flex-wrap justify-center gap-8 overflow-x-auto">
        <Card title="Free Trial" description="Try sample test questions for free." link={`/test-guides/${test}/free`} />
        <Card title="Model Set" description="Practice with model sets." link={`/test-guides/${test}/model`} />
        <Card title="Old Set" description="Solve past test questions." link={`/test-guides/${test}/old`} />
        <Card title="Real Time" description="Attempt real-time test quizzes." link={`/test-guides/${test}/real-time`} />
      </div>
    </div>
  );
};

const Card = ({ title, description, link }) => (
  <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-8 text-center w-96 h-80 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-extrabold text-[#FFAC10]">{title}</h2>
    <p className="text-lg text-gray-700 mt-4">{description}</p>
    <Link to={link} className="inline-block mt-6 bg-[#FFAC10] text-white py-3 px-6 rounded-full text-lg">
      Learn More
    </Link>
  </div>
);

export default TestGuidePage;


