import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

 const API_URL = process.env.REACT_APP_API_URL;

 useEffect(() => {
    console.log("API URL is:", process.env.REACT_APP_API_URL);
    fetch(`${API_URL}/projects/`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(({ title, description, image, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
            >
              <img src={`${process.env.REACT_APP_API_URL}${image}`} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4 bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
