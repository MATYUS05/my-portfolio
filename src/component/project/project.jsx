import React from "react";
import p1 from "../../picture/p1.png";
import reactjs from "../../picture/reactjs.png";
import tailwind from "../../picture/tailwind.png";
import css from "../../picture/css.png";
import js from "../../picture/js.png";

const Project = () => {
  return (
    <div
      className="bg-slate-800 w-full h-full flex flex-col items-center font-outfit"
      id="project"
    >
      <h1 className="font-glow text-2xl md:text-4xl text-white text-center mt-8 -mb-5 md:-mb-2 md:mt-0">MY PROJECT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">

        {/* First Project*/}
        <div className="bg-emerald-950 w-10/12 md:w-96 h-80 border-2 hover:border-emerald-300 hover:shadow-emerald-400 hover:shadow-lg transition ease-in delay-75 rounded overflow-hidden mx-auto">
          <div className="w-full h-44 overflow-hidden">
            <a href="https://jmb-travel.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src={p1}
                alt="logo"
              />
            </a>
          </div>
          <div className="p-2">
            <h1 className="font-glow1 text-lg -mb-0.5 mt-2">Website Travel</h1>
            <p className="text-white text-sm text-justify mt-3 -mb-3 leading-1">
              Website Sederhana yang dibuat untuk memberikan pengetahuan kepada user seputar DKI Jakarta dari segi wisata hingga budayanya
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 items-center">
                <h1 className="text-emerald-500 text-xs">Build With:</h1>
                <img className="w-5 h-5" src={reactjs} alt="logo"></img>
                <img className="w-5 h-5" src={css} alt="logo"></img>
                <img className="w-5 h-5" src={js} alt="logo"></img>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className=" bg-violet-900 text-sm text-white px-2 py-1 rounded hover:bg-sky-700 transition ease-in delay-50"
                >
                  demo
                </button>
                <button
                  type="button"
                  className="bg-violet-900 text-sm text-white px-2 py-1 rounded  hover:bg-sky-700 transition ease-in delay-50"
                >
                  github
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Project*/}
        <div className="bg-white w-10/12 md:w-96 h-80 border-2 border-zinc-400 overflow-hidden mx-auto">
          <div className="w-full h-44 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src=""
              alt="logo"
            />
          </div>
          <div className="p-2">
            <h1 className="">Unknown Project</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, aliquam.
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs">Made With:</h1>
                <img className="w-5 h-5 bg-sky-300" src="" alt="logo"></img>
                <img className="w-5 h-5 bg-sky-300" src="" alt="logo"></img>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ok
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Project*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 mb-20">
        <div className="bg-white w-10/12 md:w-96 h-80 border-2 border-zinc-400 overflow-hidden mx-auto">
          <div className="w-full h-44 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src=""
              alt="logo"
            />
          </div>
          <div className="p-2">
            <h1 className="">Unknow Project</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, aliquam.
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs">Made With:</h1>
                <img className="w-5 h-5 bg-sky-300" src="" alt="logo"></img>
                <img className="w-5 h-5 bg-sky-300" src="" alt="logo"></img>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ok
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Project*/}
        <div className="bg-white w-10/12 md:w-96 h-80 border-2 border-zinc-400 overflow-hidden mx-auto -mb-14">
          <div className="w-full h-44 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src=""
              alt="logo"
            />
          </div>
          <div className="p-2">
            <h1 className="">Unknown Project</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, aliquam.
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs">Made With:</h1>
                <img className="w-5 h-5 bg-sky-300" src="" alt="logo"></img>
                <img className="w-5 h-5 bg-sky-300" src="" alt="logo"></img>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ok
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
