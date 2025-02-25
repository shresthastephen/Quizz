import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { id: "bca", name: "BCA", description: "Bachelor of Computer Applications." },
  { id: "csit", name: "CSIT", description: "Computer Science and Information Technology." },
  { id: "bim", name: "BIM", description: "Bachelor of Information Management." },
  { id: "bit", name: "BIT", description: "Bachelor in Information Technology." },
  { id: "bce", name: "BCE", description: "Bachelor of Computer Engineering." },
  { id: "bds", name: "BDS", description: "Bachelor of Dental Surgery." },
];

const Entrance = () => {
  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Entrance Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id} title={course.name} description={course.description} link={`/entrance/${course.id}`} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, link }) => (
  <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-6 text-center">
    <h2 className="text-2xl font-semibold text-[#FFAC10]">{title}</h2>
    <p className="text-sm text-gray-700 mt-2">{description}</p>
    <Link to={link} className="inline-block mt-4 bg-[#FFAC10] text-white py-2 px-4 rounded-full">
      Learn More
    </Link>
  </div>
);

export default Entrance;

