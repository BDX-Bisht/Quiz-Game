import React, { useEffect, useState } from "react";

const Score = ({ score }) => {
  const [intelligence, setIntelligence] = useState("");
  const localName = localStorage.getItem("name");

  const restart = () => {
    localStorage.removeItem("name");
    window.location.reload();
  };

  useEffect(() => {
    if (score < 3) {
      setIntelligence("Loser.");
    } else if (score < 7) {
      setIntelligence("Intermediate.");
    } else if (score < 9) {
      setIntelligence("Intelligent.");
    } else {
      setIntelligence("Genius.");
    }
  }, [score]);

  return (
    <div>
      <h1 className="text-[28px] lg:text-[36px] mb-2 text-center capitalize">
        {localName}
      </h1>
      <hr />
      <p className="text-[14px] lg:text-[18px] mt-2 text-center">
        Your Final Score is <span className="font-bold"> {score} </span>.
      </p>
      <p className="text-[14px] lg:text-[18px] mt-2 text-center">
      You are {intelligence}
      </p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-[#4f81e4] text-[14px] rounded-md py-2 px-6 duration-200 hover:bg-[#416bbe]"
          onClick={restart}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Score;
