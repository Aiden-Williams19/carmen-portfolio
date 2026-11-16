"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner site-container">
        <Link href="/" className="site-name">
          Carmen le Grange
        </Link>
        <nav className="site-nav">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Work
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
