//实现深拷贝的一种方法：浅拷贝+递归
//浅拷贝
function sClone(target) {
  var result = {};
  for (var i in target) {
    if (target.hasOwnProperty(i)) {
      result[i] = target[i];
    }
  }
  return result;
}

function clone(target) {
  var result = {};
  for (var i in target) {
    if (target.hasOwnProperty(i)) {
      if (typeof target[i] === "object") {
        result[i] = clone(target[i]);
      } else {
        result[i] = target[i];
      }
    }
  }
  return result;
}
var obj = { a: 3, b: { c: { d: 4 } } };
var deepClone = clone(obj);
var shallowClone = sClone(obj);
console.log(deepClone.b.c === obj.b.c);
console.log(shallowClone.b.c === obj.b.c);
