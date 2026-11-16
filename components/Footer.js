"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="site-footer">
      <div className="site-container">
        &copy; {year} Carmen le Grange
      </div>
    </footer>
  );
}
