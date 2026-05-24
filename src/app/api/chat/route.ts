import { portfolioData } from "@/lib/portfolio-data";

const faq: Record<string, string> = {
  skills: "Sahil's skills include React, Next.js, Node.js, Express, MongoDB, TypeScript, Python, and AI/LLM APIs.",
  experience: "Sahil completed a 4-month MERN Stack internship at Monikwave Creatives, building web apps and REST APIs.",
  education: "Sahil is pursuing B.Tech in CSE-IoT at Yeshwantrao Chavan College of Engineering, Nagpur.",
  projects: "Sahil has built SyncMeet (WebRTC video app), Studius (AI notes summarizer), and Nexa Ai (AI chatbot).",
  contact: "You can reach Sahil at sahilatram303@gmail.com or connect on LinkedIn.",
  resume: "Sahil's resume is available for download from the About section of this portfolio.",
  location: "Sahil is based in Nagpur, Maharashtra, India.",
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) return Response.json({ error: "Message required" }, { status: 400 });

    const q = message.toLowerCase();

    if (q.includes("skill") || q.includes("tech") || q.includes("know")) {
      return Response.json({ reply: faq.skills });
    }
    if (q.includes("experience") || q.includes("intern") || q.includes("work")) {
      return Response.json({ reply: faq.experience });
    }
    if (q.includes("education") || q.includes("college") || q.includes("study") || q.includes("b.tech")) {
      return Response.json({ reply: faq.education });
    }
    if (q.includes("project") || q.includes("build") || q.includes("made") || q.includes("created")) {
      return Response.json({ reply: faq.projects });
    }
    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire")) {
      return Response.json({ reply: faq.contact });
    }
    if (q.includes("resume") || q.includes("cv")) {
      return Response.json({ reply: faq.resume });
    }
    if (q.includes("location") || q.includes("live") || q.includes("where")) {
      return Response.json({ reply: faq.location });
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return Response.json({ reply: `Hi there! I'm Sahil's AI assistant. Ask me about his skills, projects, experience, or how to contact him!` });
    }

    return Response.json({
      reply: `I can tell you about Sahil's skills, projects, experience, education, or how to contact him. What would you like to know?`,
    });
  } catch {
    return Response.json({ reply: "Sorry, I couldn't process that. Please try again!" });
  }
}
