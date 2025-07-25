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
      {/* Floating Avatar */}
      <motion.div
        className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl mb-6 border-4 border-white bg-white/30 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Ramsundar M"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Ramsundar M
      </motion.h1>

      {/* Typewriter */}
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
          <FaGithub className="hover:text-black transition" />
        </a>
        <a href="https://linkedin.com/in/ramsundarm" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition" />
        </a>
        <a href="mailto:ramsundar982004@gmail.com">
          <FaEnvelope className="hover:text-red-500 transition" />
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
