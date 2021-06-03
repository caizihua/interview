function judge(a, b) {
  return a !== b;
}
console.log(judge(NaN, NaN));
console.log(judge(1, 1));
/* NaN最显著的特点就是自己与自己不相等*/
console.log("---------");
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN(1));
/* 对于isNaN，表示的意思是只要不是数字都是true */
console.log("---------");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(1));
