import Hero from "./home/hero";
import Skills from "./home/skills";
import Experience from "./home/experience";
import Education from "./home/education";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <BlurFade inView>
      <Hero />
      <Skills />
      <Experience />
      <Education />
    </BlurFade>
  );
}
