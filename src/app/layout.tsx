import type { Metadata, Viewport } from "next";
import Script from "next/script";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "Sahil | MERN Stack & AI Developer",
  description:
    "Futuristic portfolio of Sahil — MERN Stack & AI Developer. Explore projects, skills, experience, and AI-powered features.",
  keywords: [
    "MERN Stack",
    "AI Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Sahil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){function c(){document.querySelectorAll("[fdprocessedid]").forEach(function(e){e.removeAttribute("fdprocessedid")});document.querySelectorAll("[data-temp-mail-org]").forEach(function(e){e.removeAttribute("data-temp-mail-org");e.removeAttribute("style")})}c();document.addEventListener("DOMContentLoaded",function(){new MutationObserver(c).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["fdprocessedid","data-temp-mail-org"]})})}();`,
          }}
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
