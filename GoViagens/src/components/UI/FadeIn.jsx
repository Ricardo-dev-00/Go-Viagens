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

    const revealIfNearViewport = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const reachedPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (rect.top <= viewportHeight * 0.95 || reachedPageBottom) {
        setIsVisible(true);
        return true;
      }

      return false;
    };

    if (revealIfNearViewport()) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || revealIfNearViewport()) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(node);

    window.addEventListener("scroll", revealIfNearViewport, { passive: true });
    window.addEventListener("resize", revealIfNearViewport);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealIfNearViewport);
      window.removeEventListener("resize", revealIfNearViewport);
    };
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
