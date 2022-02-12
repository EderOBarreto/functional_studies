// setTimeout(() => {
//   console.log("Running");
//   setTimeout(() => {
//     console.log("Running");

//     setTimeout(() => {
//       console.log("Running");
//     }, 2000);
//   }, 2000);
// }, 2000);

const waitFor = (time = 2000) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Running promise...");
      resolve("OMG");
    }, time);
  });
};

let p = waitFor().then(waitFor).then(waitFor);
