import { useEffect, useState } from "react";

/**
 * Reveals `word` one character at a time, starting from an empty string.
 * Users who prefer reduced motion get the full word immediately.
 */
export function useTypingWord(word: string, speed = 180, startDelay = 400) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [typed, setTyped] = useState(prefersReducedMotion ? word : "");

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(word);
      return;
    }

    setTyped("");

    let length = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        length += 1;
        setTyped(word.slice(0, length));
        if (length >= word.length) {
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [word, speed, startDelay, prefersReducedMotion]);

  return typed;
}
