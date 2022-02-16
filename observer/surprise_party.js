const readline = require("readline");

function getAnswer(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

// getAnswer("It this a test? ").then(console.log);

//observer
function girlfriend() {
  console.log("G: Turn off the lights");
  console.log("G: Ask for silence");
  console.log("G: Surprise!");
}

//observer
function trustee() {
  console.log("T: Checks for loud noises");
}

// subject
async function doorkeeper(interested) {
  while (true) {
    const resp = await getAnswer("Did the boyfriend arrive?(y/n/q) ");
    if (resp.toLowerCase() === "y") {
      // the obserbles are notified
      interested?.forEach((obs) => {
        obs();
      });
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

// register two observables
// the subject is the doorkeepeer
doorkeeper([girlfriend, trustee]);
