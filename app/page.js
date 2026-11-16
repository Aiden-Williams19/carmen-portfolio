import { getAllProjects } from "../lib/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="site-container">
      <section className="hero">
        <h1>Carmen le Grange</h1>
        <p className="hero-sub">Selected work</p>
      </section>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
