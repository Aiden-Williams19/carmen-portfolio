import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "../../../../../lib/projects";

export function generateStaticParams() {
  const params = [];
  for (const slug of getAllSlugs()) {
    const project = getProjectBySlug(slug);
    const embeds = project.embeds || [];
    embeds.forEach((embed, i) => {
      params.push({ slug, type: embed.type, index: String(i + 1) });
    });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, type, index } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Carmen le Grange`,
  };
}

export default async function MediaPage({ params }) {
  const { slug, type, index } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const embeds = (project.embeds || []).filter((e) => e.type === type);
  const idx = parseInt(index, 10) - 1;
  const embed = embeds[idx];
  if (!embed) notFound();

  return (
    <div className="site-container">
      <div className="project-header">
        <Link href={`/project/${slug}`} className="project-back">
          &larr; Back to {project.title}
        </Link>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-meta">
          {project.category} &middot; {type === "video" ? "Video" : "Audio"}
        </p>
      </div>

      <div className="media-page">
        <div className={type === "video" ? "embed-video" : "embed-audio"}>
          {embed.file ? (
            <video
              src={embed.file}
              poster={embed.poster}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <iframe
              src={embed.src}
              title={`${project.title} — ${type} ${index}`}
              allowFullScreen
              allow="autoplay; fullscreen"
            />
          )}
        </div>
      </div>
    </div>
  );
}
