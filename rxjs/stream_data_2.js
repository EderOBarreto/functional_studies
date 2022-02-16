function generateElements(arr) {
  return {
    init(fn) {
      let index = 0;
      const interval = setInterval(() => {
        if (index >= arr.length) {
          clearInterval(interval);
        } else {
          fn(arr[index]);
          index++;
        }
      }, 1000);

      return {
        stop() {
          clearInterval(interval);
        },
      };
    },
  };
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temp1 = generateElements(nums);

const exec1 = temp1.init((n) => {
  console.log(2 ** n);
});

setTimeout(() => {
  exec1.stop();
}, 7000);
