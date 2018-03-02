#!/usr/bin/env node

let [,, ...nums] = process.argv;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

if (nums.length != 0) {
  nums = nums.map(num => parseFloat(num));
  console.log(nums.reduce(reducer));
} else {
  console.log('0');
}

