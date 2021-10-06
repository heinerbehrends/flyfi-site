import { useEffect, useRef, useState } from "react";
import { throttle } from "./throttle";

function getScrollPosition() {
  return window.pageYOffset;
}

function isBrowser() {
  return typeof window !== "undefined";
}

export function useScroll() {
  if (!isBrowser()) {
    return { scrollPosition: 0, isScrollingUp: false };
  }
  const lastPosition = useRef(getScrollPosition());
  const isScrollingUp = useRef(false);

  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    function handleScroll() {
      const position = getScrollPosition();

      setScrollPosition(position);
      if (position < lastPosition.current) {
        isScrollingUp.current = true;
      } else {
        isScrollingUp.current = false;
      }
      lastPosition.current = position;
    }
    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return { scrollPosition, isScrollingUp: isScrollingUp.current };
}
