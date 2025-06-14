"use client";

import ProjectCard from "@/components/ui/project-card";
import { DATA } from "@/data/resume";
import Wave from "@/components/ui/wave";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };
  return (
    <BlurFade inView>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-jacquard font-bold mt-7 sm:mt-0 text-center">
          Recent Projects
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-center max-w-md mt-5 text-muted-foreground leading-relaxed">
          I work on a variety of projects, from building my own products and
          handling client requests to experimenting with fun, side projects.
        </p>
        <Wave className="mt-8 mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
          {DATA.projects.slice(0, visibleProjects).map((item, i) => (
            <BlurFade key={i}>
              <ProjectCard
                image={item.image}
                name={item.title}
                description={item.description}
                tech={item.tech}
                website={item.website}
                github={item.github}
              />
            </BlurFade>
          ))}
        </div>
        {visibleProjects < DATA.projects.length && (
          <Button variant="outline" onClick={loadMoreProjects}>
            More
          </Button>
        )}
      </div>
    </BlurFade>
  );
}
