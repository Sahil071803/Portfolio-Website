"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-light)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-gradient"
          >
            Sahil Portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-gray)] hover:text-[var(--text-primary)] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={toggle}
              className="p-2 rounded-full glass hover:border-purple-500/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="text-yellow-400" size={18} />
              ) : (
                <FiMoon className="text-blue-400" size={18} />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-full glass hover:border-purple-500/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="text-yellow-400" size={16} />
              ) : (
                <FiMoon className="text-blue-400" size={16} />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full glass hover:border-purple-500/50 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX size={20} className="text-[var(--text-primary)]" />
              ) : (
                <HiMenu size={20} className="text-[var(--text-primary)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-[var(--border-light)] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-[var(--text-gray)] hover:text-[var(--text-primary)] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
