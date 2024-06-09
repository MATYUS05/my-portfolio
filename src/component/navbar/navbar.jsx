import React, { useState, useEffect } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center font-outfit z-50 transition-colors duration-300 ${
        scrolled ? "bg-white md:text-slate-400 md:bg-opacity-10 backdrop-blur-lg shadow-lg" : "bg-neutral-50 shadow-xl"
      }`}
    >
      <div className="ml-10 md:ml-20 flex items-center mt-3">
        <a href="https://github.com/MATYUS05"><AiFillGithub className="w-10 h-10 mb-3" /></a>
      </div>
      <ul className="hidden md:flex items-center gap-10 mr-20">
        <li
          className="hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li
          className="hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className="hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('skill')}
        >
          Skill
        </li>
        <li
          className="hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('project')}
        >
          Project
        </li>
        <li
          className="text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer bg-sky-300 rounded-full p-2 w-24 text-center hover:bg-indigo-500 shadow-lg"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
      <div className="md:hidden mr-10 z-10" onClick={handleClick}>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-50 flex flex-col justify-center items-center transition duration-300"
        }
      >
        <li
          className="py-6 text-lg hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li
          className="py-6 text-lg hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className="py-6 text-lg hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('skill')}
        >
          Skill
        </li>
        <li
          className="py-6 text-lg hover:text-sky-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          onClick={() => scrollToSection('project')}
        >
          Project
        </li>
        <li
          className="py-6 text-lg text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 cursor-pointer bg-sky-300 rounded-full p-2 w-36 text-center hover:bg-indigo-500 shadow-lg"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
