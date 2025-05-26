import { DATA } from "@/data/resume";
import Accordion from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
        Experience
      </h1>
      <p className="mt-5 leading-loose font-[family-name:var(--font-geist-mono)] text-muted-foreground">
        I have several experiences in the field of software engineering, such as
        part-time job as a software engineer, independent studies, and
        internships.
      </p>
      <div className="mt-7">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
}
