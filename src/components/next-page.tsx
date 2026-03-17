"use client";

import { Button } from "./ui/button";
import { MoveRight, MoveLeft, ArrowRight, ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/chat", label: "Chat" },
  { href: "/blog", label: "Blog" },
];

export default function NextPage() {
  const pathname = usePathname();

  const currentIndex = navLinks.findIndex((link) => link.href === pathname);

  const nextLink =
    currentIndex === navLinks.length - 1
      ? navLinks[0]
      : navLinks[currentIndex + 1];

  const isLast = currentIndex === navLinks.length - 1;

  return (
    <div className="w-full flex justify-end mt-10">
      <Link href={nextLink.href}>
        {isLast ? (
          <Button variant="outline">
            <ArrowLeft />
            Back to Home
          </Button>
        ) : (
          <Button variant="outline">
            Next Page
            <ArrowRight />
          </Button>
        )}
      </Link>
    </div>
  );
}
