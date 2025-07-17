import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "HTML", "CSS", "JavaScript", "Flutter", "Android (Kotlin)",
  "MySQL", "MongoDB", "Bluetooth Communication", "Git & GitHub"
];

const certifications = [
  "IBM Data Science Professional Certificate",
  "NPTEL - Introduction to Internet of Things",
  "NPTEL - Introduction to Industry 4.0 (IoT)"
];

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I'm currently pursuing a Bachelor of Engineering in Computer Science at Easwari Engineering College (CGPI: 7.88).
          I enjoy building responsive websites and mobile apps. I’ve interned at Prodigy Infotech (Web Development) and Guru InfoTech (Android + Flutter + Bluetooth apps).
          I’m passionate about learning, building projects, and solving real-world problems with code.
        </motion.p>

        <motion.div
          className="mt-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-600">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-blue-100 px-3 py-1 rounded-xl text-center text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Education</h3>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li><strong>Easwari Engineering College</strong> – B.E. Computer Science (2022–2026), CGPI: 7.88</li>
            <li><strong>Vels Senior Hr. Sec. School</strong> – 12th: 71.8%</li>
            <li><strong>Vels Vidyashram</strong> – 10th: 68.4%</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Certifications</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
