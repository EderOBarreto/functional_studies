const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// #3 - Recursive
const sum = (arr, total = 0) => {
  if (arr.length === 0) {
    return total;
  }
  return sum(arr.slice(1), total + arr[0]);
};

const total = sum(nums);

// #2 - Reduce
// const total = nums.reduce((a, b) => a + b);

// #1 - Loop -> Mutable data
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }

console.log(total);
