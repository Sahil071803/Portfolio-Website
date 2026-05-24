"use client";

import { useState } from "react";
import { FiMessageSquare, FiFileText, FiSearch, FiVolume2, FiCpu, FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "../hooks/useInView";
import ChatBot from "./ChatBot";
import { portfolioData } from "@/lib/portfolio-data";

const features = [
  {
    icon: <FiMessageSquare size={24} />,
    title: "AI Chatbot",
    description: "Ask anything about my skills, projects, or experience — powered by AI.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FiFileText size={24} />,
    title: "AI Resume Summary",
    description: "Get an instant AI-generated summary of my resume and qualifications.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FiCpu size={24} />,
    title: "AI Project Recommender",
    description: "Tell me your interests and I'll recommend the best project to check out.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FiVolume2 size={24} />,
    title: "Voice Intro",
    description: "Listen to a quick voice introduction about my journey and skills.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FiSearch size={24} />,
    title: "Smart Project Search",
    description: "Search through my projects using natural language queries.",
    color: "from-purple-500 to-blue-500",
  },
];

export default function AIFeatures() {
  const { ref, inView } = useInView();
  const [activeFeature, setActiveFeature] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [summary, setSummary] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [interest, setInterest] = useState("");
  const [recommendation, setRecommendation] = useState<{ title: string; reason: string } | null>(null);
  const [recLoading, setRecLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof portfolioData.projects>([]);

  const handleTryNow = () => {
    switch (activeFeature) {
      case 0:
        setShowChat(true);
        break;
      case 1:
        generateSummary();
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
    }
  };

  const generateSummary = async () => {
    setSummaryLoading(true);
    try {
      const res = await fetch("/api/summarize", { method: "POST" });
      const data = await res.json();
      setSummary(data.summary);
    } catch {
      setSummary("Sahil is a MERN Stack & AI Developer passionate about building modern web applications.");
    }
    setSummaryLoading(false);
  };

  const recommendProject = async () => {
    if (!interest.trim()) return;
    setRecLoading(true);
    setRecommendation(null);
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interest }),
      });
      const data = await res.json();
      setRecommendation({ title: data.recommendation?.title || data.recommendation?.title || portfolioData.projects[0].title, reason: data.message });
    } catch {
      setRecommendation({ title: portfolioData.projects[0].title, reason: "Check out this project!" });
    }
    setRecLoading(false);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (!q.trim()) {
      setSearchResults([]);
      return;
    }
    const ql = q.toLowerCase();
    const results = portfolioData.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(ql) ||
        p.description.toLowerCase().includes(ql) ||
        p.tags.some((t) => t.toLowerCase().includes(ql))
    );
    setSearchResults(results);
  };

  const renderPanel = () => {
    switch (activeFeature) {
      case 0:
        return (
          <>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-6">
              <FiMessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">AI Chatbot</h3>
            <p className="text-[var(--text-gray)] leading-relaxed max-w-md">
              Ask me anything about Sahil's skills, projects, or experience. Get instant AI-powered answers!
            </p>
            <button onClick={handleTryNow} className="btn-primary mt-6 text-sm">
              Open Chat
            </button>
          </>
        );
      case 1:
        return (
          <>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6">
              <FiFileText size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">AI Resume Summary</h3>
            {summary ? (
              <p className="text-[var(--text-gray)] leading-relaxed max-w-md">{summary}</p>
            ) : (
              <p className="text-[var(--text-gray)] leading-relaxed max-w-md">
                Click below to generate an AI-powered summary of Sahil's qualifications.
              </p>
            )}
            <button onClick={handleTryNow} disabled={summaryLoading} className="btn-primary mt-6 text-sm">
              {summaryLoading ? "Generating..." : summary ? "Regenerate" : "Generate Summary"}
            </button>
          </>
        );
      case 2:
        return (
          <>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-6">
              <FiCpu size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Project Recommender</h3>
            <p className="text-[var(--text-gray)] leading-relaxed max-w-md mb-4">
              Tell me what you're interested in (e.g., "video chat", "AI", "MERN")
            </p>
            <div className="flex gap-2 w-full max-w-sm">
              <input
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && recommendProject()}
                placeholder="e.g., AI apps..."
                className="flex-1 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-full px-4 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-gray)] focus:outline-none focus:border-purple-500"
              />
              <button onClick={recommendProject} disabled={recLoading} className="btn-primary text-sm py-2 px-4">
                {recLoading ? "..." : "Go"}
              </button>
            </div>
            {recommendation && (
              <div className="mt-4 glass rounded-xl p-4 text-left w-full max-w-sm">
                <p className="text-purple-300 font-semibold text-sm">{recommendation.title}</p>
                <p className="text-[var(--text-gray)] text-xs mt-1">{recommendation.reason}</p>
              </div>
            )}
          </>
        );
      case 3:
        return (
          <>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white mb-6">
              <FiVolume2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Voice Intro</h3>
            <p className="text-[var(--text-gray)] leading-relaxed max-w-md">
              A voice introduction feature is coming soon!
            </p>
          </>
        );
      case 4:
        return (
          <>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-6">
              <FiSearch size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Smart Project Search</h3>
            <p className="text-[var(--text-gray)] leading-relaxed max-w-md mb-4">
              Search projects by name, tech stack, or description.
            </p>
            <input
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full max-w-sm bg-[var(--input-bg)] border border-[var(--input-border)] rounded-full px-4 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-gray)] focus:outline-none focus:border-purple-500"
            />
            {searchResults.length > 0 && (
              <div className="mt-4 space-y-2 w-full max-w-sm">
                {searchResults.map((p) => (
                  <div key={p.title} className="glass rounded-xl p-3 text-left">
                    <p className="text-purple-300 font-semibold text-sm">{p.title}</p>
                    <p className="text-[var(--text-gray)] text-xs mt-1">{p.description.slice(0, 80)}...</p>
                    <div className="flex gap-2 mt-2">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"><FiExternalLink size={12} /> Live</a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"><FiGithub size={12} /> Code</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <p className="text-[var(--text-gray)] text-sm mt-4">No projects found matching &quot;{searchQuery}&quot;</p>
            )}
          </>
        );
    }
  };

  return (
    <section id="ai-features" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="glow-ring w-[400px] h-[400px] bg-purple-600/20 top-0 left-0" />
        <h2 className="section-title">
          AI <span className="text-gradient">Features</span>
        </h2>
        <p className="section-subtitle">
          Powered by artificial intelligence to make my portfolio stand out
        </p>

        <div ref={ref} className={`grid md:grid-cols-2 gap-8 items-center reveal ${inView ? "visible" : ""}`}>
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <button
                key={feature.title}
                onClick={() => setActiveFeature(idx)}
                className={`w-full text-left glass-card rounded-xl p-5 transition-all ${
                  activeFeature === idx ? "border-purple-500/50 neon-glow" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{feature.title}</h4>
                    <p className="text-[var(--text-gray)] text-sm mt-1">
                      {activeFeature === idx ? feature.description : ""}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 min-h-[350px] flex flex-col items-center justify-center text-center">
            {renderPanel()}
          </div>
        </div>
      </div>

      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </section>
  );
}
