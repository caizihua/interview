function SuperType() {
  this.name = "张三";
}

SuperType.prototype.getName = function () {
  return this.name
}

function SubType() {
  this.age = 18;
}

SubType.prototype.getAge = function () {
  return this.age
}

SubType.prototype = new SuperType();

var instance = new SubType();

console.log(instance.getName());

/* 
原型链继承最主要的方式就是子代的原型指向父代的实例
最主要的缺点就是引用的数据会被共享，容易造成数据的修改。还有子代不能向父代传递数据
*/