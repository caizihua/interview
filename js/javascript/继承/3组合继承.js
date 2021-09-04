function SuperType(name) {
  this.name = name;
  this.hobbies = ["a", "b", "c"]
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  this.age = age;
  SuperType.call(this, name);
}
/* 原型链继承 */
SubType.prototype = new SuperType();
/* 重写 */
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
}

var instance1 = new SubType("李四", 18);
instance1.hobbies.push("d");
console.log(instance1.hobbies);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("张三", 19);
console.log(instance2.hobbies);
instance2.sayName();
instance2.sayAge();

/* 
缺点：当子类继承和重写创建对象的时候，写入了两个同名属性。
实例中的同名属性屏蔽了原型中的同名属性，查询时能查询但是显示undefined
 */
console.log(Object.getPrototypeOf(instance2));
console.log(Object.getPrototypeOf(instance2).hasOwnProperty("name"));
console.log(Object.getPrototypeOf(instance2)["name"]);