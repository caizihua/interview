//reduce在我看来就是个累加器，它为每个项执行提供的函数，
//将返回的值存储在累加器accumulator中，并将这个值和下一项给回调函数
//接受的第二个参数是回调函数的第一次执行时的累加值，如果没有，默认为数组中的第一项
Array.prototype.reduce = function (fn, initial) {
  let result = initial ? initial : this[0];
  for (let i = initial ? 1 : 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    result = fn(result, this[i], i, this);
  }
  return result;
};

var arr = [0, 1, 2].reduce(function (accumulator, currentValue, index, Array) {
  return accumulator + currentValue + index + Array[0];
  //第一次：1+0+0+0 第二次：1+1+1+0 第三次3+2+2+0 返回7
}, 1);
console.log(arr);
