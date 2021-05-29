/* 没有占位符并且参数定长的柯里化 */

/* 柯里化的函数 */
function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len);
}
/* 中转工具函数 */
function _curry(fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params];
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args);
    }
  };
}
//运行：
/*
let _fn = curry(function (a, b, c, d, e) {
  console.log(a, b, c, d, e);
});
 _fn(1, 2, 3, 4, 5);
_fn(1)(2)(3, 4, 5);
_fn(1, 2)(3, 4, 5);
_fn(1, (2, 3), 4, 5); */

/* 没有占位符但是参数不定长的柯里化函数 */
function curryUnfixed(fn) {
  let args = [].slice.call(arguments, 1);
  function curried() {
    let params = [].slice.call(arguments);
    const allParams = [...args, ...params];
    return curryUnfixed.call(null, fn, ...allParams);
  }
  curried.toString = function () {
    return fn.apply(null, args);
  };
  return curried;
}

let _fn = curryUnfixed(function () {
  return [...arguments].reduce((prev, curr) => {
    return prev + curr;
  }, 0);
});

console.log(_fn(1, 2, 3, 4, 5));
/* 在node环境中输出情况，与在浏览器引擎中输出情况 */
