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
        <Card title="Free Trial" description="Try sample entrance questions for free." link={`/entrance/${course}/free`} />
        <Card title="Model Set" description="Practice with model sets." link={`/entrance/${course}/model`} />
        <Card title="Old Set" description="Solve past entrance exam questions." link={`/entrance/${course}/old`} />
        <Card title="Real Time" description="Attempt real-time entrance quizzes." link={`/entrance/${course}/real-time`} />
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

export default CoursePage;
