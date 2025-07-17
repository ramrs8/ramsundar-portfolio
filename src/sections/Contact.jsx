import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white py-20 px-6 flex items-center justify-center"
    >
      <motion.div
        className="max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Me</h2>

        <p className="text-gray-700 text-lg mb-8">
          I'm open to internship opportunities, freelance work, or collaborations. Feel free to get in touch!
        </p>

        <div className="flex flex-col items-center gap-3 text-gray-600 text-sm mb-6">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span>ramsundar982004@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-500" />
            <span>8610986172</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Old Pallavaram, Chennai</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-2xl text-gray-600 mb-8">
          <a href="https://github.com/ramsundarm" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black" />
          </a>
          <a href="https://linkedin.com/in/ramsundarm" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-600" />
          </a>
        </div>

        <a
          href="mailto:ramsundar982004@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Send an Email
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
