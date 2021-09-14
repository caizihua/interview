function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}
/*
  new做了什么？
  创建了一个新的空的对象{}
  这个对象的__proto__指向了构造函数的原型
  将新创建的对象作为this的上下文
  返回的是对象就返回对象而不是this，返回的是原始类型就忽略
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jack = _new(Person, "jack", 18);
const rose = new Person("rose", 19);
console.log(jack, rose);
console.log(Object.getPrototypeOf(jack) === Person.prototype);
/* 
分析：
首先Object.create()将obj的隐式原型连接我们的构造函数的原型 现在obj相当于是fn的实例对象
于是现在的obj是一个新对象，带着原型和属性
将this指向新对象，并执行函数
判断返回对象：如果ret是个对象那么返回ret，如果不是那么返回this:这个我们创建的对象
*/