import { projects } from "@/database/projects";
import * as C from "@/components";

export default function ProjectsBlock() {
  return (
    <section
      id="projects"
      className="flex flex-col w-full gap-4 mb-20 scroll-mt-24"
    >
      <h2 className="title-2">Projetos</h2>
      <ul className="flex flex-wrap justify-center w-full gap-4 mb-10">
        {projects.map((project) => (
          <C.ProjectCard project={project} />
        ))}
      </ul>
    </section>
  );
}
