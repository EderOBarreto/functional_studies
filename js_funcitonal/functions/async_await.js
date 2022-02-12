const waitFor = (time = 2000) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("OMG");
    }, time);
  });
};

// waitFor(2000)
//   .then(() => console.log("Running promise 1..."))
//   .then(waitFor)
//   .then(() => console.log("Running promise 2..."))
//   .then(waitFor)
//   .then(() => console.log("Running promise 3..."));

function returnValue() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function fastExecution() {
  return 20;
}

const execute = async () => {
  const value = await fastExecution();

  await waitFor(1500);
  console.log(`Running promise ${value}...`);
  await waitFor(1500);
  console.log(`Running promise ${value + 1}...`);
  await waitFor(1500);
  console.log(`Running promise ${value + 2}...`);

  return value + 3;
};

async function trueExecution() {
  const value = await execute();
  console.log(value);
}

trueExecution();
// execute().then(console.log);
