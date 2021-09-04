function SuperType() {
  this.name = "张三";
}

SuperType.prototype.getVal = function () {
  console.log(this.name);
}

function SubType() {
  this.age = 18;
  SuperType.call(this);
}

var instance = new SubType();
instance.name = "李四";
/* instance.getVal(); */
console.log(instance.name);

/* 
只能继承父类的实例属性和方法，不能继承原型属性和方法
每个子类都有父类的副本，影响性能
*/