import { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "../../../lib/projects";
import ListerineLayout from "../../../components/ListerineLayout";
import BookLoungeLayout from "../../../components/BookLoungeLayout";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Carmen le Grange`,
    description: project.description || project.title,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const embeds = project.embeds || [];

  const renderEmbed = (embed, i) => {
    const typeCount = embeds.filter((e, j) => e.type === embed.type && j <= i).length;
    const mediaUrl = `/project/${slug}/${embed.type}/${typeCount}`;
    return (
      <div key={`embed-${i}`} className="embed-block">
        <div className={embed.type === "video" ? "embed-video" : "embed-audio"}>
          <iframe
            src={embed.src}
            title={`${project.title} — ${embed.type} ${typeCount}`}
            allowFullScreen
            allow="autoplay; fullscreen"
          />
        </div>
        <div className="embed-bar">
          <Link href={mediaUrl} className="embed-open">
            {project.title} — {embed.type === "video" ? "Video" : "Audio"} ↗
          </Link>
        </div>
      </div>
    );
  };

  const CustomLayout = project.customLayout
    ? slug === "listerine"
      ? ListerineLayout
      : slug === "book-lounge"
        ? BookLoungeLayout
        : null
    : null;

  return (
    <>
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
      </div>

      <div className="project-images site-container">
        {CustomLayout && <CustomLayout />}

        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={`${project.title} — key visual`}
            loading="eager"
          />
        )}

        {embeds.map((embed, i) => !embed.afterImage && renderEmbed(embed, i))}

        {project.images.map((src, i) => (
          <Fragment key={i}>
            <img
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              loading={i === 0 && embeds.length === 0 && !project.heroImage ? "eager" : "lazy"}
            />
            {embeds.map((embed, j) => embed.afterImage === i + 1 && renderEmbed(embed, j))}
          </Fragment>
        ))}
      </div>
    </>
  );
}
