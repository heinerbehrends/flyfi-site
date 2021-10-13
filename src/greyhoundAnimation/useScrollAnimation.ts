import { useRef, useEffect } from "react";
import { handleScrollDirection } from "./handleScrollDirection";
import { moveElement } from "./moveElement";
import { getScrollPosition, getTopAndBottom } from "./scrollUtils";

export function useScrollAnimation() {
  const greyhound = useRef<HTMLDivElement>(null);
  const lastPosition = useRef(getScrollPosition());
  const isScrollingUp = useRef(false);
  const topBottom = useRef({ top: 316, bottom: 616 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    topBottom.current = getTopAndBottom(greyhound.current);
    function handleScroll() {
      handleScrollDirection({ lastPosition, isScrollingUp });
      requestAnimationFrame(() =>
        moveElement({ greyhound, topBottom, isScrollingUp })
      );
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return greyhound;
}
