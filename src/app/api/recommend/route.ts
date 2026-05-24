import { portfolioData } from "@/lib/portfolio-data";

export async function POST(req: Request) {
  try {
    const { interest } = await req.json();
    const q = (interest || "").toLowerCase();

    const project = portfolioData.projects.find(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q)
    ) || portfolioData.projects[0];

    const reasons: Record<string, string> = {
      SyncMeet: "SyncMeet is a full-featured video conferencing app with WebRTC, screen sharing, and real-time chat — perfect if you're into real-time communication!",
      Studius: "Studius uses LLM APIs to summarize long documents instantly — great if you're interested in AI-powered productivity tools!",
      "Nexa Ai": "Nexa Ai is an intelligent chatbot built with LLM APIs — ideal if you want to see how AI conversations work!",
      "Weather Climate App": "Weather Climate App provides real-time forecasts and climate data — check it out if you're into data-driven apps!",
    };

    return Response.json({
      recommendation: project,
      message: reasons[project.title] || `I recommend checking out ${project.title}!`,
    });
  } catch {
    return Response.json({
      recommendation: portfolioData.projects[0],
      message: "Check out SyncMeet — a video conferencing app built with WebRTC and MERN stack!",
    });
  }
}
