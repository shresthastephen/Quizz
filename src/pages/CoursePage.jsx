import React from "react";
import { useParams, Link } from "react-router-dom";

const courseData = {
  bca: "Bachelor of Computer Applications",
  bce: "Bachelor of Civil Engineering",
  bds: "Bachelor of Dental Surgery",
  bim: "Bachelor of Information Management",
  bit: "Bachelor in Information Technology",
  csit: "Computer Science and Information Technology",
};

const CoursePage = () => {
  const { course } = useParams();
  const courseName = courseData[course] || "Unknown Course";

  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        {courseName} - Tier of Questions
      </h1>

      <div className="flex flex-wrap justify-center gap-8 overflow-x-auto">
        <Card title="Free Trial" description="Try sample questions for free." link={`/entrance/${course}/free`} />
        <Card title="Model Set" description="Practice with model sets (requires login + subscription)." link={`/entrance/${course}/model`} />
        <Card title="Old Set" description="Solve past entrance exam questions (requires login + subscription)." link={`/entrance/${course}/old`} />
        <Card title="Real Time" description="Attempt real-time quizzes (requires login + subscription)." link={`/entrance/${course}/real-time`} />
      </div>
    </div>
  );
};

const Card = ({ title, description, link }) => (
  <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-6 text-center w-72">
    <h2 className="text-2xl font-semibold text-[#FFAC10]">{title}</h2>
    <p className="text-sm text-gray-700 mt-2">{description}</p>
    <Link to={link} className="inline-block mt-4 bg-[#FFAC10] text-white py-2 px-4 rounded-full">
      Learn More
    </Link>
  </div>
);

export default CoursePage;
