import Hero from "./home/hero";
import Skills from "./home/skills";
import Experience from "./home/experience";
import Education from "./home/education";
import Chat from "./home/chat";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      {/* <Chat /> */}
      {/* <Footer /> */}
    </>
  );
}
