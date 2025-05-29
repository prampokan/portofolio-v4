import Image from "next/image";
import { DATA } from "@/data/resume";

export default function Education() {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
        Education
      </h1>
      <div className="flex items-center justify-between mt-5">
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
      <div className="mt-20 flex flex-col items-center">
        <h1 className="font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
          I wanna tell you something about my final project😃
        </h1>
      </div>
    </div>
  );
}
