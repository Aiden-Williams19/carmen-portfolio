import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "../../../lib/projects";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Carmen le Grange`,
    description: project.description || project.title,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="site-container">
      <div className="project-header">
        <Link href="/" className="project-back">
          &larr; Back to work
        </Link>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-meta">
          {project.category} &middot; {project.year}
        </p>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
      </div>

      <div className="project-images">
        {project.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${project.title} — image ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </div>
  );
}
