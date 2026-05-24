"use client";

import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="glow-ring w-[300px] h-[300px] bg-purple-600/20 top-1/2 left-0 -translate-y-1/2" />
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="section-subtitle">
          A passionate developer crafting digital experiences
        </p>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center reveal ${
            inView ? "visible" : ""
          }`}
        >
          <div className="relative flex justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden neon-border float">
              <Image
                src="/profile.jpg"
                alt="Sahil"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              MERN Stack &{" "}
              <span className="text-gradient">AI Developer</span>
            </h3>
            <p className="text-[var(--text-gray)] mb-6 leading-relaxed">
              I&apos;m a full-stack developer specializing in the MERN stack
              with a growing focus on AI integration. I love building web
              applications that are not only functional but also visually
              stunning and futuristic.
            </p>

            <div className="space-y-4 mb-8">
              <div className="glass-card rounded-lg p-4">
                <span className="text-purple-400 font-semibold">🎓 Education</span>
                <p className="text-[var(--text-gray)] text-sm mt-1">
                  B.Tech CSE-IoT — Yeshwantrao Chavan College of Engineering, Nagpur
                </p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <span className="text-blue-400 font-semibold">💼 Internship</span>
                <p className="text-[var(--text-gray)] text-sm mt-1">
                  Web Developer Intern — MERN Stack Development
                </p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <span className="text-cyan-400 font-semibold">🎯 Current Focus</span>
                <p className="text-[var(--text-gray)] text-sm mt-1">
                  AI-powered web apps & intelligent systems
                </p>
              </div>
            </div>

            <a
              href="/Sahil_Atram_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
