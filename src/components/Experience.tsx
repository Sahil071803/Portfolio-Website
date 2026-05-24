"use client";

import { useInView } from "../hooks/useInView";

const experiences = [
  {
    id: 1,
    role: "MERN Stack Web Developer Intern",
    company: "Monikwave Creatives",
    duration: "4 Months",
    work: [
      "Developed responsive web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "Built reusable UI components and improved website responsiveness across devices",
      "Integrated REST APIs and handled frontend-backend communication",
      "Optimized application performance, debugging, and UI/UX enhancements",
      "Collaborated with team members using Git/GitHub in an agile workflow",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="glow-ring w-[300px] h-[300px] bg-cyan-600/20 top-0 left-1/2 -translate-x-1/2" />
        <h2 className="section-title">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="section-subtitle">
          My professional journey and work history
        </p>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative mb-12 reveal ${
                inView ? "visible" : ""
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="hidden md:flex md:w-1/2 md:justify-end">
                  {idx % 2 === 0 && (
                    <div className="text-right pr-8">
                      <span className="text-xs text-purple-400 font-mono">
                        {exp.duration}
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative flex items-start md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  {idx % 2 !== 0 && (
                    <span className="text-xs text-purple-400 font-mono block md:hidden mb-2">
                      {exp.duration}
                    </span>
                  )}
                  <div className="glass-card rounded-xl p-6 ml-4 md:ml-0">
                    {idx % 2 === 0 && (
                      <span className="text-xs text-purple-400 font-mono hidden md:block mb-2">
                        {exp.duration}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-purple-300 text-sm mb-4">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.work.map((item, i) => (
                        <li
                          key={i}
                          className="text-[var(--text-gray)] text-sm flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
