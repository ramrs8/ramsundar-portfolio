import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-blue-50 px-4"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Ramsundar M
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Full Stack Developer | Android Developer | Passionate about building scalable web and mobile apps.
      </motion.p>

      <motion.div
        className="flex space-x-6 text-2xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="https://github.com/ramsundarm" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-black" />
        </a>
        <a href="https://linkedin.com/in/ramsundarm" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-700" />
        </a>
        <a href="mailto:ramsundar982004@gmail.com">
          <FaEnvelope className="hover:text-red-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
