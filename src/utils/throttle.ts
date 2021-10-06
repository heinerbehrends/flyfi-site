export function throttle(callback: Function, limit: number) {
  // initially were not waiting
  var wait = false;
  // return a throtttled function
  return () => {
    // if we're not waiting invoke the callback and set wait to true
    if (!wait) {
      callback();
      wait = true;
      // set wait to false after specified interval
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
