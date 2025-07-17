import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const GITHUB_USERNAME = "ramsundarm"; // 🔁 Change to your GitHub username

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        const topRepos = data.slice(0, 6); // Fetch latest 6 projects
        setRepos(topRepos);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="bg-white rounded-xl shadow-md p-4 text-left hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-semibold text-blue-700">{repo.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-3 mt-1">
                {repo.description || "No description available."}
              </p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-500 flex items-center gap-1 hover:underline"
                >
                  <FaGithub /> View Repo
                </a>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {repos.length === 0 && (
          <p className="text-gray-500 mt-10">Loading projects from GitHub...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
