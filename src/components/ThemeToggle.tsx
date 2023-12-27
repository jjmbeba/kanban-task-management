"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const THEMES = ["light", "dark"];


  return (
    <div className="flex items-center justify-center gap-6 bg-[#F4F7FD] dark:bg-[#20212C] py-3 rounded-[0.25rem]">
      <Sun className="h-[1.2rem] w-[1.2rem] text-secondary fill-current" />
      <RadioGroup
        defaultValue={theme}
        className="flex items-center bg-primary rounded-lg p-1 relative"
      >
        {THEMES.map((themeValue) => (
          <RadioGroupItem
            onClick={() => setTheme(themeValue)}
            value={themeValue}
            id={themeValue}
          />
        ))}
        <div
          className={`absolute bg-white h-4 w-4 rounded-full pointer-events-none transition-all duration-700 translate-x-none ${
            theme === "light" ? "" : "translate-x-6"
          }`}
        />
      </RadioGroup>
      <Moon className="h-[1.2rem] w-[1.2rem] text-secondary fill-current" />
    </div>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
