export function easeIn(
  value: number,
  threshold: number,
  divisor: number,
  exponent: number
) {
  if (value < threshold) return 0;
  return Math.pow((value - threshold) / divisor, exponent);
}
