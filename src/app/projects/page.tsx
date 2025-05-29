import ProjectCard from "@/components/ui/project-card";
import { DATA } from "@/data/resume";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-jacquard font-bold mt-7 sm:mt-0 text-center">
        Recent Projects
      </h1>
      <p className="font-[family-name:var(--font-geist-mono)] text-center max-w-md mt-5 text-muted-foreground leading-relaxed">
        I work on a variety of projects, from building my own products and
        handling client requests to experimenting with fun, side projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {DATA.projects.map((item, i) => (
          <ProjectCard
            key={i}
            image={item.image}
            name={item.title}
            description={item.description}
            tech={item.tech}
            website={item.website}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
}
