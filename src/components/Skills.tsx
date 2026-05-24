"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiExpress, SiSocketdotio, SiMongodb, SiPostman, SiVercel, SiWebrtc } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuBrainCircuit, LuCode } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io5";
import { BiBot } from "react-icons/bi";

const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "React-Redux": <SiRedux className="text-purple-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  "REST APIs": <TbApi className="text-blue-400" />,
  "Socket.io": <SiSocketdotio className="text-white" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Mongoose: <SiMongodb className="text-red-400" />,
  "LLM APIs": <LuBrainCircuit className="text-purple-400" />,
  "API Integration": <TbApi className="text-orange-400" />,
  "AI Prompts": <BiBot className="text-cyan-400" />,
  JavaScript: <IoLogoJavascript className="text-yellow-400" />,
  Python: <FaPython className="text-blue-400" />,
  "Git/GitHub": <FaGithub className="text-white" />,
  Postman: <SiPostman className="text-orange-500" />,
  Vercel: <SiVercel className="text-white" />,
  "VS Code": <LuCode className="text-blue-400" />,
  WebRTC: <SiWebrtc className="text-purple-400" />,
};

const skillCategories = [
  {
    name: "Frontend",
    color: "from-purple-500 to-pink-500",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "React-Redux"],
  },
  {
    name: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    name: "Database",
    color: "from-green-500 to-emerald-500",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    name: "AI & APIs",
    color: "from-orange-500 to-red-500",
    skills: ["LLM APIs", "API Integration", "AI Prompts"],
  },
  {
    name: "Languages",
    color: "from-yellow-400 to-orange-500",
    skills: ["JavaScript", "Python"],
  },
  {
    name: "Tools",
    color: "from-gray-400 to-gray-600",
    skills: ["Git/GitHub", "Postman", "Vercel", "VS Code", "WebRTC"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="glow-ring w-[400px] h-[400px] bg-blue-600/20 top-0 right-0" />
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        <div
          ref={ref}
          className={`flex flex-wrap justify-center gap-4 mb-12 reveal ${
            inView ? "visible" : ""
          }`}
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === idx
                  ? "bg-gradient-to-r " + cat.color + " text-white shadow-lg"
                  : "glass text-[var(--text-gray)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skillCategories[activeCategory].skills.map((skill, idx) => (
            <div
              key={skill}
              className="glass-card rounded-xl p-6 text-center skill-card group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform text-xl">
                {skillIcons[skill] || <span className="text-lg font-bold text-gradient-purple">{skill.slice(0, 2)}</span>}
              </div>
              <h4 className="font-semibold text-sm text-[var(--text-primary)]">{skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
