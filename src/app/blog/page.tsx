import { BlurFade } from "@/components/magicui/blur-fade";

export default function Page() {
  return (
    <BlurFade inView>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-jacquard font-bold mt-7 sm:mt-0 text-center">
          Prampokan's Blog
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-center max-w-md mt-5 text-muted-foreground leading-relaxed">
          I write whatever I want to write
        </p>
        <h1 className="mt-28 font-medium">Coming Soon✨</h1>
      </div>
    </BlurFade>
  );
}
