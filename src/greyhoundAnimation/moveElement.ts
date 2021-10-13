import { MutableRefObject, RefObject } from "react";
import { easeIn } from "./scrollUtils";

type MoveElementArgs = {
  greyhound: RefObject<HTMLElement>;
  topBottom: MutableRefObject<{
    top: number;
    bottom: number;
  }>;
  isScrollingUp: MutableRefObject<boolean>;
};

export function moveElement({
  greyhound,
  topBottom,
  isScrollingUp,
}: MoveElementArgs) {
  if (greyhound.current === null) return;
  const scrollPosition = window.scrollY;
  const hasScrolledPast = scrollPosition > topBottom.current.bottom;
  const offset = easeIn({
    scrollPosition,
    divisor: 80,
    exponent: 4,
    isReset: isScrollingUp.current || hasScrolledPast,
  });
  greyhound.current.style.transform = `translateX(${offset}px)`;
}
