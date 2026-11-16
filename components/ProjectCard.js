import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.slug}`} className="project-card">
      <div className="project-card-image">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="project-card-info">
        <h2 className="project-card-title">{project.title}</h2>
        <span className="project-card-meta">
          {project.category} &middot; {project.year}
        </span>
      </div>
    </Link>
  );
}
