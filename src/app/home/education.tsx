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
    </div>
  );
}
