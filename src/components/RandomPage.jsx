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

const testGuides = [
  { id: "ielts", name: "IELTS", description: "Prepare for the International English Language Testing System (IELTS) exam." },
  { id: "sat", name: "SAT", description: "Strategies, practice questions, and expert tips for the SAT exam." },
  { id: "pte", name: "PTE", description: "Pearson Test of English Academic preparation for non-native speakers." },
  { id: "toefl", name: "TOEFL", description: "Test of English as a Foreign Language (TOEFL) preparation guide." },
  { id: "gre", name: "GRE", description: "Practice tests and strategies for the GRE, required for graduate schools." },
  { id: "gmat", name: "GMAT", description: "GMAT test preparation for business school admissions." },
];

const Random = () => {
  return (
    <div className="bg-white min-h-screen px-10 py-5 space-y-16">
      {/* Entrance Section */}
      <section>
        <h1 className="text-3xl font-bold text-center text-black mb-8">Entrance Exams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              title={course.name}
              description={course.description}
              link={`/entrance/${course.id}/free`}
            />
          ))}
        </div>
      </section>

      {/* Test Guides Section */}
      <section>
        <h1 className="text-3xl font-bold text-center text-black mb-8">Test Guides</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testGuides.map((guide) => (
            <Card
              key={guide.id}
              title={guide.name}
              description={guide.description}
              link={`/test-guides/${guide.id}/free`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, description, link }) => (
    <Link to={link} className="block border-2 border-[#FFAC10] rounded-lg shadow-md p-6 text-center shadow-gray-400 hover:shadow-gray-500 hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold text-[#FFAC10]">{title}</h2>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </Link>
  );
  

export default Random;
