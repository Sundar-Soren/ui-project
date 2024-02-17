import React from "react";
import { PiMedalLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import Leaderboard from "./leaderboard-user";

export const Sidebar = () => {
  return (
    <div className="fixed text-white p-5 flex flex-col shadow-2xl gap-4 top-0 left-0 h-full w-[22rem] bg-gradient-to-b from-[#2c5145] to-[#181818]">
      <div className="  flex items-center gap-2">
        <div className="h-5 w-5 bg-white rounded-full"> </div>
        <p className="font-thin">
          Chat<span className="font-semibold">SAT</span>
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="New Thread"
          className="py-2.5 w-full px-4 rounded-xl bg-transparent outline-none border border-gray-400/40 shadow-md text-white"
        />
      </div>
      <div className="flex items-center justify-between gap-2 border border-gray-400/20 shadow-2xl rounded-xl py-2 px-3">
        <div>
          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-[#232323] stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-lime-300  progress-ring__circle stroke-current"
                stroke-width="10"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke-dashoffset="calc(400 - (400 * 45) / 100)"
              ></circle>
            </svg>
            <div className=" absolute leading-3 top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50%]">
              <p className="text-center text-lime-300">4/7</p>
              <p className="text-sm">Streak</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-2xl mb-2 items-center">
            <PiMedalLight className="text-lime-300 h-6 w-6" /> 0/223
            <span className="ml-2 font-semibold text-lime-300">XP</span>
          </div>
          <button className="bg-[#787878] py-2 px-4  rounded-lg shadow-xl text-lime-300">
            Take a quiz
          </button>
        </div>
      </div>
      <div className="bg-teal-950/25 rounded-xl">
        <Leaderboard />
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white h-9 w-9 rounded-full"></div>
        <p className="text-xl">Name</p>
      </div>
      <div className="flex items-center gap-2 ">
        <CiLogout className="h-5 w-5" /> Sign out
      </div>
    </div>
  );
};
