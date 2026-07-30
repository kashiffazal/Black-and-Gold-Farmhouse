"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bgf-theme") || "dark";
    setTheme(saved);
    setMounted(true);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("bgf-theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
