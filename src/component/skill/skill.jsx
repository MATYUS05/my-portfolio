import React from "react";
import "./skill.css";
import html from "../../picture/html.png";
import css from "../../picture/css.png";
import js from "../../picture/js.png";
import c from "../../picture/c.png";
import python from "../../picture/python.png";
import reactjs from "../../picture/reactjs.png";
import tailwind from "../../picture/tailwind.png";
import nextjs from "../../picture/nextjs2.png";
import nodejs from "../../picture/nodejs.png";

const Skill = () => {
  return (
    <div
      className="bg-slate-800 w-full h-50 text-white flex flex-col items-center font-outfit"
      id="skill"
    >
      <h1 className="font-glow text-center text-2xl md:text-4xl mt-7 md:mt-10 mb-2">
        Programming Languange
      </h1>
      <p className="w-10/12 md:w-7/12 text-center text-sm md:text-base mt-1 md:mt-3 -mb-32 md:-mb-28">
      🚀Saya adalah seorang penggemar sejati dunia pemrograman, selalu haus akan pengetahuan baru dan tantangan yang menarik. Berikut adalah beberapa bahasa pemrograman yang bisa saya gunakan:
      </p>
      <div className="flex items-center justify-center flex-grow mt-36 md:mb-20">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
          <img
            src={html}
            alt="logo"
            className="bg-cyan-900 hover:border-2 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={css}
            alt="logo"
            className="bg-cyan-900 hover:border-2 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={js}
            alt="logo"
            className="bg-cyan-900 hover:border-2 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={reactjs}
            alt="logo"
            className="bg-cyan-900 hover:border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={nextjs}
            alt="logo"
            className="bg-cyan-900 hover:border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={nodejs}
            alt="logo"
            className="bg-cyan-900 hover:border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={tailwind}
            alt="logo"
            className="bg-cyan-900 hover:border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={c}
            alt="logo"
            className="bg-cyan-900 hover:border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={python}
            alt="logo"
            className="bg-cyan-900 hover:border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={python}
            alt="logo"
            className="bg-slate-700 border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={python}
            alt="logo"
            className="bg-slate-700 border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
          <img
            src={python}
            alt="logo"
            className="bg-slate-700 border-2 border-zinc-400 w-16 h-16 md:w-20 md:h-20 rounded-lg hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:border-sky-300 transition ease-in delay-50"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Skill;
