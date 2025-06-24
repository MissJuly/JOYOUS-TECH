import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Joyous Tech. Crafted with love by Joy 💜
          </p>
        </div>
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/MissJuly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joy-gitau-47236b250/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/JoyGitau98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                className="w-5 h-5"
            >
                <path d="M777.8 591.4 1186 0H1082L738 513.8 446.5 0H0l429.4 740.2L0 1227h104L470 681.6 776.2 1227h446L777.8 591.4Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
