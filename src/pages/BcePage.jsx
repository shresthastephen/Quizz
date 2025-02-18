import React from "react";
import { useNavigate } from "react-router-dom";

const Entrance = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-5 px-10">
      {/* Header Section */}
      <div className="text-4xl font-medium text-black text-center mb-8">Bce Entrance</div>
      <hr className="w-full border-t-2 mb-4" />
      <div className="flex justify-between items-center w-full mb-4">
        <button
          className="bg-none border-none text-[#FF9800] text-sm cursor-pointer active:text-black"
          onClick={() => navigate(-1)}
        >
          &lt; Back 
        </button>
        <div className="text-sm">
          <span className="mr-4">Time: 2hrs.</span>
          <span>Full Marks: 100</span>
        </div>
      </div>
      <hr className="w-full border-t-2 mb-4" />

      {/* Progress Tracker */}
      <div className="flex justify-around mb-6">
        <div className="p-3 bg-gray-200 rounded-full text-center flex-grow mr-2 cursor-pointer">English</div>
        <div className="p-3 bg-gray-200 rounded-full text-center flex-grow mr-2 cursor-pointer">Maths</div>
        <div className="p-3 bg-gray-200 rounded-full text-center flex-grow cursor-pointer">G.K.</div>
      </div>

      {/* Groups Section */}
      <div className="w-full mb-6">
        {/* Group A */}
        <div className="bg-white p-6 mx-8 mb-8 border border-gray-300 rounded-lg">
          <h2 className="flex justify-between text-xl font-semibold">
            Group A (English)
            <div className="text-sm text-gray-600">50 + 1 = 50</div>
          </h2>

          <ul className="list-none p-0 mt-6">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="mb-6">
                <p className="text-lg">She is very good ..................... swimming.</p>
                <div className="flex mt-3">
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q1-${index}`} /> at
                  </label>
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q1-${index}`} /> on
                  </label>
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q1-${index}`} /> of
                  </label>
                  <label className="text-sm cursor-pointer">
                    <input type="radio" name={`q1-${index}`} /> by
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Group B */}
        <div className="bg-white p-6 mx-8 mb-8 border border-gray-300 rounded-lg">
          <h2 className="flex justify-between text-xl font-semibold">
            Group B (Maths)
            <div className="text-sm text-gray-600">40 + 1 = 40</div>
          </h2>
          <ul className="list-none p-0 mt-6">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="mb-6">
                <p className="text-lg">She is very good ..................... swimming.</p>
                <div className="flex mt-3">
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q2-${index}`} /> at
                  </label>
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q2-${index}`} /> on
                  </label>
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q2-${index}`} /> of
                  </label>
                  <label className="text-sm cursor-pointer">
                    <input type="radio" name={`q2-${index}`} /> by
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Group C */}
        <div className="bg-white p-6 mx-8 mb-8 border border-gray-300 rounded-lg">
          <h2 className="flex justify-between text-xl font-semibold">
            Group C (G.K.)
            <div className="text-sm text-gray-600">10 + 1 = 10</div>
          </h2>
          <ul className="list-none p-0 mt-6">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="mb-6">
                <p className="text-lg">She is very good ..................... swimming.</p>
                <div className="flex mt-3">
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q3-${index}`} /> at
                  </label>
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q3-${index}`} /> on
                  </label>
                  <label className="text-sm mr-8 cursor-pointer">
                    <input type="radio" name={`q3-${index}`} /> of
                  </label>
                  <label className="text-sm cursor-pointer">
                    <input type="radio" name={`q3-${index}`} /> by
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button className="bg-[#03a8e4] text-black py-4 px-8 rounded-lg text-lg cursor-pointer hover:bg-[#0099D3]">
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default Entrance;
