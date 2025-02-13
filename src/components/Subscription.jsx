import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Subscription() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/plansub");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-12 py-16 bg-gradient-to-b from-[#ffc65b] to-[#ffac10] text-black mt-20 rounded-3xl">
      <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
      <p className="text-lg mb-6 text-center max-w-lg">
        Subscribe to get the latest quiz updates, challenges, and special
        rewards. Don't miss out on the fun!
      </p>
      <form className="flex w-full max-w-md" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-full border-none text-black outline-none"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded-r-full hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Subscription;
