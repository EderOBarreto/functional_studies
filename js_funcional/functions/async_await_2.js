function getNumber(min, max, blocklist) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor + min);
    if (blocklist.includes(random)) {
      reject("Repeated number!");
    }
    resolve(random);
  });
}

async function draw(qtdeNums) {
  try {
    const nums = [];
    for (let _ of Array(qtdeNums).fill()) {
      nums.push(await getNumber(1, 60, nums));
    }

    return nums;
  } catch (e) {
    throw "What a problem";
  }
}

draw(8).then(console.log).catch(console.log);

// getNumber(1, 5, [1, 2, 4]).then(console.log).catch(console.log);
