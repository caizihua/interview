//filter在我看来就是过滤器，通过给定的函数过将符合的项组成函数返回
//值得注意的是：filter是将数组中的项组成数组返回
Array.prototype.filter = function (fn, _this) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    fn.apply(_this, [this[i], i, this]) && result.push(this[i]);
  }
  return result;
};

var obj = {
  value: 1,
};
var arr = [1, 2, 3, 4, 5].filter(function (element, index, array) {
  return this.value + element + index + array[0] >= 7;
}, obj);
console.log(arr);
