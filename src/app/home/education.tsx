import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { DATA } from "@/data/resume";
import Accordion from "@/components/ui/accordion";

export default function Education() {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
        Education
      </h1>
      <div className="mt-7">
        {DATA.educations.map((item, i) => (
          <Accordion
            key={i}
            image={item.logo}
            position={item.position}
            name={item.name}
            description={item.description}
            period={item.period}
            href={item.href}
          />
        ))}
      </div>
      {/* <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-x-4">
          <div className="w-14 h-14 rounded-xl border p-1 bg-secondary">
            <Image
              src="/images/undip.png"
              alt="undip"
              width={100}
              height={100}
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div>
            <h1 className="font-semibold">Diponegoro University</h1>
            <p className="text-sm text-muted-foreground">
              Computer Engineering
            </p>
          </div>
        </div>
        <div className="text-end">
          <h1 className="font-[family-name:var(--font-geist-mono)] text-sm text-muted-foreground">
            2021 - 2025
          </h1>
          <p className="font-[family-name:var(--font-geist-mono)] text-xs text-muted-foreground mt-0.5">
            GPA : 3.53
          </p>
        </div>
      </div>
      <p className="mt-5 leading-loose font-[family-name:var(--font-geist-mono)] text-muted-foreground">
        I am a recent graduate in Computer Engineering from Universitas
        Diponegoro, with a final GPA of 3.53. Throughout my academic journey, I
        actively engaged in various student organizations, including the
        Computer Engineering Research Club, a community focused on programming
        and technical development within the department. I also took part in
        multiple campus activities and committees, such as serving as a student
        orientation facilitator, contributing to leadership and event
        coordination.
      </p>
      <div className="columns-3 gap-4 mt-7">
        {DATA.education.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="a"
            width={1000}
            height={1000}
            className="rounded-xl size-full object-contain mb-4"
          />
        ))}
      </div>
      <div className="mt-20 flex flex-col items-center relative">
        <h1 className="font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
          I wanna tell you something about my final project😃
        </h1>
        <p className="mt-5 leading-loose font-[family-name:var(--font-geist-mono)] text-muted-foreground text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          inventore corrupti architecto illo consequuntur? Provident, a magnam
          sunt autem optio dicta repellendus dolores aspernatur quibusdam, minus
          quasi odio voluptatum molestiae.
        </p>
        <div className="flex justify-center items-center mt-10 group cursor-pointer">
          <div className="w-[20rem] rounded-xl overflow-hidden -rotate-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border-2 border-dashed p-1">
            <Image
              src="/images/pltmh4.png"
              alt="a"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
          <div className="w-[7rem] rounded-xl overflow-hidden rotate-6 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 border-2 border-dashed p-1">
            <Image
              src="/images/pltmh3.png"
              alt="a"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
          <Button className="absolute bottom-0 rounded-full cursor-pointer -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
            <CirclePlus />
            Read Full Docs
          </Button>
        </div>
      </div> */}
    </div>
  );
}
