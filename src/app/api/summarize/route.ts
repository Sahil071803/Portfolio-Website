export async function POST() {
  const summary =
    "Sahil Atram is a MERN Stack & AI Developer currently pursuing B.Tech in CSE-IoT at Yeshwantrao Chavan College of Engineering, Nagpur. " +
    "He completed a 4-month internship at Monikwave Creatives as a MERN Stack Web Developer, building responsive web apps, REST APIs, and reusable UI components. " +
    "His technical expertise includes React, Next.js, Node.js, Express, MongoDB, TypeScript, Python, and AI/LLM API integrations. " +
    "He has built projects like SyncMeet (WebRTC video conferencing), Studius (AI notes summarizer), and Nexa Ai (AI chatbot). " +
    "Currently focused on building AI-powered web applications and intelligent systems.";

  return Response.json({ summary });
}
