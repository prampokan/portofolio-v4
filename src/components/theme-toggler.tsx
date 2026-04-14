"use client";

import * as React from "react";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const THEMES = [
  { name: "light", color: "from-zinc-300 to-white" },
  { name: "dark", color: "from-zinc-950 to-zinc-500" },
  { name: "blue", color: "from-blue-900 to-blue-500" },
  { name: "red", color: "from-red-950 to-red-500" },
  { name: "orange", color: "from-orange-500 to-orange-200" },
  { name: "green", color: "from-green-950 to-green-600" },
  { name: "purple", color: "from-purple-950 to-purple-500" },
  { name: "pink", color: "from-pink-950 to-pink-500" },
  { name: "brown", color: "from-amber-900 to-amber-500" }, // ✅ fixed
];

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ prevent hydration mismatch

  const currentTheme = THEMES.find((t) => t.name === theme) ?? THEMES[0];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <div
            className={`w-5 h-5 rounded-full bg-gradient-to-tl ${currentTheme.color}`}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="rounded-xl bg-background/50 backdrop-blur">
        <PopoverHeader>
          <PopoverTitle className="flex items-center gap-x-2">
            <SunMoon size={18} />
            <p className="font-[family-name:var(--font-geist-mono)]">
              Change Theme
            </p>
          </PopoverTitle>
        </PopoverHeader>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {THEMES.map((t) => (
            <Button
              key={t.name}
              onClick={() => setTheme(t.name)}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-tl ${t.color}`}
              />
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
