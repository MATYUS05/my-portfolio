import React from "react";

const About = () => {
  return (
    <div className="bg-neutral-50 w-full h-50 flex items-center justify-center font-outfit ">
      <div
        className="flex flex-col md:flex-row items-center gap-10 border-2 border-sky-200 mt-0 md:-mt-0 p-5 md:p-7 mb-10 md:mb-28 rounded-lg shadow-lg shadow-sky-200 hover:shadow-sky-400 hover:border-sky-400 transition ease-in delay-70"
        id="about"
      >
        <div className="md:shrink-0">
          <img
            className="w-80 h-60 md:w-60 md:h-60 -mb-5 md:mb-0 bg-sky-400 text-white rounded-md"
            src=""
            alt="logo"
          />
        </div>
        <div className="flex-col">
          <h1 className="text-3xl mb-1 text-sky-400 text-center md:text-left">
            About Me
          </h1>
          <h3 className="text-lg mb-1 w-80 text-center md:text-left">
            "Responsive Design and UX: Keys to Success for Front-End Developers"
          </h3>
          <p className="text-sm text-justify w-80">
            Saya developer pemula yang merancang dan mengembangkan antarmuka
            pengguna situs web menggunakan berbagai macam bahasa pemrograman.
            Fokus utama saya adalah menciptakan pengalaman pengguna yang
            sederhana dan responsif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
