export function throttle(callback: Function, limit: number) {
  var wait = false;
  return () => {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
