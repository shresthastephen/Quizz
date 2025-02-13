import React from "react";
import { useNavigate } from "react-router-dom";
import trophy from "../assets/trophy.png";
import play from "../assets/play.png";

function Main() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/mocktest");
  };

  return (
    <section className="flex justify-between items-center px-12 py-16 bg-gradient-to-b from-[#ffac10] to-[#ffc65b] text-black h-[90vh]">
      <div className="ml-20">
        <h1 className="text-5xl font-bold mb-5">
          CHALLENGE YOUR MIND,{" "}
          <span className="text-[60px] font-bold">CONQUER THE QUIZ!</span>
        </h1>
        <p className="text-lg mb-5 leading-relaxed">
          Dive into a world of exciting challenges where your knowledge, speed,
          and wit come together. Test yourself, compete with others, and claim
          your spot at the top!
        </p>
        <button
          onClick={handlePlayClick}
          className="flex items-center w-48 px-5 py-2 text-lg font-normal bg-white text-black border-none rounded-full cursor-pointer mt-12 hover:bg-yellow-300"
        >
          <img src={play} alt="Play" className="pt-1 mr-2" />
          PLAY NOW
        </button>
      </div>
      <div className="origin-center w-[90%]">
        <img src={trophy} alt="Trophy" />
      </div>
    </section>
  );
}

export default Main;
