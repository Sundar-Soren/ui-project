import React from "react";
import Card from "./_components/card";

const CardData = ["Practice", "Mock", "Title Text here", "Title Text here"];

const Home = () => {
  return (
    <div className="flex md:block justify-center items-center flex-col md:px-16 py-10">
      <div className="pl-7 md:pl-0 text-4xl font-bold">
        <h1>
          Hey, <span className="text-lime-300">Name!</span>
        </h1>
        <h1>
          How&apos;s your prep for the{" "}
          <span className="text-lime-300">March SAT</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-max mt-6 gap-6">
        {CardData.map((header, i) => (
          <Card key={i} header={header} />
        ))}
      </div>
    </div>
  );
};

export default Home;
