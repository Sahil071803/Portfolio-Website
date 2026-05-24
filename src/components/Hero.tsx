"use client";

import Image from "next/image";
import { TypeAnimation } from "../components/TypeAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <div className="glow-ring w-[500px] h-[500px] bg-purple-600 top-[-100px] left-[-100px] glow-pulse" />
      <div className="glow-ring w-[400px] h-[400px] bg-blue-600 bottom-[-50px] right-[-50px] glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="glow-ring w-[300px] h-[300px] bg-cyan-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-pulse" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="md:hidden mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/hero-profile.jpg"
                  alt="Sahil"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
          <p className="text-purple-400 font-medium mb-4 tracking-wider uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Sahil</span>
            <br />
            <TypeAnimation
              strings={[
                "MERN Stack Developer",
                "AI Developer",
                "Full Stack Engineer",
              ]}
            />
          </h1>
          <p className="text-[var(--text-gray)] text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Building modern web applications with React, Node.js, and AI
            integrations. Passionate about creating futuristic digital
            experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            <a
              href="/Sahil_Atram_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 mt-10 justify-center md:justify-start">
            <a
              href="https://github.com/Sahil071803"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-gray)] hover:text-purple-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/sahil-atram-210b40257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-gray)] hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="mailto:sahilatram303@gmail.com"
              className="text-[var(--text-gray)] hover:text-cyan-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
            <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/hero-profile.jpg"
                  alt="Sahil"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-purple-500/20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
