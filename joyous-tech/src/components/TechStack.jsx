import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiJavascript, SiFlask } from 'react-icons/si';

const tech = [
  { name: "React", icon: <FaReact size={40} className="text-sky-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "Django", icon: <SiDjango size={40} className="text-green-500" /> },
  { name: "Flask", icon: <SiFlask size={40} className="text-gray-700" /> }, // 👈 New addition
  { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white px-6 text-center" id="tech">
        <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
            >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Tech I Work With</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                From frontend finesse to backend brilliance, here are the tools I wield to bring your ideas to life.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 max-w-5xl mx-auto">
                {tech.map(({ name, icon }, i) => (
                <div key={i} className="flex flex-col items-center">
                    {icon}
                    <span className="mt-2 text-sm text-gray-700">{name}</span>
                </div>
                ))}
            </div>
            </motion.div>
        </div>
    </section>
  );
};

export default TechStack;
