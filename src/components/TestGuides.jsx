import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Entrance = () => {
  return (
    <div className="bg-white min-h-screen px-10 py-5">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Test Guides
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="IELTS"
          description="A comprehensive guide to prepare for the International English Language Testing System (IELTS) exam."
          link="/test-guides/ielts"
        />
        <Card
          title="SAT"
          description="Prepare for the SAT exam with strategies, practice questions, and expert tips. Widely accepted for university admissions."
          link="/test-guides/sat"
        />
        <Card
          title="PTE"
          description="Pearson Test of English Academic preparation for non-native English speakers. Widely recognized by universities in Nepal and abroad."
          link="/test-guides/pte"
        />
        <Card
          title="TOEFL"
          description="Test of English as a Foreign Language (TOEFL) preparation guide. Commonly required for university admissions in English-speaking countries."
          link="/test-guides/toefl"
        />
        <Card
          title="GRE"
          description="Prepare for the Graduate Record Examinations (GRE) with practice tests and strategies, commonly required for graduate school admissions."
          link="/test-guides/gre"
        />
        <Card
          title="GMAT"
          description="GMAT test preparation guide for business school admissions, including quantitative, verbal, and analytical writing sections."
          link="/test-guides/gmat"
        />
        <Card
          title="ACT"
          description="Comprehensive guide for the ACT exam, covering all sections including English, math, reading, and science."
          link="/test-guides/act"
        />
        <Card
          title="LSAT"
          description="Law School Admission Test (LSAT) preparation for those interested in pursuing a law degree."
          link="/test-guides/lsat"
        />
        <Card
          title="CUET"
          description="Prepare for the Central University Entrance Test (CUET), which is applicable for university admissions in Nepal."
          link="/test-guides/cuet"
        />
        <Card
          title="SEE"
          description="Prepare for the Secondary Education Examination (SEE), which is required for school-level graduation in Nepal."
          link="/test-guides/see"
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
