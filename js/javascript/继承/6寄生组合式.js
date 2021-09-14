function inheritProto(SubType, SuperType) {
  /* 创建父类的副本，将副本__proto__指向原型 */
  var prototype = Object.create(SuperType.prototype);
  /* 副本缺失constructor，手动添加给SubType */
  prototype.constructor = SubType;
  /* 将原型赋给子类的原型 */
  SubType.prototype = prototype;
  /* 显式地创建将SubType作为SuperType的实例 */
}

function SuperType(name) {
  this.name = name;
  this.hobbies = ["a", "b", "c"];
}
SuperType.prototype.say = function () {
  console.log(this.name);
}

function SubType(name, age) {
  //继承
  SuperType.call(this, name);
  this.age = age;
}

inheritProto(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age);
}

var instance1 = new SubType("张三", 19);
var instance2 = new SubType("李四", 20);

instance1.sayAge();
instance1.say();
instance2.sayAge();
instance2.say();

instance1.hobbies.push("d");
console.log(instance1.hobbies);