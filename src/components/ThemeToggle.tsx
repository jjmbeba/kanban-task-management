"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [darkMode, setDarkMode] = useState(theme === "dark");

  useEffect(() => {
   setTimeout(() => {
     if (darkMode) {
       setTheme("dark");
     } else {
       setTheme("light");
     }
   }, 150);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center gap-6 bg-[#F4F7FD] dark:bg-[#20212C] py-3 rounded-[0.25rem]">
      <Sun className="h-[1.2rem] w-[1.2rem] text-secondary fill-current" />
      <Switch
        checked={darkMode}
        onCheckedChange={() => setDarkMode((prev) => !prev)}
      />
      <Moon className="h-[1.2rem] w-[1.2rem] text-secondary fill-current" />
    </div>
  );
}
