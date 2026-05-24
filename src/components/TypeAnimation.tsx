"use client";

import { useState, useEffect } from "react";

interface TypeAnimationProps {
  strings: string[];
}

export function TypeAnimation({ strings }: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < currentString.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentString.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!deleting && charIndex === currentString.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentString.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex((stringIndex + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex, strings]);

  return (
    <span className="text-gradient typing-cursor inline-block min-w-[200px]">
      {displayText}
    </span>
  );
}
