"use client";

import { useEffect, useState } from "react";
import { activeClass } from "./content-list.css";
import { tocItem, tocLink, tocList, tocTitle } from "./content-list.css";
import { tocContainer } from "./content-list.css";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2,h3");
    const headingData = Array.from(headingElements).map((heading) => {
      if (!heading.id) {
        heading.id =
          heading.textContent?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "";
      }

      return {
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName[1])
      };
    });

    setHeadings(headingData);

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "0px 0px -90% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <nav className={tocContainer}>
      <h4 className={tocTitle}>Contents</h4>
      <ul className={tocList}>
        {headings.map((heading) => (
          <li key={heading.id} className={tocItem}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`${tocLink} ${
                activeId === heading.id ? activeClass : ""
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Styles
