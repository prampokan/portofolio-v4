"use client";

import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-full border-b h-14 flex justify-center items-center fixed bg-background/50 backdrop-blur px-5 z-50">
      <div className="w-full max-w-3xl flex justify-between items-center">
        <h1 className="font-semibold cursor-pointer">pr4mpokan</h1>
        <div className="hidden sm:flex gap-x-5">
          <ul className="flex items-center gap-x-8 font-medium text-sm font-[family-name:var(--font-geist-mono)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all hover:text-sky-500 hover:underline ${
                  pathname === link.href ? "text-sky-500 underline" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <ThemeToggler />
        </div>
        <Button size="icon" variant="ghost" className="flex sm:hidden">
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
