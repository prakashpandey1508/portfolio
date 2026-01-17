import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

const Project = () => {
  return (
    <div className="mt-10 w-[1300px] max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            title={project?.title || "No Title"}
            description={project?.description || "No Description"}
            thumbnail={project?.thumbnail || ""}
            githubLink={project?.githubLink || "#"}
            demoLink={project?.demoLink || "#"}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
