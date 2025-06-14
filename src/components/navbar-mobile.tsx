import { House, Code, MessageCircle, Notebook } from "lucide-react";
import Link from "next/link";

export default function NavbarMobile() {
  return (
    <nav className="fixed bottom-0 w-full border-t bg-background h-12 justify-between items-center px-5 flex sm:hidden">
      <Link href="/">
        <House />
      </Link>
      <Link href="/projects">
        <Code />
      </Link>
      <Link href="/chat">
        <MessageCircle />
      </Link>
      <Link href="/blog">
        <Notebook />
      </Link>
    </nav>
  );
}
