/* 手写Object.create
  返回一个新对象
  这个新对象的隐式原型指向create中的参数
  换言之返回的新对象就是参数的实例对象
*/

Object.prototype.myCreate = function () {
  function Fun() {}
  Fun.prototype = arguments[0];
  return new Fun();
};
/* 不推荐以下做法 */
Object.prototype.myCreate2 = function () {
  let obj = {};
  obj.__proto__ = arguments[0];
  return obj;
};

const obj = {
  name: "jack",
};

const jack = Object.myCreate(obj);
const jack2 = Object.myCreate2(obj);
console.log(jack.name);
console.log(jack2.name);
