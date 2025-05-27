import Hero from "./home/hero";
import Skills from "./home/skills";
import Experience from "./home/experience";
import Education from "./home/education";

export default function Home() {
  return (
    <main className="w-full flex justify-center py-24 px-5">
      <div className="w-full max-w-3xl">
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
}
