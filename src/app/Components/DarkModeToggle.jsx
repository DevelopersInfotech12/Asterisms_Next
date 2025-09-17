"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
