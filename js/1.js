var obj = {
  length: 2,
  splice: Array.prototype.splice,
};
console.log(obj);
console.log(Array.isArray(obj));
console.log(Array.isArray([]));
