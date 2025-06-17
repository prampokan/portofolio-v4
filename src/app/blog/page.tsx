import { BlurFade } from "@/components/magicui/blur-fade";
import BlogCard from "@/components/ui/blog-card";

export default function Page() {
  return (
    <BlurFade inView>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-[family-name:var(--font-geist-mono)] font-bold mt-7 sm:mt-0 text-center tracking-tighter">
          Prampokan's Blog
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-center max-w-md mt-5 text-muted-foreground leading-relaxed">
          Cooming Soon
        </p>
        {/* <div className="mt-10 grid grid-cols-2 gap-4 w-full">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div> */}
      </div>
    </BlurFade>
  );
}
