//find返回第一个满足测试元素的值
Array.prototype.find = function (fn, _this) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    if (fn.apply(_this, [this[i], i, this])) {
      result = this[i];
      break;
    }
  }
  return result;
};

var obj = { value: 1 };
var res = [1, 2, 3].find(function (element, index, array) {
  return element + this.value + index + array[0] >= 5;
}, obj);
console.log(res);
