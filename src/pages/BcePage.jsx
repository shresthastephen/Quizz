import React from "react";
import { Link } from "react-router-dom";

const BcePage = () => {
  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
      Tier of questions
      </h1>

      {/* Use Flexbox to keep all cards in a single row */}
      <div className="flex flex-wrap justify-center gap-8 overflow-x-auto">
        <Card
          title="Free"
          description="Access a collection of free BCA entrance questions to get started."
          link="/entrance/free"
        />
        <Card
          title="Model"
          description="Practice with carefully designed model sets similar to actual exams."
          link="/entrance/model"
        />
        <Card
          title="Autogenerate"
          description="Generate random quizzes based on selected topics and difficulty levels."
          link="/entrance/generated"
        />
        <Card
          title="Old Question"
          description="Review past random BCA entrance exam questions for better preparation."
          link="/entrance/old"
        />
      </div>
    </div>
  );
};

const Card = ({ title, description, link }) => (
  <div className="border-2 border-[#FFAC10] rounded-lg shadow-lg p-6 text-center w-72">
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

export default BcePage;