// HomePage.tsx
import React from "react";
import Navbar from "../Navbar";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl py-3">Home Page</h1>
    </div>
  );
};

export default HomePage;
