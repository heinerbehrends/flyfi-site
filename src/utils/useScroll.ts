import { useEffect, useRef, useState } from "react";
import { throttle } from "./throttle";
import { easeIn } from "./easeIn";

function getScrollPosition() {
  return window.scrollY;
}

export function getTopAndBottom(element: HTMLElement | null): TopBottom {
  if (element) {
    var { top, bottom } = element.getBoundingClientRect();
  }
  return {
    top,
    bottom,
  };
}

function isBrowser() {
  return typeof window !== "undefined";
}

type TopBottom = {
  top: number;
  bottom: number;
};

export function useScrollAnimation(topBottom: TopBottom) {
  if (!isBrowser()) {
    return { scrollPosition: 0, isScrollingUp: false };
  }
  const lastPosition = useRef(getScrollPosition());
  const isScrollingUp = useRef(false);
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = getScrollPosition();
      setScrollPosition(scrollPosition);
      if (scrollPosition < lastPosition.current) {
        isScrollingUp.current = true;
      } else {
        isScrollingUp.current = false;
      }
      lastPosition.current = scrollPosition;
    }
    const throttledScrollHandler = throttle(handleScroll, 16);
    window.addEventListener("scroll", throttledScrollHandler);
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, []);

  const hasScrolledPast = scrollPosition > topBottom.bottom;
  const isReset = isScrollingUp.current || hasScrolledPast;

  const threshold = topBottom.top === 0 ? 0 : topBottom.top - 200;
  const divisor = 66;
  const exponent = 4;

  return isReset ? 0 : easeIn(scrollPosition, threshold, divisor, exponent);
}
