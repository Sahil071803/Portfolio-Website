"use client";

import { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Integration with EmailJS/Resend coming soon)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="glow-ring w-[400px] h-[400px] bg-blue-600/10 bottom-0 right-0" />
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind? Let&apos;s work together
        </p>

        <div
          ref={ref}
          className={`grid md:grid-cols-5 gap-8 max-w-5xl mx-auto reveal ${
            inView ? "visible" : ""
          }`}
        >
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5">
              <div>
                <label className="text-sm text-[var(--text-gray)] mb-1 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-gray)] focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--text-gray)] mb-1 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-gray)] focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--text-gray)] mb-1 block">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Your message..."
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-gray)] focus:border-purple-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <FiSend /> Send Message
              </button>
            </form>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-[var(--text-gray)]">Email</p>
                <p className="text-sm text-[var(--text-primary)]">sahilatram303@gmail.com</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                <FiPhone />
              </div>
              <div>
                <p className="text-xs text-[var(--text-gray)]">Phone</p>
                <p className="text-sm text-[var(--text-primary)]">+91 9356866994</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-[var(--text-gray)]">Location</p>
                <p className="text-sm text-[var(--text-primary)]">Nagpur, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
