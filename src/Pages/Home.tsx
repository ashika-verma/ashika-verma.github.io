// HomePage.tsx
import React from "react";
import Navbar from "../Navbar";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="mb-6 grid gap-3 grid-cols-1 sm:grid-cols-2 place-items-center ">
        <div className="w-60 flex items-center">
          <div className="text-center sm:text-start">
            <h1 className="text-2xl font-medium">Ashika Verma</h1>
            <h2 className="text-lg text-slate-500">
              Software Developer in New York City
            </h2>
          </div>
        </div>
        <div className="w-60">
          <img className="rounded-full" src="./img/face1.jpg"></img>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default HomePage;
