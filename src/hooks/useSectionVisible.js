import { useState, useRef, useEffect } from "react";

function useSectionVisible() {
  // doesnt work yet, https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/
  const [isVisible, setVisible] = useState(true);
  // const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return "one";
}

export { useSectionVisible };
