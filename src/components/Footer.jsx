import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Ramsundar M. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="mailto:ramsundar982004@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/ramrs8"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ramsundarm"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
