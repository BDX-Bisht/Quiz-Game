import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { questions } from "../assets/question";
import { toastObj } from "../assets/toastOBJ";
import { ImExit } from "react-icons/im";
import { GrFormNextLink } from "react-icons/gr";
import { VscDebugRestart } from "react-icons/vsc";

const Game = ({ setScore, score, setView }) => {
  const [number, setNumber] = useState(0);
  const [next, setNext] = useState(true);
  const [lock, setLock] = useState(false);
  const name = localStorage.getItem("name");
  const questionLength = questions.length - 1;

  useEffect(() => {
    if (number > questionLength) {
      setNext(false);
    }
  }, [number]);

  const restart = () => {
    window.location.reload();
  };
  const quit = () => {
    const message = "Are you sure want to quit the Game ?";
    if (confirm(message)) {
      toast.success("Quit Successfully...", toastObj);
      localStorage.removeItem("name");
      window.location.reload();
    }
  };

  const nextButton = () => {
    if (number < questionLength) {
      setLock(false);
      setNext(true);
      setNumber(number + 1);
      const options = document.querySelectorAll("#option");
      options.forEach((item) =>
        item.classList.remove(
          "bg-[#509622]",
          "border-[#509622]",
          "bg-[#b93434]",
          "border-[#b93434]"
        )
      );
      console.log(number);
    } else {
      setNext(false);
      console.log(number);
    }
  };

  const selectedOption = (e, index) => {
    if (!lock) {
      if (questions[number].correctAnswer === index) {
        e.target.classList.add("bg-[#509622]", "border-[#509622]");
        setLock(true);
        setNext(false);
        setScore(score + 1);
      } else {
        e.target.classList.add("bg-[#b93434]", "border-[#b93434]");
        setLock(true);
        setNext(false);
        setScore(score + 0);
      }
    }
  };

  return (
    <>
      <div className="flex mb-6 flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
        <h1 className="capitalize text-[20px] font-semibold">
          Welcome , {name}
        </h1>
        <div className="flex gap-4">
          <button
            className="bg-[#4f81e4] text-[14px] rounded-md py-2 px-4 font-semibold duration-200 flex gap-2 items-center hover:bg-[#416bbe]"
            onClick={restart}
          >
            Restart
            <VscDebugRestart />
          </button>
          <button
            className="bg-[#4f81e4] text-[14px] rounded-md py-2 px-4 font-semibold duration-200 flex gap-2 items-center hover:bg-[#416bbe]"
            onClick={quit}
          >
            Quit
            <ImExit />
          </button>
        </div>
      </div>
      <hr />
      <div className="mt-6">
        <h2 className="flex gap-2 text-[16px]">
          <span>Q.{questions[number].id}.</span>
          <span>{questions[number].question}</span>
        </h2>
        <div className="mt-4">
          <ul className="flex flex-col text-center gap-3">
            {questions[number].options.map((item, index) => (
              <li
                key={index}
                id="option"
                className="py-3 bg-[#4f81e4] rounded-md cursor-pointer border-2 duration-300 border-[#4f81e4]"
                onClick={(e) => {
                  selectedOption(e, index + 1);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        {number >= questionLength ? (
          <button
            className="bg-[#4f81e4] text-[14px] rounded-md py-2 px-4 duration-200 hover:bg-[#416bbe]"
            onClick={() => {
              setScore(score);
              setView(true);
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className={`text-[14px] flex gap-2 items-center ${
              next ? "bg-[#4f5d77]" : "bg-[#4f81e4]"
            } rounded-md py-2 px-4 duration-200 ${
              !next && "hover:bg-[#416bbe]"
            }`}
            onClick={nextButton}
            disabled={next ? true : false}
          >
            Next <GrFormNextLink />
          </button>
        )}
      </div>
      <p className="mt-4 text-[14px] font-semibold text-center">
        {number + 1} of 10 questions
      </p>
    </>
  );
};

export default Game;
