import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-slate-800 w-100 h-14 flex items-center justify-between font-outfit text-white">
            <p className="pl-6 md:pl-96 text-sm md:text-base">Copyright © 2024 - All right reserved</p>
            <div className="flex items-center pr-5 md:pr-96 gap-5">
                <a href="https://twitter.com"><FaTwitter className="text-white hover:text-sky-400 cursor-pointer" size={24} /></a>
                <a href="https://facebook.com"><FaFacebook className="text-white hover:text-blue-600 cursor-pointer" size={24} /></a>
                <a href="https://instagram.com"><FaInstagram className="text-white hover:text-rose-500 cursor-pointer" size={24} /></a>
            </div>
        </div>
    );
}

export default Footer;
