let nums = [1, 2, 3];

nums.forEach(function (value, index, arr) {
  arr[index] = value + 1; 
});

console.log(nums);