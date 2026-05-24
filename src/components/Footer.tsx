"use client";

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer       className="relative border-t border-[var(--border-light)] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-gradient">
              Sahil.
            </a>
            <p className="text-[var(--text-gray)] text-sm mt-3 max-w-md leading-relaxed">
              MERN Stack & AI Developer crafting futuristic digital experiences.
              Building the web of tomorrow, today.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://github.com/Sahil071803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-gray)] hover:text-purple-400 hover:border-purple-500/50 transition-all"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sahil-atram-210b40257"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-gray)] hover:text-blue-400 hover:border-blue-500/50 transition-all"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="mailto:sahilatram303@gmail.com"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-gray)] hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-[var(--text-gray)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a
                href="/Sahil_Atram_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--text-gray)] hover:text-[var(--text-primary)] transition-colors"
              >
                Download Resume
              </a>
              <a
                href="mailto:sahilatram303@gmail.com"
                className="block text-sm text-[var(--text-gray)] hover:text-[var(--text-primary)] transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-light)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-gray)] text-sm">
            &copy; {new Date().getFullYear()} Sahil. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-purple-400 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
