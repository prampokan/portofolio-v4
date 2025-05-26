export default function Footer() {
  return (
    <div className="w-full h-12 border-t bg-background flex justify-center items-center fixed bottom-0">
      <div className="w-full max-w-3xl flex justify-center items-center">
        <h1 className="text-xs tracking-tight text-muted-foreground font-[family-name:var(--font-geist-mono)]">
          Built with ♡ using Next.js
        </h1>
      </div>
    </div>
  );
}
