import React from "react";
import { Link } from "react-router-dom";

const testGuides = [
  { id: "ielts", 
    name: "IELTS", 
    description: "Prepare for the International English Language Testing System (IELTS) exam." },
  { id: "sat", 
    name: "SAT", 
    description: "Strategies, practice questions, and expert tips for the SAT exam." },
  { id: "pte", 
    name: "PTE", 
    description: "Pearson Test of English Academic preparation for non-native speakers." },
  { id: "toefl", 
    name: "TOEFL", 
    description: "Test of English as a Foreign Language (TOEFL) preparation guide." },
  { id: "gre", 
    name: "GRE", 
    description: "Practice tests and strategies for the GRE, required for graduate schools." },
  { id: "gmat", 
    name: "GMAT", 
    description: "GMAT test preparation for business school admissions." },
];

const TestGuides = () => {
  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Test Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testGuides.map((guide) => (
          <Card key={guide.id} title={guide.name} description={guide.description} link={`/test-guides/${guide.id}`} />
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

export default TestGuides;

