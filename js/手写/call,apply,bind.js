Function.prototype.myCallSample = function (obj, ...args) {
  //obj是我们要指向的对象,如果未传则指向window
  obj = obj || window;
  obj.say = this;
  return obj.say(...args);
};

Function.prototype.myCall = function (thisArg, ...args) {
  const fn = Symbol("fn"); // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || window; // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this; // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args); // 执行当前函数
  delete thisArg[fn]; // 删除我们声明的fn属性
  return result; // 返回函数执行结果
};

Function.prototype.myApply = function (thisArg, args) {
  const fn = Symbol("fn"); // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || window; // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this; // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args); // 执行当前函数
  delete thisArg[fn]; // 删除我们声明的fn属性
  return result; // 返回函数执行结果
};

var obj1 = {
  name: "jack",
  say() {
    console.log(`my name is ${this.name}`);
  },
  write(a, b) {
    console.log(`I\`m ${this.name},${a} ${b}`);
  },
};

var obj2 = {
  name: "rose",
};

obj1.say.myCallSample(obj2);
obj1.say.myCall(obj2);
obj1.write.myApply(obj2, ["hello", "world"]);
