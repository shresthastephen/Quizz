import React from "react";
import { Link } from "react-router-dom";

const Entrance = () => {
  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Entrance Exams
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="BCA"
          description="A comprehensive course for Bachelor of Computer Applications."
          link="/entrance/bca"
        />
        <Card
          title="CSIT"
          description="A detailed guide to the Computer Science and Information Technology course."
          link="/entrance/csit"
        />
        <Card
          title="BIM"
          description="Explore the Bachelor of Information Management program."
          link="/entrance/bim"
        />
        <Card
          title="BIT"
          description="Bachelor in Information Technology - A comprehensive course covering all aspects of IT."
          link="/entrance/bit"
        />
        <Card
          title="BCE"
          description="Bachelor of Computer Engineering - Focused on hardware and software engineering principles."
          link="/entrance/bce"
        />
        <Card
          title="BDS"
          description="Bachelor in Data Science - Learn data analysis, machine learning, and big data techniques."
          link="/entrance/bds"
        />
      </div>
    </div>
  );
};

const Card = ({ title, description, link }) => (
  <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-6 text-center">
    <h2 className="text-2xl font-semibold text-[#FFAC10]">{title}</h2>
    <p className="text-sm text-gray-700 mt-2">{description}</p>
    <Link
      to={link}
      className="inline-block mt-4 bg-[#FFAC10] text-white py-2 px-4 rounded-full"
    >
      Learn More
    </Link>
  </div>
);

export default Entrance;
