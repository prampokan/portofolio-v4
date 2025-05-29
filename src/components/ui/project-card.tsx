import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import { Globe, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  image,
  name,
  description,
  tech,
  website,
  github,
}: any) {
  return (
    <div className="cursor-pointer border border-white hover:border-zinc-200  dark:border-card dark:hover:border-zinc-700 p-4 rounded-sm bg-zinc-50 dark:bg-card group transition-all duration-300">
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        className="aspect-[16/8] object-cover rounded"
      />
      <div className="mt-2">
        <h1 className="font-medium flex items-center gap-x-1 group-hover:text-sky-500 transition-all">
          {name}
          <ArrowUpRight
            size="16"
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </h1>
        <p className="text-sm text-muted-foreground group-hover:text-sky-500 transition-all">
          {description}
        </p>
        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            {tech.map((item: any, i: any) => (
              <div key={i} className="p-1 text-xs bg-secondary rounded">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-x-4">
            {website && (
              <Link
                href={website}
                target="_blank"
                className="flex items-center gap-x-1 hover:text-sky-500 transition-all text-sm"
              >
                <Globe size="16" />
                Website
              </Link>
            )}
            {github && (
              <Link
                href={github}
                target="_blank"
                className="flex items-center gap-x-1 hover:text-sky-500 transition-all text-sm"
              >
                <Github size="16" />
                Github
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
