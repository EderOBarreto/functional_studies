function generateNums() {
  return {
    init(fn, timeInterval = 1000) {
      let num = 0;
      const interval = setInterval(() => {
        fn(num++);
      }, timeInterval);

      return {
        stop() {
          clearInterval(interval);
        },
      };
    },
  };
}

const temp1 = generateNums();
const exec1 = temp1.init((n) => {
  console.log(`#1: ${n * 2}`);
});

const temp2 = generateNums();
const exec2 = temp2.init((n) => {
  console.log(`#2: ${n + 100}`);
}, 2000);

setTimeout(() => {
  exec1.stop();
  exec2.stop();
}, 10000);
