import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-container not-found">
      <h1>Page not found</h1>
      <p>The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Link href="/">Back to work</Link>
    </div>
  );
}
