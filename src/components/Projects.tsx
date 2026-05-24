"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    id: 1,
    title: "SyncMeet",
    description:
      "A video conferencing application with real-time communication, screen sharing, and chat features built with WebRTC and MERN stack.",
    tags: ["React-Redux", "WebRTC", "Socket.io", "MERN"],
    category: "WebRTC",
    image: "🎥",
    live: "https://sync-meet-video-confrencing-applica.vercel.app/",
    github: "https://github.com/Sahil071803/SyncMeet---Video-Confrencing-Application.git",
  },
  {
    id: 2,
    title: "Studius",
    description:
      "AI-powered notes summarizer that uses LLM APIs to generate concise summaries from long documents and notes.",
    tags: ["React", "LLM API", "MERN Stack"],
    category: "AI",
    image: "📝",
    live: "https://studius-ai-notes-summerizer-oj9o.vercel.app",
    github: "https://github.com/Sahil071803/studius-ai-notes-summerizer.git",
  },
  {
    id: 3,
    title: "Nexa Ai",
    description:
      "Intelligent chatbot application powered by LLM APIs with real-time conversational responses.",
    tags: ["React", "LLM API", "MERN Stack"],
    category: "AI",
    image: "🤖",
    live: "https://ai-chat-bot-application-smoky.vercel.app/",
    github: "https://github.com/Sahil071803/Ai-Chat-Bot-Application.git",
  },
  {
    id: 4,
    title: "Weather Climate App",
    description:
      "A weather and climate application providing real-time forecasts, temperature updates, and climate data visualization.",
    tags: ["React", "API", "Weather"],
    category: "MERN",
    image: "🌤️",
    live: "https://weather-climate-app.vercel.app",
    github: "",
  },
];

const filters = ["All", "AI", "WebRTC", "MERN"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="glow-ring w-[500px] h-[500px] bg-purple-600/10 bottom-0 right-0" />
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcasing my best work — from AI apps to real-time systems
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                  : "glass text-[var(--text-gray)] hover:text-[var(--text-primary)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden group reveal ${
                inView ? "visible" : ""
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-gray)] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm py-2 px-4"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
