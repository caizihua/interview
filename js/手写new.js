function new1(fn, ...arg) {
  const obj = Object.create(obj.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}
/*
  new做了什么？
  创建了一个新对象
  这个对象的constructor被链接到另外一个对象
  将新创建的对象作为this的上下文
  如果没有返回对象就返回this
*/
