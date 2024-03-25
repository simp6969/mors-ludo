"use client";

import { useEffect, useState } from "react";

export function ThemeHandler() {
  const [isDarkMode, setIsdarkMode] = useState(false);
  useEffect(() => {
    if (window) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsdarkMode(true);
      } else {
        setIsdarkMode(false);
      }
    }
  }, []);
  if (isDarkMode) {
    return {
      backgroundColor: "#121212",
      color: "#202020",
    };
  }
  if (!isDarkMode) {
    return;
  }
}

export const ThemeHandlerConst = {
  accentColor: "#A079C2 ",
  accentColor2: "#C2F0F0",
};
