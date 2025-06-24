import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 sm:px-12 bg-gradient-to-br from-[#1f2937] to-[#4b5563] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Hey, I’m Joy.</h1>
        <p className="text-lg italic text-purple-300">
          I build beautiful, functional websites — and you should hire me.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-8 py-3 rounded-2xl font-medium hover:bg-white hover:text-gray-900 transition"
        >
          Book Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
