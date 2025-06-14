import { Button } from "./ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import Wave from "./ui/wave";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-10 mb-20 px-5">
      <Wave className="mb-10" />
      <h1 className="text-3xl sm:text-4xl font-jacquard font-bold">
        Thanks for stopping by!🙏
      </h1>
      <p className="font-[family-name:var(--font-geist-mono)] text-muted-foreground text-center max-w-xl mt-5 leading-loose">
        Thanks for visiting my portfolio. Feel free to reach out for
        collaborations, opportunities, or just to say hi.
      </p>
      <div className="mt-5">
        <div className="flex gap-x-2 border-b-2 border-dashed pb-5">
          <Button variant="outline">Make an Appointment💻</Button>
          <Button variant="outline">Say hi👋</Button>
        </div>
        <div className="flex gap-x-3 mt-5 justify-center">
          <Button size="icon" className="rounded-full" variant="ghost">
            <Mail />
          </Button>
          <Button size="icon" className="rounded-full" variant="ghost">
            <Linkedin />
          </Button>
          <Button size="icon" className="rounded-full" variant="ghost">
            <Github />
          </Button>
        </div>
      </div>
    </div>
  );
}
