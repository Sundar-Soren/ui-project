import React from "react";
import { PiMedalLight } from "react-icons/pi";
const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Leaderboard = () => {
  return (
    <div>
      <h1 className="p-4 px-6 shadow-xl rounded-xl border border-gray-400/20">
        Leaderboard
      </h1>
      <ul className="flex flex-col gap-2 p-4 h-[40vh] overflow-y-auto">
        {userArray.map((i) => (
          <li
            key={i}
            className="flex justify-between border border-gray-400/20 p-4 rounded-xl transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-[#769a56a1] hover:to-[#406b5dbd]"
          >
            <p className="flex items-center gap-1">
              <span className="text-lime-300 font-semibold">
                {i <= 9 && "0"}
                {i}.
              </span>
              <PiMedalLight className="text-lime-300 h-6 w-6" />
              <span className="h-4 w-4 bg-white rounded-full"></span> Name
            </p>
            <p>
              0/223
              <span className="ml-2 font-semibold text-lime-300">XP</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
