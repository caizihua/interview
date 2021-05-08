//some表示数组中如果大于等于1个元素通过给定的测试函数，就返回true，否则就是false
//参数为callback函数和thisArg
Array.prototype.some = function (fn, _this) {
  let res = false;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    if (fn.apply(_this, [this[i], i, this])) {
      res = true;
      break;
    }
  }
  return res;
};

var obj = { value: 1 };
var res = [1, 2, 3].some(function (element, index, array) {
  return element + this.value + index + array[0] >= 1;
}, obj);
console.log(res);
