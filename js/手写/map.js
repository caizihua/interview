// map方法将数组中的每项都执行一次提供的函数，并将结果作为返回值传回给新数组
// Object.prototype.hasOwnProperty()返回一个布尔值，查看当前时候具有指定的键
Array.prototype.map = function (fn, _this) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    result.push(fn.apply(_this, [this[i], i, this]));
  }
  return result;
};
// map接受两个参数，一个callback回调函数，其中参数有currentValue，index，array
//第二个参数可选为执行callback的this
var obj = {
  value: 1,
};
var arr = [3, 2, 1].map(function (currentValue, index, Array) {
  return this.value + currentValue + index + Array[0];
}, obj);
console.log(arr);
