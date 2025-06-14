import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-[30rem] flex-col justify-center items-center">
      <h1 className="font-jacquard text-5xl font-bold">404 - Page Not Found</h1>
      <p className="font-[family-name:var(--font-geist-mono)] text-muted-foreground text-center max-w-2xl mt-5 leading-loose">
        This page isn’t here. But don’t worry click <Link href="/">here</Link>{" "}
        to go home.
      </p>
    </main>
  );
}
