import React from "react";
import { ReactTyped } from "react-typed";
import  space_bg  from "../assets/space_bg.png";

const Home = () => {
  return (
    <div style={{backgroundImage : `url(${space_bg})`}} className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white">
      <div>
        <h2>
          Welcome to my portfolio
        </h2>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold  mt-10 sm:mt-16 md:mt-20 px-4">
        👋 Hi I'm Arnav Anand -
      </h1>
      <ReactTyped
        strings={[
          "Front-end Developer",
          "ML Enthusiast",
          "Exploring Full Stack Development",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-10 sm:mt-16 md:mt-20 px-4"
      />
    </div>
  );
};

export default Home;
