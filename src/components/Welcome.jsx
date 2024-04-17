import React, { useState } from "react";
import { toast } from "react-toastify";
import { toastObj } from "../assets/toastOBJ";

const Welcome = ({ fullView, setWelcome }) => {
  const [name, setName] = useState("");
  const [rules, setRules] = useState(0);

  const submitName = () => {
    if (name.length < 1) {
      toast.error("Enter Your Name..", toastObj);
    } else if (!rules) {
      toast.error("Do not accepted rules.", toastObj);
    } else {
      setWelcome(name);
      localStorage.setItem("name", name);
      toast.success("Start the Game...", toastObj);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between h-[100%]">
        <h1 className="text-2xl lg:text-5xl text-center font-semibold">
          Welcome to the Quiz App
          <hr className="mt-6 bg-gray-600" />
        </h1>
        <div className="mt-8">
          <div className="flex flex-col gap-3">
            <label className="text-[14px] lg:text-[16px]" htmlFor="name">
              Name
            </label>
            <input
              className="bg-[#6066be] rounded-sm px-4 py-2"
              type="text"
              autoFocus={true}
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 items-center mt-4">
            <input
              className="outline-none"
              type="checkbox"
              id="accept"
              onClick={() => {
                setRules(true);
              }}
            />
            <label htmlFor="accept">Accept Rules *</label>
          </div>
          <div
            className="flex justify-end mt-6"
            onClick={name.length > 1 && rules ? fullView.enter : ""}
          >
            <div>
              <button
                className="bg-[#4f81e4] text-[14px] rounded-md py-2 px-6 duration-200 hover:bg-[#416bbe]"
                onClick={submitName}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[16px]">
            <b>Rule : </b> Do not leave the page unitl the game is finished.
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
