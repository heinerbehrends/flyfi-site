import { MutableRefObject } from "react";
import { getScrollPosition } from "./scrollUtils";

type HandleScrollDirectionArgs = {
  lastPosition: MutableRefObject<number>;
  isScrollingUp: MutableRefObject<boolean>;
};

export function handleScrollDirection({
  lastPosition,
  isScrollingUp,
}: HandleScrollDirectionArgs) {
  const scrollPosition = getScrollPosition();
  if (scrollPosition < lastPosition.current) {
    isScrollingUp.current = true;
  } else {
    isScrollingUp.current = false;
  }
  lastPosition.current = scrollPosition;
}
