import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const HashScrollHandler = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);

    // Wait until the page has rendered
    requestAnimationFrame(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [hash]);

  return null;
};