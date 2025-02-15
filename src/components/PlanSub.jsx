import React from "react";
import { BadgeCheck } from "lucide-react";

function PlanSub() {
  return (
    <section className="flex flex-col items-center h-screen w-screen px-12 py-16 bg-gradient-to-b from-[#ffc65b] to-[#ffac10] text-black">
      <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
      <p className="text-lg mb-8 text-center max-w-lg">
        Subscribe to unlock exclusive quiz challenges, rewards, and premium
        content!
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Subscription Cards */}
        {[
          { title: "1 Month", price: "$4.99" },
          { title: "6 Months", price: "$24.99" },
          { title: "1 Year", price: "$44.99" },
        ].map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl text-center shadow-lg w-64 transition-all duration-300 hover:border-4 hover:border-black"
          >
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{plan.price}</p>
            <ul className="text-left mb-4 text-gray-700">
              <li className="flex items-center mb-1">
                <BadgeCheck className="w-5 h-5 " />
                <span className="ml-2">Model Set</span>
              </li>
              <li className="flex items-center mb-1">
                <BadgeCheck className="w-5 h-5" />
                <span className="ml-2">Old Question</span>
              </li>
              <li className="flex items-center mb-1">
                <BadgeCheck className="w-5 h-5" />
                <span className="ml-2">Real-Time Generated</span>
              </li>
              <li className="flex items-center">
                <BadgeCheck className="w-5 h-5" />
                <span className="ml-2">Most Asked Question</span>
              </li>
            </ul>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanSub;
