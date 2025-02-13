import React from "react";
import trophy from "../assets/trophy.png";
import play from "../assets/play.png";
function Main() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          CHALLENGE YOUR MIND,{" "}
          <span className="bold-text">CONQUER THE QUIZ!</span>
        </h1>
        <p>
          Dive into a world of exciting challenges where your knowledge, speed,
          and wit come together. Test yourself, compete with others, and claim
          your spot at the top!
        </p>
        <button className="play-now-btn">
          <img src={play} />
          PLAY NOW
        </button>
      </div>
      <div className="trophy-image">
        <img src={trophy} alt="Trophy" />
      </div>
    </section>
  );
}

export default Main;
