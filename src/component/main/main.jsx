import React from "react";
import { ReactTyped } from "react-typed"; // Make sure to use the correct import here
import "./main.css";
import matthew from "../../picture/matthew.jpg";
import reactjs from "../../picture/reactjs.png";
import tailwind from "../../picture/tailwind.png";

const Main = () => {
  return (
    <div
      className="bg-neutral-50 w-full h-screen flex flex-col md:flex-row items-center justify-center font-outfit"
      id="home"
    >
      <img
        className="ml-10 md:ml-64 mb-10 md:mb-0"
        id="blob"
        src="#"
        alt="logo"
      />
      <div className="text-center md:ml-10 md:text-left p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl">
          HELLO! <br />
          My Name is Matthew Yuslih
          <br />
          <span className="text-sky-300">
            <ReactTyped
              strings={["I'm a Web Developer", "I'm a Front End Developer"]}
              typeSpeed={30}
              backSpeed={30}
              loop
            />
          </span>
        </h1>
        <br />
        <div className="flex flex-col text-base mt-0">
          Made With :
          <br />
          <div className="flex mt-2 justify-center md:justify-start">
            <img
              className="w-10 h-10 mr-3 border-2 border-sky-200 shadow-lg shadow-sky-200 rounded-lg bg-white hover:shadow-sky-400 hover:border-sky-400 transition ease-in delay-70 bounce z-10"
              src={reactjs}
              alt="ReactJS Logo"
            />
            <img
              className="w-10 h-10 mr-3 border-2 border-sky-200 shadow-lg shadow-sky-200 rounded-lg bg-white hover:shadow-sky-400 hover:border-sky-400 transition ease-in delay-70 bounce z-10"
              src={tailwind}
              alt="Tailwind CSS Logo"
            />
            {/* <img
              className="w-10 h-10 border-2 border-sky-200 shadow-lg shadow-sky-200 rounded-lg bg-white hover:shadow-sky-400 hover:border-sky-400 transition ease-in delay-70 bounce"
              src={tailwind}
              alt="Tailwind CSS Logo"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
