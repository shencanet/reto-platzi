const f = (arr) => Array.isArray(arr) && !arr.length;
console.log(f([1, 2, 3])); //?
console.log(f([0])); //?
console.log(f([])); //?
