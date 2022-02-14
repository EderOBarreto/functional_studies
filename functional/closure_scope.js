const x = 3;
// const sumXPlus3 = () => x + 3;

function out() {
  const x = 97;
  function sumXPlus3() {
    return x + 3;
  }
  return sumXPlus3();
}

// module.exports = sumXPlus3;
module.exports = out;
