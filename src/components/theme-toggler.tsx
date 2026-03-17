"use client";

import * as React from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* <Button
        size="icon"
        className="cursor-pointer rounded-full"
        variant="ghost"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="dark:hidden" />
        <Moon className="hidden dark:block" />
      </Button> */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-5 h-5 bg-gradient-to-tl from-zinc-300 to-white rounded-full"></div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-xl bg-background/50 backdrop-blur">
          <PopoverHeader>
            <PopoverTitle className="flex items-center gap-x-2">
              <SunMoon size="18" />
              <p className="font-[family-name:var(--font-geist-mono)]">
                Change Theme
              </p>
            </PopoverTitle>
          </PopoverHeader>
          <div className="mt-3 grid grid-cols-4">
            <Button
              onClick={() => setTheme("light")}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <div className="w-5 h-5 bg-gradient-to-tl from-zinc-300 to-white rounded-full"></div>
            </Button>
            <Button
              onClick={() => setTheme("dark")}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <div className="w-5 h-5 bg-gradient-to-tl from-zinc-950 to-zinc-500 rounded-full"></div>
            </Button>
            <Button
              onClick={() => setTheme("blue")}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <div className="w-5 h-5 bg-gradient-to-tl from-blue-900 to-blue-500 rounded-full"></div>
            </Button>
            <Button
              // onClick={() => setTheme("blue")}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <div className="w-5 h-5 bg-gradient-to-tl from-red-900 to-red-500 rounded-full"></div>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
