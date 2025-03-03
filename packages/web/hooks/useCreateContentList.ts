
import { useEffect, useState } from "react";

interface IHeading {
  id: string;
  text: string;
  level: number;
}

const useCreateContentList = () => {
  const [headings, setHeadings] = useState<IHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2");
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


  return { headings, activeId, handleClick };
};

export default useCreateContentList;