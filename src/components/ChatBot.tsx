"use client";

import { useState, useRef, useEffect } from "react";
import { FiSend, FiX } from "react-icons/fi";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Sahil's AI assistant. Ask me anything about his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Sorry, I couldn't respond. Try again!" }]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="glass-card rounded-2xl w-full max-w-md max-h-[600px] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-light)]">
          <h3 className="font-semibold text-[var(--text-primary)]">AI Chatbot</h3>
          <button onClick={onClose} className="text-[var(--text-gray)] hover:text-[var(--text-primary)]">
            <FiX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                    : "glass text-[var(--text-primary)]"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="glass rounded-xl px-4 py-2 text-sm text-[var(--text-gray)]">Thinking...</div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="p-4 border-t border-[var(--border-light)] flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask about Sahil..."
            className="flex-1 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-full px-4 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-gray)] focus:outline-none focus:border-purple-500"
          />
          <button onClick={send} disabled={loading} className="btn-primary p-2 rounded-full">
            <FiSend size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
