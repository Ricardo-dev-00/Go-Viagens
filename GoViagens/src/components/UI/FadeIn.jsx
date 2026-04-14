import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0, className = "" }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;

    if (!node || isVisible) {
      return undefined;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={className}
      data-fade-in
      data-visible={isVisible ? "true" : "false"}
      style={{ "--fade-delay": `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default FadeIn;
