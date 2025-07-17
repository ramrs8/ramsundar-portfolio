import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-blue-50 px-4"
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Ramsundar M
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.p
        className="text-lg md:text-xl text-blue-600 font-semibold max-w-2xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Android Developer",
            "React & Flutter Enthusiast",
            "UI/UX Learner"
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 text-2xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="https://github.com/ramrs8" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-black" />
        </a>
        <a href="https://linkedin.com/in/ramsundarm" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-700" />
        </a>
        <a href="mailto:ramsundar982004@gmail.com">
          <FaEnvelope className="hover:text-red-500" />
        </a>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <a
          href="https://ramrs8.github.io/ramsundar-portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
