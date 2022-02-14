const sort = (arr) => {
  return [...arr].sort();
};
const nums = Object.freeze([3, 1, 7, 9, 4, 6]);

const orderedNums = sort(nums);
console.log(nums, orderedNums);
