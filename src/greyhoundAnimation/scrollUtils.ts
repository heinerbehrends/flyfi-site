export function getScrollPosition() {
  if (typeof window === "undefined") return 0;
  return window.scrollY;
}

export function getTopAndBottom(element: HTMLElement | null) {
  if (element) {
    var { top, bottom } = element.getBoundingClientRect();
  }
  return {
    top,
    bottom,
  };
}

type EaseInArgs = {
  scrollPosition: number;
  threshold?: number;
  isReset?: boolean;
  divisor: number;
  exponent: number;
};

export function easeIn({
  isReset = false,
  scrollPosition = 0,
  threshold = 0,
  divisor = 1,
  exponent = 1,
}: EaseInArgs) {
  if (scrollPosition < threshold || isReset) return 0;
  return Math.pow((scrollPosition - threshold) / divisor, exponent);
}
